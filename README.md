# ReactJS Test 001

## Table of Contents
- [ReactJS Test 001](#reactjs-test-001)
  - [Table of Contents](#table-of-contents)
  - [1. Setup](#1-setup)
    - [1.1 Check npm and node.js](#11-check-npm-and-nodejs)
    - [1.2 Install Create React App (CRA)](#12-install-create-react-app-cra)
    - [1.3 Create Project](#13-create-project)
    - [1.4 Hello World](#14-hello-world)
      - [1.4.1 Run Development Server](#141-run-development-server)
      - [1.4.2 Run Tests](#142-run-tests)
      - [1.4.3 Build for Production](#143-build-for-production)
    - [1.5 Bootstrap, JQuery, & Popper.js](#15-bootstrap-jquery--popperjs)
      - [1.5.1 Option 1: CDNs](#151-option-1-cdns)
      - [1.5.2 Option 2: Download](#152-option-2-download)
      - [1.5.3 Option 3: React-Bootstrap or Reactstrap](#153-option-3-react-bootstrap-or-reactstrap)
    - [1.6 Express.js](#16-expressjs)
  - [2. Development](#2-development)
    - [2.1 The Files](#21-the-files)
    - [2.2 React Features](#22-react-features)
      - [2.2.1 JSX](#221-jsx)
      - [2.2.2 Components](#222-components)
      - [2.2.3 One-way Data Binding](#223-one-way-data-binding)
      - [2.2.4 Virtual DOM](#224-virtual-dom)
    - [2.3 Getting Used to JSX](#23-getting-used-to-jsx)
      - [2.3.1 Render Function](#231-render-function)
      - [2.3.2 Classes](#232-classes)
      - [2.3.3 Expressions in HTML in JSX](#233-expressions-in-html-in-jsx)
      - [2.3.4 Component States](#234-component-states)
      - [2.3.5 Component Properties (props)](#235-component-properties-props)
      - [2.3.6 Updating the UI](#236-updating-the-ui)
    - [2.4 File Structure](#24-file-structure)
    - [2.5 File Template](#25-file-template)
  - [3. Testing](#3-testing)
  - [Resources](#resources)


## 1. Setup
### 1.1 Check npm and node.js
```bash
$ node -v
v16.14.0
$ npm -v
8.3.1
```

### 1.2 Install Create React App (CRA)
```bash
$ npm install -g create-react-app
```

### 1.3 Create Project
```bash
$ create-react-app <project-name>
```
If this doesn't work, you can also do the below. The above might not work with some script settings set for Windows security.
```bash
$ npx create-react-app <project-name>
```
Note that it is a good idea to make sure `/node_modules` is added to the `.gitignore`.

### 1.4 Hello World

Remember to `cd` into the project folder before trying to running the dev server. For example:
```bash
$ cd <project-name>
$ npm start
```
The auto-generated README.md gives some helpful information such as `npm` commands to run the development server.

Here are the 3 most useful:

#### 1.4.1 Run Development Server
```bash
$ npm start
```
> Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
>
>The page will reload when you make changes.\
You may also see any lint errors in the console.

#### 1.4.2 Run Tests
```
$ npm test
```
>Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### 1.4.3 Build for Production
```bash
$ npm run build
```
>Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
>
>The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
>
>See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 1.5 Bootstrap, JQuery, & Popper.js
#### 1.5.1 Option 1: CDNs
Adding these dependencies through a CDN is pretty simple.
Add the following to `index.html`. Note that this is an example so for specific versions or specific CDNs, get the appropriate `<link>` or `<script>` tags.
```HTML
<!-- Bootstrap: in the <head> tag -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">  

<!-- JQuery, Popper.js, and Boostratp.js: end of <body> tag -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>  

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>  

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>  
```
#### 1.5.2 Option 2: Download
Install Boostrap as a dependency.
```bash
$ npm install bootstrap --save
```
Install JQuery and Popper.
```bash
$ npm install jquery popper.js
```
To use Bootstrap, add the following to the top of `src/index.js`.
```JS
import 'bootstrap/dist/css/bootstrap.min.css';
```
To use JQuery, Popper.js, and Boostrap.js, add the following to the top of `src/index.js'.
```JS
import $ from 'jquery';  
import Popper from 'popper.js';  
import 'bootstrap/dist/js/bootstrap.bundle.min';  
```

#### 1.5.3 Option 3: React-Bootstrap or Reactstrap
React-Bootstrap & Reactstrap aim to turn Bootstrap components into React components. It is pretty easy to set up. 

Do this to download React-Bootstrap and Bootstrap.
```bash
npm install react-bootstrap bootstrap --save
```
Then put this into `src/index.js`.
```JS
import 'bootstrap/dist/css/bootstrap.min.css';  
```

To import components, do something like this:
```JS
import Button from 'react-bootstrap/Button';
```

For Reactstrap, see [this](https://www.javatpoint.com/react-bootstrap).

For React-Bootstrap docs, see [this](https://react-bootstrap.github.io).

### 1.6 Express.js
TODO Figure out

## 2. Development
### 2.1 The Files
1. **node_modules**: 3rd party libraries including React
2. **public**: Public assets such as `index.html`
3. **src**: Contains `App.css`, `App.js`, `App.test.js`, `index.css`, `index.js`, and `serviceWorker.js`. `App.js` is the file responsible for displaying the output screen in React.
4. **package-lock.json**: Metadata for project. Information for `npm` like project dependencies.

### 2.2 React Features
#### 2.2.1 JSX
JSX is a syntax extension of JS. Essentially HTML like text can work in the same file as JS.

#### 2.2.2 Components
ReactJS is a component based system. The components are reusable and help with separation of concerns and scalability.

#### 2.2.3 One-way Data Binding
Components are immutable and unidirectional data flow helps keep components able to focus on their own purpose. This means that to communicate in the other direction, events occur. This [StackOverflow post](https://stackoverflow.com/questions/34519889/can-anyone-explain-the-difference-between-reacts-one-way-data-binding-and-angula) gives a bit deeper of a discussion into it.

#### 2.2.4 Virtual DOM
React uses a virtual DOM which helps the performance/efficieny of the real DOM.

### 2.3 Getting Used to JSX
#### 2.3.1 Render Function
Each component has a `render` function for giving the HTML output.

#### 2.3.2 Classes
Instead of `class="..."` like we are used to in HTML, we do `className="..."` in JSX.

#### 2.3.3 Expressions in HTML in JSX
Can evaluate JS expressions within the HTML syntax of JSX. For example:
```XML
<div>
  <h1 className="hello">{25+20}</h1>
</div>
```
will result in a `<h1>` with value `45`.

#### 2.3.4 Component States
Component states are useful for the interactivity and behavior of components. A state is initially set in a `constructor` function with `this.state = value`. Calling the `setState` function will trigger UI updates. For more info, see [this link](https://www.javatpoint.com/react-state).

#### 2.3.5 Component Properties (props)
To pass information from a parent to a child component, they are passed through props. If the parent's render function has a child component like this:
```JSX
class ParentComp extends React.Component {
  render() {
    return (
      <ChildComponent prop1={prop1Value}/>
    );
  }
}
```
Then the child component can access given props through `this.props`:
```JSX
class ChildComp extends React.Component {
  render() {
    return (
      <div>
        The prop1 value is {this.props.prop1} 
      </div>
    );
  }
}
```
Props are **read-only** due to the one-way data binding of React.

To make sure that props are the right type, you can define a `propTypes` object. You can also set `defaultProps`. Example:
```JS
class ComponentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...}
  }
  ...
}
ComponentName.propTypes = {
  prop1: PropTypes.array.isRequired,
  prop2: PropTypes.bool,
}
Componentname.defaultProps = {
  prop1: [1,2,3],
  prop2: false
}
```
[This link](https://www.javatpoint.com/react-props-validation) gives some more insight.

#### 2.3.6 Updating the UI
Three methods update the UI:
1. `setState`
2. `forceUpdate`
3. `findDOMNode` 

### 2.4 File Structure
File structure is kind of up to the developer(s). Keeping things within the `src` folder and organizing by either routes or features is a common method. Another method is organizing by file type like having a `src/api` folder and a `src/components` folder.

What matters is accessing other components. This is done with relative imports.
Example:
```
src/
  components/
    Component1.js
    Component2.js
```
```JS
// In Component2.js 
import Component1 from './Component1'
class Component2 extends React.Component {
  render() {
    return (
      <Component1/>
    );
  }
}
```

### 2.5 File Template
```JSX
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Component1 from './Component1.js'

class ComponentName extends React.Component {
  constructor(props) {
    super(props);
    // TODO set initial state
  }
  render() {
    return (
      // TODO HTML output
    );
  }
}
export default ComponentName;
```

## 3. Testing
TODO [this might help](https://reactjs.org/docs/testing.html)


## Resources
1. [Java T Point's ReactJS tutorial](https://www.javatpoint.com/reactjs-tutorial)
2. [freeCodeCamp React w/ Node/Express](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/)
3. [ReactJS Docs](https://reactjs.org/docs/getting-started.html)
  