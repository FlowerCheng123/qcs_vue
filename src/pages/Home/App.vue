<template>
  <div id="app">
    <div class="page">
      <div class="page__bd" style="height: 100%;">
          <div class="weui-tab">
              <div class="weui-tab__panel">
                  <transition name="slide-right">
                      <router-view class="view"></router-view>
                  </transition>
              </div>
              <div class="weui-tabbar">
                  <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                      <img src="../../assets/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                      <p class="weui-tabbar__label"><router-link to="/">微信</router-link></p>
                  </a>
                  <a href="javascript:;" class="weui-tabbar__item">
                      <img src="../../assets/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                      <p class="weui-tabbar__label"><router-link to="/foo">通讯录</router-link></p>
                  </a>
                  <a href="javascript:;" class="weui-tabbar__item">
                      <img src="../../assets/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                      <p class="weui-tabbar__label"><router-link to="/bar">发现</router-link></p>
                  </a>
                  <a href="javascript:;" class="weui-tabbar__item">
                      <img src="../../assets/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                      <p class="weui-tabbar__label"><router-link to="/tab">我</router-link></p>
                  </a>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
