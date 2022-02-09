var doctors=[
    {
        name:"Dr. Rosanee Valyasevi",
        title:"specialities",
        specialities:"Endocrinology (Diabetes, Thyroid, Hormone, Nutrition)"
    },
    {
        name:"Dr. Jun Srimanunthiphol",
        title:"specialities",
        specialities:"Endocrinology (Diabetes, Thyroid, Hormone, Nutrition)"
    },
    {
        name:"Dr. Rosanee Valyasevi",
        title:"specialities",
        specialities:"Endocrinology (Diabetes, Thyroid, Hormone, Nutrition)"
    },
    {
        name:"Assist.Prof.Dr. Varaphon Vongthavaravat",
        title:"specialities",
        specialities:"Endocrinology (Diabetes, Thyroid, Hormone, Nutrition)"
    },
    {
        name:"Dr. Rachanon Murathanun",
        title:"specialities",
        specialities:"Endocrinology (Diabetes, Thyroid, Hormone, Nutrition)"
    },
    {
        name:"Dr. Nuttha Ungnapatanin",
        title:"specialities",
        specialities:"Endocrinology (Diabetes, Thyroid, Hormone, Nutrition)"
    },
]

var dr=document.getElementsByClassName("row1")
for(var count=0;count<dr.length;count++){
    dr[count].innerHTML=doctors[count].name+"<br>"+"<hr>";
    dr[count].innerHTML+="<span class='text-success'>"+doctors[count].title+"</span><br>";
    dr[count].innerHTML+=doctors[count].specialities+"<br>";   
}

var imgsmall=document.querySelectorAll("img")
for(var count=0;count<imgsmall.length;count++){
    imgsmall[count].classList.add('img1')
}
var btn=document.querySelectorAll("button")
for(var count=0;count<btn.length;count++){
    btn[count].classList.add('btn-primary')
}