import Vue from 'vue';
import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
  config: {
    id: 'UA-143082793-1',
    params: {
      send_page_view: true,
    },
  },
});
