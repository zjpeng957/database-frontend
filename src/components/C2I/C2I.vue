<template>
    <div class='C2I'>
        <el-input placeholder="请输入百分比x" v-model="x">
        </el-input>
        <span class="demonstration">%</span>
        <el-button @click="search">确定</el-button>
        <div class='result' v-if="tableData!=''">
            <el-table
                v-if="tableData!=''"
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="AId"
                    label="小区A"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="BId"
                    label="小区B"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="CId"
                    label="小区C">
                </el-table-column>
            </el-table>
            <div class="block" v-if="length>50" @current-change="currentChange" @prev-click="prevClick" @next-click="nextClick">
                <el-pagination
                    layout="prev, pager, next"
                    :total="lenth/50+1">
                </el-pagination>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            x:'',
            tableData:'',
            allData:'',
            length:0
        }
    },
    methods:{
        search(){
            axios.post('/c2iinfo/',{
                x:this.x
            })
            .then(response=>{
                this.allData=response.data.allData
                this.length=this.allData.length
            })
        },
        currentChange(curPage){

        },
        prevClick(){

        },
        nextClick(){
            
        }
    }
}
</script>

