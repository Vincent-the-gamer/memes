<template>
    <h1 font-size-30px>Memes 梗合集</h1>
    <h3>https://memes.vince-g.xyz</h3>
    <div flex="~ items-center justify-center">
        <div top-5px w-700px h-fit border-rd-5px position-relative flex="~ justify-center items-center wrap content-start">
            <Card v-for="card of cardList"
                 :title="card.title" 
                 :description="card.description" 
                 :img-url="card.imgUrl"
                 :size="card.size"
                 @click="card.clickEvent"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Card } from '~/types';

const router = useRouter()

function toRoute(route: string) {
    router.push(route)
}

const cardList: Card[] = [
    {
        title: "Persona 5 Generator 女神异闻录5生成器",
        description: "女神异闻录5风格图片生成器",
        imgUrl: "/logo/p5.png",
        size: { width: 'w-130px', height: 'h-90px' },
        clickEvent: () => toRoute(`/persona-5`)
    },
    {
        title: "Blue Archive Logo Generator 蔚蓝档案图标生成器",
        description: "生成蔚蓝档案Logo",
        imgUrl: "/logo/blue-archive.png",
        size: { width: 'w-160px', height: 'h-90px' },
        clickEvent: () => toRoute(`/blue-archive`)
    },
    {
        title: "随机颜文字 Kaomoji",
        description: "随机获取一个颜文字表情",
        imgUrl: "/logo/kaomoji.gif",
        clickEvent: () => toRoute("/kaomoji")
    },
    {
        title: "狗屁不通文章生成器 Nonsense Generator",
        description: "随机生成包含自定义主题的一堆废话",
        imgUrl: "/logo/nonsense.png",
        size: { width: 'w-135px', height: 'h-90px' },
        clickEvent: () => toRoute("/nonsense")
    },
    {
        title: "更多梗敬请期待...",
        description: "就是这样"
    }
]
</script>