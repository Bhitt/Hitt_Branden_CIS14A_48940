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
function filPage(){
	//get session storage
	var $strOrd=sessionStorage.getItem("order");
	var $order=JSON.parse($strOrd);
	var total=0;
	//variables for loop
	var $start=0;
	var $end=$order.length;
	var place=["ls1","ls2","ls3","ls4","ls5","ls6","ls7","ls8"];
	//send into page
	for(var i=$start;i<$end;i++){
		var $ord=$order[i];
		var loc=document.getElementById(place[i]);
		total+=(parseFloat($ord['price']))*(parseFloat($ord['amount']));
		if($ord['amount']>0){
				loc.value=$ord['amount'];
		}
	}
	//set total on page
	var tot=document.getElementById('total');
	tot.value=total.toFixed(2);
	console.log(tot.value);
	
}
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
				{name:"Pink Floyds", price: document.getElementById('p1').innerHTML, amount: document.getElementById('ls1').value},
				{name:"Bertie Bott's Beans", price: document.getElementById('p2').innerHTML, amount: document.getElementById('ls2').value},
				{name:"Fortune Beans", price: document.getElementById('p3').innerHTML, amount: document.getElementById('ls3').value},
				{name:"Misery Beans", price: document.getElementById('p4').innerHTML, amount: document.getElementById('ls4').value},
				{name:"Necronomibeans", price: document.getElementById('p5').innerHTML, amount: document.getElementById('ls5').value},
				{name:"Mystery Beans", price: document.getElementById('p6').innerHTML, amount: document.getElementById('ls6').value},
				{name:"Void Seeds", price: document.getElementById('p7').innerHTML, amount: document.getElementById('ls7').value},
				{name:"Gnome Pillows", price: document.getElementById('p8').innerHTML, amount: document.getElementById('ls8').value}
				];
	return order;
}
function subOrder(cho){
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
	if(cho==1)location.assign("Checkout.html");
	
}