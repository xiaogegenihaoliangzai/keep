<template>
   <div class="shengao">
     <p>身高</p>
     <mt-picker :slots="slots" @change="onValuesChange" res="pickker1"></mt-picker>
  </div>
</template>
<script>
  export default {
		data(){
			return{
				bodyheightmsg:120,
			}
		},
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
			this.bodyheightmsg=values.join('')
			localStorage.setItem("sg",this.bodyheightmsg)
    },
		
  },
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: ['120cm', '125cm','130cm','135cm','140cm','145cm','150cm','155cm','160cm','165cm','170cm','175cm','180cm','185cm','190cm','195cm','200cm'],
          className: 'slot1',
          textAlign: 'center'
        }
      ]
    };
  }
}
</script>

<style scoped="scoped" lang="less">

  .shengao{
    padding-top: 50/50rem;
    p{
      text-align: left;
      margin-left: 20/50rem;
    }
  }

</style>
