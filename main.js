

    function randombg(){
        var random= Math.floor(Math.random() * 10) + 0;
        var bigSize = ["url('image/random/1.jpg')",
                       "url('image/random/2.jpg')",
                       "url('image/random/3.jpg')",
                       "url('image/random/4.jpg')",
                       "url('image/random/5.jpg')",
                       "url('image/random/6.jpg')",
                       "url('image/random/7.jpg')",
                       "url('image/random/8.jpg')",
                       "url('image/random/9.jpg')",
                       "url('image/random/10.jpg')"];
        document.getElementById("random").style.backgroundImage=bigSize[random];
      }
      randombg();