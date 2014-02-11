Template.header.helpers({
	activeRouteClass: function(/* route names*/) {
		var args = Array.prototype.slice.call(arguments, 0);
		args.pop();

		var active = _.any(args, function(name) {
			return Router.current().route.name === name
		});

		return active && 'active';
	}
});


Template.header.events({
	'submit form': function(e) {
    	e.preventDefault();

    	var searchG = document.getElementById('searchInfo').value;
    	Session.set("searchG", searchG);

    	alert(searchG);
    
		var seshV = Session.get('searchG');
		alert("seshv is being stored as: " + seshV);

   		Router.go('searchPage');    
	}
});

/*
Template.header.events({
  'submit form': function(e) {
    e.preventDefault();

    	var searchInfo = document.getElementById('searchInfo').value;
    	alert(searchInfo);

   
  //  	var results = db.Posts.find({doctor: /searchInfo/g});
    //	alert("here are mine!" + results);

   Router.go('searchPage');    

    }
});
*/




    /*	
	var searchResults = function(searchInfo) {
		db.Posts.find({doctor: /searchInfo/});
		return postId;
	};
*/


/* FAILED    	
    	var SeshVar = Session.set("searchInfo");
    	var SeshVar1 = Session.set('searchInfo');
    	//testing to see if stored as session variable:
    	alert("Stored as session variable: " + SeshVar);
    	alert("Stored, var1" + SeshVar1);
 	 	var Stored = Session.get("SeshVar");
 		alert("Accessing Session Variable: " + Stored);
*/





//	var searchResults = searchInfo ;

/*
	function(searchInfo) {
		db.Posts.find({doctor: /searchInfo/});
		return postId;
	};
*/


//	alert("new" + searchResults);
