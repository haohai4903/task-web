<template>
    <a-layout>
        <blog-header></blog-header>
        <a-layout-content id="components-layout-basic-content">
            <router-view></router-view>
        </a-layout-content>
        <blog-footer></blog-footer>
    </a-layout>
</template>

<script>
    import BlogHeader from '../commons/BlogHeader'
    import BlogFooter from '../commons/BlogFooter'

    export default {
        name: 'BasicLayout',
        components: {BlogFooter, BlogHeader}
    }
</script>

<style scoped>
    #components-layout-basic-content {
        overflow: initial;
    }
</style>

