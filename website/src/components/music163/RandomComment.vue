<!--author:steam-404-->
<!--网易云热门评论-->
<template>
    <p>网易云热门评论</p>
    <div id="music">
        <el-button @click="comment">开始emo/换一个</el-button>
    </div>

    <div class="music" v-show="show">
        <h3>Look What You Made Me Do</h3>
        <audio controls v-bind:src="musicUrl">
            <a v-bind:href="musicUrl"></a>
        </audio>
        <img v-bind:src="musicPicture" alt="">
        <h4>热门评论:</h4>
        <div>
            {{ userName }}
            <br>
            <img class="userHeadPicture" v-bind:src="userHeadPicture" alt="">
        </div>
        <h3>{{ userComment }}</h3>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "RandomComment",
    data() {
        return {
            url: 'https://api.uomg.com/api/comments.163',
            show:false,
            musicName: '',
            musicUrl: '',
            musicPicture: '',
            userHeadPicture: '',
            userName: '',
            userComment: '',
        }
    },
    methods: {
        comment() {
            this.show=true
            axios.post(this.url, {}).then(response => {
                console.log(response)
                this.musicName = response.data.data.name
                this.musicUrl = response.data.data.url
                this.musicPicture = response.data.data.avatarurl
                this.userHeadPicture = response.data.data.picurl
                this.userName = response.data.data.nickname
                this.userComment = response.data.data.content
            }).catch(error => {
                console.log('error:' + error)
            })

        }
    }
}
</script>

<style scoped>
.music {
    border-bottom: 0.3vh solid rosybrown;
}

img {
    width: 10vh;
    height: 10vh;
}

.userHeadPicture {
    width: 3vh;
    height: 3vh;
    border-radius: 30vh;
}
</style>