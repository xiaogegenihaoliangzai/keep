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
import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.rem/list';/* 使用px：import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.px/list'; */
Vue.component(ListTheme.name, ListTheme);
Vue.component(ListItem.name, ListItem);
import 'vue-ydui/dist/ydui.base.css';
Vue.component(ListOther.name, ListOther);
import {Layout} from 'vue-ydui/dist/lib.rem/layout';/* 使用px：import {Layout} from 'vue-ydui/dist/lib.px/layout'; */
Vue.component(Layout.name, Layout);
import Axios from "axios"
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.prototype.$axios=Axios;

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(FlexBoxItem.name, FlexBoxItem);
Vue.config.productionTip = false

/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
import 'vue-ydui/dist/ydui.rem.css';
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
Vue.use(YDUI);
Vue.use(MintUI)






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
