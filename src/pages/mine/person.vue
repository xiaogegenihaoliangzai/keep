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
				<p >
					<i class="tu1"><img src="../../assets/wo-img/travel-show_02.jpg"></i>
					<span class="zi">修改资料</span>
					<strong class="tu2" @click="change()"><img src="../../assets/wo-img/su_icon_personal_qr_code_purple.png"></strong>
					
				</p>
				
				<p>
					<em>可爱大方的</em><br>
					<span>女&nbsp;|&nbsp;广东省，深圳市&nbsp;|&nbsp;2019.07.01加入</span>
				</p>
				<p>
					<span>5<br><em>关注</em></span>
					<span>2<br><em>粉丝</em></span>
					<span>2<br><em>获赞</em></span>
				</p>
			</div>
			
			<div class="bottom">
				<p><img src="../../assets/wo-img/su_klog_list_empty.png"></p>
				<p>还没有发过动态哦</p>
				<p>发动态</p>
			</div>
			
			<div class="nice" v-show="show" @click="tiao()">
				<span>扫一扫，有惊喜</span>
				<img src="../../assets/wo-img/1566753486.png" /> 
			</div>
      </div>

</div>
</template>

<script>
	export default {
		data() {
			return {
				show:false
			}
		},
		methods: {
			send2(){
				console.log(11112)
				this.$router.push("/mine")
			},
			change(){
				this.show=!this.show
			},
			tiao(){
				  window.open('http://localhost:8080/#/biye','_blank')
			},
		}
	}
</script>


<style scoped lang="less">
.nice{
	border: 1px solid black;
	width: 145px;
	height: 145px;
	position: fixed;
	top: 45%;
	left: 70%;
	transform: translate(-50%,-50%);
	background: white;
}
.nice img{
	width: 100px;
	margin-top: 15px;
}
.nice span{
	font-size: 15px;
	color:gray;
	margin-left: -25px;
}


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
#header{
	position: fixed;
	width: 100%;
	height: 50/50rem;
	background: rgb(96, 87, 104);
	opacity: 0.3;
	line-height: 50/50rem;
	z-index: 99;
    float: left;
    padding-top: 10/50rem; 
}
#header .left img{
	width: 37/50rem;
	height: 25/50rem;
	margin-left: -280/50rem;
}
#header .right img{
	width: 30/50rem;
	height: 30/50rem;
	float: right;
	margin-right: 15/50rem;	
	margin-top: 3/50rem;
}

/*内容开始*/
#wrapper{
	width: 100%;
	height: 800/50rem;
	background:white;
	position: relative;	
}
.top{
	position: relative;
	border: 1/50rem solid #000;
	width: 100%;
	height: 160/50rem;
	background: rgb(96, 87, 104);
	opacity: 0.8;
}
.top img{
	position: absolute;
	width: 22/50rem;
	height: 22/50rem;
	top:125/50rem;
	left: 330/50rem;
	z-index: 1000;
}

.active{
	width: 100%;
	height: 200/50rem;
	background:white;
	position: relative;	
}
.tu1 img{
	position: absolute;
	top:-35/50rem;
	left: 15/50rem;
	border: 5/50rem solid white;
	width: 80/50rem;
	height: 80/50rem;
	border-radius: 50%;
}
.tu2 img{
	border: 1/50rem solid darkgray;
	width: 27/50rem;
	height: 27/50rem;
	border-radius: 50%;
	float: right;
	margin-top: 10/50rem;
	margin-right: 18/50rem;
	padding: 5/50rem;
}
.zi{
	position: absolute;
	left: 248/50rem;
	top:10/50rem;
	font-size: 13/50rem;
	border: 1/50rem solid gainsboro;
	width: 75/50rem;
	height: 27/50rem;
	line-height: 15/50rem;
	text-align: center;
	border-radius: 50/50rem;
	padding-top: 5/50rem;
	
	
}
.active p:nth-child(2){
	position: absolute;
	top:60/50rem;
	left: 5/50rem;
	font-size: 18/50rem;
	color: black;
	padding-left: 5/50rem;
	line-height: 30/50rem;
	
}
.active p:nth-child(2) em{
	position: absolute;
	left: 5/50rem;
}
.active p:nth-child(2) span{
	font-size: 10/50rem;
	color: darkgray;
	
}
.active p:nth-child(3){
	position: absolute;
	top:140/50rem;
	color: black;
	margin-left: -80/50rem;
	
}
.active p:nth-child(3) span{
	float: left;
	padding-left: 110/50rem;
	text-align: center;
	font-size: 16/50rem;
}
.active p:nth-child(3) em{
	color: darkgray;
	font-size: 10/50rem;
}
.bottom{
	border-top: 1/50rem solid gainsboro;
	width: 100%;
	height: 500/50rem;

}
.bottom img{
	margin-top: 20/50rem;
	width: 250/50rem;
	height: 200/50rem;
}
.bottom p{
	font-size: 12/50rem;
}
</style>