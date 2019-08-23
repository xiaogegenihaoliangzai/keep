<template>
  <div>
    <!-- <label>
      关键词：
      <input v-model="keyword" />
    </label></br>
    <label>
      地区：
      <input v-model="location" />
    </label> -->
    <baidu-map class="map" center="深圳">
      <bm-traffic :predictDate="{weekday: 4, hour: 12}"></bm-traffic>
      <!-- 定位 -->
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <!-- 缩放控件 -->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <!-- 地图类型 -->
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>
      <!-- 城市列表 -->
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-marker
        :position="{lng: 113.959357, lat: 22.545044}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
        <bm-label
          content="北大青鸟欢迎你"
          :labelStyle="{color: 'red', fontSize : '0.24rem'}"
          :offset="{width: -35, height: 30}"
        />
      </bm-marker>

      <!-- <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search> -->
    </baidu-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
     location: '',
      keyword: '北大青鸟'
    };
  }
};
</script>



<style  scoped lang="less">
.map {
  width: 100%;
  height: 180px;
}
</style>