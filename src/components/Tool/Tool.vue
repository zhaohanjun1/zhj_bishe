<template>
  <div class="all">
    <div class="title">
      <span class="iconfont icon-biaoqian"></span>
      <span class="name">常用工具</span>
    </div>
    <div class="main">
      <div class="blo" v-for="item in items" :key="item.id">
        <span class="iconfont" :style="item.iconBg">{{item.iconContent}}</span>
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        items:[
          {
            id:'001',
            name:'费用报销',
          },
          {
            id:'002',
            name:'合同起草',
          },
          {
            id:'003',
            name:'发文拟稿',
          },
          {
            id:'004',
            name:'内部请示',
          },
          {
            id:'005',
            name:'CRM',
          },
          {
            id:'006',
            name:'人力资源',
          },
          {
            id:'007',
            name:'财务系统',
          },
          {
            id:'008',
            name:'销售系统',
          },
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .all
    position absolute
    right 14px
    top 400px
    width 378px
    height 220px
    background white
    .title
      height 42px
      width 100%
      line-height 42px
      padding 0px 0 0 15px
      border 1px solid #eee
      .iconfont
        font-size 20px
        color #0270C1
      .name
        font-size 20px
        color black 
        margin-left 10px
        font-weight 900
    .main
      width 380px
      height 178px
      display flex
      flex-wrap wrap
      .blo
        width 93px
        height 89px
        line-height 89px
        text-align center
        border 1px solid #eee

</style>
