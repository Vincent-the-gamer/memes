<template>
    <div w-full bg-rgba-0-0-0-0.2 position-relative left-0 m-t-1 h-fit>
        <h1 font-size-8>随机颜文字 Kaomoji</h1>
        <p>随机获取一个颜文字表情</p>
        <div position-relative w-full h-fit bg-rgba-255-255-255-0.5>
            <h1 font-size-8 p-10>{{ kaomoji ? kaomoji : "空空如也" }}</h1>
        </div>
        <div p-5>
            <p>
                <p>
                    分类: 
                    <select input v-model="category">
                        <option value="all">all</option>
                        <option v-for="op of categoryOptions" :value="op">
                            {{ op }}
                        </option>
                    </select>
                </p>
                <button btn @click="getKaomoji">获取！</button>
            </p>
            <p>
                此模块整合自
                <a href="https://github.com/Vincent-the-gamer/kaomoe" target="_blank" color-teal-600 hover="color-red">
                    vincent-the-gamer/kaomoe
                </a>
            </p>
        </div>

    </div>
</template>

<script lang="ts" setup>
import useKaomoji from '../../utils/kaomoji';

const kaomoji = ref<string>("")
const category = ref<string>("all")

const categoryOptions: string[] = [
    "joy",
    "love",
    "embarrassment",
    "sympathy",
    "dissatisfaction",
    "anger",
    "sadness",
    "pain",
    "fear",
    "indifference",
    "confusion",
    "doubt",
    "surprise",
    "greeting",
    "hugging",
    "winking",
    "apologizing",
    "nosebleeding",
    "hiding",
    "writing",
    "running",
    "sleeping",
    "cat",
    "bear",
    "dog",
    "rabbit",
    "pig",
    "bird",
    "fish",
    "spider",
    "friends",
    "enemies",
    "weapons",
    "magic",
    "food",
    "music",
    "games",
    "faces",
    "special"
]

function getKaomoji() {
    if(category.value === "all") {
        kaomoji.value = useKaomoji()
    } else {
        kaomoji.value = useKaomoji(category.value)
    }
}
</script>