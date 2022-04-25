// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    recommend_height:""
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow(){
    var that=this;
    //获取元素
    var query = wx.createSelectorQuery();
    //获取内容高度
    query.select('.main_box').boundingClientRect();
    //获取轮播图
    query.select('#swiper_box').boundingClientRect();
    //分类导航
    query.select('#type_nav_list').boundingClientRect();
    //获取完回掉
    query.exec(function (res) {
        console.log(res);
    });
  },
  onLoad() {
    
  },
})
