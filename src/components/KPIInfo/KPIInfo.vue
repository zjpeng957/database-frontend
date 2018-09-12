<template>
    <div class="KPIInfo">
        <el-select v-model="name" placeholder="请选择">
            <el-option
            v-for="item in netUnitList"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
        <el-button @click="search">确定</el-button>
        <br>
        <el-row>
            <div class="block">
                <span class="demonstration">开始日期</span>
                <el-date-picker
                v-model="beginTime"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">结束日期</span>
                <el-date-picker
                v-model="endTime"
                align="right"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
            </div>
        </el-row>
        <br>
         <div id="rpcChart" :style="{width: '600px',height:'400px'}" v-if="rateList!=''"></div>
    </div>
</template>

<script>
//import echarts from 'echarts'
var echarts=require('echarts');
import axios from 'axios'

export default {
    data(){
        return{
            resultIsGet:false,
            beginTime:'',
            endTime:'',
            netUnitList:'',
            rateList:[1,2,3,4,5],
            dateList:'',
            name:'',
        }
    },
    methods:{
        search:function(){
            axios.post('http://localhost:8000/kpiinfo/',{
                name:this.name,
                beginTime:this.beginTime,
                endTime:this.endTime,
            })
            .then(response=>{
                this.dateList=response.data.dateList;
                this.rateList=response.data.rateList;
                var option = {
                    title: {
                        text: 'RPC连接重建比率变化'
                    },
                    tooltip: {},
                    legend: {
                        data:['%']
                    },
                    xAxis: {
                        data:this.dateList,
                    },
                    yAxis: {},
                    series: [{
                        name: '',
                        type: 'bar',
                        data: this.rateList,
                    }]
                };
                var rpcChart = echarts.init(document.getElementById('rpcChart'));
                rpcChart.setOption(option);
            })
        }
    },
    created:function(){
        
        axios.get('http://localhost:8000/kpiinfo/')
        .then(response=>{
            this.netUnitList=response.data.netUnitList;
        })
    },
    mounted(){
        //let rpcChart = echarts.init(document.getElementById('rpcChart'));
        /*
        var option = {
                    title: {
                        text: 'RPC连接重建比率变化'
                    },
                    tooltip: {},
                    legend: {
                        data:['%']
                    },
                    xAxis: {
                        data:this.dateList,
                    },
                    yAxis: {},
                    series: [{
                        name: '',
                        type: 'bar',
                        data: this.rateList,
                    }]
                };
                var rpcChart = echarts.init(document.getElementById('rpcChart'));
                rpcChart.setOption(option);
            */
    }
}
</script>
