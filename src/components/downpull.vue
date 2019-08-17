<template>
	<div class="mmain">
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
			<slot name="downpull" height="1200px"></slot>
		</van-pull-refresh>
	</div>
</template>
<script>
	export default {
		data() {
			return {

				isLoading: false
			}
		},

		methods: {
			onRefresh() {
				setTimeout(() => {

					this.toast('刷新成功');
					this.isLoading = false;

				}, 500);
			}
		}
	}
</script>
<style scoped lang="less">

</style>