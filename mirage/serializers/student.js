import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  serialize(){
    let json = JSONAPISerializer.prototype.serialize.apply(this, arguments);

    if (Array.isArray(json.data)) {
      json.data.forEach((data, i) => {
        json.data[i].relationships.classes.data = this.classSerialize(data);
      });
    } else {
      json.data.relationships.classes.data = this.classSerialize(json.data);
    }

    return json;
  },

  classSerialize(data) {
    return data.relationships.classes.data.map(classStudent => ({
      id: this.registry.schema.classStudents.find(classStudent.id).classId,
      type: 'class',
    }));
  },
});
