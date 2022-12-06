/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1670187449475
}


const createTweetElement = function (object) {
const markup = `
      <section class="all-tweets" id="tweets-container">
        <article>
          <header class="tweet-header">
            <div class="tweeter"><img class ="avatar" src=${tweetData.user.avatars}>
            <h5 class="tweeterName">${tweetData.user.name}</h5></div>
            <div class="username"><h5>${tweetData.user.handle}</h5></div>
          </header>
          <article class="article">
          ${tweetData.content.text}
          </article>
          <hr>
          <footer class="footer">
            <span><h5>${tweetData.created_at}</h5></span>
            <div>
            <i class="icon fa-solid fa-flag"></i>
            <i class="icon fa-sharp fa-solid fa-retweet"></i>
            <i class="icon fa-solid fa-heart"></i>
            </div>
          </footer>
        </article>
      </section>
`
return markup
}

const $tweet = createTweetElement(tweetData);

$(document).ready(function() {
  $("#tweets-container").after($tweet);
});