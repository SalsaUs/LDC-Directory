# Land Development Consultants website

Static site (HTML, CSS, JS). No build step.

## Publish on GitHub Pages
1. Upload these files to the **root** of your repository (index.html must be at the top level).
2. Repo **Settings → Pages → Deploy from a branch → main / (root)** → Save.
3. After a minute your site is live at `https://<username>.github.io/<repo>/`.

## Things to edit
- Email, phone: `index.html` (footer) and `RECEIVING_EMAIL` in `js/main.js`
- Colours: variables at the top of `css/styles.css`
- Services list: the `#services` section in `index.html` (and the form dropdown)
- Form: currently opens an email draft. For direct delivery, create a free Formspree form and
  set `<form action="https://formspree.io/f/XXXX" method="POST">`, then remove the submit handler in `js/main.js`.
