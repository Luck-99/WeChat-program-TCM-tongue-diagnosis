var t = require("../../utils/tizhi.js");

Page({
    data: {
        showwindow: !0,
        shareimg: "",
        windowWidth: 0,
        windowHeight: 0,
        cover: "",
        tizhi: "气虚型体质"
    },
    onLoad: function(n) {
        var a = this;
        wx.showLoading({
            title: "海报生成中...",
            mask: !0
        });
        var o = t.GetShareTizhi(a.data.tizhi);
        wx.downloadFile({
            url: o,
            success: function(t) {
                a.drawImage(t.tempFilePath), setTimeout(function() {
                    a.canvasToImage();
                }, 200);
            }
        });
    },
    drawImage: function(t) {
        var n = wx.createCanvasContext("myCanvas");
        n.drawImage(t, 0, 0, 180, 320), n.save(), n.arc(32, 32, 16, 0, 2 * Math.PI), n.clip(), 
        n.drawImage("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2653777330,1123369643&fm=26&gp=0.jpg", 16, 16, 32, 32), 
        n.restore(), n.setFillStyle("#707070"), n.setFontSize(12), n.fillText("。wh", 50, 38), 
        n.draw();
    },
    canvasToImage: function() {
        var t = this;
        wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: 180,
            height: 320,
            canvasId: "myCanvas",
            success: function(n) {
                t.setData({
                    shareimg: n.tempFilePath
                }), setTimeout(function() {
                    wx.hideLoading();
                }, 1e3);
            },
            fail: function(t) {
                console.log("生成canvas失败：", t), wx.hideLoading();
            }
        });
    },
    saveopt: function() {
        var t = this;
        wx.saveImageToPhotosAlbum({
            filePath: t.data.shareimg,
            success: function() {
                wx.showModal({
                    title: "提示",
                    content: "保存成功",
                    showCancel: !1,
                    success: function(n) {
                        n.confirm && t.setData({
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
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});