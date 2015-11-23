// JavaScript Document
/*display: function(location){
	var cell=document.getElementById(location);
}

check: function(guess,guessLoc){
	for(var x=0;x<9;x++){
		for(var y=0;y<9;y++){
			if(guess===key(guessLoc){
				return 0;		
			}else{
				return 1;
			}
		}
	}
		
}*/



function enter(location){
	
	var key1 = [4,3,5,2,6,9,7,8,1,
				6,8,2,5,7,1,4,9,3,
				1,9,7,8,3,4,5,6,2,
				8,2,6,1,9,5,3,4,7,
				3,7,4,6,8,2,9,1,5,
				9,5,1,7,4,3,6,2,8,
				5,1,9,3,2,6,8,7,4,
				2,4,8,9,5,7,1,3,6,
				7,6,3,4,1,8,2,5,9];
	
			var loc=document.getElementById(location);
			console.log(loc);
			var box=prompt("Input Number:");
			if(box===(key[8][8])){
				loc.innerHTML=box;
			}else{
				loc.innerHTML="X";
			}
}