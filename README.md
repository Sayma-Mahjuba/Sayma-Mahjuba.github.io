# Sayma Mahjuba — Academic Portfolio

A minimal, scholarly academic portfolio built with static HTML, CSS, and vanilla JavaScript — designed for Ph.D. applications and free hosting on **GitHub Pages**.

## Files
- `index.html` — Main academic portfolio page (Deep Navy theme, light default + dark mode toggle)
- `cv.html` — Printable Academic CV page (supports browser **Print / Save as PDF**)
- `styles.css` — Responsive academic stylesheet with light/dark CSS variables
- `script.js` — Theme toggle, active section highlighting, mobile menu, and CV placeholder feedback
- `favicon.svg` — Deep Navy `SM` monogram icon
- `.nojekyll` — Tells GitHub Pages to serve static files directly

## Quick Customizations Later
1. **Update your headshot photo**: Replace `assets/profile.png` with any newer portrait photo (keep the same filename or update the `src` in `index.html`).
2. **Add your CV PDF**: Place your PDF at `assets/Sayma_Mahjuba_CV.pdf`, then update the `Download CV (PDF)` link in `index.html` from `href="#"` to `href="assets/Sayma_Mahjuba_CV.pdf" download` and remove `data-cv-placeholder`.
3. **Add Email / GitHub / Google Scholar**: Uncomment the optional link lines in `index.html` (under `.hero-links`) and `cv.html` (under `.cv-contact-line`).

## Free Hosting on GitHub Pages
1. Create a public GitHub repository named `Sayma-Mahjuba.github.io` (this gives you the clean academic URL `https://sayma-mahjuba.github.io`).
2. Push this folder to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial academic portfolio"
   git branch -M main
   git remote add origin https://github.com/Sayma-Mahjuba/Sayma-Mahjuba.github.io.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**:
   - Under **Source**, choose **Deploy from a branch**
   - Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
4. Within 1–2 minutes, your site will be live for free at `https://sayma-mahjuba.github.io`!
