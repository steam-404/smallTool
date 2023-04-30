<!--author:steam-404-->
<!--QQ号码估值-->
<template>
    <div>
        <p>QQ号码估值</p>
        <a-radio-group>
            <span>是否为会员:</span>
            <a-radio value="1" @click="grade1">是</a-radio>
            <a-radio value="2" @click="grade2">否</a-radio>
        </a-radio-group>
        <br>
        <a-input-number
            @keydown.enter="this.QQUrl"
            v-model="grade"
            :style="{width:'320px'}"
            placeholder="请输入QQ等级"
            allow-clear hide-button>
            <template #suffix>
                <icon-info-circle/>
            </template>
        </a-input-number>
        <div>
            <a-input-number
                @keydown.enter="this.QQUrl"
                v-model="QQNumber"
                :style="{width:'320px'}"
                placeholder="请输入QQ号"
                allow-clear hide-button>
                <template #suffix>
                    <icon-info-circle/>
                </template>
            </a-input-number>
            <br>
            <a-button
                type="primary"
                shape="round"
                @click="this.QQUrl"
            >
                估值(￥)
            </a-button>
            <br>
            <p>价值:
                <span style="color: blue;font-weight: bold">
                {{ this.money }}
            </span>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "QQNumberValuation",
    data() {
        return {
            request:'',
            url: 'https://v.api.aa1.cn/api/api-qq-gj/index.php',
            money: 0,
            QQNumber: '',
            member: '',
            grade: '',
        }
    },
    watch: {
        phoneNumber() {
            this.QQNumber()
        }
    },
    methods: {
        QQUrl() {
            this.request=this.url+'?qq='+this.QQNumber+'&num='+this.grade+'&vip='+this.grade
            axios.get( this.request,{}).then(response => {
                this.money = response.data.money
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        },
        grade1(){
            this.grade='1'
            console.log(this.grade)
        },
        grade2(){
            this.grade='2'
            console.log(this.grade)
        }
    }
}
</script>

<style scoped>
* {
    text-align: center;
}
input{
    padding-top: 1vh;
    padding-bottom: 1vh;
}
</style>