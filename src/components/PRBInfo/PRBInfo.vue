<template>
    <div class="PRBInfo">
        <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in netUnitName"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择">
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
    </div>
</template>

<script>
export default {
    data(){
        return{
            attributes:[1,2,3,4,5,6,7,8,9,10],
            startTime:'',
            endTime:'',
            startDay:'',
            endDay:''
        }
    },
    props:['netUnitName'],
    methods:{
        select(){
            //查找请求
        }
    }
}
</script>

