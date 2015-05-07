 if (Meteor.isClient) {
  Template.players.events({
  "submit .new-player": function (event) {
    // This function is called when the new task form is submitted

    var first_name = event.target.first_name.value;
    var last_name = event.target.last_name.value;
    var position = event.target.position.value;
    var number = event.target.number.value;

    Players.insert({
      first_name: first_name,
      last_name: last_name,
      position: position, 
      number: number,
      createdAt: new Date(), // current time
      teamId: Session.get('teamId')
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
  });

  Template.players.helpers({
    players: function () {
      return Players.find({teamId: Session.get('teamId')});
    }
  })
}
