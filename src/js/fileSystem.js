'use strict'
function FileSystem(){
  this.root = new Folder('root'); 
}

FileSystem.prototype.build = function(system){
	for (obj in system.data){
		if (system.data[obj].type == 'folder'){
			this.initFolder(system.data[obj]);
		}
		if (system.data[obj].type == 'file'){
			this.initFile(system.data[obj]);
		}

	}
}
FileSystem.prototype.initFile = function(file){
	this.root.createFile(file.name,file.level);
}

FileSystem.prototype.initFolder = function(folder,parent){
	this.root.createFolder(folder.name,folder.level,folder.files,folder.folders);
}
// loop through objects
// if file handle
//if folder handle