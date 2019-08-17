<template>
	<div class="timerGop">
		<video src="http://v1.keepcdn.com/video/2019/04/18/22/09/c152878693294b575c778a55e6668652a909c5da_2048000.mp4" poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565523152298&di=c510cae6184531bdb53cf0608983d76d&imgtype=0&src=http%3A%2F%2Fs1.sinaimg.cn%2Fmw690%2F006IXq7Gzy7aCjWCS1Dcd" autoplay="autoplay" loop="true"></video>
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
	methods:{
		
	}
}
</script>

<style scoped lang="less">
.timerGop{
	width: 100%;
	height: 100%;
	video{
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		animation: roater 2s;
	}
	@keyframes roater{
		0%{
			left: 0;
		}
		100%{
			left: 50%;
		}
	}
}
</style>
