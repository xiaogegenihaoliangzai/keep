<template>
  <div>
    <div>
       <tab :line-width=2  :scroll-threshold=10 active-color='#555F64' bar-active-color='#555F64' default-color='#A0A7AA' v-model="index">
        <tab-item class="vux-center" :selected="demo === item" v-for="(item, index) in list" @click="demo = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
const list = () => ['精选', '美食', '电影', '酒店', '外卖']

export default {
  components: {
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      list:['精选', '美食', '电影', '酒店', '外卖'],
      demo: '精选',
      index: 0,
    }
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>

</style>