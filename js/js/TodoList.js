var input_text=document.getElementById('todotext');
var addbutton=document.getElementById('addbutton');

addbutton.addEventListener('click',function(){
    var input=input_text.value ;
    if(input.length>0){
    var li_item=document.createElement('li');
    var checkbox=document.createElement('input');
    var label=document.createElement('label');
    var editbutton=document.createElement('button');
    var deletebutton=document.createElement('button');
    var list_text=document.createElement('input');

    list_text.type="text";
    checkbox.type="checkbox";
    label.innerText=input;
    editbutton.innerText="Edit";
    deletebutton.innerText="Delete";
    editbutton.classList.add('btn-success');
    deletebutton.classList.add('btn-info');

    li_item.appendChild(list_text);
    li_item.appendChild(checkbox);
    li_item.appendChild(label);
    li_item.appendChild(editbutton);
    li_item.appendChild(deletebutton);

    var ul=document.getElementById('todolist');
    ul.appendChild(li_item);
    input_text.value="";

    //add actions on button edit and delete
    editbutton.classList.add('edit');
    deletebutton.classList.add('delete');

    var edit_button=document.querySelectorAll('button.edit')//button is tagname     .edit is classname
    var delete_button=document.querySelectorAll('button.delete')
   for (var x of edit_button) {
       x.onclick=editTask
   }
   for(var i=0;i<delete_button.length;i++){
       delete_button[i].onclick=deleteTask
   }
   
    edit_button.onclick=editTask;
    delete_button.onclick=deleteTask;
    }
})

/*var editTask=function(){
console.log('helo')
}
var deleteTask=function(){
    console.log('helo')
}*/
function editTask(){
    var list_item=this.parentNode;
    var edit_textbox=list_item.querySelector('input[type=text]');
    var label_text=list_item.querySelector('label');
    var editclass=list_item.classList.contains('editmode');

    if(!editclass){
        edit_textbox.value=label_text.innerText;
        list_item.classList.add('editmode');
    }
    else{
        edit_textbox.value=label_text.innerText;
        list_item.classList.remove('editmode');
    }
}

function deleteTask(){
    var listitem=this.parentNode;
    console.log(listitem)
    var parent_ul=listitem.parentNode;
    parent_ul.removeChild(listitem);
}