<template>
  <div class="wrapper">
    <!-- 当list不为空的时候才创建swiper -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img"
        :src="item.imgUrl"></img>
      </swiper-slide>
      
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props:{
      swiperList:Array
    },
    data() {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
          loop:true,
          
        },
      }
    },
    computed:{
      showSwiper(){
        return this.swiperList.length
      }
    }
    
  }
</script>

<style lang="stylus" scoped>
.wrapper
/*让swiper保持一定宽高比最标准的写法 */
  overflow:hidden
  width :100%
  height:0px
  padding-bottom:31.25%

.swiper-img
  width: 100%
</style>
