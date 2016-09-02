import Ember from 'ember';

const toId = (data) => data.id;

export default Ember.Route.extend({
  model() {
    return {
      config: {
        toId: toId,
        getHtml: (data, selected) => {
          return { componentName: 'ticket-tab', active: selected == toId(data), content: data };
        },
        li: (data, selected) => { return selected ? 'c-tab__list__item is-selected' : 'c-tab__list__item' },
      },
      tabs: [
        {id: 'all', title: 'All comments', count: 9},
        {id: 'public', title: 'Public', count: 5},
        {id: 'private', title: 'Private', count: 4},
      ],
      initialTab: 'all',
    }
  }
});
