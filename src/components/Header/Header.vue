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
        <div class="mine">
          <div @click="start">
            <div :class="{changeColor}" @click="changeColor = !changeColor">
              <span>
                <i class="iconfont icon-iconfontzhizuobiaozhun0247"></i>我的门户
              </span>
            </div>
          </div>
          <!--下拉菜单-->
          <transition name="down">
            <div class="down" v-if="isshow">
              <div class="list">
                <li>
                  <span>
                    <i class="iconfont"></i>云服务
                  </span>
                </li>
              </div>
            </div>
          </transition>
        </div>
        <!--main结束-->
        <!--mune开始-->
        <div class="mune">
          <div @click="down">
            <div class="shell" :class="{changeColor2}" @click="changeColor2 = !changeColor2">
              <div class="ico">
                <i class="iconfont icon-xitong-caidanguanli"></i>
              </div>
            </div>
          </div>
          <transition name="mune-down">
            <div class="mune-down" v-if="show">
              <div class="mune-list">
                <li class="a" v-for="item in items">{{item}}</li>
              </div>
            </div>
          </transition>
        </div>
        <!--mune结束-->
        <!--input开始-->
        <div class="input">
          <div class="input1" @click="none">
            <div class="search"> <span>微搜</span></div>
            <div class="line"></div>
            <input type="text" placeholder="请输入关键词搜索"/>
            <span class="iconfont icon-fangdajing"></span>
          </div>
        </div>
        <!--input结束-->
      </div>
      <!--header-left结束-->
      <!--header-right开始-->
      <div class="header-right">
        <div class="schedule" @click="put">
          <div><p class="iconfont icon-rili ico1"></p></div>
          <transition name="fade">
            <div class="schedule-down" v-show="show1">
              <div class="title">
                <span><i class="iconfont icon-rili ico"></i></span>
                <div class="data">{{nowDate+''+nowWeek}}</div>
              </div>
              <div class="clock"></div>
            </div>
          </transition>
        </div>
        <div class="news">
          <div class="news-ico"><span class="iconfont icon-Pathx"></span></div>
        </div>
        <div class="structure">
          <div class="structure-ico"><span class="iconfont icon-jiegousheji"></span></div>
        </div>
        <div class="person">
          <div @click="person_down">
            <div class="person-ico" :class="{changeColor3}" @click="changeColor3 = !changeColor3">
              <span class="iconfont icon-yonghu"></span>
              <span class="peo">赵含钧</span>
              <span class="iconfont icon-jiantouxia arrow"></span>
            </div>
          </div>
          <transition name="person">
            <div class="person-down" v-if="person_show"></div>
          </transition>
        </div>
      </div>
      <!--header-right结束-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isshow: false,
      show: false,
      show1:false,
      person_show:false,
      changeColor: false,
      changeColor2: false,
      changeColor3: false,
      nowDate:"",//当前日期
      nowWeek:"",//当前日期
      items:[
        '任务监控',
        '新建文档',
        '查询资产',
        '电子邮件',
        '测试',
        '新建流程',
      ]
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    start() {
      this.isshow = !this.isshow;
      this.show = false;
      this.person_show= false
      this.changeColor2 = false;
      this.changeColor3 = false
      this.show1 = false
    },
    down() {
      this.show = !this.show;
      this.isshow = false;
      this.show1 = false
      this.person_show = false
      this.changeColor = false;
      this.changeColor3 = false
      this.show1 = false
    },
    put(){
      this.show1 = !this.show1
      this.show = false
      this.ishsow = false
      this.person_show = false
      this.changeColor = false
      this.changeColor2 = false
      this.changeColor3 = false
    },
    person_down(){
      this.person_show = !this.person_show
      this.show = false
      this.show1 = false
      this.isshow = false
      this.changeColor = false
      this.changeColor2 = false
    },
    none(){
      this.person_show = false
      this.show = false
      this.show1 = false
      this.isshow = false
      this.changeColor = false
      this.changeColor2 = false
      this.changeColor3 = false
    },
    currenTime(){
      setInterval(this.getData,500)
    },
    getData(){
      var _this = this
      let yy = new Date().getFullYear()
      let mm = new Date().getMonth() + 1
      let dd = new Date().getDate()
      let week = new Date().getDay()
      if (week == 1) {
        this.nowWeek = "星期一"
      }else if (week = 2) {
        this.nowWeek = "星期"
      }
      else if (week = 3) {
        this.nowWeek = "星期三"
      }
      else if (week = 4) {
        this.nowWeek = "星期四"
      }
      else if (week = 5) {
        this.nowWeek = "星期五"
      }
      else if (week = 6) {
        this.nowWeek = "星期六"
      }
      else if (week = 7) {
        this.nowWeek = "星期日"
      }
      _this.nowDate = yy + "/" + mm + "/" + dd
    },
  },
  mounted(){
    this.currenTime()
  },
  beforeDestroy(){
    if (this.getData) {
      console.log("销毁定时器");
      clearInterval(this.getDate)
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.head
  position: fixed;
  width: 100%;
  height: 55px;
  background: #0270C1;
  line-height: 55px;
  .name
    float: left;
    width: 195px;
    height: 55px;
    background: #008DF7;
    text-align: center;
    p 
      color: white;
      font-size: 16px;
  .header-left 
    float: left;
    height: 55px;
    // width 200px
    .home 
      width: 40px;
      height: 55px;
      margin-left: 20px;
      float: left;
      i 
        color: white;
        font-size: 20px;
    /* main开始 */
    .mine 
      color: white;
      float: left;
      width: 120px;
      height: 55px;
      text-align: center;
      .changeColor 
        color: #11334E;
        background: white;
      i 
        margin-right: 8px;
        font-size: 18px;
      span 
        font-size: 15px 4;
      .down 
        position: absolute;
        top: 55px;
        width: 500px;
        height: 330px;
        background: white;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-top: none;
      .down-enter-active, .fade-leave-active 
        transition: all 0.3s;
      .down-enter, .fade-leave-to 
        height 0
    /* main结束 */
    /* mune开始 */
    .mune 
      float: left;
      width: 35px;
      height: 55px;
      .shell 
        width: 35px;
        height: 47px;
        &.changeColor2 
          background: white;
          .ico 
            background: white;
            i 
              color: #11334e;
        .ico 
          width: 35px;
          height: 35px;
          background: #0267B2;
          text-align: center;
          line-height: 35px;
          margin-top: 10px;
          i 
            color: white;
      .mune-down 
        width: 100px;
        height: 200px;
        background: white;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-top: none;
        padding-top 10px
        .mune-list
          .a
            height 32px
            list-style none
            // margin-left 15px
            text-align center
            line-height 32px
            color #656b72
          .a:hover{
            color #494d52
            background #eaeaea
          }
      .mune-down-enter-active, .mune-leave-active 
        transition: all 0.3s;
      .mune-down-enter, .mune-leave-to 
        height 0
    /* mune结束 */
    .input
      margin-left 15px
      float left
      // width 200px
      height 55px
      line-height 55px
      .input1
        height 35px
        background #0267b2
        margin-top 10px
        line-height 35px
        .search
          float left
          color white
          width 60px
          height 35px
          background #0267b2
          text-align center
          line-height 35px
        .line
          float left
          width 0.5px
          height 15px
          background rgba(255,255,255,0.3)
          margin-top 10px
          margin-right 8px
        input 
          height 35px
          background #0267b2
          border none 
          outline none 
          color white
          width 190px
        input::-webkit-input-placeholder
          color rgba(255,255,255,.3)
        .iconfont
          color white
          margin-right 15px
  .header-right
    float: right;
    height: 55px;
    margin-right 10px
    .schedule
      width 20px
      height 55px
      float left
      .ico1
        font-size 20px
        color white
    .schedule-down
      position absolute
      right  210px
      width 298px
      height 287px
      border 1px solid rgba(0,0,0,0.1)
      background white
      //title开始
      .title
        width 100%
        height 50px
        line-height  50px
        border-bottom 1px solid rgba(0,0,0,.1)
        .ico
          color #61a8f5
          font-size 25px
          margin 5px 0 0 10px
          float left
        .data
          color black 
          font-size 15px
          float left
          margin 5px 0 0 10px
      //titel结束
      .clock
        width 100%
        height 190px
        border-bottom 1px solid rgba(0,0,0,.1)
    .fade-enter-active, .fade-leave-active 
      transition all 0.3s
    .fade-enter, .fade-leave-to 
      width 0
      height 0
      opacity 0
    .news
      width 18px
      height 55px
      float left
      margin-left 20px
      .news-ico
        span
          color white
    .structure
      width 18px
      height 55px
      float left
      margin-left 10px
      .structure-ico
        span 
          color white
          font-size 18px
    .person
      width 122px
      height 55px
      float right 
      margin-left 15px
      .person-ico
        height 55px
        &.changeColor3
          background white
          span 
            color #11334e
        span  
          color white
          margin-left 10px
        .peo
          font-size 15px
        .arrow
          font-size 10px
      .person-down
        position absolute
        right 10px
        top 55px
        width 282px
        height 241px
        border 1px solid rgba(0,0,0,.1)
        border-top none
        background white
      .person-enter-active, .person-leave-active 
        transition: all 0.3s;
      .person-enter, .person-leave-to 
        height 0  
        width 0
</style>
