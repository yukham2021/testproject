var fah=document.getElementById('fah');
var cel=document.getElementById('cel');

fah.addEventListener('keyup',function(){
    var fvalue=fah.value;
    var celsius=(fvalue-32)*5/9
    cel.value=celsius;
})

cel.addEventListener('keyup',function(){
    var cvalue=cel.value;
    var fahrenheit=(cvalue*9/5)+32
    fah.value=fahrenheit;
})