Page({
  data: {
    tydl:"",
    syyd:"",
    jjyd:""
  },
  onLoad: function() {
    var t=wx.getStorageSync('tizhi');
    var j=wx.getStorageSync('zhengxing');
    var k=this;
    k.setData({tydl:t.tydl,syyd:j.syyd,jjyd:j.jjyd});
}
});