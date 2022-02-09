/*var form=document.getElementById("cal_form")

form.addEventListener('submit',function(event){

    var num1=parseInt(document.getElementById('num1').value)
    var num2=parseInt(document.getElementById('num2').value)

    var result=num1+num2;
    
    document.getElementById('result').value=result;
    event.preventDefault();
})

var subtraction=document.querySelector('#subtraction')
subtraction.addEventListener('click',function(event){
    var num1=parseInt(document.getElementById('num1').value)
    var num2=parseInt(document.getElementById('num2').value)

    var result=num1-num2;
    
    document.getElementById('result').value=result;
    event.preventDefault();
})
var multiplication=document.querySelector('#multiplication')
multiplication.addEventListener('click',function(event){
    var num1=parseInt(document.getElementById('num1').value)
    var num2=parseInt(document.getElementById('num2').value)

    var result=num1*num2;
    
    document.getElementById('result').value=result;
    event.preventDefault();
})
var division=document.querySelector('#division')
division.addEventListener('click',function(event){
    var num1=parseInt(document.getElementById('num1').value)
    var num2=parseInt(document.getElementById('num2').value)

    var result=num1/num2;
    
    document.getElementById('result').value=result;
    event.preventDefault();
})*/


var action=document.getElementById("action");

action.addEventListener('change',function(){
var num1=parseInt(document.getElementById('num1').value)
var num2=parseInt(document.getElementById('num2').value)
var result;
//var discount1=parseInt(document.getElementById('discount1').value);
//console.log(discount1)
var radios=document.querySelectorAll('input[name="discount"]')
//console.log(radios)
var discount;
for(var radio of radios)
{
    discount=parseInt(radio.value);
    //console.log("discount"+discount)
    break;
}
if(action.value=="+")
{
    result=num1+num2;
}
else if(action.value=="-")
{
    result=num1-num2;
}
else if(action.value=="*")
{
    result=num1*num2;
}
else
{
    result=num1/num2;
}
document.getElementById('result').value=result-(result*(discount/100));
})