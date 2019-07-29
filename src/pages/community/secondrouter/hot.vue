<template>
	<div >
		<section class="sec">
			<div class="sec_sec">
				<div class="box" v-for="(item,index) in arr">
					<a href="#" >
						<img :src="item.photo">
						<p>{{item.content}}</p>
						<ul>
							<li><img src="../../../assets/community/icon_comment_like.png"></li>
							<li>{{item.author.username}}</li>
							<li><img src="../../../assets/community/icon_comment_like.png"></li>
							<li>{{item.comments}}</li>
						</ul>
					</a>
				</div>
			</div>
			<div class="sec_sec">
				<div class="box" v-for="(item,index) in arr2">
					<a href="#">
						<img :src="item.photo">
						<p>{{item.content}}</p>
							<ul>
							<li><img src="../../../assets/community/icon_comment_like.png"></li>
							<li>{{item.author.username}}</li>
							<li><img src="../../../assets/community/icon_comment_like.png"></li>
							<li>{{item.comments}}</li>
						</ul>
					</a>
				</div>
			</div>
		</section>
	</div>

</template>

<script>
	export default {
		data: function() {
			return {
				arr: [],
				arr2: [],
				currIndex: 0
		
			}
		},
		mounted() {
			this.fn();
			this.fn1();
			
		},
		methods: {
			fn() {
				this.$axios.get("../../static/data/json1.json")
					.then(res => {
						//console.log(res.data.data.entries)
							
						this.arr = res.data.data.entries
						
					})

			},
				fn1() {
				this.$axios.get("../../static/data/json2.json")
					.then(res => {
					console.log(res.data.data.entries)												
						this.arr2 = res.data.data.entries
						
					})
			}
		}
	}
</script>
<style scoped lang="less">

.sec {
		background: gainsboro;
		text-align: center;
		display: flex;
		overflow: hidden;
		align-content: space-between;
	}
	
	.sec .sec_sec {
		padding: 0rem 0.1rem;
		margin-left: 0.1rem;
		margin-top: 0.1rem;
		background: #FFFFFF;
		border-radius: 0.1rem;
		width: 49%;
	}
	
	.sec .sec_sec .box {
		margin-top: 0.1rem;
		border-radius: 0.1rem;
		background: #F1F1F1;
		
	}
	
	.sec .sec_sec .box img {
		width: 100%;
		border-radius: 0.1rem;
	}
	
	.sec .sec_sec .box a {
		display: block;
	}
	
	.sec .sec_sec .box p {
		overflow: hidden;
		text-overflow: ellipsis;
		display: box;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 0.35rem;
		padding: 0 0.15rem;
		color: black;
		text-align: left;
		margin-bottom: 0.13333333rem;
	}
	
	.sec .sec_sec .box ul {
		overflow: hidden;
	}
	
	.sec .sec_sec .box ul li {
		float: left;
	}
	
	.sec .sec_sec .box ul li:nth-of-type(1) {
		margin-right: 0.2rem;
	}
	
	.sec .sec_sec .box ul li:nth-of-type(2) {
		margin-right: 0.8rem;
	}
	
	.sec .sec_sec .box ul li:nth-of-type(3) {
		margin-right: 0.2rem;
	}
	
	.sec .sec_sec .box ul img {
		width: 0.5rem;
	}

</style>