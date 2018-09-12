<template>
    <div class="NodeBInfo">
        <span>查找方式</span>
        <el-select v-model="searchType" slot="prepend" placeholder="请选择">
            <el-option label="NodeBID" value="1"></el-option>
            <el-option label="NodeBName" value="2"></el-option>
        </el-select>
        <el-select v-model="searchKey" filterable placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        <br>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="eNodeB_id"
                label="eNodeB_ID"
                width="100">
            </el-table-column>
            <el-table-column
                prop="name"
                label="eNodeBName"
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
            //发送查找请求
        }
    }
}
</script>