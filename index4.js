$('document').ready(function(){
    $('select').on('change', function() {
        console.log($(this).val()) 
    //     //select
    // $('#result').html('<p style=color:red>adil</p>')
    console.log($(this).find(':selected').data('price'));
    })
$('#result').text($(this).val()) + '' + $(this).find(':selected').data('price');

// keyup, keydown
$('input').on('keyup',function(){
var letter = $(this).val();

console.log(letter);

var resultText = $('#result').val();
$('#result').text(resultText + letter) // mojno prosto letter
});

$('a').on('click',function(e){
    e.preventDefault();
    // e.stopPropagation();
    console.log('achor clicked');
});
$('container3').on('click', function(e){
    console.log('div clicked')
});




});