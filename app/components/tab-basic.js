import Ember from 'ember';



export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['li'],

  li: Ember.computed('content', 'config', 'active', function() {
    const config = this.get('config');
    const content = this.get('content');
    const active = this.get('active');
    const id = config.toId(content);
    const isActive = active === id;
    const classes = this.get('config').li(content, isActive);
    return classes;
  }),

  click: function() {
    const config = this.get('config');
    const content = this.get('content');
    const active = this.get('active');
    const id = config.toId(content);
    const isActive = active === id;
    if (!isActive) {
      this.get('tabs').send(this.get('changeTab'), id);
    }
  },

  tab: Ember.computed('content', 'config', 'active', function() {
    return this.get('config').getHtml(this.get('content'), this.get('active'));
  })
});
