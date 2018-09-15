<i18n>
	{
		"en": {
			"eWizard": "eWizard Online",
			"h3": "Контент"
		},
		"ru": {
			"eWizard": "eМастер Онлайн",
			"h3": "Контент"
		}
	}
</i18n>
<template>
	<div class="v-aside">
		<div class="overlay"></div>
		<div class="menu-block">
			<h2 v-t="'eWizard'"></h2>
			<h3 v-t="'h3'"></h3>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'md-toolbar',
		props: {
			msg: String
		},
		data() {
			return {locale: 'en'}
		},
		methods: {
			openMainMenu(){
				console.log(this.$i18n)
			}
		},
		watch: {
			locale(val) {
				this.$i18n.locale = val;
			}
		}
	}
</script>

<style scoped>
	.overlay,
	.v-aside{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
		z-index: 50;
	}
	.overlay{
		background-color: rgba(0,0,0,0.2);
	}
	.menu-block{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 240px;
		background: #0096db;
		color: #fff;
		pointer-events: auto;
	}
	h2{
		font-size: 18px;
		line-height: 1.8;
	}
</style>
