let createBackgroundObject=function(imageObject){
	imageObject.classList.add("backgroundObject");
}

let changeObjects=function(speed){
	document.getElementsByClassName("backgroundObject").top+=speed+'px';
}