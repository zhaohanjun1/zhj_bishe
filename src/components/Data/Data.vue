<template>
  <div class="all">
    <Calendar></Calendar>
    <div class="ico">
      <span class="iconfont icon-add"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Calendar from 'vue-calendar-component';
  export default {
    components:{
      Calendar
    },
  

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .all
    width 378px
    height 379px
    background white
    margin-top 10px
    margin-right 15px
    position absolute
    right 0
    top 0
    .ico
      width 30px
      height 30px
      margin-left 180px
      span 
        color red
        font-size 30px

    

</style>
