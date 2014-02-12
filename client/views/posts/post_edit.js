Template.postEdit.events({
	'submit form': function(e) {
		e.preventDefault();
		var currentPostId = this._id;
		var postProperties = {
			WWW: $(e.target).find('[name=WWW]').val(),
		}

		Posts.update(currentPostId, {$set: postProperties}, function(error) {
			if (error) {
				//display error
				throwError(error.reason);
			} else {
				Router.go('postPage', {_id: currentPostId});
			}
		});
	},

	'click .delete': function(e) {
		e.preventDefault();
		if (confirm("Delete this review?")) {
			var currentPostId = this._id;
			Posts.remove(currentPostId);
			Router.go('postsList');
		}
	}

});