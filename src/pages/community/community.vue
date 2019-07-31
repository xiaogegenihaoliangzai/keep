<template>
	<div class="comm_warp">

		<div class="header">
			<headersList title="探索">
				<img src="../../assets/community/icon_search_lined_dark.png" slot="rightImg" class="right" />
			</headersList>
		</div>
		<div class="nav">
			<span :class="{active:currIndex==0}" @click="currIndex=0">
    		<router-link to="/community/hot">热门</router-link>
    	</span>
			<span :class="{active:currIndex==1}" @click="currIndex=1">
    		<router-link to="/community/attention">关注</router-link>
    	</span>
			<span :class="{active:currIndex==2}" @click="currIndex=2">
    		<router-link to="/community/topic">话题</router-link>
    	</span>
			<span :class="{active:currIndex==3}" @click="currIndex=3">
    		<router-link to="/community/diary">日记本</router-link>
    	</span>
			<span :class="{active:currIndex==4}" @click="currIndex=4">
    		<router-link to="/community/city">同城</router-link>
    	</span>
		</div>
		<div class="videocontent">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import headersList from '../../components/header.vue'
	export default {
		data: function() {
			return {
				currIndex: 0
			}
		},
		components: {

			headersList
		}
	}
</script>

<style scoped lang="less">
	.nav {
		height: 35/50rem;
		border-bottom: 1/50rem solid gainsboro;
	}
	
	.nav a {
		text-decoration: none;
		display: block;
		float: left;
		width: 20%;
		height: 35/50rem;
		line-height: 35/50rem;
	}
	
	.nav .active a {
		background-color: white;
		color: gray;
	}
	
	.comm_warp .header {
		overflow: hidden;
	}
	
	.comm_warp .header .right {
		right: 15/50rem;
		height: 25/50rem;
		width: 25/50rem;
	}
</style>