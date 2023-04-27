<!--author:steam-404-->
<!--手机号估值-->
<template>
    <p>手机号估值</p>
    <div>
        <a-input-number
            @keydown.enter="this.phoneUrl"
            v-model="phoneNumber"
            :style="{width:'320px'}"
            placeholder="请输入手机号"
            allow-clear hide-button>
            <template #suffix>
                <icon-info-circle />
            </template>
        </a-input-number>
        <a-button
            type="primary"
            shape="round"
            @click="this.phoneUrl"
        >
            估值(￥)
        </a-button>
        <br>
        <p>价值:
            <span
                style="color: blue;font-weight: bold">
                {{this.money}}
            </span>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "phoneNumberValuation",
    data() {
        return {
            url: 'https://v.api.aa1.cn/api/api-phone-gj/index.php',
            money:0,
            phoneNumber:''
        }
    },
    watch:{
        phoneNumber(){
            this.phoneNumber()
        }
    },
    methods:{
        phoneUrl(){
            axios.get(this.url+='?phone='+this.phoneNumber,{
            }).then(response=>{
                this.money=response.data.money
                console.log(response)
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
*{
    text-align: center;
}
</style>