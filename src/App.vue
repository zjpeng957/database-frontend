<template>
  <div id="app">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
          <nav-bar v-on:select-item="changeIndex"></nav-bar>
          <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
        <component v-bind:is="selectedComponent"></component>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'
import ImportUnit from './components/ImportUnit/ImportUnit.vue'
import ExportUnit from './components/ExportUnit/ExportUnit.vue'
import CellInfo from './components/CellInfo/CellInfo.vue'
import NodeBInfo from './components/NodeBInfo/NodeBInfo.vue'
import KPIInfo from './components/KPIInfo/KPIInfo.vue'
import PRBInfo from './components/PRBInfo/PRBInfo.vue'

export default {
  data(){
    return{
      selectedIndex:'1-1',
      selectedComponent:'CellInfo',
      NetUnitName:''
    }
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    },
    changeIndex: function(curIndex){
      switch(curIndex){
        case "1-1": selectedComponent='CellInfo';
                    break;
        case "1-2": selectedComponent='NodeBInfo';
                    break;
        case "1-3": selectedComponent='KPIInfo';
                    break;
        case "1-5": selectedComponent='PRBInfo';
                    break;
        case "2-1": selectedComponent='ImportUnit';
                    break;
        case "2-2": selectedComponent='ExportUnit';
                    break;
      }
      this.selectedIndex = curIndex
    }
  },
  components:{
    NavBar,
    ImportUnit,
    ExportUnit,
    CellInfo,
    NodeBInfo,
    KPIInfo,
    PRBInfo
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
