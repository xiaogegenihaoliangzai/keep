<template>
    <yd-tabbar slot="tabbar">
        <item title='社区' mark='community' :curr='curr' @change='getVal'>
				<img src="../assets/public/icon_community_filled_dark_gray.png" slot='normal'>
				<img src="../assets/public/icon_community_filled_focus.png" slot='active'>
			</item>
			<item title='搜索' mark='search' :curr='curr' @change='getVal'>
				<img src="../assets/public/icon_follow_filled_normal.png" slot='normal'>
				<img src="../assets/public/icon_follow_filled_focus.png" slot='active'>
			</item>
			<item title='运动' mark='sports' :curr='curr' @change='getVal'>
				<img src="../assets/public/icon_sports_filled_dark_gray.png" slot='normal'>
				<img src="../assets/public/icon_sports_filled_focus.png" slot='active'>
			</item>
			<item title='计划' mark='plan' :curr='curr' @change='getVal'>
				<img src="../assets/public/icon_suit_tab_filled_gray.png" slot='normal'>
				<img src="../assets/public/icon_suit_tab_filled_focus.png" slot='active'>
			</item>
			<item title='我' mark='mine' :curr='curr' @change='getVal'>
				<img src="../assets/public/icon_user_filled_normal.png" slot='normal'>
				<img src="../assets/public/icon_user_filled_focus.png" slot='active'>
<<<<<<< HEAD
			</item>						
		</div>
=======
			</item>
    </yd-tabbar>
>>>>>>> cf623cc6e89f8a81e12810e8f12a380ff5161f2e
</template>

<script>
	import item from './item'
	
	
		export default{
		data(){
			return {
				curr:'community'
			}
		},
		components: {
			item
		},
		methods:{
			getVal(data){
				this.curr=data
				//console.log(data)
			}
		},
	}
</script>

<style scoped="scoped" lang="less">
	#footer{
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: white;
	}
 	.item{
		flex: 1;
		text-align: center;
	} 
	img{

		width: 30/50rem;
		display: inline-flex;
	}

</style>
