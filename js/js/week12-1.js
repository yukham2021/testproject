var products=['noodle','drink','snack','instant food'];
//while
//inititalize starting point
//end point condition
//step
var count=0;
while(count<products.length)
{
    console.log(products[count]);
    count++
}
console.log("..................")
var count=4;
while(count<products.length)
{
    console.log(products[count]);
    count++
}
var count=4;
do{
    console.log(products[count-1]);
    count++;
}while(count<products.length)
console.log("..................")
var count=0;
while(count<products.length)
{
    if(products[count]=='noodle')
    {
        console.log(products[count]);
    }
    else if(products[count]=='snack')
    {
        console.log('snack');
    }
    else{
        console.log('neither noodle nor snack')
    }
    count++;
}
console.log("..................")
var subjects=[76,65,54,39];
var count=0;
while(count<subjects.length)
{
    if(subjects[count]>=40 && subjects[count]<65)
    {
        console.log("Pass");
    }
    else if(subjects[count]>=65 && subjects[count]<75)
    {
        console.log("Average");
    }
    else 
    {
        console.log('Default')
    }
    switch(subjects[count])
{
    case 75:
        console.log("..............D");break;
    case 65:
        console.log("....................Avg");break;
    default:
        console.log("...................Pass");break;   
}
    count++;
}
console.log("..................")

var name="yin yin";
switch(name){
    case "yin yin":
        document.getElementById('result').innerHTML="it is yin yin";
        console.log("it is yin yin");break;
        default:
            console.log("you are not yin yin");break;
}

var days=[1,2,3,4,5,6,7]
var count=1;
while (count<days.length)
{
    if(days[count]==6)
    {
        console.log("saturday")
    }
   count++; 
}
console.log("........................")
var today=new Date(); //Date class-> use new Keyword
console.log(today)
console.log(today.getDate())
console.log(today.getDay())
console.log(today.getMonth()+1)
console.log(parseInt(today.getTime()/(365*24*60*60*1000)));
console.log(today.getHours())
console.log("........................")








