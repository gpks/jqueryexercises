$( document ).ready(function() {
          $('#kwadrat2').fadeIn('slow', 
                function(){
                        $('#kwadrat3').fadeIn(3000, 
                        function() 
                        { $('#kwadrat4').fadeIn(3000);});
                                });
             
        
        
         $('.change1').on('click', function()
         {
                $('#kwadrat1').animate({
                opacity: 0.5, width: '500px', height: '500px'
                }, 4000);
                        });

        $('.change2').on('click', function()
         {
                $('#kwadrat1').animate({
                opacity: 1, width: '200px', height: '200px'
                }, 4000);
                        });

          
        });