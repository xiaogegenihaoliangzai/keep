<template>
  <div class="search">
  	<div class="showserachlist" v-show="isSerachShow">
  		<div class="divHeader">
	  		<headersList title="探索">
	  			<img src="../../assets/scarch/icon_search_lined_dark.png" alt="" slot="leftImg" class="right" @click="serachBtn" />
	  		</headersList>
	  	</div>
	  	<Tabbar slot="bar">
	  		<div slot="list1">
	  			<yd-tab-panel name="" slot="list1" label="课程与挑战">
	  			<div class="bgc">
	  					<div class="banner">
			              <div class="swiper-container">
							    <div class="swiper-wrapper">
							        <div class="swiper-slide"><img src="https://static1.keepcdn.com/2019/08/17/1565977734679_750x340.jpg" alt="" /></div>
							        <div class="swiper-slide"><img src="https://static1.keepcdn.com/2019/08/16/11/1565924512389_750x340.jpg" alt="" /></div>
							        <div class="swiper-slide"><img src="https://static1.keepcdn.com/2019/08/16/1565953711012_750x340.jpg" alt="" /></div>
							        <div class="swiper-slide"><img src="https://static1.keepcdn.com/2019/08/16/1565941381608_750x340.jpg" alt="" /></div>
							        <div class="swiper-slide"><img src="https://static1.keepcdn.com/2019/08/16/1565956477827_750x340.jpg" alt="" /></div>
							    </div>
							    <div class="swiper-pagination"></div>
						   </div>
				        </div>
			        <div class="listf">
						<yd-flexbox>
				            <yd-flexbox-item>
				            	<router-link to="/searchall">
				            		<img src="../../assets/scarch/su_training_entrance_all.png" alt="" />
				            		<p>找课程</p>
				            	</router-link>
				            </yd-flexbox-item>
				            
				            <yd-flexbox-item>
				            	<img src="../../assets/scarch/tc_icon_food_library.png" alt="" />
				            	<p>动作库</p>
				            </yd-flexbox-item>
				            <yd-flexbox-item>
				            	<img src="../../assets/scarch/tc_icon_food_classify.png" alt="" />
				            	<p>活动挑战</p>
				            </yd-flexbox-item>
				            <yd-flexbox-item>
				            	<img src="../../assets/scarch/su_training_entrance_mine.png" alt="" />
				            	<p>私家课</p>
				            </yd-flexbox-item>
				          
				        </yd-flexbox>
					</div>
					
						<div class="videocontent">
				<router-view></router-view>
			</div>
	  			</div>

					<section class="list_as">
						<div class="wid">
							<yd-flexbox>
					            <div class="lefts"><yd-flexbox-item>热门课程分类</yd-flexbox-item></div>
					            <div><img src="../../assets/scarch/kt_kibra_setting_right_arrow.png" alt="" /></div>
					        </yd-flexbox>
				        </div>
				        	<div class="menus">
								<li><a href=""><i class="iconfont iconhuo"></i>减脂</a></li>
								<li><a href=""><i class="iconfont iconhuo"></i>瑜伽</a></li>
								<li><a href="">有氧操</a></li><br/>
								<li><a href=""><i class="iconfont iconhuo"></i>学生专属</a></li>
								<li><a href="">腹肌马甲线</a></li>
								<li><a href="">无器械</a></li>
								<li><a href="">为你推荐</a></li>
							</div>
					</section>

					<section class="piall list_as">
						<div class="wid">
							<yd-flexbox>
					            <div class="lefts"><yd-flexbox-item>全站热门活动</yd-flexbox-item></div>
					            <div><img src="../../assets/scarch/kt_kibra_setting_right_arrow.png" alt="" /></div>
					        </yd-flexbox>
				        </div>

						<div class="itemImg">
							<yd-list theme="2">
						        <yd-list-item v-for="(item,index) in list" :key="index">
						            <img slot="img" :src="item.img">
						            <span slot="title">{{item.title}}</span>
						            <yd-list-other slot="other">
						                <div class="plist">
						                    <p>{{item.count}} 人已参加</p>
						                </div>
						            </yd-list-other>
						        </yd-list-item>
						    </yd-list>
						</div>
					</section>

					<section class="infocontent list_as">
						<div class="wid">
							<yd-flexbox>
					            <div class="lefts"><yd-flexbox-item>趣味探索</yd-flexbox-item></div>
					        </yd-flexbox>
				        </div>

				        <div class="content">
				        	<div class="wid_all">
				        		<yd-flexbox>
						            <yd-flexbox-item class="iconbg">
						            	<p>K星物语</p>
						            	<span>探索神奇的秘密</span>
						            </yd-flexbox-item>
						            <yd-flexbox-item class="iconbg">
						            	<p>每日一答</p>
						            	<span>运动知识大挑战</span>
						            </yd-flexbox-item>
						            <yd-flexbox-item class="iconbg">
						            	<p>燃脂真人跳</p>
						            	<span>跳出好身材</span>
						            </yd-flexbox-item>
						        </yd-flexbox>
				        	</div>
				        </div>
					</section>

					<aside class="asideImg list_as">
						<div class="wid">
							<yd-flexbox>
					            <div class="lefts"><yd-flexbox-item>课程专题</yd-flexbox-item></div>
					        </yd-flexbox>
				        </div>
				        <div class="proline">
							<img src="../../assets/scarch/img.png" alt="" />
							<img src="../../assets/scarch/img2.png" alt="" />
							<img src="../../assets/scarch/img3.png" alt="" />
				        </div>
					</aside>
		        </yd-tab-panel>
	  		</div>
	  		<div slot="list1">
	  			<yd-tab-panel label="运动商城"></yd-tab-panel>
	  		</div>
	  		<div slot="list1">
	  			<yd-tab-panel label="健康轻食"></yd-tab-panel>
	  		</div>
	  		<div slot="list1">
	  			<yd-tab-panel label="硬件商店"></yd-tab-panel>
	  		</div>
	  		<div slot="list1">
	  			<yd-tab-panel label="Keepland"></yd-tab-panel>
	  		</div>

	  	</Tabbar>
	<button @click="btns">12</button>
  	</div>
  	


			<div class="serachsoso" v-show="!isSerachShow">
				<div class="isSerachbarbo">
					<img src="../../assets/scarch/icon_arrow_left_lined_dark.png" alt="" slot="leftImg" class="right" @click="serachBtn" v-on:click="isSerachShow=true" />
					<yd-search  placeholder="大家都在搜 「这都算Keep」"  v-model="inputs" :on-submit="submitHandler" class="rightserach"></yd-search>
				</div>
				<div class="bgccode" v-show="isInVal">
					<section class="isListkostart list_as animated fadeInUp">
						<div class="wid">
							<yd-flexbox>
					            <div class="lefts"><yd-flexbox-item>热门搜索</yd-flexbox-item></div>
					        </yd-flexbox>
				        </div>
						<div class="menus">
							<li><a href=""><i class="iconfont iconhuo"></i>这都算Keep</a></li>
							<li><a href=""><i class="iconfont iconhuo"></i>腹肌</a></li>
							<li><a href=""><i class="iconfont iconhuo"></i>减脂</a></li>
							<li><a href="">瘦腿</a></li>
							<li><a href="">李现</a></li>
							<li><a href="">拉伸</a></li>
							<li><a href="">马甲线</a></li>
						</div>
					</section>
				</div>
				<div class="seValList" v-show="islodVer">
					<li>
						<yd-icon name="search" size="14px" class="seachIconfont"></yd-icon>
						<p>点击搜索<span>{{inputs}}</span></p>
					</li>
					<ul class="VelinPutes">
						<li>
							<p>{{inputs}} <span>点击搜索相关课程</span></p>
						</li>
						<li>
							<p>{{inputs}} <span>点击搜索相关商品</span></p>
						</li>
					</ul>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import headersList from '../../components/header.vue'
