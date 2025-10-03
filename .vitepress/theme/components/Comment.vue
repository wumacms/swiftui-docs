<template>
    <div class="giscus-wrapper">
        <div ref="giscusContainer" class="giscus"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'

const { isDark } = useData()
const route = useRoute()
const giscusContainer = ref(null)

// Giscus 配置 - 替换为你的实际配置！
const giscusConfig = {
    repo: 'wumacms/swiftui-docs', // 修改为你的仓库
    repoId: 'R_kgDOPNTznQ',              // 在 giscus.app 获取
    category: 'Announcements',           // Discussion 分类名称
    categoryId: 'DIC_kwDOPNTznc4CwMtp',      // 在 giscus.app 获取
    mapping: 'pathname',                 // 使用页面路径作为标识
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    term: '1',
    inputPosition: 'top',
    lang: 'zh-CN',
    loading: 'lazy'
}

// 加载 Giscus 脚本
const loadGiscus = () => {
    // 移除现有的 Giscus iframe
    const existingIframe = giscusContainer.value?.querySelector('iframe')
    if (existingIframe) {
        existingIframe.remove()
    }

    // 创建 script 元素
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', giscusConfig.repo)
    script.setAttribute('data-repo-id', giscusConfig.repoId)
    script.setAttribute('data-category', giscusConfig.category)
    script.setAttribute('data-category-id', giscusConfig.categoryId)
    script.setAttribute('data-mapping', giscusConfig.mapping)
    script.setAttribute('data-strict', giscusConfig.strict)
    script.setAttribute('data-reactions-enabled', giscusConfig.reactionsEnabled)
    script.setAttribute('data-emit-metadata', giscusConfig.emitMetadata)
    script.setAttribute('data-input-position', giscusConfig.inputPosition)
    script.setAttribute('data-lang', giscusConfig.lang)
    script.setAttribute('data-loading', giscusConfig.loading)

    // 根据主题设置
    script.setAttribute('data-theme', isDark.value ? 'dark' : 'light')

    script.crossOrigin = 'anonymous'
    script.async = true

    // 添加到容器
    if (giscusContainer.value) {
        giscusContainer.value.appendChild(script)
    }
}

// 初始化 Giscus
const initGiscus = () => {
    nextTick(() => {
        setTimeout(loadGiscus, 500) // 延迟确保 DOM 已更新
    })
}

// 页面加载时初始化
onMounted(() => {
    initGiscus()
})

// 监听路由变化
watch(() => route.path, () => {
    initGiscus()
})

// 监听主题变化
watch(isDark, () => {
    // 主题变化时重新加载
    const iframe = giscusContainer.value?.querySelector('iframe')
    if (iframe) {
        // 通过更改 data-theme 并重新加载来更新主题
        iframe.contentWindow?.postMessage(
            { giscus: { setConfig: { theme: isDark.value ? 'dark' : 'light' } } },
            'https://giscus.app'
        )
    }
})
</script>

<style scoped>
.giscus-wrapper {
    margin-top: 3rem;
    border-top: 1px solid var(--vp-c-divider);
    padding-top: 2rem;
}

.giscus {
    max-width: 100%;
}
</style>