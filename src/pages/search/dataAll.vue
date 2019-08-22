<template>
	<div class="dataAll">
		<div class="headerImg" @click="slist">
			<img src="../../assets/scarch/bottomimg.png" alt="" />
		</div>
		<div class="asideTitle">
			<span>恭喜你</span>
			<p>累计完成3次训练</p>
		</div>
		<div class="footerimg">
			<img src="../../assets/scarch/2019-08-22_170932.png" alt="" />
		</div>
	</div>
</template>

<script>

export default {
	data(){
		return{
			
		}
	},
	components:{
		
	},
	mounted(){
	    
	},
	methods:{
		slist(){
			this.$router.push('search')
		}
	}
}
</script>

<style scoped lang="less">
.dataAll{
	width: 100%;
	height: 100%;
	background-color: #5A4E60;
	.headerImg{
		width: 100%;
		position: relative;
		height: 50/50rem;
		img{
			position: absolute;
			left: 10/50rem;
			top: 0;
			height: 100%;
			transform: scale(0.6);
		}
	}
	.asideTitle{
		width: 100%;
		text-indent: 20/50rem;
		text-align: left;
		font-weight: normal;
		overflow: hidden;
		margin-top: 20/50rem;
		padding-bottom: 30/50rem;
		color:#fff;
		span{
			font-size: 30/50rem;
		}
		p{
			font-style: 25/50rem;
		}
	}
	.footerimg{
		width: 95%;
		margin: 0 auto!important;
		img{
			width: 100%;
		}
	}
}
</style>
