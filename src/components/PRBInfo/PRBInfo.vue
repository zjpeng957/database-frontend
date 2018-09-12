<template>
    <div class="PRBInfo">
        <el-select v-model="name" placeholder="请选择">
            <el-option
            v-for="item in netUnitName"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
        <el-select v-model="attr" placeholder="请选择">
            <el-option
            v-for="item in attributes"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
        <div class="block">
                <span class="demonstration">起始日期</span>
                <el-date-picker
                v-model="startDay"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
        </div>
        <el-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{
            start: '00:00',
            step: '01:00',
            end: '24:00'
            }">
        </el-time-select>
        <div class="block">
                <span class="demonstration">结束日期</span>
                <el-date-picker
                v-model="endDay"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
        </div>
        <el-time-select
            placeholder="结束时间"
            v-model="endTime"
            :picker-options="{
            start: '00:00',
            step: '01:00',
            end: '24:00',
            minTime: startTime
            }">
        </el-time-select>
        <el-button v-on:click="select">确定</el-button>
        <div id="prbChart" :style="{width: '600px',height:'400px'}" v-if="dataList!=''"></div>
    </div>
</template>

<script>
import axios from 'axios'
import xlsx from 'xlsx'
var echarts=require('echarts');

export default {
    data(){
        return{
            attributes:[1,2,3,4,5,6,7,8,9,10],
            attr:'',
            name:'',
            startTime:'',
            endTime:'',
            startDay:'',
            endDay:'',
            netUnitName:'',
            dataList:'',
            timeList:'',
        }
    },
    methods:{
        select(){
            //查找请求
            axios.post('http://localhost:8000/prbinfo/',{
                name:this.name,
                attr:this.attr,
                startDay:this.startDay,
                startTime:this.startTime,
                endDay:this.endDay,
                endTime:this.endTime,
            })
            .then(response=>{
                this.dataList=response.data.dataList;
                this.timeList=response.data.timeList;
                var option = {
                    title: {
                        text: 'PRB变化'
                    },
                    tooltip: {},
                    legend: {
                        data:['%']
                    },
                    xAxis: {
                        data:this.timeList,
                    },
                    yAxis: {},
                    series: [{
                        name: '',
                        type: 'bar',
                        data: this.dataList,
                    }]
                };
                var prbChart = this.$echarts.init(document.getElementById('prbChart'))
                prbChart.setOption(option)
            })
        }
    },
    created:function(){
        axios.get('http://localhost:8000/prbinfo/')
        .then(response=>{
            this.netUnitName=response.data.netUnitName
        })
    },
    mounted(){
        
    }
}
</script>

