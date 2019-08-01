<template>
	<div class="headerWrap">
		<slot name='leftImg' class='left'></slot>
		<p class="title"> {{title}} </p>
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
	 margin-right: 6rem;
	 font-weight: 600;
	 float: left;
	 margin-left: 20/50rem;
	}

	.headerWrap img{
		width: 30px;
		position: absolute;
		top:10/50rem;
		right: 10/50rem;
	}
	.headerWrap img:nth-of-type(2) .right{
		left: 80/50rem;
		}
	.headerWrap  .right{
		right: 50/50rem;
	}

</style>
