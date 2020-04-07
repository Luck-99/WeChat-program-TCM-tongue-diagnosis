var e = getApp().globalData.imgurl;

module.exports = {
    GetTizhi: function(a) {
        var r = "";
        switch (a) {
          case "平和型体质":
            r = e + "pinghe-kangxi.png";
            break;

          case "气郁型体质":
            r = e + "qiyu-liqingzhao.png";
            break;

          case "湿热型体质":
            r = e + "shire-niumowang.png";
            break;

          case "阴虚型体质":
            r = e + "yinxu-wangxifeng.png";
            break;

          case "血瘀型体质":
            r = e + "xueyu-zhangfei.png";
            break;

          case "阳虚型体质":
            r = e + "yangxu-lindaiyu.png";
            break;

          case "痰湿型体质":
            r = e + "tanshi-bajie.png";
            break;

          case "气虚型体质":
            r = e + "qixu-yangguifei.png";
            break;

          default:
            r = e + "pinghe-kangxi.png";
        }
        return r;
    },
    GetPeople: function(e) {
        var a = 0;
        switch (e) {
          case "平和型体质":
            a = 1;
            break;

          case "气郁型体质":
            a = 2;
            break;

          case "湿热型体质":
            a = 3;
            break;

          case "阴虚型体质":
            a = 4;
            break;

          case "血瘀型体质":
            a = 5;
            break;

          case "阳虚型体质":
            a = 6;
            break;

          case "痰湿型体质":
            a = 7;
            break;

          case "气虚型体质":
            a = 8;
            break;

          default:
            a = 9;
        }
        return a;
    },
    GetHistory: function(e) {
        var a = "";
        switch (e) {
          case "平和型体质":
            a = "康熙爷";
            break;

          case "气郁型体质":
            a = "李清照";
            break;

          case "湿热型体质":
            a = "牛魔王";
            break;

          case "阴虚型体质":
            a = "王熙凤";
            break;

          case "血瘀型体质":
            a = "张飞";
            break;

          case "阳虚型体质":
            a = "林黛玉";
            break;

          case "痰湿型体质":
            a = "八戒";
            break;

          case "气虚型体质":
            a = "杨玉环";
            break;

          default:
            a = "诸葛亮";
        }
        return a;
    },
    GetColor: function(e) {
        var a = "#ffffff";
        switch (e) {
          case "平和型体质":
            a = "#4d58ac";
            break;

          case "气郁型体质":
            a = "#c8cf7f";
            break;

          case "湿热型体质":
            a = "#a29080";
            break;

          case "阴虚型体质":
            a = "#c07b80";
            break;

          case "血瘀型体质":
            a = "#9e917e";
            break;

          case "阳虚型体质":
            a = "#6ea5cd";
            break;

          case "痰湿型体质":
            a = "#b37c69";
            break;

          case "气虚型体质":
            a = "#fabb66";
            break;

          default:
            a = "#E9E9E9";
        }
        return a;
    },
    GetShareTizhi: function(a) {
        var r = "";
        switch (a) {
          case "平和型体质":
            r = e + "img_ql.jpg";
            break;

          case "气郁型体质":
            r = e + "img_lqz.jpg";
            break;

          case "湿热型体质":
            r = e + "img_nmw.jpg";
            break;

          case "阴虚型体质":
            r = e + "img_wxf.jpg";
            break;

          case "血瘀型体质":
            r = e + "img_zf.jpg";
            break;

          case "阳虚型体质":
            r = e + "img_ldy.jpg";
            break;

          case "痰湿型体质":
            r = e + "img_zbj.jpg";
            break;

          case "气虚型体质":
            r = e + "img_yyh.jpg";
            break;

          default:
            r = e + "img_zgl.jpg";
        }
        return r;
    }
};