//comment: to be fixed in the future....this only works when I'm asking it to redirect to this page :9090
//........and.....it loads when page is reloading onto this page, even when not clicked from header.js' page

Template.searchPage.rendered = function() {
	//get search input -- session variable: 
	var seshV = Session.get('searchG');
	alert("thisloadshere, on the SEARCH.JS page. yayyy " + seshV);
	
	//querying the database:
	//var results = Posts.find({doctor: seshV});
	//alert("I've gone too far to go back now!" + results);

	return Posts.find({doctor: seshV}).fetch();
}

//Deps.autorun.searchPage
// Meteor.subscribe(Session.get("searchInfo"));
//	Template.searchPage.helpers(function () {

