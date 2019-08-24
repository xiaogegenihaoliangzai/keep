<template>
	<div class="hello">
		<!--头部开始-->
		<div id="header">
			<span class="left" @click="to"><img src="../../assets/wo-img/99.png"></span>
		</div>

		<!--内容区域开始-->
		<div id="wrapper">
			<div class="top">
				<p class="list1">
					<span>我的数据</span>
					<em><img src="../../assets/wo-img/travel-show_02.jpg"></em>
				</p>
				<p class="list2">
					<span>总运动</span>
					<span>
						运动历史
						<em><img src="../../assets/scarch/kt_kibra_setting_right_arrow.png"></em>
					</span>
				</p>
				<p class="list3">
					<strong>0<span>分钟</span></strong>
				</p>
				<ul class="list4">
					<li>
						<span>消耗（千卡）</span><br>
						<strong>0</strong>
					</li>
					<li>
						<span>累计（天）</span><br>
						<strong>0</strong>
					</li>
					<li>
						<span>连续（天）</span><br>
						<strong>0</strong>
					</li>
				</ul>
			</div>

			<div class="active">
				<ul class="cont1">
					<li>
						<span>周目标</span><br>
						<em>当前无目标</em>
					</li>
					<li>设定目标</li>
				</ul>
				<ul class="cont2">
					<li>
						<em>-</em><br/>
						<span>周一</span>
					</li>
					<li>
						<em>-</em><br/>
						<span>周二</span>
					</li>
					<li>
						<em>-</em><br/>
						<span>周三</span>
					</li>
					<li>
						<em>-</em><br/>
						<span>周四</span>
					</li>
					<li>
						<em>-</em><br/>
						<span>周五</span>
					</li>
					<li>
						<em>-</em><br/>
						<span>周六</span>
					</li>
					<li>
						<em>-</em><br/>
						<span>周日</span>
					</li>
				</ul>

			</div>

			<div class="active2">
				<p>
					<img src="../../assets/wo-img/1.png">
					<span>今日步数</span>
				</p>
				<p>
					<strong>2500</strong>
					<span>步</span>
				</p>

			</div>

			<div class="bottom">
				<div class="bt">
					<mines>
						<p slot="tp" class="tp">
							<img src="../../assets/wo-img/2.png">
							<span>健身</span>
							<strong>WO</strong>
						</p>
						<ul slot="ww" class="ww">
							<li slot="left" class="left">
								<span>总时长</span><br>
								<strong>0<em>分钟</em></strong>
							</li>
							<li slot="right" class="right">
								<span>总消耗</span><br>
								<strong>0<em>千卡</em></strong>
							</li>
						</ul>
					</mines>
				</div>
				<div class="bt">
					<mines>
						<p slot="tp" class="tp">
							<img src="../../assets/wo-img/2.png">
							<span>跑步</span>
							<strong>RO</strong>
						</p>
						<ul slot="ww" class="ww">
							<li slot="left" class="left">
								<span>总距离</span><br>
								<strong>0<em>公里</em></strong>
							</li>
							<li slot="right" class="right">
								<span>最远距离</span><br>
								<strong>0<em>公里</em></strong>
							</li>
						</ul>
					</mines>
				</div>
				<div class="bt">
					<mines>
						<p slot="tp" class="tp">
							<img src="../../assets/wo-img/3.png">
							<span>瑜伽</span>
							<strong>YO</strong>
						</p>
						<ul slot="ww" class="ww">
							<li slot="left" class="left">
								<span>总时长</span><br>
								<strong>0<em>分钟</em></strong>
							</li>
							<li slot="right" class="right">
								<span>总次数</span><br>
								<strong>0<em>次</em></strong>
							</li>
						</ul>
					</mines>
				</div>
				<div class="bt">
					<mines>
						<p slot="tp" class="tp">
							<img src="../../assets/wo-img/2.png">
							<span>行走</span>
							<strong>HO</strong>
						</p>
						<ul slot="ww" class="ww">
							<li slot="left" class="left">
								<span>总距离</span><br>
								<strong>0<em>公里</em></strong>
							</li>
							<li slot="right" class="right">
								<span>最远距离</span><br>
								<strong>0<em>公里</em></strong>
							</li>
						</ul>
					</mines>
				</div>
				<div class="bt">
					<mines>
						<p slot="tp" class="tp">
							<img src="../../assets/wo-img/2.png">
							<span>骑行</span>
							<strong>CO</strong>
						</p>
						<ul slot="ww" class="ww">
							<li slot="left" class="left">
								<span>总距离</span><br>
								<strong>0<em>公里</em></strong>
							</li>
							<li slot="right" class="right">
								<span>最远距离</span><br>
								<strong>0<em>公里</em></strong>
							</li>
						</ul>
					</mines>
				</div>

			</div>

		</div>

	</div>
</template>

<script>
	import shujus from '../../components/shujus.vue'
	export default {
		data() {
				return {}
			},
			methods: {
              to(){
				console.log(11112)
				this.$router.push("/mine")
			   },    
			}
	}
