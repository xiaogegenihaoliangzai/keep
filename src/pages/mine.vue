<template>
	<div>
		<!--头部开始-->
		<div id="header">
			<ul>
				<li class="left">
					<a>我</a>
				</li>
				<li class="right">
					<a><img src="../../static/wo-img/icon_setting_lined_dark.png"></a>
					<a><img src="../../static/wo-img/icon_scan_lined_dark.png"></a>
					<a><img src="../../static/wo-img/fd_ic_login_dialog_email.png"></a>
				</li>
			</ul>
		</div>

		<!--内容区域开始-->
		<div id="wrapper">
			<a href="person.vue">
				<div class="top">
					<ul class="top-1">
						<li class="tu"><img src="../../static/wo-img/travel-show_02.jpg"></li>
						<li class="zi">
							<p>知识渊博的图样图森破</p><br>
							<p>
								<span><img src="../../static/wo-img/fd_icon_grade.9.png"></span>
								<span>0徽章</span>
							</p>
							<strong>KG.0</strong>
						</li>
					<li class="logo"><img src="../../static/wo-img/ic_portrait_training_right_on.png"></li>
					</ul>

					<ul class="top-2">
						<li>
							<span>0</span><br>
							<strong> 关注</strong>
						</li>
						<li>
							<span>0</span><br>
							<strong>  粉丝</strong>
						</li>
						<li>
							<span>0</span><br>
							<strong> 动态</strong>
						</li>
						<li>
							<span>0</span><br>
							<strong> 卡路里币</strong>
						</li>
					</ul>
				</div>
			</a>
			<div class="active1">
				<ul>
					<li>
						<img src="../../static/wo-img/webwxgetmsgimg.jpg""> 我的课程
					</li>
					<li>
						<img src="../../static/wo-img/Snipaste_2019-07-04_16-48-06.png"> 我的活动
					</li>
					<li>
						<img src="../../static/wo-img/webwxgetmsgimg2.jpg"> 我的硬件
					</li>
				</ul>

				<p><img src="../../static/wo-img/253582193.jpg"></p>
			</div>
			
		<div class="active2">
				<p>
					<span>我的运动数据</span>
					<img src="../../static/wo-img/ic_music_more.png">
				</p>
				<p>
					<span>总运动</span><strong>(分钟)</strong>
					<span>本周消耗</span><strong>(千卡)</strong>
				</p>
				<p>
					<span>0</span>
					<span>0</span>
				</p>
			</div>

			<div class="active3">
				<p>
					<span class="ww">我的身体数据<img src="../../static/wo-img/fd_icon_eye_lined.png"></span>
					<span class="tt"><img src="../../static/wo-img/ic_music_more.png"></span>
				</p>
				<p>
					<span>160.0<strong>身高cm</strong></span>
					<span>49.0<strong>体重kg</strong></span>
				</p>
			</div>


     <div class="list">
			<mines >
				
				<i class="fa fa-star-o" aria-hidden="true"slot="left" ></i>
               <!-- <img src="../../static/wo-img/ic_collect_preview.png" slot="left"/>   -->
				<p slot="center">我的收藏</p>
			    <img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines >
				<i class="fa fa-file-text-o" aria-hidden="true"slot="left" ></i>
                <p slot="center">草稿箱</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines >
               <i class="fa fa-female" aria-hidden="true"slot="left" ></i>
               <p slot="center">身体测试</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines >
                <i class="fa fa-user-circle" aria-hidden="true"slot="left" ></i>
                 <p slot="center">我的Keepland</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines >
                <i class="fa fa-suitcase" aria-hidden="true"slot="left" ></i>  
                <p slot="center">我的钱包</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines title="草稿箱">
                <i class="fa fa-file-text-o" aria-hidden="true"slot="left" ></i>
                <p slot="center">我的订单</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines title="身体测试">
               <i class="fa fa-cart-arrow-down" aria-hidden="true"slot="left" ></i>
               <p slot="center">我的购物车</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines title="我的Keepland">
                 <i class="fa fa-superpowers" aria-hidden="true"slot="left" ></i>
                <p slot="center">我的卡路里工厂</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines title="身体测试">
              <i class="fa fa-heart-o" aria-hidden="true"slot="left" ></i>
               <p slot="center">领取七夕大礼包</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines title="我的Keepland">
               <i class="fa fa-share-alt" aria-hidden="true"slot="left" ></i>
                <p slot="center">帮助中心</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
	</div>
		
			
 </div>
