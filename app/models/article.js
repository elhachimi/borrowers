import DS from 'ember-data';

export default DS.Model.extend({
  description:  DS.attr('string'),
  createdAt:    DS.attr('date'),
  friend:       DS.belongsTo('friend'),
  state:        DS.attr('string', {defaultValue: 'borrowed'}),
  notes:        DS.attr('string')
});
