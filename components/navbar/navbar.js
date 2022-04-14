// pages/components/navbar.js
const App = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //头部显示名称
    pageName:String,
    //显示返回首页的图标
    showHome: {
      type: Boolean,
      value: false
    },
    //显示返回上一层图标
    showBack:{
      type: Boolean,
      value: false
    },
    //是否显示标题
    isTitle: {
      type: Boolean,
      value: false
    },
    // 自定义头部背景色
    bgColor: {
      type: String,
      value: ""

    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    navTop: App.globalData.navTop,
    navHeight: App.globalData.navHeight,
    windowHeight: App.globalData.windowHeight,
    array: ['东莞', '杭州', '深圳', '成都'],
    index: 0,
  },
  lifetimes: {
    attached: function () {
      this.setData({
        navH: App.globalData.navHeight
      })
     }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange: function (e) {
      console.log(e)
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.triggerEvent('clicks',e.detail.value);
      this.setData({
        index: e.detail.value
      })
    },
    //回退
    navBack: function () {
      if(this.showBack){
        wx.navigateBack()      
      }
      if(this.showHome){
        wx.navigateTo({
          url: '/pages/index/index',
        })
      }
       
    },
    //回主页
    toIndex: function () {
      wx.navigateTo({
        url: '/pages/index/index'
      })
    },
    titlehandel(){
      this.triggerEvent('click');
    },
  }
})
