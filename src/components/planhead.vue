<template>
	<div class="titleimg">
	  <img src="../assets/community/mo_store_title_back.png" @click="goplan">
	  <p>基本信息</p>
	</div>
</template>

<script>
	export default{
		methods:{
		goplan(){
						 this.$router.go(-1)
}
		}
	}
</script>

<style scoped="scoped" lang="less">
	 .titleimg{
	   position: relative;
	   img{
	     width: 20/50rem;
	     position: absolute;
	     left: 10/50rem;
	     top: 10/50rem;
	   }
	   p{
	     position: absolute;
	     top: 10/50rem;
	     left: 50%;
	     transform: translateX(-50%)
	   }
	 }
</style>
