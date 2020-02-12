let startGame = function(){
	let map=[0,0,0,0,0,2,0,0,0,3,0,0,1,0,0,3,0,0,1,0,0,0,1,0,0,-3,0,2,0,0,0,-2,0,1,0,3,0,0,0,-3,0,0,2,0,0,0,1,0,0,0,-1,0,-1,0,1,0,2,0,2,1,0,3,0,0,0,1,0,1,0,0,2,0,0,3,0,0,-2,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,1,0,0,3,0,0,1,0,0,0,1,0,0,-3,0,2,0,0,0,-2,0,1,0,3,0,0,0,-3,0,0,2,0,0,0,1,0,0,0,-1,0,-1,0,1,0,2,0,2,1,0,3,0,0,0,1,0,1,0,0,2,0,0,3,0,0,-2,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,1,0,0,3,0,0,1,0,0,0,1,0,0,-3,0,2,0,0,0,-2,0,1,0,3,0,0,0,-3,0,0,2,0,0,0,1,0,0,0,-1,0,-1,0,1,0,2,0,2,1,0,3,0,0,0,1,0,1,0,0,2,0,0,3,0,0,-2,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,1,0,0,3,0,0,1,0,0,0,1,0,0,-3,0,2,0,0,0,-2,0,1,0,3,0,0,0,-3,0,0,2,0,0,0,1,0,0,0,-1,0,-1,0,1,0,2,0,2,1,0,3,0,0,0,1,0,1,0,0,2,0,0,3,0,0,-2,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,1,0,0,3,0,0,1,0,0,0,1,0,0,-3,0,2,0,0,0,-2,0,1,0,3,0,0,0,-3,0,0,2,0,0,0,1,0,0,0,-1,0,-1,0,1,0,2,0,2,1,0,3,0,0,0,1,0,1,0,0,2,0,0,3,0,0,-2,0,0,0];
	let doneEvents={
		'l':0,
		'r':0,
		'array':[]
	};
	let intervals={
		'run':null
	};
	let music=uploadMusic();
	let score=uploadScore(0);
	let squares=createSquares(document.getElementById("road"),map,0);
	let animatedScreen=readyAnimatedScreen();
	run(document.getElementById("road"),squares,2,map,0,doneEvents,music,document.getElementById("trainBurst"),animatedScreen,intervals,score);
	addControllerKeyboard(doneEvents);
	music.standart.begin.play();
}

let startMenu=function(){
	let intervals={
		'menu':null
	};
	let score=uploadScore(0);
	uploadMenu(0.01,1,0.00001,score,intervals);
}

startMenu();