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
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //点击返回
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
  }
})
