<template>
	<div class="v-aside" v-if="$store.state.isMenu">
		<div class="overlay" @click="$store.commit('menuToggle', false)"></div>
		<div class="menu-block">
			<h2 v-t="'appCaption'"></h2>
			<h3 v-t="'content'"></h3>
			<ul>
				<li class="list-item" v-for="item in list">
					<i class="icon mdi" :class="item.icon"></i>
					<p v-t="item.text"></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-aside',
		data() {
			return {
				list: [
					{
						"text": "eDetailers",
						"icon": "mdi-inbox"
					},
					{
						"text": "emailTemplates",
						"icon": "mdi-email"
					},
					{
						"text": "callFlows",
						"icon": "mdi-inbox"
					},
					{
						"text": "digitalAssets",
						"icon": "mdi-movie"
					},
					{
						"text": "surveys",
						"icon": "mdi-clipboard-check"
					},
					{
						"text": "microsites",
						"icon": "mdi-coffee"
					},
					{
						"text": "services",
						"icon": "mdi-motorbike"
					},
					{
						"text": "globalStore",
						"icon": "mdi-web"
					},
					{
						"text": "pulse",
						"icon": "mdi-food"
					},
					{
						"text": "components",
						"icon": "mdi-clippy"
					},
					{
						"text": "reviews",
						"icon": "mdi-android"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.v-aside{
		z-index: 10;
	}
	.overlay,
	.v-aside{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
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
	h3{
		font-size: 18px;
		margin: 10px;
	}
	.list-item{
		min-height: 36px;
		height: 36px;
		padding-left: 30px;
		font-size: 15px;
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.list-item:hover{
		background: #008bc5;
		color: #fff;
	}
	.icon{
		font-size: 20px;
		display: inline-block;
		margin-right: 10px;
	}
</style>
