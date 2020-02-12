const nameOfSquareClass='rail';
const startType="0";
const additionalObjects=1;
const reloadTime=10;
const minSpeed=3;
const MaxSpeed=10;
const addToSpeed=0.0009;


/* utility */
let addStylesSquare = function(object,type){
	object.classList.add(nameOfSquareClass);
	object.src="images/rails/"+type+".png";
}


let createSquares = function(object,map,begin){
	let objectWidth=object.offsetWidth;
	let objectHeight=object.offsetHeight;
	
	let numberOfSquares=Math.floor(objectHeight/objectWidth)+1+additionalObjects;
	let squares={
		'width':objectWidth,
		'height':objectWidth,
		'objects':[]
	};
	
	
	for(let i=0; i<numberOfSquares; i+=1){
		let imageType=numberOfSquares-1-begin;
		let square=document.createElement('img');
		object.appendChild(square);
		squares.objects.push({
			'element':square,
			'type':map[imageType],
			'marginTop':0
		});
		
		/*styling*/
		addStylesSquare(square,map[imageType]);
		begin+=1;
		
	}
	
	/* add additional images for rendering */
	squares.objects[0].marginTop=-objectWidth*additionalObjects;
	squares.objects[0].element.style.marginTop=squares.objects[0].marginTop+'px';
	
	return squares
}



let run=function(rail,squares,speed,map,begin,doneEvents,music,burst,animatedScreen,intervals,score){
	let addSquare = function(object,squares){
		let square=document.createElement('img');
		object.insertBefore(square, squares.objects[0].element);
		squares.objects.unshift({
			'element':square,
			'type':map[begin],
			'marginTop':0
		});
		
		/*styling*/
		addStylesSquare(square,map[begin]);
		begin+=1;
		
		/* add additional images for rendering */
		squares.objects[0].marginTop=-squares.width*additionalObjects;
		squares.objects[0].element.style.marginTop=squares.objects[0].marginTop+'px';
	}

	/* define which rail to change */
	railToChange=null;


	
	/*speed = pixels per second*/
	let oneStep=function(){
		let objects=squares.objects;
		objects[0].marginTop=objects[0].marginTop+speed;
		/*continue rail*/
		if (objects[0].marginTop>=0){
			if(railToChange!=null){
				railToChange+=1;
			}
			rail.removeChild(objects[objects.length-1].element);
			objects.pop();
			let wasMarginTop=objects[0].marginTop;
			objects[0].marginTop=0;
			objects[0].element.style.marginTop='0px';
			addSquare(rail,squares)
			objects[0].marginTop=objects[0].marginTop+wasMarginTop;
			objects[0].element.style.marginTop=objects[0].marginTop+"px";
		}else{
			objects[0].element.style.marginTop=objects[0].marginTop+"px";
		}
		
		/* controller events */
		pressed=false;
		for(let i=0; i<doneEvents.array.length-1; i+=1){
			if (((doneEvents.array[i]=='ld')&&(doneEvents.array[i+1]=='rd'))||((doneEvents.array[i]=='rd')&&(doneEvents.array[i+1]=='ld'))){
				pressed=true;
				break;
			}
		}
		
		if (pressed==true){
			doneEvents.l-=1;
			doneEvents.r-=1;
		}
		for(let i=0; i<doneEvents.array.length; i+=1){
			if (doneEvents.array[i]=='lu'){
				doneEvents.l+=1;
				doneEvents.array.splice(i, 1)
			}else if(doneEvents.array[i]=='ru'){
				doneEvents.r+=1;
				doneEvents.array.splice(i, 1)
			}else{
				if (i!=doneEvents.array.length-1){
					doneEvents.array.splice(i, 1)
					i-=1;
				}
			}
		}
		
		/* change rail */
		railToChange=changeRail(squares,railToChange,doneEvents.l,doneEvents.r,pressed,music);
		
		
		
		if (doneEvents.l>0){
			doneEvents.l=0;
		}
		if (doneEvents.r>0){
			doneEvents.r=0;
		}
		
		
		/* lose */
		let isLoose=checkLose(squares);
		if (isLoose){
			doLose(music,burst,intervals);
			saveScore(score);
		}
		
		/* change background */
		changeObjects();
		changeAnimatedScreen(animatedScreen,speed);
		if ((score.value+1)%1000==0){
			changeBackgroundTypeAnimation(animatedScreen,getRandomInt(3));
		}
		
		/*update score*/
		changeScore(score,score.value+1);
		
		
			
		
		
		if (speed>=MaxSpeed){
			speed=minSpeed;
		}
		speed+=addToSpeed;
		
	}
	intervals.run=setInterval(oneStep,reloadTime);
}
