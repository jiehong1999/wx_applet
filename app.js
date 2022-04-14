// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 自定义头部
    let menuButtonObject = wx.getMenuButtonBoundingClientRect(); //获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
    wx.getSystemInfo({//获取系统信息
      success: res => {
        let statusBarHeight = res.statusBarHeight,//状态栏的高度，单位px
          navTop = menuButtonObject.top,//胶囊按钮与顶部的距离
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;//导航高度
           this.globalData.navHeight = navHeight;
           this.globalData.navTop = navTop;
           this.globalData.windowHeight = res.windowHeight;//可使用窗口高度，单位px
      },
      fail(err) {
        console.log(err);
      }
    })

  },
  globalData: {
    userInfo: null
  }
})
