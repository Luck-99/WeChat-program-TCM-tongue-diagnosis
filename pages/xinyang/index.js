Page({
  data: {
    jsty:"",
    ylts:"",
    yytl:"",
    syyy:""
  },
  onLoad: function() {
    var t=wx.getStorageSync('tizhi');
    var j=wx.getStorageSync('zhengxing');
    var k=this;
    console.log(t.cjbx);
    k.setData({jsty:t.jsty,ylts:t.ylts,yytl:t.yytl,syyy:j.syyy});
}
});