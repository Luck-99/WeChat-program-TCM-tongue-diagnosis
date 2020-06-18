function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}
var utilMd5 = require('../../utils/md5.js'); 
var a = getApp().globalData.requesturl, e = (getApp().globalData.takeimgsrc, 
require("../../utils/uploadFile.js")), o = require("../../utils/util.js");

Page({
    data: {
        display1: "none",
        display2: "block",
        display3: "none",
        display4: "none",
        display5: "none",
        qianhou: "front",
        i: 0,
        imgsrc: "",
        imgsrc0: "",
        imgsrc1: "",
        imgsrc2: "",
        restype: [ "", "", "" ],
        tizhi:"",
        cjbx:"",
        jsty:"",
        fbqx:"",
        ylts:"",
        sjys:"",
        tydl:"",
        qjts:"",
        yytl:"",
        jlbj:"",
        yyjj:"",
        sl1:"",
        sl2: "",
        sl3:"",
        sl4:"",
        /*zhengxing:"",
        jieshi:"",
        sysw:"",
        jjsw:"",
        syyd:"",
        jjyd:"",
        syys:"",
        syyy:"",*/
        cha1:"",
        cha2:"",
        cha3:"",
        cha4:"",
        cha5:"",
        cha6:"",
        cha7:"",
        cha8:"",
        cha9:"",
        cha10:"",
        cuttongue:""
    },
    onLoad: function(t) {
        this.ctx = wx.createCameraContext();
    },
    onReady: function() {},
    onShow: function() {
        
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    takePhoto: function() {
        var t = this;
        this.ctx.takePhoto({
            quality: "high",
            success: function(a) {
                e(a.tempImagePath, "", function(a) {
                    console.log("======上传成功图片地址为：", a), t.setData({imgsrc:a,display1: "block",display2: "none"});
                }, function(t) {
                    console.log("======上传失败======", t);
                });
            }
        });
    },
    takePhoto_confirm: function() {
      var confirm = this;
      wx.showLoading({
        title: "图片正在上传..",
        mask: !0
      }),confirm.Discern(confirm.data.imgsrc);
    },
    InsertData: function() {  //发数据到服务器
        var e = this;
        wx.request({
            url: a + '/test/mysql_operation_insert.php',
            data: {
                openid_r: getApp().globalData.openID,
                time:new Date().toJSON().substring(0, 10) + " "+ new Date().toTimeString().substring(0,8),
                tizhi:e.data.tizhi,
                cjbx:e.data.cjbx,
                jsty:e.data.jsty,
                fbqx:e.data.fbqx,
                ylts:e.data.ylts,
                sjys:e.data.sjys,
                tydl:e.data.tydl,
                qjts:e.data.qjts,
                yytl:e.data.yytl,
                jlbj:e.data.jlbj,
                yyjj:e.data.yyjj,
                sl1:e.data.sl1,
                sl2:e.data.sl2,
                sl3:e.data.sl3,
                sl4:e.data.sl4,
                cha1:e.data.cha1,
                cha2:e.data.cha2,
                cha3:e.data.cha3,
                cha4:e.data.cha4,
                cha5:e.data.cha5,
                cha6:e.data.cha6,
                cha7:e.data.cha7,
                cha8:e.data.cha8,
                cha9:e.data.cha9,
                cha10:e.data.cha10,
                cuttongue:e.data.cuttongue
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(a) {
                console.log("插入数据的结果："), console.log(a)
                wx.redirectTo({
                    url: "../result/index?tizhi=" + e.data.tizhi
                });
            },
            fail: function(t) {
                e.setData({
                    showshibie: !1,
                    showtimeout: !0
                });
            }
        });
    },
    view_2: function() {  //后置拍照
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed " ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var n = a.tempFilePaths[0], i = o.formatTime(new Date());
                console.log(i), e(n,"", function(a) {
                    console.log("======上传成功图片地址为：", a), t.setData({imgsrc:a,display1: "block",display2: "none"});
                }, function(t) {
                    console.log("======上传失败======", t);
                });
            }
        });
    },
    takePhoto_rephoto: function() {  //是否重拍
        this.setData({
            display1: "none"
        }), this.setData({
            display2: "block"
        });
    },
    cameradirection: function() {
        "front" == this.data.qianhou ? (this.setData({
            qianhou: "back"
        }), console.log(this.data.qianhou)) : (this.setData({
            qianhou: "front"
        }), console.log(this.data.qianhou));
    },
    
    Discern: function(u) {  //发送到服务器调用API
      var o = this;
      var restime= new Date().toJSON().substring(0, 10).replace(/-/g,'') + new Date().toTimeString().substring(0,8).replace(/:/g,'');
      wx.request({
        url: "http://www.bayescience.com/api/analysis",
        data:{
          timestamp:restime,
          app_id:"6f05e4a27efa461a", 
          version:"1.0",
          sign:utilMd5.hexMD5(utilMd5.hexMD5(restime)+'06871f5054bc44aca6a7afb55de2f119'), 
          method: "9tiAnalysis",
          imgpath: u
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
        method: "POST",
        success: function(x) {
        console.log("识别的结果："),console.log(x);
        var data=JSON.parse(x.data.data);
          if (
          200 == x.data.code && data.message!='图片质量过低') {
              var n;
              o.setData((n = {}, 
              t(n, "display2", "none"),  t(n, "cuttongue", data.cutTongue), t(n, "display1", "block"), 
              t(n, "cha1", data.char[0].probability), t(n, "cha2", data.char[1].probability), t(n, "cha3", data.char[2].probability), 
              t(n, "cha4", data.char[4].probability), t(n, "cha5", data.char[4].probability), t(n, "cha6", data.char[5].probability), 
              t(n, "cha7", data.char[6].probability), t(n, "cha8", data.char[7].probability), t(n, "cha9", data.char[8].probability), 
              t(n, "cha10", data.char[9].probability), t(n, "tizhi", data.tiaoli.tizhi_name), t(n, "cjbx", data.tiaoli.changjianbiaoxian), 
              t(n, "jsty", data.tiaoli.jingshentiaoyang), t(n, "fbqx", data.tiaoli.fabingqingxiang), t(n, "ylts", data.tiaoli.yuletiaoshe), 
              t(n, "sjys", data.tiaoli.sijiyangsheng), t(n, "tydl", data.tiaoli.tiyuduanlian), t(n, "qjts", data.tiaoli.qijutiaoshe), 
              t(n, "yytl", data.tiaoli.yinyuetiaoli), t(n, "jlbj", data.tiaoli.jingluobaojian), t(n, "yyjj", data.tiaoli.yaowuyangsheng), 
              t(n, "sl1", data.tiaoli.shiliao[0]), t(n, "sl2", data.tiaoli.shiliao[1]), t(n, "sl3", data.tiaoli.shiliao[2]), 
              t(n, "sl4", data.tiaoli.shiliao[3]),t(n,"display3","block"),
               n)),wx.hideLoading(),  
               wx.request({
                url: a + '/test/mysql_operation_insert.php',
                data: {
                    openid_r: getApp().globalData.openID,
                    time:new Date().toJSON().substring(0, 10) + " "+ new Date().toTimeString().substring(0,8),
                    tizhi:data.tiaoli.tizhi_name,
                    cjbx:data.tiaoli.changjianbiaoxian,
                    jsty:data.tiaoli.jingshentiaoyang,
                    fbqx:data.tiaoli.fabingqingxiang,
                    ylts:data.tiaoli.yuletiaoshe,
                    sjys:data.tiaoli.sijiyangsheng,
                    tydl:data.tiaoli.tiyuduanlian,
                    qjts:data.tiaoli.qijutiaoshe,
                    yytl:data.tiaoli.yinyuetiaoli,
                    jlbj:data.tiaoli.jingluobaojian,
                    yyjj:data.tiaoli.yaowuyangsheng,
                    sl1:data.tiaoli.shiliao[0],
                    sl2:data.tiaoli.shiliao[1],
                    sl3:data.tiaoli.shiliao[2],
                    sl4:data.tiaoli.shiliao[3],
                    cha1:data.char[0].probability,
                    cha2:data.char[1].probability,
                    cha3:data.char[2].probability,
                    cha4:data.char[3].probability,
                    cha5:data.char[4].probability,
                    cha6:data.char[5].probability,
                    cha7:data.char[6].probability,
                    cha8:data.char[7].probability,
                    cha9:data.char[8].probability,
                    cha10:data.char[9].probability,
                    cuttongue:data.cutTongue
                },
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function(a) {
                    console.log("插入数据的结果："), console.log(a)
                    wx.redirectTo({
                        url: "../result/index?tizhi=" +data.tiaoli.tizhi_name
                    });
                },
                fail: function(t) {
                    this.setData({
                        showshibie: !1,
                        showtimeout: !0
                    });
                }
            });
          }
          else 400 == x.data.code  ? (wx.hideLoading(), o.setData({  
            display4: "block"
        }), setTimeout(function() {o.setData({
                display4: "none"
            });
        }, 2e3)) : 500 == x.data.code || data.message=='图片质量过低' ? (wx.hideLoading(), o.setData({
            display5: "block"
        }), setTimeout(function() {
            o.setData({
                display5: "none"
            });
        }, 2e3)) : wx.showToast({
            title: "请求超时",
            icon: "success",
            duration: 1500
        });

      },
      fail: function(t) {
          wx.hideLoading(), wx.showToast({
              title: "请求超时",
              duration: 1500
          });
      }
      });
      
    },

});