//only authors can edit posts
ownsDocument = function(userId, doc) {
	return doc && doc.userId === userId;
}