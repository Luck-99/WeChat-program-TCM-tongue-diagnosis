var t = require("./crypto.js");

!function() {
    var s = t.util;
    t.HMAC = function(t, e, r, i) {
        for (var o = r = r.length > 4 * t._blocksize ? t(r, {
            asBytes: !0
        }) : s.stringToBytes(r), n = r.slice(0), a = 0; a < 4 * t._blocksize; a++) o[a] ^= 92, 
        n[a] ^= 54;
        var y = t(s.bytesToString(o) + t(s.bytesToString(n) + e, {
            asString: !0
        }), {
            asBytes: !0
        });
        return i && i.asBytes ? y : i && i.asString ? s.bytesToString(y) : s.bytesToHex(y);
    };
}(), module.exports = t;