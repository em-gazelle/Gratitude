Template.errors.helpers({
	errors: function() {
		return Errors.find();
	}
});
//making errors appear/disappear after seen. Specifically, when same link created and redirected
Template.error.rendered = function() {
	var error = this.data;
	Meteor.defer(function() {
		Errors.update(error._id, {$set: {seen: true}});
	});
};