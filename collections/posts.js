Posts = new Meteor.Collection('posts');

Posts.allow({
	update: ownsDocument,
	remove: ownsDocument
});

Posts.deny({
	update: function(userId, post, fieldNames) {
		//may only edit the following fields:
		return (_.without(fieldNames, 'WWW').length > 0);
	}
});

Meteor.methods({
	 upvoteYes: function(postId) {    
  		var user = Meteor.user();    
  		// ensure the user is logged in    
  		if (!user) {     
  			throw new Meteor.Error(401, "You need to login to upvote");
  		}    
  		var post = Posts.findOne(postId);    
  		if (!post) {     
  			throw new Meteor.Error(422, 'Post not found');    
  		}
  	/*	if (_.include(post.upvoters, user._id)) {     
  			throw new Meteor.Error(422, 'Already upvoted this post');    
  		}
  	*/	Posts.update(post._id, {      
  			$addToSet: {upvoters: user._id},      
  			$inc: {Yes: 1}    
  		});  
  	},

	 upvoteMB: function(postId) {    
  		var user = Meteor.user();    
  		// ensure the user is logged in    
  		if (!user) {     
  			throw new Meteor.Error(401, "You need to login to upvote");
  		}    
  		var post = Posts.findOne(postId);    
  		if (!post) {     
  			throw new Meteor.Error(422, 'Post not found');    
  		}
/*  		if (_.include(post.upvoters, user._id)) {     
  			throw new Meteor.Error(422, 'Already upvoted this post');    
  		}
  */		Posts.update(post._id, {      
  			$addToSet: {upvoters: user._id},      
  			$inc: {MB: 1}    
  		});  
  	},

	post: function(postAttributes) {
		var user = Meteor.user(),
			postWithSameLink = Posts.findOne({WWW: postAttributes.WWW});
		//ensure the user is logged in
		if (!user) {
			throw new Meteor.Error(401, "Sorry! You need to login to submit a WWW.");
		}	
		//pick out whitelisted keys
		var post = _.extend(_.pick(postAttributes, 'WWW'), {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime(),
			commentsCount:0,
			upvoters: [],
			Yes: 0,
//			upvotersMB: [],
			MB: 0
		});

		var postId = Posts.insert(post);

		return postId;
	}

});

