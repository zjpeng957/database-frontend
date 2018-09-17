<template>
    <div class='C2I'>
        <el-input placeholder="请输入百分比x" v-model="x">
        </el-input>
        <span class="demonstration">%</span>
        <el-button @click="search">确定</el-button>
        <div id="c2i" class='result'>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="a"
                    label="小区A"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="b"
                    label="小区B"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="c"
                    label="小区C"
                    width="180">
                </el-table-column>
            </el-table>
            <div class="block" v-if="length>50" @current-change="currentChange" @prev-click="prevClick" @next-click="nextClick">
                <el-pagination
                    layout="prev, pager, next"
                    :total="lenth/50+1">
                </el-pagination>
            </div>
            <save-table pid="c2i" v-if="tableData!=''"></save-table>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import saveTable from './../saveTable/saveTable.vue'

export default {
    data(){
        return{
            x:'',
            tableData:[],
            allData:'',
            length:0
        }
    },
    methods:{
        search(){
            axios.post('http://127.0.0.1:8000/c2iinfo/',{
                key:this.x
            })
            .then(response=>{
                this.tableData=response.data.data
                //this.length=this.allData.length
            })
        },
        currentChange(curPage){

        },
        prevClick(){

        },
        nextClick(){
            
        }
    },
    components:{
        saveTable
    }
}
</script>

