<!--author:steam-404-->
<!--vanta数字动画,用于背景-->
<template>
    <div ref='vantaRef' id="vant">
    </div>
</template>

<script>
import * as THREE from 'three'
import BIRDS from 'vanta/src/vanta.birds'

export default {
    name: "vanta",
    mounted() {
        this.vantaEffect = BIRDS({
            el: this.$refs.vantaRef,
            THREE: THREE,
        })
    },
    beforeDestroy() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy()
        }
    }
}
</script>
<style scoped>
#vant{
    width: 100%;
    height: 30vh;
}
</style>