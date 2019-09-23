<template>
      <div class="mine">
             <headtab :title="title"  :isBack="isback"></headtab>        
              <login></login>
            </div> 
</template>

<script>
import headTab from '@/components/component/headtab.vue'
import login from '@/components/mine/login.vue'
export default {
      name: "mine",
       data(){
             return{
                    title: "我的",
                    isback: true
             } 
       },
       methods:{

       },
       components:{
              "headtab":headTab,
               login,
       }
}
</script>

<style lang="scss">

</style>