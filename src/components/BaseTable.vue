<template>
    <div>
        <el-table :data="table.data" style="width: 100%"
                  @selection-change="handleSelectChange"
                  ref="table"
                  :height="height"
                  :border="border"
                  @sort-change="handleChangeSort"
                  default-expand-all
                  :show-summary="table.showSummary || false"
                  :summary-method="handleSummaries"
                  >
            <el-table-column v-if="table.selection || false"
                             type="selection"
                             width="55"
                             label=" "
                             :selected="true"
            >
            </el-table-column>
            <el-table-column v-if="table.index || false"
                             type="index"
                             width="55"
                             label="序号"
                             :index = indexMethod
            >
            </el-table-column>
            <template v-for="(item,key) in table.columns">
                <slot v-if="item.slot" :name="item.slot"></slot>
                <el-table-column :key="key" v-if="item.prop"
                                 :prop="item.prop"
                                 :label="item.name"
                                 highlight-current-row
                                 :width='item.width'
                                 :min-width="item.minWidth"
                                 :show-overflow-tooltip="item.showOverflowTooltip || false"
                                 :sortable="item.sort || false"
                                 :formatter="item.formatter"
                                 :filtered-value = "item.format"
                >
                </el-table-column>
            </template>
        </el-table>
        <div class="pagination" v-if="table.pages && table.pages.total > 0 ">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="table.pageSizes ? table.pageSizes : [10,15,20,30,40,50,60,70,80,90,100]"
                :current-page="pages.page"
                :page-size="pages.per_page"
                :layout="table.layout ? table.layout : 'total, prev, pager, next, jumper'"
                :total="pages.total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'BaseTable',
        props: {
            table: {
                type: Object
            },
            border: {
                type: Boolean,
                default: false
            },
            selectedOpt:{
                type: Array
            },
            height:{
                type: Number
            }
        },
        data(){
            return{
                pages:{
                    total: 0,
                    per_page: 10,
                    page: 1
                }
            };
        },
        computed:{

        },
        watch:{
            table: {
                handler(table){
                    this.newall();
                },
                deep: true
            }
        },
        mounted(){

        },
        methods:{
            newall(){
                if(this.selectedOpt){
                    this.selectedOpt.forEach(val=>{
                        this.$nextTick(()=>{
                            console.log(val);
                            this.$refs.table.toggleRowSelection(val,true);
                        });
                    });
                }
            },
            indexMethod(index){
                if(this.table.indexMethod){
                    return index+1+((this.table.pages.current_page-1) * this.table.pages.per_page );
                }else{
                    return index + 1;
                }
            },
            handleChangeSort(column, prop, order){
                // console.log(column, prop, order);
                if (this.table.query){
                    this.table.query.order = order;
                    this.table.query.sort = prop;
                }
                // let obj = {
                //     column: column,
                //     prop: prop,
                //     order: order
                // };
                // console.log(column);
                this.$emit('changeSort',column);
            },
            handleSummaries(param){
                return this.$parent.summaryMethod(param);
                // this.$emit('summaryMethod',param);
                // return [];
                // const {
                //     columns
                // } = param;
                // const sums = [];
                // columns.forEach((column, index) => {
                //     if(index === 0) {
                //         sums[index] = '合计';
                //         return;
                //     }
                //     switch(column.property) {
                //         case "creditLimit":
                //             sums[index] = 156666 + "元";
                //             break;
                //         default:
                //             break;
                //     }
                // });
                // return sums;
            },
            handleSelectChange(selection){
                console.log(selection);
                this.table.selected = [];
                selection.forEach((item,index)=>{
                    this.table.selected.push(item);
                });
                this.$emit('getSelected',this.table.selected);
            },
            handleSizeChange(val) {
                this.table.query.per_page = val;
            },
            handleCurrentChange(val) {
                this.table.query.page = val;
                this.$emit('currentChange',val);
            },
        },
        updated(){
            if(this.table.pages){
                this.pages.total = this.table.pages.total;
                this.pages.per_page = this.table.pages.per_page;
                this.pages.page = this.table.pages.current_page;
            }
        }
    };
</script>
<style scoped lang="scss">
    .pagination{
        display: flex;
        align-items: center;
        justify-content: left;
        margin-top: 20px;
    }

    // 设置表头背景
    /deep/ .el-table {
        .el-table__header-wrapper{
            th {
                text-align: center;
                background-color: #f5f7fa;
            }
        }
        td{
            text-align: center;
        }
    }

    /deep/ .el-table__expanded-cell{
        padding:0;
        border: 0;
    }

</style>
