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
	if(arg.charAt(0) == '/'){
		if (this.fs.paths.indexOf(arg) != -1){
			this.session.location = arg+'/';
		}else{
			return "cd: no such file or directory: "+arg
		}	
	}else{
		if (this.fs.paths.indexOf(this.session.location+arg) != -1){
			this.session.location = this.session.location+arg+'/';
		}else{
			return "cd: no such file or directory: "+this.session.location+arg+'/  ';
		}
	}

}


