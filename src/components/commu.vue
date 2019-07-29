<template>
	<div class="commu_warp">
		<div><slot name="com_left" ></slot></div>
		<div><slot name="com_right"></slot></div>
	</div>

</template>

<script>
	export default {
		
	}
</script>
<style scoped lang="less">
.commu_warp div{
	display: flex;
	align-content: space-around;
	width: 50%;
	height: 60px;
	
}



</style>