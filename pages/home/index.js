var t = getApp().globalData.requesturl;

Page({
    data: {
        iswxauth: !0,
        ispoint: !0,
        islogin: !0,
        iscontact: !0,
        username: '欢迎你',
        contents: "18500860320",
        loginshow:true,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function(t) {
      wx.getSetting({
        success: function(res) {
          if (res.authSetting['scope.userInfo']){
            wx.getUserInfo({
              success: function(res) {
                console(res.userInfo)
              },
            })
          }
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    },
    bindGetUserInfo (e) {
      console.log(e.detail.userInfo)
    },
    /*getUserInfo: function(t) {
        var a = this;
        console.log("授权信息:", t), "getUserInfo:ok" == t.detail.errMsg ? (a.SaveWxUser(t.detail.userInfo), 
        getApp().globalData.userInfo = t.detail.userInfo, a.setData({
            islogin: !1,
            iswxauth: !0,
            success:function(a){ }
        })) : (console.log("拒绝授权信息！"), a.setData({
            iswxauth: !1
        }));
    },*/
    SaveWxUser: function(a) {
        var o = this;
        wx.request({
            url: t + "/insertinfo",
            data: {
                openid: getApp().globalData.openID,
                nickname: a.nickName,
                avatarurl: a.avatarUrl,
                gender: a.gender
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "GET",
            success: function(t) {
                console.log("保存用户信息："), console.log(t), getApp().globalData.userInfo = {
                    avatarurl: a.avatarUrl,
                    nickname: a.nickName
                }, o.setData({
                    iswxauth: !0
                });
            },
            fail: function(t) {
                console.log("保存用户信息失败：", t), o.setData({
                    iswxauth: !1
                });
            }
        });
    },
    photoopt: function() {
        var t = this;
        "" != getApp().globalData.openID ? wx.navigateTo({
            url: "../takephoto/takephoto"
        }) : t.setData({
            ispoint: !1
        });
    },
    gohelp: function() {
        wx.navigateTo({
            url: "../help/index"
        });
    },
    gorecord: function() {
        var t = this;
        "" != getApp().globalData.openID ? wx.navigateTo({
            url: "../record/index"
        }) : t.setData({
            ispoint: !1
        });
    },
    goshop: function() {
        wx.navigateToMiniProgram({
            appId: "wx58eaf59174f7aa9d"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    pointyes: function() {
        this.setData({
            ispoint: !0
        });
    },
    userlogin: function() {
      var t = this;
      "" == getApp().globalData.openID ? getApp().GetWxOpenID().then(function (a) {
        wx.showLoading({
          title: "正在登录...",
          mask: !0
        }), t.InitUserData();
      }) : t.InitUserData();
      this.setData({
        loginshow: (!this.data.loginshow),
      }); 
    },
    photologin: function(){
      var t = this;
      wx.login({
        success: function(res) {
          wx.getUserInfo({
            success: function(res) {
              var simpleUser = res.userInfo;
              console.log(simpleUser.nickName);
              wx.request({
                url: 'https://120.26.172.111/test.php',
                data: {
                  username: simpleUser.nickName,
                  openid: simpleUser.openID
                },
                header: {
                  'content-type': 'application/json'
                },
                method: 'GET',
                dataType: 'json',
                responseType: 'text',
                success: function (res) { console.log(res.data) },
                fail: function (res) { console.log("失败") },
                complete: function (res) { },
              });
              
            },
            fail: function(res) {},
            complete: function(res) {},
          });
        },
        fail: function(res) {},
        complete: function(res) {},
      });
      "" == getApp().globalData.openID ? getApp().GetWxOpenID().then(function (a) {
        /*wx.showLoading({
          title: 'NickName',
          mask: !0
        }),*/t.InitUserData();
      }) : t.InitUserData();
      this.setData({
        loginshow: false
      }); 
      
    },    
    InitUserData: function() {
        var a = this;
        wx.request({
            url: t + "/selectinfo",
            data: {
                openid: getApp().globalData.openID
            },
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                console.log("获取用户记录数据：", t), "22" != t.data.code ? (getApp().globalData.userInfo = {
                    avatarurl: t.data.avatarurl,
                    nickname: t.data.nickname
                }, a.setData({
                    iswxauth: !0,
                    islogin: !1
                })) : a.setData({
                    iswxauth: !1
                });
            },
           complete: function() {
                setTimeout(function() {
                    wx.hideLoading();
                }, 500);
            }
        });
    },
    logout: function() {
        this.setData({
            islogin: !0
        }), getApp().globalData.openID = "";
      this.setData({
        loginshow: (!this.data.loginshow)
      }); 
    },
    Deauthorization: function() {
        this.setData({
            iswxauth: !0
        });
    },
    gocontact: function() {
        this.setData({
            iscontact: !1
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
        this.setData({
            iscontact: !0
        });
    }    
});