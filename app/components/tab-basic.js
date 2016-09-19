import Ember from 'ember';


export default Ember.Component.extend({
  tagName: 'li',

  passCustomProperties: function() {
    console.log('propsssss!!??')
    const { classNames, attributes } = this.get('tab').li;
    console.log(classNames)
    const properties = { classNames: ['ember-view', ...classNames] };
    this.setProperties(properties);
  }.on('didReceiveAttrs'),

  // updateCustomProps: Ember.observer('tab', function () {
  //   console.log('did tab change?')
  //   console.log(this.getProperties('classNames'))
  //   const { classNames, attributes } = this.get('tab').li;
  //   console.log(classNames)
  //   const properties = { classNames: ['ember-view', ...classNames] };
  //   this.setProperties(properties);
  // }),
  didRender() {
    this._super(...arguments);
    console.log('render?')
    console.log(this.getProperties('classNames'))
    // this.$('.item-list').scrollTop(this.$('.selected-item').position.top);
  },

  click: function() {
    const config = this.get('config');
    const data = this.get('data');
    const active = this.get('active');
    const id = config.toId(data);
    console.log(id)
    const isActive = active === id;
    if (!isActive) {
      this.get('tabs').send(this.get('changeTab'), id);
    }
  },

  tab: Ember.computed('data', 'config', 'active', function() {
    const config = this.get('config');
    const data = this.get('data');
    const active = this.get('active');
    const id = config.toId(data);
    const isActive = active === id;
    const tab = config.toTab(data, isActive)
    return tab;
  })
});
