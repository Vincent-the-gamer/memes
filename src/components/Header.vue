<template>
    <header w-full h-40px position-fixed top-0 :class="`${isDark ? 'bg-black' : 'bg-gray'}`">
        <span top-6px position-absolute w-fit @click="() => router.push('/')" hover="cursor-pointer color-pink">
            <img src="/logo.jpg" alt="logo" position-absolute h-40px border-rd-4px top--4px />
            <h1 w-fit m-l-40px font-size-20px>Memes 梗合集</h1>
        </span>
        <div position-absolute right-0>
            <span @click="toggleDark()" p-0 position-relative m-r-30px top-9px
                 hover="color-pink cursor-pointer">
                <div i-carbon-sun dark:i-carbon-moon />
            </span>
            <a i-carbon-logo-github icon-btn p-0 position-relative top--9px
                m-r-20px hover="color-pink cursor-pointer"
                rel="noreferrer" href="https://github.com/Vincent-the-gamer/memes" target="_blank" title="GitHub" />
        </div>

    </header>
</template>

<script setup lang="ts">
const router = useRouter()
</script>