<template>
  <div>
    <div class="head">
      <div class="name">
        <p>员工管理平台</p>
      </div>
      <!--header-left开始-->
      <div class="header-left">
        <div class="home" @click="goto('msite')">
          <i class="iconfont icon-tubiao15"></i>
        </div>
        <!--main开始-->
        <div class="mine" @click="start" >
          <div :class="{changeColor}" @click="changeColor = !changeColor"> 
            <span>
              <i class="iconfont icon-iconfontzhizuobiaozhun0247"></i>我的门户
            </span>
          </div>
          <!--下拉菜单-->
            <div class="down" v-if="isshow">
              <div class="list">
                <li>
                  <span><i class="iconfont"></i>云服务</span>
                </li>
              </div>
            </div>
        </div>
        <!--main结束-->
        <!--mune开始-->
        <div class="mune" @click="down">
          <div class="shell" :class="{changeColor2}" @click="changeColor2 = !changeColor2">
            <div class="ico">
              <i class="iconfont icon-xitong-caidanguanli"></i>
            </div>
          </div>
          <div class="mune-down" v-if="show"></div>
        </div>
        <!--mune结束-->
      </div>
      <!--header-left结束-->
      <!--header-right开始-->
      <div class="header-right">

      </div>
      <!--header-right结束-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        isshow:false,
        show:false,
        changeColor:false,
        changeColor2:false
      }
      },
      methods:{
        goto(path){
          this.$router.push(path)
        },
        start(){
          this.isshow = !this.isshow
        },
        down(){
          this.show=!this.show
        }
      }
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .head
    position fixed
    width 100%
    height 55px
    background #0270C1
    line-height 55px
    .name
      float left
      width 195px
      height 55px
      background #008DF7
      text-align center
      p
        color white
        font-size 16px
    .header-left
      float left
      height 55px
      // width 200px
      .home
        width 40px
        height 55px
        margin-left 20px
        float left
        i 
          color white
          font-size 20px
      /*main开始 */
      .mine
        color white
        float left
        width 120px
        height 55px
        text-align center
        .changeColor
          color #11334E
          background white
        i 
          margin-right 8px
          font-size 18px
        span 
          font-size 15px4
        .down
          position absolute
          top 55px
          width 500px
          height 330px
          background white 
          border 1px solid rgba(0,0,0,.3)
          border-top none 
      /*main结束 */
      .mune
        float left
        width 35px
        height 55px
        .shell
          width 35px
          height 47px
          &.changeColor2
            background white
            .ico
              background white
              i 
                color #11334e
          .ico
            width 35px
            height 35px
            background #0267B2
            text-align center
            line-height 35px
            margin-top 8px
            i 
              color white
        .mune-down
          width 100px
          height 287px
          background white
          border 1px solid rgba(0,0,0,.3)
          border-top none 
    .header-right
      float right 
      height 55px
      width 200px
      background pink
</style>
