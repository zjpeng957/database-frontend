<template>
    <div class="CellInfo">
        <el-input placeholder="请输入内容" v-model="searchKey" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="CellID" value="1"></el-option>
            <el-option label="CellName" value="2"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
        <br>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="cell_id"
                label="Cell_ID"
                width="100">
            </el-table-column>
            <el-table-column
                prop="name"
                label="CellName"
                width="100">
            </el-table-column>
            <el-table-column
                prop="city"
                label="City"
                width="100">
            </el-table-column>
        </el-table>
        <el-button>另存为</el-button>
    </div>
</template>
<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
<script>
export default {
    data(){
        return{
            searchKey:'',
            select:''
        }
    },
    props:['tableData'],
    methods:{
        search:function(){
            
        }
    }
}
</script>

