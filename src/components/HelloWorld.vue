<template>
  <div class="hello">
    <button @click="login">注册</button>
    <button @click="plan">计划</button>
    <button></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
	methods:{
    login(){
      this.$router.push('login')
    },
     plan(){
      this.$router.push('plan')
    }
	}
}
</script>
<style scoped>

</style>
