Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function(){
    return Meteor.subscribe('teams');
  }
});


Router.route('/home', function () {
  this.render('hello')
});


Router.route('/players', function () {
  this.render('players', {
    data: function () {
      return Players.find({});
    }

  })
})

Router.route('/teams/:_id', {
    name: 'team',
    data: function () { 
      return Teams.findOne(this.params._id);
       },
       onBeforeAction: function(){
          Session.set('teamId', this.params._id);
          this.next();
      }
});

Router.route('/player/:_id', {
    name: 'player',
    data: function () { 
      return Players.findOne(this.params._id);
       }
});

Router.route('/teams')
