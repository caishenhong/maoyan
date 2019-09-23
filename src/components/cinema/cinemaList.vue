<template>
    <div>
       <ul class="list">
           <li v-for="item in list" :key="item.title" class="tese" >{{item.title}}<i class="iconfont icon-xiala"></i><div class="gan"></div></li>
       </ul>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            name: "cinemaList",
            list:[{
                title: "全城", 
                
            },{
                title: "品牌",
                
            },
            {
                title: "特色"
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
   .list{
       display: flex;
       justify-content: space-around;
       align-items: center;
       text-align: center;
       border-bottom: 1px solid #e6e6e6;
   }

   .list li{
       color: #777;
       font-size: 13px;
       height: 40px;
       line-height: 40px;
       flex-grow: 1;
       position: relative;
   }

   .list li i{
       font-size: 8px;
       margin: 0 0 0 4px;
   }

   .list li .gan{
       height: 20px;
       width: 1px;
       background:  #e6e6e6;
       display: inline-block;
        right: 0px;
        position: absolute;
        margin: 10px 0 0 0;
   }

   .list li:last-of-type .gan{
       width: 0;
   } 



//    .list li:nth-of-type(1){
//        border-right: 1px solid #ededed;
//    }
</style>