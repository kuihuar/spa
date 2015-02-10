var jewel = {
	screens:{}
};

//在加载好主文件前等待
window.addEventListener("load", function(){
	Modernizr.load([
		{
			//这些文件一直被加载
			load:[
				"scripts/sizzle.js",
				"scripts/dom.js",
				"scripts/game.js",
				"scripts/screen.splash.js",
				"scripts/screen.main-menu.js"
			],
			
		},{
			test: Modernizr.standalone,
			yep: "scripts/screen.splash.js",
			nope: "scripts/screen.install.js",
			//当所有文件已完成加载并执行后调用
			complete:function(){
				if(Modernizr.standalone){
					jewel.game.showScreen("splash-screen");
				}else{
					jewel.game.showScreen("install-screen");
				}
				
			}
		}
	]);

	if(Modernizr.standalone){
		Modernizr.load([
			{
				load:["scripts/screen.main-menu.js"]
			}
		]);
	}
}, false);