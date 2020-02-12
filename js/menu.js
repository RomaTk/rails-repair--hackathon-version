const menuElement=document.getElementById('menu');
const centralImageMenu=document.getElementById('centralImageMenu');
const maxScoreObject=document.getElementById('maxScore');
const reloadTimeCentralImage=10;

let uploadMenu = function(speedReloadCentralImage,opacity,opacitySpeed,score,intervals){
	let centralImage={
		'element':centralImageMenu,
		'changedPosition':0,
		'height':centralImageMenu.offsetHeight,
		'width':centralImageMenu.offsetWidth
	}
	maxScoreObject.innerText="The highest limit number of points earned: "+score.maxScore;
	let expandImage=function(){
		centralImage.changedPosition+=speedReloadCentralImage/2;
		centralImage.height+=speedReloadCentralImage;
		centralImage.width+=speedReloadCentralImage;
		centralImage.element.style.marginTop=-centralImage.changedPosition+'px';
		centralImage.element.style.marginLeft=-centralImage.changedPosition+'px';
		centralImage.element.style.height=centralImage.height+"px";
		centralImage.element.style.width=centralImage.width+"px";
		speedReloadCentralImage+=speedReloadCentralImage;
		opacity=opacity-opacitySpeed;
		opacitySpeed+=opacitySpeed;
		menuElement.style.opacity=opacity;
		if (opacity<=0){
			menuElement.style.opacity=0;
			hideMenu();
			clearInterval(intervals.menu);
		}
	}
	
	let returnImage=function(){
		let opacity=parseInt(menuElement.style.opacity);
		centralImage.changedPosition=0;
		centralImage.height="20vh";
		centralImage.width="20vh";
		centralImage.element.style.marginTop='0px';
		centralImage.element.style.marginLeft='0px';
		centralImage.element.style.height="20vh";
		centralImage.element.style.width="20vh";
		speedReloadCentralImage+=speedReloadCentralImage;
		opacity=opacity+opacitySpeed;
		opacitySpeed+=opacitySpeed;
		menuElement.style.opacity=opacity;
		if (opacity>1){
			menuElement.style.opacity=1;
			clearInterval(intervals.menu);
			location.reload();
		}
	}
	
	if (menuElement.style.display!="none"){
		menuElement.addEventListener('mouseup', function(event) {
			startGame();
			intervals.menu=setInterval(expandImage,reloadTimeCentralImage);
		});
	}else{
		intervals.menu=setInterval(returnImage,reloadTimeCentralImage);
		showMenu();
	}
}

let hideMenu=function(){
	menuElement.style.display="none";
}
let showMenu=function(){
	menuElement.style.display="block";
}