jQuery(function($) {
  $('.field--name-field-product-multiple-images img').click(function(){
    var images = $(this).attr('src');
    $('.field--name-field-product-image img').attr('src',images);
  });
});