import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('+-- save action bubbled up to the friends new route');

      return true;
    },

    cancel: function () {
      console.log('+-- cancel action bubbled up to the friends new route');

      return true;
    }
  }
});
