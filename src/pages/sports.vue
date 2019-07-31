<template>
  <div id="app">
    <div class="header">
      <theheader title="运动">
        <img src="../assets/sports/su_icon_search.png" alt="" slot="rightImg" class="right" />
        <img src="../assets/sports/tc_icon_kstar.png" alt="" slot="leftImg" class="left" />
      </theheader>

    </div>

    <div class="daohang">
       <Tabbar>
            <div slot="list1">
              <yd-tab-panel name="" label="跑步">

             </yd-tab-panel>
            </div>
       </Tabbar>

    </div>
    <!--跑步头部结束-->
    <!--******************************************************************************************************************-->
    <!--跑步内容开始-->
     <div id="wrapper">
      	<div id="scroller">
      		<div class="box1">
      			<div class="tu3"><img src="../assets/sports/微信图片_20190702153250.png" alt="" /></div>
      			<ul>

      				<li>
      					<a href="#" class="ren">燃脂跑</a>
      				</li>
      				<li>|</li>
      				<li>
      					<a href="#">户外跑</a>
      				</li>
      				<li>|</li>
      				<li>
      					<a href="#">跑步机</a>
      				</li>
      			</ul>
      		</div>
      		<div class="var">
      			<div class="canjia">我的跑步课程</div>
      			<div class="tianjia">添加课程后，可以在这里快速开始课程</div>
      			<div class="faxiang">
      				<a href="#">添加跑步课程</a>
      			</div>
      		</div>
      		<div class="var3">
      			<span class="ku">燃脂跑课程精选</span>
      			<span class="tu2"><img src="../assets/sports/icon_more.png" alt="" /></span>
      			<ul>
      				<li><img class="gl3" src="../assets/sports/微信图片_201907021532503.jpg" alt="" /></li>
      				<li><img class="gl5" src="../assets/sports/_201907021532501.jpg" alt="" /></li>
      			</ul>
      		</div>
      		<div class="var5">
      			<span class="ku">为你推荐</span>
      			<ul>
      				<li>
      					<img class="gl3" src="../assets/sports/微信图片_201907021532505.jpg" alt="" />
      					<p class="shang">如何能够坚持跑步?</p>
      					<p class="xiang">7月先定一个小目标</p>
      				</li>
      				<!-- <li>
      					<img class="gl5" src="../assets/sports/201907021532504.jpg" alt="" />
      					<p class="shang">让暑假不无聊</p>
      					<p class="xiang">游戏刷刷的过</p>
      				</li> -->
      			</ul>
      		</div>

      		<div class="var6">
      			<span class="ku">跑道辅助训练</span>
      			<div><img src="../assets/sports/微信图片_201907021532506.jpg" alt="" /></div>
      		</div>

      		<div class="var7">
      			<span class="ku">周好友跑步排名</span>
      			<div>
      				<ul>
      					<li class="gang"><span>-</span>
      					<img src="../assets/sports/1.jpg" alt="" /> <span class="ling">骑黑马的爱跳水的Ting</span>8.22<span class="ling">公里</span></li>
      				</ul>
      			</div>
      			<p class="ck">查看排行榜</p>
      		</div>

      		<div class="var8">
      			<span class="ku">跑步打卡小分队</span>
      			<ul class="xfd1">
      				<li>
      					<img src="../assets/sports/微信图片_20190704185651.png" alt="" />
      				</li>
      				<li>
      					<p>10公里突破</p>
      					<p class="ztys">里程进阶，5周打造超长耐力</p>
      				</li>
      			</ul>
      			<ul class="xfd2">
      				<li>
      					<img src="../assets/sports/微信图片_20190704185646.png" alt="" />
      				</li>
      				<li>
      					<p>半程马拉松集训</p>
      					<p class="ztys">备赛专用8周突破21公里</p>
      				</li>
      			</ul>
      			<ul class="xfd3">
      				<li>
      					<img src="../assets/sports/微信图片_20190704185625.png" alt="" />
      				</li>
      				<li>
      					<p>全程马拉松集训</p>
      					<p class="ztys">备赛专用8周突破42公里</p>
      				</li>
      			</ul>
      		</div>

      		<div class="var9">
      			<span class="ku">进阶跑步课程</span>
      			<ul class="xfd1">
      				<li>
      					<img src="../assets/sports/微信图片_20190702153730.png" alt="" />
      				</li>
      				<li>
      					<p>跑步秘籍.更快、更远、更安全</p>
      					<p class="ztys">完美训练方案--提速、提距、不伤膝盖</p>
      				</li>
      			</ul>
      			<ul class="xfd2">
      				<li>
      					<img src="../assets/sports/微信图片_20190702153729.png" alt="" />
      				</li>
      				<li>
      					<p>爱上跑步，享受跑步</p>
      					<p class="ztys">跑步大神吴栋带你跑！</p>
      				</li>
      			</ul>
      			<ul class="xfd3">
      				<li>
      					<img src="../assets/sports/微信图片_201907021537281.png" alt="" />
      				</li>
      				<li>
      					<p>跑步秘籍.怎样跑步不粗腿</p>
      					<p class="ztys">姿势对，你也能跑出细腿翘臀！</p>
      				</li>
      			</ul>
      			<ul class="xfd4">
      				<li>
      					<img src="../assets/sports/微信图片_20190702153728.png" alt="" />
      				</li>
      				<li>
      					<p>POSE TV跑步速度提升训练</p>
      					<p class="ztys">奥运教练科学指导，跑速提升！</p>
      				</li>
      			</ul>
      		</div>

      		<div class="dibu">-没有更多内容-</div>

      	</div>
      </div>


  </div>