import Tabbar from '../../components/Tabbar.vue'
import '../../assets/css/iconfont.css'
export default {
	data(){
		return {
			list:[
				{img:'https://static1.keepcdn.com/2019/07/26/1564127153372_750x340.jpg',title:'会员假日狂欢季',count:31373},
				{img:'https://static1.keepcdn.com/2019/07/26/1564131241465_750x340.jpg',title:'暑假打怪|征服 10 个波比',count:40080},
				{img:'https://static1.keepcdn.com/2019/07/29/1564397476355_750x340.jpg',title:'暑假带着Keep去旅行',count:24353},
				{img:'https://static1.keepcdn.com/2019/07/23/1563872988035_750x340.jpg',title:'KEEP甜蜜养成',count:52800},
			],
			value1: '',
			isSerachShow:true,
			inputs:'',
			isInVal:true,
			islodVer:false
		}
	},
	props:['label'],
	components:{
	  	Tabbar,
	  	headersList,
	  	
	},
  	mounted(){
	    new Swiper ('.swiper-container', {
	    loop: true,
	    // 如果需要分页器
	    pagination: {
	      el: '.swiper-pagination',
	    },
	    autoplay:true,
	  })
	},
	methods:{
		btns(){
			this.$axios.get("../../../static/data/新建文本文档.json").then(res=>{
				console.log(res.data)
			})
		},
		submitHandler(value) {
            this.$dialog.toast({mes: `正在搜索：${value}...`});
            console.log(value+'2323');
            this.islodVer=false;
        },
        serachBtn(){
        	console.log(1)
        	this.isSerachShow=false;
        }
	},
	watch:{
	    inputs(curVal, oldVal) {
	        if(this.inputs.length>=1){
	        	this.isInVal=false;
	        	this.islodVer=true;
	        	this.$axios.get('/api/?keyword='+this.inputs).then((res,req)=>{
		        	console.log(res)
		        })
	        }else{
	        	this.isInVal=true;
	        }
	        console.log(curVal+1)
	    }
	}
}
</script>
<style scoped lang="less">
.banner{
  width: 90%;
  margin-top:10/50rem;
  border-radius: 5/50rem;
  overflow: hidden;
  height: 130/50rem;
}
.proline{
	width: 95%;
	margin:0 auto;
	display: table;
	text-align: left;
	img{
		width: 100%;
	}
}
.isSerachbarbo{
	width: 100%;
	height: 50/50rem;
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	img{
		flex:1;
		transform: scale(0.54);
	}
	.rightserach{
		flex:6;
		font-size: 14/50rem;
	}
}
.bgccode{
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	margin-top: 8/50rem;
	background-color: #fff;
	background: #fff;
}
.plist{
	text-align: left!important;
	display: inline-block;
	width: 100%;
	padding:2/50rem;
}
.iconhuo{
	padding-right: 3/50rem;
	color:#F95D6F;
}
.iconbg{
	line-height: 40/50rem;
	position: relative;
	height: 90/50rem;
	width: 100%;
	display: block;
	border-radius: 5/50rem;
	margin: 3/50rem;
	overflow: hidden;
	background:url(../../assets/scarch/01.png)no-repeat right bottom;
	background-size: auto 40%;
	background-color: #F1EFFA;
	&:nth-of-type(2){
		background:url(../../assets/scarch/02.png)no-repeat right bottom;
		background-size: auto 40%;
		background-color: #F0F3FC;
	}
	&:nth-of-type(3){
		background:url(../../assets/scarch/03.png)no-repeat right bottom;
		background-size: auto 40%;
		background-color: #F7FBFA;
	}
	p{
		position: absolute;
		top: 0;
		left:10/50rem;
		font-size: 14/50rem;
		font-weight: 600;
	}
	span{
		line-height: 76/50rem;
		font-size: 12/50rem;
		color:#676767;
		text-indent: 10/50rem;
		display: inline-block;
		width: 100%;
		float: left;
		text-align: left;
	}
}
.wid_all{
	width: 95%;
	height: 100/50rem;
}
.yd-list-title{
	width: 100%!important;
	span{
		font-size: 14px!important;
		color:#000!important;
	}
}

