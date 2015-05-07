




if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.team.helpers({
    team: function () {
      return Teams.find({_id: this.params._id});
    }
  })

  Template.statsLayout.helpers({
    playerstats: function () {
      return playerStats.find({});
    }
  })

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

  Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
