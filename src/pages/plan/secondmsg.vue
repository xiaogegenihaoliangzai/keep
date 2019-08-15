<template>
	<div>
		<planhead></planhead>
		<div class="msglist">
			<p>身高体重：<span>{{sg}}/{{tz}}</span></p>
			<p>健身目标：<span>减脂</span></p>
			<p>是否参加跑步训练：<span>是</span></p>
			<div class="mbtz">
				<mubiaotz></mubiaotz>
			</div>
		</div>
		<div class="aiplan">
			<p class="next" @click="gosecond">下一步</p>
		</div>
	</div>
</template>

<script>
	import planhead from '../../components/planhead.vue'
	import mubiaotz from '../../components/mubiaotz.vue'
 export default{
	 data(){
		 return{
			 sg:'',
			 tz:'',
		 }
	 },
   components:{
		 planhead,
		 mubiaotz
   },
	 methods:{
		 gosecond(){
			 this.$router.push('/sports')
			 
		 }
	 },
	 mounted(){
		 this.sg=localStorage.getItem("sg")
		 this.tz=localStorage.getItem("tz")
	 }
 }
</script>

<style scoped="scoped" lang="less">
	.msglist{
		position: fixed;
		top: 100/50rem;
		text-align: left;
		left: 50%;
		transform: translateX(-50%);
		width: 60%;
		p{
			margin: 20/50rem 0;
			font-size: 20/50rem;
		}
	}
	.mbtz{
		margin-top: -20/50rem;
		
	}
		.aiplan{
		width: 100%;
		position: fixed;
		bottom: 90/50rem;
		line-height: 51/50rem;
		font-size: 16/50rem;
		color: white
	}
	.next{
		width: 284/50rem;
		background-color: #60c48e;
		border-radius: 30/50rem;
		height: 51/50rem;
		line-height: 51/50rem;
		margin: 0 auto;
	}
</style>
