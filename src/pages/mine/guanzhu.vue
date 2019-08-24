<template>
	<div class="hello">
		<!--头部开始-->
		<div id="header">
			<span class="left" @click="send"><img src="../../assets/wo-img/Snipaste_2019-07-04_18-39-18.png"><strong>我的关注</strong></span>
			<span class="right"><i class="fa fa-search" aria-hidden="true"></i> </span>
		</div>

		<!--内容区域开始-->
		<div id="wrapper">
			<ul class="one">
				<li>用户</li>
				<li>话题</li>
			</ul>
			<commu :name="item.username" :key="item.id"  v-for="(item,index) in newarr">
				<img class="imgsrc" :src="item.usericon" slot="imgsrc" />
				<span id="tic" slot="text" @click="more(index)">取消关注</span>
			</commu>
		</div>
	</div>
</template>

<script>
	import commu from '../../components/commu.vue'
	export default {
		data() {
			return {
				newarr: [],
				
			}
		},
		methods: {
			send() {
				this.$router.go(-1)
			},
			loadComments() {
				var list = JSON.parse(localStorage.getItem("cmts") || '[]')
				this.newarr = list
			},
			more(index) {
//				console.log(index.path[3])
//
//				index.path[3].remove()
			}
		},
		components: {
			commu
		},
		created() {
			this.loadComments()
		}
	}
</script>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}
	
	#tic {
		margin-left: -0.5rem;
	}
	
	.imgsrc {
		border-radius: 50%;
		width: 0.7rem;
		height: 0.7rem;
		text-align: center;
		margin-top: 0.2rem;
	}
	
	body {
		font-size: 12/50rem;
		font-family: helvetica;
	}
	
	.sizing {
		box-sizing: border-box;
	}
	/*头部样式*/
	
	#header {
		position: fixed;
		width: 100%;
		height: 50/50rem;
		background: rgb(96, 87, 104);
		/*opacity: 0.3;*/
		line-height: 40/50rem;
		z-index: 99;
		float: left;
		padding-top: 10/50rem;
		display: flex;
		justify-content: space-between;
		color: white;
		font-family: "宋体";
		font-size: 20/50rem;
	}
	
	.left img {
		width: 28/50rem;
		height: 25/50rem;
		margin-left: 10/50rem;
	}
	
	.left strong {
		position: absolute;
		top: 10/50rem;
		left: 50/50rem;
		font-size: 16/50rem;
		font-family: "宋体";
		color: white;
	}
	
	.right i {
		font-size: 22/50rem;
		margin-right: 15/50rem;
	}
	/*内容开始*/
	
	#wrapper {
		/*border: 1/50rem solid #000;*/
		width: 100%;
		height: 800/50rem;
		background: white;
		position: absolute;
		top: 50/50rem;
	}
	
	.one {
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 40/50rem;
		border-bottom: 1/50rem solid gainsboro;
		line-height: 40/50rem;
		font-size: 15/50rem;
	}
	
	.two {
		width: 100%;
		height: 500/50rem;
	}
	
	.two li {
		position: relative;
		border-bottom: 1/50rem solid gainsboro;
		width: 100%;
		height: 60/50rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.two li span:nth-child(1) {
		position: absolute;
		left: 10/50rem;
	}
	
	.two li span:nth-child(2) {
		border: 1/50rem solid green;
		width: 70/50rem;
		height: 27/50rem;
		line-height: 27/50rem;
		border-radius: 30/50rem;
		color: green;
		position: absolute;
		right: 10/50rem;
		font-size: 8/50rem;
	}
	
	.two em {
		font-size: 16/50rem;
		padding-left: 10/50rem;
	}
	
	.two img {
		width: 45/50rem;
		border-radius: 30/50rem;
	}
	
	.two .zi {
		width: 100/50rem;
		position: absolute;
		top: 20/50rem;
		left: 30/50rem;
	}
</style>