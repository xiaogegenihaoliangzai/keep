<template>
	<div class="detay">
		<p>跟着keep做五次马甲线的练习之后</p>
		<p>腹部确实紧了一些</p>
		<p>昨天去拍摄</p>
		<p>好像隐约能看到一点点的马甲线<span>...全部</span></p>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				selected: []
			}
		}

	}
</script>
<style scoped lang="less">
	.detay {
		padding: 0 0.2rem;
	}
	
	.detay p {
		text-align: left;
		line-height: 0.4rem;
	}
	
	.detay p span {
		color: greenyellow;
	}
</style>