# rubiko-desk-ui
Front-end application that connects to `rubiko-desk` to provide a UI for agents to provide support.

## Development Tooling
The development tooling is:
- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

The application is developed with the Javascript framework VueJs. This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs.

See [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) for further details.

## CI/CD
The `.gitlab-ci.yml` configures the GitLab CI/CD automated pipeline to deliver the web application as a docker image and to deploy in AWS.

To run locally with docker
```
docker run -p 3000:80 registry.gitlab.com/rubiko-tech/front-end/rubiko-desk-ui:latest
```

To optionally override some of the `.env` settings, pass them as environment variables
```
docker run -p 3000:80 \
	-e RUBIKO_WEBSOCKET=ws://localhost:8000/ws \
	-e RUBIKO_DESK_BASE_URL=http://localhost:8000/rubiko.desk \
	-e RUBIKO_AUTH_BASE_URL=http://localhost:8000/rubiko.auth \
	registry.gitlab.com/rubiko-tech/front-end/rubiko-desk-ui:latest
```

and the web application will be available on `http://localhost:3000`

## Settings
This application is developed with a *build once, deploy anywhere* approach in mind, which requires to have some configuration values, such as URLs, parameterized, so that they can easily be modified
for development to point to whichever environment, and, once the app is delivered as a docker image, these values could easily be overriden by environment variables.

To use settings, add values to `.env` prefixed by `RUBIKO`. 
See an example below:

In `.env` add as many settings as necessary.
```
RUBIKO_FOO=myValue
RUBIKO_BAR=my multiline value
```

To access these values in the code, the `SettingsService.js` service is provided. It can be imported and used anywhere.
```
import settings from '@/services/SettingsService'

console.log(settings.RUBIKO_FOO); // prints myValue
console.log(settings.RUBIKO_BAR); // prints my multiline value
```

### How it works
The whole process is automated when using `npm`, and the only requirement for the development machine is to use Linux or to **have Git for Windows installed** at `C:\Program Files\Git` 
when using Windows, because a shell (i.e: `sh.exe`) is required.

The file `.env` is the source of truth for settings, but it can be overriden with environment variables.

Internally, at launch time (i.e: when running `npm run dev` or when launching a docker container out of the image, as described on the `Dockerfile`) 
a script `env.sh` is executed directly (in Linux) or indirectly through a `env.bat` that uses a shell (in Windows).
This script automatically creates a file `env-config.js` with the values from `.env`, and copies it to `public` folder, making the settings available to be read at runtime by the app.

By having variables read at runtime, this approaches ensures the variables can be overriden by environment variables.


### Override settings for development
When developing the app, the settings can be used by directly by modifying the `.env` file and launching `npm run dev`, 
or by injecting environment variables at launch time which will override the `.env` settings.

For exmaple:
```
RUBIKO_FOO=myStrongerValue npm run dev
```

## Versioning
The versioning strategy follows a semver approach (i.e: X.Y.X where X represents the major version, Y represents the minor version and Z represents the patch version).
The developer should decide when a major or minor version has increased because of major or minor changes respectively, and tag the repository with the new semver. For example:
```
git tag -a 0.2.0 -m 'version 0.2.0'
```

Every time a CI/CD pipeline is executed, a new version will be generated and used to tag the docker image that will be produced, and to override a configuration setting with key `RUBIKO_APP_VERSION`. See `.gitlab-ci.yml` for more details.

This new version automatically generated will respect the *major version* and *minor version* found in at the git repository tag, and will infer the *patch version* out of the amount of commits since the last *minor version*.

## CORS
The UI can run in any port. 
At the moment CORS is allowed in the back-end for requests originating on `http://localhost:3000` and `"https://agent-ui.rubiko.io"`.

If there is a need to run the UI from different origin, make the required changes at back-end to allow the new origins.