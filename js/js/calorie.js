var ft=document.getElementById('ft');
ft.addEventListener('blur',function(){
    if(ft.value=="")
    {
        document.getElementById('feet_message').innerHTML="Please enter feet";
    }
    else
    {
        document.getElementById('feet_message').innerHTML="";
    }
})

var form = document.querySelector('#calculate')

form.addEventListener('click', function (event) {

    var ft = parseInt(document.getElementById('ft').value)
    var inches = parseInt(document.getElementById('inches').value)

    var total_inches = ft * 12 + inches;
    var wt = parseInt(document.getElementById('wt').value)
    var age = parseInt(document.getElementById('age').value)

    var gender_radios = document.querySelectorAll('input[name="gender"]')//cannot do ' '&' ' together
    var result;
    for (var gradio of gender_radios) {
        if (gradio.checked) {
            if (gradio.value == "male") {
                result = 66 + (6.23 * wt) + (12.7 * total_inches) - (6.8 * age);
                break;
            }
            else{
                result = 655 + (4.35 * wt) + (4.7 * total_inches) - (4.7 * age);
                break;
            }
        }
    }

    document.getElementById('result').value = result;
    event.preventDefault();
})