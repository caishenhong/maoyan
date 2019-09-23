<template>
        <div class="wrap">
            <div class="con-top">
                <div class="con-tit">近期最受期待</div>
                <div class="ov-hidden">
                    <div class="con-srcoll">       
                    <div v-for="item in comingsoon" :key="item.id" class="con"  @click='toDetails(item)' >
                        <img :src="item.img.replace('w.h','128.180')" alt="">
                        <div class="name">{{item.nm}}</div>
                        <p>{{item.comingTitle}}</p>
                    </div>
                </div>       
                </div> 
            <div class="fgx"></div>    
            </div>
            
            <div class="con-bottom">
                <div v-for="item in list" :key="item.title" class="tit-group" >
                     <p >{{item.title}} </p>
                     <div v-for="val in item.content" :key="val.id" class="con" @click="toDetails(val)">
                         <img :src="val.img.replace('w.h','128.120')" alt="">
                         <div class="con-div">
                             <div class="con-bottom-con">
                             <div class="con-tit">
                                 {{val.nm}}
                             </div>
                             <div class="con-showst" v-if="!val.sc">
                                 <span>{{val.wish}}</span>人想看
                             </div>
                             <div class="con-showst" v-else="">
                                  点映评<span>{{val.sc}}</span>
                             </div>
                             <div class="con-min">
                                主演：{{val.star}}
                             </div>
                             <div class="sy-date">{{val.rt}} 上映</div>
                         </div>
                        <div class="con-bot" v-if="val.showst==4">
                            <span class="btn-y">预售</span>
                        </div>
                        <div class="con-bot" v-else>
                            <span class="btn">想看</span>
                        </div>
                         </div>
                     </div>
                </div>
               
            </div>  
            
       
        </div>
</template>

<script>

export default {
    data(){
        return{
            name: "comingsoon",
            comingsoon: [],
            bottom: [],
            newbottom: [],
            list: [],
        }
    },
    methods:{
        toDetails(item){
             
            window.sessionStorage.setItem("mineId",item.id)
            this.$router.push({
                name: "detailsMove",
                params: {
                    item : item.id,
                }
            })
        }
    },
    async mounted(){
        // 获取顶部的
        let res = await this.$http("/ajax/mostExpected?ci=150&limit=10&offset=0&token=");
        this.comingsoon = res.data.coming;
        //获取底部的
        let res1 = await this.$http("/ajax/comingList?ci=150&token=&limit=10")
        this.bottom = res1.data.coming;
        
        
        //去除底部重复的东西
        this.bottom.forEach(item =>{
           if(this.newbottom.indexOf(item.comingTitle) == -1){
               this.newbottom.push(item.comingTitle);
           }
        })

        this.newbottom.forEach(val =>{
            this.list.push({title: val,content:[]})
        })

        this.list.forEach(item=>{
            this.bottom.forEach(val=>{
                if(item.title == val.comingTitle){
                    item.content.push(val)
                }
            })
        })

     
       
        
    }
}
</script>

<style lang="scss" scoped>
    .wrap{
          margin-top: 90px;
    }

    .con-top{
        padding: 12px 0 12px 15px;
        width: 290px;
        height: 192px;
        position: relative;
    }

    .con-top .con-tit{
        font-size: 12px;
        color: #333;
        margin-bottom: 4px; 
    }

    .con-top .ov-hidden{
        width: 288px;
        height: 156px;
        overflow: hidden;
    }

    .con-top .con-srcoll{
        display: flex;
        overflow: scroll;
        width: 288px;
        height: 163px;
        // overflow-x: hidden;
        // overflow-y: scroll;
    }

     .con-top .con-srcoll .con {
         width: 85px;
         margin-right: 15px;
     }

      .con-top .con-srcoll .con img{
          width: 85px;
          height: 115px;
      }

      .con-top .con-srcoll .con .name{
          font-size: 13px;
          color: #222;
          margin: 0 0 3px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;

      }

        .con-top .con-srcoll .con p {
            font-size: 12px;
            color: #999;
        }

       .con-top .fgx {
           position: absolute;
           width: 303px;
           height: 10px;
           background: #ededed;
           bottom: 0;
           left: 0;
       }

       //下面内容
       .con-bottom{
           margin-bottom: 40px;
       }

       .con-bottom  p{
           font-size: 14px;
           color: #333;
           padding: 12px 15px 0;
       }


       .con-bottom .tit-group img{
           width: 64px;
           height: 90px;
           vertical-align: middle;
          
       }

        .con-bottom .tit-group .con{
            display: flex;
             padding: 12px 14px 12px 0;
             margin: 0 0 0 12px;
             height: 90px;
        }

         .con-bottom .tit-group .con-bottom-con{
             margin: 0 0 0 8px;
             height: 89px;
         }

        .con-bottom .tit-group .con-bottom-con .con-tit{
             font-size: 17px;
             color: #333;
             font-weight: 700;
             margin: 0 0 5px 0;
            
        }
       
       

        .con-bottom .tit-group .con-bottom-con .con-min{
            width: 147px;
            font-size: 13px;
            color: #666;
            margin: 3px 0;
             text-overflow: ellipsis;
             white-space: nowrap;
             overflow: hidden;
        }

        .con-bottom .tit-group .con-bottom-con .sy-date,
        .con-bottom .tit-group .con-bottom-con .con-showst{
            color: #666;
            font-size: 13px;
        } 
        .con-bottom .tit-group .con-bottom-con .con-showst>span{
            color:#faaf00;
            font-size: 15px;
            font-weight: 700;
        }

          .con-bottom .tit-group  .con-bot{
            height: 89px;
            line-height: 89px;
            flex-flow: 1;
            // margin: 0 0 0 1%;
         }
        
        .con-bottom .tit-group   .btn{
            font-size: 12px;
            color: #fff;
            background: #faaf00;
            padding: 8px 11px;
            border-radius: 5px; 
           
        }

         .con-bottom .tit-group   .btn-y{
            font-size: 12px;
            color: #fff;
            background: #3c9fe6;
           padding: 8px 11px;
            border-radius: 5px; 
           
        }

        .con-div{
            display: flex;
            border-bottom: 1px solid #ededed;
            height: 100px;
            margin: 0 0 0 2%;
        }

        // .con-bottom .tit-group .con-bot,
        // .con-bottom .tit-group .con-bottom-con{
        //     padding: 0 0 10px 0;
        //     border-bottom: 1px solid #777;
        // }



        //  .con-bottom .tit-group .con:last-of-type .con-bottom-con ,
        //  .con-bottom .tit-group .con:last-of-type  .con-bot {
        //      border: none;
        //  }

     

       






</style>