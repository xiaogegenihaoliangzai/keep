<template>
	<div class="item" @click="clickitem" :class="{colorgreen:flag}">
		<span v-if="flag"><slot name='active'></slot></span>
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

<style scoped lang="less">
 
	 span{
		 font-size: 13/50rem;


		 display: inline-block;
		 text-align:center;
		 height: 20/50rem;

	 }
	 .colorgreen{
		 color: green;
	 } 
</style>
