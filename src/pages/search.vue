<template>
  <div class="search">
  	<Tabbar slot="bar">
  		<div slot="list1">
  			<yd-tab-panel name="" label="课程与挑战">
  			<div class="bgc">
  					<div class="banner">
		              <div class="swiper-container">
						    <div class="swiper-wrapper">
						        <div class="swiper-slide"><img src="../assets/scarch/banner01.png" alt="" /></div>
						        <div class="swiper-slide"><img src="../assets/scarch/banner02.png" alt="" /></div>
						        <div class="swiper-slide"><img src="../assets/scarch/banner1.png" alt="" /></div>
						    </div>
						    <div class="swiper-pagination"></div>
					   </div>
			        </div>
		        <div class="listf">
					<yd-flexbox>
			            <yd-flexbox-item>
			            	<img src="../assets/scarch/su_training_entrance_all.png" alt="" />
			            	<p>找课程</p>
			            </yd-flexbox-item>
			            <yd-flexbox-item>
			            	<img src="../assets/scarch/tc_icon_food_library.png" alt="" />
			            	<p>动作库</p>
			            </yd-flexbox-item>
			            <yd-flexbox-item>
			            	<img src="../assets/scarch/tc_icon_food_classify.png" alt="" />
			            	<p>活动挑战</p>
			            </yd-flexbox-item>
			            <yd-flexbox-item>
			            	<img src="../assets/scarch/su_training_entrance_mine.png" alt="" />
			            	<p>私家课</p>
			            </yd-flexbox-item>
			        </yd-flexbox>
				</div>
  			</div>

				<section class="list_as">
					<div class="wid">
						<yd-flexbox>
				            <div class="lefts"><yd-flexbox-item>热门课程分类</yd-flexbox-item></div>
				            <div><img src="../assets/scarch/kt_kibra_setting_right_arrow.png" alt="" /></div>
				        </yd-flexbox>
			        </div>
			        	<div class="menus">
							<li><a href="">减脂</a></li>
							<li><a href="">瑜伽</a></li>
							<li><a href="">有氧操</a></li>
							<li><a href="">学生专属</a></li>
							<li><a href="">腹肌马甲线</a></li>
							<li><a href="">无器械</a></li>
							<li><a href="">为你推荐</a></li>
						</div>
				</section>
	        </yd-tab-panel>
  		</div>


			


  	</Tabbar>
		


		
  </div>
</template>

<script>
import Swiper from 'swiper';
import Tabbar from '../components/Tabbar.vue'
export default {
  props:['label'],
  components:{
  	Tabbar
  },
  mounted(){
    new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  })  
}
}
</script>
<style scoped lang="less">
.banner{
  width: 90%;
  margin-top:10/50rem;
  border-radius: 5/50rem;
  overflow: hidden;
  height: 120/50rem;
}
.swiper-slide{
	img{
		width: 100%;
		height: 100/50rem;
 	 	border-radius: 5/50rem;
	}
}
.listf{
	float: left;
	width: 100%;
	padding-bottom: 20/50rem;
	img{
		height: 35/50rem;
	}
	p{
		font-size: 12/50rem;
		padding-top: 4/50rem;
	}
}
.list_as{
	width: 100%;
	float: left;
	overflow: hidden;
	.wid{
		width: 93%;
		height: 30/50rem;
		position: relative;
		margin-top: 15/50rem;
		img{
			height: 25/50rem;
			position: absolute;
			right: 0;
			top: 0;
		}
	}
	.lefts{
		div{
			position: absolute;
			left: 0;
			top: 0;
			font-size: 14/50rem;
			color:#404040;
		}
	}
}
.bgc{
	background-color:#FFF!important;
	width: 100%;
	overflow: hidden;
	z-index: 1;
	margin-top: 10/50rem;
}
.banner,.listf{
	position: relative;
	z-index: 2;
}
.menus{
	width: 90%;
	overflow: hidden;
	li{
		float: left;
		height: 20/50rem;
		margin: 5/50rem 10/50rem 10/50rem 0;
		a{
			text-align: center;
			line-height: 20/50rem;
			background-color: #F7F7F7;
			border-radius: 10/50rem;
			font-size: 12/50rem;
			display: block;
			color:#7E7E7E;
			padding:2/50rem 12/50rem 2/50rem 12/50rem;
		}
	}
}
.list_as{
	margin-top: 10/50rem;
	background-color:#fff;
	overflow: hidden;
	padding-bottom: 15/50rem;
}
</style>
