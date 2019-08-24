<template>
  <div class="timer">
    <div class="start" v-show="startTop">
      <h2 class="top">{{counts | run}}</h2>
      <ul class="listtop">
      	<li v-for="item in ulTop"></li>
      </ul>
      <div class="banner swiper-no-swiping">
        <div class="swiper-container swiper-no-swiping">
          <div class="swiper-wrapper swiper-no-swiping">
            
            <div class="swiper-slide">
              <video src="http://static1.keepcdn.com/chaos/0816/A047C059_s.mp4" loop="loop" preload="preload" autoplay="autoplay"></video>
            </div>
            <div class="swiper-slide">
              <video src="http://static1.keepcdn.com/chaos/0816/A047C059_s.mp4" loop="loop" preload="preload" autoplay="autoplay"></video>
            </div>
            <div class="swiper-slide">
              <video src="http://static1.keepcdn.com/chaos/0816/A047C059_s.mp4" loop="loop" preload="preload" autoplay="autoplay"></video>
            </div>
          </div>
        </div>
        <section class="tite">
         <p><span v-show="numbersList">{{number}}/</span>{{nice}}</p>
          <p><strong>{{add}}/8</strong><strong>90°</strong><span>平板支撑</span></p>
        </section>
      </div>
      <section class="footerss">
	      <div class="footer" :style="{width:progreess+'%'}"></div>
	       <div class="leftfooter">
	          <img src="../../assets/scarch/kt_kibra_setting_right_arrow.png" alt />
	        </div>
	        <div class="centerfooter" @click="btnstop">
	          <img src="../../assets/scarch/stop.png" alt />
	        </div>
	        <div class="rightfooter">
	          <img src="../../assets/scarch/kt_kibra_setting_right_arrow.png" alt />
	        </div>
	      
      </section>
    </div>

    <section class="stop" v-show="!startTop">
      <headersList title="探索">
        <img
          src="../../assets/scarch/icon_share_android_filled.png"
          alt
          slot="rightImg"
          class="right"
          @click="serachBtn"
        />
      </headersList>
      <div class="headtitlestop">
        <img src="../../assets/scarch/2019-08-22_163347.png" alt />
      </div>

      <div class="flex_imglist">
        <div class="leftimgStop">
          <img src="../../assets/scarch/stoplist.png" alt />
          <span>退出训练</span>
        </div>
        <div class="rightimgStop" @click="sanklist">
          <img src="../../assets/scarch/startlist.png" alt />
          <span>继续训练</span>
        </div>
      </div>

      <div class="footer_imgListStop">
        <img src="../../assets/scarch/2019-08-22_165054.png" alt />
      </div>
    </section>

    <footer v-show="inShow">
      <div class="nums">
        <h1>{{num}}</h1>
      </div>
      <li v-for="item in arr">
      	<audio :src="item.src" v-model="startnewMp"></audio>
      </li>
      
    </footer>
  </div>
</template>

<script>
import Swiper from "swiper";
import headersList from "../../components/header.vue";
export default {
	data() {
			return {
				arr:[
					{'src':'../../../static/mp3/N003.mp3'},
					{'src':'../../../static/mp3/N002.mp3'},
					{'src':'../../../static/mp3/N001.mp3'}
				],
				startTop: true,
				counts: 0,
				nice: 0,
				num: 4,
				inShow: false,
				number:0,
				numbersList:false,
				ulTop:0,
				progreess: 0,
				add:1,
				numStop:0,
				time:0,
				startnewMp:null
			};
		},
		components: {
			Swiper,
			headersList
		},
		mounted() {
			var list
			function sum(){
				list=new Swiper(".swiper-container", {
					loop: true,
					autoplay: {
					   delay: 40,
					   reverseDirection: false,
					   stopOnLastSlide: true
					}
				});
			}sum()
			list.autoplay.stop();
			let timer = setInterval(res => {
				this.counts++;
			}, 1000);

			function random(lower, upper) {
				return Math.floor(Math.random() * (upper - lower + 1)) + lower;
			}
			random(5, 10)
			var count = random(5, 10)
			var topList=random(5,10)
			this.nice = count
			this.ulTop=topList

			let contData=setInterval((res)=>{
				this.inShow=true
				console.log(this.nice*1000*4,111)
				if(this.num<=1){
					this.inShow=false
					clearInterval(contData)
				}
				this.num--

			},1000)
			var __then=this
			var startTop
			function utime(){
				let runtimer=setInterval((data)=>{
					__then.number++
					if(__then.number===__then.nice){
						clearInterval(runtimer)
					}
					__then.numbersList=true
				},4000)
			}utime()
				function numbgClor(){
					__then.numStop+=1;

					var nuList=setInterval((res)=>{

 						if(__then.progreess===0){
							list.autoplay.stop();
						}
					__then.progreess++
					if(__then.progreess===99){
						list.autoplay.start();
					}
					
					if(__then.progreess===100){
						clearInterval(nuList)
						__then.add++
						list.autoplay.stop();
							random(1, 10)
						var count = random(1, 10)
						__then.nice = count
						__then.number=0
						
						// console.log(__then.number+'zhe')
						utime()
						__then.progreess=0
						if(__then.numStop===3){
							list.autoplay.stop();
							clearInterval(nuList)
							__then.$router.push('dataAll')
						}
						numbgClor();
						// list.autoplay.start();
						
						// __then.$router.push('dataAll')
						

					}
						
						
					},__then.nice*40*1)
					console.log(__then.numStop)

					
				}
				numbgClor()
		},
		methods: {
			btnstop() {
				this.startTop = false;
			},
			sanklist() {
				this.startTop = true;
			},
			serachBtn() {},
		},
		filters: {
			run(val) {
				if(val < 10) {
					return 0 + ":" + "0" + val;
				} else if(val >= 10 && val < 60) {
					return 0 + ":" + val;
				} else {
					if(val % 60 < 10) {
						return "0" + Math.floor(val / 60) + ":" + 0 + (val % 60);
					}
					return "0" + Math.floor(val / 60) + ":" + (val % 60);
				}
			}
		}
		
};</script>

