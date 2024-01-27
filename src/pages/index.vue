<template>
    <div flex="~ flex-row items-center justify-center">
        <div top-5px w-100vw h-85vh border-rd-5px position-relative
             flex="~ flex-col items-center justify-center">
            <Card title="Persona 5 Generator 女神异闻录5生成器"
                  description="女神异闻录5风格图片生成器"
                  img-url="/persona-5/p5.png"
                  :size="{ width: 'w-150px', height: 'h-90px'}"
                  @click="() => toRoute(`/persona-5`)"
                  />
            <Card title="更多梗敬请期待..."
                  description="就是这样"
                  img-url="/logo.jpg"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()

function toRoute(route: string) {
    router.push(route)
}
</script>