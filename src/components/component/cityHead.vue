<template>
    <div class="wrap">
        <ul  class="po">
            <li class="position">定位城市</li>
            <li>
                <div class="city">定位失败,请稍后重试</div>
            </li>
        </ul>
        <ul>
            <li class="position">热门城市</li>
            <ul class="hot-city">
                <li v-for="item in hotcity" :key="item.cityId">{{item.name}}</li>
            </ul>
            <!-- <li v-for="item in cityList" :key="item.id" v-if="item.isHot">{{}}</li> -->
        </ul>
    </div>
</template>

<script>
export default {

     data(){
        return{
            cityList: [],
            hotcity: [],
        }
    },
    // 获取城市列表
    async created(){
        let res = await this.$http('https://www.fastmock.site/mock/88d09bc2bac9e54e766176ad9e0c0390/city/maoyan/city');
        this.cityList = res.data.data.cities;
        //  console.log(this.cityList)
        this.cityList.forEach(item=>{
            if(item.isHot == true){
                this.hotcity.push(item);
            }
        });

       
    },
    methods:{
         goBack(city){

            let num1 = window.localStorage.getItem("num") || 0;
            
            this.$router.go(parseInt(num1) - 1);
            this.$store.commit('changeCity',city.name);
            this.$store.commit('changeType',true)
            this.num = 0;   
            this.titleArr = [];
            window.localStorage.removeItem("num")
            console.log(num1 - 1)
        }
    }
   

}
</script>

<style lang="scss" scoped>
    .wrap{
          background: #f5f5f5;
    }

    .wrap .position{
        //  display: block;
        background: #ebebeb;
        padding: 5px 15px; 
        font-size: 14px;
        color: #333;
    }

    .wrap .po li:last-of-type{
        max-width: 180px;
        padding: 10px 0 10px 20px;
    }

     .wrap .po li:last-of-type .city{
         font-size: 14px;
         color: #333;
         background: #fff;
         padding: 4px 20px 4px 24px;
         border-radius: 4px;
     }

     .hot-city {
         padding: 0 30px 8px 0;
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
     }

     .hot-city li{
         width: 29%;
         background: #fff;
         text-align: center;
         font-size: 14px;
         color: #333;
         padding: 6px 0;
         margin: 4% 0 2% 3% ; 
         border-radius: 8px；
     }
</style>