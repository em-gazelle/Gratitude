Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var $feedback = $(e.target).find('[name=feedback]');

    var comment = { 
      feedback: $feedback.val(),
      postId: template.data._id
    };


    Meteor.call('comment', comment, function(error, commentId) {
      if (error){
        throwError(error.reason);
      } else {
        $body.val('');
      }
    });
  }
});
