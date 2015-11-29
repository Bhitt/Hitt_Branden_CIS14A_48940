// JavaScript Document

/*function enter(location){
	
	var loc=document.getElementById(location);
	var box=prompt("Input Number:");
	if(box.match(re)!=null){
		if(box == key1[location[0]][location[1]]){
			loc.innerHTML=box;
		}else{
			loc.innerHTML="X";
			loc.style.color="#ff0000";
		}
	}
}*/
function checkTest(){
	var val=document.getElementById("00");
	if(val.value == 5){
		val.value="X";
		val.style.color="#ff0000";
	}else{
		val.value="Y";
		val.style.color="#00ff00";
	}
}

function check(){
	var re = /[1-9]/;
	var count=0; 
	var key1 = [[4,3,5,2,6,9,7,8,1],
				[6,8,2,5,7,1,4,9,3],
				[1,9,7,8,3,4,5,6,2],
				[8,2,6,1,9,5,3,4,7],
				[3,7,4,6,8,2,9,1,5],
				[9,5,1,7,4,3,6,2,8],
				[5,1,9,3,2,6,8,7,4],
				[2,4,8,9,5,7,1,3,6],
				[7,6,3,4,1,8,2,5,9]];
				
	for(var x=0;x<9;x++){
		for(var y=0;y<9;y++){
			var loc= x+"";
			var loc2= y+"";
			loc=loc+loc2;
			var val=document.getElementById(loc);
			var key=key1[x][y];
			if(val.value == key || val.value==""){
				/* Increment count for win */
				count++;	
			}else{
				val.value="X";
				/*val.style.color="#ff0000";*/	
			}
		}
	}
	
	if(count>= 45){
		location.assign("WinPage.html");
	}
}