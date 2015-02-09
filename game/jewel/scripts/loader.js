var jewel = {};

//在加载好主文件前等待
window.addEventListener("load", function(){
	Modernizr.load([
		{
			//这些文件一直被加载
			load:[
				"scripts/sizzle.js",
				"scripts/dom.js",
				"scripts/game.js"
			],
			//当所有文件已完成加载并执行后调用
			complete:function(){
				console.log("all files loaded");
			}
		}
	]);
}, false);