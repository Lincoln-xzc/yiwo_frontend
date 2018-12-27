<template>
    <div class="nav_title position-fixed width-100">
        <div class="nav_title_name">
            <h3>易窝管理系统</h3>
        </div>
        <div>
            <el-dropdown class="nav_user_center" @command="handlerCommand" v-if="currentUser">
                <i class="fa fa-user"> {{currentUser.name}} </i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="updatePwd">修改密码</el-dropdown-item>
                    <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <a  :href="loginHref" type="text" class="margin-right-l color-white font-m" v-if="!currentUser">登录</a>
        </div>
    </div>
</template>
<script>
// const baseUrl = process.env.HOST+(process.env.PORT == '80'?'': ":"+process.env.PORT);
const protocol = process.env.PROTOCOL+'://';
import {mapState} from 'vuex';
import {Logout} from '@/services/getData';
export default {
    name: 'BaseNavBar',
    data(){
        return{
            userInfo:{},
            loginHref: protocol+ process.env.LOGIN_HOST+'/login?redirect_uri='+location.href
        };
    },
    computed:{
        ...mapState({
            currentUser:state=> state.currentUser
        })
    },
    methods:{
        handlerCommand(command){
            let url = window.location.href;
            if(command == "updatePwd"){

            }else if(command== "logout"){
                Logout(url).then(response=>{
                    this.$message.success("退出成功");
                    localStorage.clear();
                    location.href = protocol + process.env.LOGIN_HOST+'/login?redirect_uri ='+ url;
                }).catch(error=>{
                    this.$message.error(error.message || '退出失败');
                });
            }
        }
    },
    created(){
        
    }
};
</script>
<style lang="scss" scoped>
	.nav_title {
		font-size: 20px;
        background-color: #5198F3;
        color: #FFF;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        z-index: 99;

        h3{
            margin-left: 40px;
        }
	}
    .nav_user_center{
        margin-right: 40px;
    }

</style>
