if (Meteor.isClient) {
  Template.teams.events({
  "submit .new-team": function (event) {
    // This function is called when the new task form is submitted

    var team_name = event.target.team_name.value;
    var coach = event.target.coach.value;
    var divPlace = event.target.divPlace.value;
    

    Teams.insert({
      team_name: team_name,
      coach: coach,
      divPlace: divPlace, 
      createdAt: new Date(), // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username  // username of logged in user
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  },
  "click .delete": function () {
    Tasks.remove(this._id);
  }

  });

  Template.teams.helpers({
    teams: function () {
      return Teams.find({});
    }
  })

  

}
