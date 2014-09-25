$( document ).ready(function() {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };


    var points=0
    function timer(sec, data){
        var timeplace = $('#time')
        var timeamount = sec;
         timecount=setInterval(function(){
            timeplace.children().remove()
            timeamount--;
            if (timeamount >= 0){
                timeplace.append('<p>pozostało Ci '+timeamount+' sekund</p>')
            }
            else
            {
                alert("czas minął");
                nextq(data);
                clearInterval(timecount);

            }
        } , 1000)

    }




    function nextq(data) { 
      if (data.length>15){
        var rand = getRandomInt(0,(data.length)-1);
        var elem1= $('#quest');

        elem1.children().remove();

        var elem2 = $('#selectable');
        elem2.children().remove();
        elem1.append('<p>'+data[rand]['question']+'</p>')
        var answ= data[rand]['answers'];
        data.splice(rand, 1);
        timer(10, data);

        for (var i=0; i<answ.length; i++) {

            elem2.append('<button id=ans'+i+'>'+answ[i].ans+'</button>')
            $('#ans'+i).data('val',answ[i].value)                      


            $('#ans'+i).on('click', function(){
                if ($(this).data('val') == true) {
                    points++;
                    alert('OK!! Punkty '+ points);



                }
                else
                {
                    alert('Błąd!!');}
                    clearInterval(timecount)
                    nextq(data);




                });
        }   

    }
    else {

        $('#main').children().remove();
        alert("Koniec gry!! Zdobyłeś "+points+' punktów.' );
        window.location.reload();

    }
};





$('#start').one('click', function(){
  $.ajax ({ url: 'trivia.json', dataType: 'json'})
  .done (function(data) {console.log('success');
    nextq(data);
});



});
});

