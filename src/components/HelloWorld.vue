<template>
  <div class="hello">
    <button @click="ysy">跳尹石雨</button>
    <button @click="zs">跳周顺</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
	methods:{
		ysy(){
			this.$router.push("listAll")
		},
		zs(){
			this.$router.push("login")

		}
	}
}
</script>
<style scoped>

</style>
