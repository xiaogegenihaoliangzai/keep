<template>
	<div>
		<div id="header">
			<ul>
				<li class="left">
					<a>我</a>
				</li>
				<li class="right">
					<a><img src="../../static/wo-img/icon_setting_lined_dark.png"></a>
					<a><img src="../../static/wo-img/icon_scan_lined_dark.png"></a>
					<a><img src="../../static/wo-img/fd_ic_login_dialog_email.png"></a>
				</li>
			</ul>
		</div>
		<div id="wrapper">
			<a href="person.vue">
				<div class="top">
					<ul class="top-1">
						<li class="tu"><img src="../../static/wo-img/travel-show_02.jpg"></li>
						<li class="zi">
							<p>知识渊博的图样图森破</p><br>
							<p>
								<span><img src="../../static/wo-img/fd_icon_grade.9.png"></span>
								<span>0徽章</span>
							</p>
							<strong>KG.0</strong>
						</li>
					<li class="logo"><img src="../../static/wo-img/ic_portrait_training_right_on.png"></li>
					</ul>

					<ul class="top-2">
						<li>
							<span>0</span><br>
							<strong> 关注</strong>
						</li>
						<li>
							<span>0</span><br>
							<strong>  粉丝</strong>
						</li>
						<li>
							<span>0</span><br>
							<strong> 动态</strong>
						</li>
						<li>
							<span>0</span><br>
							<strong> 卡路里币</strong>
						</li>
					</ul>
				</div>
			</a>
			<div class="top">
				<ul class="top-1">
					<li class="tu"><!--<img src="../static/wo-img/travel-show_02.jpg">--></li>
					<li class="zi">
						<p>知识渊博的图样图森破</p><br>
						<p>
							<span><!--<img src="../static/wo-img/fd_icon_grade.9.png">--></span>
							<span>0徽章</span>
						</p>
						<strong>KG.0</strong>
					</li>
					<li class="logo"><!--<img src="../static/wo-img/ic_portrait_training_right_on.png">--></li>
				</ul>

				<ul class="top-2">
					<li>
						<span>0</span><br>
						<strong> 关注</strong>
					</li>
					<li>
						<span>0</span><br>
						<strong>  粉丝</strong>
					</li>
					<li>
						<span>0</span><br>
						<strong> 动态</strong>
					</li>
					<li>
						<span>0</span><br>
						<strong> 卡路里币</strong>
					</li>
				</ul>
			</div>
			<div class="active1">
				<ul>
					<li>
						<img src="../../static/wo-img/webwxgetmsgimg.jpg"> 我的课程
					</li>
					<li>
						<img src="../../static/wo-img/Snipaste_2019-07-04_16-48-06.png"> 我的活动
					</li>
					<li>
						<img src="../../static/wo-img/webwxgetmsgimg2.jpg"> 我的硬件
					</li>
				</ul>
				<p><img src="../../static/wo-img/253582193.jpg"></p>
			</div>
		</div>
		<div class="active2">
				<p>
					<span>我的运动数据</span>
					<img src="../../static/wo-img/ic_music_more.png">
				</p>
				<p>
					<span>总运动</span><strong>(分钟)</strong>
					<span>本周消耗</span><strong>(千卡)</strong>
				</p>
				<p>
					<span>0</span>
					<span>0</span>
				</p>
		</div>

			<div class="active3">
				<p>
					<span class="ww">我的身体数据<img src="../../static/wo-img/fd_icon_eye_lined.png"></span>
					<span class="tt"><img src="../../static/wo-img/ic_music_more.png"></span>
				</p>
				<p>
					<span>160.0<strong>身高cm</strong></span>
					<span>49.0<strong>体重kg</strong></span>
				</p>
			</div>

     <div class="list">
			<mines >
				<i class="fa fa-star-o" aria-hidden="true"slot="left" ></i>
               <!-- <img src="../../static/wo-img/ic_collect_preview.png" slot="left"/>   -->
				<p slot="center">我的收藏</p>
			    <img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines >
				<i class="fa fa-file-text-o" aria-hidden="true"slot="left" ></i>
                <p slot="center">草稿箱</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines >
               <i class="fa fa-female" aria-hidden="true"slot="left" ></i>
               <p slot="center">身体测试</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines >
                <i class="fa fa-user-circle" aria-hidden="true"slot="left" ></i>
                 <p slot="center">我的Keepland</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines >
                <i class="fa fa-suitcase" aria-hidden="true"slot="left" ></i>  
                <p slot="center">我的钱包</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines title="草稿箱">
                <i class="fa fa-file-text-o" aria-hidden="true"slot="left" ></i>
                <p slot="center">我的订单</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines title="身体测试">
               <i class="fa fa-cart-arrow-down" aria-hidden="true"slot="left" ></i>
               <p slot="center">我的购物车</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines title="我的Keepland">
                 <i class="fa fa-superpowers" aria-hidden="true"slot="left" ></i>
                <p slot="center">我的卡路里工厂</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines title="身体测试">
              <i class="fa fa-heart-o" aria-hidden="true"slot="left" ></i>
               <p slot="center">领取七夕大礼包</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
			<mines title="我的Keepland">
               <i class="fa fa-share-alt" aria-hidden="true"slot="left" ></i>
                <p slot="center">帮助中心</p>
				<img src="../../static/wo-img/ic_portrait_training_right_on.png" slot="right" />
			</mines>
	</div>
		
	</div>		
 

</template>

<script>
	import mines from '../components/mines.vue'
	import 'font-awesome/css/font-awesome.min.css'
	export default {
		props:['title'],
		data() {
			return {}
		},
		methods: {},
		components: {
			mines
		}

	}
</script>

<style scoped="scoped" lang="less">

</style>