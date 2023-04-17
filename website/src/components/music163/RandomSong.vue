<!--author:steam-404-->
<!--网易云随机歌曲-->
<template>
    <p>网易云随机歌曲</p>
    <el-radio-group v-model="SongType" size="large">
        <el-radio-button label="热歌榜" @click="hotMusic"/>
        <el-radio-button label="新歌榜" @click="newMusic"/>
        <el-radio-button label="飙升榜" @click="upMusic"/>
        <el-radio-button label="抖音榜" @click="tiktokMusic"/>
        <el-radio-button label="电音榜" @click="electricityMusic"/>
    </el-radio-group>
    <el-button type="success" @click="getMusic()">音乐,起~</el-button>
    <hr>
    <div id="music" v-show="show">
        <img v-bind:src="musicPicture" alt="">
        <audio controls v-bind:src="musicURl">
            <a v-bind:href="musicURl"></a>
        </audio>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "RandomSong",
    data() {
        return {
            url: 'https://api.uomg.com/api/rand.music',
            SongType: '',
            show: false,
            musicURl: '',
            musicPicture: '',
            musicName: '',
            MusicArtistsName: ''
        }
    },
    methods: {
        hotMusic() {
            this.SongType = '热歌榜';
            console.log(this.SongType)
        },
        newMusic() {
            this.SongType = '新歌榜'
        },
        upMusic() {
            this.SongType = '飙升榜'
        },
        tiktokMusic() {
            this.SongType = '抖音榜'
        },
        electricityMusic() {
            this.SongType = '电音榜'
        },
        getMusic() {
            this.show = true
            axios.post(this.url + '&format=json', {}).then(response => {
                console.log(response)
                this.musicURl = response.data.data.url
                this.musicPicture=response.data.data.picurl
                this.musicName=response.data.data.name
                this.MusicArtistsName.data.data.artistsname
            }).catch(error => {
                console.log(error)
            })
        }
    },

}
</script>

<style scoped>
img{
    width: 8vh;
    height: 8vh;
    display: inline;
    border-radius: 1vh;
}
</style>