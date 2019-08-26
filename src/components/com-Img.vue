<template>
	<div class="saveimg">
		<img :src="Imgsrc" />
		<!--<img src="../assets/community/aa.jpg" />
		<img :src="Imgsrc" />
		<img src="../assets/community/016.jpg" />
		<img src="../assets/community/bb.jpg" />
		<img src="../assets/community/018.jpg" />
		<img src="../assets/community/016.jpg" />-->
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				Imgsrc: (() => {
					/* $route.query获取shopid */
					return this.$route.query.Imgsrc
				})()
			}
		},
		
	}
</script>

<style scoped lang="less">
	.saveimg {
		margin: 0.2rem 0.2rem;
		overflow: hidden;
	}
	
	.saveimg img {
		float: left;
		width: 100%;
		margin: 0.01rem 0.01rem;
	}
</style>