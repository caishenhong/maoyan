<template>
       <div class="film">
             <headtab :title="title"  :isBack="isback"></headtab>
             <div class="nav-con">
                  <div class="position" @click="toCity"><span class="city-name">{{city}}</span><i class="iconfont icon-xiala"></i></div>
                  <div @click="changTo(item)"  v-for="item in list" :key="item.title" :class="{'active':item.title == nowItem}" >{{item.title}}</div>
                  
                  <div class="search"><i class="iconfont icon-sousuo"></i></div>  
             </div>
           <keep-alive>
                    <router-view></router-view>
           </keep-alive>
       </div> 
</template>

<script>
import headTab from '@/components/component/headtab.vue'
import {mapState} from 'vuex'

let maskItem = "正在热映";
export default {
       name: "film",
       data(){
             return{
                    title: "猫眼电影",
                    isback: false,
                    list:[{
                           title: "正在热映",name: "nowpalying"
                    },{
                           title: "即将上映", name: "comingsoon"
                    }],

                    nowItem: maskItem
             } 
       },
       methods:{
               changTo(item){
                  this.$router.push({
                            name:  item.name
                     })
                     this.nowItem = item.title
              },
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
              "headtab":headTab
       },
      
       beforeRouteEnter:(to,from,next) =>{
              console.log(to.name)
              next()
              switch(to.name){
                     case 'nowplaying':
                            maskItem = "正在上映";
                            break;
                     case 'comingsoon':
                            maskItem = "即将上映"
                            break;
                     default:       
                            break;

              }
       },
        watch:{
               $route(val){
                    switch (val.name) {
                            case 'nowpalying':
                            this.nowItem = "正在热映"
                            break;
                            case 'comingsoon':
                            this.nowItem = "即将上映"
                            break;
                     } 
               } 
        },
        activated(){
               this.$store.commit('changeType',true)
        }
       
     
}
</script>

<style lang="scss" scoped>
       .film{
              margin-top: 45px;
       }

       .nav-con{
       margin-top: 45px;
          position: fixed;
          left: 0;
          right: 0;
          top: 0;    
          background: #fff;
          color: #777;    
          display: flex;
          justify-content: space-around;
          height: 44px;
          line-height: 44px;
          border-bottom: 1px solid #cdcdcd;
          background: #fff;
          z-index: 1;
       }

       .nav-con>div:nth-of-type(2),
       .nav-con>div:nth-of-type(3){
              font-size: 15px;
       }
       .nav-con .position{
              display: flex;
              color: #666;
              // margin-left: 4px;
              font-size: 15px; 
             
              
       }

       .nav-con .position .city-name{
              
              display: inline-block;
              min-width: 30px;
              max-width: 60px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
       }

     
       .nav-con  .active{
             color:#f03d37;
             border-bottom: 2px solid #f03d37;
             padding: 0 8px;
             font-size: 15px;
       }

       .nav-con .position i{
              // display: inline-block;
              font-size: 8px;
              margin-left: 4px;
       }

       .nav-con .search{
              color: #f03d37;
              margin-right: 6px; 
       }
</style>