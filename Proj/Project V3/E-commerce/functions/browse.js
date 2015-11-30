// JavaScript Document
function Product(name,price,amount){
		this.name=name;
		this.price=price;
		this.amount=amount;
}

/*order=[
		{name:"Bean1",
		 price: 5.99,
		 amount: 5},
		{name:"Bean2",
	     price: 8.99,
		 amount: 3},
		{name:"Bean3",
		 price: 15.99,
		 amount: 2}
	];*/
/*starting amounts for cart
var ls1=0;	
var ls2=0;
var ls3=0;
var ls4=0;
var ls5=0;
var ls6=0;
var ls7=0;
var ls8=0;*/
function addCart(loc){
	var val=document.getElementById(loc);
	val.value++;
}
function delCart(loc){
	var val=document.getElementById(loc);
	if(val.value>0)val.value--;
}
/*new Product((document.getElementById("listing1").name),((document.getElementById(price1).value),((document.getElementById(ls1).value));*/
function cOrder(){
	var order=[
				{name:"Bean1", price: document.getElementById('p1').innerHTML, amount: document.getElementById('ls1').value},
				{name:"Bean2", price: document.getElementById('p2').innerHTML, amount: document.getElementById('ls2').value},
				{name:"Bean3", price: document.getElementById('p3').innerHTML, amount: document.getElementById('ls3').value},
				{name:"Bean4", price: document.getElementById('p4').innerHTML, amount: document.getElementById('ls4').value},
				{name:"Bean5", price: document.getElementById('p5').innerHTML, amount: document.getElementById('ls5').value},
				{name:"Bean6", price: document.getElementById('p6').innerHTML, amount: document.getElementById('ls6').value},
				{name:"Bean7", price: document.getElementById('p7').innerHTML, amount: document.getElementById('ls7').value},
				{name:"Bean8", price: document.getElementById('p8').innerHTML, amount: document.getElementById('ls8').value}
				];
	return order;
}
function subOrder(){
	/*create the order*/
	var order=cOrder();
	/*display the orders*/
	/*document.write("Length of order array = "+order.length+"</br>");
	for(var i=0;i<order.length;i++){
		var obj=order[i];
		for(var prop in obj){
			document.write(prop+"="+obj[prop]+"</br>");
		}
	}*/
	/*convert to a string*/
	var str=JSON.stringify(order);
	/*document.write(str);*/
	var object=JSON.parse(str);
	/*display the order*/
	/*document.write("Length of order array = "+object.length+"</br>");
	for(var i=0;i<object.length;i++){
		var obj=object[i];
		for(var prop in obj){
			document.write(prop+"="+obj[prop]+"</br>");
		}
	}*/
	/*testing local storage*/
	var ssObj=sessionStorage;
	ssObj.clear();
	/*document.write("</br> Display all the local storage before setting </br>");
	for(var name in lsObj){
        document.write(name+"="+lsObj[name]+"<br/>");
        }*/
    //Set a property in local storage
    //With the api
    ssObj.setItem("order", str);
    /*document.write("</br> Display all the local storage after setting </br>");
    for(var name in lsObj){
       document.write(name+"="+lsObj[name]+"<br/>");
       }*/
	 location.assign("Checkout.html");
}