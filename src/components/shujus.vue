<template>
	<div class="bt">
		<slot name="top" ></slot>
		<slot name="ww">
		   <slot name="left" ></slot>
           <slot name="right"></slot>
        </slot>
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
	
	
	
</style>