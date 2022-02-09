var ul=document.getElementById('itemlist');
console.log(ul.children);//array of element
console.log(".............0")
for(var count=0;count<ul.children.length;count++)
{
    console.log(ul.children[count]);//element
    //console.log(ul.children[count].textContent);//element's content
}
console.log(".............1")

console.log(ul.firstElementChild);
console.log(ul.lastElementChild)
console.log(".............2")

var firstChild=document.querySelectorAll('li:first-child');
console.log(firstChild) //first child element
console.log(".............3")

var lastChild=document.querySelectorAll('li:last-child');
console.log(lastChild) //last child element
console.log(".............4")

var oddChildren=document.querySelectorAll('li:nth-child(odd)');
console.log(oddChildren)
for(let count=0;count<oddChildren.length;count++)
{
    console.log(oddChildren[count].textContent)
    oddChildren[count].textContent="Pineapple"
}
console.log(".............5")
var item2=document.getElementById('two')
console.log(item2.parentNode);
console.log(".............6")
console.log(item2.previousElementSibling)
console.log(".............7")
console.log(item2.nextElementSibling)
console.log(".............8")

var lis=document.createElement('li');
var text=document.createTextNode('Apple');
lis.appendChild(text);
ul.appendChild(lis);
ul.insertBefore(lis,item2)
console.log(".............9")

//create div element and add it in body tag
var divs=document.createElement('div');
var text=document.createTextNode('new div');
divs.appendChild(text);
var body=document.querySelector('body');
body.insertBefore(divs,ul);

console.log(".............10")
//ul.removeChild(item2)