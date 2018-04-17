<template>
    <div class="ExportUnit">
        <div>
            <p>选择要导出的表格</p>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <br>
        <el-button @click="ExportData">导出</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            options:[
            {
                value:'选项1',
                label:'tbCell'
            },
            {
                value:'选项2',
                label:'tbAdjCell'
            },
            {
                value:'选项3',
                label:'tbSecAdjCell'
            },
        ],
        value:''
        }
    },
    methods:{
        ExportData:function(){
            console.log("succeed!")
        }
    }
}
</script>

