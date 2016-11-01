var events = require("events");
var EventEmitter = new events.EventEmitter();

EventEmitter.on("beforeSleep",function(who){
	console.log("say goodnight to " + who);
});

EventEmitter.on("wakeUp",function(todo){
	console.log("I am going to " + todo);
});

EventEmitter.emit("beforeSleep","hot chicken");
EventEmitter.emit("wakeUp","wash my tooth");