</template>

<script>
  import Tabbar from '../components/Tabbar.vue'
	import theheader from '../components/header.vue'
	export default {
		components: {
      Tabbar,
			theheader,
		}
	}
</script>

<style scoped lang="less">

  body {
  	font-size: 12px;
  	font-family: helvetica;
    width: 100% !important;
  }

  .sizing {
  	box-sizing: border-box;
  }


  /*跑步头部开始*/

  .header {
  	width: 100% ;
  	height: 0.63666/50rem ;
  	padding-top: 15px;

  }

yd-tab-panel{
  height: auto;
}

  .yundong {
  	font-size: 20px;
    font-weight: bold;
  	margin-right: 6.2/50rem;
  	margin-left: 0.7/50rem;
  }
.daohang{
  width: 100%;
  float: left;
  overflow: hidden
}

  /**************************************************/


  /*跑步内容开始*/

  #wrapper {
  	position: absolute;
  	left: 0;
  	right: 0;
  	top: 2.37333333rem;
  	bottom: 1.58666667rem;
  	z-index: 1;
  	overflow: auto;
  	margin: 0 auto;
  	background-color: whitesmoke;
  	width: 100%;
  }

  #wrapper #scroller {
  	z-index: 1;
  	padding: 0;
  	position: absolute;
  }

  .box1 {
  	width: 99%;
  	height: 4.6rem;
  	background: white;
  	padding-top: 0.1rem;
  }

.tu3{
  width: 100%;
}
  .box1 .tu3 img {
  	width: 100%;
  	height: 3rem;

  	margin: 0 auto;
  }

  .box1 li {
  	float: left;
  	position: relative;
  	top: 0.8rem;
  	left: 2/50rem;
  	margin-left: 0.35rem;
  	margin-right: 0.35rem;
  	font-size: 0.37533rem;
  	color: lightslategray;
  }

  .box1 li .ren {
  	color: mediumseagreen;
  }

  .var {
  	width: 98%;
  	height: 4.6rem;
  	border: 1px solid white;
  	background-color: white;
  	font-size: 0.33333rem;
  	margin-top: 0.1333rem;
  }

  .canjia {
  	color: black;
  	margin-top: 0.5rem;
  	margin-left: 0.2rem;
    text-align: left;
  }

  .tianjia {
  	color: #777;
  	margin-top: 0.8rem;
  	text-align: center;
  }

  .faxiang {
  	width: 65%;

  	line-height: 0.8rem;
  	border-radius: 20px;
  	background-color: mediumseagreen;
  	text-align: center;
  	margin: 0 auto;
  	margin-top: 0.7rem;
  	font-size: 0.43333rem;
  }

  .faxiang a {
  	color: white;
  }

  .var3 {
  	width: 98%;
  	height: 4.1rem;
  	border: 1px solid white;
  	background-color: white;
  	font-size: 0.33333rem;
  	padding-top: 0.333rem;
  	margin-top: 0.2rem;
    overflow: hidden;
  }

  .var3>span:nth-of-type(2) img{
    float: right;
    display: block;
    width: .6rem;
    height: .6rem;
  }
   .var3 li{
    float: left;

  }

  .var3 .ku {
  	color: black;
  	padding-left: 0.5rem;
  	font-size: 13px;
    float: left;
  }

  .var3 .tu2 {
  	width: 0.7rem;
  	height: 0.1rem;
  	float: right;
  	padding-right: 0.3rem;
  	position: relative;
  	top: -0.2rem;
  }

  .var3 li {
  overflow: hidden;
  }

  .var3 .gl3 {
    	float: left;
  	height: 3rem;
  	margin-top: 0.3rem;
  	margin-left: 0.3rem;
  }

  .var3 .gl5 {

  	height: 3rem;
  	margin-top: 0.3rem;
  	margin-left: 0.1rem;
  }

  .var5 {
  	width:98%;
  	height: 5rem;
  	border: 1px solid white;
  	background-color: white;
  	font-size: 0.33333rem;
  	padding-top: 0.333rem;
  	margin-top: 0.2rem;
    overflow: hidden;
  }


  .var5 .ku {
    float: left;
  	color: black;
  	padding-left: 0.5rem;
  	font-size: 13px;
  }

  .var5 .tu2 {
  	width: 70%;
  	height: 0.1rem;
  	float: right;
  	padding-right: 0.3rem;
  	position: relative;
  	top: -0.2rem;
  }
