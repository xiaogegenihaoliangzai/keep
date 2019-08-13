<template>
	<div>
		<div class="mark_a">
			<a>
				<span>#</span>
				<span>马甲线</span>
			</a>
		</div>
		<div class="time_a">
			<ul>
				<li>2019/6/2-09:33</li>
				<li>...</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="less">
	.content_sec .mark_a {
		margin-left: -5.6rem;
	}
	
	.content_sec .mark_a a {
		height: 0.4rem;
		background: gainsboro;
		font-size: 0.3rem;
		padding: 0.1rem;
		color: cornflowerblue;
		border-radius: 0.4rem;
	}
	
	.content_sec .time_a {
		line-height: 1rem;
		width: 100%;
	}
	
	.content_sec .time_a ul {
		padding: 0 0.3rem;
		display: flex;
		justify-content: space-between;
	}
</style>