// JavaScript Document
/*function Product(name,price,amount){
		this.name=name;
		this.price=price;
		this.amount=amount;
}*/

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
function addCart(loc,prc){
	var val=document.getElementById(loc); //count for amount of product
	var price=document.getElementById(prc).innerHTML;  //price of individual product
	var total=document.getElementById('total');	//running total
	val.value++; //increment one product to the cart
	total.value=(parseFloat(total.value)+parseFloat(price)).toFixed(2);  //add price of product to total
}
function delCart(loc,prc){
	var val=document.getElementById(loc);  //count for amount of product
	var price=document.getElementById(prc).innerHTML;  //price of individual product
	var total=document.getElementById('total');	//running total
	if(val.value>0){
		val.value--;
		total.value=(parseFloat(total.value)-parseFloat(price)).toFixed(2);  //subtract price of product from total
	}
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
	/*convert to a string*/
	var str=JSON.stringify(order);
	var object=JSON.parse(str);
	/*testing local storage*/
	var ssObj=sessionStorage;
	ssObj.clear();
    //Set a property in local storage
    //With the api
    ssObj.setItem("order", str);
	location.assign("Checkout.html");
}