<template>
	<div class="commu">
		 <ul>
			<li>
				<slot  name="imgsrc"></slot>
			</li>
			<li>
				<p>{{name}}</p>
			</li>
			<li>
				<slot id="tic" name="text"></slot>
			</li>
		</ul> 
	</div>

</template>

<script>
	export default {
		data: function() {
			return {
				selected: []
			}
		},
		props: ["name", "title"],
		

	}
</script>
<style scoped lang="less">

	.commu {
		overflow: hidden;
		width: 100%;
	}
	
	.commu>ul {
		height: 1rem;
		line-height: 1rem;
		display: flex;
		align-content: flex-start;
	}
	
	.commu li {
		width: 30%;
	}
	
	.commu li:nth-of-type(1) {
		margin-right: 30/50rem;
		width: 20%;
		border-radius: 50%;
	}
	
	.commu li:nth-of-type(2) {
		margin-left: -0.5rem;
		text-align: left;
		width: 60%;
	}
	
	.commu li:nth-of-type(3) {
		margin-left: 50/50rem;
	}
	
	#tic {
		background: green;
		padding: 0.1rem 0.3rem;
		width: 0.3rem;
		border-radius: 0.3rem;
		color: white;
		font-size: 0.20rem;
	}
</style>