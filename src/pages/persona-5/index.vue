<template>
    <div flex="~ justify-center items-center" h-fit w-100vw>
        <div bg-rgba-0-0-0-0.2 p-20px>
            <h1 font-size-30px>Persona 5 Generator 女神异闻录5生成器</h1>
            <p>
                内容: <input v-model="content" input min-w-400px/>
            </p>
            <p>
                字体大小: <input v-model.number="fontSize" type="number" input />
            </p>
            <p>
                字体: <input v-model="fontFamily" input />
            </p>
            <p>
                <button btn @click="go">预览</button>
                <button btn @click="save">保存</button>
            </p>
            <p>
                <canvas ref="canvas"></canvas>
            </p>
            <p>
                <span>原项目： </span>
                <a href="https://github.com/LzxHahaha/persona5" target="_blank"
                   hover="color-pink">
                    https://github.com/LzxHahaha/persona5
                </a>
            </p>
            <p>
                <span>由
                    <a href="https://github.com/Vincent-the-gamer/memes" target="_blank"
                       hover="color-pink">
                        Vincent-the-gamer
                    </a>
                    使用Vue重写
                </span>
               
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import BoxText from "~/utils/persona-5/box/BoxText.ts"

const content = ref<string>("你说对，但原神，米自研，冒险游。")
const fontSize = ref<number>(60)
const fontFamily = ref<string>("sans-serif")
const canvas = ref<HTMLCanvasElement | null>(null)


function go() {
    const value = (content.value || '').trim();
    if (!value) {
        return;
    }
    const box = new BoxText(value, {
        fontSize: fontSize.value,
        fontFamily: fontFamily.value
    });
    box.draw(canvas.value);
}

function save() {
    const imageURL = canvas.value.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const a = document.createElement('a');
    a.href = imageURL;
    a.download = `${content.value}.png`;
    a.target = 'blank';
    a.click();
}
</script>