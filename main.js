/**
 * function randombg() {
  var random = Math.floor(Math.random() * 10) + 0;
  var bigSize = ["url('image/random/1.jpg')",
    "url('image/random/2.jpg')",
    "url('image/random/3.jpg')",
    "url('image/random/4.jpg')",
    "url('image/random/5.jpg')",
    "url('image/random/6.jpg')",
    "url('image/random/7.jpg')",
    "url('image/random/8.jpg')",
    "url('image/random/9.jpg')",
    "url('image/random/10.jpg')"
  ];
  document.getElementById("random").style.backgroundImage = bigSize[random];
}
randombg();
 */
/* This section for loding GIF while page loading*/
$(window).on('load', function () {
  $(".se-pre-con").fadeOut(1500);;
});

/*this section for git data from json*/ 

$(function () {
  $.getJSON("book.json", function (data) {
    var row = $('<div class="row my-2"></div>');
    for (var i in data) {
      row.append($('<div class="col-md-3">' +
        '<div class="book-box">' +
        '<img src= "image/book.jpg" class="img-j1" alt="book">' +
        '<span class="p-name-price">' + 'Name :' + data[i].name + '</span>' +
        '<span class="p-name-price">' + 'Price :' + data[i].price + '</span>' +
        '<button type="button" id="add-cart" class="add-cart-button btn btn-primary  btn-block">Add to Cart</button>' +
        '</div>' + '</div>'));
      if (i % 4 == 3) {
        $('#box').append(row);
        row = $('<div class="row my-2"></div>');
      }
    }
  });
});

/* This section for filter data from json file */
$(document).ready(function(){
  $.ajaxSetup({ cache: false });
  $('#search').keyup(function(){
   $('#result').html('');
   $('#state').val('');
   var searchField = $('#search').val();
   var expression = new RegExp(searchField, "i");
   $.getJSON('book.json', function(data) {
    $.each(data, function(key, value){
     if (value.name.search(expression) != -1 )
     {
      $('#result').append('<div class="col-md-3">' +
      '<div class="book-box">' +
      '<img src= "image/book.jpg" class="img-j1" alt="book">' +
      '<span class="p-name-price">' + 'Name :' + value.name + '</span>' +
      '<span class="p-name-price">' + 'Price :' + value.price + '</span>' +
      '<button type="button" id="add-cart" class="add-cart-button btn btn-primary  btn-block">Add to Cart</button>' +
      '</div>' + '</div>');
     }
    });   
   });
  });
  
  
 });



