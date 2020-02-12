const countOfMusicBurst=3;

let uploadBurstMusic=function(name){
	let burst={
		'count':countOfMusicBurst,
		'objects':[]
	};
	for(let i=0; i<countOfMusicBurst; i+=1){
		let audioElement = new Audio("audio/burst/"+i+".mp3");
		burst.objects.push(audioElement);
		audioElement.currentTime=0;
	}
	return burst;
}

let uploadStandartMusic=function(){
	let standart={
		'begin':new Audio("audio/standart/begin.mp3"),
		'loop':new Audio("audio/standart/loop.mp3")
	}
	standart.begin.currentTime=0;
	standart.loop.currentTime=0;
	standart.begin.addEventListener('ended',function(event) {
		standart.loop.loop=true;
		standart.loop.play();
	});
	return standart
}
let uploadSmallEffects=function(){
	let smallEffects={
		'hummer':new Audio("audio/smallEffects/hummer.mp3")
	}
	smallEffects.hummer.currentTime=0;
	return smallEffects
}

let uploadMusic=function(){
	let music={
		'burst':uploadBurstMusic(),
		'standart':uploadStandartMusic(),
		'smallEffects':uploadSmallEffects()
	}
	return music
}

let playHummerMedia=function(music){
	music.smallEffects.hummer.currentTime=0;
	music.smallEffects.hummer.play();
}

let startBurstMusic=function(music){
	music.burst.objects[getRandomInt(music.burst.count)].play();
	music.standart.begin.pause();
	music.standart.loop.pause();
}