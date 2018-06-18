import Vue from 'vue'
import App from './App'
import './css/app.css'
import store from './store';
Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$store = store;
import '../static/weui/weui.css'
const app = new Vue({
  App
})
app.$mount();

export default {
  config: {
    pages: [
      'pages/index/index',
      'pages/order/order',
      'pages/me/me',
      'pages/dnkd/dnkd'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#009AFC',
      navigationBarTitleText: '龙门驿站',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#818181',
      selectedColor: '#009AFC',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'static/images/icon_nav_button.png',
          selectedIconPath: 'static/images/icon_nav_button.png'
        },
        {
          pagePath: 'pages/order/order',
          text: '订单',
          iconPath: 'static/images/icon_nav_cell.png',
          selectedIconPath: 'static/images/icon_nav_cell.png'
        },
        {
          pagePath: 'pages/me/me',
          text: '我',
          iconPath: 'static/images/icon_nav_toast.png',
          selectedIconPath: 'static/images/icon_nav_toast.png'
        }
      ]
    }
  }
}
