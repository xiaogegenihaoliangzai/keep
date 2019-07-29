<template>
	<div>
		<theheader title='运动'>
				<img src="../assets/sport/tc_icon_kstar.png" slot='leftImg'>
				<img src="../assets/sport/icon_search_lined_dark.png" slot='rightImg'>
		</theheader>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import theheader from '../components/header.vue'
	export default {
		components: {
			theheader,
		}
	}
</script>

<style>
</style>