</div>
</template>

<script>
	import mines from '../components/mines.vue'
	
	import 'font-awesome/css/font-awesome.min.css'
	export default {
		
		props:['title'],
		data() {
			return {}
		},
		methods: {},
		components: {
			mines
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
	/*头部样式*/
	
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
		width: 30/50rem;
		height: 30/50rem;
		padding-left: 10/50rem;
	}
	/*内容开始*/
	
	#wrapper {
		width: 100%;
		height: 1300/50rem;
		background: gainsboro;
		position: relative;
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
	
	.tu img {
		width: 60/50rem;
		height: 60/50rem;
		border-radius: 50%;
	}
	
	.zi p:nth-child(1) {
		font-size: 15/50rem;
	}
	
	.zi p:nth-child(2) {
		position: relative;
		
	}
	.zi strong {
		display: block;
		/*border: 1/50rem solid #000;*/
		background: rgb(43, 202, 144);
		width: 50/50rem;
		height: 20/50rem;
		border-radius: 50/50rem;
		text-align: center;
		color: white;
		position: absolute;
		top: 44/50rem;
		left: 170/50rem;
		line-height: 20/50rem;
	}
	
	.zi img {
		width: 80/50rem;
		height: 30/50rem;
		margin-left: -65/50rem;
		margin-top: -30/50rem;
	}
	
	.zi span:nth-child(2) {
		display: block;
		position: absolute;
		top: 45/50rem;
		left: 116/50rem;
		color: white;
		font-size: 13/50rem;
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
	
	.top-2 strong {
		color: darkgray;
	}
	
	.top-2 li {
		float: left;
		padding-left: 60/50rem;
		text-align: center;
		font-size: 10/50rem;
	}
	
	.top-2 li span {
		font-size: 18/50rem;
		font-weight: 700/50rem;
	}
	
	.active1 {
		position: absolute;
		top: 200/50rem;
		/*	border: 1/50rem solid #000;*/
		border-top: 1/50rem solid darkgray;
		width: 100%;
		height: 120/50rem;
		background: white;
		z-index: 99;
		color: black;
		font-size: 13/50rem;
	}
	
	.active1 ul {
		margin-top: 20/50rem;
	}
	
	.active1 li {
		float: left;
		padding-left: 30/50rem;
	}
	
	.active1 li img {
		width: 30/50rem;
		height: 30/50rem;
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
		/*	border: 1/50rem solid #000;*/
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
		font-size: 17/50rem;
		padding-right: 220/50rem;
		
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
		margin-left: -145/50rem;
		font-size: 13/50rem;
	}
	
	.active2 p:nth-child(2) span {
		padding-left: 40/50rem;
	}
	
	.active2 p:nth-child(2) strong {
		color: darkgray;
		padding-left: 10/50rem;
	}
	
	.active2 p:nth-child(3) {
		margin-top: 20/50rem;
		font-size: 25/50rem;
		margin-left: -280/50rem;
	}
	
	.active2 p:nth-child(3) span {
		padding-left: 110/50rem;
	}
	
	.active3 {
		position: absolute;
		top: 500/50rem;
		/*border: 1/50rem solid #000;*/
		width: 100%;
		height: 130/50rem;
		background: white;
	}
	
	.ww img {
		width: 30/50rem;
		height: 25/50rem;
		padding-top: 10/50rem;
	}
	
	.ww {
		margin-right: 220/50rem;
		font-size: 17/50rem;
		color: black;
	}
	
	.tt img {
		width: 20/50rem;
		height: 25/50rem;
		float: right;
		margin-right: 10/50rem;
		padding-top: 10/50rem;
	}
	
	.active3 p:nth-child(2) {
		padding-top: 30/50rem;
		margin-left: -145/50rem;
	}
	
	.active3 p:nth-child(2) span {
		padding-left: 40/50rem;
		font-size: 25/50rem;
		color: black;
		font-weight: 600;
	}
	
	.active3 p:nth-child(2) strong {
		font-size: 13/50rem;
		padding-left: 5/50rem;
		color: darkgray;
	}
	.list{
	/*	border: 1/50rem solid #000;*/
		width: 100%;
		height: 780/50rem;
		position: absolute;
		top:635/50rem;
		
	}
	
.list img{
	width: 30/50rem;
	height: 30/50rem;
}
	
.list p{
	position: absolute;
	left: 48/50rem;
}
	
.list i {
	font-size: 26px;
}	
	
</style>