Page({
  data: {
    sl1:"",
    sl2:"",
    sl3:"",
    sl4:"",
    sysw:"",
    jjsw:"",
    hsdsw:"",
    scdsw:""
  },
  onLoad: function() {
    var t=wx.getStorageSync('tizhi');
    var j=wx.getStorageSync('zhengxing');
    var k=this;
    k.setData({sl1:t.sl1,sl2:t.sl2,sl3:t.sl3,sl4:t.sl4,sysw:j.sysw,jjsw:j.jjsw});
}
});