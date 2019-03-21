<template>
  <div id="app">
    <!--顶部固定区-->
    <mt-header fixed title="头部固定区"></mt-header>
    <!--中间view区-->
    <!--通过router-view来展示通过路由切换的页面-->
    <div class="wrap">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <!--底部Tabbar区-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/vip">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
// console.log(123)
</script>
<style>
  *{
    padding:0px;
  }
  .wrap{
    padding:45px 10px;
    width:100%;
    height: 667px;
    overflow-x: hidden;
  }
  #app{
    background-color: white;
  }
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position:absolute;
  }
  .v-enter-active,.v-leave-active{
    transition: all 0.5s ease;
  }
</style>
