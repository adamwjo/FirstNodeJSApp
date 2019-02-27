 
 
 function sayHello(name){
     console.log('Hello ' + name);
 }

 sayHello("Adam")

 var logger = require('./logger.js')

 logger.log('message')

//Unlike the browser, node does not have access to the "window" global object,
//  so methods like getElementById() are not available. In node the globale Object is "global" and works differently in terms of scope.

//  methods like setTimeout() and setInterval() are available to both