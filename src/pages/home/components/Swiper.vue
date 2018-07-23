<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
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
    data() {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
          loop:true
        },
        swiperList:[{
          id:'0001',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1807/b6/23980fda69a67d02.jpg_750x200_8830c8e2.jpg'
        },
        {

          id:'0002',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
        },
        {

          id:'0003',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1807/5e/cfee2e9e2f357202.jpg_750x200_b0308a43.jpg'
        }
        
        

        ]
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
