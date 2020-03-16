<template>
  <div class="all">
    <div class="title">
      <span class="iconfont icon-biaoqian"></span>
      <span class="name">新闻动态</span>
    </div>
    <div class="new1">
        <div class="swiper"></div>
        <div class="font">
          <div class="new-title">
            <b>千人共聚，维森新一代移动办公平台体验会走入深圳</b>
          </div>
          <div class="new">
            <span>今天，维森新一代移动办公平台体验会落地深圳，千人共同体验维森新一代“智能化、平台化、全程电子化”的OA系统产品。  深圳作为一线城市，是全国经济中心之一，聚集了大批优秀行业伙伴，信息化需求旺盛。大会现场人山人海，座无虚席。</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'

  new Swiper('.swiper-container',{
    loop:true,
  })
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .all
    width 900px
    height 342px
    background white
    margin-top 10px
    padding 5px
    .title
      margin-top 10px
      border-bottom 1px solid #eee
      padding-bottom 15px
      .iconfont 
        color #008df7
        font-size 20px
        margin-left 10px
      .name
        font-size 20px
        color black 
        font-weight 900
        margin-left 10px
    .new1
      width 900px
      height 141px
      .swiper
        width 180px
        height 120px
        background red
        margin-left 15px
        margin-right 15px
        float left
      .font 
        .new-title
          margin-top 15px
          font-size 18px
          color #666666
        .new
          margin-top 10px
          font-size 13px
          display block
          width 905px
          line-height 35px
          color #696868
      

  
</style>
