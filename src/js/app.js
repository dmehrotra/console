'use strict'

var data = new Data(); 
var fs = new FileSystem();
var me = new Session();
var teri = new Interface(fs,me);
$(document).ready(function(){
	fs.build(data,function(){
		fs.paths = fs.getPaths();
	});

	$('body').terminal(function(command, term) {
		var cmd = command.split(' ')[0];
		var arg = command.split(' ')[1];
		var input = teri.find_command(cmd,arg);
		if (input != false){
			term.echo(input);
		}else{
			term.echo('command not found: '+cmd);
		}
		term.set_prompt("> "+me.location.slice(1)+'  ');
	});
});




// jQuery(document).ready(function($) {
//     var id = 1;
//     $('body').terminal(function(command, term) {
//         if (command == 'help') {
//             term.echo("available commands: help, ls");
// 		} else if (command == 'ls'){
// 			term.echo('available directories: archive, commandEntry');
//         } else if (command == 'archive'){
//             term.push(function(command, term) {
//                 if (command == 'ls') {
//                     term.echo('Archive Package 1, Archive Package 2, Archive Package 3, ---------, ');
//                 } else if (command == 'Archive Package 1') {
//                     term.echo('[TYPE HISTORY PART 1]');
// 				} else if (command == 'Archive Package 2') {
//                     term.echo('[TYPE HISTORY PART 2]');
// 				} else if (command == 'Archive Package 3') {
//                     term.echo('[TYPE HISTORY PART 3]');
// 				} else if (command == 'help') {
//                     term.echo('help, ls, exit');
//                 } else {
//                     term.echo('unknown command ' + command);
//                 }
//             }, {
//                 prompt: 'archive> ',
//                 name: 'archive'});
//         } else if (command == "commandEntry") {
//             term.push(function(command, term) {
//                 if (command == 'help') {
// 					term.echo('help, exit');
// 				} else if (command == 'ls') {
// 					term.echo('none - nice try');
// 				} else if (command == 'hello_environment') {
// 					term.echo('environment connected to TERI: test 2 complete');
// 				} else {
// 					term.echo('unknown command ' + command);
// 				}
//             }, {
//                 name: 'commandEntry',
//                 prompt: 'commandEntry> '});
//         } else if (command == 'mysql') {
//             term.push(function(command, term) {
//                 term.pause();
//                 $.jrpc("mysql-rpc-demo.php",
//                        "query",
//                        [command],
//                        function(data) {
//                            term.resume();
//                            if (data.error && data.error.message) {
//                                term.error(data.error.message);
//                            } else {
//                                if (typeof data.result == 'boolean') {
//                                    term.echo(data.result ? 'success' : 'fail');
//                                } else {
//                                    var len = data.result.length;
//                                    for(var i=0;i<len; ++i) {
//                                        term.echo(data.result[i].join(' | '));
//                                    }
//                                }
//                            }
//                        },
//                        function(xhr, status, error) {
//                            term.error('[AJAX] ' + status +
//                                       ' - Server reponse is: \n' +
//                                       xhr.responseText);
//                            term.resume();
//                        });
//             }, {
//                 greetings: "This is the initial build of TERI.LINK CONSOLE of using the outdated human mysql from terminal\n\
// you are allowed to execute: select, insert, update and delete from/to table:\n\
//     table test(integer_value integer, varchar_value varchar(255))",
//                 prompt: "mysql> "});
//         } else {
//             term.echo("unknow command " + command);
//         }
//     }, {
//         greetings: "TERI.LINK CONSOLE 1.0",
//         onBlur: function() {
//             // prevent loosing focus
//             return false;
//         }
//     });
// });

