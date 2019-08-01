<template>
  <div>
          <div class="main">
            <theheader title="运动">
              <img src="../assets/sports/su_icon_search.png" alt="" slot="rightImg" class="right" />
              <img src="../assets/sports/tc_icon_kstar.png" alt="" slot="leftImg" class="left" />
            </theheader>
          </div>

      <Tabbar slot="bar">
            <yd-tab-panel name="" slot="list1" label="练课程">

            </yd-tab-panel>
            <yd-tab-panel slot="list5" label="">

            </yd-tab-panel>
            <yd-tab-panel slot="list6" label="">

            </yd-tab-panel>
             <yd-tab-panel slot="list2" label="练动作">

            </yd-tab-panel>
            <yd-tab-panel slot="list3" label="跑步">
                  <div id="wrapper">

                    	<div id="scroller">
                        <div class="bgc">
                    		<div class="box1">
                    			<div class="tu3"><img src="../assets/sports/微信图片_20190702153250.png" alt="" /></div>
                    			<ul>

                    				<li>
                    					<a href="#" class="ren">燃脂跑</a>
                    				</li>
                    				<li>|</li>
                    				<li>
                    					<a href="#">户外跑</a>
                    				</li>
                    				<li>|</li>
                    				<li>
                    					<a href="#">跑步机</a>
                    				</li>
                    			</ul>
                    		</div></div>
                    		<div class="var bgc">
                    			<div class="canjia">我的跑步课程</div>
                    			<div class="tianjia">添加课程后，可以在这里快速开始课程</div>
                    			<div class="faxiang">
                    				<a href="#">添加跑步课程</a>
                    			</div>
                    		</div>
                        <div class="var3">
                          <div class="protion">
                            <span class="ku">燃脂跑课程精选</span>
                            <span class="tu2"><img src="../assets/sports/icon_more.png" alt="" /></span>
                          </div>
                    			<ul>
                    				<li><img class="gl3" src="../assets/sports/微信图片_201907021532503.jpg" alt="" /></li>
                    				<li><img class="gl5" src="../assets/sports/_201907021532501.jpg" alt="" /></li>
                    			</ul>
                    		</div>
                    		 <div class="var3">
                    		  <div class="protion">
                    		    <span class="ku">燃脂跑课程精选</span>
                    		    <span class="tu2"><img src="../assets/sports/icon_more.png" alt="" /></span>
                    		  </div>
                    			<ul>
                    				<li><img class="gl3" src="../assets/sports/微信图片_201907021532505.jpg" alt="" />
                            <p class="shang">如何能够坚持跑步?</p>
                            <p class="xiang">7月先定一个小目标</p></li>
                    				<li><img class="gl5" src="../assets/sports/201907021532504.jpg" alt="" />
                            <p class="shang">让暑假不无聊</p>
                            <p class="xiang">游戏刷刷的过</p></li>
                    			</ul>
                    		</div>

                    		<div class="var6">
                          <div class="conp">
                    			<span class="ku">跑道辅助训练</span>
                          </div>
                    			<div><img src="../assets/sports/微信图片_201907021532506.jpg" alt="" /></div>

                    		</div>

                    		<div class="var7">
                          <div class="conp">
                    			<span class="ku">周好友跑步排名</span>
                          </div>
                    			<div>
                    				<ul>

                    					<img src="../assets/sports/1.jpg" alt="" /> <span class="ling">骑黑马的爱跳水的Ting</span><p><strong>8.22</strong>公里</p></li>
                    				</ul>
                    			</div>
                    			<p class="ck">查看排行榜</p>
                    		</div>


                      <div>
                        <div class="name">
                        <span class="ku">跑道辅助训练</span>
                        </div>
                    		<yd-list theme="4">
                            <yd-list-item v-for="(item, key) in list" :key="key" title="">
                                <img slot="img" :src="item.img">
                                <span slot="title">{{item.title}}</span>
                                <yd-list-other slot="other">
                                    <div>
                                        <span class="demo-list-price">{{item.mmap}}</span>

                                    </div>

                                </yd-list-other>
                            </yd-list-item>
                        </yd-list>
                      </div>

                        <div>
                          <div class="name">
                          <span class="ku">进阶跑步课程</span>
                          </div>
                        <yd-list theme="4" >
                            <yd-list-item v-for="(item, key) in list" :key="key" title="">
                                <img slot="img" :src="item.img2">
                                <span slot="title">{{item.title2}}</span>
                                <yd-list-other slot="other">
                                    <div >
                                        <span class="demo-list-price">{{item.mmap2}}</span>

                                    </div>

                                </yd-list-other>
                            </yd-list-item>
                          </yd-list>
                      </div>

                    		<div class="dibu"><a href="">-没有更多内容-</a></div>

                    	</div>
                    </div>
            </yd-tab-panel>
            <yd-tab-panel slot="list4" label="智能硬件">

            </yd-tab-panel>
       </Tabbar>

</div>
</template>

