import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  class: belongsTo(),
  student: belongsTo(),
});
