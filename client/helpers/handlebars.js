Handlebars.registerHelper('pluralize', function(n, thing) {
	//pluralizer
	if (n === 1) {
	return '1' + ' ' + thing;
	} else {
	return n + ' '  + thing + 's'; 
	}
});

