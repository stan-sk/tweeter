/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

// const tweetData = {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1670187449475
// }

const createTweetElement = function (object) {
  let $tweet = `
      
        <article class="all-tweets">
          <header class="tweet-header">
            <div class="tweeter"><img class ="avatar" src=${object.user.avatars}>
            <h5 class="tweeterName">${object.user.name}</h5></div>
            <div class="username"><h5>${object.user.handle}</h5></div>
          </header>
          <article class="article">
          ${object.content.text}
          </article>
          <hr>
          <footer class="footer">
            <span><h5>${object.created_at}</h5></span>
            <div>
            <i class="icon fa-solid fa-flag"></i>
            <i class="icon fa-sharp fa-solid fa-retweet"></i>
            <i class="icon fa-solid fa-heart"></i>
            </div>
          </footer>
        </article>
      
    `
  return $tweet
}

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    let $tweet = createTweetElement(tweet);

    $(document).ready(function() {
      $("#tweets-container").after($tweet);
    });
  }
  return;
}

renderTweets(data)



$(document).ready(function() {

  renderTweets(data);

  $('.tweetform').submit(function(event) {
    event.preventDefault();
    $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(this).serialize()
    })
  });

});

