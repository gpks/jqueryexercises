$( document ).ready(function() 

{
  var elem1=$('div')
   $('div').on('click', function(){
    elem1.removeData('status');
    console.log($(this).data('status'))
    $(this).data('status', 'focused');
    console.log($(this));
    console.log($(this).data('status'));
    console.log('1' + $('#kwadrat1').data('status'));
    console.log('2' + $('#kwadrat2').data('status'));
     console.log('3' + $('#kwadrat3').data('status'));
      console.log('4' + $('#kwadrat4').data('status'));
       console.log('5' + $('#kwadrat5').data('status'));
                
});
   })