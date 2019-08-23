
<template>
  <div>
    <div class="progressContainer">
      <div class="progress" :style="{width:progreess+'%'}">
        <p>{{progreess}}%/{{nice}}M</p>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      progreess: 0,
      nice:0
    };
  },
  mounted() {
      var count=0
    var timer = setInterval(() => {
      this.progreess++;

      if (this.progreess >= 100) {
        console.log(1);
        clearTimeout(timer);
        this.$router.push('timer')
      }
    }, 100);

    function random(lower, upper) {
      return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }random(1,100)
    count=random(1,100)
    this.nice=count
  }
};
</script>

<style lang="less" scoped>
div.progressContainer {
  height:80/50rem;
  width: 100%;
  background-color: #2E936F;
  overflow: hidden;
  position: fixed;
  bottom:0;
  left:0;
}
div.progress {
  background-color: #3CD69D;
  height:80/50rem;
  float: left;
  line-height: 80/50rem;
}
p {
  color: #fff;
  font-weight: 100;
  font-size: 25/50rem;
  font-family: "微软雅黑"!important;
  position: absolute;
  letter-spacing: 1/50rem;
  opacity: 0.6;
  left: 50%;
  margin-left: -18.5%!important;
}
</style>