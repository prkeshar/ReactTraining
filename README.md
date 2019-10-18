# ReactTraining

chrome - v8
ie - chakra
firefox - spidermonkey

ECMA scripts - European Country Association
deals with scripting languages
decides what features js should have
they come up with the versions

ES6, ES7, 2018 - specifications/standards


babel - transpires
it converts the equivalent code from one standard to backward standards

polyfill js - when there is no equivalent feature in older versions

webpack - creates one file out of many, bundling
maven

node js - runtime for js based on V8
executes js code outside of a browser

ember, 

lambda functional programming


js - functional programming language
everything is function
function is first class citizen

graphql - can request only few fields to the server to return

bootstrap

npm

nodemon - good for development 
axios - invoking rest calls

npm install axios --save

npm install -- looks for package.json and download all the dependencies on distribution


vue

handlebars
thymeleaf

reactjs - single page architecture

node package management - similar to maven

npm install -g create-react-app
cli tool - command line interface for react projects

C:\Users\PriyankaKeshari\AppData\Roaming\npm


responsive design - breakpoints

media query


React - library
targets view
MVVM - Model to view, View to model
Single page application
View is always backed by models

we create components
browser compatibility is taken care by react-  as it is built on babel

Virtual DOM(made of json objects) - abstraction of HTML DOM
React's local simplified copy of actual html dom
When something changes, virtual dom is updated

npm install -g create-react-app

create-react-app <appname>

Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd helloreact
  npm start
  
  
  
  
  
JSX - Java script extension (<div>{xyz}</div>) will be converted into react elements
Syntax extension to JSX
it is an xml/html like syntax using React
Component will have view + functionality (View + Model)
function component - stateless
class components - stateful
ref
createref
state - setstate
Routers
npm install --save react-router-dom
Link, Route, parameterized routem, 


REST - architectural style to create web services
intraoperability
service oriented architecture
when services are independent made on diff platform
SOAP - simple object access protocol - obsolete

resource is accessible using url
based on http - get, post, put, delete


json typicode - fake online rest api


https://jsonplaceholder.typicode.com/users



-------------
deploy sample war in tomcat
add -   "homepage": "http://localhost:8080/sample/", in package.json

Add below in web.xml of sample application
<error-page>
	<error-code>404</error-code>
	<location>/index.html</location>
</error-page>

Add below in react index.js
ReactDom.render(
    <BrowserRouter basename="/sample">
        <AppRouter />
    </BrowserRouter>, document.getElementById('root'));

do - npm run build - on the react project
build folder will be created
copy paste build folder content in webapps/sample/


------------
scss - preprocessor for css
less

carbon design uses scss


npm install -s carbon-components-react carbon-components carbon-icons
npm add node-sass --dev
npm install -s @carbon/grid


Redux - storage facility that helps JS apps to manage state (user actions performed on the UI)
Store, - maintains the state
Action, - payloads of information that send data from your app to your store
Reducer - take state and action, performs the action and returns new store



npm install --save redux
npm install --save react-redux


react-navtive - for android and ios
