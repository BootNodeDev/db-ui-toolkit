# dAppBooster UI Toolkit

[dAppBooster](https://github.com/BootNodeDev/dAppBooster) common UI components

## Installation

- Clone the repo following the usual steps:

```bash
git clone git@github.com:BootNodeDev/db-ui-toolkit.git
```

- Install

```bash
nvm use

pnpm i
```

## Development

- We use [tsup](https://tsup.egoist.dev/) to bundle the components.
- Clone and install `dAppBoosterLandingPage` https://github.com/BootNodeDev/dAppBoosterLandingPage (this version uses all the components from `db-ui-toolkit`)

For example:

```bash
git clone https://github.com/BootNodeDev/dAppBoosterLandingPage dAppBoosterWeb3ToolkitTest

cd dAppBoosterUIToolkitTest

nvm use

cp .env.example .env.local

pnpm i
```

- Remove `db-ui-toolkit` from your local copy of `dAppBoosterLandingPage`:

```bash
pnpm remove db-ui-toolkit
```

- Install your local copy of `db-ui-toolkit` on `dAppBoosterLandingPage` (i.e.: `pnpm i /users/yourusername/db-ui-toolkit`)

```bash
pnpm i <path_to_where_db-ui-toolkit_is>
```

Now you can run `dAppBoosterLandingPage` locally using `pnpm dev` and it'll use your local build of `db-ui-toolkit`.

---

You can try the following workflow:

- One console running `dAppBoosterLandingPage` (`pnpm dev` will open it on http://localhost:5173/)
- A second one for watching `dAppBooster UI Toolkit`'s changes, also using `pnpm dev`

## Deployment

- I suggest working in a branch different to `main` for this, i.e.: `feat/new-feature`
- Make any changes you want.
- Test your changes. Be thorough. Make sure that everything works by itself in the preview AND in `dAppBooster`.
- Update the version in `package.json`.
- Run `pnpm build`.
- Commit and push your changes, and merge into `main`
- Once everything is stable and ready for release [tag a new version](https://semver.org/) so you don't break everything for everyone.
- Finally, run `npm publish` to deploy your changes to NPM.
