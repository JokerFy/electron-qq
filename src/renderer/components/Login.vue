<template>
  <el-container id="wrapper" class="ele_drag">
    <el-header>
      <i class="iconfont icon-huabanfuben"></i>
      Header
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import SystemInformation from './LandingPage/SystemInformation'
const{ipcRenderer} = require('electron')
export default {
  name: 'login',
  components: { SystemInformation },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  },
  mounted: function () {
    ipcRenderer.send('login-window')
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.el-header, .el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

#wrapper {
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
}

.ele_drag {
  -webkit-app-region: drag; /* 让元素可拖动，设置了drag的元素不可点击 */
}

</style>
