import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(){
      console.log('+---save action bubbled up to riends route');

      return false;
    },
    cancel: function() {
      console.log('+---cancel action bubbled up to frinds route');
      return false;
    },
    delete: function(friend) {
      friend.destroyRecord();
    }
  }
});
