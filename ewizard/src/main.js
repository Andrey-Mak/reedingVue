import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false

const i18n = new VueI18n({
	locale: 'en',
	messages: {
		en: {
		}
	}
})

new Vue({
	i18n,
  render: h => h(App)
}).$mount('#app')
