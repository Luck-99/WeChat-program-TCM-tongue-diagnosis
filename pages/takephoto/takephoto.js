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
                wx.showLoading({
                    title: "图片正在上传..",
                    mask: !0
                  });
                e(a.tempImagePath, "yuyi/" + n + "/", function(a) {
                    console.log("======上传成功图片地址为：", a), t.Discern(a);
                }, function(t) {
                    console.log("======上传失败======", t);
                });
                confirm.setData({ display3: "block" }), wx.hideLoading(),
        setTimeout(function () {
          console.log("执行了定时器"), confirm.setData({
            display3: "none"
          });
        }, 2e3);
            }
        });
    },
    takePhoto_confirm: function() {
      var confirm = this;
      for (var t = this, a = t.data.restype, e = [], o = 0; o < a.length; o++) e = e.concat(a[o].split("+"));
        console.log(e);
      for (var n = [], o = 0; o < e.length; o++) "" != e[o] && (n = n.concat(e[o]));
      for (var i = [], o = 0; o < n.length; o++) "" != n[o] && (i = i.concat(n[o]));
      if (console.log(i), n.length > 0) {
            for (var c = "", o = 0; o < n.length; o++) c = c + "+" + n[o];
            t.InsertData(c);
      }
      
      wx.navigateTo({
        url: "../guodu/index"
      })
    },
    InsertData: function(t) {  //发数据到服务器
        var e = this;
        wx.request({
            url: 'https://www.shezhen.top/test/mysql_operation_insert.php',
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
                user_cha10: e.data.cha10,
                tizhi:"血瘀体质2血瘀体质",
                cjbx:"肤色晦黯，口唇黯淡，皮肤粗糙，指甲无光泽，色素沉着，容易出现瘀斑。有时出现头、胸、胁、"+
                "少腹或四肢等处刺痛，痛处固定，甚至夜晚低热，或有出血倾向，吐血，解柏油样大便等，"+
                "或腹内有症瘕积块，瘀血内阻，气血不畅。女生会出现痛经，月经带有血块。情绪易出现烦躁，健忘。",
                jsty:"要培养乐观的情绪，苦闷、抑郁则可加重血瘀倾向。",
                fbqx:"不耐受寒邪。易患身体各个部位出现疼痛，瘀血及肿物及等。",
                ylts:"习书作画可以调气血，通经脉，因为习书作画需有正确的姿势，这样能提全身之气，还必须集中精力，"+
                "心平气和，从而调动全身气和力，使体内各部分功能得到调整促进血液流通，改善身体气滞血瘀的状态。",
                sjys:"春天寒温时变,应避免外邪入侵,适当运动,以适应春天生发之性；夏天天气炎热,人体出汗较多,应注意防暑,"+
                "多饮温水,不喝冰冻饮料,以免寒凝血脉；秋天气候干燥,宜适当保暖,多饮开水,增加身体锻炼,活动筋骨,"+
                "以促进血液循环,缓解瘀血体质状态；冬天寒邪当令,应注意保暖,避免寒邪侵袭。",
                tydl:"多做有益于心脏血脉的活动，如各种舞蹈、太极拳、八段锦、长寿功、"+
                "内养操、保健按摩术，以全身各部都能活动，以助气血运行为原则。",
                qjts:"居处宜干燥,因湿性粘滞,易使血液运行不畅。血瘀者要避免寒冷刺激，"+
                "日常生活中应注意动静结合，不可贪图安逸，加重气血郁滞。",
                yytl:"多听徵音，如《狂欢》、《解放军进行曲》、《卡门序曲》 、《喜洋洋》、"+
                "《步步高》、《流水》、《汉宫秋月》等。",
                jlbj:"常按血海穴，可适当选用推拿、按摩、拔罐、刮痧等疗法。",
                yyjj:"忌补益涩血之品",
                sl:"黑豆川芎粥。川芎10g用纱布包裹，与生山楂15g，黑豆25g，粳米50g，一起加入水煎煮熟，加适量红糖。"+
                "分次温服。可活血祛瘀、行气止痛。"+ "桃仁粥。准备好桃仁50克，红米150克。先将桃仁去皮尖研末"+
                "，用水煎煮，去渣取汁；再用桃仁汁煮红米粥。此粥有破血行瘀功效。可以治疗瘀血肿痛，跌打损伤病人。"+
                "但孕妇禁食。"+"合适的食物。黑豆、黄豆、香菇、茄子、油菜、羊血、芒果、番木瓜、海藻、海带"+
                "、紫菜、萝卜、金橘、橙、柚子、桃、李、山楂、醋、玫瑰花、绿茶、红糖、黄酒、葡萄酒、"+
               "白酒等食物"+"少吃的食物。甘薯、芋头、蚕豆、栗子、乌梅、苦瓜、柿子、奶油、肥肉、"+
                "鳗鱼、蟹黄、蛋黄、鱼虾、巧克力、小麦、荞麦。",
                zhengxing:"表寒2症",
                jieshi:"jieshi",
                sysw:"sysw",
                jjsw:"jjsw",
                syyd:"syyd",
                jjyd:"jjyd",
                syys:"syys",
                syyy:"syyy"
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
    view_2: function() {  //后置拍照
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
    takePhoto_rephoto: function() {  //是否重拍
        this.setData({
            display1: "none"
        }), this.setData({
            display2: "block"
        });
    },
    UploadImgOpt: function(t) {  //上传图片到服务器
        var a = this, e = t.substr(t.lastIndexOf("/") + 1), o = "https://www.shezhen.top/test/upload_photo.php"; 
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
    
    Discern: function(e) {  //发送到服务器调用API
        var o = this;
        wx.request({
            url: a + "/testtongue2",
            data: {
                imgpath: 'https://www.shezhen.top/test/photo/min_img/timg.jpg',
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
                    t(n, "display2", "none"),  t(n, "user_cuttongue", a.data.cutTongue), 
                    t(n, "cha1", a.data.cha1), t(n, "cha2", a.data.cha2), t(n, "cha3", a.data.cha3), 
                    t(n, "cha4", a.data.cha4), t(n, "cha5", a.data.cha5), t(n, "cha6", a.data.cha6), 
                    t(n, "cha7", a.data.cha7), t(n, "cha8", a.data.cha8), t(n, "cha9", a.data.cha9), 
                    t(n, "cha10", a.data.cha10), n))
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

});