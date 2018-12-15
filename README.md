# Welcome to my Portfolio!

Thank you for visiting. However, I regret to say that the website currently undergoing construction. Do visit again!

# How this project was built

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## UI

#### SASS

`npm install node-sass --save`<br>
Change all existing .css file to .scss

- [Mixins](https://scotch.io/tutorials/how-to-use-sass-mixins)

#### Google Material UI via [MDC React](https://github.com/material-components/material-components-web-react)

Set SASS_PATH environment variable that points to node_module directory<br>
`SET SASS_PATH=.\node_modules`

If the following error occurred, please reset the `SASS_PATH`:<br>
![missing sass path](docs/img/failedtocompile.PNG)<br>

- [Components Catalog](https://material-components.github.io/material-components-web-catalog/#/)
- [Material Icons](https://github.com/material-components/material-components-web-react/tree/master/packages/material-icon)
- [Color Tool](https://material.io/tools/color/#!/?view.left=0&view.right=0)

#### SVG icons for popular brands - [Simple Icons](https://github.com/simple-icons/simple-icons)

Navigate to icon directory and copy svg.<br>
Example module: `src/components/button/ButtonIconGithub`


## Deployment

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.<br> See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### [Firebase](https://firebase.google.com/)

#### `npm install -g firebase-tools`

This installs the globally available `firebase` command. To update to the latest version, simply re-run the same command.

#### `firebase login`

Connects local machine to Firebase account and obtains access to Firebase projects

#### `firebase init`

This command should be ran from the project's root directory, creating a `firebase.json` configuration file and a `.firebaserc` file in that directory. The `firebase.json` file is required for deployment using the CLI.

#### `firebase deploy`

This command deploys a release to the Firebae project's default Hosting site.