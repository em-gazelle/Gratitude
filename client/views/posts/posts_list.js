Template.postsList.helpers({
  posts: function() {
    //sort by post submit date with "Mongo's sort operator". In creating posts chapter, sorting posts
    return Posts.find({}, {sort: {submitted: -1}});
  },

//Template.postsList.helpers({
  hasMorePosts: function() {
    this.posts.rewind();
    return Router.current().limit() == this.posts.fetch().length;
  }
});