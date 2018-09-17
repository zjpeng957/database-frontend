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
            id="cell"
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="CITY"
                label="CITY"
                width="100">
            </el-table-column>
            <el-table-column
                prop="SECTOR_ID"
                label="SECTOR_ID"
                width="100">
            </el-table-column>
            <el-table-column
                prop="ENODEBID"
                label="ENODEBID"
                width="100">
            </el-table-column>
            <el-table-column
                prop="SECTOR_NAME"
                label="SECTOR_NAME"
                width="100">
            </el-table-column>
            <el-table-column
                prop="EARFCN"
                label="EARFCN"
                width="100">
            </el-table-column>
            <el-table-column
                prop="PCI"
                label="PCI"
                width="100">
            </el-table-column>
            <el-table-column
                prop="ENODEB_NAME"
                label="ENODEB_NAME"
                width="100">
            </el-table-column>
            <el-table-column
                prop="PSS"
                label="PSS"
                width="100">
            </el-table-column>
            <el-table-column
                prop="SSS"
                label="SSS"
                width="100">
            </el-table-column>
            <el-table-column
                prop="TAC"
                label="TAC"
                width="100">
            </el-table-column>
            <el-table-column
                prop="VENDOR"
                label="VENDOR"
                width="100">
            </el-table-column>
            <el-table-column
                prop="LONGITUDE"
                label="LONGITUDE"
                width="100">
            </el-table-column>
            <el-table-column
                prop="LATITUDE"
                label="LATITUDE"
                width="100">
            </el-table-column>
            <el-table-column
                prop="STYLE"
                label="STYLE"
                width="100">
            </el-table-column>
            <el-table-column
                prop="AZIMUTH"
                label="AZIMUTH"
                width="100">
            </el-table-column>
            <el-table-column
                prop="HEIGHT"
                label="HEIGHT"
                width="100">
            </el-table-column>
            <el-table-column
                prop="ELECTTILT"
                label="ELECTTILT"
                width="100">
            </el-table-column>
            <el-table-column
                prop="MECHTILT"
                label="MECHTILT"
                width="100">
            </el-table-column>
            <el-table-column
                prop="TOTLETILT"
                label="TOTLETILT"
                width="100">
            </el-table-column>
        </el-table>
        <save-table pid="cell" v-if="tableData!=''"></save-table>
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
import saveTable from './../saveTable/saveTable.vue'
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
            
            axios.post('http://127.0.0.1:8000/cellinfo/',{
                //type:this.searchType,x
                searchkey:this.searchKey,
            })
            .then(response=>{
                this.info=response;
                this.tableData=response.data.tableData;
            })
            .catch(error=>{
                console.log(error)
            })
        },
    },
    
    created:function(){
        axios.get('http://127.0.0.1:8000/cellinfo/')
        .then(response=>{
            this.info=response.data.idOptions;
            this.idOptions=response.data.ID;
            this.nameOptions=response.data.name;
        })
    },
    components:{
        saveTable
    }
}
</script>

