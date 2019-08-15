<template>
	<div class="detay">
		<p>{{Title}}<span>...全部</span></p>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				selected: [],
				Title: (() => {
					/* $route.query获取shopid */
					return this.$route.query.Title
				})()
			}
		}

	}
</script>
<style scoped lang="less">
	.detay {
		width: 80%;
	padding: 0.1rem 0.1rem;
	margin-left: 0.1rem;
	}
	
	.detay p {
		text-align: left;
		
		line-height: 0.4rem;
	}
	
	.detay p span {
		color: #008000
	}
</style>