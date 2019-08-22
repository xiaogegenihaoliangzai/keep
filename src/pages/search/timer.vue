<template>
	<div class="timer">
		<div class="start" v-show="startTop">
			<div class="banner">
	          <div class="swiper-container">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide">
				        	<!-- http://static1.keepcdn.com/chaos/0703/A0163.mp3
							http://static1.keepcdn.com/chaos/0703/A0673.mp3
							http://static1.keepcdn.com/chaos/0703/A0689.mp3
							http://static1.keepcdn.com/chaos/0703/A0682.mp3
							http://static1.keepcdn.com/chaos/0703/A0387.mp3
							http://static1.keepcdn.com/chaos/0703/A0469.mp3
							http://static1.keepcdn.com/chaos/0703/A0413.mp3
							http://static1.keepcdn.com/chaos/0703/A0533.mp3 -->
				        	<video src="http://static1.keepcdn.com/chaos/0816/B010C056_s.mp4" autoplay="autoplay"></video>
				        </div>
				        <div class="swiper-slide">
				        	<video src="http://static1.keepcdn.com/chaos/0816/A047C059_s.mp4" autoplay="autoplay"></video>
				        </div>
				        <div class="swiper-slide">
				        	<video src="http://static1.keepcdn.com/chaos/0816/B010C056_s.mp4" autoplay="autoplay"></video>
				        </div>
				        <div class="swiper-slide">
				        	<video src="http://static1.keepcdn.com/chaos/0816/B010C056_s.mp4" autoplay="autoplay"></video>
				        </div>
				        <div class="swiper-slide">
				        	<video src="http://static1.keepcdn.com/chaos/0816/B010C056_s.mp4" autoplay="autoplay"></video>
				        </div>
				        <div class="swiper-slide">
				        	<video src="http://static1.keepcdn.com/chaos/0816/B010C056_s.mp4" autoplay="autoplay"></video>
				        </div>
				        <div class="swiper-slide">
				        	<video src="http://static1.keepcdn.com/chaos/0816/A047C059_s.mp4" autoplay="autoplay"></video>
				        </div>
				        <div class="swiper-slide">
				        	<video src="http://static1.keepcdn.com/chaos/0816/A047C059_s.mp4" autoplay="autoplay"></video>
				        </div>
				    </div>
			   </div>
			   <section class="tite">
			   		<h1>30"</h1>
			   		<span>1/8平板支撑</span>
			   </section>
	        </div>
	        <section class="footer">
		   		<div class="leftfooter">
		   			<img src="../../assets/scarch/kt_kibra_setting_right_arrow.png" alt="" />
		   		</div>
		   		<div class="centerfooter" @click="btnstop">
		   			<img src="../../assets/scarch/stop.png" alt="" />
		   		</div>
		   		<div class="rightfooter">
		   			<img src="../../assets/scarch/kt_kibra_setting_right_arrow.png" alt="" />
		   		</div>
		   </section>
		</div>
		

	   <section class="stop" v-show="!startTop">
	   		<headersList title="探索">
	  			<img src="../../assets/scarch/icon_share_android_filled.png" alt="" slot="rightImg" class="right" @click="serachBtn" />
	  		</headersList>
	  		<div class="headtitlestop">
	  			<img src="../../assets/scarch/2019-08-22_163347.png" alt="" />
	  		</div>

	  		<div class="flex_imglist">
	  			<div class="leftimgStop">
	  				<img src="../../assets/scarch/stoplist.png" alt="" />
	  				<span>退出训练</span>
	  			</div>
	  			<div class="rightimgStop" @click="sanklist">
	  				<img src="../../assets/scarch/startlist.png" alt="" />
	  				<span>继续训练</span>
	  			</div>
	  		</div>

	  		<div class="footer_imgListStop">
	  			<img src="../../assets/scarch/2019-08-22_165054.png" alt="" />
	  		</div>
	   </section>
	</div>
</template>

<script>
import Swiper from 'swiper';
import headersList from '../../components/header.vue'
export default {
	data(){
		return{
			arr:['../../../static/mp3/N001.mp3','../../../static/mp3/N002.mp3','../../../static/mp3/N003.mp3'],
			startTop:true
		}
	},
	components:{
		Swiper
	},
	mounted(){
	    new Swiper ('.swiper-container', {
	    loop: true,
	    // 如果需要分页器
	  })
	},
	methods:{
		btnstop(){
			this.startTop=false
			console.log(1)
		},
		sanklist(){
			this.startTop=true
			console.log(1)
		},
		serachBtn(){

		}
	}
}
</script>

<style scoped lang="less">
.swiper-slide{
	video{
		width: 100%;
	}
}
.tite{
	h1,span{
		position: absolute;
		left: 0;
		text-indent: 15/50rem;
		font-size: 60/50rem;
		z-index: 999;
	}
	span{
		margin-top: 90/50rem;
		font-size: 25/50rem;
	}
}
.timer{
	&:after{
		content:'';
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 0;
		background-color: #EFEDF4;
	}
}
.footer{
	width: 100%;
	position: fixed;
	z-index: 9990!important;
	bottom: 0;
	left: 0;
	height: 100/50rem;
	display: flex;
	justify-content: center;
	align-items: center;
	.leftfooter,.centerfooter,.rightfooter{
		flex:1;
	}
	.centerfooter{
		flex:2!important;
		img{
			transform: scale(0.6);
		}
	}
	.leftfooter{
		img{
			transform: rotate(-180deg);
		}
	}
}
.stop{
	width: 100%;
	height: 100%;
	&:before{
		content:'';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 99;
		background-color: #5B4E61;
	}
	.right{
		width: 30/50rem!important;
		right: 10/50rem!important;
		position: absolute;
		right: 20/50rem;
		float: right;
		z-index: 9999;
		top:12/50rem!important;
	}
}
.headtitlestop{
	width: 87%;
	height: 200/50rem;
	position: relative;
	z-index: 99;
	margin: 0 auto;
	padding-top: 40/50rem;
	img{
		width: 100%;
	}
}
.flex_imglist{
	width: 60%;
	position: relative;
	z-index: 999;
	height: 130/50rem;
	margin-top: 100/50rem!important;
	display: flex!important;
	margin:0 auto;
	justify-content: center;
	align-items: center;
	.leftimgStop{
		flex:1;
	}
	.rightimgStop{
		flex:1;
	}
	img{
		width: 100%;
	}
	span{
		font-size: 16/50rem;
		text-align: center;
		color:#fff;
		display: block;
	}
}
.footer_imgListStop{
	z-index: 999;
	position: absolute;
	bottom: 50/50rem;
	left: 50%;
	margin-left: -31%;
	width: 65%;
	height: 50/50rem;
	img{
		width: 100%;
	}
}
</style>
