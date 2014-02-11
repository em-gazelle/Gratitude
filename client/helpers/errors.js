//local, client-only collection

//this will let the client's browser keep track of whether the client has seen an error without communicating with the server

Errors = new Meteor.Collection(null);

throwError = function(message) {
	Errors.insert({message: message, seen: false})
}
clearErrors = function() {
	Errors.remove({seen: true});
}