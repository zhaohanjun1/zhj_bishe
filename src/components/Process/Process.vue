<template>
  <div class="all">
    <div class="title">
      <span>流程中心</span>
    </div>
    <div class="top">
      <li v-for="(item, index) in items" :class="{bg:index==activeIndex}"
      @click="fn(index)">{{item}}</li>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        activeIndex:'',
        items:['待办','已办','办结'],
      }
    },
    methods:{
      fn(index){
        this.activeIndex = index
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
      span 
        margin-left 10px
    .top
      height 32px
      border-bottom 1px solid #eee
      li
        float left
        margin 5px 0 0 0px
        list-style none
        display block
        width 76px
        height 28px
        color rgb(189, 189, 189)
        text-align center
        &.bg 
          color rgb(51, 147, 252)
          border-bottom 1px solid rgb(51, 147, 252);
</style>
