<template>
	<!--头部开始-->
		<div id="header">
			<ul>
				<li class="left">
					<a>我</a>
				</li>
				<li class="right">
					<a><img src="img/icon_setting_lined_dark.png"></a>
					<a><img src="img/icon_scan_lined_dark.png"></a>
					<a><img src="img/fd_ic_login_dialog_email.png"></a>
				</li>
			</ul>
		</div>

		<!--内容区域开始-->
		<div id="wrapper">
			<a href="person.html">
			<div class="top">
				<ul class="top-1">
					<li class="tu"><img src="img/travel-show_02.jpg"></li>
					<li class="zi">
						<p>知识渊博的图样图森破</p><br>
						<p>
							<span><img src="img/fd_icon_grade.9.png"></span>
							<span>0徽章</span>
						</p>
						<strong>KG.0</strong>
					</li>
					<li class="logo"><img src="img/ic_portrait_training_right_on.png"></li>
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
						<img src="img/webwxgetmsgimg.jpg"> 我的课程
					</li>
					<li>
						<img src="img/Snipaste_2019-07-04_16-48-06.png"> 我的活动
					</li>
					<li>
						<img src="img/webwxgetmsgimg2.jpg"> 我的硬件
					</li>
				</ul>

				<p><img src="img/253582193.jpg"></p>
			</div>

			<div class="active2">
				<p>
					<span>我的运动数据</span>
					<img src="img/ic_music_more.png">
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
					<span class="ww">我的身体数据<img src="img/fd_icon_eye_lined.png"></span>
					<span class="tt"><img src="img/ic_music_more.png"></span>
				</p>
				<p>
					<span>160.0<strong>身高cm</strong></span>
					<span>49.0<strong>体重kg</strong></span>
				</p>

			</div>

			<div class="bottom">
				<p>
					<img src="img/ic_collect_preview.png"><strong>我的收藏</strong>
					<span><img src="img/ic_music_more.png"></span>
				</p>
				<p>
					<img src="img/Snipaste_2019-07-04_17-18-05.png"><strong>草稿箱</strong>
					<span><img src="img/ic_music_more.png"></span>
				</p>
				<p>
					<img src="img/Snipaste_2019-07-04_17-15-45.png"><strong>身体测试</strong>
					<span><img src="img/ic_music_more.png"></span>
				</p>
				<p>
					<img src="img/Snipaste_2019-07-04_17-16-53.png"><strong>我的Keepland</strong>
					<span><img src="img/ic_music_more.png"></span>
				</p>
				<p>
					<img src="img/mo_red_package_icon_record.png"><strong>我的钱包</strong>
					<span><img src="img/ic_music_more.png"></span>
				</p>
				<p>
					<img src="img/su_image_entry_post_issue.png"><strong>我的订单</strong>
					<span><img src="img/ic_music_more.png"></span>
				</p>
				<p>
					<img src="img/mo_ic_shop_cart.png"><strong>我的购物车</strong>
					<span><img src="img/ic_music_more.png"></span>
				</p>
				<p>
					<img src="img/Snipaste_2019-07-04_17-17-32.png"><strong>我的卡路里工厂</strong>
					<span><img src="img/ic_music_more.png"></span>
				</p>
				<p>
					<img src="img/mo_ic_shop_cart.png"><strong>组队送3000元大礼...</strong>
					<span><img src="img/ic_music_more.png"></span>
				</p>
				<p>
					<img src="img/Snipaste_2019-07-04_17-17-32.png"><strong>帮助中心</strong>
					<span><img src="img/ic_music_more.png"></span>
				</p>

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
</template>



