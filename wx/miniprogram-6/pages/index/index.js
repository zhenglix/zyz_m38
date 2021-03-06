// 0 引入 用来发送请求的 方法 一定要把路径补全
import { request } from "../../request/index.js";
Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航 数组
    catesList:[],
    // 楼层数据
    floorList:[]
  },
  // 页面开始加载 就会触发
  onLoad: function (options) {

    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
      
  },

  // 获取轮播图数据
  getSwiperList(){
    request({ url: "/banner/list" })
    .then(result => {
      this.setData({
        swiperList: result
      })
    })
  },
  // 获取分类数据
  getCateList(){
    request({ url: "/cms/category/list" })
    .then(result => {
      this.setData({
        catesList: result
      })
    })
  },
  // 获取教程数据
  getFloorList(){
    request({ 
      url: "/cms/news/list",
    })
    .then(result => {
      this.setData({
        floorList: result
      })
    })
  },
})
