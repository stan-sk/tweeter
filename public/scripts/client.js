/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escapeFn = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function (object) {
  let $tweet = `
        <article class="all-tweets">
          <header class="tweet-header">
            <div class="tweeter"><img class ="avatar" src=${object.user.avatars}>
            <h5 class="tweeterName">${object.user.name}</h5></div>
            <div class="username"><h5>${object.user.handle}</h5></div>
          </header>
          <article class="article">
          ${escapeFn(object.content.text)}
          </article>
          <hr>
          <footer class="footer">
            <span><h5>${timeago.format(object.created_at)}</h5></span>
            <div>
            <i class="icon fa-solid fa-flag"></i>
            <i class="icon fa-sharp fa-solid fa-retweet"></i>
            <i class="icon fa-solid fa-heart"></i>
            </div>
          </footer>
        </article>

    `
  return $tweet;
}

const renderTweets = function(tweets) {
  const tweetsAll = [];
  for (const tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    tweetsAll.push($tweet)
  }
  $("#tweets-container").html(tweetsAll.reverse());
  return;
}

const loadTweets = function () {
  $.ajax({
    type: "GET",
    url: "/tweets",
    success: function(tweet) {
      renderTweets(tweet);
    }
  })
}

$(document).ready(function() {

  loadTweets();

  $("div.newTweet").click(function() {
    $("#tweet-text").focus();
  });

  $('.tweetform').submit(function(event) {
    event.preventDefault(); 
    
    const $tweetlength = $('#tweet-text').val().length
      if ($tweetlength === 0 || $tweetlength > 140){
        return $(".errorMsg").css("visibility", "visible");
      }
    
    const tweet = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",  
      data: tweet,
      success: function(data) {
        $(".errorMsg").css("visibility", "hidden");
        $(".counter").text(140);
        loadTweets();
      }
    })
    this.reset();
  })
});


