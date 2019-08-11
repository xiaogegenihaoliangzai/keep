<template>
    <yd-layout id="app">
      <router-view/>
        <tabbar  slot="tabbar"  v-if="$route.meta.keepAlive"></tabbar>

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

<style lang="less">
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
.van-dropdown-menu__title::after{
  border-color:transparent transparent #A7ADB0 #A7ADB0;
}
.van-dropdown-item{
  z-index: 9999999!important;
}
.van-overlay{
  top: 50/50rem!important;
}
.van-ellipsis{
  font-size: 14px!important;
  color:#A7ADB0!important;
}
.van-dropdown-menu__item:nth-of-type(3){
  margin-right: 20/50rem;
}
.yd-list-img img{
  position: absolute;
  top: 0;
}
.van-dropdown-menu__title--down{
  color:#26C38C!important;
}
.van-dropdown-menu__title--down>div{
  color:#26C38C!important;
}
.van-dropdown-menu__title--down::after{
  border-color:transparent transparent #26C38C #26C38C;
}
.van-cell{
  text-align: left!important;
  text-indent: 15/50rem;
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
  width: 15/50rem;
  margin-left: -11%;
}
.yd-tab-nav{
	min-width:  100%!important;
	text-align: center!important;
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
