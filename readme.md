- [x] What is NPM?
- [ ] Understanding NPM packages
- [ ] What is React?
- [ ] What is Single page application (SPA)?
- [ ] Library vs framework
- [ ] Setting up react project using Vite
- [ ] Understanding React folder skeleton

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
