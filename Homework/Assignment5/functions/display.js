// JavaScript Document
//Branden Hitt
//Sept 28th, 2015
//Purpose: functions for filling an array and display
function fillHwr(n){
	//create array
	var a=[];
	//fill array
	for(var h=0;h<=n;h++){
		a[h]=h;
	}
	//pass back array
	return a;
}

function dis(n,a,b,c,d,e){
	for(var hours=0;hours<=n;hours++){
				document.write("<tr>");
				  document.write("<td>"+a[hours]+"</td>");
				  document.write("<td>$"+b[hours].toFixed(2)+"</td>");
				  document.write("<td>$"+c[hours]+"/hour</td>");
				  document.write("<td>$"+d[hours].toFixed(2)+"</td>");
				  document.write("<td>$"+e[hours].toFixed(2)+"</td>");
				document.write("</tr>");
			}
}
