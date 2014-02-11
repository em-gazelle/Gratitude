Comments = new Meteor.Collection('comments');

//creating the Meteor Method to post new comments:

Meteor.methods({
	comment: function(commentAttributes) {
		var user = Meteor.user();
		var post = Posts.findOne(commentAttributes.postId);

/// ERROR REPORTING -- REMOVED, TEMPORARILY, FOR DEBUGGING AND CHANGING BODY TO EMPATHY PURPOSES

		if (!user)
			{throw new Meteor.Error(401, "Please login to submit a review."); }
		
		if (!commentAttributes.postId)
			{throw new Meteor.Error(422, "You must submit a WWW."); }

		comment = _.extend(_.pick(commentAttributes, 'postId', 'WWW'), {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});
		//update post with #of comments
		Posts.update(comment.postId, {
			$inc: {commentsCount: 1}
		});

		
		Comments.insert(comment);
	}
});