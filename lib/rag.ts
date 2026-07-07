import OpenAI from "openai";
import { KNOWLEDGE_DOCUMENTS } from "./knowledge";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// In-memory vector store — good enough for demos and small knowledge bases.
// For production, swap this for Pinecone, Chroma, or Supabase pgvector.
type VectorEntry = { text: string; embedding: number[] };
let VECTOR_STORE: VectorEntry[] | null = null;

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

async function embed(text: string): Promise<number[]> {
  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return res.data[0].embedding;
}

async function buildStore(): Promise<VectorEntry[]> {
  const entries: VectorEntry[] = [];
  for (const doc of KNOWLEDGE_DOCUMENTS) {
    const embedding = await embed(doc);
    entries.push({ text: doc, embedding });
  }
  return entries;
}

async function getStore(): Promise<VectorEntry[]> {
  if (!VECTOR_STORE) VECTOR_STORE = await buildStore();
  return VECTOR_STORE;
}

export async function retrieveContext(question: string, topK = 3): Promise<string[]> {
  const store = await getStore();
  const qEmbedding = await embed(question);
  const scored = store.map((entry) => ({
    text: entry.text,
    score: cosineSimilarity(qEmbedding, entry.embedding),
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK).map((s) => s.text);
}

export async function answerQuestion(question: string): Promise<string> {
  const context = await retrieveContext(question);
  const systemPrompt = `You are a helpful customer support assistant for Acme Coffee Roasters.
Answer the user's question using ONLY the context below. If the answer isn't in the context,
say "I don't have that information — please contact support@acmecoffee.in." Be concise and friendly.

Context:
${context.join("\n\n")}`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: question },
    ],
    temperature: 0.3,
  });

  return completion.choices[0].message.content ?? "I couldn't generate a response.";
}
