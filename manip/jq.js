$( document ).ready(function() {
        elem1=$('head');
        elem1.append('<title>Manipulacja DOM</title>');
        var a=1
        $('li').each(function (){
                
                $(this).text('elem'+a)
                a++
        });

         elem2 = $('li').slice(0,5)
         elem2.each(function(){
                var txt = $(this).text();
                $(this).replaceWith('<p>'+txt+'</p>')

         });

         elem3 = $('li').slice(2,5)
         elem3.each(function(){
                var txt = $(this).text();
                $(this).replaceWith('<div>'+txt+'</div>')

         });
         // $('ul').remove();

         $('.disable').one('click', function()
         {
                alert("już po");
                $(this).attr("disabled", "disabled")
         })

         
        
        // elem2 = $('li').slice(0,5)
        // elem2.unwrap()
        // elem2.each(function (){

                
        //         $(this).wrap('<p></p>')
            
        // });

        // elem3 = $('li').slice(7,10)
        // elem3.unwrap()
        // elem3.each(function (){
                
        // $(this).wrap('<div></div>')
            
        // });
        


        
        });