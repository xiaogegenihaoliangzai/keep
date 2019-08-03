<template>
  <div>
				<planhead></planhead>
        <bodyheight></bodyheight>
        <bodyweight></bodyweight>
				 
		<div class="aiplan">
			<p class="next" @click="gosecond">下一步</p>
		</div>		 
  </div>
</template>

<script>
 import bodyheight from '../../components/bodyheight.vue'
 import bodyweight from '../../components/bodyweight.vue'
 import planhead from '../../components/planhead.vue'

 export default{
   components:{
     bodyheight,
     bodyweight,
		 planhead
   },
	 methods:{
		 gosecond(){
			 this.$router.push('/secondmsg')
		 }
	 }
 }
</script>

<style scoped="scoped" lang="less">

	.aiplan{
		width: 100%;
		position: fixed;
		bottom: 90/50rem;
		text-align: center;
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
