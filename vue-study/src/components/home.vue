<template>
  <div>
    <!--轮播图区域-->
    <!--采用Mint-UI制作的轮播图，需要为容器指定具体的盒子高度-->
    <mt-swipe :auto="3000">
      <!--<mt-swipe-item v-for="item in picList" :key="item.url">-->
        <!--<img :src="item.img" alt="">-->
      <!--</mt-swipe-item>-->
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <!--九宫格到六宫格的改造过程，使用MUI-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newList">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/sharePic">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
        <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/buyGoods">
        <span class="mui-icon mui-icon-chatbubble"></span>
        <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/comments">
        <span class="mui-icon mui-icon-location"></span>
        <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/video">
        <span class="mui-icon mui-icon-search"></span>
        <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/contectUs">
        <span class="mui-icon mui-icon-phone"></span>
        <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  // 获取数据
export default {
  name: 'home',
  data () {
    return {
      picList:[]
    }
  },
  created(){
    // this.getPicurl();
  },
  methods:{
    // getPicurl(){
    //   this.$http.get('...').then(data=>{
    //     if(data.body.status()==0){
    //       console.log('数据获取成功了');
    //       this.picList=data.body.message;
    //     }
    //     else{
    //       Toast("轮播图加载失败！")
    //     }
    //   })
    // }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe{
    height:160px;
  }
  .mint-swipe-item{
       background-color: greenyellow;
  }
  /*为了使图片100%显示*/
  img{
    width:100%;
    height:100%;
  }
</style>
