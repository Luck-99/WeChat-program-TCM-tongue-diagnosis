var e = getApp().globalData.requesturl;

Page({
    data: {
        heizz: "1000rpx",
        feed: "",
        items: [ {
            name: "USA",
            value: "功能异常：功能故障或不可用"
        }, {
            name: "CHN",
            value: "功能建议：用得不爽，我有建议"
        }, {
            name: "BRA",
            value: "界面美化：界面不友好，需要改进"
        }, {
            name: "JPN",
            value: "其他问题"
        } ],
        jianyi: []
    },
    checkboxChange: function(e) {
        this.setData({
            jianyi: e.detail.value
        });
    },
    onLoad: function(e) {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                console.log(e.windowHeight), t.setData({
                    heizz: e.windowHeight + "px"
                });
            }
        });
    },
    feedInput: function(e) {
        this.setData({
            feed: e.detail.value
        }), console.log(e.detail.value);
    },
    tijiao: function() {
        var t = this;
        0 == t.data.jianyi.length ? wx.showToast({
            title: "请至少选择一项",
            icon: "success",
            duration: 2e3
        }) : "" == t.data.feed ? wx.showToast({
            title: "内容不能为空",
            icon: "success",
            duration: 2e3
        }) : wx.request({
            url: e + "/userfeedback/",
            data: {
                feedback: t.data.feed
            },
            header: {
                Content_type: "application/json"
            },
            method: "GET",
            success: function(e) {
                console.log(e.data), "success" == e.data ? wx.showToast({
                    title: "反馈成功",
                    icon: "success",
                    duration: 2e3
                }) : wx.showToast({
                    title: "反馈失败",
                    icon: "success",
                    duration: 2e3
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