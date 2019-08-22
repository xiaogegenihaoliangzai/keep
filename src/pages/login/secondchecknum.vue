<template>
  <div class="bg">
    <div class="titleimg">
      <img src="../../assets/scarch/icon_arrow_left_lined.png" @click="goback">
    </div>
		<div class="yzm">
			 <mt-popup v-model="popupVisible" class='tck' modal="true" position="top" style="width: 100%">请{{shownum}}查看手机</mt-popup>

		</div>
    <div class="textlist">
      <p class="checknum">请输入验证码</p>
      <p>已发送4位验证码至<span>+86 {{shownum}}</span></p>
      <div class="inputlist" @touchstart.stop="show = true">
        <p><input type="text" disabled="true" :value="inputnum[0]" @click="deletenum"></p>
        <p><input type="text" disabled="true" :value="inputnum[1]" @click="deletenum"></p>
        <p><input type="text" disabled="true" :value="inputnum[2]" @click="deletenum"></p>
        <p><input type="text" disabled="true" :value="inputnum[3]" @click="deletenum"></p>
      </div>
    </div>
		<van-number-keyboard
  :show="show"
  extra-key="."
  close-button-text="完成"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete" style="color: black;"
/>
    <div class="aiplan">
    	<p @click="tomsg">确定</p>
      <h6 @click="cxhq" id='cxhq' :disabled="isDisable">重新获取({{count}})</h6>
    </div>
   </div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
  export default {
    data() {
    	return {
        shownum:"",
				popupVisible:false,
				showyzm:'1234',
				show: false,
				inputnum:[],
				count:30,
				timer:null,
				newlist:null,
				isDisable:false
      }
    },
   methods:{
     tomsg(){
			//console.log(this.newlist.split(",").toString()==this.inputnum.join(""))
			//console.log(this.newlist.split(", ").toString())
			//console.log(this.inputnum.join(""))
			if(this.newlist.split(",").toString()==this.inputnum.join("")){
				this.$router.push('/community')
			}else{
				MessageBox.alert('验证码错误').then(action => {
					console.log(123)
				});
			}
     },
		 deletenum(){
			 this.inputnum=''
		 },
     goback(){
     		this.$router.go(-1)
     },
		 cxhq(){
			 this.$router.go(0)
		 },
		
   getCode(){
		 var newyzm=document.querySelector("#cxhq");
     const TIME_COUNT = 30;
     if (!this.timer) {
       this.count = TIME_COUNT;
       this.timer = setInterval(() => {
       if (this.count > 0 && this.count <= TIME_COUNT) {
         this.count--;
				 this.isDisable=true;
        } else {
         clearInterval(this.timer);
         this.timer = null;
					newyzm.innerHTML="重新获取"
        }
       }, 1000)
      }
   } ,
	onInput(value) {
	   console.log(value);
				 this.newlist=this.showyzm.toString()
				console.log(this.newlist.split(",").toString());
				var i=0
				this.inputnum.push(value)
				if(i<=this.inputnum.length){
					i++
				}
	 },
	 onDelete() {
	   console.log('删除');
		 this.inputnum=[]
	 }
		 },
   mounted(){
     this.shownum=localStorage.getItem('phonenum',this.loginphone);
     this.showyzm=localStorage.getItem('tempyzm',this.tempyzm);
		 console.log(this.showyzm)
		 this.popupVisible=true;
		 this.getCode()
   }
  }
</script>

<style scoped lang="less">
  .bg{
    background-color: #574f5d;
    height: 100%;
    width:100%;
    color: white
  }
	.tck{
		height: 40/50rem;
		line-height: 40/50rem;
		color: black;
	}
	
  .titleimg{
    position: relative;
    img{
      width: 20/50rem;
      position: absolute;
      left: 10/50rem;
      top: 10/50rem;
    }
  }
  .aiplan{
  	width: 100%;
  	position: fixed;
  	top: 250/50rem;
  	text-align: center;
  	line-height: 51/50rem;
  	font-size: 16/50rem;
  	color: white;
    h6{
      font-size: 15/50rem;
      text-decoration: underline;
      font-weight: 300;
      letter-spacing: 2px
    }
  }
  .aiplan p{
  	width: 284/50rem;
  	background-color: #60c48e;
  	border-radius: 30/50rem;
  	height: 51/50rem;
  	margin: 0 auto;
  }
  .textlist{
    position: fixed;
    width: 80%;
    top: 100/50rem;
    left: 50%;
    text-align: left;
    transform: translateX(-50%);

    .checknum{
      font-size: 25/50rem
    }
  }
  .inputlist{
    display: flex;
    p{
      margin: 15/50rem;
      justify-content: space-around;
      input{
        width: 40/50rem;
        height: 40/50rem;
        line-height: 40/50rem;
        text-align: center;
        border: none;
        background-color: #786f7f;
        border-radius: 10/50rem;
      }
    }
  }
</style>
