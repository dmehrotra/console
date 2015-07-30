'use strict'
function FileSystem(){
  this.root = new Folder('root'); 
  this.paths = undefined;

}

FileSystem.prototype.build = function(system,callback){
	for (obj in system.data){
		if (system.data[obj].type == 'folder'){
			this.initFolder(system.data[obj]);
		}
		if (system.data[obj].type == 'file'){
			this.initFile(system.data[obj]);
		}
	}
	callback();

}
FileSystem.prototype.initFile = function(file){
	this.root.createFile(file.name,file.path,file.content);
}

FileSystem.prototype.initFolder = function(folder){
	this.root.createFolder(folder.name,folder.path,folder.files,folder.folders);
}

FileSystem.prototype.getAttribute = function(obj, lookup, callback) {
    for (property in obj) {
        if (property == lookup) {
            callback(obj[property]);
        } else if (obj[property] instanceof Object) {
            this.getAttribute(obj[property], lookup, callback);
        }
    }
}
FileSystem.prototype.getPaths = function(){
	paths = [];
	this.getAttribute(this, 'path', function(obj) {
    	paths.push(obj)
	});
	return paths;
}
FileSystem.prototype.getAttribute = function(obj, lookup, callback) {
    for (property in obj) {
        if (property == lookup) {
            callback(obj[property]);
        } else if (obj[property] instanceof Object) {
            this.getAttribute(obj[property], lookup, callback);
        }
    }
}



// loop through objects
// if file handle
//if folder handle