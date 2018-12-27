<style lang="scss" scoped>
    .register{
        width: 400px;
        height: 600px;
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
    
</style>
<template>
    <el-form ref="registerForm" :rules="rules" class="register" :model="form" label-width="80px">
        <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
            <el-input type="password" v-model="form.rePassword" placeholder="请输入密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="mobile">
            <el-input type="number" v-model="form.mobile" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary"  @click="onSubmit('registerForm')">注册</el-button>
            <el-button @click="onGoBack">返回</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import {Register} from '@/services/getData.js';
import {validateMobile, validateEmail} from '@/utils/validate.js';
export default {
    data(){
        var validPass = (rule, value, callback)=>{
            if(value === ''){
                callback(new Error("请输入密码"));
            } else {
                if(this.form.rePassword){
                    this.$refs.registerForm.validateField('rePassword');
                }
                callback();
            }
        };
        var validPass2 = (rule, value, callback)=>{
            if(value === ""){
                callback(new Error('请再次输入密码'));
            }else if( value !== this.form.password){
                callback(new Error('两次输入密码不一致'));
            }else{
                callback();
            }
        };
        var validMobile = (rule, value, callback)=>{
            if(value !=""){
                if(!validateMobile(value)){
                    callback(new Error("请输入正确的手机号码"));
                }
            }
            callback();
        };
        var validEmail = (rule, value, callback) =>{
            if(value != ""){
                if(!validateEmail(value)){
                    callback(new Error('请输入正确的邮箱'));
                }
            }
            callback();
        };
        return{
            form:{
                name: '',
                password: '',
                rePassword: '',
                mobile: '',
                email: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password:[
                    { required: true, validator: validPass, trigger: 'blur'}
                ],
                rePassword:[
                    {required: true, validator: validPass2, trigger: 'blur'}
                ],
                mobile:[
                    {validator: validMobile, trigger: 'blur'}
                ],
                email:[
                    {validator: validEmail, trigger: 'blur'}
                ]
            }
        };
    },
    methods: {
        onSubmit(formName){
            this.$refs[formName].validate((valid) => {
            if (valid) {
               Register(this.form).then(res=>{
                   this.$message.success('注册成功');
               }).catch(err=>{
                   this.$message.error(err.message || '请输入正确的信息');
               });
            } else {
                this.$message.error('请输入正确的信息');
                return false;
            }
            });
        },
        onGoBack(){
            this.$router.push("/login");
        }
    }
};
</script>
