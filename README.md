# Jony Roy | Portfolio

My personal portfolio: a single static page showing who I am, what I've built and where to find my code. I'm a first-year CSE student building practical web tools, apps and Telegram bots.

GitHub: [jony99jrn](https://github.com/jony99jrn)

## What's on the page

- **Loading screen** with an animated progress bar
- **Hero** with buttons to jump to my work or open my GitHub
- **About** section
- **Projects** you can filter by type (Web apps, Tools, Bots) and search by name
- **Skills** with a "?" tooltip showing where I've used each one
- **Contact** section with a copy-link button and a star rating

## Built with

Plain HTML, CSS and JavaScript. No framework, no build step, no package install.

The interactive controls (button, progress bar, tabs, input, tooltip, rating and toast) come from [Sakuga VFX](https://github.com/finktheartist/sakuga-vfx) by finktheartist, which makes ordinary UI controls react like anime. Fonts are Manrope and JetBrains Mono from Google Fonts.

## Project structure

```
index.html        the whole site: markup, styles and page script
sakuga/
  button.js       one file per control, each is self-contained
  progress.js
  tabs.js
  input.js
  tooltip.js
  rating.js
  toast.js
  LICENSE         MIT license of Sakuga VFX (keep this file)
```

## Run it locally

From the project folder:

```
python3 -m http.server 8000
```

Then open http://localhost:8000/

## Edit the content

Everything you'll want to change is in the `<script>` block near the bottom of `index.html`.

| What | Where |
|---|---|
| GitHub link | `GITHUB` constant |
| Optional "Email me" button | `EMAIL` constant (leave empty to hide it) |
| Projects | `projects` array: add one object per project |
| Skills and their hints | `skills` array |

A project entry looks like this:

```js
{ title: 'My Project', type: 'Web app',   // 'Web app', 'Tool' or 'Bot'
  desc: 'One or two sentences about it.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  links: [['Live', 'https://example.com'], ['Code', 'https://github.com/jony99jrn/repo']] }
```

Colors are CSS variables at the top of the `<style>` block (`--bg`, `--ink`, `--orange` and so on). The `--sk-*` variables recolor the Sakuga controls.

## Deploy

**GitHub Pages**

1. Push this folder to a GitHub repository.
2. Go to **Settings, Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then `main` and `/ (root)`.
4. Save. The site goes live at `https://jony99jrn.github.io/<repo-name>/`.

**Vercel**

1. Import the repository on [vercel.com](https://vercel.com/new).
2. Leave the build settings empty and deploy.

## Notes

- The Sakuga controls were tested by their author in Chromium. Other browsers may differ.
- With reduced motion turned on in the system settings, the effects and loading screen are skipped.

## Credits and license

- Interactive controls: [Sakuga VFX](https://github.com/finktheartist/sakuga-vfx), MIT licensed. The license is in `sakuga/LICENSE`.
- Everything else: © 2026 Jony Roy.
