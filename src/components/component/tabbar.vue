<template>
  <ul class="tabbar" v-if="changeType" >
      <li v-for="item in list" :key="item.title" @click="toPath(item)" :style="{color: item.title == nowItem?'#f03d37': '#666' }">
          <i :class="['iconfont', 'icon-'+item.icon]"></i>
          {{item.title}}
          </li>
  </ul>
</template>

<script>
// let nowItem = "电影";
import {mapState} from 'vuex';
export default {
    data(){
        return{
            list:[{
                title: "电影",
                name: "film",
                icon: "dianying"
            },{
                title: "影院",
                name: "cinema",
                icon: "yingyuanA"
            },{
                title: "我的",
                name: "mine",
                icon: "wode"
            }],
            nowItem : window.sessionStorage.getItem("tabbarItem") || '电影',
        }
    },
   
    methods:{
        toPath(item){
            this.$router.push({
                name: item.name
            });
            this.nowItem = item.title;
            window.sessionStorage.setItem("tabbarItem",item.title);
        }
    },
     computed:{
         ...mapState(['changeType'])
     },
    watch:{
        //回退
        $route(val){
            switch (val.name) {
                case 'nowpalying':
                    this.nowItem = "电影"
                    window.sessionStorage.setItem("tabbarItem", "电影");
                    break;
                case 'cinema':
                    this.nowItem = "影院"
                    window.sessionStorage.setItem("tabbarItem", "影院");
                    break;
                case 'mine':
                    this.nowItem = "我的"
                    window.sessionStorage.setItem("tabbarItem", "我的");
                    this.$store.commit("changeType",false)
                    break;
                default:
                    break;
            }

         
        },
       
       
        
    }

   

}
</script>

<style lang="scss" scoped>
    .tabbar{
        
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 48px;
        border-top: 1px solid #cdcdcd;
        background: #fff;
    }

    .tabbar li{
        display: flex;
        color: #777;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        // color: #f03d37;
    }

  

    .tabbar li i {
        font-size: 24px;
        margin: 2px 0; 
    }
</style>