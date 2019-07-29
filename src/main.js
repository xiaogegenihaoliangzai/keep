// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css';
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider';/* 使用px：import {Slider, SliderItem} from 'vue-ydui/dist/lib.px/slider'; */
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);
import 'vue-ydui/dist/ydui.base.css';
import {FlexBox, FlexBoxItem} from 'vue-ydui/dist/lib.rem/flexbox';/* 使用px：import {FlexBox, FlexBoxItem} from 'vue-ydui/dist/lib.px/flexbox'; */
Vue.component(FlexBox.name, FlexBox);
Vue.component(FlexBoxItem.name, FlexBoxItem);
Vue.config.productionTip = false

/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
import 'vue-ydui/dist/ydui.rem.css';
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
Vue.use(YDUI);







/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
