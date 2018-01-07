process.env.NODE_ENV = "development";

var nodemon = require("nodemon");

nodemon('--exec babel-node --presets=es2015 ./src/bin/www.js --watch ./src');

nodemon.on('start', function() {
    console.log("[nodemon] App has started");
})
.on('quit', function(){
    console.log("[nodemon] App has quit");
})
.on('restart', function(){
    console.log("[nodemon] App has restarted")
});