<template>
    <div w-full bg-rgba-0-0-0-0.2 position-relative left-0 m-t-1 h-fit>
        <h1 font-size-8>狗屁不通文章生成器 Nonsense Generator</h1>
        <p>随机生成包含自定义主题的一堆废话</p>
        <div position-relative w-full h-fit bg-rgba-255-255-255-0.5>
            <p font-size-5>
                <span>主题：</span>
                <span>
                    <input input type="text" v-model="title" />
                </span>
                <button btn @click="generate">生成！</button>
            </p>
            <p>
                <span>文章最少字数：</span>
                <span>
                    <input input type="number" v-model.number="charNum.min" />
                </span>
            </p>
            <p>
                <span>文章最多字数：</span>
                <span>
                    <input input type="number" v-model.number="charNum.max" />
                </span>
            </p>
            <p>
                <button btn @click="copy">复制文章！</button>
            </p>
            <p position-relative w-80vw m-0 m-auto>{{ article }}</p>
        </div>
        <p p-5>
            此模块整合自
            <a href="https://github.com/liusexin/bullshit_generator" target="_blank" color-teal-600 hover="color-red">
                liusexin/bullshit_generator
            </a>
        </p>
    </div>
</template>

<script setup lang="ts">
import { generateArticle } from "~/utils/nonsense"
import { copyToClipboard } from "~/utils/global"

const title = ref<string>("")
const article = ref<string>("")
const charNum = reactive({
    min: 1000,
    max: 1500
})

function generate() {
    article.value = generateArticle(title.value, charNum.min, charNum.max)
}

function copy() {
    copyToClipboard(article.value)
    alert("复制成功！")
}
</script>