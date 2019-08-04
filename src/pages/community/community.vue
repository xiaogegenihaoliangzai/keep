<template>

	<div class="comm_warp">
		
		<div class="header">
			<headersList title="社区">
				<img src="../../assets/community/icon_search_lined_dark.png" slot="rightImg" class="right" />
			</headersList>
		</div>
		
		
		
		<!--		<div class="nav">
			<span :class="{active:currIndex==0}" @click="currIndex=0">
    		<router-link to="/community/hot">热门</router-link>
    	</span>
			<span :class="{active:currIndex==1}" @click="currIndex=1">
    		<router-link to="/community/attention">关注</router-link>
    	</span>
			<span :class="{active:currIndex==2}" @click="currIndex=2">
    		<router-link to="/community/topic">话题</router-link>
    	</span>
			<span :class="{active:currIndex==3}" @click="currIndex=3">
    		<router-link to="/community/diary">日记本</router-link>
    	</span>
			<span :class="{active:currIndex==4}" @click="currIndex=4">
    		<router-link to="/community/city">同城</router-link>
    	</span>
		</div>
		<div class="videocontent">
			<router-view></router-view>
		</div>
		-->

		<Tabbar class="uu">			
			<div slot="list1">
				<yd-tab-panel label="热门" class="item_list">
					<mt-loadmore :top-method="loadTop"   ref="loadmore">
					<section class="sec">
						<div class="sec_sec">
							<div class="box" v-for="(item,index) in arr">
								<a href="#">
									<img v-lazy.sec_sec="item.imgsrc" @click="nice">
									<p>{{item.title}}</p>
									<ul>
										<li><img v-lazy.sec_sec="item.thumbsrc"></li>
										<li>{{item.username}}</li>
										<li><img src="../../assets/community/icon_comment_like.png"></li>
										<li>{{item.cont}}</li>
									</ul>
								</a>
							</div>
						</div>
						<div class="sec_sec" id="sec_sec">
							<div class="box" v-for="(item,index) in arr2">
								<a href="#">
									<img v-lazy.sec_sec="item.imgsrc">
									<p>{{item.title}}</p>
									<ul>
										<li><img v-lazy.sec_sec="item.thumbsrc"></li>
										<li>{{item.username}}</li>
										<li><img src="../../assets/community/icon_comment_like.png"></li>
										<li>{{item.cont}}</li>
									</ul>
								</a>
							</div>
						</div>
					</section>
						</mt-loadmore>
				</yd-tab-panel>
			</div>
			<div slot="list1">
				<yd-tab-panel label="关注" class="item_list"><img src="../../assets/community/c.jpg" class="imgtt"></yd-tab-panel>
			</div>
			<div slot="list1" >
				<yd-tab-panel label="话题" class="item_list"><img src="../../assets/community/d.jpeg" class="imgtt"></yd-tab-panel>
			</div>
			<div slot="list1">
				<yd-tab-panel label="日记本"><img src="../../assets/community/b.jpg" class="imgtt"></yd-tab-panel>
			</div>
			<div slot="list1">
				<yd-tab-panel label="同城" class="item_list"><img src="../../assets/community/e.jpeg" class="imgtt"></yd-tab-panel>
			</div>

		</Tabbar>
		
		<!--回到顶部-->
      <backtop></backtop>
    
	</div>
	 
</template>

<script>import headersList from '../../components/header.vue'
import Tabbar from '../../components/Tabbar.vue'
import backtop from '../../components/backtop.vue'
export default {
	components: {
		Tabbar,
		headersList,
		backtop
	},
	data: function() {
		return {
			arr: [],
			arr2: [],
			currIndex: 0,
		}
	},
	mounted() {
		this.fn();
		this.fn1();
	},
	methods: {
		fn() {
			this.$axios.get("../../static/data/json7.json")
				.then(res => {
					this.arr = res.data.data
				})
		},
		fn1() {
			this.$axios.get("../../static/data/json8.json")
				.then(res => {
					//	console.log(res.data.data)
					this.arr2 = res.data.data
				})
		},
		nice() {

			this.$router.push('/communitydeday')
		},
		loadTop() {
			this.$refs.loadmore.onTopLoaded();
		}

	}

}</script>

<style scoped lang="less">.uu {
	width: 100%;
}

.imgtt {
	width: 100%;
	height: 100%;
}

.nav {
	height: 35/50rem;
	border-bottom: 1/50rem solid gainsboro;
}

.nav a {
	text-decoration: none;
	display: block;
	float: left;
	width: 20%;
	height: 35/50rem;
	line-height: 35/50rem;
}

.comm_warp .header {
	overflow: hidden;
	background: white;
}

.comm_warp .header .right {
	width: 25/50rem!important;
	right: 10/50rem!important;
	top: 12/50rem!important;
}

.sec {
	background: gainsboro;
	text-align: center;
	display: flex;
	overflow: hidden;
	align-content: space-between;
}

.sec .sec_sec {
	padding: 0.1rem 0.1rem;
	background: #FFFFFF;
	width: 50%;
}

.sec .sec_sec .box {
	margin-top: 0.1rem;
	border-radius: 0.1rem;
	background: #f6f7fb;
}

.sec .sec_sec .box img {
	width: 100%;
	border-radius: 0.1rem;
}

.sec .sec_sec .box a {
	display: block;
}

.sec .sec_sec .box p {
	overflow: hidden;
	text-overflow: ellipsis;
	display: box;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	font-size: 0.25rem;
	padding: 0 0.15rem;
	color: black;
	text-align: left;
	margin-bottom: 0.13333333rem;
}

.sec .sec_sec .box ul {
	overflow: hidden;
	display: flex;
	align-content: space-around;
	align-items: center;
	padding: 0 0.1rem;
}

.sec .sec_sec .box ul li {
	line-height: 0.7rem;
}

.sec .sec_sec .box ul li:nth-of-type(2) {
	margin-left: 0.1rem;
}

.sec .sec_sec .box ul img {
	width: 0.4rem;
}</style>
