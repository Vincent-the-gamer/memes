<template>
  <div flex="~ items-center justify-center">
    <div h-fit w-100vw>
      <h1 font-size-50px>404</h1>
      <h1>Not Found</h1>
    </div>
  </div>
  <p m-t-40px hover="color-pink cursor-pointer"
    @click="() => router.push('/')">
    > &nbsp; cd ..
  </p>
</template>

<script lang="ts" setup>
const router = useRouter()
</script>