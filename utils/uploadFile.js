var e = require("config.js"), t = require("base64.js");

require("hmac.js"), require("sha1.js");

var r = require("crypto.js"), s = function() {
    var r = new Date();
    r.setHours(r.getHours() + e.timeout);
    var s = {
        expiration: r.toISOString(),
        conditions: [ [ "content-length-range", 0, 10485760 ] ]
    };
    return t.encode(JSON.stringify(s));
}, n = function(t) {
    var s = e.AccessKeySecret, n = r.HMAC(r.SHA1, t, s, {
        asBytes: !0
    });
    return r.util.bytesToBase64(n);
};

module.exports = function(t, r, o, i) {
    console.log("上传图片.....");
    var a = r + new Date().getTime() + Math.floor(150 * Math.random()) + ".jpg", c = e.uploadImageUrl, u = e.OSSAccessKeyId, l = s(), f = n(l);
    wx.uploadFile({
        url: c,
        filePath: t,
        name: "file",
        formData: {
            key: a,
            policy: l,
            OSSAccessKeyId: u,
            signature: f,
            success_action_status: "200"
        },
        success: function(e) {
            200 == e.statusCode ? o(c + a) : i(new Error("上传错误:" + JSON.stringify(e)));
        },
        fail: function(e) {
            e.wxaddinfo = c, i(e);
        }
    });
};