.var5 ul{
  width: 100%;

}
 .var5 li  {
    width: 90%;
  	float: left;
  }
  .var5 li img {
    width: 90%;
  	float: left;
  }

  .var5 .gl3 {

  	height: 3rem;
  	margin-top: 0.3rem;
  	margin-left: 0.5rem;
  }

  .var5 .gl5 {

  	height: 3rem;
  	margin-top: 0.3rem;
  	margin-left: 0.2rem;
  }

  .var5 .shang {
  	color: black;
  	font-size: 0.36333rem;
  }

  .var5 .xiang {
  	color: lightgray;
  	font-size: 0.03333rem;
  }

  .var5 p {
  	text-align: center;
  }

  .var6 {
  	width: 98%;
  	height: 9rem;
  	border: 1px solid white;
  	background-color: white;
  	font-size: 0.33333rem;
  	padding-top: 0.333rem;
  	margin-top: 0.2rem;
    overflow: hidden;
  }

  .var6 .ku {
  	color: black;
  	padding-left: 0.5rem;
  	font-size: 13px;
    float: left;
  }

  .var6 img {
  	width: 91%;
  	margin-top: 0.3rem;
  	margin-left: 0.4rem;
  }

  .var7 {
  	width: 99%;
  	height: 4rem;
  	border: 1px solid white;
  	background-color: white;
  	font-size: 0.33333rem;
  	padding-top: 0.333rem;
  	margin-top: 0.2rem;
    overflow: hidden;
  }

  .var7 .ku {
    float: left;
  	color: black;

  	padding-left: 0.5rem;
  	font-size: 13px;
  }

  .var7 ul {
  	width: 98%;
  	height: 1.6rem;
  	border: 1px solid lightgray;
  	border-left: none;
  	border-right: none;
  	margin-top: .7rem;
  }

  .var7 li {
  	float: left;
  	margin-top: 0.45333rem;
    padding-left: .1rem;
  	margin-right: 0.3rem;
  }

  .var7 .gang {
  	color: mediumseagreen;
  }


  /*.var7 .tu4{
  	width: 0.86666rem;
  	height: 0.866666rem;
  	border: 2px solid mediumseagreen;
  	border-radius: 50px;
  }*/

.var7 span{
  display: inline-block;

  margin-right: .2rem;
}
  .var7 img {
    margin-right: .2rem;
  	width: 0.86666rem;
  	height: 0.86666rem;
  	border: 2px solid mediumseagreen;
  	border-radius: 50px;
  	position: relative;
  	top: -0.2rem;
  }

  .var7 .ling {
  	color: black;
  	margin-right: 0.23333rem;
  }

  .var7 .ck {
  	margin-top: 0.5rem;
  	text-align: center;
  }

  .var8 {
  	width: 99%;
  	height: 11rem;
  	border: 1px solid white;
  	background-color: white;
  	font-size: 0.33333rem;
  	padding-top: 0.333rem;
  	margin-top: 0.2rem;
    overflow: hidden;
  }

  .var8 .ku {
    float: left;
  	color: black;
  	padding-left: 0.5rem;
  	font-size: 13px;
  }

  .var8 ul {
  	width: 99%;
  	height: 3.5333rem;
  	border-bottom: 1px solid lightgray;
    overflow: hidden;
  }



  .var8 ul li {
  	float: left;
  	margin-top: 0.5rem;
  	margin-left: 0.4rem;
  }
  .var8 ul li:nth-of-type(2) {
  width:3rem;
  }

  .var8 img {
  	width: 2.5rem;
  	height: 2.5rem;
  }

  .var8 p {
  	margin-bottom: 0.2rem;
  	position: relative;
  	top: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .var8 .ztys {
  	color: gray;
  }

  .var9 {
  	width: 99%;
  	height: 14.5rem;
  	border: 1px solid white;
  	background-color: white;
  	font-size: 0.33333rem;
  	padding-top: 0.333rem;
  	margin-top: 0.2rem;
  	margin-bottom: 0.5rem;
    overflow: hidden;
  }

  .var9 .ku {
    float: left;
  	color: black;
  	padding-left: 0.5rem;
  	font-size: 13px;
  }

  .var9 ul {
  	width: 100%;
  	height: 3.5333rem;
  	border-bottom: 1px solid lightgray;
    overflow: hidden;
  }



  .var9 li {
  	float: left;
  	margin-top: 0.5rem;
  	margin-left: 0.4rem;
  }
 .var9 ul li:nth-of-type(2) {
  width:3rem;
 }
  .var9 img {
  	width: 2.5rem;
  	height: 2.5rem;
  }

  .var9 p {
  	margin-bottom: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  	top: 0.6rem;
  }

  .var9 .ztys {
  	color: gray;
  }

  .dibu {
  	text-align: center;
  	color: lightgray;
  	margin-bottom: 0.5rem;
  }



</style>
