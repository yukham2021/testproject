/*var btnred=document.querySelector("#btnred");//btn red element
btnred.onclick=function(){
    var content=document.getElementById('textcontent');//p element
    content.style.color="red";
    content.style.backgroundColor="lightyellow";
}
var btngreen=document.querySelector("#btngreen");
btngreen.onclick=function(){
    var content=document.getElementById('textcontent');
    content.style.color="green";
    content.style.backgroundColor="lightgreen";
}
//Using Event Listener
var btnblue=document.querySelector("#btnblue");
btnblue.addEventListener("click",function(){
    var content=document.getElementById('textcontent');
    content.style.color='blue';
    content.style.backgroundColor="lightblue";
})*/

/*document.getElementById('btnred').onclick=changeColor;
document.getElementById('btngreen').onclick=changeColor;
document.getElementById('btnblue').onclick=changeColor;

function changeColor()
{
    var content=document.getElementById('textcontent');
    content.style.color="red";
}*/

var btnred=document.getElementById('btnred');
//btnred.onclick=changeColor;           //function call
btnred.addEventListener('click',changeColor);       //functioncall
var btngreen=document.getElementById('btngreen');
//btngreen.onclick=changeColor;
btngreen.addEventListener('click',changeColor);
var btnblue=document.getElementById('btnblue');
//btnblue.onclick=changeColor;
btnblue.addEventListener('click',changeColor);

//function definition
function changeColor(event)
{
    var content=document.getElementById('textcontent');
    if(event.target==btnred){
        content.style.color="red"
    }
    else if(event.target==btngreen){
        content.style.color="green"
    }
    else{
        content.style.color="blue"
    }
}

var form=document.getElementById('login_form');
form.addEventListener('submit',function(event){
    var uname=document.getElementById('username');
    console.log(uname.value);
    var pwd=document.getElementById('password');
    console.log(pwd.value)
    event.preventDefault();
})