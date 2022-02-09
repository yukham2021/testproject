var select1=document.getElementById('select1');
var select2=document.getElementById('select2');

var unit1=select1.value
var unit2=select2.value

select1.addEventListener('change',function(){
    var newunit1=select1.value;
    if(newunit1==unit2)
    {
        //update old value and new value
        unit2=unit1;
        select2.value=unit2;
        unit1=newunit1;
    }
})

select2.addEventListener('change',function(){
    var newunit2=select2.value;
    if(newunit2==unit1)
    {
        //update old value and new value
        unit2=unit1;
        select1.value=unit1;
        unit1=newunit2;
    }
})