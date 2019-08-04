<template>
	<div class="comban">
		<div class="fonimg">
			<router-link to="searchall">
	    		<img src="../../assets/scarch/icon_arrow_left_lined.png" alt="" />
			</router-link>
	  	</div>
		<headersList class="inproimg">
		  	<img src="../../assets/scarch/icon_share_android_filled.png" class="right" slot="rightImg" alt="" />
		</headersList>
		<div class="fing">
			<div class="imgBanner">
				<div class="bomlist">
					<h2>腹肌撕裂者进阶</h2>
					<em>虐腹就是他了</em>
				</div>
			</div>
		</div>
		<div class="bgc">
		<div class="count_change_prev">
			<ul>
				<li>
					<p>燃脂</p>
					<p><strong>6</strong>千卡</p>
					<i></i>
				</li>
				<li>
					<p>时长</p>
					<p><strong>2</strong>分钟</p>
					<i></i>
				</li>
				<li>
					<p>燃脂<em></em></p>
					<p><strong>K1</strong>零基础</p>
				</li>
			</ul>
		</div>

		<div class="asideContent bgc">
			<section class="asdio">
				<h6>课程介绍</h6>
				<p>欢迎你来到Keep！这里有丰富的训练课程祝你实现不同的目标。下面先来尝试这节 「2分钟体验课程」，放松肩颈的同时，感受Kepp课程究竟是怎样的。...</p>
				<a href="">查看更多</a>
			</section>
		</div>
		

		<section class="proms">
			<ul>
				<li>
					<p>器械<strong>无器械</strong></p>
				</li>
				<li>
					<p>
						<span>智能设备</span>
						未连接<img src="../../assets/scarch/kt_kibra_setting_right_arrow.png" alt="" />
						<span class="child">
							<img src="../../assets/scarch/illustration_band.png" alt="" />
							<span class="slide_fonti">推荐使用Keep手环，实时监测心率情况</span>
						</span>
					</p>
				</li>
				<li>
					<p><strong>16</strong>人在训练</p>
					<span class="slide_fonti">855648次已完成</span>
					<div class="findIcon">
						<img src="../../assets/scarch/live_like_emoji_2.png" alt="" />
						<img src="../../assets/scarch/live_like_emoji_2.png" alt="" />
						<img src="../../assets/scarch/live_like_emoji_2.png" alt="" />
						<img src="../../assets/scarch/live_like_emoji_2.png" alt="" />
						<img src="../../assets/scarch/live_like_emoji_2.png" alt="" />
						<img src="../../assets/scarch/live_like_emoji_2.png" alt="" />
						<a href="">
							<img src="../../assets/scarch/icon_follow_filled_normal.png" alt="" />
						</a>
					</div>
				</li>
			</ul>
		</section>

		<section class="listChild">
			<ul>
				<li><a href="" class="active_icons">动作列表</a></li>
				<li><a href="">成果列表</a></li>
			</ul>
			<div class="wis_iconList">
				<p>4个动作</p>
				<span>放松-Relax</span>
				<div class="cli_col">
					<img src="../../assets/scarch/img01.png" alt="" />
					<p>四次点头</p>
					<p><strong>8</strong>次</p>
					<div class="bottom_col">
						<p>休息<strong>0 "</strong></p>
					</div>
				</div>
				<div class="cli_col">
					<img src="../../assets/scarch/img02.png" alt="" />
					<p>双向转头</p>
					<p><strong>8</strong>次</p>
					<div class="bottom_col">
						<p>休息<strong>0 "</strong></p>
					</div>
				</div>
				<div class="cli_col">
					<img src="../../assets/scarch/img03.png" alt="" />
					<p>深层颈屈肌动态激活</p>
					<p><strong>5</strong>次</p>
					<div class="bottom_col">
						<p>休息<strong>0 "</strong></p>
					</div>
				</div>
				<div class="cli_col">
					<img src="../../assets/scarch/img04.png" alt="" />
					<p>坐姿胸部拉伸</p>
					<p><strong>20</strong> "</p>
					<div class="bottom_col">
						<p>休息<strong>0 "</strong></p>
					</div>
				</div>
			</div>
			
		</section>

		<section class="footer_headList">
			<p>TA 们刚刚完成训练</p>
			<div class="footerImg">
				<ul>
					<img src="../../assets/scarch/list1.png" alt="" />
					<img src="../../assets/scarch/list02.png" alt="" />
					<img src="../../assets/scarch/list3.png" alt="" />
				</ul>
				<ul>
					<img src="../../assets/scarch/list4.png" alt="" />
					<img src="../../assets/scarch/list5.png" alt="" />
					<img src="../../assets/scarch/list6.png" alt="" />
				</ul>
			</div>
			<a href="">查看更多</a>
		</section>
	<div id="footer">
		<p>参加课程</p>
	</div>
