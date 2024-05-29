# db-ui-toolkit

dAppBooster common UI components

## Usage

- Clone the repo following the usual steps.
- `nvm use`
- `pnpm i`
- `pnpm dev` will run a preview in `http://localhost:1208`
- `pnpm build` builds the output in `/dist`

## Development

- Follow the steps above (clone the repo, etc)
- Install dAppBooster locally https://github.com/BootNodeDev/dAppBooster (I recommend to use a different folder, for example `dAppBooster+dbUIToolkit`)

Remove `db-ui-toolkit` from `dAppBooster+dbUIToolkit` if it's already installed:

- `pnpm remove db-ui-toolkit`

Add your local copy of `db-ui-toolkit` to `dAppBooster+dbUIToolkit`

- `pnpm add <path_to_where_the_library_is>` (for example: `pnpm add /users/yourusername/db-ui-toolkit`)

Now you can run dAppBooster locally using `pnpm dev` and it'll use your local build of `bn-ui-toolkit`

Don't forget to `pnpm build` the toolkit when you want to see your changes reflected in dAppBooster.

## Deployment

- I suggest working in a branch different to `main` for this.
- Make any changes you want to make. You can see a preview in `http://localhost:1208` using `pnpm dev` with the toolkit.
- Test your changes following the steps in Development above.
- Run `pnpm build` once you're satisfied and everything works OK.
- Push your changes to `main`
- Tag a new version so you don't break everything for everyone.

Note: This package is not published to npm, so you'll have to use it by doing `pnpm add BootNodeDev/db-ui-toolkit#tag` in your dAppBooster project.
