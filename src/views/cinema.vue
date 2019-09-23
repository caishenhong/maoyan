<template>
      <div>
              <headtab :title="title"  :isBack="isback"></headtab>   
              <div class="nav-top">
                     <div class="position" @click="toCity"><span class="city-name">{{city}}</span><i class="iconfont icon-xiala"></i></div>
                     <input type="text" v-model="search">
                     <div class="search"><i class="iconfont icon-sousuo"></i><span>搜影院</span></div>
              </div>
              <title-head></title-head>
               <!-- 下面 -->
              <cinema-add></cinema-add>
             
              
              
       </div> 
</template>


<script>
import headTab from '@/components/component/headtab.vue'
import titleHead from '@/components/cinema/cinemaList.vue'
import cinemaAdd from '@/components/cinema/cinemaAdd.vue'
import {mapState} from 'vuex'
export default {
      name: "cinema",
       data(){
             return{
                    title: "影院",
                    isback: false,
                    search: "",
                    cinema: []
             } 
       },
       methods:{
               toCity(){
                     // console.log('点击跳转到城市页面')
                     this.$router.push('/city')
                     this.$store.commit("changeType",false)
              }
       },
        computed:{
            ...mapState(['city'])  
       },
       components:{
              "headtab":headTab,
              "title-head" : titleHead,
              "cinema-add" : cinemaAdd
       },
       // async activated(){
       //        let data = await this.$http("/ajax/cinemaList?day=2019-09-18&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1568807616833&cityId=30");
       //        this.cinema = data.data.cinemas;
              
       // }
}
</script>

<style lang="scss" scoped>
        .nav-top{
         
          color: #777;    
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 44px;
          margin-top: 50px;
          border-bottom: 1px solid #cdcdcd;
          background: #f5f5f5;
       }

          
       .nav-top .position{
              display: flex;
              color: #666;
              // margin-left: 4px;
              font-size: 15px;   
              align-items: center;
       }

       .nav-top .position .city-name{
              
              display: inline-block;
              min-width: 30px;
              max-width: 60px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
       }

          .nav-top .position i{
            
              font-size: 8px;
              margin-left: 4px;
       }

       .nav-top input[type="text"]{
              height: 29px;
              width: 195px;
              border-radius: 4px;
              margin: 0 15px 0 18px;
              outline: none;
              border: none;
       }

       .nav-top .search {
              position: absolute;
              font-size: 13px;
              color: #b2b2b2;
              margin: 0 0 0 25px;
       }
       .nav-top .search i{
              font-size: 13px;
       color: #b2b2b2;

       }

     

</style>