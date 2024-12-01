- [x] What is NPM?
- [x] Understanding NPM packages
- [x] What is React?
- [x] What is Single page application (SPA)?
- [x] Library vs framework
- [x] Setting up react project using Vite
- [x] Understanding React folder skeleton

## What is NPM?

- NPM stands for Node Package Manager.
- It is a package manager for JavaScript programming language.
- It is the default package manager for Node.js.
- It is used to manage dependencies in JavaScript projects.
- It is used to install libraries, frameworks, and tools that are required for a project.

## Understanding NPM packages

- NPM packages are reusable code that can be used in a project.
- NPM packages are stored in the NPM registry.
- NPM packages can be installed using the `npm install` command.
- Example Packages:

  - `react` - A JavaScript library for building user interfaces.
  - `express` - A web application framework for Node.js.
  - `axios` - A promise-based HTTP client for the browser and Node.js.
  - `react-router-dom` - A routing library for React applications.
  - `redux` - A predictable state container for JavaScript apps.

### Libraries vs Frameworks

- **Library**:

  - A library is a collection of reusable code that can be used in a project.
  - Libraries are used to perform specific tasks or functions.
  - Example: Axios, routing libraries, etc.

- **Framework**:
  - A framework is a collection of libraries, tools, and conventions that provide a structure for building applications.
  - Frameworks provide a set of rules and guidelines for developing applications.
  - Example: React, Angular, Vue, etc.

createTable(data) -> Table created using DOM manipulation
createList(data, type=unoredered) -> List created using DOM manipulation

### package.json

- The `package.json` file is a metadata file for a JavaScript project.
- It contains information about the project, such as the project name, version, dependencies, scripts, etc.
- It is used to manage the project dependencies and scripts.
- It is created automatically when you run the `npm init` command.

### Common JS VS ES Modules

- package.json: "type": "commonjs"
- filname: .js
- import: require()
- export: module.exports

- package.json: "type": "module"
- filname: .cjs
- import: require()
- export: module.exports

- package.json: "type": "module"
- filname: .js
- import: import
- export: export

### npm install

- The `npm install` command is used to install dependencies for a JavaScript project.
- It installs the dependencies listed in the `package.json` file.
- Example: `npm install react` - Installs the React library.

### npm uninstall

- The `npm uninstall` command is used to uninstall dependencies from a JavaScript project.
- It removes the dependencies listed in the `package.json` file.
- Example: `npm uninstall react` - Uninstalls the React library.

### npm install --save-dev

- The `npm install --save-dev` command is used to install development dependencies for a JavaScript project.
- Development dependencies are used during the development of the project but are not required for production.
- Example: `npm install --save-dev eslint` - Installs the ESLint library as a development dependency.

### npm uninstall --save-dev

- The `npm uninstall --save-dev` command is used to uninstall development dependencies from a JavaScript project.
- It removes the development dependencies listed in the `package.json` file.
- Example: `npm uninstall --save-dev eslint` - Uninstalls the ESLint library as a development dependency.

### single page application (SPA)

- A single-page application (SPA) is a web application that loads a single HTML page and dynamically updates the content of the page as the user interacts with the application.

### Setting up react project from scratch without using vite or create-react-app

- Create a new directory for the project.
- Run `npm init` to create a `package.json` file.
- Run `npm install react react-dom` to install React and ReactDOM.
- Create an `index.html` file with a root element to render the React app.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="src/index.js"></script>
  </body>
</html>
```

- Create an `index.js` file to render the React app.

```js
import React from "react";
import ReactDOM from "react-dom";

// React component
const App = () => {
  return <h1>Hello, React!</h1>;
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

- Create a `src` directory and add the `index.js` file.
- package.json using babel and webpack

```json
{
  "name": "fsdwetb7",
  "version": "1.0.0",
  "description": "an example npm application",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve --mode development",
    "build": "webpack --mode production"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sathishgnanaprakasam/fsdwetb7.git"
  },
  "author": "Sathish Gnanaprakasam",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/sathishgnanaprakasam/fsdwetb7/issues"
  },
  "homepage": "https://github.com/sathishgnanaprakasam/fsdwetb7#readme",
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@babel/core": "^7.26.0",
    "@babel/preset-env": "^7.26.0",
    "@babel/preset-react": "^7.25.9",
    "babel-loader": "^8.4.1",
    "css-loader": "^7.1.2",
    "html-webpack-plugin": "^5.6.3",
    "style-loader": "^4.0.0",
    "webpack": "^5.96.1",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.0.0"
  }
}
```

- Create a `webpack.config.js` file to configure Webpack.

```js
import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
  },
};
```

- Create a `.babelrc` file to configure Babel.

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

- Run `npm install` to install the dependencies.
- Run `npm start` to start the development server.
- Open `http://localhost:3000` in the browser to view the React app.

### Understanding React folder skeleton

- **src**: Contains the source code of the React application.
- **public**: Contains the public assets of the React application.
- **node_modules**: Contains the dependencies of the React application.
- **package.json**: Contains the metadata and dependencies of the React application.
- **webpack.config.js**: Contains the configuration for Webpack.
- **.babelrc**: Contains the configuration for Babel.
- **index.html**: The main HTML file of the React application.
- **index.js**: The entry point of the React application.
- **App.jsx**: The main component of the React application.
- **styles.css**: The CSS file for styling the React application.
- **assets**: Contains the images, fonts, and other assets of the React application.
- **gitignore**: Contains the files and directories to be ignored by Git.
- **eslint.config.js**: Contains the configuration for ESLint.
- **vite.config.js**: Contains the configuration for Vite.

## component in react

- A component is a reusable piece of code that defines the structure and behavior of a part of a user interface.

## What is JSX?

- JSX stands for JavaScript XML.
- It is an extension of JavaScript that allows you to write HTML-like code in JavaScript.

## Passing props from parent to child component

- Props are used to pass data from a parent component to a child component in React.
- Props are read-only and cannot be modified by the child component.
- Props are passed as attributes to the child component.

## Props drilling in react

- Props drilling is the process of passing props from a parent component to a nested child component through multiple levels of components.