var t = getApp().globalData.requesturl;

Page({
    data: {
        checklogin:false,
        islogin: false,
        iscontact: false,
        username: '',
        contents: "18500860320",
        loginshow:true
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
                            username:res.userInfo.nickName+',欢迎你'})
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
                success: function (res) { console.log(res.data) },
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