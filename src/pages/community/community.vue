<template>
	<div class="comm_warp">
		<div class="header">
			<headersList title="社区">
				<img @click="goMine" src="../../assets/community/icon_user_filled_focus.png" slot="rightImg" class="right" />
			</headersList>
		</div>
		<Tabbar class="uu">

			<div slot="list1">
				<yd-tab-panel label="热门" class="item_list">
					<!--下拉刷新-->
					<mt-loadmore :top-method="loadTop" ref="loadmore">
						<comcont></comcont>
					</mt-loadmore>

					<!--	<downpull></downpull>-->
				</yd-tab-panel>
			</div>

			<div slot="list1">
				<yd-tab-panel label="关注" class="item_list">
					<commu :name="item.username"  :key="item.id" v-show="falge" v-for="(item,index) in newarr">
						<img class="imgsrc" :src="item.usericon" slot="imgsrc" />
						<span id="tic" slot="text" @click="more(index)">取消关注</span>
					</commu>
				</yd-tab-panel>
			</div>

			<div slot="list1">
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
<script>
	import headersList from '../../components/header.vue'
	import Tabbar from '../../components/Tabbar.vue'
	import backtop from '../../components/backtop.vue'
	import comcont from '../../components/com-Cont.vue'
	import commu from '../../components/commu.vue'
	import downpull from '../../components/downpull.vue'
	export default {
		components: {
			Tabbar,
			headersList,
			backtop,
			comcont,
			commu,
			downpull
		},
		data: function() {
			return {
				name: (() => {
					/* $route.query获取shopid */
					return this.$route.query.name
				})(),
				Img: (() => {
					/* $route.query获取shopid */
					return this.$route.query.Img
				})(),
				username: "",
				usericon: "",
				newarr: [],
				falge: true
			}
		},
		methods: {
			loadTop() {
				this.$refs.loadmore.onTopLoaded();
			},
			goMine() {
				this.$router.push('/mine')
			},
			more(index) {
				this.falge = !this.falge;
				//localStorage.removeItem('cmts')[index];
			},
			loadComments() {
				var list = JSON.parse(localStorage.getItem("cmts") || '[]')
				this.newarr = list
				//console.log(this.newarr)
			}
		},
		created() {
			this.loadComments()
		}
	}
</script>

<style scoped lang="less">
	.imgsrc {
		border-radius: 50%;
		width: 0.7rem;
		height: 0.7rem;
		text-align: center;
		margin-top: 0.2rem;
	}
		#tic {
		margin-left: -0.4rem;
	}
	.show {
		display: block;
	}
	
	.uu {
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
</style>