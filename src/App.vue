<template>
  <div id="app">
    <!-- keep-alive标签的作用--当路由的内容被加载一次后，就会将路由的内容存储到内存中(不会再执行mounted（）方法，但会执行activated（）方法)，提升性能 -->

    <!-- //通过设置exclude将某个组件不进行缓存(填入组件的名字) -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
