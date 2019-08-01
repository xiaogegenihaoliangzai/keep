<template>
  <div class="AllProline">
  	<div class="bgc">
	  	<div class="fonimg">
	    	<img src="../../assets/scarch/icon_arrow_left_lined_dark.png" alt="" />
	  	</div>
	  	<div class="font_ps">
		    <headeras title="全部课程">
		    	<img src="../../assets/scarch/icon_search_lined_dark.png" class="right" slot="rightImg" alt="" />
		    </headeras>
	  	</div>
  	</div>
  	<tabbar class="widlist">
  		<yd-tab-panel slot="list1" label="全部">
  			
  			<section class="tabpotion">
		  		<van-dropdown-menu>
				  <van-dropdown-item title="排序" style="top:50px;" v-model="value" :options="option" />
				  <van-dropdown-item style="top:50px;" title="部位" ref="item">
				    <van-switch-cell v-model="switch1" title="全身" />
				    <van-switch-cell v-model="switch2" title="胸部" />
				    <van-switch-cell v-model="switch2" title="腹部" />
				    <van-switch-cell v-model="switch2" title="腿部" />
				    <van-switch-cell v-model="switch2" title="臀部" />
				    <van-switch-cell v-model="switch2" title="背部" />
				    <van-switch-cell v-model="switch2" title="肩部" />
				    <van-switch-cell v-model="switch2" title="手臂" />
				    <van-switch-cell v-model="switch2" title="腰部" />
				    <van-switch-cell v-model="switch2" title="颈部" />
				    <van-button block type="info" @click="onConfirm">确认</van-button>
				  </van-dropdown-item>

				  <van-dropdown-item style="top:50px;" title="难度" ref="item">
				    <van-switch-cell v-model="switch1" title="包邮" />
				    <van-switch-cell v-model="switch2" title="团购" />
				    <van-switch-cell v-model="switch2" title="团购" />
				    <van-switch-cell v-model="switch2" title="团购" />
				    <van-button block type="info" @click="onConfirm">确认</van-button>
				  </van-dropdown-item>
					
					<img src="../../assets/scarch/tc_ic_course_filter_unselected.png" class="imgfont" alt="" />
				  <van-dropdown-item style="top:50px;">
				    <van-switch-cell v-model="switch1" title="包邮" />
				    <van-switch-cell v-model="switch2" title="团购" />
				    <van-switch-cell v-model="switch2" title="团购" />
				    <van-switch-cell v-model="switch2" title="团购" />
				    <van-button block type="info" @click="onConfirm">确认</van-button>
				  </van-dropdown-item>

				</van-dropdown-menu>
		  	</section>

			<div class="bgc">
			  	<section class="imglist">
			  		<router-link to="/comban">
			  			<img src="../../assets/scarch/list.png" alt="" />
			  		</router-link>
			  		<img src="../../assets/scarch/list2.png" alt="" />
			  	</section>
		  	</div>

  		</yd-tab-panel>
        <yd-tab-panel slot="list2" label="健身">333333</yd-tab-panel>
        <yd-tab-panel slot="list3" label="跑步">444444</yd-tab-panel>
        <yd-tab-panel slot="list4" label="瑜伽">555555</yd-tab-panel>
        <yd-tab-panel slot="list4" label="操课">555555</yd-tab-panel>
        <yd-tab-panel slot="list4" label="行走">555555</yd-tab-panel>
        <yd-tab-panel slot="list4" label="球类">555555</yd-tab-panel>



  	</tabbar>


  	


  </div>
</template>

<script>
import headeras from '../../components/header.vue'
import tabbar from '../../components/Tabbar.vue'
export default {
  data(){
  	return {
  		value: 0,
      	switch1: false,
      	switch2: false,
      	switch3: false,
      	switch4: false,
      	option: [
        	{ text: '综合排序', value: 0 },
        	{ text: '新课优先', value: 1 },
        	{ text: '时长从短到长', value: 2 },
        	{ text: '卡路里消耗从高到低', value: 3 },
      	]
  	}
  },
  components:{
  	headeras,
  	tabbar
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
}

</script>
<style scoped lang="less">
.fonimg{
	width: 30/50rem;
	float: left;
	margin: 10/50rem 0 0 15/50rem;
	img{
		width: 100%;
	}
}
.bgc{
	background-color: #fff;
}
.imgfont{
	height:30/50rem;
	width: 30/50rem;
	position: absolute;
	display: block;
	right: 30/50rem;
	top: 10/50rem;
	z-index: 0;
}
.yd-tab-nav-scoll .yd-tab-nav .yd-tab-nav-item{
	padding:0 29px!important;
}
.right{
	width: 25/50rem!important;
	right: 10/50rem!important;
	top:12/50rem!important;
}
.headerWrap{
	overflow: hidden;
	font-weight:200!important;
}
.imglist{
	width: 95%;
	margin:0 auto;
	padding-top: 10/50rem;
	img{
		width: 100%;
	}
}
</style>