<script>
  import Tabbar from '../components/Tabbar.vue'

	import theheader from '../components/header.vue'
	export default {
		components: {
      Tabbar,
			theheader,
		},
    data(){
      return {
        list: [
                    {img:require("../assets/sports/微信图片_20190704185625.png"),img2:require("../assets/sports/微信图片_201907021537281.png"), title: "跑步打卡小分队",mmap:"备赛专用8周突破21公里",title2:"跑步秘籍.更快、更远、更安全",mmap2:"完美训练方案--提速、提距、不伤膝盖"},
                    {img:require("../assets/sports/微信图片_20190704185646.png"),img2:require("../assets/sports/微信图片_20190702153730.png"),title: "10公里突破",mmap:"备赛专用8周突破42公里",title2:"爱上跑步，享受跑步",mmap2:"跑步大神吴栋带你跑！"},
                    {img:require("../assets/sports/微信图片_20190704185625.png"),img2:require("../assets/sports/微信图片_20190702153729.png"),title: "半程马拉松集训",mmap:"里程进阶，5周打造超长耐力",title2:"跑步秘籍.怎样跑步不粗腿",mmap2:"姿势对，你也能跑出细腿翘臀！"}

                ]
      }
    }
	}
</script>

<style scoped lang="less">
.main{
  width: 100%;
  overflow: hidden;
}
.headerWrap  .left{
  right: 95/50rem;
}
.box1{
  position: relative;
  .tu3{
    width: 100%;
    padding-bottom: 30/50rem;
    img{
      width: 75%;
      height: 75%;
    }
  }
  ul{
    width: 75%;
    text-align: center;
    position: absolute;
    bottom: 15/50rem;
    display: flex;
    left: 50%;
    margin-left: -38%;
    li{
      flex: 1;
      font-size: 16/50rem;
      color: darkgrey;
    }
  }
}
.var{
  width: 100%;
  margin-top: 10/50rem;
  padding-bottom: 20/50rem;
  overflow: hidden;
 .canjia{
   color: black;
   float: left;
   margin: 12/50rem 12/50rem;

 }
 .tianjia{
   width: 100%;
  text-align: center;
  margin-top: 50/50rem;
 }
 div:nth-of-type(3){
   text-align: center;
   margin-top: 30/50rem;
   width: 60%;
   padding: 12/50rem;
   color: white;
   font-size: 16/50rem;

   border-radius: 20/50rem;
   background:#3cb371 ;
 }
}
.bgc{
  background-color: white;
}
.protion{
  width: 100%;
  height: 50/50rem;

  overflow: hidden;
  span{
    font-size: 14/50rem;
    float: left;
    margin: 12/50rem 12/50rem;
    line-height: 35/50rem;
    img{
      width: 35/50rem;
      height: 35/50rem;
      float: right;
      position: absolute;
      right: 20/50rem;
    }
  }
}
.var3{
  ul{
    display: flex;
    flex-wrap: nowrap;
    height: 120/50rem;
    overflow: scrolls;

    li{
        width: 100%;
        float: left;
        margin-left: 10/50rem;
        p{
          line-height: 22/50rem;
        }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
.conp{
  width: 100%;
  height: 50/50rem;
  span{
    font-size: 14/50rem;
    float: left;
    margin: 12/50rem 12/50rem;
    line-height: 35/50rem;
  }
}
.var6{
  margin-top:50/50rem;
  width: 100%;
  overflow: hidden;
  img{
    width: 95%;

  }
}
.var7{
  ul{
    width: 100%;
    height: 50/50rem;
    border-top :1px solid #ccc;
    border-bottom :1px solid #ccc;
    position: relative;


      img{
        width: 40/50rem;
        height: 40/50rem;
        border-radius: 50%;
        border: 2px solid #3cb371;
        float:left;
        position: absolute;
        left: 40/50rem;
        top: 3/50rem;
      }
      span{
        line-height: 50/50rem;
        float: left;
        width: auto;

        text-align: left;
      }
      p{
        line-height:50/50rem;

        strong{
          font-weight: normal;
          color: #3cb371;
          margin-right: 8/50rem;
        }
      }
  }
}.ck{
  padding: 20/50rem 0 20/50rem 0;
  font-size: 14/50rem;
}
.yd-list-title{
  span{
    line-height: 40/50rem;
    padding-left: 20/50rem;
  }
}
.ku{
  margin-left: 10/50rem;
}

 .yd-list-other{
  padding: 0;
div{
  padding: 0;
}
}
.demo-list-price{
  width: 218/50rem;
  display: block;
  text-align: left;
  margin-left: 0;
}
.name{
  width: 100%;
  height: 50/50rem;
  position: relative;
  span{
    font-size: 14/50rem;
    float: left;
    margin:12/50rem 12/50rem;
    line-height: 35/50rem;
    display: block;
    position: absolute;
  }
}
.dibu{
  padding: 20/50rem 0 20/50rem 0;
  a{
    color: #999;
    text-decoration: none;
    font-size: 13/50rem;

  }
}
</style>
