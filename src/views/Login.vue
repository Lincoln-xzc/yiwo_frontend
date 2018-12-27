<style lang="scss" scoped>
    .login{
        width: 400px;
        height: 300px;
        border: 1px solid #e0dbdb;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        left: 35%;
        top:20%;
    }
    .loginBtn{
        width: 220px;
        margin-right: 35px;
    }
</style>
<template>
    <el-form ref="loginForm" :rules="rules" class="login" :model="form" label-width="80px">
        <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="loginBtn" @click="onSubmit('loginForm')">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import {Login} from '@/services/getData.js';
import {TOKEN} from '@/store/types.js';
export default {
    data(){
        return{
            form:{
                name: '',
                password: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur'}
                ]
            }
        };
    },
    methods: {
        onSubmit(formName){
            this.$refs[formName].validate((valid) => {
            if (valid) {
               Login(this.form).then(res=>{
                   console.log(res);
                   this.$message.success("登录成功");
                   this.$store.commit(TOKEN, res.data.token);
                   localStorage.setItem('token', res.data.token);
                   this.$router.push("/");
               }).catch(err=>{
                   this.$message.error(err.message || "用户名或密码错误");
               });
            } else {
                this.$message.error('请输入正确的用户名和密码');
                return false;
            }
            });
        }
    }
};
</script>
