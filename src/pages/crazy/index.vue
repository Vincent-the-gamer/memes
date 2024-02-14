<template>
    <div w-full bg-rgba-0-0-0-0.2 position-relative left-0 m-t-1 h-fit>
        <h1 font-size-8>随机发疯文学 Crazy Memes</h1>
        <p>随机获取一段发疯文学</p>
        <button btn @click="getCrazyMeme">获取！</button>
        <div position-relative w-full h-fit bg-rgba-255-255-255-0.5>
            <h3 relative white-space-pre-wrap w-80vw m-0 m-auto p-5>
                {{ article }}
            </h3>
        </div>

        <p p-5>
            此模块整合自
            <a href="https://github.com/Vincent-the-gamer/you-are-right" target="_blank" color-teal-600 hover="color-red">
                vincent-the-gamer/you-are-right
            </a>
        </p>
    </div>
</template>

<script setup lang="ts">
import memes from "~/utils/crazy/data.json"

const article = ref<string>("点击按钮获取")

function getCrazyMeme() {
    let index = Math.floor(Math.random() * memes.length)
    article.value = memes[index]
}
</script>