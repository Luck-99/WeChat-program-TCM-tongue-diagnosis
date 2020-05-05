var t = getApp().globalData.requesturl;

Page({
    data: {
        list: [],
        showdata: !1
    },
    onLoad: function(t) {
        wx.showLoading({
            title: "数据加载中...",
            mask: !0
        });
    },
    goresult: function(t) {
        console.log("获取到的时间：" + t.currentTarget.dataset.time), wx.setStorageSync("tjtime", t.currentTarget.dataset.time),
        wx.navigateTo({
            url: "../result/index?tizhi=" + t.currentTarget.dataset.tizhi
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        "" == getApp().globalData.openID ? getApp().GetWxOpenID().then(function(e) {
            t.InitData();
        }) : t.InitData();
    },
    InitData: function() {
        var e = this;
        wx.request({
            url: "https://www.shezhen.top/test/return.php",//"https://www.shezhen.top/test/return.php" t + "/selectcon2"
            data: {
                openid_h: getApp().globalData.openID
            },
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                console.log("获取用户查询记录数据：", t),
                e.DealData(t.data);
            },
            complete: function() {
                setTimeout(function() {
                    e.setData({
                        showdata: !0
                    }), wx.hideLoading();
                }, 500);
            }
        });
    },
    DealData: function(t) {
        var a = this, n = [];
        t.forEach(function(t, a) {
            var o = t.user_result.split("+"), i = "";
            o.length > 2 ? (i = "复合型体质", n[a] = {
                id: a,
                date: t.user_time,
                typeval2: t.user_result,
                typeval: "疑似"+i
            }) : (i = o[1], n[a] = {
                id: a,
                date: t.user_time,
                typeval2: t.user_result,
                typeval: "疑似"+i
            });
        }), a.setData({
            list: n
        }), console.log("list" + a.data.list[0]);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});