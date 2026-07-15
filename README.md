# msctpteltd.com

Official website for **MSC Pte. Ltd.** — a Singapore-based import and distribution
company supplying quality foods, groceries and consumer goods.

Static site hosted on **GitHub Pages** and served at **https://msctpteltd.com**.

## Structure
- `index.html` — landing page
- `privacy.html`, `terms.html` — legal pages
- `404.html` — not-found page
- `assets/` — `style.css`, `favicon.svg`, `social-card.svg`
- `CNAME` — custom domain (`msctpteltd.com`)

## Local preview
Any static server works, e.g.:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy
Pushing to the `main` branch publishes automatically via GitHub Pages.

## Editing company details
Contact details (address, phone, email) appear in `index.html`, `privacy.html`
and `terms.html`. Update them there and push to `main`.
