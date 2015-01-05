/*
* spa.shell.js
* Shell module for spa
*/

/*jslint	bowser:true, continue:true,
  devel:ture, indent:2, maxxerr:50,
  newcap:true, nomen:true, plusplus:true,
  regexp:true, sloppy:true, vars:false,
  white: true
*/
/* global $, spa */
spa.shell = (function(){
	//-----------------------BEGIN MODULE SCOPE VARIABLES--------------------------
	var configMap = {
		main_html: String() 
		+ '<div class="spa-shell-head">'
		+ '<div class="spa-shell-head-logo"></div>'
		+	'<div class="spa-shell-head-acct"></div>'
		+	'<div class="spa-shell-head-search"></div>'
		+ '</div>'
		+ '<div class="spa-shell-main">'
		+	'<div class="spa-shell-main-nav"></div>'
		+	'<div class="spa-shell-main-content"></div>'
		+ '</div>'
		+ '<div class="spa-shell-foot">foot</div>'
		+ '<div class="spa-shell-chat"></div>'
		+ '<div class="spa-shell-modal"></div>'
	},
	stateMap = { $container:null },
	jqueryMap = {},
	setJqueryMap, initModule;
	//--------------------END MODULE SCOPE VARIABLES--------------------------
	//--------------------BEGIN UTILITY METHODS-------------------------------
	//--------------------END UTILITY METHODS---------------------------------
	//--------------------BEGIN DOM METHODS-----------------------------------
	// Begin DOM method  /setJqueryMap/
	setJqueryMap = function(){
		var $container = stateMap.$container;
		jqreryMap = { $container: $container };
	};
	// End DOM method  /setJqueryMap/
	//---------------------END dOM METHODS------------------------------
	//---------------------BETIN EVENT HANDLERS--------------------------------
	//---------------------END EVENT HANDLERS----------------------------------

	//---------------------BEGIN PUBLIC METHODS--------------------------------
	// Begin Public method /initModule/
	initModule = function($container){
		stateMap.$container = $container;
		$container.html(configMap.main_html);
		setJqueryMap();
	};
	// End Public method /initModule/
	return {initModule:initModule};
	//---------------------END PUBLIC METHODS--------------------------------------
}());