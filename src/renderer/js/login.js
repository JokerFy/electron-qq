const{ipcRenderer} = require('electron')
console.log(432)
export default {
    name: 'login',
    components: {  },
    methods: {
        open (link) {
            this.$electron.shell.openExternal(link)
        }
    },
    mounted: function () {
        ipcRenderer.send('login-window')
    }
}
