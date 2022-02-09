var elements=document.getElementsByClassName("box")
console.log(elements[1])
var color=['red','green','blue'];
for(var count=0;count<elements.length;count++)
{
    elements[count].style.backgroundColor=color[count];
    elements[count].style.color="white";
    elements[count].style.fontWeight="bold";
    elements[count].style.border="2px solid white";
}

var box1=document.getElementsByClassName("box1")
var count=0;
for(count=0;count<box1.length;count++)
{
    if(count%2==0)
    {
        box1[count].classList.add('news_even')
    }
    else
    {
        box1[count].classList.add('news_odd')
    }
}

var trainer=[
    {
        name:"John",
        email:"Jhon@gmail.com",
        address:"US"
    },
    {
        name:"David",
        email:"David@gmail.com",
        address:"US"
    },
    {
        name:"Marie",
        email:"Marie@gmail.com",
        address:"US"
    },
]
var trainers=document.getElementsByClassName("trainer")//element array
for(var count=0;count<trainer.length;count++)
{
    trainers[count].innerHTML=trainer[count].name+"<br>";
    trainers[count].innerHTML+=trainer[count].email+"<br>";
    trainers[count].innerHTML+=trainer[count].address+"<br>";
    //trainers[count].classList.add('train')
}

var divs=document.getElementsByTagName("div")
console.log(divs);

var events=document.querySelectorAll('.event')//nodes array //class use(.)
console.log(events)
for(var count=0;count<events.length;count++)
{
    events[count].innerHTML=trainer[count].name+'<br>'
    events[count].innerHTML+=trainer[count].email+"<br>";
    events[count].innerHTML+=trainer[count].address+"<br>";
    //events[count].classList.add('train')
}

var events2=document.querySelector('#event2')
events2.classList.add('event2')