.itemImg{
	width: 95%;
	img{
		border-radius: 5/50rem;
		padding: 3/50rem;
	}
}
.right{
	width: 25/50rem!important;
	right: 10/50rem!important;
	top:12/50rem!important;
}
.tab[data-v-7b7e5f8e]{
	height: auto!important;
}
.swiper-slide{
	img{
		width: 100%;
		height: 120/50rem;
 	 	border-radius: 5/50rem;
	}
}
.divHeader{
	overflow: hidden;
	width: 100%;
}
.listf{
	width: 95%;
	padding-bottom: 20/50rem;
	img{
		height: 35/50rem;
	}
	p{
		font-size: 12/50rem;
		padding-top: 7/50rem;
	}
}
.list_as{
	width: 100%;
	float: left;
	overflow: hidden;
	.wid{
		width: 92%;
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
		overflow: hidden;
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
		margin: 5/50rem 20/50rem 10/50rem 0;
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
.search{
	background-color: #fff;
}
.seValList{
	overflow: hidden;
	margin-top: 10/50rem;
	box-shadow: 0 -5px 6px rgba(230,230,230,0.1);
	.seachIconfont{
		color:#B3B3B3;
		float: left;
		text-indent: 7/50rem;
	}
	p{
		color:#999999;
		font-size: 14/50rem;
		text-align: left;
		padding-left: 5/50rem;
		text-indent: 3/50rem;
		span{
			color:#2A2A2A;
			padding-left: 5/50rem;
		}
	}
	.VelinPutes{
		li{
			p{
				text-indent: 10/50rem;
				color:#2A2A2A;
				span{
					float: right;
					color:#999999;
					padding-right: 10/50rem;
				}
			}
		}
	}
	li{
		height: 40/50rem;
		line-height: 40/50rem;
		border-bottom: 1px solid #F0F0F0;
	}
}
</style>
