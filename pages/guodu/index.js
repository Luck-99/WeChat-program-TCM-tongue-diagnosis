var t = getApp().globalData.requesturl;

Page({
    data: {
        filepath: "",
        showshibie: !0,
        showtimeout: !1,
        latitude: 0,
        longitude: 0
    },
    onLoad: function(t) {
        console.log("识别的图片:", t), this.setData({
            filepath: t.filepath
        });
    },
    onReady: function() {},
    onShow: function() {
        this.GetUserLocation();
    },
    GetUserLocation: function() {
        var t = this;
        0 == getApp().globalData.latitude && 0 == getApp().globalData.longitude ? t.getUserLocation() : (t.setData({
            latitude: getApp().globalData.latitude,
            longitude: getApp().globalData.longitude
        }), t.Discern());
    },
    getUserLocation: function() {
        var t = this;
        wx.getSetting({
            success: function(e) {
                1 == e.authSetting["scope.userLocation"] ? wx.getLocation({
                    type: "wgs84",
                    success: function(e) {
                        console.log("已经授权地址信息：", e), t.setData({
                            latitude: e.latitude,
                            longitude: e.longitude
                        }), getApp().globalData.latitude = e.latitude, getApp().globalData.longitude = e.longitude, 
                        t.Discern();
                    }
                }) : void 0 == e.authSetting["scope.userLocation"] ? wx.getLocation({
                    type: "wgs84",
                    success: function(e) {
                        console.log("第一次授权地址信息：", e), t.setData({
                            latitude: e.latitude,
                            longitude: e.longitude
                        }), getApp().globalData.latitude = e.latitude, getApp().globalData.longitude = e.longitude, 
                        t.Discern();
                    }
                }) : wx.showModal({
                    title: "请求授权当前位置",
                    content: "需要获取您的地理位置，请确认授权",
                    showCancel: !1,
                    success: function(e) {
                        e.confirm && wx.openSetting({
                            success: function(e) {
                                1 == e.authSetting["scope.userLocation"] ? wx.getLocation({
                                    type: "wgs84",
                                    success: function(e) {
                                        console.log("未授权地址信息：", e), t.setData({
                                            latitude: e.latitude,
                                            longitude: e.longitude
                                        }), getApp().globalData.latitude = e.latitude, getApp().globalData.longitude = e.longitude, 
                                        t.Discern();
                                    }
                                }) : t.GetUserLocation();
                            }
                        });
                    }
                });
            }
        });
    },
    Discern: function() {
        var e = this;
        wx.request({
            url: t + "/testtongue",
            data: {
                imgpath: e.data.filepath
            },
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                console.log("识别的结果："), console.log(t), 88 == t.data.code ? e.InsertData(t.data.tizhi) : 22 == t.data.code ? wx.redirectTo({
                    url: "../shibai/index?filepath=" + e.data.filepath
                }) : e.setData({
                    showshibie: !1,
                    showtimeout: !0
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
    InsertData: function(e) {
        var o = this;
        wx.request({
            url: t + "/obtainres",
            data: {
                openid: getApp().globalData.openID,
                latitude: o.data.latitude,
                longitude: o.data.longitude,
                result: e
            },
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                console.log("插入数据的结果："), console.log(t), wx.redirectTo({
                    url: "../result/index?tizhi=" + e
                });
            },
            fail: function(t) {
                o.setData({
                    showshibie: !1,
                    showtimeout: !0
                });
            }
        });
    },
    freshopt: function() {
        var t = this;
        t.setData({
            showshibie: !0,
            showtimeout: !1
        }), t.Discern();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});