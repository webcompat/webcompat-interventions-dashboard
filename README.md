# webcompat-interventions-dashboard

A simple dashboard listing the interventions currently shipped inside `mozilla-central`.

## Differences to the deprecated AreWeHotfixingTheWebYet.com

- No database, thus easier to run as a stateless app.
- No cached data - if crawling and parsing fails, an error will be shown instead of potentially outdated data.
- Data is only loaded from `mozilla-central`, not other branches/repos, to simplify the code.

## Why is this not on GitHub?

Since I'm a bit tired of trying to squeeze things into Heroku, I deployed this dashboard on my personal infrastructure. To simplify my work, this deployment is based on Docker, and the images for this are built by GitLab CI and stored in my private container registry. I can mirror this repo to GitHub if needed, but since this is a private, internal thing only, this should be fine.

## How to run

The `_deployment` folder contains Dockerfiles, as well as Compose defintions for a local development setup and a production setup with CI-built images. Since this is only meant as an internal thing, that's all the documentation there is right now.

## License

MPL-2.0
