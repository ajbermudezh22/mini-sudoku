# Mini Sudoku: AI Studio demo app

This app is part of the **Agents Live** station at the AI Studio (Lift Conference 26).
Visitors say what the app should do next, and Claude Code adds the feature live while they watch.

## Rules for every change
- Plain HTML, CSS and JavaScript. No frameworks, no build step, no npm dependencies, no external APIs.
- It must work well on a phone (360 px wide and up) and in light and dark mode.
- Keep the Lift look: use the color tokens at the top of `style.css`, never hard-coded colors.
- One feature per change. Keep the code small and readable, so visitors can follow the diff.
- No personal data, no tracking, no keys or secrets.
- Text in the app is in English.

## Files
- `index.html`: the page
- `puzzles.js`: the puzzles (every puzzle must have exactly one solution)
- `app.js`: the game logic
- `app.css`: styles for this app
- `style.css`: shared Lift look and color tokens

## Run it locally
```
npx live-server --port=8080     # reloads the browser on every save
# or: python3 -m http.server 8080
```

## Visitor workflow (always follow this)
Every visitor gets their own version. `main` stays the clean starting point.

1. Start from a clean main: `git checkout main && git pull`.
2. Create the visitor's branch: `git checkout -b visitor/<first-name>-<short-idea>`
   (lowercase, letters, digits and hyphens only, for example `visitor/anna-tip-slider`).
   Use the branch name you are given in the prompt if there is one.
3. Tell the visitor your plan in 3 short bullet points, then make the change.
4. Commit, then push: `git push -u origin HEAD`.
5. Open a pull request into `main` titled `<First name>: <idea>`.
6. End by telling the visitor their link, which goes live about a minute after the push:
   `https://ajbermudezh22.github.io/mini-sudoku/v/<first-name>-<short-idea>/`

Never push to `main` and never merge. A human picks the best ideas and merges them later.
Use first names only: the repo is public.
