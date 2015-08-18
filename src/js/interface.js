function Interface(fs,session){
	this.fs = fs;
	this.session = session;

}
Interface.prototype.find_command = function(cmd,arg) {
  // get all functions
  var props = _.functions(this);
  // is input the name of a function
  var func = _.find(props, function(prop){ return prop == cmd });
  if (_.isFunction( this[func])){
  	// if true then call the function
  	return this[func](arg);
  }else{
  	false;
  }
}

Interface.prototype.help = function(arg){
	var props = _.functions(this);
	return props;
}
Interface.prototype.pwd = function(arg){
	return "'"+this.session.location+"'";
}

Interface.prototype.cd = function(arg){
	// if length of array is 2 then one layer below root, 
	if (arg == '' || arg == undefined){
		this.session.location = '/';
		return true;
	}
	if (arg == '../'){
		the_arr = this.session.location.split('/');
	    arg = the_arr[the_arr.length - 2];
	  	
	  	this.session.location = _.without(the_arr, arg).join('/');
		return true;
		// snot yet
		// this.session.location.split('/');
		// if (this.session.location.split('/').length - 3] != undefined){
		// 	return config_pwd[config_pwd.length - 2];	
		// }else{
		// 	return ' ';
		// }
	}
	if(arg.charAt(0) == '/'){
		if (this.fs.paths.indexOf(arg) != -1){
			this.session.location = arg+'/';
			return true;
		}else{
			return "cd: no such file or directory: "+arg
		}	
	}else{
		if (this.fs.paths.indexOf(this.session.location+arg) != -1){
			this.session.location = this.session.location+arg+'/';
			return true;
		}else{
			return "cd: no such file or directory: "+this.session.location+arg+'/  ';
		}
	}

}
Interface.prototype.ls = function(arg){
	possible_paths = this.possible_paths();
	var str = '';
	for(var i in possible_paths){
    	str += _.last(possible_paths[i].split('/'))+'     ';
	}
	return str;
}

Interface.prototype.config_pwd = function(arg){
	num = arg || 2;
	config_pwd = this.session.location.slice(1).split('/');
	if (config_pwd[config_pwd.length - num] != undefined){
		return config_pwd[config_pwd.length - num];	
	}else{
		return ' ';
	}
}
Interface.prototype.view = function(arg){
	file = _.map(this.possible_paths(), function(path){ 
		if (path.match(arg)){
			return path
		}
	});
	if(_.without(file, undefined).length){
		file = this.fs.getFile(arg);
		return file.content || 'this is an empty file';
	}else{
		return arg + ' is not a file'
	}
}
Interface.prototype.possible_paths = function(back){
	var back = back || 0
	var count = this.session.location.match(/\//ig).length - back;
	var possible_paths = _.map(this.fs.paths, function(path){ 
		if (path.match(/\//ig).length == count){
			return path
		}
	});
	possible_paths = _.without(possible_paths, undefined);
	return possible_paths;
}

