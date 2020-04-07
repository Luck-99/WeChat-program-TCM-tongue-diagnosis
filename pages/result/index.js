function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t = getApp().globalData.requesturl, e = require("../../utils/tizhi.js");

Page({
    data: {
        tizhi: "",
        resultobj: [],
        resultobjarr: [],
        cover: "",
        showwindow: !1,
        shareimg: "",
        qrcode_temp: "",
        windowWidth: 0,
        windowHeight: 0,
        j: 0,
        display1: "block",
        display2: "none",
        tizhi2: "",
        tizhi3: "",
        cha1: "",
        cha2: "",
        cha3: "",
        cha4: "",
        cha5: "",
        cha6: "",
        cha7: "",
        cha8: "",
        cha9: "",
        cha10: "",
        char1: "",
        char2: "",
        char3: "",
        char4: "",
        char5: "",
        char6: "",
        char7: "",
        char8: "",
        char9: "",
        char10: "",
        typeimg2: ""
    },
    onLoad: function(a) {
        var t = this;
        console.log("体质数据:", a), t.setData({
            tizhi: a.tizhi,
            cover: e.GetTizhi(a.tizhi.split("+")[1])
        }), console.log(t.data.cover), wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    windowWidth: a.windowWidth,
                    windowHeight: a.windowHeight
                });
            }
        });
    },
    goshop: function(a) {
        wx.navigateToMiniProgram({
            appId: "wx58eaf59174f7aa9d",
            path: a.currentTarget.dataset.id
        });
    },
    shareopt: function() {
        var a = this;
        a.setData({
            showwindow: !0
        }), wx.showLoading({
            title: "海报生成中...",
            mask: !0
        }), wx.downloadFile({
            url: e.GetShareTizhi(a.data.tizhi3),
            success: function(t) {
                var e = t.tempFilePath;
                wx.downloadFile({
                    url: getApp().globalData.userInfo.avatarurl,
                    success: function(t) {
                        var i = t.tempFilePath;
                        a.drawImage(e, i), setTimeout(function() {
                            a.canvasToImage();
                        }, 200);
                    }
                });
            }
        });
    },
    Text2N: function(a) {
        for (var t = wx.createCanvasContext("myCanvas"), e = a.split(""), i = "", s = [], o = 0; o < e.length; o++) t.measureText(i).width < 115 ? i += e[o] : (o--, 
        s.push(i), i = "");
        return s.push(i), s;
    },
    drawImage: function(a, t) {
        var e = wx.createCanvasContext("myCanvas"), i = getApp().globalData.userInfo.nickname;
        e.drawImage(a, 0, 0, 180, 320), e.save(), e.arc(32, 32, 16, 0, 2 * Math.PI), e.clip(), 
        e.drawImage(t, 16, 16, 32, 32), e.restore(), e.setFillStyle("#707070"), e.setFontSize(10), 
        e.fillText(i, 50, 38), e.draw();
    },
    canvasToImage: function() {
        var a = this;
        wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: 182,
            height: 325,
            canvasId: "myCanvas",
            success: function(t) {
                a.setData({
                    shareimg: t.tempFilePath
                }), setTimeout(function() {
                    wx.hideLoading();
                }, 1e3);
            },
            fail: function(a) {
                console.log("生成canvas失败：", a), wx.hideLoading();
            }
        });
    },
    saveopt: function() {
        var a = this;
        wx.saveImageToPhotosAlbum({
            filePath: a.data.shareimg,
            success: function() {
                wx.showModal({
                    title: "提示",
                    content: "保存成功",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm && a.setData({
                            showwindow: !1
                        });
                    }
                });
            },
            fail: function() {
                wx.showModal({
                    title: "提示",
                    content: "保存失败",
                    showCancel: !1,
                    success: function() {
                        wx.openSetting({});
                    }
                });
            }
        });
    },
    hidewindow: function() {
        this.setData({
            showwindow: !1
        });
    },
    tiaofeed: function() {
        wx.navigateTo({
            url: "../feedback/feedback"
        });
    },
    onReady: function() {},
    onShow: function() {
        this.InitData();
    },
    InitData: function() {
        for (var a = this, t = a.data.tizhi.split("+"), e = 1; e < t.length; e++) a.Requesttizhi(t[e], e - 1);
        if (t.length < 3) {
            var i = a.data.tizhi.replace("+", "").replace("型体", ""), s = a.data.tizhi.replace("+", "");
            console.log("处理后的数据" + i), a.setData({
                display1: "none",
                display2: "block",
                tizhi2: i,
                tizhi3: s
            });
        } else if (3 == t.length) {
            i = a.data.tizhi.replace("+", "").replace("型体", "").replace("型体", "");
            console.log("处理后的数据" + i), a.setData({
                tizhi2: i,
                tizhi3: i
            });
        } else if (4 == t.length) {
            i = a.data.tizhi.replace("+", "").replace("型体", "").replace("型体", "").replace("+", "").replace("型体", "");
            console.log("处理后的数据" + i), a.setData({
                tizhi2: i,
                tizhi3: i
            });
        }
    },
    Requesttizhi: function(e, i) {
        var s = this;
        wx.request({
            url: t + "/selecttz2/",
            data: {
                tizhi: e,
                tjtime: wx.getStorageSync("tjtime"),
                openid: getApp().globalData.openID
            },
            header: {
                Content_type: "application/json"
            },
            method: "GET",
            success: function(t) {
                var e;
                console.log("获取体质的基本信息：", t);
                var o = "resultobj[" + String(i) + "]";
                s.setData((e = {}, a(e, o, t.data[0]), a(e, "cha1", t.data[0].user_char1.split("_")[0]), 
                a(e, "cha2", t.data[0].user_char2.split("_")[0]), a(e, "cha3", t.data[0].user_char3.split("_")[0]), 
                a(e, "cha4", t.data[0].user_char4.split("_")[0]), a(e, "cha5", t.data[0].user_char5.split("_")[0]), 
                a(e, "cha6", t.data[0].user_char6.split("_")[0]), a(e, "cha7", t.data[0].user_char7.split("_")[0]), 
                a(e, "cha8", t.data[0].user_char8.split("_")[0]), a(e, "cha9", t.data[0].user_char9.split("_")[0]), 
                a(e, "cha10", t.data[0].user_char10.split("_")[0]), a(e, "char1", (100 * parseFloat(t.data[0].user_char1.split("_")[1])).toFixed(1) + "%"), 
                a(e, "char2", (100 * parseFloat(t.data[0].user_char2.split("_")[1])).toFixed(1) + "%"), 
                a(e, "char3", (100 * parseFloat(t.data[0].user_char3.split("_")[1])).toFixed(1) + "%"), 
                a(e, "char4", (100 * parseFloat(t.data[0].user_char4.split("_")[1])).toFixed(1) + "%"), 
                a(e, "char5", (100 * parseFloat(t.data[0].user_char5.split("_")[1])).toFixed(1) + "%"), 
                a(e, "char6", (100 * parseFloat(t.data[0].user_char6.split("_")[1])).toFixed(1) + "%"), 
                a(e, "char7", (100 * parseFloat(t.data[0].user_char7.split("_")[1])).toFixed(1) + "%"), 
                a(e, "char8", (100 * parseFloat(t.data[0].user_char8.split("_")[1])).toFixed(1) + "%"), 
                a(e, "char9", (100 * parseFloat(t.data[0].user_char9.split("_")[1])).toFixed(1) + "%"), 
                a(e, "char10", (100 * parseFloat(t.data[0].user_char10.split("_")[1])).toFixed(1) + "%"), 
                a(e, "typeimg2", t.data[0].user_cuttongue), e)), console.log(s.data.resultobj);
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "这是我的体质类型，快来测测你的体质吧",
            path: "pages/home/index",
            imageUrl: "",
            success: function(a) {
                a.errMsg;
            },
            fail: function() {
                "shareAppMessage:fail cancel" == res.errMsg || res.errMsg;
            }
        };
    }
});