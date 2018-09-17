<template>
    <div class="NavBar">
        <el-menu :default-active="activateIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">信息查询</template>
            <el-menu-item index="1-1">小区配置</el-menu-item>
            <el-menu-item index="1-2">基站eNodeB</el-menu-item>
            <el-menu-item index="1-3">KPI指标</el-menu-item>
            <el-menu-item index="1-4">PRB</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">导入导出数据</template>
            <el-menu-item index="2-1">导入</el-menu-item>
            <el-menu-item index="2-2">导出</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">三元组分析</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activateIndex:'1',
    }
  },
  methods:{
    handleSelect(key,path){
     this.$emit('select-item',key)
    }
  }
}
</script>

