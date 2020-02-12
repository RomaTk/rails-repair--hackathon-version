const minRailType=-3;
const maxRailType=3;

let changeRail=function(squares,railToChange,l,r,pressed,music){
	if ((railToChange==null)||(pressed==true)){
		railToChange=null;
		let objects=squares.objects;
		for (let i=objects.length-1;i>0; i-=1){
			if (objects[i].type!=0){
				railToChange=i;
				break;
			}
		}
	}
	
	if (railToChange!=null){
		squares.objects[railToChange].type=squares.objects[railToChange].type-l+r;
		if (squares.objects[railToChange].type<minRailType){
			squares.objects[railToChange].type=minRailType;
		}else if (squares.objects[railToChange].type>maxRailType){
			squares.objects[railToChange].type=maxRailType;
		}
		
		if ((l!=0)||(r!=0)){
			playHummerMedia(music);
		}
		
		addStylesSquare(squares.objects[railToChange].element,squares.objects[railToChange].type);
		
		let objects=squares.objects;
		if (squares.objects[railToChange].type==0){
			if ((objects.length-railToChange-1)*squares.height<=squares.height+trainHeight){
				railToChange=null;
				railToChange=changeRail(squares,railToChange,l,r,pressed,music);
			}
		}
	}
	return railToChange;
}