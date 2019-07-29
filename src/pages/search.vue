<template>
  <div class="search">
  	<Tabbar slot="bar">
  		<div slot="list1">
  			<yd-tab-panel name="" label="课程与挑战">
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
  margin-top:10/16rem;
  border-radius: 5/16rem;
  overflow: hidden;
}
.swiper-slide{
	img{
		width: 100%;
		height: 100/16rem;
 	 	border-radius: 5/16rem;
	}
}
</style>
