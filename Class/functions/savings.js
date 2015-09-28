// JavaScript Document
//Branden Hitt
//Sept 28th, 2015
//Purpose: Explore writing functions
function save1(pv,int,n){
	for(var year=1;year<=n;year++){
		pv*=(1+int);
	}
	return pv;
}

function save2(pv,int,n){
	return pv*Math.pow((1+int),n);
}

function save3(pv,int,n){
	return pv*Math.exp(n*Math.log(1+int));
}

function save4(pv,int,n){
	if(n<=0)return pv;
	return save4(pv,int,n-1)*(1+int);
}

function save5(pv,int,n){
	//Declare an array
	fv=[];
	//Calculate all the values in the array
	fv[0]=pv;
	for(var year=1;year<=n;year++){
		fv[year]=fv[year-1]*(1+int);
	}
	return fv;
}

function display(fv){
	//Output the headings for our table
	document.write('<table width="200" border="1">');
	document.write("<tr><th>Years</th><th>Savings</th></tr>");
	for(var year=0;years<fv.length;year++){
		document.write("<tr>");
		document.write("<td>"+year+"</td>");
		document.write("<td>$"+fv[year].toFixed(2)+"</td>");
    	document.write("</tr>");
	}
	document.write("</table>");
}