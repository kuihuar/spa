jewel.screens["splash-screen"] = (function(){
	var game = jewel.game,
		dom = jewel.dom,
		fristRun = true;
		function setup(){
			dom.bind("#splash-screen", "click", function(){
				game.showScreen("main-menu");
			})
		}
		function run(){
			if(fristRun){
				setup();
				fristRun = false;
			}
		}
		return{
			run: run
		};
})();