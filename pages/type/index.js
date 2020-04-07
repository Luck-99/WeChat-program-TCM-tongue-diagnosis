Page({
    data: {
        list: [ {
            id: 1,
            name: "",
            imgurl: "/resources/people/1h.png"
        }, {
            id: 2,
            name: "",
            imgurl: "/resources/people/2h.png"
        }, {
            id: 3,
            name: "",
            imgurl: "/resources/people/3h.png"
        }, {
            id: 4,
            name: "",
            imgurl: "/resources/people/4h.png"
        }, {
            id: 5,
            name: "",
            imgurl: "/resources/people/5h.png"
        }, {
            id: 6,
            name: "",
            imgurl: "/resources/people/6h.png"
        }, {
            id: 7,
            name: "",
            imgurl: "/resources/people/7h.png"
        }, {
            id: 8,
            name: "",
            imgurl: "/resources/people/8h.png"
        } ]
    },
    onLoad: function(e) {},
    gointro: function(e) {
        wx.navigateTo({
            url: "../intro/index?id=" + e.currentTarget.dataset.id
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