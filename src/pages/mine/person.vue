<template>
	<div class="hello">
		<!--头部开始-->
		<div id="header">
		<span class="left" @click="send2"><img src="../../assets/wo-img/Snipaste_2019-07-04_18-39-18.png"></span></a>
			<span  class="right"><img src="../../assets/wo-img/Snipaste_2019-07-04_18-40-23.png"></span>
		</div>

		<!--内容区域开始-->
		<div id="wrapper">
			<div class="top">
				<img src="../../assets/wo-img/icon_entry_camera.png">
			</div>
			<div class="active">
				<p>
					<i class="tu1"><img src="../../assets/wo-img/travel-show_02.jpg"></i>
					<span class="zi">修改资料</span>
					<strong class="tu2"><img src="../../assets/wo-img/su_icon_personal_qr_code_purple.png"></strong>
				</p>
				<p>
					<em>知识渊博的图样图森破</em><br>
					<span>女&nbsp;|&nbsp;广东省，深圳市&nbsp;|&nbsp;2019.07.01加入</span>
				</p>
				<p>
					<span>0<br><em>关注</em></span>
					<span>0<br><em>粉丝</em></span>
					<span>0<br><em>获赞</em></span>
				</p>
			</div>
			
			<div class="bottom">
				<p><img src="../../assets/wo-img/su_klog_list_empty.png"></p>
				<p>还没有发过动态哦</p>
				<p>发动态</p>
			</div>
      </div>

</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			send2(){
				console.log(11112)
				this.$router.push("/mine")
			},
		}
	}
</script>


<style scoped lang="less">
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
	background: rgb(96, 87, 104);
	 opacity: 0.3;
	line-height: 50px;
	z-index: 99;
    float: left;
    padding-top: 10px;
   
}
#header img{
	width: 30px;
	height: 30px;
}
#header .left{
	margin-left: -280px;
}
#header .right{
	float: right;
	margin-right: 15px;	
}


/*内容开始*/
#wrapper{
	width: 100%;
	height: 800px;
	background:white;
	position: relative;	
}
.top{
	position: relative;
	border: 1px solid #000;
	width: 100%;
	height: 180px;
	background: rgb(96, 87, 104);
	opacity: 0.8;
}
.top img{
	position: absolute;
	width: 25px;
	height: 25px;
	top:145px;
	left: 330px;
	z-index: 1000;
}


.active{
	width: 100%;
	height: 250px;
	background:white;
	position: relative;
}
.tu1 img{
	position: absolute;
	top:-35px;
	left: 15px;
	border: 5px solid white;
	width: 85px;
	height: 85px;
	border-radius: 50%;
}
.tu2 img{
	border: 1px solid darkgray;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	float: right;
	margin-top: 10px;
	margin-right: 18px;
	padding: 5px;
}
.zi{
	position: absolute;
	left: 240px;
	top:10px;
	font-size: 15px;
	border: 1px solid #000;
	width: 80px;
	height: 25px;
	line-height: 15px;
	text-align: center;
	border-radius: 50px;
	padding-top: 5px;
	
}
.active p:nth-child(2){
	position: absolute;
	top:80px;
	left: 5px;
	font-size: 20px;
	color: black;
	padding-left: 5px;
	line-height: 35px;
}
.active p:nth-child(2) em{
	position: absolute;
	left: 5px;
}
.active p:nth-child(2) span{
	font-size: 15px;
	color: darkgray;
	
}
.active p:nth-child(3){
	position: absolute;
	top:170px;
	font-size: 20px;
	color: black;
	margin-left: -80px;
}
.active p:nth-child(3) span{
	float: left;
	padding-left: 110px;
	text-align: center;
}
.active p:nth-child(3) em{
	color: darkgray;
	font-size: 13px;
}

</style>