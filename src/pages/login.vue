<template>
	<div>
		<div id="box">
			<video src="../video/intro.mp4" autoplay="autoplay" height="100%" width="100%" loop="loop" ></video>
			<div class="bgvideo"></div>
			<p class="passlogin">密码登录</p>
			<div class="content">
				<form action="" class="loginform">
					<p><h4>手机号登录</h4></p>
					<p><h5>快速找到好友，一站式记录你的运动</h5></p>
					<p class="phone"><span>+86</span><input type="text" placeholder="请输入手机号码"/></p>
					<p class="yzm">获取验证码</p>
					<p class="check">未注册手机验证后自动登录</p>
				</form>
			</div>
			<div class="footbar">
				<p>其他登录方式</p>
				<div class="otherlogin">
					<span><a href="community.html"><i class="fa fa-weixin"></i></a></span>
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
import 'font-awesome/css/font-awesome.css'
export default{
	
}
</script>

<style lang="less" scoped="scoped">
	* {
	  margin: 0;
	  padding: 0;
	}
	#box{
		position: relative;
		color: white
	} 
	.passlogin{
		position: fixed;
		right: 20/50rem;
		top: 20/50rem
	}
	.bgvideo{
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4)
	}
	.content{
		width: 80%;
		z-index: 3;
		position: fixed;
		top: 100/50rem;
		left: 50%;
		transform: translateX(-50%);
		color: white;
		.loginform {
			text-align: left;
				h4{
					text-align: left;
					font-size: 20/50rem;
					font-weight: 500;
			}
			h5{
				font-size: 15/50rem;
				font-weight: 400;
				margin: 10/50rem 0
			}
		}
		.phone{
			position: relative;
			background-color: rgba(255, 255, 255, 0.3);
			border-radius: 15px;
			height: 40/50rem;
			line-height: 40/50rem;
			span{
				margin-left: 15/50rem
			}
			input{
				border: none;
				margin-left: 10/50rem;
				color:white;
			}
		}
		.yzm{
			margin-top: 10/50rem;
			width: 100%;
			height: 40/50rem;
			line-height: 40/50rem;
			background-color: seagreen;
			border-radius: 15px;
			text-align: center;
		}
		.check{
			text-align: center;
			font-weight: 200;
			margin-top: 20/50rem;
			font-size: 13/50rem;
			letter-spacing:3px;
			color: lightgray
		}
	}
	.footbar{
		width: 100%;
		position: fixed;
		bottom: 50/50rem;
		left: 50%;
		transform: translateX(-50%);
		font-size: 16/50rem;
		p{
			font-size: 16/50rem
		}
		h6{
			font-size: 14/50rem;
			span{
				text-decoration: underline;
				letter-spacing: 3px
			}

		}
	}
	
</style>
