<template>
	<div>
		<div class="bg">
			<img src="../../assets/plan/微信图片_20190703173825.jpg">
		</div>
		<div class="aiplan">
			<p @click="tomsg">免费获取智能计划</p>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			tomsg(){
				this.$router.push('./plan2')
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
*{
	margin: 0;
	padding:0
}
.bg{
	margin-bottom: 1.1rem;
}
.bg img{
	width: 100%
}
.aiplan{
	width: 100%;
	position: fixed;
	bottom: 90/50rem;
	text-align: center;
	line-height: 51/50rem;
	font-size: 16/50rem;
	color: white
}
.aiplan p{
	width: 284/50rem;
	background-color: #60c48e;
	border-radius: 30/50rem;
	height: 51/50rem;
	margin: 0 auto;
}
</style>
