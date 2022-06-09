$('document').ready(function(){
    $('#example').on('click', 'button', function(e){ //slushaem na example => vo vtorom argumente slushaem na button 
        // we use that because we mighn't have this element; better to listen for the element whos in DOM already + mb mnogo buttonov;
        console.log(this);
        $(this).parent().addClass('highlighted');
         //$(this)===$('button')
     // event delegation



    });


});