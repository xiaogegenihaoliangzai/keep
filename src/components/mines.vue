<template>
	<div class="commu_warp">
            <slot name="right"></slot>
	</div>
	
</template>

<script>
	export default {
		data:function(){
			return{
				selected:[]
			}
		},
		props:["title"]

	}
</script>
<style scoped lang="less">

</style>