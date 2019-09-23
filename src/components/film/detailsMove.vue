<template>
     <div class="wrap1">
         <head-tab :title="list.nm" :isBack="isBack"></head-tab>
        
        <div v-if="list.img" class="bg" :style="{backgroundImage : 'url('+ list.img.replace('w.h','128.120') +')'}"></div>
        <div class="wrap"  >
            <div class="img">
                <img v-if="list.img" :src="list.img.replace('w.h','128.120')"   alt="">
            </div>
            <div class="con">
               
                    <div class="tit">{{list.nm}}</div>
                    <div class="enm">{{list.enm}}</div>
                    <div class="sc" v-if="list.sc"><span>{{list.sc}}</span></div>
                    <div class="sc" v-else-if="list.sc == false"><span>{{list.wish}}</span>人想看</div>
                    <div class="wish" v-show="list.sc" >({{list.wish}}万人评分)</div>
                    <div class="genre">{{list.cat}}</div>
                    <div class="time">{{list.src}}/{{list.dur}}</div>
                    <div class="sydate">{{list.pubDesc}}</div>
                
                
            </div>
          
        </div>
        <section>
            <div>
                <div class="buy"><a>特惠购票</a></div>
                <p></p>
                <div class="ze-btn"><i class="iconfont icon-xiala"></i></div>
            </div>
        </section>
    </div>
</template>

<script>
import headTab from "@/components/component/headtab.vue"
export default {
    data(){
        return{
            name: "detailsMove",
            title: "",
            isBack: true,
            list: []
        }
    },
    components:{
        headTab
    },
    async activated(){
        // this.$store.commit("changeType",false)
        let res = await this.$http('/ajax/detailmovie?movieId='+ window.sessionStorage.getItem("mineId"));
        this.list = res.data.detailMovie;   

       
    },

}
</script>

<style lang="scss" scoped>
    .wrap1{
        width: 100%;
        overflow-x: hidden;
        margin-top: 45px;
    }

    .bg{
        width: 320px;
        height: 160px;
        position: absolute;
        z-index: -1;
        filter: blur(30px);
         background-repeat: no-repeat;
        background-size: cover;
    }

    .wrap{
        display: flex;
        padding: 4% 2% 2% 4%;
    }

    .wrap .img {
        width: 34%;
    }

    .wrap .img img{
        width: 90%;
        vertical-align: middle;
        height: 90%;
        border: 2px solid #fff;
    }

    .wrap .con{
        width: 60%;
        margin: 0 0 0 4%;
    }

    .wrap .con .tit{
        font-size: 14px;
        color: #fff;
        font-weight: 500;
        margin: 0 2px 0 0;
    }

    .wrap .con .enm,
    .wrap .con .sc,
    .wrap .con .genre,
    .wrap .con .time,
    .wrap .con .sydate,
    .wrap .con .wish{
          margin:5px 0 0 0;
          font-size: 12px;
          color: #fff; 
     }

   

    .wrap .con .sc>span{
        color: #fc0;
        font-weight: 700;
        font-size: 15px;
    }

   
   
</style>