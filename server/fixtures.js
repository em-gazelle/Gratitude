// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Anna Salazar' }
  });
  var tom = Meteor.users.findOne(tomId);

  var sachaId = Meteor.users.insert({
    profile: { name: 'EndoGurl Warrior' }
  });
  var sacha = Meteor.users.findOne(sachaId);
//insert posts

  var SanchezId = Posts.insert({
    WWW: 'My sister and I have not talked in 5 years. Today I finally caved and told her why I was so angry--now we are once again the best of friends. #whatworkedwell',
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2,
    upvoters: [],
    Yes: 0,
   // upvotersMB: [],
    MB: 0

  });

  Comments.insert({
    postId: SanchezId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    feedback: 'That was a fabulous idea, Jensen! You are really off to a grand new start...'
  });

}