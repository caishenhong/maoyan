<template>
  <div id="app">
      <keep-alive>
        <router-view></router-view>
       
      </keep-alive>
       <tabbar>
       
      </tabbar>
      
  </div>
</template>

<script>
import Tabbar from "@/components/component/tabbar.vue";

export default {
    components:{
      Tabbar
    },
    
}
</script>

<style lang="scss">
    
</style>
