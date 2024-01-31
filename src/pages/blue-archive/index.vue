<template>
    <div h-fit w-100vw left-0 position-absolute>
        <div bg-rgba-0-0-0-0.2>
            <h1 font-size-8>Blue Archive Logo Generator 蔚蓝档案图标生成器</h1>
            <div border="3px solid white" h-260px bg-white id="my-logo">
                <img position-fixed z-0 p-0 b-0 hover:cursor-move w-250px
                    :style="style" ref="haloCross"
                    src="../../assets/materials/blue-archive/halocross.png" />
                <div position-relative top-0 translate-y-25 left-0 text-nowrap w-full z-1 select-none p-0 b-0
                    id="text">
                    <span color-blue font-size-22 italic blue-archive>{{ leftText }}</span>
                    <span font-size-22 italic blue-archive class="color-#394150">{{ rightText }}</span>
                </div>
            </div>
            <div m-t-8 position-relative z-2>
                <p color-blue>提示：图标可以拖拽</p>
                <p>
                    左边文本: <input input type="text" v-model="leftText" />
                </p>
                <p>
                    右边文本: <input input type="text" v-model="rightText" />
                </p>
                <p>
                    <button btn @click="reset">重置</button>
                    <button btn @click="generate">生成</button>
                </p>
            </div>
            <div m-t-5>
                <p>此模块纯个人实现。</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import html2canvas from "html2canvas"

const leftText = ref<string>("Blue")
const rightText = ref<string>("Archive")
const haloCross = ref<HTMLElement | null>(null)

const { width } = useWindowSize()
const { x, y, style } = useDraggable(haloCross, {
    initialValue: {
        x: width.value / 2 - 135,
        y: 100
    }
})

function reset() {
    leftText.value = "Blue"
    rightText.value = "Archive"
    x.value = width.value / 2 - 135,
    y.value = 100
}

function generate() {
    const text = document.getElementById("text") as HTMLElement
    text.style.transform = "translateY(70px)"
    html2canvas(document.querySelector('#my-logo') as HTMLElement).then(canvas => {
        const dataUrl = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a')
        link.download = 'BlueArchive.png'
        link.href = dataUrl
        link.click()
        text.style.transform = "translateY(100px)"
    })
}


</script>