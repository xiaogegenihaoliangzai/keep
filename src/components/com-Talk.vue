<template>
	<div class="talk_c">
		<div class="talk_c_a">
			<ul>
				<li><img :src="Img" /></li>
				<li>
					<p>{{name}}</p>
					<p class="timesec">2019/6/14</p>
				</li>
				<li>
					<img src="../assets/community/su_ic_dayflow_content_action_comment.png" />
					<img src="../assets/community/icon_comment_like.png" /><span class="count">{{Count}}</span>
				</li>
			</ul>
			<div class="talk_area">
				<div class="talk_area_sec">
					<p><span>{{name}}</span>回复<span>坐怀不乱</span>偶尔吧！孕前运动不多，不过我高中是体育生，那时候有腹肌，哈哈</p>
					<p><span>{{name}}</span>回复<span>坐怀不乱</span>偶尔吧！孕前运动不多，不过我高中是体育生，那时候有腹肌，哈哈</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				arr: [],
				name: (() => {
					/* $route.query获取shopid */
					return this.$route.query.name
				})(),
				Img: (() => {
					/* $route.query获取shopid */
					return this.$route.query.Img
				})(),
				Count: (() => {
					/* $route.query获取shopid */
					return this.$route.query.Count.toString()
				})(),
			}
		},
		mounted() {
			this.fn();
		},
		methods: {
			fn() {
				this.$axios.get("../../static/data/talk.json")
					.then(res => {
						this.arr = res.data.data
						//console.log(res.data.data.entries)
					})

			}

		}

	}
</script>

<style scoped lang="less">
	.talk_c .talk_c_a {
		padding: 0.2rem 0.3rem;
		border-bottom: #A9A9A9 1px solid;
		overflow: hidden;
	}
	
	.talk_c .talk_c_a ul {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		padding: 0.15rem 0.1rem;
	}
	
	.talk_c .talk_c_a ul li:nth-of-type(1) img {
		width: 1rem;
		border-radius: 50%;
	}
	
	.talk_c .talk_c_a ul li:nth-of-type(2) {
		text-align: left;
		
		font-size: 0.35rem;
		width: 50%;
	}
	
	.talk_c .talk_c_a ul li:nth-of-type(2) p {
		margin-top: 0.1rem;
	}
	
	.talk_c .talk_c_a .timesec {
		font-size: 0.25rem;
		color: gray;
	}
	
	.talk_c .talk_c_a ul li:nth-of-type(3) {
		text-align: center;
		height: 0.7rem;
		line-height: 0.7rem;
	}
	
	.talk_c .talk_c_a ul li:nth-of-type(3) img {
		width: 0.6rem;
	}

	.talk_c .talk_c_a .talk_area {
		padding-left: 1rem;
	}
	
	.talk_c .talk_c_a .talk_area p {
		line-height: 27/50rem;
		font-size: 15/50rem;
		text-align: left;
	}
	
	.talk_c .talk_c_a .talk_area .talk_area_sec {
		background: #f5f1f1;
		padding: 0 0.25rem;
	}
	
	.talk_c .talk_c_a .talk_area .talk_area_sec span {
		color: green;
	}
</style>