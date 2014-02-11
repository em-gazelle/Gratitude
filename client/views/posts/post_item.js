Template.postItem.helpers({
	ownPost: function() {
		return this.userId == Meteor.userId();
	},
	submittedText:function() {
		return new Date(this.submitted).toString();
	}
});

Template.postItem.events({
	//Yes
	'click .upvoteYes': function(e) {
	    e.preventDefault();    
	    Meteor.call('upvoteYes', this._id);  
	},
	//MB
	'click .upvoteMB': function(e) {
	    e.preventDefault();    
	    Meteor.call('upvoteMB', this._id);  
	}
});
