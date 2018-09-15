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
            end: '23:00',
            }">
        </el-time-select>
        <el-button v-on:click="select">确定</el-button>
        <br>
        <div id="chartprb" :style="{width: '600px',height:'400px'}"></div>
    </div>
</template>

<script>
import axios from 'axios'
import xlsx from 'xlsx'
var echarts=require('echarts');

export default {
    data(){
        return{
            attributes:['p0', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15', 'p16', 'p17', 'p18', 'p19', 'p20', 'p21', 'p22', 'p23',
'p24', 'p25', 'p26', 'p27', 'p28', 'p29', 'p30', 'p31', 'p32', 'p33', 'p34', 'p35', 'p36', 'p37', 'p38', 'p39', 'p40', 'p41', 'p42', 'p43', 'p44', 'p45', 'p46', 'p47', 'p48', 'p49', 'p50', 'p51', 'p52', 'p53', 'p54', 'p55', 'p56', 'p57', 'p58', 'p59', 'p60', 'p61', 'p62', 'p63', 'p64', 'p65', 'p66', 'p67', 'p68', 'p69', 'p70', 'p71', 'p72', 'p73', 'p74', 'p75', 'p76', 'p77', 'p78', 'p79', 'p80', 'p81', 'p82', 'p83', 'p84', 'p85', 'p86', 'p87', 'p88', 'p89', 'p90', 'p91', 'p92', 'p93', 'p94', 'p95', 'p96', 'p97', 'p98', 'p99'],
            attr:'',
            name:'',
            startTime:'',
            endTime:'',
            startDay:'',
            endDay:'',
            netUnitName:'',
            dataList:'',
            timeList:'',
            info:'',
        }
    },
    methods:{
        select(){
            //查找请求
            axios.post('http://10.206.12.148:8000/prbinfo/',{
                name:this.name,
                attr:this.attr,
                startDay:this.startDay,
                startTime:this.startTime,
                endDay:this.endDay,
                endTime:this.endTime,
            })
            .then(response=>{
                this.dataList=response.data.rateList;
                this.timeList=response.data.dateList;
                this.info=response;
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
                    yAxis: {
                        max:-100,
                    },
                    series: [{
                        name: '',
                        type: 'bar',
                        data: this.dataList,
                    }],
                    toolbox:{
                        show:true,
                        feature:{
                            saveAsImage:{
                            }
                        }
                    }
                };
                //var prbChart = echarts.init(document.getElementById('chartprb'))
                var prbChart = echarts.init(document.getElementById('chartprb'))
                prbChart.setOption(option)
            })
        }
    },
    created:function(){
        axios.get('http://10.206.12.148:8000/prbinfo/')
        .then(response=>{
            this.netUnitName=response.data.netUnitList
        })
    },
    mounted(){
        
    }
}
</script>

