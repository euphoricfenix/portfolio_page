# Portfolio

Personal portfolio built around one idea: the work is the plumbing that gets data from a source to somewhere it's useful, so the site is drawn as an irrigation system. Static HTML/CSS, no framework, no build step.

**Live:** https://euphoricfenix.github.io/portfolio_page/

## Pages

| File | Is | Shows |
|---|---|---|
| `index.html` | The Land | The pipeline scene — source, extract, validate, transform, load, storage |
| `projects.html` | The Fields | Projects, with a scarecrow standing in for validation |
| `experience.html` | Seasons | Four roles as seed, spring, summer, harvest |
| `skills.html` | The Toolshed | Tech stack, plus a tractor making a pass per commit |

Shared across all four: `style.css` and `app.js` (about 8 lines, wiring the detail modals).

## Running locally

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Notes

All illustration is original SVG built from geometric primitives — no image assets, no icon fonts. Animation is CSS only and respects `prefers-reduced-motion`. Project and role detail opens in native `<dialog>` modals, so keyboard and focus handling come from the platform.

## Contact

- LinkedIn: [virajvirk](https://linkedin.com/in/virajvirk)
- Email: virajvirk7@gmail.com
