var name="htc";
var quantity=10;
var cost=10000;
var subtotal = quantity*cost;
var shipping=500;
var total_cost = subtotal+shipping;

var elname = document.getElementById("name");
elname.textContent=name;

var elquantity = document.getElementById("quantity");
elquantity.textContent=quantity;

var elcost = document.getElementById("cost");
elcost.textContent=cost;

var elshipping = document.getElementById("shipping");
elshipping.textContent=shipping;

var eltotal_cost = document.getElementById("total_cost");
eltotal_cost.textContent=total_cost;