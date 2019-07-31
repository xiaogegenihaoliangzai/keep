<template>
  <div class="tab">
    <yd-tab horizontal-scroll height="45px" active-color="#555F64" color="#A0A7AA" font-size="13px" bg-color="#fff" border-color="#fff">
        <slot name="list1" label="运动商城"></slot>
        <slot name="list2" label="健康轻食"></slot>
        <slot name="list3" label="硬件商店"></slot>
        <slot name="list4" label="Keepland"></slot>
        <slot name="list5" label="Keepland"></slot>
        <slot name="list6" label="Keepland"></slot>
        <slot name="list7" label="Keepland"></slot>
        <slot name="list8" label="Keepland"></slot>
        <slot name="list9" label="Keepland"></slot>
        <slot name="list10" label="Keepland"></slot>
    </yd-tab>
  </div>
</template>

<script>
export default {
  props:['label']
}

</script>
<style scoped lang="less">
.tab{
  height: 45/16rem;
  font-size: .1rem;
  box-shadow: 0 0 10px rgba(190,190,190,0.1);
  .yd-tab{
    height: 45/16rem;
  }
}

</style>
