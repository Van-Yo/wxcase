# wechat-case1（第一个微信小程序）
### 1.引入在线json文件，实现静态数据的调用;app.js:
```
App({
  globalData:{

  },
  onLaunch() {
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success:(response) =>{
        Object.assign(this.globalData,response.data)
      }
    })
  }
})

```
### 2.设置两个页面:index,stories
```
{
  "pages":[
    "pages/index/index",
    "pages/stories/index"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Vanyo",
    "navigationBarTextStyle":"black"
  },
  "tabBar":{
    "selectedColor":"#000000",
    "borderStyle":"white",
    "backgroundColor":"#ededed",
    "list":[
      {
        "text":"首页",
        "pagePath":"pages/index/index",
        "iconPath":"assets/icons/home.png",
        "selectedIconPath":"assets/icons/home-active.png"
      },
      {
        "text":"故事",
        "pagePath": "pages/stories/index",
        "iconPath": "assets/icons/event.png",
        "selectedIconPath": "assets/icons/event-active.png"
      }
    ]
  }
}
```
### 3.index页
![index](https://github.com/Van-Yo/wxcase/blob/master/images/index1.png)
![index](https://github.com/Van-Yo/wxcase/blob/master/images/index2.png)
### 4.story页...
