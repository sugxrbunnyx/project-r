# Project R — starter prototype

This is the first front-end prototype for Project R. It is a responsive browser UI with:
- Discover page and sample experience cards
- Block-style original avatar preview and basic customisation
- Creator Studio concept screen
- Demo RUX wallet and reward explanation
- Safety-by-design feature page

## Run it

1. Install Node.js (LTS).
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address Vite prints (usually http://localhost:5173).

To build a production front-end bundle, run `npm run build`.

## Important: what is and is not working yet

This is a front-end prototype, not a complete Roblox-scale platform. The buttons and navigation demonstrate the intended flows, but:
- There are no real 3D game worlds or physics yet.
- There is no account database or real multiplayer server yet.
- RUX is only a local demo balance; it has no cash value.
- There is no real moderation service yet. Do not launch public chat or user-generated public worlds until reporting, moderation, privacy and safeguarding systems are implemented and tested.

## Suggested build order

1. Replace the CSS avatar preview with an original 3D avatar using a web 3D engine.
2. Add secure accounts and age-appropriate profiles.
3. Build one small playable world and authoritative multiplayer servers.
4. Add creator tools and moderated publishing.
5. Implement server-side RUX rewards with anti-bot and anti-exploit controls.
6. Add the desktop app wrapper after the browser version is stable.

The platform should use original branding, code, models, animations and item designs. Korblox/headless can be inspiration for distinct original prestige items, not copied Roblox assets.


## Publish with GitHub Pages

This project includes a GitHub Actions workflow. Upload the project files to a GitHub repository, make sure the default branch is `main`, then open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. Push a commit to `main`; the workflow builds the site and deploys the `dist` folder.

The Vite base path is relative (`./`) so assets work on a GitHub Pages project URL.
