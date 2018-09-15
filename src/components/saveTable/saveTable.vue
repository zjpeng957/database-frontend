<template>
    <div class="saveTable">
        <el-button @click="dialogVisible = true">保存到本地</el-button>
        <el-dialog
            title="另存为"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
            @open="saveExcel">
            <a v-bind:href="url" download="a.xlsx">a.xlsx右键另存为(点击保存到默认路径)</a>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import xlsx from 'xlsx'
import FileSaver from 'file-saver'

export default {
    data(){
        return{
            dialogVisible:false,
            url:'',
        }
    },
    props:['pid'],
    methods:{
        saveExcel(){
            var wb =xlsx.utils.table_to_book(document.getElementById(this.pid));
            var wbout=xlsx.write(wb,{bookType:'xlsx',bookSST: true,type:'array'});
            this.url = window.URL.createObjectURL(new Blob([wbout],{type:'application/octet-stream'}));
            /*
            try {
             FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'sheetjs.xlsx')
            } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
            return wbout;
            */
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

