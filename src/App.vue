<template>
  <div>
    <Header></Header>
    <Loader></Loader>
    <router-view></router-view>
    
  </div>
</template>
<script type="text/ecmascript-6">
  import Header from '@/components/Header/Header.vue' 
  import Loader from '@/components/Loader/Loader.vue'
  export default {
    components:{
      Header,
      Loader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


</style>
