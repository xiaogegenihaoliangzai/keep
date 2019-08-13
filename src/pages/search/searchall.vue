<template>
  <div class="AllProline">
  	<div class="bgc">
	  	<div class="fonimg">
	  		<router-link to="search">
	    		<img src="../../assets/scarch/icon_arrow_left_lined_dark.png" alt="" />
	  		</router-link>
	  	</div>
	  	<div class="font_ps">
		    <headeras title="全部课程">
		    	<img src="../../assets/scarch/icon_search_lined_dark.png" class="right" slot="rightImg" alt="" />
		    </headeras>
	  	</div>
  	</div>
  	  	<tabbar class="widlist">
  		<yd-tab-panel slot="list1" label="全部" >			
  			<section class="tabpotion">
		  		<van-dropdown-menu active-color="#26C38C" >
				  <van-dropdown-item title="排序" style="top:50px;color:#f00;" v-model="value" :options="option" change="s" />
					  <van-dropdown-item style="top:50px;" title="部位" ref="item"   v-show="!inimgShow">
					  	<ul >
					  		<li>
						  		<a>全身</a>
							    <a>胸部</a>
							    <a>腹部</a>
							    <a>腿部</a>
							    <a>臀部</a>
							    <a>背部</a>
							    <a>肩部</a>
							    <a>手臂</a>
							    <a>腰部</a>
							    <a>颈部</a>
						  	</li>
						    <button>重置</button>
						    <button>确认</button>
					  	</ul>
					  </van-dropdown-item>

				  <van-dropdown-item style="top:50px;" title="难度" ref="item">
				    <ul>
				  		<li>
					  		<a>K1零基础</a>
						    <a>K2初学</a>
						    <a>K3进阶</a>
						    <a>K4强化</a>
						    <a>K5挑战</a>
					  	</li>
					    <button>重置</button>
					    <button>确认</button>
				  	</ul>

				  </van-dropdown-item>


			<van-overlay :show="inimgShow" @click="afont" />
				</van-dropdown-item >
					<div class="iconhidden" @click="inbtnImg">
					 	<img :src="inimg" class="imgfont" alt="" type="primary" text="" /> 
					</div>
				    <div class="listafter" v-show="inimgShow">
				    	<ul class="after_list">
				    		<p>目标</p>
					  		<li>
						  		<a>减脂</a>
							    <a>塑形</a>
							    <a>增肌</a>
							    <a>保持健康</a>
						  	</li>
					  	</ul>
					  	<ul>
				    		<p>器械</p>
					  		<li>
						  		<a>无机械</a>
							    <a>小哑铃</a>
							    <a>弹力带</a>
							    <a>跳绳</a>
							    <a>健身球</a>
							    <a>弹力绳</a>
							    <a>泡沫轴</a>
							    <a>坐姿单车</a>
							    <a>TRX</a>
							    <a>壶铃</a>
						  	</li>
						    <button>重置</button>
						    <button>确认</button>
					  	</ul>
				    </div>

				</van-dropdown-menu>

		  	</section>
			<div class="bgc">

			  	<section class="imglist">
			  		<router-link to="/comban">
			  			<img src="../../assets/scarch/list.png" alt="" />
			  		</router-link>
			  		<img src="../../assets/scarch/list2.png" alt="" />
	</section>
			  	<section class="imglist" v-model="items">
			  		<router-link to="/comban" v-for="(item,index) in listie" :key="index">
			  			<img  v-lazy.imglist="item.img" v-show="isShowList" />
			  		</router-link>


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
      	],
      	isShow:true,
      	isShowList:true,
      	items:'',
      	listie:[
        {img:require('../../assets/scarch/list2.png')},
      	{img:require('../../assets/scarch/list2.png')}
      	],
      	inimg:require('../../assets/scarch/tc_ic_course_filter_unselected.png'),
      	inimgShow:true,
      	show:false,
  	}
  },
  components:{
  	headeras,
  	tabbar
  },
  mounted(){
  	this.inbtnImg();
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    btnList(index){
    	console.log();
    	this.items=index.target.innerText;
    	if(this.items=="新课优先"){
    		this.isShow=false;
    	}else{
    		this.isShow=true;
    	}
    },
    inbtnImg(){
    	if(this.inimgShow==true){
    		this.inimg=require('../../assets/scarch/tc_ic_course_filter_unselected.png');
    		this.inimgShow=false;
    	}else{
    		this.inimg=require('../../assets/scarch/tc_ic_course_filter_unselected2.png');
    		this.inimgShow=true;
    		this.show=true;
    	}
    },
    afont(){
    	this.show=!this.show;
    	this.inimgShow=false;
    	this.inimg=require('../../assets/scarch/tc_ic_course_filter_unselected.png');
    },
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
.after_list{
	li{
		padding-bottom: 10/50rem!important;
	}
}
.listafter{
	width: 100%;
	position: fixed;
	top: 50/50rem;
	z-index: 999;
	background-color: #fff;
	p{
		font-size: 12px;
		width: 100%;
		display: block;
		text-align: left;
		text-indent: 25/50rem;
		padding:15/50rem 0 5/50rem 0;
	}
}
.iconhidden{
	overflow: hidden;
	width: 55px;
	position: relative;
	&:before{
		content:'';
		position: absolute;
		width: 1/50rem;
		height: 30%;
		background-color: #E5E5E5;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	}
}
.imgfont{
	height:25/50rem;
	width: 25/50rem;
	position: absolute;
	display: block;
	right: 15/50rem;
	top: 13/50rem;
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
.tabpotion{
	ul{
		li{
			display: flex;
			flex-wrap: wrap;
			padding-bottom: 30/50rem;
			align-items: center;
			a{
			background-color: #F2F2F2;
			color:#333;
			font-size: 12px;
			width: 70/50rem;
			display: inline-block;
			margin: 15/50rem 0 5/50rem 20/50rem;
			padding:3/50rem 0 3/50rem 0;
			line-height: 20/50rem;
			border-radius: 15/50rem;
			}
		}
	}
	button{
		width: 45%;
		height: 30/50rem;
		background-color: #26C38C;
		color:#fff;
		border:none;
		margin: 0 5/50rem 0 5/50rem;
		border-radius: 40/50rem;
		margin-bottom: 20/50rem;
		&:nth-of-type(1){
			background:none;
			border:1px solid #26C38C;
			color: #26C38C;
		}
	}
}
</style>
