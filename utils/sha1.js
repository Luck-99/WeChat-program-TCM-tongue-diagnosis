var r = require("./crypto.js");

!function() {
    var t = r.util, e = r.SHA1 = function(r, s) {
        var o = t.wordsToBytes(e._sha1(r));
        return s && s.asBytes ? o : s && s.asString ? t.bytesToString(o) : t.bytesToHex(o);
    };
    e._sha1 = function(r) {
        var e = t.stringToWords(r), s = 8 * r.length, o = [], n = 1732584193, a = -271733879, i = -1732584194, u = 271733878, v = -1009589776;
        e[s >> 5] |= 128 << 24 - s % 32, e[15 + (s + 64 >>> 9 << 4)] = s;
        for (var c = 0; c < e.length; c += 16) {
            for (var f = n, l = a, g = i, y = u, h = v, T = 0; T < 80; T++) {
                if (T < 16) o[T] = e[c + T]; else {
                    var b = o[T - 3] ^ o[T - 8] ^ o[T - 14] ^ o[T - 16];
                    o[T] = b << 1 | b >>> 31;
                }
                var d = (n << 5 | n >>> 27) + v + (o[T] >>> 0) + (T < 20 ? 1518500249 + (a & i | ~a & u) : T < 40 ? 1859775393 + (a ^ i ^ u) : T < 60 ? (a & i | a & u | i & u) - 1894007588 : (a ^ i ^ u) - 899497514);
                v = u, u = i, i = a << 30 | a >>> 2, a = n, n = d;
            }
            n += f, a += l, i += g, u += y, v += h;
        }
        return [ n, a, i, u, v ];
    }, e._blocksize = 16;
}(), module.exports = r;