<template>
    <footer position-fixed h-30px w-full bottom-0
            :class="`${isDark ? 'bg-black' : 'bg-gray'}`"
            flex="~ flex-col justify-center items-center">
        <h1>2024-PRESENT 
            <a href="https://github.com/Vincent-the-gamer/memes" 
               target="_blank"
               hover="color-pink">@Vincent-the-gamer</a>
        | <span>Version: {{ version }}</span> 
        | MIT Licensed</h1>
    </footer>
</template>

<script setup lang="ts">
import { version } from "../../package.json"
</script>