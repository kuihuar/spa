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
		$container.html(
			'<h1 style="display:inline-block;margin:25px;">'
			+'hello world!'
			+'</h1>'
			);
	}
	return {initModule:initModule};
}());