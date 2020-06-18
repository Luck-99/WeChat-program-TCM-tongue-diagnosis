var k = getApp().globalData.requesturl;
var utilMd5 = require('../../utils/md5.js'); 

Page({
    data: {
        checklogin:false,
        islogin: false,
        iscontact: false,
        username: '',
        contents: "18888888888",
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
                //console.log(res.userInfo),
                s.setData({ //loginshow: false, islogin: true, checklogin:false,
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
      var e= this;
      var restime= new Date().toJSON().substring(0, 10).replace(/-/g,'') + new Date().toTimeString().substring(0,8).replace(/:/g,'');
     
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
    onShow: function() {this.GetUserLocation();},
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
              //console.log(simpleUser.nickName);
              getApp().globalData.userInfo=res.userInfo
              t.setData({
                loginshow: false, islogin: true, checklogin: false,username:simpleUser.nickName+',欢迎你',
              });
              wx.request({
                url: k + '/test/test.php',
                data: {
                  code: codes,
                  nickname: simpleUser.nickName,
                  gender: simpleUser.gender,
                  city: simpleUser.city,
                  province: simpleUser.province,
                  country: simpleUser.country,
                  avatarUrl:simpleUser.avatarUrl,
                  latitude: t.data.latitude,
                  longitude: t.data.longitude
                },
                header: {
                  'content-type': 'application/json'
                },
                method: 'GET',
                dataType: 'json',
                responseType: 'text',
                success: function (res) { getApp().globalData.openID=res.data, console.log(res.data) },
                fail: function (res) { console.log("失败") },
                complete: function (res) { },
              });
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
    },
    GetUserLocation: function() {
      var t = this;
      0 == getApp().globalData.latitude && 0 == getApp().globalData.longitude ? t.getUserLocation() : t.setData({
          latitude: getApp().globalData.latitude,
          longitude: getApp().globalData.longitude
      });
  },
    getUserLocation: function() {
      var t = this;
      wx.getSetting({
          success: function(a) {
              1 == a.authSetting["scope.userLocation"] ? wx.getLocation({
                  type: "wgs84",
                  success: function(a) {
                      console.log("已经授权地址信息：", a), t.setData({
                          latitude: a.latitude,
                          longitude: a.longitude
                      }), getApp().globalData.latitude = a.latitude, getApp().globalData.longitude = a.longitude;
                  }
              }) : void 0 == a.authSetting["scope.userLocation"] ? wx.getLocation({
                  type: "wgs84",
                  success: function(a) {
                      console.log("第一次授权地址信息：", a), t.setData({
                          latitude: a.latitude,
                          longitude: a.longitude
                      }), getApp().globalData.latitude = a.latitude, getApp().globalData.longitude = a.longitude;
                  }
              }) : wx.showModal({
                  title: "请求授权当前位置",
                  content: "需要获取您的地理位置，请确认授权",
                  showCancel: !1,
                  success: function(a) {
                      a.confirm && wx.openSetting({
                          success: function(a) {
                              1 == a.authSetting["scope.userLocation"] ? wx.getLocation({
                                  type: "wgs84",
                                  success: function(a) {
                                      console.log("未授权地址信息：", a), t.setData({
                                          latitude: a.latitude,
                                          longitude: a.longitude
                                      }), getApp().globalData.latitude = a.latitude, getApp().globalData.longitude = a.longitude;
                                  }
                              }) : t.GetUserLocation();
                          }
                      });
                  }
              });
          }
      });
  }
});