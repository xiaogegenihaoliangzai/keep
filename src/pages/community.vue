<template>
  <div class="hello">
		<div class="header">
			<div class="header_sec">
				<span></span>
				<input type="text" placeholder="大家都在搜跑步不粗腿">
				<span></span>
				<!--<img src="img/icon_user_add_filled_dark.png">-->
			</div>
		</div>
		<div id="wrapper">
			<div id="scroller">
				<nav class="nav">
					<ul>
						<li>热门</li>
						<li>关注</li>
						<li>话题</li>
						<li>日记本</li>
						<li>同城</li>
					</ul>
				</nav>
<				<section class="sec">
					<div class="sec_sec" id="sec_sec_one">
						<div class="box">
							<a href="keep-community-index-detay.html">
								<img src="../assets/images/37.jpg">
								<p>肥仔真的要开sdfsdfsd始减sdfsdfsdfsdsdfssdfsdd fsd 脂肪了</p>
								<ul>
									<li><img src="../assets/images/icon_comment_like.png"></li>
									<li>xiaoming</li>
									<li><img src="../assets/images/icon_comment_like.png"></li>
									<li>684</li>
								</ul>
							</a>
						</div>
					</div>
					<div class="sec_sec" id="sec_sec_two">
						<div class="box">
							<a href="keep-community-index-detay.html">
								<img src="../assets/images/37.jpg">
								<p>乘风好去，长空万里，直下看山河。斫去桂婆娑，人道是、清光更多</p>
								<ul>
									<li><img src="../assets/images/icon_comment_like.png"></li>
									<li >xiaoming</li>
									<li><img src="../assets/images/icon_comment_like.png"></li>
									<li>684</li>
								</ul>
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>


  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>

body,
ul,
li {
  padding: 0;
  margin: 0;
  border: 0;
}
* {
  margin: 0;
  padding: 0;
}
body {
  font-size: 12px;
  -webkit-user-select: none;
  -webkit-text-size-adjust: none;
  font-family: helvetica;
}
#wrapper {
  position: absolute;
  z-index: 1;
  top: 1.2rem;
  bottom: 1.28rem;
  left: 0;
  width: 100%;
  background: #aaa;
  overflow: auto;
}
#scroller {
  position: absolute;
  z-index: 1;
  /*  -webkit-touch-callout:none;*/
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding: 0;
}
#wrapper {
  margin: 0rem auto;
  top: 1rem!important;
  left: 0 !important;
  background: white;
}
.sizing {
  box-sizing: border-box;
}
/*头部开始*/
.header {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.0rem;
  line-height: 1.0rem;
  padding: 0;
  text-align: center;
}
.header .header_sec {
  position: relative;
}
.header .header_sec input {
  margin-left: -0.9rem;
  width: 85%;
  height: 0.6rem;
  text-indent: 0.8rem;
  color: red;
  font-size: 0.3rem;
  border-radius: 0.08rem;
  background: ghostwhite;
}
.header .header_sec input::-webkit-input-placeholder {
  color: gray;
}
.header .header_sec span:first-of-type {
  background: url(../assets/images/icon_search_lined_dark.png) no-repeat;
  background-size: contain;
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -0.7rem;
}
.header .header_sec span:last-of-type {
  background: url(../assets/images/icon_user_add_filled_dark.png) no-repeat;
  background-size: contain;
  width: 0.6rem;
  height: 0.6rem;
  position: absolute;
  margin-top: 0.17rem;
  margin-left: 0.25rem;
}
/*头部结束*/
/*导航开始*/
.nav {
  height: 0.6rem;
  line-height: 0.6rem;
}
.nav li {
  list-style: none;
}
.nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/*导航结束*/
/*内容开始*/
.sec {
  background: gainsboro;
  text-align: center;
  display: flex;
  overflow: hidden;
}
.sec .sec_sec {
  padding: 0rem 0.1rem;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
  background: #FFFFFF;
  border-radius: 0.1rem;
  width: 4.65rem;
}
.sec .sec_sec .box {
  margin-top: 0.1rem;
  border-radius: 0.2rem;
  background: #F1F1F1;
}
.sec .sec_sec .box img {
  width: 4.8rem;
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
  font-size: 0.35rem;
  padding: 0 0.15rem;
  color: black;
  text-align: left;
  margin-bottom: 0.13333333rem;
}
.sec .sec_sec .box ul {
  overflow: hidden;
}
.sec .sec_sec .box ul li {
  float: left;
}
.sec .sec_sec .box ul li:nth-of-type(1) {
  margin-right: 0.2rem;
}
.sec .sec_sec .box ul li:nth-of-type(2) {
  margin-right: 0.8rem;
}
.sec .sec_sec .box ul li:nth-of-type(3) {
  margin-right: 0.2rem;
}
.sec .sec_sec .box ul img {
  width: 0.5rem;
}
</style>
