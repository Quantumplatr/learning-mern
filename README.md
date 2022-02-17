# Learning MERN

## Table of Contents
- [Learning MERN](#learning-mern)
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
    - [1.6 Setting up the Backend](#16-setting-up-the-backend)
      - [1.6.1 Install Tools](#161-install-tools)
      - [1.6.1 Connecting to the Database (without Mongoose)](#161-connecting-to-the-database-without-mongoose)
      - [1.6.2 Connecting to the Database (with Mongoose)](#162-connecting-to-the-database-with-mongoose)
      - [1.6.3 Defining Backend Routing](#163-defining-backend-routing)
      - [1.6.4 Authorization](#164-authorization)
    - [1.7 Routing](#17-routing)
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
    - [2.6 Working with MongoDB](#26-working-with-mongodb)
      - [2.6.1 Mongo Shell](#261-mongo-shell)
      - [2.6.2 Collections](#262-collections)
      - [2.6.3 Document Format](#263-document-format)
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

### 1.6 Setting up the Backend
#### 1.6.1 Install Tools
In your project folder, make a new folder (something like `api` or `server`) and `cd` into it.
```bash
$ mkdir server
$ cd server
```
Initialize the package.json.
```bash
$ npm init -y
```
Install `MongoDB`, `Express.js`, `CORS`, and `Dotenv`.
```bash
$ npm install mongodb express cors dotenv
```
These packages are:
- `MongoDB`: MongoDB database driver for Node.js
- `Express.js`: Web framework for Node.js
- `CORS`: Cross origin resource sharing for Node.js
- `Dotenv`: Module for loading environment variables for separation of configuration files

Create a `server.js` with the following code:
```JS
const express = require("express");                   // Import express
const app = express();                                // Express app
const cors = require("cors");                         // Import cors
require("dotenv").config({ path: "./config.env" });   // Environment config
const port = process.env.PORT || 5000;                // Environment defined port or 5000
app.use(cors());                                      // Use cors
app.use(express.json());                              // Use Express
app.use(require("./routes/record"));                  // Get backend routing definition
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});
```

#### 1.6.1 Connecting to the Database (without Mongoose)
Set up a sandbox database with MongoDB. Follow [this tutorial](https://docs.atlas.mongodb.com/getting-started/).

Or set up a local database. Download the MongoDB server software from their [website](https://www.mongodb.com/try/download/community). Open a `mongo` shell by running `mongo.exe` in the MongoDB server folder (default for Windows is `C:\Program Files\MongoDB\Server\<version>\bin\mongo.exe`). MongoDB Compass is also helpful. 

Set up a `config.env` file in your `server` folder similar to:
```bash
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```
This will be used by `dotenv` to get environment variables set up for connecting to the database.

Make a `db` folder inside your `server` folder. Inside `db`, make a `conn.js`:
```JS
const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("myFirstDatabase"); // Replace with DB name
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};
```
This will handle connecting to the database using the environment variables defined in `config.env` and set through `dotenv` in `server.js`. In other files, access the database connection object with:
```JS
const dbo = require(/* Relative path to conn.js */);
```

#### 1.6.2 Connecting to the Database (with Mongoose)
TODO

#### 1.6.3 Defining Backend Routing
TODO

#### 1.6.4 Authorization
TODO [this might be good](https://dev.to/salarc123/mern-stack-authentication-tutorial-part-1-the-backend-1c57)

### 1.7 Routing
Make sure you are `cd`'d into your React app directory. Then install React Router:
```bash
$ npm i -D react-router-dom
```
Then in your default base Component (likely `App.js`), set up the routing.
We need to import React Router:
```JS
import { BrowserRouter, Routes, Route } from "react-router-dom";
```
We also need to import any page components we want to have. For example:
```JS
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
```
Then in our base component, we actual define the routing.
```JSX
function App() {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
```
We can nest `Route` components as shown in this example. This means that the `"blogs"` path will actually be at `/blogs`. `"*"` is a wild card that is good for 404s. But what does the `Layout` component do if it is just routing to other components? A parent component can allow for shared content. Anything in the `Layout` component will also be in any of its child routes. This is good for handling navbars.

To actually implement this shared content, we use the `Outlet` component in a parent component. This will basically be replaced with whatever child route we are at. 
Here is an example `Layout.js`:
```JS
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
```
The `Link` components are used to replace `<a>` tags for linking between routes.

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
File structure is kind of up to the developer(s). Keeping things within the `src` folder and organizing by either routes or features is a common method. Another method is organizing by file type like having a `src/api` folder, a `src/components` folder, and a `src/pages` folder.

What matters is accessing other components. This is done with relative imports.
Example:
```
src/
  components/
    Component1.js
    Component2.js
  api/
    ...
  pages/
    Home.js
    About.js
    Contact.js
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

### 2.6 Working with MongoDB
With a relational database you map out a specific scheme in good detail but no need for predefining things in MongoDB. MongoDB (and other NoSQL databases) is easy to scale. They're also fast.

If you're using a local MongoDB instance, (see [1.6.1](#161-connecting-to-the-database-without-mongoose) for setup), to connect MongoDB Compass to it, the below connection string should work.
```
mongodb://localhost:27017
```

Again, you can also connect through the command line by running `mongo.exe` (windows default is `C:\Program Files\MongoDB\Server\<version>\bin\mongo.exe`).

MongoDB Compass has a built in `mongosh` shell that works great as well.

#### 2.6.1 Mongo Shell
Here are some useful commands:
- `db`: Tells what database you are currently in (default is `test`)
- `show databases`: Shows what databases you have
- `use <database>`: Switches to the given database. If the given database doesn't exist, it is created.
- `show collections`: Shows what collections you have
- `db.<collection>.<action>`: Performs `<action>` on `<collection>`. Some actions below.
  - `.insertOne(<object>)`: Insert `<object>` into `<collection>`
  - `.insert(<object>|[<object>,...])`: Inserts the given objects into `<collection>`
  - `.find()`: Gives a cursor to the results. If cursor is not stored (i.e. `var cursor = db.<collection>.find()`), then it prints up to the first 20 documents. 
    - `.find().pretty()`: Formats the result.
- `db.getCollection("<collection>").<action>`: For collections with a name space/hyphen/etc or a name that conflicts with a function, you can use `db.getCollection()` to access the collection
- `db.createCollection(<collection>)`: Creates the collection `<collection>`
- `db.createUser()`: Creates a user for the database. See [the docs](https://docs.mongodb.com/manual/reference/method/db.createUser/) for more information.

#### 2.6.2 Collections
Collections are somewhat analgous to tables in relational databases. They hold documents.

#### 2.6.3 Document Format
Basically just JSON. However, an `_id` field is always required. However, if `_id` is not specified, it will be automatically generated.
For example, this could be a document format:
```JSON
{
  _id: "1",
  first_name: "John",
  last_name: "Doe",
  memberships: ["mem1", "mem2"],
  address: {
    street: "4 Main St.",
    city: "Boston"
  },
  contacts: [
    {
      name: "Brad",
      relationship: "friend"
    }
  ]
}
```
Each document in a collection can have different fields. This makes it easy to add fields on the fly. For example, you can insert
```JSON
{
  first_name: "John",
  last_name: "Doe"
}
```
and then insert
```JSON
{
  first_name: "Jane",
  last_name: "Doe",
  gender: "female"
}
```
and the first object will not have the `gender` field but the second will.

## 3. Testing
TODO [this might help](https://reactjs.org/docs/testing.html)


## Resources
1. [Java T Point's ReactJS tutorial](https://www.javatpoint.com/reactjs-tutorial)
2. [freeCodeCamp React w/ Node/Express](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/)
3. [ReactJS Docs](https://reactjs.org/docs/getting-started.html)
4. [Routing w/ React](https://www.w3schools.com/react/react_router.asp)
5. [Forms w/ React](https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react)
6. [Logins w/ React](https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications)
7. [Other logins w/ React](https://www.freecodecamp.org/news/how-to-authenticate-users-and-implement-cors-in-nodejs-applications/)
8. [MERN Stack Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial)
9. [MERN Auth Tutorial](https://dev.to/salarc123/mern-stack-authentication-tutorial-part-1-the-backend-1c57)
10. [MongoDB in 30min](https://www.youtube.com/watch?v=pWbMrx5rVBE)
