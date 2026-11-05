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

## Ship it
Work on a branch, open a pull request, and let a human merge it.
GitHub Pages deploys `main` to https://ajbermudezh22.github.io/mini-sudoku/ about a minute after the merge.
