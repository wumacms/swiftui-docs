<script setup>
import { useRoute } from 'vitepress'

const route = useRoute()

// 从路由中解析页面标题，并进行URL解码（例如从路径"/abc.html"中解析出"abc"）
const webTitle = decodeURIComponent(route.path.split('/').pop().replace(/\.html$/, ''));

</script>

<template>
    <span>{{ webTitle }}</span>
</template>