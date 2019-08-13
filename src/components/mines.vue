<template>
	<div class="bt">
		<slot name="left" ></slot>
		<slot name="center" class="center"></slot>
        <slot name="right"></slot>
	</div>

</template>

<script>
	export default {
		data: function() {
			return {
				selected: []
			}
		},
		props: ["title"]

	}
</script>

<style scoped lang="less">
	.bt {
		/*border: 1px solid #000;*/
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: white;
		margin-top: 10px;
		position: relative;
	}
	
	
</style>