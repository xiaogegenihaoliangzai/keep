<template>
	<div class="hello">
		<div id="header">
			<ul>
				<li class="left">
					<a>我</a>
				</li>
				<li class="right">
					<a><img src="../../assets/wo-img/icon_setting_lined_dark.png"></a>
					<a><img src="../../assets/wo-img/icon_scan_lined_dark.png"></a>
					<a><img src="../../assets/wo-img/fd_ic_login_dialog_email.png"></a>
				</li>
			</ul>
		</div>
		<div id="wrapper">
			<div class="top">
				<ul class="top-1">
					<li class="tu" @click="run3"><img src="../../assets/wo-img/travel-show_02.jpg"></li>
					<li class="zi">
						<p>可爱大方的{{showmsg}}</p><br>
						<p>
							<span><img src="../../assets/wo-img/fd_icon_grade.9.png"></span>
							<span>9徽章</span>
						</p>
						<em>KG.10</em>
					</li>
					<li class="logo"><img src="../../assets/wo-img/ic_portrait_training_right_on.png"></li>
				</ul>

				<ul class="top-2">
					<li>
						<span>{{storages.length}}</span><br>
						<em @click="run"> 关注</em>
					</li>
					<li>
						<span>15</span><br>
						<em>粉丝</em>
					</li>
					<li>
						<span>2</span><br>
						<em> 动态</em>
					</li>
					<li>
						<span>13</span><br>
						<em> 卡路里币</em>
					</li>
				</ul>
			</div>

			<div class="active1">
				<ul>
					<li @click="run2">
						<i class="fa fa-television" aria-hidden="true"></i> 我的课程
					</li>
					<li>
						<i class="fa fa-calendar-check-o" aria-hidden="true"></i> 我的活动
					</li>
					<li>
						<i class="fa fa-meh-o" aria-hidden="true"></i> 我的硬件
					</li>
				</ul>
				<p><img src="../../assets/wo-img/253582193.jpg"></p>
			</div>
		</div>

		<div class="active2">
			<p>
				<span>我的运动数据</span>
				<img src="../../assets/wo-img/ic_portrait_training_right_on.png">
			</p>
			<p>
				<span>总运动</span><em>(分钟)</em>
				<span>本周消耗</span><em>(千卡)</em>
			</p>
			<p>
				<span>56</span>
				<span>300</span>
			</p>
		</div>

		<div class="active3">
			<p>
				<span class="ww">我的身体数据<img src="../../assets/wo-img/fd_icon_eye_lined.png"></span>
				<span class="tt"><img src="../../assets/wo-img/ic_portrait_training_right_on.png"></span>
			</p>
			<p>
				<span>{{sg|fobodysg}}<em>身高cm</em></span>
				<span>{{tz|fobodytz}}<em>体重kg</em></span>
			</p>
		</div>

		<div class="list">
			<div class="wid">
				<mines>
					<i class="fa fa-star-o" aria-hidden="true" slot="left"></i>
					<p slot="center">我的收藏</p>
					<img src="../../assets/wo-img/ic_portrait_training_right_on.png" slot="right" />
				</mines>
				<mines>
					<i class="fa fa-file-text-o" aria-hidden="true" slot="left"></i>
					<p slot="center">草稿箱</p>
					<img src="../../assets/wo-img/ic_portrait_training_right_on.png" slot="right" />
				</mines>
				<mines>
					<i class="fa fa-female" aria-hidden="true" slot="left"></i>
					<p slot="center">身体测试</p>
					<img src="../../assets/wo-img/ic_portrait_training_right_on.png" slot="right" />
				</mines>
				<mines>
					<i class="fa fa-user-circle" aria-hidden="true" slot="left"></i>
					<p slot="center">我的Keepland</p>
					<img src="../../assets/wo-img/ic_portrait_training_right_on.png" slot="right" />
				</mines>
				<mines>
					<i class="fa fa-suitcase" aria-hidden="true" slot="left"></i>
					<p slot="center">我的钱包</p>
					<img src="../../assets/wo-img/ic_portrait_training_right_on.png" slot="right" />
				</mines>
				<mines title="草稿箱">
					<i class="fa fa-file-text-o" aria-hidden="true" slot="left"></i>
					<p slot="center">我的订单</p>
					<img src="../../assets/wo-img/ic_portrait_training_right_on.png" slot="right" />
				</mines>
				<mines title="身体测试">
					<i class="fa fa-cart-arrow-down" aria-hidden="true" slot="left"></i>
					<p slot="center">我的购物车</p>
					<img src="../../assets/wo-img/ic_portrait_training_right_on.png" slot="right" />
				</mines>
				<mines title="我的Keepland">
					<i class="fa fa-superpowers" aria-hidden="true" slot="left"></i>
					<p slot="center">我的卡路里工厂</p>
					<img src="../../assets/wo-img/ic_portrait_training_right_on.png" slot="right" />
				</mines>
				<mines title="身体测试">
					<i class="fa fa-heart-o" aria-hidden="true" slot="left"></i>
					<p slot="center">领取七夕大礼包</p>
					<img src="../../assets/wo-img/ic_portrait_training_right_on.png" slot="right" />
				</mines>
				<mines title="我的Keepland">
					<i class="fa fa-share-alt" aria-hidden="true" slot="left"></i>
					<p slot="center">帮助中心</p>
					<img src="../../assets/wo-img/ic_portrait_training_right_on.png" slot="right" />
				</mines>
			</div>

		</div>

	</div>

