$( document ).ready(function() {
        /*elem1 = $('#header');
        elem2 = $('.popup');
        elem1.css('color', "DarkSalmon");
        elem3 = $('table td:odd');
        elem3.css('background-color','yellow');
        elem4 = $('table td:even');
        elem4.css('background-color','red');
        elem5 = $('.title');
        elem5.css({'color':'blue', 'font-size': '18px'});
        elem6 = $('.footer');
        elem6.css({'color':'green', 'font-size': '10px'});
        elem7 = $ ('li')
        elem7.slice(2,4).css('color', 'orange');
        elem7.slice(4,7).css('color', 'red');*/

        elem8 = $('div').first();
        elem9 = elem8.next().next().next();
        span1 = elem9.children().last();
        span1.css('background-color','red');
        $('div').slice(0,3).css('font-weight', 'bold')
        $('div').slice(4,6).css('font-weight', 'bold')


        
        });