<template>
    <div class="wai">
        <div v-for="item in cinema" :key="item.id" class="wrap-con">
            <div class="tit" >
                <span>{{item.nm}}</span><span>{{item.sellPrice}}</span><span>元起</span>
            </div>
            <div class="addr"><div  class="adrr-tit">{{item.addr}} </div> <div class="dist">{{item.distance}}</div></div>
            <div class="labal-card">
                <div v-if="item.tag.allowRefund">退</div> <div v-if="item.tag.buyout"></div> <div v-if="item.tag.cityCardTag"></div> 
                <div  v-if="item.tag.deal"></div> <div  v-if="item.tag.endorse">改签</div>  <div  v-if="item.tag.hallType">{{item.tag.hallTypeVOList[0].name}}</div>
                <div v-if="item.tag.snack" class="vip-card">小吃</div><div v-if="item.tag.sell" class="vip-card">{{item.tag.vipTag}}</div>
            </div>
            <div class="open" v-if="item.promotion.cardPromotionTag">{{item.promotion.cardPromotionTag}}</div>
            <div class="changshu">近期场次 : 19:00</div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            cinema: []
        }
    },
    async  created(){
       this.getData()
    },
    async activated(){
         this.getData()   
    },
    methods:{
        async getData(){
            let data = await this.$http.post("/ajax/movie?forceUpdate=1568708230075");
            this.cinema = data.data.cinemas;
        }
    }
}
</script>

<style lang="scss" scoped>
    .wai{
        padding: 2% 1% 2% 4%;
    }

    .wrap-con{
        margin: 4% 0;
        width: 100%;
        border-bottom: 1px solid #ededed;
        padding: 0 0 2% 0; 
    }

    
       .wrap-con .tit{
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
       }




    .wrap-con .tit span:nth-of-type(1){
        color: #000;
    }

    .wrap-con .tit span:nth-of-type(2){
        font-size: 18px;
        color: #f03d37;
        margin: 0 1% 0 2%;
    }

    .wrap-con .tit span:nth-of-type(3){
        font-size: 12px;
        color: #f03d37;
    }

    .wrap-con .addr,
    .wrap-con .labal-card,
    .wrap-con .open,
    .wrap-con .changshu{
        margin: 2% 0 0 0;
        height: 18px;
        line-height: 18px;
    }


    .wrap-con .addr{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        color: #333;
    }

     .wrap-con .addr .adrr-tit{
             text-overflow: ellipsis;
             white-space: nowrap;
             overflow: hidden; 
       }

    .wrap-con .addr .dist{
        margin-right: 2%;
    }

    .wrap-con .labal-card{
        display: flex;
        color:  #589daf;
        font-size: 12px;
        
    }

     .wrap-con .labal-card>div{
         padding: 0 3px;
         border: 1px solid #589daf;
         border-radius: 2px;
         margin: 0 2px; 
     }

      .wrap-con .labal-card .vip-card{
          color: #f90;
          border: 1px solid #f90;
      }

      .wrap-con .open,
      .wrap-con .changshu{
          font-size: 12px;
          color: #999;
      }

      

</style>