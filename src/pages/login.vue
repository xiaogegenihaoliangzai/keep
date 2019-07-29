<template>
	<div>
		<div id="box">
			<video src="video/intro.mp4" autoplay="autoplay" height="100%" width="100%" loop="loop" ></video>
			<div class="bgvideo"></div>
			<p class="passlogin">密码登录</p>
			<form action="" class="loginform">
				<p><h4>手机号登录</h4></p>
				<p><h5>快速找到好友，一站式记录你的运动</h5></p>
				<p class="phone"><span>+86</span><input type="text" placeholder="请输入手机号码"/></p>
				<p><span class="yzm">获取验证码</span></p>
				<p class="check">未注册手机验证后自动登录</p>
			</form>
			<div class="footbar">
				<p>其他登录方式</p>
				<div class="otherlogin">
					<span><a href="keep-community-index.html"><i class="fa fa-weixin"></i></a></span>
					<span><i class="fa fa-qq"></i></span>
					<span><i class="fa fa-weibo"></i></span>
					<span><i>...</i></span>
				</div>
				<h6>登录即代表同意Keep<span>用户协议</span>和<span>隐私政策</span></h6>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style sc>
	* {
	  margin: 0;
	  padding: 0;
	}
	#box {
	  position: fixed;
	  font-size: 0.42666667rem;
	}
	img,
	object {
	  max-width: 100%;
	}
	a{
		text-decoration: none;
		color: white;
	}
	.bgvideo {
	  position: absolute;
	  top: 0;
	  height: 100%;
	  width: 100%;
	  background-color: rgba(0, 0, 0, 0.4);
	}
	.passlogin {
	  position: absolute;
	  right: 0.53333333rem;
	  top: 0.53333333rem;
	  color: white;
	  font-size: 0.21333333rem;
	}
	.loginform {
	  position: absolute;
	  right: 1.6rem;
	  top: 2.66666667rem;
	  color: white;
	}
	.loginform p {
	  margin: 10px 0;
	}
	.loginform h4 {
	  font-size: 0.53333333rem;
	  letter-spacing: 3px;
	  font-weight: 550;
	}
	.loginform h5 {
	  font-size: 0.4rem;
	  font-weight: 300;
	}
	.loginform .phone {
	  position: relative;
	}
	.loginform .phone span {
	  position: absolute;
	  color: lightgray;
	  top: 5px;
	  font-weight: 500;
	}
	.loginform .phone input {
	  text-indent: 3em;
	  width: 6.66666667rem;
	  height: 0.93333333rem;
	  border: none;
	  border-radius: 10px;
	  outline: none;
	  background-color: rgba(255, 255, 255, 0.35);
	  color: #ffffff;
	}
	.loginform .yzm {
	  display: block;
	  width: 6.66666667rem;
	  height: 0.93333333rem;
	  border-radius: 10px;
	  background-color: green;
	  text-align: center;
	  line-height: 0.93333333rem;
	}
	.loginform .check {
	  margin-top: 1.2rem;
	  font-size: 0.06666667rem;
	  text-align: center;
	  color: #a9a9a9;
	}
	.footbar {
	  position: absolute;
	  bottom: 2.4rem;
	  width: 100%;
	  text-align: center;
	  color: white;
	}
	.footbar p {
	  font-size: 0.42666667rem;
	}
	.footbar .otherlogin {
	  display: flex;
	  margin-left: 0.98666667rem;
	}
	.footbar .otherlogin span {
	  display: block;
	  width: 35px;
	  height: 35px;
	  background-color: rgba(0, 0, 0, 0.4);
	  border-radius: 50%;
	  margin: 0.53333333rem 0.53333333rem;
	}
	.footbar .otherlogin span i {
	  text-align: center;
	  line-height: 35px;
	}
	.footbar h6 {
	  text-align: center;
	  font-size: 10px;
	  font-weight: 400;
	  letter-spacing: 3px;
	  color: lightgray;
	}
	.footbar h6 span {
	  text-decoration: underline;
	}
	
</style>
