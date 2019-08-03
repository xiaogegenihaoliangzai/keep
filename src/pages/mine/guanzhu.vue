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
			<ul class="two">
				<li>
				  <span><img src="../../assets/sports/1.jpg"><em class="zi">丫丫</em></span>
				  <span>已关注</span>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			send(){
				this.$router.go(-1)
				
			},
		}
	}
</script>


<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
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
	
	#header img {
		width: 30/50rem;
		height: 30/50rem;
	}
	
	.left strong {
		position: absolute;
		top: 10/50rem;
		left: 50/50rem;
	}
	
	.right i{
		font-size: 26/50rem;
	    margin-right: 20/50rem;	
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
		height: 50/50rem;
		border-bottom: 1/50rem solid gainsboro;
		line-height: 50/50rem;
		font-size: 18/50rem;
	}
	
	.two {
		width: 100%;
		height: 500/50rem;
	}
	
	.two li {
		position: relative;
		border-bottom: 1/50rem solid gainsboro;
		width: 100%;
		height: 70/50rem;
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
		width: 90/50rem;
		height: 30/50rem;
		line-height: 30/50rem;
		border-radius: 30/50rem;
		color: green;
		position: absolute;
		right: 10/50rem;
	}
	
	.two img {
		width: 50/50rem;
		border-radius: 30/50rem;
	}
	
	.two .zi {
		width: 100/50rem;
		position: absolute;
		top: 20/50rem;
		left: 30/50rem;
	}
</style>