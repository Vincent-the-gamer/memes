<template>
    <div h-fit w-100vw left-0 position-absolute>
        <div bg-rgba-0-0-0-0.2>
            <h1 font-size-8>Blue Archive Logo Generator 蔚蓝档案图标生成器</h1>
            <div border="3px solid white" h-250px bg-white w-100vw id="my-logo">
                <img w-250px position-fixed z-0 p-0 b-0 hover:cursor-move
                    ref="haloCross" :style="style"
                    src="../../assets/materials/blue-archive/halocross.png" />

                <div position-absolute top-40 left-0 text-nowrap w-full z-1 select-none p-0 b-0>
                    <span color-blue font-size-22 italic blue-archive>{{ leftText }}</span>
                    <span font-size-22 italic blue-archive class="color-#394150">{{ rightText }}</span>
                </div>
            </div>
            <div m-t-8 position-relative z-2>
                <p color-orange>提示：图标可以拖拽</p>
                <p color-orange>在解决图片导出问题前，先手动截取吧()</p>
                <p>
                    左边文本: <input input type="text" v-model="leftText" />
                </p>
                <p>
                    右边文本: <input input type="text" v-model="rightText" />
                </p>
                <p>
                    <button btn @click="reset">重置</button>
                </p>
            </div>
            <div m-t-5>
                <p>此模块纯个人实现。</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


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

</script>