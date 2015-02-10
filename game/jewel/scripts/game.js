jewel.game = (function(){
	var dom = jewel.dom,
		$ = dom.$;

	function showScreen(screenId){
		var activeScreen = $("#game .screen.active")[0],
			screen = $("#" + screenId)[0];
			if(activeScreen){
				dom.removeClass(activeScreen, "active");
			}
			//dom.addClass(screen, "active");

			//运行屏幕模块
			jewel.screens[screenId].run();
			//展示屏幕HTML语句
			dom.addClass(screen, "active");
	}
	return{
		showScreen: showScreen
	};
})();