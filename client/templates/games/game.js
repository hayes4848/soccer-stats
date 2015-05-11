if (Meteor.isClient) {
  Template.team.events({
  "submit .newGame": function (event) {
    // This function is called when the new game form is submitted
      
    var gameId = Games.insert({
      ourScore: 0,
      theirScore: 0,
      teamId: Session.get('teamId'),
      createdAt: new Date(), // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username  // username of logged in user
    });

    Session.set('gameId', gameId);

    event.preventDefault();
     Router.go('testGame'); 
  }
  });

  // console.log(gameId);

  Template.testGame.helpers({
    players: function () {
      return Players.find({teamId: Session.get('teamId')});
    },

    game: function () {
      return Games.find({teamId: Session.get('teamId')}, {sort: {x: 1}, limit: 1 });
    }
  })
}  
