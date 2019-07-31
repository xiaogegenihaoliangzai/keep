<template>
        <yd-tabbar slot="tabbar">
            <yd-tabbar-item title="首页" link="#" active>
                <yd-icon name="home" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="购物车" link="#">
                <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="个人中心" link="#">
                <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
        </yd-tabbar>

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

<style scoped="scoped">
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

</style>
