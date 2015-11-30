var Tweet = {
  ui: {
    date: '.tweet__date'
  },

  html: null,
  resource: null,

  new: function(tweet){
    object = Object.create(this);
    object.resource = tweet;

    object.render();
    object.bindTimeago();

    return object;
  },

  bindTimeago: function(){
    this.html.find(this.ui.date).timeago();
  },

  render: function(){
    this.html = $(JST['templates/tweet']({ tweet: this.resource }));
  }
}
