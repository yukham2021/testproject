
//loop(for)
for(var x=0;x<=50;x++)
{
    console.log("value of x is "+x)
}
console.log(".................")
for (var x=5;x<=1000;x+=5)
{
    console.log("value of x is "+x)
}
console.log(".................")
for (var value=50;value>1;value--)
{
    console.log("value "+value)
}
console.log(".................")
for (value=100;value>1;value-=2)
{
    console.log("value "+value)
}
console.log(".................")
var number=2;
for(var count=1;count<=12;count++)
{
    console.log(number+" * "+count+"="+(number*count));
}
console.log(".................")
var number=1;
for(var row=0;row<3;row++)
{
    var text="";
    for(var col=0;col<3;col++)
    {
        text=text+" "+number;
        number++;
    }
    console.log(text);
}
console.log(".................")
var students=[
    [45,50,65,50],
    [65,89,60,60],
    [78,80,76,45]
];
//rows, cols
for( var rows=0;rows<students.length;rows++)
{
    var text="";
    for(var cols=0;cols<students[rows].length;cols++)
    {
        text=text+","+students[rows][cols];
    }
    console.log(text);
}
console.log(".................")
//properties of object
//for property in object
var student={
    name:'kyaw kyaw',
    grade:'7',
    address:'mdy'
}
console.log(student.name);
console.log(student.grade);
for (let x in student)//x is properties name
{
    console.log(x+":"+student[x]);//student[x] is student[name](or)[grade](or)[address]
}
console.log(".................")
//for in is used in array object
var hotels=[
    {
        name:'Sedona',
        email:'sales@dedona.com',
        address:'ygn'
    },
    {
        name:'City Hotel',
        email:'sales@dedona.com',
        address:'mdy'
    },
    {
        name:'View',
        email:'sales@dedona.com',
        address:'ygn'
    },
]
for(let count=0;count<hotels.length;count++)//count is array index[0,1,2]
{
    for(let x in hotels[count])//x is properties name
    {
        console.log(x +":"+hotels[count][x]);//hotels[0].[name](or)[email](or)[address]
                                             //hotels[1].[name](or)[email](or)[address]  
                                             //hotels[2].[name](or)[email](or)[address]     
    }
}
console.log(".................")
//array (taken value with function inside)(for each)
var fruits=['orange','apple','mango','banana'];
fruits.forEach(function (fruit)
{
    console.log(fruit);
})
console.log(".................")
//array (taken value with for of)
var fruits1=['orange','apple','mango','banana'];
for(let y of fruits1){
    console.log(y);
}
console.log(".................")