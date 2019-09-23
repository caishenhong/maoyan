<template>
    <div class="res">
        <div class="wrap">
            <div v-for="item in list" :key="item.title" class="wrap-tit" @click="change(item)" :class="{'active':nowItem == item.title}">{{item.title}}</div> 
        </div>
        <div class="input" v-if="this.nowItem == '美团账号登陆'">
            <input type="text" name="" id="" class="user" v-model="user" placeholder="账户名/手机号/Email">  
            <input type="password" name="" id="" class="pasd" v-model="pasd" placeholder="请输入你的密码">  
        </div>

         <div class="input" v-if="this.nowItem == '手机验证登陆'">
            <div class="ma"><input type="text" name="" id="" class="user" v-model="user" placeholder="账户名/手机号/Email"> <div class="code">获取验证码</div> </div>
            <input type="password" name="" id="" class="pasd" v-model="pasd" placeholder="请输入你的密码">  
        </div>

        <!-- v-if="this.nowItem == '美团账号登陆'" -->

        <div class="res-btn"   >登陆</div>
        
        <div class="bottom">
            <div>立即注册</div>
            <div>找回密码</div>
        </div>
        <p class="phone">&copy;猫眼电影 客服电话 : <span>400-670-5335</span></p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: "register",
            list:[{title:"美团账号登陆", name: "login1"},{title:"手机验证登陆",name: "login2"}],
            user: "",
            pasd: "",
            nowItem : "美团账号登陆"
        }
    },
    methods:{
        change(item){
            this.nowItem = item.title;
        
        }
    }
}
</script>

<style lang="scss" scoped>
    .res{
        width: 100%;
        height: 90vh;
        background: #F8F8F8;
         margin-top: 50px;
         overflow: hidden;
    }

    .wrap{
        position: relative;
        display: flex;
        justify-content: space-around;
        padding: 0 20px;
        border-bottom:  4px solid #ededed;
        background: #fff;
       
    }

    .wrap .wrap-tit{
        // position: absolute;
        font-size: 14px;
        color: #222;
        padding: 12px 10% 10px 10%;
        margin: 0 0 -4px 0;
    }    

    .input{
        // width: 100%;
        display: flex;
        flex-direction: column;
        // text-align: center;
        // justify-content: center;
        // margin: 0 0 0 10px;
        border-bottom: 1px solid #ededed;
           background: #fff;
      
    }

    .input input{
        // display: block;
        padding: 14px 10px 14px;
        // width: 90%;'
        border: none;
        outline: none;
        font-size: 14px;
        height: 2px;
        margin: 4px 10px 4px 10px;
        border-bottom: 1px solid #ededed;
    }

    .input input:last-of-type{
        border: none;
    }

    .input input:focus{
        background: #ededed;
        border-radius:  4px;
    }

    .input .ma{
        display: flex;
        align-items: center;
          border-bottom: 1px solid #ededed;
    }
    
    .input .ma .code{
        color: #999;
        background: #dcdcdc;
        padding: 3px 15px;
        font-size: 14px;
        border-radius: 5px; 
      
    }

    //登陆
    .res-btn{
        width: 90%;
        text-align: center;
        margin: 10px auto;
        padding: 5px 0;
        background: #df2d2d;
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
    }

    // .log-btn{
    //     width: 90%;
    //     text-align: center;
    //     margin: 10px auto;
    //     padding: 5px 0;
    //     background: #df2d2d;
    //     color: #fff;
    //     font-size: 14px;
    //     border-radius: 4px;
    // }

    .bottom{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        color: #FE8C00;
        padding: 1% 3%;
    }

    
    .phone{
        color: #333;
        font-size: 13px;
        width: 70%;
        margin: auto;
    }

      
    .phone>span{
        color: #df2d2d;
    }

    .active{
        border-bottom: 4px solid #FFC300;
    }
</style>