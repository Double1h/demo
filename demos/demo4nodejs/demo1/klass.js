var student = require("./student.js");
var teacher = require("./teacher.js");

function add (tea,stus) {
	console.log("班里只有一个老师，叫："+ tea + ",有好多好多的学生：");
	teacher.add(tea);
	for( var i = 0; i < stus.length ;i++)
	{
		student.add(stus[i]);
		console.log(stus[i]+",");
	}	  
}

exports.add = add;