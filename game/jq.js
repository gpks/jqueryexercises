$( document ).ready(function() {
        function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
        };
        var clickcount=0;

        function game(){
               var rand = getRandomInt(0,19);
               console.log(rand);

               $('#'+rand).css('background-color', 'blue');
               $('#'+rand).one('click',function(){
                $( this ).css('background-color', 'white');
                clickcount++;
                $('#wynik').html(clickcount);
                game();
                });

       }


       $('button').on('click',function (){
        console.log('ok');
        setTimeout(function(){
                $('table').hide();
                alert("twój wynik to " + clickcount);

        }
        , 5000);
        
        game();
});   
});