</template>

<script>
	import mines from '../../components/mines.vue'
	import 'font-awesome/css/font-awesome.min.css'
	export default {
		props: ['title'],
		data() {
			return {
				showmsg: "你好游客",
				sg: '170',
				tz: '70',
				storages: [],
			}

		},
		mounted() {
			this.showmsg = localStorage.getItem('phonenum', this.loginphone);
			this.sg = localStorage.getItem("sg")
			this.tz = localStorage.getItem("tz")
			this.username = localStorage.getItem('username');
			var storages = [];
			storages.push({
				Name: window.localStorage.getItem('username'),
				Icon: window.localStorage.getItem('usericon')
			})
			this.storages = storages
            console.log(storages)
		},
		methods: {
			run() {
				this.$router.push("/guanzhu")
			},
			run2() {
				this.$router.push("/class2")
			},
			run3() {
				this.$router.push("/person")
			},
		},
		components: {
			mines
		},
		filters: {
			fobodysg(val) {
				return val.substr(0, 3) + ".0"
			},
			fobodytz(val) {
				return val.substr(0, 2) + ".0"
			}
		}
	}
</script>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}
	
	body {
		font-size: 12/50rem;
		font-family: helvetica;
	}
	
	.sizing {
		box-sizing: border-box;
	}
	
	#header {
		position: fixed;
		width: 100%;
		height: 50/50rem;
		background: white;
		line-height: 50/50rem;
		z-index: 99;
	}
	
	.left {
		float: left;
		font-size: 20/50rem;
		color: black;
		margin-left: 10/50rem;
	}
	
	.right {
		float: right;
		margin-right: 10/50rem;
		margin-top: 10/50rem;
	}
	
	.right img {
		width: 27.5/50rem;
		height: 27.5/50rem;
		padding-left: 10/50rem;
	}
	
	.top {
		position: absolute;
		width: 100%;
		height: 150/50rem;
		/*border: 1/50rem solid #000;*/
		margin-top: 50/50rem;
		background: white;
	}
	
	.top-1 {
		margin-top: 10/50rem;
	}
	
	.top-1 li {
		float: left;
		padding-left: 10/50rem;
	}
	
	.tu {
		width: 75px;
		height: 65px;
		overflow: hidden;
	}
	
	.tu img {
		width: 60/50rem;
		height: 60/50rem;
		border-radius: 50%;
	}
	
	.zi {
		border: 1px solid white;
		width: 250px;
		height: 75px;
		margin-left: 5px;
	}
	
	.zi p:nth-child(1) {
		font-size: 15/50rem;
		position: absolute;
		margin-left: 0;
	}
	
	.zi p:nth-child(2) {
		position: relative;
	}
	
	.zi em {
		display: block;
		/*border: 1/50rem solid #000;*/
		background: rgb(43, 202, 144);
		width: 50/50rem;
		height: 20/50rem;
		border-radius: 50/50rem;
		text-align: center;
		color: white;
		position: absolute;
		top: 45/50rem;
		left: 177/50rem;
		line-height: 20/50rem;
		font-size: 10px;
	}
	
	.zi img {
		width: 80/50rem;
		height: 30/50rem;
		margin-left: -155/50rem;
		position: relative;
		top: 8px;
	}
	
	.zi span:nth-child(2) {
		display: block;
		position: absolute;
		top: 46/50rem;
		left: 122/50rem;
		color: white;
		font-size: 10/50rem;
	}
	
	.logo img {
		position: absolute;
		width: 25/50rem;
		height: 25/50rem;
		right: 20/50rem;
		top: 30/50rem;
	}
	
	.top-2 {
		width: 100%;
		float: left;
		margin-top: 15/50rem;
		margin-left: -40/50rem;
		color: black;
	}
	
	.top-2 li {
		float: left;
		padding-left: 60/50rem;
		text-align: center;
		font-size: 10/50rem;
	}
	
	.top-2 li span {
		font-size: 16/50rem;
		font-weight: bolder;
	}
	
	.top-2 em {
		color: darkgray;
		font-size: 10/50rem;
		font-weight: lighter;
	}
	
	.active1 {
		position: absolute;
		top: 200/50rem;
		/*	border: 1/50rem solid #000;*/
		border-top: 1/50rem solid #f5f5f5;
		width: 100%;
		height: 105/50rem;
		background: white;
		z-index: 99;
		color: black;
		font-size: 13/50rem;
	}
	
	.active1 ul {
		margin-top: 20/50rem;
		margin-left: -10px;
	}
	
	.active1 li {
		float: left;
		padding-left: 38/50rem;
	}
	
	.active1 li i {
		font-size: 22/50rem;
	}
	
	.active1 p img {
		position: absolute;
		left: 20/50rem;
		top: 70/50rem!important;
		width: 340/50rem;
		height: 50/50rem;
	}
	
	.active2 {
		position: absolute;
		top: 337.5/50rem!important;
		width: 100%;
		height: 115/50rem!important;
		background: white;
		color: black;
	}
	
	.active2 img {
		/*width: 30/50rem;
		height: 25/50rem;*/
	}
	
	.active2 p:nth-child(1) span {
		font-size: 17/50rem;
		padding-right: 255/50rem;
	}
	
	.active2 p:nth-child(1) img {
		width: 30/50rem;
		height: 25/50rem;
		float: right;
		position: relative;
		/*padding-right: 20/50rem;*/
		left: -5px;
		top: -20px
	}
	
	.active2 p:nth-child(1) {
		margin-top: 10/50rem;
	}
	
	.active2 p:nth-child(2) {
		margin-top: 20/50rem;
		margin-left: -135/50rem!important;
		font-size: 13/50rem;
	}
	
	.active2 p:nth-child(2) span {
		padding-left: 40/50rem;
	}
	
	.active2 p:nth-child(2) em {
		color: darkgray;
		padding-left: 10/50rem;
		font-size: 10px;
	}
	
	.active2 p:nth-child(3) {
		margin-top: 0/50rem!important;
		font-size: 25/50rem;
		margin-left: -270/50rem!important;
	}
	
	.active2 p:nth-child(3) span {
		padding-left: 110/50rem;
		font-size: 19px;
	}
	
	.active3 {
		position: absolute;
		top: 465/50rem!important;
		width: 100%;
		height: 110/50rem!important;
		background: white;
	}
	
	.ww img {
		width: 30/50rem;
		height: 25/50rem;
		padding-top: 10/50rem;
	}
	
	.ww {
		margin-right: 220/50rem;
		font-size: 16/50rem;
		color: black;
	}
	
	.tt img {
		width: 25/50rem;
		height: 25/50rem;
		float: right;
		position: absolute;
		right: 10px;
		top: 10px;
	}
	
	.active3 p:nth-child(2) {
		padding-top: 30/50rem;
		margin-left: -150/50rem;
	}
	
	.active3 p:nth-child(2) span {
		padding-left: 40/50rem;
		font-size: 19/50rem;
		color: black;
		font-weight: 560;
	}
	
	.active3 p:nth-child(2) em {
		font-size: 10/50rem;
		padding-left: 5/50rem;
		color: darkgray;
	}
	
	.active1 p img {
		position: absolute;
		left: 20/50rem;
		top: 90/50rem;
		width: 340/50rem;
		height: 50/50rem;
	}
	
	.active2 {
		position: absolute;
		top: 360/50rem;
		width: 100%;
		height: 130/50rem;
		background: white;
		color: black;
	}
	
	.active2 img {
		width: 20/50rem;
		height: 25/50rem;
	}
	
	.active2 p:nth-child(1) span {
		font-size: 16/50rem;
		padding-left: 10/50rem;
	}
	
	.active2 p:nth-child(1) img {
		float: right;
		padding-right: 10/50rem;
	}
	
	.active2 p:nth-child(1) {
		margin-top: 10/50rem;
	}
	
	.active2 p:nth-child(2) {
		margin-top: 20/50rem;
		margin-left: -30/50rem;
		font-size: 13/50rem;
	}
	
	.active2 p:nth-child(2) span {
		padding-left: 40/50rem;
	}
	
	.active2 p:nth-child(2) em {
		color: darkgray;
		padding-left: 10/50rem;
	}
	
	.active2 p:nth-child(3) {
		margin-top: 20/50rem;
		font-size: 25/50rem;
		margin-left: -170/50rem;
	}
	
	.active2 p:nth-child(3) span {
		padding-left: 110/50rem;
	}
	
	.active3 {
		position: absolute;
		top: 500/50rem;
		width: 100%;
		height: 130/50rem;
		background: white;
	}
	
	.ww img {
		width: 25/50rem;
		height: 25/50rem;
	}
	
	.list {
		width: 100%;
		height: 780/50rem;
		position: absolute;
		top: 580/50rem!important;
	}
	
	.wid {
		width: 95%;
		margin: 0 auto;
	}
	
	.list img {
		width: 30/50rem;
		height: 30/50rem;
	}
	
	.list p {
		position: absolute;
		left: 35/50rem;
		font-size: 14px;
	}
	
	.list i {
		font-size: 20px;
	}
	
	.list img {
		width: 25/50rem;
		height: 25/50rem;
		position: absolute;
		right: 10/50rem;
	}
	
	.bgc {
		background-color: #fff;
		width: 100%;
		height: 300/50rem;
		overflow: hidden;
	}
</style>