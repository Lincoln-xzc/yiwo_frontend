<style lang="scss" scoped>
</style>
<template>
    <div v-cloak>
        <base-menu-bar></base-menu-bar>
        <el-main class="width-100" style="min-height:700px">
            <transition name="el-fade-in">
                <router-view></router-view>
            </transition>
        </el-main>
    </div>
</template>
<script>
    import BaseMenuBar from '@/components/BaseMenuBar.vue';
    import BaseFooter from '@/components/BaseFooter.vue';
    export default {
        name: 'Index',
        components:{
            BaseMenuBar,
            BaseFooter
        }        
    };
</script>
