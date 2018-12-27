<style lang="scss" scoped>
    .p_header{
        display: flex;
        align-items: center;
        justify-content: space-between
    }
</style>

<template>
    <el-container>
        <el-header>
            <div class="p_header">
                <h3>用户列表</h3>
                <div>
                    <el-button type="primary" size="small">添加</el-button>
                    <el-button size="small">返回</el-button>
                </div>
            </div>
        </el-header>
        <el-main>
            <base-table v-bind:table.sync="table" v-loading="loading" @changeSort="changeSort">
                <el-table-column label="操作" slot="opt">
                    <template slot-scope="{row}">
                       <el-button type="primary" size="small">编辑</el-button>
                       <el-button type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </base-table>
        </el-main>
    </el-container>
</template>
<script>
import BaseTable from '@/components/BaseTable.vue';
import {GetUsers} from '@/services/getData.js';
export default {
    name: 'UserList',
    components:{
        BaseTable
    },
    data(){
        return{
            loading: false,
            table: {
                columns: [
                    {
                        prop: 'id',
                        name: '序号',
                        width: 60
                    },
                    {
                        prop: 'name',
                        name: '用户名',
                        width:180
                    },
                    {
                        prop: 'email',
                        name: '邮箱'
                    },
                    {
                        prop: 'mobile',
                        name: '手机号'
                    },
                    {
                        prop: 'sex',
                        name: '性别'
                    },
                    {
                        prop: 'avatar',
                        name: '头像'
                    },
                    {
                        slot: 'opt'
                    }
                ],
                data: [],
                query: {
                    per_page: 10,
                    page: 1,
                },
                selection: false,
                pages: {
                    per_page: 10,
                    current_page: 1,
                    total: 0
                }
            }
        };
    },
    methods:{
        changeSort(){

        },
        fetch(){
            console.log('获取用户');
            GetUsers(this.table.pages).then(res=>{
                this.table.data = res.data;
            }).catch(err=>{
                this.$message.error(err.message || "获取用户失败");
            });
        }
    },
    created(){
        console.log('what fuck');
        this.fetch();
    }
};
</script>
