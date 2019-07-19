const app = getApp()
Page({
  data: {

  },

  // 跳转绘画页面
  gotoPaint() {
    wx.navigateTo({
      url: '/components/paint/paint',
    })
  }
})
