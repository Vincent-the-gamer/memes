<template>
    <div :border="`1px solid ${isDark ? `gray` : `black`} rd-5px`" 
         w-330px min-h-150px h-fit p-20px
         m-9px
         hover="bg-gray cursor-pointer"
         flex="~ flex-col justify-center items-center">
         <div>
            <img :src="props.imgUrl ?? '/logo.jpg'" 
                 :class="`${props.size?.width} ${props.size?.height} 
                        ${props.size ?? 'w-90px h-90px'}`"
                  p-5px/>
         </div>
         <div text-left>
            <h1 p-5px>{{ props.title }}</h1>
            <p font-size-13px p-5px>{{ props.description }}</p>
         </div>
    </div>

</template>

<script setup lang="ts">
interface ImageSize {
    width: string,
    height: string
}

const props = defineProps<{
    title: string,
    description: string,
    imgUrl?: string,
    size?: ImageSize
}>()
</script>