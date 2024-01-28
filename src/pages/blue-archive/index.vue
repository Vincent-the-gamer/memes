<template>
    <div h-fit w-100vw left-0 position-absolute>
        <div bg-rgba-0-0-0-0.2 p-20px>
            <h1 font-size-8>Blue Archive Logo Generator 蔚蓝档案图标生成器</h1>
            <div border="3px solid white" h-fit flex="~ items-center justify-center" w-96vw>
                <div h-220px id="my-logo">
                    <div p-8 hover:cursor-pointer>
                        <Vue3DraggableResizable z-1
                            :initW="logoData.w"
                            :initH="logoData.h" 
                            v-model:x="logoData.x" 
                            v-model:y="logoData.y"
                            v-model:w="logoData.w" 
                            v-model:h="logoData.h" 
                            v-model:active="logoData.active"
                            :draggable="true">
                            <div>
                                <img w-300px h-300px z-0 pointer-events-none position-relative translate-y--14
                                    translate-x-30 src="../../assets/materials/blue-archive/halo.png" />
                                <img w-280px h-280px z-2 pointer-events-none position-relative translate-y--85
                                    translate-x-34 src="../../assets/materials/blue-archive/cross-mb.png" />
                            </div>
                        </Vue3DraggableResizable>
                        <div position-relative left-0 translate-y-13 text-nowrap w-full select-none>
                            <span color-blue font-size-22 italic blue-archive>{{ leftText }}</span>
                            <span font-size-22 italic blue-archive>{{ rightText }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div m-t-8 position-relative z-3>
                <p>
                    左边文本: <input input type="text" v-model="leftText" />
                </p>
                <p>
                    右边文本: <input input type="text" v-model="rightText" />
                </p>
                <p>
                    <button btn @click="reset">重置</button>
                    <button btn @click="generateImage">生成</button>
                </p>
            </div>
            <div m-t-5>
                <p>此模块不使用已有代码，完全使用全新思路重写</p>
                <p>
                    <span>灵感来源：</span>
                    <a href="https://github.com/nulla2011/bluearchive-logo" target="_blank" hover="color-pink">
                        https://github.com/nulla2011/bluearchive-logo
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { domToPng } from "modern-screenshot"
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

const leftText = ref<string>("Blue")
const rightText = ref<string>("Archive")

function reset() {
    leftText.value = "Blue"
    rightText.value = "Archive"
}

const logoData = reactive({
    x: 125,
    y: 60,
    h: 300,
    w: 300,
    active: false
})

function generateImage() {
    const myLogo = document.getElementById("my-logo") as HTMLElement
    domToPng(myLogo).then(dataUrl => {
        const link = document.createElement("a")
        link.href = dataUrl
        link.download = "BlueArchiveLogo.png"
        link.click()
    })
}
</script>