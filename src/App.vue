<template>
  <div id="app">
    <router-view/>
		<tabbar></tabbar>
  </div>
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
.yd-tab-nav .yd-tab-active:before{
  width: 18%;
  margin-left: -11%;
}
::-webkit-scrollbar {
  display: none!important;
}
.swiper-pagination-bullet-active{
  background: #fff!important;
}
body{
  background-color: #FAFAFA!important;
}
</style>
