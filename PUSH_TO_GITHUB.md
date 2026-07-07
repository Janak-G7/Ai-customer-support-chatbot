# Push This Project to GitHub — 3 Steps

You need to do this yourself because it uses your GitHub login. It takes 5 minutes.

---

## Step 1 — Create the repo on GitHub

1. Go to https://github.com/new
2. Repository name: **`ai-customer-support-chatbot`**
3. Description: `AI customer support chatbot built with Next.js + OpenAI. Live demo included.`
4. Set to **Public** (clients need to see it)
5. Do NOT check "Add a README" or "Add .gitignore" (we already have them)
6. Click **Create repository**

GitHub will show you a page with commands. Ignore those and use the ones below.

---

## Step 2 — Install Git (if you don't have it)

Open Command Prompt or PowerShell and check:

```
git --version
```

If it says "not recognized," download Git from https://git-scm.com/download/win and install it (accept all defaults).

---

## Step 3 — Push the code (copy-paste these 5 commands)

Open Command Prompt in the project folder. Easiest way:

- Open File Explorer → go to `C:\Users\futur\Claude\Projects\Janak\ai-chatbot-portfolio`
- Click the address bar → type `cmd` → Enter

Then run these commands one by one (replace `YOUR_USERNAME` with your actual GitHub username):

```bash
git init
git add .
git commit -m "Initial commit: AI customer support chatbot"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-customer-support-chatbot.git
git push -u origin main
```

The last command will ask for your GitHub username and password.

**⚠️ For the password, use a Personal Access Token, NOT your normal password.**

Get one here: https://github.com/settings/tokens
- Click "Generate new token (classic)"
- Name: "upwork-projects"
- Expiration: 90 days
- Scope: check the **`repo`** box
- Generate, then copy the token (starts with `ghp_...`)
- Paste it as the password when git asks

Save the token in a notepad — GitHub will only show it once.

---

## Step 4 — Verify

Refresh your GitHub repo page. You should see all your files there.

Copy the repo URL — you'll use it on Upwork and Vercel.

---

## Next: Deploy to Vercel (for the live link)

1. Go to https://vercel.com/signup — sign up with GitHub (free)
2. Click **Add New → Project**
3. Import your `ai-customer-support-chatbot` repo
4. Before deploying: expand **Environment Variables** and add:
   - Name: `OPENAI_API_KEY`
   - Value: your OpenAI key (starts with `sk-...`)
5. Click **Deploy**

In ~90 seconds you'll get a live URL like `https://ai-customer-support-chatbot.vercel.app` — that's your portfolio proof.

---

## What you have when done

- ✅ Public GitHub repo (proves you write real code)
- ✅ Live working demo URL (proves it actually works)
- ✅ Ready to add to Upwork portfolio

Both links go into your Upwork portfolio piece.
