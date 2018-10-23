const app = getApp()
Page({
  data:{
    slides:null,
    entitles:null
  },
  onLoad(){
    this.setData({
      slides: app.globalData.slides,
      entities: app.globalData.vehicles
    })
  }
})