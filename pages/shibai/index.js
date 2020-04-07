Page({
    data: {
        photo: ""
    },
    onLoad: function(o) {
        this.setData({
            photo: o.filepath
        });
    },
    photoopt: function() {
        wx.navigateTo({
            url: "../takephoto/takephoto"
        });
    },
    UploadImgOpt: function(o) {
        var n = o.substr(o.lastIndexOf("/") + 1), t = "https://tonguepicture-1256678596.cos.ap-beijing.myqcloud.com/";
        wx.uploadFile({
            url: t,
            name: "file",
            method: "POST",
            filePath: o,
            formData: {
                key: n
            },
            success: function(o) {
                console.log("图片的路径："), console.log(o);
                var e = t + n;
                wx.navigateTo({
                    url: "../guodu/index?filepath=" + e
                });
            }
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