<style scoped lang="less">
.top {
	position: fixed;
	top: 0;
	z-index: 9999;
	font-size: 40/50rem;
	opacity:0.4;
	-webkit-webkit-opacity:0.4;
	-moz-webkit-opacity:0.4;
	-ms-webkit-opacity:0.4;
	-o-webkit-opacity:0.4;
	font-weight: 900;
	padding: 10/50rem 0 0 15/50rem;
}

.swiper-slide {
	width: 100%;
	height: 100%;
	overflow: hidden;
	video {
		width: 160%;
		position: relative;
		left: -100px;
		height: 100%
	}
}

.nums {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 999;
	h1 {
		font-size: 160/50rem;
		color: #24C68D;
		text-shadow: 0 5px 10px rgba(0, 0, 0, 0.4)
	}
}

.tite {
	font-family: 'Impact'!important;
	color:#313330;
	p{
		position: absolute;
		z-index: 99999;
		text-indent: 10/50rem;
		bottom: 170/50rem;
		left: 0;
		font-size: 50/50rem;
		&:nth-of-type(2){
			font-family: '微软雅黑';
			font-size: 20/50rem;
			text-align: left;
			bottom: 135/50rem;
			text-indent: 15/50rem;
			font-size: 25/50rem;
			strong{
				padding-right: 10/50rem;
			}
			span{
				font-size: 28/50rem;
				padding-left: 5/50rem;
			}
		}
	}
	
}

.timer {
	&:after {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 0;
		background-color: #efedf4;
	}
}

.footer,.footerss {
	width: 100%;
	position: fixed;
	z-index: 9990 !important;
	bottom: 0;
	left: 0;
	background-color: #fff;
	height: 100/50rem;
	display: flex;
	justify-content: center;
	align-items: center;
	.leftfooter,
	.centerfooter,
	.rightfooter {
		flex: 1;
	}
	.centerfooter {
		flex: 2 !important;
		img {
			transform: scale(0.6);
		}
	}
	.leftfooter {
		img {
			transform: rotate(-180deg);
		}
	}
	img{
		position: relative;
		z-index: 9999!important;
		opacity: 0.7
	}
}
.footerss{
	z-index: 99999999!important;
}
.footer{
	background-color: #24C68D;
	position: absolute;
	z-index: 0!important
}

.stop {
	width: 100%;
	height: 100%;
	&:before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 99;
		background-color: #5b4e61;
	}
	.right {
		width: 30/50rem !important;
		right: 10/50rem !important;
		position: absolute;
		right: 20/50rem;
		float: right;
		z-index: 9999;
		top: 12/50rem !important;
	}
}

.headtitlestop {
	width: 87%;
	height: 200/50rem;
	position: relative;
	z-index: 99;
	margin: 0 auto;
	padding-top: 40/50rem;
	img {
		width: 100%;
	}
}

.flex_imglist {
	width: 60%;
	position: relative;
	z-index: 999;
	height: 130/50rem;
	margin-top: 100/50rem !important;
	display: flex !important;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	.leftimgStop {
		flex: 1;
	}
	.rightimgStop {
		flex: 1;
	}
	img {
		width: 100%;
	}
	span {
		font-size: 16/50rem;
		text-align: center;
		color: #fff;
		display: block;
	}
}

.footer_imgListStop {
	z-index: 999;
	position: absolute;
	bottom: 50/50rem;
	left: 50%;
	margin-left: -31%;
	width: 65%;
	height: 50/50rem;
	img {
		width: 100%;
	}
}</style>