<script>
export default {
  data () {
    return {
    	
    	
    }
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
#header{
	position: fixed;
	width: 100%;
	height: 50px;
	background: white;
	line-height: 50px;
	z-index: 99;
}
.left{
	float: left;
	font-size: 20px;
	color: black;
	margin-left: 10px;
}
.right {
	float: right;
	margin-right: 10px;
	margin-top: 10px;
}
.right img{
	width: 30px;
	height: 30px;
	padding-left: 10px;
}


/*内容开始*/
#wrapper{
	width: 100%;
	height: 1300px;
	background: gainsboro;
	position: relative;
	
}
.top{
	position: absolute;
	width: 100%;
	height: 150px;
	/*border: 1px solid #000;*/
	margin-top: 50px;
	background: white;
	
}
.top-1{
	margin-top: 10px;
}
.top-1 li{
	float: left;
	padding-left: 10px;
}
.tu img{
	width: 60px;
	height: 60px;
	border-radius: 50%;
}
.zi p:nth-child(1){
	font-size: 15px;
}
.zi p:nth-child(2){
	position: relative;
}
.zi strong{
	display: block;
	/*border: 1px solid #000;*/
	background: rgb(43, 202, 144);
	width: 50px;
	height: 20px;
	border-radius: 50px;
	text-align: center;
	color: white;
	position: absolute;
	top:50px;
	left: 170px;
	line-height: 20px;
	
}
.zi  img{
	width: 80px;
	height: 30px;
}
.zi span:nth-child(2){
	display: block;
	position: absolute;
	top:52px;
	left: 110px;
	color: white;
}
.logo img{
	position: absolute;
	width: 25px;
	height: 25px;
	right: 20px;
	top: 30px;
}
.top-2 {
	width: 100%;
	float: left;
	margin-top: 15px;
	margin-left: -40px;
	color: black;
}
.top-2 strong{
	color: darkgray;
}
.top-2 li{
	float: left;	
	padding-left: 60px;	
	text-align: center;
	font-size: 10px;
}
.top-2 li span{
	font-size: 18px;
	font-weight: 700px;
}
.active1{
	position: absolute;
	top:200px;
/*	border: 1px solid #000;*/
    border-top: 1px solid darkgray;
	width: 100%;
	height: 120px;
	background: white;
	z-index: 99;
	color: black;
	font-size: 13px;
	
}
.active1 ul{
	margin-top: 20px;
}
.active1 li{
	float: left;
	padding-left: 30px;
}
.active1 li img{
	width: 30px;
	height: 30px;
	
}
.active1 p img{
	position: absolute;
	left: 20px;
	top:90px;
	width: 340px;
	height: 50px;
}
.active2 {
	position: absolute;
	top:360px;
/*	border: 1px solid #000;*/
	width: 100%;
	height: 130px;
	background: white;
	color: black;
}
.active2 img{
	width: 20px;
	height: 25px;
}
.active2 p:nth-child(1) span{
	font-size:17px;
	padding-left: 10px;
}
.active2 p:nth-child(1)  img{
	float: right;
	padding-right: 10px;
}
.active2 p:nth-child(1){
	margin-top: 10px;
}

.active2 p:nth-child(2){
	margin-top: 20px;
	margin-left: -30px;
	font-size: 13px;
}
.active2 p:nth-child(2) span{
	padding-left: 40px;
}
.active2 p:nth-child(2) strong{
	color: darkgray;
	padding-left: 10px;
}
.active2 p:nth-child(3){
	margin-top: 20px;
	font-size: 25px;
	margin-left: -80px;
}
.active2 p:nth-child(3) span{
	padding-left: 90px;
}

.active3 {
	position: absolute;
	top:500px;
	/*border: 1px solid #000;*/
	width: 100%;
	height: 130px;
	background: white;	
}
.ww img{
	width: 30px;
	height: 25px;
	padding-top: 10px;
}
.active3 p:nth-child(1){
	margin-left: 10px;
	font-size: 17px;
	color: black;
}
.tt img{
	width: 20px;
	height: 25px;
	float: right;
	margin-right: 10px;
	padding-top: 10px;
}
.active3 p:nth-child(2){
	padding-top: 30px;
	margin-left: -30px;
}
.active3 p:nth-child(2) span{
	padding-left: 40px;
	font-size: 25px;
	color: black;
	font-weight: 600;
}
.active3 p:nth-child(2) strong{
	font-size: 13px;
	padding-left: 5px;
	color: darkgray;
}
.bottom {
	position: absolute;
	top:630px;
/*	border: 1px solid #000;*/
	width: 100%;
	height: 700px;	
}
.bottom p{
/*	border: 1px solid #000;*/
	width: 100%;
	height: 50px;
	background: white;
	margin-top: 10px;
	
}
.bottom p strong{
	padding-left: 10px;
	color: black;
	font-size: 17px;
}
.bottom p img{
	width: 25px;
	height: 25px;
	margin-top: 10px;
}
.bottom  span img{
	width: 20px;
	height: 20px;
	float: right;
	padding-right: 10px;
	margin-top: 20px;
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
	background-image: url(../img/icon_community_filled_dark_gray.png);
}

#footer a.search span {
	width: 0.72rem;
	height: 0.64rem;
	background-image: url(../img/icon_follow_filled_normal.png);
}

#footer a.sports span {
	width: 0.72rem;
	height: 0.64rem;
	background-image: url(../img/icon_sports_filled_focus.png);
}

#footer a.plan span {
	width: 0.72rem;
	height: 0.64rem;
	background-image: url(../img/icon_suit_tab_filled_gray.png);
}

#footer a.my span {
	width: 0.72rem;
	height: 0.64rem;
	background-image: url(../img/icon_user_filled_normal.png);
}


/*底部结束*/
</style>
