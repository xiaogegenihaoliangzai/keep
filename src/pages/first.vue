<template>
	<div>
		<!--头部开始-->
		<div id="header">
			<a href="wo.html"><span class="left"><img src="../assets/images/Snipaste_2019-07-04_18-39-18.png"></span></a>
			<span class="right"><img src="../assets/images/Snipaste_2019-07-04_18-40-23.png"></span>
		</div>

		<!--内容区域开始-->
		<div id="wrapper">
			<div class="top">
				<img src="../assets/images/icon_entry_camera.png">
			</div>
			<div class="active">
				<p>
					<i class="tu1"><img src="../assets/images/travel-show_02.jpg"></i>
					<span class="zi">修改资料</span>
					<strong class="tu2"><img src="../assets/images/su_icon_personal_qr_code_purple.png"></strong>
				</p>
				<p>
					知识渊博的图样图森破<br>
					<strong>女&nbsp;|&nbsp;广东省，深圳市&nbsp;|&nbsp;2019.07.01加入</strong>
				</p>
				<p>
					<span>0<br><strong>关注</strong></span>
					<span>0<br><strong>粉丝</strong></span>
					<span>0<br><strong>获赞</strong></span>
				</p>
			</div>

			<div class="bottom">
				<p><img src="../assets/images/su_klog_list_empty.png"></p>
				<p>还没有发过动态哦</p>
				<p>发动态</p>
			</div>

		</div>

		<!--底部开始-->
		<div id="footer">
			<a href="#" class="community ">
				<span></span>
				<p>社区</p>
			</a>

			<a href="#" class="search">
				<span></span>
				<p>搜索</p>
			</a>

			<a href="#" class="sports">
				<span></span>
				<p>运动</p>
			</a>

			<a href="#" class="plan">
				<span></span>
				<p>计划</p>
			</a>

			<a href="#" class="my">
				<span></span>
				<p>我</p>
			</a>

		</div>
		<!--底部结束-->
	</div>

</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	body {
		font-size: 12px;
		font-family: helvetica;
	}
	
	.sizing {
		box-sizing: border-box;
	}
	/*头部样式*/
	
	#header {
		position: fixed;
		width: 100%;
		height: 50px;
		background: rgb(96, 87, 104);
		opacity: 0.3;
		line-height: 50px;
		z-index: 99;
		float: left;
		padding-top: 10px;
	}
	
	#header ../assets/images {
		width: 30px;
		height: 30px;
	}
	
	#header .right {
		float: right
	}
	/*内容开始*/
	
	#wrapper {
		width: 100%;
		height: 800px;
		background: white;
		position: relative;
	}
	
	.top {
		position: relative;
		border: 1px solid #000;
		width: 100%;
		height: 180px;
		background: rgb(96, 87, 104);
		opacity: 0.8;
	}
	
	.top img {
		position: absolute;
		width: 25px;
		height: 25px;
		top: 145px;
		left: 340px;
		z-index: 1000;
	}
	
	.active {
		width: 100%;
		height: 250px;
		background: white;
		position: relative;
	}
	
	.tu1 img {
		position: absolute;
		top: -35px;
		border: 5px solid white;
		width: 70px;
		height: 70px;
		border-radius: 50%;
	}
	
	.tu2 img {
		border: 1px solid darkgray;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		float: right;
		margin-top: 10px;
		margin-right: 10px;
		padding: 5px;
	}
	
	.zi {
		position: absolute;
		left: 240px;
		top: 10px;
		font-size: 15px;
		border: 1px solid #000;
		width: 80px;
		height: 25px;
		text-align: center;
		border-radius: 50px;
		padding-top: 5px;
	}
	
	.active p:nth-child(2) {
		position: absolute;
		top: 80px;
		font-size: 20px;
		color: black;
		padding-left: 10px;
		line-height: 35px;
	}
	
	.active p:nth-child(2) strong {
		font-size: 15px;
		color: darkgray;
	}
	
	.active p:nth-child(3) {
		position: absolute;
		top: 170px;
		font-size: 20px;
		color: black;
		margin-left: -80px;
	}
	
	.active p:nth-child(3) span {
		float: left;
		padding-left: 110px;
		text-align: center;
	}
	
	.active p:nth-child(3) strong {
		color: darkgray;
		font-size: 13px;
	}
	
	.bottom {
		/*border: 1px solid #000;*/
		width: 100%;
		height: 350px;
		background: rgb(250, 250, 250);
		padding-top: 40px;
	}
	
	.bottom p {
		text-align: center;
		margin-top: 20px;
	}
	
	.bottom ../assets/images {
		width: 110px;
		height: 90px;
	}
	
	.bottom p:nth-child(2) {
		font-size: 15px;
	}
	
	.bottom p:nth-child(3) {
		/*border: 1px solid #000;*/
		width: 100px;
		height: 30px;
		border-radius: 50px;
		background: rgb(43, 202, 144);
		color: white;
		font-size: 15px;
		padding-top: 5px;
		margin-left: 130px;
	}
	/*底部开始*/
	
	#footer {
		width: 100%;
		height: 1.30667rem;
		border-top: 1px solid darkgray;
		/*position: absolute;*/
		left: 0;
		position: fixed;
		bottom: 0;
		z-index: 2;
		padding: 50;
		display: flex;
		padding-bottom: 10px;
		background: white;
	}
	
	#footer a {
		flex: 1;
		text-align: center;
		box-sizing: border-box;
		display: block;
		color: darkgray;
	}
	
	#footer a span {
		display: block;
		background-position: 50% 50%;
		background-size: contain;
		background-repeat: no-repeat;
		margin: 0.1333rem auto 0.04rem;
	}
	
	#footer p {
		font-size: 0.35667rem;
	}
	
	#footer a.community span {
		width: 0.72rem;
		height: 0.64rem;
		background-image: url(../assets/images/icon_community_filled_dark_gray.png);
	}
	
	#footer a.search span {
		width: 0.72rem;
		height: 0.64rem;
		background-image: url(../assets/images/icon_follow_filled_normal.png);
	}
	
	#footer a.sports span {
		width: 0.72rem;
		height: 0.64rem;
		background-image: url(../assets/images/icon_sports_filled_focus.png);
	}
	
	#footer a.plan span {
		width: 0.72rem;
		height: 0.64rem;
		background-image: url(../assets/images/icon_suit_tab_filled_gray.png);
	}
	
	#footer a.my span {
		width: 0.72rem;
		height: 0.64rem;
		background-image: url(../assets/images/icon_user_filled_normal.png);
	}
	/*底部结束*/
</style>