function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
  }
  
  var t = getApp().globalData.requesturl;
  
  Page({
    data: {
        tizhi: "",
        resultobj: [],
        resultobjarr: [],
        tizhi2: "",
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
        typeimg2: "",
        cjbx:"",
        fbqx:""
    },
    onLoad: function(a) {
        var t = this;
        console.log("体质数据:", a), t.setData({
            tizhi: a.tizhi
        });//, console.log(t.data.cover)
    },
    onReady: function() {},
    onShow: function() {
        this.InitData();
    },
    InitData: function() {
        var a = this;
        a.Requesttizhi(a.data.tizhi);
        a.setData({tizhi2:a.data.tizhi});
      /*for (var a = this, t = a.data.tizhi.split("+"), e = 1; e < t.length; e++) a.Requesttizhi(t[e], e - 1);
        if (t.length < 3) {
            var i = a.data.tizhi.replace("+", "").replace("型体", ""), s = a.data.tizhi.replace("+", "");
            console.log("处理后的数据" + i), a.setData({
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
        }*/
    },
    /*Requesttizhi: function(e, i) {
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
    },*/
    Requesttizhi: function(e, i) {
        var s = this;
        console.log(e);
        wx.request({
            url: t + "/test/return2.php",
            data: {
                tizhi:  e,
                //zhengxing: wx.getStorageSync("zhengxing")
                //openid: getApp().globalData.openID
            },
            header: {
                Content_type: "application/json"
            },
            method: "GET",
            success: function(t) {
                var e;
                console.log("获取体质的基本信息：", t);
                //var o = "resultobj[" + String(i) + "]";
                s.setData((e = {}, //a(e, o, t.data[0]),
                a(e, "cha1", (100 * parseFloat(t.data[2].cha1)).toFixed(1) + "%"), 
                a(e, "cha2", (100 * parseFloat(t.data[2].cha2)).toFixed(1) + "%"), 
                a(e, "cha3", (100 * parseFloat(t.data[2].cha3)).toFixed(1) + "%"), 
                a(e, "cha4", (100 * parseFloat(t.data[2].cha4)).toFixed(1) + "%"), 
                a(e, "cha5", (100 * parseFloat(t.data[2].cha5)).toFixed(1) + "%"), 
                a(e, "cha6", (100 * parseFloat(t.data[2].cha6)).toFixed(1) + "%"), 
                a(e, "cha7", (100 * parseFloat(t.data[2].cha7)).toFixed(1) + "%"), 
                a(e, "cha8", (100 * parseFloat(t.data[2].cha8)).toFixed(1) + "%"), 
                a(e, "cha9", (100 * parseFloat(t.data[2].cha9)).toFixed(1) + "%"), 
                a(e, "cha10", (100 * parseFloat(t.data[2].cha10)).toFixed(1) + "%"), 
                a(e, "typeimg2", t.data[2].cuttongue),
                a(e, "cjbx", t.data[0].cjbx),a(e, "fbqx", t.data[0].fbqx), e));
                wx.setStorageSync('tizhi', t.data[0]),wx.setStorageSync('zhengxing', t.data[1]);
            }
        });
    },
    shiyang:function(){
      wx.navigateTo({
        url: '../shiyang/index',
      })
    },
    shuyang:function(){
      wx.navigateTo({
        url: '../shuyang/index',
      })
    },
    dongyang:function(){
      wx.navigateTo({
        url: '../dongyang/index',
      })
    },
    xinyang:function(){
      wx.navigateTo({
        url: '../xinyang/index',
      })
    },
    history:function(){
        wx.navigateTo({
          url: '../record/index',
        })
    }
  });