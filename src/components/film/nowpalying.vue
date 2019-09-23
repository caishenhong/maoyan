<template>
     <ul id="list" ref="scrollUl">
        <li v-for="val in movelist" :key="val.id" @click="toDetails(val)">
            <div class="wrap">
                <div class="wrap-img">
                    <img :src="val.img.replace('w.h','128.180')" alt="">
                </div>
                <div class="wrap-d">
                    <div class="wrap-con">
                    <div class="wrap-tit">{{val.nm}}</div>
                    <div class="wrap-grd" v-if="val.globalReleased && val.sc">
                        <span>观众评分</span><span class="grad">{{val.sc}}</span>
                    </div>
                    <div class="wrap-grd" v-else-if="val.globalReleased">
                        <span>暂无评分</span>
                    </div>
                    <div class="wrap-grd" v-else>
                        <span class="grad">{{val.wish}}</span><span>人想看</span>
                    </div>
                    <div class="wrap-zy">主演:<span>{{val.star}}</span></div>
                    <div class="wrap-show">{{val.showInfo}}</div>
                </div>
                <div class="wrap-btn">
                    <span :style="{background: val.globalReleased? 'red':'blue'}">
                            {{val.globalReleased? '购票':'预售'}}
                         </span>
                </div>
                </div>
            </div>

        </li>
    </ul>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data(){
        return{
            name: "nowpalying",
            movelist:[],
            onScrollType: true, //设置一个状态
            moveLength: "", //存储长度
            moveIds: [],//c存储id
            total: 0
        }
    },
    async created(){
        this.getData();
       
        let _this = this;
        
        window.onscroll = async function(){
            // console.log(_this.$refs.scrollUl.offsetHeight)
            if(document.documentElement.scrollTop + window.innerHeight >= _this.$refs.scrollUl.offsetHeight && _this.onScrollType && _this.movelist.length != _this.total ){
                _this.onScrollType = false;
                
               
                //截取id
                let moveIdArr = _this.moveIds.splice(_this.moveLenght,10).join(",");
                //获取请求到的数据
                let movieId = await _this.$http('/ajax/moreComingList?token=&movieIds=' +  moveIdArr);
                _this.movelist = _this.movelist.concat(movieId.data.coming)
                
                _this.onScrollType = true;
                console.log('1')
            }
        }
       
    },
  
    methods:{
        async getData(){
            let res = await this.$http("/ajax/movieOnInfoList?token=");
            this.movelist = res.data.movieList;
            this.moveLenght = res.data.movieList.length;
            this.moveIds = res.data.movieIds;
            this.total = res.data.total;
            console.log(res)
        },
        toDetails(val){
            // this.$cookie.set("id",val.id);
            window.sessionStorage.setItem("mineId",val.id);
            this.$router.push({name: "details",params:{
                move: val.id,
            }})

           this.$store.commit("changeType",false)
        },
       
    },
    computed:{
        
    },
    destroyed(){
        window.onscroll = null;
        // this.$off();
        console.log('销毁了吗')
    },
  
}
</script>

<style lang="scss" scoped>

    #list{
        margin-bottom: 45px;
        margin-top: 90px;
    }

     .wrap {
            display: flex;
            /* align-items: center; */
            padding: 3%;
           
        }

         .wrap .wrap-d{
            display: flex;
            width: 75%;
            margin: 0 0 0 2%;
            border-bottom: 1px solid #ededed;
        }

        
        .wrap-img {
            width: 20%;
            margin-right: 1%;
        }
        
        .wrap-img img {
            width: 100%;
            vertical-align: middle;
        }
        
        .wrap-con {
            
            margin: 0 0 0 1%;
            padding: 0 0 10px 0;
        }
        
        .wrap-con div {
            margin: 1% 0;
        }
        
        .wrap-con .wrap-tit {
            font-size: 17px;
            color: #333;
            font-weight: bold;
        }
        
        .wrap-con .wrap-grd,
        .wrap-con .wrap-zy,
        .wrap-con .wrap-show {
            font-size: 13px;
            color: #666;
            margin: 5px 0 0 0;
        }
        
        .wrap-con .wrap-zy,
        .wrap-con .wrap-show,
        .wrap-con .wrap-tit {
            width: 147px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .wrap-con .wrap-grd .grad {
            font-size: 15px;
            color: #fAAF00;
        }
        
        .wrap-btn {
            box-sizing: border-box;
            // width: 20%;
            // margin: auto;
             height: 93px;
            line-height: 93px;
            margin: 0 0 0 4%;
            padding: 0 0 10px 0;    
        }

       
   
        
        .wrap-btn span {
            display: inline-block;
            font-size: 12px;
            color: #fff;
            text-align: center;
            width: 47px;
            height: 27px;
            line-height: 27px;
            /* background: #f03d37; */
            border-radius: 5px;
        }

        #list>li:last-of-type .wrap-d{
            border-bottom: none;
        }
</style>