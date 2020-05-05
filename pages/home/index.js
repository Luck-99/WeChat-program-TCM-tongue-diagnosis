var t = getApp().globalData.requesturl;
var utilMd5 = require('../../utils/md5.js'); 

Page({
    data: {
        checklogin:false,
        islogin: false,
        iscontact: false,
        username: '',
        contents: "18888888888",
        loginshow:true,
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
      var s=this;
      wx.getSetting({
        success: function(res) {
          if (res.authSetting['scope.userInfo']){
            wx.getUserInfo({
              success: function(res) {
                //console.log(res.userInfo),
                s.setData({ //loginshow: false, islogin: true, checklogin:false,
                            username:res.userInfo.nickName+',欢迎你'}),
                            getApp().globalData.userInfo=res.userInfo;
              }
            })
          }
        },
        fail: function(res) {},
        complete: function(res) {},
      });
    },
    bindGetUserInfo (e) {
      console.log(e.detail.userInfo)
    },
    photoopt: function() {
        var t = this;
        if (t.data.islogin) {
        wx.navigateTo({
            url: "../takephoto/takephoto"
        })}
        else t.setData({checklogin:true})
    },
    gohelp: function() {
        wx.navigateTo({
            url: "../help/index"
        });
    },
    sharefriends:function(){
      var o = this;
      var e= this;
      var restime= new Date().toJSON().substring(0, 10).replace(/-/g,'') + new Date().toTimeString().substring(0,8).replace(/:/g,'');
     /* wx.request({
        url: "http://www.bayescience.com/api/analysis",
        data:{
          timestamp:restime,
          app_id:"LTAI91HMCdznHW81", //6f05e4a27efa461a
          version:"1.0",
          sign:utilMd5.hexMD5(utilMd5.hexMD5(restime)+'xUYKYbJpBT4JlPSGqZKGtJqqvN6LrH'), //9bba16489ba84573bb8987f3de0692cc
          method: "tongueAnalysis",
          imgpath:"https://www.shezhen.top/1.jpg"
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
        method: "POST",
        success: function(a) {
          console.log(a.data);
          console.log(JSON.stringify(a.data.msg));
          if (console.log("识别的结果："), console.log(a), console.log(a.data.code), 88 == a.data.code) {
              var n;
              o.setData((n = {}, t(n, "restype[0]", a.data.tizhi), t(n, "imgsrc", e), 
              t(n, "display2", "none"),  t(n, "user_cuttongue", a.data.cutTongue), 
              t(n, "cha1", a.data.cha1), t(n, "cha2", a.data.cha2), t(n, "cha3", a.data.cha3), 
              t(n, "cha4", a.data.cha4), t(n, "cha5", a.data.cha5), t(n, "cha6", a.data.cha6), 
              t(n, "cha7", a.data.cha7), t(n, "cha8", a.data.cha8), t(n, "cha9", a.data.cha9), 
              t(n, "cha10", a.data.cha10), n))
          }
      },
      fail: function(t) {
          wx.hideLoading(), wx.showToast({
              title: "请求超时",
              duration: 1500
          });
      }
      });*/
      console.log(new Date().toJSON().substring(0, 10) + " "+ new Date().toTimeString().substring(0,8));
      wx.request({
        url: 'https://www.shezhen.top/test/mysql_operation_insert.php',
        data: {
          openid_r: getApp().globalData.openID,
          time:new Date().toJSON().substring(0, 10) + " "+ new Date().toTimeString().substring(0,8),
          tizhi:"+乱来体质",
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
          zhengxing:"表寒症",
          jieshi:"痰湿体质，脾困于湿，头困涨，特别是下午，比较困倦，爱嗜睡，痰比较多等主要症状的病症",
          sysw:"粳米、小米、玉米、胡萝卜、马铃薯、洋葱、平菇、藕、粟子、山药",
          jjsw:"饮酒、吸烟、禁吃性质寒凉、易损伤脾气的食品、味厚滋腻、苦瓜、冬瓜、海带、螃蟹、鸭子等",
          syyd:"散步、八段锦、五禽戏、太极拳、易筋经、吐呐法",
          jjyd:"激烈运动",
          syys:"羊肉山药汤",
          syyy:"紫竹调（纯乐古筝)",
          cha1:"0.821498",
          cha2:"0.896078",
          cha3:"0.66197",
          cha4:"0.999882",
          cha5:"0.464128",
          cha6:"0.863992",
          cha7:"0.805222",
          cha8:"0.539461",
          cha9:"0.753066",
          cha10:"0.950769",
      },
      header: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "GET",
      success: function(a) {
          console.log("插入数据的结果："), console.log(a), "unsuccess" != a.data && wx.setStorageSync("tjtime", a.data);
          /*wx.redirectTo({
              url: "../result/index?tizhi=" + "平和型体质"
          });*/
      }
      });
      
    },
    gorecord: function() {
      var t = this;
      if (t.data.islogin) {
      wx.navigateTo({
            url: "../record/index"
        })}
      else t.setData({ checklogin: true });
    },
    onReady: function() {},
    onShow: function() {this.GetUserLocation();},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    pointyes: function() {
      this.setData({ checklogin: false });
    },
    photologin: function(){
      var t = this;
      wx.login({
        success: function(res) {
          var codes = res.code;
          wx.getUserInfo({
            success: function(res) {
              var simpleUser = res.userInfo;
              //console.log(simpleUser.nickName);
              getApp().globalData.userInfo=res.userInfo
              t.setData({
                loginshow: false, islogin: true, checklogin: false,username:simpleUser.nickName+',欢迎你',
              });
              wx.request({
                url: 'https://www.shezhen.top/test/test.php',
                data: {
                  code: codes,
                  nickname: simpleUser.nickName,
                  gender: simpleUser.gender,
                  city: simpleUser.city,
                  province: simpleUser.province,
                  country: simpleUser.country,
                  avatarUrl:simpleUser.avatarUrl,
                  latitude: t.data.latitude,
                  longitude: t.data.longitude
                },
                header: {
                  'content-type': 'application/json'
                },
                method: 'GET',
                dataType: 'json',
                responseType: 'text',
                success: function (res) { getApp().globalData.openID=res.data, console.log(res.data) },
                fail: function (res) { console.log("失败") },
                complete: function (res) { },
              });
            },
            fail: function(res) {},
            complete: function(res) {},
          });
          
        },
        fail: function (res) { },
        complete: function(res) {},
      });
    },    
    gocontact: function() {
        this.setData({
            iscontact: true
        });
    },
    copyText: function(t) {
        console.log(t), wx.setClipboardData({
            data: t.currentTarget.dataset.text,
            success: function(t) {
                wx.getClipboardData({
                    success: function(t) {
                        wx.showToast({
                            title: "复制成功"
                        });
                    }
                });
            }
        });
    },
    contact2: function() {
      this.setData({ iscontact: false });
    },
    GetUserLocation: function() {
      var t = this;
      0 == getApp().globalData.latitude && 0 == getApp().globalData.longitude ? t.getUserLocation() : t.setData({
          latitude: getApp().globalData.latitude,
          longitude: getApp().globalData.longitude
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