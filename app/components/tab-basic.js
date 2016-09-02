import Ember from 'ember';



export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['li'],

  li: Ember.computed('tab', function() {
    return this.get('tab').li;
  }),

  click: function() {
    const config = this.get('config');
    const data = this.get('data');
    const active = this.get('active');
    const id = config.toId(data);
    const isActive = active === id;
    if (!isActive) {
      this.get('tabs').send(this.get('changeTab'), id);
    }
  },

  tab: Ember.computed('data', 'config', 'active', function() {
    const config = this.get('config');
    const data = this.get('data');
    const active = this.get('active');
    console.log(data)
    const id = config.toId(data);
    const isActive = active === id;
    const tab = config.toTab(data, isActive)
    return tab;
  })
});
