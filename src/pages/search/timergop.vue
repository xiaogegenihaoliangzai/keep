<template>
	<div class="timerGop">
		<video src="http://v1.keepcdn.com/video/2019/04/18/22/09/c152878693294b575c778a55e6668652a909c5da_2048000.mp4" poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565523152298&di=c510cae6184531bdb53cf0608983d76d&imgtype=0&src=http%3A%2F%2Fs1.sinaimg.cn%2Fmw690%2F006IXq7Gzy7aCjWCS1Dcd" autoplay="autoplay" loop="true"></video>
		<div class="bgrgba">
			<div class="fiser_header">
				<p @click="resetbtn">退出训练</p>
			</div>
			<div class="firset_bottom">
				<p><span>192</span>人正开始和你一起训练，加油！</p>
				<h1>开始第一次训练</h1>
				<h1>腹肌撕裂者初级</h1>
			</div>
			<!-- <div class="bottom_arr">
				<button>正在准备训练内容/{{numcount}}</button>

			</div> -->
			<sider></sider>
		</div>
		
	</div>
</template>

<script>
import  sider from '../../components/sider.vue'
export default {
	data(){
		return{
			
		}
	},
	components:{
		sider
	},
	mounted(){
		
	},
	methods:{
		resetbtn(){
			this.$router.push('comban')
		}
	}
}
</script>

<style scoped lang="less">
.timerGop{
	width: 100%;
	max-height: 100%;
	overflow: hidden;
	video{
		height: 100%;
		position: absolute;
		top: 0;
		animation:mymove 10s infinite;
		opacity: 0.7;
	}

}
@keyframes mymove{
	0%{
		left: 0%;
	}
	50%{
		left: -100%;
	}
	100%{
		left: 0;
	}
}
.bgrgba{
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 99;
	background-color: rgba(70,50,70,0.8);
	.fiser_header{
		position: absolute;
		left: 0;
		top: 0;
		display: block;
		width: 100%;
		p{
			font-size: 16/50rem;
			color:#fff;
			text-align: left;
			text-indent: 30/50rem;
			display: block;
			padding: 35/50rem 0 0 0;
			width: 100%;
		}
	}
}
.firset_bottom{
	width: 100%;
	display: block;
	position: absolute;
	left: 0;
	top: 65%;
	text-align: left;
	text-indent: 35/50rem;
	p{
		color:#C7BCC8;
		padding-bottom: 10/50rem;
		font-size: 13/50rem;
		span{
			color:#3CD69D;
			padding-right: 6/50rem;
		}
	}
	h1{
		color:#fff;
		font-size: 30/50rem;
		font-weight: normal;

	}
}
.bottom_arr{
	width: 100%;
	overflow: hidden;
	position: fixed;
	z-index: 9999;
	bottom: 0;
	left: 0;
	button{
		width: 100%;
		height: 80/50rem;
		color:#32A277;
		font-size: 25/50rem;
		border:none;
		font-family: "微软雅黑";
		background-color: #3DD69E;
	}
}
</style>
