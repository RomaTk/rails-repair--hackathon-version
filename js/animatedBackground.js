const animatedBackgroundClasses=['leftBackgroundImage','centreBackgroundImage','rightBackgroundImage'];

let readyAnimatedScreen=function(){
	let animatedScreen={
		'height':document.getElementsByClassName(animatedBackgroundClasses[0])[0].offsetHeight,
		'marginTop':-document.getElementsByClassName(animatedBackgroundClasses[0])[0].offsetHeight,
		'animatedBackgroundClasses':animatedBackgroundClasses
	}
	for(let i=0; i<animatedBackgroundClasses.length; i+=1){
		document.getElementsByClassName(animatedBackgroundClasses[i])[0].style.marginTop=animatedScreen.marginTop+'px';
	}
	return animatedScreen
}

let changeAnimatedScreen=function(animatedScreen,speed){
	let animatedBackgroundClasses=animatedScreen.animatedBackgroundClasses;
	animatedScreen.marginTop=animatedScreen.marginTop+speed;
	if (animatedScreen.marginTop>=0){
		replaceAnimatedScreen(animatedScreen,speed);
	}
	for(let i=0; i<animatedBackgroundClasses.length; i+=1){
		document.getElementsByClassName(animatedBackgroundClasses[i])[0].style.marginTop=animatedScreen.marginTop+'px';
	}
}

let replaceAnimatedScreen=function(animatedScreen,speed){
	let animatedBackgroundClasses=animatedScreen.animatedBackgroundClasses;
	for(let i=0; i<animatedBackgroundClasses.length; i+=1){
		let cssClass=document.getElementsByClassName(animatedBackgroundClasses[i]);
		cssClass[0].style.marginTop="0px";
		let lastObject=cssClass[cssClass.length-1];
		
		let newObject=document.createElement('img');
		newObject.src=lastObject.src;
		for (let j=0; j<lastObject.classList.length; j+=1){
			newObject.classList.add(lastObject.classList.item(j));
		}
		
		let parentObject=lastObject.parentNode;
		parentObject.removeChild(lastObject);
		
		parentObject.insertBefore(newObject,cssClass[0]);
	}
	animatedScreen.marginTop=-animatedScreen.height+animatedScreen.marginTop;
}