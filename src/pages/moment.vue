<template>
<!--练动作内容开始-->
                		<div id="wrap">
                			<div id="scrol">


                				<div class="var4">
                					<ul>
                						<li>
                							<a href="#"><img src="../assets/sports/1.png" alt="" /></a>
                						</li>
                						<li>
                							<a href="#"><img src="../assets/sports/2.png" alt="" /></a>
                						</li>
                					</ul>
                					<ul>
                						<li>
                							<a href="#"><img src="../assets/sports/3.png" alt="" /></a>
                						</li>
                						<li>
                							<a href="#"><img src="../assets/sports/4.png" alt="" /></a>
                						</li>
                					</ul>
                					<ul>
                						<li>
                							<a href="#"><img src="../assets/sports/5.png" alt="" /></a>
                						</li>
                						<li>
                							<a href="#"><img src="../assets/sports/6.png" alt="" /></a>
                						</li>
                					</ul>
                					<ul>
                						<li>
                							<a href="#"><img src="../assets/sports/7.png" alt="" /></a>
                						</li>
                						<li>
                							<a href="#"><img src="../assets/sports/8.png" alt="" /></a>
                						</li>
                					</ul>
                					<ul>
                						<li>
                							<a href="#"><img src="../assets/sports/9.png" alt="" /></a>
                						</li>
                						<li>
                							<a href="#"><img src="../assets/sports/10.png" alt="" /></a>
                						</li>
                					</ul>
                					<ul>
                						<li>
                							<a href="#"><img src="../assets/sports/11.png" alt="" /></a>
                						</li>
                						<li>
                							<a href="#"><img src="../assets/sports/12.png" alt="" /></a>
                						</li>
                					</ul>
                					<ul>
                						<li>
                							<a href="#"><img src="../assets/sports/13.png" alt="" /></a>
                						</li>
                						<li>
                							<a href="#"><img src="../assets/sports/14.png" alt="" /></a>
                						</li>
                					</ul>

                				</div>
                				<div class="dibu">-没有更多内容-</div>

                			</div>
                		</div>
</template>

<script>
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


/*练动作头部开始*/

.header {
	width: 100%;
	height: 0.83666rem;
	padding-top: 15px;
}

.header li {
	float: left;
}

.yundong {
	font-size: 18px;
	margin-right: 6.2rem;
	margin-left: 0.7rem;
}

.header img {
	width: 0.6rem;
	height: 0.6rem;
	padding-right: 15px;
}

.daohang {
	width: 100%;
	height: 1.03666rem;
	border-bottom: 5px solid whitesmoke;
	display: flex;
}

.daohang a {
	flex: 1;
	text-align: center;
	box-sizing: border-box;
	display: block;
	color: darkgray;
	font-size: 13px;
	padding-top: 10px;
}

.daohang .dz {
	color: black;
}

.daohang p {
	font-size: 0.35667rem;
}


/*练动作头部结束*/


/**************************************************/


/*练动作内容开始*/

#wrapper {
	width: 100%;
	position: absolute;
	left: 0;
	right: 0;
	top: 2.37333333rem;
	bottom: 1.58666667rem;
	z-index: 1;
	overflow: auto;
	margin: 0 auto;
	background-color: whitesmoke;
}

#wrapper #scroller {
	z-index: 1;
	padding: 0;
	position: absolute;
}

.var3 {
	width: 99%;
	height: 3.6rem;
	border: 1px solid white;
	background-color: white;
	font-size: 0.33333rem;
	padding-top: 0.333rem;
}

.var3 .ku {
	color: black;
	padding-left: 0.5rem;
	font-size: 13px;
}

.var3 .tu2 {
	width: 0.7rem;
	height: 0.1rem;
	float: right;
	padding-right: 0.3rem;
	position: relative;
	top: -0.1rem;
}

.var3 ul {
	width: 100%;
	height: 2rem;
	border: 1px solid white;
	margin-top: 0.7rem;
}

.var3 li {
	float: left;
	padding-left: 0.5833rem;
}

.var3 .dongzhuo {
	width: 1.3rem;
	height: 1.3rem;
}

.var3 p {
	padding-left: 0.3rem;
}

.var4 img {
	width: 4.6rem;
	height: 4.6rem;
}

.var4 li {
	float: left;
	padding-top: 0.2rem;
	padding-left: 0.2733rem;
}

.dibu {
	text-align: center;
	color: lightgray;
	margin-bottom: 0.6rem;
	position: relative;
	top: 0.5rem;
}



</style>
