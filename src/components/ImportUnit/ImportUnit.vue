<template>
    <div class="ImportUnit">
        <div>
            <p>选择要导入的表格</p>
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
        <el-upload
            class="upload-demo"
            drag
            action="http://localhost:8000/import/"
            :data="value"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传csv/excel文件</div>
        </el-upload>
        </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            options:[
            {
                value:'1',
                label:'tbCell'
            },
            {
                value:'2',
                label:'tbKPI'
            },
            {
                value:'3',
                label:'tbPRB'
            },
            {
                value:'4',
                label:'tbMROData'
            }
        ],
        value:'',
        perc:0,
        info:'',
        }
    },
}
</script>

