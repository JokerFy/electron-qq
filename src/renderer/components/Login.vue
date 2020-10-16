<template>
  <el-container class="ele_drag">
    <el-header height="40px" class="no-padding">
      <el-row class="height-row">
        <el-col :span="4">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huabanfuben"></use>
          </svg>
        </el-col>
        <el-col :span="16">
        </el-col>
        <el-col :span="4">
        </el-col>
      </el-row>
    </el-header>
    <el-main>
<!--      Main-->
      <el-row class="demo-avatar demo-basic">
        <el-col :span="24">
          <div class="demo-basic--circle">
            <div class="block"><el-avatar :size="90" :src="circleUrl"></el-avatar></div>
          </div>
          <div class="text-input">
            <el-input v-model="username_input"></el-input>
            <el-row>
              <el-col :span="20">
                <el-input v-model="password_input" placeholder="输入密码"></el-input>
              </el-col>
              <el-col class="flex-row" :span="4">
                <svg style="font-size:30px"  class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jiantou"></use>
                </svg>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer height="40px" class="no-padding"></el-footer>
  </el-container>
</template>

<script type="text/javascript">
const{ipcRenderer} = require('electron')
export default {
  name: 'login',
  components: {  },
  data() {
    return {
      circleUrl:require("../assets/avatar.jpeg")
    }
  },
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

<style lang="scss">
@import "../css/login";
</style>

