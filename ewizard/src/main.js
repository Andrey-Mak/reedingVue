import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import "vue-material-design-icons/styles.css"
import store from './store'
import router from './router'

Vue.use(VueI18n);

Vue.config.productionTip = false;

const i18n = new VueI18n({
	locale: 'en',
	sync: false,
	messages: {
		en: {},
		ru: {}
	}
});

new Vue({
    i18n,
    store,
    router,
    render: h => h(App)
}).$mount('#app');
