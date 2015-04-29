playerStats = new Mongo.Collection("playerstats");
Players = new Mongo.Collection("players");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

Template.body.events({
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
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});

  Template.body.helpers({
    playerstats: function () {
      return playerStats.find({});
    }
  })

  Template.first.events({
    'click .pass_att': function () {
      playerStats.update(this._id, {$inc: {pass_att: 1}});
    
    },
    'click .pass_comp': function () {
      playerStats.update(this._id, {$inc: {pass_comp: 1}});
    
    },
    'click .shots_on_frame': function () {
      playerStats.update(this._id, {$inc: {shots_on_frame: 1}});
    
    },
    'click .shots': function () {
      playerStats.update(this._id, {$inc: {shots: 1}});
    
    },
    "click .delete": function () {
    playerStats.remove(this._id);
    
    }
  })

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
