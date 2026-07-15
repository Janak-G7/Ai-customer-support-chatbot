# AI Chatbot Portfolio Project

A working, deployable AI customer-support chatbot that answers questions from a company's documents. Built with **Next.js 14**, **OpenAI GPT-4o mini**, and vector-search retrieval. Use this as your Upwork portfolio proof.

**Demo persona:** Acme Coffee Roasters (fictional coffee brand). Swap in any real docs to customize.

---

## What This Demonstrates to Clients

- Custom AI chatbot with an embedded knowledge base
- Semantic search using OpenAI embeddings
- Clean, production-ready Next.js frontend
- Deployable to Vercel in 5 minutes
- Cost-efficient (uses `gpt-4o-mini` + `text-embedding-3-small`)

---

## Setup — 5 Minutes

### 1. Install dependencies

```bash
npm install
```

### 2. Add your OpenAI key

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and paste your OpenAI API key. Get one at https://platform.openai.com/api-keys ($5 minimum credit).

### 3. Run locally

```bash
npm run dev
```

Open http://localhost:3000

---

## Deploy to Vercel (For Portfolio)

1. Push this folder to a **new GitHub repo** (public, so clients can view the code).
2. Go to https://vercel.com/new and import the repo.
3. Add `OPENAI_API_KEY` in Vercel's Environment Variables during import.
4. Click Deploy. You'll get a live URL like `https://acme-coffee-ai.vercel.app`.

**Use this live URL as your Upwork portfolio link.**

---

## Portfolio Screenshots to Take

1. **Homepage screenshot** — chatbot header + suggestion buttons visible
2. **Full conversation screenshot** — user asks about shipping, bot answers correctly with details from the docs
3. **"Fallback" screenshot** — user asks something NOT in the docs, bot honestly says it doesn't know (proves it's not hallucinating)
4. **Mobile view screenshot** — resize browser to phone width and screenshot

Upload all 4 to your Upwork portfolio piece, plus the live Vercel URL.

---

## Skill Tags (Top 5)

1. Chatbot Development
2. OpenAI API
3. Next.js
4. AI App Development
5. Full-Stack Development

---

## Cost to Run

- OpenAI embeddings: ~$0.02 per 1M tokens (cheap)
- GPT-4o mini: ~$0.15 per 1M input tokens
- Vercel: free tier is enough for demo traffic

---

Built by **Janak Gopalakrishnan**. Ping me on Upwork to build one for your business.
