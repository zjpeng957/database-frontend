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
        <el-select v-model="attr" placeholder="请选择">
            <el-option
            v-for="item in attributes"
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
            attr:'',
            attributes:['RRC连接建立完成次数 (无)','RRC连接请求次数（包括重发） (无)','RRC建立成功率qf (%)','E-RAB建立成功总次数 (无)','E-RAB建立尝试总次数 (无)','E-RAB建立成功率2 (%)','eNodeB触发的E-RAB异常释放总次数 (无)','小区切换出E-RAB异常释放总次数 (无)','E-RAB掉线率(新) (%)','无线接通率ay (%)','eNodeB发起的S1 RESET导致的UE Context释放次数 (无)','UE Context异常释放次数 (无)','UE Context建立成功总次数 (无)','无线掉线率 (%)','eNodeB内异频切换出成功次数 (无)','eNodeB内异频切换出尝试次数 (无)','eNodeB内同频切换出成功次数 (无)','eNodeB内同频切换出尝试次数 (无)','eNodeB间异频切换出成功次数 (无)','eNodeB间异频切换出尝试次数 (无)','eNodeB间同频切换出成功次数 (无)','eNodeB间同频切换出尝试次数 (无)','eNB内切换成功率 (%)','eNB间切换成功率 (%)','同频切换成功率zsp (%)','异频切换成功率zsp (%)','切换成功率 (%)','小区PDCP层所接收到的上行数据的总吞吐量 (比特)','小区PDCP层所发送的下行数据的总吞吐量 (比特)','RRC重建请求次数 (无)','RRC连接重建比率 (%)','通过重建回源小区的eNodeB间同频切换出执行成功次数 (无)','通过重建回源小区的eNodeB间异频切换出执行成功次数 (无)','通过重建回源小区的eNodeB内同频切换出执行成功次数 (无)','通过重建回源小区的eNodeB内异频切换出执行成功次数 (无)','eNB内切换出成功次数 (次)','eNB内切换出请求次数 (次)'],
        }
    },
    methods:{
        search:function(){
            axios.post('http://10.206.12.148:8000/kpiinfo/',{
                name:this.name,
                attr:this.attr,
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
                    }],
                    toolbox:{
                        show:true,
                        feature:{
                            saveAsImage:{
                            }
                        }
                    }
                };
                var rpcChart = echarts.init(document.getElementById('rpcChart'));
                rpcChart.setOption(option);
            })
        }
    },
    created:function(){
        
        axios.get('http://10.206.12.148:8000/kpiinfo/')
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
