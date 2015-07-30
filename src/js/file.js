"use strict";

function File(name,path,content){
	this.name = name;
	this.path = path || "/"+this.name;
	this.content = content || null;
}

File.prototype.setContent = function(content){
	this.content = content;
}