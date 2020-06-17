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
     /* wx.request({
        url: "http://www.bayescience.com/api/analysis",
        data:{
          timestamp:restime,
          app_id:"LTAI91HMCdznHW81", //6f05e4a27efa461a
          version:"1.0",
          sign:utilMd5.hexMD5(utilMd5.hexMD5(restime)+'xUYKYbJpBT4JlPSGqZKGtJqqvN6LrH'), //9bba16489ba84573bb8987f3de0692cc
          method: "tongueAnalysis",
          imgpath:"https://www.shezhen.top/1.jpg"
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
        method: "POST",
        success: function(a) {
          console.log(a.data);
          console.log(JSON.stringify(a.data.msg));
          if (console.log("识别的结果："), console.log(a), console.log(a.data.code), 88 == a.data.code) {
              var n;
              o.setData((n = {}, t(n, "restype[0]", a.data.tizhi), t(n, "imgsrc", e), 
              t(n, "display2", "none"),  t(n, "user_cuttongue", a.data.cutTongue), 
              t(n, "cha1", a.data.cha1), t(n, "cha2", a.data.cha2), t(n, "cha3", a.data.cha3), 
              t(n, "cha4", a.data.cha4), t(n, "cha5", a.data.cha5), t(n, "cha6", a.data.cha6), 
              t(n, "cha7", a.data.cha7), t(n, "cha8", a.data.cha8), t(n, "cha9", a.data.cha9), 
              t(n, "cha10", a.data.cha10), n))
          }
      },
      fail: function(t) {
          wx.hideLoading(), wx.showToast({
              title: "请求超时",
              duration: 1500
          });
      }
      });*/
     /* console.log(new Date().toJSON().substring(0, 10) + " "+ new Date().toTimeString().substring(0,8));
      wx.request({
        url: k + '/test/mysql_operation_insert.php',
        data: {
          openid_r: getApp().globalData.openID,
          time:new Date().toJSON().substring(0, 10) + " "+ new Date().toTimeString().substring(0,8),
          tizhi:"阴的体质",
          cjbx:"测试是哟你",
          jsty:"就是太阳啊啊啊",
          fbqx:"可能会发病",
          ylts:"娱乐挑食测试",
          sjys:"四季养生",
          tydl:"体育锻炼好",
          qjts:"起居调养",
          yytl:"多去蹦迪",
          jlbj:"常刮痧等疗法。",
          yyjj:"忌补益涩血之品",
          sl1:"止痛。",
          sl2: "50克，红米150克。先将桃仁去皮尖研末",
          sl3:"合适的食物。黑豆、黄豆、香菇、茄子、油菜",
          sl4:"少吃的食物。甘",
          zhengxing:"表寒症",
          jieshi:"痰湿体质，嗜睡，痰比较多等主要症状的病症",
          sysw:"粳米、小米、、山药",
          jjsw:"饮酒、吸、苦瓜、冬瓜、海带、螃蟹、鸭子等",
          syyd:"散步、、吐呐法",
          jjyd:"激烈运动啊啊",
          syys:"羊肉山药汤啊啊",
          syyy:"紫竹调（纯乐古筝)啊啊",
          cha1:"0.781498",
          cha2:"0.586078",
          cha3:"0.76197",
          cha4:"0.998882",
          cha5:"0.454128",
          cha6:"0.43992",
          cha7:"0.505222",
          cha8:"0.339461",
          cha9:"0.853066",
          cha10:"0.750769",
          cuttongue:"http://tongue-cut.oss-cn-beijing.aliyuncs.com/8896a35c-e191-11e9-b67d-00163e02df4a.jpg"
      },
      header: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function(a) {
          console.log("插入数据的结果："), console.log(a);
          /*wx.redirectTo({
              url: "../result/index?tizhi=" + "平和型体质"
          });*/
      /*}
      });*/
      
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