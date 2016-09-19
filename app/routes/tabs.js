import Ember from 'ember';

const toId = (data) => data.id;

// tabsConfig : List data -> Bool -> { li: List (HTML Attributes), children: List Html }
// tabsConfig = (data, isSelected) => ({
//   li: [ { class: isSelected ? 'tab-list-item' : 'tab-list-item-selected' } ],
//   children : [
//      { component: 'ticket-tab',
//        active: isSelected,
//        data,
//      }
//   ]
// })

export default Ember.Route.extend({
  model() {
    return {
      config: {
        toId: toId,
        toTab: (data, isSelected) => {
          return {
            li: isSelected ? 'c-tab__list__item is-selected' : 'c-tab__list__item',
            children: [
              { component: 'ticket-tab',
                active: isSelected,
                data,
              }
            ]
          };
        },
      },
      tabs: [
        {id: 'all', title: 'All comments', count: 9},
        {id: 'public', title: 'Public', count: 5},
        {id: 'private', title: 'Private', count: 4},
      ],
      initialTab: 'all',
    };
  }
});
