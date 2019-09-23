<template>
     <div class="wrap">
        <ul>
            <li v-for="(item,index) in letterList" :key="index" class="list-tit" >
                <span :id="item.title">{{item.title}}</span>
                <ul class="city-ul">
                    <li class="city" @click = "goBack(city)"  v-for="city in item.citylist" :key="city.cityId">{{city.name}}</li>
                </ul>
            </li>
        </ul>

          <section>
              <ul class="code" >
                <li>定位最近热门</li>
                <li v-for="(item,index) in letterList" :key="index" @click="setItem(item)" ><a :href="'#'+ item.title ">{{item.title}}</a></li>
            </ul>
        </section>
    
    </div>
</template>

<script>
export default {
    data(){
        return{
              letterList: [],
              num: 0,
              title : true,
              titleArr: [],
              chushi: 'A'
        }
    },
      async created(){
        //获取城市列表
        let res = await this.$http('https://www.fastmock.site/mock/88d09bc2bac9e54e766176ad9e0c0390/city/maoyan/city');
        this.cityList = res.data.data.cities;
        // console.log(this.cityList)
        // console.log(this.cityList)
        //循环出26个字母然后将城市对应的放进去
        for(var i = 65; i < 91; i++){
            if(String.fromCharCode(i) == "I" || String.fromCharCode(i) == "O" || String.fromCharCode(i) == "V" || String.fromCharCode(i) == "U"){
                continue;
            }else{
                this.letterList.push({title: String.fromCharCode(i), citylist:[]});
            }
        }

        //循环字母，循环城市列表，如果里面的pinyin 等于大写字母就把他存进去
        this.letterList.forEach(item=>{
            this.cityList.forEach(val=>{
                if(val.pinyin.charAt(0).toUpperCase() == item.title){
                    item.citylist.push(val)
                }
            })
        })
        
       
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
        },
        setItem(item){
            if(this.titleArr.indexOf(item.title) == -1){
                this.titleArr.push(item.title)
                this.num--;
            }
            console.log(this.num)
            
            window.localStorage.setItem("num",this.num);
        }
        
    },
  
}
</script>

<style lang="scss" scoped>
    
    .wrap{
        background: #f5f5f5;
    }

    ul .list-tit span{
        display: block;
        background: #ebebeb;
        padding: 5px 25px; 
        font-size: 14px;
        color: #333;
       
    }
   
    ul .list-tit .city{
        margin: 2px 40px 0 30px;
        padding:  7px 0px;
        border-bottom: 1px solid #cdcdcd;
        color: #333;
    }

    ul .list-tit .city:last-of-type{
        border: none;
    }


    .code{
        position: fixed;
        padding:  18% 0 0 0;
        right: 0px;
        top: 0;
        width: 20px;
        font-size: 12px;
        background: #ebebeb;
        height: 100%;
        
    }

    .code li:nth-of-type(1){
       
        width: 26px;
       
        margin-left: -10px;
    }

    .code li{     
        margin: 20% 0;
    }

    .code li a{
        color: #333;
    }
</style> 

