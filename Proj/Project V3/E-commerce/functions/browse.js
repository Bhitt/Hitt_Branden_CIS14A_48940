// JavaScript Document
function Product(name,price,amount){
		this.name=name;
		this.price=price;
		this.amount=amount;
}

order=[
		{name:"Bean1",
		 price: 5.99,
		 amount: 5},
		{name:"Bean2",
	     price: 8.99,
		 amount: 3},
		{name:"Bean3",
		 price: 15.99,
		 amount: 2}
	];

function subOrder(){
	/*display the orders*/
	document.write("Length of order array = "+order.length+"</br>");
	for(var i=0;i<order.length;i++){
		var obj=order[i];
		for(var prop in obj){
			document.write(prop+"="+obj[prop]+"</br>");
		}
	}
	/*convert to a string*/
	var str=JSON.stringify(order);
	/*get local storage*/
	
	/*add to local storage*/
}