<template>
    <div class="KPIInfo">
        <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in netUnitList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
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
        <div class="charts">
            <div id="rpcChart" :style="{width: '600px',height:'400px'}"></div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'

export default {
    data(){
        return{
            resultIsGet:false,
            beginTime:'',
            endTime:'',
            netUnitList:'',
            rateList:'',
            dateList:''
        }
    },
    methods:{
        search:function(){
            //发送查找请求
        }
    },
    mounted(){
        let rpcChart = this.$echarts.init(document.getElementById('rpcChart'))
        var option = {
            title: {
                text: 'RPC连接重建比率变化'
            },
            tooltip: {},
            legend: {
                data:['%']
            },
            xAxis: {
                data:dateList,
            },
            yAxis: {},
            series: [{
                name: '',
                type: 'bar',
                data: rateList,
            }]
        };
        rpcChart.setOption(option)
    }
}
</script>
