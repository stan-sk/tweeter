$(document).ready(function() {
  
  $('#tweet-text').keydown(function(){
    const tweetLength = $(this).val().length;
     
    $('#tweet-text').keydown(function(){
      const tweetLength = $(this).val().length + 1;
      const counter = $(this).siblings().children()[1];
      $(counter).text(140-tweetLength);
        
      if (tweetLength > 140) {
        $(counter).addClass('counterRed');
      } else {
        $(counter).removeClass('counterRed');
      }
    });
  });







}); 