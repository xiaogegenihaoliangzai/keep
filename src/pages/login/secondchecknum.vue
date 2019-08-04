<template>
  <div class="bg">
    <div class="titleimg">
      <img src="../../assets/community/mo_store_title_back.png" @click="goback">
    </div>
    <div class="textlist">
      <p class="checknum">请输入验证码</p>
      <p>已发送4位验证码至<span>+86 {{shownum}}</span></p>
      <div class="inputlist">
        <p><input type="text" disabled="true" value="3"></p>
        <p><input type="text" disabled="true" value="5"></p>
        <p><input type="text" disabled="true" value="7"></p>
        <p><input type="text" disabled="true" value="8"></p>
      </div>
    </div>
    <div class="aiplan">
    	<p @click="tomsg">确定</p>
      <h6>重新获取(13)</h6>
    </div>
   </div>
</template>

<script>
  export default {
    data() {
    	return {
        shownum:""
      }
    },
   methods:{
     tomsg(){
       this.$router.push('/community')
     },
     goback(){
     						 this.$router.go(-1)
     }
   },
   mounted() {
     this.shownum=localStorage.getItem('phonenum',this.loginphone);
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
