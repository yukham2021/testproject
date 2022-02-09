$(document).ready(function(){

    console.log($('#div1'));
    $('#div1').text("Jquery");
    $('#div1').html("<h2>Jquery</h2>");
    $('#div1').css('background-color','red');
    $('.div2').css('color','blue');
    $('.div2').css('letter-spacing','3px');
    $('ul').append('<li>Electronic Device</li>');
    $('ul').append('<li>Stationary</li>');
    $('ul').append('<li>Cosmetic</li>');
    $('ul').prepend('<li>Food and Snacks</li>');
    $('ul').before('<h2>ONline shop</h2>');
    $('#div1').hide();

    $('.hide').on('click',function(){
        $('.red').hide();
    })
    $('.show').on('click',function(){
        $('.red').show();
    })
    $('.toggle').on('click',function(){
        $('.red').toggle();
    })


})