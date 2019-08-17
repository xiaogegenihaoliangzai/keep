<template>
	<section class="sec">
		<div class="sec_sec">
			<div class="box" v-for="(item,index) in arr" :key="item.id">
				<a href="#">
					<img v-lazy.sec_sec="item.imgsrc" @click="nice(item)">
					<p>{{item.title}}</p>
					<ul>
						<li><img v-lazy.sec_sec="item.thumbsrc"></li>
						<li>{{item.username}}</li>
						<li><img src="../assets/community/icon_comment_like.png"></li>
						<li>{{item.cont}}</li>
					</ul>
				</a>

			</div>
		</div>
		<div class="sec_sec" id="sec_sec">
			<div class="box" v-for="(item,index) in arr2">
				<a href="#">
					<img v-lazy.sec_sec="item.imgsrc" @click="nice(item)">
					<p>{{item.title}}</p>
					<ul>
						<li><img v-lazy.sec_sec="item.thumbsrc"></li>
						<li>{{item.username}}</li>
						<li><img src="../assets/community/icon_comment_like.png"></li>
						<li>{{item.cont}}</li>
					</ul>
				</a>
			</div>
		</div>
	</section>
</template>

<script>
	export default {

		data: function() {
			return {
				arr: [],
				arr2: []
			}
		},
		mounted() {
			this.fn();
			this.fn1();
		},
		methods: {
			fn() {
				this.$axios.get("../../static/data/json7.json")
					.then(res => {
						this.arr = res.data.data
					})
			},
			fn1() {
				this.$axios.get("../../static/data/json8.json")
					.then(res => {
						//	console.log(res.data.data)
						this.arr2 = res.data.data
					})
			},
			nice(item) {
				this.$router.push({
						path: '/communitydeday',
						query: {
							name: item.username,
							Img: item.thumbsrc,
							Count: item.cont,
							Imgsrc: item.imgsrc,
							Title: item.title
						}
					})
					//this.$store.commit("content", this.arr)
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
		padding: 0.1rem 0.1rem;
		background: #FFFFFF;
		width: 50%;
	}
	
	.sec .sec_sec .box {
		margin-top: 0.1rem;
		border-radius: 0.1rem;
		background: #f6f7fb;
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
		font-size: 0.24rem;
		padding: 0 0.15rem;
		color: black;
		text-align: left;
		margin-bottom: 0.13333333rem;
	}
	
	.sec .sec_sec .box ul {
	overflow: hidden;
	line-height: .8rem;
	position: relative;
	padding: 0 0.15rem;
	}
	
	.sec .sec_sec .box ul li {
		float: left;
		text-align: center;
	}
	
	.sec .sec_sec .box ul li:nth-of-type(2) {
		margin-left: 0.1rem;
		width: 1.7rem;
		text-align: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		
	}
	.sec .sec_sec .box ul li:nth-of-type(3) {
		margin-left: 0.2rem;
	}
	
	.sec .sec_sec .box ul img {
		width: 0.4rem;
		margin-top: 0.16rem;
	}
</style>