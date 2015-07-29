"use strict";

function Folder(name, level){
	this.name = name;
	this.level = level || 0;
	this.folders = [];
	this.files = [];
	
}
Folder.prototype.createFile = function(name,level){
	var file = new File(name,level);
	this.files.push(file);
}
Folder.prototype.createFolder = function(name,level,files,folders){
	var folder_files = files || [];
	var sub_folders = folders || [];
	var folder = new Folder(name, this.level);
	for (f in folder_files){
		folder.createFile(folder_files[f].name,folder_files[f].level)
	}
	for (sf in sub_folders){
		folder.createFolder(sub_folders[sf].name,sub_folders[sf].level,sub_folders[sf].files,sub_folders[sf].folders);
	}
	this.folders.push(folder);
	return folder;
}

