<template>
    <div>
        <cityhead></cityhead>
        <!-- <city-alapch></city-alapch> -->
        <city-list></city-list>


        
    </div>
</template>

<script>

import {mapSate} from 'vuex'
import Srcoll from 'better-scroll'
import cityList from '@/components/component/cityList.vue'

import cityhead from '@/components/component/cityHead.vue'
export default {
    data(){
        return{
           
        }
    },
    components:{
        cityList,
   
        cityhead
    },
    computed:{
        // ...mapSate([])
    },
  
}
</script>

<style lang="scss" scoped>

</style>