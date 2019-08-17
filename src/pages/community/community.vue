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
					<mt-loadmore :top-method="loadTop" ref="loadmore">
						<!--照片内容区-->
						<comcont></comcont>
					</mt-loadmore>
				</yd-tab-panel>
			</div>
			<div slot="list1">
				<yd-tab-panel label="关注" class="item_list">
					<commu :name="username">
						<img class="imgsrc" :src="usericon" slot="imgsrc" />
						<span id="tic" slot="text" @click="more()">取消关注</span>
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
	export default {
		components: {
			Tabbar,
			headersList,
			backtop,
			comcont,
			commu
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
				newarr: []
			}

		},
		mounted() {

			this.username = localStorage.getItem('username');
			this.usericon = localStorage.getItem('usericon');

			var storages = [];
			storages.push({
				Name: window.localStorage.getItem('username'),
				Icon: window.localStorage.getItem('usericon')
			})
			console.log(storages)
			for(var i in storages) {
				var newarr = {}
				var newobj = [];
				newarr.data += storages[i]
				newobj.push(newarr)
				
			}

			//console.log(newobj)
		},

		methods: {
			loadTop() {
				this.$refs.loadmore.onTopLoaded();
			},
			goMine() {
				this.$router.push('/mine')
			}

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