/*
 * spa.chat.js
 * Chat feature module for spa
*/

/*jslint	browser:true,	continue:true,
  devel: ture,	indent:2,	maxerr: 50,
  newcap: ture,	nomen: true,	plusplus:true,
  regexp: true,	sloppy:true,	vars:false,
  white: true
*/

/* global $, spa */
sps.chat = (function(){
	//----------------------BEGIN MODULE SCOPE VARIABLES-------------------------------
	var
	configMap = {
		main_html: String()
		+ '<div style="padding:1em; color:#fff">'
			+ 'Hello chat'
		+ '</div>',
		settable_map:{}
	},
	stateMap = {$container: null},
	jqueryMap = {},
	setJqueryMap, configModule, initModule
	;

	//---------------------END MODULE SCOPE VARIABLES--------------------------

	//-----------------------BEGIN UTILITY METHODS-----------------------------
	//------------------------END UTILITY METHODS------------------------------

	//------------------------BEGIN DOM METHODS-------------------------------- 
	// Begin DOM method /setJqueryMap/
	setjqueryMap = function(){
		var $container = stateMap.$container;
		jqueryMap = { $container: $container };
	};
	// End DOM method /setJqueryMap/

	//---------------------BEGIN EVENT HANDLERS--------------------------------- 
	//----------------------END EVENT HANDLERS---------------------------------- 
	//-------------------------BEGIN PUBLIC METHODS-----------------------------
	// Begin public method /configModule/
	// Purpose		: Adjust configuration of allowed keys
	// Arguments	: a map of settable keys and values
	//	* color_name - color to use
	// Setting		:
	//	* configMap.settle_map declares allowed keys
	// Returns		: true
	// Throws		: none
	//
	configModule = function(input_map){
		spa.util.setConfigMap({
			input_map: input_map,
			settable_map: configMap.settable_map,
			config_map: configMap
		});
		return true;
	}; 
	// End public method /configModule/

	// Begin public method /initModule/
	// Purpose: Initializes module
	// Arguments:
	//	* $container -the jquery element used by this feature
	// Returns: true
	// Rhrows: none
	//
	initModule = function($container){
		$container.html(configMap.main_html);
		stateMap.$container = $container;
		setJqueryMap();
		return true;
	};
	// End public method /initModule/

	// return public mothods
	return{
		configModule: configModule,
		initModule: initModule
	};

	//--------------------------END PUBLIC METHODS------------------------------

});