<template>
	<div class="saveimg">
		<img :src="Imgsrc" />
		<img :src="Imgsrc" />
		<img src="../assets/community/017.jpg" />
		<img src="../assets/community/016.jpg" />
		<img src="../assets/community/016.jpg" />
		<img src="../assets/community/016.jpg" />
		<img src="../assets/community/018.jpg" />
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
		}
	}
</script>

<style scoped lang="less">
	.saveimg {
		margin: 0.2rem 0.2rem;
		overflow: hidden;
	}
	
	.saveimg img {
		float: left;
		width: 2.3rem;
		height: 2rem;
		margin: 0.01rem 0.01rem;
	}
</style>