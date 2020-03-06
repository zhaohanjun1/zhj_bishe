<template>
  <div class="app">
    <div class="border">
      <div class="img" :style="backgroundDiv"></div>
      <Process></Process>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Process from '@/components/Process/Process.vue'
  export default {
    data(){
      return{
        backgroundDiv:{
          backgroundImage:'url('+ require('../../common/img/2.png')+')',
          backgroundRepeat:'no-repeat',
          // backgroundSize:'100% 100%' ,
          backgroundPosition:' -50px',
        }
      }
    },
    components:{
      Process
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
      width 100%
      height 100%
      background #E8EDF4
      padding 10px
      overflow hidden
      .img
        width 900px
        height 180px
        border 5px solid white

</style>
