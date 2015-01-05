/**
* spa.js
* Root namespace module
*/

/* jslint settings 
	brower:true, continue:true,devel:true,indent:2,maxerr:50,
	regexp:true, nomen:true, plusplus:true, newcap:true, sloppy:true,
	vars:true, while:true
*/
/** global $, spa */
var spa=(function(){
	var initModule=function($container){
		spa.shell.initModule($container);
	}
	return {initModule:initModule};
}());