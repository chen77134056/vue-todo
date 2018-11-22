import Vue from 'vue'
import App from './app.vue'
require('./assets/styles/global.css')
require('./assets/styles/css.css')

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)
