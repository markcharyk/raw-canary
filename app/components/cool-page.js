import Component from "@ember/component";
import EmberObject, { computed } from "@ember/object";
import { array, raw } from "ember-awesome-macros";

export default Component.extend({
  array: computed(function() {
    return [
      EmberObject.create({ isCool: false }),
      EmberObject.create({ isCool: false }),
      EmberObject.create({ isCool: true }),
      EmberObject.create({ isCool: false })
    ];
  }),

  coolArray: array.filterBy("array", raw("isCool"))
});
