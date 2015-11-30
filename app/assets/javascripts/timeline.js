var Timeline = {
  ui: {
    more: '.timeline__more',
    moreButton: '.timeline__more-link'
  },

  new: function(){
    object = Object.create(this);

    object.bindSuccess();
    object.bindTimeago();

    return object;
  },

  bindTimeago: function(){
    $('.timeago').timeago();
  },

  bindSuccess: function(){
    $(this.ui.moreButton).on('ajax:complete', function(event, data, status){
      var tweets = data.responseJSON.tweets;
      this.addTweets(tweets);
      this.setMoreLink(data.responseJSON.meta.next);
    }.bind(this));
  },

  addTweet: function(tweet) {
    var tweet = Tweet.new(tweet);
    $(this.ui.more).before(tweet.html);
  },

  addTweets: function(tweets) {
    for (i in tweets) {
      this.addTweet(tweets[i]);
    }
  },

  setMoreLink(url){
    if (url) {
      $(this.ui.moreButton).prop("href", url);
    } else {
      $(this.ui.more).remove();
    }
  }
}
