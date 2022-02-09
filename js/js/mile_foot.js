var box1=document.getElementById('box1');
var box2=document.getElementById('box2');
var select1=document.getElementById('select1');
var select2=document.getElementById('select2');

select1.addEventListener('change',function(){
    var box1_value=box1.value;
    var box2_value=box1_value*5280;
    var select2_value=select2.options[select2.selectedIndex].value;
    var select1_value=select1.options[select1.selectedIndex].value;
    
    if(select1_value=='mile' && select2_value=='foot'){
        box2.value=box2_value;
    }else if(select1_value=='foot' && select2_value=='foot'){
        box2.value=box1_value;
    }else if(select1_value=='foot' && select2_value=='mile'){
        box2.value=box1_value/5280;
    }else if(select1_value=='mile' && select2_value=='mile'){
        box2.value=box1_value;
    }
})

select2.addEventListener('change',function(){
    var box2_value=box2.value;
    var box1_value=box2_value/5280;
    var select2_value=select2.options[select2.selectedIndex].value;
    var select1_value=select1.options[select1.selectedIndex].value;
   
    if(select2_value=='foot' && select1_value=='mile'){
        box1.value=box1_value;
    }else if(select2_value=='mile' && select1_value=='mile'){
        box1.value=box2_value;
    }else if(select2_value=='mile' && select1_value=='foot'){
        box1.value=box2_value*5280;
    }else if(select2_value=='foot' && select1_value=='foot'){
        box1.value=box2_value;
    }

})

