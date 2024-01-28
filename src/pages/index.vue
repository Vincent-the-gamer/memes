<template>
    <h1 font-size-30px>Memes 梗合集</h1>
    <h3>https://memes.vince-g.xyz</h3>
    <div flex="~ items-center justify-center">
        <div top-5px w-700px h-fit border-rd-5px position-relative
             flex="~ justify-center items-center wrap content-start">
            <Card title="Persona 5 Generator 女神异闻录5生成器" description="女神异闻录5风格图片生成器" img-url="/persona-5/p5.png"
                  :size="{ width: 'w-130px', height: 'h-90px' }" 
                  @click="() => toRoute(`/persona-5`)" />
            <Card title="Blue Archive Logo Generator 蔚蓝档案图标生成器" description="生成蔚蓝档案Logo"
                  @click="() => toRoute(`/blue-archive`)"/>
            <Card title="更多梗敬请期待..." description="就是这样"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()

function toRoute(route: string) {
    router.push(route)
}
</script>