<template>
   <div class="tizhong">
     <p>目标体重</p>
     <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
  </div>
</template>
<script>
  export default {
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
  },
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: ['50kg','55kg','60kg','65kg','70kg','75kg','80kg','85kg','90kg','95kg','100kg',],
          className: 'slot1',
          textAlign: 'center'
        }
      ]
    };
  }
}
</script>

<style scoped="scoped" lang="less">
  .tizhong{
    padding-top: 50/50rem;
    p{
      text-align: left;
    
    }
  }


</style>
