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
        <el-button @click="ExportData">导出</el-button>
        <p>{{info}}</p>
        <el-dialog
            title="另存为"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
            >
            <a v-bind:href="url" download="a.txt">a.xlsx右键另存为(点击保存到默认路径)</a>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import xlsx from 'xlsx'
import axios from 'axios'

export default {
    data(){
        return{
            options:[
            {
                value:'1',
                label:'cell'
            },
            {
                value:'2',
                label:'eNodeB'
            },
            {
                value:'3',
                label:'PRBNew'
            },
        ],
        value:'',
        url:'',
        dialogVisible:false,
        info:'',
        }
    },
    methods:{
        ExportData(){
            axios.post('http://10.206.12.148:8000/download/',{
                table:this.value,
            })
            .then(response=>{
                this.info=response;
                //let Blob=new Blob([response.data],{type:""});
                this.url=window.URL.createObjectURL(new Blob([response.data],{type:""}))
                this.dialogVisible = true
            })
        },
        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>

