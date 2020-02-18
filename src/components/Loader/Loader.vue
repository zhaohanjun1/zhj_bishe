<template>
  <div class="all">
    <div class="btn1" :class="{on: $route.path==='/msite'}" @click="goto('/msite')">
      <p><i class="iconfont icon-gerenmenhu"></i>个人门户</p>
    </div>
    <div class="btn2" :class="{on: $route.path==='/order'}" @click="goto('/order')">
      <p><i class="iconfont icon-gongsimingcheng"></i>公司门户</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'Loader',
    methods:{
      goto(path){
        this.$router.push(path)
      }
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .all
    position fixed
    z-index -1
    width 195px
    height 710px
    background #2A2E35
    margin-top 55px
    display block
    .btn1, .btn2
      width 100%
      height 42px
      line-height 42px
      // text-align center
      color rgba(255,255,255,0.8)
      padding 5px 0
      font-size 12px
      &.on
        background  #636c7c
      i 
        margin-left 35px
        margin-right 25px
        font-size 18px
</style>
