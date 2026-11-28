# Journal posts (MOAI)

One file per post: `content/blog/<slug>.json`. Commit it to `main` and the `deploy` workflow builds the site and
publishes it (Hostinger serves the `hostinger` branch). No other file needs changing: the post page, the /blog list, the outlet page,
the sitemap and structured data all pick it up (the build also writes a plain HTML copy of each post so search
engines read it without JavaScript).

Copy an existing post and change:

- `slug` — must equal the file name (without `.json`); becomes `/blog/<slug>/`, or `/locations/<outlet>/blog/<slug>/` with `"outlet"`.
- `title`, `heroTitle` (short hero words), `description` (search snippet, ~155 characters).
- `datePublished` — `YYYY-MM-DD`. Newest posts show first.
- `image` (a file under `public/`, e.g. `/food/3.jpg`) and `imageAlt`.
- `keywords` — a list of phrases.
- `sections` — each `{ "heading": "…", "paragraphs": ["…"], "list": ["…"] }` (`list` optional).

Optional: `"outlet": "jayanagar"` or `"koramangala"` (an outlet post; must be about that outlet, never a name-swapped copy of another post) and `author`.

Facts that can change are written as placeholders, filled in from `src/data/outlets.json` at build time:
`{{jayanagarPhone}}`, `{{jayanagarAddress}}`, `{{jayanagarHours}}`, `{{koramangalaPhone}}`, `{{koramangalaAddress}}`, `{{koramangalaHours}}`.
A typo in a placeholder, a missing field or a slug/file mismatch fails the build, so a broken post never goes live.
