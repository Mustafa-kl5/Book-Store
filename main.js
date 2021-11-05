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
      if (i % 4 == 0) {
        $('#box').append(row.clone(true));
        row = $('<div class="row my-2"></div>');
      }
    }
  });
});

////////////////////////////////



$.getJSON("book.json", function (data) {

  $('#t1').keyup(function () {
    var searchField = $('#t1').val();
    for (var i in data) {
      if (searchField == data[i].name) {
        var row = $('<div class="row my-2"></div>');
        row.append($('<div class="col-md-3">' +
          '<div class="book-box">' +
          '<img src= "image/book.jpg" class="img-j1" alt="book">' +
          '<span class="p-name-price">' + 'Name :' + data[i].name + '</span>' +
          '<span class="p-name-price">' + 'Price :' + data[i].price + '</span>' +
          '<button type="button" id="add-cart" class="add-cart-button btn btn-primary  btn-block">Add to Cart</button>' +
          '</div>' + '</div>'));


        if (i % 4 == 0) {
          $('#box-search').append(row.clone(true));
          row = $('<div class="row my-2"></div>');
        }

      }

    }
  });

});