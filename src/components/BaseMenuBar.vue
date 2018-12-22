<style lang="scss" scoped>
    .el-header{
        background-color: #fff;
        .header-main{
            width: 1300px;
            margin: 0 auto;
        }
        .el-menu{
            /deep/ .el_submenu__title i{
                color: #fff;
            }
        }
    }
    .user_info{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 20px;
        padding-top:10px;
        .avatar{
            width:40px;
            height:40px;
            border-radius: 50%;
        }
    }
</style>

<template>
    <el-header class="width-100">
        <div class="header-main">
            <a href="">
                <img src="../assets/logo.png" class="padding-top float-left">
            </a>
            <el-menu :default-active="$route.path" 
                :router="true" 
                class="float-left margin-left-xl" 
                mode="horizontal" 
                @select="handleSelect"
                active-text-color="#4c97ff"

                >
                <el-menu-item index="/home">课程介绍</el-menu-item>
                <el-menu-item index="/mode">教学模式</el-menu-item>
                <el-menu-item index="/achievement">学生成果</el-menu-item>
                <el-submenu index="/create">
                    <template slot="title">编程创作</template>
                    <el-menu-item index="/scratch">Scratch</el-menu-item>
                    <el-menu-item index="/picoboard">Picoboard</el-menu-item>
                    <el-menu-item index="/arduino">Arduino</el-menu-item>
                    <el-menu-item index="/python">Python</el-menu-item>
                    <el-menu-item index="/create/mc">Scratch/MC</el-menu-item>
                    <el-menu-item index="/oj">C++/OJ</el-menu-item>
                </el-submenu>
                <el-submenu index="community">
                    <template slot="title">社区</template>
                    <el-menu-item index="/community/Mc">MC社区</el-menu-item>
                    <el-menu-item index="/informationCentre">资讯中心</el-menu-item>
                    <el-menu-item index="/communityActivity">社群活动</el-menu-item>
                </el-submenu>
                <el-menu-item index="/about">关于我们</el-menu-item>
            </el-menu>
            <div class="user_info">
                <el-button type="text">登录</el-button>
                <el-button type="text">注册</el-button>
            </div>
        </div>
    </el-header>
</template>
<script>
export default {
    name: "BaseMenuBar",
    data(){
        return{
            activeIndex: '/'
        };
    },
    methods:{
        handleSelect(){
            console.log(key, keyPath);
        }
    }
};
</script>