</script>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}
	
	body {
		font-size: 12/50rem;
		font-family: helvetica;
	}
	
	.sizing {
		box-sizing: border-box;
	}
	/*头部样式*/
	
	#header {
		position: fixed;
		width: 100%;
		height: 50/50rem;
		background: rgb(58, 58, 58)!important;
		opacity: 0.8;
		line-height: 50/50rem;
		z-index: 99;
		float: left;
		padding-top: 10/50rem;
	}
	
	#header .left img {
		width: 35/50rem;
		height: 20/50rem;
		margin-left: -340/50rem;
	}
	/*内容开始*/
	
	#wrapper {
		border: px soild black;
		width: 100%;
		height: 800/50rem;
		background: #F5F5F5;
		position: relative;
		top: 50/50rem;
	}
	
	.top {
		width: 100%;
		height: 300px;
		background: rgb(58, 58, 58);
	}
	
	.list1 img {
		border: 2px solid white;
		width: 30px;
		height: 30px;
		border-radius: 30px;
	}
	
	.list1 {
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
	
	.list1 span {
		position: absolute;
		left: 5px;
		top: 5px;
		font-size: 24px;
		color: white;
	}
	
	.list1 em {
		position: absolute;
		right: 10px!important;
		top: 10px;
	}
	
	.list2 {
		position: relative;
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
	
	.list2 img {
		width: 30px;
		margin-top: 5px;
		margin-right: 10px;
	}
	
	.list2 span:nth-child(1) {
		position: absolute;
		left: 5px;
		top: 15px;
		font-size: 15px;
		color: white;
	}
	
	.list2 span:nth-child(2) {
		position: absolute;
		right: 35px;
		top: 15px;
		font-size: 15px;
		color: green;
	}
	
	.list2 em {
		position: absolute;
		right: -45px;
		top: 6px;
	}
	
	.list3 {
		position: relative;
		width: 100%;
		height: 50px;
		line-height: 50px;
		color: white;
	}
	
	.list3 strong {
		font-size: 28px;
		position: absolute;
		left: 5px;
		top: 15px;
	}
	
	.list3 span {
		font-size: 10px;
	}
	
	.list4 {
		position: relative;
		width: 100%;
		height: 50px;
		top: 25px;
		line-height: 30px;
		color: gray;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
	}
	
	.list4 strong {
		font-size: 20px;
		color: white;
		margin-left: -55px;
	}
	/**/
	
	.active {
		width: 90%;
		height: 160px;
		background: white;
		position: relative;
		top: -38px;
		left: 5%;
	}
	
	.cont1 {
		width: 100%;
		height: 50px;
		line-height: 30px;
		display: flex;
	}
	
	.cont1 li:nth-child(1) {
		margin-top: 15px;
	}
	
	.cont1 li:nth-child(1) span {
		font-size: 15px;
		margin-left: -7px;
	}
	
	.cont1 li:nth-child(1) em {
		color: gray;
		margin-left: 15px;
		font-size: 13px;
	}
	
	.cont1 li:nth-child(2) {
		position: absolute;
		right: 10px;
		top: 25px;
		/*border: 1px solid forestgreen;*/
		width: 85px;
		height: 25px;
		line-height: 25px;
		color: white;
		background: rgb(46, 200, 144);
		border-radius: 30px;
		font-size: 10px;
	}
	
	.cont2 {
		width: 100%;
		height: 80px;
		line-height: 10px;
		display: flex;
		justify-content: space-between;
		position: absolute;
		top: 85px;
		font-size: 14px;
		padding-left: 5px;
		padding-right: 5px;
	}
	
	.cont2 em {
		border: 1px solid gainsboro;
		width: 30px;
		height: 30px;
		display: block;
		border-radius: 30px;
		text-align: center;
		line-height: 30px;
	}
	
	.cont2 span {
		font-size: 10px;
		color: gainsboro;
	}
	
	.active2 {
		width: 90%;
		height: 80px;
		background: white;
		position: relative;
		top: -28px;
		left: 5%;
	}
	
	.active2 p:nth-child(1) {
		float: left;
		margin-top: 0px;
	}
	
	.active2 p:nth-child(1) img {
		width: 30px;
		margin-top: 15px;
	}
	
	.active2 p:nth-child(1) span {
		position: relative;
		top: -10px;
		font-size: 15px;
	}
	
	.active2 p:nth-child(2) {
		position: relative;
		top: 50px;
		left: -180px;
		font-size: 16px;
	}
	
	.active2 p:nth-child(2) span {
		font-size: 10px;
	}
	/*底部*/
	
	.bottom {
		width: 100%;
		height: 660px;
		background: #F5F5F5;
		position: relative;
		top: -25px;
	}
	
	.bt {
		width: 90%;
		height: 120px;
		background: white;
		margin-top: 10px;
		position: relative;
		left: 5%;
	}
	
	.tp {
		display: flex;
		margin: 5px;
		font-size: 15px;
	}
	
	.tp img {
		width: 30px;
		height: 30px;
	}
	
	.tp strong {
		border: 1px solid gainsboro;
		width: 35px;
		height: 20px;
		border-radius: 30px;
		margin-left: 20px;
		margin-top: 6px;
		font-size: 10px;
	}
	
	.tp span {
		margin-top: 6px;
		margin-left: 5px;
	}
	
	.ww {
		display: flex;
		justify-content: space-between;
	}
	
	.left {
		margin-top: 18px;
		margin-left: 10px;
	}
	
	.right {
		margin-top: 18px;
		margin-right: 130px;
	}
	
	.left span {
		font-size: 12px;
	}
	
	.left strong {
		font-size: 25px;
	}
	
	.left em {
		font-size: 10px;
	}
	
	.right span {
		font-size: 12px;
	}
	
	.right strong {
		font-size: 25px;
	}
	
	.right em {
		font-size: 10px;
	}
</style>