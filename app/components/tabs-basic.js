import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',

  init() {
    this._super(...arguments);
    this.activeTab = this.get('initialTab');
  },

  actions: {
    changeTab(tabId) {
      this.set('activeTab', tabId)
    }
  }
});
