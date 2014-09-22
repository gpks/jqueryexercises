$( document ).ready(function() {
        
        
         $('.putting').on('click', function()
         {
                $('ul').append('<li>'+$('input').val())+'</li>'

                $('li').hover(function(){
                 $( this ).css('color', 'red');
                 }, function() {
                 $( this ).css ('color','blue')
        });
         });


      
        
        });