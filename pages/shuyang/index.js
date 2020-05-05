Page({
  data: {
    sjys:"",
    jlbj:""
  },
  onLoad: function() {
    var t=wx.getStorageSync('tizhi');
    var k=this;
    k.setData({sjys:t.sjys,jlbj:t.jlbj});
}
});