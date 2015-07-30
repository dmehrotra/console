"use strict";

function Folder(name, path){
	this.name = name;
	this.folders = [];
	this.files = [];
	this.path = path || '/';
	
}
Folder.prototype.createFile = function(name,path,content){
	var file = new File(name,path,content);
	this.files.push(file);
}
Folder.prototype.createFolder = function(name,path,files,folders){
	var folder_files = files || [];
	var sub_folders = folders || [];
	var folder = new Folder(name, path);
	for (f in folder_files){
		folder.createFile(folder_files[f].name,folder_files[f].path,folder_files[f].content)
	}
	for (sf in sub_folders){
		folder.createFolder(sub_folders[sf].name,sub_folders[sf].path,sub_folders[sf].files,sub_folders[sf].folders);
	}
	this.folders.push(folder);
	return folder;
}

