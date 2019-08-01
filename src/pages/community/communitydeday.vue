<template>

	<div class="comm_warp">
		<div class="header">
			<headersList title="动态详情">				
				<img src="../../assets/community/icon_search_lined_dark.png" slot='leftImg' class='left' />
				
				<img src="../../assets/community/mo_store_title_back.png" slot="rightImg" class="right" />
			</headersList>
		</div>

		<div class="content">
			<div class="content_sec">
				<div class="detay">
					<p>跟着keep做五次马甲线的练习之后</p>
					<p>腹部确实紧了一些</p>
					<p>昨天去拍摄</p>
					<p>好像隐约能看到一点点的马甲线<span>...全部</span></p>
				</div>
				<div class="saveimg">
					<img src="../../assets/community/016.jpg" />
					<img src="../../assets/community/016.jpg" />
					<img src="../../assets/community/016.jpg" />
					<img src="../../assets/community/016.jpg" />
					<img src="../../assets/community/016.jpg" />
					<img src="../../assets/community/016.jpg" />
					<img src="../../assets/community/016.jpg" />
				</div>
				<div class="mark_a">
					<a>
						<span>#</span>
						<span>马甲线</span>
					</a>
				</div>
				<div class="time_a">
					<ul>
						<li>2019/6/2-09:33</li>
						<li>...</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="talk_sec">
			<div class="talk_a">
				<ul>
					<li><span>75</span>评论</li>
					<li><span>331</span>加油</li>
				</ul>
			</div>
			<div class="talk_b">
				<ul class="talk_b_sec">
					<li><img src="../../assets/community/doge.png" /></li>
					<li>
						<span></span>
						<input type="text" placeholder="写下你第一条评论吧" />
						<span></span>
					</li>
				</ul>
			</div>
			<div class="talk_c">
				<div class="talk_c_a">
					<ul>
						<li>
							<img src="../../assets/community/016.jpg" />
							<div>
								<p>瓜瓜甜</p>
								</br>
								<span>2019/6/14</span>
							</div>
						</li>
						<li>
							<img src="../../assets/community/su_ic_dayflow_content_action_comment.png" />
							<img src="../../assets/community/icon_comment_like.png" /><span>1</span>
						</li>
					</ul>
					<div class="talk_area">
						<p>图五的裙子在哪里买的呀好好看</p>
						<div class="talk_area_sec">
							<p><span>逃跑的越狱的安娜</span>：实体店的哦！哈哈！！</p>
						</div>
					</div>
				</div>
				<div class="talk_c_a">
					<ul>
						<li>
							<img src="../../assets/community/016.jpg" />
							<div>
								<p>瓜瓜甜</p>
								</br>
								<span>2019/6/14</span>
							</div>
						</li>
						<li>
							<img src="../../assets/community/su_ic_dayflow_content_action_comment.png" />
							<img src="../../assets/community/icon_comment_like.png" /><span>1</span>
						</li>
					</ul>
					<div class="talk_area">
						<p>不会吧？新手做五次就有一点了么</p>
						<div class="talk_area_sec">
							<p><span>逃跑的越狱的安娜</span>回复<span>坐怀不乱的千纸鹤</span>偶尔吧！孕前运动不多，不过我高中是体育生，那时候有腹肌，哈哈</p>
							<p><span>逃跑的越狱的安娜</span>回复<span>坐怀不乱的千纸鹤</span>偶尔吧！孕前运动不多，不过我高中是体育生，那时候有腹肌，哈哈</p>
						</div>
					</div>
				</div>
				<div class="talk_c_a">
					<ul>
						<li>
							<img src="../../assets/community/016.jpg" />
							<div>
								<p>瓜瓜甜</p>
								</br>
								<span>2019/6/14</span>
							</div>
						</li>
						<li>
							<img src="../../assets/community/su_ic_dayflow_content_action_comment.png" />
							<img src="../../assets/community/icon_comment_like.png" /><span>1</span>
						</li>
					</ul>
					<div class="talk_area">
						<p>不会吧？新手做五次就有一点了么</p>
						<div class="talk_area_sec">
							<p><span>逃跑的越狱的安娜</span>回复<span>坐怀不乱的千纸鹤</span>偶尔吧！孕前运动不多，不过我高中是体育生，那时候有腹肌，哈哈</p>
							<p><span>逃跑的越狱的安娜</span>回复<span>坐怀不乱的千纸鹤</span>偶尔吧！孕前运动不多，不过我高中是体育生，那时候有腹肌，哈哈</p>
						</div>
					</div>
				</div>

			</div>
			<div class="talk_d">
				<h1>查看全部评论(75条)</h1></div>
		</div>
		<div class="cc">
			<h1>你可能感兴趣</h1></div>
		<div class="sec">
			<div class="sec_sec">
				<div class="box" v-for="(item,index) in arr2">
					<a href="#">
						<img :src="item.imgsrc">
						<p>{{item.title}}</p>
						<ul>
							<li><img :src="item.thumbsrc"></li>
							<li>{{item.name}}</li>
							<li><img src="../../assets/community/icon_comment_like.png"></li>
							<li>{{item.cont}}</li>
						</ul>
					</a>
				</div>
			</div>
			<div class="sec_sec">
				<div class="box" v-for="(item,index) in arr2">
					<a href="#">
						<img :src="item.imgsrc">
						<p>{{item.title}}</p>
						<ul>
							<li><img :src="item.thumbsrc"></li>
							<li>{{item.name}}</li>
							<li><img src="../../assets/community/icon_comment_like.png"></li>
							<li>{{item.cont}}</li>
						</ul>
					</a>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import headersList from '../../components/header.vue'
	export default {

		components: {
			headersList
		},
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
				this.$axios.get("../static/data/json1.json")
					.then(res => {
						//console.log(res.data.data.entries)

						this.arr = res.data.data.entries

					})

			},
			fn1() {
				this.$axios.get("../../static/data/json8.json")
					.then(res => {

						console.log(res.data.data)
						//console.log(res.data.data.entries)												
						this.arr2 = res.data.data

					})
			}
		}
	}
