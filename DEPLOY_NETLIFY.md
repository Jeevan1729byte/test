# Deploying SheStylish to Netlify

Everything runs in the browser — no backend, no database.
You have two deployment options. Pick one.

---

## Option A — Fastest: drag-and-drop the built site

1. Download **`/app/shestylish-netlify.zip`** (1 MB).
2. Unzip it locally. You'll see an `index.html`, a `static/` folder and a `_redirects` file.
3. Go to https://app.netlify.com/drop
4. **Drag the unzipped folder** onto the drop zone.
5. Netlify gives you a free URL like `https://shestylish-xyz.netlify.app` in ~10 seconds.
6. In *Site settings → Domain management* you can connect your own domain (e.g. `shestylish.com`).

That's it — no build step, no env vars needed.

---

## Option B — Continuous deploy from GitHub

1. Push the `/app/frontend` folder to a GitHub repo (it already contains a `netlify.toml`
   in the repo root `/app/netlify.toml` that tells Netlify what to build).
2. In Netlify: **Add new site → Import an existing project → GitHub → pick your repo**.
3. Netlify auto-detects from `netlify.toml`:
   - **Base directory:** `frontend/`
   - **Build command:** `yarn build`
   - **Publish directory:** `frontend/build`
4. Click **Deploy site**. Every `git push` after that re-deploys automatically.

No environment variables are required — the site is fully static.
If Netlify warns about a missing `REACT_APP_BACKEND_URL`, the included `netlify.toml`
already sets a harmless placeholder value to silence the warning.

---

## Updating content later

All the editable content lives in these files:

| What | File |
|------|------|
| WhatsApp number & message | `/app/frontend/src/lib/brand.js` |
| Collection names, prices, images | `/app/frontend/src/lib/productImages.js` |
| Instagram handle / link | `/app/frontend/src/lib/brand.js` |
| Testimonials | `/app/frontend/src/components/Testimonials.jsx` |
| Hero copy | `/app/frontend/src/components/Hero.jsx` |

After editing, run `yarn build` inside `/app/frontend` and re-deploy (drag-and-drop the new
`build/` folder, or `git push` if you're on Option B).
