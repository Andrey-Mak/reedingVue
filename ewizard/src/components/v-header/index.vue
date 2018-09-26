<template>
	<div class="v-header flex">
		<button class="md-icon-button md-button" type="button" @click="$store.commit('menuToggle')">
			<i class="mdi mdi-hc-fw mdi-menu"></i>
		</button>
		<h2 class="main-header" v-t="'appCaption'"></h2>

		<select v-model="locale">
			<option>en</option>
			<option>ua</option>
			<option>ru</option>
		</select>
	</div>
</template>

<script>
	export default {
		name: 'v-header',
		data() {
			return {locale: 'en'}
		},
		watch: {
			locale(val) {
				this.$i18n.locale = val;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.v-header{
		height: 32px;
		min-height: 32px;
		max-height: 32px;
		padding: 0 12px;
		font-size: 18px;
		background-color: rgb(0,150,219);
		color: rgba(255,255,255,0.87);
	}
	.md-button{
		width: 30px;
		height: 32px;
		background: transparent;
		border: none;
		font-size: 20px;
		color: #fff;
		cursor: pointer;
		outline: none;
	}
	h2{
		font-size: 18px;
		line-height: 1.8;
		margin-right: 200px;
	}
</style>
