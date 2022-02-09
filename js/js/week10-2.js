var students = ['thiri', 'Aye Aye', 'david', 'michael'];
console.log('number of students' + students.length);
var element = document.getElementById('name');
console.log(element);
element.innerHTML = students[0];
var element_std = document.getElementById('student');
console.log(element_std);
element_std.innerHTML = "<br>No of students: " + students.length;

//Array
var employees = new Array('david', 'John', 'victoria');
console.log(employees.length);
var items = new Array();
console.log(items.length);

//Object
var employee = {
    name: 'thiri',
    age: 23,
    address: 'mdy'
}
console.log(employee.name + "," + employee.age + "," + employee.address);//employee["name"]+employee["age"]+employee["address"]
console.log(".......................")

//employee2 object
var employee2 = {
    name: 'Aye Aye',
    age: 22,
    address: 'magway'
}
console.log(employee2.name + "," + employee2.age + "," + employee2.address);
var element3 = document.getElementById('emp1');
element3.innerHTML = employee2.name + "<br>" + employee2.age + "<br>" + employee2.address;
console.log(".......................")

var hotel = {
    name: 'Sedona',
    address: 'ygn',
    email: 'admin@sedona.com',
    rooms: 100,
    booked: 35
}
console.log("available room " + (hotel.rooms - hotel.booked));
console.log(".......................")

//Object Arrays
var employee1 = [
    {
        name: 'David',
        age: 23,
        address: 'Japan'
    },
    {
        name: 'Thiri',
        age: 30,
        address: 'Ygn'
    },
    {
        name: 'Hnin Hnin',
        age: 25,
        address: 'Mdy'
    }
]
console.log(employee1[0].name + "," + employee1[0].age);
console.log(employee1[1].name + "," + employee1[1].address);
console.log(employee1[2].name + "," + employee1[2].age);

//2.function call
display(employee1[0]);
//1.function definition
function display(employee) {
    console.log(".................")
    console.log(employee.name);
    console.log(employee.age);
    console.log(employee.address);

}

var hotels = [
    {
        hotel_name: 'December',
        capacity: 50,
        reservation: 30
    },
    {
        hotel_name: 'Shwe Htee',
        capacity: 30,
        reservation: 20
    },
    {
        hotel_name: 'Paris',
        capacity: 20,
        reservation: 15
    }
]

//chk_available(hotels[0].capacity,hotels[0].reservation) //function call
var result = chk_available(hotels[1].capacity, hotels[1].reservation) //function call
console.log("no of available room " + result)

function chk_available(rooms, booked)//function definition
{
    //console.log("Available rooms "+(rooms-booked))
    return rooms - booked;
}
console.log(".......................")
//assignment
var products= [
    {//product[0]
        name:'product1',//product[0].name(or)product[0]["name"]
        price: 3500,    //product[0].price(or)product[0]["price"]
        discount: 0.03,
        qty: 23
    },
    {
        name:'product2',
        price:1800,
        discount:0,         //product[1].discount(or)product[1]["discount"]
        qty:15
    },
    {
        name:'product3',
        price:2000,
        discount:0.07,
        qty:16
    }
]
//function definition
function subtotal(product)//function responsible for calculation within one object of product
{
var total=(product.price-(product.discount*product.price))*product.qty;
return total;
}
//function call
//var subtotal1=subtotal(products[0]);
//var subtotal2=subtotal(products[1]);
//var subtotal3=subtotal(products[2]);

var total=0;
for(var count=0;count<products.length;count++)//product.length is 3
{
    total+=subtotal(products[count]);//product[0].price/discount/qty(or)product[1]...(or)product[2]...
}
//display total
//var total=subtotal+subtotal2;
console.log("Total cost "+total)
console.log(".......................")
//array (taken value)
var marks=[89,25,65,80,90,45];
for(var count=0;count<marks.length;count++)
{
    console.log(marks[count]);
}
console.log(".......................")
//array (addition)
var total=0;
var marks=[89,25,65,80,90,45];
for(var count=0;count<marks.length;count++)
{
    total+= marks[count];
}
console.log("Total "+total);
console.log(".......................")
//array (total average)
var students=[
    {name:"Aung Ko Ko",//students[0]
    sub1:65,
    sub2:87,
    sub3:78
    },
    {name:"Su Sandi",//students[1]
    sub1:69,
    sub2:77,
    sub3:78
    },
    {name:"thiri",//students[2]
    sub1:55,
    sub2:67,
    sub3:72
    }
]
function fun(student){              //average function responsible for one object
    var std_avg=(student.sub1+student.sub2+student.sub3)/3;
    return std_avg;
}
var total_avg=0;
for( var i=0;i<students.length;i++){
    total_avg+=fun(students[i]);//fun(students[0])...fun(students[1])....fun(students[2])
}
console.log("Students total average "+total_avg);
console.log(".......................")