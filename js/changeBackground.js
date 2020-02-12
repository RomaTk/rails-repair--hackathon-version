const numberMaps=2;
let changeBackgroundTypeAnimation=function(animatedScreen,idMap){
	for(let classI=0; classI<animatedScreen.animatedBackgroundClasses.length;classI+=1){
		let objects = document.getElementsByClassName(animatedScreen.animatedBackgroundClasses[classI]);
		for (let i=0; i<objects.length; i+=1){
			objects[i].src="images/map/"+idMap+"/"+(classI-1)+".png";
		}
	}
}