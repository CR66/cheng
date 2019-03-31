<template>
        
            <!-- <div data-am-widget="slider" class="am-slider am-slider-a1" data-am-slider='{"directionNav":false}' >
                <ul class="am-slides">
                    <li>
                            <img src="../assets/img/fl01.png">
                            <div class="pet_slider_font">
                                <span class="pet_slider_emoji"> (╭￣3￣)╭♡   </span>
                                <span>“大白”有望成为现实：充气机器人研究取得进展</span>
                            </div>
                            <div class="pet_slider_shadow"></div>
                    </li>
                    <li>
                            <img src="../assets/img/fl02.png">
                            <div class="pet_slider_font">
                                <span class="pet_slider_emoji"> []~(￣▽￣)~*　</span>
                                <span>已然魔性的雪橇犬哈士奇 —《雪地狂奔》</span>
                            </div>
                            <div class="pet_slider_shadow"></div>
                    </li>
                    <li>
                            <img src="../assets/img/fl03.png">
                            <div class="pet_slider_font">
                                <span class="pet_slider_emoji"> (｡・`ω´･)　</span>
                                <span>《星际争霸2:虚空之遗》国服过审!</span>
                            </div>
                            <div class="pet_slider_shadow"></div>
                    </li>
                </ul>
            </div>     -->
    <div data-am-widget="slider" class="am-slider am-slider-a1" data-am-slider='{"directionNav":false}'>
      <ul class="am-slides">
        <li
          v-for="item of baseUrl"
          :key="item._id"
        >
          <img :src="item.banner" alt=""/>
          <div class="text-box">
            <span>{{item.title}}</span>
            <span>{{item.sub_title}}</span>
          </div>
          <div class="pet_slider_shadow"></div>
        </li>
        
      </ul>

    </div>    
</template>
    
<script>
import Swipe from '../assets/js/swipe.js'

export default {
  data(){return {baseUrl:[
      {banner:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554543491&di=ad4c7f9b5bb1b996315349eeb56dc9f8&imgtype=jpg&er=1&src=http%3A%2F%2Fwx2.sinaimg.cn%2Flarge%2Fd2e27164gy1fbu8ho9ntgj21kw11ynpd.jpg',title:'(╭￣3￣)╭♡ ',sub_title:'“大白”有望成为现实：充气机器人研究取得进展'},
      {banner:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554542581&di=df04836a8cd289426654de00712895be&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.16xx8.com%2Fallimg%2F150527%2F2024593043-30.jpg',title:'(╭￣3￣)╭♡ ',sub_title:'“大白”有望成为现实：充气机器人研究取得进展'},
      {banner:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553948313389&di=47b44e165e28736e95d806b21fd27820&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5882b2b7d0a20cf482dd78e37d094b36acaf99b9.jpg',title:'(╭￣3￣)╭♡ ',sub_title:'“大白”有望成为现实：充气机器人研究取得进展'}
  ]}},
  props:['.am-slider-a1'],

  updated(){
    var mySwipe=new Swipe($('.am-slider-a1')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.am-slider-a1 ol li').removeClass('active');
        $('.am-slider-a1 ol li').eq(index).addClass('active');
      }
    })
  }
}
</script>


<style>
 ul,li { list-style: none; padding: 0; margin: 0}
.am-slider-a1 .am-control-nav li { position: relative;}
.am-slider-a1 .am-control-nav li a { background: #bcbcbc; opacity: .5;  }
.am-slider-a1 .am-control-nav li a:hover {}
.am-slider-a1 .am-control-nav li a.am-active { background: #bcbcbc;-webkit-box-shadow:none;box-shadow:none;  opacity: 1;}
.am-slider-a1 .am-control-nav {bottom: 18px; z-index: 2;}
.pet_slider_shadow { position: absolute;  background: url(../assets/img/flshadow.png) bottom no-repeat; -webkit-background-size: 100%;
background-size: 100%; width: 100%; height: 100%; bottom: 0; left: 0; z-index: 1;}
.pet_slider_font {position: absolute; bottom: 35px; left: 20px; z-index: 8; color: #fff;}
.pet_slider_emoji { display: block; font-size: 12px; }
</style>



