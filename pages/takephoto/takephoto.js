function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = getApp().globalData.requesturl, e = (getApp().globalData.takeimgsrc, getApp(), 
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
        this.ctx = wx.createCameraContext();
    },
    onReady: function() {},
    onShow: function() {
        this.GetUserLocation();
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
                var n = o.formatTime(new Date());
                e(a.tempImagePath, "yuyi/" + n + "/", function(a) {
                    console.log("======上传成功图片地址为：", a), t.Discern(a);
                }, function(t) {
                    console.log("======上传失败======", t);
                });
            }
        });
    },
    takePhoto_2: function() {
        for (var t = this, a = t.data.restype, e = [], o = 0; o < a.length; o++) e = e.concat(a[o].split("+"));
        console.log(e);
        for (var n = [], o = 0; o < e.length; o++) "" != e[o] && (n = n.concat(e[o]));
        for (var i = [], o = 0; o < n.length; o++) "" != n[o] && (i = i.concat(n[o]));
        if (console.log(i), n.length > 0) {
            for (var c = "", o = 0; o < n.length; o++) c = c + "+" + n[o];
            t.InsertData(c);
        }
    },
    InsertData: function(t) {
        var e = this;
        wx.request({
            url: a + "/obtainres2",
            data: {
                openid: getApp().globalData.openID,
                latitude: e.data.latitude,
                longitude: e.data.longitude,
                result: t,
                user_cuttongue: e.data.user_cuttongue,
                user_cha1: e.data.cha1,
                user_cha2: e.data.cha2,
                user_cha3: e.data.cha3,
                user_cha4: e.data.cha4,
                user_cha5: e.data.cha5,
                user_cha6: e.data.cha6,
                user_cha7: e.data.cha7,
                user_cha8: e.data.cha8,
                user_cha9: e.data.cha9,
                user_cha10: e.data.cha10
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
            },
            fail: function(t) {
                e.setData({
                    showshibie: !1,
                    showtimeout: !0
                });
            }
        });
    },
    view_2: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed " ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var n = a.tempFilePaths[0], i = o.formatTime(new Date());
                console.log(i), e(n, "yuyi/" + i + "/", function(a) {
                    console.log("======上传成功图片地址为：", a), t.Discern(a);
                }, function(t) {
                    console.log("======上传失败======", t);
                });
            }
        });
    },
    view_3: function() {
        this.setData({
            display1: "none"
        }), this.setData({
            display2: "block"
        });
    },
    UploadImgOpt: function(t) {
        var a = this, e = t.substr(t.lastIndexOf("/") + 1), o = "https://tonguepicture-1256678596.cos.ap-beijing.myqcloud.com/";
        wx.uploadFile({
            url: o,
            name: "file",
            method: "POST",
            filePath: t,
            formData: {
                key: e
            },
            success: function(t) {
                console.log("图片的路径："), console.log(t);
                var n = o + e;
                console.log(n), a.Discern(n);
            }
        });
    },
    cameradirection: function() {
        "front" == this.data.qianhou ? (this.setData({
            qianhou: "back"
        }), console.log(this.data.qianhou)) : (this.setData({
            qianhou: "front"
        }), console.log(this.data.qianhou));
    },
    GetUserLocation: function() {
        var t = this;
        0 == getApp().globalData.latitude && 0 == getApp().globalData.longitude ? t.getUserLocation() : t.setData({
            latitude: getApp().globalData.latitude,
            longitude: getApp().globalData.longitude
        });
    },
    Discern: function(e) {
        var o = this;
        wx.showLoading({
            title: "图片正在上传..",
            mask: !0
        }), wx.request({
            url: a + "/testtongue2",
            data: {
                imgpath: e,
                openid: getApp().globalData.openID
            },
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                if (console.log("识别的结果："), console.log(a), console.log(a.data.code), 88 == a.data.code) {
                    var n;
                    o.setData((n = {}, t(n, "restype[0]", a.data.tizhi), t(n, "imgsrc", e), t(n, "display1", "block"), 
                    t(n, "display2", "none"), t(n, "display3", "block"), t(n, "user_cuttongue", a.data.cutTongue), 
                    t(n, "cha1", a.data.cha1), t(n, "cha2", a.data.cha2), t(n, "cha3", a.data.cha3), 
                    t(n, "cha4", a.data.cha4), t(n, "cha5", a.data.cha5), t(n, "cha6", a.data.cha6), 
                    t(n, "cha7", a.data.cha7), t(n, "cha8", a.data.cha8), t(n, "cha9", a.data.cha9), 
                    t(n, "cha10", a.data.cha10), n)), wx.hideLoading(), setTimeout(function() {
                        console.log("执行了定时器"), o.setData({
                            display3: "none"
                        });
                    }, 2e3);
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
                    icon: "success",
                    duration: 1500
                });
            }
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