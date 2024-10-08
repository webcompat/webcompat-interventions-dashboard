# webcompat-interventions-dashboard

A simple dashboard listing the interventions currently shipped inside `mozilla-central`.

## Differences to the deprecated AreWeHotfixingTheWebYet.com

- No database, no build, just an "easy" script that generates a static page via Astr.
- Data is only loaded from `mozilla-central`, not other branches/repos, to simplify the code.

## How to run

After an `npm install`, you can get a dev-server with `npm run dev`. To build for release, `npm run build` will generate a static built into the `dist/` folder, which you can then throw onto a server of your choice.

## License

MPL-2.0
