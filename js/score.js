const scoreElement=document.getElementById("score");

let uploadScore=function(beginScore){
	let maxScore=window.localStorage.getItem("maxScore");
	if (maxScore==null){
		maxScore=0;
	}else{
		maxScore=parseInt(maxScore);
	}
		
	let score={
		'element':scoreElement,
		'value':beginScore,
		'maxScore':maxScore
	}
	return score
}

let changeScore=function(scoreObject,score){
	scoreObject.element.innerText=score;
	scoreObject.value=score;
}
let saveScore=function(scoreObject){
	if (scoreObject.maxScore<scoreObject.value){
		window.localStorage.setItem("maxScore",scoreObject.value);
	}
}