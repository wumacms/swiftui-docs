<script setup>
import DefaultTheme from 'vitepress/theme'
import Comment from './components/Comment.vue'

const { Layout } = DefaultTheme

// 可选：在某些页面禁用评论
const shouldShowComment = () => {
    // 这里可以根据路径决定是否显示评论
    // 例如在首页或特定页面隐藏评论
    return true
}
</script>

<template>
    <Layout>
        <template #doc-after>
            <Comment v-if="shouldShowComment()" />
        </template>
    </Layout>
</template>