import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      classes: this.get('store').findAll('class', 1),
      students: this.get('store').findAll('student'),
    });
  },
});
