<style lang="scss" scoped>
    .el-header{
        padding: 0 0;
    }
</style>
<template>
    <el-container v-cloak>
        <el-header height="80px">
            <base-menu-bar></base-menu-bar>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <base-aside></base-aside>
            </el-aside>
            <el-main class="width-100" style="min-height:700px">
                <transition name="el-fade-in">
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import BaseMenuBar from '@/components/BaseMenuBar.vue';
    import BaseFooter from '@/components/BaseFooter.vue';
    import BaseAside from '@/components/BaseAside.vue';
    export default {
        name: 'Index',
        components:{
            BaseMenuBar,
            BaseAside,
            BaseFooter
        }        
    };
</script>
