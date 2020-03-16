<template>
  <div class="app">
    <div class="border">
      <div class="img" :style="backgroundDiv"></div>
      <News></News>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import News from '@/components/News/News.vue'
  export default {
    data(){
      return{
        backgroundDiv:{
          backgroundImage:'url('+ require('../../common/img/3.jpg')+')'
        }
      }
    },
    components:{
      News
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';
  //清除默认样式
  @import '../../common/stylus/reset.css';
.app
    position absolute
    z-index -1
    left 195px
    top 55px
    .border
      width 1310px
      height 100%
      background #E8EDF4
      padding 10px
      overflow hidden
      .img
        width 900px
        height 180px
        border 5px solid white

</style>
