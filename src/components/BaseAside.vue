<template>
    <el-menu
        :router="true"
        :default-active="$route.path"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse-transition="true"
        ref="sidemenu"
        class="c_menu">
        <el-menu-item index="/user">
            <i class="el-icon-menu"></i>
            <span slot="title">用户管理</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
export default {
    name: "BaseAside",
    data () {
        return {
            isAdmin:false,
            role:{},
            isSuper:false,
            permissions:''
        };
    },
    methods:{
        handleSelect(key, keyPath){
            
        }
    },
    mounted(){

    }
};
</script>
<style lang="scss" scoped>
    .c_menu {
        width: 200px;
        min-height: 100%;
        height: 100%;
        max-height: 100%;
    }
</style>
