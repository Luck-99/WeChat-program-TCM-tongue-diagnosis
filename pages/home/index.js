var t = getApp().globalData.requesturl;
var utilMd5 = require('../../utils/md5.js'); 

Page({
    data: {
        checklogin:false,
        islogin: false,
        iscontact: false,
        username: '',
        contents: "18500860320",
        loginshow:true,
        i: 0,
        imgsrc: "",
        imgsrc0: "",
        imgsrc1: "",
        imgsrc2: "",
        latitude: 0,
        longitude: 0,
        restype: [ "", "", "" ],
        user_cuttongue: "",
        cha1: "",
        cha2: "",
        cha3: "",
        cha4: "",
        cha5: "",
        cha6: "",
        cha7: "",
        cha8: "",
        cha9: "",
        cha10: ""
    },
    onLoad: function(t) {
      var s=this;
      wx.getSetting({
        success: function(res) {
          if (res.authSetting['scope.userInfo']){
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo),
                s.setData({ loginshow: false, islogin: true, checklogin:false,
                            username:res.userInfo.nickName+',欢迎你'}),
                            getApp().globalData.userInfo=res.userInfo;
              }
            })
          }
        },
        fail: function(res) {},
        complete: function(res) {},
      });
    },
    bindGetUserInfo (e) {
      console.log(e.detail.userInfo)
    },
    photoopt: function() {
        var t = this;
        if (t.data.islogin) {
        wx.navigateTo({
            url: "../takephoto/takephoto"
        })}
        else t.setData({checklogin:true})
    },
    gohelp: function() {
        wx.navigateTo({
            url: "../help/index"
        });
    },
    sharefriends:function(){
      var o = this;
      var restime= new Date().toJSON().substring(0, 10).replace(/-/g,'') + new Date().toTimeString().substring(0,8).replace(/:/g,'');
      wx.request({
        url: "http://www.bayescience.com/api/analysis",
        data:{
          timestamp:restime,
          app_id:"401518a5f65041cc", //6f05e4a27efa461a
          version:"1.0",
          sign:utilMd5.hexMD5(utilMd5.hexMD5(restime)+'f72486593c724adab6adef620711231f'), //9bba16489ba84573bb8987f3de0692cc
          method: "tongueAnalysis",
          imgpath:"https://laizhibin.top/1.jpg"
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
        method: "POST",
        success: function(a) {
          /*console.log(a);
          console.log(a.data);*/
          if (console.log("识别的结果："), console.log(a), console.log(a.data.code), 88 == a.data.code) {
              var n;
              o.setData((n = {}, t(n, "restype[0]", a.data.tizhi), t(n, "imgsrc", e), 
              t(n, "display2", "none"),  t(n, "user_cuttongue", a.data.cutTongue), 
              t(n, "cha1", a.data.cha1), t(n, "cha2", a.data.cha2), t(n, "cha3", a.data.cha3), 
              t(n, "cha4", a.data.cha4), t(n, "cha5", a.data.cha5), t(n, "cha6", a.data.cha6), 
              t(n, "cha7", a.data.cha7), t(n, "cha8", a.data.cha8), t(n, "cha9", a.data.cha9), 
              t(n, "cha10", a.data.cha10), n))
          } else 22 == a.data.code ? (wx.hideLoading(), o.setData({  
              display4: "block"
          }), setTimeout(function() {
              console.log("执行了定时器"), o.setData({
                  display4: "none"
              });
          }, 2e3)) : 33 == a.data.code ? (wx.hideLoading(), o.setData({
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
      //console.log(this.data.cha1);
      wx.request({
        url: 'https://120.26.172.111/test/Receive_data.php',
        data: {
          /*openid: getApp().globalData.openID,
          latitude: e.data.latitude,
          longitude: e.data.longitude,
          result: t,*/
          user_cuttongue: this.data.user_cuttongue,
          user_cha1: this.data.cha1,
          user_cha2: this.data.cha2,
          user_cha3: this.data.cha3,
          user_cha4: this.data.cha4,
          user_cha5: this.data.cha5,
          user_cha6: this.data.cha6,
          user_cha7: this.data.cha7,
          user_cha8: this.data.cha8,
          user_cha9: this.data.cha9,
          user_cha10: this.data.cha10
      },
      header: {
          "Content-Type": "application/json"
      },
      method: "GET",
      success: function(a) {
          console.log("插入数据的结果："), console.log(a), "unsuccess" != a.data && wx.setStorageSync("tjtime", a.data), 
          wx.redirectTo({
              url: "../result/index?tizhi=" + t
          });
      }
      });
    },
    gorecord: function() {
      var t = this;
      if (t.data.islogin) {
      wx.navigateTo({
            url: "../record/index"
        })}
      else t.setData({ checklogin: true });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    pointyes: function() {
      this.setData({ checklogin: false });
    },
    photologin: function(){
      var t = this;
      wx.login({
        success: function(res) {
          var codes = res.code;
          wx.getUserInfo({
            success: function(res) {
              var simpleUser = res.userInfo;
              console.log(simpleUser.nickName);
              getApp().globalData.userInfo=res.userInfo
              t.setData({
                loginshow: false, islogin: true, checklogin: false
              });
              wx.request({
                url: 'https://120.26.172.111/test/test.php',
                data: {
                  code: codes,
                  username: simpleUser.nickName,
                  //openid: simpleUser.openid
                },
                header: {
                  'content-type': 'application/json'
                },
                method: 'GET',
                dataType: 'json',
                responseType: 'text',
                success: function (res) { getApp().globalData.userInfo=res.userInfo,console.log(getApp().globalData.userInfo) },
                fail: function (res) { console.log("失败") },
                complete: function (res) { },
              })
            },
            fail: function(res) {},
            complete: function(res) {},
          });
        },
        fail: function (res) { },
        complete: function(res) {},
      });
    },    
    gocontact: function() {
        this.setData({
            iscontact: true
        });
    },
    copyText: function(t) {
        console.log(t), wx.setClipboardData({
            data: t.currentTarget.dataset.text,
            success: function(t) {
                wx.getClipboardData({
                    success: function(t) {
                        wx.showToast({
                            title: "复制成功"
                        });
                    }
                });
            }
        });
    },
    contact2: function() {
      this.setData({ iscontact: false });
    }    
});