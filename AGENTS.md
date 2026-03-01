# AGENTS.md

## Cursor Cloud specific instructions

This is a static portfolio website (HTML + CSS + JavaScript vanilla) with no build system, no package manager, and no external dependencies to install.

### Running the site

Serve the files with any static HTTP server from the repo root:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080/` in Chrome.

### Known issues

- **Path mismatch**: `index.html` references `css/style.css`, `js/script.js`, and `img/ele.jpg`, but the actual files are at `styles/style.css`, `scripts/script.js`, and `images/eu.jpg`. The CSS, JS, and image will not load until these paths are corrected in `index.html` or the directories are renamed.

### Lint / Test / Build

- There is no linter, test framework, or build system configured in this repo.
- To validate HTML you can use an external tool like `npx html-validate index.html` (not pre-installed).
