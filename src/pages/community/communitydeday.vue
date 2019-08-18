<template>
	<div class="comm_warp">
		<!--头部组件-->
		<div class="header">
			<headersList title="动态详情" class="pp">
				<img src="../../assets/community/icon_user_filled_focus.png" slot='leftImg' class='left' @click="goMine" />
				<img src="../../assets/community/mo_store_title_back.png" slot="rightImg" class="right" @click="Goback" />
			</headersList>
		</div>
		<!--个人详情-->
		<commu :name="name">
			<img class="imgsrc" :src="Img" slot="imgsrc" />
			<span id="tic" slot="text" @click="more()">关注</span>
		</commu>
		<!--个人信息宣言-->
		<deday_con></deday_con>

		<div class="content">
			<div class="content_sec">
				<!--照片区-->
				<comImg></comImg>
				<!--时间-->
				<comTime></comTime>
			</div>
		</div>
		<div class="talk_sec">
			<mt-cell :title="Count" value="加油"></mt-cell>
			<div class="talk_b">
				<ul class="talk_b_sec">
					<li><img src="../../assets/community/doge.png" /></li>
					<li>
						<span></span>
						<input type="text" placeholder="写下你第一条评论吧" />
						<span></span>
					</li>
				</ul>
			</div>
			<!--评论区-->
			<comTalk></comTalk>
			<div class="talk_d">
				<h1>查看全部评论({{Count}})</h1>
			</div>
		</div>
		<div class="cc">
			<h1>你可能感兴趣</h1></div>
		<!--照片内容区-->
		<comcont></comcont>
		<!--回到顶部-->
		<backtop></backtop>
	</div>
</template>
<script>
	import headersList from '../../components/header.vue'
	import commu from '../../components/commu.vue'
	import deday_con from '../../components/deday_con.vue'
	import backtop from '../../components/backtop.vue'
	import comImg from '../../components/com-Img.vue'
	import comTalk from '../../components/com-Talk.vue'
	import comTime from '../../components/com-Time.vue'
	import comcont from '../../components/com-Cont.vue'
	export default {
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
				Count: (() => {
					/* $route.query获取shopid */
					return this.$route.query.Count.toString()
				})(),
				num: []
			}
		},
		components: {
			headersList,
			commu,
			deday_con,
			backtop,
			comImg,
			comTalk,
			comTime,
			comcont
		},
		methods: {
			more() {

				var comment = {
					username: this.name,
					usericon: this.Img
				}

				var list = JSON.parse(localStorage.getItem("cmts") || '[]')
				list.unshift(comment)
				localStorage.setItem('cmts', JSON.stringify(list))

			},

			Goback() {
				this.$router.push('/community')
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
	
	.pp {
		margin-left: 3rem;
	}
	
	.comm_warp .header .left {
		margin-left: 5/50rem;
	}
	
	.comm_warp .header .right {
		margin-right: 320/50rem;
	}
	
	.comm_warp .header p {
		margin-left: 80px;
	}
	/*content开始*/
	
	.content {
		width: 100%;
		background: white;
	}
	/*content结束*/
	/*评论区*/
	
	.talk_sec {
		margin-top: 0.15rem;
		background: white;
	}
	
	.talk_sec .talk_b {
		height: 1rem;
		line-height: 1rem;
	}
	
	.talk_sec .talk_b .talk_b_sec {
		overflow: hidden;
		padding: 0 0.5rem;
		height: 1rem;
		line-height: 1rem;
	}
	
	.talk_sec .talk_b .talk_b_sec li {
		float: left;
		height: 1rem;
		line-height: 1rem;
		text-align: center;
	}
	
	.talk_sec .talk_b .talk_b_sec li img {
		width: 0.7rem;
		margin-top: 0.15rem;
	}
	
	.talk_sec .talk_b .talk_b_sec li input {
		border: 1px gray solid;
		height: 0.7rem;
		text-indent: 0.75rem;
		border-radius: 0.35rem;
		background: #f5f1f1;
		margin-left: 0.2rem;
		width: 5rem;
		font-size: 0.15rem;
	}
	
	.talk_sec .talk_b .talk_b_sec li span {
		width: 0.25rem;
		height: 0.25rem;
		position: absolute;
	}
	
	.talk_sec .talk_b .talk_b_sec li span:nth-of-type(1) {
		background: url(../../assets/community/icon_address_edit.png) no-repeat;
		background-size: contain;
		margin-top: 0.38rem;
		margin-left: 0.5rem;
	}
	
	.talk_sec .talk_d {
		text-align: center;
		height: 1.0rem;
		line-height: 1.0rem;
	}
	/*评论区结束*/
	
	.cc {
		margin-top: 0.15rem;
		padding-left: 0.25rem;
		height: 1rem;
		line-height: 1rem;
		background: white;
	}
	/*内容开始*/
	
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
		background: #F1F1F1;
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
		font-size: 12/50rem;
	}
	
	.sec .sec_sec .box ul li:nth-of-type(2) {
		margin-left: 0.1rem;
	}
	
	.sec .sec_sec .box ul img {
		width: 0.4rem;
	}
</style>