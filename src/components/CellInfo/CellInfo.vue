<template>
    <div class="CellInfo">
        <span>查找方式</span>
        <el-select v-model="searchType" slot="prepend" placeholder="请选择">
            <el-option label="CellID" value="1"></el-option>
            <el-option label="CellName" value="2"></el-option>
        </el-select>
        <el-select v-model="searchKey" filterable placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
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
        <p>{{info}}</p>
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
import axios from 'axios'
//Vue.prototype.$http = axios

export default {
    data(){
        return{
            searchType:'',
            searchKey:'',
            idOptions:'',
            nameOptions:'',
            tableData:[],
            info:''
        }
    },
    //props:['tableData'],
    computed:{
        options:function(){
            if(this.searchType=='1') return this.idOptions
            else return this.nameOptions
        }
    },
    methods:{
        search:function(){
            
            axios.post('/cellinfo/',{
                type:this.searchType,
                key:this.searchKey,
            })
            .then(response=>{
                this.info=response.data.tableData;
                this.tableData=response.data.tableData;
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },
    
    created:function(){
        axios.get('/cellinfo/')
        .then(response=>{
            //this.info=response.data.idOptions;
            this.idOptions=response.data.idOptions;
            this.nameOptions=response.data.nameOptions;
        })
    }
}
</script>

