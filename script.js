var itemNames=[];
var itemPrices=[];
var price;
var name;


$(".newItem").click(function(){
    price=$(".itemPrice").val();
    name=$(".itemName").val();
    
    $(".cart").append("<div class='item'><p>"+name+"</p><p>$"+price+"</p></div>");
});
