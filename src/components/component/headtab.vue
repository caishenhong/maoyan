<template>
    <nav>
        <div>
            <span v-if="isBack" @click="back">&lt;</span>
            {{title}}
        </div>
    </nav>
</template>

<script>
export default {
    props:{
        title: String,
        isBack: Boolean
    },
    methods:{
        back(){
            this.$router.go(-1);
            this.$store.commit("changeType",true)
        }
    }
}
</script>

<style lang="scss" scoped>
    nav{

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1;
        

        div{
            display: flex;
            justify-content: center;
            align-content: center;
            height: 50px;
            line-height: 50px;
            background: #f03d37;
            color: #fff;
        }

        span{
            position: absolute;
            left: 10px;
            font-size: 24px;

        }
    }
</style>