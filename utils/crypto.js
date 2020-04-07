var r = {};

!function() {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = r.util = {
        rotl: function(r, t) {
            return r << t | r >>> 32 - t;
        },
        rotr: function(r, t) {
            return r << 32 - t | r >>> t;
        },
        endian: function(r) {
            if (r.constructor == Number) return 16711935 & n.rotl(r, 8) | 4278255360 & n.rotl(r, 24);
            for (var t = 0; t < r.length; t++) r[t] = n.endian(r[t]);
            return r;
        },
        randomBytes: function(r) {
            for (var t = []; r > 0; r--) t.push(Math.floor(256 * Math.random()));
            return t;
        },
        stringToBytes: function(r) {
            for (var t = [], n = 0; n < r.length; n++) t.push(r.charCodeAt(n));
            return t;
        },
        bytesToString: function(r) {
            for (var t = [], n = 0; n < r.length; n++) t.push(String.fromCharCode(r[n]));
            return t.join("");
        },
        stringToWords: function(r) {
            for (var t = [], n = 0, e = 0; n < r.length; n++, e += 8) t[e >>> 5] |= r.charCodeAt(n) << 24 - e % 32;
            return t;
        },
        bytesToWords: function(r) {
            for (var t = [], n = 0, e = 0; n < r.length; n++, e += 8) t[e >>> 5] |= r[n] << 24 - e % 32;
            return t;
        },
        wordsToBytes: function(r) {
            for (var t = [], n = 0; n < 32 * r.length; n += 8) t.push(r[n >>> 5] >>> 24 - n % 32 & 255);
            return t;
        },
        bytesToHex: function(r) {
            for (var t = [], n = 0; n < r.length; n++) t.push((r[n] >>> 4).toString(16)), t.push((15 & r[n]).toString(16));
            return t.join("");
        },
        hexToBytes: function(r) {
            for (var t = [], n = 0; n < r.length; n += 2) t.push(parseInt(r.substr(n, 2), 16));
            return t;
        },
        bytesToBase64: function(r) {
            if ("function" == typeof btoa) return btoa(n.bytesToString(r));
            for (var e, o = [], u = 0; u < r.length; u++) switch (u % 3) {
              case 0:
                o.push(t.charAt(r[u] >>> 2)), e = (3 & r[u]) << 4;
                break;

              case 1:
                o.push(t.charAt(e | r[u] >>> 4)), e = (15 & r[u]) << 2;
                break;

              case 2:
                o.push(t.charAt(e | r[u] >>> 6)), o.push(t.charAt(63 & r[u])), e = -1;
            }
            for (void 0 != e && -1 != e && o.push(t.charAt(e)); o.length % 4 != 0; ) o.push("=");
            return o.join("");
        },
        base64ToBytes: function(r) {
            if ("function" == typeof atob) return n.stringToBytes(atob(r));
            r = r.replace(/[^A-Z0-9+\/]/gi, "");
            for (var e = [], o = 0; o < r.length; o++) switch (o % 4) {
              case 1:
                e.push(t.indexOf(r.charAt(o - 1)) << 2 | t.indexOf(r.charAt(o)) >>> 4);
                break;

              case 2:
                e.push((15 & t.indexOf(r.charAt(o - 1))) << 4 | t.indexOf(r.charAt(o)) >>> 2);
                break;

              case 3:
                e.push((3 & t.indexOf(r.charAt(o - 1))) << 6 | t.indexOf(r.charAt(o)));
            }
            return e;
        }
    };
    r.mode = {};
}(), module.exports = r;