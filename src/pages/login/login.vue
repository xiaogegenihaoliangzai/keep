<template>
	<div>
		<div id="box">
			<video src="../../video/intro.mp4" autoplay="autoplay" height="100%" width="100%" loop="loop" ></video>
			<div class="bgvideo"></div>
			<p class="passlogin">密码登录</p>
			<div class="content">
				<form action="" class="loginform">
					<p><h4>手机号登录</h4></p>
					<p><h5>快速找到好友，一站式记录你的运动</h5></p>
					<p class="phone"><span>+86</span><input type="text" v-model="loginphone" placeholder="请输入手机号码" 
					@focus="checkphonenum"  @blur="hidedelete"/><i @click.self="deletephone" class="fa fa-close (alias) deletephone" v-show="showdeletephone"></i></p>
					<p class="yzm" @click="community">获取验证码</p>
					<p class="check">未注册手机验证后自动登录</p>
				</form>
			</div>
			<div class="footbar">
				<p>其他登录方式</p>
				<div class="otherlogin">
					<span><i class="fa fa-weixin"></i></span>
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
import eventVue from '../../store/emptyvue.js'
	import { MessageBox } from 'mint-ui';
	import { Toast } from 'mint-ui';
export default{
  data(){
    return {
      loginphone:'',
	  showdeletephone:false,
	  tempyzm:"",
	  appid:1400246462,
	  appkey:"0fdea44966c056df06dec704b93b701f",
	  templateId:401831,
	  smsSign:""
	  
    }
  },
	methods:{
		community(){
     //this.$store.commit('setToken',this.loginphone)
		var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
		 Toast('发送成功');
         localStorage.setItem('phonenum',this.loginphone);
			if(this.loginphone==""){
				MessageBox.alert('请输入手机号').then(action => {
					console.log(123)
				});
			}else if(!myreg.test(this.loginphone)){
				MessageBox.alert('请输入正确的手机号').then(action => {
					console.log(123)
				});
			}else{
				this.$router.push('secondchecknum')
				this.txyzm()
			}
		},
		txyzm(){
			var QcloudSms = require("qcloudsms_js");
			var qcloudsms = QcloudSms(this.appid, this.appkey);
			var ssender = qcloudsms.SmsSingleSender();
			this.tempyzm=Math.floor(Math.random()*10000);
			localStorage.setItem('tempyzm',this.tempyzm);
			console.log(this.tempyzm)
			var params = [this.tempyzm,"2"];
			ssender.sendWithParam(86, this.loginphone, this.templateId,params, this.smsSign, "", "", callback); 
			function callback(err, res, resData) {
			  if (err) {
			     // console.log("err: ", err);
			  } else {
			     // console.log("request data: ", res.req);
			     // console.log("response data: ", resData);
			  }
			}
		},
		
		
		checkphonenum(){
			this.showdeletephone=true
		},
		deletephone(){
			this.loginphone=''
			this.showdeletephone=false
		},
		hidedelete(){
			//this.showdeletephone=false
		}
	}
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
	.deletephone{
		position: absolute;
		top: 10/50rem;
		right: 10/50rem;
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
			font-size: 16/50rem;
			margin-bottom: 10/50rem;
		}
		h6{
			font-size: 14/50rem;
			span{
				text-decoration: underline;
				letter-spacing: 3px
			}
		}
		.otherlogin{
			display: flex;
			margin: 0 auto;
			position: relative;
			left: 50%;
			transform: translateX(-50%);
			span{
				&:first-of-type{
					margin-left: 60/50rem
				}
				margin: 0 20/50rem;
				display: block;
				background-color: rgba(0, 0, 0, 0.4);
				width: 35/50rem;
				height: 35/50rem;
				border-radius: 50%;
				line-height: 35/50rem;
				margin-bottom: 15/50rem;
				i{
					color: white;
					display: inline-block;
					font-size: 18/50rem
				}
			}
		}
	}

</style>
