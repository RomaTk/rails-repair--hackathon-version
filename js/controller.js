let addControllerKeyboard=function(doneEvent){
	/* keys */
	document.addEventListener('keyup', function(event) {
		if (event.key == 'ArrowLeft') {
			if (doneEvent.array[doneEvent.array.length-1]!='lu'){
				doneEvent.array.push('lu');
			}
		}else if (event.key == 'ArrowRight') {
			if (doneEvent.array[doneEvent.array.length-1]!='ru'){
				doneEvent.array.push('ru');
			}
		}
	});
	
	document.addEventListener('keydown', function(event) {
		if (event.key == 'ArrowLeft') {
			if (doneEvent.array[doneEvent.array.length-1]!='ld'){
				doneEvent.array.push('ld');
			}
		}else if (event.key == 'ArrowRight') {
			if (doneEvent.array[doneEvent.array.length-1]!='rd'){
				doneEvent.array.push('rd');
			}
		}
	});
	
	/* touches */
	document.getElementById("leftController").addEventListener('mousedown', function(event) {
		if (doneEvent.array[doneEvent.array.length-1]!='ld'){
			doneEvent.array.push('ld');
		}
	});
	
	document.getElementById("rightController").addEventListener('mousedown', function(event) {
		if (doneEvent.array[doneEvent.array.length-1]!='rd'){
			doneEvent.array.push('rd');
		}
	});
	
	document.getElementById("leftController").addEventListener('mouseup', function(event) {
		if (doneEvent.array[doneEvent.array.length-1]!='lu'){
			doneEvent.array.push('lu');
		}
	});
	
	document.getElementById("rightController").addEventListener('mouseup', function(event) {
		if (doneEvent.array[doneEvent.array.length-1]!='ru'){
			doneEvent.array.push('ru');
		}
	});
}