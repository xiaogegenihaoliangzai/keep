<template>
    <yd-layout id="app">
      <router-view/>
        <tabbar  slot="tabbar"  v-if="$route.path!='/'&&$route.path!='/secondchecknum'"></tabbar>

    </yd-layout>

</template>

<script>
import tabbar from './components/tabbar-di.vue'
export default {
  name: 'App',
	components:{
		tabbar
	}
}
</script>

<style>
*{
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
}
.van-dropdown-item--down, .van-dropdown-item{
  top:63px;
}
.yd-list-img{
  margin: 0;
  top: 0;
  padding: 0;
  min-height: 70px;
  position: relative;
  overflow: block;
}
.yd-list-img img{
  position: absolute;
  top: 0;
}
img{
    border:0;
}
ol, ul ,li{list-style: none;}
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	text-align: center;
  color: #2c3e50;
  font-size: 16px;
}
.yd-list-title{
  font-weight: 500;
}
.yd-list-img{
  overflow: visible;
}
.yd-tab-nav .yd-tab-active:before{
  width: 18%;
  margin-left: -11%;
}
.yd-list-theme2 .yd-list-item .yd-list-mes{
  margin-top: 0.26rem;
}
::-webkit-scrollbar {
  display: none!important;
}
.swiper-pagination-bullet-active{
  background: #fff!important;
}

.yd-list-img img{
  margin: 0;
  top: 0;
}
body{
  background-color: #FAFAFA!important;
}


.yd-scrollview:after{
display:none;}
</style>
