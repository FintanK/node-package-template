# node-package-template
A simple project in order to create and publish a node package to npmjs.org

## Publishing a developed plugin

npmjs.org signup page - https://www.npmjs.com/signup

To login via the command line on your local machine

> npm login

Enter your login details. Once you are authorized you will be able to publish modules from your machine with the following command.

> npm publish

This example can be found at

## Basic Usage

```javascript
var nodePackage = require("node-package-template");

var response = new NodePackage("helloWorld");

response.on("end", console.dir);
