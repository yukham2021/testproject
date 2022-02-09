var subj1=78; //number
var subj2=85;
var subj3=67;

var totalmarks=subj1+subj2+subj3;
console.log("total marks"+totalmarks);

var averagemarks=totalmarks/3;//decimal points
console.log("avg marks"+averagemarks.toFixed(3));
console.log("avg marks"+averagemarks.toPrecision(3));

var averagemarks=parseInt(totalmarks/3); 

var avg="35";
console.log('avg marks'+averagemarks);
console.log('avg marks'+avg*5);
console.log('avg marks'+avg/7);

console.log('avg marks'+avg-5);
console.log('avg marks'+(parseInt(avg)-5));

console.log('avg marks'+avg+5);
console.log('avg marks'+(parseInt(avg)+5));

var salary=350000;
var bonus=salary*0.07;
var wfh_deduction=salary*0.03;
var actual_salary=(salary+bonus)-wfh_deduction;
console.log('actual salary is: '+ (parseInt(actual_salary)));

var total=0;
total+=10; //total=total+10
console.log("total is: "+total);
total-=3.7;//total=total-3.7;
console.log("total is: "+total);

//increment ++,-- (postoperation)
var count=100;
var count1=count++; //count1=count; count=count+1
console.log(count1);
console.log(count);
 
var count=50;
var count2=++count;
console.log(count2);
console.log(count);


var count=20;
var count3=--count;
console.log(count3);
console.log(count);

var count=20;
var count3=count--;
console.log(count3);
console.log(count);

var result=3*5/4-3;
console.log(result);

var result=4+5/3;
console.log(result);

var num1=100;
var num=(num1++)/3;
console.log(num);//33.333333333333

var num2=100;
var num=(++num2)/3;
console.log(num);//33.6666666666

var items=[100,150,180,225];
console.log(items);
console.log("no of items:"+items.length); 
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
console.log(items[6]);
console.log(items[7]);

var items=["100",150,180,225]; //100 is string
console.log(items);

var product1=3500;//Assignment 1
var discount1=0.03;
var discount_p=product1*discount1;
var qty1=23;
var total1=(product1-discount_p)*qty1;

var product2=1800;
var discount2=0;
var discount_p2=product2*discount2;
var qty2=15;
var total2=(product2-discount_p2)*qty2;

var total=total1+total2;
console.log(total);

var subject=["Myanmar","English","Physics","Chemistry","Biology"];//Assignment2
console.log(subject[0]);
console.log(subject[1])
console.log(subject[2]);
console.log(subject[3]);
console.log(subject[4]);