<template>
  <div>
    <div class="header">
      <div class="header-left ">
        <div class="iconfont back-icon">&#xe624</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632</span>
        输入城市景点游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.currentCity}}
          <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name:"HomeHeader",
    computed:{

      //将vuex中的数据映射到计算属性中，组件中可以直接使用计算属性了
      // ...mapState(['city'])
      ...mapState({
        currentCity:'city'
      })
    },
  }
</script>

<!--<style lang="stylus" scoped>-->

  <!--.header-->
  <!--display: flex-->
  <!--height: .86rem;-->
  <!--background: red;-->

  <!--.header-left-->
  <!--width: .64rem-->

  <!--float: left-->

  <!--.header-input-->
  <!--flex: 1-->

  <!--.header-right-->
  <!--width : 1.24-->


  <!--</style>-->

<!-- 1rem = html font-size = 5-px -->
  <style lang="stylus" scoped>
  @import '~styles/varibles'
  // @import '../../../assets/styles/varibles'



  .header {
    background-color: $bgColor;
    display: flex;
    line-height: .86rem;
    color: #fff;
  }

  .header-right{
    color:white
  }

  .header-left {
    width: .64rem;
    float: left;
  }

  .back-icon {
    text-align: center;
    font-size: .4rem;
  }

  .header-input {
    flex: 1;
    background: #fff;
    border-radius: .1rem;
    margin-top: .12rem;
    line-height: .64rem;
    height: .64rem;
    margin-left: .2rem;
    color: #ccc;
    padding-left: .2rem;
  }

  .header-right {
    min-width: 1.04rem;
    padding:0 .1rem
    float: right;
    text-align: center;

  }

  .arrow-icon {
    margin-left: -.04rem;
    font-size: .24rem;
  }


</style>
