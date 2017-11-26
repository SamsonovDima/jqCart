$(function() {
    $.ajax({
        type: 'GET',
        url: 'filterContent.html',
        cache: false,
        success: function(html){
            $('#content').append(html);
        }
    });

$('.filterwork').click(function(){
       $.ajax({
           type: 'GET',
           url: 'filterContent2.html',
           cache: false,
           success: function(html){
               $('#content').empty();
               $('#content').append(html);
           }
       });
});


$('.filterany').click(function(){
       $.ajax({
            type: 'GET',
            url: 'filterContent3.html',
            cache: false,
            success: function(html){
                $('#content').empty();
                $('#content').append(html);
            }
       });
});


$('.filterall').click(function(){
    $.ajax({
        type: 'GET',
        url: 'filterContent.html',
        cache: false,
        success: function(html){
            $('#content').empty();
            $('#content').append(html);
        }
    });
});

});


$(function(){
  'use strict'; 
  // инициализация плагина
  $.jqCart({
      buttons: '.add_item',
      handler: './php/handler.php',
      cartLabel: '.label-place',
      visibleLabel: true,
      openByAdding: false,
      currency: '&euro;'
  }); 
  // Пример с дополнительными методами
  $('#open').click(function(){
    $.jqCart('openCart'); // открыть корзину
  });
  $('#clear').click(function(){
    $.jqCart('clearCart'); // очистить корзину
  }); 
});


