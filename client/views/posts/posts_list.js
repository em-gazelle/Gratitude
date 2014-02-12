Template.postsList.helpers({
	posts: function() {
	    //sort by post submit date with "Mongo's sort operator". In creating posts chapter, sorting posts
	//    return Posts.find({}, {sort: {submitted: -1}});

		//PostListControllers!!! yay, but currently, you have to manually refresh
		return Posts.find({}, {sort: this.sort});	
	},

//Template.postsList.helpers({
	hasMorePosts: function() {
		this.posts.rewind();
		return Router.current().limit() == this.posts.fetch().length;
	}
});