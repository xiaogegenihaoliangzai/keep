<template>
	<div class="headerWrap">
		<p class="title">{{title}}</p>
		<slot name='leftImg' class='left'></slot>
		<slot name='rightImg' class='right'></slot>
	</div>
</template>

<script>
	export default {
		props: ['title'],
	}
</script>

<style scoped="scoped" lang="less">
	.headerWrap{
		position: relative;
	}
	.headerWrap .title{
	 line-height: 50/50rem;
	 font-weight: 700;
	 float: left;
	 margin-left: 20/50rem;
	}
	.headerWrap img:nth-of-type(1){
		width: 30px;
		position: absolute;
		top:10/50rem;
		right: 60/50rem;
	}
	.headerWrap img:nth-of-type(2){
		width: 30px;
		position: absolute;
		top:10/50rem;
		right: 20/50rem;
	}
	
</style>
