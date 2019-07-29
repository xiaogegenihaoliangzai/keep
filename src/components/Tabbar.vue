<template>
  <div class="tab">
    <yd-tab horizontal-scroll height="45px" active-color="#555F64" color="#A0A7AA" font-size="13px" bg-color="#fff" border-color="#fff">
      <slot name="list1"></slot>
        <yd-tab-panel label="运动商城">222222</yd-tab-panel>
        <yd-tab-panel label="健康轻食">333333</yd-tab-panel>
        <yd-tab-panel label="硬件商店">444444</yd-tab-panel>
        <yd-tab-panel label="Keepland">555555</yd-tab-panel>
    </yd-tab>
  </div>
</template>

<script>
export default {
  
}

</script>
<style scoped lang="less">
.tab{
  height: 45/16rem;
  font-size: .1rem;
  box-shadow: 0 0 10px rgba(190,190,190,0.2);
  .yd-tab{
    height: 45/16rem;
  }
}

</style>
