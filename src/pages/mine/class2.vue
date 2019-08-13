<template>
	<div class="hello">
		<!--头部开始-->
		<div id="header">
			<span class="left" @click="send2">
				<img src="../../assets/wo-img/Snipaste_2019-07-04_18-39-18.png">
				<em>训练课程</em>
			</span>
			<span>私家课  <em>添加课程</em></span>
			
		</div>
		<!--内容区域开始-->
		<div id="wrapper">
			<ul class="one">
				<li>全部</li>
				<li>健身</li>
				<li>跑步</li>
				<li>瑜伽</li>	
			</ul>
			<ul class="two">
				<li>
					<span>&nbsp7&nbsp分钟新手体验课<em class="zi">还未进行过训练 &nbsp14人正在训练</em></span>
					<span>7分钟&nbsp;.&nbsp;k1</span>
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
			send2(){
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
		font-size: 20px;
	}
	
	.left img{
		width: 28/50rem;
		height: 23/50rem;
	}
	
	.left em {
		position: absolute;
		top: 10/50rem;
		left: 70/50rem;
		font-size: 19px;	
	}
	
	#header span:nth-child(2){
		color: grey;
		position: absolute;
		right: 20px;
		font-size: 19px;
		
	}
	#header span:nth-child(2) em{
		font-size: 14px;
		color: #3CB371;	
		padding-left: 20px;	
	}
	
	/*内容开始*/
	
	#wrapper {
		/*border: 1px solid #000;*/
		width: 100%;
		height: 800/50rem;
		background: white;
		position: absolute;
		top: 50px;
	}
	
	.one {
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 40px;
		border-bottom: 1px solid gainsboro;
		line-height: 40px;
		font-size: 15px;
	}
	
	.two {
		width: 100%;
		height: 500px;
	}
	
	.two li {
		position: relative;
		border-bottom: 1px solid gainsboro;
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: space-between;
		align-items: center;		
	}
	
	.two li span:nth-child(1) {
		position: absolute;
		top:20px;
		left: 10px;
		font-size: 17px;
		color: black;
	}
	
	.two li span:nth-child(2) {
		color: black;
		position: absolute;
		right: 10px;
		padding-bottom: 10px;
		font-size: 10px;	
	}
	
	.two img {
		width: 50/50rem;
		border-radius: 30px;
	}
	
	.zi {
		width: 180px;
		font-size:8px;
		position: absolute;
		/*top: 30px;*/
		left: -5px;
		bottom: -18px;
		color: gainsboro;
		font-size:8px!important;
		font-weight: lighter;
	}
</style>