</div>

	</div>
</template>

<script>
import headersList from '../../components/header.vue'
export default {
	components:{
		headersList
	}
}
</script>

<style scoped lang="less">
.fonimg{
	width: 30/50rem;
	float: left;
	position: relative;
	z-index: 999;
	margin: 10/50rem 0 0 15/50rem;
	img{
		width: 100%;
	}
}
.asideContent{
	width: 100%;
}
.right{
	width: 25/50rem!important;
	right: 15/50rem!important;
	top:12/50rem!important;
	position: relative;
	z-index: 999;
}
.fing{
	position: relative;
	height: 250/50rem;
}
.imgBanner{
	width: 100%;
	height: 100%;
	overflow: hidden;
	background:url(../../assets/scarch/1512976984016_750x600.jpg); 
	background-repeat:no-repeat; 
	background-attachment:fixed;
	background-size: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.bomlist{
	position: absolute;
	bottom: 6/50rem;
	color:#fff;
	left: 15/50rem;
	text-align: left;
	h2{
		font-size: 22/50rem;
		font-weight: normal;
	}
	em{
		font-size: 12/50rem;
		color:#F0F0F0;
	}
}
.count_change_prev{
	padding: 20/50rem 0 20/50rem 0;
	ul{
		position: relative;
		width: 90%;
		margin:0 auto;
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
	}
	li{
		flex:1;
		height: 60/50rem;
		position: relative;
		line-height: 30/50rem;
		p{
			font-weight: normal!important;
			font-size: 12/50rem;
			&:nth-of-type(1){
				color:#C4C4C4;
			}
			&:nth-of-type(2){
				letter-spacing: 1/50rem;
			}
			em{
				width: 10/50rem;
				display: block;
				position: absolute;
				right: 23/50rem;
				top: 5/50rem;
				height: 10/50rem;
				background:url(../../assets/scarch/icon_outdoor_info.png);
				background-size: 10/50rem auto;
			}
		}
		i{
			position: absolute;
			display: block;
			right: 0;
			top: 45%;
			width: 1/50rem;
			height: 20/50rem;
			background-color: #F5F5F5;
		}
		strong{
			font-size: 18/50rem;
			color:#574F60;
		}
	}
}
.asdio{
	width: 90%;
	margin: 0 auto;
	padding-top: 15/50rem;
	padding-bottom: 20/50rem;
	margin-top: 10/50rem;
}
.slide_fonti{
	font-size: 12/50rem!important;
}
.asdio h6{
	color:#434343;
	margin-bottom: 15/50rem;
	text-align: left;
	font-weight: normal;
	font-size: 14/50rem;
}
.bgc{
	background-color: #fff;
}
.asdio p{
	color:#8A8A8A;
	line-height: 20/50rem;
	font-size: 12/50rem;
	text-align: left;
}
.asdio a{
	font-size: 14/50rem;
	color:#706876;
	display: block;
	padding-top: 20/50rem;
	text-align: center;
	text-decoration: none;
}
.proms{
	margin-top: 10/50rem;
}
.proms ul{
	width: 100%;
}
.proms li{
	margin:0 auto!important;
	width: 90%;
	border-bottom: 1/50rem solid #E5E5E5;
	height: 60/50rem;
	letter-spacing: 1/50rem;
	line-height: 60/50rem;
	text-align: left;
	p{
		font-size: 12/50rem;
	}
	span{
		font-size: 14/50rem;
	}
}
.proms li:nth-of-type(2) span{
	float: left;
	color:#454545;
}
.proms li:nth-of-type(2) p{
	text-align: right;
	color:#AFABB2;
	line-height: 30/50rem;
}
.proms li:nth-of-type(2){
	height: auto!important;
	overflow: hidden;
	padding:10/50rem 0 10/50rem 0;
}
.proms li:nth-of-type(3){
	line-height: 15/50rem;
	overflow: hidden;
	padding-top: 20/50rem;
}
.proms li:nth-of-type(3) span{
	line-height: 30/50rem;
}
.proms li:nth-of-type(3) strong{
	font-size: 16/50rem;
}
.child img{
	width: 20/50rem;
	height: 20/50rem;
	float: left!important;
}
.child{
	padding-top: 10/50rem;
}
.child span{
	float: right;
}
.proms li img{
	width: 25/50rem;
	height: 25/50rem;
	float: right;
	margin-top: 2/50rem;
}
.findIcon{
	width: 150/50rem;
	height: 35/50rem;
	float: right;
	margin-top: -12/50rem;
	position: relative;
}
.findIcon img{
	position: absolute;
	left: 0;
	top: 0;
}
.findIcon img:nth-of-type(2){
	left: 18/50rem;
}
.findIcon img:nth-of-type(3){
	left: 35/50rem;
}
.findIcon img:nth-of-type(4){
	left: 55/50rem;
}
.findIcon img:nth-of-type(5){
	left: 75/50rem;
}
.findIcon img:nth-of-type(6){
	left: 95/50rem;
}
.findIcon a{
	left: 115/50rem;
	z-index: -1;
	position: absolute;
}

.proms li strong{
	padding-left: 1/50rem;
}
.proms li:nth-of-type(3){
	border:none;
}
.listChild{
	margin-top: 15/50rem;
}
.listChild ul{
	width: 100%;
	height: 50/50rem;
	display: flex;
	border-bottom: 1/50rem solid #ccc;
	text-align: center;
	justify-content: space-around;
	align-items: center;
}
.listChild a{
	color:#aaa;
	position: relative;	
	font-size: 14/50rem;
}
.active_icons:before{
	content: '';
	position: absolute;
	width: 10/50rem;
	height: 10/50rem;
	left:-15/50rem;
	top: 20%;
	border-radius: 50%;
	border: 2/50rem solid #25C587;
}
.wis_iconList{
	width: 92%;
	margin:20/50rem auto!important;
}
.wis_iconList p{
	font-size: 14/50rem;
	font-weight:bold;
	text-align: left;
	padding-bottom: 13/50rem;
}
.wis_iconList span{
	text-align: left;
	display: block;
	font-size: 12/50rem;
}
.cli_col img{
	float: left;
	padding-top: 15/50rem;
	width: 100/50rem;
	height: 60/50rem;
}
.cli_col p{
	font-weight: normal;
	text-indent: 10/50rem;
}
.cli_col p:nth-of-type(1){
	line-height: 40/50rem;
	padding:10/50rem 0 0 15/50rem;
}
.bottom_col p{
	height: 25/50rem;
	padding:0!important;
	line-height: 25/50rem!important;
	text-indent: 30/50rem;
	color:#CECECE;
}
.bottom_col strong{
	padding-left: 5/50rem;
	color:#606060;
	font-size: 12/50rem;
}
.listChild li{
	flex:1;
}
.listChild li:nth-of-type(1) a{
	color:#3B393E;
}
.footer_headList{
	width: 100%;
	margin-top: 15/50rem;
	padding-bottom: 20/50rem;
	padding-top: 30/50rem;
}
.footer_headList p{
	font-size: 14/50rem;
	text-indent: 15/50rem;
}
.footer_headList a{
	font-size: 14/50rem;
	text-align: center;
	display: block;
	color:#CED1D1;
	padding-top: 20/50rem;
}
.footerImg ul{
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}
.footerImg img{
	flex:1;
	max-width: 33%;
	height: 120/50rem;
	margin-bottom: 3/50rem;
}
.footerImg ul:nth-of-type(2){
	height: 80/50rem;
}
.footerImg{
	padding-top: 25/50rem;
}
#footer {
	width: 75%;
	border-radius: 40/50rem;
	color:#fff;
	margin-bottom: 10/50rem;
	height: 50/50rem;
	color:#fff;
	font-size: 16/50rem;
	line-height: 50/50rem;
	background: #00CE6F;
}
</style>
