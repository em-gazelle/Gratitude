Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() {
		return [Meteor.subscribe('comments'), Meteor.subscribe('notifications')];
	}
});

PostsListController = RouteController.extend({
	template: 'postsList',
	increment: 5,
	limit: function() {
		return parseInt(this.params.postsLimit) || this.increment;
	},
	findOptions: function() {
		return {sort: this.sort, limit: this.limit()};
	},
	waitOn: function() {
		return Meteor.subscribe('posts', this.findOptions());
	},
	data: function() {
//		return {posts: Posts.find({}, this.findOptions())};
		return {
			posts: Posts.find({}, this.findOptions()),
			nextPath: this.nextPath()
			//nextPath: this.route.path({postsLimit: this.limit() + this.increment})
		};
	}
});

NewPostsListController = PostsListController.extend({
	sort: {submitted: -1, _id: -1},
	nextPath: function() {
		return Router.routes.newPosts.path({postsLimit: this.limit() + this.increment})
	}
});

BestPostsListController = PostsListController.extend({
	sort: {votes: -1, submitted: -1, _id: -1},
	nextPath: function() {
		return Router.routes.bestPosts.path({postsLimit: this.limit() + this.increment})
	}
});

Router.map(function() {
	
	this.route('home', {
		path: '/',
		controller: NewPostsListController
	});

	this.route('about', {
		path: '/about',
		template: ''
	});
/////////////make template, define template, insert!!!!!/////////////////


	this.route('newPosts', {
		path: '/new/:postsLimit?',
		controller: NewPostsListController
	});

	this.route('bestPosts', {
		path: '/best/:postsLimit?',
		controller: BestPostsListController
	});

	this.route('postPage', {
		path: '/posts/:_id',
		waitOn: function() {
			return [
				Meteor.subscribe('comments', this.params._id),
				Meteor.subscribe('singlePost', this.params._id)
				];
		},
		data: function() { return Posts.findOne(this.params._id); }
	});
	
	this.route('postEdit', {
		path: '/posts/:_id/edit',
		waitOn: function() {
			return Meteor.subscribe('singlePost', this.params._id);
		},
		data: function() {
			return Posts.findOne(this.params._id);
		}
	});
	
	this.route('postSubmit', { 
		path: '/newdoctor/',
		template: 'postSubmit'
		//	disableProgress:true
	});

	this.route('searchPage', {
		path: '/searchResults',
		template: 'searchPage'
	});

/*	this.route('postsList', {
		path: '/:postsLimit?',
		controller: PostsListController
	});
*/
});

var requireLogin = function() {
	if (! Meteor.user()) {
		this.render('accessDenied');
		this.stop();
	}
}
//Router.before(requireLogin, {only: 'postSubmit'});
Router.before(function() {
	clearErrors();
});