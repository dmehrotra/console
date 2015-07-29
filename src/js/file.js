"use strict";

function File(name,level){
	this.name = name;
	this.level = level || 0;
	this.content = null;
}

File.prototype.setContent = function(content){
	this.content = content;
}