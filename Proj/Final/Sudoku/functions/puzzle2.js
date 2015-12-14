// JavaScript Document
var mistakes=0;

/*function checkTest(){
	var val=document.getElementById("00");
	if(val.value == 5){
		val.value="X";
		val.style.color="#ff0000";
	}else{
		val.value="Y";
		val.style.color="#00ff00";
	}
}*/

function check(){
	var re = /[1-9]/;
	var count=0; 
	var key1 = [[4,2,7,9,3,1,5,6,8],
				[8,9,5,7,4,6,2,3,1],
				[6,3,1,8,2,5,9,4,7],
				[5,4,8,2,1,7,3,9,6],
				[9,1,3,4,6,8,7,5,2],
				[7,6,2,5,9,3,8,1,4],
				[2,5,9,6,7,4,1,8,3],
				[1,8,4,3,5,2,6,7,9],
				[3,7,6,1,8,9,4,2,5]];
				
	for(var x=0;x<9;x++){
		for(var y=0;y<9;y++){
			var loc= x+"";
			var loc2= y+"";
			loc=loc+loc2;
			var val=document.getElementById(loc);
			var key=key1[x][y];
			if(val.value==key){
				/* Increment count for win */
				count++;
				val.style.color="#000000";	
			}else if(val.value==""){
				/* Empty cell */
			}else{
				val.value="X";
				val.style.color="#ff0000";
				mistakes++;	
			}
		}
	}
	if(count >= 81){
		location.assign("WinPage.html");
	}
	var correct=document.getElementById("Correct");
	correct.value="Correct Numbers : "+(count-29);
	var errors=document.getElementById("Mistakes");
	errors.value="Mistakes : "+mistakes;
	var rem=document.getElementById("Remaining");
	rem.value="Remaining Numbers : "+(81-count);
}
function SHome(){
	location.assign("SudokuHome.html");	
}