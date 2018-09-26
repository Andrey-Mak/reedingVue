<i18n>
	{
		"en": {
			"hello": "hello world!"
		},
		"ru": {
			"hello": "Привет мир"
		}
	}
</i18n>
<template>
	<div id="app">
		<v-header msg="Welcome to Your Vue.js App"/>
		<v-aside/>
		<router-view></router-view>

	</div>
</template>

<script>
	import vHeader from './components/v-header';
	import vAside from './components/v-aside';

	export default {
		name: 'app',
		components: {
			vHeader,
			vAside
		}
	}
</script>

<style scoped>
	@import '../node_modules/@mdi/font/css/materialdesignicons.css';
	@import 'common/styles/main.css';

</style>
