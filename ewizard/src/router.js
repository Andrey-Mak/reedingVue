import Vue from 'vue'
import Router from 'vue-router'
import eDetailers from './views/eDetailers.vue'

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'eDetailers',
			component: eDetailers
		},
		{
			path: '/eDetailers',
			name: 'eDetailers',
			component: eDetailers
		},
		{
			path: '/emailTemplates',
			name: 'emailTemplates',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/emailTemplates.vue')
		},
		{
			path: '/callFlows',
			name: 'callFlows',
			component: () => import('./views/callFlows.vue')
		},
		{
			path: '/digitalAssets',
			name: 'digitalAssets',
			component: () => import('./views/digitalAssets.vue')
		},
		{
			path: '/surveys',
			name: 'surveys',
			component: () => import('./views/surveys.vue')
		},
		{
			path: '/microsites',
			name: 'microsites',
			component: () => import('./views/microsites.vue')
		}
	]
})
