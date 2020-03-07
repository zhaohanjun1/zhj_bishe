<template>
  <div class="all">
    <div class="title">
      <div>
        <span class="iconfont icon-biaoqian"></span>
        <span>流程中心</span>
      </div>
    </div>
    <div class="top">
      <li :class="{color}" @click="color = !color , color2 = false, color3 = false">
        <router-link to="/msite/daiban"><span>待办</span></router-link>
      </li>
      <li :class="{color2}" @click="color2 = !color2, color = false , color3 = false"> 
        <router-link to="/msite/yiban"><span>已办</span></router-link>
      </li>
      <li :class="{color3}" @click="color3 = !color3, color2 = false , color = false " >
        <router-link to="/msite/banjie"><span>办结</span></router-link>
      </li>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        color:true,
        color2:false,
        color3:false,
      }
    },
    methods:{
      if (color=true) {
        color2=false,
        color3=false
      }
    }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .all
    width 900px
    height 389px
    margin-top 20px
    border 5px solid white
    background white
    .title
      margin  10px 0 10px 0px
      font-size 20px
      font-weight 900
      border-bottom 1px solid #eee
      padding-bottom 10px
      vertical-align center
      .iconfont 
        color #008DF7
      span 
        margin-left 10px
    .top
      height 32px
      border-bottom 1px solid #eee
      line-height 20px
      li
        float left
        display block
        list-style none 
        margin-left 20px
        text-decoration none
        width 76px
        height 32px
        text-align center
        &.color
          border-bottom 1px solid #008DF7
          span 
            color #008DF7
        &.color2
          border-bottom 1px solid #008DF7
          span 
            color #008DF7
        &.color3
          border-bottom 1px solid #008DF7
          span 
            color #008DF7
        span 
          color #bdbdbd
          font-size 13px
</style>
