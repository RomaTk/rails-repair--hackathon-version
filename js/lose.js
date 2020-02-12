const trainHeight=document.getElementById("train").offsetHeight;
const burstOpacity=1;


let checkLose=function(squares){
	let objects=squares.objects;
	isLoose=false;
	for (let i=objects.length-1; i>0; i-=1){
		if (objects[i].type!=0){
			if (((objects.length-i-1)*squares.height<=squares.height+trainHeight)
			&&(squares.height+objects[0].marginTop>=squares.height/4)){
				isLoose=true;
			}
		}
	}
	return isLoose;
}

let doLose=function(music,burst,intervals){
	startBurstMusic(music);
	burst.style.opacity=burstOpacity;
	clearInterval(intervals.run);
	setTimeout(
		document.body.addEventListener("click", function(){
			returnMenuAfterLose();
		})
	,1000);
	/*break*/
}

let returnMenuAfterLose=function(){
	let intervals={
		'menu':null
	};
	let score=uploadScore(0);
	uploadMenu(0.01,0,0.00001,score,intervals);
}