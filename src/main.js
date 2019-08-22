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
import {store} from './store/store.js'
import { Tabbar, TabItem } from 'mint-ui';
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.prototype.$axios=Axios;
import Vant from 'vant';
import 'vant/lib/index.css';
import {Search} from 'vue-ydui/dist/lib.rem/search';
/* 使用px：import {Search} from 'vue-ydui/dist/lib.px/search'; */
Vue.component(Search.name, Search);
Vue.use(Vant);
import animated from 'animate.css' 
Vue.use(animated)
import { Popup } from 'vant';
Vue.use(Popup);
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);

import {Icons} from 'vue-ydui/dist/lib.rem/icons';
/* 使用px：import {Icons} from 'vue-ydui/dist/lib.px/icons'; */

Vue.component(Icons.name, Icons);

Vue.use(Swipe).use(SwipeItem);

import { Tab } from 'vux'

Vue.component('tab', Tab)
Vue.component('tab-item')


//回到顶部
import {BackTop} from 'vue-ydui/dist/lib.rem/backtop';
Vue.component(BackTop.name, BackTop);
//下拉刷新
import {InfiniteScroll} from 'vue-ydui/dist/lib.rem/infinitescroll';
Vue.component(InfiniteScroll.name, InfiniteScroll);

import VueResource from 'vue-resource';
Vue.use(VueResource);


import {pullRefresh} from 'vue-ydui/dist/lib.rem/pullrefresh';
import 'vue-ydui/dist/ydui.base.css';
Vue.component(PullRefresh.name, PullRefresh);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(FlexBoxItem.name, FlexBoxItem);
Vue.config.productionTip = false

/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
import 'vue-ydui/dist/ydui.rem.css';
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
Vue.use(YDUI);
Vue.use(MintUI)


import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'cVnjEIwuimz7IFRDphZbd49Z328kE2Ku'    //这个地方是官方提供的ak密钥
})


import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);


import { Swipe, SwipeItem } from 'vant';








/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
