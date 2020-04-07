var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

module.exports = {
    encode: function(e) {
        var a, t, o, c, h, C;
        for (o = e.length, t = 0, a = ""; t < o; ) {
            if (c = 255 & e.charCodeAt(t++), t == o) {
                a += r.charAt(c >> 2), a += r.charAt((3 & c) << 4), a += "==";
                break;
            }
            if (h = e.charCodeAt(t++), t == o) {
                a += r.charAt(c >> 2), a += r.charAt((3 & c) << 4 | (240 & h) >> 4), a += r.charAt((15 & h) << 2), 
                a += "=";
                break;
            }
            C = e.charCodeAt(t++), a += r.charAt(c >> 2), a += r.charAt((3 & c) << 4 | (240 & h) >> 4), 
            a += r.charAt((15 & h) << 2 | (192 & C) >> 6), a += r.charAt(63 & C);
        }
        return a;
    },
    decode: function(r) {
        var a, t, o, c, h, C, d;
        for (C = r.length, h = 0, d = ""; h < C; ) {
            do {
                a = e[255 & r.charCodeAt(h++)];
            } while (h < C && -1 == a);
            if (-1 == a) break;
            do {
                t = e[255 & r.charCodeAt(h++)];
            } while (h < C && -1 == t);
            if (-1 == t) break;
            d += String.fromCharCode(a << 2 | (48 & t) >> 4);
            do {
                if (61 == (o = 255 & r.charCodeAt(h++))) return d;
                o = e[o];
            } while (h < C && -1 == o);
            if (-1 == o) break;
            d += String.fromCharCode((15 & t) << 4 | (60 & o) >> 2);
            do {
                if (61 == (c = 255 & r.charCodeAt(h++))) return d;
                c = e[c];
            } while (h < C && -1 == c);
            if (-1 == c) break;
            d += String.fromCharCode((3 & o) << 6 | c);
        }
        return d;
    },
    utf16to8: function(r) {
        var e, a, t, o;
        for (e = "", t = r.length, a = 0; a < t; a++) (o = r.charCodeAt(a)) >= 1 && o <= 127 ? e += r.charAt(a) : o > 2047 ? (e += String.fromCharCode(224 | o >> 12 & 15), 
        e += String.fromCharCode(128 | o >> 6 & 63), e += String.fromCharCode(128 | o >> 0 & 63)) : (e += String.fromCharCode(192 | o >> 6 & 31), 
        e += String.fromCharCode(128 | o >> 0 & 63));
        return e;
    },
    utf8to16: function(r) {
        var e, a, t, o, c, h;
        for (e = "", t = r.length, a = 0; a < t; ) switch ((o = r.charCodeAt(a++)) >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            e += r.charAt(a - 1);
            break;

          case 12:
          case 13:
            c = r.charCodeAt(a++), e += String.fromCharCode((31 & o) << 6 | 63 & c);
            break;

          case 14:
            c = r.charCodeAt(a++), h = r.charCodeAt(a++), e += String.fromCharCode((15 & o) << 12 | (63 & c) << 6 | (63 & h) << 0);
        }
        return e;
    }
};