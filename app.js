App({
    onLaunch: function() {
        var e = wx.getStorageSync("logs") || [];
        e.unshift(Date.now()), wx.setStorageSync("logs", e);
    },
    /*GetWxOpenID: function() {
        var e = this;
        return new Promise(function(n, o) {
            wx.login({
                success: function(t) {
                    t.code && wx.request({
                        url: e.globalData.loginrequesturl + "/getopenid4",
                        method: "GET",
                        header: {
                            "Content-Type": "application/json"
                        },
                        data: {
                            code: t.code
                        },
                        success: function(o) {
                            console.log("OPENID:", o.data.openid), e.globalData.openID = o.data.openid;
                            var t = o.data.openid;
                            n(t);
                        },
                        fail: function() {
                            o();
                        },
                        complete: function() {
                            wx.hideLoading();
                        }
                    });
                }
            });
        });
    },*/
    globalData: {
        userInfo: null,
        openID: "",
        loginrequesturl: "https://machineeye.cn",
        requesturl: "https://machineeye.cn:3367",  //发送数据到服务器
        latitude: 0,
        longitude: 0,
        takeimgsrc: ""
    }
});