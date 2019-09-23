<template>
    <div class="wrap1" >
        <head-tab :title="list.nm" :isBack="isBack"></head-tab>
       
            <div v-if="list.img" class="bg" :style="{backgroundImage : 'url('+ list.img.replace('w.h','128.120') +')'}"></div>
            <div class="wrap" @click="toMove(list)" >
                <div class="img">
                    <img v-if="list.img" :src="list.img.replace('w.h','128.120')" alt="">
                </div>
                 <div class="con">
               
                    <div class="tit">{{list.nm}}</div>
                    <div class="enm">{{list.enm}}</div>
                    <div class="sc" v-if="list.sc"><span>{{list.sc}}</span>({{list.snum}}万人评)</div>
                    <div class="sc" v-else=""><span>{{list.wish}}人想看</span></div>
                    <div class="genre">{{list.cat}}</div>
                    <div class="time">{{list.src}}/{{list.dur}}</div>
                    <div class="sydate">{{list.pubDesc}}</div>
                </div>
                <div class="pic"><i class="iconfont icon-xiala"></i></div>
            </div>

            <div class="date-over">
                <div class="date-show">
                    <div @click="toNow(item)" class="date-div" v-for="item in date" :key="item.id" :class="{'active':nowItem == item.date}">{{item.date}}</div>
                </div>
            </div>
            <cinema-list></cinema-list>
            <cinema-add></cinema-add>
    </div>

       
       
  
    
</template>

<script>
import headTab from "@/components/component/headtab.vue"
import cinemaList from '@/components/cinema/cinemaList.vue'
import cinemaAdd from '@/components/cinema/cinemaAdd.vue'
export default {
    data(){
        return{
               name: "details",
               title: "",
               isBack: true,
               id : window.sessionStorage.getItem("mineId") || this.$route.params.move,
               list:[],
                date:[
                    {date: "今天9月18日"}, { date: "明天9月19日" , id : 1}, { date: "后天9月20日", id : 2},{ date: "周六9月21日" , id : 3},{ date: "周日9月23日", id : 4},{ date: "下周一9月24日", id : 5}
                ],
                nowItem: "今天9月18日",
                cinema: []
                
        }
    },
    components:{
        headTab,
        cinemaList,
        cinemaAdd
    },
    methods:{
        toMove(item){
            window.sessionStorage.setItem('mineId',item.id)
            this.$router.push({
                name: 'detailsMove',
                params:{
                    item: item.id
                },
               
            })
            this.$store.commit("changeType",false)
        },
        toNow(item){
            this.nowItem = item.date
        }
    },

    created(){
       
    },
    async activated(){
        this.$store.commit("changeType",false)
        let res = await this.$http('/ajax/detailmovie?movieId='+ window.sessionStorage.getItem("mineId"));
        this.list = res.data.detailMovie;   

       
    },
    mounted(){
         
       
    },
    async deactivated(){
        
    }
}
</script>

<style lang="scss" scoped>

    .active{
        color: #f03d37;
        border-bottom: 2px solid #f03d37;
    }

    .wrap1{
        // width: 100%;
        // box-sizing: border-box;
        // overflow: hidden;
        margin-top: 45px;
    }

   

    .bg{
        width: 100%;
        height: 140px;
        position: absolute;
        z-index: -1;
        filter: blur(15px);
         background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }

    .wrap{
        overflow: hidden;
         position: relative;
        width: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 4% 2% 2% 3%;
       
    }

    .wrap .img {
        width: 32%;
        // display: flex;
        
        
    }

    .wrap .img img{
        width: 100%;
        vertical-align: middle;
      
    }

    .wrap .con{
         box-sizing: border-box;
        width: 48%;
        margin: 0 0 0 4%;
    }

    .wrap .con .tit{
        font-size: 20px;
        color: #fff;
        font-weight: 500;
        margin: 0 2px 0 0;
    }

    .wrap .con .enm{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .wrap .con .enm,
    .wrap .con .sc,
    .wrap .con .genre,
    .wrap .con .time,
    .wrap .con .sydate{
          margin:5px 0 0 0;
          font-size: 12px;
          color: #fff; 
     }

   

    .wrap .con .sc>span{
        color: #fc0;
        font-weight: 700;
        font-size: 18px;
    }

    .wrap .pic{
      display: flex;
      justify-content: center;
      align-items: center;
      transform: rotate(-90deg);
      margin: 0 0 0 1%;
      width: 6%;
      color: #777;
    }    
    
   .date-over{
       
   }
    
    .date-over .date-show{
      
        position: relative;
        box-sizing: border-box; 
        width: 100%;
        display: -webkit-flex;
        display: flex;
        //  overflow: hidden;
        overflow: auto;
       
        background: #fff;
        border-bottom: 1px solid #ededed;
      
    }
    
    .date-over .date-show::-webkit-scrollbar{
       
        width: 0px;
        height: 0px;
    }

    .date-over .date-show .date-div{
        flex-shrink: 0;
        width: 115px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin: 0 0 0 4%;
        font-size: 14px;
         margin: 2px 0 0 0;
        
         
    }

  

  
   
   
</style>