</script>

<style scoped lang="less">

	.comm_warp .header .left {
		margin-left: 5/50rem;
	}
	
	.comm_warp .header .right {
		margin-right: 320/50rem;
	}
	
	.comm_warp .header p{
		margin-left: 80px;
		
	}
	/*content开始*/
	
	.content {
		width: 100%;
		background: white;
	}
	
	.content .content_sec .star {
		height: 1rem;
		line-height: 1rem;
		overflow: hidden;
	}
	
	.content .content_sec .star li {
		float: left;
		line-height: 0.7rem;
		padding: 0 0.2rem;
	}
	
	.content .content_sec .star li img {
		width: 0.7rem;
		border-radius: 50%;
	}
	
	.content .content_sec .star li:nth-of-type(1) {
		width: 7%;
	}
	
	.content .content_sec .star li:nth-of-type(2) {
		width: 65%;
	}
	
	.content .content_sec .star li:nth-of-type(3) {
		background: yellowgreen;
		border-radius: 0.35rem;
		width: 10%;
		text-align: center;
		color: white;
	}
	
	.content .content_sec .detay {
		padding: 0 0.2rem;
	}
	
	.content .content_sec .detay p {
		text-align: left;
		line-height: 0.4rem;
	}
	
	.content .content_sec .detay p span {
		color: greenyellow;
	}
	
	.content .content_sec .saveimg {
		margin: 0.2rem 0.2rem;
		overflow: hidden;
	}
	
	.content .content_sec .saveimg img {
		float: left;
		width: 2.3rem;
		height: 2rem;
		margin: 0.01rem 0.01rem;
	}
	
	.content .content_sec .mark_a {
		margin-left: -5.6rem;
	}
	
	.content .content_sec .mark_a a {
		height: 0.4rem;
		background: gainsboro;
		font-size: 0.3rem;
		padding: 0.1rem;
		color: cornflowerblue;
		border-radius: 0.4rem;
	}
	
	.content .content_sec .time_a {
		line-height: 1rem;
		width: 100%;
	}
	
	.content .content_sec .time_a ul {
		padding: 0 0.3rem;
		display: flex;
		justify-content: space-between;
	}
	/*content结束*/
	/*评论区*/
	
	.talk_sec {
		margin-top: 0.15rem;
		background: white;
	}
	
	.talk_sec .talk_a {
		border-bottom: solid 1px gray;
	}
	
	.talk_sec .talk_a ul {
		line-height: 1rem;
		padding: 0 0.3rem;
		display: flex;
		justify-content: space-between;
	}
	
	.talk_sec .talk_a ul span {
		color: black;
		font-size: 0.45rem;
	}
	
	.talk_sec .talk_b {
		line-height: 1.5rem;
		height: 1.5rem;
	}
	
	.talk_sec .talk_b .talk_b_sec {
		overflow: hidden;
		padding: 0 0.5rem;
	}
	
	.talk_sec .talk_b .talk_b_sec li {
		float: left;
	}
	
	.talk_sec .talk_b .talk_b_sec li img {
		width: 0.7rem;
		height: 0.7rem;
		margin-left: -0.9rem;
		margin-top: 0.4rem;
	}
	
	.talk_sec .talk_b .talk_b_sec li input {
		border: 1px gray solid;
		width: 5rem;
		height: 0.7rem;
		text-indent: 0.8rem;
		border-radius: 0.35rem;
		background: #f5f1f1;
	}
	
	.talk_sec .talk_b .talk_b_sec li span {
		width: 0.3rem;
		height: 0.3rem;
		position: absolute;
	}
	
	.talk_sec .talk_b .talk_b_sec li span:nth-of-type(1) {
		background: url(../../assets/community/icon_address_edit.png) no-repeat;
		background-size: contain;
		margin-top: 0.6rem;
		margin-left: 0.3rem;
	}
	
	.talk_sec .talk_b .talk_b_sec li span:nth-of-type(2) {
		background: url(../../assets/community/emoji_smile.png) no-repeat;
		background-size: contain;
		margin-top: -1rem;
		margin-left: 6.3rem;
		width: 0.5rem;
		height: 0.5rem;
	}
	
	.talk_sec .talk_b .talk_b_sec li:nth-of-type(1) {
		width: 20%;
	}
	
	.talk_sec .talk_c .talk_c_a {
		padding: 0.2rem 0.3rem;
		border-bottom: #A9A9A9 1px solid;
	}
	
	.talk_sec .talk_c .talk_c_a ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.talk_sec .talk_c .talk_c_a ul li:nth-of-type(1) {
		height: 1.2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 2.5rem;
	}
	
	.talk_sec .talk_c .talk_c_a ul li:nth-of-type(1) img {
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 50%;
	}
	
	.talk_sec .talk_c .talk_c_a ul li:nth-of-type(2) img {
		width: 0.45rem;
	}
	
	.talk_sec .talk_c .talk_c_a .talk_area {
		padding-left: 1rem;
	}
	
	.talk_sec .talk_c .talk_c_a .talk_area p {
		line-height: 27/50rem;
		font-size: 15/50rem;
		text-align: left;
	}
	
	.talk_sec .talk_c .talk_c_a .talk_area .talk_area_sec {
		background: #f5f1f1;
		padding: 0 0.25rem;
	}
	
	.talk_sec .talk_c .talk_c_a .talk_area .talk_area_sec span {
		color: green;
	}
	
	.talk_sec .talk_d {
		text-align: center;
		height: 1.0rem;
		line-height: 1.0rem;
	}
	/*评论区结束*/
	
	.cc {
		margin-top: 0.25rem;
		padding-left: 0.25rem;
		height: 1rem;
		line-height: 1rem;
		background: white;
	}
	/*内容开始*/
	
	.sec {
		background: gainsboro;
		text-align: center;
		display: flex;
		overflow: hidden;
		align-content: space-between;
	}
	
	.sec .sec_sec {
		padding: 0rem 0.1rem;
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