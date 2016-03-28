# node-package-template [![Build Status](https://travis-ci.org/FintanK/node-package-template.svg?branch=master)](https://travis-ci.org/FintanK/node-package-template) [![Build Status](https://david-dm.org/FintanK/node-package-template.svg)](https://david-dm.org/FintanK/node-package-template.svg)  



A simple project in order to create and publish a node package to npmjs.org

## Publishing a developed plugin

npmjs.org signup page - https://www.npmjs.com/signup

To login via the command line on your local machine

> npm login

Enter your login details. Once you are authorized you will be able to publish modules from your machine with the following command.

> npm publish

You can also build out tests around your functionality

> npm test

This example can be found at my NPM package page (Username: fintanak) on https://www.npmjs.com/package/node-package-template

## Basic Usage

In a new project you can then download the module as a dependency and add it to your package.json file by running..

> npm install node-package-template --save

You can then use the module in your project e.g.

```javascript
var nodePackage = require("node-package-template");

console.log(nodePackage.helloWorld("Hello World!"));
