<template>
	<div class="item" @click="clickitem" :class="{colorgreen:flag}">
		<span v-if="flag">
			<slot name='active'></slot></span>
		<span v-if="!flag"><slot name='normal'></slot></span>
		<br>
		<span>{{title}}</span>
	</div>
</template>
<script>
	export default{
		props:['title','mark','curr'],
		computed:{
			flag:function(){
				if(this.mark==this.curr){
					return true;
				}
				return false;
			}
		},
		methods:{
			clickitem(){
				this.$emit('change',this.mark);
				this.$router.push('/'+this.mark)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
 	.item img{
		width: 45/50rem;
	}
	 span{
		 font-size: 15/50rem;
	 }
	 .colorgreen{
		 color: green;
	 } 
</style>
