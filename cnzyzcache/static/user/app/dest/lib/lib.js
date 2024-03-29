var lib = function (t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {exports: {}, id: r, loaded: !1};
        return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}(function (t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) switch (typeof t[e]) {
        case"function":
            break;
        case"object":
            t[e] = function (e) {
                var n = e.slice(1), r = t[e[0]];
                return function (t, e, i) {
                    r.apply(this, [t, e, i].concat(n))
                }
            }(t[e]);
            break;
        default:
            t[e] = t[t[e]]
    }
    return t
}([function (t, e, n) {
    t.exports = n
}, function (t, e) {
    "function" == typeof Object.create ? t.exports = function (t, e) {
        t.super_ = e, t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : t.exports = function (t, e) {
        t.super_ = e;
        var n = function () {
        };
        n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
    }
}, function (t, e) {
    function n(t) {
        return p[t]
    }

    function r(t) {
        return ("" + t).replace(f, n)
    }

    function i(t) {
        o(t, "")
    }

    var o, s = Array.prototype.indexOf, a = function (t, e) {
        if (null == t) return -1;
        if (s && t.indexOf === s) return t.indexOf(e);
        for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
        return -1
    }, u = function (t, e) {
        return a(t, e) !== -1
    }, l = function (t, e) {
        return void 0 === t ? e : t
    }, c = /([A-Z])/g, h = function (t) {
        return t.replace(c, "-$1").toLowerCase()
    }, p = {"&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;"}, f = /[&><"']/g;
    if ("undefined" != typeof document) {
        var d = document.createElement("span");
        o = "textContent" in d ? function (t, e) {
            t.textContent = e
        } : function (t, e) {
            t.innerText = e
        }
    }
    t.exports = {contains: u, deflt: l, escape: r, hyphenate: h, indexOf: a, setTextContent: o, clearNode: i}
}, function (t, e, n) {
    (function (t) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
        "use strict";

        function r() {
            try {
                var t = new Uint8Array(1);
                return t.__proto__ = {
                    __proto__: Uint8Array.prototype, foo: function () {
                        return 42
                    }
                }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
            } catch (t) {
                return !1
            }
        }

        function i() {
            return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function o(t, e) {
            if (i() < e) throw new RangeError("Invalid typed array length");
            return s.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = s.prototype) : (null === t && (t = new s(e)), t.length = e), t
        }

        function s(t, e, n) {
            if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(t, e, n);
            if ("number" == typeof t) {
                if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                return c(this, t)
            }
            return a(this, t, e, n)
        }

        function a(t, e, n, r) {
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? f(t, e, n, r) : "string" == typeof e ? h(t, e, n) : d(t, e)
        }

        function u(t) {
            if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
            if (t < 0) throw new RangeError('"size" argument must not be negative')
        }

        function l(t, e, n, r) {
            return u(e), e <= 0 ? o(t, e) : void 0 !== n ? "string" == typeof r ? o(t, e).fill(n, r) : o(t, e).fill(n) : o(t, e)
        }

        function c(t, e) {
            if (u(e), t = o(t, e < 0 ? 0 : 0 | g(e)), !s.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
            return t
        }

        function h(t, e, n) {
            if ("string" == typeof n && "" !== n || (n = "utf8"), !s.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
            var r = 0 | y(e, n);
            t = o(t, r);
            var i = t.write(e, n);
            return i !== r && (t = t.slice(0, i)), t
        }

        function p(t, e) {
            var n = e.length < 0 ? 0 : 0 | g(e.length);
            t = o(t, n);
            for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
            return t
        }

        function f(t, e, n, r) {
            if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
            if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
            return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), s.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = s.prototype) : t = p(t, e), t
        }

        function d(t, e) {
            if (s.isBuffer(e)) {
                var n = 0 | g(e.length);
                return t = o(t, n), 0 === t.length ? t : (e.copy(t, 0, 0, n), t)
            }
            if (e) {
                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || K(e.length) ? o(t, 0) : p(t, e);
                if ("Buffer" === e.type && Z(e.data)) return p(t, e.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }

        function g(t) {
            if (t >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
            return 0 | t
        }

        function m(t) {
            return +t != t && (t = 0), s.alloc(+t)
        }

        function y(t, e) {
            if (s.isBuffer(t)) return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var n = t.length;
            if (0 === n) return 0;
            for (var r = !1; ;) switch (e) {
                case"ascii":
                case"latin1":
                case"binary":
                    return n;
                case"utf8":
                case"utf-8":
                case void 0:
                    return W(t).length;
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return 2 * n;
                case"hex":
                    return n >>> 1;
                case"base64":
                    return G(t).length;
                default:
                    if (r) return W(t).length;
                    e = ("" + e).toLowerCase(), r = !0
            }
        }

        function v(t, e, n) {
            var r = !1;
            if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
            if (n >>>= 0, e >>>= 0, n <= e) return "";
            for (t || (t = "utf8"); ;) switch (t) {
                case"hex":
                    return N(this, e, n);
                case"utf8":
                case"utf-8":
                    return L(this, e, n);
                case"ascii":
                    return D(this, e, n);
                case"latin1":
                case"binary":
                    return R(this, e, n);
                case"base64":
                    return A(this, e, n);
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return O(this, e, n);
                default:
                    if (r) throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(), r = !0
            }
        }

        function b(t, e, n) {
            var r = t[e];
            t[e] = t[n], t[n] = r
        }

        function w(t, e, n, r, i) {
            if (0 === t.length) return -1;
            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                if (i) return -1;
                n = t.length - 1
            } else if (n < 0) {
                if (!i) return -1;
                n = 0
            }
            if ("string" == typeof e && (e = s.from(e, r)), s.isBuffer(e)) return 0 === e.length ? -1 : x(t, e, n, r, i);
            if ("number" == typeof e) return e &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : x(t, [e], n, r, i);
            throw new TypeError("val must be string, number or Buffer")
        }

        function x(t, e, n, r, i) {
            function o(t, e) {
                return 1 === s ? t[e] : t.readUInt16BE(e * s)
            }

            var s = 1, a = t.length, u = e.length;
            if (void 0 !== r && (r = String(r).toLowerCase(), "ucs2" === r || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (t.length < 2 || e.length < 2) return -1;
                s = 2, a /= 2, u /= 2, n /= 2
            }
            var l;
            if (i) {
                var c = -1;
                for (l = n; l < a; l++) if (o(t, l) === o(e, c === -1 ? 0 : l - c)) {
                    if (c === -1 && (c = l), l - c + 1 === u) return c * s
                } else c !== -1 && (l -= l - c), c = -1
            } else for (n + u > a && (n = a - u), l = n; l >= 0; l--) {
                for (var h = !0, p = 0; p < u; p++) if (o(t, l + p) !== o(e, p)) {
                    h = !1;
                    break
                }
                if (h) return l
            }
            return -1
        }

        function k(t, e, n, r) {
            n = Number(n) || 0;
            var i = t.length - n;
            r ? (r = Number(r), r > i && (r = i)) : r = i;
            var o = e.length;
            if (o % 2 !== 0) throw new TypeError("Invalid hex string");
            r > o / 2 && (r = o / 2);
            for (var s = 0; s < r; ++s) {
                var a = parseInt(e.substr(2 * s, 2), 16);
                if (isNaN(a)) return s;
                t[n + s] = a
            }
            return s
        }

        function S(t, e, n, r) {
            return Y(W(e, t.length - n), t, n, r)
        }

        function _(t, e, n, r) {
            return Y(V(e), t, n, r)
        }

        function T(t, e, n, r) {
            return _(t, e, n, r)
        }

        function C(t, e, n, r) {
            return Y(G(e), t, n, r)
        }

        function E(t, e, n, r) {
            return Y(X(e, t.length - n), t, n, r)
        }

        function A(t, e, n) {
            return 0 === e && n === t.length ? J.fromByteArray(t) : J.fromByteArray(t.slice(e, n))
        }

        function L(t, e, n) {
            n = Math.min(t.length, n);
            for (var r = [], i = e; i < n;) {
                var o = t[i], s = null, a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                if (i + a <= n) {
                    var u, l, c, h;
                    switch (a) {
                        case 1:
                            o < 128 && (s = o);
                            break;
                        case 2:
                            u = t[i + 1], 128 === (192 & u) && (h = (31 & o) << 6 | 63 & u, h > 127 && (s = h));
                            break;
                        case 3:
                            u = t[i + 1], l = t[i + 2], 128 === (192 & u) && 128 === (192 & l) && (h = (15 & o) << 12 | (63 & u) << 6 | 63 & l, h > 2047 && (h < 55296 || h > 57343) && (s = h));
                            break;
                        case 4:
                            u = t[i + 1], l = t[i + 2], c = t[i + 3], 128 === (192 & u) && 128 === (192 & l) && 128 === (192 & c) && (h = (15 & o) << 18 | (63 & u) << 12 | (63 & l) << 6 | 63 & c, h > 65535 && h < 1114112 && (s = h))
                    }
                }
                null === s ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, r.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), r.push(s), i += a
            }
            return I(r)
        }

        function I(t) {
            var e = t.length;
            if (e <= tt) return String.fromCharCode.apply(String, t);
            for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += tt));
            return n
        }

        function D(t, e, n) {
            var r = "";
            n = Math.min(t.length, n);
            for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
            return r
        }

        function R(t, e, n) {
            var r = "";
            n = Math.min(t.length, n);
            for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
            return r
        }

        function N(t, e, n) {
            var r = t.length;
            (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
            for (var i = "", o = e; o < n; ++o) i += H(t[o]);
            return i
        }

        function O(t, e, n) {
            for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
            return i
        }

        function M(t, e, n) {
            if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function B(t, e, n, r, i, o) {
            if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
            if (n + r > t.length) throw new RangeError("Index out of range")
        }

        function P(t, e, n, r) {
            e < 0 && (e = 65535 + e + 1);
            for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
        }

        function q(t, e, n, r) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255
        }

        function j(t, e, n, r, i, o) {
            if (n + r > t.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function z(t, e, n, r, i) {
            return i || j(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Q.write(t, e, n, r, 23, 4), n + 4
        }

        function $(t, e, n, r, i) {
            return i || j(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), Q.write(t, e, n, r, 52, 8), n + 8
        }

        function F(t) {
            if (t = U(t).replace(et, ""), t.length < 2) return "";
            for (; t.length % 4 !== 0;) t += "=";
            return t
        }

        function U(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }

        function H(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }

        function W(t, e) {
            e = e || 1 / 0;
            for (var n, r = t.length, i = null, o = [], s = 0; s < r; ++s) {
                if (n = t.charCodeAt(s), n > 55295 && n < 57344) {
                    if (!i) {
                        if (n > 56319) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (s + 1 === r) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = n;
                        continue
                    }
                    if (n < 56320) {
                        (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                        continue
                    }
                    n = (i - 55296 << 10 | n - 56320) + 65536
                } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                if (i = null, n < 128) {
                    if ((e -= 1) < 0) break;
                    o.push(n)
                } else if (n < 2048) {
                    if ((e -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((e -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((e -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }

        function V(t) {
            for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
            return e
        }

        function X(t, e) {
            for (var n, r, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r);
            return o
        }

        function G(t) {
            return J.toByteArray(F(t))
        }

        function Y(t, e, n, r) {
            for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
            return i
        }

        function K(t) {
            return t !== t
        }

        var J = n(61), Q = n(107), Z = n(23);
        e.Buffer = s, e.SlowBuffer = m, e.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : r(), e.kMaxLength = i(), s.poolSize = 8192, s._augment = function (t) {
            return t.__proto__ = s.prototype, t
        }, s.from = function (t, e, n) {
            return a(null, t, e, n)
        }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
            value: null,
            configurable: !0
        })), s.alloc = function (t, e, n) {
            return l(null, t, e, n)
        }, s.allocUnsafe = function (t) {
            return c(null, t)
        }, s.allocUnsafeSlow = function (t) {
            return c(null, t)
        }, s.isBuffer = function (t) {
            return !(null == t || !t._isBuffer)
        }, s.compare = function (t, e) {
            if (!s.isBuffer(t) || !s.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i) if (t[i] !== e[i]) {
                n = t[i], r = e[i];
                break
            }
            return n < r ? -1 : r < n ? 1 : 0
        }, s.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
                case"hex":
                case"utf8":
                case"utf-8":
                case"ascii":
                case"latin1":
                case"binary":
                case"base64":
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, s.concat = function (t, e) {
            if (!Z(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return s.alloc(0);
            var n;
            if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var r = s.allocUnsafe(e), i = 0;
            for (n = 0; n < t.length; ++n) {
                var o = t[n];
                if (!s.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                o.copy(r, i), i += o.length
            }
            return r
        }, s.byteLength = y, s.prototype._isBuffer = !0, s.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) b(this, e, e + 1);
            return this
        }, s.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4) b(this, e, e + 3), b(this, e + 1, e + 2);
            return this
        }, s.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8) b(this, e, e + 7), b(this, e + 1, e + 6), b(this, e + 2, e + 5), b(this, e + 3, e + 4);
            return this
        }, s.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? L(this, 0, t) : v.apply(this, arguments)
        }, s.prototype.equals = function (t) {
            if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === s.compare(this, t)
        }, s.prototype.inspect = function () {
            var t = "", n = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
        }, s.prototype.compare = function (t, e, n, r, i) {
            if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
            if (r >= i && e >= n) return 0;
            if (r >= i) return -1;
            if (e >= n) return 1;
            if (e >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === t) return 0;
            for (var o = i - r, a = n - e, u = Math.min(o, a), l = this.slice(r, i), c = t.slice(e, n), h = 0; h < u; ++h) if (l[h] !== c[h]) {
                o = l[h], a = c[h];
                break
            }
            return o < a ? -1 : a < o ? 1 : 0
        }, s.prototype.includes = function (t, e, n) {
            return this.indexOf(t, e, n) !== -1
        }, s.prototype.indexOf = function (t, e, n) {
            return w(this, t, e, n, !0)
        }, s.prototype.lastIndexOf = function (t, e, n) {
            return w(this, t, e, n, !1)
        }, s.prototype.write = function (t, e, n, r) {
            if (void 0 === e) r = "utf8", n = this.length, e = 0; else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0; else {
                if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
            }
            var i = this.length - e;
            if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1; ;) switch (r) {
                case"hex":
                    return k(this, t, e, n);
                case"utf8":
                case"utf-8":
                    return S(this, t, e, n);
                case"ascii":
                    return _(this, t, e, n);
                case"latin1":
                case"binary":
                    return T(this, t, e, n);
                case"base64":
                    return C(this, t, e, n);
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return E(this, t, e, n);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), o = !0
            }
        }, s.prototype.toJSON = function () {
            return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
        };
        var tt = 4096;
        s.prototype.slice = function (t, e) {
            var n = this.length;
            t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), e < t && (e = t);
            var r;
            if (s.TYPED_ARRAY_SUPPORT) r = this.subarray(t, e), r.__proto__ = s.prototype; else {
                var i = e - t;
                r = new s(i, void 0);
                for (var o = 0; o < i; ++o) r[o] = this[o + t]
            }
            return r
        }, s.prototype.readUIntLE = function (t, e, n) {
            t |= 0, e |= 0, n || M(t, e, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
            return r
        }, s.prototype.readUIntBE = function (t, e, n) {
            t |= 0, e |= 0, n || M(t, e, this.length);
            for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) r += this[t + --e] * i;
            return r
        }, s.prototype.readUInt8 = function (t, e) {
            return e || M(t, 1, this.length), this[t]
        }, s.prototype.readUInt16LE = function (t, e) {
            return e || M(t, 2, this.length), this[t] | this[t + 1] << 8
        }, s.prototype.readUInt16BE = function (t, e) {
            return e || M(t, 2, this.length), this[t] << 8 | this[t + 1]
        }, s.prototype.readUInt32LE = function (t, e) {
            return e || M(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }, s.prototype.readUInt32BE = function (t, e) {
            return e || M(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }, s.prototype.readIntLE = function (t, e, n) {
            t |= 0, e |= 0, n || M(t, e, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
            return i *= 128, r >= i && (r -= Math.pow(2, 8 * e)), r
        }, s.prototype.readIntBE = function (t, e, n) {
            t |= 0, e |= 0, n || M(t, e, this.length);
            for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i;
            return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o
        }, s.prototype.readInt8 = function (t, e) {
            return e || M(t, 1, this.length), 128 & this[t] ? (255 - this[t] + 1) * -1 : this[t]
        }, s.prototype.readInt16LE = function (t, e) {
            e || M(t, 2, this.length);
            var n = this[t] | this[t + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, s.prototype.readInt16BE = function (t, e) {
            e || M(t, 2, this.length);
            var n = this[t + 1] | this[t] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, s.prototype.readInt32LE = function (t, e) {
            return e || M(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }, s.prototype.readInt32BE = function (t, e) {
            return e || M(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }, s.prototype.readFloatLE = function (t, e) {
            return e || M(t, 4, this.length), Q.read(this, t, !0, 23, 4)
        }, s.prototype.readFloatBE = function (t, e) {
            return e || M(t, 4, this.length), Q.read(this, t, !1, 23, 4)
        }, s.prototype.readDoubleLE = function (t, e) {
            return e || M(t, 8, this.length), Q.read(this, t, !0, 52, 8)
        }, s.prototype.readDoubleBE = function (t, e) {
            return e || M(t, 8, this.length), Q.read(this, t, !1, 52, 8)
        }, s.prototype.writeUIntLE = function (t, e, n, r) {
            if (t = +t, e |= 0, n |= 0, !r) {
                var i = Math.pow(2, 8 * n) - 1;
                B(this, t, e, n, i, 0)
            }
            var o = 1, s = 0;
            for (this[e] = 255 & t; ++s < n && (o *= 256);) this[e + s] = t / o & 255;
            return e + n
        }, s.prototype.writeUIntBE = function (t, e, n, r) {
            if (t = +t, e |= 0, n |= 0, !r) {
                var i = Math.pow(2, 8 * n) - 1;
                B(this, t, e, n, i, 0)
            }
            var o = n - 1, s = 1;
            for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) this[e + o] = t / s & 255;
            return e + n
        }, s.prototype.writeUInt8 = function (t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
        }, s.prototype.writeUInt16LE = function (t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : P(this, t, e, !0), e + 2
        }, s.prototype.writeUInt16BE = function (t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : P(this, t, e, !1), e + 2
        }, s.prototype.writeUInt32LE = function (t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : q(this, t, e, !0), e + 4
        }, s.prototype.writeUInt32BE = function (t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : q(this, t, e, !1), e + 4
        }, s.prototype.writeIntLE = function (t, e, n, r) {
            if (t = +t, e |= 0, !r) {
                var i = Math.pow(2, 8 * n - 1);
                B(this, t, e, n, i - 1, -i)
            }
            var o = 0, s = 1, a = 0;
            for (this[e] = 255 & t; ++o < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
            return e + n
        }, s.prototype.writeIntBE = function (t, e, n, r) {
            if (t = +t, e |= 0, !r) {
                var i = Math.pow(2, 8 * n - 1);
                B(this, t, e, n, i - 1, -i)
            }
            var o = n - 1, s = 1, a = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
            return e + n
        }, s.prototype.writeInt8 = function (t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
        }, s.prototype.writeInt16LE = function (t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : P(this, t, e, !0), e + 2
        }, s.prototype.writeInt16BE = function (t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : P(this, t, e, !1), e + 2
        }, s.prototype.writeInt32LE = function (t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : q(this, t, e, !0), e + 4
        }, s.prototype.writeInt32BE = function (t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : q(this, t, e, !1), e + 4
        }, s.prototype.writeFloatLE = function (t, e, n) {
            return z(this, t, e, !0, n)
        }, s.prototype.writeFloatBE = function (t, e, n) {
            return z(this, t, e, !1, n)
        }, s.prototype.writeDoubleLE = function (t, e, n) {
            return $(this, t, e, !0, n)
        }, s.prototype.writeDoubleBE = function (t, e, n) {
            return $(this, t, e, !1, n)
        }, s.prototype.copy = function (t, e, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
            var i, o = r - n;
            if (this === t && n < e && e < r) for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n]; else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) t[i + e] = this[i + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
            return o
        }, s.prototype.fill = function (t, e, n, r) {
            if ("string" == typeof t) {
                if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                    var i = t.charCodeAt(0);
                    i < 256 && (t = i)
                }
                if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
            if (n <= e) return this;
            e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0);
            var o;
            if ("number" == typeof t) for (o = e; o < n; ++o) this[o] = t; else {
                var a = s.isBuffer(t) ? t : W(new s(t, r).toString()), u = a.length;
                for (o = 0; o < n - e; ++o) this[o + e] = a[o % u]
            }
            return this
        };
        var et = /[^+\/0-9A-Za-z-_]/g
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    (function (r) {
        function i() {
            return "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
        }

        function o() {
            var t = arguments, n = this.useColors;
            if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), !n) return t;
            var r = "color: " + this.color;
            t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
            var i = 0, o = 0;
            return t[0].replace(/%[a-z%]/g, function (t) {
                "%%" !== t && (i++, "%c" === t && (o = i))
            }), t.splice(o, 0, r), t
        }

        function s() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function a(t) {
            try {
                null == t ? e.storage.removeItem("debug") : e.storage.debug = t
            } catch (t) {
            }
        }

        function u() {
            try {
                return e.storage.debug
            } catch (t) {
            }
            if ("undefined" != typeof r && "env" in r) return r.env.DEBUG
        }

        function l() {
            try {
                return window.localStorage
            } catch (t) {
            }
        }

        e = t.exports = n(77), e.log = s, e.formatArgs = o, e.save = a, e.load = u, e.useColors = i, e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : l(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function (t) {
            try {
                return JSON.stringify(t)
            } catch (t) {
                return "[UnexpectedJSONParseError]: " + t.message
            }
        }, e.enable(u())
    }).call(e, n(8))
}, function (t, e) {
    function n(t, e, r) {
        var i = "KaTeX parse error: " + t;
        if (void 0 !== e && void 0 !== r) {
            i += " at position " + r + ": ";
            var o = e._input;
            o = o.slice(0, r) + "̲" + o.slice(r);
            var s = Math.max(0, r - 15), a = r + 15;
            i += o.slice(s, a)
        }
        var u = new Error(i);
        return u.name = "ParseError", u.__proto__ = n.prototype, u.position = r, u
    }

    n.prototype.__proto__ = Error.prototype, t.exports = n
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return this instanceof r ? (l.call(this, t), c.call(this, t), t && t.readable === !1 && (this.readable = !1), t && t.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, t && t.allowHalfOpen === !1 && (this.allowHalfOpen = !1), void this.once("end", i)) : new r(t)
    }

    function i() {
        this.allowHalfOpen || this._writableState.ended || a(o, this)
    }

    function o(t) {
        t.end()
    }

    var s = Object.keys || function (t) {
        var e = [];
        for (var n in t) e.push(n);
        return e
    };
    t.exports = r;
    var a = n(27), u = n(10);
    u.inherits = n(1);
    var l = n(49), c = n(29);
    u.inherits(r, l);
    for (var h = s(c.prototype), p = 0; p < h.length; p++) {
        var f = h[p];
        r.prototype[f] || (r.prototype[f] = c.prototype[f])
    }
}, function (t, e, n) {
    (function (t) {
        function r(t, n) {
            var r = "b" + e.packets[t.type] + t.data.data;
            return n(r)
        }

        function i(t, n, r) {
            if (!n) return e.encodeBase64Packet(t, r);
            var i = t.data, o = new Uint8Array(i), s = new Uint8Array(1 + i.byteLength);
            s[0] = v[t.type];
            for (var a = 0; a < o.length; a++) s[a + 1] = o[a];
            return r(s.buffer)
        }

        function o(t, n, r) {
            if (!n) return e.encodeBase64Packet(t, r);
            var i = new FileReader;
            return i.onload = function () {
                t.data = i.result, e.encodePacket(t, n, !0, r)
            }, i.readAsArrayBuffer(t.data)
        }

        function s(t, n, r) {
            if (!n) return e.encodeBase64Packet(t, r);
            if (y) return o(t, n, r);
            var i = new Uint8Array(1);
            i[0] = v[t.type];
            var s = new x([i.buffer, t.data]);
            return r(s)
        }

        function a(t) {
            try {
                t = d.decode(t)
            } catch (t) {
                return !1
            }
            return t
        }

        function u(t, e, n) {
            for (var r = new Array(t.length), i = f(t.length, n), o = function (t, n, i) {
                e(n, function (e, n) {
                    r[t] = n, i(e, r)
                })
            }, s = 0; s < t.length; s++) o(s, t[s], i)
        }

        var l, c = n(95), h = n(37), p = n(58), f = n(57), d = n(155);
        t && t.ArrayBuffer && (l = n(60));
        var g = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
            m = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent), y = g || m;
        e.protocol = 3;
        var v = e.packets = {open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6}, b = c(v),
            w = {type: "error", data: "parser error"}, x = n(62);
        e.encodePacket = function (e, n, o, a) {
            "function" == typeof n && (a = n, n = !1), "function" == typeof o && (a = o, o = null);
            var u = void 0 === e.data ? void 0 : e.data.buffer || e.data;
            if (t.ArrayBuffer && u instanceof ArrayBuffer) return i(e, n, a);
            if (x && u instanceof t.Blob) return s(e, n, a);
            if (u && u.base64) return r(e, a);
            var l = v[e.type];
            return void 0 !== e.data && (l += o ? d.encode(String(e.data)) : String(e.data)), a("" + l)
        }, e.encodeBase64Packet = function (n, r) {
            var i = "b" + e.packets[n.type];
            if (x && n.data instanceof t.Blob) {
                var o = new FileReader;
                return o.onload = function () {
                    var t = o.result.split(",")[1];
                    r(i + t)
                }, o.readAsDataURL(n.data)
            }
            var s;
            try {
                s = String.fromCharCode.apply(null, new Uint8Array(n.data))
            } catch (t) {
                for (var a = new Uint8Array(n.data), u = new Array(a.length), l = 0; l < a.length; l++) u[l] = a[l];
                s = String.fromCharCode.apply(null, u)
            }
            return i += t.btoa(s), r(i)
        }, e.decodePacket = function (t, n, r) {
            if (void 0 === t) return w;
            if ("string" == typeof t) {
                if ("b" == t.charAt(0)) return e.decodeBase64Packet(t.substr(1), n);
                if (r && (t = a(t), t === !1)) return w;
                var i = t.charAt(0);
                return Number(i) == i && b[i] ? t.length > 1 ? {type: b[i], data: t.substring(1)} : {type: b[i]} : w
            }
            var o = new Uint8Array(t), i = o[0], s = p(t, 1);
            return x && "blob" === n && (s = new x([s])), {type: b[i], data: s}
        }, e.decodeBase64Packet = function (t, e) {
            var n = b[t.charAt(0)];
            if (!l) return {type: n, data: {base64: !0, data: t.substr(1)}};
            var r = l.decode(t.substr(1));
            return "blob" === e && x && (r = new x([r])), {type: n, data: r}
        }, e.encodePayload = function (t, n, r) {
            function i(t) {
                return t.length + ":" + t
            }

            function o(t, r) {
                e.encodePacket(t, !!s && n, !0, function (t) {
                    r(null, i(t))
                })
            }

            "function" == typeof n && (r = n, n = null);
            var s = h(t);
            return n && s ? x && !y ? e.encodePayloadAsBlob(t, r) : e.encodePayloadAsArrayBuffer(t, r) : t.length ? void u(t, o, function (t, e) {
                return r(e.join(""))
            }) : r("0:")
        }, e.decodePayload = function (t, n, r) {
            if ("string" != typeof t) return e.decodePayloadAsBinary(t, n, r);
            "function" == typeof n && (r = n, n = null);
            var i;
            if ("" == t) return r(w, 0, 1);
            for (var o, s, a = "", u = 0, l = t.length; u < l; u++) {
                var c = t.charAt(u);
                if (":" != c) a += c; else {
                    if ("" == a || a != (o = Number(a))) return r(w, 0, 1);
                    if (s = t.substr(u + 1, o), a != s.length) return r(w, 0, 1);
                    if (s.length) {
                        if (i = e.decodePacket(s, n, !0), w.type == i.type && w.data == i.data) return r(w, 0, 1);
                        var h = r(i, u + o, l);
                        if (!1 === h) return
                    }
                    u += o, a = ""
                }
            }
            return "" != a ? r(w, 0, 1) : void 0
        }, e.encodePayloadAsArrayBuffer = function (t, n) {
            function r(t, n) {
                e.encodePacket(t, !0, !0, function (t) {
                    return n(null, t)
                })
            }

            return t.length ? void u(t, r, function (t, e) {
                var r = e.reduce(function (t, e) {
                    var n;
                    return n = "string" == typeof e ? e.length : e.byteLength, t + n.toString().length + n + 2
                }, 0), i = new Uint8Array(r), o = 0;
                return e.forEach(function (t) {
                    var e = "string" == typeof t, n = t;
                    if (e) {
                        for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++) r[s] = t.charCodeAt(s);
                        n = r.buffer
                    }
                    e ? i[o++] = 0 : i[o++] = 1;
                    for (var a = n.byteLength.toString(), s = 0; s < a.length; s++) i[o++] = parseInt(a[s]);
                    i[o++] = 255;
                    for (var r = new Uint8Array(n), s = 0; s < r.length; s++) i[o++] = r[s]
                }), n(i.buffer)
            }) : n(new ArrayBuffer(0))
        }, e.encodePayloadAsBlob = function (t, n) {
            function r(t, n) {
                e.encodePacket(t, !0, !0, function (t) {
                    var e = new Uint8Array(1);
                    if (e[0] = 1, "string" == typeof t) {
                        for (var r = new Uint8Array(t.length), i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                        t = r.buffer, e[0] = 0
                    }
                    for (var o = t instanceof ArrayBuffer ? t.byteLength : t.size, s = o.toString(), a = new Uint8Array(s.length + 1), i = 0; i < s.length; i++) a[i] = parseInt(s[i]);
                    if (a[s.length] = 255, x) {
                        var u = new x([e.buffer, a.buffer, t]);
                        n(null, u)
                    }
                })
            }

            u(t, r, function (t, e) {
                return n(new x(e))
            })
        }, e.decodePayloadAsBinary = function (t, n, r) {
            "function" == typeof n && (r = n, n = null);
            for (var i = t, o = [], s = !1; i.byteLength > 0;) {
                for (var a = new Uint8Array(i), u = 0 === a[0], l = "", c = 1; 255 != a[c]; c++) {
                    if (l.length > 310) {
                        s = !0;
                        break
                    }
                    l += a[c]
                }
                if (s) return r(w, 0, 1);
                i = p(i, 2 + l.length), l = parseInt(l);
                var h = p(i, 0, l);
                if (u) try {
                    h = String.fromCharCode.apply(null, new Uint8Array(h))
                } catch (t) {
                    var f = new Uint8Array(h);
                    h = "";
                    for (var c = 0; c < f.length; c++) h += String.fromCharCode(f[c])
                }
                o.push(h), i = p(i, l)
            }
            var d = o.length;
            o.forEach(function (t, i) {
                r(e.decodePacket(t, n, !0), i, d)
            })
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
        if (c === setTimeout) return setTimeout(t, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
        try {
            return c(t, 0)
        } catch (e) {
            try {
                return c.call(null, t, 0)
            } catch (e) {
                return c.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (h === clearTimeout) return clearTimeout(t);
        if ((h === r || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
        try {
            return h(t)
        } catch (e) {
            try {
                return h.call(null, t)
            } catch (e) {
                return h.call(this, t)
            }
        }
    }

    function s() {
        g && f && (g = !1, f.length ? d = f.concat(d) : m = -1, d.length && a())
    }

    function a() {
        if (!g) {
            var t = i(s);
            g = !0;
            for (var e = d.length; e;) {
                for (f = d, d = []; ++m < e;) f && f[m].run();
                m = -1, e = d.length
            }
            f = null, g = !1, o(t)
        }
    }

    function u(t, e) {
        this.fun = t, this.array = e
    }

    function l() {
    }

    var c, h, p = t.exports = {};
    !function () {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            c = n
        }
        try {
            h = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
            h = r
        }
    }();
    var f, d = [], g = !1, m = -1;
    p.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        d.push(new u(t, e)), 1 !== d.length || g || i(a)
    }, u.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, p.removeAllListeners = l, p.emit = l, p.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, p.cwd = function () {
        return "/"
    }, p.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, p.umask = function () {
        return 0
    }
}, function (t, e, n) {
    function r(t) {
        if (t) return i(t)
    }

    function i(t) {
        for (var e in r.prototype) t[e] = r.prototype[e];
        return t
    }

    t.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
    }, r.prototype.once = function (t, e) {
        function n() {
            this.off(t, n), e.apply(this, arguments)
        }

        return n.fn = e, this.on(t, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n = this._callbacks["$" + t];
        if (!n) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + t], this;
        for (var r, i = 0; i < n.length; i++) if (r = n[i], r === e || r.fn === e) {
            n.splice(i, 1);
            break
        }
        return this
    }, r.prototype.emit = function (t) {
        this._callbacks = this._callbacks || {};
        var e = [].slice.call(arguments, 1), n = this._callbacks["$" + t];
        if (n) {
            n = n.slice(0);
            for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, e)
        }
        return this
    }, r.prototype.listeners = function (t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
    }, r.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length
    }
}, function (t, e, n) {
    (function (t) {
        function n(t) {
            return Array.isArray ? Array.isArray(t) : "[object Array]" === m(t)
        }

        function r(t) {
            return "boolean" == typeof t
        }

        function i(t) {
            return null === t
        }

        function o(t) {
            return null == t
        }

        function s(t) {
            return "number" == typeof t
        }

        function a(t) {
            return "string" == typeof t
        }

        function u(t) {
            return "symbol" == typeof t
        }

        function l(t) {
            return void 0 === t
        }

        function c(t) {
            return "[object RegExp]" === m(t)
        }

        function h(t) {
            return "object" == typeof t && null !== t
        }

        function p(t) {
            return "[object Date]" === m(t)
        }

        function f(t) {
            return "[object Error]" === m(t) || t instanceof Error
        }

        function d(t) {
            return "function" == typeof t
        }

        function g(t) {
            return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || "undefined" == typeof t
        }

        function m(t) {
            return Object.prototype.toString.call(t)
        }

        e.isArray = n, e.isBoolean = r, e.isNull = i, e.isNullOrUndefined = o, e.isNumber = s, e.isString = a, e.isSymbol = u, e.isUndefined = l, e.isRegExp = c, e.isObject = h, e.isDate = p, e.isError = f, e.isFunction = d, e.isPrimitive = g, e.isBuffer = t.isBuffer
    }).call(e, n(3).Buffer)
}, function (t, e) {
    t.exports = {
        Text: "text",
        Directive: "directive",
        Comment: "comment",
        Script: "script",
        Style: "style",
        Tag: "tag",
        CDATA: "cdata",
        Doctype: "doctype",
        isTag: function (t) {
            return "tag" === t.type || "script" === t.type || "style" === t.type
        }
    }
}, function (t, e) {
    function n() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function r(t) {
        return "function" == typeof t
    }

    function i(t) {
        return "number" == typeof t
    }

    function o(t) {
        return "object" == typeof t && null !== t
    }

    function s(t) {
        return void 0 === t
    }

    t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (t) {
        if (!i(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
        return this._maxListeners = t, this
    }, n.prototype.emit = function (t) {
        var e, n, i, a, u, l;
        if (this._events || (this._events = {}),
        "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
            if (e = arguments[1], e instanceof Error) throw e;
            var c = new Error('Uncaught, unspecified "error" event. (' + e + ")");
            throw c.context = e, c
        }
        if (n = this._events[t], s(n)) return !1;
        if (r(n)) switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                a = Array.prototype.slice.call(arguments, 1), n.apply(this, a)
        } else if (o(n)) for (a = Array.prototype.slice.call(arguments, 1), l = n.slice(), i = l.length, u = 0; u < i; u++) l[u].apply(this, a);
        return !0
    }, n.prototype.addListener = function (t, e) {
        var i;
        if (!r(e)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned && (i = s(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, i && i > 0 && this._events[t].length > i && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace())), this
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (t, e) {
        function n() {
            this.removeListener(t, n), i || (i = !0, e.apply(this, arguments))
        }

        if (!r(e)) throw TypeError("listener must be a function");
        var i = !1;
        return n.listener = e, this.on(t, n), this
    }, n.prototype.removeListener = function (t, e) {
        var n, i, s, a;
        if (!r(e)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[t]) return this;
        if (n = this._events[t], s = n.length, i = -1, n === e || r(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e); else if (o(n)) {
            for (a = s; a-- > 0;) if (n[a] === e || n[a].listener && n[a].listener === e) {
                i = a;
                break
            }
            if (i < 0) return this;
            1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", t, e)
        }
        return this
    }, n.prototype.removeAllListeners = function (t) {
        var e, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
        if (0 === arguments.length) {
            for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (n = this._events[t], r(n)) this.removeListener(t, n); else if (n) for (; n.length;) this.removeListener(t, n[n.length - 1]);
        return delete this._events[t], this
    }, n.prototype.listeners = function (t) {
        var e;
        return e = this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }, n.prototype.listenerCount = function (t) {
        if (this._events) {
            var e = this._events[t];
            if (r(e)) return 1;
            if (e) return e.length
        }
        return 0
    }, n.listenerCount = function (t, e) {
        return t.listenerCount(e)
    }
}, function (t, e, n) {
    function r(e, n) {
        return delete t.exports[e], t.exports[e] = n, n
    }

    var i = n(38), o = n(80);
    t.exports = {
        Parser: i,
        Tokenizer: n(39),
        ElementType: n(11),
        DomHandler: o,
        get FeedHandler() {
            return r("FeedHandler", n(104))
        },
        get Stream() {
            return r("Stream", n(106))
        },
        get WritableStream() {
            return r("WritableStream", n(40))
        },
        get ProxyHandler() {
            return r("ProxyHandler", n(105))
        },
        get DomUtils() {
            return r("DomUtils", n(82))
        },
        get CollectingHandler() {
            return r("CollectingHandler", n(103))
        },
        DefaultHandler: o,
        get RssHandler() {
            return r("RssHandler", this.FeedHandler)
        },
        parseDOM: function (t, e) {
            var n = new o(e);
            return new i(n, e).end(t), n.dom
        },
        parseFeed: function (e, n) {
            var r = new t.exports.FeedHandler(n);
            return new i(r, n).end(e), r.dom
        },
        createDomStream: function (t, e, n) {
            var r = new o(t, e, n);
            return new i(r, e)
        },
        EVENTS: {
            attribute: 2,
            cdatastart: 0,
            cdataend: 0,
            text: 1,
            processinginstruction: 2,
            comment: 1,
            commentend: 0,
            closetag: 1,
            opentag: 2,
            opentagname: 1,
            error: 1,
            end: 0
        }
    }
}, function (t, e, n) {
    var r = n(16), i = .431, o = 1, s = .677, a = .394, u = .444, l = .686, c = .345, h = .413, p = .363, f = .289,
        d = .15, g = .247, m = .386, y = .05, v = 2.39, b = 1.01, w = .81, x = .71, k = .25, S = .04, _ = .111,
        T = .166, C = .2, E = .6, A = .1, L = 10, I = 2 / L, D = {
            xHeight: i,
            quad: o,
            num1: s,
            num2: a,
            num3: u,
            denom1: l,
            denom2: c,
            sup1: h,
            sup2: p,
            sup3: f,
            sub1: d,
            sub2: g,
            supDrop: m,
            subDrop: y,
            axisHeight: k,
            defaultRuleThickness: S,
            bigOpSpacing1: _,
            bigOpSpacing2: T,
            bigOpSpacing3: C,
            bigOpSpacing4: E,
            bigOpSpacing5: A,
            ptPerEm: L,
            emPerEx: i / o,
            doubleRuleSep: I,
            delim1: v,
            getDelim2: function (t) {
                if (t.size === r.TEXT.size) return b;
                if (t.size === r.SCRIPT.size) return w;
                if (t.size === r.SCRIPTSCRIPT.size) return x;
                throw new Error("Unexpected style size: " + t.size)
            }
        }, R = n(123), N = function (t, e) {
            var n = R[e][t.charCodeAt(0)];
            if (n) return {depth: n[0], height: n[1], italic: n[2], skew: n[3], width: n[4]}
        };
    t.exports = {metrics: D, getCharacterMetrics: N}
}, function (t, e) {
    t.exports = function (t, e) {
        var n = function () {
        };
        n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
    }
}, function (t, e) {
    function n(t, e, n, r) {
        this.id = t, this.size = e, this.cramped = r, this.sizeMultiplier = n
    }

    n.prototype.sup = function () {
        return f[d[this.id]]
    }, n.prototype.sub = function () {
        return f[g[this.id]]
    }, n.prototype.fracNum = function () {
        return f[m[this.id]]
    }, n.prototype.fracDen = function () {
        return f[y[this.id]]
    }, n.prototype.cramp = function () {
        return f[v[this.id]]
    }, n.prototype.cls = function () {
        return h[this.size] + (this.cramped ? " cramped" : " uncramped")
    }, n.prototype.reset = function () {
        return p[this.size]
    };
    var r = 0, i = 1, o = 2, s = 3, a = 4, u = 5, l = 6, c = 7,
        h = ["displaystyle textstyle", "textstyle", "scriptstyle", "scriptscriptstyle"],
        p = ["reset-textstyle", "reset-textstyle", "reset-scriptstyle", "reset-scriptscriptstyle"],
        f = [new n(r, 0, 1, !1), new n(i, 0, 1, !0), new n(o, 1, 1, !1), new n(s, 1, 1, !0), new n(a, 2, .7, !1), new n(u, 2, .7, !0), new n(l, 3, .5, !1), new n(c, 3, .5, !0)],
        d = [a, u, a, u, l, c, l, c], g = [u, u, u, u, c, c, c, c], m = [o, s, a, u, l, c, l, c],
        y = [s, s, u, u, c, c, c, c], v = [i, i, s, s, u, u, c, c];
    t.exports = {DISPLAY: f[r], TEXT: f[o], SCRIPT: f[a], SCRIPTSCRIPT: f[l]}
}, function (t, e, n) {
    var r = n(45), i = n(14), o = n(18), s = n(2),
        a = ["\\Gamma", "\\Delta", "\\Theta", "\\Lambda", "\\Xi", "\\Pi", "\\Sigma", "\\Upsilon", "\\Phi", "\\Psi", "\\Omega"],
        u = ["ı", "ȷ"], l = function (t, e, n, s, a) {
            o[n][t] && o[n][t].replace && (t = o[n][t].replace);
            var u, l = i.getCharacterMetrics(t, e);
            return l ? u = new r.symbolNode(t, l.height, l.depth, l.italic, l.skew, a) : ("undefined" != typeof console && console.warn("No character metrics for '" + t + "' in style '" + e + "'"), u = new r.symbolNode(t, 0, 0, 0, 0, a)), s && (u.style.color = s), u
        }, c = function (t, e, n, r) {
            return "\\" === t || "main" === o[e][t].font ? l(t, "Main-Regular", e, n, r) : l(t, "AMS-Regular", e, n, r.concat(["amsrm"]))
        }, h = function (t, e, n, r, i) {
            if ("mathord" === i) return p(t, e, n, r);
            if ("textord" === i) return l(t, "Main-Regular", e, n, r.concat(["mathrm"]));
            throw new Error("unexpected type: " + i + " in mathDefault")
        }, p = function (t, e, n, r) {
            return /[0-9]/.test(t.charAt(0)) || s.contains(u, t) || s.contains(a, t) ? l(t, "Main-Italic", e, n, r.concat(["mainit"])) : l(t, "Math-Italic", e, n, r.concat(["mathit"]))
        }, f = function (t, e, n) {
            var r = t.mode, a = t.value;
            o[r][a] && o[r][a].replace && (a = o[r][a].replace);
            var c = ["mord"], f = e.getColor(), d = e.font;
            if (d) {
                if ("mathit" === d || s.contains(u, a)) return p(a, r, f, c);
                var g = x[d].fontName;
                return i.getCharacterMetrics(a, g) ? l(a, g, r, f, c.concat([d])) : h(a, r, f, c, n)
            }
            return h(a, r, f, c, n)
        }, d = function (t) {
            var e = 0, n = 0, r = 0;
            if (t.children) for (var i = 0; i < t.children.length; i++) t.children[i].height > e && (e = t.children[i].height), t.children[i].depth > n && (n = t.children[i].depth), t.children[i].maxFontSize > r && (r = t.children[i].maxFontSize);
            t.height = e, t.depth = n, t.maxFontSize = r
        }, g = function (t, e, n) {
            var i = new r.span(t, e);
            return d(i), n && (i.style.color = n), i
        }, m = function (t) {
            var e = new r.documentFragment(t);
            return d(e), e
        }, y = function (t, e) {
            var n = g([], [new r.symbolNode("​")]);
            n.style.fontSize = e / t.style.sizeMultiplier + "em";
            var i = g(["fontsize-ensurer", "reset-" + t.size, "size5"], [n]);
            return i
        }, v = function (t, e, n, i) {
            var o, s, a;
            if ("individualShift" === e) {
                var u = t;
                for (t = [u[0]], o = -u[0].shift - u[0].elem.depth, s = o, a = 1; a < u.length; a++) {
                    var l = -u[a].shift - s - u[a].elem.depth, c = l - (u[a - 1].elem.height + u[a - 1].elem.depth);
                    s += l, t.push({type: "kern", size: c}), t.push(u[a])
                }
            } else if ("top" === e) {
                var h = n;
                for (a = 0; a < t.length; a++) h -= "kern" === t[a].type ? t[a].size : t[a].elem.height + t[a].elem.depth;
                o = h
            } else o = "bottom" === e ? -n : "shift" === e ? -t[0].elem.depth - n : "firstBaseline" === e ? -t[0].elem.depth : 0;
            var p = 0;
            for (a = 0; a < t.length; a++) "elem" === t[a].type && (p = Math.max(p, t[a].elem.maxFontSize));
            var f = y(i, p), d = [];
            for (s = o, a = 0; a < t.length; a++) if ("kern" === t[a].type) s += t[a].size; else {
                var m = t[a].elem, v = -m.depth - s;
                s += m.height + m.depth;
                var b = g([], [f, m]);
                b.height -= v, b.depth += v, b.style.top = v + "em", d.push(b)
            }
            var w = g(["baseline-fix"], [f, new r.symbolNode("​")]);
            d.push(w);
            var x = g(["vlist"], d);
            return x.height = Math.max(s, x.height), x.depth = Math.max(-o, x.depth), x
        }, b = {
            size1: .5,
            size2: .7,
            size3: .8,
            size4: .9,
            size5: 1,
            size6: 1.2,
            size7: 1.44,
            size8: 1.73,
            size9: 2.07,
            size10: 2.49
        }, w = {
            "\\qquad": {size: "2em", className: "qquad"},
            "\\quad": {size: "1em", className: "quad"},
            "\\enspace": {size: "0.5em", className: "enspace"},
            "\\;": {size: "0.277778em", className: "thickspace"},
            "\\:": {size: "0.22222em", className: "mediumspace"},
            "\\,": {size: "0.16667em", className: "thinspace"},
            "\\!": {size: "-0.16667em", className: "negativethinspace"}
        }, x = {
            mathbf: {variant: "bold", fontName: "Main-Bold"},
            mathrm: {variant: "normal", fontName: "Main-Regular"},
            mathbb: {variant: "double-struck", fontName: "AMS-Regular"},
            mathcal: {variant: "script", fontName: "Caligraphic-Regular"},
            mathfrak: {variant: "fraktur", fontName: "Fraktur-Regular"},
            mathscr: {variant: "script", fontName: "Script-Regular"},
            mathsf: {variant: "sans-serif", fontName: "SansSerif-Regular"},
            mathtt: {variant: "monospace", fontName: "Typewriter-Regular"}
        };
    t.exports = {
        fontMap: x,
        makeSymbol: l,
        mathsym: c,
        makeSpan: g,
        makeFragment: m,
        makeVList: v,
        makeOrd: f,
        sizingMultiplier: b,
        spacingFunctions: w
    }
}, function (t, e) {
    function n(e, n, r, i, o) {
        t.exports[e][o] = {font: n, group: r, replace: i}
    }

    t.exports = {math: {}, text: {}};
    var r = "math", i = "text", o = "main", s = "ams", a = "accent", u = "bin", l = "close", c = "inner", h = "mathord",
        p = "op", f = "open", d = "punct", g = "rel", m = "spacing", y = "textord";
    n(r, o, g, "≡", "\\equiv"), n(r, o, g, "≺", "\\prec"), n(r, o, g, "≻", "\\succ"), n(r, o, g, "∼", "\\sim"), n(r, o, g, "⊥", "\\perp"), n(r, o, g, "⪯", "\\preceq"), n(r, o, g, "⪰", "\\succeq"), n(r, o, g, "≃", "\\simeq"), n(r, o, g, "∣", "\\mid"), n(r, o, g, "≪", "\\ll"), n(r, o, g, "≫", "\\gg"), n(r, o, g, "≍", "\\asymp"), n(r, o, g, "∥", "\\parallel"), n(r, o, g, "⋈", "\\bowtie"), n(r, o, g, "⌣", "\\smile"), n(r, o, g, "⊑", "\\sqsubseteq"), n(r, o, g, "⊒", "\\sqsupseteq"), n(r, o, g, "≐", "\\doteq"), n(r, o, g, "⌢", "\\frown"), n(r, o, g, "∋", "\\ni"), n(r, o, g, "∝", "\\propto"), n(r, o, g, "⊢", "\\vdash"), n(r, o, g, "⊣", "\\dashv"), n(r, o, g, "∋", "\\owns"), n(r, o, d, ".", "\\ldotp"), n(r, o, d, "⋅", "\\cdotp"), n(r, o, y, "#", "\\#"), n(r, o, y, "&", "\\&"), n(r, o, y, "ℵ", "\\aleph"), n(r, o, y, "∀", "\\forall"), n(r, o, y, "ℏ", "\\hbar"), n(r, o, y, "∃", "\\exists"), n(r, o, y, "∇", "\\nabla"), n(r, o, y, "♭", "\\flat"), n(r, o, y, "ℓ", "\\ell"), n(r, o, y, "♮", "\\natural"), n(r, o, y, "♣", "\\clubsuit"), n(r, o, y, "℘", "\\wp"), n(r, o, y, "♯", "\\sharp"), n(r, o, y, "♢", "\\diamondsuit"), n(r, o, y, "ℜ", "\\Re"), n(r, o, y, "♡", "\\heartsuit"), n(r, o, y, "ℑ", "\\Im"), n(r, o, y, "♠", "\\spadesuit"), n(r, o, y, "†", "\\dag"), n(r, o, y, "‡", "\\ddag"), n(r, o, l, "⎱", "\\rmoustache"), n(r, o, f, "⎰", "\\lmoustache"), n(r, o, l, "⟯", "\\rgroup"), n(r, o, f, "⟮", "\\lgroup"), n(r, o, u, "∓", "\\mp"), n(r, o, u, "⊖", "\\ominus"), n(r, o, u, "⊎", "\\uplus"), n(r, o, u, "⊓", "\\sqcap"), n(r, o, u, "∗", "\\ast"), n(r, o, u, "⊔", "\\sqcup"), n(r, o, u, "◯", "\\bigcirc"), n(r, o, u, "∙", "\\bullet"), n(r, o, u, "‡", "\\ddagger"), n(r, o, u, "≀", "\\wr"), n(r, o, u, "⨿", "\\amalg"), n(r, o, g, "⟵", "\\longleftarrow"), n(r, o, g, "⇐", "\\Leftarrow"), n(r, o, g, "⟸", "\\Longleftarrow"), n(r, o, g, "⟶", "\\longrightarrow"), n(r, o, g, "⇒", "\\Rightarrow"), n(r, o, g, "⟹", "\\Longrightarrow"), n(r, o, g, "↔", "\\leftrightarrow"), n(r, o, g, "⟷", "\\longleftrightarrow"), n(r, o, g, "⇔", "\\Leftrightarrow"), n(r, o, g, "⟺", "\\Longleftrightarrow"), n(r, o, g, "↦", "\\mapsto"), n(r, o, g, "⟼", "\\longmapsto"), n(r, o, g, "↗", "\\nearrow"), n(r, o, g, "↩", "\\hookleftarrow"), n(r, o, g, "↪", "\\hookrightarrow"), n(r, o, g, "↘", "\\searrow"), n(r, o, g, "↼", "\\leftharpoonup"), n(r, o, g, "⇀", "\\rightharpoonup"), n(r, o, g, "↙", "\\swarrow"), n(r, o, g, "↽", "\\leftharpoondown"), n(r, o, g, "⇁", "\\rightharpoondown"), n(r, o, g, "↖", "\\nwarrow"), n(r, o, g, "⇌", "\\rightleftharpoons"), n(r, s, g, "≮", "\\nless"), n(r, s, g, "", "\\nleqslant"), n(r, s, g, "", "\\nleqq"), n(r, s, g, "⪇", "\\lneq"), n(r, s, g, "≨", "\\lneqq"), n(r, s, g, "", "\\lvertneqq"), n(r, s, g, "⋦", "\\lnsim"), n(r, s, g, "⪉", "\\lnapprox"), n(r, s, g, "⊀", "\\nprec"), n(r, s, g, "⋠", "\\npreceq"), n(r, s, g, "⋨", "\\precnsim"), n(r, s, g, "⪹", "\\precnapprox"), n(r, s, g, "≁", "\\nsim"), n(r, s, g, "", "\\nshortmid"), n(r, s, g, "∤", "\\nmid"), n(r, s, g, "⊬", "\\nvdash"), n(r, s, g, "⊭", "\\nvDash"),n(r, s, g, "⋪", "\\ntriangleleft"),n(r, s, g, "⋬", "\\ntrianglelefteq"),n(r, s, g, "⊊", "\\subsetneq"),n(r, s, g, "", "\\varsubsetneq"),n(r, s, g, "⫋", "\\subsetneqq"),n(r, s, g, "", "\\varsubsetneqq"),n(r, s, g, "≯", "\\ngtr"),n(r, s, g, "", "\\ngeqslant"),n(r, s, g, "", "\\ngeqq"),n(r, s, g, "⪈", "\\gneq"),n(r, s, g, "≩", "\\gneqq"),n(r, s, g, "", "\\gvertneqq"),n(r, s, g, "⋧", "\\gnsim"),n(r, s, g, "⪊", "\\gnapprox"),n(r, s, g, "⊁", "\\nsucc"),n(r, s, g, "⋡", "\\nsucceq"),n(r, s, g, "⋩", "\\succnsim"),n(r, s, g, "⪺", "\\succnapprox"),n(r, s, g, "≆", "\\ncong"),n(r, s, g, "", "\\nshortparallel"),n(r, s, g, "∦", "\\nparallel"),n(r, s, g, "⊯", "\\nVDash"),n(r, s, g, "⋫", "\\ntriangleright"),n(r, s, g, "⋭", "\\ntrianglerighteq"),n(r, s, g, "", "\\nsupseteqq"),n(r, s, g, "⊋", "\\supsetneq"),n(r, s, g, "", "\\varsupsetneq"),n(r, s, g, "⫌", "\\supsetneqq"),n(r, s, g, "", "\\varsupsetneqq"),n(r, s, g, "⊮", "\\nVdash"),n(r, s, g, "⪵", "\\precneqq"),n(r, s, g, "⪶", "\\succneqq"),n(r, s, g, "", "\\nsubseteqq"),n(r, s, u, "⊴", "\\unlhd"),n(r, s, u, "⊵", "\\unrhd"),n(r, s, g, "↚", "\\nleftarrow"),n(r, s, g, "↛", "\\nrightarrow"),n(r, s, g, "⇍", "\\nLeftarrow"),n(r, s, g, "⇏", "\\nRightarrow"),n(r, s, g, "↮", "\\nleftrightarrow"),n(r, s, g, "⇎", "\\nLeftrightarrow"),n(r, s, g, "△", "\\vartriangle"),n(r, s, y, "ℏ", "\\hslash"),n(r, s, y, "▽", "\\triangledown"),n(r, s, y, "◊", "\\lozenge"),n(r, s, y, "Ⓢ", "\\circledS"),n(r, s, y, "®", "\\circledR"),n(r, s, y, "∡", "\\measuredangle"),n(r, s, y, "∄", "\\nexists"),n(r, s, y, "℧", "\\mho"),n(r, s, y, "Ⅎ", "\\Finv"),n(r, s, y, "⅁", "\\Game"),n(r, s, y, "k", "\\Bbbk"),n(r, s, y, "‵", "\\backprime"),n(r, s, y, "▲", "\\blacktriangle"),n(r, s, y, "▼", "\\blacktriangledown"),n(r, s, y, "■", "\\blacksquare"),n(r, s, y, "⧫", "\\blacklozenge"),n(r, s, y, "★", "\\bigstar"),n(r, s, y, "∢", "\\sphericalangle"),n(r, s, y, "∁", "\\complement"),n(r, s, y, "ð", "\\eth"),n(r, s, y, "╱", "\\diagup"),n(r, s, y, "╲", "\\diagdown"),n(r, s, y, "□", "\\square"),n(r, s, y, "□", "\\Box"),n(r, s, y, "◊", "\\Diamond"),n(r, s, y, "¥", "\\yen"),n(r, s, y, "✓", "\\checkmark"),n(r, s, y, "ℶ", "\\beth"),n(r, s, y, "ℸ", "\\daleth"),n(r, s, y, "ℷ", "\\gimel"),n(r, s, y, "ϝ", "\\digamma"),n(r, s, y, "ϰ", "\\varkappa"),n(r, s, f, "┌", "\\ulcorner"),n(r, s, l, "┐", "\\urcorner"),n(r, s, f, "└", "\\llcorner"),n(r, s, l, "┘", "\\lrcorner"),n(r, s, g, "≦", "\\leqq"),n(r, s, g, "⩽", "\\leqslant"),n(r, s, g, "⪕", "\\eqslantless"),n(r, s, g, "≲", "\\lesssim"),n(r, s, g, "⪅", "\\lessapprox"),n(r, s, g, "≊", "\\approxeq"),n(r, s, u, "⋖", "\\lessdot"),n(r, s, g, "⋘", "\\lll"),n(r, s, g, "≶", "\\lessgtr"),n(r, s, g, "⋚", "\\lesseqgtr"),n(r, s, g, "⪋", "\\lesseqqgtr"),n(r, s, g, "≑", "\\doteqdot"),n(r, s, g, "≓", "\\risingdotseq"),n(r, s, g, "≒", "\\fallingdotseq"),n(r, s, g, "∽", "\\backsim"),n(r, s, g, "⋍", "\\backsimeq"),n(r, s, g, "⫅", "\\subseteqq"),n(r, s, g, "⋐", "\\Subset"),n(r, s, g, "⊏", "\\sqsubset"),n(r, s, g, "≼", "\\preccurlyeq"),n(r, s, g, "⋞", "\\curlyeqprec");
    n(r, s, g, "≾", "\\precsim");
    n(r, s, g, "⪷", "\\precapprox"), n(r, s, g, "⊲", "\\vartriangleleft"), n(r, s, g, "⊴", "\\trianglelefteq"), n(r, s, g, "⊨", "\\vDash"), n(r, s, g, "⊪", "\\Vvdash"), n(r, s, g, "⌣", "\\smallsmile"), n(r, s, g, "⌢", "\\smallfrown"), n(r, s, g, "≏", "\\bumpeq"), n(r, s, g, "≎", "\\Bumpeq"), n(r, s, g, "≧", "\\geqq"), n(r, s, g, "⩾", "\\geqslant"), n(r, s, g, "⪖", "\\eqslantgtr"), n(r, s, g, "≳", "\\gtrsim"), n(r, s, g, "⪆", "\\gtrapprox"), n(r, s, u, "⋗", "\\gtrdot"), n(r, s, g, "⋙", "\\ggg"), n(r, s, g, "≷", "\\gtrless"), n(r, s, g, "⋛", "\\gtreqless"), n(r, s, g, "⪌", "\\gtreqqless"), n(r, s, g, "≖", "\\eqcirc"), n(r, s, g, "≗", "\\circeq"), n(r, s, g, "≜", "\\triangleq"), n(r, s, g, "∼", "\\thicksim"), n(r, s, g, "≈", "\\thickapprox"), n(r, s, g, "⫆", "\\supseteqq"), n(r, s, g, "⋑", "\\Supset"), n(r, s, g, "⊐", "\\sqsupset"), n(r, s, g, "≽", "\\succcurlyeq"), n(r, s, g, "⋟", "\\curlyeqsucc"), n(r, s, g, "≿", "\\succsim"), n(r, s, g, "⪸", "\\succapprox"), n(r, s, g, "⊳", "\\vartriangleright"), n(r, s, g, "⊵", "\\trianglerighteq"), n(r, s, g, "⊩", "\\Vdash"), n(r, s, g, "∣", "\\shortmid"), n(r, s, g, "∥", "\\shortparallel"), n(r, s, g, "≬", "\\between"), n(r, s, g, "⋔", "\\pitchfork"), n(r, s, g, "∝", "\\varpropto"), n(r, s, g, "◀", "\\blacktriangleleft"), n(r, s, g, "∴", "\\therefore"), n(r, s, g, "∍", "\\backepsilon"), n(r, s, g, "▶", "\\blacktriangleright"), n(r, s, g, "∵", "\\because"), n(r, s, g, "⋘", "\\llless"), n(r, s, g, "⋙", "\\gggtr"), n(r, s, u, "⊲", "\\lhd"), n(r, s, u, "⊳", "\\rhd"), n(r, s, g, "≂", "\\eqsim"), n(r, o, g, "⋈", "\\Join"), n(r, s, g, "≑", "\\Doteq"), n(r, s, u, "∔", "\\dotplus"), n(r, s, u, "∖", "\\smallsetminus"), n(r, s, u, "⋒", "\\Cap"), n(r, s, u, "⋓", "\\Cup"), n(r, s, u, "⩞", "\\doublebarwedge"), n(r, s, u, "⊟", "\\boxminus"), n(r, s, u, "⊞", "\\boxplus"), n(r, s, u, "⋇", "\\divideontimes"), n(r, s, u, "⋉", "\\ltimes"), n(r, s, u, "⋊", "\\rtimes"), n(r, s, u, "⋋", "\\leftthreetimes"), n(r, s, u, "⋌", "\\rightthreetimes"), n(r, s, u, "⋏", "\\curlywedge"), n(r, s, u, "⋎", "\\curlyvee"), n(r, s, u, "⊝", "\\circleddash"), n(r, s, u, "⊛", "\\circledast"), n(r, s, u, "⋅", "\\centerdot"), n(r, s, u, "⊺", "\\intercal"), n(r, s, u, "⋒", "\\doublecap"), n(r, s, u, "⋓", "\\doublecup"), n(r, s, u, "⊠", "\\boxtimes"), n(r, s, g, "⇢", "\\dashrightarrow"), n(r, s, g, "⇠", "\\dashleftarrow"), n(r, s, g, "⇇", "\\leftleftarrows"), n(r, s, g, "⇆", "\\leftrightarrows"), n(r, s, g, "⇚", "\\Lleftarrow"), n(r, s, g, "↞", "\\twoheadleftarrow"), n(r, s, g, "↢", "\\leftarrowtail"), n(r, s, g, "↫", "\\looparrowleft"), n(r, s, g, "⇋", "\\leftrightharpoons"), n(r, s, g, "↶", "\\curvearrowleft"), n(r, s, g, "↺", "\\circlearrowleft"), n(r, s, g, "↰", "\\Lsh"), n(r, s, g, "⇈", "\\upuparrows"), n(r, s, g, "↿", "\\upharpoonleft"), n(r, s, g, "⇃", "\\downharpoonleft"), n(r, s, g, "⊸", "\\multimap"), n(r, s, g, "↭", "\\leftrightsquigarrow"), n(r, s, g, "⇉", "\\rightrightarrows"), n(r, s, g, "⇄", "\\rightleftarrows"), n(r, s, g, "↠", "\\twoheadrightarrow"), n(r, s, g, "↣", "\\rightarrowtail"), n(r, s, g, "↬", "\\looparrowright"), n(r, s, g, "↷", "\\curvearrowright"), n(r, s, g, "↻", "\\circlearrowright"), n(r, s, g, "↱", "\\Rsh"), n(r, s, g, "⇊", "\\downdownarrows"), n(r, s, g, "↾", "\\upharpoonright"), n(r, s, g, "⇂", "\\downharpoonright"), n(r, s, g, "⇝", "\\rightsquigarrow"),n(r, s, g, "⇝", "\\leadsto"),n(r, s, g, "⇛", "\\Rrightarrow"),n(r, s, g, "↾", "\\restriction"),n(r, o, y, "‘", "`"),n(r, o, y, "$", "\\$"),n(r, o, y, "%", "\\%"),n(r, o, y, "_", "\\_"),n(r, o, y, "∠", "\\angle"),n(r, o, y, "∞", "\\infty"),n(r, o, y, "′", "\\prime"),n(r, o, y, "△", "\\triangle"),n(r, o, y, "Γ", "\\Gamma"),n(r, o, y, "Δ", "\\Delta"),n(r, o, y, "Θ", "\\Theta"),n(r, o, y, "Λ", "\\Lambda"),n(r, o, y, "Ξ", "\\Xi"),n(r, o, y, "Π", "\\Pi"),n(r, o, y, "Σ", "\\Sigma"),n(r, o, y, "Υ", "\\Upsilon"),n(r, o, y, "Φ", "\\Phi"),n(r, o, y, "Ψ", "\\Psi"),n(r, o, y, "Ω", "\\Omega"),n(r, o, y, "¬", "\\neg"),n(r, o, y, "¬", "\\lnot"),n(r, o, y, "⊤", "\\top"),n(r, o, y, "⊥", "\\bot"),n(r, o, y, "∅", "\\emptyset"),n(r, s, y, "∅", "\\varnothing"),n(r, o, h, "α", "\\alpha"),n(r, o, h, "β", "\\beta"),n(r, o, h, "γ", "\\gamma"),n(r, o, h, "δ", "\\delta"),n(r, o, h, "ϵ", "\\epsilon"),n(r, o, h, "ζ", "\\zeta"),n(r, o, h, "η", "\\eta"),n(r, o, h, "θ", "\\theta"),n(r, o, h, "ι", "\\iota"),n(r, o, h, "κ", "\\kappa"),n(r, o, h, "λ", "\\lambda"),n(r, o, h, "μ", "\\mu"),n(r, o, h, "ν", "\\nu"),n(r, o, h, "ξ", "\\xi"),n(r, o, h, "o", "\\omicron"),n(r, o, h, "π", "\\pi"),n(r, o, h, "ρ", "\\rho"),n(r, o, h, "σ", "\\sigma"),n(r, o, h, "τ", "\\tau"),n(r, o, h, "υ", "\\upsilon"),n(r, o, h, "ϕ", "\\phi"),n(r, o, h, "χ", "\\chi"),n(r, o, h, "ψ", "\\psi"),n(r, o, h, "ω", "\\omega"),n(r, o, h, "ε", "\\varepsilon"),n(r, o, h, "ϑ", "\\vartheta"),n(r, o, h, "ϖ", "\\varpi"),n(r, o, h, "ϱ", "\\varrho"),n(r, o, h, "ς", "\\varsigma"),n(r, o, h, "φ", "\\varphi"),n(r, o, u, "∗", "*"),n(r, o, u, "+", "+"),n(r, o, u, "−", "-"),n(r, o, u, "⋅", "\\cdot"),n(r, o, u, "∘", "\\circ"),n(r, o, u, "÷", "\\div"),n(r, o, u, "±", "\\pm"),n(r, o, u, "×", "\\times"),n(r, o, u, "∩", "\\cap"),n(r, o, u, "∪", "\\cup"),n(r, o, u, "∖", "\\setminus"),n(r, o, u, "∧", "\\land"),n(r, o, u, "∨", "\\lor"),n(r, o, u, "∧", "\\wedge"),n(r, o, u, "∨", "\\vee"),n(r, o, y, "√", "\\surd"),n(r, o, f, "(", "("),n(r, o, f, "[", "["),n(r, o, f, "⟨", "\\langle"),n(r, o, f, "∣", "\\lvert"),n(r, o, f, "∥", "\\lVert"),n(r, o, l, ")", ")"),n(r, o, l, "]", "]"),n(r, o, l, "?", "?"),n(r, o, l, "!", "!"),n(r, o, l, "⟩", "\\rangle"),n(r, o, l, "∣", "\\rvert"),n(r, o, l, "∥", "\\rVert"),n(r, o, g, "=", "="),n(r, o, g, "<", "<"),n(r, o, g, ">", ">"),n(r, o, g, ":", ":"),n(r, o, g, "≈", "\\approx"),n(r, o, g, "≅", "\\cong"),n(r, o, g, "≥", "\\ge"),n(r, o, g, "≥", "\\geq"),n(r, o, g, "←", "\\gets"),n(r, o, g, ">", "\\gt"),n(r, o, g, "∈", "\\in"),n(r, o, g, "∉", "\\notin"),n(r, o, g, "⊂", "\\subset");
    n(r, o, g, "⊃", "\\supset");
    n(r, o, g, "⊆", "\\subseteq"), n(r, o, g, "⊇", "\\supseteq"), n(r, s, g, "⊈", "\\nsubseteq"), n(r, s, g, "⊉", "\\nsupseteq"), n(r, o, g, "⊨", "\\models"), n(r, o, g, "←", "\\leftarrow"), n(r, o, g, "≤", "\\le"), n(r, o, g, "≤", "\\leq"), n(r, o, g, "<", "\\lt"), n(r, o, g, "≠", "\\ne"), n(r, o, g, "≠", "\\neq"), n(r, o, g, "→", "\\rightarrow"), n(r, o, g, "→", "\\to"), n(r, s, g, "≱", "\\ngeq"), n(r, s, g, "≰", "\\nleq"), n(r, o, m, null, "\\!"), n(r, o, m, " ", "\\ "), n(r, o, m, " ", "~"), n(r, o, m, null, "\\,"), n(r, o, m, null, "\\:"), n(r, o, m, null, "\\;"), n(r, o, m, null, "\\enspace"), n(r, o, m, null, "\\qquad"), n(r, o, m, null, "\\quad"), n(r, o, m, " ", "\\space"), n(r, o, d, ",", ","), n(r, o, d, ";", ";"), n(r, o, d, ":", "\\colon"), n(r, s, u, "⊼", "\\barwedge"), n(r, s, u, "⊻", "\\veebar"), n(r, o, u, "⊙", "\\odot"), n(r, o, u, "⊕", "\\oplus"), n(r, o, u, "⊗", "\\otimes"), n(r, o, y, "∂", "\\partial"), n(r, o, u, "⊘", "\\oslash"), n(r, s, u, "⊚", "\\circledcirc"), n(r, s, u, "⊡", "\\boxdot"), n(r, o, u, "△", "\\bigtriangleup"), n(r, o, u, "▽", "\\bigtriangledown"), n(r, o, u, "†", "\\dagger"), n(r, o, u, "⋄", "\\diamond"), n(r, o, u, "⋆", "\\star"), n(r, o, u, "◃", "\\triangleleft"), n(r, o, u, "▹", "\\triangleright"), n(r, o, f, "{", "\\{"), n(r, o, l, "}", "\\}"), n(r, o, f, "{", "\\lbrace"), n(r, o, l, "}", "\\rbrace"), n(r, o, f, "[", "\\lbrack"), n(r, o, l, "]", "\\rbrack"), n(r, o, f, "⌊", "\\lfloor"), n(r, o, l, "⌋", "\\rfloor"), n(r, o, f, "⌈", "\\lceil"), n(r, o, l, "⌉", "\\rceil"), n(r, o, y, "\\", "\\backslash"), n(r, o, y, "∣", "|"), n(r, o, y, "∣", "\\vert"), n(r, o, y, "∥", "\\|"), n(r, o, y, "∥", "\\Vert"), n(r, o, g, "↑", "\\uparrow"), n(r, o, g, "⇑", "\\Uparrow"), n(r, o, g, "↓", "\\downarrow"), n(r, o, g, "⇓", "\\Downarrow"), n(r, o, g, "↕", "\\updownarrow"), n(r, o, g, "⇕", "\\Updownarrow"), n(r, r, p, "∐", "\\coprod"), n(r, r, p, "⋁", "\\bigvee"), n(r, r, p, "⋀", "\\bigwedge"), n(r, r, p, "⨄", "\\biguplus"), n(r, r, p, "⋂", "\\bigcap"), n(r, r, p, "⋃", "\\bigcup"), n(r, r, p, "∫", "\\int"), n(r, r, p, "∫", "\\intop"), n(r, r, p, "∬", "\\iint"), n(r, r, p, "∭", "\\iiint"), n(r, r, p, "∏", "\\prod"), n(r, r, p, "∑", "\\sum"), n(r, r, p, "⨂", "\\bigotimes"), n(r, r, p, "⨁", "\\bigoplus"), n(r, r, p, "⨀", "\\bigodot"), n(r, r, p, "∮", "\\oint"), n(r, r, p, "⨆", "\\bigsqcup"), n(r, r, p, "∫", "\\smallint"), n(r, o, c, "…", "\\ldots"), n(r, o, c, "⋯", "\\cdots"), n(r, o, c, "⋱", "\\ddots"), n(r, o, y, "⋮", "\\vdots"), n(r, o, a, "´", "\\acute"), n(r, o, a, "`", "\\grave"), n(r, o, a, "¨", "\\ddot"), n(r, o, a, "~", "\\tilde"), n(r, o, a, "¯", "\\bar"), n(r, o, a, "˘", "\\breve"), n(r, o, a, "ˇ", "\\check"), n(r, o, a, "^", "\\hat"), n(r, o, a, "⃗", "\\vec"), n(r, o, a, "˙", "\\dot"), n(r, o, h, "ı", "\\imath"), n(r, o, h, "ȷ", "\\jmath"), n(i, o, m, " ", "\\ "), n(i, o, m, " ", " "),n(i, o, m, " ", "~");
    var v, b, w = '0123456789/@."';
    for (v = 0; v < w.length; v++) b = w.charAt(v), n(r, o, y, b, b);
    var x = "0123456789`!@*()-=+[]'\";:?/.,";
    for (v = 0; v < x.length; v++) b = x.charAt(v), n(i, o, y, b, b);
    var k = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (v = 0; v < k.length; v++) b = k.charAt(v), n(r, o, h, b, b), n(i, o, y, b, b)
}, function (t, e, n) {
    function r() {
        i.call(this)
    }

    t.exports = r;
    var i = n(12).EventEmitter, o = n(1);
    o(r, i), r.Readable = n(138), r.Writable = n(140), r.Duplex = n(135), r.Transform = n(139), r.PassThrough = n(137), r.Stream = r, r.prototype.pipe = function (t, e) {
        function n(e) {
            t.writable && !1 === t.write(e) && l.pause && l.pause()
        }

        function r() {
            l.readable && l.resume && l.resume()
        }

        function o() {
            c || (c = !0, t.end())
        }

        function s() {
            c || (c = !0, "function" == typeof t.destroy && t.destroy())
        }

        function a(t) {
            if (u(), 0 === i.listenerCount(this, "error")) throw t
        }

        function u() {
            l.removeListener("data", n), t.removeListener("drain", r), l.removeListener("end", o), l.removeListener("close", s), l.removeListener("error", a), t.removeListener("error", a), l.removeListener("end", u), l.removeListener("close", u), t.removeListener("close", u)
        }

        var l = this;
        l.on("data", n), t.on("drain", r), t._isStdio || e && e.end === !1 || (l.on("end", o), l.on("close", s));
        var c = !1;
        return l.on("error", a), t.on("error", a), l.on("end", u), l.on("close", u), t.on("close", u), t.emit("pipe", l), t
    }
}, function (t, e, n) {
    (function (t) {
        "use strict";
        var r = n(3), i = r.Buffer, o = r.SlowBuffer, s = r.kMaxLength || 2147483647;
        e.alloc = function (t, e, n) {
            if ("function" == typeof i.alloc) return i.alloc(t, e, n);
            if ("number" == typeof n) throw new TypeError("encoding must not be number");
            if ("number" != typeof t) throw new TypeError("size must be a number");
            if (t > s) throw new RangeError("size is too large");
            var r = n, o = e;
            void 0 === o && (r = void 0, o = 0);
            var a = new i(t);
            if ("string" == typeof o) for (var u = new i(o, r), l = u.length, c = -1; ++c < t;) a[c] = u[c % l]; else a.fill(o);
            return a
        }, e.allocUnsafe = function (t) {
            if ("function" == typeof i.allocUnsafe) return i.allocUnsafe(t);
            if ("number" != typeof t) throw new TypeError("size must be a number");
            if (t > s) throw new RangeError("size is too large");
            return new i(t)
        }, e.from = function (e, n, r) {
            if ("function" == typeof i.from && (!t.Uint8Array || Uint8Array.from !== i.from)) return i.from(e, n, r);
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            if ("string" == typeof e) return new i(e, n);
            if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) {
                var o = n;
                if (1 === arguments.length) return new i(e);
                "undefined" == typeof o && (o = 0);
                var s = r;
                if ("undefined" == typeof s && (s = e.byteLength - o), o >= e.byteLength) throw new RangeError("'offset' is out of bounds");
                if (s > e.byteLength - o) throw new RangeError("'length' is out of bounds");
                return new i(e.slice(o, o + s))
            }
            if (i.isBuffer(e)) {
                var a = new i(e.length);
                return e.copy(a, 0, 0, e.length), a
            }
            if (e) {
                if (Array.isArray(e) || "undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return new i(e);
                if ("Buffer" === e.type && Array.isArray(e.data)) return new i(e.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }, e.allocUnsafeSlow = function (t) {
            if ("function" == typeof i.allocUnsafeSlow) return i.allocUnsafeSlow(t);
            if ("number" != typeof t) throw new TypeError("size must be a number");
            if (t >= s) throw new RangeError("size is too large");
            return new o(t)
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    function r(t) {
        this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress
    }

    var i = n(7), o = n(9);
    t.exports = r, o(r.prototype), r.prototype.onError = function (t, e) {
        var n = new Error(t);
        return n.type = "TransportError", n.description = e, this.emit("error", n), this
    }, r.prototype.open = function () {
        return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
    }, r.prototype.close = function () {
        return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
    }, r.prototype.send = function (t) {
        if ("open" !== this.readyState) throw new Error("Transport not open");
        this.write(t)
    }, r.prototype.onOpen = function () {
        this.readyState = "open", this.writable = !0, this.emit("open")
    }, r.prototype.onData = function (t) {
        var e = i.decodePacket(t, this.socket.binaryType);
        this.onPacket(e)
    }, r.prototype.onPacket = function (t) {
        this.emit("packet", t)
    }, r.prototype.onClose = function () {
        this.readyState = "closed", this.emit("close")
    }
}, function (t, e, n) {
    (function (e) {
        var r = n(101);
        t.exports = function (t) {
            var n = t.xdomain, i = t.xscheme, o = t.enablesXDR;
            try {
                if ("undefined" != typeof XMLHttpRequest && (!n || r)) return new XMLHttpRequest
            } catch (t) {
            }
            try {
                if ("undefined" != typeof XDomainRequest && !i && o) return new XDomainRequest
            } catch (t) {
            }
            if (!n) try {
                return new (e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
            } catch (t) {
            }
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    var n = {}.toString;
    t.exports = Array.isArray || function (t) {
        return "[object Array]" == n.call(t)
    }
}, function (t, e) {
    t.exports = {
        Aacute: "Á",
        aacute: "á",
        Abreve: "Ă",
        abreve: "ă",
        ac: "∾",
        acd: "∿",
        acE: "∾̳",
        Acirc: "Â",
        acirc: "â",
        acute: "´",
        Acy: "А",
        acy: "а",
        AElig: "Æ",
        aelig: "æ",
        af: "⁡",
        Afr: "𝔄",
        afr: "𝔞",
        Agrave: "À",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        Alpha: "Α",
        alpha: "α",
        Amacr: "Ā",
        amacr: "ā",
        amalg: "⨿",
        amp: "&",
        AMP: "&",
        andand: "⩕",
        And: "⩓",
        and: "∧",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angmsd: "∡",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        Aogon: "Ą",
        aogon: "ą",
        Aopf: "𝔸",
        aopf: "𝕒",
        apacir: "⩯",
        ap: "≈",
        apE: "⩰",
        ape: "≊",
        apid: "≋",
        apos: "'",
        ApplyFunction: "⁡",
        approx: "≈",
        approxeq: "≊",
        Aring: "Å",
        aring: "å",
        Ascr: "𝒜",
        ascr: "𝒶",
        Assign: "≔",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        Atilde: "Ã",
        atilde: "ã",
        Auml: "Ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        Backslash: "∖",
        Barv: "⫧",
        barvee: "⊽",
        barwed: "⌅",
        Barwed: "⌆",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        Bcy: "Б",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        because: "∵",
        Because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        Bernoullis: "ℬ",
        Beta: "Β",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        Bfr: "𝔅",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bNot: "⫭",
        bnot: "⌐",
        Bopf: "𝔹",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxbox: "⧉",
        boxdl: "┐",
        boxdL: "╕",
        boxDl: "╖",
        boxDL: "╗",
        boxdr: "┌",
        boxdR: "╒",
        boxDr: "╓",
        boxDR: "╔",
        boxh: "─",
        boxH: "═",
        boxhd: "┬",
        boxHd: "╤",
        boxhD: "╥",
        boxHD: "╦",
        boxhu: "┴",
        boxHu: "╧",
        boxhU: "╨",
        boxHU: "╩",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxul: "┘",
        boxuL: "╛",
        boxUl: "╜",
        boxUL: "╝",
        boxur: "└",
        boxuR: "╘",
        boxUr: "╙",
        boxUR: "╚",
        boxv: "│",
        boxV: "║",
        boxvh: "┼",
        boxvH: "╪",
        boxVh: "╫",
        boxVH: "╬",
        boxvl: "┤",
        boxvL: "╡",
        boxVl: "╢",
        boxVL: "╣",
        boxvr: "├",
        boxvR: "╞",
        boxVr: "╟",
        boxVR: "╠",
        bprime: "‵",
        breve: "˘",
        Breve: "˘",
        brvbar: "¦",
        bscr: "𝒷",
        Bscr: "ℬ",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsolb: "⧅",
        bsol: "\\",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        Bumpeq: "≎",
        bumpeq: "≏",
        Cacute: "Ć",
        cacute: "ć",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        cap: "∩",
        Cap: "⋒",
        capcup: "⩇",
        capdot: "⩀",
        CapitalDifferentialD: "ⅅ",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        Cayleys: "ℭ",
        ccaps: "⩍",
        Ccaron: "Č",
        ccaron: "č",
        Ccedil: "Ç",
        ccedil: "ç",
        Ccirc: "Ĉ",
        ccirc: "ĉ",
        Cconint: "∰",
        ccups: "⩌",
        ccupssm: "⩐",
        Cdot: "Ċ",
        cdot: "ċ",
        cedil: "¸",
        Cedilla: "¸",
        cemptyv: "⦲",
        cent: "¢",
        centerdot: "·",
        CenterDot: "·",
        cfr: "𝔠",
        Cfr: "ℭ",
        CHcy: "Ч",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        Chi: "Χ",
        chi: "χ",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        CircleDot: "⊙",
        circledR: "®",
        circledS: "Ⓢ",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        cir: "○",
        cirE: "⧃",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        clubs: "♣",
        clubsuit: "♣",
        colon: ":",
        Colon: "∷",
        Colone: "⩴",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        Congruent: "≡",
        conint: "∮",
        Conint: "∯",
        ContourIntegral: "∮",
        copf: "𝕔",
        Copf: "ℂ",
        coprod: "∐",
        Coproduct: "∐",
        copy: "©",
        COPY: "©",
        copysr: "℗",
        CounterClockwiseContourIntegral: "∳",
        crarr: "↵",
        cross: "✗",
        Cross: "⨯",
        Cscr: "𝒞",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        cupbrcap: "⩈",
        cupcap: "⩆",
        CupCap: "≍",
        cup: "∪",
        Cup: "⋓",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        dagger: "†",
        Dagger: "‡",
        daleth: "ℸ",
        darr: "↓",
        Darr: "↡",
        dArr: "⇓",
        dash: "‐",
        Dashv: "⫤",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        Dcaron: "Ď",
        dcaron: "ď",
        Dcy: "Д",
        dcy: "д",
        ddagger: "‡",
        ddarr: "⇊",
        DD: "ⅅ",
        dd: "ⅆ",
        DDotrahd: "⤑",
        ddotseq: "⩷",
        deg: "°",
        Del: "∇",
        Delta: "Δ",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        Dfr: "𝔇",
        dfr: "𝔡",
        dHar: "⥥",
        dharl: "⇃",
        dharr: "⇂",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        diam: "⋄",
        diamond: "⋄",
        Diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        DifferentialD: "ⅆ",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        DJcy: "Ђ",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        Dopf: "𝔻",
        dopf: "𝕕",
        Dot: "¨",
        dot: "˙",
        DotDot: "⃜",
        doteq: "≐",
        doteqdot: "≑",
        DotEqual: "≐",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrowBar: "⤓",
        downarrow: "↓",
        DownArrow: "↓",
        Downarrow: "⇓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVectorBar: "⥖",
        DownLeftVector: "↽",
        DownRightTeeVector: "⥟",
        DownRightVectorBar: "⥗",
        DownRightVector: "⇁",
        DownTeeArrow: "↧",
        DownTee: "⊤",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        Dscr: "𝒟",
        dscr: "𝒹",
        DScy: "Ѕ",
        dscy: "ѕ",
        dsol: "⧶",
        Dstrok: "Đ",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        DZcy: "Џ",
        dzcy: "џ",
        dzigrarr: "⟿",
        Eacute: "É",
        eacute: "é",
        easter: "⩮",
        Ecaron: "Ě",
        ecaron: "ě",
        Ecirc: "Ê",
        ecirc: "ê",
        ecir: "≖",
        ecolon: "≕",
        Ecy: "Э",
        ecy: "э",
        eDDot: "⩷",
        Edot: "Ė",
        edot: "ė",
        eDot: "≑",
        ee: "ⅇ",
        efDot: "≒",
        Efr: "𝔈",
        efr: "𝔢",
        eg: "⪚",
        Egrave: "È",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        Element: "∈",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        Emacr: "Ē",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        EmptySmallSquare: "◻",
        emptyv: "∅",
        EmptyVerySmallSquare: "▫",
        emsp13: " ",
        emsp14: " ",
        emsp: " ",
        ENG: "Ŋ",
        eng: "ŋ",
        ensp: " ",
        Eogon: "Ę",
        eogon: "ę",
        Eopf: "𝔼",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        Epsilon: "Ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        Equal: "⩵",
        equals: "=",
        EqualTilde: "≂",
        equest: "≟",
        Equilibrium: "⇌",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erarr: "⥱",
        erDot: "≓",
        escr: "ℯ",
        Escr: "ℰ",
        esdot: "≐",
        Esim: "⩳",
        esim: "≂",
        Eta: "Η",
        eta: "η",
        ETH: "Ð",
        eth: "ð",
        Euml: "Ë",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        Exists: "∃",
        expectation: "ℰ",
        exponentiale: "ⅇ",
        ExponentialE: "ⅇ",
        fallingdotseq: "≒",
        Fcy: "Ф",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        Ffr: "𝔉",
        ffr: "𝔣",
        filig: "ﬁ",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        Fopf: "𝔽",
        fopf: "𝕗",
        forall: "∀",
        ForAll: "∀",
        fork: "⋔",
        forkv: "⫙",
        Fouriertrf: "ℱ",
        fpartint: "⨍",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        fscr: "𝒻",
        Fscr: "ℱ",
        gacute: "ǵ",
        Gamma: "Γ",
        gamma: "γ",
        Gammad: "Ϝ",
        gammad: "ϝ",
        gap: "⪆",
        Gbreve: "Ğ",
        gbreve: "ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        gcirc: "ĝ",
        Gcy: "Г",
        gcy: "г",
        Gdot: "Ġ",
        gdot: "ġ",
        ge: "≥",
        gE: "≧",
        gEl: "⪌",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        gescc: "⪩",
        ges: "⩾",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        Gfr: "𝔊",
        gfr: "𝔤",
        gg: "≫",
        Gg: "⋙",
        ggg: "⋙",
        gimel: "ℷ",
        GJcy: "Ѓ",
        gjcy: "ѓ",
        gla: "⪥",
        gl: "≷",
        glE: "⪒",
        glj: "⪤",
        gnap: "⪊",
        gnapprox: "⪊",
        gne: "⪈",
        gnE: "≩",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        Gopf: "𝔾",
        gopf: "𝕘",
        grave: "`",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        gtcc: "⪧",
        gtcir: "⩺",
        gt: ">",
        GT: ">",
        Gt: "≫",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        Hacek: "ˇ",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        HARDcy: "Ъ",
        hardcy: "ъ",
        harrcir: "⥈",
        harr: "↔",
        hArr: "⇔",
        harrw: "↭",
        Hat: "^",
        hbar: "ℏ",
        Hcirc: "Ĥ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        hfr: "𝔥",
        Hfr: "ℌ",
        HilbertSpace: "ℋ",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        hopf: "𝕙",
        Hopf: "ℍ",
        horbar: "―",
        HorizontalLine: "─",
        hscr: "𝒽",
        Hscr: "ℋ",
        hslash: "ℏ",
        Hstrok: "Ħ",
        hstrok: "ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        hybull: "⁃",
        hyphen: "‐",
        Iacute: "Í",
        iacute: "í",
        ic: "⁣",
        Icirc: "Î",
        icirc: "î",
        Icy: "И",
        icy: "и",
        Idot: "İ",
        IEcy: "Е",
        iecy: "е",
        iexcl: "¡",
        iff: "⇔",
        ifr: "𝔦",
        Ifr: "ℑ",
        Igrave: "Ì",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        IJlig: "Ĳ",
        ijlig: "ĳ",
        Imacr: "Ī",
        imacr: "ī",
        image: "ℑ",
        ImaginaryI: "ⅈ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        Im: "ℑ",
        imof: "⊷",
        imped: "Ƶ",
        Implies: "⇒",
        incare: "℅",
        in: "∈",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        intcal: "⊺",
        int: "∫",
        Int: "∬",
        integers: "ℤ",
        Integral: "∫",
        intercal: "⊺",
        Intersection: "⋂",
        intlarhk: "⨗",
        intprod: "⨼",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        IOcy: "Ё",
        iocy: "ё",
        Iogon: "Į",
        iogon: "į",
        Iopf: "𝕀",
        iopf: "𝕚",
        Iota: "Ι",
        iota: "ι",
        iprod: "⨼",
        iquest: "¿",
        iscr: "𝒾",
        Iscr: "ℐ",
        isin: "∈",
        isindot: "⋵",
        isinE: "⋹",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        Itilde: "Ĩ",
        itilde: "ĩ",
        Iukcy: "І",
        iukcy: "і",
        Iuml: "Ï",
        iuml: "ï",
        Jcirc: "Ĵ",
        jcirc: "ĵ",
        Jcy: "Й",
        jcy: "й",
        Jfr: "𝔍",
        jfr: "𝔧",
        jmath: "ȷ",
        Jopf: "𝕁",
        jopf: "𝕛",
        Jscr: "𝒥",
        jscr: "𝒿",
        Jsercy: "Ј",
        jsercy: "ј",
        Jukcy: "Є",
        jukcy: "є",
        Kappa: "Κ",
        kappa: "κ",
        kappav: "ϰ",
        Kcedil: "Ķ",
        kcedil: "ķ",
        Kcy: "К",
        kcy: "к",
        Kfr: "𝔎",
        kfr: "𝔨",
        kgreen: "ĸ",
        KHcy: "Х",
        khcy: "х",
        KJcy: "Ќ",
        kjcy: "ќ",
        Kopf: "𝕂",
        kopf: "𝕜",
        Kscr: "𝒦",
        kscr: "𝓀",
        lAarr: "⇚",
        Lacute: "Ĺ",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        Lambda: "Λ",
        lambda: "λ",
        lang: "⟨",
        Lang: "⟪",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        Laplacetrf: "ℒ",
        laquo: "«",
        larrb: "⇤",
        larrbfs: "⤟",
        larr: "←",
        Larr: "↞",
        lArr: "⇐",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        latail: "⤙",
        lAtail: "⤛",
        lat: "⪫",
        late: "⪭",
        lates: "⪭︀",
        lbarr: "⤌",
        lBarr: "⤎",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        Lcaron: "Ľ",
        lcaron: "ľ",
        Lcedil: "Ļ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        Lcy: "Л",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        le: "≤",
        lE: "≦",
        LeftAngleBracket: "⟨",
        LeftArrowBar: "⇤",
        leftarrow: "←",
        LeftArrow: "←",
        Leftarrow: "⇐",
        LeftArrowRightArrow: "⇆",
        leftarrowtail: "↢",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVectorBar: "⥙",
        LeftDownVector: "⇃",
        LeftFloor: "⌊",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        leftrightarrow: "↔",
        LeftRightArrow: "↔",
        Leftrightarrow: "⇔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        LeftRightVector: "⥎",
        LeftTeeArrow: "↤",
        LeftTee: "⊣",
        LeftTeeVector: "⥚",
        leftthreetimes: "⋋",
        LeftTriangleBar: "⧏",
        LeftTriangle: "⊲",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVectorBar: "⥘",
        LeftUpVector: "↿",
        LeftVectorBar: "⥒",
        LeftVector: "↼",
        lEg: "⪋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        lescc: "⪨",
        les: "⩽",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        lessgtr: "≶",
        LessLess: "⪡",
        lesssim: "≲",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        Lfr: "𝔏",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lHar: "⥢",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        LJcy: "Љ",
        ljcy: "љ",
        llarr: "⇇",
        ll: "≪",
        Ll: "⋘",
        llcorner: "⌞",
        Lleftarrow: "⇚",
        llhard: "⥫",
        lltri: "◺",
        Lmidot: "Ŀ",
        lmidot: "ŀ",
        lmoustache: "⎰",
        lmoust: "⎰",
        lnap: "⪉",
        lnapprox: "⪉",
        lne: "⪇",
        lnE: "≨",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        longleftarrow: "⟵",
        LongLeftArrow: "⟵",
        Longleftarrow: "⟸",
        longleftrightarrow: "⟷",
        LongLeftRightArrow: "⟷",
        Longleftrightarrow: "⟺",
        longmapsto: "⟼",
        longrightarrow: "⟶",
        LongRightArrow: "⟶",
        Longrightarrow: "⟹",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        Lopf: "𝕃",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        lscr: "𝓁",
        Lscr: "ℒ",
        lsh: "↰",
        Lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        Lstrok: "Ł",
        lstrok: "ł",
        ltcc: "⪦",
        ltcir: "⩹",
        lt: "<",
        LT: "<",
        Lt: "≪",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        ltrPar: "⦖",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        Map: "⤅",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        Mcy: "М",
        mcy: "м",
        mdash: "—",
        mDDot: "∺",
        measuredangle: "∡",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        mfr: "𝔪",
        mho: "℧",
        micro: "µ",
        midast: "*",
        midcir: "⫰",
        mid: "∣",
        middot: "·",
        minusb: "⊟",
        minus: "−",
        minusd: "∸",
        minusdu: "⨪",
        MinusPlus: "∓",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        Mopf: "𝕄",
        mopf: "𝕞",
        mp: "∓",
        mscr: "𝓂",
        Mscr: "ℳ",
        mstpos: "∾",
        Mu: "Μ",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nabla: "∇",
        Nacute: "Ń",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natural: "♮",
        naturals: "ℕ",
        natur: "♮",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        Ncaron: "Ň",
        ncaron: "ň",
        Ncedil: "Ņ",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        Ncy: "Н",
        ncy: "н",
        ndash: "–",
        nearhk: "⤤",
        nearr: "↗",
        neArr: "⇗",
        nearrow: "↗",
        ne: "≠",
        nedot: "≐̸",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: "\n",
        nexist: "∄",
        nexists: "∄",
        Nfr: "𝔑",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        nGg: "⋙̸",
        ngsim: "≵",
        nGt: "≫⃒",
        ngt: "≯",
        ngtr: "≯",
        nGtv: "≫̸",
        nharr: "↮",
        nhArr: "⇎",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        NJcy: "Њ",
        njcy: "њ",
        nlarr: "↚",
        nlArr: "⇍",
        nldr: "‥",
        nlE: "≦̸",
        nle: "≰",
        nleftarrow: "↚",
        nLeftarrow: "⇍",
        nleftrightarrow: "↮",
        nLeftrightarrow: "⇎",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nLl: "⋘̸",
        nlsim: "≴",
        nLt: "≪⃒",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nLtv: "≪̸",
        nmid: "∤",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        nopf: "𝕟",
        Nopf: "ℕ",
        Not: "⫬",
        not: "¬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        notin: "∉",
        notindot: "⋵̸",
        notinE: "⋹̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangle: "⋪",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangle: "⋫",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        nparallel: "∦",
        npar: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        nprec: "⊀",
        npreceq: "⪯̸",
        npre: "⪯̸",
        nrarrc: "⤳̸",
        nrarr: "↛",
        nrArr: "⇏",
        nrarrw: "↝̸",
        nrightarrow: "↛",
        nRightarrow: "⇏",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        Nscr: "𝒩",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        Ntilde: "Ñ",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        Nu: "Ν",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvap: "≍⃒",
        nvdash: "⊬",
        nvDash: "⊭",
        nVdash: "⊮",
        nVDash: "⊯",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvHarr: "⤄",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwarhk: "⤣",
        nwarr: "↖",
        nwArr: "⇖",
        nwarrow: "↖",
        nwnear: "⤧",
        Oacute: "Ó",
        oacute: "ó",
        oast: "⊛",
        Ocirc: "Ô",
        ocirc: "ô",
        ocir: "⊚",
        Ocy: "О",
        ocy: "о",
        odash: "⊝",
        Odblac: "Ő",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        OElig: "Œ",
        oelig: "œ",
        ofcir: "⦿",
        Ofr: "𝔒",
        ofr: "𝔬",
        ogon: "˛",
        Ograve: "Ò",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        Omacr: "Ō",
        omacr: "ō",
        Omega: "Ω",
        omega: "ω",
        Omicron: "Ο",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        Oopf: "𝕆",
        oopf: "𝕠",
        opar: "⦷",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        operp: "⦹",
        oplus: "⊕",
        orarr: "↻",
        Or: "⩔",
        or: "∨",
        ord: "⩝",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oS: "Ⓢ",
        Oscr: "𝒪",
        oscr: "ℴ",
        Oslash: "Ø",
        oslash: "ø",
        osol: "⊘",
        Otilde: "Õ",
        otilde: "õ",
        otimesas: "⨶",
        Otimes: "⨷",
        otimes: "⊗",
        Ouml: "Ö",
        ouml: "ö",
        ovbar: "⌽",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        para: "¶",
        parallel: "∥",
        par: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        PartialD: "∂",
        Pcy: "П",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        Pfr: "𝔓",
        pfr: "𝔭",
        Phi: "Φ",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        Pi: "Π",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plus: "+",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        PlusMinus: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        Poincareplane: "ℌ",
        pointint: "⨕",
        popf: "𝕡",
        Popf: "ℙ",
        pound: "£",
        prap: "⪷",
        Pr: "⪻",
        pr: "≺",
        prcue: "≼",
        precapprox: "⪷",
        prec: "≺",
        preccurlyeq: "≼",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        pre: "⪯",
        prE: "⪳",
        precsim: "≾",
        prime: "′",
        Prime: "″",
        primes: "ℙ",
        prnap: "⪹",
        prnE: "⪵",
        prnsim: "⋨",
        prod: "∏",
        Product: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        Proportional: "∝",
        Proportion: "∷",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        Pscr: "𝒫",
        pscr: "𝓅",
        Psi: "Ψ",
        psi: "ψ",
        puncsp: " ",
        Qfr: "𝔔",
        qfr: "𝔮",
        qint: "⨌",
        qopf: "𝕢",
        Qopf: "ℚ",
        qprime: "⁗",
        Qscr: "𝒬",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        quot: '"',
        QUOT: '"',
        rAarr: "⇛",
        race: "∽̱",
        Racute: "Ŕ",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        rang: "⟩",
        Rang: "⟫",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raquo: "»",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarr: "→",
        Rarr: "↠",
        rArr: "⇒",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        Rarrtl: "⤖",
        rarrtl: "↣",
        rarrw: "↝",
        ratail: "⤚",
        rAtail: "⤜",
        ratio: "∶",
        rationals: "ℚ",
        rbarr: "⤍",
        rBarr: "⤏",
        RBarr: "⤐",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        Rcaron: "Ř",
        rcaron: "ř",
        Rcedil: "Ŗ",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        Rcy: "Р",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        Re: "ℜ",
        rect: "▭",
        reg: "®",
        REG: "®",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        rfisht: "⥽",
        rfloor: "⌋",
        rfr: "𝔯",
        Rfr: "ℜ",
        rHar: "⥤",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        Rho: "Ρ",
        rho: "ρ",
        rhov: "ϱ",
        RightAngleBracket: "⟩",
        RightArrowBar: "⇥",
        rightarrow: "→",
        RightArrow: "→",
        Rightarrow: "⇒",
        RightArrowLeftArrow: "⇄",
        rightarrowtail: "↣",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVectorBar: "⥕",
        RightDownVector: "⇂",
        RightFloor: "⌋",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        RightTeeArrow: "↦",
        RightTee: "⊢",
        RightTeeVector: "⥛",
        rightthreetimes: "⋌",
        RightTriangleBar: "⧐",
        RightTriangle: "⊳",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVectorBar: "⥔",
        RightUpVector: "↾",
        RightVectorBar: "⥓",
        RightVector: "⇀",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoustache: "⎱",
        rmoust: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        ropf: "𝕣",
        Ropf: "ℝ",
        roplus: "⨮",
        rotimes: "⨵",
        RoundImplies: "⥰",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        Rrightarrow: "⇛",
        rsaquo: "›",
        rscr: "𝓇",
        Rscr: "ℛ",
        rsh: "↱",
        Rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        RuleDelayed: "⧴",
        ruluhar: "⥨",
        rx: "℞",
        Sacute: "Ś",
        sacute: "ś",
        sbquo: "‚",
        scap: "⪸",
        Scaron: "Š",
        scaron: "š",
        Sc: "⪼",
        sc: "≻",
        sccue: "≽",
        sce: "⪰",
        scE: "⪴",
        Scedil: "Ş",
        scedil: "ş",
        Scirc: "Ŝ",
        scirc: "ŝ",
        scnap: "⪺",
        scnE: "⪶",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        Scy: "С",
        scy: "с",
        sdotb: "⊡",
        sdot: "⋅",
        sdote: "⩦",
        searhk: "⤥",
        searr: "↘",
        seArr: "⇘",
        searrow: "↘",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        Sfr: "𝔖",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        SHCHcy: "Щ",
        shchcy: "щ",
        SHcy: "Ш",
        shcy: "ш",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        shortmid: "∣",
        shortparallel: "∥",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        shy: "­",
        Sigma: "Σ",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        SmallCircle: "∘",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        SOFTcy: "Ь",
        softcy: "ь",
        solbar: "⌿",
        solb: "⧄",
        sol: "/",
        Sopf: "𝕊",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        Sqrt: "√",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        square: "□",
        Square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        squarf: "▪",
        squ: "□",
        squf: "▪",
        srarr: "→",
        Sscr: "𝒮",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        Star: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        sub: "⊂",
        Sub: "⋐",
        subdot: "⪽",
        subE: "⫅",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        subset: "⊂",
        Subset: "⋐",
        subseteq: "⊆",
        subseteqq: "⫅",
        SubsetEqual: "⊆",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succapprox: "⪸",
        succ: "≻",
        succcurlyeq: "≽",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        SuchThat: "∋",
        sum: "∑",
        Sum: "∑",
        sung: "♪",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        sup: "⊃",
        Sup: "⋑",
        supdot: "⪾",
        supdsub: "⫘",
        supE: "⫆",
        supe: "⊇",
        supedot: "⫄",
        Superset: "⊃",
        SupersetEqual: "⊇",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        supset: "⊃",
        Supset: "⋑",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swarhk: "⤦",
        swarr: "↙",
        swArr: "⇙",
        swarrow: "↙",
        swnwar: "⤪",
        szlig: "ß",
        Tab: "\t",
        target: "⌖",
        Tau: "Τ",
        tau: "τ",
        tbrk: "⎴",
        Tcaron: "Ť",
        tcaron: "ť",
        Tcedil: "Ţ",
        tcedil: "ţ",
        Tcy: "Т",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        Tfr: "𝔗",
        tfr: "𝔱",
        there4: "∴",
        therefore: "∴",
        Therefore: "∴",
        Theta: "Θ",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        ThickSpace: "  ",
        ThinSpace: " ",
        thinsp: " ",
        thkap: "≈",
        thksim: "∼",
        THORN: "Þ",
        thorn: "þ",
        tilde: "˜",
        Tilde: "∼",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        timesbar: "⨱",
        timesb: "⊠",
        times: "×",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        topbot: "⌶",
        topcir: "⫱",
        top: "⊤",
        Topf: "𝕋",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        trade: "™",
        TRADE: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        TripleDot: "⃛",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        Tscr: "𝒯",
        tscr: "𝓉",
        TScy: "Ц",
        tscy: "ц",
        TSHcy: "Ћ",
        tshcy: "ћ",
        Tstrok: "Ŧ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        Uacute: "Ú",
        uacute: "ú",
        uarr: "↑",
        Uarr: "↟",
        uArr: "⇑",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        ubrcy: "ў",
        Ubreve: "Ŭ",
        ubreve: "ŭ",
        Ucirc: "Û",
        ucirc: "û",
        Ucy: "У",
        ucy: "у",
        udarr: "⇅",
        Udblac: "Ű",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        Ufr: "𝔘",
        ufr: "𝔲",
        Ugrave: "Ù",
        ugrave: "ù",
        uHar: "⥣",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        Umacr: "Ū",
        umacr: "ū",
        uml: "¨",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        uogon: "ų",
        Uopf: "𝕌",
        uopf: "𝕦",
        UpArrowBar: "⤒",
        uparrow: "↑",
        UpArrow: "↑",
        Uparrow: "⇑",
        UpArrowDownArrow: "⇅",
        updownarrow: "↕",
        UpDownArrow: "↕",
        Updownarrow: "⇕",
        UpEquilibrium: "⥮",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        upsi: "υ",
        Upsi: "ϒ",
        upsih: "ϒ",
        Upsilon: "Υ",
        upsilon: "υ",
        UpTeeArrow: "↥",
        UpTee: "⊥",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        Uring: "Ů",
        uring: "ů",
        urtri: "◹",
        Uscr: "𝒰",
        uscr: "𝓊",
        utdot: "⋰",
        Utilde: "Ũ",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        Uuml: "Ü",
        uuml: "ü",
        uwangle: "⦧",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        varr: "↕",
        vArr: "⇕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        vBar: "⫨",
        Vbar: "⫫",
        vBarv: "⫩",
        Vcy: "В",
        vcy: "в",
        vdash: "⊢",
        vDash: "⊨",
        Vdash: "⊩",
        VDash: "⊫",
        Vdashl: "⫦",
        veebar: "⊻",
        vee: "∨",
        Vee: "⋁",
        veeeq: "≚",
        vellip: "⋮",
        verbar: "|",
        Verbar: "‖",
        vert: "|",
        Vert: "‖",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        Vopf: "𝕍",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        Vscr: "𝒱",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        Vvdash: "⊪",
        vzigzag: "⦚",
        Wcirc: "Ŵ",
        wcirc: "ŵ",
        wedbar: "⩟",
        wedge: "∧",
        Wedge: "⋀",
        wedgeq: "≙",
        weierp: "℘",
        Wfr: "𝔚",
        wfr: "𝔴",
        Wopf: "𝕎",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        Wscr: "𝒲",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        Xfr: "𝔛",
        xfr: "𝔵",
        xharr: "⟷",
        xhArr: "⟺",
        Xi: "Ξ",
        xi: "ξ",
        xlarr: "⟵",
        xlArr: "⟸",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        Xopf: "𝕏",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrarr: "⟶",
        xrArr: "⟹",
        Xscr: "𝒳",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        Yacute: "Ý",
        yacute: "ý",
        YAcy: "Я",
        yacy: "я",
        Ycirc: "Ŷ",
        ycirc: "ŷ",
        Ycy: "Ы",
        ycy: "ы",
        yen: "¥",
        Yfr: "𝔜",
        yfr: "𝔶",
        YIcy: "Ї",
        yicy: "ї",
        Yopf: "𝕐",
        yopf: "𝕪",
        Yscr: "𝒴",
        yscr: "𝓎",
        YUcy: "Ю",
        yucy: "ю",
        yuml: "ÿ",
        Yuml: "Ÿ",
        Zacute: "Ź",
        zacute: "ź",
        Zcaron: "Ž",
        zcaron: "ž",
        Zcy: "З",
        zcy: "з",
        Zdot: "Ż",
        zdot: "ż",
        zeetrf: "ℨ",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        zeta: "ζ",
        zfr: "𝔷",
        Zfr: "ℨ",
        ZHcy: "Ж",
        zhcy: "ж",
        zigrarr: "⇝",
        zopf: "𝕫",
        Zopf: "ℤ",
        Zscr: "𝒵",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌"
    }
}, function (t, e) {
    t.exports = {amp: "&", apos: "'", gt: ">", lt: "<", quot: '"'}
}, function (t, e) {
    e.encode = function (t) {
        var e = "";
        for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
        return e
    }, e.decode = function (t) {
        for (var e = {}, n = t.split("&"), r = 0, i = n.length; r < i; r++) {
            var o = n[r].split("=");
            e[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
        }
        return e
    }
}, function (t, e, n) {
    (function (e) {
        "use strict";

        function n(t, n, r, i) {
            if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
            var o, s, a = arguments.length;
            switch (a) {
                case 0:
                case 1:
                    return e.nextTick(t);
                case 2:
                    return e.nextTick(function () {
                        t.call(null, n)
                    });
                case 3:
                    return e.nextTick(function () {
                        t.call(null, n, r)
                    });
                case 4:
                    return e.nextTick(function () {
                        t.call(null, n, r, i)
                    });
                default:
                    for (o = new Array(a - 1), s = 0; s < o.length;) o[s++] = arguments[s];
                    return e.nextTick(function () {
                        t.apply(null, o)
                    })
            }
        }

        !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = n : t.exports = e.nextTick
    }).call(e, n(8))
}, function (t, e, n) {
    "use strict";

    function r(t) {
        this.afterTransform = function (e, n) {
            return i(t, e, n)
        }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null
    }

    function i(t, e, n) {
        var r = t._transformState;
        r.transforming = !1;
        var i = r.writecb;
        if (!i) return t.emit("error", new Error("no writecb in Transform class"));
        r.writechunk = null, r.writecb = null, null !== n && void 0 !== n && t.push(n), i(e);
        var o = t._readableState;
        o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && t._read(o.highWaterMark)
    }

    function o(t) {
        if (!(this instanceof o)) return new o(t);
        a.call(this, t), this._transformState = new r(this);
        var e = this;
        this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.once("prefinish", function () {
            "function" == typeof this._flush ? this._flush(function (t, n) {
                s(e, t, n)
            }) : s(e)
        })
    }

    function s(t, e, n) {
        if (e) return t.emit("error", e);
        null !== n && void 0 !== n && t.push(n);
        var r = t._writableState, i = t._transformState;
        if (r.length) throw new Error("Calling transform done when ws.length != 0");
        if (i.transforming) throw new Error("Calling transform done when still transforming");
        return t.push(null)
    }

    t.exports = o;
    var a = n(6), u = n(10);
    u.inherits = n(1), u.inherits(o, a), o.prototype.push = function (t, e) {
        return this._transformState.needTransform = !1, a.prototype.push.call(this, t, e)
    }, o.prototype._transform = function (t, e, n) {
        throw new Error("_transform() is not implemented")
    }, o.prototype._write = function (t, e, n) {
        var r = this._transformState;
        if (r.writecb = n, r.writechunk = t, r.writeencoding = e, !r.transforming) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
    }, o.prototype._read = function (t) {
        var e = this._transformState;
        null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
    }
}, function (t, e, n) {
    (function (e, r) {
        "use strict";

        function i() {
        }

        function o(t, e, n) {
            this.chunk = t, this.encoding = e, this.callback = n, this.next = null
        }

        function s(t, e) {
            _ = _ || n(6), t = t || {}, this.objectMode = !!t.objectMode, e instanceof _ && (this.objectMode = this.objectMode || !!t.writableObjectMode);
            var r = t.highWaterMark, i = this.objectMode ? 16 : 16384;
            this.highWaterMark = r || 0 === r ? r : i, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
            var o = t.decodeStrings === !1;
            this.decodeStrings = !o, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (t) {
                g(e, t)
            }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new S(this)
        }

        function a(t) {
            return _ = _ || n(6), R.call(a, this) || this instanceof _ ? (this._writableState = new s(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev)), void A.call(this)) : new a(t)
        }

        function u(t, e) {
            var n = new Error("write after end");
            t.emit("error", n), T(e, n)
        }

        function l(t, e, n, r) {
            var i = !0, o = !1;
            return null === n ? o = new TypeError("May not write null values to stream") : I.isBuffer(n) || "string" == typeof n || void 0 === n || e.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (t.emit("error", o), T(r, o), i = !1), i
        }

        function c(t, e, n) {
            return t.objectMode || t.decodeStrings === !1 || "string" != typeof e || (e = D.from(e, n)), e
        }

        function h(t, e, n, r, i) {
            n = c(e, n, r), I.isBuffer(n) && (r = "buffer");
            var s = e.objectMode ? 1 : n.length;
            e.length += s;
            var a = e.length < e.highWaterMark;
            if (a || (e.needDrain = !0), e.writing || e.corked) {
                var u = e.lastBufferedRequest;
                e.lastBufferedRequest = new o(n, r, i), u ? u.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
            } else p(t, e, !1, s, n, r, i);
            return a
        }

        function p(t, e, n, r, i, o, s) {
            e.writelen = r, e.writecb = s, e.writing = !0, e.sync = !0, n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1
        }

        function f(t, e, n, r, i) {
            --e.pendingcb, n ? T(i, r) : i(r), t._writableState.errorEmitted = !0, t.emit("error", r)
        }

        function d(t) {
            t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0
        }

        function g(t, e) {
            var n = t._writableState, r = n.sync, i = n.writecb;
            if (d(n), e) f(t, n, r, e, i); else {
                var o = b(n);
                o || n.corked || n.bufferProcessing || !n.bufferedRequest || v(t, n), r ? C(m, t, n, o, i) : m(t, n, o, i)
            }
        }

        function m(t, e, n, r) {
            n || y(t, e), e.pendingcb--, r(), x(t, e)
        }

        function y(t, e) {
            0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
        }

        function v(t, e) {
            e.bufferProcessing = !0;
            var n = e.bufferedRequest;
            if (t._writev && n && n.next) {
                var r = e.bufferedRequestCount, i = new Array(r), o = e.corkedRequestsFree;
                o.entry = n;
                for (var s = 0; n;) i[s] = n, n = n.next, s += 1;
                p(t, e, !0, e.length, i, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new S(e)
            } else {
                for (; n;) {
                    var a = n.chunk, u = n.encoding, l = n.callback, c = e.objectMode ? 1 : a.length;
                    if (p(t, e, !1, c, a, u, l), n = n.next, e.writing) break
                }
                null === n && (e.lastBufferedRequest = null)
            }
            e.bufferedRequestCount = 0, e.bufferedRequest = n, e.bufferProcessing = !1
        }

        function b(t) {
            return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
        }

        function w(t, e) {
            e.prefinished || (e.prefinished = !0, t.emit("prefinish"))
        }

        function x(t, e) {
            var n = b(e);
            return n && (0 === e.pendingcb ? (w(t, e), e.finished = !0, t.emit("finish")) : w(t, e)), n
        }

        function k(t, e, n) {
            e.ending = !0, x(t, e), n && (e.finished ? T(n) : t.once("finish", n)), e.ended = !0, t.writable = !1
        }

        function S(t) {
            var e = this;
            this.next = null, this.entry = null, this.finish = function (n) {
                var r = e.entry;
                for (e.entry = null; r;) {
                    var i = r.callback;
                    t.pendingcb--, i(n), r = r.next
                }
                t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
            }
        }

        t.exports = a;
        var _, T = n(27), C = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : T;
        a.WritableState = s;
        var E = n(10);
        E.inherits = n(1);
        var A, L = {deprecate: n(153)};
        !function () {
            try {
                A = n(19)
            } catch (t) {
            } finally {
                A || (A = n(12).EventEmitter)
            }
        }();
        var I = n(3).Buffer, D = n(20);
        E.inherits(a, A), s.prototype.getBuffer = function () {
            for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;
            return e
        }, function () {
            try {
                Object.defineProperty(s.prototype, "buffer", {
                    get: L.deprecate(function () {
                        return this.getBuffer()
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
                })
            } catch (t) {
            }
        }();
        var R;
        "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (R = Function.prototype[Symbol.hasInstance], Object.defineProperty(a, Symbol.hasInstance, {
            value: function (t) {
                return !!R.call(this, t) || t && t._writableState instanceof s
            }
        })) : R = function (t) {
            return t instanceof this
        }, a.prototype.pipe = function () {
            this.emit("error", new Error("Cannot pipe, not readable"))
        }, a.prototype.write = function (t, e, n) {
            var r = this._writableState, o = !1;
            return "function" == typeof e && (n = e, e = null), I.isBuffer(t) ? e = "buffer" : e || (e = r.defaultEncoding), "function" != typeof n && (n = i), r.ended ? u(this, n) : l(this, r, t, n) && (r.pendingcb++, o = h(this, r, t, e, n)), o
        }, a.prototype.cork = function () {
            var t = this._writableState;
            t.corked++
        }, a.prototype.uncork = function () {
            var t = this._writableState;
            t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || v(this, t))
        }, a.prototype.setDefaultEncoding = function (t) {
            if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
            return this._writableState.defaultEncoding = t, this
        }, a.prototype._write = function (t, e, n) {
            n(new Error("_write() is not implemented"))
        }, a.prototype._writev = null, a.prototype.end = function (t, e, n) {
            var r = this._writableState;
            "function" == typeof t ? (n = t, t = null, e = null) : "function" == typeof e && (n = e, e = null), null !== t && void 0 !== t && this.write(t, e), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || k(this, r, n)
        }
    }).call(e, n(8), n(151).setImmediate)
}, function (t, e, n) {
    function r() {
    }

    function i(t) {
        var n = "", r = !1;
        return n += t.type, e.BINARY_EVENT != t.type && e.BINARY_ACK != t.type || (n += t.attachments, n += "-"), t.nsp && "/" != t.nsp && (r = !0, n += t.nsp), null != t.id && (r && (n += ",", r = !1), n += t.id), null != t.data && (r && (n += ","), n += p.stringify(t.data)), h("encoded %j as %s", t, n), n
    }

    function o(t, e) {
        function n(t) {
            var n = d.deconstructPacket(t), r = i(n.packet), o = n.buffers;
            o.unshift(r), e(o)
        }

        d.removeBlobs(t, n)
    }

    function s() {
        this.reconstructor = null
    }

    function a(t) {
        var n = {}, r = 0;
        if (n.type = Number(t.charAt(0)), null == e.types[n.type]) return c();
        if (e.BINARY_EVENT == n.type || e.BINARY_ACK == n.type) {
            for (var i = ""; "-" != t.charAt(++r) && (i += t.charAt(r), r != t.length);) ;
            if (i != Number(i) || "-" != t.charAt(r)) throw new Error("Illegal attachments");
            n.attachments = Number(i)
        }
        if ("/" == t.charAt(r + 1)) for (n.nsp = ""; ++r;) {
            var o = t.charAt(r);
            if ("," == o) break;
            if (n.nsp += o, r == t.length) break
        } else n.nsp = "/";
        var s = t.charAt(r + 1);
        if ("" !== s && Number(s) == s) {
            for (n.id = ""; ++r;) {
                var o = t.charAt(r);
                if (null == o || Number(o) != o) {
                    --r;
                    break
                }
                if (n.id += t.charAt(r), r == t.length) break
            }
            n.id = Number(n.id)
        }
        return t.charAt(++r) && (n = u(n, t.substr(r))), h("decoded %s as %j", t, n), n
    }

    function u(t, e) {
        try {
            t.data = p.parse(e)
        } catch (t) {
            return c()
        }
        return t
    }

    function l(t) {
        this.reconPack = t, this.buffers = []
    }

    function c(t) {
        return {type: e.ERROR, data: "parser error"}
    }

    var h = n(147)("socket.io-parser"), p = n(113), f = n(146), d = n(145), g = n(53);
    e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = r, e.Decoder = s, r.prototype.encode = function (t, n) {
        if (h("encoding packet %j", t), e.BINARY_EVENT == t.type || e.BINARY_ACK == t.type) o(t, n); else {
            var r = i(t);
            n([r])
        }
    }, f(s.prototype), s.prototype.add = function (t) {
        var n;
        if ("string" == typeof t) n = a(t), e.BINARY_EVENT == n.type || e.BINARY_ACK == n.type ? (this.reconstructor = new l(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n); else {
            if (!g(t) && !t.base64) throw new Error("Unknown type: " + t);
            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
            n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, this.emit("decoded", n))
        }
    }, s.prototype.destroy = function () {
        this.reconstructor && this.reconstructor.finishedReconstruction()
    }, l.prototype.takeBinaryData = function (t) {
        if (this.buffers.push(t), this.buffers.length == this.reconPack.attachments) {
            var e = d.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), e
        }
        return null
    }, l.prototype.finishedReconstruction = function () {
        this.reconPack = null, this.buffers = []
    }
}, function (t, e, n) {
    function r(t) {
        if (t && !u(t)) throw new Error("Unknown encoding: " + t)
    }

    function i(t) {
        return t.toString(this.encoding)
    }

    function o(t) {
        this.charReceived = t.length % 2, this.charLength = this.charReceived ? 2 : 0
    }

    function s(t) {
        this.charReceived = t.length % 3, this.charLength = this.charReceived ? 3 : 0
    }

    var a = n(3).Buffer, u = a.isEncoding || function (t) {
        switch (t && t.toLowerCase()) {
            case"hex":
            case"utf8":
            case"utf-8":
            case"ascii":
            case"binary":
            case"base64":
            case"ucs2":
            case"ucs-2":
            case"utf16le":
            case"utf-16le":
            case"raw":
                return !0;
            default:
                return !1
        }
    }, l = e.StringDecoder = function (t) {
        switch (this.encoding = (t || "utf8").toLowerCase().replace(/[-_]/, ""), r(t), this.encoding) {
            case"utf8":
                this.surrogateSize = 3;
                break;
            case"ucs2":
            case"utf16le":
                this.surrogateSize = 2, this.detectIncompleteChar = o;
                break;
            case"base64":
                this.surrogateSize = 3, this.detectIncompleteChar = s;
                break;
            default:
                return void (this.write = i)
        }
        this.charBuffer = new a(6), this.charReceived = 0, this.charLength = 0
    };
    l.prototype.write = function (t) {
        for (var e = ""; this.charLength;) {
            var n = t.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : t.length;
            if (t.copy(this.charBuffer, this.charReceived, 0, n), this.charReceived += n, this.charReceived < this.charLength) return "";
            t = t.slice(n, t.length), e = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
            var r = e.charCodeAt(e.length - 1);
            if (!(r >= 55296 && r <= 56319)) {
                if (this.charReceived = this.charLength = 0, 0 === t.length) return e;
                break
            }
            this.charLength += this.surrogateSize, e = ""
        }
        this.detectIncompleteChar(t);
        var i = t.length;
        this.charLength && (t.copy(this.charBuffer, 0, t.length - this.charReceived, i), i -= this.charReceived), e += t.toString(this.encoding, 0, i);
        var i = e.length - 1, r = e.charCodeAt(i);
        if (r >= 55296 && r <= 56319) {
            var o = this.surrogateSize;
            return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), t.copy(this.charBuffer, 0, 0, o), e.substring(0, i)
        }
        return e
    }, l.prototype.detectIncompleteChar = function (t) {
        for (var e = t.length >= 3 ? 3 : t.length; e > 0; e--) {
            var n = t[t.length - e];
            if (1 == e && n >> 5 == 6) {
                this.charLength = 2;
                break
            }
            if (e <= 2 && n >> 4 == 14) {
                this.charLength = 3;
                break
            }
            if (e <= 3 && n >> 3 == 30) {
                this.charLength = 4;
                break
            }
        }
        this.charReceived = e
    }, l.prototype.end = function (t) {
        var e = "";
        if (t && t.length && (e = this.write(t)), this.charReceived) {
            var n = this.charReceived, r = this.charBuffer, i = this.encoding;
            e += r.slice(0, n).toString(i)
        }
        return e
    }
}, function (t, e) {
    var n = [].slice;
    t.exports = function (t, e) {
        if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
        var r = n.call(arguments, 2);
        return function () {
            return e.apply(t, r.concat(n.call(arguments)))
        }
    }
}, function (t, e) {
    var n = t.exports = {
        get firstChild() {
            var t = this.children;
            return t && t[0] || null
        }, get lastChild() {
            var t = this.children;
            return t && t[t.length - 1] || null
        }, get nodeType() {
            return i[this.type] || i.element
        }
    }, r = {
        tagName: "name",
        childNodes: "children",
        parentNode: "parent",
        previousSibling: "prev",
        nextSibling: "next",
        nodeValue: "data"
    }, i = {element: 1, text: 3, cdata: 4, comment: 8};
    Object.keys(r).forEach(function (t) {
        var e = r[t];
        Object.defineProperty(n, t, {
            get: function () {
                return this[e] || null
            }, set: function (t) {
                return this[e] = t, t
            }
        })
    })
}, function (t, e, n) {
    (function (t) {
        function r(e) {
            var n, r = !1, a = !1, u = !1 !== e.jsonp;
            if (t.location) {
                var l = "https:" === location.protocol, c = location.port;
                c || (c = l ? 443 : 80), r = e.hostname !== location.hostname || c !== e.port, a = e.secure !== l
            }
            if (e.xdomain = r, e.xscheme = a, n = new i(e), "open" in n && !e.forceJSONP) return new o(e);
            if (!u) throw new Error("JSONP disabled");
            return new s(e)
        }

        var i = n(22), o = n(93), s = n(92), a = n(94);
        e.polling = r, e.websocket = a
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    function r(t) {
        var e = t && t.forceBase64;
        c && !e || (this.supportsBinary = !1), i.call(this, t)
    }

    var i = n(21), o = n(26), s = n(7), a = n(15), u = n(55), l = n(4)("engine.io-client:polling");
    t.exports = r;
    var c = function () {
        var t = n(22), e = new t({xdomain: !1});
        return null != e.responseType
    }();
    a(r, i), r.prototype.name = "polling", r.prototype.doOpen = function () {
        this.poll()
    }, r.prototype.pause = function (t) {
        function e() {
            l("paused"), n.readyState = "paused", t()
        }

        var n = this;
        if (this.readyState = "pausing", this.polling || !this.writable) {
            var r = 0;
            this.polling && (l("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function () {
                l("pre-pause polling complete"), --r || e()
            })), this.writable || (l("we are currently writing - waiting to pause"), r++, this.once("drain", function () {
                l("pre-pause writing complete"), --r || e()
            }))
        } else e()
    }, r.prototype.poll = function () {
        l("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
    }, r.prototype.onData = function (t) {
        var e = this;
        l("polling got data %s", t);
        var n = function (t, n, r) {
            return "opening" === e.readyState && e.onOpen(), "close" === t.type ? (e.onClose(), !1) : void e.onPacket(t)
        };
        s.decodePayload(t, this.socket.binaryType, n), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : l('ignoring poll - transport state "%s"', this.readyState))
    }, r.prototype.doClose = function () {
        function t() {
            l("writing close packet"), e.write([{type: "close"}])
        }

        var e = this;
        "open" === this.readyState ? (l("transport open - closing"), t()) : (l("transport not open - deferring close"), this.once("open", t))
    }, r.prototype.write = function (t) {
        var e = this;
        this.writable = !1;
        var n = function () {
            e.writable = !0, e.emit("drain")
        };
        s.encodePayload(t, this.supportsBinary, function (t) {
            e.doWrite(t, n)
        })
    }, r.prototype.uri = function () {
        var t = this.query || {}, e = this.secure ? "https" : "http", n = "";
        !1 !== this.timestampRequests && (t[this.timestampParam] = u()), this.supportsBinary || t.sid || (t.b64 = 1), t = o.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port), t.length && (t = "?" + t);
        var r = this.hostname.indexOf(":") !== -1;
        return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
    }
}, function (t, e, n) {
    function r(t) {
        if (t >= 55296 && t <= 57343 || t > 1114111) return "�";
        t in i && (t = i[t]);
        var e = "";
        return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += String.fromCharCode(t)
    }

    var i = n(112);
    t.exports = r
}, function (t, e, n) {
    (function (e) {
        function r(t) {
            function n(t) {
                if (!t) return !1;
                if (e.Buffer && e.Buffer.isBuffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer || e.Blob && t instanceof Blob || e.File && t instanceof File) return !0;
                if (i(t)) {
                    for (var r = 0; r < t.length; r++) if (n(t[r])) return !0
                } else if (t && "object" == typeof t) {
                    t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON());
                    for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o) && n(t[o])) return !0
                }
                return !1
            }

            return n(t)
        }

        var i = n(100);
        t.exports = r
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    function r(t, e) {
        this._options = e || {}, this._cbs = t || {}, this._tagname = "", this._attribname = "", this._attribvalue = "", this._attribs = null, this._stack = [], this.startIndex = 0, this.endIndex = null, this._lowerCaseTagNames = "lowerCaseTags" in this._options ? !!this._options.lowerCaseTags : !this._options.xmlMode, this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ? !!this._options.lowerCaseAttributeNames : !this._options.xmlMode, this._options.Tokenizer && (i = this._options.Tokenizer), this._tokenizer = new i(this._options, this), this._cbs.onparserinit && this._cbs.onparserinit(this)
    }

    var i = n(39), o = {input: !0, option: !0, optgroup: !0, select: !0, button: !0, datalist: !0, textarea: !0}, s = {
        tr: {tr: !0, th: !0, td: !0},
        th: {th: !0},
        td: {thead: !0, th: !0, td: !0},
        body: {head: !0, link: !0, script: !0},
        li: {li: !0},
        p: {p: !0},
        h1: {p: !0},
        h2: {p: !0},
        h3: {p: !0},
        h4: {p: !0},
        h5: {p: !0},
        h6: {p: !0},
        select: o,
        input: o,
        output: o,
        button: o,
        datalist: o,
        textarea: o,
        option: {option: !0},
        optgroup: {optgroup: !0}
    }, a = {
        __proto__: null,
        area: !0,
        base: !0,
        basefont: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        frame: !0,
        hr: !0,
        img: !0,
        input: !0,
        isindex: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
        path: !0,
        circle: !0,
        ellipse: !0,
        line: !0,
        rect: !0,
        use: !0,
        stop: !0,
        polyline: !0,
        polygon: !0
    }, u = /\s|\//;
    n(1)(r, n(12).EventEmitter), r.prototype._updatePosition = function (t) {
        null === this.endIndex ? this._tokenizer._sectionStart <= t ? this.startIndex = 0 : this.startIndex = this._tokenizer._sectionStart - t : this.startIndex = this.endIndex + 1, this.endIndex = this._tokenizer.getAbsoluteIndex()
    }, r.prototype.ontext = function (t) {
        this._updatePosition(1), this.endIndex--, this._cbs.ontext && this._cbs.ontext(t)
    }, r.prototype.onopentagname = function (t) {
        if (this._lowerCaseTagNames && (t = t.toLowerCase()), this._tagname = t, !this._options.xmlMode && t in s) for (var e; (e = this._stack[this._stack.length - 1]) in s[t]; this.onclosetag(e)) ;
        !this._options.xmlMode && t in a || this._stack.push(t), this._cbs.onopentagname && this._cbs.onopentagname(t), this._cbs.onopentag && (this._attribs = {})
    }, r.prototype.onopentagend = function () {
        this._updatePosition(1), this._attribs && (this._cbs.onopentag && this._cbs.onopentag(this._tagname, this._attribs), this._attribs = null), !this._options.xmlMode && this._cbs.onclosetag && this._tagname in a && this._cbs.onclosetag(this._tagname), this._tagname = ""
    }, r.prototype.onclosetag = function (t) {
        if (this._updatePosition(1), this._lowerCaseTagNames && (t = t.toLowerCase()), !this._stack.length || t in a && !this._options.xmlMode) this._options.xmlMode || "br" !== t && "p" !== t || (this.onopentagname(t), this._closeCurrentTag()); else {
            var e = this._stack.lastIndexOf(t);
            if (e !== -1) if (this._cbs.onclosetag) for (e = this._stack.length - e; e--;) this._cbs.onclosetag(this._stack.pop()); else this._stack.length = e; else "p" !== t || this._options.xmlMode || (this.onopentagname(t), this._closeCurrentTag())
        }
    }, r.prototype.onselfclosingtag = function () {
        this._options.xmlMode || this._options.recognizeSelfClosing ? this._closeCurrentTag() : this.onopentagend()
    }, r.prototype._closeCurrentTag = function () {
        var t = this._tagname;
        this.onopentagend(), this._stack[this._stack.length - 1] === t && (this._cbs.onclosetag && this._cbs.onclosetag(t), this._stack.pop())
    }, r.prototype.onattribname = function (t) {
        this._lowerCaseAttributeNames && (t = t.toLowerCase()), this._attribname = t
    }, r.prototype.onattribdata = function (t) {
        this._attribvalue += t
    }, r.prototype.onattribend = function () {
        this._cbs.onattribute && this._cbs.onattribute(this._attribname, this._attribvalue), this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname) && (this._attribs[this._attribname] = this._attribvalue), this._attribname = "", this._attribvalue = ""
    }, r.prototype._getInstructionName = function (t) {
        var e = t.search(u), n = e < 0 ? t : t.substr(0, e);
        return this._lowerCaseTagNames && (n = n.toLowerCase()), n
    }, r.prototype.ondeclaration = function (t) {
        if (this._cbs.onprocessinginstruction) {
            var e = this._getInstructionName(t);
            this._cbs.onprocessinginstruction("!" + e, "!" + t)
        }
    }, r.prototype.onprocessinginstruction = function (t) {
        if (this._cbs.onprocessinginstruction) {
            var e = this._getInstructionName(t);
            this._cbs.onprocessinginstruction("?" + e, "?" + t)
        }
    }, r.prototype.oncomment = function (t) {
        this._updatePosition(4), this._cbs.oncomment && this._cbs.oncomment(t), this._cbs.oncommentend && this._cbs.oncommentend()
    }, r.prototype.oncdata = function (t) {
        this._updatePosition(1), this._options.xmlMode || this._options.recognizeCDATA ? (this._cbs.oncdatastart && this._cbs.oncdatastart(), this._cbs.ontext && this._cbs.ontext(t), this._cbs.oncdataend && this._cbs.oncdataend()) : this.oncomment("[CDATA[" + t + "]]")
    }, r.prototype.onerror = function (t) {
        this._cbs.onerror && this._cbs.onerror(t)
    }, r.prototype.onend = function () {
        if (this._cbs.onclosetag) for (var t = this._stack.length; t > 0; this._cbs.onclosetag(this._stack[--t])) ;
        this._cbs.onend && this._cbs.onend()
    }, r.prototype.reset = function () {
        this._cbs.onreset && this._cbs.onreset(), this._tokenizer.reset(), this._tagname = "", this._attribname = "", this._attribs = null, this._stack = [], this._cbs.onparserinit && this._cbs.onparserinit(this)
    }, r.prototype.parseComplete = function (t) {
        this.reset(), this.end(t)
    }, r.prototype.write = function (t) {
        this._tokenizer.write(t)
    }, r.prototype.end = function (t) {
        this._tokenizer.end(t)
    }, r.prototype.pause = function () {
        this._tokenizer.pause()
    }, r.prototype.resume = function () {
        this._tokenizer.resume()
    }, r.prototype.parseChunk = r.prototype.write, r.prototype.done = r.prototype.end, t.exports = r
}, function (t, e, n) {
    function r(t) {
        return " " === t || "\n" === t || "\t" === t || "\f" === t || "\r" === t
    }

    function i(t, e) {
        return function (n) {
            n === t && (this._state = e)
        }
    }

    function o(t, e, n) {
        var r = t.toLowerCase();
        return t === r ? function (t) {
            t === r ? this._state = e : (this._state = n, this._index--)
        } : function (i) {
            i === r || i === t ? this._state = e : (this._state = n, this._index--)
        }
    }

    function s(t, e) {
        var n = t.toLowerCase();
        return function (r) {
            r === n || r === t ? this._state = e : (this._state = g, this._index--)
        }
    }

    function a(t, e) {
        this._state = f, this._buffer = "", this._sectionStart = 0, this._index = 0, this._bufferOffset = 0, this._baseState = f, this._special = gt, this._cbs = e, this._running = !0, this._ended = !1, this._xmlMode = !(!t || !t.xmlMode), this._decodeEntities = !(!t || !t.decodeEntities)
    }

    t.exports = a;
    var u = n(36), l = n(24), c = n(43), h = n(25), p = 0, f = p++, d = p++, g = p++, m = p++, y = p++, v = p++,
        b = p++, w = p++, x = p++, k = p++, S = p++, _ = p++, T = p++, C = p++, E = p++, A = p++, L = p++, I = p++,
        D = p++, R = p++, N = p++, O = p++, M = p++, B = p++, P = p++, q = p++, j = p++, z = p++, $ = p++, F = p++,
        U = p++, H = p++, W = p++, V = p++, X = p++, G = p++, Y = p++, K = p++, J = p++, Q = p++, Z = p++, tt = p++,
        et = p++, nt = p++, rt = p++, it = p++, ot = p++, st = p++, at = p++, ut = p++, lt = p++, ct = p++, ht = p++,
        pt = p++, ft = p++, dt = 0, gt = dt++, mt = dt++, yt = dt++;
    a.prototype._stateText = function (t) {
        "<" === t ? (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), this._state = d, this._sectionStart = this._index) : this._decodeEntities && this._special === gt && "&" === t && (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), this._baseState = f, this._state = lt, this._sectionStart = this._index)
    }, a.prototype._stateBeforeTagName = function (t) {
        "/" === t ? this._state = y : "<" === t ? (this._cbs.ontext(this._getSection()), this._sectionStart = this._index) : ">" === t || this._special !== gt || r(t) ? this._state = f : "!" === t ? (this._state = E, this._sectionStart = this._index + 1) : "?" === t ? (this._state = L, this._sectionStart = this._index + 1) : (this._state = this._xmlMode || "s" !== t && "S" !== t ? g : U, this._sectionStart = this._index)
    }, a.prototype._stateInTagName = function (t) {
        ("/" === t || ">" === t || r(t)) && (this._emitToken("onopentagname"), this._state = w, this._index--)
    }, a.prototype._stateBeforeCloseingTagName = function (t) {
        r(t) || (">" === t ? this._state = f : this._special !== gt ? "s" === t || "S" === t ? this._state = H : (this._state = f, this._index--) : (this._state = v, this._sectionStart = this._index))
    }, a.prototype._stateInCloseingTagName = function (t) {
        (">" === t || r(t)) && (this._emitToken("onclosetag"), this._state = b, this._index--)
    }, a.prototype._stateAfterCloseingTagName = function (t) {
        ">" === t && (this._state = f, this._sectionStart = this._index + 1)
    }, a.prototype._stateBeforeAttributeName = function (t) {
        ">" === t ? (this._cbs.onopentagend(), this._state = f, this._sectionStart = this._index + 1) : "/" === t ? this._state = m : r(t) || (this._state = x, this._sectionStart = this._index)
    }, a.prototype._stateInSelfClosingTag = function (t) {
        ">" === t ? (this._cbs.onselfclosingtag(), this._state = f, this._sectionStart = this._index + 1) : r(t) || (this._state = w, this._index--)
    }, a.prototype._stateInAttributeName = function (t) {
        ("=" === t || "/" === t || ">" === t || r(t)) && (this._cbs.onattribname(this._getSection()), this._sectionStart = -1, this._state = k, this._index--)
    }, a.prototype._stateAfterAttributeName = function (t) {
        "=" === t ? this._state = S : "/" === t || ">" === t ? (this._cbs.onattribend(), this._state = w, this._index--) : r(t) || (this._cbs.onattribend(), this._state = x, this._sectionStart = this._index)
    }, a.prototype._stateBeforeAttributeValue = function (t) {
        '"' === t ? (this._state = _, this._sectionStart = this._index + 1) : "'" === t ? (this._state = T, this._sectionStart = this._index + 1) : r(t) || (this._state = C, this._sectionStart = this._index, this._index--)
    }, a.prototype._stateInAttributeValueDoubleQuotes = function (t) {
        '"' === t ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = w) : this._decodeEntities && "&" === t && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = lt, this._sectionStart = this._index)
    }, a.prototype._stateInAttributeValueSingleQuotes = function (t) {
        "'" === t ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = w) : this._decodeEntities && "&" === t && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = lt, this._sectionStart = this._index)
    }, a.prototype._stateInAttributeValueNoQuotes = function (t) {
        r(t) || ">" === t ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = w, this._index--) : this._decodeEntities && "&" === t && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = lt, this._sectionStart = this._index)
    }, a.prototype._stateBeforeDeclaration = function (t) {
        this._state = "[" === t ? O : "-" === t ? I : A
    }, a.prototype._stateInDeclaration = function (t) {
        ">" === t && (this._cbs.ondeclaration(this._getSection()), this._state = f, this._sectionStart = this._index + 1)
    }, a.prototype._stateInProcessingInstruction = function (t) {
        ">" === t && (this._cbs.onprocessinginstruction(this._getSection()), this._state = f, this._sectionStart = this._index + 1)
    }, a.prototype._stateBeforeComment = function (t) {
        "-" === t ? (this._state = D, this._sectionStart = this._index + 1) : this._state = A
    }, a.prototype._stateInComment = function (t) {
        "-" === t && (this._state = R)
    }, a.prototype._stateAfterComment1 = function (t) {
        "-" === t ? this._state = N : this._state = D
    }, a.prototype._stateAfterComment2 = function (t) {
        ">" === t ? (this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2)), this._state = f, this._sectionStart = this._index + 1) : "-" !== t && (this._state = D)
    }, a.prototype._stateBeforeCdata1 = o("C", M, A), a.prototype._stateBeforeCdata2 = o("D", B, A), a.prototype._stateBeforeCdata3 = o("A", P, A), a.prototype._stateBeforeCdata4 = o("T", q, A), a.prototype._stateBeforeCdata5 = o("A", j, A), a.prototype._stateBeforeCdata6 = function (t) {
        "[" === t ? (this._state = z, this._sectionStart = this._index + 1) : (this._state = A, this._index--)
    }, a.prototype._stateInCdata = function (t) {
        "]" === t && (this._state = $)
    }, a.prototype._stateAfterCdata1 = i("]", F), a.prototype._stateAfterCdata2 = function (t) {
        ">" === t ? (this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2)), this._state = f, this._sectionStart = this._index + 1) : "]" !== t && (this._state = z)
    }, a.prototype._stateBeforeSpecial = function (t) {
        "c" === t || "C" === t ? this._state = W : "t" === t || "T" === t ? this._state = et : (this._state = g, this._index--)
    }, a.prototype._stateBeforeSpecialEnd = function (t) {
        this._special !== mt || "c" !== t && "C" !== t ? this._special !== yt || "t" !== t && "T" !== t ? this._state = f : this._state = ot : this._state = K
    }, a.prototype._stateBeforeScript1 = s("R", V), a.prototype._stateBeforeScript2 = s("I", X), a.prototype._stateBeforeScript3 = s("P", G), a.prototype._stateBeforeScript4 = s("T", Y), a.prototype._stateBeforeScript5 = function (t) {
        ("/" === t || ">" === t || r(t)) && (this._special = mt), this._state = g, this._index--
    }, a.prototype._stateAfterScript1 = o("R", J, f), a.prototype._stateAfterScript2 = o("I", Q, f), a.prototype._stateAfterScript3 = o("P", Z, f), a.prototype._stateAfterScript4 = o("T", tt, f), a.prototype._stateAfterScript5 = function (t) {
        ">" === t || r(t) ? (this._special = gt, this._state = v, this._sectionStart = this._index - 6, this._index--) : this._state = f
    }, a.prototype._stateBeforeStyle1 = s("Y", nt), a.prototype._stateBeforeStyle2 = s("L", rt), a.prototype._stateBeforeStyle3 = s("E", it), a.prototype._stateBeforeStyle4 = function (t) {
        ("/" === t || ">" === t || r(t)) && (this._special = yt), this._state = g, this._index--
    }, a.prototype._stateAfterStyle1 = o("Y", st, f), a.prototype._stateAfterStyle2 = o("L", at, f), a.prototype._stateAfterStyle3 = o("E", ut, f), a.prototype._stateAfterStyle4 = function (t) {
        ">" === t || r(t) ? (this._special = gt, this._state = v, this._sectionStart = this._index - 5, this._index--) : this._state = f
    }, a.prototype._stateBeforeEntity = o("#", ct, ht), a.prototype._stateBeforeNumericEntity = o("X", ft, pt), a.prototype._parseNamedEntityStrict = function () {
        if (this._sectionStart + 1 < this._index) {
            var t = this._buffer.substring(this._sectionStart + 1, this._index), e = this._xmlMode ? h : l;
            e.hasOwnProperty(t) && (this._emitPartial(e[t]), this._sectionStart = this._index + 1)
        }
    }, a.prototype._parseLegacyEntity = function () {
        var t = this._sectionStart + 1, e = this._index - t;
        for (e > 6 && (e = 6); e >= 2;) {
            var n = this._buffer.substr(t, e);
            if (c.hasOwnProperty(n)) return this._emitPartial(c[n]), void (this._sectionStart += e + 1);
            e--
        }
    }, a.prototype._stateInNamedEntity = function (t) {
        ";" === t ? (this._parseNamedEntityStrict(), this._sectionStart + 1 < this._index && !this._xmlMode && this._parseLegacyEntity(), this._state = this._baseState) : (t < "a" || t > "z") && (t < "A" || t > "Z") && (t < "0" || t > "9") && (this._xmlMode || this._sectionStart + 1 === this._index || (this._baseState !== f ? "=" !== t && this._parseNamedEntityStrict() : this._parseLegacyEntity()), this._state = this._baseState, this._index--)
    }, a.prototype._decodeNumericEntity = function (t, e) {
        var n = this._sectionStart + t;
        if (n !== this._index) {
            var r = this._buffer.substring(n, this._index), i = parseInt(r, e);
            this._emitPartial(u(i)), this._sectionStart = this._index
        } else this._sectionStart--;
        this._state = this._baseState
    }, a.prototype._stateInNumericEntity = function (t) {
        ";" === t ? (this._decodeNumericEntity(2, 10), this._sectionStart++) : (t < "0" || t > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(2, 10), this._index--)
    }, a.prototype._stateInHexEntity = function (t) {
        ";" === t ? (this._decodeNumericEntity(3, 16), this._sectionStart++) : (t < "a" || t > "f") && (t < "A" || t > "F") && (t < "0" || t > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(3, 16), this._index--)
    }, a.prototype._cleanup = function () {
        this._sectionStart < 0 ? (this._buffer = "", this._bufferOffset += this._index, this._index = 0) : this._running && (this._state === f ? (this._sectionStart !== this._index && this._cbs.ontext(this._buffer.substr(this._sectionStart)), this._buffer = "", this._bufferOffset += this._index, this._index = 0) : this._sectionStart === this._index ? (this._buffer = "", this._bufferOffset += this._index, this._index = 0) : (this._buffer = this._buffer.substr(this._sectionStart), this._index -= this._sectionStart, this._bufferOffset += this._sectionStart), this._sectionStart = 0)
    }, a.prototype.write = function (t) {
        this._ended && this._cbs.onerror(Error(".write() after done!")), this._buffer += t, this._parse()
    }, a.prototype._parse = function () {
        for (; this._index < this._buffer.length && this._running;) {
            var t = this._buffer.charAt(this._index);
            this._state === f ? this._stateText(t) : this._state === d ? this._stateBeforeTagName(t) : this._state === g ? this._stateInTagName(t) : this._state === y ? this._stateBeforeCloseingTagName(t) : this._state === v ? this._stateInCloseingTagName(t) : this._state === b ? this._stateAfterCloseingTagName(t) : this._state === m ? this._stateInSelfClosingTag(t) : this._state === w ? this._stateBeforeAttributeName(t) : this._state === x ? this._stateInAttributeName(t) : this._state === k ? this._stateAfterAttributeName(t) : this._state === S ? this._stateBeforeAttributeValue(t) : this._state === _ ? this._stateInAttributeValueDoubleQuotes(t) : this._state === T ? this._stateInAttributeValueSingleQuotes(t) : this._state === C ? this._stateInAttributeValueNoQuotes(t) : this._state === E ? this._stateBeforeDeclaration(t) : this._state === A ? this._stateInDeclaration(t) : this._state === L ? this._stateInProcessingInstruction(t) : this._state === I ? this._stateBeforeComment(t) : this._state === D ? this._stateInComment(t) : this._state === R ? this._stateAfterComment1(t) : this._state === N ? this._stateAfterComment2(t) : this._state === O ? this._stateBeforeCdata1(t) : this._state === M ? this._stateBeforeCdata2(t) : this._state === B ? this._stateBeforeCdata3(t) : this._state === P ? this._stateBeforeCdata4(t) : this._state === q ? this._stateBeforeCdata5(t) : this._state === j ? this._stateBeforeCdata6(t) : this._state === z ? this._stateInCdata(t) : this._state === $ ? this._stateAfterCdata1(t) : this._state === F ? this._stateAfterCdata2(t) : this._state === U ? this._stateBeforeSpecial(t) : this._state === H ? this._stateBeforeSpecialEnd(t) : this._state === W ? this._stateBeforeScript1(t) : this._state === V ? this._stateBeforeScript2(t) : this._state === X ? this._stateBeforeScript3(t) : this._state === G ? this._stateBeforeScript4(t) : this._state === Y ? this._stateBeforeScript5(t) : this._state === K ? this._stateAfterScript1(t) : this._state === J ? this._stateAfterScript2(t) : this._state === Q ? this._stateAfterScript3(t) : this._state === Z ? this._stateAfterScript4(t) : this._state === tt ? this._stateAfterScript5(t) : this._state === et ? this._stateBeforeStyle1(t) : this._state === nt ? this._stateBeforeStyle2(t) : this._state === rt ? this._stateBeforeStyle3(t) : this._state === it ? this._stateBeforeStyle4(t) : this._state === ot ? this._stateAfterStyle1(t) : this._state === st ? this._stateAfterStyle2(t) : this._state === at ? this._stateAfterStyle3(t) : this._state === ut ? this._stateAfterStyle4(t) : this._state === lt ? this._stateBeforeEntity(t) : this._state === ct ? this._stateBeforeNumericEntity(t) : this._state === ht ? this._stateInNamedEntity(t) : this._state === pt ? this._stateInNumericEntity(t) : this._state === ft ? this._stateInHexEntity(t) : this._cbs.onerror(Error("unknown _state"), this._state), this._index++
        }
        this._cleanup()
    }, a.prototype.pause = function () {
        this._running = !1
    }, a.prototype.resume = function () {
        this._running = !0, this._index < this._buffer.length && this._parse(), this._ended && this._finish()
    }, a.prototype.end = function (t) {
        this._ended && this._cbs.onerror(Error(".end() after done!")), t && this.write(t), this._ended = !0, this._running && this._finish()
    }, a.prototype._finish = function () {
        this._sectionStart < this._index && this._handleTrailingData(), this._cbs.onend()
    }, a.prototype._handleTrailingData = function () {
        var t = this._buffer.substr(this._sectionStart);
        this._state === z || this._state === $ || this._state === F ? this._cbs.oncdata(t) : this._state === D || this._state === R || this._state === N ? this._cbs.oncomment(t) : this._state !== ht || this._xmlMode ? this._state !== pt || this._xmlMode ? this._state !== ft || this._xmlMode ? this._state !== g && this._state !== w && this._state !== S && this._state !== k && this._state !== x && this._state !== T && this._state !== _ && this._state !== C && this._state !== v && this._cbs.ontext(t) : (this._decodeNumericEntity(3, 16), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._decodeNumericEntity(2, 10), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._parseLegacyEntity(), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData()))
    }, a.prototype.reset = function () {
        a.call(this, {xmlMode: this._xmlMode, decodeEntities: this._decodeEntities}, this._cbs)
    }, a.prototype.getAbsoluteIndex = function () {
        return this._bufferOffset + this._index
    }, a.prototype._getSection = function () {
        return this._buffer.substring(this._sectionStart, this._index)
    }, a.prototype._emitToken = function (t) {
        this._cbs[t](this._getSection()), this._sectionStart = -1
    }, a.prototype._emitPartial = function (t) {
        this._baseState !== f ? this._cbs.onattribdata(t) : this._cbs.ontext(t)
    }
}, function (t, e, n) {
    function r(t, e) {
        var n = this._parser = new i(t, e), r = this._decoder = new s;
        o.call(this, {decodeStrings: !1}), this.once("finish", function () {
            n.end(r.end())
        })
    }

    t.exports = r;
    var i = n(38), o = n(19).Writable || n(157).Writable, s = n(31).StringDecoder, a = n(3).Buffer;
    n(1)(r, o), o.prototype._write = function (t, e, n) {
        t instanceof a && (t = this._decoder.write(t)), this._parser.write(t), n()
    }
}, function (t, e) {
    var n = [].indexOf;
    t.exports = function (t, e) {
        if (n) return t.indexOf(e);
        for (var r = 0; r < t.length; ++r) if (t[r] === e) return r;
        return -1
    }
}, function (t, e, n) {
    var r, i;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */
    !function (e, n) {
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function (n, o) {
        function s(t) {
            var e = !!t && "length" in t && t.length, n = lt.type(t);
            return "function" !== n && !lt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function a(t, e, n) {
            if (lt.isFunction(e)) return lt.grep(t, function (t, r) {
                return !!e.call(t, r, t) !== n
            });
            if (e.nodeType) return lt.grep(t, function (t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (bt.test(e)) return lt.filter(e, t, n);
                e = lt.filter(e, t)
            }
            return lt.grep(t, function (t) {
                return rt.call(e, t) > -1 !== n
            })
        }

        function u(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType;) ;
            return t
        }

        function l(t) {
            var e = {};
            return lt.each(t.match(Tt) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function c() {
            Z.removeEventListener("DOMContentLoaded", c), n.removeEventListener("load", c), lt.ready()
        }

        function h() {
            this.expando = lt.expando + h.uid++
        }

        function p(t, e, n) {
            var r;
            if (void 0 === n && 1 === t.nodeType) if (r = "data-" + e.replace(Rt, "-$&").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Dt.test(n) ? lt.parseJSON(n) : n)
                } catch (t) {
                }
                It.set(t, e, n)
            } else n = void 0;
            return n
        }

        function f(t, e, n, r) {
            var i, o = 1, s = 20, a = r ? function () {
                    return r.cur()
                } : function () {
                    return lt.css(t, e, "")
                }, u = a(), l = n && n[3] || (lt.cssNumber[e] ? "" : "px"),
                c = (lt.cssNumber[e] || "px" !== l && +u) && Ot.exec(lt.css(t, e));
            if (c && c[3] !== l) {
                l = l || c[3], n = n || [], c = +u || 1;
                do o = o || ".5", c /= o, lt.style(t, e, c + l); while (o !== (o = a() / u) && 1 !== o && --s)
            }
            return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
        }

        function d(t, e) {
            var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && lt.nodeName(t, e) ? lt.merge([t], n) : n
        }

        function g(t, e) {
            for (var n = 0, r = t.length; n < r; n++) Lt.set(t[n], "globalEval", !e || Lt.get(e[n], "globalEval"))
        }

        function m(t, e, n, r, i) {
            for (var o, s, a, u, l, c, h = e.createDocumentFragment(), p = [], f = 0, m = t.length; f < m; f++) if (o = t[f], o || 0 === o) if ("object" === lt.type(o)) lt.merge(p, o.nodeType ? [o] : o); else if ($t.test(o)) {
                for (s = s || h.appendChild(e.createElement("div")), a = (qt.exec(o) || ["", ""])[1].toLowerCase(), u = zt[a] || zt._default, s.innerHTML = u[1] + lt.htmlPrefilter(o) + u[2], c = u[0]; c--;) s = s.lastChild;
                lt.merge(p, s.childNodes), s = h.firstChild, s.textContent = ""
            } else p.push(e.createTextNode(o));
            for (h.textContent = "", f = 0; o = p[f++];) if (r && lt.inArray(o, r) > -1) i && i.push(o); else if (l = lt.contains(o.ownerDocument, o), s = d(h.appendChild(o), "script"), l && g(s), n) for (c = 0; o = s[c++];) jt.test(o.type || "") && n.push(o);
            return h
        }

        function y() {
            return !0
        }

        function v() {
            return !1
        }

        function b() {
            try {
                return Z.activeElement
            } catch (t) {
            }
        }

        function w(t, e, n, r, i, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (a in e) w(t, a, n, r, e[a], o);
                return t
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = v; else if (!i) return t;
            return 1 === o && (s = i, i = function (t) {
                return lt().off(t), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = lt.guid++)), t.each(function () {
                lt.event.add(this, e, i, r, n)
            })
        }

        function x(t, e) {
            return lt.nodeName(t, "table") && lt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function k(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function S(t) {
            var e = Gt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function _(t, e) {
            var n, r, i, o, s, a, u, l;
            if (1 === e.nodeType) {
                if (Lt.hasData(t) && (o = Lt.access(t), s = Lt.set(e, o), l = o.events)) {
                    delete s.handle, s.events = {};
                    for (i in l) for (n = 0, r = l[i].length; n < r; n++) lt.event.add(e, i, l[i][n])
                }
                It.hasData(t) && (a = It.access(t), u = lt.extend({}, a), It.set(e, u))
            }
        }

        function T(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Pt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function C(t, e, n, r) {
            e = et.apply([], e);
            var i, o, s, a, u, l, c = 0, h = t.length, p = h - 1, f = e[0], g = lt.isFunction(f);
            if (g || h > 1 && "string" == typeof f && !at.checkClone && Xt.test(f)) return t.each(function (i) {
                var o = t.eq(i);
                g && (e[0] = f.call(this, i, o.html())), C(o, e, n, r)
            });
            if (h && (i = m(e, t[0].ownerDocument, !1, t, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (s = lt.map(d(i, "script"), k), a = s.length; c < h; c++) u = i, c !== p && (u = lt.clone(u, !0, !0), a && lt.merge(s, d(u, "script"))), n.call(t[c], u, c);
                if (a) for (l = s[s.length - 1].ownerDocument, lt.map(s, S), c = 0; c < a; c++) u = s[c], jt.test(u.type || "") && !Lt.access(u, "globalEval") && lt.contains(l, u) && (u.src ? lt._evalUrl && lt._evalUrl(u.src) : lt.globalEval(u.textContent.replace(Yt, "")))
            }
            return t
        }

        function E(t, e, n) {
            for (var r, i = e ? lt.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || lt.cleanData(d(r)), r.parentNode && (n && lt.contains(r.ownerDocument, r) && g(d(r, "script")), r.parentNode.removeChild(r));
            return t
        }

        function A(t, e) {
            var n = lt(e.createElement(t)).appendTo(e.body), r = lt.css(n[0], "display");
            return n.detach(), r
        }

        function L(t) {
            var e = Z, n = Jt[t];
            return n || (n = A(t, e), "none" !== n && n || (Kt = (Kt || lt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Kt[0].contentDocument, e.write(), e.close(), n = A(t, e), Kt.detach()), Jt[t] = n), n
        }

        function I(t, e, n) {
            var r, i, o, s, a = t.style;
            return n = n || te(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || lt.contains(t.ownerDocument, t) || (s = lt.style(t, e)), n && !at.pixelMarginRight() && Zt.test(s) && Qt.test(e) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s
        }

        function D(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function R(t) {
            if (t in ae) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = se.length; n--;) if (t = se[n] + e, t in ae) return t
        }

        function N(t, e, n) {
            var r = Ot.exec(e);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
        }

        function O(t, e, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += lt.css(t, n + Mt[o], !0, i)), r ? ("content" === n && (s -= lt.css(t, "padding" + Mt[o], !0, i)), "margin" !== n && (s -= lt.css(t, "border" + Mt[o] + "Width", !0, i))) : (s += lt.css(t, "padding" + Mt[o], !0, i), "padding" !== n && (s += lt.css(t, "border" + Mt[o] + "Width", !0, i)));
            return s
        }

        function M(t, e, n) {
            var r = !0, i = "width" === e ? t.offsetWidth : t.offsetHeight, o = te(t),
                s = "border-box" === lt.css(t, "boxSizing", !1, o);
            if (i <= 0 || null == i) {
                if (i = I(t, e, o), (i < 0 || null == i) && (i = t.style[e]), Zt.test(i)) return i;
                r = s && (at.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
            }
            return i + O(t, e, n || (s ? "border" : "content"), r, o) + "px"
        }

        function B(t, e) {
            for (var n, r, i, o = [], s = 0, a = t.length; s < a; s++) r = t[s], r.style && (o[s] = Lt.get(r, "olddisplay"), n = r.style.display, e ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Bt(r) && (o[s] = Lt.access(r, "olddisplay", L(r.nodeName)))) : (i = Bt(r), "none" === n && i || Lt.set(r, "olddisplay", i ? n : lt.css(r, "display"))));
            for (s = 0; s < a; s++) r = t[s], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[s] || "" : "none"));
            return t
        }

        function P(t, e, n, r, i) {
            return new P.prototype.init(t, e, n, r, i)
        }

        function q() {
            return n.setTimeout(function () {
                ue = void 0
            }), ue = lt.now()
        }

        function j(t, e) {
            var n, r = 0, i = {height: t};
            for (e = e ? 1 : 0; r < 4; r += 2 - e) n = Mt[r], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function z(t, e, n) {
            for (var r, i = (U.tweeners[e] || []).concat(U.tweeners["*"]), o = 0, s = i.length; o < s; o++) if (r = i[o].call(n, e, t)) return r
        }

        function $(t, e, n) {
            var r, i, o, s, a, u, l, c, h = this, p = {}, f = t.style, d = t.nodeType && Bt(t), g = Lt.get(t, "fxshow");
            n.queue || (a = lt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
                a.unqueued || u()
            }), a.unqueued++, h.always(function () {
                h.always(function () {
                    a.unqueued--, lt.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = lt.css(t, "display"), c = "none" === l ? Lt.get(t, "olddisplay") || L(t.nodeName) : l, "inline" === c && "none" === lt.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (r in e) if (i = e[r], ce.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    d = !0
                }
                p[r] = g && g[r] || lt.style(t, r)
            } else l = void 0;
            if (lt.isEmptyObject(p)) "inline" === ("none" === l ? L(t.nodeName) : l) && (f.display = l); else {
                g ? "hidden" in g && (d = g.hidden) : g = Lt.access(t, "fxshow", {}), o && (g.hidden = !d), d ? lt(t).show() : h.done(function () {
                    lt(t).hide()
                }), h.done(function () {
                    var e;
                    Lt.remove(t, "fxshow");
                    for (e in p) lt.style(t, e, p[e])
                });
                for (r in p) s = z(d ? g[r] : 0, r, h), r in g || (g[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function F(t, e) {
            var n, r, i, o, s;
            for (n in t) if (r = lt.camelCase(n), i = e[r], o = t[n], lt.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), s = lt.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete t[r];
                for (n in o) n in t || (t[n] = o[n], e[n] = i)
            } else e[r] = i
        }

        function U(t, e, n) {
            var r, i, o = 0, s = U.prefilters.length, a = lt.Deferred().always(function () {
                delete u.elem
            }), u = function () {
                if (i) return !1;
                for (var e = ue || q(), n = Math.max(0, l.startTime + l.duration - e), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; s < u; s++) l.tweens[s].run(o);
                return a.notifyWith(t, [l, o, n]), o < 1 && u ? n : (a.resolveWith(t, [l]), !1)
            }, l = a.promise({
                elem: t,
                props: lt.extend({}, e),
                opts: lt.extend(!0, {specialEasing: {}, easing: lt.easing._default}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ue || q(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var r = lt.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (e) {
                    var n = 0, r = e ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l, e])) : a.rejectWith(t, [l, e]), this
                }
            }), c = l.props;
            for (F(c, l.opts.specialEasing); o < s; o++) if (r = U.prefilters[o].call(l, t, c, l.opts)) return lt.isFunction(r.stop) && (lt._queueHooks(l.elem, l.opts.queue).stop = lt.proxy(r.stop, r)), r;
            return lt.map(c, z, l), lt.isFunction(l.opts.start) && l.opts.start.call(t, l), lt.fx.timer(lt.extend(u, {
                elem: t,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function H(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function W(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var r, i = 0, o = e.toLowerCase().match(Tt) || [];
                if (lt.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
            }
        }

        function V(t, e, n, r) {
            function i(a) {
                var u;
                return o[a] = !0, lt.each(t[a] || [], function (t, a) {
                    var l = a(e, n, r);
                    return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (e.dataTypes.unshift(l), i(l), !1)
                }), u
            }

            var o = {}, s = t === Ie;
            return i(e.dataTypes[0]) || !o["*"] && i("*")
        }

        function X(t, e) {
            var n, r, i = lt.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
            return r && lt.extend(!0, t, r), t
        }

        function G(t, e, n) {
            for (var r, i, o, s, a = t.contents, u = t.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r) for (i in a) if (a[i] && a[i].test(r)) {
                u.unshift(i);
                break
            }
            if (u[0] in n) o = u[0]; else {
                for (i in n) {
                    if (!u[0] || t.converters[i + " " + u[0]]) {
                        o = i;
                        break
                    }
                    s || (s = i)
                }
                o = o || s
            }
            if (o) return o !== u[0] && u.unshift(o), n[o]
        }

        function Y(t, e, n, r) {
            var i, o, s, a, u, l = {}, c = t.dataTypes.slice();
            if (c[1]) for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
            for (o = c.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                    s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                    break
                }
                if (s !== !0) if (s && t.throws) e = s(e); else try {
                    e = s(e)
                } catch (t) {
                    return {state: "parsererror", error: s ? t : "No conversion from " + u + " to " + o}
                }
            }
            return {state: "success", data: e}
        }

        function K(t, e, n, r) {
            var i;
            if (lt.isArray(e)) lt.each(e, function (e, i) {
                n || Oe.test(t) ? r(t, i) : K(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
            }); else if (n || "object" !== lt.type(e)) r(t, e); else for (i in e) K(t + "[" + i + "]", e[i], n, r)
        }

        function J(t) {
            return lt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }

        var Q = [], Z = n.document, tt = Q.slice, et = Q.concat, nt = Q.push, rt = Q.indexOf, it = {}, ot = it.toString,
            st = it.hasOwnProperty, at = {}, ut = "2.2.4", lt = function (t, e) {
                return new lt.fn.init(t, e)
            }, ct = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ht = /^-ms-/, pt = /-([\da-z])/gi, ft = function (t, e) {
                return e.toUpperCase()
            };
        lt.fn = lt.prototype = {
            jquery: ut, constructor: lt, selector: "", length: 0, toArray: function () {
                return tt.call(this)
            }, get: function (t) {
                return null != t ? t < 0 ? this[t + this.length] : this[t] : tt.call(this)
            }, pushStack: function (t) {
                var e = lt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            }, each: function (t) {
                return lt.each(this, t)
            }, map: function (t) {
                return this.pushStack(lt.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(tt.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: nt, sort: Q.sort, splice: Q.splice
        }, lt.extend = lt.fn.extend = function () {
            var t, e, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || lt.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++) if (null != (t = arguments[a])) for (e in t) n = s[e], r = t[e], s !== r && (l && r && (lt.isPlainObject(r) || (i = lt.isArray(r))) ? (i ? (i = !1, o = n && lt.isArray(n) ? n : []) : o = n && lt.isPlainObject(n) ? n : {}, s[e] = lt.extend(l, o, r)) : void 0 !== r && (s[e] = r));
            return s
        }, lt.extend({
            expando: "jQuery" + (ut + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isFunction: function (t) {
                return "function" === lt.type(t)
            }, isArray: Array.isArray, isWindow: function (t) {
                return null != t && t === t.window
            }, isNumeric: function (t) {
                var e = t && t.toString();
                return !lt.isArray(t) && e - parseFloat(e) + 1 >= 0
            }, isPlainObject: function (t) {
                var e;
                if ("object" !== lt.type(t) || t.nodeType || lt.isWindow(t)) return !1;
                if (t.constructor && !st.call(t, "constructor") && !st.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t) ;
                return void 0 === e || st.call(t, e)
            }, isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            }, type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? it[ot.call(t)] || "object" : typeof t
            }, globalEval: function (t) {
                var e, n = eval;
                t = lt.trim(t), t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            }, camelCase: function (t) {
                return t.replace(ht, "ms-").replace(pt, ft)
            }, nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }, each: function (t, e) {
                var n, r = 0;
                if (s(t)) for (n = t.length; r < n && e.call(t[r], r, t[r]) !== !1; r++) ; else for (r in t) if (e.call(t[r], r, t[r]) === !1) break;
                return t
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(ct, "")
            }, makeArray: function (t, e) {
                var n = e || [];
                return null != t && (s(Object(t)) ? lt.merge(n, "string" == typeof t ? [t] : t) : nt.call(n, t)), n
            }, inArray: function (t, e, n) {
                return null == e ? -1 : rt.call(e, t, n)
            }, merge: function (t, e) {
                for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
                return t.length = i, t
            }, grep: function (t, e, n) {
                for (var r, i = [], o = 0, s = t.length, a = !n; o < s; o++) r = !e(t[o], o), r !== a && i.push(t[o]);
                return i
            }, map: function (t, e, n) {
                var r, i, o = 0, a = [];
                if (s(t)) for (r = t.length; o < r; o++) i = e(t[o], o, n), null != i && a.push(i); else for (o in t) i = e(t[o], o, n), null != i && a.push(i);
                return et.apply([], a)
            }, guid: 1, proxy: function (t, e) {
                var n, r, i;
                if ("string" == typeof e && (n = t[e], e = t, t = n), lt.isFunction(t)) return r = tt.call(arguments, 2), i = function () {
                    return t.apply(e || this, r.concat(tt.call(arguments)))
                }, i.guid = t.guid = t.guid || lt.guid++, i
            }, now: Date.now, support: at
        }), "function" == typeof Symbol && (lt.fn[Symbol.iterator] = Q[Symbol.iterator]), lt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            it["[object " + e + "]"] = e.toLowerCase()
        });
        var dt =/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
            function (t) {
                function e(t, e, n, r) {
                    var i, o, s, a, u, l, h, f, d = e && e.ownerDocument, g = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return n;
                    if (!r && ((e ? e.ownerDocument || e : z) !== R && D(e), e = e || R, O)) {
                        if (11 !== g && (l = yt.exec(t))) if (i = l[1]) {
                            if (9 === g) {
                                if (!(s = e.getElementById(i))) return n;
                                if (s.id === i) return n.push(s), n
                            } else if (d && (s = d.getElementById(i)) && q(e, s) && s.id === i) return n.push(s), n
                        } else {
                            if (l[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                            if ((i = l[3]) && x.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(i)), n
                        }
                        if (x.qsa && !W[t + " "] && (!M || !M.test(t))) {
                            if (1 !== g) d = e, f = t; else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = j), h = T(t), o = h.length, u = pt.test(a) ? "#" + a : "[id='" + a + "']"; o--;) h[o] = u + " " + p(h[o]);
                                f = h.join(","), d = vt.test(t) && c(e.parentNode) || e
                            }
                            if (f) try {
                                return Q.apply(n, d.querySelectorAll(f)), n
                            } catch (t) {
                            } finally {
                                a === j && e.removeAttribute("id")
                            }
                        }
                    }
                    return E(t.replace(at, "$1"), e, n, r)
                }

                function n() {
                    function t(n, r) {
                        return e.push(n + " ") > k.cacheLength && delete t[e.shift()], t[n + " "] = r
                    }

                    var e = [];
                    return t
                }

                function r(t) {
                    return t[j] = !0, t
                }

                function i(t) {
                    var e = R.createElement("div");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function o(t, e) {
                    for (var n = t.split("|"), r = n.length; r--;) k.attrHandle[n[r]] = e
                }

                function s(t, e) {
                    var n = e && t,
                        r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                    if (r) return r;
                    if (n) for (; n = n.nextSibling;) if (n === e) return -1;
                    return t ? 1 : -1
                }

                function a(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function u(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function l(t) {
                    return r(function (e) {
                        return e = +e, r(function (n, r) {
                            for (var i, o = t([], n.length, e), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function c(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }

                function h() {
                }

                function p(t) {
                    for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
                    return r
                }

                function f(t, e, n) {
                    var r = e.dir, i = n && "parentNode" === r, o = F++;
                    return e.first ? function (e, n, o) {
                        for (; e = e[r];) if (1 === e.nodeType || i) return t(e, n, o)
                    } : function (e, n, s) {
                        var a, u, l, c = [$, o];
                        if (s) {
                            for (; e = e[r];) if ((1 === e.nodeType || i) && t(e, n, s)) return !0
                        } else for (; e = e[r];) if (1 === e.nodeType || i) {
                            if (l = e[j] || (e[j] = {}), u = l[e.uniqueID] || (l[e.uniqueID] = {}), (a = u[r]) && a[0] === $ && a[1] === o) return c[2] = a[2];
                            if (u[r] = c, c[2] = t(e, n, s)) return !0
                        }
                    }
                }

                function d(t) {
                    return t.length > 1 ? function (e, n, r) {
                        for (var i = t.length; i--;) if (!t[i](e, n, r)) return !1;
                        return !0
                    } : t[0]
                }

                function g(t, n, r) {
                    for (var i = 0, o = n.length; i < o; i++) e(t, n[i], r);
                    return r
                }

                function m(t, e, n, r, i) {
                    for (var o, s = [], a = 0, u = t.length, l = null != e; a < u; a++) (o = t[a]) && (n && !n(o, r, i) || (s.push(o), l && e.push(a)));
                    return s
                }

                function y(t, e, n, i, o, s) {
                    return i && !i[j] && (i = y(i)), o && !o[j] && (o = y(o, s)), r(function (r, s, a, u) {
                        var l, c, h, p = [], f = [], d = s.length, y = r || g(e || "*", a.nodeType ? [a] : a, []),
                            v = !t || !r && e ? y : m(y, p, t, a, u), b = n ? o || (r ? t : d || i) ? [] : s : v;
                        if (n && n(v, b, a, u), i) for (l = m(b, f), i(l, [], a, u), c = l.length; c--;) (h = l[c]) && (b[f[c]] = !(v[f[c]] = h));
                        if (r) {
                            if (o || t) {
                                if (o) {
                                    for (l = [], c = b.length; c--;) (h = b[c]) && l.push(v[c] = h);
                                    o(null, b = [], l, u)
                                }
                                for (c = b.length; c--;) (h = b[c]) && (l = o ? tt(r, h) : p[c]) > -1 && (r[l] = !(s[l] = h))
                            }
                        } else b = m(b === s ? b.splice(d, b.length) : b), o ? o(null, s, b, u) : Q.apply(s, b)
                    })
                }

                function v(t) {
                    for (var e, n, r, i = t.length, o = k.relative[t[0].type], s = o || k.relative[" "], a = o ? 1 : 0, u = f(function (t) {
                        return t === e
                    }, s, !0), l = f(function (t) {
                        return tt(e, t) > -1
                    }, s, !0), c = [function (t, n, r) {
                        var i = !o && (r || n !== A) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r));
                        return e = null, i
                    }]; a < i; a++) if (n = k.relative[t[a].type]) c = [f(d(c), n)]; else {
                        if (n = k.filter[t[a].type].apply(null, t[a].matches), n[j]) {
                            for (r = ++a; r < i && !k.relative[t[r].type]; r++) ;
                            return y(a > 1 && d(c), a > 1 && p(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(at, "$1"), n, a < r && v(t.slice(a, r)), r < i && v(t = t.slice(r)), r < i && p(t))
                        }
                        c.push(n)
                    }
                    return d(c)
                }

                function b(t, n) {
                    var i = n.length > 0, o = t.length > 0, s = function (r, s, a, u, l) {
                        var c, h, p, f = 0, d = "0", g = r && [], y = [], v = A, b = r || o && k.find.TAG("*", l),
                            w = $ += null == v ? 1 : Math.random() || .1, x = b.length;
                        for (l && (A = s === R || s || l); d !== x && null != (c = b[d]); d++) {
                            if (o && c) {
                                for (h = 0, s || c.ownerDocument === R || (D(c), a = !O); p = t[h++];) if (p(c, s || R, a)) {
                                    u.push(c);
                                    break
                                }
                                l && ($ = w)
                            }
                            i && ((c = !p && c) && f--, r && g.push(c))
                        }
                        if (f += d, i && d !== f) {
                            for (h = 0; p = n[h++];) p(g, y, s, a);
                            if (r) {
                                if (f > 0) for (; d--;) g[d] || y[d] || (y[d] = K.call(u));
                                y = m(y)
                            }
                            Q.apply(u, y), l && !r && y.length > 0 && f + n.length > 1 && e.uniqueSort(u)
                        }
                        return l && ($ = w, A = v), g
                    };
                    return i ? r(s) : s
                }

                var w, x, k, S, _, T, C, E, A, L, I, D, R, N, O, M, B, P, q, j = "sizzle" + 1 * new Date,
                    z = t.document, $ = 0, F = 0, U = n(), H = n(), W = n(), V = function (t, e) {
                        return t === e && (I = !0), 0
                    }, X = 1 << 31, G = {}.hasOwnProperty, Y = [], K = Y.pop, J = Y.push, Q = Y.push, Z = Y.slice,
                    tt = function (t, e) {
                        for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                        return -1
                    },
                    et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
                    ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
                    st = new RegExp(nt + "+", "g"),
                    at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                    ut = new RegExp("^" + nt + "*," + nt + "*"),
                    lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                    ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), ht = new RegExp(ot),
                    pt = new RegExp("^" + rt + "$"), ft = {
                        ID: new RegExp("^#(" + rt + ")"),
                        CLASS: new RegExp("^\\.(" + rt + ")"),
                        TAG: new RegExp("^(" + rt + "|[*])"),
                        ATTR: new RegExp("^" + it),
                        PSEUDO: new RegExp("^" + ot),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + et + ")$", "i"),
                        needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                    }, dt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/,
                    yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, vt = /[+~]/, bt = /'|\\/g,
                    wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), xt = function (t, e, n) {
                        var r = "0x" + e - 65536;
                        return r !== r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    }, kt = function () {
                        D()
                    };
                try {
                    Q.apply(Y = Z.call(z.childNodes), z.childNodes), Y[z.childNodes.length].nodeType
                } catch (t) {
                    Q = {
                        apply: Y.length ? function (t, e) {
                            J.apply(t, Z.call(e))
                        } : function (t, e) {
                            for (var n = t.length, r = 0; t[n++] = e[r++];) ;
                            t.length = n - 1
                        }
                    }
                }
                x = e.support = {}, _ = e.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, D = e.setDocument = function (t) {
                    var e, n, r = t ? t.ownerDocument || t : z;
                    return r !== R && 9 === r.nodeType && r.documentElement ? (R = r, N = R.documentElement, O = !_(R), (n = R.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), x.attributes = i(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), x.getElementsByTagName = i(function (t) {
                        return t.appendChild(R.createComment("")), !t.getElementsByTagName("*").length
                    }), x.getElementsByClassName = mt.test(R.getElementsByClassName), x.getById = i(function (t) {
                        return N.appendChild(t).id = j, !R.getElementsByName || !R.getElementsByName(j).length
                    }), x.getById ? (k.find.ID = function (t, e) {
                        if ("undefined" != typeof e.getElementById && O) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }, k.filter.ID = function (t) {
                        var e = t.replace(wt, xt);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete k.find.ID, k.filter.ID = function (t) {
                        var e = t.replace(wt, xt);
                        return function (t) {
                            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), k.find.TAG = x.getElementsByTagName ? function (t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, r = [], i = 0, o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, k.find.CLASS = x.getElementsByClassName && function (t, e) {
                        if ("undefined" != typeof e.getElementsByClassName && O) return e.getElementsByClassName(t)
                    }, B = [], M = [], (x.qsa = mt.test(R.querySelectorAll)) && (i(function (t) {
                        N.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + j + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + j + "+*").length || M.push(".#.+[+~]")
                    }), i(function (t) {
                        var e = R.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                    })), (x.matchesSelector = mt.test(P = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && i(function (t) {
                        x.disconnectedMatch = P.call(t, "div"), P.call(t, "[s!='']:x"), B.push("!=", ot)
                    }), M = M.length && new RegExp(M.join("|")), B = B.length && new RegExp(B.join("|")), e = mt.test(N.compareDocumentPosition), q = e || mt.test(N.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
                        return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                    } : function (t, e) {
                        if (e) for (; e = e.parentNode;) if (e === t) return !0;
                        return !1
                    }, V = e ? function (t, e) {
                        if (t === e) return I = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === R || t.ownerDocument === z && q(z, t) ? -1 : e === R || e.ownerDocument === z && q(z, e) ? 1 : L ? tt(L, t) - tt(L, e) : 0 : 4 & n ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return I = !0, 0;
                        var n, r = 0, i = t.parentNode, o = e.parentNode, a = [t], u = [e];
                        if (!i || !o) return t === R ? -1 : e === R ? 1 : i ? -1 : o ? 1 : L ? tt(L, t) - tt(L, e) : 0;
                        if (i === o) return s(t, e);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (n = e; n = n.parentNode;) u.unshift(n);
                        for (; a[r] === u[r];) r++;
                        return r ? s(a[r], u[r]) : a[r] === z ? -1 : u[r] === z ? 1 : 0
                    }, R) : R
                }, e.matches = function (t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function (t, n) {
                    if ((t.ownerDocument || t) !== R && D(t), n = n.replace(ct, "='$1']"), x.matchesSelector && O && !W[n + " "] && (!B || !B.test(n)) && (!M || !M.test(n))) try {
                        var r = P.call(t, n);
                        if (r || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                    } catch (t) {
                    }
                    return e(n, R, null, [t]).length > 0
                }, e.contains = function (t, e) {
                    return (t.ownerDocument || t) !== R && D(t), q(t, e)
                }, e.attr = function (t, e) {
                    (t.ownerDocument || t) !== R && D(t);
                    var n = k.attrHandle[e.toLowerCase()],
                        r = n && G.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !O) : void 0;
                    return void 0 !== r ? r : x.attributes || !O ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }, e.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function (t) {
                    var e, n = [], r = 0, i = 0;
                    if (I = !x.detectDuplicates, L = !x.sortStable && t.slice(0), t.sort(V), I) {
                        for (; e = t[i++];) e === t[i] && (r = n.push(i));
                        for (; r--;) t.splice(n[r], 1)
                    }
                    return L = null, t
                }, S = e.getText = function (t) {
                    var e, n = "", r = 0, i = t.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += S(t)
                        } else if (3 === i || 4 === i) return t.nodeValue
                    } else for (; e = t[r++];) n += S(e);
                    return n
                }, k = e.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: ft,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        }, CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        }, PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(wt, xt).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        }, CLASS: function (t) {
                            var e = U[t + " "];
                            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && U(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                        }, ATTR: function (t, n, r) {
                            return function (i) {
                                var o = e.attr(i, t);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                            }
                        }, CHILD: function (t, e, n, r, i) {
                            var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                            return 1 === r && 0 === i ? function (t) {
                                return !!t.parentNode
                            } : function (e, n, u) {
                                var l, c, h, p, f, d, g = o !== s ? "nextSibling" : "previousSibling", m = e.parentNode,
                                    y = a && e.nodeName.toLowerCase(), v = !u && !a, b = !1;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (p = e; p = p[g];) if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                            d = g = "only" === t && !d && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (d = [s ? m.firstChild : m.lastChild], s && v) {
                                        for (p = m, h = p[j] || (p[j] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), l = c[t] || [], f = l[0] === $ && l[1], b = f && l[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || d.pop();) if (1 === p.nodeType && ++b && p === e) {
                                            c[t] = [$, f, b];
                                            break
                                        }
                                    } else if (v && (p = e, h = p[j] || (p[j] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), l = c[t] || [], f = l[0] === $ && l[1], b = f), b === !1) for (; (p = ++f && p && p[g] || (b = f = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (v && (h = p[j] || (p[j] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), c[t] = [$, b]), p !== e));) ;
                                    return b -= i, b === r || b % r === 0 && b / r >= 0
                                }
                            }
                        }, PSEUDO: function (t, n) {
                            var i,
                                o = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[j] ? o(n) : o.length > 1 ? (i = [t, t, "", n], k.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) {
                                for (var r, i = o(t, n), s = i.length; s--;) r = tt(t, i[s]), t[r] = !(e[r] = i[s])
                            }) : function (t) {
                                return o(t, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function (t) {
                            var e = [], n = [], i = C(t.replace(at, "$1"));
                            return i[j] ? r(function (t, e, n, r) {
                                for (var o, s = i(t, null, r, []), a = t.length; a--;) (o = s[a]) && (t[a] = !(e[a] = o))
                            }) : function (t, r, o) {
                                return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                            }
                        }), has: r(function (t) {
                            return function (n) {
                                return e(t, n).length > 0
                            }
                        }), contains: r(function (t) {
                            return t = t.replace(wt, xt), function (e) {
                                return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                            }
                        }), lang: r(function (t) {
                            return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(), function (e) {
                                var n;
                                do if (n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }), target: function (e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        }, root: function (t) {
                            return t === N
                        }, focus: function (t) {
                            return t === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        }, enabled: function (t) {
                            return t.disabled === !1
                        }, disabled: function (t) {
                            return t.disabled === !0
                        }, checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        }, selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        }, empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0
                        }, parent: function (t) {
                            return !k.pseudos.empty(t)
                        }, header: function (t) {
                            return gt.test(t.nodeName)
                        }, input: function (t) {
                            return dt.test(t.nodeName)
                        }, button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        }, text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        }, first: l(function () {
                            return [0]
                        }), last: l(function (t, e) {
                            return [e - 1]
                        }), eq: l(function (t, e, n) {
                            return [n < 0 ? n + e : n]
                        }), even: l(function (t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        }), odd: l(function (t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        }), lt: l(function (t, e, n) {
                            for (var r = n < 0 ? n + e : n; --r >= 0;) t.push(r);
                            return t
                        }), gt: l(function (t, e, n) {
                            for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                            return t
                        })
                    }
                }, k.pseudos.nth = k.pseudos.eq;
                for (w in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) k.pseudos[w] = a(w);
                for (w in {submit: !0, reset: !0}) k.pseudos[w] = u(w);
                return h.prototype = k.filters = k.pseudos, k.setFilters = new h, T = e.tokenize = function (t, n) {
                    var r, i, o, s, a, u, l, c = H[t + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (a = t, u = [], l = k.preFilter; a;) {
                        r && !(i = ut.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = lt.exec(a)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(at, " ")
                        }), a = a.slice(r.length));
                        for (s in k.filter) !(i = ft[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: s,
                            matches: i
                        }), a = a.slice(r.length));
                        if (!r) break
                    }
                    return n ? a.length : a ? e.error(t) : H(t, u).slice(0)
                }, C = e.compile = function (t, e) {
                    var n, r = [], i = [], o = W[t + " "];
                    if (!o) {
                        for (e || (e = T(t)), n = e.length; n--;) o = v(e[n]), o[j] ? r.push(o) : i.push(o);
                        o = W(t, b(i, r)), o.selector = t
                    }
                    return o
                }, E = e.select = function (t, e, n, r) {
                    var i, o, s, a, u, l = "function" == typeof t && t, h = !r && T(t = l.selector || t);
                    if (n = n || [], 1 === h.length) {
                        if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && O && k.relative[o[1].type]) {
                            if (e = (k.find.ID(s.matches[0].replace(wt, xt), e) || [])[0], !e) return n;
                            l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (i = ft.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i], !k.relative[a = s.type]);) if ((u = k.find[a]) && (r = u(s.matches[0].replace(wt, xt), vt.test(o[0].type) && c(e.parentNode) || e))) {
                            if (o.splice(i, 1), t = r.length && p(o), !t) return Q.apply(n, r), n;
                            break
                        }
                    }
                    return (l || C(t, h))(r, e, !O, n, !e || vt.test(t) && c(e.parentNode) || e), n
                }, x.sortStable = j.split("").sort(V).join("") === j, x.detectDuplicates = !!I, D(), x.sortDetached = i(function (t) {
                    return 1 & t.compareDocumentPosition(R.createElement("div"))
                }), i(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), x.attributes && i(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function (t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), i(function (t) {
                    return null == t.getAttribute("disabled")
                }) || o(et, function (t, e, n) {
                    var r;
                    if (!n) return t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }), e
            }(n);
        lt.find = dt, lt.expr = dt.selectors, lt.expr[":"] = lt.expr.pseudos, lt.uniqueSort = lt.unique = dt.uniqueSort, lt.text = dt.getText, lt.isXMLDoc = dt.isXML, lt.contains = dt.contains;
        var gt = function (t, e, n) {
            for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (i && lt(t).is(n)) break;
                r.push(t)
            }
            return r
        }, mt = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }, yt = lt.expr.match.needsContext, vt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, bt = /^.[^:#\[\.,]*$/;
        lt.filter = function (t, e, n) {
            var r = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? lt.find.matchesSelector(r, t) ? [r] : [] : lt.find.matches(t, lt.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, lt.fn.extend({
            find: function (t) {
                var e, n = this.length, r = [], i = this;
                if ("string" != typeof t) return this.pushStack(lt(t).filter(function () {
                    for (e = 0; e < n; e++) if (lt.contains(i[e], this)) return !0
                }));
                for (e = 0; e < n; e++) lt.find(t, i[e], r);
                return r = this.pushStack(n > 1 ? lt.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
            }, filter: function (t) {
                return this.pushStack(a(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(a(this, t || [], !0))
            }, is: function (t) {
                return !!a(this, "string" == typeof t && yt.test(t) ? lt(t) : t || [], !1).length
            }
        });
        var wt, xt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, kt = lt.fn.init = function (t, e, n) {
            var r, i;
            if (!t) return this;
            if (n = n || wt, "string" == typeof t) {
                if (r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : xt.exec(t), !r || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (r[1]) {
                    if (e = e instanceof lt ? e[0] : e, lt.merge(this, lt.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), vt.test(r[1]) && lt.isPlainObject(e)) for (r in e) lt.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this
                }
                return i = Z.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = Z, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : lt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(lt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), lt.makeArray(t, this))
        };
        kt.prototype = lt.fn, wt = lt(Z);
        var St = /^(?:parents|prev(?:Until|All))/, _t = {children: !0, contents: !0, next: !0, prev: !0};
        lt.fn.extend({
            has: function (t) {
                var e = lt(t, this), n = e.length;
                return this.filter(function () {
                    for (var t = 0; t < n; t++) if (lt.contains(this, e[t])) return !0
                })
            }, closest: function (t, e) {
                for (var n, r = 0, i = this.length, o = [], s = yt.test(t) || "string" != typeof t ? lt(t, e || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && lt.find.matchesSelector(n, t))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? lt.uniqueSort(o) : o)
            }, index: function (t) {
                return t ? "string" == typeof t ? rt.call(lt(t), this[0]) : rt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(lt.uniqueSort(lt.merge(this.get(), lt(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), lt.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return gt(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return gt(t, "parentNode", n)
            }, next: function (t) {
                return u(t, "nextSibling")
            }, prev: function (t) {
                return u(t, "previousSibling")
            }, nextAll: function (t) {
                return gt(t, "nextSibling")
            }, prevAll: function (t) {
                return gt(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return gt(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return gt(t, "previousSibling", n)
            }, siblings: function (t) {
                return mt((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return mt(t.firstChild)
            }, contents: function (t) {
                return t.contentDocument || lt.merge([], t.childNodes)
            }
        }, function (t, e) {
            lt.fn[t] = function (n, r) {
                var i = lt.map(this, e, n);
                return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = lt.filter(r, i)), this.length > 1 && (_t[t] || lt.uniqueSort(i), St.test(t) && i.reverse()), this.pushStack(i)
            }
        });
        var Tt = /\S+/g;
        lt.Callbacks = function (t) {
            t = "string" == typeof t ? l(t) : lt.extend({}, t);
            var e, n, r, i, o = [], s = [], a = -1, u = function () {
                for (i = t.once, r = e = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length;) o[a].apply(n[0], n[1]) === !1 && t.stopOnFalse && (a = o.length, n = !1);
                t.memory || (n = !1), e = !1, i && (o = n ? [] : "")
            }, c = {
                add: function () {
                    return o && (n && !e && (a = o.length - 1, s.push(n)), function e(n) {
                        lt.each(n, function (n, r) {
                            lt.isFunction(r) ? t.unique && c.has(r) || o.push(r) : r && r.length && "string" !== lt.type(r) && e(r)
                        })
                    }(arguments), n && !e && u()), this
                }, remove: function () {
                    return lt.each(arguments, function (t, e) {
                        for (var n; (n = lt.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                    }), this
                }, has: function (t) {
                    return t ? lt.inArray(t, o) > -1 : o.length > 0
                }, empty: function () {
                    return o && (o = []), this
                }, disable: function () {
                    return i = s = [], o = n = "", this
                }, disabled: function () {
                    return !o
                }, lock: function () {
                    return i = s = [], n || (o = n = ""), this
                }, locked: function () {
                    return !!i
                }, fireWith: function (t, n) {
                    return i || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || u()), this
                }, fire: function () {
                    return c.fireWith(this, arguments), this
                }, fired: function () {
                    return !!r
                }
            };
            return c
        }, lt.extend({
            Deferred: function (t) {
                var e = [["resolve", "done", lt.Callbacks("once memory"), "resolved"], ["reject", "fail", lt.Callbacks("once memory"), "rejected"], ["notify", "progress", lt.Callbacks("memory")]],
                    n = "pending", r = {
                        state: function () {
                            return n
                        }, always: function () {
                            return i.done(arguments).fail(arguments), this
                        }, then: function () {
                            var t = arguments;
                            return lt.Deferred(function (n) {
                                lt.each(e, function (e, o) {
                                    var s = lt.isFunction(t[e]) && t[e];
                                    i[o[1]](function () {
                                        var t = s && s.apply(this, arguments);
                                        t && lt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? lt.extend(t, r) : r
                        }
                    }, i = {};
                return r.pipe = r.then, lt.each(e, function (t, o) {
                    var s = o[2], a = o[3];
                    r[o[1]] = s.add, a && s.add(function () {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function () {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = s.fireWith
                }), r.promise(i), t && t.call(i, i), i
            }, when: function (t) {
                var e, n, r, i = 0, o = tt.call(arguments), s = o.length,
                    a = 1 !== s || t && lt.isFunction(t.promise) ? s : 0, u = 1 === a ? t : lt.Deferred(),
                    l = function (t, n, r) {
                        return function (i) {
                            n[t] = this, r[t] = arguments.length > 1 ? tt.call(arguments) : i, r === e ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                        }
                    };
                if (s > 1) for (e = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && lt.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, e)).done(l(i, r, o)).fail(u.reject) : --a;
                return a || u.resolveWith(r, o), u.promise()
            }
        });
        var Ct;
        lt.fn.ready = function (t) {
            return lt.ready.promise().done(t), this
        }, lt.extend({
            isReady: !1, readyWait: 1, holdReady: function (t) {
                t ? lt.readyWait++ : lt.ready(!0)
            }, ready: function (t) {
                (t === !0 ? --lt.readyWait : lt.isReady) || (lt.isReady = !0, t !== !0 && --lt.readyWait > 0 || (Ct.resolveWith(Z, [lt]), lt.fn.triggerHandler && (lt(Z).triggerHandler("ready"), lt(Z).off("ready"))))
            }
        }), lt.ready.promise = function (t) {
            return Ct || (Ct = lt.Deferred(), "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? n.setTimeout(lt.ready) : (Z.addEventListener("DOMContentLoaded", c), n.addEventListener("load", c))), Ct.promise(t)
        }, lt.ready.promise();
        var Et = function (t, e, n, r, i, o, s) {
            var a = 0, u = t.length, l = null == n;
            if ("object" === lt.type(n)) {
                i = !0;
                for (a in n) Et(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== r && (i = !0, lt.isFunction(r) || (s = !0), l && (s ? (e.call(t, r), e = null) : (l = e, e = function (t, e, n) {
                return l.call(lt(t), n)
            })), e)) for (; a < u; a++) e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
            return i ? t : l ? e.call(t) : u ? e(t[0], n) : o
        }, At = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
        h.uid = 1, h.prototype = {
            register: function (t, e) {
                var n = e || {};
                return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            }, cache: function (t) {
                if (!At(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, At(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            }, set: function (t, e, n) {
                var r, i = this.cache(t);
                if ("string" == typeof e) i[e] = n; else for (r in e) i[r] = e[r];
                return i
            }, get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            }, access: function (t, e, n) {
                var r;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, lt.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
            }, remove: function (t, e) {
                var n, r, i, o = t[this.expando];
                if (void 0 !== o) {
                    if (void 0 === e) this.register(t); else {
                        lt.isArray(e) ? r = e.concat(e.map(lt.camelCase)) : (i = lt.camelCase(e), e in o ? r = [e, i] : (r = i, r = r in o ? [r] : r.match(Tt) || [])), n = r.length;
                        for (; n--;) delete o[r[n]]
                    }
                    (void 0 === e || lt.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            }, hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !lt.isEmptyObject(e)
            }
        };
        var Lt = new h, It = new h, Dt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Rt = /[A-Z]/g;
        lt.extend({
            hasData: function (t) {
                return It.hasData(t) || Lt.hasData(t)
            }, data: function (t, e, n) {
                return It.access(t, e, n)
            }, removeData: function (t, e) {
                It.remove(t, e)
            }, _data: function (t, e, n) {
                return Lt.access(t, e, n)
            }, _removeData: function (t, e) {
                Lt.remove(t, e)
            }
        }), lt.fn.extend({
            data: function (t, e) {
                var n, r, i, o = this[0], s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (i = It.get(o), 1 === o.nodeType && !Lt.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = lt.camelCase(r.slice(5)), p(o, r, i[r])));
                        Lt.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof t ? this.each(function () {
                    It.set(this, t)
                }) : Et(this, function (e) {
                    var n, r;
                    if (o && void 0 === e) {
                        if (n = It.get(o, t) || It.get(o, t.replace(Rt, "-$&").toLowerCase()), void 0 !== n) return n;
                        if (r = lt.camelCase(t), n = It.get(o, r), void 0 !== n) return n;
                        if (n = p(o, r, void 0), void 0 !== n) return n
                    } else r = lt.camelCase(t), this.each(function () {
                        var n = It.get(this, r);
                        It.set(this, r, e), t.indexOf("-") > -1 && void 0 !== n && It.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            }, removeData: function (t) {
                return this.each(function () {
                    It.remove(this, t)
                })
            }
        }), lt.extend({
            queue: function (t, e, n) {
                var r;
                if (t) return e = (e || "fx") + "queue", r = Lt.get(t, e), n && (!r || lt.isArray(n) ? r = Lt.access(t, e, lt.makeArray(n)) : r.push(n)), r || []
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = lt.queue(t, e), r = n.length, i = n.shift(), o = lt._queueHooks(t, e), s = function () {
                    lt.dequeue(t, e)
                };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, s, o)), !r && o && o.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return Lt.get(t, n) || Lt.access(t, n, {
                    empty: lt.Callbacks("once memory").add(function () {
                        Lt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), lt.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? lt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = lt.queue(this, t, e);
                    lt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && lt.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    lt.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, r = 1, i = lt.Deferred(), o = this, s = this.length, a = function () {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = Lt.get(o[s], t + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
                return a(), i.promise(e)
            }
        });
        var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ot = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"), Mt = ["Top", "Right", "Bottom", "Left"],
            Bt = function (t, e) {
                return t = e || t, "none" === lt.css(t, "display") || !lt.contains(t.ownerDocument, t)
            }, Pt = /^(?:checkbox|radio)$/i, qt = /<([\w:-]+)/, jt = /^$|\/(?:java|ecma)script/i, zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
        var $t = /<|&#?\w+;/;
        !function () {
            var t = Z.createDocumentFragment(), e = t.appendChild(Z.createElement("div")), n = Z.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), at.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", at.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Ft = /^key/, Ut = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ht = /^([^.]*)(?:\.(.+)|)/;
        lt.event = {
            global: {},
            add: function (t, e, n, r, i) {
                var o, s, a, u, l, c, h, p, f, d, g, m = Lt.get(t);
                if (m) for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = lt.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
                    return "undefined" != typeof lt && lt.event.triggered !== e.type ? lt.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(Tt) || [""], l = e.length; l--;) a = Ht.exec(e[l]) || [], f = g = a[1], d = (a[2] || "").split(".").sort(), f && (h = lt.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, h = lt.event.special[f] || {}, c = lt.extend({
                    type: f,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && lt.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, o), (p = u[f]) || (p = u[f] = [], p.delegateCount = 0, h.setup && h.setup.call(t, r, d, s) !== !1 || t.addEventListener && t.addEventListener(f, s)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), lt.event.global[f] = !0)
            },
            remove: function (t, e, n, r, i) {
                var o, s, a, u, l, c, h, p, f, d, g, m = Lt.hasData(t) && Lt.get(t);
                if (m && (u = m.events)) {
                    for (e = (e || "").match(Tt) || [""], l = e.length; l--;) if (a = Ht.exec(e[l]) || [], f = g = a[1], d = (a[2] || "").split(".").sort(), f) {
                        for (h = lt.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, p = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                        c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
                        s && !p.length && (h.teardown && h.teardown.call(t, d, m.handle) !== !1 || lt.removeEvent(t, f, m.handle), delete u[f])
                    } else for (f in u) lt.event.remove(t, f + e[l], n, r, !0);
                    lt.isEmptyObject(u) && Lt.remove(t, "handle events")
                }
            },
            dispatch: function (t) {
                t = lt.event.fix(t);
                var e, n, r, i, o, s = [], a = tt.call(arguments), u = (Lt.get(this, "events") || {})[t.type] || [],
                    l = lt.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                    for (s = lt.event.handlers.call(this, t, u), e = 0; (i = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, r = ((lt.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var n, r, i, o, s = [], a = e.delegateCount, u = t.target;
                if (a && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                    for (r = [], n = 0; n < a; n++) o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? lt(i, this).index(u) > -1 : lt.find(i, this, null, [u]).length), r[i] && r.push(o);
                    r.length && s.push({elem: u, handlers: r})
                }
                return a < e.length && s.push({elem: this, handlers: e.slice(a)}), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var n, r, i, o = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Z, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            fix: function (t) {
                if (t[lt.expando]) return t;
                var e, n, r, i = t.type, o = t, s = this.fixHooks[i];
                for (s || (this.fixHooks[i] = s = Ut.test(i) ? this.mouseHooks : Ft.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, t = new lt.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
                return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== b() && this.focus) return this.focus(), !1
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === b() && this.blur) return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && lt.nodeName(this, "input")) return this.click(), !1
                    }, _default: function (t) {
                        return lt.nodeName(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, lt.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, lt.Event = function (t, e) {
            return this instanceof lt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : v) : this.type = t, e && lt.extend(this, e), this.timeStamp = t && t.timeStamp || lt.now(), void (this[lt.expando] = !0)) : new lt.Event(t, e)
        }, lt.Event.prototype = {
            constructor: lt.Event,
            isDefaultPrevented: v,
            isPropagationStopped: v,
            isImmediatePropagationStopped: v,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = y, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = y, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = y, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, lt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            lt.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, r = this, i = t.relatedTarget, o = t.handleObj;
                    return i && (i === r || lt.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), lt.fn.extend({
            on: function (t, e, n, r) {
                return w(this, t, e, n, r)
            }, one: function (t, e, n, r) {
                return w(this, t, e, n, r, 1)
            }, off: function (t, e, n) {
                var r, i;
                if (t && t.preventDefault && t.handleObj) return r = t.handleObj, lt(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof t) {
                    for (i in t) this.off(i, e, t[i]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = v), this.each(function () {
                    lt.event.remove(this, t, n, e)
                })
            }
        });
        var Wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Vt = /<script|<style|<link/i, Xt = /checked\s*(?:[^=]|=\s*.checked.)/i, Gt = /^true\/(.*)/,
            Yt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        lt.extend({
            htmlPrefilter: function (t) {
                return t.replace(Wt, "<$1></$2>")
            }, clone: function (t, e, n) {
                var r, i, o, s, a = t.cloneNode(!0), u = lt.contains(t.ownerDocument, t);
                if (!(at.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || lt.isXMLDoc(t))) for (s = d(a), o = d(t), r = 0, i = o.length; r < i; r++) T(o[r], s[r]);
                if (e) if (n) for (o = o || d(t), s = s || d(a), r = 0, i = o.length; r < i; r++) _(o[r], s[r]); else _(t, a);
                return s = d(a, "script"), s.length > 0 && g(s, !u && d(t, "script")), a
            }, cleanData: function (t) {
                for (var e, n, r, i = lt.event.special, o = 0; void 0 !== (n = t[o]); o++) if (At(n)) {
                    if (e = n[Lt.expando]) {
                        if (e.events) for (r in e.events) i[r] ? lt.event.remove(n, r) : lt.removeEvent(n, r, e.handle);
                        n[Lt.expando] = void 0
                    }
                    n[It.expando] && (n[It.expando] = void 0)
                }
            }
        }), lt.fn.extend({
            domManip: C, detach: function (t) {
                return E(this, t, !0)
            }, remove: function (t) {
                return E(this, t)
            }, text: function (t) {
                return Et(this, function (t) {
                    return void 0 === t ? lt.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            }, append: function () {
                return C(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = x(this, t);
                        e.appendChild(t)
                    }
                })
            }, prepend: function () {
                return C(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = x(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return C(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return C(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (lt.cleanData(d(t, !1)), t.textContent = "");
                return this
            }, clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return lt.clone(this, t, e)
                })
            }, html: function (t) {
                return Et(this, function (t) {
                    var e = this[0] || {}, n = 0, r = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Vt.test(t) && !zt[(qt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = lt.htmlPrefilter(t);
                        try {
                            for (; n < r; n++) e = this[n] || {}, 1 === e.nodeType && (lt.cleanData(d(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = [];
                return C(this, arguments, function (e) {
                    var n = this.parentNode;
                    lt.inArray(this, t) < 0 && (lt.cleanData(d(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), lt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            lt.fn[t] = function (t) {
                for (var n, r = [], i = lt(t), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), lt(i[s])[e](n), nt.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Kt, Jt = {HTML: "block", BODY: "block"}, Qt = /^margin/,
            Zt = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"), te = function (t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = n), e.getComputedStyle(t)
            }, ee = function (t, e, n, r) {
                var i, o, s = {};
                for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                i = n.apply(t, r || []);
                for (o in e) t.style[o] = s[o];
                return i
            }, ne = Z.documentElement;
        !function () {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", ne.appendChild(s);
                var t = n.getComputedStyle(a);
                e = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, a.style.marginRight = "50%", i = "4px" === t.marginRight, ne.removeChild(s)
            }

            var e, r, i, o, s = Z.createElement("div"), a = Z.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", at.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), lt.extend(at, {
                pixelPosition: function () {
                    return t(), e
                }, boxSizingReliable: function () {
                    return null == r && t(), r
                }, pixelMarginRight: function () {
                    return null == r && t(), i
                }, reliableMarginLeft: function () {
                    return null == r && t(), o
                }, reliableMarginRight: function () {
                    var t, e = a.appendChild(Z.createElement("div"));
                    return e.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", a.style.width = "1px", ne.appendChild(s), t = !parseFloat(n.getComputedStyle(e).marginRight), ne.removeChild(s), a.removeChild(e), t
                }
            }))
        }();
        var re = /^(none|table(?!-c[ea]).+)/, ie = {position: "absolute", visibility: "hidden", display: "block"},
            oe = {letterSpacing: "0", fontWeight: "400"}, se = ["Webkit", "O", "Moz", "ms"],
            ae = Z.createElement("div").style;
        lt.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = I(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {float: "cssFloat"},
            style: function (t, e, n, r) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var i, o, s, a = lt.camelCase(e), u = t.style;
                    return e = lt.cssProps[a] || (lt.cssProps[a] = R(a) || a), s = lt.cssHooks[e] || lt.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(t, !1, r)) ? i : u[e] : (o = typeof n, "string" === o && (i = Ot.exec(n)) && i[1] && (n = f(t, e, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (lt.cssNumber[a] ? "" : "px")), at.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, r)) || (u[e] = n)), void 0)
                }
            },
            css: function (t, e, n, r) {
                var i, o, s, a = lt.camelCase(e);
                return e = lt.cssProps[a] || (lt.cssProps[a] = R(a) || a), s = lt.cssHooks[e] || lt.cssHooks[a], s && "get" in s && (i = s.get(t, !0, n)), void 0 === i && (i = I(t, e, r)), "normal" === i && e in oe && (i = oe[e]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
            }
        }), lt.each(["height", "width"], function (t, e) {
            lt.cssHooks[e] = {
                get: function (t, n, r) {
                    if (n) return re.test(lt.css(t, "display")) && 0 === t.offsetWidth ? ee(t, ie, function () {
                        return M(t, e, r)
                    }) : M(t, e, r)
                }, set: function (t, n, r) {
                    var i, o = r && te(t), s = r && O(t, e, r, "border-box" === lt.css(t, "boxSizing", !1, o), o);
                    return s && (i = Ot.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = lt.css(t, e)), N(t, n, s)
                }
            }
        }), lt.cssHooks.marginLeft = D(at.reliableMarginLeft, function (t, e) {
            if (e) return (parseFloat(I(t, "marginLeft")) || t.getBoundingClientRect().left - ee(t, {marginLeft: 0}, function () {
                return t.getBoundingClientRect().left
            })) + "px"
        }), lt.cssHooks.marginRight = D(at.reliableMarginRight, function (t, e) {
            if (e) return ee(t, {display: "inline-block"}, I, [t, "marginRight"])
        }), lt.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            lt.cssHooks[t + e] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[t + Mt[r] + e] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, Qt.test(t) || (lt.cssHooks[t + e].set = N)
        }), lt.fn.extend({
            css: function (t, e) {
                return Et(this, function (t, e, n) {
                    var r, i, o = {}, s = 0;
                    if (lt.isArray(e)) {
                        for (r = te(t), i = e.length; s < i; s++) o[e[s]] = lt.css(t, e[s], !1, r);
                        return o
                    }
                    return void 0 !== n ? lt.style(t, e, n) : lt.css(t, e)
                }, t, e, arguments.length > 1)
            }, show: function () {
                return B(this, !0)
            }, hide: function () {
                return B(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Bt(this) ? lt(this).show() : lt(this).hide()
                })
            }
        }), lt.Tween = P, P.prototype = {
            constructor: P, init: function (t, e, n, r, i, o) {
                this.elem = t, this.prop = n, this.easing = i || lt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (lt.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = P.propHooks[this.prop];
                return t && t.get ? t.get(this) : P.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = P.propHooks[this.prop];
                return this.options.duration ? this.pos = e = lt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
            }
        }, P.prototype.init.prototype = P.prototype, P.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = lt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                }, set: function (t) {
                    lt.fx.step[t.prop] ? lt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[lt.cssProps[t.prop]] && !lt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : lt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, lt.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, _default: "swing"
        }, lt.fx = P.prototype.init, lt.fx.step = {};
        var ue, le, ce = /^(?:toggle|show|hide)$/, he = /queueHooks$/;
        lt.Animation = lt.extend(U, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return f(n.elem, t, Ot.exec(e), n), n
                }]
            }, tweener: function (t, e) {
                lt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Tt);
                for (var n, r = 0, i = t.length; r < i; r++) n = t[r], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(e)
            }, prefilters: [$], prefilter: function (t, e) {
                e ? U.prefilters.unshift(t) : U.prefilters.push(t)
            }
        }), lt.speed = function (t, e, n) {
            var r = t && "object" == typeof t ? lt.extend({}, t) : {
                complete: n || !n && e || lt.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !lt.isFunction(e) && e
            };
            return r.duration = lt.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in lt.fx.speeds ? lt.fx.speeds[r.duration] : lt.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                lt.isFunction(r.old) && r.old.call(this), r.queue && lt.dequeue(this, r.queue)
            }, r
        }, lt.fn.extend({
            fadeTo: function (t, e, n, r) {
                return this.filter(Bt).css("opacity", 0).show().end().animate({opacity: e}, t, n, r)
            }, animate: function (t, e, n, r) {
                var i = lt.isEmptyObject(t), o = lt.speed(e, n, r), s = function () {
                    var e = U(this, lt.extend({}, t), o);
                    (i || Lt.get(this, "finish")) && e.stop(!0)
                };
                return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            }, stop: function (t, e, n) {
                var r = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, i = null != t && t + "queueHooks", o = lt.timers, s = Lt.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]); else for (i in s) s[i] && s[i].stop && he.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                    !e && n || lt.dequeue(this, t)
                })
            }, finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = Lt.get(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = lt.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, lt.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < s; e++) r[e] && r[e].finish && r[e].finish.call(this);
                    delete n.finish
                })
            }
        }), lt.each(["toggle", "show", "hide"], function (t, e) {
            var n = lt.fn[e];
            lt.fn[e] = function (t, r, i) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(j(e, !0), t, r, i)
            }
        }), lt.each({
            slideDown: j("show"),
            slideUp: j("hide"),
            slideToggle: j("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            lt.fn[t] = function (t, n, r) {
                return this.animate(e, t, n, r)
            }
        }), lt.timers = [], lt.fx.tick = function () {
            var t, e = 0, n = lt.timers;
            for (ue = lt.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || lt.fx.stop(), ue = void 0
        }, lt.fx.timer = function (t) {
            lt.timers.push(t), t() ? lt.fx.start() : lt.timers.pop()
        }, lt.fx.interval = 13, lt.fx.start = function () {
            le || (le = n.setInterval(lt.fx.tick, lt.fx.interval))
        }, lt.fx.stop = function () {
            n.clearInterval(le), le = null
        }, lt.fx.speeds = {slow: 600, fast: 200, _default: 400}, lt.fn.delay = function (t, e) {
            return t = lt.fx ? lt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, r) {
                var i = n.setTimeout(e, t);
                r.stop = function () {
                    n.clearTimeout(i)
                }
            })
        }, function () {
            var t = Z.createElement("input"), e = Z.createElement("select"),
                n = e.appendChild(Z.createElement("option"));
            t.type = "checkbox", at.checkOn = "" !== t.value, at.optSelected = n.selected, e.disabled = !0, at.optDisabled = !n.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", at.radioValue = "t" === t.value
        }();
        var pe, fe = lt.expr.attrHandle;
        lt.fn.extend({
            attr: function (t, e) {
                return Et(this, lt.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    lt.removeAttr(this, t)
                })
            }
        }), lt.extend({
            attr: function (t, e, n) {
                var r, i, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? lt.prop(t, e, n) : (1 === o && lt.isXMLDoc(t) || (e = e.toLowerCase(), i = lt.attrHooks[e] || (lt.expr.match.bool.test(e) ? pe : void 0)), void 0 !== n ? null === n ? void lt.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = lt.find.attr(t, e), null == r ? void 0 : r))
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!at.radioValue && "radio" === e && lt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }, removeAttr: function (t, e) {
                var n, r, i = 0, o = e && e.match(Tt);
                if (o && 1 === t.nodeType) for (; n = o[i++];) r = lt.propFix[n] || n, lt.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
            }
        }), pe = {
            set: function (t, e, n) {
                return e === !1 ? lt.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, lt.each(lt.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = fe[e] || lt.find.attr;
            fe[e] = function (t, e, r) {
                var i, o;
                return r || (o = fe[e], fe[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, fe[e] = o), i
            }
        });
        var de = /^(?:input|select|textarea|button)$/i, ge = /^(?:a|area)$/i;
        lt.fn.extend({
            prop: function (t, e) {
                return Et(this, lt.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return this.each(function () {
                    delete this[lt.propFix[t] || t]
                })
            }
        }), lt.extend({
            prop: function (t, e, n) {
                var r, i, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && lt.isXMLDoc(t) || (e = lt.propFix[e] || e, i = lt.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = lt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : de.test(t.nodeName) || ge.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), at.optSelected || (lt.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }, set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), lt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            lt.propFix[this.toLowerCase()] = this
        });
        var me = /[\t\r\n\f]/g;
        lt.fn.extend({
            addClass: function (t) {
                var e, n, r, i, o, s, a, u = 0;
                if (lt.isFunction(t)) return this.each(function (e) {
                    lt(this).addClass(t.call(this, e, H(this)))
                });
                if ("string" == typeof t && t) for (e = t.match(Tt) || []; n = this[u++];) if (i = H(n), r = 1 === n.nodeType && (" " + i + " ").replace(me, " ")) {
                    for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    a = lt.trim(r), i !== a && n.setAttribute("class", a)
                }
                return this
            }, removeClass: function (t) {
                var e, n, r, i, o, s, a, u = 0;
                if (lt.isFunction(t)) return this.each(function (e) {
                    lt(this).removeClass(t.call(this, e, H(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t) for (e = t.match(Tt) || []; n = this[u++];) if (i = H(n), r = 1 === n.nodeType && (" " + i + " ").replace(me, " ")) {
                    for (s = 0; o = e[s++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                    a = lt.trim(r), i !== a && n.setAttribute("class", a)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : lt.isFunction(t) ? this.each(function (n) {
                    lt(this).toggleClass(t.call(this, n, H(this), e), e)
                }) : this.each(function () {
                    var e, r, i, o;
                    if ("string" === n) for (r = 0, i = lt(this), o = t.match(Tt) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e); else void 0 !== t && "boolean" !== n || (e = H(this), e && Lt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Lt.get(this, "__className__") || ""))
                })
            }, hasClass: function (t) {
                var e, n, r = 0;
                for (e = " " + t + " "; n = this[r++];) if (1 === n.nodeType && (" " + H(n) + " ").replace(me, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var ye = /\r/g, ve = /[\x20\t\r\n\f]+/g;
        lt.fn.extend({
            val: function (t) {
                var e, n, r, i = this[0];
                {
                    if (arguments.length) return r = lt.isFunction(t), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (i = r ? t.call(this, n, lt(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : lt.isArray(i) && (i = lt.map(i, function (t) {
                            return null == t ? "" : t + ""
                        })), e = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                    });
                    if (i) return e = lt.valHooks[i.type] || lt.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ye, "") : null == n ? "" : n)
                }
            }
        }), lt.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = lt.find.attr(t, "value");
                        return null != e ? e : lt.trim(lt.text(t)).replace(ve, " ")
                    }
                }, select: {
                    get: function (t) {
                        for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++) if (n = r[u], (n.selected || u === i) && (at.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !lt.nodeName(n.parentNode, "optgroup"))) {
                            if (e = lt(n).val(), o) return e;
                            s.push(e)
                        }
                        return s
                    }, set: function (t, e) {
                        for (var n, r, i = t.options, o = lt.makeArray(e), s = i.length; s--;) r = i[s], (r.selected = lt.inArray(lt.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), lt.each(["radio", "checkbox"], function () {
            lt.valHooks[this] = {
                set: function (t, e) {
                    if (lt.isArray(e)) return t.checked = lt.inArray(lt(t).val(), e) > -1
                }
            }, at.checkOn || (lt.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var be = /^(?:focusinfocus|focusoutblur)$/;
        lt.extend(lt.event, {
            trigger: function (t, e, r, i) {
                var o, s, a, u, l, c, h, p = [r || Z], f = st.call(t, "type") ? t.type : t,
                    d = st.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = a = r = r || Z, 3 !== r.nodeType && 8 !== r.nodeType && !be.test(f + lt.event.triggered) && (f.indexOf(".") > -1 && (d = f.split("."), f = d.shift(), d.sort()), l = f.indexOf(":") < 0 && "on" + f, t = t[lt.expando] ? t : new lt.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = d.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), e = null == e ? [t] : lt.makeArray(e, [t]), h = lt.event.special[f] || {}, i || !h.trigger || h.trigger.apply(r, e) !== !1)) {
                    if (!i && !h.noBubble && !lt.isWindow(r)) {
                        for (u = h.delegateType || f, be.test(u + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                        a === (r.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || n)
                    }
                    for (o = 0; (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : h.bindType || f, c = (Lt.get(s, "events") || {})[t.type] && Lt.get(s, "handle"), c && c.apply(s, e), c = l && s[l], c && c.apply && At(s) && (t.result = c.apply(s, e), t.result === !1 && t.preventDefault());
                    return t.type = f, i || t.isDefaultPrevented() || h._default && h._default.apply(p.pop(), e) !== !1 || !At(r) || l && lt.isFunction(r[f]) && !lt.isWindow(r) && (a = r[l], a && (r[l] = null), lt.event.triggered = f, r[f](), lt.event.triggered = void 0, a && (r[l] = a)), t.result
                }
            }, simulate: function (t, e, n) {
                var r = lt.extend(new lt.Event, n, {type: t, isSimulated: !0});
                lt.event.trigger(r, null, e)
            }
        }), lt.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    lt.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return lt.event.trigger(t, e, n, !0)
            }
        }), lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            lt.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), lt.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), at.focusin = "onfocusin" in n, at.focusin || lt.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                lt.event.simulate(e, t.target, lt.event.fix(t))
            };
            lt.event.special[e] = {
                setup: function () {
                    var r = this.ownerDocument || this, i = Lt.access(r, e);
                    i || r.addEventListener(t, n, !0), Lt.access(r, e, (i || 0) + 1)
                }, teardown: function () {
                    var r = this.ownerDocument || this, i = Lt.access(r, e) - 1;
                    i ? Lt.access(r, e, i) : (r.removeEventListener(t, n, !0), Lt.remove(r, e))
                }
            }
        });
        var we = n.location, xe = lt.now(), ke = /\?/;
        lt.parseJSON = function (t) {
            return JSON.parse(t + "")
        }, lt.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + t), e
        };
        var Se = /#.*$/, _e = /([?&])_=[^&]*/, Te = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ce = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ee = /^(?:GET|HEAD)$/, Ae = /^\/\//,
            Le = {}, Ie = {}, De = "*/".concat("*"), Re = Z.createElement("a");
        Re.href = we.href, lt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: we.href,
                type: "GET",
                isLocal: Ce.test(we.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": De,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": lt.parseJSON, "text xml": lt.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? X(X(t, lt.ajaxSettings), e) : X(lt.ajaxSettings, t)
            },
            ajaxPrefilter: W(Le),
            ajaxTransport: W(Ie),
            ajax: function (t, e) {
                function r(t, e, r, a) {
                    var l, h, v, b, x, S = e;
                    2 !== w && (w = 2, u && n.clearTimeout(u), i = void 0, s = a || "", k.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = G(p, k, r)), b = Y(p, b, k, l), l ? (p.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (lt.lastModified[o] = x), x = k.getResponseHeader("etag"), x && (lt.etag[o] = x)), 204 === t || "HEAD" === p.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = b.state, h = b.data, v = b.error, l = !v)) : (v = S, !t && S || (S = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (e || S) + "", l ? g.resolveWith(f, [h, S, k]) : g.rejectWith(f, [k, S, v]), k.statusCode(y), y = void 0, c && d.trigger(l ? "ajaxSuccess" : "ajaxError", [k, p, l ? h : v]), m.fireWith(f, [k, S]), c && (d.trigger("ajaxComplete", [k, p]), --lt.active || lt.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, s, a, u, l, c, h, p = lt.ajaxSetup({}, e), f = p.context || p,
                    d = p.context && (f.nodeType || f.jquery) ? lt(f) : lt.event, g = lt.Deferred(),
                    m = lt.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, w = 0, x = "canceled",
                    k = {
                        readyState: 0, getResponseHeader: function (t) {
                            var e;
                            if (2 === w) {
                                if (!a) for (a = {}; e = Te.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        }, getAllResponseHeaders: function () {
                            return 2 === w ? s : null
                        }, setRequestHeader: function (t, e) {
                            var n = t.toLowerCase();
                            return w || (t = b[n] = b[n] || t, v[t] = e), this
                        }, overrideMimeType: function (t) {
                            return w || (p.mimeType = t), this
                        }, statusCode: function (t) {
                            var e;
                            if (t) if (w < 2) for (e in t) y[e] = [y[e], t[e]]; else k.always(t[k.status]);
                            return this
                        }, abort: function (t) {
                            var e = t || x;
                            return i && i.abort(e), r(0, e), this
                        }
                    };
                if (g.promise(k).complete = m.add, k.success = k.done, k.error = k.fail, p.url = ((t || p.url || we.href) + "").replace(Se, "").replace(Ae, we.protocol + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = lt.trim(p.dataType || "*").toLowerCase().match(Tt) || [""], null == p.crossDomain) {
                    l = Z.createElement("a");
                    try {
                        l.href = p.url, l.href = l.href, p.crossDomain = Re.protocol + "//" + Re.host != l.protocol + "//" + l.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = lt.param(p.data, p.traditional)), V(Le, p, e, k), 2 === w) return k;
                c = lt.event && p.global, c && 0 === lt.active++ && lt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ee.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (ke.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = _e.test(o) ? o.replace(_e, "$1_=" + xe++) : o + (ke.test(o) ? "&" : "?") + "_=" + xe++)), p.ifModified && (lt.lastModified[o] && k.setRequestHeader("If-Modified-Since", lt.lastModified[o]), lt.etag[o] && k.setRequestHeader("If-None-Match", lt.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || e.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + De + "; q=0.01" : "") : p.accepts["*"]);
                for (h in p.headers) k.setRequestHeader(h, p.headers[h]);
                if (p.beforeSend && (p.beforeSend.call(f, k, p) === !1 || 2 === w)) return k.abort();
                x = "abort";
                for (h in {success: 1, error: 1, complete: 1}) k[h](p[h]);
                if (i = V(Ie, p, e, k)) {
                    if (k.readyState = 1, c && d.trigger("ajaxSend", [k, p]), 2 === w) return k;
                    p.async && p.timeout > 0 && (u = n.setTimeout(function () {
                        k.abort("timeout")
                    }, p.timeout));
                    try {
                        w = 1, i.send(v, r)
                    } catch (t) {
                        if (!(w < 2)) throw t;
                        r(-1, t)
                    }
                } else r(-1, "No Transport");
                return k
            },
            getJSON: function (t, e, n) {
                return lt.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return lt.get(t, void 0, e, "script")
            }
        }), lt.each(["get", "post"], function (t, e) {
            lt[e] = function (t, n, r, i) {
                return lt.isFunction(n) && (i = i || r, r = n, n = void 0), lt.ajax(lt.extend({
                    url: t,
                    type: e,
                    dataType: i,
                    data: n,
                    success: r
                }, lt.isPlainObject(t) && t))
            }
        }), lt._evalUrl = function (t) {
            return lt.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
        }, lt.fn.extend({
            wrapAll: function (t) {
                var e;
                return lt.isFunction(t) ? this.each(function (e) {
                    lt(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = lt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            }, wrapInner: function (t) {
                return lt.isFunction(t) ? this.each(function (e) {
                    lt(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = lt(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = lt.isFunction(t);
                return this.each(function (n) {
                    lt(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), lt.expr.filters.hidden = function (t) {
            return !lt.expr.filters.visible(t)
        }, lt.expr.filters.visible = function (t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var Ne = /%20/g, Oe = /\[\]$/, Me = /\r?\n/g, Be = /^(?:submit|button|image|reset|file)$/i,
            Pe = /^(?:input|select|textarea|keygen)/i;
        lt.param = function (t, e) {
            var n, r = [], i = function (t, e) {
                e = lt.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (void 0 === e && (e = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(t) || t.jquery && !lt.isPlainObject(t)) lt.each(t, function () {
                i(this.name, this.value)
            }); else for (n in t) K(n, t[n], e, i);
            return r.join("&").replace(Ne, "+")
        }, lt.fn.extend({
            serialize: function () {
                return lt.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = lt.prop(this, "elements");
                    return t ? lt.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !lt(this).is(":disabled") && Pe.test(this.nodeName) && !Be.test(t) && (this.checked || !Pt.test(t))
                }).map(function (t, e) {
                    var n = lt(this).val();
                    return null == n ? null : lt.isArray(n) ? lt.map(n, function (t) {
                        return {name: e.name, value: t.replace(Me, "\r\n")}
                    }) : {name: e.name, value: n.replace(Me, "\r\n")}
                }).get()
            }
        }), lt.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (t) {
            }
        };
        var qe = {0: 200, 1223: 204}, je = lt.ajaxSettings.xhr();
        at.cors = !!je && "withCredentials" in je, at.ajax = je = !!je, lt.ajaxTransport(function (t) {
            var e, r;
            if (at.cors || je && !t.crossDomain) return {
                send: function (i, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) a.setRequestHeader(s, i[s]);
                    e = function (t) {
                        return function () {
                            e && (e = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(qe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                        }
                    }, a.onload = e(), r = a.onerror = e("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
                        4 === a.readyState && n.setTimeout(function () {
                            e && r()
                        })
                    }, e = e("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                }, abort: function () {
                    e && e()
                }
            }
        }), lt.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (t) {
                    return lt.globalEval(t), t
                }
            }
        }), lt.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), lt.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function (r, i) {
                        e = lt("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                        }), Z.head.appendChild(e[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }
        });
        var ze = [], $e = /(=)\?(?=&|$)|\?\?/;
        lt.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = ze.pop() || lt.expando + "_" + xe++;
                return this[t] = !0, t
            }
        }), lt.ajaxPrefilter("json jsonp", function (t, e, r) {
            var i, o, s,
                a = t.jsonp !== !1 && ($e.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = lt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace($e, "$1" + i) : t.jsonp !== !1 && (t.url += (ke.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                return s || lt.error(i + " was not called"), s[0]
            }, t.dataTypes[0] = "json", o = n[i], n[i] = function () {
                s = arguments
            }, r.always(function () {
                void 0 === o ? lt(n).removeProp(i) : n[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, ze.push(i)), s && lt.isFunction(o) && o(s[0]), s = o = void 0
            }), "script"
        }), lt.parseHTML = function (t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || Z;
            var r = vt.exec(t), i = !n && [];
            return r ? [e.createElement(r[1])] : (r = m([t], e, i), i && i.length && lt(i).remove(), lt.merge([], r.childNodes))
        };
        var Fe = lt.fn.load;
        lt.fn.load = function (t, e, n) {
            if ("string" != typeof t && Fe) return Fe.apply(this, arguments);
            var r, i, o, s = this, a = t.indexOf(" ");
            return a > -1 && (r = lt.trim(t.slice(a)), t = t.slice(0, a)), lt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), s.length > 0 && lt.ajax({
                url: t,
                type: i || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                o = arguments, s.html(r ? lt("<div>").append(lt.parseHTML(t)).find(r) : t)
            }).always(n && function (t, e) {
                s.each(function () {
                    n.apply(this, o || [t.responseText, e, t])
                })
            }), this
        }, lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            lt.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), lt.expr.filters.animated = function (t) {
            return lt.grep(lt.timers, function (e) {
                return t === e.elem
            }).length
        }, lt.offset = {
            setOffset: function (t, e, n) {
                var r, i, o, s, a, u, l, c = lt.css(t, "position"), h = lt(t), p = {};
                "static" === c && (t.style.position = "relative"), a = h.offset(), o = lt.css(t, "top"), u = lt.css(t, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = h.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), lt.isFunction(e) && (e = e.call(t, n, lt.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + i), "using" in e ? e.using.call(t, p) : h.css(p)
            }
        }, lt.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    lt.offset.setOffset(this, t, e)
                });
                var e, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
                if (o) return e = o.documentElement, lt.contains(e, r) ? (i = r.getBoundingClientRect(), n = J(o), {
                    top: i.top + n.pageYOffset - e.clientTop,
                    left: i.left + n.pageXOffset - e.clientLeft
                }) : i
            }, position: function () {
                if (this[0]) {
                    var t, e, n = this[0], r = {top: 0, left: 0};
                    return "fixed" === lt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), lt.nodeName(t[0], "html") || (r = t.offset()), r.top += lt.css(t[0], "borderTopWidth", !0), r.left += lt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - r.top - lt.css(n, "marginTop", !0),
                        left: e.left - r.left - lt.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === lt.css(t, "position");) t = t.offsetParent;
                    return t || ne
                })
            }
        }), lt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var n = "pageYOffset" === e;
            lt.fn[t] = function (r) {
                return Et(this, function (t, r, i) {
                    var o = J(t);
                    return void 0 === i ? o ? o[e] : t[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i)
                }, t, r, arguments.length)
            }
        }), lt.each(["top", "left"], function (t, e) {
            lt.cssHooks[e] = D(at.pixelPosition, function (t, n) {
                if (n) return n = I(t, e), Zt.test(n) ? lt(t).position()[e] + "px" : n
            })
        }), lt.each({Height: "height", Width: "width"}, function (t, e) {
            lt.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, r) {
                lt.fn[r] = function (r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        s = n || (r === !0 || i === !0 ? "margin" : "border");
                    return Et(this, function (e, n, r) {
                        var i;
                        return lt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? lt.css(e, n, s) : lt.style(e, n, r, s)
                    }, e, o ? r : void 0, o, null)
                }
            })
        }), lt.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, r) {
                return this.on(e, t, n, r)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }, size: function () {
                return this.length
            }
        }), lt.fn.andSelf = lt.fn.addBack, r = [], i = function () {
            return lt
        }.apply(e, r), !(void 0 !== i && (t.exports = i));
        var Ue = n.jQuery, He = n.$;
        return lt.noConflict = function (t) {
            return n.$ === lt && (n.$ = He), t && n.jQuery === lt && (n.jQuery = Ue), lt
        }, o || (n.jQuery = n.$ = lt), lt
    })
}, function (t, e) {
    t.exports = {
        Aacute: "Á",
        aacute: "á",
        Acirc: "Â",
        acirc: "â",
        acute: "´",
        AElig: "Æ",
        aelig: "æ",
        Agrave: "À",
        agrave: "à",
        amp: "&",
        AMP: "&",
        Aring: "Å",
        aring: "å",
        Atilde: "Ã",
        atilde: "ã",
        Auml: "Ä",
        auml: "ä",
        brvbar: "¦",
        Ccedil: "Ç",
        ccedil: "ç",
        cedil: "¸",
        cent: "¢",
        copy: "©",
        COPY: "©",
        curren: "¤",
        deg: "°",
        divide: "÷",
        Eacute: "É",
        eacute: "é",
        Ecirc: "Ê",
        ecirc: "ê",
        Egrave: "È",
        egrave: "è",
        ETH: "Ð",
        eth: "ð",
        Euml: "Ë",
        euml: "ë",
        frac12: "½",
        frac14: "¼",
        frac34: "¾",
        gt: ">",
        GT: ">",
        Iacute: "Í",
        iacute: "í",
        Icirc: "Î",
        icirc: "î",
        iexcl: "¡",
        Igrave: "Ì",
        igrave: "ì",
        iquest: "¿",
        Iuml: "Ï",
        iuml: "ï",
        laquo: "«",
        lt: "<",
        LT: "<",
        macr: "¯",
        micro: "µ",
        middot: "·",
        nbsp: " ",
        not: "¬",
        Ntilde: "Ñ",
        ntilde: "ñ",
        Oacute: "Ó",
        oacute: "ó",
        Ocirc: "Ô",
        ocirc: "ô",
        Ograve: "Ò",
        ograve: "ò",
        ordf: "ª",
        ordm: "º",
        Oslash: "Ø",
        oslash: "ø",
        Otilde: "Õ",
        otilde: "õ",
        Ouml: "Ö",
        ouml: "ö",
        para: "¶",
        plusmn: "±",
        pound: "£",
        quot: '"',
        QUOT: '"',
        raquo: "»",
        reg: "®",
        REG: "®",
        sect: "§",
        shy: "­",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        szlig: "ß",
        THORN: "Þ",
        thorn: "þ",
        times: "×",
        Uacute: "Ú",
        uacute: "ú",
        Ucirc: "Û",
        ucirc: "û",
        Ugrave: "Ù",
        ugrave: "ù",
        uml: "¨",
        Uuml: "Ü",
        uuml: "ü",
        Yacute: "Ý",
        yacute: "ý",
        yen: "¥",
        yuml: "ÿ"
    }
}, function (t, e) {
    function n(t, e) {
        return void 0 === t ? e : t
    }

    function r(t) {
        t = t || {}, this.displayMode = n(t.displayMode, !1), this.throwOnError = n(t.throwOnError, !0), this.errorColor = n(t.errorColor, "#cc0000")
    }

    t.exports = r
}, function (t, e, n) {
    function r(t, e, n, r, i, o) {
        this.classes = t || [], this.children = e || [], this.height = n || 0, this.depth = r || 0, this.maxFontSize = i || 0, this.style = o || {}, this.attributes = {}
    }

    function i(t, e, n, r) {
        this.children = t || [], this.height = e || 0, this.depth = n || 0, this.maxFontSize = r || 0
    }

    function o(t, e, n, r, i, o, s) {
        this.value = t || "", this.height = e || 0, this.depth = n || 0, this.italic = r || 0, this.skew = i || 0, this.classes = o || [], this.style = s || {}, this.maxFontSize = 0
    }

    var s = n(2), a = function (t) {
        t = t.slice();
        for (var e = t.length - 1; e >= 0; e--) t[e] || t.splice(e, 1);
        return t.join(" ")
    };
    r.prototype.setAttribute = function (t, e) {
        this.attributes[t] = e
    }, r.prototype.toNode = function () {
        var t = document.createElement("span");
        t.className = a(this.classes);
        for (var e in this.style) Object.prototype.hasOwnProperty.call(this.style, e) && (t.style[e] = this.style[e]);
        for (var n in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, n) && t.setAttribute(n, this.attributes[n]);
        for (var r = 0; r < this.children.length; r++) t.appendChild(this.children[r].toNode());
        return t
    }, r.prototype.toMarkup = function () {
        var t = "<span";
        this.classes.length && (t += ' class="', t += s.escape(a(this.classes)), t += '"');
        var e = "";
        for (var n in this.style) this.style.hasOwnProperty(n) && (e += s.hyphenate(n) + ":" + this.style[n] + ";");
        e && (t += ' style="' + s.escape(e) + '"');
        for (var r in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, r) && (t += " " + r + '="', t += s.escape(this.attributes[r]), t += '"');
        t += ">";
        for (var i = 0; i < this.children.length; i++) t += this.children[i].toMarkup();
        return t += "</span>"
    }, i.prototype.toNode = function () {
        for (var t = document.createDocumentFragment(), e = 0; e < this.children.length; e++) t.appendChild(this.children[e].toNode());
        return t
    }, i.prototype.toMarkup = function () {
        for (var t = "", e = 0; e < this.children.length; e++) t += this.children[e].toMarkup();
        return t
    }, o.prototype.toNode = function () {
        var t = document.createTextNode(this.value), e = null;
        this.italic > 0 && (e = document.createElement("span"), e.style.marginRight = this.italic + "em"), this.classes.length > 0 && (e = e || document.createElement("span"), e.className = a(this.classes));
        for (var n in this.style) this.style.hasOwnProperty(n) && (e = e || document.createElement("span"), e.style[n] = this.style[n]);
        return e ? (e.appendChild(t), e) : t
    }, o.prototype.toMarkup = function () {
        var t = !1, e = "<span";
        this.classes.length && (t = !0, e += ' class="', e += s.escape(a(this.classes)), e += '"');
        var n = "";
        this.italic > 0 && (n += "margin-right:" + this.italic + "em;");
        for (var r in this.style) this.style.hasOwnProperty(r) && (n += s.hyphenate(r) + ":" + this.style[r] + ";");
        n && (t = !0, e += ' style="' + s.escape(n) + '"');
        var i = s.escape(this.value);
        return t ? (e += ">", e += i, e += "</span>") : i
    }, t.exports = {span: r, documentFragment: i, symbolNode: o}
}, function (t, e) {
    function n(t, e, n) {
        this.type = t, this.value = e, this.mode = n
    }

    t.exports = {ParseNode: n}
}, function (t, e) {
    var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    t.exports = function (t) {
        var e = t, i = t.indexOf("["), o = t.indexOf("]");
        i != -1 && o != -1 && (t = t.substring(0, i) + t.substring(i, o).replace(/:/g, ";") + t.substring(o, t.length));
        for (var s = n.exec(t || ""), a = {}, u = 14; u--;) a[r[u]] = s[u] || "";
        return i != -1 && o != -1 && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a
    }
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return this instanceof r ? void i.call(this, t) : new r(t)
    }

    t.exports = r;
    var i = n(28), o = n(10);
    o.inherits = n(1), o.inherits(r, i), r.prototype._transform = function (t, e, n) {
        n(null, t)
    }
}, function (t, e, n) {
    (function (e) {
        "use strict";

        function r(t, e, n) {
            return "function" == typeof t.prependListener ? t.prependListener(e, n) : void (t._events && t._events[e] ? D(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]] : t.on(e, n))
        }

        function i(t, e) {
            L = L || n(6), t = t || {}, this.objectMode = !!t.objectMode, e instanceof L && (this.objectMode = this.objectMode || !!t.readableObjectMode);
            var r = t.highWaterMark, i = this.objectMode ? 16 : 16384;
            this.highWaterMark = r || 0 === r ? r : i, this.highWaterMark = ~~this.highWaterMark, this.buffer = new z, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (j || (j = n(31).StringDecoder), this.decoder = new j(t.encoding), this.encoding = t.encoding)
        }

        function o(t) {
            return L = L || n(6), this instanceof o ? (this._readableState = new i(t, this), this.readable = !0, t && "function" == typeof t.read && (this._read = t.read), void R.call(this)) : new o(t)
        }

        function s(t, e, n, r, i) {
            var o = c(e, n);
            if (o) t.emit("error", o); else if (null === n) e.reading = !1, h(t, e); else if (e.objectMode || n && n.length > 0) if (e.ended && !i) {
                var s = new Error("stream.push() after EOF");
                t.emit("error", s)
            } else if (e.endEmitted && i) {
                var u = new Error("stream.unshift() after end event");
                t.emit("error", u)
            } else {
                var l;
                !e.decoder || i || r || (n = e.decoder.write(n), l = !e.objectMode && 0 === n.length), i || (e.reading = !1), l || (e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, i ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && p(t))), d(t, e)
            } else i || (e.reading = !1);
            return a(e)
        }

        function a(t) {
            return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
        }

        function u(t) {
            return t >= $ ? t = $ : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t
        }

        function l(t, e) {
            return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = u(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0))
        }

        function c(t, e) {
            var n = null;
            return O.isBuffer(e) || "string" == typeof e || null === e || void 0 === e || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n
        }

        function h(t, e) {
            if (!e.ended) {
                if (e.decoder) {
                    var n = e.decoder.end();
                    n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length)
                }
                e.ended = !0, p(t)
            }
        }

        function p(t) {
            var e = t._readableState;
            e.needReadable = !1, e.emittedReadable || (q("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? I(f, t) : f(t))
        }

        function f(t) {
            q("emit readable"), t.emit("readable"), w(t)
        }

        function d(t, e) {
            e.readingMore || (e.readingMore = !0, I(g, t, e))
        }

        function g(t, e) {
            for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (q("maybeReadMore read 0"), t.read(0), n !== e.length);) n = e.length;
            e.readingMore = !1
        }

        function m(t) {
            return function () {
                var e = t._readableState;
                q("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && N(t, "data") && (e.flowing = !0, w(t))
            }
        }

        function y(t) {
            q("readable nexttick read 0"), t.read(0)
        }

        function v(t, e) {
            e.resumeScheduled || (e.resumeScheduled = !0, I(b, t, e))
        }

        function b(t, e) {
            e.reading || (q("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), w(t), e.flowing && !e.reading && t.read(0)
        }

        function w(t) {
            var e = t._readableState;
            for (q("flow", e.flowing); e.flowing && null !== t.read();) ;
        }

        function x(t, e) {
            if (0 === e.length) return null;
            var n;
            return e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : n = k(t, e.buffer, e.decoder), n
        }

        function k(t, e, n) {
            var r;
            return t < e.head.data.length ? (r = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : r = t === e.head.data.length ? e.shift() : n ? S(t, e) : _(t, e), r
        }

        function S(t, e) {
            var n = e.head, r = 1, i = n.data;
            for (t -= i.length; n = n.next;) {
                var o = n.data, s = t > o.length ? o.length : t;
                if (i += s === o.length ? o : o.slice(0, t), t -= s, 0 === t) {
                    s === o.length ? (++r, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = o.slice(s));
                    break
                }
                ++r
            }
            return e.length -= r, i
        }

        function _(t, e) {
            var n = M.allocUnsafe(t), r = e.head, i = 1;
            for (r.data.copy(n), t -= r.data.length; r = r.next;) {
                var o = r.data, s = t > o.length ? o.length : t;
                if (o.copy(n, n.length - t, 0, s), t -= s, 0 === t) {
                    s === o.length ? (++i, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = o.slice(s));
                    break
                }
                ++i
            }
            return e.length -= i, n
        }

        function T(t) {
            var e = t._readableState;
            if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
            e.endEmitted || (e.ended = !0, I(C, e, t))
        }

        function C(t, e) {
            t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"))
        }

        function E(t, e) {
            for (var n = 0, r = t.length; n < r; n++) e(t[n], n)
        }

        function A(t, e) {
            for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
            return -1
        }

        t.exports = o;
        var L, I = n(27), D = n(23);
        o.ReadableState = i;
        var R, N = (n(12).EventEmitter, function (t, e) {
            return t.listeners(e).length
        });
        !function () {
            try {
                R = n(19)
            } catch (t) {
            } finally {
                R || (R = n(12).EventEmitter)
            }
        }();
        var O = n(3).Buffer, M = n(20), B = n(10);
        B.inherits = n(1);
        var P = n(158), q = void 0;
        q = P && P.debuglog ? P.debuglog("stream") : function () {
        };
        var j, z = n(136);
        B.inherits(o, R), o.prototype.push = function (t, e) {
            var n = this._readableState;
            return n.objectMode || "string" != typeof t || (e = e || n.defaultEncoding, e !== n.encoding && (t = M.from(t, e), e = "")), s(this, n, t, e, !1)
        }, o.prototype.unshift = function (t) {
            var e = this._readableState;
            return s(this, e, t, "", !0)
        }, o.prototype.isPaused = function () {
            return this._readableState.flowing === !1
        }, o.prototype.setEncoding = function (t) {
            return j || (j = n(31).StringDecoder), this._readableState.decoder = new j(t), this._readableState.encoding = t, this
        };
        var $ = 8388608;
        o.prototype.read = function (t) {
            q("read", t), t = parseInt(t, 10);
            var e = this._readableState, n = t;
            if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return q("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? T(this) : p(this), null;
            if (t = l(t, e), 0 === t && e.ended) return 0 === e.length && T(this), null;
            var r = e.needReadable;
            q("need readable", r), (0 === e.length || e.length - t < e.highWaterMark) && (r = !0, q("length less than watermark", r)), e.ended || e.reading ? (r = !1, q("reading or ended", r)) : r && (q("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = l(n, e)));
            var i;
            return i = t > 0 ? x(t, e) : null, null === i ? (e.needReadable = !0, t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), n !== t && e.ended && T(this)), null !== i && this.emit("data", i), i
        }, o.prototype._read = function (t) {
            this.emit("error", new Error("_read() is not implemented"))
        }, o.prototype.pipe = function (t, n) {
            function i(t) {
                q("onunpipe"), t === p && s()
            }

            function o() {
                q("onend"), t.end()
            }

            function s() {
                q("cleanup"), t.removeListener("close", l), t.removeListener("finish", c), t.removeListener("drain", y), t.removeListener("error", u), t.removeListener("unpipe", i), p.removeListener("end", o), p.removeListener("end", s), p.removeListener("data", a), v = !0, !f.awaitDrain || t._writableState && !t._writableState.needDrain || y()
            }

            function a(e) {
                q("ondata"), b = !1;
                var n = t.write(e);
                !1 !== n || b || ((1 === f.pipesCount && f.pipes === t || f.pipesCount > 1 && A(f.pipes, t) !== -1) && !v && (q("false write response, pause", p._readableState.awaitDrain), p._readableState.awaitDrain++, b = !0), p.pause())
            }

            function u(e) {
                q("onerror", e), h(), t.removeListener("error", u), 0 === N(t, "error") && t.emit("error", e)
            }

            function l() {
                t.removeListener("finish", c), h()
            }

            function c() {
                q("onfinish"), t.removeListener("close", l), h()
            }

            function h() {
                q("unpipe"), p.unpipe(t)
            }

            var p = this, f = this._readableState;
            switch (f.pipesCount) {
                case 0:
                    f.pipes = t;
                    break;
                case 1:
                    f.pipes = [f.pipes, t];
                    break;
                default:
                    f.pipes.push(t)
            }
            f.pipesCount += 1, q("pipe count=%d opts=%j", f.pipesCount, n);
            var d = (!n || n.end !== !1) && t !== e.stdout && t !== e.stderr, g = d ? o : s;
            f.endEmitted ? I(g) : p.once("end", g), t.on("unpipe", i);
            var y = m(p);
            t.on("drain", y);
            var v = !1, b = !1;
            return p.on("data", a), r(t, "error", u), t.once("close", l), t.once("finish", c), t.emit("pipe", p), f.flowing || (q("pipe resume"), p.resume()), t
        }, o.prototype.unpipe = function (t) {
            var e = this._readableState;
            if (0 === e.pipesCount) return this;
            if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this), this);
            if (!t) {
                var n = e.pipes, r = e.pipesCount;
                e.pipes = null, e.pipesCount = 0, e.flowing = !1;
                for (var i = 0; i < r; i++) n[i].emit("unpipe", this);
                return this
            }
            var o = A(e.pipes, t);
            return o === -1 ? this : (e.pipes.splice(o, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this), this)
        }, o.prototype.on = function (t, e) {
            var n = R.prototype.on.call(this, t, e);
            if ("data" === t) this._readableState.flowing !== !1 && this.resume(); else if ("readable" === t) {
                var r = this._readableState;
                r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && p(this, r) : I(y, this))
            }
            return n
        }, o.prototype.addListener = o.prototype.on, o.prototype.resume = function () {
            var t = this._readableState;
            return t.flowing || (q("resume"), t.flowing = !0, v(this, t)), this
        }, o.prototype.pause = function () {
            return q("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (q("pause"), this._readableState.flowing = !1, this.emit("pause")), this
        }, o.prototype.wrap = function (t) {
            var e = this._readableState, n = !1, r = this;
            t.on("end", function () {
                if (q("wrapped end"), e.decoder && !e.ended) {
                    var t = e.decoder.end();
                    t && t.length && r.push(t)
                }
                r.push(null)
            }), t.on("data", function (i) {
                if (q("wrapped data"), e.decoder && (i = e.decoder.write(i)), (!e.objectMode || null !== i && void 0 !== i) && (e.objectMode || i && i.length)) {
                    var o = r.push(i);
                    o || (n = !0, t.pause())
                }
            });
            for (var i in t) void 0 === this[i] && "function" == typeof t[i] && (this[i] = function (e) {
                return function () {
                    return t[e].apply(t, arguments)
                }
            }(i));
            var o = ["error", "close", "destroy", "pause", "resume"];
            return E(o, function (e) {
                t.on(e, r.emit.bind(r, e))
            }), r._read = function (e) {
                q("wrapped _read", e), n && (n = !1, t.resume())
            }, r
        }, o._fromList = x
    }).call(e, n(8))
}, function (t, e, n) {
    function r(t, e) {
        return this instanceof r ? (t && "object" == typeof t && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new p({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new a.Encoder, this.decoder = new a.Decoder, this.autoConnect = e.autoConnect !== !1, void (this.autoConnect && this.open())) : new r(t, e)
    }

    var i = n(89), o = n(52), s = n(9), a = n(30), u = n(51), l = n(32), c = n(4)("socket.io-client:manager"),
        h = n(41), p = n(59), f = Object.prototype.hasOwnProperty;
    t.exports = r, r.prototype.emitAll = function () {
        this.emit.apply(this, arguments);
        for (var t in this.nsps) f.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
    }, r.prototype.updateSocketIds = function () {
        for (var t in this.nsps) f.call(this.nsps, t) && (this.nsps[t].id = this.engine.id)
    }, s(r.prototype), r.prototype.reconnection = function (t) {
        return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
    }, r.prototype.reconnectionAttempts = function (t) {
        return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts
    }, r.prototype.reconnectionDelay = function (t) {
        return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay
    }, r.prototype.randomizationFactor = function (t) {
        return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor
    }, r.prototype.reconnectionDelayMax = function (t) {
        return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax
    }, r.prototype.timeout = function (t) {
        return arguments.length ? (this._timeout = t, this) : this._timeout
    }, r.prototype.maybeReconnectOnOpen = function () {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
    }, r.prototype.open = r.prototype.connect = function (t, e) {
        if (c("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
        c("opening %s", this.uri), this.engine = i(this.uri, this.opts);
        var n = this.engine, r = this;
        this.readyState = "opening", this.skipReconnect = !1;
        var o = u(n, "open", function () {
            r.onopen(), t && t()
        }), s = u(n, "error", function (e) {
            if (c("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", e), t) {
                var n = new Error("Connection error");
                n.data = e, t(n)
            } else r.maybeReconnectOnOpen()
        });
        if (!1 !== this._timeout) {
            var a = this._timeout;
            c("connect attempt will timeout after %d", a);
            var l = setTimeout(function () {
                c("connect attempt timed out after %d", a), o.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", a)
            }, a);
            this.subs.push({
                destroy: function () {
                    clearTimeout(l)
                }
            })
        }
        return this.subs.push(o), this.subs.push(s), this
    }, r.prototype.onopen = function () {
        c("open"), this.cleanup(), this.readyState = "open", this.emit("open");
        var t = this.engine;
        this.subs.push(u(t, "data", l(this, "ondata"))), this.subs.push(u(t, "ping", l(this, "onping"))), this.subs.push(u(t, "pong", l(this, "onpong"))), this.subs.push(u(t, "error", l(this, "onerror"))), this.subs.push(u(t, "close", l(this, "onclose"))), this.subs.push(u(this.decoder, "decoded", l(this, "ondecoded")))
    }, r.prototype.onping = function () {
        this.lastPing = new Date, this.emitAll("ping")
    }, r.prototype.onpong = function () {
        this.emitAll("pong", new Date - this.lastPing)
    }, r.prototype.ondata = function (t) {
        this.decoder.add(t)
    }, r.prototype.ondecoded = function (t) {
        this.emit("packet", t)
    }, r.prototype.onerror = function (t) {
        c("error", t), this.emitAll("error", t)
    }, r.prototype.socket = function (t, e) {
        function n() {
            ~h(i.connecting, r) || i.connecting.push(r)
        }

        var r = this.nsps[t];
        if (!r) {
            r = new o(this, t, e), this.nsps[t] = r;
            var i = this;
            r.on("connecting", n), r.on("connect", function () {
                r.id = i.engine.id
            }), this.autoConnect && n()
        }
        return r
    }, r.prototype.destroy = function (t) {
        var e = h(this.connecting, t);
        ~e && this.connecting.splice(e, 1), this.connecting.length || this.close()
    }, r.prototype.packet = function (t) {
        c("writing packet %j", t);
        var e = this;
        t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function (n) {
            for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);
            e.encoding = !1, e.processPacketQueue()
        }))
    }, r.prototype.processPacketQueue = function () {
        if (this.packetBuffer.length > 0 && !this.encoding) {
            var t = this.packetBuffer.shift();
            this.packet(t)
        }
    }, r.prototype.cleanup = function () {
        c("cleanup");
        for (var t = this.subs.length, e = 0; e < t; e++) {
            var n = this.subs.shift();
            n.destroy()
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
    }, r.prototype.close = r.prototype.disconnect = function () {
        c("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
    }, r.prototype.onclose = function (t) {
        c("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect()
    }, r.prototype.reconnect = function () {
        if (this.reconnecting || this.skipReconnect) return this;
        var t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) c("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1; else {
            var e = this.backoff.duration();
            c("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
            var n = setTimeout(function () {
                t.skipReconnect || (c("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function (e) {
                    e ? (c("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (c("reconnect success"), t.onreconnect())
                }))
            }, e);
            this.subs.push({
                destroy: function () {
                    clearTimeout(n)
                }
            })
        }
    }, r.prototype.onreconnect = function () {
        var t = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t)
    }
}, function (t, e) {
    function n(t, e, n) {
        return t.on(e, n), {
            destroy: function () {
                t.removeListener(e, n)
            }
        }
    }

    t.exports = n
}, function (t, e, n) {
    function r(t, e, n) {
        this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
    }

    var i = n(30), o = n(9), s = n(152), a = n(51), u = n(32), l = n(4)("socket.io-client:socket"), c = n(37);
    t.exports = e = r;
    var h = {
        connect: 1,
        connect_error: 1,
        connect_timeout: 1,
        connecting: 1,
        disconnect: 1,
        error: 1,
        reconnect: 1,
        reconnect_attempt: 1,
        reconnect_failed: 1,
        reconnect_error: 1,
        reconnecting: 1,
        ping: 1,
        pong: 1
    }, p = o.prototype.emit;
    o(r.prototype), r.prototype.subEvents = function () {
        if (!this.subs) {
            var t = this.io;
            this.subs = [a(t, "open", u(this, "onopen")), a(t, "packet", u(this, "onpacket")), a(t, "close", u(this, "onclose"))]
        }
    }, r.prototype.open = r.prototype.connect = function () {
        return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this)
    }, r.prototype.send = function () {
        var t = s(arguments);
        return t.unshift("message"), this.emit.apply(this, t), this
    }, r.prototype.emit = function (t) {
        if (h.hasOwnProperty(t)) return p.apply(this, arguments), this;
        var e = s(arguments), n = i.EVENT;
        c(e) && (n = i.BINARY_EVENT);
        var r = {type: n, data: e};
        return r.options = {}, r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (l("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), delete this.flags, this
    }, r.prototype.packet = function (t) {
        t.nsp = this.nsp, this.io.packet(t)
    }, r.prototype.onopen = function () {
        l("transport is open - connecting"), "/" !== this.nsp && (this.query ? this.packet({
            type: i.CONNECT,
            query: this.query
        }) : this.packet({type: i.CONNECT}))
    }, r.prototype.onclose = function (t) {
        l("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t)
    }, r.prototype.onpacket = function (t) {
        if (t.nsp === this.nsp) switch (t.type) {
            case i.CONNECT:
                this.onconnect();
                break;
            case i.EVENT:
                this.onevent(t);
                break;
            case i.BINARY_EVENT:
                this.onevent(t);
                break;
            case i.ACK:
                this.onack(t);
                break;
            case i.BINARY_ACK:
                this.onack(t);
                break;
            case i.DISCONNECT:
                this.ondisconnect();
                break;
            case i.ERROR:
                this.emit("error", t.data)
        }
    }, r.prototype.onevent = function (t) {
        var e = t.data || [];
        l("emitting event %j", e), null != t.id && (l("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? p.apply(this, e) : this.receiveBuffer.push(e)
    }, r.prototype.ack = function (t) {
        var e = this, n = !1;
        return function () {
            if (!n) {
                n = !0;
                var r = s(arguments);
                l("sending ack %j", r);
                var o = c(r) ? i.BINARY_ACK : i.ACK;
                e.packet({type: o, id: t, data: r})
            }
        }
    }, r.prototype.onack = function (t) {
        var e = this.acks[t.id];
        "function" == typeof e ? (l("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : l("bad ack %s", t.id)
    }, r.prototype.onconnect = function () {
        this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
    }, r.prototype.emitBuffered = function () {
        var t;
        for (t = 0; t < this.receiveBuffer.length; t++) p.apply(this, this.receiveBuffer[t]);
        for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
        this.sendBuffer = []
    }, r.prototype.ondisconnect = function () {
        l("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
    }, r.prototype.destroy = function () {
        if (this.subs) {
            for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
            this.subs = null
        }
        this.io.destroy(this)
    }, r.prototype.close = r.prototype.disconnect = function () {
        return this.connected && (l("performing disconnect (%s)", this.nsp), this.packet({type: i.DISCONNECT})), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }, r.prototype.compress = function (t) {
        return this.flags = this.flags || {}, this.flags.compress = t, this
    }
}, function (t, e) {
    (function (e) {
        function n(t) {
            return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer
        }

        t.exports = n
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {
        }, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
}, function (t, e) {
    "use strict";

    function n(t) {
        var e = "";
        do e = s[t % a] + e, t = Math.floor(t / a); while (t > 0);
        return e
    }

    function r(t) {
        var e = 0;
        for (c = 0; c < t.length; c++) e = e * a + u[t.charAt(c)];
        return e
    }

    function i() {
        var t = n(+new Date);
        return t !== o ? (l = 0, o = t) : t + "." + n(l++)
    }

    for (var o, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, u = {}, l = 0, c = 0; c < a; c++) u[s[c]] = c;
    i.encode = n, i.decode = r, t.exports = i
}, function (t, e, n) {
    n(42), n(109), n(110), n(64), n(63), n(127), n(102), n(111), n(99), n(141), n(143), n(114), n(134)
}, function (t, e) {
    function n(t, e, n) {
        function i(t, r) {
            if (i.count <= 0) throw new Error("after called too many times");
            --i.count, t ? (o = !0, e(t), e = n) : 0 !== i.count || o || e(null, r)
        }

        var o = !1;
        return n = n || r, i.count = t, 0 === t ? e() : i
    }

    function r() {
    }

    t.exports = n
}, function (t, e) {
    t.exports = function (t, e, n) {
        var r = t.byteLength;
        if (e = e || 0, n = n || r, t.slice) return t.slice(e, n);
        if (e < 0 && (e += r), n < 0 && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r) return new ArrayBuffer(0);
        for (var i = new Uint8Array(t), o = new Uint8Array(n - e), s = e, a = 0; s < n; s++,
            a++) o[a] = i[s];
        return o.buffer
    }
}, function (t, e) {
    function n(t) {
        t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
    }

    t.exports = n, n.prototype.duration = function () {
        var t = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var e = Math.random(), n = Math.floor(e * this.jitter * t);
            t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
        }
        return 0 | Math.min(t, this.max)
    }, n.prototype.reset = function () {
        this.attempts = 0
    }, n.prototype.setMin = function (t) {
        this.ms = t
    }, n.prototype.setMax = function (t) {
        this.max = t
    }, n.prototype.setJitter = function (t) {
        this.jitter = t
    }
}, function (t, e) {
    !function () {
        "use strict";
        for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < t.length; r++) n[t.charCodeAt(r)] = r;
        e.encode = function (e) {
            var n, r = new Uint8Array(e), i = r.length, o = "";
            for (n = 0; n < i; n += 3) o += t[r[n] >> 2], o += t[(3 & r[n]) << 4 | r[n + 1] >> 4], o += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], o += t[63 & r[n + 2]];
            return i % 3 === 2 ? o = o.substring(0, o.length - 1) + "=" : i % 3 === 1 && (o = o.substring(0, o.length - 2) + "=="), o
        }, e.decode = function (t) {
            var e, r, i, o, s, a = .75 * t.length, u = t.length, l = 0;
            "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
            var c = new ArrayBuffer(a), h = new Uint8Array(c);
            for (e = 0; e < u; e += 4) r = n[t.charCodeAt(e)], i = n[t.charCodeAt(e + 1)], o = n[t.charCodeAt(e + 2)], s = n[t.charCodeAt(e + 3)], h[l++] = r << 2 | i >> 4, h[l++] = (15 & i) << 4 | o >> 2, h[l++] = (3 & o) << 6 | 63 & s;
            return c
        }
    }()
}, function (t, e) {
    "use strict";

    function n(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
    }

    function r(t) {
        return 3 * t.length / 4 - n(t)
    }

    function i(t) {
        var e, r, i, o, s, a, u = t.length;
        s = n(t), a = new c(3 * u / 4 - s), i = s > 0 ? u - 4 : u;
        var h = 0;
        for (e = 0, r = 0; e < i; e += 4, r += 3) o = l[t.charCodeAt(e)] << 18 | l[t.charCodeAt(e + 1)] << 12 | l[t.charCodeAt(e + 2)] << 6 | l[t.charCodeAt(e + 3)], a[h++] = o >> 16 & 255, a[h++] = o >> 8 & 255, a[h++] = 255 & o;
        return 2 === s ? (o = l[t.charCodeAt(e)] << 2 | l[t.charCodeAt(e + 1)] >> 4, a[h++] = 255 & o) : 1 === s && (o = l[t.charCodeAt(e)] << 10 | l[t.charCodeAt(e + 1)] << 4 | l[t.charCodeAt(e + 2)] >> 2, a[h++] = o >> 8 & 255, a[h++] = 255 & o), a
    }

    function o(t) {
        return u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t]
    }

    function s(t, e, n) {
        for (var r, i = [], s = e; s < n; s += 3) r = (t[s] << 16) + (t[s + 1] << 8) + t[s + 2], i.push(o(r));
        return i.join("")
    }

    function a(t) {
        for (var e, n = t.length, r = n % 3, i = "", o = [], a = 16383, l = 0, c = n - r; l < c; l += a) o.push(s(t, l, l + a > c ? c : l + a));
        return 1 === r ? (e = t[n - 1], i += u[e >> 2], i += u[e << 4 & 63], i += "==") : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], i += u[e >> 10], i += u[e >> 4 & 63], i += u[e << 2 & 63], i += "="), o.push(i), o.join("")
    }

    e.byteLength = r, e.toByteArray = i, e.fromByteArray = a;
    for (var u = [], l = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = 0, f = h.length; p < f; ++p) u[p] = h[p], l[h.charCodeAt(p)] = p;
    l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63
}, function (t, e) {
    (function (e) {
        function n(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (n.buffer instanceof ArrayBuffer) {
                    var r = n.buffer;
                    if (n.byteLength !== r.byteLength) {
                        var i = new Uint8Array(n.byteLength);
                        i.set(new Uint8Array(r, n.byteOffset, n.byteLength)), r = i.buffer
                    }
                    t[e] = r
                }
            }
        }

        function r(t, e) {
            e = e || {};
            var r = new o;
            n(t);
            for (var i = 0; i < t.length; i++) r.append(t[i]);
            return e.type ? r.getBlob(e.type) : r.getBlob()
        }

        function i(t, e) {
            return n(t), new Blob(t, e || {})
        }

        var o = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder, s = function () {
            try {
                var t = new Blob(["hi"]);
                return 2 === t.size
            } catch (t) {
                return !1
            }
        }(), a = s && function () {
            try {
                var t = new Blob([new Uint8Array([1, 2])]);
                return 2 === t.size
            } catch (t) {
                return !1
            }
        }(), u = o && o.prototype.append && o.prototype.getBlob;
        t.exports = function () {
            return s ? a ? e.Blob : i : u ? r : void 0
        }()
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    (function () {
        var t = [].slice;
        !function (e, n) {
            "use strict";
            var r;
            return r = function () {
                function t(t, n) {
                    null == n && (n = {}), this.$element = e(t), this.options = e.extend({}, e.fn.bootstrapSwitch.defaults, {
                        state: this.$element.is(":checked"),
                        size: this.$element.data("size"),
                        animate: this.$element.data("animate"),
                        disabled: this.$element.is(":disabled"),
                        readonly: this.$element.is("[readonly]"),
                        indeterminate: this.$element.data("indeterminate"),
                        inverse: this.$element.data("inverse"),
                        radioAllOff: this.$element.data("radio-all-off"),
                        onColor: this.$element.data("on-color"),
                        offColor: this.$element.data("off-color"),
                        onText: this.$element.data("on-text"),
                        offText: this.$element.data("off-text"),
                        labelText: this.$element.data("label-text"),
                        handleWidth: this.$element.data("handle-width"),
                        labelWidth: this.$element.data("label-width"),
                        baseClass: this.$element.data("base-class"),
                        wrapperClass: this.$element.data("wrapper-class")
                    }, n), this.$wrapper = e("<div>", {
                        class: function (t) {
                            return function () {
                                var e;
                                return e = ["" + t.options.baseClass].concat(t._getClasses(t.options.wrapperClass)), e.push(t.options.state ? "" + t.options.baseClass + "-on" : "" + t.options.baseClass + "-off"), null != t.options.size && e.push("" + t.options.baseClass + "-" + t.options.size), t.options.disabled && e.push("" + t.options.baseClass + "-disabled"), t.options.readonly && e.push("" + t.options.baseClass + "-readonly"), t.options.indeterminate && e.push("" + t.options.baseClass + "-indeterminate"), t.options.inverse && e.push("" + t.options.baseClass + "-inverse"), t.$element.attr("id") && e.push("" + t.options.baseClass + "-id-" + t.$element.attr("id")), e.join(" ")
                            }
                        }(this)()
                    }), this.$container = e("<div>", {class: "" + this.options.baseClass + "-container"}), this.$on = e("<span>", {
                        html: this.options.onText,
                        class: "" + this.options.baseClass + "-handle-on " + this.options.baseClass + "-" + this.options.onColor
                    }), this.$off = e("<span>", {
                        html: this.options.offText,
                        class: "" + this.options.baseClass + "-handle-off " + this.options.baseClass + "-" + this.options.offColor
                    }), this.$label = e("<span>", {
                        html: this.options.labelText,
                        class: "" + this.options.baseClass + "-label"
                    }), this.$element.on("init.bootstrapSwitch", function (e) {
                        return function () {
                            return e.options.onInit.apply(t, arguments)
                        }
                    }(this)), this.$element.on("switchChange.bootstrapSwitch", function (e) {
                        return function () {
                            return e.options.onSwitchChange.apply(t, arguments)
                        }
                    }(this)), this.$container = this.$element.wrap(this.$container).parent(), this.$wrapper = this.$container.wrap(this.$wrapper).parent(), this.$element.before(this.options.inverse ? this.$off : this.$on).before(this.$label).before(this.options.inverse ? this.$on : this.$off), this.options.indeterminate && this.$element.prop("indeterminate", !0), this._init(), this._elementHandlers(), this._handleHandlers(), this._labelHandlers(), this._formHandler(), this._externalLabelHandler(), this.$element.trigger("init.bootstrapSwitch")
                }

                return t.prototype._constructor = t, t.prototype.state = function (t, e) {
                    return "undefined" == typeof t ? this.options.state : this.options.disabled || this.options.readonly ? this.$element : this.options.state && !this.options.radioAllOff && this.$element.is(":radio") ? this.$element : (this.options.indeterminate && this.indeterminate(!1), t = !!t, this.$element.prop("checked", t).trigger("change.bootstrapSwitch", e), this.$element)
                }, t.prototype.toggleState = function (t) {
                    return this.options.disabled || this.options.readonly ? this.$element : this.options.indeterminate ? (this.indeterminate(!1), this.state(!0)) : this.$element.prop("checked", !this.options.state).trigger("change.bootstrapSwitch", t)
                }, t.prototype.size = function (t) {
                    return "undefined" == typeof t ? this.options.size : (null != this.options.size && this.$wrapper.removeClass("" + this.options.baseClass + "-" + this.options.size), t && this.$wrapper.addClass("" + this.options.baseClass + "-" + t), this._width(), this._containerPosition(), this.options.size = t, this.$element)
                }, t.prototype.animate = function (t) {
                    return "undefined" == typeof t ? this.options.animate : (t = !!t, t === this.options.animate ? this.$element : this.toggleAnimate())
                }, t.prototype.toggleAnimate = function () {
                    return this.options.animate = !this.options.animate, this.$wrapper.toggleClass("" + this.options.baseClass + "-animate"), this.$element
                }, t.prototype.disabled = function (t) {
                    return "undefined" == typeof t ? this.options.disabled : (t = !!t, t === this.options.disabled ? this.$element : this.toggleDisabled())
                }, t.prototype.toggleDisabled = function () {
                    return this.options.disabled = !this.options.disabled, this.$element.prop("disabled", this.options.disabled), this.$wrapper.toggleClass("" + this.options.baseClass + "-disabled"), this.$element
                }, t.prototype.readonly = function (t) {
                    return "undefined" == typeof t ? this.options.readonly : (t = !!t, t === this.options.readonly ? this.$element : this.toggleReadonly())
                }, t.prototype.toggleReadonly = function () {
                    return this.options.readonly = !this.options.readonly, this.$element.prop("readonly", this.options.readonly), this.$wrapper.toggleClass("" + this.options.baseClass + "-readonly"), this.$element
                }, t.prototype.indeterminate = function (t) {
                    return "undefined" == typeof t ? this.options.indeterminate : (t = !!t, t === this.options.indeterminate ? this.$element : this.toggleIndeterminate())
                }, t.prototype.toggleIndeterminate = function () {
                    return this.options.indeterminate = !this.options.indeterminate, this.$element.prop("indeterminate", this.options.indeterminate), this.$wrapper.toggleClass("" + this.options.baseClass + "-indeterminate"), this._containerPosition(), this.$element
                }, t.prototype.inverse = function (t) {
                    return "undefined" == typeof t ? this.options.inverse : (t = !!t, t === this.options.inverse ? this.$element : this.toggleInverse())
                }, t.prototype.toggleInverse = function () {
                    var t, e;
                    return this.$wrapper.toggleClass("" + this.options.baseClass + "-inverse"), e = this.$on.clone(!0), t = this.$off.clone(!0), this.$on.replaceWith(t), this.$off.replaceWith(e), this.$on = t, this.$off = e, this.options.inverse = !this.options.inverse, this.$element
                }, t.prototype.onColor = function (t) {
                    var e;
                    return e = this.options.onColor, "undefined" == typeof t ? e : (null != e && this.$on.removeClass("" + this.options.baseClass + "-" + e), this.$on.addClass("" + this.options.baseClass + "-" + t), this.options.onColor = t, this.$element)
                }, t.prototype.offColor = function (t) {
                    var e;
                    return e = this.options.offColor, "undefined" == typeof t ? e : (null != e && this.$off.removeClass("" + this.options.baseClass + "-" + e), this.$off.addClass("" + this.options.baseClass + "-" + t), this.options.offColor = t, this.$element)
                }, t.prototype.onText = function (t) {
                    return "undefined" == typeof t ? this.options.onText : (this.$on.html(t), this._width(), this._containerPosition(), this.options.onText = t, this.$element)
                }, t.prototype.offText = function (t) {
                    return "undefined" == typeof t ? this.options.offText : (this.$off.html(t), this._width(), this._containerPosition(), this.options.offText = t, this.$element)
                }, t.prototype.labelText = function (t) {
                    return "undefined" == typeof t ? this.options.labelText : (this.$label.html(t), this._width(), this.options.labelText = t, this.$element)
                }, t.prototype.handleWidth = function (t) {
                    return "undefined" == typeof t ? this.options.handleWidth : (this.options.handleWidth = t, this._width(), this._containerPosition(), this.$element)
                }, t.prototype.labelWidth = function (t) {
                    return "undefined" == typeof t ? this.options.labelWidth : (this.options.labelWidth = t, this._width(), this._containerPosition(), this.$element)
                }, t.prototype.baseClass = function (t) {
                    return this.options.baseClass
                }, t.prototype.wrapperClass = function (t) {
                    return "undefined" == typeof t ? this.options.wrapperClass : (t || (t = e.fn.bootstrapSwitch.defaults.wrapperClass), this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")), this.$wrapper.addClass(this._getClasses(t).join(" ")), this.options.wrapperClass = t, this.$element)
                }, t.prototype.radioAllOff = function (t) {
                    return "undefined" == typeof t ? this.options.radioAllOff : (t = !!t, t === this.options.radioAllOff ? this.$element : (this.options.radioAllOff = t, this.$element))
                }, t.prototype.onInit = function (t) {
                    return "undefined" == typeof t ? this.options.onInit : (t || (t = e.fn.bootstrapSwitch.defaults.onInit), this.options.onInit = t, this.$element)
                }, t.prototype.onSwitchChange = function (t) {
                    return "undefined" == typeof t ? this.options.onSwitchChange : (t || (t = e.fn.bootstrapSwitch.defaults.onSwitchChange), this.options.onSwitchChange = t, this.$element)
                }, t.prototype.destroy = function () {
                    var t;
                    return t = this.$element.closest("form"), t.length && t.off("reset.bootstrapSwitch").removeData("bootstrap-switch"), this.$container.children().not(this.$element).remove(), this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"), this.$element
                }, t.prototype._width = function () {
                    var t, e;
                    return t = this.$on.add(this.$off), t.add(this.$label).css("width", ""), e = "auto" === this.options.handleWidth ? Math.max(this.$on.width(), this.$off.width()) : this.options.handleWidth, t.width(e), this.$label.width(function (t) {
                        return function (n, r) {
                            return "auto" !== t.options.labelWidth ? t.options.labelWidth : r < e ? e : r
                        }
                    }(this)), this._handleWidth = this.$on.outerWidth(), this._labelWidth = this.$label.outerWidth(), this.$container.width(2 * this._handleWidth + this._labelWidth), this.$wrapper.width(this._handleWidth + this._labelWidth)
                }, t.prototype._containerPosition = function (t, e) {
                    if (null == t && (t = this.options.state), this.$container.css("margin-left", function (e) {
                        return function () {
                            var n;
                            return n = [0, "-" + e._handleWidth + "px"], e.options.indeterminate ? "-" + e._handleWidth / 2 + "px" : t ? e.options.inverse ? n[1] : n[0] : e.options.inverse ? n[0] : n[1]
                        }
                    }(this)), e) return setTimeout(function () {
                        return e()
                    }, 50)
                }, t.prototype._init = function () {
                    var t, e;
                    return t = function (t) {
                        return function () {
                            return t._width(), t._containerPosition(null, function () {
                                if (t.options.animate) return t.$wrapper.addClass("" + t.options.baseClass + "-animate")
                            })
                        }
                    }(this), this.$wrapper.is(":visible") ? t() : e = n.setInterval(function (r) {
                        return function () {
                            if (r.$wrapper.is(":visible")) return t(), n.clearInterval(e)
                        }
                    }(this), 50)
                }, t.prototype._elementHandlers = function () {
                    return this.$element.on({
                        "change.bootstrapSwitch": function (t) {
                            return function (n, r) {
                                var i;
                                if (n.preventDefault(), n.stopImmediatePropagation(), i = t.$element.is(":checked"), t._containerPosition(i), i !== t.options.state) return t.options.state = i, t.$wrapper.toggleClass("" + t.options.baseClass + "-off").toggleClass("" + t.options.baseClass + "-on"), r ? void 0 : (t.$element.is(":radio") && e("[name='" + t.$element.attr("name") + "']").not(t.$element).prop("checked", !1).trigger("change.bootstrapSwitch", !0), t.$element.trigger("switchChange.bootstrapSwitch", [i]))
                            }
                        }(this), "focus.bootstrapSwitch": function (t) {
                            return function (e) {
                                return e.preventDefault(), t.$wrapper.addClass("" + t.options.baseClass + "-focused")
                            }
                        }(this), "blur.bootstrapSwitch": function (t) {
                            return function (e) {
                                return e.preventDefault(), t.$wrapper.removeClass("" + t.options.baseClass + "-focused")
                            }
                        }(this), "keydown.bootstrapSwitch": function (t) {
                            return function (e) {
                                if (e.which && !t.options.disabled && !t.options.readonly) switch (e.which) {
                                    case 37:
                                        return e.preventDefault(), e.stopImmediatePropagation(), t.state(!1);
                                    case 39:
                                        return e.preventDefault(), e.stopImmediatePropagation(), t.state(!0)
                                }
                            }
                        }(this)
                    })
                }, t.prototype._handleHandlers = function () {
                    return this.$on.on("click.bootstrapSwitch", function (t) {
                        return function (e) {
                            return e.preventDefault(), e.stopPropagation(), t.state(!1), t.$element.trigger("focus.bootstrapSwitch")
                        }
                    }(this)), this.$off.on("click.bootstrapSwitch", function (t) {
                        return function (e) {
                            return e.preventDefault(), e.stopPropagation(), t.state(!0), t.$element.trigger("focus.bootstrapSwitch")
                        }
                    }(this))
                }, t.prototype._labelHandlers = function () {
                    return this.$label.on({
                        "mousedown.bootstrapSwitch touchstart.bootstrapSwitch": function (t) {
                            return function (e) {
                                if (!(t._dragStart || t.options.disabled || t.options.readonly)) return e.preventDefault(), e.stopPropagation(), t._dragStart = (e.pageX || e.originalEvent.touches[0].pageX) - parseInt(t.$container.css("margin-left"), 10), t.options.animate && t.$wrapper.removeClass("" + t.options.baseClass + "-animate"), t.$element.trigger("focus.bootstrapSwitch")
                            }
                        }(this), "mousemove.bootstrapSwitch touchmove.bootstrapSwitch": function (t) {
                            return function (e) {
                                var n;
                                if (null != t._dragStart && (e.preventDefault(), n = (e.pageX || e.originalEvent.touches[0].pageX) - t._dragStart, !(n < -t._handleWidth || n > 0))) return t._dragEnd = n, t.$container.css("margin-left", "" + t._dragEnd + "px")
                            }
                        }(this), "mouseup.bootstrapSwitch touchend.bootstrapSwitch": function (t) {
                            return function (e) {
                                var n;
                                if (t._dragStart) return e.preventDefault(), t.options.animate && t.$wrapper.addClass("" + t.options.baseClass + "-animate"), t._dragEnd ? (n = t._dragEnd > -(t._handleWidth / 2), t._dragEnd = !1, t.state(t.options.inverse ? !n : n)) : t.state(!t.options.state), t._dragStart = !1
                            }
                        }(this), "mouseleave.bootstrapSwitch": function (t) {
                            return function (e) {
                                return t.$label.trigger("mouseup.bootstrapSwitch")
                            }
                        }(this)
                    })
                }, t.prototype._externalLabelHandler = function () {
                    var t;
                    return t = this.$element.closest("label"), t.on("click", function (e) {
                        return function (n) {
                            if (n.preventDefault(), n.stopImmediatePropagation(), n.target === t[0]) return e.toggleState()
                        }
                    }(this))
                }, t.prototype._formHandler = function () {
                    var t;
                    if (t = this.$element.closest("form"), !t.data("bootstrap-switch")) return t.on("reset.bootstrapSwitch", function () {
                        return n.setTimeout(function () {
                            return t.find("input").filter(function () {
                                return e(this).data("bootstrap-switch")
                            }).each(function () {
                                return e(this).bootstrapSwitch("state", this.checked)
                            })
                        }, 1)
                    }).data("bootstrap-switch", !0)
                }, t.prototype._getClasses = function (t) {
                    var n, r, i, o;
                    if (!e.isArray(t)) return ["" + this.options.baseClass + "-" + t];
                    for (r = [], i = 0, o = t.length; i < o; i++) n = t[i], r.push("" + this.options.baseClass + "-" + n);
                    return r
                }, t
            }(), e.fn.bootstrapSwitch = function () {
                var n, i, o;
                return i = arguments[0], n = 2 <= arguments.length ? t.call(arguments, 1) : [], o = this, this.each(function () {
                    var t, s;
                    if (t = e(this), s = t.data("bootstrap-switch"), s || t.data("bootstrap-switch", s = new r(this, i)), "string" == typeof i) return o = s[i].apply(s, n)
                }), o
            }, e.fn.bootstrapSwitch.Constructor = r, e.fn.bootstrapSwitch.defaults = {
                state: !0,
                size: null,
                animate: !0,
                disabled: !1,
                readonly: !1,
                indeterminate: !1,
                inverse: !1,
                radioAllOff: !1,
                onColor: "primary",
                offColor: "default",
                onText: "ON",
                offText: "OFF",
                labelText: "&nbsp;",
                handleWidth: "auto",
                labelWidth: "auto",
                baseClass: "bootstrap-switch",
                wrapperClass: "wrapper",
                onInit: function () {
                },
                onSwitchChange: function () {
                }
            }
        }(window.jQuery, window)
    }).call(this)
}, function (t, e, n) {
    n(76), n(66), n(67), n(68), n(69), n(70), n(71), n(75), n(72), n(73), n(74), n(65)
}, function (t, e) {
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.affix"), o = "object" == typeof e && e;
                i || r.data("bs.affix", i = new n(this, o)), "string" == typeof e && i[e]()
            })
        }

        var n = function (e, r) {
            this.options = t.extend({}, n.DEFAULTS, r), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
            offset: 0,
            target: window
        }, n.prototype.getState = function (t, e, n, r) {
            var i = this.$target.scrollTop(), o = this.$element.offset(), s = this.$target.height();
            if (null != n && "top" == this.affixed) return i < n && "top";
            if ("bottom" == this.affixed) return null != n ? !(i + this.unpin <= o.top) && "bottom" : !(i + s <= t - r) && "bottom";
            var a = null == this.affixed, u = a ? i : o.top, l = a ? s : e;
            return null != n && i <= n ? "top" : null != r && u + l >= t - r && "bottom"
        }, n.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(n.RESET).addClass("affix");
            var t = this.$target.scrollTop(), e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, n.prototype.checkPositionWithEventLoop = function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, n.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(), r = this.options.offset, i = r.top, o = r.bottom,
                    s = Math.max(t(document).height(), t(document.body).height());
                "object" != typeof r && (o = i = r), "function" == typeof i && (i = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element));
                var a = this.getState(s, e, i, o);
                if (this.affixed != a) {
                    null != this.unpin && this.$element.css("top", "");
                    var u = "affix" + (a ? "-" + a : ""), l = t.Event(u + ".bs.affix");
                    if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                    this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(u.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == a && this.$element.offset({top: s - e - o})
            }
        };
        var r = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
            return t.fn.affix = r, this
        }, t(window).on("load", function () {
            t('[data-spy="affix"]').each(function () {
                var n = t(this), r = n.data();
                r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), e.call(n, r)
            })
        })
    }(jQuery)
}, function (t, e) {
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var n = t(this), i = n.data("bs.alert");
                i || n.data("bs.alert", i = new r(this)), "string" == typeof e && i[e].call(n)
            })
        }

        var n = '[data-dismiss="alert"]', r = function (e) {
            t(e).on("click", n, this.close)
        };
        r.VERSION = "3.3.7", r.TRANSITION_DURATION = 150, r.prototype.close = function (e) {
            function n() {
                s.detach().trigger("closed.bs.alert").remove()
            }

            var i = t(this), o = i.attr("data-target");
            o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
            var s = t("#" === o ? [] : o);
            e && e.preventDefault(), s.length || (s = i.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n())
        };
        var i = t.fn.alert;
        t.fn.alert = e, t.fn.alert.Constructor = r, t.fn.alert.noConflict = function () {
            return t.fn.alert = i, this
        }, t(document).on("click.bs.alert.data-api", n, r.prototype.close)
    }(jQuery)
}, function (t, e) {
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.button"), o = "object" == typeof e && e;
                i || r.data("bs.button", i = new n(this, o)), "toggle" == e ? i.toggle() : e && i.setState(e)
            })
        }

        var n = function (e, r) {
            this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, r), this.isLoading = !1
        };
        n.VERSION = "3.3.7", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
            var n = "disabled", r = this.$element, i = r.is("input") ? "val" : "html", o = r.data();
            e += "Text", null == o.resetText && r.data("resetText", r[i]()), setTimeout(t.proxy(function () {
                r[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n).prop(n, !1))
            }, this), 0)
        }, n.prototype.toggle = function () {
            var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var r = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
            return t.fn.button = r, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
            var r = t(n.target).closest(".btn");
            e.call(r, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(jQuery)
}, function (t, e) {
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.carousel"),
                    o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e),
                    s = "string" == typeof e ? e : o.slide;
                i || r.data("bs.carousel", i = new n(this, o)), "number" == typeof e ? i.to(e) : s ? i[s]() : o.interval && i.pause().cycle()
            })
        }

        var n = function (e, n) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, n.prototype.keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, n.prototype.cycle = function (e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, n.prototype.getItemIndex = function (t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, n.prototype.getItemForDirection = function (t, e) {
            var n = this.getItemIndex(e), r = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
            if (r && !this.options.wrap) return e;
            var i = "prev" == t ? -1 : 1, o = (n + i) % this.$items.length;
            return this.$items.eq(o)
        }, n.prototype.to = function (t) {
            var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
        }, n.prototype.pause = function (e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, n.prototype.next = function () {
            if (!this.sliding) return this.slide("next")
        }, n.prototype.prev = function () {
            if (!this.sliding) return this.slide("prev")
        }, n.prototype.slide = function (e, r) {
            var i = this.$element.find(".item.active"), o = r || this.getItemForDirection(e, i), s = this.interval,
                a = "next" == e ? "left" : "right", u = this;
            if (o.hasClass("active")) return this.sliding = !1;
            var l = o[0], c = t.Event("slide.bs.carousel", {relatedTarget: l, direction: a});
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var h = t(this.$indicators.children()[this.getItemIndex(o)]);
                    h && h.addClass("active")
                }
                var p = t.Event("slid.bs.carousel", {relatedTarget: l, direction: a});
                return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, i.addClass(a), o.addClass(a), i.one("bsTransitionEnd", function () {
                    o.removeClass([e, a].join(" ")).addClass("active"), i.removeClass(["active", a].join(" ")), u.sliding = !1, setTimeout(function () {
                        u.$element.trigger(p)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
            }
        };
        var r = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
            return t.fn.carousel = r, this
        };
        var i = function (n) {
            var r, i = t(this), o = t(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
            if (o.hasClass("carousel")) {
                var s = t.extend({}, o.data(), i.data()), a = i.attr("data-slide-to");
                a && (s.interval = !1), e.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), t(window).on("load", function () {
            t('[data-ride="carousel"]').each(function () {
                var n = t(this);
                e.call(n, n.data())
            })
        })
    }(jQuery)
}, function (t, e) {
    +function (t) {
        "use strict";

        function e(e) {
            var n, r = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return t(r)
        }

        function n(e) {
            return this.each(function () {
                var n = t(this), i = n.data("bs.collapse"),
                    o = t.extend({}, r.DEFAULTS, n.data(), "object" == typeof e && e);
                !i && o.toggle && /show|hide/.test(e) && (o.toggle = !1), i || n.data("bs.collapse", i = new r(this, o)), "string" == typeof e && i[e]()
            })
        }

        var r = function (e, n) {
            this.$element = t(e), this.options = t.extend({}, r.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        r.VERSION = "3.3.7", r.TRANSITION_DURATION = 350, r.DEFAULTS = {toggle: !0}, r.prototype.dimension = function () {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        }, r.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) {
                    var o = t.Event("show.bs.collapse");
                    if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                        i && i.length && (n.call(i, "hide"), e || i.data("bs.collapse", null));
                        var s = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return a.call(this);
                        var u = t.camelCase(["scroll", s].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[s](this.$element[0][u])
                    }
                }
            }
        }, r.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var i = function () {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this)
                }
            }
        }, r.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, r.prototype.getParent = function () {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, r) {
                var i = t(r);
                this.addAriaAndCollapsedClass(e(i), i)
            }, this)).end()
        }, r.prototype.addAriaAndCollapsedClass = function (t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var i = t.fn.collapse;
        t.fn.collapse = n, t.fn.collapse.Constructor = r, t.fn.collapse.noConflict = function () {
            return t.fn.collapse = i, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (r) {
            var i = t(this);
            i.attr("data-target") || r.preventDefault();
            var o = e(i), s = o.data("bs.collapse"), a = s ? "toggle" : i.data();
            n.call(o, a)
        })
    }(jQuery)
}, function (t, e) {
    +function (t) {
        "use strict";

        function e(e) {
            var n = e.attr("data-target");
            n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var r = n && t(n);
            return r && r.length ? r : e.parent()
        }

        function n(n) {
            n && 3 === n.which || (t(i).remove(), t(o).each(function () {
                var r = t(this), i = e(r), o = {relatedTarget: this};
                i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(i[0], n.target) || (i.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
            }))
        }

        function r(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.dropdown");
                r || n.data("bs.dropdown", r = new s(this)), "string" == typeof e && r[e].call(n)
            })
        }

        var i = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', s = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
        s.VERSION = "3.3.7", s.prototype.toggle = function (r) {
            var i = t(this);
            if (!i.is(".disabled, :disabled")) {
                var o = e(i), s = o.hasClass("open");
                if (n(), !s) {
                    "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                    var a = {relatedTarget: this};
                    if (o.trigger(r = t.Event("show.bs.dropdown", a)), r.isDefaultPrevented()) return;
                    i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
                }
                return !1
            }
        }, s.prototype.keydown = function (n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var r = t(this);
                if (n.preventDefault(), n.stopPropagation(), !r.is(".disabled, :disabled")) {
                    var i = e(r), s = i.hasClass("open");
                    if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && i.find(o).trigger("focus"),
                        r.trigger("click");
                    var a = " li:not(.disabled):visible a", u = i.find(".dropdown-menu" + a);
                    if (u.length) {
                        var l = u.index(n.target);
                        38 == n.which && l > 0 && l--, 40 == n.which && l < u.length - 1 && l++, ~l || (l = 0), u.eq(l).trigger("focus")
                    }
                }
            }
        };
        var a = t.fn.dropdown;
        t.fn.dropdown = r, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
            return t.fn.dropdown = a, this
        }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
    }(jQuery)
}, function (t, e) {
    +function (t) {
        "use strict";

        function e(e, r) {
            return this.each(function () {
                var i = t(this), o = i.data("bs.modal"),
                    s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
                o || i.data("bs.modal", o = new n(this, s)), "string" == typeof e ? o[e](r) : s.show && o.show(r)
            })
        }

        var n = function (e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, n.prototype.toggle = function (t) {
            return this.isShown ? this.hide() : this.show(t)
        }, n.prototype.show = function (e) {
            var r = this, i = t.Event("show.bs.modal", {relatedTarget: e});
            this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                r.$element.one("mouseup.dismiss.bs.modal", function (e) {
                    t(e.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function () {
                var i = t.support.transition && r.$element.hasClass("fade");
                r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();
                var o = t.Event("shown.bs.modal", {relatedTarget: e});
                i ? r.$dialog.one("bsTransitionEnd", function () {
                    r.$element.trigger("focus").trigger(o)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
            }))
        }, n.prototype.hide = function (e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function () {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, n.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, n.prototype.resize = function () {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, n.prototype.hideModal = function () {
            var t = this;
            this.$element.hide(), this.backdrop(function () {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, n.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, n.prototype.backdrop = function (e) {
            var r = this, i = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var o = t.support.transition && i;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var s = function () {
                    r.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
            } else e && e()
        }, n.prototype.handleUpdate = function () {
            this.adjustDialog()
        }, n.prototype.adjustDialog = function () {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, n.prototype.resetAdjustments = function () {
            this.$element.css({paddingLeft: "", paddingRight: ""})
        }, n.prototype.checkScrollbar = function () {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, n.prototype.setScrollbar = function () {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, n.prototype.resetScrollbar = function () {
            this.$body.css("padding-right", this.originalBodyPad)
        }, n.prototype.measureScrollbar = function () {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var r = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
            return t.fn.modal = r, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
            var r = t(this), i = r.attr("href"), o = t(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                s = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(i) && i}, o.data(), r.data());
            r.is("a") && n.preventDefault(), o.one("show.bs.modal", function (t) {
                t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                    r.is(":visible") && r.trigger("focus")
                })
            }), e.call(o, s, this)
        })
    }(jQuery)
}, function (t, e) {
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.popover"), o = "object" == typeof e && e;
                !i && /destroy|hide/.test(e) || (i || r.data("bs.popover", i = new n(this, o)), "string" == typeof e && i[e]())
            })
        }

        var n = function (t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
            return n.DEFAULTS
        }, n.prototype.setContent = function () {
            var t = this.tip(), e = this.getTitle(), n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, n.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, n.prototype.getContent = function () {
            var t = this.$element, e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, n.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var r = t.fn.popover;
        t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
            return t.fn.popover = r, this
        }
    }(jQuery)
}, function (t, e) {
    +function (t) {
        "use strict";

        function e(n, r) {
            this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
        }

        function n(n) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.scrollspy"), o = "object" == typeof n && n;
                i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]()
            })
        }

        e.VERSION = "3.3.7", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function () {
            var e = this, n = "offset", r = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                var e = t(this), i = e.data("target") || e.attr("href"), o = /^#./.test(i) && t(i);
                return o && o.length && o.is(":visible") && [[o[n]().top + r, i]] || null
            }).sort(function (t, e) {
                return t[0] - e[0]
            }).each(function () {
                e.offsets.push(this[0]), e.targets.push(this[1])
            })
        }, e.prototype.process = function () {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(),
                r = this.options.offset + n - this.$scrollElement.height(), i = this.offsets, o = this.targets,
                s = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), e >= r) return s != (t = o[o.length - 1]) && this.activate(t);
            if (s && e < i[0]) return this.activeTarget = null, this.clear();
            for (t = i.length; t--;) s != o[t] && e >= i[t] && (void 0 === i[t + 1] || e < i[t + 1]) && this.activate(o[t])
        }, e.prototype.activate = function (e) {
            this.activeTarget = e, this.clear();
            var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                r = t(n).parents("li").addClass("active");
            r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function () {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var r = t.fn.scrollspy;
        t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
            return t.fn.scrollspy = r, this
        }, t(window).on("load.bs.scrollspy.data-api", function () {
            t('[data-spy="scroll"]').each(function () {
                var e = t(this);
                n.call(e, e.data())
            })
        })
    }(jQuery)
}, function (t, e) {
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.tab");
                i || r.data("bs.tab", i = new n(this)), "string" == typeof e && i[e]()
            })
        }

        var n = function (e) {
            this.element = t(e)
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
            var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), r = e.data("target");
            if (r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var i = n.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                    s = t.Event("show.bs.tab", {relatedTarget: i[0]});
                if (i.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                    var a = t(r);
                    this.activate(e.closest("li"), n), this.activate(a, a.parent(), function () {
                        i.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: i[0]
                        })
                    })
                }
            }
        }, n.prototype.activate = function (e, r, i) {
            function o() {
                s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
            }

            var s = r.find("> .active"),
                a = i && t.support.transition && (s.length && s.hasClass("fade") || !!r.find("> .fade").length);
            s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
        };
        var r = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
            return t.fn.tab = r, this
        };
        var i = function (n) {
            n.preventDefault(), e.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
    }(jQuery)
}, function (t, e) {
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.tooltip"), o = "object" == typeof e && e;
                !i && /destroy|hide/.test(e) || (i || r.data("bs.tooltip", i = new n(this, o)), "string" == typeof e && i[e]())
            })
        }

        var n = function (t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {selector: "body", padding: 0}
        }, n.prototype.init = function (e, n, r) {
            if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
                var s = i[o];
                if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != s) {
                    var a = "hover" == s ? "mouseenter" : "focusin", u = "hover" == s ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(u + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, n.prototype.getDefaults = function () {
            return n.DEFAULTS
        }, n.prototype.getOptions = function (e) {
            return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, n.prototype.getDelegateOptions = function () {
            var e = {}, n = this.getDefaults();
            return this._options && t.each(this._options, function (t, r) {
                n[t] != r && (e[t] = r)
            }), e
        }, n.prototype.enter = function (e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function () {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show())
        }, n.prototype.isInStateTrue = function () {
            for (var t in this.inState) if (this.inState[t]) return !0;
            return !1
        }, n.prototype.leave = function (e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function () {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide()
        }, n.prototype.show = function () {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var r = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !r) return;
                var i = this, o = this.tip(), s = this.getUID(this.type);
                this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
                var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                    u = /\s?auto?\s?/i, l = u.test(a);
                l && (a = a.replace(u, "") || "top"), o.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var c = this.getPosition(), h = o[0].offsetWidth, p = o[0].offsetHeight;
                if (l) {
                    var f = a, d = this.getPosition(this.$viewport);
                    a = "bottom" == a && c.bottom + p > d.bottom ? "top" : "top" == a && c.top - p < d.top ? "bottom" : "right" == a && c.right + h > d.width ? "left" : "left" == a && c.left - h < d.left ? "right" : a, o.removeClass(f).addClass(a)
                }
                var g = this.getCalculatedOffset(a, c, h, p);
                this.applyPlacement(g, a);
                var m = function () {
                    var t = i.hoverState;
                    i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
                };
                t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
            }
        }, n.prototype.applyPlacement = function (e, n) {
            var r = this.tip(), i = r[0].offsetWidth, o = r[0].offsetHeight, s = parseInt(r.css("margin-top"), 10),
                a = parseInt(r.css("margin-left"), 10);
            isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(r[0], t.extend({
                using: function (t) {
                    r.css({top: Math.round(t.top), left: Math.round(t.left)})
                }
            }, e), 0), r.addClass("in");
            var u = r[0].offsetWidth, l = r[0].offsetHeight;
            "top" == n && l != o && (e.top = e.top + o - l);
            var c = this.getViewportAdjustedDelta(n, e, u, l);
            c.left ? e.left += c.left : e.top += c.top;
            var h = /top|bottom/.test(n), p = h ? 2 * c.left - i + u : 2 * c.top - o + l,
                f = h ? "offsetWidth" : "offsetHeight";
            r.offset(e), this.replaceArrow(p, r[0][f], h)
        }, n.prototype.replaceArrow = function (t, e, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
        }, n.prototype.setContent = function () {
            var t = this.tip(), e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, n.prototype.hide = function (e) {
            function r() {
                "in" != i.hoverState && o.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
            }

            var i = this, o = t(this.$tip), s = t.Event("hide.bs." + this.type);
            if (this.$element.trigger(s), !s.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), this.hoverState = null, this
        }, n.prototype.fixTitle = function () {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, n.prototype.hasContent = function () {
            return this.getTitle()
        }, n.prototype.getPosition = function (e) {
            e = e || this.$element;
            var n = e[0], r = "BODY" == n.tagName, i = n.getBoundingClientRect();
            null == i.width && (i = t.extend({}, i, {width: i.right - i.left, height: i.bottom - i.top}));
            var o = window.SVGElement && n instanceof window.SVGElement,
                s = r ? {top: 0, left: 0} : o ? null : e.offset(),
                a = {scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
                u = r ? {width: t(window).width(), height: t(window).height()} : null;
            return t.extend({}, i, a, u, s)
        }, n.prototype.getCalculatedOffset = function (t, e, n, r) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - r,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - r / 2,
                left: e.left - n
            } : {top: e.top + e.height / 2 - r / 2, left: e.left + e.width}
        }, n.prototype.getViewportAdjustedDelta = function (t, e, n, r) {
            var i = {top: 0, left: 0};
            if (!this.$viewport) return i;
            var o = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - o - s.scroll, u = e.top + o - s.scroll + r;
                a < s.top ? i.top = s.top - a : u > s.top + s.height && (i.top = s.top + s.height - u)
            } else {
                var l = e.left - o, c = e.left + o + n;
                l < s.left ? i.left = s.left - l : c > s.right && (i.left = s.left + s.width - c)
            }
            return i
        }, n.prototype.getTitle = function () {
            var t, e = this.$element, n = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
        }, n.prototype.getUID = function (t) {
            do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
            return t
        }, n.prototype.tip = function () {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, n.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, n.prototype.enable = function () {
            this.enabled = !0
        }, n.prototype.disable = function () {
            this.enabled = !1
        }, n.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, n.prototype.toggle = function (e) {
            var n = this;
            e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, n.prototype.destroy = function () {
            var t = this;
            clearTimeout(this.timeout), this.hide(function () {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
            })
        };
        var r = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
            return t.fn.tooltip = r, this
        }
    }(jQuery)
}, function (t, e) {
    +function (t) {
        "use strict";

        function e() {
            var t = document.createElement("bootstrap"), e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var n in e) if (void 0 !== t.style[n]) return {end: e[n]};
            return !1
        }

        t.fn.emulateTransitionEnd = function (e) {
            var n = !1, r = this;
            t(this).one("bsTransitionEnd", function () {
                n = !0
            });
            var i = function () {
                n || t(r).trigger(t.support.transition.end)
            };
            return setTimeout(i, e), this
        }, t(function () {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function (e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery)
}, function (t, e, n) {
    function r() {
        return e.colors[c++ % e.colors.length]
    }

    function i(t) {
        function n() {
        }

        function i() {
            var t = i, n = +new Date, o = n - (l || n);
            t.diff = o, t.prev = l, t.curr = n, l = n, null == t.useColors && (t.useColors = e.useColors()), null == t.color && t.useColors && (t.color = r());
            for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
            s[0] = e.coerce(s[0]), "string" != typeof s[0] && (s = ["%o"].concat(s));
            var u = 0;
            s[0] = s[0].replace(/%([a-z%])/g, function (n, r) {
                if ("%%" === n) return n;
                u++;
                var i = e.formatters[r];
                if ("function" == typeof i) {
                    var o = s[u];
                    n = i.call(t, o), s.splice(u, 1), u--
                }
                return n
            }), s = e.formatArgs.apply(t, s);
            var c = i.log || e.log || console.log.bind(console);
            c.apply(t, s)
        }

        n.enabled = !1, i.enabled = !0;
        var o = e.enabled(t) ? i : n;
        return o.namespace = t, o
    }

    function o(t) {
        e.save(t);
        for (var n = (t || "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && (t = n[i].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
    }

    function s() {
        e.enable("")
    }

    function a(t) {
        var n, r;
        for (n = 0, r = e.skips.length; n < r; n++) if (e.skips[n].test(t)) return !1;
        for (n = 0, r = e.names.length; n < r; n++) if (e.names[n].test(t)) return !0;
        return !1
    }

    function u(t) {
        return t instanceof Error ? t.stack || t.message : t
    }

    e = t.exports = i.debug = i, e.coerce = u, e.disable = s, e.enable = o, e.enabled = a, e.humanize = n(129), e.names = [], e.skips = [], e.formatters = {};
    var l, c = 0
}, function (t, e, n) {
    function r(t, e) {
        if (t) {
            var n, r = "";
            for (var i in t) n = t[i], r && (r += " "), r += !n && h[i] ? i : i + '="' + (e.decodeEntities ? c.encodeXML(n) : n) + '"';
            return r
        }
    }

    function i(t, e) {
        "svg" === t.name && (e = {decodeEntities: e.decodeEntities, xmlMode: !0});
        var n = "<" + t.name, i = r(t.attribs, e);
        return i && (n += " " + i), !e.xmlMode || t.children && 0 !== t.children.length ? (n += ">", t.children && (n += d(t.children, e)), f[t.name] && !e.xmlMode || (n += "</" + t.name + ">")) : n += "/>", n
    }

    function o(t) {
        return "<" + t.data + ">"
    }

    function s(t, e) {
        var n = t.data || "";
        return !e.decodeEntities || t.parent && t.parent.name in p || (n = c.encodeXML(n)), n
    }

    function a(t) {
        return "<![CDATA[" + t.children[0].data + "]]>"
    }

    function u(t) {
        return "<!--" + t.data + "-->"
    }

    var l = n(79), c = n(96), h = {
        __proto__: null,
        allowfullscreen: !0,
        async: !0,
        autofocus: !0,
        autoplay: !0,
        checked: !0,
        controls: !0,
        default: !0,
        defer: !0,
        disabled: !0,
        hidden: !0,
        ismap: !0,
        loop: !0,
        multiple: !0,
        muted: !0,
        open: !0,
        readonly: !0,
        required: !0,
        reversed: !0,
        scoped: !0,
        seamless: !0,
        selected: !0,
        typemustmatch: !0
    }, p = {
        __proto__: null,
        style: !0,
        script: !0,
        xmp: !0,
        iframe: !0,
        noembed: !0,
        noframes: !0,
        plaintext: !0,
        noscript: !0
    }, f = {
        __proto__: null,
        area: !0,
        base: !0,
        basefont: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        frame: !0,
        hr: !0,
        img: !0,
        input: !0,
        isindex: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }, d = t.exports = function (t, e) {
        Array.isArray(t) || t.cheerio || (t = [t]), e = e || {};
        for (var n = "", r = 0; r < t.length; r++) {
            var c = t[r];
            n += "root" === c.type ? d(c.children, e) : l.isTag(c) ? i(c, e) : c.type === l.Directive ? o(c) : c.type === l.Comment ? u(c) : c.type === l.CDATA ? a(c) : s(c, e)
        }
        return n
    }
}, function (t, e) {
    t.exports = {
        Text: "text",
        Directive: "directive",
        Comment: "comment",
        Script: "script",
        Style: "style",
        Tag: "tag",
        CDATA: "cdata",
        isTag: function (t) {
            return "tag" === t.type || "script" === t.type || "style" === t.type
        }
    }
}, function (t, e, n) {
    function r(t, e, n) {
        "object" == typeof t ? (n = e, e = t, t = null) : "function" == typeof e && (n = e, e = u), this._callback = t, this._options = e || u, this._elementCB = n, this.dom = [], this._done = !1, this._tagStack = [], this._parser = this._parser || null
    }

    var i = n(11), o = /\s+/g, s = n(33), a = n(81), u = {normalizeWhitespace: !1, withStartIndices: !1};
    r.prototype.onparserinit = function (t) {
        this._parser = t
    }, r.prototype.onreset = function () {
        r.call(this, this._callback, this._options, this._elementCB)
    }, r.prototype.onend = function () {
        this._done || (this._done = !0, this._parser = null, this._handleCallback(null))
    }, r.prototype._handleCallback = r.prototype.onerror = function (t) {
        if ("function" == typeof this._callback) this._callback(t, this.dom); else if (t) throw t
    }, r.prototype.onclosetag = function () {
        var t = this._tagStack.pop();
        this._elementCB && this._elementCB(t)
    }, r.prototype._addDomElement = function (t) {
        var e = this._tagStack[this._tagStack.length - 1], n = e ? e.children : this.dom, r = n[n.length - 1];
        t.next = null, this._options.withStartIndices && (t.startIndex = this._parser.startIndex), this._options.withDomLvl1 && (t.__proto__ = "tag" === t.type ? a : s), r ? (t.prev = r, r.next = t) : t.prev = null, n.push(t), t.parent = e || null
    }, r.prototype.onopentag = function (t, e) {
        var n = {type: "script" === t ? i.Script : "style" === t ? i.Style : i.Tag, name: t, attribs: e, children: []};
        this._addDomElement(n), this._tagStack.push(n)
    }, r.prototype.ontext = function (t) {
        var e, n = this._options.normalizeWhitespace || this._options.ignoreWhitespace;
        !this._tagStack.length && this.dom.length && (e = this.dom[this.dom.length - 1]).type === i.Text ? n ? e.data = (e.data + t).replace(o, " ") : e.data += t : this._tagStack.length && (e = this._tagStack[this._tagStack.length - 1]) && (e = e.children[e.children.length - 1]) && e.type === i.Text ? n ? e.data = (e.data + t).replace(o, " ") : e.data += t : (n && (t = t.replace(o, " ")), this._addDomElement({
            data: t,
            type: i.Text
        }))
    }, r.prototype.oncomment = function (t) {
        var e = this._tagStack[this._tagStack.length - 1];
        if (e && e.type === i.Comment) return void (e.data += t);
        var n = {data: t, type: i.Comment};
        this._addDomElement(n), this._tagStack.push(n)
    }, r.prototype.oncdatastart = function () {
        var t = {children: [{data: "", type: i.Text}], type: i.CDATA};
        this._addDomElement(t), this._tagStack.push(t)
    }, r.prototype.oncommentend = r.prototype.oncdataend = function () {
        this._tagStack.pop()
    }, r.prototype.onprocessinginstruction = function (t, e) {
        this._addDomElement({name: t, data: e, type: i.Directive})
    }, t.exports = r
}, function (t, e, n) {
    var r = n(33), i = t.exports = Object.create(r), o = {tagName: "name"};
    Object.keys(o).forEach(function (t) {
        var e = o[t];
        Object.defineProperty(i, t, {
            get: function () {
                return this[e] || null
            }, set: function (t) {
                return this[e] = t, t
            }
        })
    })
}, function (t, e, n) {
    var r = t.exports;
    [n(87), n(88), n(85), n(86), n(84), n(83)].forEach(function (t) {
        Object.keys(t).forEach(function (e) {
            r[e] = t[e].bind(r)
        })
    })
}, function (t, e) {
    e.removeSubsets = function (t) {
        for (var e, n, r, i = t.length; --i > -1;) {
            for (e = n = t[i], t[i] = null, r = !0; n;) {
                if (t.indexOf(n) > -1) {
                    r = !1, t.splice(i, 1);
                    break
                }
                n = n.parent
            }
            r && (t[i] = e)
        }
        return t
    };
    var n = {DISCONNECTED: 1, PRECEDING: 2, FOLLOWING: 4, CONTAINS: 8, CONTAINED_BY: 16},
        r = e.compareDocumentPosition = function (t, e) {
            var r, i, o, s, a, u, l = [], c = [];
            if (t === e) return 0;
            for (r = t; r;) l.unshift(r), r = r.parent;
            for (r = e; r;) c.unshift(r), r = r.parent;
            for (u = 0; l[u] === c[u];) u++;
            return 0 === u ? n.DISCONNECTED : (i = l[u - 1], o = i.children, s = l[u], a = c[u], o.indexOf(s) > o.indexOf(a) ? i === e ? n.FOLLOWING | n.CONTAINED_BY : n.FOLLOWING : i === t ? n.PRECEDING | n.CONTAINS : n.PRECEDING)
        };
    e.uniqueSort = function (t) {
        var e, i, o = t.length;
        for (t = t.slice(); --o > -1;) e = t[o], i = t.indexOf(e), i > -1 && i < o && t.splice(o, 1);
        return t.sort(function (t, e) {
            var i = r(t, e);
            return i & n.PRECEDING ? -1 : i & n.FOLLOWING ? 1 : 0
        }), t
    }
}, function (t, e, n) {
    function r(t, e) {
        return "function" == typeof e ? function (n) {
            return n.attribs && e(n.attribs[t])
        } : function (n) {
            return n.attribs && n.attribs[t] === e
        }
    }

    function i(t, e) {
        return function (n) {
            return t(n) || e(n)
        }
    }

    var o = n(11), s = e.isTag = o.isTag;
    e.testElement = function (t, e) {
        for (var n in t) if (t.hasOwnProperty(n)) {
            if ("tag_name" === n) {
                if (!s(e) || !t.tag_name(e.name)) return !1
            } else if ("tag_type" === n) {
                if (!t.tag_type(e.type)) return !1
            } else if ("tag_contains" === n) {
                if (s(e) || !t.tag_contains(e.data)) return !1
            } else if (!e.attribs || !t[n](e.attribs[n])) return !1
        } else ;
        return !0
    };
    var a = {
        tag_name: function (t) {
            return "function" == typeof t ? function (e) {
                return s(e) && t(e.name)
            } : "*" === t ? s : function (e) {
                return s(e) && e.name === t
            }
        }, tag_type: function (t) {
            return "function" == typeof t ? function (e) {
                return t(e.type)
            } : function (e) {
                return e.type === t
            }
        }, tag_contains: function (t) {
            return "function" == typeof t ? function (e) {
                return !s(e) && t(e.data)
            } : function (e) {
                return !s(e) && e.data === t
            }
        }
    };
    e.getElements = function (t, e, n, o) {
        var s = Object.keys(t).map(function (e) {
            var n = t[e];
            return e in a ? a[e](n) : r(e, n)
        });
        return 0 === s.length ? [] : this.filter(s.reduce(i), e, n, o)
    }, e.getElementById = function (t, e, n) {
        return Array.isArray(e) || (e = [e]), this.findOne(r("id", t), e, n !== !1)
    }, e.getElementsByTagName = function (t, e, n, r) {
        return this.filter(a.tag_name(t), e, n, r)
    }, e.getElementsByTagType = function (t, e, n, r) {
        return this.filter(a.tag_type(t), e, n, r)
    }
}, function (t, e) {
    e.removeElement = function (t) {
        if (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.parent) {
            var e = t.parent.children;
            e.splice(e.lastIndexOf(t), 1)
        }
    }, e.replaceElement = function (t, e) {
        var n = e.prev = t.prev;
        n && (n.next = e);
        var r = e.next = t.next;
        r && (r.prev = e);
        var i = e.parent = t.parent;
        if (i) {
            var o = i.children;
            o[o.lastIndexOf(t)] = e
        }
    }, e.appendChild = function (t, e) {
        if (e.parent = t, 1 !== t.children.push(e)) {
            var n = t.children[t.children.length - 2];
            n.next = e, e.prev = n, e.next = null
        }
    }, e.append = function (t, e) {
        var n = t.parent, r = t.next;
        if (e.next = r, e.prev = t, t.next = e, e.parent = n, r) {
            if (r.prev = e, n) {
                var i = n.children;
                i.splice(i.lastIndexOf(r), 0, e)
            }
        } else n && n.children.push(e)
    }, e.prepend = function (t, e) {
        var n = t.parent;
        if (n) {
            var r = n.children;
            r.splice(r.lastIndexOf(t), 0, e)
        }
        t.prev && (t.prev.next = e), e.parent = n, e.prev = t.prev, e.next = t, t.prev = e
    }
}, function (t, e, n) {
    function r(t, e, n, r) {
        return Array.isArray(e) || (e = [e]), "number" == typeof r && isFinite(r) || (r = 1 / 0), i(t, e, n !== !1, r)
    }

    function i(t, e, n, r) {
        for (var o, s = [], a = 0, u = e.length; a < u && !(t(e[a]) && (s.push(e[a]), --r <= 0)) && (o = e[a].children, !(n && o && o.length > 0 && (o = i(t, o, n, r), s = s.concat(o), r -= o.length, r <= 0))); a++) ;
        return s
    }

    function o(t, e) {
        for (var n = 0, r = e.length; n < r; n++) if (t(e[n])) return e[n];
        return null
    }

    function s(t, e) {
        for (var n = null, r = 0, i = e.length; r < i && !n; r++) l(e[r]) && (t(e[r]) ? n = e[r] : e[r].children.length > 0 && (n = s(t, e[r].children)));
        return n
    }

    function a(t, e) {
        for (var n = 0, r = e.length; n < r; n++) if (l(e[n]) && (t(e[n]) || e[n].children.length > 0 && a(t, e[n].children))) return !0;
        return !1
    }

    function u(t, e) {
        for (var n = [], r = 0, i = e.length; r < i; r++) l(e[r]) && (t(e[r]) && n.push(e[r]), e[r].children.length > 0 && (n = n.concat(u(t, e[r].children))));
        return n
    }

    var l = n(11).isTag;
    t.exports = {filter: r, find: i, findOneChild: o, findOne: s, existsOne: a, findAll: u}
}, function (t, e, n) {
    function r(t, e) {
        return t.children ? t.children.map(function (t) {
            return s(t, e)
        }).join("") : ""
    }

    function i(t) {
        return Array.isArray(t) ? t.map(i).join("") : a(t) || t.type === o.CDATA ? i(t.children) : t.type === o.Text ? t.data : ""
    }

    var o = n(11), s = n(78), a = o.isTag;
    t.exports = {getInnerHTML: r, getOuterHTML: s, getText: i}
}, function (t, e) {
    var n = e.getChildren = function (t) {
        return t.children
    }, r = e.getParent = function (t) {
        return t.parent
    };
    e.getSiblings = function (t) {
        var e = r(t);
        return e ? n(e) : [t]
    }, e.getAttributeValue = function (t, e) {
        return t.attribs && t.attribs[e]
    }, e.hasAttrib = function (t, e) {
        return !!t.attribs && hasOwnProperty.call(t.attribs, e)
    }, e.getName = function (t) {
        return t.name
    }
}, function (t, e, n) {
    t.exports = n(90)
}, function (t, e, n) {
    t.exports = n(91), t.exports.parser = n(7)
}, function (t, e, n) {
    (function (e) {
        function r(t, n) {
            if (!(this instanceof r)) return new r(t, n);
            n = n || {}, t && "object" == typeof t && (n = t, t = null), t ? (t = c(t), n.hostname = t.host, n.secure = "https" === t.protocol || "wss" === t.protocol, n.port = t.port, t.query && (n.query = t.query)) : n.host && (n.hostname = c(n.host).host), this.secure = null != n.secure ? n.secure : e.location && "https:" === location.protocol, n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.agent = n.agent || !1, this.hostname = n.hostname || (e.location ? location.hostname : "localhost"), this.port = n.port || (e.location && location.port ? location.port : this.secure ? 443 : 80), this.query = n.query || {}, "string" == typeof this.query && (this.query = p.decode(this.query)), this.upgrade = !1 !== n.upgrade, this.path = (n.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!n.forceJSONP, this.jsonp = !1 !== n.jsonp, this.forceBase64 = !!n.forceBase64, this.enablesXDR = !!n.enablesXDR, this.timestampParam = n.timestampParam || "t", this.timestampRequests = n.timestampRequests, this.transports = n.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = n.policyPort || 843, this.rememberUpgrade = n.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = n.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== n.perMessageDeflate && (n.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = n.pfx || null, this.key = n.key || null, this.passphrase = n.passphrase || null, this.cert = n.cert || null, this.ca = n.ca || null, this.ciphers = n.ciphers || null, this.rejectUnauthorized = void 0 === n.rejectUnauthorized ? null : n.rejectUnauthorized, this.forceNode = !!n.forceNode;
            var i = "object" == typeof e && e;
            i.global === i && (n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders), n.localAddress && (this.localAddress = n.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
        }

        function i(t) {
            var e = {};
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }

        var o = n(34), s = n(9), a = n(4)("engine.io-client:socket"), u = n(41), l = n(7), c = n(47), h = n(130),
            p = n(26);
        t.exports = r, r.priorWebsocketSuccess = !1, s(r.prototype), r.protocol = l.protocol, r.Socket = r, r.Transport = n(21), r.transports = n(34), r.parser = n(7), r.prototype.createTransport = function (t) {
            a('creating transport "%s"', t);
            var e = i(this.query);
            e.EIO = l.protocol, e.transport = t, this.id && (e.sid = this.id);
            var n = new o[t]({
                agent: this.agent,
                hostname: this.hostname,
                port: this.port,
                secure: this.secure,
                path: this.path,
                query: e,
                forceJSONP: this.forceJSONP,
                jsonp: this.jsonp,
                forceBase64: this.forceBase64,
                enablesXDR: this.enablesXDR,
                timestampRequests: this.timestampRequests,
                timestampParam: this.timestampParam,
                policyPort: this.policyPort,
                socket: this,
                pfx: this.pfx,
                key: this.key,
                passphrase: this.passphrase,
                cert: this.cert,
                ca: this.ca,
                ciphers: this.ciphers,
                rejectUnauthorized: this.rejectUnauthorized,
                perMessageDeflate: this.perMessageDeflate,
                extraHeaders: this.extraHeaders,
                forceNode: this.forceNode,
                localAddress: this.localAddress
            });
            return n
        }, r.prototype.open = function () {
            var t;
            if (this.rememberUpgrade && r.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) t = "websocket"; else {
                if (0 === this.transports.length) {
                    var e = this;
                    return void setTimeout(function () {
                        e.emit("error", "No transports available")
                    }, 0)
                }
                t = this.transports[0]
            }
            this.readyState = "opening";
            try {
                t = this.createTransport(t)
            } catch (t) {
                return this.transports.shift(), void this.open()
            }
            t.open(), this.setTransport(t)
        }, r.prototype.setTransport = function (t) {
            a("setting transport %s", t.name);
            var e = this;
            this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function () {
                e.onDrain()
            }).on("packet", function (t) {
                e.onPacket(t)
            }).on("error", function (t) {
                e.onError(t)
            }).on("close", function () {
                e.onClose("transport close")
            })
        }, r.prototype.probe = function (t) {
            function e() {
                if (p.onlyBinaryUpgrades) {
                    var e = !this.supportsBinary && p.transport.supportsBinary;
                    h = h || e
                }
                h || (a('probe transport "%s" opened', t), c.send([{
                    type: "ping",
                    data: "probe"
                }]), c.once("packet", function (e) {
                    if (!h) if ("pong" === e.type && "probe" === e.data) {
                        if (a('probe transport "%s" pong', t), p.upgrading = !0, p.emit("upgrading", c), !c) return;
                        r.priorWebsocketSuccess = "websocket" === c.name, a('pausing current transport "%s"', p.transport.name), p.transport.pause(function () {
                            h || "closed" !== p.readyState && (a("changing transport and sending upgrade packet"), l(), p.setTransport(c), c.send([{type: "upgrade"}]), p.emit("upgrade", c), c = null, p.upgrading = !1, p.flush())
                        })
                    } else {
                        a('probe transport "%s" failed', t);
                        var n = new Error("probe error");
                        n.transport = c.name, p.emit("upgradeError", n)
                    }
                }))
            }

            function n() {
                h || (h = !0, l(), c.close(), c = null)
            }

            function i(e) {
                var r = new Error("probe error: " + e);
                r.transport = c.name, n(), a('probe transport "%s" failed because of error: %s', t, e), p.emit("upgradeError", r)
            }

            function o() {
                i("transport closed")
            }

            function s() {
                i("socket closed")
            }

            function u(t) {
                c && t.name !== c.name && (a('"%s" works - aborting "%s"', t.name, c.name), n())
            }

            function l() {
                c.removeListener("open", e), c.removeListener("error", i), c.removeListener("close", o), p.removeListener("close", s), p.removeListener("upgrading", u)
            }

            a('probing transport "%s"', t);
            var c = this.createTransport(t, {probe: 1}), h = !1, p = this;
            r.priorWebsocketSuccess = !1, c.once("open", e), c.once("error", i), c.once("close", o), this.once("close", s), this.once("upgrading", u), c.open()
        }, r.prototype.onOpen = function () {
            if (a("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
                a("starting upgrade probes");
                for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
            }
        }, r.prototype.onPacket = function (t) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (a('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
                case"open":
                    this.onHandshake(h(t.data));
                    break;
                case"pong":
                    this.setPing(), this.emit("pong");
                    break;
                case"error":
                    var e = new Error("server error");
                    e.code = t.data, this.onError(e);
                    break;
                case"message":
                    this.emit("data", t.data), this.emit("message", t.data)
            } else a('packet received with socket readyState "%s"', this.readyState)
        }, r.prototype.onHandshake = function (t) {
            this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
        }, r.prototype.onHeartbeat = function (t) {
            clearTimeout(this.pingTimeoutTimer);
            var e = this;
            e.pingTimeoutTimer = setTimeout(function () {
                "closed" !== e.readyState && e.onClose("ping timeout")
            }, t || e.pingInterval + e.pingTimeout)
        }, r.prototype.setPing = function () {
            var t = this;
            clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {
                a("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout)
            }, t.pingInterval)
        }, r.prototype.ping = function () {
            var t = this;
            this.sendPacket("ping", function () {
                t.emit("ping")
            })
        }, r.prototype.onDrain = function () {
            this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
        }, r.prototype.flush = function () {
            "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
        }, r.prototype.write = r.prototype.send = function (t, e, n) {
            return this.sendPacket("message", t, e, n), this
        }, r.prototype.sendPacket = function (t, e, n, r) {
            if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                n = n || {}, n.compress = !1 !== n.compress;
                var i = {type: t, data: e, options: n};
                this.emit("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush()
            }
        }, r.prototype.close = function () {
            function t() {
                r.onClose("forced close"), a("socket closing - telling transport to close"), r.transport.close()
            }

            function e() {
                r.removeListener("upgrade", e), r.removeListener("upgradeError", e), t()
            }

            function n() {
                r.once("upgrade", e), r.once("upgradeError", e)
            }

            if ("opening" === this.readyState || "open" === this.readyState) {
                this.readyState = "closing";
                var r = this;
                this.writeBuffer.length ? this.once("drain", function () {
                    this.upgrading ? n() : t()
                }) : this.upgrading ? n() : t()
            }
            return this
        }, r.prototype.onError = function (t) {
            a("socket error %j", t), r.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t)
        }, r.prototype.onClose = function (t, e) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                a('socket close with reason: "%s"', t);
                var n = this;
                clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), n.writeBuffer = [], n.prevBufferLen = 0
            }
        }, r.prototype.filterUpgrades = function (t) {
            for (var e = [], n = 0, r = t.length; n < r; n++) ~u(this.transports, t[n]) && e.push(t[n]);
            return e
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    (function (e) {
        function r() {
        }

        function i(t) {
            o.call(this, t), this.query = this.query || {}, a || (e.___eio || (e.___eio = []), a = e.___eio), this.index = a.length;
            var n = this;
            a.push(function (t) {
                n.onData(t)
            }), this.query.j = this.index, e.document && e.addEventListener && e.addEventListener("beforeunload", function () {
                n.script && (n.script.onerror = r)
            }, !1)
        }

        var o = n(35), s = n(15);
        t.exports = i;
        var a, u = /\n/g, l = /\\n/g;
        s(i, o), i.prototype.supportsBinary = !1, i.prototype.doClose = function () {
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), o.prototype.doClose.call(this)
        }, i.prototype.doPoll = function () {
            var t = this, e = document.createElement("script");
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function (e) {
                t.onError("jsonp poll error", e)
            };
            var n = document.getElementsByTagName("script")[0];
            n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e;
            var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
            r && setTimeout(function () {
                var t = document.createElement("iframe");
                document.body.appendChild(t), document.body.removeChild(t)
            }, 100)
        }, i.prototype.doWrite = function (t, e) {
            function n() {
                r(), e()
            }

            function r() {
                if (i.iframe) try {
                    i.form.removeChild(i.iframe)
                } catch (t) {
                    i.onError("jsonp polling iframe removal error", t)
                }
                try {
                    var t = '<iframe src="javascript:0" name="' + i.iframeId + '">';
                    o = document.createElement(t)
                } catch (t) {
                    o = document.createElement("iframe"), o.name = i.iframeId, o.src = "javascript:0"
                }
                o.id = i.iframeId, i.form.appendChild(o), i.iframe = o
            }

            var i = this;
            if (!this.form) {
                var o, s = document.createElement("form"), a = document.createElement("textarea"),
                    c = this.iframeId = "eio_iframe_" + this.index;
                s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = c, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), a.name = "d", s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a
            }
            this.form.action = this.uri(), r(), t = t.replace(l, "\\\n"), this.area.value = t.replace(u, "\\n");
            try {
                this.form.submit()
            } catch (t) {
            }
            this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
                "complete" === i.iframe.readyState && n()
            } : this.iframe.onload = n
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    (function (e) {
        function r() {
        }

        function i(t) {
            if (u.call(this, t), this.requestTimeout = t.requestTimeout, e.location) {
                var n = "https:" === location.protocol, r = location.port;
                r || (r = n ? 443 : 80), this.xd = t.hostname !== e.location.hostname || r !== t.port, this.xs = t.secure !== n
            } else this.extraHeaders = t.extraHeaders
        }

        function o(t) {
            this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create()
        }

        function s() {
            for (var t in o.requests) o.requests.hasOwnProperty(t) && o.requests[t].abort()
        }

        var a = n(22), u = n(35), l = n(9), c = n(15), h = n(4)("engine.io-client:polling-xhr");
        t.exports = i, t.exports.Request = o, c(i, u), i.prototype.supportsBinary = !0, i.prototype.request = function (t) {
            return t = t || {}, t.uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new o(t)
        }, i.prototype.doWrite = function (t, e) {
            var n = "string" != typeof t && void 0 !== t, r = this.request({method: "POST", data: t, isBinary: n}),
                i = this;
            r.on("success", e), r.on("error", function (t) {
                i.onError("xhr post error", t)
            }), this.sendXhr = r
        }, i.prototype.doPoll = function () {
            h("xhr poll");
            var t = this.request(), e = this;
            t.on("data", function (t) {
                e.onData(t)
            }), t.on("error", function (t) {
                e.onError("xhr poll error", t)
            }), this.pollXhr = t
        }, l(o.prototype), o.prototype.create = function () {
            var t = {agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR};
            t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;
            var n = this.xhr = new a(t), r = this;
            try {
                h("xhr open %s: %s", this.method, this.uri), n.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders) {
                        n.setDisableHeaderCheck(!0);
                        for (var i in this.extraHeaders) this.extraHeaders.hasOwnProperty(i) && n.setRequestHeader(i, this.extraHeaders[i])
                    }
                } catch (t) {
                }
                if (this.supportsBinary && (n.responseType = "arraybuffer"), "POST" === this.method) try {
                    this.isBinary ? n.setRequestHeader("Content-type", "application/octet-stream") : n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch (t) {
                }
                try {
                    n.setRequestHeader("Accept", "*/*")
                } catch (t) {
                }
                "withCredentials" in n && (n.withCredentials = !0), this.requestTimeout && (n.timeout = this.requestTimeout), this.hasXDR() ? (n.onload = function () {
                    r.onLoad()
                }, n.onerror = function () {
                    r.onError(n.responseText)
                }) : n.onreadystatechange = function () {
                    4 === n.readyState && (200 === n.status || 1223 === n.status ? r.onLoad() : setTimeout(function () {
                        r.onError(n.status)
                    }, 0))
                }, h("xhr data %s", this.data), n.send(this.data)
            } catch (t) {
                return void setTimeout(function () {
                    r.onError(t)
                }, 0)
            }
            e.document && (this.index = o.requestsCount++, o.requests[this.index] = this)
        }, o.prototype.onSuccess = function () {
            this.emit("success"), this.cleanup()
        }, o.prototype.onData = function (t) {
            this.emit("data", t), this.onSuccess()
        }, o.prototype.onError = function (t) {
            this.emit("error", t), this.cleanup(!0)
        }, o.prototype.cleanup = function (t) {
            if ("undefined" != typeof this.xhr && null !== this.xhr) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, t) try {
                    this.xhr.abort()
                } catch (t) {
                }
                e.document && delete o.requests[this.index], this.xhr = null
            }
        }, o.prototype.onLoad = function () {
            var t;
            try {
                var e;
                try {
                    e = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                } catch (t) {
                }
                if ("application/octet-stream" === e) t = this.xhr.response || this.xhr.responseText; else if (this.supportsBinary) try {
                    t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                } catch (e) {
                    for (var n = new Uint8Array(this.xhr.response), r = [], i = 0, o = n.length; i < o; i++) r.push(n[i]);
                    t = String.fromCharCode.apply(null, r)
                } else t = this.xhr.responseText
            } catch (t) {
                this.onError(t)
            }
            null != t && this.onData(t)
        }, o.prototype.hasXDR = function () {
            return "undefined" != typeof e.XDomainRequest && !this.xs && this.enablesXDR
        }, o.prototype.abort = function () {
            this.cleanup()
        }, o.requestsCount = 0, o.requests = {}, e.document && (e.attachEvent ? e.attachEvent("onunload", s) : e.addEventListener && e.addEventListener("beforeunload", s, !1))
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    (function (e) {
        function r(t) {
            var e = t && t.forceBase64;
            e && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = h && !t.forceNode, this.usingBrowserWebSocket || (p = i), o.call(this, t)
        }

        var i, o = n(21), s = n(7), a = n(26), u = n(15), l = n(55), c = n(4)("engine.io-client:websocket"),
            h = e.WebSocket || e.MozWebSocket;
        if ("undefined" == typeof window) try {
            i = n(156)
        } catch (t) {
        }
        var p = h;
        p || "undefined" != typeof window || (p = i), t.exports = r, u(r, o), r.prototype.name = "websocket", r.prototype.supportsBinary = !0, r.prototype.doOpen = function () {
            if (this.check()) {
                var t = this.uri(), e = void 0, n = {agent: this.agent, perMessageDeflate: this.perMessageDeflate};
                n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
                try {
                    this.ws = this.usingBrowserWebSocket ? new p(t) : new p(t, e, n)
                } catch (t) {
                    return this.emit("error", t)
                }
                void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
            }
        }, r.prototype.addEventListeners = function () {
            var t = this;
            this.ws.onopen = function () {
                t.onOpen()
            }, this.ws.onclose = function () {
                t.onClose()
            }, this.ws.onmessage = function (e) {
                t.onData(e.data)
            }, this.ws.onerror = function (e) {
                t.onError("websocket error", e)
            }
        }, r.prototype.write = function (t) {
            function n() {
                r.emit("flush"), setTimeout(function () {
                    r.writable = !0, r.emit("drain")
                }, 0)
            }

            var r = this;
            this.writable = !1;
            for (var i = t.length, o = 0, a = i; o < a; o++) !function (t) {
                s.encodePacket(t, r.supportsBinary, function (o) {
                    if (!r.usingBrowserWebSocket) {
                        var s = {};
                        if (t.options && (s.compress = t.options.compress), r.perMessageDeflate) {
                            var a = "string" == typeof o ? e.Buffer.byteLength(o) : o.length;
                            a < r.perMessageDeflate.threshold && (s.compress = !1)
                        }
                    }
                    try {
                        r.usingBrowserWebSocket ? r.ws.send(o) : r.ws.send(o, s)
                    } catch (t) {
                        c("websocket closed before onclose event")
                    }
                    --i || n()
                })
            }(t[o])
        }, r.prototype.onClose = function () {
            o.prototype.onClose.call(this)
        }, r.prototype.doClose = function () {
            "undefined" != typeof this.ws && this.ws.close()
        }, r.prototype.uri = function () {
            var t = this.query || {}, e = this.secure ? "wss" : "ws", n = "";
            this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = l()), this.supportsBinary || (t.b64 = 1), t = a.encode(t), t.length && (t = "?" + t);
            var r = this.hostname.indexOf(":") !== -1;
            return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
        }, r.prototype.check = function () {
            return !(!p || "__initialize" in p && this.name === r.prototype.name)
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    t.exports = Object.keys || function (t) {
        var e = [], n = Object.prototype.hasOwnProperty;
        for (var r in t) n.call(t, r) && e.push(r);
        return e
    }
}, function (t, e, n) {
    var r = n(98), i = n(97);
    e.decode = function (t, e) {
        return (!e || e <= 0 ? i.XML : i.HTML)(t)
    }, e.decodeStrict = function (t, e) {
        return (!e || e <= 0 ? i.XML : i.HTMLStrict)(t)
    }, e.encode = function (t, e) {
        return (!e || e <= 0 ? r.XML : r.HTML)(t)
    }, e.encodeXML = r.XML, e.encodeHTML4 = e.encodeHTML5 = e.encodeHTML = r.HTML, e.decodeXML = e.decodeXMLStrict = i.XML, e.decodeHTML4 = e.decodeHTML5 = e.decodeHTML = i.HTML, e.decodeHTML4Strict = e.decodeHTML5Strict = e.decodeHTMLStrict = i.HTMLStrict, e.escape = r.escape
}, function (t, e, n) {
    function r(t) {
        var e = Object.keys(t).join("|"), n = o(t);
        e += "|#[xX][\\da-fA-F]+|#\\d+";
        var r = new RegExp("&(?:" + e + ");", "g");
        return function (t) {
            return String(t).replace(r, n)
        }
    }

    function i(t, e) {
        return t < e ? 1 : -1
    }

    function o(t) {
        return function (e) {
            return "#" === e.charAt(1) ? l("X" === e.charAt(2) || "x" === e.charAt(2) ? parseInt(e.substr(3), 16) : parseInt(e.substr(2), 10)) : t[e.slice(1, -1)]
        }
    }

    var s = n(24), a = n(43), u = n(25), l = n(36), c = r(u), h = r(s), p = function () {
        function t(t) {
            return ";" !== t.substr(-1) && (t += ";"), c(t)
        }

        for (var e = Object.keys(a).sort(i), n = Object.keys(s).sort(i), r = 0, u = 0; r < n.length; r++) e[u] === n[r] ? (n[r] += ";?", u++) : n[r] += ";";
        var l = new RegExp("&(?:" + n.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), c = o(s);
        return function (e) {
            return String(e).replace(l, t)
        }
    }();
    t.exports = {XML: c, HTML: p, HTMLStrict: h}
}, function (t, e, n) {
    function r(t) {
        return Object.keys(t).sort().reduce(function (e, n) {
            return e[t[n]] = "&" + n + ";", e
        }, {})
    }

    function i(t) {
        var e = [], n = [];
        return Object.keys(t).forEach(function (t) {
            1 === t.length ? e.push("\\" + t) : n.push(t)
        }), n.unshift("[" + e.join("") + "]"), new RegExp(n.join("|"), "g")
    }

    function o(t) {
        return "&#x" + t.charCodeAt(0).toString(16).toUpperCase() + ";"
    }

    function s(t) {
        var e = t.charCodeAt(0), n = t.charCodeAt(1), r = 1024 * (e - 55296) + n - 56320 + 65536;
        return "&#x" + r.toString(16).toUpperCase() + ";"
    }

    function a(t, e) {
        function n(e) {
            return t[e]
        }

        return function (t) {
            return t.replace(e, n).replace(d, s).replace(f, o)
        }
    }

    function u(t) {
        return t.replace(g, o).replace(d, s).replace(f, o)
    }

    var l = r(n(25)), c = i(l);
    e.XML = a(l, c);
    var h = r(n(24)), p = i(h);
    e.HTML = a(h, p);
    var f = /[^\0-\x7F]/g, d = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, g = i(l);
    e.escape = u
}, function (t, e) {
    var n = n || {};
    n.ArrayBufferReader = function (t) {
        var e = this;
        t.onblob = function (t) {
            for (var n = window.atob(t), r = new ArrayBuffer(n.length), i = new Uint8Array(r), o = 0; o < n.length; o++) i[o] = n.charCodeAt(o);
            e.ondata && e.ondata(r)
        }, t.onend = function () {
            e.onend && e.onend()
        }, this.ondata = null, this.onend = null
    };
    var n = n || {};
    n.ArrayBufferWriter = function (t) {
        function e(e) {
            for (var n = "", r = 0; r < e.byteLength; r++) n += String.fromCharCode(e[r]);
            t.sendBlob(window.btoa(n))
        }

        var r = this;
        t.onack = function (t) {
            r.onack && r.onack(t)
        }, this.blobLength = n.ArrayBufferWriter.DEFAULT_BLOB_LENGTH, this.sendData = function (t) {
            var n = new Uint8Array(t);
            if (n.length <= r.blobLength) e(n); else for (var i = 0; i < n.length; i += r.blobLength) e(n.subarray(i, i + r.blobLength))
        }, this.sendEnd = function () {
            t.sendEnd()
        }, this.onack = null
    }, n.ArrayBufferWriter.DEFAULT_BLOB_LENGTH = 6048;
    var n = n || {};
    n.AudioContextFactory = {
        singleton: null, getAudioContext: function () {
            var t = window.AudioContext || window.webkitAudioContext;
            if (t) try {
                return n.AudioContextFactory.singleton || (n.AudioContextFactory.singleton = new t), n.AudioContextFactory.singleton
            } catch (t) {
            }
            return null
        }
    };
    var n = n || {};
    n.AudioPlayer = function () {
        this.sync = function () {
        }
    }, n.AudioPlayer.isSupportedType = function (t) {
        return n.RawAudioPlayer.isSupportedType(t)
    }, n.AudioPlayer.getSupportedTypes = function () {
        return n.RawAudioPlayer.getSupportedTypes()
    }, n.AudioPlayer.getInstance = function (t, e) {
        return n.RawAudioPlayer.isSupportedType(e) ? new n.RawAudioPlayer(t, e) : null
    }, n.RawAudioPlayer = function (t, e) {
        var r = n.RawAudioFormat.parse(e), i = n.AudioContextFactory.getAudioContext(), o = i.currentTime,
            s = new n.ArrayBufferReader(t), a = .02, u = .3,
            l = 1 === r.bytesPerSample ? window.Int8Array : window.Int16Array, c = 1 === r.bytesPerSample ? 128 : 32768,
            h = [], p = function (t) {
                if (t.length <= 1) return t[0];
                var e = 0;
                t.forEach(function (t) {
                    e += t.length
                });
                var n = 0, r = new l(e);
                return t.forEach(function (t) {
                    r.set(t, n), n += t.length
                }), r
            }, f = function (t) {
                for (var e = Number.MAX_VALUE, n = t.length, i = Math.floor(t.length / r.channels), o = Math.floor(r.rate * a), s = Math.max(r.channels * o, r.channels * (i - o)), u = s; u < t.length; u += r.channels) {
                    for (var c = 0, h = 0; h < r.channels; h++) c += Math.abs(t[u + h]);
                    c <= e && (n = u + r.channels, e = c)
                }
                return n === t.length ? [t] : [new l(t.buffer.slice(0, n * r.bytesPerSample)), new l(t.buffer.slice(n * r.bytesPerSample))]
            }, d = function (t) {
                h.push(new l(t))
            }, g = function () {
                var t = p(h);
                return t ? (h = f(t), t = h.shift()) : null
            }, m = function (t) {
                var e = t.length / r.channels, n = i.currentTime;
                o < n && (o = n);
                for (var s = i.createBuffer(r.channels, e, r.rate), a = 0; a < r.channels; a++) for (var u = s.getChannelData(a), l = a, h = 0; h < e; h++) u[h] = t[l] / c, l += r.channels;
                return s
            };
        s.ondata = function (t) {
            d(new l(t));
            var e = g();
            if (e) {
                var n = i.currentTime;
                o < n && (o = n);
                var s = i.createBufferSource();
                s.connect(i.destination), s.start || (s.start = s.noteOn), s.buffer = m(e), s.start(o), o += e.length / r.channels / r.rate
            }
        }, this.sync = function () {
            var t = i.currentTime;
            o = Math.min(o, t + u)
        }
    }, n.RawAudioPlayer.prototype = new n.AudioPlayer, n.RawAudioPlayer.isSupportedType = function (t) {
        return !!n.AudioContextFactory.getAudioContext() && null !== n.RawAudioFormat.parse(t)
    }, n.RawAudioPlayer.getSupportedTypes = function () {
        return n.AudioContextFactory.getAudioContext() ? ["audio/L8", "audio/L16"] : []
    };
    var n = n || {};
    n.AudioRecorder = function () {
        this.onclose = null, this.onerror = null
    }, n.AudioRecorder.isSupportedType = function (t) {
        return n.RawAudioRecorder.isSupportedType(t)
    }, n.AudioRecorder.getSupportedTypes = function () {
        return n.RawAudioRecorder.getSupportedTypes()
    }, n.AudioRecorder.getInstance = function (t, e) {
        return n.RawAudioRecorder.isSupportedType(e) ? new n.RawAudioRecorder(t, e) : null
    }, n.RawAudioRecorder = function (t, e) {
        var r = this, i = 2048, o = 3, s = n.RawAudioFormat.parse(e), a = n.AudioContextFactory.getAudioContext(),
            u = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia).bind(navigator),
            l = new n.ArrayBufferWriter(t), c = 1 === s.bytesPerSample ? window.Int8Array : window.Int16Array,
            h = 1 === s.bytesPerSample ? 128 : 32768, p = 0, f = 0, d = null, g = null, m = null, y = function (t) {
                if (0 === t) return 1;
                var e = Math.PI * t;
                return Math.sin(e) / e
            }, v = function (t, e) {
                return -e < t && t < e ? y(t) * y(t / e) : 0
            }, b = function (t, e) {
                for (var n = (t.length - 1) * e, r = Math.floor(n) - o + 1, i = Math.floor(n) + o, s = 0, a = r; a <= i; a++) s += (t[a] || 0) * v(n - a, o);
                return s
            }, w = function (t) {
                var e = t.length;
                p += e;
                var n = Math.round(p * s.rate / t.sampleRate), r = n - f;
                f += r;
                for (var i = new c(r * s.channels), o = 0; o < s.channels; o++) for (var a = t.getChannelData(o), u = o, l = 0; l < r; l++) i[u] = b(a, l / (r - 1)) * h, u += s.channels;
                return i
            }, x = function () {
                u({audio: !0}, function (t) {
                    m = a.createScriptProcessor(i, s.channels, s.channels), m.connect(a.destination), m.onaudioprocess = function (t) {
                        l.sendData(w(t.inputBuffer).buffer)
                    }, g = a.createMediaStreamSource(t), g.connect(m), d = t
                }, function () {
                    l.sendEnd(), r.onerror && r.onerror()
                })
            }, k = function () {
                if (g && g.disconnect(), m && m.disconnect(), d) for (var t = d.getTracks(), e = 0; e < t.length; e++) t[e].stop();
                m = null, g = null, d = null, l.sendEnd()
            };
        l.onack = function (t) {
            t.code !== n.Status.Code.SUCCESS || d ? (k(), l.onack = null, t.code === n.Status.Code.RESOURCE_CLOSED ? r.onclose && r.onclose() : r.onerror && r.onerror()) : x()
        }
    }, n.RawAudioRecorder.prototype = new n.AudioRecorder, n.RawAudioRecorder.isSupportedType = function (t) {
        return !!n.AudioContextFactory.getAudioContext() && null !== n.RawAudioFormat.parse(t)
    }, n.RawAudioRecorder.getSupportedTypes = function () {
        return n.AudioContextFactory.getAudioContext() ? ["audio/L8", "audio/L16"] : []
    };
    var n = n || {};
    n.BlobReader = function (t, e) {
        var n, r = this, i = 0;
        n = window.BlobBuilder ? new BlobBuilder : window.WebKitBlobBuilder ? new WebKitBlobBuilder : window.MozBlobBuilder ? new MozBlobBuilder : new function () {
            var t = [];
            this.append = function (n) {
                t.push(new Blob([n], {type: e}))
            }, this.getBlob = function () {
                return new Blob(t, {type: e})
            }
        }, t.onblob = function (e) {
            for (var o = window.atob(e), s = new ArrayBuffer(o.length), a = new Uint8Array(s), u = 0; u < o.length; u++) a[u] = o.charCodeAt(u);
            n.append(s), i += s.byteLength, r.onprogress && r.onprogress(s.byteLength), t.sendAck("OK", 0)
        }, t.onend = function () {
            r.onend && r.onend()
        }, this.getLength = function () {
            return i
        }, this.getBlob = function () {
            return n.getBlob()
        }, this.onprogress = null, this.onend = null
    };
    var n = n || {};
    n.BlobWriter = function (t) {
        var e = this, r = new n.ArrayBufferWriter(t);
        r.onack = function (t) {
            e.onack && e.onack(t)
        };
        var i = function (t, e, n) {
            var r = (t.slice || t.webkitSlice || t.mozSlice).bind(t), i = n - e;
            if (i !== n) {
                var o = r(e, i);
                if (o.size === i) return o
            }
            return r(e, n)
        };
        this.sendBlob = function (t) {
            var n = 0, o = new FileReader, s = function () {
                if (n >= t.size) return void (e.oncomplete && e.oncomplete(t));
                var s = i(t, n, n + r.blobLength);
                n += r.blobLength, o.readAsArrayBuffer(s)
            };
            o.onload = function () {
                r.sendData(o.result), r.onack = function (i) {
                    e.onack && e.onack(i), i.isError() || (e.onprogress && e.onprogress(t, n - r.blobLength), s())
                }
            }, o.onerror = function () {
                e.onerror && e.onerror(t, n, o.error)
            }, s()
        }, this.sendEnd = function () {
            r.sendEnd()
        }, this.onack = null, this.onerror = null, this.onprogress = null, this.oncomplete = null
    };
    var n = n || {};
    n.Client = function (t) {
        function e(t) {
            t != p && (p = t, o.onstatechange && o.onstatechange(p))
        }

        function r() {
            return p == l || p == u
        }

        function i(e) {
            var r = x[e];
            return null == r && (r = x[e] = new n.Parser, r.oninstruction = t.oninstruction), r
        }

        var o = this, s = 0, a = 1, u = 2, l = 3, c = 4, h = 5, p = s, f = 0, d = null,
            g = {0: "butt", 1: "round", 2: "square"}, m = {0: "bevel", 1: "miter", 2: "round"}, y = new n.Display,
            v = {}, b = {}, w = {}, x = [], k = [], S = [], _ = new n.IntegerPool, T = [];
        this.getDisplay = function () {
            return y
        }, this.sendSize = function (e, n) {
            r() && t.sendMessage("size", e, n)
        }, this.sendKeyEvent = function (e, n) {
            r() && t.sendMessage("key", n, e)
        }, this.sendMouseState = function (e) {
            if (r()) {
                y.moveCursor(Math.floor(e.x), Math.floor(e.y));
                var n = 0;
                e.left && (n |= 1), e.middle && (n |= 2), e.right && (n |= 4), e.up && (n |= 8), e.down && (n |= 16), t.sendMessage("mouse", Math.floor(e.x), Math.floor(e.y), n)
            }
        }, this.setClipboard = function (t) {
            if (r()) {
                for (var e = o.createClipboardStream("text/plain"), i = new n.StringWriter(e), s = 0; s < t.length; s += 4096) i.sendText(t.substring(s, s + 4096));
                i.sendEnd()
            }
        }, this.createOutputStream = function () {
            var t = _.next(), e = T[t] = new n.OutputStream(o, t);
            return e
        }, this.createAudioStream = function (e) {
            var n = o.createOutputStream();
            return t.sendMessage("audio", n.index, e), n
        }, this.createFileStream = function (e, n) {
            var r = o.createOutputStream();
            return t.sendMessage("file", r.index, e, n), r
        }, this.createPipeStream = function (e, n) {
            var r = o.createOutputStream();
            return t.sendMessage("pipe", r.index, e, n), r
        }, this.createClipboardStream = function (e) {
            var n = o.createOutputStream();
            return t.sendMessage("clipboard", n.index, e), n
        }, this.createObjectOutputStream = function (e, n, r) {
            var i = o.createOutputStream();
            return t.sendMessage("put", e, i.index, n, r), i
        }, this.requestObjectInputStream = function (e, n) {
            r() && t.sendMessage("get", e, n)
        }, this.sendAck = function (e, n, i) {
            r() && t.sendMessage("ack", e, n, i)
        }, this.sendBlob = function (e, n) {
            r() && t.sendMessage("blob", e, n)
        }, this.endStream = function (e) {
            r() && (t.sendMessage("end", e), T[e] && (_.free(e), delete T[e]))
        }, this.onstatechange = null, this.onname = null, this.onerror = null, this.onaudio = null, this.onvideo = null, this.onclipboard = null, this.onfile = null, this.onfilesystem = null, this.onpipe = null, this.onsync = null;
        var C = function (t) {
            var e = v[t];
            return e || (e = 0 === t ? y.getDefaultLayer() : t > 0 ? y.createLayer() : y.createBuffer(), v[t] = e), e
        }, E = {
            "miter-limit": function (t, e) {
                y.setMiterLimit(t, parseFloat(e))
            }
        }, A = {
            ack: function (t) {
                var e = parseInt(t[0]), r = t[1], i = parseInt(t[2]), o = T[e];
                o && (o.onack && o.onack(new n.Status(i, r)), i >= 256 && T[e] === o && (_.free(e), delete T[e]))
            }, arc: function (t) {
                var e = C(parseInt(t[0])), n = parseInt(t[1]), r = parseInt(t[2]), i = parseInt(t[3]),
                    o = parseFloat(t[4]), s = parseFloat(t[5]), a = parseInt(t[6]);
                y.arc(e, n, r, i, o, s, 0 != a)
            }, audio: function (t) {
                var e = parseInt(t[0]), r = t[1], i = k[e] = new n.InputStream(o, e), s = null;
                o.onaudio && (s = o.onaudio(i, r)), s || (s = n.AudioPlayer.getInstance(i, r)), s ? (b[e] = s, o.sendAck(e, "OK", 0)) : o.sendAck(e, "BAD TYPE", 783)
            }, blob: function (t) {
                var e = parseInt(t[0]), n = t[1], r = k[e];
                r && r.onblob && r.onblob(n)
            }, body: function (t) {
                var e = parseInt(t[0]), r = S[e], i = parseInt(t[1]), s = t[2], a = t[3];
                if (r && r.onbody) {
                    var u = k[i] = new n.InputStream(o, i);
                    r.onbody(u, s, a)
                } else o.sendAck(i, "Receipt of body unsupported", 256)
            }, cfill: function (t) {
                var e = parseInt(t[0]), n = C(parseInt(t[1])), r = parseInt(t[2]), i = parseInt(t[3]),
                    o = parseInt(t[4]), s = parseInt(t[5]);
                y.setChannelMask(n, e), y.fillColor(n, r, i, o, s)
            }, clip: function (t) {
                var e = C(parseInt(t[0]));
                y.clip(e)
            }, clipboard: function (t) {
                var e = parseInt(t[0]), r = t[1];
                if (o.onclipboard) {
                    var i = k[e] = new n.InputStream(o, e);
                    o.onclipboard(i, r)
                } else o.sendAck(e, "Clipboard unsupported", 256)
            }, close: function (t) {
                var e = C(parseInt(t[0]));
                y.close(e)
            }, copy: function (t) {
                var e = C(parseInt(t[0])), n = parseInt(t[1]), r = parseInt(t[2]), i = parseInt(t[3]),
                    o = parseInt(t[4]), s = parseInt(t[5]), a = C(parseInt(t[6])), u = parseInt(t[7]),
                    l = parseInt(t[8]);
                y.setChannelMask(a, s), y.copy(e, n, r, i, o, a, u, l)
            }, cstroke: function (t) {
                var e = parseInt(t[0]), n = C(parseInt(t[1])), r = g[parseInt(t[2])], i = m[parseInt(t[3])],
                    o = parseInt(t[4]), s = parseInt(t[5]), a = parseInt(t[6]), u = parseInt(t[7]), l = parseInt(t[8]);
                y.setChannelMask(n, e), y.strokeColor(n, r, i, o, s, a, u, l)
            }, cursor: function (t) {
                var e = parseInt(t[0]), n = parseInt(t[1]), r = C(parseInt(t[2])), i = parseInt(t[3]),
                    o = parseInt(t[4]), s = parseInt(t[5]), a = parseInt(t[6]);
                y.setCursor(e, n, r, i, o, s, a)
            }, curve: function (t) {
                var e = C(parseInt(t[0])), n = parseInt(t[1]), r = parseInt(t[2]), i = parseInt(t[3]),
                    o = parseInt(t[4]), s = parseInt(t[5]), a = parseInt(t[6]);
                y.curveTo(e, n, r, i, o, s, a)
            }, dispose: function (t) {
                var e = parseInt(t[0]);
                if (e > 0) {
                    var n = C(e);
                    n.dispose(), delete v[e]
                } else e < 0 && delete v[e]
            }, distort: function (t) {
                var e = parseInt(t[0]), n = parseFloat(t[1]), r = parseFloat(t[2]), i = parseFloat(t[3]),
                    o = parseFloat(t[4]), s = parseFloat(t[5]), a = parseFloat(t[6]);
                if (e >= 0) {
                    var u = C(e);
                    u.distort(n, r, i, o, s, a)
                }
            }, error: function (t) {
                var e = t[0], r = parseInt(t[1]);
                o.onerror && o.onerror(new n.Status(r, e)), o.disconnect()
            }, end: function (t) {
                var e = parseInt(t[0]), n = k[e];
                n && (n.onend && n.onend(), delete k[e])
            }, file: function (t) {
                var e = parseInt(t[0]), r = t[1], i = t[2];
                if (o.onfile) {
                    var s = k[e] = new n.InputStream(o, e);
                    o.onfile(s, r, i)
                } else o.sendAck(e, "File transfer unsupported", 256)
            }, filesystem: function (t) {
                var e = parseInt(t[0]), r = t[1];
                if (o.onfilesystem) {
                    var i = S[e] = new n.Object(o, e);
                    o.onfilesystem(i, r)
                }
            }, identity: function (t) {
                var e = C(parseInt(t[0]));
                y.setTransform(e, 1, 0, 0, 1, 0, 0)
            }, img: function (t) {
                var e = parseInt(t[0]), r = parseInt(t[1]), i = C(parseInt(t[2])), s = t[3], a = parseInt(t[4]),
                    u = parseInt(t[5]), l = k[e] = new n.InputStream(o, e), c = new n.DataURIReader(l, s);
                c.onend = function () {
                    y.setChannelMask(i, r), y.draw(i, a, u, c.getURI())
                }
            }, jpeg: function (t) {
                var e = parseInt(t[0]), n = C(parseInt(t[1])), r = parseInt(t[2]), i = parseInt(t[3]), o = t[4];
                y.setChannelMask(n, e), y.draw(n, r, i, "data:image/jpeg;base64," + o)
            }, lfill: function (t) {
                var e = parseInt(t[0]), n = C(parseInt(t[1])), r = C(parseInt(t[2]));
                y.setChannelMask(n, e), y.fillLayer(n, r)
            }, line: function (t) {
                var e = C(parseInt(t[0])), n = parseInt(t[1]), r = parseInt(t[2]);
                y.lineTo(e, n, r)
            }, lstroke: function (t) {
                var e = parseInt(t[0]), n = C(parseInt(t[1])), r = C(parseInt(t[2]));
                y.setChannelMask(n, e), y.strokeLayer(n, r)
            }, move: function (t) {
                var e = parseInt(t[0]), n = parseInt(t[1]), r = parseInt(t[2]), i = parseInt(t[3]), o = parseInt(t[4]);
                if (e > 0 && n >= 0) {
                    var s = C(e), a = C(n);
                    s.move(a, r, i, o)
                }
            }, name: function (t) {
                o.onname && o.onname(t[0])
            }, nest: function (t) {
                var e = i(parseInt(t[0]));
                e.receive(t[1])
            }, pipe: function (t) {
                var e = parseInt(t[0]), r = t[1], i = t[2];
                if (o.onpipe) {
                    var s = k[e] = new n.InputStream(o, e);
                    o.onpipe(s, r, i)
                } else o.sendAck(e, "Named pipes unsupported", 256)
            }, png: function (t) {
                var e = parseInt(t[0]), n = C(parseInt(t[1])), r = parseInt(t[2]), i = parseInt(t[3]), o = t[4];
                y.setChannelMask(n, e), y.draw(n, r, i, "data:image/png;base64," + o)
            }, pop: function (t) {
                var e = C(parseInt(t[0]));
                y.pop(e)
            }, push: function (t) {
                var e = C(parseInt(t[0]));
                y.push(e)
            }, rect: function (t) {
                var e = C(parseInt(t[0])), n = parseInt(t[1]), r = parseInt(t[2]), i = parseInt(t[3]),
                    o = parseInt(t[4]);
                y.rect(e, n, r, i, o)
            }, reset: function (t) {
                var e = C(parseInt(t[0]));
                y.reset(e)
            }, set: function (t) {
                var e = C(parseInt(t[0])), n = t[1], r = t[2], i = E[n];
                i && i(e, r)
            }, shade: function (t) {
                var e = parseInt(t[0]), n = parseInt(t[1]);
                if (e >= 0) {
                    var r = C(e);
                    r.shade(n)
                }
            }, size: function (t) {
                var e = parseInt(t[0]), n = C(e), r = parseInt(t[1]), i = parseInt(t[2]);
                y.resize(n, r, i)
            }, start: function (t) {
                var e = C(parseInt(t[0])), n = parseInt(t[1]), r = parseInt(t[2]);
                y.moveTo(e, n, r)
            }, sync: function (n) {
                var r = parseInt(n[0]);
                y.flush(function () {
                    for (var e in b) {
                        var n = b[e];
                        n && n.sync()
                    }
                    r !== f && (t.sendMessage("sync", r), f = r)
                }), p === u && e(l), o.onsync && o.onsync(r)
            }, transfer: function (t) {
                var e = C(parseInt(t[0])), r = parseInt(t[1]), i = parseInt(t[2]), o = parseInt(t[3]),
                    s = parseInt(t[4]), a = parseInt(t[5]), u = C(parseInt(t[6])), l = parseInt(t[7]),
                    c = parseInt(t[8]);
                3 === a ? y.put(e, r, i, o, s, u, l, c) : 5 !== a && y.transfer(e, r, i, o, s, u, l, c, n.Client.DefaultTransferFunction[a])
            }, transform: function (t) {
                var e = C(parseInt(t[0])), n = parseFloat(t[1]), r = parseFloat(t[2]), i = parseFloat(t[3]),
                    o = parseFloat(t[4]), s = parseFloat(t[5]), a = parseFloat(t[6]);
                y.transform(e, n, r, i, o, s, a)
            }, undefine: function (t) {
                var e = parseInt(t[0]), n = S[e];
                n && n.onundefine && n.onundefine()
            }, video: function (t) {
                var e = parseInt(t[0]), r = C(parseInt(t[1])), i = t[2], s = k[e] = new n.InputStream(o, e), a = null;
                o.onvideo && (a = o.onvideo(s, r, i)), a || (a = n.VideoPlayer.getInstance(s, r, i)), a ? (w[e] = a, o.sendAck(e, "OK", 0)) : o.sendAck(e, "BAD TYPE", 783)
            }
        };
        t.oninstruction = function (t, e) {
            var n = A[t];
            n && n(e)
        }, this.disconnect = function () {
            p != h && p != c && (e(c), d && window.clearInterval(d), t.sendMessage("disconnect"), t.disconnect(), e(h))
        }, this.connect = function (n) {
            e(a);
            try {
                t.connect(n)
            } catch (t) {
                throw e(s), t
            }
            d = window.setInterval(function () {
                t.sendMessage("sync", f)
            }, 5e3), e(u)
        }
    }, n.Client.DefaultTransferFunction = {
        0: function (t, e) {
            e.red = e.green = e.blue = 0
        }, 15: function (t, e) {
            e.red = e.green = e.blue = 255
        }, 3: function (t, e) {
            e.red = t.red, e.green = t.green, e.blue = t.blue, e.alpha = t.alpha
        }, 5: function (t, e) {
        }, 12: function (t, e) {
            e.red = 255 & ~t.red, e.green = 255 & ~t.green, e.blue = 255 & ~t.blue, e.alpha = t.alpha
        }, 10: function (t, e) {
            e.red = 255 & ~e.red, e.green = 255 & ~e.green, e.blue = 255 & ~e.blue
        }, 1: function (t, e) {
            e.red = t.red & e.red, e.green = t.green & e.green, e.blue = t.blue & e.blue
        }, 14: function (t, e) {
            e.red = 255 & ~(t.red & e.red), e.green = 255 & ~(t.green & e.green), e.blue = 255 & ~(t.blue & e.blue)
        }, 7: function (t, e) {
            e.red = t.red | e.red, e.green = t.green | e.green, e.blue = t.blue | e.blue
        }, 8: function (t, e) {
            e.red = 255 & ~(t.red | e.red), e.green = 255 & ~(t.green | e.green), e.blue = 255 & ~(t.blue | e.blue)
        }, 6: function (t, e) {
            e.red = t.red ^ e.red, e.green = t.green ^ e.green, e.blue = t.blue ^ e.blue
        }, 9: function (t, e) {
            e.red = 255 & ~(t.red ^ e.red), e.green = 255 & ~(t.green ^ e.green), e.blue = 255 & ~(t.blue ^ e.blue)
        }, 4: function (t, e) {
            e.red = 255 & (~t.red & e.red), e.green = 255 & (~t.green & e.green), e.blue = 255 & (~t.blue & e.blue)
        }, 13: function (t, e) {
            e.red = 255 & (~t.red | e.red), e.green = 255 & (~t.green | e.green), e.blue = 255 & (~t.blue | e.blue)
        }, 2: function (t, e) {
            e.red = 255 & (t.red & ~e.red), e.green = 255 & (t.green & ~e.green), e.blue = 255 & (t.blue & ~e.blue)
        }, 11: function (t, e) {
            e.red = 255 & (t.red | ~e.red), e.green = 255 & (t.green | ~e.green), e.blue = 255 & (t.blue | ~e.blue)
        }
    };
    var n = n || {};
    n.DataURIReader = function (t, e) {
        var n = this, r = "data:" + e + ";base64,";
        t.onblob = function (t) {
            r += t
        }, t.onend = function () {
            n.onend && n.onend()
        }, this.getURI = function () {
            return r
        }, this.onend = null
    };
    var n = n || {};
    n.Display = function () {
        function t() {
            for (var t = 0; t < d.length;) {
                var e = d[t];
                if (!e.isReady()) break;
                e.flush(), t++
            }
            d.splice(0, t)
        }

        function e(t, e) {
            this.isReady = function () {
                for (var t = 0; t < e.length; t++) if (e[t].blocked) return !1;
                return !0
            }, this.flush = function () {
                for (var n = 0; n < e.length; n++) e[n].execute();
                t && t()
            }
        }

        function r(e, n) {
            var r = this;
            this.blocked = n, this.unblock = function () {
                r.blocked && (r.blocked = !1, t())
            }, this.execute = function () {
                e && e()
            }
        }

        function i(t, e) {
            var n = new r(t, e);
            return f.push(n), n
        }

        var o = this, s = 0, a = 0, u = 1, l = document.createElement("div");
        l.style.position = "relative", l.style.width = s + "px", l.style.height = a + "px", l.style.transformOrigin = l.style.webkitTransformOrigin = l.style.MozTransformOrigin = l.style.OTransformOrigin = l.style.msTransformOrigin = "0 0";
        var c = new n.Display.VisibleLayer(s, a), h = new n.Display.VisibleLayer(0, 0);
        h.setChannelMask(n.Layer.SRC), l.appendChild(c.getElement()), l.appendChild(h.getElement());
        var p = document.createElement("div");
        p.style.position = "relative", p.style.width = s * u + "px", p.style.height = a * u + "px", p.appendChild(l), this.cursorHotspotX = 0, this.cursorHotspotY = 0, this.cursorX = 0, this.cursorY = 0, this.onresize = null, this.oncursor = null;
        var f = [], d = [];
        this.getElement = function () {
            return p
        }, this.getWidth = function () {
            return s
        }, this.getHeight = function () {
            return a
        }, this.getDefaultLayer = function () {
            return c
        }, this.getCursorLayer = function () {
            return h
        }, this.createLayer = function () {
            var t = new n.Display.VisibleLayer(s, a);
            return t.move(c, 0, 0, 0), t
        }, this.createBuffer = function () {
            var t = new n.Layer(0, 0);
            return t.autosize = 1, t
        }, this.flush = function (n) {
            d.push(new e(n, f)), f = [], t()
        }, this.setCursor = function (t, e, n, r, s, a, u) {
            i(function () {
                o.cursorHotspotX = t, o.cursorHotspotY = e, h.resize(a, u), h.copy(n, r, s, a, u, 0, 0), o.moveCursor(o.cursorX, o.cursorY), o.oncursor && o.oncursor(h.getCanvas(), t, e)
            })
        }, this.showCursor = function (t) {
            var e = h.getElement(), n = e.parentNode;
            t === !1 ? n && n.removeChild(e) : n !== l && l.appendChild(e)
        }, this.moveCursor = function (t, e) {
            h.translate(t - o.cursorHotspotX, e - o.cursorHotspotY), o.cursorX = t, o.cursorY = e
        }, this.resize = function (t, e, n) {
            i(function () {
                t.resize(e, n), t === c && (s = e, a = n, l.style.width = s + "px", l.style.height = a + "px", p.style.width = s * u + "px", p.style.height = a * u + "px", o.onresize && o.onresize(e, n))
            })
        }, this.drawImage = function (t, e, n, r) {
            i(function () {
                t.drawImage(e, n, r)
            })
        }, this.drawBlob = function (t, e, n, r) {
            var o = URL.createObjectURL(r), s = i(function () {
                t.drawImage(e, n, a), URL.revokeObjectURL(o)
            }, !0), a = new Image;
            a.onload = s.unblock, a.src = o
        }, this.draw = function (t, e, n, r) {
            var o = i(function () {
                t.drawImage(e, n, s)
            }, !0), s = new Image;
            s.onload = o.unblock, s.src = r
        }, this.play = function (t, e, n, r) {
            var o = document.createElement("video");
            o.type = e, o.src = r, o.addEventListener("play", function () {
                function e() {
                    t.drawImage(0, 0, o), o.ended || window.setTimeout(e, 20)
                }

                e()
            }, !1), i(o.play)
        }, this.transfer = function (t, e, n, r, o, s, a, u, l) {
            i(function () {
                s.transfer(t, e, n, r, o, a, u, l)
            })
        }, this.put = function (t, e, n, r, o, s, a, u) {
            i(function () {
                s.put(t, e, n, r, o, a, u)
            })
        }, this.copy = function (t, e, n, r, o, s, a, u) {
            i(function () {
                s.copy(t, e, n, r, o, a, u)
            })
        }, this.moveTo = function (t, e, n) {
            i(function () {
                t.moveTo(e, n)
            })
        }, this.lineTo = function (t, e, n) {
            i(function () {
                t.lineTo(e, n)
            })
        }, this.arc = function (t, e, n, r, o, s, a) {
            i(function () {
                t.arc(e, n, r, o, s, a)
            })
        }, this.curveTo = function (t, e, n, r, o, s, a) {
            i(function () {
                t.curveTo(e, n, r, o, s, a)
            })
        }, this.close = function (t) {
            i(function () {
                t.close()
            })
        }, this.rect = function (t, e, n, r, o) {
            i(function () {
                t.rect(e, n, r, o)
            })
        }, this.clip = function (t) {
            i(function () {
                t.clip()
            })
        }, this.strokeColor = function (t, e, n, r, o, s, a, u) {
            i(function () {
                t.strokeColor(e, n, r, o, s, a, u)
            })
        }, this.fillColor = function (t, e, n, r, o) {
            i(function () {
                t.fillColor(e, n, r, o)
            })
        }, this.strokeLayer = function (t, e, n, r, o) {
            i(function () {
                t.strokeLayer(e, n, r, o)
            })
        }, this.fillLayer = function (t, e) {
            i(function () {
                t.fillLayer(e)
            })
        }, this.push = function (t) {
            i(function () {
                t.push()
            })
        }, this.pop = function (t) {
            i(function () {
                t.pop()
            })
        }, this.reset = function (t) {
            i(function () {
                t.reset()
            })
        }, this.setTransform = function (t, e, n, r, o, s, a) {
            i(function () {
                t.setTransform(e, n, r, o, s, a)
            })
        }, this.transform = function (t, e, n, r, o, s, a) {
            i(function () {
                t.transform(e, n, r, o, s, a)
            })
        }, this.setChannelMask = function (t, e) {
            i(function () {
                t.setChannelMask(e)
            })
        }, this.setMiterLimit = function (t, e) {
            i(function () {
                t.setMiterLimit(e)
            })
        }, this.scale = function (t) {
            l.style.transform = l.style.WebkitTransform = l.style.MozTransform = l.style.OTransform = l.style.msTransform = "scale(" + t + "," + t + ")", u = t, p.style.width = s * u + "px", p.style.height = a * u + "px"
        }, this.getScale = function () {
            return u
        }, this.flatten = function () {
            function t(t) {
                var e = [];
                for (var n in t.children) e.push(t.children[n]);
                return e.sort(function (t, e) {
                    var n = t.z - e.z;
                    if (0 !== n) return n;
                    var r = t.getElement(), i = e.getElement(), o = i.compareDocumentPosition(r);
                    return o & Node.DOCUMENT_POSITION_PRECEDING ? -1 : o & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : 0
                }), e
            }

            function e(n, i, o) {
                if (n.width > 0 && n.height > 0) {
                    var s = r.globalAlpha;
                    r.globalAlpha *= n.alpha / 255, r.drawImage(n.getCanvas(), i, o);
                    for (var a = t(n), u = 0; u < a.length; u++) {
                        var l = a[u];
                        e(l, i + l.x, o + l.y)
                    }
                    r.globalAlpha = s
                }
            }

            var n = document.createElement("canvas");
            n.width = c.width, n.height = c.height;
            var r = n.getContext("2d");
            return e(c, 0, 0), n
        }
    }, n.Display.VisibleLayer = function (t, e) {
        n.Layer.apply(this, [t, e]);
        var r = this;
        this.__unique_id = n.Display.VisibleLayer.__next_id++, this.alpha = 255, this.x = 0, this.y = 0, this.z = 0, this.matrix = [1, 0, 0, 1, 0, 0], this.parent = null, this.children = {};
        var i = r.getCanvas();
        i.style.position = "absolute", i.style.left = "0px", i.style.top = "0px";
        var o = document.createElement("div");
        o.appendChild(i), o.style.width = t + "px", o.style.height = e + "px", o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", o.style.overflow = "hidden";
        var s = this.resize;
        this.resize = function (t, e) {
            o.style.width = t + "px", o.style.height = e + "px", s(t, e)
        }, this.getElement = function () {
            return o
        };
        var a = "translate(0px, 0px)", u = "matrix(1, 0, 0, 1, 0, 0)";
        this.translate = function (t, e) {
            r.x = t, r.y = e, a = "translate(" + t + "px," + e + "px)", o.style.transform = o.style.WebkitTransform = o.style.MozTransform = o.style.OTransform = o.style.msTransform = a + " " + u
        }, this.move = function (t, e, n, i) {
            if (r.parent !== t) {
                r.parent && delete r.parent.children[r.__unique_id], r.parent = t, t.children[r.__unique_id] = r;
                var s = t.getElement();
                s.appendChild(o)
            }
            r.translate(e, n), r.z = i, o.style.zIndex = i
        }, this.shade = function (t) {
            r.alpha = t, o.style.opacity = t / 255
        }, this.dispose = function () {
            r.parent && (delete r.parent.children[r.__unique_id], r.parent = null), o.parentNode && o.parentNode.removeChild(o)
        }, this.distort = function (t, e, n, i, s, l) {
            r.matrix = [t, e, n, i, s, l], u = "matrix(" + t + "," + e + "," + n + "," + i + "," + s + "," + l + ")", o.style.transform = o.style.WebkitTransform = o.style.MozTransform = o.style.OTransform = o.style.msTransform = a + " " + u
        }
    }, n.Display.VisibleLayer.__next_id = 0;
    var n = n || {};
    n.InputStream = function (t, e) {
        var n = this;
        this.index = e, this.onblob = null, this.onend = null, this.sendAck = function (e, r) {
            t.sendAck(n.index, e, r)
        }
    };
    var n = n || {};
    n.IntegerPool = function () {
        var t = this, e = [];
        this.next_int = 0, this.next = function () {
            return e.length > 0 ? e.shift() : t.next_int++
        }, this.free = function (t) {
            e.push(t)
        }
    };
    var n = n || {};
    n.JSONReader = function (t) {
        var e = this, r = new n.StringReader(t), i = "";
        this.getLength = function () {
            return i.length
        }, this.getJSON = function () {
            return JSON.parse(i)
        }, r.ontext = function (t) {
            i += t, e.onprogress && e.onprogress(t.length)
        }, r.onend = function () {
            e.onend && e.onend()
        }, this.onprogress = null, this.onend = null
    };
    var n = n || {};
    n.Keyboard = function (t) {
        function e(t, e, n) {
            if (!t) return null;
            var r, o = t.indexOf("U+");
            if (o >= 0) {
                var s = t.substring(o + 2);
                r = String.fromCharCode(parseInt(s, 16))
            } else {
                if (1 !== t.length || 3 === e) return w(d[t], e);
                r = t
            }
            n === !0 ? r = r.toUpperCase() : n === !1 && (r = r.toLowerCase());
            var a = r.charCodeAt(0);
            return i(a)
        }

        function r(t) {
            return t <= 31 || t >= 127 && t <= 159
        }

        function i(t) {
            return r(t) ? 65280 | t : t >= 0 && t <= 255 ? t : t >= 256 && t <= 1114111 ? 16777216 | t : null
        }

        function o(t, e) {
            return w(f[t], e)
        }

        function s() {
            var t = T();
            if (!t) return !1;
            var e;
            do e = t, t = T(); while (null !== t);
            return e.defaultPrevented
        }

        var a = this;
        this.onkeydown = null, this.onkeyup = null;
        var u = function () {
            var t = this;
            this.timestamp = (new Date).getTime(), this.defaultPrevented = !1, this.keysym = null, this.reliable = !1, this.getAge = function () {
                return (new Date).getTime() - t.timestamp
            }
        }, l = function (t, n, r, i) {
            u.apply(this), this.keyCode = t, this.keyIdentifier = n, this.key = r, this.location = i, this.keysym = e(r, i) || o(t, i), this.keysym && !x(this.keysym) && (this.reliable = !0), !this.keysym && k(t, n) && (this.keysym = e(n, i, a.modifiers.shift));
            var s = !(a.modifiers.ctrl || navigator && navigator.platform && navigator.platform.match(/^mac/i)),
                l = !a.modifiers.alt;
            (l && a.modifiers.ctrl || s && a.modifiers.alt || a.modifiers.meta || a.modifiers.hyper) && (this.reliable = !0), y[t] = this.keysym
        };
        l.prototype = new u;
        var c = function (t) {
            u.apply(this), this.charCode = t, this.keysym = i(t), this.reliable = !0
        };
        c.prototype = new u;
        var h = function (t, n, r, i) {
            u.apply(this), this.keyCode = t, this.keyIdentifier = n, this.key = r, this.location = i, this.keysym = y[t] || o(t, i) || e(r, i), this.reliable = !0
        };
        h.prototype = new u;
        var p = [], f = {
            8: [65288],
            9: [65289],
            12: [65291, 65291, 65291, 65461],
            13: [65293],
            16: [65505, 65505, 65506],
            17: [65507, 65507, 65508],
            18: [65513, 65513, 65027],
            19: [65299],
            20: [65509],
            27: [65307],
            32: [32],
            33: [65365, 65365, 65365, 65465],
            34: [65366, 65366, 65366, 65459],
            35: [65367, 65367, 65367, 65457],
            36: [65360, 65360, 65360, 65463],
            37: [65361, 65361, 65361, 65460],
            38: [65362, 65362, 65362, 65464],
            39: [65363, 65363, 65363, 65462],
            40: [65364, 65364, 65364, 65458],
            45: [65379, 65379, 65379, 65456],
            46: [65535, 65535, 65535, 65454],
            91: [65515],
            92: [65383],
            93: null,
            96: [65456],
            97: [65457],
            98: [65458],
            99: [65459],
            100: [65460],
            101: [65461],
            102: [65462],
            103: [65463],
            104: [65464],
            105: [65465],
            106: [65450],
            107: [65451],
            109: [65453],
            110: [65454],
            111: [65455],
            112: [65470],
            113: [65471],
            114: [65472],
            115: [65473],
            116: [65474],
            117: [65475],
            118: [65476],
            119: [65477],
            120: [65478],
            121: [65479],
            122: [65480],
            123: [65481],
            144: [65407],
            145: [65300],
            225: [65027]
        }, d = {
            Again: [65382],
            AllCandidates: [65341],
            Alphanumeric: [65328],
            Alt: [65513, 65513, 65027],
            Attn: [64782],
            AltGraph: [65027],
            ArrowDown: [65364],
            ArrowLeft: [65361],
            ArrowRight: [65363],
            ArrowUp: [65362],
            Backspace: [65288],
            CapsLock: [65509],
            Cancel: [65385],
            Clear: [65291],
            Convert: [65313],
            Copy: [64789],
            Crsel: [64796],
            CrSel: [64796],
            CodeInput: [65335],
            Compose: [65312],
            Control: [65507, 65507, 65508],
            ContextMenu: [65383],
            DeadGrave: [65104],
            DeadAcute: [65105],
            DeadCircumflex: [65106],
            DeadTilde: [65107],
            DeadMacron: [65108],
            DeadBreve: [65109],
            DeadAboveDot: [65110],
            DeadUmlaut: [65111],
            DeadAboveRing: [65112],
            DeadDoubleacute: [65113],
            DeadCaron: [65114],
            DeadCedilla: [65115],
            DeadOgonek: [65116],
            DeadIota: [65117],
            DeadVoicedSound: [65118],
            DeadSemivoicedSound: [65119],
            Delete: [65535],
            Down: [65364],
            End: [65367],
            Enter: [65293],
            EraseEof: [64774],
            Escape: [65307],
            Execute: [65378],
            Exsel: [64797],
            ExSel: [64797],
            F1: [65470],
            F2: [65471],
            F3: [65472],
            F4: [65473],
            F5: [65474],
            F6: [65475],
            F7: [65476],
            F8: [65477],
            F9: [65478],
            F10: [65479],
            F11: [65480],
            F12: [65481],
            F13: [65482],
            F14: [65483],
            F15: [65484],
            F16: [65485],
            F17: [65486],
            F18: [65487],
            F19: [65488],
            F20: [65489],
            F21: [65490],
            F22: [65491],
            F23: [65492],
            F24: [65493],
            Find: [65384],
            GroupFirst: [65036],
            GroupLast: [65038],
            GroupNext: [65032],
            GroupPrevious: [65034],
            FullWidth: null,
            HalfWidth: null,
            HangulMode: [65329],
            Hankaku: [65321],
            HanjaMode: [65332],
            Help: [65386],
            Hiragana: [65317],
            HiraganaKatakana: [65319],
            Home: [65360],
            Hyper: [65517, 65517, 65518],
            Insert: [65379],
            JapaneseHiragana: [65317],
            JapaneseKatakana: [65318],
            JapaneseRomaji: [65316],
            JunjaMode: [65336],
            KanaMode: [65325],
            KanjiMode: [65313],
            Katakana: [65318],
            Left: [65361],
            Meta: [65511, 65511, 65512],
            ModeChange: [65406],
            NumLock: [65407],
            PageDown: [65366],
            PageUp: [65365],
            Pause: [65299],
            Play: [64790],
            PreviousCandidate: [65342],
            PrintScreen: [64797],
            Redo: [65382],
            Right: [65363],
            RomanCharacters: null,
            Scroll: [65300],
            Select: [65376],
            Separator: [65452],
            Shift: [65505, 65505, 65506],
            SingleCandidate: [65340],
            Super: [65515, 65515, 65516],
            Tab: [65289],
            Up: [65362],
            Undo: [65381],
            Win: [65515],
            Zenkaku: [65320],
            ZenkakuHankaku: [65322]
        }, g = {
            65027: !0,
            65505: !0,
            65506: !0,
            65507: !0,
            65508: !0,
            65511: !0,
            65512: !0,
            65513: !0,
            65514: !0,
            65515: !0,
            65516: !0
        };
        this.modifiers = new n.Keyboard.ModifierState, this.pressed = {};
        var m = {}, y = {}, v = null, b = null, w = function (t, e) {
            return t ? t[e] || t[0] : null
        }, x = function (t) {
            return t >= 0 && t <= 255 || 16777216 === (4294901760 & t)
        }, k = function (t, e) {
            if (!e) return !1;
            var n = e.indexOf("U+");
            if (n === -1) return !0;
            var r = parseInt(e.substring(n + 2), 16);
            return t !== r || (t >= 65 && t <= 90 || t >= 48 && t <= 57)
        };
        this.press = function (t) {
            if (null !== t) {
                if (!a.pressed[t] && (a.pressed[t] = !0, a.onkeydown)) {
                    var e = a.onkeydown(t);
                    return m[t] = e, window.clearTimeout(v), window.clearInterval(b), g[t] || (v = window.setTimeout(function () {
                        b = window.setInterval(function () {
                            a.onkeyup(t), a.onkeydown(t)
                        }, 50)
                    }, 500)), e
                }
                return m[t] || !1
            }
        }, this.release = function (t) {
            a.pressed[t] && (delete a.pressed[t], window.clearTimeout(v), window.clearInterval(b), null !== t && a.onkeyup && a.onkeyup(t))
        }, this.reset = function () {
            for (var t in a.pressed) a.release(parseInt(t));
            p = []
        };
        var S = function (t) {
            var e = n.Keyboard.ModifierState.fromKeyboardEvent(t);
            a.modifiers.alt && e.alt === !1 && (a.release(65513), a.release(65514), a.release(65027)), a.modifiers.shift && e.shift === !1 && (a.release(65505), a.release(65506)), a.modifiers.ctrl && e.ctrl === !1 && (a.release(65507), a.release(65508)), a.modifiers.meta && e.meta === !1 && (a.release(65511), a.release(65512)), a.modifiers.hyper && e.hyper === !1 && (a.release(65515), a.release(65516)), a.modifiers = e
        }, _ = function (t) {
            a.modifiers.ctrl && a.modifiers.alt && (t >= 65 && t <= 90 || t >= 97 && t <= 122 || (t <= 255 || 16777216 === (4278190080 & t)) && (a.release(65507), a.release(65508), a.release(65513), a.release(65514)))
        }, T = function () {
            var t = p[0];
            if (!t) return null;
            if (!(t instanceof l)) {
                if (t instanceof h) {
                    var e = t.keysym;
                    return e ? (a.release(e), t.defaultPrevented = !0, p.shift()) : (a.reset(), t)
                }
                return p.shift()
            }
            var e = null, n = [];
            if (t.reliable ? (e = t.keysym, n = p.splice(0, 1)) : p[1] instanceof c ? (e = p[1].keysym, n = p.splice(0, 2)) : p[1] && (e = t.keysym, n = p.splice(0, 1)), n.length > 0) {
                if (e) {
                    _(e);
                    var r = !a.press(e);
                    y[t.keyCode] = e, a.modifiers.meta && 65511 !== e && 65512 !== e && a.release(e);
                    for (var i = 0; i < n.length; i++) n[i].defaultPrevented = r
                }
                return t
            }
            return null
        }, C = function (t) {
            return "location" in t ? t.location : "keyLocation" in t ? t.keyLocation : 0
        };
        t.addEventListener("keydown", function (t) {
            if (a.onkeydown) {
                var e;
                if (window.event ? e = window.event.keyCode : t.which && (e = t.which), S(t), 229 !== e) {
                    var n = new l(e, t.keyIdentifier, t.key, C(t));
                    p.push(n), s() && t.preventDefault()
                }
            }
        }, !0), t.addEventListener("keypress", function (t) {
            if (a.onkeydown || a.onkeyup) {
                var e;
                window.event ? e = window.event.keyCode : t.which && (e = t.which), S(t);
                var n = new c(e);
                p.push(n), s() && t.preventDefault()
            }
        }, !0), t.addEventListener("keyup", function (t) {
            if (a.onkeyup) {
                t.preventDefault();
                var e;
                window.event ? e = window.event.keyCode : t.which && (e = t.which), S(t);
                var n = new h(e, t.keyIdentifier, t.key, C(t));
                p.push(n), s()
            }
        }, !0)
    }, n.Keyboard.ModifierState = function () {
        this.shift = !1, this.ctrl = !1, this.alt = !1, this.meta = !1, this.hyper = !1
    }, n.Keyboard.ModifierState.fromKeyboardEvent = function (t) {
        var e = new n.Keyboard.ModifierState;
        return e.shift = t.shiftKey, e.ctrl = t.ctrlKey, e.alt = t.altKey, e.meta = t.metaKey, t.getModifierState && (e.hyper = t.getModifierState("OS") || t.getModifierState("Super") || t.getModifierState("Hyper") || t.getModifierState("Win")), e
    };
    var n = n || {};
    n.Layer = function (t, e) {
        function r(t, e) {
            var n = null;
            if (0 !== o.width && 0 !== o.height) {
                n = document.createElement("canvas"), n.width = o.width, n.height = o.height;
                var r = n.getContext("2d");
                r.drawImage(s, 0, 0, o.width, o.height, 0, 0, o.width, o.height)
            }
            var i = a.globalCompositeOperation;
            s.width = t, s.height = e, n && a.drawImage(n, 0, 0, o.width, o.height, 0, 0, o.width, o.height), a.globalCompositeOperation = i, o.width = t, o.height = e, l = 0, a.save()
        }

        function i(t, e, n, r) {
            var i, s = n + t, a = r + e;
            i = s > o.width ? s : o.width;
            var u;
            u = a > o.height ? a : o.height, o.resize(i, u)
        }

        var o = this, s = document.createElement("canvas"), a = s.getContext("2d");
        a.save();
        var u = !0, l = 0, c = {
            1: "destination-in",
            2: "destination-out",
            4: "source-in",
            6: "source-atop",
            8: "source-out",
            9: "destination-atop",
            10: "xor",
            11: "destination-over",
            12: "copy",
            14: "source-over",
            15: "lighter"
        };
        this.autosize = !1, this.width = t, this.height = e, this.getCanvas = function () {
            return s
        }, this.resize = function (t, e) {
            t === o.width && e === o.height || r(t, e)
        }, this.drawImage = function (t, e, n) {
            o.autosize && i(t, e, n.width, n.height), a.drawImage(n, t, e)
        }, this.transfer = function (t, e, r, s, u, l, c, h) {
            var p = t.getCanvas();
            if (!(e >= p.width || r >= p.height) && (e + s > p.width && (s = p.width - e), r + u > p.height && (u = p.height - r), 0 !== s && 0 !== u)) {
                o.autosize && i(l, c, s, u);
                for (var f = t.getCanvas().getContext("2d").getImageData(e, r, s, u), d = a.getImageData(l, c, s, u), g = 0; g < s * u * 4; g += 4) {
                    var m = new n.Layer.Pixel(f.data[g], f.data[g + 1], f.data[g + 2], f.data[g + 3]),
                        y = new n.Layer.Pixel(d.data[g], d.data[g + 1], d.data[g + 2], d.data[g + 3]);
                    h(m, y), d.data[g] = y.red, d.data[g + 1] = y.green, d.data[g + 2] = y.blue, d.data[g + 3] = y.alpha
                }
                a.putImageData(d, l, c)
            }
        }, this.put = function (t, e, n, r, s, u, l) {
            var c = t.getCanvas();
            if (!(e >= c.width || n >= c.height) && (e + r > c.width && (r = c.width - e), n + s > c.height && (s = c.height - n), 0 !== r && 0 !== s)) {
                o.autosize && i(u, l, r, s);
                var h = t.getCanvas().getContext("2d").getImageData(e, n, r, s);
                a.putImageData(h, u, l)
            }
        }, this.copy = function (t, e, n, r, s, u, l) {
            var c = t.getCanvas();
            e >= c.width || n >= c.height || (e + r > c.width && (r = c.width - e), n + s > c.height && (s = c.height - n), 0 !== r && 0 !== s && (o.autosize && i(u, l, r, s), a.drawImage(c, e, n, r, s, u, l, r, s)))
        }, this.moveTo = function (t, e) {
            u && (a.beginPath(), u = !1), o.autosize && i(t, e, 0, 0), a.moveTo(t, e)
        }, this.lineTo = function (t, e) {
            u && (a.beginPath(), u = !1), o.autosize && i(t, e, 0, 0), a.lineTo(t, e)
        }, this.arc = function (t, e, n, r, s, l) {
            u && (a.beginPath(), u = !1), o.autosize && i(t, e, 0, 0), a.arc(t, e, n, r, s, l)
        }, this.curveTo = function (t, e, n, r, s, l) {
            u && (a.beginPath(), u = !1), o.autosize && i(s, l, 0, 0), a.bezierCurveTo(t, e, n, r, s, l)
        }, this.close = function () {
            a.closePath(), u = !0
        }, this.rect = function (t, e, n, r) {
            u && (a.beginPath(), u = !1), o.autosize && i(t, e, n, r), a.rect(t, e, n, r)
        }, this.clip = function () {
            a.clip(), u = !0
        }, this.strokeColor = function (t, e, n, r, i, o, s) {
            a.lineCap = t, a.lineJoin = e, a.lineWidth = n, a.strokeStyle = "rgba(" + r + "," + i + "," + o + "," + s / 255 + ")", a.stroke(), u = !0
        }, this.fillColor = function (t, e, n, r) {
            a.fillStyle = "rgba(" + t + "," + e + "," + n + "," + r / 255 + ")", a.fill(), u = !0
        }, this.strokeLayer = function (t, e, n, r) {
            a.lineCap = t, a.lineJoin = e, a.lineWidth = n, a.strokeStyle = a.createPattern(r.getCanvas(), "repeat"), a.stroke(), u = !0
        }, this.fillLayer = function (t) {
            a.fillStyle = a.createPattern(t.getCanvas(), "repeat"), a.fill(), u = !0
        }, this.push = function () {
            a.save(), l++
        }, this.pop = function () {
            l > 0 && (a.restore(), l--)
        }, this.reset = function () {
            for (; l > 0;) a.restore(), l--;
            a.restore(), a.save(), a.beginPath(), u = !1
        }, this.setTransform = function (t, e, n, r, i, o) {
            a.setTransform(t, e, n, r, i, o)
        }, this.transform = function (t, e, n, r, i, o) {
            a.transform(t, e, n, r, i, o)
        }, this.setChannelMask = function (t) {
            a.globalCompositeOperation = c[t]
        }, this.setMiterLimit = function (t) {
            a.miterLimit = t
        }, s.width = t, s.height = e, s.style.zIndex = -1
    }, n.Layer.ROUT = 2, n.Layer.ATOP = 6, n.Layer.XOR = 10, n.Layer.ROVER = 11, n.Layer.OVER = 14, n.Layer.PLUS = 15, n.Layer.RIN = 1, n.Layer.IN = 4, n.Layer.OUT = 8, n.Layer.RATOP = 9, n.Layer.SRC = 12, n.Layer.Pixel = function (t, e, n, r) {
        this.red = t, this.green = e, this.blue = n, this.alpha = r
    };
    var n = n || {};
    n.Mouse = function (t) {
        function e(t) {
            t.stopPropagation(), t.preventDefault && t.preventDefault(), t.returnValue = !1
        }

        function r() {
            s = o.touchMouseThreshold
        }

        function i(t) {
            var n = t.deltaY || -t.wheelDeltaY || -t.wheelDelta;
            if (n ? 1 === t.deltaMode ? n = t.deltaY * o.PIXELS_PER_LINE : 2 === t.deltaMode && (n = t.deltaY * o.PIXELS_PER_PAGE) : n = t.detail * o.PIXELS_PER_LINE, a += n, a <= -o.scrollThreshold) {
                do o.onmousedown && (o.currentState.up = !0, o.onmousedown(o.currentState)), o.onmouseup && (o.currentState.up = !1, o.onmouseup(o.currentState)), a += o.scrollThreshold; while (a <= -o.scrollThreshold);
                a = 0
            }
            if (a >= o.scrollThreshold) {
                do o.onmousedown && (o.currentState.down = !0, o.onmousedown(o.currentState)), o.onmouseup && (o.currentState.down = !1, o.onmouseup(o.currentState)), a -= o.scrollThreshold; while (a >= o.scrollThreshold);
                a = 0
            }
            e(t)
        }

        var o = this;
        this.touchMouseThreshold = 3, this.scrollThreshold = 53, this.PIXELS_PER_LINE = 18, this.PIXELS_PER_PAGE = 16 * this.PIXELS_PER_LINE, this.currentState = new n.Mouse.State(0, 0, !1, !1, !1, !1, !1), this.onmousedown = null, this.onmouseup = null, this.onmousemove = null, this.onmouseout = null;
        var s = 0, a = 0;
        t.addEventListener("contextmenu", function (t) {
            e(t)
        }, !1), t.addEventListener("mousemove", function (n) {
            return e(n), s ? void s-- : (o.currentState.fromClientPosition(t, n.clientX, n.clientY), void (o.onmousemove && o.onmousemove(o.currentState)))
        }, !1), t.addEventListener("mousedown", function (t) {
            if (e(t), !s) {
                switch (t.button) {
                    case 0:
                        o.currentState.left = !0;
                        break;
                    case 1:
                        o.currentState.middle = !0;
                        break;
                    case 2:
                        o.currentState.right = !0
                }
                o.onmousedown && o.onmousedown(o.currentState)
            }
        }, !1), t.addEventListener("mouseup", function (t) {
            if (e(t), !s) {
                switch (t.button) {
                    case 0:
                        o.currentState.left = !1;
                        break;
                    case 1:
                        o.currentState.middle = !1;
                        break;
                    case 2:
                        o.currentState.right = !1
                }
                o.onmouseup && o.onmouseup(o.currentState)
            }
        }, !1), t.addEventListener("mouseout", function (n) {
            n || (n = window.event);
            for (var r = n.relatedTarget || n.toElement; r;) {
                if (r === t) return;
                r = r.parentNode
            }
            e(n), (o.currentState.left || o.currentState.middle || o.currentState.right) && (o.currentState.left = !1, o.currentState.middle = !1, o.currentState.right = !1, o.onmouseup && o.onmouseup(o.currentState)), o.onmouseout && o.onmouseout()
        }, !1), t.addEventListener("selectstart", function (t) {
            e(t)
        }, !1), t.addEventListener("touchmove", r, !1), t.addEventListener("touchstart", r, !1), t.addEventListener("touchend", r, !1), t.addEventListener("DOMMouseScroll", i, !1), t.addEventListener("mousewheel", i, !1), t.addEventListener("wheel", i, !1);
        var u = function () {
            var t = document.createElement("div");
            if (!("cursor" in t.style)) return !1;
            try {
                t.style.cursor = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==) 0 0, auto"
            } catch (t) {
                return !1
            }
            return /\burl\([^()]*\)\s+0\s+0\b/.test(t.style.cursor || "")
        }();
        this.setCursor = function (e, n, r) {
            if (u) {
                var i = e.toDataURL("image/png");
                return t.style.cursor = "url(" + i + ") " + n + " " + r + ", auto", !0
            }
            return !1
        }
    }, n.Mouse.State = function (t, e, n, r, i, o, s) {
        var a = this;
        this.x = t, this.y = e, this.left = n, this.middle = r, this.right = i, this.up = o, this.down = s, this.fromClientPosition = function (t, e, n) {
            a.x = e - t.offsetLeft, a.y = n - t.offsetTop;
            for (var r = t.offsetParent; r && r !== document.body;) a.x -= r.offsetLeft - r.scrollLeft, a.y -= r.offsetTop - r.scrollTop, r = r.offsetParent;
            if (r) {
                var i = document.body.scrollLeft || document.documentElement.scrollLeft,
                    o = document.body.scrollTop || document.documentElement.scrollTop;
                a.x -= r.offsetLeft - i, a.y -= r.offsetTop - o
            }
        }
    }, n.Mouse.Touchpad = function (t) {
        var e = this;
        this.scrollThreshold = 20 * (window.devicePixelRatio || 1), this.clickTimingThreshold = 250, this.clickMoveThreshold = 10 * (window.devicePixelRatio || 1), this.currentState = new n.Mouse.State(0, 0, !1, !1, !1, !1, !1), this.onmousedown = null, this.onmouseup = null, this.onmousemove = null;
        var r = 0, i = 0, o = 0, s = 0, a = 0, u = {1: "left", 2: "right", 3: "middle"}, l = !1, c = null;
        t.addEventListener("touchend", function (t) {
            if (t.preventDefault(), l && 0 === t.touches.length) {
                var n = (new Date).getTime(), i = u[r];
                e.currentState[i] && (e.currentState[i] = !1, e.onmouseup && e.onmouseup(e.currentState), c && (window.clearTimeout(c), c = null)), n - s <= e.clickTimingThreshold && a < e.clickMoveThreshold && (e.currentState[i] = !0, e.onmousedown && e.onmousedown(e.currentState), c = window.setTimeout(function () {
                    e.currentState[i] = !1, e.onmouseup && e.onmouseup(e.currentState), l = !1
                }, e.clickTimingThreshold)), c || (l = !1)
            }
        }, !1), t.addEventListener("touchstart", function (t) {
            if (t.preventDefault(), r = Math.min(t.touches.length, 3), c && (window.clearTimeout(c), c = null), !l) {
                l = !0;
                var e = t.touches[0];
                i = e.clientX, o = e.clientY, s = (new Date).getTime(), a = 0
            }
        }, !1), t.addEventListener("touchmove", function (n) {
            n.preventDefault();
            var u = n.touches[0], l = u.clientX - i, c = u.clientY - o;
            if (a += Math.abs(l) + Math.abs(c), 1 === r) {
                var h = a / ((new Date).getTime() - s), p = 1 + h;
                e.currentState.x += l * p, e.currentState.y += c * p, e.currentState.x < 0 ? e.currentState.x = 0 : e.currentState.x >= t.offsetWidth && (e.currentState.x = t.offsetWidth - 1), e.currentState.y < 0 ? e.currentState.y = 0 : e.currentState.y >= t.offsetHeight && (e.currentState.y = t.offsetHeight - 1), e.onmousemove && e.onmousemove(e.currentState), i = u.clientX, o = u.clientY
            } else if (2 === r && Math.abs(c) >= e.scrollThreshold) {
                var f;
                f = c > 0 ? "down" : "up", e.currentState[f] = !0, e.onmousedown && e.onmousedown(e.currentState), e.currentState[f] = !1, e.onmouseup && e.onmouseup(e.currentState), i = u.clientX, o = u.clientY
            }
        }, !1)
    }, n.Mouse.Touchscreen = function (t) {
        function e(t) {
            l.currentState[t] || (l.currentState[t] = !0, l.onmousedown && l.onmousedown(l.currentState))
        }

        function r(t) {
            l.currentState[t] && (l.currentState[t] = !1, l.onmouseup && l.onmouseup(l.currentState))
        }

        function i(t) {
            e(t), r(t)
        }

        function o(e, n) {
            l.currentState.fromClientPosition(t, e, n), l.onmousemove && l.onmousemove(l.currentState)
        }

        function s(t) {
            var e = t.touches[0] || t.changedTouches[0], n = e.clientX - h, r = e.clientY - p;
            return Math.sqrt(n * n + r * r) >= l.clickMoveThreshold
        }

        function a(t) {
            var e = t.touches[0];
            c = !0, h = e.clientX, p = e.clientY
        }

        function u() {
            window.clearTimeout(f), window.clearTimeout(d), c = !1
        }

        var l = this, c = !1, h = null, p = null, f = null, d = null;
        this.scrollThreshold = 20 * (window.devicePixelRatio || 1), this.clickTimingThreshold = 250, this.clickMoveThreshold = 16 * (window.devicePixelRatio || 1), this.longPressThreshold = 500, this.currentState = new n.Mouse.State(0, 0, !1, !1, !1, !1, !1), this.onmousedown = null, this.onmouseup = null, this.onmousemove = null, t.addEventListener("touchend", function (t) {
            if (c) {
                if (0 !== t.touches.length || 1 !== t.changedTouches.length) return void u();
                if (window.clearTimeout(d), r("left"), !s(t) && (t.preventDefault(), !l.currentState.left)) {
                    var n = t.changedTouches[0];
                    o(n.clientX, n.clientY), e("left"), f = window.setTimeout(function () {
                        r("left"), u()
                    }, l.clickTimingThreshold)
                }
            }
        }, !1), t.addEventListener("touchstart", function (t) {
            return 1 !== t.touches.length ? void u() : (t.preventDefault(), a(t), window.clearTimeout(f), void (d = window.setTimeout(function () {
                var e = t.touches[0];
                o(e.clientX, e.clientY), i("right"), u()
            }, l.longPressThreshold)))
        }, !1), t.addEventListener("touchmove", function (t) {
            if (c) {
                if (s(t) && window.clearTimeout(d), 1 !== t.touches.length) return void u();
                if (l.currentState.left) {
                    t.preventDefault();
                    var e = t.touches[0];
                    o(e.clientX, e.clientY)
                }
            }
        }, !1)
    };
    var n = n || {}, n = n || {};
    n.Object = function (t, e) {
        var n = this, r = {}, i = function (t) {
            var e = r[t];
            if (!e) return null;
            var n = e.shift();
            return 0 === e.length && delete r[t], n
        }, o = function (t, e) {
            var n = r[t];
            n || (n = [], r[t] = n), n.push(e)
        };
        this.index = e, this.onbody = function (t, e, n) {
            var r = i(n);
            r && r(t, e)
        }, this.onundefine = null, this.requestInputStream = function (e, r) {
            r && o(e, r), t.requestObjectInputStream(n.index, e)
        }, this.createOutputStream = function (e, r) {
            return t.createObjectOutputStream(n.index, e, r)
        }
    }, n.Object.ROOT_STREAM = "/", n.Object.STREAM_INDEX_MIMETYPE = "application/vnd.glyptodon.guacamole.stream-index+json";
    var n = n || {};
    n.OnScreenKeyboard = function (t) {
        var e = this, r = {}, i = {}, o = [], s = function (t, e) {
            t.classList ? t.classList.add(e) : t.className += " " + e
        }, a = function (t, e) {
            t.classList ? t.classList.remove(e) : t.className = t.className.replace(/([^ ]+)[ ]*/g, function (t, n) {
                return n === e ? "" : t
            })
        }, u = 0, l = function (t, e, n, r) {
            this.width = e, this.height = n, this.scale = function (i) {
                t.style.width = e * i + "px", t.style.height = n * i + "px", r && (t.style.lineHeight = n * i + "px", t.style.fontSize = i + "px")
            }
        }, c = function (t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (!(n in r)) return !1
            }
            return !0
        }, h = function (t) {
            var n = e.keys[t];
            if (!n) return null;
            for (var r = n.length - 1; r >= 0; r--) {
                var i = n[r];
                if (c(i.requires)) return i
            }
            return null
        }, p = function (t, n) {
            if (!i[t]) {
                s(n, "guac-keyboard-pressed");
                var o = h(t);
                if (o.modifier) {
                    var u = "guac-keyboard-modifier-" + y(o.modifier), l = r[o.modifier];
                    l ? (a(d, u), delete r[o.modifier], e.onkeyup && e.onkeyup(l)) : (s(d, u), r[o.modifier] = o.keysym, e.onkeydown && e.onkeydown(o.keysym))
                } else e.onkeydown && e.onkeydown(o.keysym);
                i[t] = !0
            }
        }, f = function (t, n) {
            if (i[t]) {
                a(n, "guac-keyboard-pressed");
                var r = h(t);
                !r.modifier && e.onkeyup && e.onkeyup(r.keysym), i[t] = !1
            }
        }, d = document.createElement("div");
        d.className = "guac-keyboard", d.onselectstart = d.onmousemove = d.onmouseup = d.onmousedown = function (t) {
            return u && u--, t.stopPropagation(), !1
        }, this.touchMouseThreshold = 3, this.onkeydown = null, this.onkeyup = null, this.layout = new n.OnScreenKeyboard.Layout(t), this.getElement = function () {
            return d
        }, this.resize = function (t) {
            for (var n = Math.floor(10 * t / e.layout.width) / 10, r = 0; r < o.length; r++) {
                var i = o[r];
                i.scale(n)
            }
        };
        var g = function (t, e) {
            if (e instanceof Array) {
                for (var r = [], i = 0; i < e.length; i++) r.push(new n.OnScreenKeyboard.Key(e[i], t));
                return r
            }
            return "number" == typeof e ? [new n.OnScreenKeyboard.Key({
                name: t,
                keysym: e
            })] : "string" == typeof e ? [new n.OnScreenKeyboard.Key({
                name: t,
                title: e
            })] : [new n.OnScreenKeyboard.Key(e, t)]
        }, m = function (e) {
            var n = {};
            for (var r in t.keys) n[r] = g(r, e[r]);
            return n
        };
        this.keys = m(t.keys);
        var y = function (t) {
            var e = t.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[^A-Za-z0-9]+/g, "-").toLowerCase();
            return e
        }, v = function t(n, r, i) {
            var a, c = document.createElement("div");
            if (i && s(c, "guac-keyboard-" + y(i)), r instanceof Array) for (s(c, "guac-keyboard-group"), a = 0; a < r.length; a++) t(c, r[a]); else if (r instanceof Object) {
                s(c, "guac-keyboard-group");
                var h = Object.keys(r).sort();
                for (a = 0; a < h.length; a++) {
                    var i = h[a];
                    t(c, r[i], i)
                }
            } else if ("number" == typeof r) s(c, "guac-keyboard-gap"), o.push(new l(c, r, r)); else if ("string" == typeof r) {
                var d = r;
                1 === d.length && (d = "0x" + d.charCodeAt(0).toString(16)), s(c, "guac-keyboard-key-container");
                var g = document.createElement("div");
                g.className = "guac-keyboard-key guac-keyboard-key-" + y(d);
                var m = e.keys[r];
                if (m) for (a = 0; a < m.length; a++) {
                    var v = m[a], b = document.createElement("div");
                    b.className = "guac-keyboard-cap", b.textContent = v.title;
                    for (var w = 0; w < v.requires.length; w++) {
                        var x = v.requires[w];
                        s(b, "guac-keyboard-requires-" + y(x)), s(g, "guac-keyboard-uses-" + y(x))
                    }
                    g.appendChild(b)
                }
                c.appendChild(g), o.push(new l(c, e.layout.keyWidths[r] || 1, 1, !0));
                var k = function (t) {
                    t.preventDefault(), u = e.touchMouseThreshold, p(r, g)
                }, S = function (t) {
                    t.preventDefault(), u = e.touchMouseThreshold, f(r, g)
                }, _ = function (t) {
                    t.preventDefault(), 0 === u && p(r, g)
                }, T = function (t) {
                    t.preventDefault(), 0 === u && f(r, g)
                };
                g.addEventListener("touchstart", k, !0), g.addEventListener("touchend", S, !0), g.addEventListener("mousedown", _, !0), g.addEventListener("mouseup", T, !0), g.addEventListener("mouseout", T, !0)
            }
            n.appendChild(c)
        };
        v(d, t.layout)
    }, n.OnScreenKeyboard.Layout = function (t) {
        this.language = t.language, this.type = t.type, this.keys = t.keys, this.layout = t.layout, this.width = t.width, this.keyWidths = t.keyWidths || {}
    }, n.OnScreenKeyboard.Key = function (t, e) {
        this.name = e || t.name, this.title = t.title || this.name, this.keysym = t.keysym || function (t) {
            if (!t || 1 !== t.length) return null;
            var e = t.charCodeAt(0);
            return e >= 0 && e <= 255 ? e : e >= 256 && e <= 1114111 ? 16777216 | e : null
        }(this.title), this.modifier = t.modifier, this.requires = t.requires || []
    };
    var n = n || {};
    n.OutputStream = function (t, e) {
        var n = this;
        this.index = e, this.onack = null, this.sendBlob = function (e) {
            t.sendBlob(n.index, e)
        }, this.sendEnd = function () {
            t.endStream(n.index)
        }
    };
    var n = n || {};
    n.Parser = function () {
        var t = this, e = "", n = [], r = -1, i = 0;
        this.receive = function (o) {
            for (i > 4096 && r >= i && (e = e.substring(i), r -= i, i = 0), e += o; r < e.length;) {
                if (r >= i) {
                    var s = e.substring(i, r), a = e.substring(r, r + 1);
                    if (n.push(s), ";" == a) {
                        var u = n.shift();
                        null != t.oninstruction && t.oninstruction(u, n), n.length = 0
                    } else if ("," != a) throw new Error("Illegal terminator.");
                    i = r + 1
                }
                var l = e.indexOf(".", i);
                if (l == -1) {
                    i = e.length;
                    break
                }
                var c = parseInt(e.substring(r + 1, l));
                if (NaN == c) throw new Error("Non-numeric character in element length.");
                i = l + 1, r = i + c
            }
        }, this.oninstruction = null
    };
    var n = n || {};
    n.RawAudioFormat = function (t) {
        this.bytesPerSample = t.bytesPerSample, this.channels = t.channels, this.rate = t.rate
    }, n.RawAudioFormat.parse = function (t) {
        var e, r = null, i = 1;
        if ("audio/L8;" === t.substring(0, 9)) t = t.substring(9), e = 1; else {
            if ("audio/L16;" !== t.substring(0, 10)) return null;
            t = t.substring(10), e = 2
        }
        for (var o = t.split(","), s = 0; s < o.length; s++) {
            var a = o[s], u = a.indexOf("=");
            if (u === -1) return null;
            var l = a.substring(0, u), c = a.substring(u + 1);
            switch (l) {
                case"channels":
                    i = parseInt(c);
                    break;
                case"rate":
                    r = parseInt(c);
                    break;
                default:
                    return null
            }
        }
        return null === r ? null : new n.RawAudioFormat({bytesPerSample: e, channels: i, rate: r})
    };
    var n = n || {};
    n.Status = function (t, e) {
        var n = this;
        this.code = t, this.message = e, this.isError = function () {
            return n.code < 0 || n.code > 255
        }
    }, n.Status.Code = {
        SUCCESS: 0,
        UNSUPPORTED: 256,
        SERVER_ERROR: 512,
        SERVER_BUSY: 513,
        UPSTREAM_TIMEOUT: 514,
        UPSTREAM_ERROR: 515,
        RESOURCE_NOT_FOUND: 516,
        RESOURCE_CONFLICT: 517,
        RESOURCE_CLOSED: 518,
        CLIENT_BAD_REQUEST: 768,
        CLIENT_UNAUTHORIZED: 769,
        CLIENT_FORBIDDEN: 771,
        CLIENT_TIMEOUT: 776,
        CLIENT_OVERRUN: 781,
        CLIENT_BAD_TYPE: 783,
        CLIENT_TOO_MANY: 797
    };
    var n = n || {};
    n.StringReader = function (t) {
        function e(t) {
            for (var e = "", n = new Uint8Array(t), r = 0; r < n.length; r++) {
                var i = n[r];
                0 === o ? 127 === (127 | i) ? e += String.fromCharCode(i) : 223 === (31 | i) ? (s = 31 & i, o = 1) : 239 === (15 | i) ? (s = 15 & i, o = 2) : 247 === (7 | i) ? (s = 7 & i, o = 3) : e += "�" : 191 === (63 | i) ? (s = s << 6 | 63 & i, o--, 0 === o && (e += String.fromCharCode(s))) : (o = 0, e += "�")
            }
            return e
        }

        var r = this, i = new n.ArrayBufferReader(t), o = 0, s = 0;
        i.ondata = function (t) {
            var n = e(t);
            r.ontext && r.ontext(n)
        }, i.onend = function () {
            r.onend && r.onend()
        }, this.ontext = null, this.onend = null
    };
    var n = n || {};
    n.StringWriter = function (t) {
        function e(t) {
            if (u + t >= a.length) {
                var e = new Uint8Array(2 * (u + t));
                e.set(a), a = e
            }
            u += t
        }

        function r(t) {
            var n, i;
            if (t <= 127) n = 0, i = 1; else if (t <= 2047) n = 192, i = 2; else if (t <= 65535) n = 224, i = 3; else {
                if (!(t <= 2097151)) return void r(65533);
                n = 240, i = 4
            }
            e(i);
            for (var o = u - 1, s = 1; s < i; s++) a[o--] = 128 | 63 & t, t >>= 6;
            a[o] = n | t
        }

        function i(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t.charCodeAt(e);
                r(n)
            }
            if (u > 0) {
                var i = a.subarray(0, u);
                return u = 0, i
            }
        }

        var o = this, s = new n.ArrayBufferWriter(t), a = new Uint8Array(8192), u = 0;
        s.onack = function (t) {
            o.onack && o.onack(t)
        }, this.sendText = function (t) {
            t.length && s.sendData(i(t))
        }, this.sendEnd = function () {
            s.sendEnd()
        }, this.onack = null
    };
    var n = n || {};
    n.Tunnel = function () {
        this.connect = function (t) {
        }, this.disconnect = function () {
        }, this.sendMessage = function (t) {
        }, this.state = n.Tunnel.State.CONNECTING, this.receiveTimeout = 15e3, this.uuid = null, this.onerror = null, this.onstatechange = null, this.oninstruction = null
    }, n.Tunnel.INTERNAL_DATA_OPCODE = "", n.Tunnel.State = {
        CONNECTING: 0,
        OPEN: 1,
        CLOSED: 2
    }, n.HTTPTunnel = function (t, e) {
        function r() {
            window.clearTimeout(b), b = window.setTimeout(function () {
                i(new n.Status(n.Status.Code.UPSTREAM_TIMEOUT, "Server timeout."))
            }, l.receiveTimeout)
        }

        function i(t) {
            l.state !== n.Tunnel.State.CLOSED && (t.code !== n.Status.Code.SUCCESS && l.onerror && (l.state !== n.Tunnel.State.CONNECTING && t.code === n.Status.Code.RESOURCE_NOT_FOUND || l.onerror(t)), l.state = n.Tunnel.State.CLOSED, m = !1, l.onstatechange && l.onstatechange(l.state))
        }

        function o() {
            if (l.state === n.Tunnel.State.OPEN) if (y.length > 0) {
                m = !0;
                var t = new XMLHttpRequest;
                t.open("POST", p + l.uuid), t.withCredentials = v, t.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8"), t.onreadystatechange = function () {
                    4 === t.readyState && (200 !== t.status ? s(t) : o())
                }, t.send(y), y = ""
            } else m = !1
        }

        function s(t) {
            var e = parseInt(t.getResponseHeader("Guacamole-Status-Code")),
                r = t.getResponseHeader("Guacamole-Error-Message");
            i(new n.Status(e, r))
        }

        function a(t) {
            function e() {
                if (l.state !== n.Tunnel.State.OPEN) return void (null !== i && clearInterval(i));
                if (!(t.readyState < 2)) {
                    var c;
                    try {
                        c = t.status
                    } catch (t) {
                        c = 200
                    }
                    if (o || 200 !== c || (o = u()), 3 === t.readyState || 4 === t.readyState) {
                        if (r(), g === f && (3 !== t.readyState || i ? 4 !== t.readyState || i || clearInterval(i) : i = setInterval(e, 30)), 0 === t.status) return void l.disconnect();
                        if (200 !== t.status) return void s(t);
                        var d;
                        try {
                            d = t.responseText
                        } catch (t) {
                            return
                        }
                        for (; h < d.length;) {
                            if (h >= p) {
                                var y = d.substring(p, h), v = d.substring(h, h + 1);
                                if (m.push(y), ";" === v) {
                                    var b = m.shift();
                                    l.oninstruction && l.oninstruction(b, m), m.length = 0
                                }
                                p = h + 1
                            }
                            var w = d.indexOf(".", p);
                            if (w === -1) {
                                p = d.length;
                                break
                            }
                            var x = parseInt(d.substring(h + 1, w));
                            if (0 === x) {
                                i || clearInterval(i), t.onreadystatechange = null, t.abort(), o && a(o);
                                break
                            }
                            p = w + 1, h = p + x
                        }
                    }
                }
            }

            var i = null, o = null, c = 0, h = -1, p = 0, m = new Array;
            g === f ? t.onreadystatechange = function () {
                3 === t.readyState && (c++, c >= 2 && (g = d, t.onreadystatechange = e)), e()
            } : t.onreadystatechange = e, e()
        }

        function u() {
            var t = new XMLHttpRequest;
            return t.open("GET", h + l.uuid + ":" + w++), t.withCredentials = v, t.send(null), t
        }

        var l = this, c = t + "?connect", h = t + "?read:", p = t + "?write:", f = 1, d = 0, g = f, m = !1, y = "",
            v = !!e, b = null;
        this.sendMessage = function () {
            function t(t) {
                var e = new String(t);
                return e.length + "." + e
            }

            if (l.state === n.Tunnel.State.OPEN && 0 !== arguments.length) {
                for (var e = t(arguments[0]), r = 1; r < arguments.length; r++) e += "," + t(arguments[r]);
                e += ";", y += e, m || o()
            }
        };
        var w = 0;
        this.connect = function (t) {
            r();
            var e = new XMLHttpRequest;
            e.onreadystatechange = function () {
                if (4 === e.readyState) {
                    if (200 !== e.status) return void s(e);
                    r(), l.uuid = e.responseText, l.state = n.Tunnel.State.OPEN, l.onstatechange && l.onstatechange(l.state), a(u())
                }
            }, e.open("POST", c, !0), e.withCredentials = v, e.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8"), e.send(t)
        }, this.disconnect = function () {
            i(new n.Status(n.Status.Code.SUCCESS, "Manually closed."))
        }
    }, n.HTTPTunnel.prototype = new n.Tunnel, n.WebSocketTunnel = function (t) {
        function e() {
            window.clearTimeout(s), s = window.setTimeout(function () {
                r(new n.Status(n.Status.Code.UPSTREAM_TIMEOUT, "Server timeout."))
            }, i.receiveTimeout)
        }

        function r(t) {
            i.state !== n.Tunnel.State.CLOSED && (t.code !== n.Status.Code.SUCCESS && i.onerror && i.onerror(t), i.state = n.Tunnel.State.CLOSED, i.onstatechange && i.onstatechange(i.state), o.close())
        }

        var i = this, o = null, s = null, a = {"http:": "ws:", "https:": "wss:"};
        if ("ws:" !== t.substring(0, 3) && "wss:" !== t.substring(0, 4)) {
            var u = a[window.location.protocol];
            if ("/" === t.substring(0, 1)) t = u + "//" + window.location.host + t; else {
                var l = window.location.pathname.lastIndexOf("/"), c = window.location.pathname.substring(0, l + 1);
                t = u + "//" + window.location.host + c + t
            }
        }
        this.sendMessage = function (t) {
            function e(t) {
                var e = new String(t);
                return e.length + "." + e
            }

            if (i.state === n.Tunnel.State.OPEN && 0 !== arguments.length) {
                for (var r = e(arguments[0]), s = 1; s < arguments.length; s++) r += "," + e(arguments[s]);
                r += ";", o.send(r)
            }
        }, this.connect = function (s) {
            e(), o = new WebSocket(t + "?" + s, "guacamole"), o.onopen = function (t) {
                e()
            }, o.onclose = function (t) {
                r(new n.Status(parseInt(t.reason), t.reason))
            }, o.onerror = function (t) {
                r(new n.Status(n.Status.Code.SERVER_ERROR, t.data))
            }, o.onmessage = function (t) {
                e();
                var o, s = t.data, a = 0, u = [];
                do {
                    var l = s.indexOf(".", a);
                    if (l !== -1) {
                        var c = parseInt(s.substring(o + 1, l));
                        a = l + 1, o = a + c
                    } else r(new n.Status(n.Status.Code.SERVER_ERROR, "Incomplete instruction."));
                    var h = s.substring(a, o), p = s.substring(o, o + 1);
                    if (u.push(h), ";" === p) {
                        var f = u.shift();
                        i.state !== n.Tunnel.State.OPEN && (f === n.Tunnel.INTERNAL_DATA_OPCODE && (i.uuid = u[0]), i.state = n.Tunnel.State.OPEN, i.onstatechange && i.onstatechange(i.state)), f !== n.Tunnel.INTERNAL_DATA_OPCODE && i.oninstruction && i.oninstruction(f, u), u.length = 0
                    }
                    a = o + 1
                } while (a < s.length)
            }
        }, this.disconnect = function () {
            r(new n.Status(n.Status.Code.SUCCESS, "Manually closed."))
        }
    }, n.WebSocketTunnel.prototype = new n.Tunnel, n.ChainedTunnel = function (t) {
        function e(t) {
            function a() {
                t.onstatechange = i.onstatechange, t.oninstruction = i.oninstruction, t.onerror = i.onerror, i.uuid = t.uuid, s = t
            }

            i.disconnect = t.disconnect, i.sendMessage = t.sendMessage;
            var u = function (r) {
                if (r && r.code === n.Status.Code.UPSTREAM_TIMEOUT) return o = [], null;
                var i = o.shift();
                return i && (t.onerror = null, t.oninstruction = null, t.onstatechange = null, e(i)), i
            };
            t.onstatechange = function (t) {
                switch (t) {
                    case n.Tunnel.State.OPEN:
                        a(), i.onstatechange && i.onstatechange(t);
                        break;
                    case n.Tunnel.State.CLOSED:
                        !u() && i.onstatechange && i.onstatechange(t)
                }
            }, t.oninstruction = function (t, e) {
                a(), i.oninstruction && i.oninstruction(t, e)
            }, t.onerror = function (t) {
                !u(t) && i.onerror && i.onerror(t)
            }, t.connect(r)
        }

        for (var r, i = this, o = [], s = null, a = 0; a < arguments.length; a++) o.push(arguments[a]);
        this.connect = function (t) {
            r = t;
            var a = s ? s : o.shift();
            a ? e(a) : i.onerror && i.onerror(n.Status.Code.SERVER_ERROR, "No tunnels to try.")
        }
    }, n.ChainedTunnel.prototype = new n.Tunnel;
    var n = n || {};
    n.API_VERSION = "0.9.9";
    var n = n || {};
    n.VideoPlayer = function () {
        this.sync = function () {
        }
    }, n.VideoPlayer.isSupportedType = function (t) {
        return !1
    }, n.VideoPlayer.getSupportedTypes = function () {
        return []
    }, n.VideoPlayer.getInstance = function (t, e, n) {
        return null
    }, t.exports = n
}, function (t, e) {
    t.exports = Array.isArray || function (t) {
        return "[object Array]" == Object.prototype.toString.call(t)
    }
}, function (t, e) {
    try {
        t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
    } catch (e) {
        t.exports = !1
    }
}, function (t, e, n) {
    var r, r;
    (function (e) {
        !function (e) {
            t.exports = e()
        }(function () {
            var t;
            return function t(e, n, i) {
                function o(a, u) {
                    if (!n[a]) {
                        if (!e[a]) {
                            var l = "function" == typeof r && r;
                            if (!u && l) return r(a, !0);
                            if (s) return s(a, !0);
                            var c = new Error("Cannot find module '" + a + "'");
                            throw c.code = "MODULE_NOT_FOUND", c
                        }
                        var h = n[a] = {exports: {}};
                        e[a][0].call(h.exports, function (t) {
                            var n = e[a][1][t];
                            return o(n ? n : t)
                        }, h, h.exports, t, e, n, i)
                    }
                    return n[a].exports
                }

                for (var s = "function" == typeof r && r, a = 0; a < i.length; a++) o(i[a]);
                return o
            }({
                1: [function (n, r, i) {
                    (function (e) {
                        !function (n) {
                            function o(t) {
                                throw new RangeError(O[t])
                            }

                            function s(t, e) {
                                for (var n = t.length, r = []; n--;) r[n] = e(t[n]);
                                return r
                            }

                            function a(t, e) {
                                var n = t.split("@"), r = "";
                                n.length > 1 && (r = n[0] + "@", t = n[1]), t = t.replace(N, ".");
                                var i = t.split("."), o = s(i, e).join(".");
                                return r + o
                            }

                            function u(t) {
                                for (var e, n, r = [], i = 0, o = t.length; i < o;) e = t.charCodeAt(i++), e >= 55296 && e <= 56319 && i < o ? (n = t.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--)) : r.push(e);
                                return r
                            }

                            function l(t) {
                                return s(t, function (t) {
                                    var e = "";
                                    return t > 65535 && (t -= 65536, e += P(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += P(t)
                                }).join("")
                            }

                            function c(t) {
                                return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : S
                            }

                            function h(t, e) {
                                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                            }

                            function p(t, e, n) {
                                var r = 0;
                                for (t = n ? B(t / E) : t >> 1, t += B(t / e); t > M * T >> 1; r += S) t = B(t / M);
                                return B(r + (M + 1) * t / (t + C))
                            }

                            function f(t) {
                                var e, n, r, i, s, a, u, h, f, d, g = [], m = t.length, y = 0, v = L, b = A;
                                for (n = t.lastIndexOf(I), n < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && o("not-basic"), g.push(t.charCodeAt(r));
                                for (i = n > 0 ? n + 1 : 0; i < m;) {
                                    for (s = y, a = 1, u = S; i >= m && o("invalid-input"), h = c(t.charCodeAt(i++)), (h >= S || h > B((k - y) / a)) && o("overflow"), y += h * a, f = u <= b ? _ : u >= b + T ? T : u - b, !(h < f); u += S) d = S - f, a > B(k / d) && o("overflow"), a *= d;
                                    e = g.length + 1, b = p(y - s, e, 0 == s), B(y / e) > k - v && o("overflow"), v += B(y / e), y %= e, g.splice(y++, 0, v)
                                }
                                return l(g)
                            }

                            function d(t) {
                                var e, n, r, i, s, a, l, c, f, d, g, m, y, v, b, w = [];
                                for (t = u(t), m = t.length, e = L, n = 0, s = A, a = 0; a < m; ++a) g = t[a], g < 128 && w.push(P(g));
                                for (r = i = w.length, i && w.push(I); r < m;) {
                                    for (l = k, a = 0; a < m; ++a) g = t[a], g >= e && g < l && (l = g);
                                    for (y = r + 1, l - e > B((k - n) / y) && o("overflow"), n += (l - e) * y, e = l, a = 0; a < m; ++a) if (g = t[a], g < e && ++n > k && o("overflow"), g == e) {
                                        for (c = n, f = S; d = f <= s ? _ : f >= s + T ? T : f - s, !(c < d); f += S) b = c - d, v = S - d, w.push(P(h(d + b % v, 0))), c = B(b / v);
                                        w.push(P(h(c, 0))), s = p(n, y, r == i), n = 0, ++r
                                    }
                                    ++n, ++e
                                }
                                return w.join("")
                            }

                            function g(t) {
                                return a(t, function (t) {
                                    return D.test(t) ? f(t.slice(4).toLowerCase()) : t
                                })
                            }

                            function m(t) {
                                return a(t, function (t) {
                                    return R.test(t) ? "xn--" + d(t) : t
                                })
                            }

                            var y = "object" == typeof i && i && !i.nodeType && i,
                                v = "object" == typeof r && r && !r.nodeType && r, b = "object" == typeof e && e;
                            b.global !== b && b.window !== b && b.self !== b || (n = b);
                            var w, x, k = 2147483647, S = 36, _ = 1, T = 26, C = 38, E = 700, A = 72, L = 128, I = "-",
                                D = /^xn--/, R = /[^\x20-\x7E]/, N = /[\x2E\u3002\uFF0E\uFF61]/g, O = {
                                    overflow: "Overflow: input needs wider integers to process",
                                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                    "invalid-input": "Invalid input"
                                }, M = S - _, B = Math.floor, P = String.fromCharCode;
                            if (w = {
                                version: "1.3.2",
                                ucs2: {decode: u, encode: l},
                                decode: f,
                                encode: d,
                                toASCII: m,
                                toUnicode: g
                            }, "function" == typeof t && "object" == typeof t.amd && t.amd) t("punycode", function () {
                                return w
                            }); else if (y && v) if (r.exports == y) v.exports = w; else for (x in w) w.hasOwnProperty(x) && (y[x] = w[x]); else n.punycode = w
                        }(this)
                    }).call(this, "undefined" != typeof e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {}], 2: [function (t, e, n) {
                    function r(t, e, n) {
                        !t.defaultView || e === t.defaultView.pageXOffset && n === t.defaultView.pageYOffset || t.defaultView.scrollTo(e, n)
                    }

                    function i(t, e) {
                        try {
                            e && (e.width = t.width, e.height = t.height, e.getContext("2d").putImageData(t.getContext("2d").getImageData(0, 0, t.width, t.height), 0, 0))
                        } catch (e) {
                            a("Unable to copy canvas content from", t, e)
                        }
                    }

                    function o(t, e) {
                        for (var n = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), r = t.firstChild; r;) e !== !0 && 1 === r.nodeType && "SCRIPT" === r.nodeName || n.appendChild(o(r, e)), r = r.nextSibling;
                        return 1 === t.nodeType && (n._scrollTop = t.scrollTop, n._scrollLeft = t.scrollLeft, "CANVAS" === t.nodeName ? i(t, n) : "TEXTAREA" !== t.nodeName && "SELECT" !== t.nodeName || (n.value = t.value)), n
                    }

                    function s(t) {
                        if (1 === t.nodeType) {
                            t.scrollTop = t._scrollTop, t.scrollLeft = t._scrollLeft;
                            for (var e = t.firstChild; e;) s(e), e = e.nextSibling
                        }
                    }

                    var a = t("./log");
                    e.exports = function (t, e, n, i, a, u, l) {
                        var c = o(t.documentElement, a.javascriptEnabled), h = e.createElement("iframe");
                        return h.className = "html2canvas-container", h.style.visibility = "hidden", h.style.position = "fixed", h.style.left = "-10000px", h.style.top = "0px", h.style.border = "0", h.width = n, h.height = i, h.scrolling = "no", e.body.appendChild(h), new Promise(function (e) {
                            var n = h.contentWindow.document;
                            h.contentWindow.onload = h.onload = function () {
                                var t = setInterval(function () {
                                    n.body.childNodes.length > 0 && (s(n.documentElement), clearInterval(t), "view" === a.type && (h.contentWindow.scrollTo(u, l), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || h.contentWindow.scrollY === l && h.contentWindow.scrollX === u || (n.documentElement.style.top = -l + "px", n.documentElement.style.left = -u + "px", n.documentElement.style.position = "absolute")), e(h))
                                }, 50)
                            }, n.open(), n.write("<!DOCTYPE html><html></html>"), r(t, u, l), n.replaceChild(n.adoptNode(c), n.documentElement), n.close()
                        })
                    }
                }, {"./log": 13}], 3: [function (t, e, n) {
                    function r(t) {
                        this.r = 0, this.g = 0, this.b = 0, this.a = null;
                        this.fromArray(t) || this.namedColor(t) || this.rgb(t) || this.rgba(t) || this.hex6(t) || this.hex3(t)
                    }

                    r.prototype.darken = function (t) {
                        var e = 1 - t;
                        return new r([Math.round(this.r * e), Math.round(this.g * e), Math.round(this.b * e), this.a])
                    }, r.prototype.isTransparent = function () {
                        return 0 === this.a
                    }, r.prototype.isBlack = function () {
                        return 0 === this.r && 0 === this.g && 0 === this.b
                    }, r.prototype.fromArray = function (t) {
                        return Array.isArray(t) && (this.r = Math.min(t[0], 255), this.g = Math.min(t[1], 255), this.b = Math.min(t[2], 255), t.length > 3 && (this.a = t[3])), Array.isArray(t)
                    };
                    var i = /^#([a-f0-9]{3})$/i;
                    r.prototype.hex3 = function (t) {
                        var e = null;
                        return null !== (e = t.match(i)) && (this.r = parseInt(e[1][0] + e[1][0], 16), this.g = parseInt(e[1][1] + e[1][1], 16), this.b = parseInt(e[1][2] + e[1][2], 16)), null !== e
                    };
                    var o = /^#([a-f0-9]{6})$/i;
                    r.prototype.hex6 = function (t) {
                        var e = null;
                        return null !== (e = t.match(o)) && (this.r = parseInt(e[1].substring(0, 2), 16), this.g = parseInt(e[1].substring(2, 4), 16), this.b = parseInt(e[1].substring(4, 6), 16)), null !== e
                    };
                    var s = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
                    r.prototype.rgb = function (t) {
                        var e = null;
                        return null !== (e = t.match(s)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3])), null !== e
                    };
                    var a = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
                    r.prototype.rgba = function (t) {
                        var e = null;
                        return null !== (e = t.match(a)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3]), this.a = Number(e[4])), null !== e
                    }, r.prototype.toString = function () {
                        return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")"
                    }, r.prototype.namedColor = function (t) {
                        t = t.toLowerCase();
                        var e = u[t];
                        if (e) this.r = e[0], this.g = e[1], this.b = e[2]; else if ("transparent" === t) return this.r = this.g = this.b = this.a = 0, !0;
                        return !!e
                    }, r.prototype.isColor = !0;
                    var u = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50]
                    };
                    e.exports = r
                }, {}], 4: [function (e, n, r) {
                    function i(t, e) {
                        var n = S++;
                        if (e = e || {}, e.logging && (y.options.logging = !0, y.options.start = Date.now()), e.async = "undefined" == typeof e.async || e.async, e.allowTaint = "undefined" != typeof e.allowTaint && e.allowTaint, e.removeContainer = "undefined" == typeof e.removeContainer || e.removeContainer, e.javascriptEnabled = "undefined" != typeof e.javascriptEnabled && e.javascriptEnabled, e.imageTimeout = "undefined" == typeof e.imageTimeout ? 1e4 : e.imageTimeout, e.renderer = "function" == typeof e.renderer ? e.renderer : f, e.strict = !!e.strict, "string" == typeof t) {
                            if ("string" != typeof e.proxy) return Promise.reject("Proxy must be used when rendering url");
                            var r = null != e.width ? e.width : window.innerWidth,
                                i = null != e.height ? e.height : window.innerHeight;
                            return w(h(t), e.proxy, document, r, i, e).then(function (t) {
                                return s(t.contentWindow.document.documentElement, t, e, r, i)
                            })
                        }
                        var a = (void 0 === t ? [document.documentElement] : t.length ? t : [t])[0];
                        return a.setAttribute(k + n, n), o(a.ownerDocument, e, a.ownerDocument.defaultView.innerWidth, a.ownerDocument.defaultView.innerHeight, n).then(function (t) {
                            return "function" == typeof e.onrendered && (y("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), e.onrendered(t)), t
                        })
                    }

                    function o(t, e, n, r, i) {
                        return b(t, t, n, r, e, t.defaultView.pageXOffset, t.defaultView.pageYOffset).then(function (o) {
                            y("Document cloned");
                            var a = k + i, u = "[" + a + "='" + i + "']";
                            t.querySelector(u).removeAttribute(a);
                            var l = o.contentWindow, c = l.document.querySelector(u),
                                h = "function" == typeof e.onclone ? Promise.resolve(e.onclone(l.document)) : Promise.resolve(!0);
                            return h.then(function () {
                                return s(c, o, e, n, r)
                            })
                        })
                    }

                    function s(t, e, n, r, i) {
                        var o = e.contentWindow, s = new p(o.document), h = new d(n, s), f = x(t),
                            m = "view" === n.type ? r : l(o.document), v = "view" === n.type ? i : c(o.document),
                            b = new n.renderer(m, v, h, n, document), w = new g(t, b, s, h, n);
                        return w.ready.then(function () {
                            y("Finished rendering");
                            var r;
                            return r = "view" === n.type ? u(b.canvas, {
                                width: b.canvas.width,
                                height: b.canvas.height,
                                top: 0,
                                left: 0,
                                x: 0,
                                y: 0
                            }) : t === o.document.body || t === o.document.documentElement || null != n.canvas ? b.canvas : u(b.canvas, {
                                width: null != n.width ? n.width : f.width,
                                height: null != n.height ? n.height : f.height,
                                top: f.top,
                                left: f.left,
                                x: 0,
                                y: 0
                            }), a(e, n), r
                        })
                    }

                    function a(t, e) {
                        e.removeContainer && (t.parentNode.removeChild(t), y("Cleaned up container"))
                    }

                    function u(t, e) {
                        var n = document.createElement("canvas"), r = Math.min(t.width - 1, Math.max(0, e.left)),
                            i = Math.min(t.width, Math.max(1, e.left + e.width)),
                            o = Math.min(t.height - 1, Math.max(0, e.top)),
                            s = Math.min(t.height, Math.max(1, e.top + e.height));
                        n.width = e.width, n.height = e.height;
                        var a = i - r, u = s - o;
                        return y("Cropping canvas at:", "left:", e.left, "top:", e.top, "width:", a, "height:", u), y("Resulting crop with width", e.width, "and height", e.height, "with x", r, "and y", o), n.getContext("2d").drawImage(t, r, o, a, u, e.x, e.y, a, u), n
                    }

                    function l(t) {
                        return Math.max(Math.max(t.body.scrollWidth, t.documentElement.scrollWidth), Math.max(t.body.offsetWidth, t.documentElement.offsetWidth), Math.max(t.body.clientWidth, t.documentElement.clientWidth))
                    }

                    function c(t) {
                        return Math.max(Math.max(t.body.scrollHeight, t.documentElement.scrollHeight), Math.max(t.body.offsetHeight, t.documentElement.offsetHeight), Math.max(t.body.clientHeight, t.documentElement.clientHeight))
                    }

                    function h(t) {
                        var e = document.createElement("a");
                        return e.href = t, e.href = e.href, e
                    }

                    var p = e("./support"), f = e("./renderers/canvas"), d = e("./imageloader"), g = e("./nodeparser"),
                        m = e("./nodecontainer"), y = e("./log"), v = e("./utils"), b = e("./clone"),
                        w = e("./proxy").loadUrlDocument, x = v.getBounds, k = "data-html2canvas-node", S = 0;
                    i.CanvasRenderer = f, i.NodeContainer = m, i.log = y, i.utils = v;
                    var _ = "undefined" == typeof document || "function" != typeof Object.create || "function" != typeof document.createElement("canvas").getContext ? function () {
                        return Promise.reject("No canvas support")
                    } : i;
                    n.exports = _, "function" == typeof t && t.amd && t("html2canvas", [], function () {
                        return _
                    })
                }, {
                    "./clone": 2,
                    "./imageloader": 11,
                    "./log": 13,
                    "./nodecontainer": 14,
                    "./nodeparser": 15,
                    "./proxy": 16,
                    "./renderers/canvas": 20,
                    "./support": 22,
                    "./utils": 26
                }], 5: [function (t, e, n) {
                    function r(t) {
                        if (this.src = t, i("DummyImageContainer for", t), !this.promise || !this.image) {
                            i("Initiating DummyImageContainer"), r.prototype.image = new Image;
                            var e = this.image;
                            r.prototype.promise = new Promise(function (t, n) {
                                e.onload = t, e.onerror = n, e.src = o(), e.complete === !0 && t(e)
                            })
                        }
                    }

                    var i = t("./log"), o = t("./utils").smallImage;
                    e.exports = r
                }, {"./log": 13, "./utils": 26}], 6: [function (t, e, n) {
                    function r(t, e) {
                        var n, r, o = document.createElement("div"), s = document.createElement("img"),
                            a = document.createElement("span"), u = "Hidden Text";
                        o.style.visibility = "hidden", o.style.fontFamily = t, o.style.fontSize = e, o.style.margin = 0, o.style.padding = 0, document.body.appendChild(o), s.src = i(), s.width = 1, s.height = 1, s.style.margin = 0, s.style.padding = 0, s.style.verticalAlign = "baseline", a.style.fontFamily = t, a.style.fontSize = e, a.style.margin = 0, a.style.padding = 0, a.appendChild(document.createTextNode(u)), o.appendChild(a), o.appendChild(s), n = s.offsetTop - a.offsetTop + 1, o.removeChild(a), o.appendChild(document.createTextNode(u)), o.style.lineHeight = "normal", s.style.verticalAlign = "super", r = s.offsetTop - o.offsetTop + 1, document.body.removeChild(o), this.baseline = n, this.lineWidth = 1, this.middle = r
                    }

                    var i = t("./utils").smallImage;
                    e.exports = r
                }, {"./utils": 26}], 7: [function (t, e, n) {
                    function r() {
                        this.data = {}
                    }

                    var i = t("./font");
                    r.prototype.getMetrics = function (t, e) {
                        return void 0 === this.data[t + "-" + e] && (this.data[t + "-" + e] = new i(t, e)), this.data[t + "-" + e]
                    }, e.exports = r
                }, {"./font": 6}], 8: [function (t, e, n) {
                    function r(e, n, r) {
                        this.image = null, this.src = e;
                        var i = this, s = o(e);
                        this.promise = (n ? new Promise(function (t) {
                            "about:blank" === e.contentWindow.document.URL || null == e.contentWindow.document.documentElement ? e.contentWindow.onload = e.onload = function () {
                                t(e)
                            } : t(e)
                        }) : this.proxyLoad(r.proxy, s, r)).then(function (e) {
                            var n = t("./core");
                            return n(e.contentWindow.document.documentElement, {
                                type: "view",
                                width: e.width,
                                height: e.height,
                                proxy: r.proxy,
                                javascriptEnabled: r.javascriptEnabled,
                                removeContainer: r.removeContainer,
                                allowTaint: r.allowTaint,
                                imageTimeout: r.imageTimeout / 2
                            })
                        }).then(function (t) {
                            return i.image = t
                        })
                    }

                    var i = t("./utils"), o = i.getBounds, s = t("./proxy").loadUrlDocument;
                    r.prototype.proxyLoad = function (t, e, n) {
                        var r = this.src;
                        return s(r.src, t, r.ownerDocument, e.width, e.height, n)
                    }, e.exports = r
                }, {"./core": 4, "./proxy": 16, "./utils": 26}], 9: [function (t, e, n) {
                    function r(t) {
                        this.src = t.value, this.colorStops = [], this.type = null, this.x0 = .5, this.y0 = .5, this.x1 = .5, this.y1 = .5, this.promise = Promise.resolve(!0)
                    }

                    r.TYPES = {
                        LINEAR: 1,
                        RADIAL: 2
                    }, r.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i, e.exports = r
                }, {}], 10: [function (t, e, n) {
                    function r(t, e) {
                        this.src = t, this.image = new Image;
                        var n = this;
                        this.tainted = null, this.promise = new Promise(function (r, i) {
                            n.image.onload = r, n.image.onerror = i, e && (n.image.crossOrigin = "anonymous"), n.image.src = t, n.image.complete === !0 && r(n.image)
                        })
                    }

                    e.exports = r
                }, {}], 11: [function (t, e, n) {
                    function r(t, e) {
                        this.link = null, this.options = t, this.support = e, this.origin = this.getOrigin(window.location.href)
                    }

                    var i = t("./log"), o = t("./imagecontainer"), s = t("./dummyimagecontainer"),
                        a = t("./proxyimagecontainer"), u = t("./framecontainer"), l = t("./svgcontainer"),
                        c = t("./svgnodecontainer"), h = t("./lineargradientcontainer"),
                        p = t("./webkitgradientcontainer"), f = t("./utils").bind;
                    r.prototype.findImages = function (t) {
                        var e = [];
                        return t.reduce(function (t, e) {
                            switch (e.node.nodeName) {
                                case"IMG":
                                    return t.concat([{args: [e.node.src], method: "url"}]);
                                case"svg":
                                case"IFRAME":
                                    return t.concat([{args: [e.node], method: e.node.nodeName}])
                            }
                            return t
                        }, []).forEach(this.addImage(e, this.loadImage), this), e
                    }, r.prototype.findBackgroundImage = function (t, e) {
                        return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t, this.loadImage), this), t
                    }, r.prototype.addImage = function (t, e) {
                        return function (n) {
                            n.args.forEach(function (r) {
                                this.imageExists(t, r) || (t.splice(0, 0, e.call(this, n)), i("Added image #" + t.length, "string" == typeof r ? r.substring(0, 100) : r));
                            }, this)
                        }
                    }, r.prototype.hasImageBackground = function (t) {
                        return "none" !== t.method
                    }, r.prototype.loadImage = function (t) {
                        if ("url" === t.method) {
                            var e = t.args[0];
                            return !this.isSVG(e) || this.support.svg || this.options.allowTaint ? e.match(/data:image\/.*;base64,/i) ? new o(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), !1) : this.isSameOrigin(e) || this.options.allowTaint === !0 || this.isSVG(e) ? new o(e, !1) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new o(e, !0) : this.options.proxy ? new a(e, this.options.proxy) : new s(e) : new l(e)
                        }
                        return "linear-gradient" === t.method ? new h(t) : "gradient" === t.method ? new p(t) : "svg" === t.method ? new c(t.args[0], this.support.svg) : "IFRAME" === t.method ? new u(t.args[0], this.isSameOrigin(t.args[0].src), this.options) : new s(t)
                    }, r.prototype.isSVG = function (t) {
                        return "svg" === t.substring(t.length - 3).toLowerCase() || l.prototype.isInline(t)
                    }, r.prototype.imageExists = function (t, e) {
                        return t.some(function (t) {
                            return t.src === e
                        })
                    }, r.prototype.isSameOrigin = function (t) {
                        return this.getOrigin(t) === this.origin
                    }, r.prototype.getOrigin = function (t) {
                        var e = this.link || (this.link = document.createElement("a"));
                        return e.href = t, e.href = e.href, e.protocol + e.hostname + e.port
                    }, r.prototype.getPromise = function (t) {
                        return this.timeout(t, this.options.imageTimeout).catch(function () {
                            var e = new s(t.src);
                            return e.promise.then(function (e) {
                                t.image = e
                            })
                        })
                    }, r.prototype.get = function (t) {
                        var e = null;
                        return this.images.some(function (n) {
                            return (e = n).src === t
                        }) ? e : null
                    }, r.prototype.fetch = function (t) {
                        return this.images = t.reduce(f(this.findBackgroundImage, this), this.findImages(t)), this.images.forEach(function (t, e) {
                            t.promise.then(function () {
                                i("Succesfully loaded image #" + (e + 1), t)
                            }, function (n) {
                                i("Failed loading image #" + (e + 1), t, n)
                            })
                        }), this.ready = Promise.all(this.images.map(this.getPromise, this)), i("Finished searching images"), this
                    }, r.prototype.timeout = function (t, e) {
                        var n, r = Promise.race([t.promise, new Promise(function (r, o) {
                            n = setTimeout(function () {
                                i("Timed out loading image", t), o(t)
                            }, e)
                        })]).then(function (t) {
                            return clearTimeout(n), t
                        });
                        return r.catch(function () {
                            clearTimeout(n)
                        }), r
                    }, e.exports = r
                }, {
                    "./dummyimagecontainer": 5,
                    "./framecontainer": 8,
                    "./imagecontainer": 10,
                    "./lineargradientcontainer": 12,
                    "./log": 13,
                    "./proxyimagecontainer": 17,
                    "./svgcontainer": 23,
                    "./svgnodecontainer": 24,
                    "./utils": 26,
                    "./webkitgradientcontainer": 27
                }], 12: [function (t, e, n) {
                    function r(t) {
                        i.apply(this, arguments), this.type = i.TYPES.LINEAR;
                        var e = r.REGEXP_DIRECTION.test(t.args[0]) || !i.REGEXP_COLORSTOP.test(t.args[0]);
                        e ? t.args[0].split(/\s+/).reverse().forEach(function (t, e) {
                            switch (t) {
                                case"left":
                                    this.x0 = 0, this.x1 = 1;
                                    break;
                                case"top":
                                    this.y0 = 0, this.y1 = 1;
                                    break;
                                case"right":
                                    this.x0 = 1, this.x1 = 0;
                                    break;
                                case"bottom":
                                    this.y0 = 1, this.y1 = 0;
                                    break;
                                case"to":
                                    var n = this.y0, r = this.x0;
                                    this.y0 = this.y1, this.x0 = this.x1, this.x1 = r, this.y1 = n;
                                    break;
                                case"center":
                                    break;
                                default:
                                    var i = .01 * parseFloat(t, 10);
                                    if (isNaN(i)) break;
                                    0 === e ? (this.y0 = i, this.y1 = 1 - this.y0) : (this.x0 = i, this.x1 = 1 - this.x0)
                            }
                        }, this) : (this.y0 = 0, this.y1 = 1), this.colorStops = t.args.slice(e ? 1 : 0).map(function (t) {
                            var e = t.match(i.REGEXP_COLORSTOP), n = +e[2], r = 0 === n ? "%" : e[3];
                            return {color: new o(e[1]), stop: "%" === r ? n / 100 : null}
                        }), null === this.colorStops[0].stop && (this.colorStops[0].stop = 0), null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1), this.colorStops.forEach(function (t, e) {
                            null === t.stop && this.colorStops.slice(e).some(function (n, r) {
                                return null !== n.stop && (t.stop = (n.stop - this.colorStops[e - 1].stop) / (r + 1) + this.colorStops[e - 1].stop, !0)
                            }, this)
                        }, this)
                    }

                    var i = t("./gradientcontainer"), o = t("./color");
                    r.prototype = Object.create(i.prototype), r.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i, e.exports = r
                }, {"./color": 3, "./gradientcontainer": 9}], 13: [function (t, e, n) {
                    var r = function () {
                        r.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - r.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)))
                    };
                    r.options = {logging: !1}, e.exports = r
                }, {}], 14: [function (t, e, n) {
                    function r(t, e) {
                        this.node = t, this.parent = e, this.stack = null, this.bounds = null, this.borders = null, this.clip = [], this.backgroundClip = [], this.offsetBounds = null, this.visible = null, this.computedStyles = null, this.colors = {}, this.styles = {}, this.backgroundImages = null, this.transformData = null, this.transformMatrix = null, this.isPseudoElement = !1, this.opacity = null
                    }

                    function i(t) {
                        var e = t.options[t.selectedIndex || 0];
                        return e ? e.text || "" : ""
                    }

                    function o(t) {
                        if (t && "matrix" === t[1]) return t[2].split(",").map(function (t) {
                            return parseFloat(t.trim())
                        });
                        if (t && "matrix3d" === t[1]) {
                            var e = t[2].split(",").map(function (t) {
                                return parseFloat(t.trim())
                            });
                            return [e[0], e[1], e[4], e[5], e[12], e[13]]
                        }
                    }

                    function s(t) {
                        return t.toString().indexOf("%") !== -1
                    }

                    function a(t) {
                        return t.replace("px", "")
                    }

                    function u(t) {
                        return parseFloat(t)
                    }

                    var l = t("./color"), c = t("./utils"), h = c.getBounds, p = c.parseBackgrounds, f = c.offsetBounds;
                    r.prototype.cloneTo = function (t) {
                        t.visible = this.visible, t.borders = this.borders, t.bounds = this.bounds, t.clip = this.clip, t.backgroundClip = this.backgroundClip, t.computedStyles = this.computedStyles, t.styles = this.styles, t.backgroundImages = this.backgroundImages, t.opacity = this.opacity
                    }, r.prototype.getOpacity = function () {
                        return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity
                    }, r.prototype.assignStack = function (t) {
                        this.stack = t, t.children.push(this)
                    }, r.prototype.isElementVisible = function () {
                        return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"))
                    }, r.prototype.css = function (t) {
                        return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)), this.styles[t] || (this.styles[t] = this.computedStyles[t])
                    }, r.prototype.prefixedCss = function (t) {
                        var e = ["webkit", "moz", "ms", "o"], n = this.css(t);
                        return void 0 === n && e.some(function (e) {
                            return n = this.css(e + t.substr(0, 1).toUpperCase() + t.substr(1)), void 0 !== n
                        }, this), void 0 === n ? null : n
                    }, r.prototype.computedStyle = function (t) {
                        return this.node.ownerDocument.defaultView.getComputedStyle(this.node, t)
                    }, r.prototype.cssInt = function (t) {
                        var e = parseInt(this.css(t), 10);
                        return isNaN(e) ? 0 : e
                    }, r.prototype.color = function (t) {
                        return this.colors[t] || (this.colors[t] = new l(this.css(t)))
                    }, r.prototype.cssFloat = function (t) {
                        var e = parseFloat(this.css(t));
                        return isNaN(e) ? 0 : e
                    }, r.prototype.fontWeight = function () {
                        var t = this.css("fontWeight");
                        switch (parseInt(t, 10)) {
                            case 401:
                                t = "bold";
                                break;
                            case 400:
                                t = "normal"
                        }
                        return t
                    }, r.prototype.parseClip = function () {
                        var t = this.css("clip").match(this.CLIP);
                        return t ? {
                            top: parseInt(t[1], 10),
                            right: parseInt(t[2], 10),
                            bottom: parseInt(t[3], 10),
                            left: parseInt(t[4], 10)
                        } : null
                    }, r.prototype.parseBackgroundImages = function () {
                        return this.backgroundImages || (this.backgroundImages = p(this.css("backgroundImage")))
                    }, r.prototype.cssList = function (t, e) {
                        var n = (this.css(t) || "").split(",");
                        return n = n[e || 0] || n[0] || "auto", n = n.trim().split(" "), 1 === n.length && (n = [n[0], s(n[0]) ? "auto" : n[0]]), n
                    }, r.prototype.parseBackgroundSize = function (t, e, n) {
                        var r, i, o = this.cssList("backgroundSize", n);
                        if (s(o[0])) r = t.width * parseFloat(o[0]) / 100; else {
                            if (/contain|cover/.test(o[0])) {
                                var a = t.width / t.height, u = e.width / e.height;
                                return a < u ^ "contain" === o[0] ? {
                                    width: t.height * u,
                                    height: t.height
                                } : {width: t.width, height: t.width / u}
                            }
                            r = parseInt(o[0], 10)
                        }
                        return i = "auto" === o[0] && "auto" === o[1] ? e.height : "auto" === o[1] ? r / e.width * e.height : s(o[1]) ? t.height * parseFloat(o[1]) / 100 : parseInt(o[1], 10), "auto" === o[0] && (r = i / e.height * e.width), {
                            width: r,
                            height: i
                        }
                    }, r.prototype.parseBackgroundPosition = function (t, e, n, r) {
                        var i, o, a = this.cssList("backgroundPosition", n);
                        return i = s(a[0]) ? (t.width - (r || e).width) * (parseFloat(a[0]) / 100) : parseInt(a[0], 10), o = "auto" === a[1] ? i / e.width * e.height : s(a[1]) ? (t.height - (r || e).height) * parseFloat(a[1]) / 100 : parseInt(a[1], 10), "auto" === a[0] && (i = o / e.height * e.width), {
                            left: i,
                            top: o
                        }
                    }, r.prototype.parseBackgroundRepeat = function (t) {
                        return this.cssList("backgroundRepeat", t)[0]
                    }, r.prototype.parseTextShadows = function () {
                        var t = this.css("textShadow"), e = [];
                        if (t && "none" !== t) for (var n = t.match(this.TEXT_SHADOW_PROPERTY), r = 0; n && r < n.length; r++) {
                            var i = n[r].match(this.TEXT_SHADOW_VALUES);
                            e.push({
                                color: new l(i[0]),
                                offsetX: i[1] ? parseFloat(i[1].replace("px", "")) : 0,
                                offsetY: i[2] ? parseFloat(i[2].replace("px", "")) : 0,
                                blur: i[3] ? i[3].replace("px", "") : 0
                            })
                        }
                        return e
                    }, r.prototype.parseTransform = function () {
                        if (!this.transformData) if (this.hasTransform()) {
                            var t = this.parseBounds(),
                                e = this.prefixedCss("transformOrigin").split(" ").map(a).map(u);
                            e[0] += t.left, e[1] += t.top, this.transformData = {
                                origin: e,
                                matrix: this.parseTransformMatrix()
                            }
                        } else this.transformData = {origin: [0, 0], matrix: [1, 0, 0, 1, 0, 0]};
                        return this.transformData
                    }, r.prototype.parseTransformMatrix = function () {
                        if (!this.transformMatrix) {
                            var t = this.prefixedCss("transform"), e = t ? o(t.match(this.MATRIX_PROPERTY)) : null;
                            this.transformMatrix = e ? e : [1, 0, 0, 1, 0, 0]
                        }
                        return this.transformMatrix
                    }, r.prototype.parseBounds = function () {
                        return this.bounds || (this.bounds = this.hasTransform() ? f(this.node) : h(this.node))
                    }, r.prototype.hasTransform = function () {
                        return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform()
                    }, r.prototype.getValue = function () {
                        var t = this.node.value || "";
                        return "SELECT" === this.node.tagName ? t = i(this.node) : "password" === this.node.type && (t = Array(t.length + 1).join("•")), 0 === t.length ? this.node.placeholder || "" : t
                    }, r.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/, r.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g, r.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g, r.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/, e.exports = r
                }, {"./color": 3, "./utils": 26}], 15: [function (t, e, n) {
                    function r(t, e, n, r, i) {
                        z("Starting NodeParser"), this.renderer = e, this.options = i, this.range = null, this.support = n, this.renderQueue = [], this.stack = new X(!0, 1, t.ownerDocument, null);
                        var o = new F(t, null);
                        if (i.background && e.rectangle(0, 0, e.width, e.height, new V(i.background)), t === t.ownerDocument.documentElement) {
                            var s = new F(o.color("backgroundColor").isTransparent() ? t.ownerDocument.body : t.ownerDocument.documentElement, null);
                            e.rectangle(0, 0, e.width, e.height, s.color("backgroundColor"))
                        }
                        o.visibile = o.isElementVisible(), this.createPseudoHideStyles(t.ownerDocument), this.disableAnimations(t.ownerDocument), this.nodes = M([o].concat(this.getChildren(o)).filter(function (t) {
                            return t.visible = t.isElementVisible()
                        }).map(this.getPseudoElements, this)), this.fontMetrics = new W, z("Fetched nodes, total:", this.nodes.length), z("Calculate overflow clips"), this.calculateOverflowClips(), z("Start fetching images"), this.images = r.fetch(this.nodes.filter(E)), this.ready = this.images.ready.then(Y(function () {
                            return z("Images loaded, starting parsing"), z("Creating stacking contexts"), this.createStackingContexts(), z("Sorting stacking contexts"), this.sortStackingContexts(this.stack), this.parse(this.stack), z("Render queue created with " + this.renderQueue.length + " items"), new Promise(Y(function (t) {
                                i.async ? "function" == typeof i.async ? i.async.call(this, this.renderQueue, t) : this.renderQueue.length > 0 ? (this.renderIndex = 0, this.asyncRenderer(this.renderQueue, t)) : t() : (this.renderQueue.forEach(this.paint, this), t())
                            }, this))
                        }, this))
                    }

                    function i(t) {
                        return t.parent && t.parent.clip.length
                    }

                    function o(t) {
                        return t.replace(/(\-[a-z])/g, function (t) {
                            return t.toUpperCase().replace("-", "")
                        })
                    }

                    function s() {
                    }

                    function a(t, e, n, r) {
                        return t.map(function (i, o) {
                            if (i.width > 0) {
                                var s = e.left, a = e.top, u = e.width, l = e.height - t[2].width;
                                switch (o) {
                                    case 0:
                                        l = t[0].width, i.args = h({
                                            c1: [s, a],
                                            c2: [s + u, a],
                                            c3: [s + u - t[1].width, a + l],
                                            c4: [s + t[3].width, a + l]
                                        }, r[0], r[1], n.topLeftOuter, n.topLeftInner, n.topRightOuter, n.topRightInner);
                                        break;
                                    case 1:
                                        s = e.left + e.width - t[1].width, u = t[1].width, i.args = h({
                                            c1: [s + u, a],
                                            c2: [s + u, a + l + t[2].width],
                                            c3: [s, a + l],
                                            c4: [s, a + t[0].width]
                                        }, r[1], r[2], n.topRightOuter, n.topRightInner, n.bottomRightOuter, n.bottomRightInner);
                                        break;
                                    case 2:
                                        a = a + e.height - t[2].width, l = t[2].width, i.args = h({
                                            c1: [s + u, a + l],
                                            c2: [s, a + l],
                                            c3: [s + t[3].width, a],
                                            c4: [s + u - t[3].width, a]
                                        }, r[2], r[3], n.bottomRightOuter, n.bottomRightInner, n.bottomLeftOuter, n.bottomLeftInner);
                                        break;
                                    case 3:
                                        u = t[3].width, i.args = h({
                                            c1: [s, a + l + t[2].width],
                                            c2: [s, a],
                                            c3: [s + u, a + t[0].width],
                                            c4: [s + u, a + l]
                                        }, r[3], r[0], n.bottomLeftOuter, n.bottomLeftInner, n.topLeftOuter, n.topLeftInner)
                                }
                            }
                            return i
                        })
                    }

                    function u(t, e, n, r) {
                        var i = 4 * ((Math.sqrt(2) - 1) / 3), o = n * i, s = r * i, a = t + n, u = e + r;
                        return {
                            topLeft: c({x: t, y: u}, {x: t, y: u - s}, {x: a - o, y: e}, {x: a, y: e}),
                            topRight: c({x: t, y: e}, {x: t + o, y: e}, {x: a, y: u - s}, {x: a, y: u}),
                            bottomRight: c({x: a, y: e}, {x: a, y: e + s}, {x: t + o, y: u}, {x: t, y: u}),
                            bottomLeft: c({x: a, y: u}, {x: a - o, y: u}, {x: t, y: e + s}, {x: t, y: e})
                        }
                    }

                    function l(t, e, n) {
                        var r = t.left, i = t.top, o = t.width, s = t.height, a = e[0][0] < o / 2 ? e[0][0] : o / 2,
                            l = e[0][1] < s / 2 ? e[0][1] : s / 2, c = e[1][0] < o / 2 ? e[1][0] : o / 2,
                            h = e[1][1] < s / 2 ? e[1][1] : s / 2, p = e[2][0] < o / 2 ? e[2][0] : o / 2,
                            f = e[2][1] < s / 2 ? e[2][1] : s / 2, d = e[3][0] < o / 2 ? e[3][0] : o / 2,
                            g = e[3][1] < s / 2 ? e[3][1] : s / 2, m = o - c, y = s - f, v = o - p, b = s - g;
                        return {
                            topLeftOuter: u(r, i, a, l).topLeft.subdivide(.5),
                            topLeftInner: u(r + n[3].width, i + n[0].width, Math.max(0, a - n[3].width), Math.max(0, l - n[0].width)).topLeft.subdivide(.5),
                            topRightOuter: u(r + m, i, c, h).topRight.subdivide(.5),
                            topRightInner: u(r + Math.min(m, o + n[3].width), i + n[0].width, m > o + n[3].width ? 0 : c - n[3].width, h - n[0].width).topRight.subdivide(.5),
                            bottomRightOuter: u(r + v, i + y, p, f).bottomRight.subdivide(.5),
                            bottomRightInner: u(r + Math.min(v, o - n[3].width), i + Math.min(y, s + n[0].width), Math.max(0, p - n[1].width), f - n[2].width).bottomRight.subdivide(.5),
                            bottomLeftOuter: u(r, i + b, d, g).bottomLeft.subdivide(.5),
                            bottomLeftInner: u(r + n[3].width, i + b, Math.max(0, d - n[3].width), g - n[2].width).bottomLeft.subdivide(.5)
                        }
                    }

                    function c(t, e, n, r) {
                        var i = function (t, e, n) {
                            return {x: t.x + (e.x - t.x) * n, y: t.y + (e.y - t.y) * n}
                        };
                        return {
                            start: t, startControl: e, endControl: n, end: r, subdivide: function (o) {
                                var s = i(t, e, o), a = i(e, n, o), u = i(n, r, o), l = i(s, a, o), h = i(a, u, o),
                                    p = i(l, h, o);
                                return [c(t, s, l, p), c(p, h, u, r)]
                            }, curveTo: function (t) {
                                t.push(["bezierCurve", e.x, e.y, n.x, n.y, r.x, r.y])
                            }, curveToReversed: function (r) {
                                r.push(["bezierCurve", n.x, n.y, e.x, e.y, t.x, t.y])
                            }
                        }
                    }

                    function h(t, e, n, r, i, o, s) {
                        var a = [];
                        return e[0] > 0 || e[1] > 0 ? (a.push(["line", r[1].start.x, r[1].start.y]), r[1].curveTo(a)) : a.push(["line", t.c1[0], t.c1[1]]), n[0] > 0 || n[1] > 0 ? (a.push(["line", o[0].start.x, o[0].start.y]), o[0].curveTo(a), a.push(["line", s[0].end.x, s[0].end.y]), s[0].curveToReversed(a)) : (a.push(["line", t.c2[0], t.c2[1]]), a.push(["line", t.c3[0], t.c3[1]])), e[0] > 0 || e[1] > 0 ? (a.push(["line", i[1].end.x, i[1].end.y]), i[1].curveToReversed(a)) : a.push(["line", t.c4[0], t.c4[1]]), a
                    }

                    function p(t, e, n, r, i, o, s) {
                        e[0] > 0 || e[1] > 0 ? (t.push(["line", r[0].start.x, r[0].start.y]), r[0].curveTo(t), r[1].curveTo(t)) : t.push(["line", o, s]), (n[0] > 0 || n[1] > 0) && t.push(["line", i[0].start.x, i[0].start.y])
                    }

                    function f(t) {
                        return t.cssInt("zIndex") < 0
                    }

                    function d(t) {
                        return t.cssInt("zIndex") > 0
                    }

                    function g(t) {
                        return 0 === t.cssInt("zIndex")
                    }

                    function m(t) {
                        return ["inline", "inline-block", "inline-table"].indexOf(t.css("display")) !== -1
                    }

                    function y(t) {
                        return t instanceof X
                    }

                    function v(t) {
                        return t.node.data.trim().length > 0
                    }

                    function b(t) {
                        return /^(normal|none|0px)$/.test(t.parent.css("letterSpacing"))
                    }

                    function w(t) {
                        return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function (e) {
                            var n = t.css("border" + e + "Radius"), r = n.split(" ");
                            return r.length <= 1 && (r[1] = r[0]), r.map(R)
                        })
                    }

                    function x(t) {
                        return t.nodeType === Node.TEXT_NODE || t.nodeType === Node.ELEMENT_NODE
                    }

                    function k(t) {
                        var e = t.css("position"),
                            n = ["absolute", "relative", "fixed"].indexOf(e) !== -1 ? t.css("zIndex") : "auto";
                        return "auto" !== n
                    }

                    function S(t) {
                        return "static" !== t.css("position")
                    }

                    function _(t) {
                        return "none" !== t.css("float")
                    }

                    function T(t) {
                        return ["inline-block", "inline-table"].indexOf(t.css("display")) !== -1
                    }

                    function C(t) {
                        var e = this;
                        return function () {
                            return !t.apply(e, arguments)
                        }
                    }

                    function E(t) {
                        return t.node.nodeType === Node.ELEMENT_NODE
                    }

                    function A(t) {
                        return t.isPseudoElement === !0
                    }

                    function L(t) {
                        return t.node.nodeType === Node.TEXT_NODE
                    }

                    function I(t) {
                        return function (e, n) {
                            return e.cssInt("zIndex") + t.indexOf(e) / t.length - (n.cssInt("zIndex") + t.indexOf(n) / t.length)
                        }
                    }

                    function D(t) {
                        return t.getOpacity() < 1
                    }

                    function R(t) {
                        return parseInt(t, 10)
                    }

                    function N(t) {
                        return t.width
                    }

                    function O(t) {
                        return t.node.nodeType !== Node.ELEMENT_NODE || ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(t.node.nodeName) === -1
                    }

                    function M(t) {
                        return [].concat.apply([], t)
                    }

                    function B(t) {
                        var e = t.substr(0, 1);
                        return e === t.substr(t.length - 1) && e.match(/'|"/) ? t.substr(1, t.length - 2) : t
                    }

                    function P(t) {
                        for (var e, n = [], r = 0, i = !1; t.length;) q(t[r]) === i ? (e = t.splice(0, r), e.length && n.push($.ucs2.encode(e)), i = !i, r = 0) : r++, r >= t.length && (e = t.splice(0, r), e.length && n.push($.ucs2.encode(e)));
                        return n
                    }

                    function q(t) {
                        return [32, 13, 10, 9, 45].indexOf(t) !== -1
                    }

                    function j(t) {
                        return /[^\u0000-\u00ff]/.test(t)
                    }

                    var z = t("./log"), $ = t("punycode"), F = t("./nodecontainer"), U = t("./textcontainer"),
                        H = t("./pseudoelementcontainer"), W = t("./fontmetrics"), V = t("./color"),
                        X = t("./stackingcontext"), G = t("./utils"), Y = G.bind, K = G.getBounds,
                        J = G.parseBackgrounds, Q = G.offsetBounds;
                    r.prototype.calculateOverflowClips = function () {
                        this.nodes.forEach(function (t) {
                            if (E(t)) {
                                A(t) && t.appendToDOM(), t.borders = this.parseBorders(t);
                                var e = "hidden" === t.css("overflow") ? [t.borders.clip] : [], n = t.parseClip();
                                n && ["absolute", "fixed"].indexOf(t.css("position")) !== -1 && e.push([["rect", t.bounds.left + n.left, t.bounds.top + n.top, n.right - n.left, n.bottom - n.top]]), t.clip = i(t) ? t.parent.clip.concat(e) : e, t.backgroundClip = "hidden" !== t.css("overflow") ? t.clip.concat([t.borders.clip]) : t.clip, A(t) && t.cleanDOM()
                            } else L(t) && (t.clip = i(t) ? t.parent.clip : []);
                            A(t) || (t.bounds = null)
                        }, this)
                    }, r.prototype.asyncRenderer = function (t, e, n) {
                        n = n || Date.now(), this.paint(t[this.renderIndex++]), t.length === this.renderIndex ? e() : n + 20 > Date.now() ? this.asyncRenderer(t, e, n) : setTimeout(Y(function () {
                            this.asyncRenderer(t, e)
                        }, this), 0)
                    }, r.prototype.createPseudoHideStyles = function (t) {
                        this.createStyles(t, "." + H.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + H.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }')
                    }, r.prototype.disableAnimations = function (t) {
                        this.createStyles(t, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")
                    }, r.prototype.createStyles = function (t, e) {
                        var n = t.createElement("style");
                        n.innerHTML = e, t.body.appendChild(n)
                    }, r.prototype.getPseudoElements = function (t) {
                        var e = [[t]];
                        if (t.node.nodeType === Node.ELEMENT_NODE) {
                            var n = this.getPseudoElement(t, ":before"), r = this.getPseudoElement(t, ":after");
                            n && e.push(n), r && e.push(r)
                        }
                        return M(e)
                    }, r.prototype.getPseudoElement = function (t, e) {
                        var n = t.computedStyle(e);
                        if (!n || !n.content || "none" === n.content || "-moz-alt-content" === n.content || "none" === n.display) return null;
                        for (var r = B(n.content), i = "url" === r.substr(0, 3), s = document.createElement(i ? "img" : "html2canvaspseudoelement"), a = new H(s, t, e), u = n.length - 1; u >= 0; u--) {
                            var l = o(n.item(u));
                            s.style[l] = n[l]
                        }
                        if (s.className = H.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + H.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER, i) return s.src = J(r)[0].args[0], [a];
                        var c = document.createTextNode(r);
                        return s.appendChild(c), [a, new U(c, a)]
                    }, r.prototype.getChildren = function (t) {
                        return M([].filter.call(t.node.childNodes, x).map(function (e) {
                            var n = [e.nodeType === Node.TEXT_NODE ? new U(e, t) : new F(e, t)].filter(O);
                            return e.nodeType === Node.ELEMENT_NODE && n.length && "TEXTAREA" !== e.tagName ? n[0].isElementVisible() ? n.concat(this.getChildren(n[0])) : [] : n
                        }, this))
                    }, r.prototype.newStackingContext = function (t, e) {
                        var n = new X(e, t.getOpacity(), t.node, t.parent);
                        t.cloneTo(n);
                        var r = e ? n.getParentStack(this) : n.parent.stack;
                        r.contexts.push(n), t.stack = n
                    }, r.prototype.createStackingContexts = function () {
                        this.nodes.forEach(function (t) {
                            E(t) && (this.isRootElement(t) || D(t) || k(t) || this.isBodyWithTransparentRoot(t) || t.hasTransform()) ? this.newStackingContext(t, !0) : E(t) && (S(t) && g(t) || T(t) || _(t)) ? this.newStackingContext(t, !1) : t.assignStack(t.parent.stack)
                        }, this)
                    }, r.prototype.isBodyWithTransparentRoot = function (t) {
                        return "BODY" === t.node.nodeName && t.parent.color("backgroundColor").isTransparent()
                    }, r.prototype.isRootElement = function (t) {
                        return null === t.parent
                    }, r.prototype.sortStackingContexts = function (t) {
                        t.contexts.sort(I(t.contexts.slice(0))), t.contexts.forEach(this.sortStackingContexts, this)
                    }, r.prototype.parseTextBounds = function (t) {
                        return function (e, n, r) {
                            if ("none" !== t.parent.css("textDecoration").substr(0, 4) || 0 !== e.trim().length) {
                                if (this.support.rangeBounds && !t.parent.hasTransform()) {
                                    var i = r.slice(0, n).join("").length;
                                    return this.getRangeBounds(t.node, i, e.length)
                                }
                                if (t.node && "string" == typeof t.node.data) {
                                    var o = t.node.splitText(e.length),
                                        s = this.getWrapperBounds(t.node, t.parent.hasTransform());
                                    return t.node = o, s
                                }
                            } else this.support.rangeBounds && !t.parent.hasTransform() || (t.node = t.node.splitText(e.length));
                            return {}
                        }
                    }, r.prototype.getWrapperBounds = function (t, e) {
                        var n = t.ownerDocument.createElement("html2canvaswrapper"), r = t.parentNode,
                            i = t.cloneNode(!0);
                        n.appendChild(t.cloneNode(!0)), r.replaceChild(n, t);
                        var o = e ? Q(n) : K(n);
                        return r.replaceChild(i, n), o
                    }, r.prototype.getRangeBounds = function (t, e, n) {
                        var r = this.range || (this.range = t.ownerDocument.createRange());
                        return r.setStart(t, e), r.setEnd(t, e + n), r.getBoundingClientRect()
                    }, r.prototype.parse = function (t) {
                        var e = t.contexts.filter(f), n = t.children.filter(E), r = n.filter(C(_)),
                            i = r.filter(C(S)).filter(C(m)), o = n.filter(C(S)).filter(_), a = r.filter(C(S)).filter(m),
                            u = t.contexts.concat(r.filter(S)).filter(g), l = t.children.filter(L).filter(v),
                            c = t.contexts.filter(d);
                        e.concat(i).concat(o).concat(a).concat(u).concat(l).concat(c).forEach(function (t) {
                            this.renderQueue.push(t), y(t) && (this.parse(t), this.renderQueue.push(new s))
                        }, this)
                    }, r.prototype.paint = function (t) {
                        try {
                            t instanceof s ? this.renderer.ctx.restore() : L(t) ? (A(t.parent) && t.parent.appendToDOM(), this.paintText(t), A(t.parent) && t.parent.cleanDOM()) : this.paintNode(t)
                        } catch (t) {
                            if (z(t), this.options.strict) throw t
                        }
                    }, r.prototype.paintNode = function (t) {
                        y(t) && (this.renderer.setOpacity(t.opacity), this.renderer.ctx.save(), t.hasTransform() && this.renderer.setTransform(t.parseTransform())), "INPUT" === t.node.nodeName && "checkbox" === t.node.type ? this.paintCheckbox(t) : "INPUT" === t.node.nodeName && "radio" === t.node.type ? this.paintRadio(t) : this.paintElement(t)
                    }, r.prototype.paintElement = function (t) {
                        var e = t.parseBounds();
                        this.renderer.clip(t.backgroundClip, function () {
                            this.renderer.renderBackground(t, e, t.borders.borders.map(N))
                        }, this), this.renderer.clip(t.clip, function () {
                            this.renderer.renderBorders(t.borders.borders)
                        }, this), this.renderer.clip(t.backgroundClip, function () {
                            switch (t.node.nodeName) {
                                case"svg":
                                case"IFRAME":
                                    var n = this.images.get(t.node);
                                    n ? this.renderer.renderImage(t, e, t.borders, n) : z("Error loading <" + t.node.nodeName + ">", t.node);
                                    break;
                                case"IMG":
                                    var r = this.images.get(t.node.src);
                                    r ? this.renderer.renderImage(t, e, t.borders, r) : z("Error loading <img>", t.node.src);
                                    break;
                                case"CANVAS":
                                    this.renderer.renderImage(t, e, t.borders, {image: t.node});
                                    break;
                                case"SELECT":
                                case"INPUT":
                                case"TEXTAREA":
                                    this.paintFormValue(t)
                            }
                        }, this)
                    }, r.prototype.paintCheckbox = function (t) {
                        var e = t.parseBounds(), n = Math.min(e.width, e.height),
                            r = {width: n - 1, height: n - 1, top: e.top, left: e.left}, i = [3, 3], o = [i, i, i, i],
                            s = [1, 1, 1, 1].map(function (t) {
                                return {color: new V("#A5A5A5"), width: t}
                            }), u = l(r, o, s);
                        this.renderer.clip(t.backgroundClip, function () {
                            this.renderer.rectangle(r.left + 1, r.top + 1, r.width - 2, r.height - 2, new V("#DEDEDE")), this.renderer.renderBorders(a(s, r, u, o)), t.node.checked && (this.renderer.font(new V("#424242"), "normal", "normal", "bold", n - 3 + "px", "arial"), this.renderer.text("✔", r.left + n / 6, r.top + n - 1))
                        }, this)
                    }, r.prototype.paintRadio = function (t) {
                        var e = t.parseBounds(), n = Math.min(e.width, e.height) - 2;
                        this.renderer.clip(t.backgroundClip, function () {
                            this.renderer.circleStroke(e.left + 1, e.top + 1, n, new V("#DEDEDE"), 1, new V("#A5A5A5")), t.node.checked && this.renderer.circle(Math.ceil(e.left + n / 4) + 1, Math.ceil(e.top + n / 4) + 1, Math.floor(n / 2), new V("#424242"))
                        }, this)
                    }, r.prototype.paintFormValue = function (t) {
                        var e = t.getValue();
                        if (e.length > 0) {
                            var n = t.node.ownerDocument, r = n.createElement("html2canvaswrapper"),
                                i = ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"];
                            i.forEach(function (e) {
                                try {
                                    r.style[e] = t.css(e)
                                } catch (t) {
                                    z("html2canvas: Parse: Exception caught in renderFormValue: " + t.message)
                                }
                            });
                            var o = t.parseBounds();
                            r.style.position = "fixed", r.style.left = o.left + "px", r.style.top = o.top + "px", r.textContent = e, n.body.appendChild(r), this.paintText(new U(r.firstChild, t)), n.body.removeChild(r)
                        }
                    }, r.prototype.paintText = function (t) {
                        t.applyTextTransform();
                        var e = $.ucs2.decode(t.node.data),
                            n = this.options.letterRendering && !b(t) || j(t.node.data) ? e.map(function (t) {
                                return $.ucs2.encode([t])
                            }) : P(e), r = t.parent.fontWeight(), i = t.parent.css("fontSize"),
                            o = t.parent.css("fontFamily"), s = t.parent.parseTextShadows();
                        this.renderer.font(t.parent.color("color"), t.parent.css("fontStyle"), t.parent.css("fontVariant"), r, i, o), s.length ? this.renderer.fontShadow(s[0].color, s[0].offsetX, s[0].offsetY, s[0].blur) : this.renderer.clearShadow(), this.renderer.clip(t.parent.clip, function () {
                            n.map(this.parseTextBounds(t), this).forEach(function (e, r) {
                                e && (this.renderer.text(n[r], e.left, e.bottom), this.renderTextDecoration(t.parent, e, this.fontMetrics.getMetrics(o, i)))
                            }, this)
                        }, this)
                    }, r.prototype.renderTextDecoration = function (t, e, n) {
                        switch (t.css("textDecoration").split(" ")[0]) {
                            case"underline":
                                this.renderer.rectangle(e.left, Math.round(e.top + n.baseline + n.lineWidth), e.width, 1, t.color("color"));
                                break;
                            case"overline":
                                this.renderer.rectangle(e.left, Math.round(e.top), e.width, 1, t.color("color"));
                                break;
                            case"line-through":
                                this.renderer.rectangle(e.left, Math.ceil(e.top + n.middle + n.lineWidth), e.width, 1, t.color("color"))
                        }
                    };
                    var Z = {inset: [["darken", .6], ["darken", .1], ["darken", .1], ["darken", .6]]};
                    r.prototype.parseBorders = function (t) {
                        var e = t.parseBounds(), n = w(t), r = ["Top", "Right", "Bottom", "Left"].map(function (e, n) {
                            var r = t.css("border" + e + "Style"), i = t.color("border" + e + "Color");
                            "inset" === r && i.isBlack() && (i = new V([255, 255, 255, i.a]));
                            var o = Z[r] ? Z[r][n] : null;
                            return {width: t.cssInt("border" + e + "Width"), color: o ? i[o[0]](o[1]) : i, args: null}
                        }), i = l(e, n, r);
                        return {clip: this.parseBackgroundClip(t, i, r, n, e), borders: a(r, e, i, n)}
                    }, r.prototype.parseBackgroundClip = function (t, e, n, r, i) {
                        var o = t.css("backgroundClip"), s = [];
                        switch (o) {
                            case"content-box":
                            case"padding-box":
                                p(s, r[0], r[1], e.topLeftInner, e.topRightInner, i.left + n[3].width, i.top + n[0].width), p(s, r[1], r[2], e.topRightInner, e.bottomRightInner, i.left + i.width - n[1].width, i.top + n[0].width), p(s, r[2], r[3], e.bottomRightInner, e.bottomLeftInner, i.left + i.width - n[1].width, i.top + i.height - n[2].width), p(s, r[3], r[0], e.bottomLeftInner, e.topLeftInner, i.left + n[3].width, i.top + i.height - n[2].width);
                                break;
                            default:
                                p(s, r[0], r[1], e.topLeftOuter, e.topRightOuter, i.left, i.top), p(s, r[1], r[2], e.topRightOuter, e.bottomRightOuter, i.left + i.width, i.top), p(s, r[2], r[3], e.bottomRightOuter, e.bottomLeftOuter, i.left + i.width, i.top + i.height), p(s, r[3], r[0], e.bottomLeftOuter, e.topLeftOuter, i.left, i.top + i.height)
                        }
                        return s
                    }, e.exports = r
                }, {
                    "./color": 3,
                    "./fontmetrics": 7,
                    "./log": 13,
                    "./nodecontainer": 14,
                    "./pseudoelementcontainer": 18,
                    "./stackingcontext": 21,
                    "./textcontainer": 25,
                    "./utils": 26,
                    punycode: 1
                }], 16: [function (t, e, n) {
                    function r(t, e, n) {
                        var r = "withCredentials" in new XMLHttpRequest;
                        if (!e) return Promise.reject("No proxy configured");
                        var i = s(r), u = a(e, t, i);
                        return r ? c(u) : o(n, u, i).then(function (t) {
                            return d(t.content)
                        })
                    }

                    function i(t, e, n) {
                        var r = "crossOrigin" in new Image, i = s(r), u = a(e, t, i);
                        return r ? Promise.resolve(u) : o(n, u, i).then(function (t) {
                            return "data:" + t.type + ";base64," + t.content
                        })
                    }

                    function o(t, e, n) {
                        return new Promise(function (r, i) {
                            var o = t.createElement("script"), s = function () {
                                delete window.html2canvas.proxy[n], t.body.removeChild(o)
                            };
                            window.html2canvas.proxy[n] = function (t) {
                                s(), r(t)
                            }, o.src = e, o.onerror = function (t) {
                                s(), i(t)
                            }, t.body.appendChild(o)
                        })
                    }

                    function s(t) {
                        return t ? "" : "html2canvas_" + Date.now() + "_" + ++g + "_" + Math.round(1e5 * Math.random())
                    }

                    function a(t, e, n) {
                        return t + "?url=" + encodeURIComponent(e) + (n.length ? "&callback=html2canvas.proxy." + n : "")
                    }

                    function u(t) {
                        return function (e) {
                            var n, r = new DOMParser;
                            try {
                                n = r.parseFromString(e, "text/html")
                            } catch (t) {
                                p("DOMParser not supported, falling back to createHTMLDocument"), n = document.implementation.createHTMLDocument("");
                                try {
                                    n.open(), n.write(e), n.close()
                                } catch (t) {
                                    p("createHTMLDocument write not supported, falling back to document.body.innerHTML"), n.body.innerHTML = e
                                }
                            }
                            var i = n.querySelector("base");
                            if (!i || !i.href.host) {
                                var o = n.createElement("base");
                                o.href = t, n.head.insertBefore(o, n.head.firstChild)
                            }
                            return n
                        }
                    }

                    function l(t, e, n, i, o, s) {
                        return new r(t, e, window.document).then(u(t)).then(function (t) {
                            return f(t, n, i, o, s, 0, 0)
                        })
                    }

                    var c = t("./xhr"), h = t("./utils"), p = t("./log"), f = t("./clone"), d = h.decode64, g = 0;
                    n.Proxy = r, n.ProxyURL = i, n.loadUrlDocument = l
                }, {"./clone": 2, "./log": 13, "./utils": 26, "./xhr": 28}], 17: [function (t, e, n) {
                    function r(t, e) {
                        var n = document.createElement("a");
                        n.href = t, t = n.href, this.src = t, this.image = new Image;
                        var r = this;
                        this.promise = new Promise(function (n, o) {
                            r.image.crossOrigin = "Anonymous", r.image.onload = n, r.image.onerror = o, new i(t, e, document).then(function (t) {
                                r.image.src = t
                            }).catch(o)
                        })
                    }

                    var i = t("./proxy").ProxyURL;
                    e.exports = r
                }, {"./proxy": 16}], 18: [function (t, e, n) {
                    function r(t, e, n) {
                        i.call(this, t, e), this.isPseudoElement = !0, this.before = ":before" === n
                    }

                    var i = t("./nodecontainer");
                    r.prototype.cloneTo = function (t) {
                        r.prototype.cloneTo.call(this, t), t.isPseudoElement = !0, t.before = this.before
                    }, r.prototype = Object.create(i.prototype), r.prototype.appendToDOM = function () {
                        this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node), this.parent.node.className += " " + this.getHideClass()
                    }, r.prototype.cleanDOM = function () {
                        this.node.parentNode.removeChild(this.node), this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "")
                    }, r.prototype.getHideClass = function () {
                        return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")]
                    }, r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before", r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after", e.exports = r
                }, {"./nodecontainer": 14}], 19: [function (t, e, n) {
                    function r(t, e, n, r, i) {
                        this.width = t, this.height = e, this.images = n, this.options = r, this.document = i
                    }

                    var i = t("./log");
                    r.prototype.renderImage = function (t, e, n, r) {
                        var i = t.cssInt("paddingLeft"), o = t.cssInt("paddingTop"), s = t.cssInt("paddingRight"),
                            a = t.cssInt("paddingBottom"), u = n.borders,
                            l = e.width - (u[1].width + u[3].width + i + s),
                            c = e.height - (u[0].width + u[2].width + o + a);
                        this.drawImage(r, 0, 0, r.image.width || l, r.image.height || c, e.left + i + u[3].width, e.top + o + u[0].width, l, c)
                    }, r.prototype.renderBackground = function (t, e, n) {
                        e.height > 0 && e.width > 0 && (this.renderBackgroundColor(t, e), this.renderBackgroundImage(t, e, n))
                    }, r.prototype.renderBackgroundColor = function (t, e) {
                        var n = t.color("backgroundColor");
                        n.isTransparent() || this.rectangle(e.left, e.top, e.width, e.height, n)
                    }, r.prototype.renderBorders = function (t) {
                        t.forEach(this.renderBorder, this)
                    }, r.prototype.renderBorder = function (t) {
                        t.color.isTransparent() || null === t.args || this.drawShape(t.args, t.color)
                    }, r.prototype.renderBackgroundImage = function (t, e, n) {
                        var r = t.parseBackgroundImages();
                        r.reverse().forEach(function (r, o, s) {
                            switch (r.method) {
                                case"url":
                                    var a = this.images.get(r.args[0]);
                                    a ? this.renderBackgroundRepeating(t, e, a, s.length - (o + 1), n) : i("Error loading background-image", r.args[0]);
                                    break;
                                case"linear-gradient":
                                case"gradient":
                                    var u = this.images.get(r.value);
                                    u ? this.renderBackgroundGradient(u, e, n) : i("Error loading background-image", r.args[0]);
                                    break;
                                case"none":
                                    break;
                                default:
                                    i("Unknown background-image type", r.args[0])
                            }
                        }, this)
                    }, r.prototype.renderBackgroundRepeating = function (t, e, n, r, i) {
                        var o = t.parseBackgroundSize(e, n.image, r), s = t.parseBackgroundPosition(e, n.image, r, o),
                            a = t.parseBackgroundRepeat(r);
                        switch (a) {
                            case"repeat-x":
                            case"repeat no-repeat":
                                this.backgroundRepeatShape(n, s, o, e, e.left + i[3], e.top + s.top + i[0], 99999, o.height, i);
                                break;
                            case"repeat-y":
                            case"no-repeat repeat":
                                this.backgroundRepeatShape(n, s, o, e, e.left + s.left + i[3], e.top + i[0], o.width, 99999, i);
                                break;
                            case"no-repeat":
                                this.backgroundRepeatShape(n, s, o, e, e.left + s.left + i[3], e.top + s.top + i[0], o.width, o.height, i);
                                break;
                            default:
                                this.renderBackgroundRepeat(n, s, o, {top: e.top, left: e.left}, i[3], i[0])
                        }
                    }, e.exports = r
                }, {"./log": 13}], 20: [function (t, e, n) {
                    function r(t, e) {
                        o.apply(this, arguments), this.canvas = this.options.canvas || this.document.createElement("canvas"), this.options.canvas || (this.canvas.width = t, this.canvas.height = e), this.ctx = this.canvas.getContext("2d"), this.taintCtx = this.document.createElement("canvas").getContext("2d"), this.ctx.textBaseline = "bottom", this.variables = {}, a("Initialized CanvasRenderer with size", t, "x", e)
                    }

                    function i(t) {
                        return t.length > 0
                    }

                    var o = t("../renderer"), s = t("../lineargradientcontainer"), a = t("../log");
                    r.prototype = Object.create(o.prototype), r.prototype.setFillStyle = function (t) {
                        return this.ctx.fillStyle = "object" == typeof t && t.isColor ? t.toString() : t, this.ctx
                    }, r.prototype.rectangle = function (t, e, n, r, i) {
                        this.setFillStyle(i).fillRect(t, e, n, r)
                    }, r.prototype.circle = function (t, e, n, r) {
                        this.setFillStyle(r), this.ctx.beginPath(), this.ctx.arc(t + n / 2, e + n / 2, n / 2, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fill()
                    }, r.prototype.circleStroke = function (t, e, n, r, i, o) {
                        this.circle(t, e, n, r), this.ctx.strokeStyle = o.toString(), this.ctx.stroke()
                    }, r.prototype.drawShape = function (t, e) {
                        this.shape(t), this.setFillStyle(e).fill()
                    }, r.prototype.taints = function (t) {
                        if (null === t.tainted) {
                            this.taintCtx.drawImage(t.image, 0, 0);
                            try {
                                this.taintCtx.getImageData(0, 0, 1, 1), t.tainted = !1
                            } catch (e) {
                                this.taintCtx = document.createElement("canvas").getContext("2d"), t.tainted = !0
                            }
                        }
                        return t.tainted
                    }, r.prototype.drawImage = function (t, e, n, r, i, o, s, a, u) {
                        this.taints(t) && !this.options.allowTaint || this.ctx.drawImage(t.image, e, n, r, i, o, s, a, u)
                    }, r.prototype.clip = function (t, e, n) {
                        this.ctx.save(), t.filter(i).forEach(function (t) {
                            this.shape(t).clip()
                        }, this), e.call(n), this.ctx.restore()
                    }, r.prototype.shape = function (t) {
                        return this.ctx.beginPath(), t.forEach(function (t, e) {
                            "rect" === t[0] ? this.ctx.rect.apply(this.ctx, t.slice(1)) : this.ctx[0 === e ? "moveTo" : t[0] + "To"].apply(this.ctx, t.slice(1))
                        }, this), this.ctx.closePath(), this.ctx
                    }, r.prototype.font = function (t, e, n, r, i, o) {
                        this.setFillStyle(t).font = [e, n, r, i, o].join(" ").split(",")[0]
                    }, r.prototype.fontShadow = function (t, e, n, r) {
                        this.setVariable("shadowColor", t.toString()).setVariable("shadowOffsetY", e).setVariable("shadowOffsetX", n).setVariable("shadowBlur", r)
                    }, r.prototype.clearShadow = function () {
                        this.setVariable("shadowColor", "rgba(0,0,0,0)")
                    }, r.prototype.setOpacity = function (t) {
                        this.ctx.globalAlpha = t
                    }, r.prototype.setTransform = function (t) {
                        this.ctx.translate(t.origin[0], t.origin[1]), this.ctx.transform.apply(this.ctx, t.matrix), this.ctx.translate(-t.origin[0], -t.origin[1])
                    }, r.prototype.setVariable = function (t, e) {
                        return this.variables[t] !== e && (this.variables[t] = this.ctx[t] = e), this
                    }, r.prototype.text = function (t, e, n) {
                        this.ctx.fillText(t, e, n)
                    }, r.prototype.backgroundRepeatShape = function (t, e, n, r, i, o, s, a, u) {
                        var l = [["line", Math.round(i), Math.round(o)], ["line", Math.round(i + s), Math.round(o)], ["line", Math.round(i + s), Math.round(a + o)], ["line", Math.round(i), Math.round(a + o)]];
                        this.clip([l], function () {
                            this.renderBackgroundRepeat(t, e, n, r, u[3], u[0])
                        }, this)
                    }, r.prototype.renderBackgroundRepeat = function (t, e, n, r, i, o) {
                        var s = Math.round(r.left + e.left + i), a = Math.round(r.top + e.top + o);
                        this.setFillStyle(this.ctx.createPattern(this.resizeImage(t, n), "repeat")), this.ctx.translate(s, a), this.ctx.fill(), this.ctx.translate(-s, -a)
                    }, r.prototype.renderBackgroundGradient = function (t, e) {
                        if (t instanceof s) {
                            var n = this.ctx.createLinearGradient(e.left + e.width * t.x0, e.top + e.height * t.y0, e.left + e.width * t.x1, e.top + e.height * t.y1);
                            t.colorStops.forEach(function (t) {
                                n.addColorStop(t.stop, t.color.toString())
                            }), this.rectangle(e.left, e.top, e.width, e.height, n)
                        }
                    }, r.prototype.resizeImage = function (t, e) {
                        var n = t.image;
                        if (n.width === e.width && n.height === e.height) return n;
                        var r, i = document.createElement("canvas");
                        return i.width = e.width, i.height = e.height, r = i.getContext("2d"), r.drawImage(n, 0, 0, n.width, n.height, 0, 0, e.width, e.height), i
                    }, e.exports = r
                }, {"../lineargradientcontainer": 12, "../log": 13, "../renderer": 19}], 21: [function (t, e, n) {
                    function r(t, e, n, r) {
                        i.call(this, n, r), this.ownStacking = t, this.contexts = [], this.children = [], this.opacity = (this.parent ? this.parent.stack.opacity : 1) * e
                    }

                    var i = t("./nodecontainer");
                    r.prototype = Object.create(i.prototype), r.prototype.getParentStack = function (t) {
                        var e = this.parent ? this.parent.stack : null;
                        return e ? e.ownStacking ? e : e.getParentStack(t) : t.stack
                    }, e.exports = r
                }, {"./nodecontainer": 14}], 22: [function (t, e, n) {
                    function r(t) {
                        this.rangeBounds = this.testRangeBounds(t), this.cors = this.testCORS(), this.svg = this.testSVG()
                    }

                    r.prototype.testRangeBounds = function (t) {
                        var e, n, r, i, o = !1;
                        return t.createRange && (e = t.createRange(), e.getBoundingClientRect && (n = t.createElement("boundtest"), n.style.height = "123px", n.style.display = "block", t.body.appendChild(n), e.selectNode(n), r = e.getBoundingClientRect(), i = r.height, 123 === i && (o = !0), t.body.removeChild(n))), o
                    }, r.prototype.testCORS = function () {
                        return "undefined" != typeof (new Image).crossOrigin
                    }, r.prototype.testSVG = function () {
                        var t = new Image, e = document.createElement("canvas"), n = e.getContext("2d");
                        t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                        try {
                            n.drawImage(t, 0, 0), e.toDataURL()
                        } catch (t) {
                            return !1
                        }
                        return !0
                    }, e.exports = r
                }, {}], 23: [function (t, e, n) {
                    function r(t) {
                        this.src = t, this.image = null;
                        var e = this;
                        this.promise = this.hasFabric().then(function () {
                            return e.isInline(t) ? Promise.resolve(e.inlineFormatting(t)) : i(t)
                        }).then(function (t) {
                            return new Promise(function (n) {
                                window.html2canvas.svg.fabric.loadSVGFromString(t, e.createCanvas.call(e, n))
                            })
                        })
                    }

                    var i = t("./xhr"), o = t("./utils").decode64;
                    r.prototype.hasFabric = function () {
                        return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))
                    }, r.prototype.inlineFormatting = function (t) {
                        return /^data:image\/svg\+xml;base64,/.test(t) ? this.decode64(this.removeContentType(t)) : this.removeContentType(t)
                    }, r.prototype.removeContentType = function (t) {
                        return t.replace(/^data:image\/svg\+xml(;base64)?,/, "")
                    }, r.prototype.isInline = function (t) {
                        return /^data:image\/svg\+xml/i.test(t)
                    }, r.prototype.createCanvas = function (t) {
                        var e = this;
                        return function (n, r) {
                            var i = new window.html2canvas.svg.fabric.StaticCanvas("c");
                            e.image = i.lowerCanvasEl, i.setWidth(r.width).setHeight(r.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(n, r)).renderAll(), t(i.lowerCanvasEl)
                        }
                    }, r.prototype.decode64 = function (t) {
                        return "function" == typeof window.atob ? window.atob(t) : o(t)
                    }, e.exports = r
                }, {"./utils": 26, "./xhr": 28}], 24: [function (t, e, n) {
                    function r(t, e) {
                        this.src = t, this.image = null;
                        var n = this;
                        this.promise = e ? new Promise(function (e, r) {
                            n.image = new Image, n.image.onload = e, n.image.onerror = r, n.image.src = "data:image/svg+xml," + (new XMLSerializer).serializeToString(t), n.image.complete === !0 && e(n.image)
                        }) : this.hasFabric().then(function () {
                            return new Promise(function (e) {
                                window.html2canvas.svg.fabric.parseSVGDocument(t, n.createCanvas.call(n, e))
                            })
                        })
                    }

                    var i = t("./svgcontainer");
                    r.prototype = Object.create(i.prototype), e.exports = r
                }, {"./svgcontainer": 23}], 25: [function (t, e, n) {
                    function r(t, e) {
                        o.call(this, t, e)
                    }

                    function i(t, e, n) {
                        if (t.length > 0) return e + n.toUpperCase()
                    }

                    var o = t("./nodecontainer");
                    r.prototype = Object.create(o.prototype), r.prototype.applyTextTransform = function () {
                        this.node.data = this.transform(this.parent.css("textTransform"))
                    }, r.prototype.transform = function (t) {
                        var e = this.node.data;
                        switch (t) {
                            case"lowercase":
                                return e.toLowerCase();
                            case"capitalize":
                                return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, i);
                            case"uppercase":
                                return e.toUpperCase();
                            default:
                                return e
                        }
                    }, e.exports = r
                }, {"./nodecontainer": 14}], 26: [function (t, e, n) {
                    n.smallImage = function () {
                        return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    }, n.bind = function (t, e) {
                        return function () {
                            return t.apply(e, arguments)
                        }
                    }, n.decode64 = function (t) {
                        var e, n, r, i, o, s, a, u,
                            l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = t.length,
                            h = "";
                        for (e = 0; e < c; e += 4) n = l.indexOf(t[e]), r = l.indexOf(t[e + 1]), i = l.indexOf(t[e + 2]), o = l.indexOf(t[e + 3]), s = n << 2 | r >> 4, a = (15 & r) << 4 | i >> 2, u = (3 & i) << 6 | o, h += 64 === i ? String.fromCharCode(s) : 64 === o || o === -1 ? String.fromCharCode(s, a) : String.fromCharCode(s, a, u);
                        return h
                    }, n.getBounds = function (t) {
                        if (t.getBoundingClientRect) {
                            var e = t.getBoundingClientRect(), n = null == t.offsetWidth ? e.width : t.offsetWidth;
                            return {
                                top: e.top,
                                bottom: e.bottom || e.top + e.height,
                                right: e.left + n,
                                left: e.left,
                                width: n,
                                height: null == t.offsetHeight ? e.height : t.offsetHeight
                            }
                        }
                        return {}
                    }, n.offsetBounds = function (t) {
                        var e = t.offsetParent ? n.offsetBounds(t.offsetParent) : {top: 0, left: 0};
                        return {
                            top: t.offsetTop + e.top,
                            bottom: t.offsetTop + t.offsetHeight + e.top,
                            right: t.offsetLeft + e.left + t.offsetWidth,
                            left: t.offsetLeft + e.left,
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        }
                    }, n.parseBackgrounds = function (t) {
                        var e, n, r, i, o, s, a, u = " \r\n\t", l = [], c = 0, h = 0, p = function () {
                            e && ('"' === n.substr(0, 1) && (n = n.substr(1, n.length - 2)), n && a.push(n), "-" === e.substr(0, 1) && (i = e.indexOf("-", 1) + 1) > 0 && (r = e.substr(0, i), e = e.substr(i)), l.push({
                                prefix: r,
                                method: e.toLowerCase(),
                                value: o,
                                args: a,
                                image: null
                            })), a = [], e = r = n = o = ""
                        };
                        return a = [], e = r = n = o = "", t.split("").forEach(function (t) {
                            if (!(0 === c && u.indexOf(t) > -1)) {
                                switch (t) {
                                    case'"':
                                        s ? s === t && (s = null) : s = t;
                                        break;
                                    case"(":
                                        if (s) break;
                                        if (0 === c) return c = 1, void (o += t);
                                        h++;
                                        break;
                                    case")":
                                        if (s) break;
                                        if (1 === c) {
                                            if (0 === h) return c = 0, o += t, void p();
                                            h--
                                        }
                                        break;
                                    case",":
                                        if (s) break;
                                        if (0 === c) return void p();
                                        if (1 === c && 0 === h && !e.match(/^url$/i)) return a.push(n), n = "", void (o += t)
                                }
                                o += t, 0 === c ? e += t : n += t
                            }
                        }), p(), l
                    }
                }, {}], 27: [function (t, e, n) {
                    function r(t) {
                        i.apply(this, arguments), this.type = "linear" === t.args[0] ? i.TYPES.LINEAR : i.TYPES.RADIAL
                    }

                    var i = t("./gradientcontainer");
                    r.prototype = Object.create(i.prototype), e.exports = r
                }, {"./gradientcontainer": 9}], 28: [function (t, e, n) {
                    function r(t) {
                        return new Promise(function (e, n) {
                            var r = new XMLHttpRequest;
                            r.open("GET", t), r.onload = function () {
                                200 === r.status ? e(r.responseText) : n(new Error(r.statusText))
                            }, r.onerror = function () {
                                n(new Error("Network Error"))
                            }, r.send()
                        })
                    }

                    e.exports = r
                }, {}]
            }, {}, [4])(4)
        })
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    function r(t) {
        this._cbs = t || {}, this.events = []
    }

    t.exports = r;
    var i = n(13).EVENTS;
    Object.keys(i).forEach(function (t) {
        if (0 === i[t]) t = "on" + t, r.prototype[t] = function () {
            this.events.push([t]), this._cbs[t] && this._cbs[t]()
        }; else if (1 === i[t]) t = "on" + t, r.prototype[t] = function (e) {
            this.events.push([t, e]), this._cbs[t] && this._cbs[t](e)
        }; else {
            if (2 !== i[t]) throw Error("wrong number of arguments");
            t = "on" + t, r.prototype[t] = function (e, n) {
                this.events.push([t, e, n]), this._cbs[t] && this._cbs[t](e, n)
            }
        }
    }), r.prototype.onreset = function () {
        this.events = [], this._cbs.onreset && this._cbs.onreset()
    }, r.prototype.restart = function () {
        this._cbs.onreset && this._cbs.onreset();
        for (var t = 0, e = this.events.length; t < e; t++) if (this._cbs[this.events[t][0]]) {
            var n = this.events[t].length;
            1 === n ? this._cbs[this.events[t][0]]() : 2 === n ? this._cbs[this.events[t][0]](this.events[t][1]) : this._cbs[this.events[t][0]](this.events[t][1], this.events[t][2])
        }
    }
}, function (t, e, n) {
    function r(t, e) {
        this.init(t, e)
    }

    function i(t, e) {
        return c.getElementsByTagName(t, e, !0)
    }

    function o(t, e) {
        return c.getElementsByTagName(t, e, !0, 1)[0]
    }

    function s(t, e, n) {
        return c.getText(c.getElementsByTagName(t, e, n, 1)).trim()
    }

    function a(t, e, n, r, i) {
        var o = s(n, r, i);
        o && (t[e] = o)
    }

    var u = n(13), l = u.DomHandler, c = u.DomUtils;
    n(1)(r, l), r.prototype.init = l;
    var h = function (t) {
        return "rss" === t || "feed" === t || "rdf:RDF" === t
    };
    r.prototype.onend = function () {
        var t, e, n = {}, r = o(h, this.dom);
        r && ("feed" === r.name ? (e = r.children, n.type = "atom", a(n, "id", "id", e), a(n, "title", "title", e), (t = o("link", e)) && (t = t.attribs) && (t = t.href) && (n.link = t), a(n, "description", "subtitle", e), (t = s("updated", e)) && (n.updated = new Date(t)), a(n, "author", "email", e, !0), n.items = i("entry", e).map(function (t) {
            var e, n = {};
            return t = t.children, a(n, "id", "id", t), a(n, "title", "title", t), (e = o("link", t)) && (e = e.attribs) && (e = e.href) && (n.link = e), (e = s("summary", t) || s("content", t)) && (n.description = e), (e = s("updated", t)) && (n.pubDate = new Date(e)), n
        })) : (e = o("channel", r.children).children, n.type = r.name.substr(0, 3), n.id = "", a(n, "title", "title", e), a(n, "link", "link", e), a(n, "description", "description", e), (t = s("lastBuildDate", e)) && (n.updated = new Date(t)), a(n, "author", "managingEditor", e, !0), n.items = i("item", r.children).map(function (t) {
            var e, n = {};
            return t = t.children, a(n, "id", "guid", t), a(n, "title", "title", t), a(n, "link", "link", t), a(n, "description", "description", t), (e = s("pubDate", t)) && (n.pubDate = new Date(e)), n
        }))), this.dom = n, l.prototype._handleCallback.call(this, r ? null : Error("couldn't find root of feed"))
    }, t.exports = r
}, function (t, e, n) {
    function r(t) {
        this._cbs = t || {}
    }

    t.exports = r;
    var i = n(13).EVENTS;
    Object.keys(i).forEach(function (t) {
        if (0 === i[t]) t = "on" + t, r.prototype[t] = function () {
            this._cbs[t] && this._cbs[t]()
        }; else if (1 === i[t]) t = "on" + t, r.prototype[t] = function (e) {
            this._cbs[t] && this._cbs[t](e)
        }; else {
            if (2 !== i[t]) throw Error("wrong number of arguments");
            t = "on" + t, r.prototype[t] = function (e, n) {
                this._cbs[t] && this._cbs[t](e, n)
            }
        }
    })
}, function (t, e, n) {
    function r(t) {
        o.call(this, new i(this), t)
    }

    function i(t) {
        this.scope = t
    }

    t.exports = r;
    var o = n(40);
    n(1)(r, o), r.prototype.readable = !0;
    var s = n(13).EVENTS;
    Object.keys(s).forEach(function (t) {
        if (0 === s[t]) i.prototype["on" + t] = function () {
            this.scope.emit(t)
        }; else if (1 === s[t]) i.prototype["on" + t] = function (e) {
            this.scope.emit(t, e)
        }; else {
            if (2 !== s[t]) throw Error("wrong number of arguments!");
            i.prototype["on" + t] = function (e, n) {
                this.scope.emit(t, e, n)
            }
        }
    })
}, function (t, e) {
    e.read = function (t, e, n, r, i) {
        var o, s, a = 8 * i - r - 1, u = (1 << a) - 1, l = u >> 1, c = -7, h = n ? i - 1 : 0, p = n ? -1 : 1,
            f = t[e + h];
        for (h += p, o = f & (1 << -c) - 1, f >>= -c, c += a; c > 0; o = 256 * o + t[e + h], h += p, c -= 8) ;
        for (s = o & (1 << -c) - 1, o >>= -c, c += r; c > 0; s = 256 * s + t[e + h], h += p, c -= 8) ;
        if (0 === o) o = 1 - l; else {
            if (o === u) return s ? NaN : (f ? -1 : 1) * (1 / 0);
            s += Math.pow(2, r), o -= l
        }
        return (f ? -1 : 1) * s * Math.pow(2, o - r)
    }, e.write = function (t, e, n, r, i, o) {
        var s, a, u, l = 8 * o - i - 1, c = (1 << l) - 1, h = c >> 1,
            p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : o - 1, d = r ? 1 : -1,
            g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), e += s + h >= 1 ? p / u : p * Math.pow(2, 1 - h), e * u >= 2 && (s++, u /= 2), s + h >= c ? (a = 0, s = c) : s + h >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + f] = 255 & a, f += d, a /= 256, i -= 8) ;
        for (s = s << i | a, l += i; l > 0; t[n + f] = 255 & s, f += d, s /= 256, l -= 8) ;
        t[n + f - d] |= 128 * g
    }
}, function (t, e, n) {/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
    "use strict";
    var r = n(23);
    t.exports = function (t) {
        return null != t && "object" == typeof t && r(t) === !1
    }
}, function (t, e, n) {
    var r, i, o;/*!
	 * jQuery Form Plugin
	 * version: 3.50.0-2014.02.05
	 * Requires jQuery v1.5 or later
	 * Copyright (c) 2013 M. Alsup
	 * Examples and documentation at: http://malsup.com/jquery/form/
	 * Project repository: https://github.com/malsup/form
	 * Dual licensed under the MIT and GPL licenses.
	 * https://github.com/malsup/form#copyright-and-license
	 */
    !function (s) {
        "use strict";
        i = [n(42)], r = s, o = "function" == typeof r ? r.apply(e, i) : r, !(void 0 !== o && (t.exports = o))
    }(function (t) {
        "use strict";

        function e(e) {
            var n = e.data;
            e.isDefaultPrevented() || (e.preventDefault(), t(e.target).ajaxSubmit(n))
        }

        function n(e) {
            var n = e.target, r = t(n);
            if (!r.is("[type=submit],[type=image]")) {
                var i = r.closest("[type=submit]");
                if (0 === i.length) return;
                n = i[0]
            }
            var o = this;
            if (o.clk = n, "image" == n.type) if (void 0 !== e.offsetX) o.clk_x = e.offsetX, o.clk_y = e.offsetY; else if ("function" == typeof t.fn.offset) {
                var s = r.offset();
                o.clk_x = e.pageX - s.left, o.clk_y = e.pageY - s.top
            } else o.clk_x = e.pageX - n.offsetLeft, o.clk_y = e.pageY - n.offsetTop;
            setTimeout(function () {
                o.clk = o.clk_x = o.clk_y = null
            }, 100)
        }

        function r() {
            if (t.fn.ajaxSubmit.debug) {
                var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)
            }
        }

        var i = {};
        i.fileapi = void 0 !== t("<input type='file'/>").get(0).files, i.formdata = void 0 !== window.FormData;
        var o = !!t.fn.prop;
        t.fn.attr2 = function () {
            if (!o) return this.attr.apply(this, arguments);
            var t = this.prop.apply(this, arguments);
            return t && t.jquery || "string" == typeof t ? t : this.attr.apply(this, arguments)
        }, t.fn.ajaxSubmit = function (e) {
            function n(n) {
                var r, i, o = t.param(n, e.traditional).split("&"), s = o.length, a = [];
                for (r = 0; r < s; r++) o[r] = o[r].replace(/\+/g, " "), i = o[r].split("="), a.push([decodeURIComponent(i[0]), decodeURIComponent(i[1])]);
                return a
            }

            function s(r) {
                for (var i = new FormData, o = 0; o < r.length; o++) i.append(r[o].name, r[o].value);
                if (e.extraData) {
                    var s = n(e.extraData);
                    for (o = 0; o < s.length; o++) s[o] && i.append(s[o][0], s[o][1])
                }
                e.data = null;
                var a = t.extend(!0, {}, t.ajaxSettings, e, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: u || "POST"
                });
                e.uploadProgress && (a.xhr = function () {
                    var n = t.ajaxSettings.xhr();
                    return n.upload && n.upload.addEventListener("progress", function (t) {
                        var n = 0, r = t.loaded || t.position, i = t.total;
                        t.lengthComputable && (n = Math.ceil(r / i * 100)), e.uploadProgress(t, r, i, n)
                    }, !1), n
                }), a.data = null;
                var l = a.beforeSend;
                return a.beforeSend = function (t, n) {
                    e.formData ? n.data = e.formData : n.data = i, l && l.call(this, t, n)
                }, t.ajax(a)
            }

            function a(n) {
                function i(t) {
                    var e = null;
                    try {
                        t.contentWindow && (e = t.contentWindow.document)
                    } catch (t) {
                        r("cannot get iframe.contentWindow document: " + t)
                    }
                    if (e) return e;
                    try {
                        e = t.contentDocument ? t.contentDocument : t.document
                    } catch (n) {
                        r("cannot get iframe.contentDocument: " + n), e = t.document
                    }
                    return e
                }

                function s() {
                    function e() {
                        try {
                            var t = i(y).readyState;
                            r("state = " + t), t && "uninitialized" == t.toLowerCase() && setTimeout(e, 50)
                        } catch (t) {
                            r("Server abort: ", t, " (", t.name, ")"), a(C), k && clearTimeout(k), k = void 0
                        }
                    }

                    var n = h.attr2("target"), o = h.attr2("action"), s = "multipart/form-data",
                        l = h.attr("enctype") || h.attr("encoding") || s;
                    S.setAttribute("target", d), u && !/post/i.test(u) || S.setAttribute("method", "POST"), o != p.url && S.setAttribute("action", p.url), p.skipEncodingOverride || u && !/post/i.test(u) || h.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    }), p.timeout && (k = setTimeout(function () {
                        x = !0, a(T)
                    }, p.timeout));
                    var c = [];
                    try {
                        if (p.extraData) for (var f in p.extraData) p.extraData.hasOwnProperty(f) && (t.isPlainObject(p.extraData[f]) && p.extraData[f].hasOwnProperty("name") && p.extraData[f].hasOwnProperty("value") ? c.push(t('<input type="hidden" name="' + p.extraData[f].name + '">').val(p.extraData[f].value).appendTo(S)[0]) : c.push(t('<input type="hidden" name="' + f + '">').val(p.extraData[f]).appendTo(S)[0]));
                        p.iframeTarget || m.appendTo("body"), y.attachEvent ? y.attachEvent("onload", a) : y.addEventListener("load", a, !1), setTimeout(e, 15);
                        try {
                            S.submit()
                        } catch (t) {
                            var g = document.createElement("form").submit;
                            g.apply(S)
                        }
                    } finally {
                        S.setAttribute("action", o), S.setAttribute("enctype", l), n ? S.setAttribute("target", n) : h.removeAttr("target"), t(c).remove()
                    }
                }

                function a(e) {
                    if (!v.aborted && !D) {
                        if (I = i(y), I || (r("cannot access response document"), e = C), e === T && v) return v.abort("timeout"), void _.reject(v, "timeout");
                        if (e == C && v) return v.abort("server abort"), void _.reject(v, "error", "server abort");
                        if (I && I.location.href != p.iframeSrc || x) {
                            y.detachEvent ? y.detachEvent("onload", a) : y.removeEventListener("load", a, !1);
                            var n, o = "success";
                            try {
                                if (x) throw"timeout";
                                var s = "xml" == p.dataType || I.XMLDocument || t.isXMLDoc(I);
                                if (r("isXml=" + s), !s && window.opera && (null === I.body || !I.body.innerHTML) && --R) return r("requeing onLoad callback, DOM not available"), void setTimeout(a, 250);
                                var u = I.body ? I.body : I.documentElement;
                                v.responseText = u ? u.innerHTML : null, v.responseXML = I.XMLDocument ? I.XMLDocument : I, s && (p.dataType = "xml"), v.getResponseHeader = function (t) {
                                    var e = {"content-type": p.dataType};
                                    return e[t.toLowerCase()]
                                }, u && (v.status = Number(u.getAttribute("status")) || v.status, v.statusText = u.getAttribute("statusText") || v.statusText);
                                var l = (p.dataType || "").toLowerCase(), c = /(json|script|text)/.test(l);
                                if (c || p.textarea) {
                                    var h = I.getElementsByTagName("textarea")[0];
                                    if (h) v.responseText = h.value, v.status = Number(h.getAttribute("status")) || v.status, v.statusText = h.getAttribute("statusText") || v.statusText; else if (c) {
                                        var d = I.getElementsByTagName("pre")[0], g = I.getElementsByTagName("body")[0];
                                        d ? v.responseText = d.textContent ? d.textContent : d.innerText : g && (v.responseText = g.textContent ? g.textContent : g.innerText)
                                    }
                                } else "xml" == l && !v.responseXML && v.responseText && (v.responseXML = N(v.responseText));
                                try {
                                    L = M(v, l, p)
                                } catch (t) {
                                    o = "parsererror", v.error = n = t || o
                                }
                            } catch (t) {
                                r("error caught: ", t), o = "error", v.error = n = t || o
                            }
                            v.aborted && (r("upload aborted"), o = null), v.status && (o = v.status >= 200 && v.status < 300 || 304 === v.status ? "success" : "error"), "success" === o ? (p.success && p.success.call(p.context, L, "success", v), _.resolve(v.responseText, "success", v), f && t.event.trigger("ajaxSuccess", [v, p])) : o && (void 0 === n && (n = v.statusText), p.error && p.error.call(p.context, v, o, n), _.reject(v, "error", n), f && t.event.trigger("ajaxError", [v, p, n])), f && t.event.trigger("ajaxComplete", [v, p]), f && !--t.active && t.event.trigger("ajaxStop"), p.complete && p.complete.call(p.context, v, o), D = !0, p.timeout && clearTimeout(k), setTimeout(function () {
                                p.iframeTarget ? m.attr("src", p.iframeSrc) : m.remove(), v.responseXML = null
                            }, 100)
                        }
                    }
                }

                var l, c, p, f, d, m, y, v, b, w, x, k, S = h[0], _ = t.Deferred();
                if (_.abort = function (t) {
                    v.abort(t)
                }, n) for (c = 0; c < g.length; c++) l = t(g[c]), o ? l.prop("disabled", !1) : l.removeAttr("disabled");
                if (p = t.extend(!0, {}, t.ajaxSettings, e), p.context = p.context || p, d = "jqFormIO" + (new Date).getTime(), p.iframeTarget ? (m = t(p.iframeTarget), w = m.attr2("name"), w ? d = w : m.attr2("name", d)) : (m = t('<iframe name="' + d + '" src="' + p.iframeSrc + '" />'), m.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), y = m[0], v = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {
                    },
                    getResponseHeader: function () {
                    },
                    setRequestHeader: function () {
                    },
                    abort: function (e) {
                        var n = "timeout" === e ? "timeout" : "aborted";
                        r("aborting upload... " + n), this.aborted = 1;
                        try {
                            y.contentWindow.document.execCommand && y.contentWindow.document.execCommand("Stop")
                        } catch (t) {
                        }
                        m.attr("src", p.iframeSrc), v.error = n, p.error && p.error.call(p.context, v, n, e), f && t.event.trigger("ajaxError", [v, p, n]), p.complete && p.complete.call(p.context, v, n)
                    }
                }, f = p.global, f && 0 === t.active++ && t.event.trigger("ajaxStart"), f && t.event.trigger("ajaxSend", [v, p]), p.beforeSend && p.beforeSend.call(p.context, v, p) === !1) return p.global && t.active--, _.reject(), _;
                if (v.aborted) return _.reject(), _;
                b = S.clk, b && (w = b.name, w && !b.disabled && (p.extraData = p.extraData || {}, p.extraData[w] = b.value, "image" == b.type && (p.extraData[w + ".x"] = S.clk_x, p.extraData[w + ".y"] = S.clk_y)));
                var T = 1, C = 2, E = t("meta[name=csrf-token]").attr("content"),
                    A = t("meta[name=csrf-param]").attr("content");
                A && E && (p.extraData = p.extraData || {}, p.extraData[A] = E), p.forceSync ? s() : setTimeout(s, 10);
                var L, I, D, R = 50, N = t.parseXML || function (t, e) {
                    return window.ActiveXObject ? (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t)) : e = (new DOMParser).parseFromString(t, "text/xml"), e && e.documentElement && "parsererror" != e.documentElement.nodeName ? e : null
                }, O = t.parseJSON || function (t) {
                    return window.eval("(" + t + ")")
                }, M = function (e, n, r) {
                    var i = e.getResponseHeader("content-type") || "", o = "xml" === n || !n && i.indexOf("xml") >= 0,
                        s = o ? e.responseXML : e.responseText;
                    return o && "parsererror" === s.documentElement.nodeName && t.error && t.error("parsererror"), r && r.dataFilter && (s = r.dataFilter(s, n)), "string" == typeof s && ("json" === n || !n && i.indexOf("json") >= 0 ? s = O(s) : ("script" === n || !n && i.indexOf("javascript") >= 0) && t.globalEval(s)), s
                };
                return _
            }

            if (!this.length) return r("ajaxSubmit: skipping submit process - no element selected"), this;
            var u, l, c, h = this;
            "function" == typeof e ? e = {success: e} : void 0 === e && (e = {}), u = e.type || this.attr2("method"), l = e.url || this.attr2("action"), c = "string" == typeof l ? t.trim(l) : "", c = c || window.location.href || "", c && (c = (c.match(/^([^#]+)/) || [])[1]), e = t.extend(!0, {
                url: c,
                success: t.ajaxSettings.success,
                type: u || t.ajaxSettings.type,
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, e);
            var p = {};
            if (this.trigger("form-pre-serialize", [this, e, p]), p.veto) return r("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (e.beforeSerialize && e.beforeSerialize(this, e) === !1) return r("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            var f = e.traditional;
            void 0 === f && (f = t.ajaxSettings.traditional);
            var d, g = [], m = this.formToArray(e.semantic, g);
            if (e.data && (e.extraData = e.data, d = t.param(e.data, f)), e.beforeSubmit && e.beforeSubmit(m, this, e) === !1) return r("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [m, this, e, p]), p.veto) return r("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            var y = t.param(m, f);
            d && (y = y ? y + "&" + d : d), "GET" == e.type.toUpperCase() ? (e.url += (e.url.indexOf("?") >= 0 ? "&" : "?") + y, e.data = null) : e.data = y;
            var v = [];
            if (e.resetForm && v.push(function () {
                h.resetForm()
            }), e.clearForm && v.push(function () {
                h.clearForm(e.includeHidden)
            }), !e.dataType && e.target) {
                var b = e.success || function () {
                };
                v.push(function (n) {
                    var r = e.replaceTarget ? "replaceWith" : "html";
                    t(e.target)[r](n).each(b, arguments)
                })
            } else e.success && v.push(e.success);
            if (e.success = function (t, n, r) {
                for (var i = e.context || this, o = 0, s = v.length; o < s; o++) v[o].apply(i, [t, n, r || h, h])
            }, e.error) {
                var w = e.error;
                e.error = function (t, n, r) {
                    var i = e.context || this;
                    w.apply(i, [t, n, r, h])
                }
            }
            if (e.complete) {
                var x = e.complete;
                e.complete = function (t, n) {
                    var r = e.context || this;
                    x.apply(r, [t, n, h])
                }
            }
            var k = t("input[type=file]:enabled", this).filter(function () {
                    return "" !== t(this).val()
                }), S = k.length > 0, _ = "multipart/form-data", T = h.attr("enctype") == _ || h.attr("encoding") == _,
                C = i.fileapi && i.formdata;
            r("fileAPI :" + C);
            var E, A = (S || T) && !C;
            e.iframe !== !1 && (e.iframe || A) ? e.closeKeepAlive ? t.get(e.closeKeepAlive, function () {
                E = a(m)
            }) : E = a(m) : E = (S || T) && C ? s(m) : t.ajax(e), h.removeData("jqxhr").data("jqxhr", E);
            for (var L = 0; L < g.length; L++) g[L] = null;
            return this.trigger("form-submit-notify", [this, e]), this
        }, t.fn.ajaxForm = function (i) {
            if (i = i || {}, i.delegation = i.delegation && t.isFunction(t.fn.on), !i.delegation && 0 === this.length) {
                var o = {s: this.selector, c: this.context};
                return !t.isReady && o.s ? (r("DOM not ready, queuing ajaxForm"), t(function () {
                    t(o.s, o.c).ajaxForm(i)
                }), this) : (r("terminating; zero elements found by selector" + (t.isReady ? "" : " (DOM not ready)")), this)
            }
            return i.delegation ? (t(document).off("submit.form-plugin", this.selector, e).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, i, e).on("click.form-plugin", this.selector, i, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", i, e).bind("click.form-plugin", i, n)
        }, t.fn.ajaxFormUnbind = function () {
            return this.unbind("submit.form-plugin click.form-plugin")
        }, t.fn.formToArray = function (e, n) {
            var r = [];
            if (0 === this.length) return r;
            var o, s = this[0], a = this.attr("id"), u = e ? s.getElementsByTagName("*") : s.elements;
            if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = t(u).get()), a && (o = t(":input[form=" + a + "]").get(), o.length && (u = (u || []).concat(o))), !u || !u.length) return r;
            var l, c, h, p, f, d, g;
            for (l = 0, d = u.length; l < d; l++) if (f = u[l], h = f.name, h && !f.disabled) if (e && s.clk && "image" == f.type) s.clk == f && (r.push({
                name: h,
                value: t(f).val(),
                type: f.type
            }), r.push({name: h + ".x", value: s.clk_x}, {
                name: h + ".y",
                value: s.clk_y
            })); else if (p = t.fieldValue(f, !0), p && p.constructor == Array) for (n && n.push(f), c = 0, g = p.length; c < g; c++) r.push({
                name: h,
                value: p[c]
            }); else if (i.fileapi && "file" == f.type) {
                n && n.push(f);
                var m = f.files;
                if (m.length) for (c = 0; c < m.length; c++) r.push({
                    name: h,
                    value: m[c],
                    type: f.type
                }); else r.push({name: h, value: "", type: f.type})
            } else null !== p && "undefined" != typeof p && (n && n.push(f), r.push({
                name: h,
                value: p,
                type: f.type,
                required: f.required
            }));
            if (!e && s.clk) {
                var y = t(s.clk), v = y[0];
                h = v.name, h && !v.disabled && "image" == v.type && (r.push({
                    name: h,
                    value: y.val()
                }), r.push({name: h + ".x", value: s.clk_x}, {name: h + ".y", value: s.clk_y}))
            }
            return r
        }, t.fn.formSerialize = function (e) {
            return t.param(this.formToArray(e))
        }, t.fn.fieldSerialize = function (e) {
            var n = [];
            return this.each(function () {
                var r = this.name;
                if (r) {
                    var i = t.fieldValue(this, e);
                    if (i && i.constructor == Array) for (var o = 0, s = i.length; o < s; o++) n.push({
                        name: r,
                        value: i[o]
                    }); else null !== i && "undefined" != typeof i && n.push({name: this.name, value: i})
                }
            }), t.param(n)
        }, t.fn.fieldValue = function (e) {
            for (var n = [], r = 0, i = this.length; r < i; r++) {
                var o = this[r], s = t.fieldValue(o, e);
                null === s || "undefined" == typeof s || s.constructor == Array && !s.length || (s.constructor == Array ? t.merge(n, s) : n.push(s))
            }
            return n
        }, t.fieldValue = function (e, n) {
            var r = e.name, i = e.type, o = e.tagName.toLowerCase();
            if (void 0 === n && (n = !0), n && (!r || e.disabled || "reset" == i || "button" == i || ("checkbox" == i || "radio" == i) && !e.checked || ("submit" == i || "image" == i) && e.form && e.form.clk != e || "select" == o && e.selectedIndex == -1)) return null;
            if ("select" == o) {
                var s = e.selectedIndex;
                if (s < 0) return null;
                for (var a = [], u = e.options, l = "select-one" == i, c = l ? s + 1 : u.length, h = l ? s : 0; h < c; h++) {
                    var p = u[h];
                    if (p.selected) {
                        var f = p.value;
                        if (f || (f = p.attributes && p.attributes.value && !p.attributes.value.specified ? p.text : p.value), l) return f;
                        a.push(f)
                    }
                }
                return a
            }
            return t(e).val()
        }, t.fn.clearForm = function (e) {
            return this.each(function () {
                t("input,select,textarea", this).clearFields(e)
            })
        }, t.fn.clearFields = t.fn.clearInputs = function (e) {
            var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function () {
                var r = this.type, i = this.tagName.toLowerCase();
                n.test(r) || "textarea" == i ? this.value = "" : "checkbox" == r || "radio" == r ? this.checked = !1 : "select" == i ? this.selectedIndex = -1 : "file" == r ? /MSIE/.test(navigator.userAgent) ? t(this).replaceWith(t(this).clone(!0)) : t(this).val("") : e && (e === !0 && /hidden/.test(r) || "string" == typeof e && t(this).is(e)) && (this.value = "")
            })
        }, t.fn.resetForm = function () {
            return this.each(function () {
                ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
            })
        }, t.fn.enable = function (t) {
            return void 0 === t && (t = !0), this.each(function () {
                this.disabled = !t
            })
        }, t.fn.selected = function (e) {
            return void 0 === e && (e = !0), this.each(function () {
                var n = this.type;
                if ("checkbox" == n || "radio" == n) this.checked = e; else if ("option" == this.tagName.toLowerCase()) {
                    var r = t(this).parent("select");
                    e && r[0] && "select-one" == r[0].type && r.find("option").selected(!1), this.selected = e
                }
            })
        }, t.fn.ajaxSubmit.debug = !1
    })
}, function (t, e) {
    !function (t) {
        t.fn.qrcode = function (e) {
            function n(t) {
                this.mode = a, this.data = t
            }

            function r(t, e) {
                this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }

            function i(t, e) {
                if (void 0 == t.length) throw Error(t.length + "/" + e);
                for (var n = 0; n < t.length && 0 == t[n];) n++;
                this.num = Array(t.length - n + e);
                for (var r = 0; r < t.length - n; r++) this.num[r] = t[r + n]
            }

            function o(t, e) {
                this.totalCount = t, this.dataCount = e
            }

            function s() {
                this.buffer = [], this.length = 0
            }

            var a;
            n.prototype = {
                getLength: function () {
                    return this.data.length
                }, write: function (t) {
                    for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8)
                }
            }, r.prototype = {
                addData: function (t) {
                    this.dataList.push(new n(t)), this.dataCache = null
                }, isDark: function (t, e) {
                    if (0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e) throw Error(t + "," + e);
                    return this.modules[t][e]
                }, getModuleCount: function () {
                    return this.moduleCount
                }, make: function () {
                    if (1 > this.typeNumber) {
                        for (var t = 1, t = 1; 40 > t; t++) {
                            for (var e = o.getRSBlocks(t, this.errorCorrectLevel), n = new s, r = 0, i = 0; i < e.length; i++) r += e[i].dataCount;
                            for (i = 0; i < this.dataList.length; i++) e = this.dataList[i], n.put(e.mode, 4), n.put(e.getLength(), u.getLengthInBits(e.mode, t)), e.write(n);
                            if (n.getLengthInBits() <= 8 * r) break
                        }
                        this.typeNumber = t
                    }
                    this.makeImpl(!1, this.getBestMaskPattern())
                }, makeImpl: function (t, e) {
                    this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
                    for (var n = 0; n < this.moduleCount; n++) {
                        this.modules[n] = Array(this.moduleCount);
                        for (var i = 0; i < this.moduleCount; i++) this.modules[n][i] = null
                    }
                    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), 7 <= this.typeNumber && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = r.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
                }, setupPositionProbePattern: function (t, e) {
                    for (var n = -1; 7 >= n; n++) if (!(-1 >= t + n || this.moduleCount <= t + n)) for (var r = -1; 7 >= r; r++) -1 >= e + r || this.moduleCount <= e + r || (this.modules[t + n][e + r] = 0 <= n && 6 >= n && (0 == r || 6 == r) || 0 <= r && 6 >= r && (0 == n || 6 == n) || 2 <= n && 4 >= n && 2 <= r && 4 >= r)
                }, getBestMaskPattern: function () {
                    for (var t = 0, e = 0, n = 0; 8 > n; n++) {
                        this.makeImpl(!0, n);
                        var r = u.getLostPoint(this);
                        (0 == n || t > r) && (t = r, e = n)
                    }
                    return e
                }, createMovieClip: function (t, e, n) {
                    for (t = t.createEmptyMovieClip(e, n), this.make(), e = 0; e < this.modules.length; e++) for (var n = 1 * e, r = 0; r < this.modules[e].length; r++) {
                        var i = 1 * r;
                        this.modules[e][r] && (t.beginFill(0, 100), t.moveTo(i, n), t.lineTo(i + 1, n), t.lineTo(i + 1, n + 1), t.lineTo(i, n + 1), t.endFill())
                    }
                    return t
                }, setupTimingPattern: function () {
                    for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = 0 == t % 2);
                    for (t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = 0 == t % 2)
                }, setupPositionAdjustPattern: function () {
                    for (var t = u.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var n = 0; n < t.length; n++) {
                        var r = t[e], i = t[n];
                        if (null == this.modules[r][i]) for (var o = -2; 2 >= o; o++) for (var s = -2; 2 >= s; s++) this.modules[r + o][i + s] = -2 == o || 2 == o || -2 == s || 2 == s || 0 == o && 0 == s
                    }
                }, setupTypeNumber: function (t) {
                    for (var e = u.getBCHTypeNumber(this.typeNumber), n = 0; 18 > n; n++) {
                        var r = !t && 1 == (e >> n & 1);
                        this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
                    }
                    for (n = 0; 18 > n; n++) r = !t && 1 == (e >> n & 1), this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
                }, setupTypeInfo: function (t, e) {
                    for (var n = u.getBCHTypeInfo(this.errorCorrectLevel << 3 | e), r = 0; 15 > r; r++) {
                        var i = !t && 1 == (n >> r & 1);
                        6 > r ? this.modules[r][8] = i : 8 > r ? this.modules[r + 1][8] = i : this.modules[this.moduleCount - 15 + r][8] = i
                    }
                    for (r = 0; 15 > r; r++) i = !t && 1 == (n >> r & 1), 8 > r ? this.modules[8][this.moduleCount - r - 1] = i : 9 > r ? this.modules[8][15 - r - 1 + 1] = i : this.modules[8][15 - r - 1] = i;
                    this.modules[this.moduleCount - 8][8] = !t
                }, mapData: function (t, e) {
                    for (var n = -1, r = this.moduleCount - 1, i = 7, o = 0, s = this.moduleCount - 1; 0 < s; s -= 2) for (6 == s && s--; ;) {
                        for (var a = 0; 2 > a; a++) if (null == this.modules[r][s - a]) {
                            var l = !1;
                            o < t.length && (l = 1 == (t[o] >>> i & 1)), u.getMask(e, r, s - a) && (l = !l), this.modules[r][s - a] = l, i--, -1 == i && (o++, i = 7)
                        }
                        if (r += n, 0 > r || this.moduleCount <= r) {
                            r -= n, n = -n;
                            break
                        }
                    }
                }
            }, r.PAD0 = 236, r.PAD1 = 17, r.createData = function (t, e, n) {
                for (var e = o.getRSBlocks(t, e), i = new s, a = 0; a < n.length; a++) {
                    var l = n[a];
                    i.put(l.mode, 4), i.put(l.getLength(), u.getLengthInBits(l.mode, t)), l.write(i)
                }
                for (a = t = 0; a < e.length; a++) t += e[a].dataCount;
                if (i.getLengthInBits() > 8 * t) throw Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * t + ")");
                for (i.getLengthInBits() + 4 <= 8 * t && i.put(0, 4); 0 != i.getLengthInBits() % 8;) i.putBit(!1);
                for (; !(i.getLengthInBits() >= 8 * t) && (i.put(r.PAD0, 8), !(i.getLengthInBits() >= 8 * t));) i.put(r.PAD1, 8);
                return r.createBytes(i, e)
            }, r.createBytes = function (t, e) {
                for (var n = 0, r = 0, o = 0, s = Array(e.length), a = Array(e.length), l = 0; l < e.length; l++) {
                    var c = e[l].dataCount, h = e[l].totalCount - c, r = Math.max(r, c), o = Math.max(o, h);
                    s[l] = Array(c);
                    for (var p = 0; p < s[l].length; p++) s[l][p] = 255 & t.buffer[p + n];
                    for (n += c, p = u.getErrorCorrectPolynomial(h), c = new i(s[l], p.getLength() - 1).mod(p), a[l] = Array(p.getLength() - 1), p = 0; p < a[l].length; p++) h = p + c.getLength() - a[l].length, a[l][p] = 0 <= h ? c.get(h) : 0
                }
                for (p = l = 0; p < e.length; p++) l += e[p].totalCount;
                for (n = Array(l), p = c = 0; p < r; p++) for (l = 0; l < e.length; l++) p < s[l].length && (n[c++] = s[l][p]);
                for (p = 0; p < o; p++) for (l = 0; l < e.length; l++) p < a[l].length && (n[c++] = a[l][p]);
                return n
            }, a = 4;
            for (var u = {
                PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                G15: 1335,
                G18: 7973,
                G15_MASK: 21522,
                getBCHTypeInfo: function (t) {
                    for (var e = t << 10; 0 <= u.getBCHDigit(e) - u.getBCHDigit(u.G15);) e ^= u.G15 << u.getBCHDigit(e) - u.getBCHDigit(u.G15);
                    return (t << 10 | e) ^ u.G15_MASK
                },
                getBCHTypeNumber: function (t) {
                    for (var e = t << 12; 0 <= u.getBCHDigit(e) - u.getBCHDigit(u.G18);) e ^= u.G18 << u.getBCHDigit(e) - u.getBCHDigit(u.G18);
                    return t << 12 | e
                },
                getBCHDigit: function (t) {
                    for (var e = 0; 0 != t;) e++, t >>>= 1;
                    return e
                },
                getPatternPosition: function (t) {
                    return u.PATTERN_POSITION_TABLE[t - 1]
                },
                getMask: function (t, e, n) {
                    switch (t) {
                        case 0:
                            return 0 == (e + n) % 2;
                        case 1:
                            return 0 == e % 2;
                        case 2:
                            return 0 == n % 3;
                        case 3:
                            return 0 == (e + n) % 3;
                        case 4:
                            return 0 == (Math.floor(e / 2) + Math.floor(n / 3)) % 2;
                        case 5:
                            return 0 == e * n % 2 + e * n % 3;
                        case 6:
                            return 0 == (e * n % 2 + e * n % 3) % 2;
                        case 7:
                            return 0 == (e * n % 3 + (e + n) % 2) % 2;
                        default:
                            throw Error("bad maskPattern:" + t)
                    }
                },
                getErrorCorrectPolynomial: function (t) {
                    for (var e = new i([1], 0), n = 0; n < t; n++) e = e.multiply(new i([1, l.gexp(n)], 0));
                    return e
                },
                getLengthInBits: function (t, e) {
                    if (1 <= e && 10 > e) switch (t) {
                        case 1:
                            return 10;
                        case 2:
                            return 9;
                        case a:
                            return 8;
                        case 8:
                            return 8;
                        default:
                            throw Error("mode:" + t)
                    } else if (27 > e) switch (t) {
                        case 1:
                            return 12;
                        case 2:
                            return 11;
                        case a:
                            return 16;
                        case 8:
                            return 10;
                        default:
                            throw Error("mode:" + t)
                    } else {
                        if (!(41 > e)) throw Error("type:" + e);
                        switch (t) {
                            case 1:
                                return 14;
                            case 2:
                                return 13;
                            case a:
                                return 16;
                            case 8:
                                return 12;
                            default:
                                throw Error("mode:" + t)
                        }
                    }
                },
                getLostPoint: function (t) {
                    for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r++) for (var i = 0; i < e; i++) {
                        for (var o = 0, s = t.isDark(r, i), a = -1; 1 >= a; a++) if (!(0 > r + a || e <= r + a)) for (var u = -1; 1 >= u; u++) 0 > i + u || e <= i + u || 0 == a && 0 == u || s == t.isDark(r + a, i + u) && o++;
                        5 < o && (n += 3 + o - 5)
                    }
                    for (r = 0; r < e - 1; r++) for (i = 0; i < e - 1; i++) o = 0, t.isDark(r, i) && o++, t.isDark(r + 1, i) && o++, t.isDark(r, i + 1) && o++, t.isDark(r + 1, i + 1) && o++, (0 == o || 4 == o) && (n += 3);
                    for (r = 0; r < e; r++) for (i = 0; i < e - 6; i++) t.isDark(r, i) && !t.isDark(r, i + 1) && t.isDark(r, i + 2) && t.isDark(r, i + 3) && t.isDark(r, i + 4) && !t.isDark(r, i + 5) && t.isDark(r, i + 6) && (n += 40);
                    for (i = 0; i < e; i++) for (r = 0; r < e - 6; r++) t.isDark(r, i) && !t.isDark(r + 1, i) && t.isDark(r + 2, i) && t.isDark(r + 3, i) && t.isDark(r + 4, i) && !t.isDark(r + 5, i) && t.isDark(r + 6, i) && (n += 40);
                    for (i = o = 0; i < e; i++) for (r = 0; r < e; r++) t.isDark(r, i) && o++;
                    return t = Math.abs(100 * o / e / e - 50) / 5, n + 10 * t
                }
            }, l = {
                glog: function (t) {
                    if (1 > t) throw Error("glog(" + t + ")");
                    return l.LOG_TABLE[t]
                }, gexp: function (t) {
                    for (; 0 > t;) t += 255;
                    for (; 256 <= t;) t -= 255;
                    return l.EXP_TABLE[t]
                }, EXP_TABLE: Array(256), LOG_TABLE: Array(256)
            }, c = 0; 8 > c; c++) l.EXP_TABLE[c] = 1 << c;
            for (c = 8; 256 > c; c++) l.EXP_TABLE[c] = l.EXP_TABLE[c - 4] ^ l.EXP_TABLE[c - 5] ^ l.EXP_TABLE[c - 6] ^ l.EXP_TABLE[c - 8];
            for (c = 0; 255 > c; c++) l.LOG_TABLE[l.EXP_TABLE[c]] = c;
            return i.prototype = {
                get: function (t) {
                    return this.num[t]
                }, getLength: function () {
                    return this.num.length
                }, multiply: function (t) {
                    for (var e = Array(this.getLength() + t.getLength() - 1), n = 0; n < this.getLength(); n++) for (var r = 0; r < t.getLength(); r++) e[n + r] ^= l.gexp(l.glog(this.get(n)) + l.glog(t.get(r)));
                    return new i(e, 0)
                }, mod: function (t) {
                    if (0 > this.getLength() - t.getLength()) return this;
                    for (var e = l.glog(this.get(0)) - l.glog(t.get(0)), n = Array(this.getLength()), r = 0; r < this.getLength(); r++) n[r] = this.get(r);
                    for (r = 0; r < t.getLength(); r++) n[r] ^= l.gexp(l.glog(t.get(r)) + e);
                    return new i(n, 0).mod(t)
                }
            }, o.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], o.getRSBlocks = function (t, e) {
                var n = o.getRsBlockTable(t, e);
                if (void 0 == n) throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
                for (var r = n.length / 3, i = [], s = 0; s < r; s++) for (var a = n[3 * s + 0], u = n[3 * s + 1], l = n[3 * s + 2], c = 0; c < a; c++) i.push(new o(u, l));
                return i
            }, o.getRsBlockTable = function (t, e) {
                switch (e) {
                    case 1:
                        return o.RS_BLOCK_TABLE[4 * (t - 1) + 0];
                    case 0:
                        return o.RS_BLOCK_TABLE[4 * (t - 1) + 1];
                    case 3:
                        return o.RS_BLOCK_TABLE[4 * (t - 1) + 2];
                    case 2:
                        return o.RS_BLOCK_TABLE[4 * (t - 1) + 3]
                }
            }, s.prototype = {
                get: function (t) {
                    return 1 == (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1)
                }, put: function (t, e) {
                    for (var n = 0; n < e; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
                }, getLengthInBits: function () {
                    return this.length
                }, putBit: function (t) {
                    var e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                }
            }, "string" == typeof e && (e = {text: e}), e = t.extend({}, {
                render: "canvas",
                width: 256,
                height: 256,
                typeNumber: -1,
                correctLevel: 2,
                background: "#ffffff",
                foreground: "#000000"
            }, e), this.each(function () {
                var n;
                if ("canvas" == e.render) {
                    n = new r(e.typeNumber, e.correctLevel), n.addData(e.text), n.make();
                    var i = document.createElement("canvas");
                    i.width = e.width, i.height = e.height;
                    for (var o = i.getContext("2d"), s = e.width / n.getModuleCount(), a = e.height / n.getModuleCount(), u = 0; u < n.getModuleCount(); u++) for (var l = 0; l < n.getModuleCount(); l++) {
                        o.fillStyle = n.isDark(u, l) ? e.foreground : e.background;
                        var c = Math.ceil((l + 1) * s) - Math.floor(l * s),
                            h = Math.ceil((u + 1) * s) - Math.floor(u * s);
                        o.fillRect(Math.round(l * s), Math.round(u * a), c, h)
                    }
                } else for (n = new r(e.typeNumber, e.correctLevel), n.addData(e.text), n.make(), i = t("<table></table>").css("width", e.width + "px").css("height", e.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", e.background), o = e.width / n.getModuleCount(), s = e.height / n.getModuleCount(), a = 0; a < n.getModuleCount(); a++) for (u = t("<tr></tr>").css("height", s + "px").appendTo(i), l = 0; l < n.getModuleCount(); l++) t("<td></td>").css("width", o + "px").css("background-color", n.isDark(a, l) ? e.foreground : e.background).appendTo(u);
                n = i, jQuery(n).appendTo(this)
            })
        }
    }(jQuery)
}, function (t, e, n) {
    !function (e) {
        "use strict";
        var r, i = e.Base64, o = "2.1.9";
        if ("undefined" != typeof t && t.exports) try {
            r = n(3).Buffer
        } catch (t) {
        }
        var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = function (t) {
            for (var e = {}, n = 0, r = t.length; n < r; n++) e[t.charAt(n)] = n;
            return e
        }(s), u = String.fromCharCode, l = function (t) {
            if (t.length < 2) {
                var e = t.charCodeAt(0);
                return e < 128 ? t : e < 2048 ? u(192 | e >>> 6) + u(128 | 63 & e) : u(224 | e >>> 12 & 15) + u(128 | e >>> 6 & 63) + u(128 | 63 & e)
            }
            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
            return u(240 | e >>> 18 & 7) + u(128 | e >>> 12 & 63) + u(128 | e >>> 6 & 63) + u(128 | 63 & e)
        }, c = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, h = function (t) {
            return t.replace(c, l)
        }, p = function (t) {
            var e = [0, 2, 1][t.length % 3],
                n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0),
                r = [s.charAt(n >>> 18), s.charAt(n >>> 12 & 63), e >= 2 ? "=" : s.charAt(n >>> 6 & 63), e >= 1 ? "=" : s.charAt(63 & n)];
            return r.join("")
        }, f = e.btoa ? function (t) {
            return e.btoa(t)
        } : function (t) {
            return t.replace(/[\s\S]{1,3}/g, p)
        }, d = r ? function (t) {
            return (t.constructor === r.constructor ? t : new r(t)).toString("base64")
        } : function (t) {
            return f(h(t))
        }, g = function (t, e) {
            return e ? d(String(t)).replace(/[+\/]/g, function (t) {
                return "+" == t ? "-" : "_"
            }).replace(/=/g, "") : d(String(t))
        }, m = function (t) {
            return g(t, !0)
        }, y = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"), v = function (t) {
            switch (t.length) {
                case 4:
                    var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3),
                        n = e - 65536;
                    return u((n >>> 10) + 55296) + u((1023 & n) + 56320);
                case 3:
                    return u((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                default:
                    return u((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
            }
        }, b = function (t) {
            return t.replace(y, v)
        }, w = function (t) {
            var e = t.length, n = e % 4,
                r = (e > 0 ? a[t.charAt(0)] << 18 : 0) | (e > 1 ? a[t.charAt(1)] << 12 : 0) | (e > 2 ? a[t.charAt(2)] << 6 : 0) | (e > 3 ? a[t.charAt(3)] : 0),
                i = [u(r >>> 16), u(r >>> 8 & 255), u(255 & r)];
            return i.length -= [0, 0, 2, 1][n], i.join("")
        }, x = e.atob ? function (t) {
            return e.atob(t)
        } : function (t) {
            return t.replace(/[\s\S]{1,4}/g, w)
        }, k = r ? function (t) {
            return (t.constructor === r.constructor ? t : new r(t, "base64")).toString()
        } : function (t) {
            return b(x(t))
        }, S = function (t) {
            return k(String(t).replace(/[-_]/g, function (t) {
                return "-" == t ? "+" : "/"
            }).replace(/[^A-Za-z0-9\+\/]/g, ""))
        }, _ = function () {
            var t = e.Base64;
            return e.Base64 = i, t
        };
        if (e.Base64 = {
            VERSION: o,
            atob: x,
            btoa: f,
            fromBase64: S,
            toBase64: g,
            utob: h,
            encode: g,
            encodeURI: m,
            btou: b,
            decode: S,
            noConflict: _
        }, "function" == typeof Object.defineProperty) {
            var T = function (t) {
                return {value: t, enumerable: !1, writable: !0, configurable: !0}
            };
            e.Base64.extendString = function () {
                Object.defineProperty(String.prototype, "fromBase64", T(function () {
                    return S(this)
                })), Object.defineProperty(String.prototype, "toBase64", T(function (t) {
                    return g(this, t)
                })), Object.defineProperty(String.prototype, "toBase64URI", T(function () {
                    return g(this, !0)
                }))
            }
        }
        e.Meteor && (Base64 = e.Base64)
    }(this)
}, function (t, e) {
    t.exports = {
        0: 65533,
        128: 8364,
        130: 8218,
        131: 402,
        132: 8222,
        133: 8230,
        134: 8224,
        135: 8225,
        136: 710,
        137: 8240,
        138: 352,
        139: 8249,
        140: 338,
        142: 381,
        145: 8216,
        146: 8217,
        147: 8220,
        148: 8221,
        149: 8226,
        150: 8211,
        151: 8212,
        152: 732,
        153: 8482,
        154: 353,
        155: 8250,
        156: 339,
        158: 382,
        159: 376
    }
}, function (t, e, n) {
    var r;
    (function (t, i) {
        (function () {
            function o(t, e) {
                function n(t) {
                    if (n[t] !== m) return n[t];
                    var o;
                    if ("bug-string-char-index" == t) o = "a" != "a"[0]; else if ("json" == t) o = n("json-stringify") && n("json-parse"); else {
                        var s, a = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if ("json-stringify" == t) {
                            var l = e.stringify, c = "function" == typeof l && b;
                            if (c) {
                                (s = function () {
                                    return 1
                                }).toJSON = s;
                                try {
                                    c = "0" === l(0) && "0" === l(new r) && '""' == l(new i) && l(v) === m && l(m) === m && l() === m && "1" === l(s) && "[1]" == l([s]) && "[null]" == l([m]) && "null" == l(null) && "[null,null,null]" == l([m, v, null]) && l({a: [s, !0, !1, null, "\0\b\n\f\r\t"]}) == a && "1" === l(null, s) && "[\n 1,\n 2\n]" == l([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == l(new u(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == l(new u(864e13)) && '"-000001-01-01T00:00:00.000Z"' == l(new u(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == l(new u(-1))
                                } catch (t) {
                                    c = !1
                                }
                            }
                            o = c
                        }
                        if ("json-parse" == t) {
                            var h = e.parse;
                            if ("function" == typeof h) try {
                                if (0 === h("0") && !h(!1)) {
                                    s = h(a);
                                    var p = 5 == s.a.length && 1 === s.a[0];
                                    if (p) {
                                        try {
                                            p = !h('"\t"')
                                        } catch (t) {
                                        }
                                        if (p) try {
                                            p = 1 !== h("01")
                                        } catch (t) {
                                        }
                                        if (p) try {
                                            p = 1 !== h("1.")
                                        } catch (t) {
                                        }
                                    }
                                }
                            } catch (t) {
                                p = !1
                            }
                            o = p
                        }
                    }
                    return n[t] = !!o
                }

                t || (t = l.Object()), e || (e = l.Object());
                var r = t.Number || l.Number, i = t.String || l.String, s = t.Object || l.Object, u = t.Date || l.Date,
                    c = t.SyntaxError || l.SyntaxError, h = t.TypeError || l.TypeError, p = t.Math || l.Math,
                    f = t.JSON || l.JSON;
                "object" == typeof f && f && (e.stringify = f.stringify, e.parse = f.parse);
                var d, g, m, y = s.prototype, v = y.toString, b = new u(-0xc782b5b800cec);
                try {
                    b = b.getUTCFullYear() == -109252 && 0 === b.getUTCMonth() && 1 === b.getUTCDate() && 10 == b.getUTCHours() && 37 == b.getUTCMinutes() && 6 == b.getUTCSeconds() && 708 == b.getUTCMilliseconds()
                } catch (t) {
                }
                if (!n("json")) {
                    var w = "[object Function]", x = "[object Date]", k = "[object Number]", S = "[object String]",
                        _ = "[object Array]", T = "[object Boolean]", C = n("bug-string-char-index");
                    if (!b) var E = p.floor, A = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                        L = function (t, e) {
                            return A[e] + 365 * (t - 1970) + E((t - 1969 + (e = +(e > 1))) / 4) - E((t - 1901 + e) / 100) + E((t - 1601 + e) / 400)
                        };
                    if ((d = y.hasOwnProperty) || (d = function (t) {
                        var e, n = {};
                        return (n.__proto__ = null, n.__proto__ = {toString: 1}, n).toString != v ? d = function (t) {
                            var e = this.__proto__, n = t in (this.__proto__ = null, this);
                            return this.__proto__ = e, n
                        } : (e = n.constructor, d = function (t) {
                            var n = (this.constructor || e).prototype;
                            return t in this && !(t in n && this[t] === n[t])
                        }), n = null, d.call(this, t)
                    }), g = function (t, e) {
                        var n, r, i, o = 0;
                        (n = function () {
                            this.valueOf = 0
                        }).prototype.valueOf = 0, r = new n;
                        for (i in r) d.call(r, i) && o++;
                        return n = r = null, o ? g = 2 == o ? function (t, e) {
                            var n, r = {}, i = v.call(t) == w;
                            for (n in t) i && "prototype" == n || d.call(r, n) || !(r[n] = 1) || !d.call(t, n) || e(n)
                        } : function (t, e) {
                            var n, r, i = v.call(t) == w;
                            for (n in t) i && "prototype" == n || !d.call(t, n) || (r = "constructor" === n) || e(n);
                            (r || d.call(t, n = "constructor")) && e(n)
                        } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], g = function (t, e) {
                            var n, i, o = v.call(t) == w,
                                s = !o && "function" != typeof t.constructor && a[typeof t.hasOwnProperty] && t.hasOwnProperty || d;
                            for (n in t) o && "prototype" == n || !s.call(t, n) || e(n);
                            for (i = r.length; n = r[--i]; s.call(t, n) && e(n)) ;
                        }), g(t, e)
                    }, !n("json-stringify")) {
                        var I = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                            D = "000000", R = function (t, e) {
                                return (D + (e || 0)).slice(-t)
                            }, N = "\\u00", O = function (t) {
                                for (var e = '"', n = 0, r = t.length, i = !C || r > 10, o = i && (C ? t.split("") : t); n < r; n++) {
                                    var s = t.charCodeAt(n);
                                    switch (s) {
                                        case 8:
                                        case 9:
                                        case 10:
                                        case 12:
                                        case 13:
                                        case 34:
                                        case 92:
                                            e += I[s];
                                            break;
                                        default:
                                            if (s < 32) {
                                                e += N + R(2, s.toString(16));
                                                break
                                            }
                                            e += i ? o[n] : t.charAt(n)
                                    }
                                }
                                return e + '"'
                            }, M = function (t, e, n, r, i, o, s) {
                                var a, u, l, c, p, f, y, b, w, C, A, I, D, N, B, P;
                                try {
                                    a = e[t]
                                } catch (t) {
                                }
                                if ("object" == typeof a && a) if (u = v.call(a), u != x || d.call(a, "toJSON")) "function" == typeof a.toJSON && (u != k && u != S && u != _ || d.call(a, "toJSON")) && (a = a.toJSON(t)); else if (a > -1 / 0 && a < 1 / 0) {
                                    if (L) {
                                        for (p = E(a / 864e5), l = E(p / 365.2425) + 1970 - 1; L(l + 1, 0) <= p; l++) ;
                                        for (c = E((p - L(l, 0)) / 30.42); L(l, c + 1) <= p; c++) ;
                                        p = 1 + p - L(l, c), f = (a % 864e5 + 864e5) % 864e5, y = E(f / 36e5) % 24, b = E(f / 6e4) % 60, w = E(f / 1e3) % 60, C = f % 1e3
                                    } else l = a.getUTCFullYear(), c = a.getUTCMonth(), p = a.getUTCDate(), y = a.getUTCHours(), b = a.getUTCMinutes(), w = a.getUTCSeconds(), C = a.getUTCMilliseconds();
                                    a = (l <= 0 || l >= 1e4 ? (l < 0 ? "-" : "+") + R(6, l < 0 ? -l : l) : R(4, l)) + "-" + R(2, c + 1) + "-" + R(2, p) + "T" + R(2, y) + ":" + R(2, b) + ":" + R(2, w) + "." + R(3, C) + "Z"
                                } else a = null;
                                if (n && (a = n.call(e, t, a)), null === a) return "null";
                                if (u = v.call(a), u == T) return "" + a;
                                if (u == k) return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                                if (u == S) return O("" + a);
                                if ("object" == typeof a) {
                                    for (N = s.length; N--;) if (s[N] === a) throw h();
                                    if (s.push(a), A = [], B = o, o += i, u == _) {
                                        for (D = 0, N = a.length; D < N; D++) I = M(D, a, n, r, i, o, s), A.push(I === m ? "null" : I);
                                        P = A.length ? i ? "[\n" + o + A.join(",\n" + o) + "\n" + B + "]" : "[" + A.join(",") + "]" : "[]"
                                    } else g(r || a, function (t) {
                                        var e = M(t, a, n, r, i, o, s);
                                        e !== m && A.push(O(t) + ":" + (i ? " " : "") + e)
                                    }), P = A.length ? i ? "{\n" + o + A.join(",\n" + o) + "\n" + B + "}" : "{" + A.join(",") + "}" : "{}";
                                    return s.pop(), P
                                }
                            };
                        e.stringify = function (t, e, n) {
                            var r, i, o, s;
                            if (a[typeof e] && e) if ((s = v.call(e)) == w) i = e; else if (s == _) {
                                o = {};
                                for (var u, l = 0, c = e.length; l < c; u = e[l++], s = v.call(u), (s == S || s == k) && (o[u] = 1)) ;
                            }
                            if (n) if ((s = v.call(n)) == k) {
                                if ((n -= n % 1) > 0) for (r = "", n > 10 && (n = 10); r.length < n; r += " ") ;
                            } else s == S && (r = n.length <= 10 ? n : n.slice(0, 10));
                            return M("", (u = {}, u[""] = t, u), i, o, r, "", [])
                        }
                    }
                    if (!n("json-parse")) {
                        var B, P, q = i.fromCharCode,
                            j = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"},
                            z = function () {
                                throw B = P = null, c()
                            }, $ = function () {
                                for (var t, e, n, r, i, o = P, s = o.length; B < s;) switch (i = o.charCodeAt(B)) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        B++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        return t = C ? o.charAt(B) : o[B], B++, t;
                                    case 34:
                                        for (t = "@", B++; B < s;) if (i = o.charCodeAt(B), i < 32) z(); else if (92 == i) switch (i = o.charCodeAt(++B)) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                t += j[i], B++;
                                                break;
                                            case 117:
                                                for (e = ++B, n = B + 4; B < n; B++) i = o.charCodeAt(B), i >= 48 && i <= 57 || i >= 97 && i <= 102 || i >= 65 && i <= 70 || z();
                                                t += q("0x" + o.slice(e, B));
                                                break;
                                            default:
                                                z()
                                        } else {
                                            if (34 == i) break;
                                            for (i = o.charCodeAt(B), e = B; i >= 32 && 92 != i && 34 != i;) i = o.charCodeAt(++B);
                                            t += o.slice(e, B)
                                        }
                                        if (34 == o.charCodeAt(B)) return B++, t;
                                        z();
                                    default:
                                        if (e = B, 45 == i && (r = !0, i = o.charCodeAt(++B)), i >= 48 && i <= 57) {
                                            for (48 == i && (i = o.charCodeAt(B + 1), i >= 48 && i <= 57) && z(), r = !1; B < s && (i = o.charCodeAt(B), i >= 48 && i <= 57); B++) ;
                                            if (46 == o.charCodeAt(B)) {
                                                for (n = ++B; n < s && (i = o.charCodeAt(n), i >= 48 && i <= 57); n++) ;
                                                n == B && z(), B = n
                                            }
                                            if (i = o.charCodeAt(B), 101 == i || 69 == i) {
                                                for (i = o.charCodeAt(++B), 43 != i && 45 != i || B++, n = B; n < s && (i = o.charCodeAt(n), i >= 48 && i <= 57); n++) ;
                                                n == B && z(), B = n
                                            }
                                            return +o.slice(e, B)
                                        }
                                        if (r && z(), "true" == o.slice(B, B + 4)) return B += 4, !0;
                                        if ("false" == o.slice(B, B + 5)) return B += 5, !1;
                                        if ("null" == o.slice(B, B + 4)) return B += 4, null;
                                        z()
                                }
                                return "$"
                            }, F = function (t) {
                                var e, n;
                                if ("$" == t && z(), "string" == typeof t) {
                                    if ("@" == (C ? t.charAt(0) : t[0])) return t.slice(1);
                                    if ("[" == t) {
                                        for (e = []; t = $(), "]" != t; n || (n = !0)) n && ("," == t ? (t = $(), "]" == t && z()) : z()), "," == t && z(), e.push(F(t));
                                        return e
                                    }
                                    if ("{" == t) {
                                        for (e = {}; t = $(), "}" != t; n || (n = !0)) n && ("," == t ? (t = $(), "}" == t && z()) : z()), "," != t && "string" == typeof t && "@" == (C ? t.charAt(0) : t[0]) && ":" == $() || z(), e[t.slice(1)] = F($());
                                        return e
                                    }
                                    z()
                                }
                                return t
                            }, U = function (t, e, n) {
                                var r = H(t, e, n);
                                r === m ? delete t[e] : t[e] = r
                            }, H = function (t, e, n) {
                                var r, i = t[e];
                                if ("object" == typeof i && i) if (v.call(i) == _) for (r = i.length; r--;) U(i, r, n); else g(i, function (t) {
                                    U(i, t, n)
                                });
                                return n.call(t, e, i)
                            };
                        e.parse = function (t, e) {
                            var n, r;
                            return B = 0, P = "" + t, n = F($()), "$" != $() && z(), B = P = null, e && v.call(e) == w ? H((r = {}, r[""] = n, r), "", e) : n
                        }
                    }
                }
                return e.runInContext = o, e
            }

            var s = n(154), a = {function: !0, object: !0}, u = a[typeof e] && e && !e.nodeType && e,
                l = a[typeof window] && window || this,
                c = u && a[typeof t] && t && !t.nodeType && "object" == typeof i && i;
            if (!c || c.global !== c && c.window !== c && c.self !== c || (l = c), u && !s) o(l, u); else {
                var h = l.JSON, p = l.JSON3, f = !1, d = o(l, l.JSON3 = {
                    noConflict: function () {
                        return f || (f = !0, l.JSON = h, l.JSON3 = p, h = p = null), d
                    }
                });
                l.JSON = {parse: d.parse, stringify: d.stringify}
            }
            s && (r = function () {
                return d
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r)))
        }).call(this)
    }).call(e, n(54)(t), function () {
        return this
    }())
}, function (t, e, n) {
    var r = n(5), i = n(44), o = n(120), s = n(126), a = n(2), u = function (t, e, n) {
        a.clearNode(e);
        var r = new i(n), u = s(t, r), l = o(u, t, r).toNode();
        e.appendChild(l)
    };
    "undefined" != typeof document && "CSS1Compat" !== document.compatMode && ("undefined" != typeof console && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), u = function () {
        throw new r("KaTeX doesn't work in quirks mode.")
    });
    var l = function (t, e) {
        var n = new i(e), r = s(t, n);
        return o(r, t, n).toMarkup()
    }, c = function (t, e) {
        var n = new i(e);
        return s(t, n)
    };
    t.exports = {render: u, renderToString: l, __parse: c, ParseError: r}
}, function (t, e, n) {
    function r(t) {
        this._input = t
    }

    function i(t, e, n) {
        this.text = t, this.data = e, this.position = n
    }

    var o = n(128), s = n(5),
        a = new RegExp("([ \r\n\t]+)|(---?|[!-\\[\\]-‧‪-퟿豈-￿]|[�-�][�-�]|\\\\(?:[a-zA-Z]+|[^�-�]))"), u = /\s*/;
    r.prototype._innerLex = function (t, e) {
        var n = this._input;
        if (t === n.length) return new i("EOF", null, t);
        var r = o(a, n, t);
        if (null === r) throw new s("Unexpected character: '" + n[t] + "'", this, t);
        return r[2] ? new i(r[2], null, t + r[2].length) : e ? this._innerLex(t + r[1].length, !0) : new i(" ", null, t + r[1].length)
    };
    var l = /#[a-z0-9]+|[a-z]+/i;
    r.prototype._innerLexColor = function (t) {
        var e = this._input, n = o(u, e, t)[0];
        t += n.length;
        var r;
        if (r = o(l, e, t)) return new i(r[0], null, t + r[0].length);
        throw new s("Invalid color", this, t)
    };
    var c = /(-?)\s*(\d+(?:\.\d*)?|\.\d+)\s*([a-z]{2})/;
    r.prototype._innerLexSize = function (t) {
        var e = this._input, n = o(u, e, t)[0];
        t += n.length;
        var r;
        if (r = o(c, e, t)) {
            var a = r[3];
            if ("em" !== a && "ex" !== a) throw new s("Invalid unit: '" + a + "'", this, t);
            return new i(r[0], {number: +(r[1] + r[2]), unit: a}, t + r[0].length)
        }
        throw new s("Invalid size", this, t)
    }, r.prototype._innerLexWhitespace = function (t) {
        var e = this._input, n = o(u, e, t)[0];
        return t += n.length, new i(n[0], null, t)
    }, r.prototype.lex = function (t, e) {
        return "math" === e ? this._innerLex(t, !0) : "text" === e ? this._innerLex(t, !1) : "color" === e ? this._innerLexColor(t) : "size" === e ? this._innerLexSize(t) : "whitespace" === e ? this._innerLexWhitespace(t) : void 0
    }, t.exports = r
}, function (t, e) {
    function n(t) {
        this.style = t.style, this.color = t.color, this.size = t.size, this.phantom = t.phantom, this.font = t.font, void 0 === t.parentStyle ? this.parentStyle = t.style : this.parentStyle = t.parentStyle, void 0 === t.parentSize ? this.parentSize = t.size : this.parentSize = t.parentSize
    }

    n.prototype.extend = function (t) {
        var e = {
            style: this.style,
            size: this.size,
            color: this.color,
            parentStyle: this.style,
            parentSize: this.size,
            phantom: this.phantom,
            font: this.font
        };
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        return new n(e)
    }, n.prototype.withStyle = function (t) {
        return this.extend({style: t})
    }, n.prototype.withSize = function (t) {
        return this.extend({size: t})
    }, n.prototype.withColor = function (t) {
        return this.extend({color: t})
    }, n.prototype.withPhantom = function () {
        return this.extend({phantom: !0})
    }, n.prototype.withFont = function (t) {
        return this.extend({font: t})
    }, n.prototype.reset = function () {
        return this.extend({})
    };
    var r = {
        "katex-blue": "#6495ed",
        "katex-orange": "#ffa500",
        "katex-pink": "#ff00af",
        "katex-red": "#df0030",
        "katex-green": "#28ae7b",
        "katex-gray": "gray",
        "katex-purple": "#9d38bd",
        "katex-blueA": "#c7e9f1",
        "katex-blueB": "#9cdceb",
        "katex-blueC": "#58c4dd",
        "katex-blueD": "#29abca",
        "katex-blueE": "#1c758a",
        "katex-tealA": "#acead7",
        "katex-tealB": "#76ddc0",
        "katex-tealC": "#5cd0b3",
        "katex-tealD": "#55c1a7",
        "katex-tealE": "#49a88f",
        "katex-greenA": "#c9e2ae",
        "katex-greenB": "#a6cf8c",
        "katex-greenC": "#83c167",
        "katex-greenD": "#77b05d",
        "katex-greenE": "#699c52",
        "katex-goldA": "#f7c797",
        "katex-goldB": "#f9b775",
        "katex-goldC": "#f0ac5f",
        "katex-goldD": "#e1a158",
        "katex-goldE": "#c78d46",
        "katex-redA": "#f7a1a3",
        "katex-redB": "#ff8080",
        "katex-redC": "#fc6255",
        "katex-redD": "#e65a4c",
        "katex-redE": "#cf5044",
        "katex-maroonA": "#ecabc1",
        "katex-maroonB": "#ec92ab",
        "katex-maroonC": "#c55f73",
        "katex-maroonD": "#a24d61",
        "katex-maroonE": "#94424f",
        "katex-purpleA": "#caa3e8",
        "katex-purpleB": "#b189c6",
        "katex-purpleC": "#9a72ac",
        "katex-purpleD": "#715582",
        "katex-purpleE": "#644172",
        "katex-mintA": "#f5f9e8",
        "katex-mintB": "#edf2df",
        "katex-mintC": "#e0e5cc",
        "katex-grayA": "#fdfdfd",
        "katex-grayB": "#f7f7f7",
        "katex-grayC": "#eeeeee",
        "katex-grayD": "#dddddd",
        "katex-grayE": "#cccccc",
        "katex-grayF": "#aaaaaa",
        "katex-grayG": "#999999",
        "katex-grayH": "#555555",
        "katex-grayI": "#333333",
        "katex-kaBlue": "#314453",
        "katex-kaGreen": "#639b24"
    };
    n.prototype.getColor = function () {
        return this.phantom ? "transparent" : r[this.color] || this.color
    }, t.exports = n
}, function (t, e, n) {
    function r(t, e) {
        this.lexer = new a(t), this.settings = e
    }

    function i(t, e) {
        this.result = t, this.isFunction = e
    }

    var o = n(124), s = n(122), a = n(115), u = n(18), l = n(2), c = n(46), h = n(5), p = c.ParseNode;
    r.prototype.expect = function (t, e) {
        if (this.nextToken.text !== t) throw new h("Expected '" + t + "', got '" + this.nextToken.text + "'", this.lexer, this.nextToken.position);
        e !== !1 && this.consume()
    }, r.prototype.consume = function () {
        this.pos = this.nextToken.position, this.nextToken = this.lexer.lex(this.pos, this.mode)
    }, r.prototype.parse = function () {
        this.mode = "math", this.pos = 0, this.nextToken = this.lexer.lex(this.pos, this.mode);
        var t = this.parseInput();
        return t
    }, r.prototype.parseInput = function () {
        var t = this.parseExpression(!1);
        return this.expect("EOF", !1), t
    };
    var f = ["}", "\\end", "\\right", "&", "\\\\", "\\cr"];
    r.prototype.parseExpression = function (t, e) {
        for (var n = []; ;) {
            var r = this.nextToken, i = this.pos;
            if (f.indexOf(r.text) !== -1) break;
            if (e && r.text === e) break;
            var o = this.parseAtom();
            if (!o) {
                if (!this.settings.throwOnError && "\\" === r.text[0]) {
                    var s = this.handleUnsupportedCmd();
                    n.push(s), i = r.position;
                    continue
                }
                break
            }
            if (t && "infix" === o.type) {
                this.pos = i, this.nextToken = r;
                break
            }
            n.push(o)
        }
        return this.handleInfixNodes(n)
    }, r.prototype.handleInfixNodes = function (t) {
        for (var e, n = -1, r = 0; r < t.length; r++) {
            var i = t[r];
            if ("infix" === i.type) {
                if (n !== -1) throw new h("only one infix operator per group", this.lexer, -1);
                n = r, e = i.value.replaceWith
            }
        }
        if (n !== -1) {
            var o, s, a = t.slice(0, n), u = t.slice(n + 1);
            o = 1 === a.length && "ordgroup" === a[0].type ? a[0] : new p("ordgroup", a, this.mode), s = 1 === u.length && "ordgroup" === u[0].type ? u[0] : new p("ordgroup", u, this.mode);
            var l = this.callFunction(e, [o, s], null);
            return [new p(l.type, l, this.mode)]
        }
        return t
    };
    var d = 1;
    r.prototype.handleSupSubscript = function (t) {
        var e = this.nextToken.text, n = this.pos;
        this.consume();
        var r = this.parseGroup();
        if (r) {
            if (r.isFunction) {
                var i = o[r.result].greediness;
                if (i > d) return this.parseFunction(r);
                throw new h("Got function '" + r.result + "' with no arguments as " + t, this.lexer, n + 1)
            }
            return r.result
        }
        if (this.settings.throwOnError || "\\" !== this.nextToken.text[0]) throw new h("Expected group after '" + e + "'", this.lexer, n + 1);
        return this.handleUnsupportedCmd()
    }, r.prototype.handleUnsupportedCmd = function () {
        for (var t = this.nextToken.text, e = [], n = 0; n < t.length; n++) e.push(new p("textord", t[n], "text"));
        var r = new p("text", {body: e, type: "text"}, this.mode),
            i = new p("color", {color: this.settings.errorColor, value: [r], type: "color"}, this.mode);
        return this.consume(), i
    }, r.prototype.parseAtom = function () {
        var t = this.parseImplicitGroup();
        if ("text" === this.mode) return t;
        for (var e, n; ;) {
            var r = this.nextToken;
            if ("\\limits" === r.text || "\\nolimits" === r.text) {
                if (!t || "op" !== t.type) throw new h("Limit controls must follow a math operator", this.lexer, this.pos);
                var i = "\\limits" === r.text;
                t.value.limits = i, t.value.alwaysHandleSupSub = !0, this.consume()
            } else if ("^" === r.text) {
                if (e) throw new h("Double superscript", this.lexer, this.pos);
                e = this.handleSupSubscript("superscript")
            } else if ("_" === r.text) {
                if (n) throw new h("Double subscript", this.lexer, this.pos);
                n = this.handleSupSubscript("subscript")
            } else {
                if ("'" !== r.text) break;
                var o = new p("textord", "\\prime", this.mode), s = [o];
                for (this.consume(); "'" === this.nextToken.text;) s.push(o), this.consume();
                e = new p("ordgroup", s, this.mode)
            }
        }
        return e || n ? new p("supsub", {base: t, sup: e, sub: n}, this.mode) : t
    };
    var g = ["\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"],
        m = ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"];
    r.prototype.parseImplicitGroup = function () {
        var t = this.parseSymbol();
        if (null == t) return this.parseFunction();
        var e, n = t.result;
        if ("\\left" === n) {
            var r = this.parseFunction(t);
            e = this.parseExpression(!1), this.expect("\\right", !1);
            var i = this.parseFunction();
            return new p("leftright", {body: e, left: r.value.value, right: i.value.value}, this.mode)
        }
        if ("\\begin" === n) {
            var o = this.parseFunction(t), a = o.value.name;
            if (!s.hasOwnProperty(a)) throw new h("No such environment: " + a, this.lexer, o.value.namepos);
            var u = s[a], c = this.parseArguments("\\begin{" + a + "}", u),
                f = {mode: this.mode, envName: a, parser: this, lexer: this.lexer, positions: c.pop()},
                d = u.handler(f, c);
            this.expect("\\end", !1);
            var y = this.parseFunction();
            if (y.value.name !== a) throw new h("Mismatch: \\begin{" + a + "} matched by \\end{" + y.value.name + "}", this.lexer);
            return d.position = y.position, d
        }
        return l.contains(g, n) ? (e = this.parseExpression(!1), new p("sizing", {
            size: "size" + (l.indexOf(g, n) + 1),
            value: e
        }, this.mode)) : l.contains(m, n) ? (e = this.parseExpression(!0), new p("styling", {
            style: n.slice(1, n.length - 5),
            value: e
        }, this.mode)) : this.parseFunction(t)
    }, r.prototype.parseFunction = function (t) {
        if (t || (t = this.parseGroup()), t) {
            if (t.isFunction) {
                var e = t.result, n = o[e];
                if ("text" === this.mode && !n.allowedInText) throw new h("Can't use function '" + e + "' in text mode", this.lexer, t.position);
                var r = this.parseArguments(e, n), i = this.callFunction(e, r, r.pop());
                return new p(i.type, i, this.mode)
            }
            return t.result
        }
        return null
    }, r.prototype.callFunction = function (t, e, n) {
        var r = {funcName: t, parser: this, lexer: this.lexer, positions: n};
        return o[t].handler(r, e)
    }, r.prototype.parseArguments = function (t, e) {
        var n = e.numArgs + e.numOptionalArgs;
        if (0 === n) return [[this.pos]];
        for (var r = e.greediness, s = [this.pos], a = [], u = 0; u < n; u++) {
            var l, c = e.argTypes && e.argTypes[u];
            if (u < e.numOptionalArgs) {
                if (l = c ? this.parseSpecialGroup(c, !0) : this.parseOptionalGroup(), !l) {
                    a.push(null), s.push(this.pos);
                    continue
                }
            } else if (l = c ? this.parseSpecialGroup(c) : this.parseGroup(), !l) {
                if (this.settings.throwOnError || "\\" !== this.nextToken.text[0]) throw new h("Expected group after '" + t + "'", this.lexer, this.pos);
                l = new i(this.handleUnsupportedCmd(this.nextToken.text), !1)
            }
            var p;
            if (l.isFunction) {
                var f = o[l.result].greediness;
                if (!(f > r)) throw new h("Got function '" + l.result + "' as argument to '" + t + "'", this.lexer, this.pos - 1);
                p = this.parseFunction(l)
            } else p = l.result;
            a.push(p), s.push(this.pos)
        }
        return a.push(s), a
    }, r.prototype.parseSpecialGroup = function (t, e) {
        var n = this.mode;
        if ("original" === t && (t = n), "color" === t || "size" === t) {
            var r = this.nextToken;
            if (e && "[" !== r.text) return null;
            this.mode = t, this.expect(e ? "[" : "{");
            var o = this.nextToken;
            this.mode = n;
            var s;
            return s = "color" === t ? o.text : o.data, this.consume(), this.expect(e ? "]" : "}"), new i(new p(t, s, n), !1)
        }
        if ("text" === t) {
            var a = this.lexer.lex(this.pos, "whitespace");
            this.pos = a.position
        }
        this.mode = t, this.nextToken = this.lexer.lex(this.pos, t);
        var u;
        return u = e ? this.parseOptionalGroup() : this.parseGroup(), this.mode = n, this.nextToken = this.lexer.lex(this.pos, n), u
    }, r.prototype.parseGroup = function () {
        if ("{" === this.nextToken.text) {
            this.consume();
            var t = this.parseExpression(!1);
            return this.expect("}"), new i(new p("ordgroup", t, this.mode), !1)
        }
        return this.parseSymbol()
    }, r.prototype.parseOptionalGroup = function () {
        if ("[" === this.nextToken.text) {
            this.consume();
            var t = this.parseExpression(!1, "]");
            return this.expect("]"), new i(new p("ordgroup", t, this.mode), !1)
        }
        return null
    }, r.prototype.parseSymbol = function () {
        var t = this.nextToken;
        return o[t.text] ? (this.consume(), new i(t.text, !0)) : u[this.mode][t.text] ? (this.consume(), new i(new p(u[this.mode][t.text].group, t.text, this.mode), !1)) : null
    }, r.prototype.ParseNode = p, t.exports = r
}, function (t, e, n) {
    var r = n(5), i = n(16), o = n(17), s = n(121), a = n(45), u = n(14), l = n(2), c = o.makeSpan,
        h = function (t, e, n) {
            for (var r = [], i = 0; i < t.length; i++) {
                var o = t[i];
                r.push(b(o, e, n)), n = o
            }
            return r
        }, p = {
            mathord: "mord",
            textord: "mord",
            bin: "mbin",
            rel: "mrel",
            text: "mord",
            open: "mopen",
            close: "mclose",
            inner: "minner",
            genfrac: "mord",
            array: "mord",
            spacing: "mord",
            punct: "mpunct",
            ordgroup: "mord",
            op: "mop",
            katex: "mord",
            overline: "mord",
            underline: "mord",
            rule: "mord",
            leftright: "minner",
            sqrt: "mord",
            accent: "mord"
        }, f = function (t) {
            return null == t ? p.mathord : "supsub" === t.type ? f(t.value.base) : "llap" === t.type || "rlap" === t.type ? f(t.value) : "color" === t.type ? f(t.value.value) : "sizing" === t.type ? f(t.value.value) : "styling" === t.type ? f(t.value.value) : "delimsizing" === t.type ? p[t.value.delimType] : p[t.type]
        }, d = function (t, e) {
            return !!t && ("op" === t.type ? t.value.limits && (e.style.size === i.DISPLAY.size || t.value.alwaysHandleSupSub) : "accent" === t.type ? m(t.value.base) : null)
        }, g = function (t) {
            return !!t && ("ordgroup" === t.type ? 1 === t.value.length ? g(t.value[0]) : t : "color" === t.type && 1 === t.value.value.length ? g(t.value.value[0]) : t)
        }, m = function (t) {
            var e = g(t);
            return "mathord" === e.type || "textord" === e.type || "bin" === e.type || "rel" === e.type || "inner" === e.type || "open" === e.type || "close" === e.type || "punct" === e.type
        }, y = function (t) {
            return c(["sizing", "reset-" + t.size, "size5", t.style.reset(), i.TEXT.cls(), "nulldelimiter"])
        }, v = {};
    v.mathord = function (t, e, n) {
        return o.makeOrd(t, e, "mathord")
    }, v.textord = function (t, e, n) {
        return o.makeOrd(t, e, "textord")
    }, v.bin = function (t, e, n) {
        for (var r = "mbin", i = n; i && "color" === i.type;) {
            var s = i.value.value;
            i = s[s.length - 1]
        }
        return n && !l.contains(["mbin", "mopen", "mrel", "mop", "mpunct"], f(i)) || (t.type = "textord", r = "mord"), o.mathsym(t.value, t.mode, e.getColor(), [r])
    }, v.rel = function (t, e, n) {
        return o.mathsym(t.value, t.mode, e.getColor(), ["mrel"])
    }, v.open = function (t, e, n) {
        return o.mathsym(t.value, t.mode, e.getColor(), ["mopen"])
    }, v.close = function (t, e, n) {
        return o.mathsym(t.value, t.mode, e.getColor(), ["mclose"])
    }, v.inner = function (t, e, n) {
        return o.mathsym(t.value, t.mode, e.getColor(), ["minner"])
    }, v.punct = function (t, e, n) {
        return o.mathsym(t.value, t.mode, e.getColor(), ["mpunct"])
    }, v.ordgroup = function (t, e, n) {
        return c(["mord", e.style.cls()], h(t.value, e.reset()))
    }, v.text = function (t, e, n) {
        return c(["text", "mord", e.style.cls()], h(t.value.body, e.reset()))
    }, v.color = function (t, e, n) {
        var r = h(t.value.value, e.withColor(t.value.color), n);
        return new o.makeFragment(r)
    }, v.supsub = function (t, e, n) {
        if (d(t.value.base, e)) return v[t.value.base.type](t, e, n);
        var r, s, l, h, p = b(t.value.base, e.reset());
        t.value.sup && (l = b(t.value.sup, e.withStyle(e.style.sup())), r = c([e.style.reset(), e.style.sup().cls()], [l])), t.value.sub && (h = b(t.value.sub, e.withStyle(e.style.sub())), s = c([e.style.reset(), e.style.sub().cls()], [h]));
        var g, y;
        m(t.value.base) ? (g = 0, y = 0) : (g = p.height - u.metrics.supDrop, y = p.depth + u.metrics.subDrop);
        var w;
        w = e.style === i.DISPLAY ? u.metrics.sup1 : e.style.cramped ? u.metrics.sup3 : u.metrics.sup2;
        var x, k = i.TEXT.sizeMultiplier * e.style.sizeMultiplier, S = .5 / u.metrics.ptPerEm / k + "em";
        if (t.value.sup) if (t.value.sub) {
            g = Math.max(g, w, l.depth + .25 * u.metrics.xHeight), y = Math.max(y, u.metrics.sub2);
            var _ = u.metrics.defaultRuleThickness;
            if (g - l.depth - (h.height - y) < 4 * _) {
                y = 4 * _ - (g - l.depth) + h.height;
                var T = .8 * u.metrics.xHeight - (g - l.depth);
                T > 0 && (g += T, y -= T)
            }
            x = o.makeVList([{type: "elem", elem: s, shift: y}, {
                type: "elem",
                elem: r,
                shift: -g
            }], "individualShift", null, e), p instanceof a.symbolNode && (x.children[0].style.marginLeft = -p.italic + "em"), x.children[0].style.marginRight = S, x.children[1].style.marginRight = S
        } else g = Math.max(g, w, l.depth + .25 * u.metrics.xHeight), x = o.makeVList([{
            type: "elem",
            elem: r
        }], "shift", -g, e), x.children[0].style.marginRight = S; else y = Math.max(y, u.metrics.sub1, h.height - .8 * u.metrics.xHeight), x = o.makeVList([{
            type: "elem",
            elem: s
        }], "shift", y, e), x.children[0].style.marginRight = S, p instanceof a.symbolNode && (x.children[0].style.marginLeft = -p.italic + "em");
        return c([f(t.value.base)], [p, x])
    }, v.genfrac = function (t, e, n) {
        var r = e.style;
        "display" === t.value.size ? r = i.DISPLAY : "text" === t.value.size && (r = i.TEXT);
        var a, l = r.fracNum(), h = r.fracDen(), p = b(t.value.numer, e.withStyle(l)), f = c([r.reset(), l.cls()], [p]),
            d = b(t.value.denom, e.withStyle(h)), g = c([r.reset(), h.cls()], [d]);
        a = t.value.hasBarLine ? u.metrics.defaultRuleThickness / e.style.sizeMultiplier : 0;
        var m, v, w;
        r.size === i.DISPLAY.size ? (m = u.metrics.num1, v = a > 0 ? 3 * a : 7 * u.metrics.defaultRuleThickness, w = u.metrics.denom1) : (a > 0 ? (m = u.metrics.num2, v = a) : (m = u.metrics.num3, v = 3 * u.metrics.defaultRuleThickness), w = u.metrics.denom2);
        var x;
        if (0 === a) {
            var k = m - p.depth - (d.height - w);
            k < v && (m += .5 * (v - k), w += .5 * (v - k)), x = o.makeVList([{
                type: "elem",
                elem: g,
                shift: w
            }, {type: "elem", elem: f, shift: -m}], "individualShift", null, e)
        } else {
            var S = u.metrics.axisHeight;
            m - p.depth - (S + .5 * a) < v && (m += v - (m - p.depth - (S + .5 * a))), S - .5 * a - (d.height - w) < v && (w += v - (S - .5 * a - (d.height - w)));
            var _ = c([e.style.reset(), i.TEXT.cls(), "frac-line"]);
            _.height = a;
            var T = -(S - .5 * a);
            x = o.makeVList([{type: "elem", elem: g, shift: w}, {type: "elem", elem: _, shift: T}, {
                type: "elem",
                elem: f,
                shift: -m
            }], "individualShift", null, e)
        }
        x.height *= r.sizeMultiplier / e.style.sizeMultiplier, x.depth *= r.sizeMultiplier / e.style.sizeMultiplier;
        var C;
        C = r.size === i.DISPLAY.size ? u.metrics.delim1 : u.metrics.getDelim2(r);
        var E, A;
        return E = null == t.value.leftDelim ? y(e) : s.customSizedDelim(t.value.leftDelim, C, !0, e.withStyle(r), t.mode), A = null == t.value.rightDelim ? y(e) : s.customSizedDelim(t.value.rightDelim, C, !0, e.withStyle(r), t.mode), c(["mord", e.style.reset(), r.cls()], [E, c(["mfrac"], [x]), A], e.getColor())
    }, v.array = function (t, e, n) {
        var i, s, a = t.value.body.length, h = 0, p = new Array(a), f = 1 / u.metrics.ptPerEm, d = 5 * f, g = 12 * f,
            m = l.deflt(t.value.arraystretch, 1), y = m * g, v = .7 * y, w = .3 * y, x = 0;
        for (i = 0; i < t.value.body.length; ++i) {
            var k = t.value.body[i], S = v, _ = w;
            h < k.length && (h = k.length);
            var T = new Array(k.length);
            for (s = 0; s < k.length; ++s) {
                var C = b(k[s], e);
                _ < C.depth && (_ = C.depth), S < C.height && (S = C.height), T[s] = C
            }
            var E = 0;
            if (t.value.rowGaps[i]) {
                switch (E = t.value.rowGaps[i].value, E.unit) {
                    case"em":
                        E = E.number;
                        break;
                    case"ex":
                        E = E.number * u.metrics.emPerEx;
                        break;
                    default:
                        console.error("Can't handle unit " + E.unit), E = 0
                }
                E > 0 && (E += w, _ < E && (_ = E), E = 0)
            }
            T.height = S, T.depth = _, x += S, T.pos = x, x += _ + E, p[i] = T
        }
        var A, L, I = x / 2 + u.metrics.axisHeight, D = t.value.cols || [], R = [];
        for (s = 0, L = 0; s < h || L < D.length; ++s, ++L) {
            for (var N = D[L] || {}, O = !0; "separator" === N.type;) {
                if (O || (A = c(["arraycolsep"], []), A.style.width = u.metrics.doubleRuleSep + "em", R.push(A)), "|" !== N.separator) throw new r("Invalid separator type: " + N.separator);
                var M = c(["vertical-separator"], []);
                M.style.height = x + "em", M.style.verticalAlign = -(x - I) + "em", R.push(M), L++, N = D[L] || {}, O = !1
            }
            if (!(s >= h)) {
                var B;
                (s > 0 || t.value.hskipBeforeAndAfter) && (B = l.deflt(N.pregap, d), 0 !== B && (A = c(["arraycolsep"], []), A.style.width = B + "em", R.push(A)));
                var P = [];
                for (i = 0; i < a; ++i) {
                    var q = p[i], j = q[s];
                    if (j) {
                        var z = q.pos - I;
                        j.depth = q.depth, j.height = q.height, P.push({type: "elem", elem: j, shift: z})
                    }
                }
                P = o.makeVList(P, "individualShift", null, e), P = c(["col-align-" + (N.align || "c")], [P]), R.push(P), (s < h - 1 || t.value.hskipBeforeAndAfter) && (B = l.deflt(N.postgap, d), 0 !== B && (A = c(["arraycolsep"], []), A.style.width = B + "em", R.push(A)))
            }
        }
        return p = c(["mtable"], R), c(["mord"], [p], e.getColor())
    }, v.spacing = function (t, e, n) {
        return "\\ " === t.value || "\\space" === t.value || " " === t.value || "~" === t.value ? c(["mord", "mspace"], [o.mathsym(t.value, t.mode)]) : c(["mord", "mspace", o.spacingFunctions[t.value].className])
    }, v.llap = function (t, e, n) {
        var r = c(["inner"], [b(t.value.body, e.reset())]), i = c(["fix"], []);
        return c(["llap", e.style.cls()], [r, i])
    }, v.rlap = function (t, e, n) {
        var r = c(["inner"], [b(t.value.body, e.reset())]), i = c(["fix"], []);
        return c(["rlap", e.style.cls()], [r, i])
    }, v.op = function (t, e, n) {
        var r, s, a = !1;
        "supsub" === t.type && (r = t.value.sup, s = t.value.sub, t = t.value.base, a = !0);
        var h = ["\\smallint"], p = !1;
        e.style.size === i.DISPLAY.size && t.value.symbol && !l.contains(h, t.value.body) && (p = !0);
        var f, d = 0, g = 0;
        if (t.value.symbol) {
            var m = p ? "Size2-Regular" : "Size1-Regular";
            f = o.makeSymbol(t.value.body, m, "math", e.getColor(), ["op-symbol", p ? "large-op" : "small-op", "mop"]), d = (f.height - f.depth) / 2 - u.metrics.axisHeight * e.style.sizeMultiplier, g = f.italic
        } else {
            for (var y = [], v = 1; v < t.value.body.length; v++) y.push(o.mathsym(t.value.body[v], t.mode));
            f = c(["mop"], y, e.getColor())
        }
        if (a) {
            f = c([], [f]);
            var w, x, k, S;
            if (r) {
                var _ = b(r, e.withStyle(e.style.sup()));
                w = c([e.style.reset(), e.style.sup().cls()], [_]), x = Math.max(u.metrics.bigOpSpacing1, u.metrics.bigOpSpacing3 - _.depth)
            }
            if (s) {
                var T = b(s, e.withStyle(e.style.sub()));
                k = c([e.style.reset(), e.style.sub().cls()], [T]), S = Math.max(u.metrics.bigOpSpacing2, u.metrics.bigOpSpacing4 - T.height)
            }
            var C, E, A;
            if (r) if (s) {
                if (!r && !s) return f;
                A = u.metrics.bigOpSpacing5 + k.height + k.depth + S + f.depth + d, C = o.makeVList([{
                    type: "kern",
                    size: u.metrics.bigOpSpacing5
                }, {type: "elem", elem: k}, {type: "kern", size: S}, {type: "elem", elem: f}, {
                    type: "kern",
                    size: x
                }, {type: "elem", elem: w}, {
                    type: "kern",
                    size: u.metrics.bigOpSpacing5
                }], "bottom", A, e), C.children[0].style.marginLeft = -g + "em", C.children[2].style.marginLeft = g + "em"
            } else A = f.depth + d, C = o.makeVList([{type: "elem", elem: f}, {type: "kern", size: x}, {
                type: "elem",
                elem: w
            }, {
                type: "kern",
                size: u.metrics.bigOpSpacing5
            }], "bottom", A, e), C.children[1].style.marginLeft = g + "em"; else E = f.height - d, C = o.makeVList([{
                type: "kern",
                size: u.metrics.bigOpSpacing5
            }, {type: "elem", elem: k}, {type: "kern", size: S}, {
                type: "elem",
                elem: f
            }], "top", E, e), C.children[0].style.marginLeft = -g + "em";
            return c(["mop", "op-limits"], [C])
        }
        return t.value.symbol && (f.style.top = d + "em"), f
    }, v.katex = function (t, e, n) {
        var r = c(["k"], [o.mathsym("K", t.mode)]), i = c(["a"], [o.mathsym("A", t.mode)]);
        i.height = .75 * (i.height + .2), i.depth = .75 * (i.height - .2);
        var s = c(["t"], [o.mathsym("T", t.mode)]), a = c(["e"], [o.mathsym("E", t.mode)]);
        a.height = a.height - .2155, a.depth = a.depth + .2155;
        var u = c(["x"], [o.mathsym("X", t.mode)]);
        return c(["katex-logo", "mord"], [r, i, s, a, u], e.getColor())
    }, v.overline = function (t, e, n) {
        var r = b(t.value.body, e.withStyle(e.style.cramp())),
            s = u.metrics.defaultRuleThickness / e.style.sizeMultiplier,
            a = c([e.style.reset(), i.TEXT.cls(), "overline-line"]);
        a.height = s, a.maxFontSize = 1;
        var l = o.makeVList([{type: "elem", elem: r}, {type: "kern", size: 3 * s}, {
            type: "elem",
            elem: a
        }, {type: "kern", size: s}], "firstBaseline", null, e);
        return c(["overline", "mord"], [l], e.getColor())
    }, v.underline = function (t, e, n) {
        var r = b(t.value.body, e), s = u.metrics.defaultRuleThickness / e.style.sizeMultiplier,
            a = c([e.style.reset(), i.TEXT.cls(), "underline-line"]);
        a.height = s, a.maxFontSize = 1;
        var l = o.makeVList([{type: "kern", size: s}, {type: "elem", elem: a}, {
            type: "kern",
            size: 3 * s
        }, {type: "elem", elem: r}], "top", r.height, e);
        return c(["underline", "mord"], [l], e.getColor())
    }, v.sqrt = function (t, e, n) {
        var r = b(t.value.body, e.withStyle(e.style.cramp())),
            a = u.metrics.defaultRuleThickness / e.style.sizeMultiplier,
            l = c([e.style.reset(), i.TEXT.cls(), "sqrt-line"], [], e.getColor());
        l.height = a, l.maxFontSize = 1;
        var h = a;
        e.style.id < i.TEXT.id && (h = u.metrics.xHeight);
        var p = a + h / 4, f = (r.height + r.depth) * e.style.sizeMultiplier, d = f + p + a,
            g = c(["sqrt-sign"], [s.customSizedDelim("\\surd", d, !1, e, t.mode)], e.getColor()),
            m = g.height + g.depth - a;
        m > r.height + r.depth + p && (p = (p + m - r.height - r.depth) / 2);
        var y = -(r.height + p + a) + g.height;
        g.style.top = y + "em", g.height -= y, g.depth += y;
        var v;
        if (v = 0 === r.height && 0 === r.depth ? c() : o.makeVList([{type: "elem", elem: r}, {
            type: "kern",
            size: p
        }, {type: "elem", elem: l}, {type: "kern", size: a}], "firstBaseline", null, e), t.value.index) {
            var w = b(t.value.index, e.withStyle(i.SCRIPTSCRIPT)), x = c([e.style.reset(), i.SCRIPTSCRIPT.cls()], [w]),
                k = Math.max(g.height, v.height), S = Math.max(g.depth, v.depth), _ = .6 * (k - S),
                T = o.makeVList([{type: "elem", elem: x}], "shift", -_, e), C = c(["root"], [T]);
            return c(["sqrt", "mord"], [C, g, v])
        }
        return c(["sqrt", "mord"], [g, v])
    }, v.sizing = function (t, e, n) {
        var r = h(t.value.value, e.withSize(t.value.size), n),
            i = c(["mord"], [c(["sizing", "reset-" + e.size, t.value.size, e.style.cls()], r)]),
            s = o.sizingMultiplier[t.value.size];
        return i.maxFontSize = s * e.style.sizeMultiplier, i
    }, v.styling = function (t, e, n) {
        var r = {display: i.DISPLAY, text: i.TEXT, script: i.SCRIPT, scriptscript: i.SCRIPTSCRIPT},
            o = r[t.value.style], s = h(t.value.value, e.withStyle(o), n);
        return c([e.style.reset(), o.cls()], s)
    }, v.font = function (t, e, n) {
        var r = t.value.font;
        return b(t.value.body, e.withFont(r), n)
    }, v.delimsizing = function (t, e, n) {
        var r = t.value.value;
        return "." === r ? c([p[t.value.delimType]]) : c([p[t.value.delimType]], [s.sizedDelim(r, t.value.size, e, t.mode)])
    }, v.leftright = function (t, e, n) {
        for (var r = h(t.value.body, e.reset()), i = 0, o = 0, a = 0; a < r.length; a++) i = Math.max(r[a].height, i), o = Math.max(r[a].depth, o);
        i *= e.style.sizeMultiplier, o *= e.style.sizeMultiplier;
        var u;
        u = "." === t.value.left ? y(e) : s.leftRightDelim(t.value.left, i, o, e, t.mode), r.unshift(u);
        var l;
        return l = "." === t.value.right ? y(e) : s.leftRightDelim(t.value.right, i, o, e, t.mode), r.push(l), c(["minner", e.style.cls()], r, e.getColor())
    }, v.rule = function (t, e, n) {
        var r = c(["mord", "rule"], [], e.getColor()), i = 0;
        t.value.shift && (i = t.value.shift.number, "ex" === t.value.shift.unit && (i *= u.metrics.xHeight));
        var o = t.value.width.number;
        "ex" === t.value.width.unit && (o *= u.metrics.xHeight);
        var s = t.value.height.number;
        return "ex" === t.value.height.unit && (s *= u.metrics.xHeight),
            i /= e.style.sizeMultiplier, o /= e.style.sizeMultiplier, s /= e.style.sizeMultiplier, r.style.borderRightWidth = o + "em", r.style.borderTopWidth = s + "em", r.style.bottom = i + "em", r.width = o, r.height = s + i, r.depth = -i, r
    }, v.accent = function (t, e, n) {
        var r, i = t.value.base;
        if ("supsub" === t.type) {
            var s = t;
            t = s.value.base, i = t.value.base, s.value.base = i, r = b(s, e.reset(), n)
        }
        var a, l = b(i, e.withStyle(e.style.cramp()));
        if (m(i)) {
            var h = g(i), p = b(h, e.withStyle(e.style.cramp()));
            a = p.skew
        } else a = 0;
        var f = Math.min(l.height, u.metrics.xHeight),
            d = o.makeSymbol(t.value.accent, "Main-Regular", "math", e.getColor());
        d.italic = 0;
        var y = "\\vec" === t.value.accent ? "accent-vec" : null, v = c(["accent-body", y], [c([], [d])]);
        v = o.makeVList([{type: "elem", elem: l}, {type: "kern", size: -f}, {
            type: "elem",
            elem: v
        }], "firstBaseline", null, e), v.children[1].style.marginLeft = 2 * a + "em";
        var w = c(["mord", "accent"], [v]);
        return r ? (r.children[0] = w, r.height = Math.max(w.height, r.height), r.classes[0] = "mord", r) : w
    }, v.phantom = function (t, e, n) {
        var r = h(t.value.value, e.withPhantom(), n);
        return new o.makeFragment(r)
    };
    var b = function (t, e, n) {
        if (!t) return c();
        if (v[t.type]) {
            var i, s = v[t.type](t, e, n);
            return e.style !== e.parentStyle && (i = e.style.sizeMultiplier / e.parentStyle.sizeMultiplier, s.height *= i, s.depth *= i), e.size !== e.parentSize && (i = o.sizingMultiplier[e.size] / o.sizingMultiplier[e.parentSize], s.height *= i, s.depth *= i), s
        }
        throw new r("Got group of unknown type: '" + t.type + "'")
    }, w = function (t, e) {
        t = JSON.parse(JSON.stringify(t));
        var n = h(t, e), r = c(["base", e.style.cls()], n), i = c(["strut"]), o = c(["strut", "bottom"]);
        i.style.height = r.height + "em", o.style.height = r.height + r.depth + "em", o.style.verticalAlign = -r.depth + "em";
        var s = c(["katex-html"], [i, o, r]);
        return s.setAttribute("aria-hidden", "true"), s
    };
    t.exports = w
}, function (t, e, n) {
    var r = n(17), i = n(14), o = n(125), s = n(5), a = n(18), u = n(2), l = r.makeSpan, c = r.fontMap,
        h = function (t, e) {
            return a[e][t] && a[e][t].replace && (t = a[e][t].replace), new o.TextNode(t)
        }, p = function (t, e) {
            var n = e.font;
            if (!n) return null;
            var r = t.mode;
            if ("mathit" === n) return "italic";
            var o = t.value;
            if (u.contains(["\\imath", "\\jmath"], o)) return null;
            a[r][o] && a[r][o].replace && (o = a[r][o].replace);
            var s = c[n].fontName;
            return i.getCharacterMetrics(o, s) ? c[e.font].variant : null
        }, f = {};
    f.mathord = function (t, e) {
        var n = new o.MathNode("mi", [h(t.value, t.mode)]), r = p(t, e);
        return r && n.setAttribute("mathvariant", r), n
    }, f.textord = function (t, e) {
        var n, r = h(t.value, t.mode), i = p(t, e) || "normal";
        return /[0-9]/.test(t.value) ? (n = new o.MathNode("mn", [r]), e.font && n.setAttribute("mathvariant", i)) : (n = new o.MathNode("mi", [r]), n.setAttribute("mathvariant", i)), n
    }, f.bin = function (t) {
        var e = new o.MathNode("mo", [h(t.value, t.mode)]);
        return e
    }, f.rel = function (t) {
        var e = new o.MathNode("mo", [h(t.value, t.mode)]);
        return e
    }, f.open = function (t) {
        var e = new o.MathNode("mo", [h(t.value, t.mode)]);
        return e
    }, f.close = function (t) {
        var e = new o.MathNode("mo", [h(t.value, t.mode)]);
        return e
    }, f.inner = function (t) {
        var e = new o.MathNode("mo", [h(t.value, t.mode)]);
        return e
    }, f.punct = function (t) {
        var e = new o.MathNode("mo", [h(t.value, t.mode)]);
        return e.setAttribute("separator", "true"), e
    }, f.ordgroup = function (t, e) {
        var n = d(t.value, e), r = new o.MathNode("mrow", n);
        return r
    }, f.text = function (t, e) {
        var n = d(t.value.body, e), r = new o.MathNode("mtext", n);
        return r
    }, f.color = function (t, e) {
        var n = d(t.value.value, e), r = new o.MathNode("mstyle", n);
        return r.setAttribute("mathcolor", t.value.color), r
    }, f.supsub = function (t, e) {
        var n = [g(t.value.base, e)];
        t.value.sub && n.push(g(t.value.sub, e)), t.value.sup && n.push(g(t.value.sup, e));
        var r;
        r = t.value.sub ? t.value.sup ? "msubsup" : "msub" : "msup";
        var i = new o.MathNode(r, n);
        return i
    }, f.genfrac = function (t, e) {
        var n = new o.MathNode("mfrac", [g(t.value.numer, e), g(t.value.denom, e)]);
        if (t.value.hasBarLine || n.setAttribute("linethickness", "0px"), null != t.value.leftDelim || null != t.value.rightDelim) {
            var r = [];
            if (null != t.value.leftDelim) {
                var i = new o.MathNode("mo", [new o.TextNode(t.value.leftDelim)]);
                i.setAttribute("fence", "true"), r.push(i)
            }
            if (r.push(n), null != t.value.rightDelim) {
                var s = new o.MathNode("mo", [new o.TextNode(t.value.rightDelim)]);
                s.setAttribute("fence", "true"), r.push(s)
            }
            var a = new o.MathNode("mrow", r);
            return a
        }
        return n
    }, f.array = function (t, e) {
        return new o.MathNode("mtable", t.value.body.map(function (t) {
            return new o.MathNode("mtr", t.map(function (t) {
                return new o.MathNode("mtd", [g(t, e)])
            }))
        }))
    }, f.sqrt = function (t, e) {
        var n;
        return n = t.value.index ? new o.MathNode("mroot", [g(t.value.body, e), g(t.value.index, e)]) : new o.MathNode("msqrt", [g(t.value.body, e)])
    }, f.leftright = function (t, e) {
        var n = d(t.value.body, e);
        if ("." !== t.value.left) {
            var r = new o.MathNode("mo", [h(t.value.left, t.mode)]);
            r.setAttribute("fence", "true"), n.unshift(r)
        }
        if ("." !== t.value.right) {
            var i = new o.MathNode("mo", [h(t.value.right, t.mode)]);
            i.setAttribute("fence", "true"), n.push(i)
        }
        var s = new o.MathNode("mrow", n);
        return s
    }, f.accent = function (t, e) {
        var n = new o.MathNode("mo", [h(t.value.accent, t.mode)]), r = new o.MathNode("mover", [g(t.value.base, e), n]);
        return r.setAttribute("accent", "true"), r
    }, f.spacing = function (t) {
        var e;
        return "\\ " === t.value || "\\space" === t.value || " " === t.value || "~" === t.value ? e = new o.MathNode("mtext", [new o.TextNode(" ")]) : (e = new o.MathNode("mspace"), e.setAttribute("width", r.spacingFunctions[t.value].size)), e
    }, f.op = function (t) {
        var e;
        return e = t.value.symbol ? new o.MathNode("mo", [h(t.value.body, t.mode)]) : new o.MathNode("mi", [new o.TextNode(t.value.body.slice(1))])
    }, f.katex = function (t) {
        var e = new o.MathNode("mtext", [new o.TextNode("KaTeX")]);
        return e
    }, f.font = function (t, e) {
        var n = t.value.font;
        return g(t.value.body, e.withFont(n))
    }, f.delimsizing = function (t) {
        var e = [];
        "." !== t.value.value && e.push(h(t.value.value, t.mode));
        var n = new o.MathNode("mo", e);
        return "open" === t.value.delimType || "close" === t.value.delimType ? n.setAttribute("fence", "true") : n.setAttribute("fence", "false"), n
    }, f.styling = function (t, e) {
        var n = d(t.value.value, e), r = new o.MathNode("mstyle", n),
            i = {display: ["0", "true"], text: ["0", "false"], script: ["1", "false"], scriptscript: ["2", "false"]},
            s = i[t.value.style];
        return r.setAttribute("scriptlevel", s[0]), r.setAttribute("displaystyle", s[1]), r
    }, f.sizing = function (t, e) {
        var n = d(t.value.value, e), i = new o.MathNode("mstyle", n);
        return i.setAttribute("mathsize", r.sizingMultiplier[t.value.size] + "em"), i
    }, f.overline = function (t, e) {
        var n = new o.MathNode("mo", [new o.TextNode("‾")]);
        n.setAttribute("stretchy", "true");
        var r = new o.MathNode("mover", [g(t.value.body, e), n]);
        return r.setAttribute("accent", "true"), r
    }, f.underline = function (t, e) {
        var n = new o.MathNode("mo", [new o.TextNode("‾")]);
        n.setAttribute("stretchy", "true");
        var r = new o.MathNode("munder", [g(t.value.body, e), n]);
        return r.setAttribute("accentunder", "true"), r
    }, f.rule = function (t) {
        var e = new o.MathNode("mrow");
        return e
    }, f.llap = function (t, e) {
        var n = new o.MathNode("mpadded", [g(t.value.body, e)]);
        return n.setAttribute("lspace", "-1width"), n.setAttribute("width", "0px"), n
    }, f.rlap = function (t, e) {
        var n = new o.MathNode("mpadded", [g(t.value.body, e)]);
        return n.setAttribute("width", "0px"), n
    }, f.phantom = function (t, e, n) {
        var r = d(t.value.value, e);
        return new o.MathNode("mphantom", r)
    };
    var d = function (t, e) {
        for (var n = [], r = 0; r < t.length; r++) {
            var i = t[r];
            n.push(g(i, e))
        }
        return n
    }, g = function (t, e) {
        if (!t) return new o.MathNode("mrow");
        if (f[t.type]) return f[t.type](t, e);
        throw new s("Got group of unknown type: '" + t.type + "'")
    }, m = function (t, e, n) {
        var r = d(t, n), i = new o.MathNode("mrow", r), s = new o.MathNode("annotation", [new o.TextNode(e)]);
        s.setAttribute("encoding", "application/x-tex");
        var a = new o.MathNode("semantics", [i, s]), u = new o.MathNode("math", [a]);
        return l(["katex-mathml"], [u])
    };
    t.exports = m
}, function (t, e, n) {
    var r = n(118), i = n(119), o = n(17), s = n(116), a = n(44), u = n(16), l = o.makeSpan, c = function (t, e, n) {
        n = n || new a({});
        var o = u.TEXT;
        n.displayMode && (o = u.DISPLAY);
        var c = new s({style: o, size: "size5"}), h = i(t, e, c), p = r(t, c), f = l(["katex"], [h, p]);
        return n.displayMode ? l(["katex-display"], [f]) : f
    };
    t.exports = c
}, function (t, e, n) {
    var r = n(5), i = n(16), o = n(17), s = n(14), a = n(18), u = n(2), l = o.makeSpan, c = function (t, e) {
            return a.math[t] && a.math[t].replace ? s.getCharacterMetrics(a.math[t].replace, e) : s.getCharacterMetrics(t, e)
        }, h = function (t, e, n) {
            return o.makeSymbol(t, "Size" + e + "-Regular", n)
        }, p = function (t, e, n) {
            var r = l(["style-wrap", n.style.reset(), e.cls()], [t]), i = e.sizeMultiplier / n.style.sizeMultiplier;
            return r.height *= i, r.depth *= i, r.maxFontSize = e.sizeMultiplier, r
        }, f = function (t, e, n, r, i) {
            var a = o.makeSymbol(t, "Main-Regular", i), u = p(a, e, r);
            if (n) {
                var l = (1 - r.style.sizeMultiplier / e.sizeMultiplier) * s.metrics.axisHeight;
                u.style.top = l + "em", u.height -= l, u.depth += l
            }
            return u
        }, d = function (t, e, n, r, o) {
            var a = h(t, e, o), u = p(l(["delimsizing", "size" + e], [a], r.getColor()), i.TEXT, r);
            if (n) {
                var c = (1 - r.style.sizeMultiplier) * s.metrics.axisHeight;
                u.style.top = c + "em", u.height -= c, u.depth += c
            }
            return u
        }, g = function (t, e, n) {
            var r;
            "Size1-Regular" === e ? r = "delim-size1" : "Size4-Regular" === e && (r = "delim-size4");
            var i = l(["delimsizinginner", r], [l([], [o.makeSymbol(t, e, n)])]);
            return {type: "elem", elem: i}
        }, m = function (t, e, n, r, a) {
            var u, h, f, d;
            u = f = d = t, h = null;
            var m = "Size1-Regular";
            "\\uparrow" === t ? f = d = "⏐" : "\\Uparrow" === t ? f = d = "‖" : "\\downarrow" === t ? u = f = "⏐" : "\\Downarrow" === t ? u = f = "‖" : "\\updownarrow" === t ? (u = "\\uparrow", f = "⏐", d = "\\downarrow") : "\\Updownarrow" === t ? (u = "\\Uparrow", f = "‖", d = "\\Downarrow") : "[" === t || "\\lbrack" === t ? (u = "⎡", f = "⎢", d = "⎣", m = "Size4-Regular") : "]" === t || "\\rbrack" === t ? (u = "⎤", f = "⎥", d = "⎦", m = "Size4-Regular") : "\\lfloor" === t ? (f = u = "⎢", d = "⎣", m = "Size4-Regular") : "\\lceil" === t ? (u = "⎡", f = d = "⎢", m = "Size4-Regular") : "\\rfloor" === t ? (f = u = "⎥", d = "⎦", m = "Size4-Regular") : "\\rceil" === t ? (u = "⎤", f = d = "⎥", m = "Size4-Regular") : "(" === t ? (u = "⎛", f = "⎜", d = "⎝", m = "Size4-Regular") : ")" === t ? (u = "⎞", f = "⎟", d = "⎠", m = "Size4-Regular") : "\\{" === t || "\\lbrace" === t ? (u = "⎧", h = "⎨", d = "⎩", f = "⎪", m = "Size4-Regular") : "\\}" === t || "\\rbrace" === t ? (u = "⎫", h = "⎬", d = "⎭", f = "⎪", m = "Size4-Regular") : "\\lgroup" === t ? (u = "⎧", d = "⎩", f = "⎪", m = "Size4-Regular") : "\\rgroup" === t ? (u = "⎫", d = "⎭", f = "⎪", m = "Size4-Regular") : "\\lmoustache" === t ? (u = "⎧", d = "⎭", f = "⎪", m = "Size4-Regular") : "\\rmoustache" === t ? (u = "⎫", d = "⎩", f = "⎪", m = "Size4-Regular") : "\\surd" === t && (u = "", d = "⎷", f = "", m = "Size4-Regular");
            var y = c(u, m), v = y.height + y.depth, b = c(f, m), w = b.height + b.depth, x = c(d, m),
                k = x.height + x.depth, S = 0, _ = 1;
            if (null !== h) {
                var T = c(h, m);
                S = T.height + T.depth, _ = 2
            }
            var C = v + k + S, E = Math.ceil((e - C) / (_ * w)), A = C + E * _ * w, L = s.metrics.axisHeight;
            n && (L *= r.style.sizeMultiplier);
            var I = A / 2 - L, D = [];
            D.push(g(d, m, a));
            var R;
            if (null === h) for (R = 0; R < E; R++) D.push(g(f, m, a)); else {
                for (R = 0; R < E; R++) D.push(g(f, m, a));
                for (D.push(g(h, m, a)), R = 0; R < E; R++) D.push(g(f, m, a))
            }
            D.push(g(u, m, a));
            var N = o.makeVList(D, "bottom", I, r);
            return p(l(["delimsizing", "mult"], [N], r.getColor()), i.TEXT, r)
        },
        y = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\surd"],
        v = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache"],
        b = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], w = [0, 1.2, 1.8, 2.4, 3],
        x = function (t, e, n, i) {
            if ("<" === t || "\\lt" === t ? t = "\\langle" : ">" !== t && "\\gt" !== t || (t = "\\rangle"), u.contains(y, t) || u.contains(b, t)) return d(t, e, !1, n, i);
            if (u.contains(v, t)) return m(t, w[e], !1, n, i);
            throw new r("Illegal delimiter: '" + t + "'")
        }, k = [{type: "small", style: i.SCRIPTSCRIPT}, {type: "small", style: i.SCRIPT}, {
            type: "small",
            style: i.TEXT
        }, {type: "large", size: 1}, {type: "large", size: 2}, {type: "large", size: 3}, {type: "large", size: 4}],
        S = [{type: "small", style: i.SCRIPTSCRIPT}, {type: "small", style: i.SCRIPT}, {
            type: "small",
            style: i.TEXT
        }, {type: "stack"}], _ = [{type: "small", style: i.SCRIPTSCRIPT}, {type: "small", style: i.SCRIPT}, {
            type: "small",
            style: i.TEXT
        }, {type: "large", size: 1}, {type: "large", size: 2}, {type: "large", size: 3}, {
            type: "large",
            size: 4
        }, {type: "stack"}], T = function (t) {
            return "small" === t.type ? "Main-Regular" : "large" === t.type ? "Size" + t.size + "-Regular" : "stack" === t.type ? "Size4-Regular" : void 0
        }, C = function (t, e, n, r) {
            for (var i = Math.min(2, 3 - r.style.size), o = i; o < n.length && "stack" !== n[o].type; o++) {
                var s = c(t, T(n[o])), a = s.height + s.depth;
                if ("small" === n[o].type && (a *= n[o].style.sizeMultiplier), a > e) return n[o]
            }
            return n[n.length - 1]
        }, E = function (t, e, n, r, i) {
            "<" === t || "\\lt" === t ? t = "\\langle" : ">" !== t && "\\gt" !== t || (t = "\\rangle");
            var o;
            o = u.contains(b, t) ? k : u.contains(y, t) ? _ : S;
            var s = C(t, e, o, r);
            return "small" === s.type ? f(t, s.style, n, r, i) : "large" === s.type ? d(t, s.size, n, r, i) : "stack" === s.type ? m(t, e, n, r, i) : void 0
        }, A = function (t, e, n, r, i) {
            var o = s.metrics.axisHeight * r.style.sizeMultiplier, a = 901, u = 5 / s.metrics.ptPerEm,
                l = Math.max(e - o, n + o), c = Math.max(l / 500 * a, 2 * l - u);
            return E(t, c, !0, r, i)
        };
    t.exports = {sizedDelim: x, customSizedDelim: E, leftRightDelim: A}
}, function (t, e, n) {
    function r(t, e) {
        for (var n = [], r = [n], i = []; ;) {
            var o = t.parseExpression(!1, null);
            n.push(new u("ordgroup", o, t.mode));
            var s = t.nextToken.text;
            if ("&" === s) t.consume(); else {
                if ("\\end" === s) break;
                if ("\\\\" !== s && "\\cr" !== s) {
                    var l = Math.min(t.pos + 1, t.lexer._input.length);
                    throw new a("Expected & or \\\\ or \\end", t.lexer, l)
                }
                var c = t.parseFunction();
                i.push(c.value.size), n = [], r.push(n)
            }
        }
        return e.body = r, e.rowGaps = i, new u(e.type, e, t.mode)
    }

    function i(e, n, r) {
        "string" == typeof e && (e = [e]), "number" == typeof n && (n = {numArgs: n});
        for (var i = {
            numArgs: n.numArgs || 0,
            argTypes: n.argTypes,
            greediness: 1,
            allowedInText: !!n.allowedInText,
            numOptionalArgs: n.numOptionalArgs || 0,
            handler: r
        }, o = 0; o < e.length; ++o) t.exports[e[o]] = i
    }

    var o = n(14), s = n(46), a = n(5), u = s.ParseNode;
    i("array", {numArgs: 1}, function (t, e) {
        var n = e[0];
        n = n.value.map ? n.value : [n];
        var i = n.map(function (e) {
            var n = e.value;
            if ("lcr".indexOf(n) !== -1) return {type: "align", align: n};
            if ("|" === n) return {type: "separator", separator: "|"};
            throw new a("Unknown column alignment: " + e.value, t.lexer, t.positions[1])
        }), o = {type: "array", cols: i, hskipBeforeAndAfter: !0};
        return o = r(t.parser, o)
    }), i(["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"], {}, function (t) {
        var e = {
            matrix: null,
            pmatrix: ["(", ")"],
            bmatrix: ["[", "]"],
            Bmatrix: ["\\{", "\\}"],
            vmatrix: ["|", "|"],
            Vmatrix: ["\\Vert", "\\Vert"]
        }[t.envName], n = {type: "array", hskipBeforeAndAfter: !1};
        return n = r(t.parser, n), e && (n = new u("leftright", {body: [n], left: e[0], right: e[1]}, t.mode)), n
    }), i("cases", {}, function (t) {
        var e = {
            type: "array",
            arraystretch: 1.2,
            cols: [{type: "align", align: "l", pregap: 0, postgap: o.metrics.quad}, {
                type: "align",
                align: "l",
                pregap: 0,
                postgap: 0
            }]
        };
        return e = r(t.parser, e), e = new u("leftright", {body: [e], left: "\\{", right: "."}, t.mode)
    }), i("aligned", {}, function (t) {
        var e = {type: "array", cols: []};
        e = r(t.parser, e);
        var n = new u("ordgroup", [], t.mode), i = 0;
        e.value.body.forEach(function (t) {
            var e;
            for (e = 1; e < t.length; e += 2) t[e].value.unshift(n);
            i < t.length && (i = t.length)
        });
        for (var o = 0; o < i; ++o) {
            var s = "r", a = 0;
            o % 2 === 1 ? s = "l" : o > 0 && (a = 2), e.value.cols[o] = {type: "align", align: s, pregap: a, postgap: 0}
        }
        return e
    })
}, function (t, e) {
    t.exports = {
        "AMS-Regular": {
            65: [0, .68889, 0, 0],
            66: [0, .68889, 0, 0],
            67: [0, .68889, 0, 0],
            68: [0, .68889, 0, 0],
            69: [0, .68889, 0, 0],
            70: [0, .68889, 0, 0],
            71: [0, .68889, 0, 0],
            72: [0, .68889, 0, 0],
            73: [0, .68889, 0, 0],
            74: [.16667, .68889, 0, 0],
            75: [0, .68889, 0, 0],
            76: [0, .68889, 0, 0],
            77: [0, .68889, 0, 0],
            78: [0, .68889, 0, 0],
            79: [.16667, .68889, 0, 0],
            80: [0, .68889, 0, 0],
            81: [.16667, .68889, 0, 0],
            82: [0, .68889, 0, 0],
            83: [0, .68889, 0, 0],
            84: [0, .68889, 0, 0],
            85: [0, .68889, 0, 0],
            86: [0, .68889, 0, 0],
            87: [0, .68889, 0, 0],
            88: [0, .68889, 0, 0],
            89: [0, .68889, 0, 0],
            90: [0, .68889, 0, 0],
            107: [0, .68889, 0, 0],
            165: [0, .675, .025, 0],
            174: [.15559, .69224, 0, 0],
            240: [0, .68889, 0, 0],
            295: [0, .68889, 0, 0],
            710: [0, .825, 0, 0],
            732: [0, .9, 0, 0],
            770: [0, .825, 0, 0],
            771: [0, .9, 0, 0],
            989: [.08167, .58167, 0, 0],
            1008: [0, .43056, .04028, 0],
            8245: [0, .54986, 0, 0],
            8463: [0, .68889, 0, 0],
            8487: [0, .68889, 0, 0],
            8498: [0, .68889, 0, 0],
            8502: [0, .68889, 0, 0],
            8503: [0, .68889, 0, 0],
            8504: [0, .68889, 0, 0],
            8513: [0, .68889, 0, 0],
            8592: [-.03598, .46402, 0, 0],
            8594: [-.03598, .46402, 0, 0],
            8602: [-.13313, .36687, 0, 0],
            8603: [-.13313, .36687, 0, 0],
            8606: [.01354, .52239, 0, 0],
            8608: [.01354, .52239, 0, 0],
            8610: [.01354, .52239, 0, 0],
            8611: [.01354, .52239, 0, 0],
            8619: [0, .54986, 0, 0],
            8620: [0, .54986, 0, 0],
            8621: [-.13313, .37788, 0, 0],
            8622: [-.13313, .36687, 0, 0],
            8624: [0, .69224, 0, 0],
            8625: [0, .69224, 0, 0],
            8630: [0, .43056, 0, 0],
            8631: [0, .43056, 0, 0],
            8634: [.08198, .58198, 0, 0],
            8635: [.08198, .58198, 0, 0],
            8638: [.19444, .69224, 0, 0],
            8639: [.19444, .69224, 0, 0],
            8642: [.19444, .69224, 0, 0],
            8643: [.19444, .69224, 0, 0],
            8644: [.1808, .675, 0, 0],
            8646: [.1808, .675, 0, 0],
            8647: [.1808, .675, 0, 0],
            8648: [.19444, .69224, 0, 0],
            8649: [.1808, .675, 0, 0],
            8650: [.19444, .69224, 0, 0],
            8651: [.01354, .52239, 0, 0],
            8652: [.01354, .52239, 0, 0],
            8653: [-.13313, .36687, 0, 0],
            8654: [-.13313, .36687, 0, 0],
            8655: [-.13313, .36687, 0, 0],
            8666: [.13667, .63667, 0, 0],
            8667: [.13667, .63667, 0, 0],
            8669: [-.13313, .37788, 0, 0],
            8672: [-.064, .437, 0, 0],
            8674: [-.064, .437, 0, 0],
            8705: [0, .825, 0, 0],
            8708: [0, .68889, 0, 0],
            8709: [.08167, .58167, 0, 0],
            8717: [0, .43056, 0, 0],
            8722: [-.03598, .46402, 0, 0],
            8724: [.08198, .69224, 0, 0],
            8726: [.08167, .58167, 0, 0],
            8733: [0, .69224, 0, 0],
            8736: [0, .69224, 0, 0],
            8737: [0, .69224, 0, 0],
            8738: [.03517, .52239, 0, 0],
            8739: [.08167, .58167, 0, 0],
            8740: [.25142, .74111, 0, 0],
            8741: [.08167, .58167, 0, 0],
            8742: [.25142, .74111, 0, 0],
            8756: [0, .69224, 0, 0],
            8757: [0, .69224, 0, 0],
            8764: [-.13313, .36687, 0, 0],
            8765: [-.13313, .37788, 0, 0],
            8769: [-.13313, .36687, 0, 0],
            8770: [-.03625, .46375, 0, 0],
            8774: [.30274, .79383, 0, 0],
            8776: [-.01688, .48312, 0, 0],
            8778: [.08167, .58167, 0, 0],
            8782: [.06062, .54986, 0, 0],
            8783: [.06062, .54986, 0, 0],
            8785: [.08198, .58198, 0, 0],
            8786: [.08198, .58198, 0, 0],
            8787: [.08198, .58198, 0, 0],
            8790: [0, .69224, 0, 0],
            8791: [.22958, .72958, 0, 0],
            8796: [.08198, .91667, 0, 0],
            8806: [.25583, .75583, 0, 0],
            8807: [.25583, .75583, 0, 0],
            8808: [.25142, .75726, 0, 0],
            8809: [.25142, .75726, 0, 0],
            8812: [.25583, .75583, 0, 0],
            8814: [.20576, .70576, 0, 0],
            8815: [.20576, .70576, 0, 0],
            8816: [.30274, .79383, 0, 0],
            8817: [.30274, .79383, 0, 0],
            8818: [.22958, .72958, 0, 0],
            8819: [.22958, .72958, 0, 0],
            8822: [.1808, .675, 0, 0],
            8823: [.1808, .675, 0, 0],
            8828: [.13667, .63667, 0, 0],
            8829: [.13667, .63667, 0, 0],
            8830: [.22958, .72958, 0, 0],
            8831: [.22958, .72958, 0, 0],
            8832: [.20576, .70576, 0, 0],
            8833: [.20576, .70576, 0, 0],
            8840: [.30274, .79383, 0, 0],
            8841: [.30274, .79383, 0, 0],
            8842: [.13597, .63597, 0, 0],
            8843: [.13597, .63597, 0, 0],
            8847: [.03517, .54986, 0, 0],
            8848: [.03517, .54986, 0, 0],
            8858: [.08198, .58198, 0, 0],
            8859: [.08198, .58198, 0, 0],
            8861: [.08198, .58198, 0, 0],
            8862: [0, .675, 0, 0],
            8863: [0, .675, 0, 0],
            8864: [0, .675, 0, 0],
            8865: [0, .675, 0, 0],
            8872: [0, .69224, 0, 0],
            8873: [0, .69224, 0, 0],
            8874: [0, .69224, 0, 0],
            8876: [0, .68889, 0, 0],
            8877: [0, .68889, 0, 0],
            8878: [0, .68889, 0, 0],
            8879: [0, .68889, 0, 0],
            8882: [.03517, .54986, 0, 0],
            8883: [.03517, .54986, 0, 0],
            8884: [.13667, .63667, 0, 0],
            8885: [.13667, .63667, 0, 0],
            8888: [0, .54986, 0, 0],
            8890: [.19444, .43056, 0, 0],
            8891: [.19444, .69224, 0, 0],
            8892: [.19444, .69224, 0, 0],
            8901: [0, .54986, 0, 0],
            8903: [.08167, .58167, 0, 0],
            8905: [.08167, .58167, 0, 0],
            8906: [.08167, .58167, 0, 0],
            8907: [0, .69224, 0, 0],
            8908: [0, .69224, 0, 0],
            8909: [-.03598, .46402, 0, 0],
            8910: [0, .54986, 0, 0],
            8911: [0, .54986, 0, 0],
            8912: [.03517, .54986, 0, 0],
            8913: [.03517, .54986, 0, 0],
            8914: [0, .54986, 0, 0],
            8915: [0, .54986, 0, 0],
            8916: [0, .69224, 0, 0],
            8918: [.0391, .5391, 0, 0],
            8919: [.0391, .5391, 0, 0],
            8920: [.03517, .54986, 0, 0],
            8921: [.03517, .54986, 0, 0],
            8922: [.38569, .88569, 0, 0],
            8923: [.38569, .88569, 0, 0],
            8926: [.13667, .63667, 0, 0],
            8927: [.13667, .63667, 0, 0],
            8928: [.30274, .79383, 0, 0],
            8929: [.30274, .79383, 0, 0],
            8934: [.23222, .74111, 0, 0],
            8935: [.23222, .74111, 0, 0],
            8936: [.23222, .74111, 0, 0],
            8937: [.23222, .74111, 0, 0],
            8938: [.20576, .70576, 0, 0],
            8939: [.20576, .70576, 0, 0],
            8940: [.30274, .79383, 0, 0],
            8941: [.30274, .79383, 0, 0],
            8994: [.19444, .69224, 0, 0],
            8995: [.19444, .69224, 0, 0],
            9416: [.15559, .69224, 0, 0],
            9484: [0, .69224, 0, 0],
            9488: [0, .69224, 0, 0],
            9492: [0, .37788, 0, 0],
            9496: [0, .37788, 0, 0],
            9585: [.19444, .68889, 0, 0],
            9586: [.19444, .74111, 0, 0],
            9632: [0, .675, 0, 0],
            9633: [0, .675, 0, 0],
            9650: [0, .54986, 0, 0],
            9651: [0, .54986, 0, 0],
            9654: [.03517, .54986, 0, 0],
            9660: [0, .54986, 0, 0],
            9661: [0, .54986, 0, 0],
            9664: [.03517, .54986, 0, 0],
            9674: [.11111, .69224, 0, 0],
            9733: [.19444, .69224, 0, 0],
            10003: [0, .69224, 0, 0],
            10016: [0, .69224, 0, 0],
            10731: [.11111, .69224, 0, 0],
            10846: [.19444, .75583, 0, 0],
            10877: [.13667, .63667, 0, 0],
            10878: [.13667, .63667, 0, 0],
            10885: [.25583, .75583, 0, 0],
            10886: [.25583, .75583, 0, 0],
            10887: [.13597, .63597, 0, 0],
            10888: [.13597, .63597, 0, 0],
            10889: [.26167, .75726, 0, 0],
            10890: [.26167, .75726, 0, 0],
            10891: [.48256, .98256, 0, 0],
            10892: [.48256, .98256, 0, 0],
            10901: [.13667, .63667, 0, 0],
            10902: [.13667, .63667, 0, 0],
            10933: [.25142, .75726, 0, 0],
            10934: [.25142, .75726, 0, 0],
            10935: [.26167, .75726, 0, 0],
            10936: [.26167, .75726, 0, 0],
            10937: [.26167, .75726, 0, 0],
            10938: [.26167, .75726, 0, 0],
            10949: [.25583, .75583, 0, 0],
            10950: [.25583, .75583, 0, 0],
            10955: [.28481, .79383, 0, 0],
            10956: [.28481, .79383, 0, 0],
            57350: [.08167, .58167, 0, 0],
            57351: [.08167, .58167, 0, 0],
            57352: [.08167, .58167, 0, 0],
            57353: [0, .43056, .04028, 0],
            57356: [.25142, .75726, 0, 0],
            57357: [.25142, .75726, 0, 0],
            57358: [.41951, .91951, 0, 0],
            57359: [.30274, .79383, 0, 0],
            57360: [.30274, .79383, 0, 0],
            57361: [.41951, .91951, 0, 0],
            57366: [.25142, .75726, 0, 0],
            57367: [.25142, .75726, 0, 0],
            57368: [.25142, .75726, 0, 0],
            57369: [.25142, .75726, 0, 0],
            57370: [.13597, .63597, 0, 0],
            57371: [.13597, .63597, 0, 0]
        },
        "Caligraphic-Regular": {
            48: [0, .43056, 0, 0],
            49: [0, .43056, 0, 0],
            50: [0, .43056, 0, 0],
            51: [.19444, .43056, 0, 0],
            52: [.19444, .43056, 0, 0],
            53: [.19444, .43056, 0, 0],
            54: [0, .64444, 0, 0],
            55: [.19444, .43056, 0, 0],
            56: [0, .64444, 0, 0],
            57: [.19444, .43056, 0, 0],
            65: [0, .68333, 0, .19445],
            66: [0, .68333, .03041, .13889],
            67: [0, .68333, .05834, .13889],
            68: [0, .68333, .02778, .08334],
            69: [0, .68333, .08944, .11111],
            70: [0, .68333, .09931, .11111],
            71: [.09722, .68333, .0593, .11111],
            72: [0, .68333, .00965, .11111],
            73: [0, .68333, .07382, 0],
            74: [.09722, .68333, .18472, .16667],
            75: [0, .68333, .01445, .05556],
            76: [0, .68333, 0, .13889],
            77: [0, .68333, 0, .13889],
            78: [0, .68333, .14736, .08334],
            79: [0, .68333, .02778, .11111],
            80: [0, .68333, .08222, .08334],
            81: [.09722, .68333, 0, .11111],
            82: [0, .68333, 0, .08334],
            83: [0, .68333, .075, .13889],
            84: [0, .68333, .25417, 0],
            85: [0, .68333, .09931, .08334],
            86: [0, .68333, .08222, 0],
            87: [0, .68333, .08222, .08334],
            88: [0, .68333, .14643, .13889],
            89: [.09722, .68333, .08222, .08334],
            90: [0, .68333, .07944, .13889]
        },
        "Fraktur-Regular": {
            33: [0, .69141, 0, 0],
            34: [0, .69141, 0, 0],
            38: [0, .69141, 0, 0],
            39: [0, .69141, 0, 0],
            40: [.24982, .74947, 0, 0],
            41: [.24982, .74947, 0, 0],
            42: [0, .62119, 0, 0],
            43: [.08319, .58283, 0, 0],
            44: [0, .10803, 0, 0],
            45: [.08319, .58283, 0, 0],
            46: [0, .10803, 0, 0],
            47: [.24982, .74947, 0, 0],
            48: [0, .47534, 0, 0],
            49: [0, .47534, 0, 0],
            50: [0, .47534, 0, 0],
            51: [.18906, .47534, 0, 0],
            52: [.18906, .47534, 0, 0],
            53: [.18906, .47534, 0, 0],
            54: [0, .69141, 0, 0],
            55: [.18906, .47534, 0, 0],
            56: [0, .69141, 0, 0],
            57: [.18906, .47534, 0, 0],
            58: [0, .47534, 0, 0],
            59: [.12604, .47534, 0, 0],
            61: [-.13099, .36866, 0, 0],
            63: [0, .69141, 0, 0],
            65: [0, .69141, 0, 0],
            66: [0, .69141, 0, 0],
            67: [0, .69141, 0, 0],
            68: [0, .69141, 0, 0],
            69: [0, .69141, 0, 0],
            70: [.12604, .69141, 0, 0],
            71: [0, .69141, 0, 0],
            72: [.06302, .69141, 0, 0],
            73: [0, .69141, 0, 0],
            74: [.12604, .69141, 0, 0],
            75: [0, .69141, 0, 0],
            76: [0, .69141, 0, 0],
            77: [0, .69141, 0, 0],
            78: [0, .69141, 0, 0],
            79: [0, .69141, 0, 0],
            80: [.18906, .69141, 0, 0],
            81: [.03781, .69141, 0, 0],
            82: [0, .69141, 0, 0],
            83: [0, .69141, 0, 0],
            84: [0, .69141, 0, 0],
            85: [0, .69141, 0, 0],
            86: [0, .69141, 0, 0],
            87: [0, .69141, 0, 0],
            88: [0, .69141, 0, 0],
            89: [.18906, .69141, 0, 0],
            90: [.12604, .69141, 0, 0],
            91: [.24982, .74947, 0, 0],
            93: [.24982, .74947, 0, 0],
            94: [0, .69141, 0, 0],
            97: [0, .47534, 0, 0],
            98: [0, .69141, 0, 0],
            99: [0, .47534, 0, 0],
            100: [0, .62119, 0, 0],
            101: [0, .47534, 0, 0],
            102: [.18906, .69141, 0, 0],
            103: [.18906, .47534, 0, 0],
            104: [.18906, .69141, 0, 0],
            105: [0, .69141, 0, 0],
            106: [0, .69141, 0, 0],
            107: [0, .69141, 0, 0],
            108: [0, .69141, 0, 0],
            109: [0, .47534, 0, 0],
            110: [0, .47534, 0, 0],
            111: [0, .47534, 0, 0],
            112: [.18906, .52396, 0, 0],
            113: [.18906, .47534, 0, 0],
            114: [0, .47534, 0, 0],
            115: [0, .47534, 0, 0],
            116: [0, .62119, 0, 0],
            117: [0, .47534, 0, 0],
            118: [0, .52396, 0, 0],
            119: [0, .52396, 0, 0],
            120: [.18906, .47534, 0, 0],
            121: [.18906, .47534, 0, 0],
            122: [.18906, .47534, 0, 0],
            8216: [0, .69141, 0, 0],
            8217: [0, .69141, 0, 0],
            58112: [0, .62119, 0, 0],
            58113: [0, .62119, 0, 0],
            58114: [.18906, .69141, 0, 0],
            58115: [.18906, .69141, 0, 0],
            58116: [.18906, .47534, 0, 0],
            58117: [0, .69141, 0, 0],
            58118: [0, .62119, 0, 0],
            58119: [0, .47534, 0, 0]
        },
        "Main-Bold": {
            33: [0, .69444, 0, 0],
            34: [0, .69444, 0, 0],
            35: [.19444, .69444, 0, 0],
            36: [.05556, .75, 0, 0],
            37: [.05556, .75, 0, 0],
            38: [0, .69444, 0, 0],
            39: [0, .69444, 0, 0],
            40: [.25, .75, 0, 0],
            41: [.25, .75, 0, 0],
            42: [0, .75, 0, 0],
            43: [.13333, .63333, 0, 0],
            44: [.19444, .15556, 0, 0],
            45: [0, .44444, 0, 0],
            46: [0, .15556, 0, 0],
            47: [.25, .75, 0, 0],
            48: [0, .64444, 0, 0],
            49: [0, .64444, 0, 0],
            50: [0, .64444, 0, 0],
            51: [0, .64444, 0, 0],
            52: [0, .64444, 0, 0],
            53: [0, .64444, 0, 0],
            54: [0, .64444, 0, 0],
            55: [0, .64444, 0, 0],
            56: [0, .64444, 0, 0],
            57: [0, .64444, 0, 0],
            58: [0, .44444, 0, 0],
            59: [.19444, .44444, 0, 0],
            60: [.08556, .58556, 0, 0],
            61: [-.10889, .39111, 0, 0],
            62: [.08556, .58556, 0, 0],
            63: [0, .69444, 0, 0],
            64: [0, .69444, 0, 0],
            65: [0, .68611, 0, 0],
            66: [0, .68611, 0, 0],
            67: [0, .68611, 0, 0],
            68: [0, .68611, 0, 0],
            69: [0, .68611, 0, 0],
            70: [0, .68611, 0, 0],
            71: [0, .68611, 0, 0],
            72: [0, .68611, 0, 0],
            73: [0, .68611, 0, 0],
            74: [0, .68611, 0, 0],
            75: [0, .68611, 0, 0],
            76: [0, .68611, 0, 0],
            77: [0, .68611, 0, 0],
            78: [0, .68611, 0, 0],
            79: [0, .68611, 0, 0],
            80: [0, .68611, 0, 0],
            81: [.19444, .68611, 0, 0],
            82: [0, .68611, 0, 0],
            83: [0, .68611, 0, 0],
            84: [0, .68611, 0, 0],
            85: [0, .68611, 0, 0],
            86: [0, .68611, .01597, 0],
            87: [0, .68611, .01597, 0],
            88: [0, .68611, 0, 0],
            89: [0, .68611, .02875, 0],
            90: [0, .68611, 0, 0],
            91: [.25, .75, 0, 0],
            92: [.25, .75, 0, 0],
            93: [.25, .75, 0, 0],
            94: [0, .69444, 0, 0],
            95: [.31, .13444, .03194, 0],
            96: [0, .69444, 0, 0],
            97: [0, .44444, 0, 0],
            98: [0, .69444, 0, 0],
            99: [0, .44444, 0, 0],
            100: [0, .69444, 0, 0],
            101: [0, .44444, 0, 0],
            102: [0, .69444, .10903, 0],
            103: [.19444, .44444, .01597, 0],
            104: [0, .69444, 0, 0],
            105: [0, .69444, 0, 0],
            106: [.19444, .69444, 0, 0],
            107: [0, .69444, 0, 0],
            108: [0, .69444, 0, 0],
            109: [0, .44444, 0, 0],
            110: [0, .44444, 0, 0],
            111: [0, .44444, 0, 0],
            112: [.19444, .44444, 0, 0],
            113: [.19444, .44444, 0, 0],
            114: [0, .44444, 0, 0],
            115: [0, .44444, 0, 0],
            116: [0, .63492, 0, 0],
            117: [0, .44444, 0, 0],
            118: [0, .44444, .01597, 0],
            119: [0, .44444, .01597, 0],
            120: [0, .44444, 0, 0],
            121: [.19444, .44444, .01597, 0],
            122: [0, .44444, 0, 0],
            123: [.25, .75, 0, 0],
            124: [.25, .75, 0, 0],
            125: [.25, .75, 0, 0],
            126: [.35, .34444, 0, 0],
            168: [0, .69444, 0, 0],
            172: [0, .44444, 0, 0],
            175: [0, .59611, 0, 0],
            176: [0, .69444, 0, 0],
            177: [.13333, .63333, 0, 0],
            180: [0, .69444, 0, 0],
            215: [.13333, .63333, 0, 0],
            247: [.13333, .63333, 0, 0],
            305: [0, .44444, 0, 0],
            567: [.19444, .44444, 0, 0],
            710: [0, .69444, 0, 0],
            711: [0, .63194, 0, 0],
            713: [0, .59611, 0, 0],
            714: [0, .69444, 0, 0],
            715: [0, .69444, 0, 0],
            728: [0, .69444, 0, 0],
            729: [0, .69444, 0, 0],
            730: [0, .69444, 0, 0],
            732: [0, .69444, 0, 0],
            768: [0, .69444, 0, 0],
            769: [0, .69444, 0, 0],
            770: [0, .69444, 0, 0],
            771: [0, .69444, 0, 0],
            772: [0, .59611, 0, 0],
            774: [0, .69444, 0, 0],
            775: [0, .69444, 0, 0],
            776: [0, .69444, 0, 0],
            778: [0, .69444, 0, 0],
            779: [0, .69444, 0, 0],
            780: [0, .63194, 0, 0],
            824: [.19444, .69444, 0, 0],
            915: [0, .68611, 0, 0],
            916: [0, .68611, 0, 0],
            920: [0, .68611, 0, 0],
            923: [0, .68611, 0, 0],
            926: [0, .68611, 0, 0],
            928: [0, .68611, 0, 0],
            931: [0, .68611, 0, 0],
            933: [0, .68611, 0, 0],
            934: [0, .68611, 0, 0],
            936: [0, .68611, 0, 0],
            937: [0, .68611, 0, 0],
            8211: [0, .44444, .03194, 0],
            8212: [0, .44444, .03194, 0],
            8216: [0, .69444, 0, 0],
            8217: [0, .69444, 0, 0],
            8220: [0, .69444, 0, 0],
            8221: [0, .69444, 0, 0],
            8224: [.19444, .69444, 0, 0],
            8225: [.19444, .69444, 0, 0],
            8242: [0, .55556, 0, 0],
            8407: [0, .72444, .15486, 0],
            8463: [0, .69444, 0, 0],
            8465: [0, .69444, 0, 0],
            8467: [0, .69444, 0, 0],
            8472: [.19444, .44444, 0, 0],
            8476: [0, .69444, 0, 0],
            8501: [0, .69444, 0, 0],
            8592: [-.10889, .39111, 0, 0],
            8593: [.19444, .69444, 0, 0],
            8594: [-.10889, .39111, 0, 0],
            8595: [.19444, .69444, 0, 0],
            8596: [-.10889, .39111, 0, 0],
            8597: [.25, .75, 0, 0],
            8598: [.19444, .69444, 0, 0],
            8599: [.19444, .69444, 0, 0],
            8600: [.19444, .69444, 0, 0],
            8601: [.19444, .69444, 0, 0],
            8636: [-.10889, .39111, 0, 0],
            8637: [-.10889, .39111, 0, 0],
            8640: [-.10889, .39111, 0, 0],
            8641: [-.10889, .39111, 0, 0],
            8656: [-.10889, .39111, 0, 0],
            8657: [.19444, .69444, 0, 0],
            8658: [-.10889, .39111, 0, 0],
            8659: [.19444, .69444, 0, 0],
            8660: [-.10889, .39111, 0, 0],
            8661: [.25, .75, 0, 0],
            8704: [0, .69444, 0, 0],
            8706: [0, .69444, .06389, 0],
            8707: [0, .69444, 0, 0],
            8709: [.05556, .75, 0, 0],
            8711: [0, .68611, 0, 0],
            8712: [.08556, .58556, 0, 0],
            8715: [.08556, .58556, 0, 0],
            8722: [.13333, .63333, 0, 0],
            8723: [.13333, .63333, 0, 0],
            8725: [.25, .75, 0, 0],
            8726: [.25, .75, 0, 0],
            8727: [-.02778, .47222, 0, 0],
            8728: [-.02639, .47361, 0, 0],
            8729: [-.02639, .47361, 0, 0],
            8730: [.18, .82, 0, 0],
            8733: [0, .44444, 0, 0],
            8734: [0, .44444, 0, 0],
            8736: [0, .69224, 0, 0],
            8739: [.25, .75, 0, 0],
            8741: [.25, .75, 0, 0],
            8743: [0, .55556, 0, 0],
            8744: [0, .55556, 0, 0],
            8745: [0, .55556, 0, 0],
            8746: [0, .55556, 0, 0],
            8747: [.19444, .69444, .12778, 0],
            8764: [-.10889, .39111, 0, 0],
            8768: [.19444, .69444, 0, 0],
            8771: [.00222, .50222, 0, 0],
            8776: [.02444, .52444, 0, 0],
            8781: [.00222, .50222, 0, 0],
            8801: [.00222, .50222, 0, 0],
            8804: [.19667, .69667, 0, 0],
            8805: [.19667, .69667, 0, 0],
            8810: [.08556, .58556, 0, 0],
            8811: [.08556, .58556, 0, 0],
            8826: [.08556, .58556, 0, 0],
            8827: [.08556, .58556, 0, 0],
            8834: [.08556, .58556, 0, 0],
            8835: [.08556, .58556, 0, 0],
            8838: [.19667, .69667, 0, 0],
            8839: [.19667, .69667, 0, 0],
            8846: [0, .55556, 0, 0],
            8849: [.19667, .69667, 0, 0],
            8850: [.19667, .69667, 0, 0],
            8851: [0, .55556, 0, 0],
            8852: [0, .55556, 0, 0],
            8853: [.13333, .63333, 0, 0],
            8854: [.13333, .63333, 0, 0],
            8855: [.13333, .63333, 0, 0],
            8856: [.13333, .63333, 0, 0],
            8857: [.13333, .63333, 0, 0],
            8866: [0, .69444, 0, 0],
            8867: [0, .69444, 0, 0],
            8868: [0, .69444, 0, 0],
            8869: [0, .69444, 0, 0],
            8900: [-.02639, .47361, 0, 0],
            8901: [-.02639, .47361, 0, 0],
            8902: [-.02778, .47222, 0, 0],
            8968: [.25, .75, 0, 0],
            8969: [.25, .75, 0, 0],
            8970: [.25, .75, 0, 0],
            8971: [.25, .75, 0, 0],
            8994: [-.13889, .36111, 0, 0],
            8995: [-.13889, .36111, 0, 0],
            9651: [.19444, .69444, 0, 0],
            9657: [-.02778, .47222, 0, 0],
            9661: [.19444, .69444, 0, 0],
            9667: [-.02778, .47222, 0, 0],
            9711: [.19444, .69444, 0, 0],
            9824: [.12963, .69444, 0, 0],
            9825: [.12963, .69444, 0, 0],
            9826: [.12963, .69444, 0, 0],
            9827: [.12963, .69444, 0, 0],
            9837: [0, .75, 0, 0],
            9838: [.19444, .69444, 0, 0],
            9839: [.19444, .69444, 0, 0],
            10216: [.25, .75, 0, 0],
            10217: [.25, .75, 0, 0],
            10815: [0, .68611, 0, 0],
            10927: [.19667, .69667, 0, 0],
            10928: [.19667, .69667, 0, 0]
        },
        "Main-Italic": {
            33: [0, .69444, .12417, 0],
            34: [0, .69444, .06961, 0],
            35: [.19444, .69444, .06616, 0],
            37: [.05556, .75, .13639, 0],
            38: [0, .69444, .09694, 0],
            39: [0, .69444, .12417, 0],
            40: [.25, .75, .16194, 0],
            41: [.25, .75, .03694, 0],
            42: [0, .75, .14917, 0],
            43: [.05667, .56167, .03694, 0],
            44: [.19444, .10556, 0, 0],
            45: [0, .43056, .02826, 0],
            46: [0, .10556, 0, 0],
            47: [.25, .75, .16194, 0],
            48: [0, .64444, .13556, 0],
            49: [0, .64444, .13556, 0],
            50: [0, .64444, .13556, 0],
            51: [0, .64444, .13556, 0],
            52: [.19444, .64444, .13556, 0],
            53: [0, .64444, .13556, 0],
            54: [0, .64444, .13556, 0],
            55: [.19444, .64444, .13556, 0],
            56: [0, .64444, .13556, 0],
            57: [0, .64444, .13556, 0],
            58: [0, .43056, .0582, 0],
            59: [.19444, .43056, .0582, 0],
            61: [-.13313, .36687, .06616, 0],
            63: [0, .69444, .1225, 0],
            64: [0, .69444, .09597, 0],
            65: [0, .68333, 0, 0],
            66: [0, .68333, .10257, 0],
            67: [0, .68333, .14528, 0],
            68: [0, .68333, .09403, 0],
            69: [0, .68333, .12028, 0],
            70: [0, .68333, .13305, 0],
            71: [0, .68333, .08722, 0],
            72: [0, .68333, .16389, 0],
            73: [0, .68333, .15806, 0],
            74: [0, .68333, .14028, 0],
            75: [0, .68333, .14528, 0],
            76: [0, .68333, 0, 0],
            77: [0, .68333, .16389, 0],
            78: [0, .68333, .16389, 0],
            79: [0, .68333, .09403, 0],
            80: [0, .68333, .10257, 0],
            81: [.19444, .68333, .09403, 0],
            82: [0, .68333, .03868, 0],
            83: [0, .68333, .11972, 0],
            84: [0, .68333, .13305, 0],
            85: [0, .68333, .16389, 0],
            86: [0, .68333, .18361, 0],
            87: [0, .68333, .18361, 0],
            88: [0, .68333, .15806, 0],
            89: [0, .68333, .19383, 0],
            90: [0, .68333, .14528, 0],
            91: [.25, .75, .1875, 0],
            93: [.25, .75, .10528, 0],
            94: [0, .69444, .06646, 0],
            95: [.31, .12056, .09208, 0],
            97: [0, .43056, .07671, 0],
            98: [0, .69444, .06312, 0],
            99: [0, .43056, .05653, 0],
            100: [0, .69444, .10333, 0],
            101: [0, .43056, .07514, 0],
            102: [.19444, .69444, .21194, 0],
            103: [.19444, .43056, .08847, 0],
            104: [0, .69444, .07671, 0],
            105: [0, .65536, .1019, 0],
            106: [.19444, .65536, .14467, 0],
            107: [0, .69444, .10764, 0],
            108: [0, .69444, .10333, 0],
            109: [0, .43056, .07671, 0],
            110: [0, .43056, .07671, 0],
            111: [0, .43056, .06312, 0],
            112: [.19444, .43056, .06312, 0],
            113: [.19444, .43056, .08847, 0],
            114: [0, .43056, .10764, 0],
            115: [0, .43056, .08208, 0],
            116: [0, .61508, .09486, 0],
            117: [0, .43056, .07671, 0],
            118: [0, .43056, .10764, 0],
            119: [0, .43056, .10764, 0],
            120: [0, .43056, .12042, 0],
            121: [.19444, .43056, .08847, 0],
            122: [0, .43056, .12292, 0],
            126: [.35, .31786, .11585, 0],
            163: [0, .69444, 0, 0],
            305: [0, .43056, 0, .02778],
            567: [.19444, .43056, 0, .08334],
            768: [0, .69444, 0, 0],
            769: [0, .69444, .09694, 0],
            770: [0, .69444, .06646, 0],
            771: [0, .66786, .11585, 0],
            772: [0, .56167, .10333, 0],
            774: [0, .69444, .10806, 0],
            775: [0, .66786, .11752, 0],
            776: [0, .66786, .10474, 0],
            778: [0, .69444, 0, 0],
            779: [0, .69444, .1225, 0],
            780: [0, .62847, .08295, 0],
            915: [0, .68333, .13305, 0],
            916: [0, .68333, 0, 0],
            920: [0, .68333, .09403, 0],
            923: [0, .68333, 0, 0],
            926: [0, .68333, .15294, 0],
            928: [0, .68333, .16389, 0],
            931: [0, .68333, .12028, 0],
            933: [0, .68333, .11111, 0],
            934: [0, .68333, .05986, 0],
            936: [0, .68333, .11111, 0],
            937: [0, .68333, .10257, 0],
            8211: [0, .43056, .09208, 0],
            8212: [0, .43056, .09208, 0],
            8216: [0, .69444, .12417, 0],
            8217: [0, .69444, .12417, 0],
            8220: [0, .69444, .1685, 0],
            8221: [0, .69444, .06961, 0],
            8463: [0, .68889, 0, 0]
        },
        "Main-Regular": {
            32: [0, 0, 0, 0],
            33: [0, .69444, 0, 0],
            34: [0, .69444, 0, 0],
            35: [.19444, .69444, 0, 0],
            36: [.05556, .75, 0, 0],
            37: [.05556, .75, 0, 0],
            38: [0, .69444, 0, 0],
            39: [0, .69444, 0, 0],
            40: [.25, .75, 0, 0],
            41: [.25, .75, 0, 0],
            42: [0, .75, 0, 0],
            43: [.08333, .58333, 0, 0],
            44: [.19444, .10556, 0, 0],
            45: [0, .43056, 0, 0],
            46: [0, .10556, 0, 0],
            47: [.25, .75, 0, 0],
            48: [0, .64444, 0, 0],
            49: [0, .64444, 0, 0],
            50: [0, .64444, 0, 0],
            51: [0, .64444, 0, 0],
            52: [0, .64444, 0, 0],
            53: [0, .64444, 0, 0],
            54: [0, .64444, 0, 0],
            55: [0, .64444, 0, 0],
            56: [0, .64444, 0, 0],
            57: [0, .64444, 0, 0],
            58: [0, .43056, 0, 0],
            59: [.19444, .43056, 0, 0],
            60: [.0391, .5391, 0, 0],
            61: [-.13313, .36687, 0, 0],
            62: [.0391, .5391, 0, 0],
            63: [0, .69444, 0, 0],
            64: [0, .69444, 0, 0],
            65: [0, .68333, 0, 0],
            66: [0, .68333, 0, 0],
            67: [0, .68333, 0, 0],
            68: [0, .68333, 0, 0],
            69: [0, .68333, 0, 0],
            70: [0, .68333, 0, 0],
            71: [0, .68333, 0, 0],
            72: [0, .68333, 0, 0],
            73: [0, .68333, 0, 0],
            74: [0, .68333, 0, 0],
            75: [0, .68333, 0, 0],
            76: [0, .68333, 0, 0],
            77: [0, .68333, 0, 0],
            78: [0, .68333, 0, 0],
            79: [0, .68333, 0, 0],
            80: [0, .68333, 0, 0],
            81: [.19444, .68333, 0, 0],
            82: [0, .68333, 0, 0],
            83: [0, .68333, 0, 0],
            84: [0, .68333, 0, 0],
            85: [0, .68333, 0, 0],
            86: [0, .68333, .01389, 0],
            87: [0, .68333, .01389, 0],
            88: [0, .68333, 0, 0],
            89: [0, .68333, .025, 0],
            90: [0, .68333, 0, 0],
            91: [.25, .75, 0, 0],
            92: [.25, .75, 0, 0],
            93: [.25, .75, 0, 0],
            94: [0, .69444, 0, 0],
            95: [.31, .12056, .02778, 0],
            96: [0, .69444, 0, 0],
            97: [0, .43056, 0, 0],
            98: [0, .69444, 0, 0],
            99: [0, .43056, 0, 0],
            100: [0, .69444, 0, 0],
            101: [0, .43056, 0, 0],
            102: [0, .69444, .07778, 0],
            103: [.19444, .43056, .01389, 0],
            104: [0, .69444, 0, 0],
            105: [0, .66786, 0, 0],
            106: [.19444, .66786, 0, 0],
            107: [0, .69444, 0, 0],
            108: [0, .69444, 0, 0],
            109: [0, .43056, 0, 0],
            110: [0, .43056, 0, 0],
            111: [0, .43056, 0, 0],
            112: [.19444, .43056, 0, 0],
            113: [.19444, .43056, 0, 0],
            114: [0, .43056, 0, 0],
            115: [0, .43056, 0, 0],
            116: [0, .61508, 0, 0],
            117: [0, .43056, 0, 0],
            118: [0, .43056, .01389, 0],
            119: [0, .43056, .01389, 0],
            120: [0, .43056, 0, 0],
            121: [.19444, .43056, .01389, 0],
            122: [0, .43056, 0, 0],
            123: [.25, .75, 0, 0],
            124: [.25, .75, 0, 0],
            125: [.25, .75, 0, 0],
            126: [.35, .31786, 0, 0],
            160: [0, 0, 0, 0],
            168: [0, .66786, 0, 0],
            172: [0, .43056, 0, 0],
            175: [0, .56778, 0, 0],
            176: [0, .69444, 0, 0],
            177: [.08333, .58333, 0, 0],
            180: [0, .69444, 0, 0],
            215: [.08333, .58333, 0, 0],
            247: [.08333, .58333, 0, 0],
            305: [0, .43056, 0, 0],
            567: [.19444, .43056, 0, 0],
            710: [0, .69444, 0, 0],
            711: [0, .62847, 0, 0],
            713: [0, .56778, 0, 0],
            714: [0, .69444, 0, 0],
            715: [0, .69444, 0, 0],
            728: [0, .69444, 0, 0],
            729: [0, .66786, 0, 0],
            730: [0, .69444, 0, 0],
            732: [0, .66786, 0, 0],
            768: [0, .69444, 0, 0],
            769: [0, .69444, 0, 0],
            770: [0, .69444, 0, 0],
            771: [0, .66786, 0, 0],
            772: [0, .56778, 0, 0],
            774: [0, .69444, 0, 0],
            775: [0, .66786, 0, 0],
            776: [0, .66786, 0, 0],
            778: [0, .69444, 0, 0],
            779: [0, .69444, 0, 0],
            780: [0, .62847, 0, 0],
            824: [.19444, .69444, 0, 0],
            915: [0, .68333, 0, 0],
            916: [0, .68333, 0, 0],
            920: [0, .68333, 0, 0],
            923: [0, .68333, 0, 0],
            926: [0, .68333, 0, 0],
            928: [0, .68333, 0, 0],
            931: [0, .68333, 0, 0],
            933: [0, .68333, 0, 0],
            934: [0, .68333, 0, 0],
            936: [0, .68333, 0, 0],
            937: [0, .68333, 0, 0],
            8211: [0, .43056, .02778, 0],
            8212: [0, .43056, .02778, 0],
            8216: [0, .69444, 0, 0],
            8217: [0, .69444, 0, 0],
            8220: [0, .69444, 0, 0],
            8221: [0, .69444, 0, 0],
            8224: [.19444, .69444, 0, 0],
            8225: [.19444, .69444, 0, 0],
            8230: [0, .12, 0, 0],
            8242: [0, .55556, 0, 0],
            8407: [0, .71444, .15382, 0],
            8463: [0, .68889, 0, 0],
            8465: [0, .69444, 0, 0],
            8467: [0, .69444, 0, .11111],
            8472: [.19444, .43056, 0, .11111],
            8476: [0, .69444, 0, 0],
            8501: [0, .69444, 0, 0],
            8592: [-.13313, .36687, 0, 0],
            8593: [.19444, .69444, 0, 0],
            8594: [-.13313, .36687, 0, 0],
            8595: [.19444, .69444, 0, 0],
            8596: [-.13313, .36687, 0, 0],
            8597: [.25, .75, 0, 0],
            8598: [.19444, .69444, 0, 0],
            8599: [.19444, .69444, 0, 0],
            8600: [.19444, .69444, 0, 0],
            8601: [.19444, .69444, 0, 0],
            8614: [.011, .511, 0, 0],
            8617: [.011, .511, 0, 0],
            8618: [.011, .511, 0, 0],
            8636: [-.13313, .36687, 0, 0],
            8637: [-.13313, .36687, 0, 0],
            8640: [-.13313, .36687, 0, 0],
            8641: [-.13313, .36687, 0, 0],
            8652: [.011, .671, 0, 0],
            8656: [-.13313, .36687, 0, 0],
            8657: [.19444, .69444, 0, 0],
            8658: [-.13313, .36687, 0, 0],
            8659: [.19444, .69444, 0, 0],
            8660: [-.13313, .36687, 0, 0],
            8661: [.25, .75, 0, 0],
            8704: [0, .69444, 0, 0],
            8706: [0, .69444, .05556, .08334],
            8707: [0, .69444, 0, 0],
            8709: [.05556, .75, 0, 0],
            8711: [0, .68333, 0, 0],
            8712: [.0391, .5391, 0, 0],
            8715: [.0391, .5391, 0, 0],
            8722: [.08333, .58333, 0, 0],
            8723: [.08333, .58333, 0, 0],
            8725: [.25, .75, 0, 0],
            8726: [.25, .75, 0, 0],
            8727: [-.03472, .46528, 0, 0],
            8728: [-.05555, .44445, 0, 0],
            8729: [-.05555, .44445, 0, 0],
            8730: [.2, .8, 0, 0],
            8733: [0, .43056, 0, 0],
            8734: [0, .43056, 0, 0],
            8736: [0, .69224, 0, 0],
            8739: [.25, .75, 0, 0],
            8741: [.25, .75, 0, 0],
            8743: [0, .55556, 0, 0],
            8744: [0, .55556, 0, 0],
            8745: [0, .55556, 0, 0],
            8746: [0, .55556, 0, 0],
            8747: [.19444, .69444, .11111, 0],
            8764: [-.13313, .36687, 0, 0],
            8768: [.19444, .69444, 0, 0],
            8771: [-.03625, .46375, 0, 0],
            8773: [-.022, .589, 0, 0],
            8776: [-.01688, .48312, 0, 0],
            8781: [-.03625, .46375, 0, 0],
            8784: [-.133, .67, 0, 0],
            8800: [.215, .716, 0, 0],
            8801: [-.03625, .46375, 0, 0],
            8804: [.13597, .63597, 0, 0],
            8805: [.13597, .63597, 0, 0],
            8810: [.0391, .5391, 0, 0],
            8811: [.0391, .5391, 0, 0],
            8826: [.0391, .5391, 0, 0],
            8827: [.0391, .5391, 0, 0],
            8834: [.0391, .5391, 0, 0],
            8835: [.0391, .5391, 0, 0],
            8838: [.13597, .63597, 0, 0],
            8839: [.13597, .63597, 0, 0],
            8846: [0, .55556, 0, 0],
            8849: [.13597, .63597, 0, 0],
            8850: [.13597, .63597, 0, 0],
            8851: [0, .55556, 0, 0],
            8852: [0, .55556, 0, 0],
            8853: [.08333, .58333, 0, 0],
            8854: [.08333, .58333, 0, 0],
            8855: [.08333, .58333, 0, 0],
            8856: [.08333, .58333, 0, 0],
            8857: [.08333, .58333, 0, 0],
            8866: [0, .69444, 0, 0],
            8867: [0, .69444, 0, 0],
            8868: [0, .69444, 0, 0],
            8869: [0, .69444, 0, 0],
            8872: [.249, .75, 0, 0],
            8900: [-.05555, .44445, 0, 0],
            8901: [-.05555, .44445, 0, 0],
            8902: [-.03472, .46528, 0, 0],
            8904: [.005, .505, 0, 0],
            8942: [.03, .9, 0, 0],
            8943: [-.19, .31, 0, 0],
            8945: [-.1, .82, 0, 0],
            8968: [.25, .75, 0, 0],
            8969: [.25, .75, 0, 0],
            8970: [.25, .75, 0, 0],
            8971: [.25, .75, 0, 0],
            8994: [-.14236, .35764, 0, 0],
            8995: [-.14236, .35764, 0, 0],
            9136: [.244, .744, 0, 0],
            9137: [.244, .744, 0, 0],
            9651: [.19444, .69444, 0, 0],
            9657: [-.03472, .46528, 0, 0],
            9661: [.19444, .69444, 0, 0],
            9667: [-.03472, .46528, 0, 0],
            9711: [.19444, .69444, 0, 0],
            9824: [.12963, .69444, 0, 0],
            9825: [.12963, .69444, 0, 0],
            9826: [.12963, .69444, 0, 0],
            9827: [.12963, .69444, 0, 0],
            9837: [0, .75, 0, 0],
            9838: [.19444, .69444, 0, 0],
            9839: [.19444, .69444, 0, 0],
            10216: [.25, .75, 0, 0],
            10217: [.25, .75, 0, 0],
            10222: [.244, .744, 0, 0],
            10223: [.244, .744, 0, 0],
            10229: [.011, .511, 0, 0],
            10230: [.011, .511, 0, 0],
            10231: [.011, .511, 0, 0],
            10232: [.024, .525, 0, 0],
            10233: [.024, .525, 0, 0],
            10234: [.024, .525, 0, 0],
            10236: [.011, .511, 0, 0],
            10815: [0, .68333, 0, 0],
            10927: [.13597, .63597, 0, 0],
            10928: [.13597, .63597, 0, 0]
        },
        "Math-BoldItalic": {
            47: [.19444, .69444, 0, 0],
            65: [0, .68611, 0, 0],
            66: [0, .68611, .04835, 0],
            67: [0, .68611, .06979, 0],
            68: [0, .68611, .03194, 0],
            69: [0, .68611, .05451, 0],
            70: [0, .68611, .15972, 0],
            71: [0, .68611, 0, 0],
            72: [0, .68611, .08229, 0],
            73: [0, .68611, .07778, 0],
            74: [0, .68611, .10069, 0],
            75: [0, .68611, .06979, 0],
            76: [0, .68611, 0, 0],
            77: [0, .68611, .11424, 0],
            78: [0, .68611, .11424, 0],
            79: [0, .68611, .03194, 0],
            80: [0, .68611, .15972, 0],
            81: [.19444, .68611, 0, 0],
            82: [0, .68611, .00421, 0],
            83: [0, .68611, .05382, 0],
            84: [0, .68611, .15972, 0],
            85: [0, .68611, .11424, 0],
            86: [0, .68611, .25555, 0],
            87: [0, .68611, .15972, 0],
            88: [0, .68611, .07778, 0],
            89: [0, .68611, .25555, 0],
            90: [0, .68611, .06979, 0],
            97: [0, .44444, 0, 0],
            98: [0, .69444, 0, 0],
            99: [0, .44444, 0, 0],
            100: [0, .69444, 0, 0],
            101: [0, .44444, 0, 0],
            102: [.19444, .69444, .11042, 0],
            103: [.19444, .44444, .03704, 0],
            104: [0, .69444, 0, 0],
            105: [0, .69326, 0, 0],
            106: [.19444, .69326, .0622, 0],
            107: [0, .69444, .01852, 0],
            108: [0, .69444, .0088, 0],
            109: [0, .44444, 0, 0],
            110: [0, .44444, 0, 0],
            111: [0, .44444, 0, 0],
            112: [.19444, .44444, 0, 0],
            113: [.19444, .44444, .03704, 0],
            114: [0, .44444, .03194, 0],
            115: [0, .44444, 0, 0],
            116: [0, .63492, 0, 0],
            117: [0, .44444, 0, 0],
            118: [0, .44444, .03704, 0],
            119: [0, .44444, .02778, 0],
            120: [0, .44444, 0, 0],
            121: [.19444, .44444, .03704, 0],
            122: [0, .44444, .04213, 0],
            915: [0, .68611, .15972, 0],
            916: [0, .68611, 0, 0],
            920: [0, .68611, .03194, 0],
            923: [0, .68611, 0, 0],
            926: [0, .68611, .07458, 0],
            928: [0, .68611, .08229, 0],
            931: [0, .68611, .05451, 0],
            933: [0, .68611, .15972, 0],
            934: [0, .68611, 0, 0],
            936: [0, .68611, .11653, 0],
            937: [0, .68611, .04835, 0],
            945: [0, .44444, 0, 0],
            946: [.19444, .69444, .03403, 0],
            947: [.19444, .44444, .06389, 0],
            948: [0, .69444, .03819, 0],
            949: [0, .44444, 0, 0],
            950: [.19444, .69444, .06215, 0],
            951: [.19444, .44444, .03704, 0],
            952: [0, .69444, .03194, 0],
            953: [0, .44444, 0, 0],
            954: [0, .44444, 0, 0],
            955: [0, .69444, 0, 0],
            956: [.19444, .44444, 0, 0],
            957: [0, .44444, .06898, 0],
            958: [.19444, .69444, .03021, 0],
            959: [0, .44444, 0, 0],
            960: [0, .44444, .03704, 0],
            961: [.19444, .44444, 0, 0],
            962: [.09722, .44444, .07917, 0],
            963: [0, .44444, .03704, 0],
            964: [0, .44444, .13472, 0],
            965: [0, .44444, .03704, 0],
            966: [.19444, .44444, 0, 0],
            967: [.19444, .44444, 0, 0],
            968: [.19444, .69444, .03704, 0],
            969: [0, .44444, .03704, 0],
            977: [0, .69444, 0, 0],
            981: [.19444, .69444, 0, 0],
            982: [0, .44444, .03194, 0],
            1009: [.19444, .44444, 0, 0],
            1013: [0, .44444, 0, 0]
        },
        "Math-Italic": {
            47: [.19444, .69444, 0, 0],
            65: [0, .68333, 0, .13889],
            66: [0, .68333, .05017, .08334],
            67: [0, .68333, .07153, .08334],
            68: [0, .68333, .02778, .05556],
            69: [0, .68333, .05764, .08334],
            70: [0, .68333, .13889, .08334],
            71: [0, .68333, 0, .08334],
            72: [0, .68333, .08125, .05556],
            73: [0, .68333, .07847, .11111],
            74: [0, .68333, .09618, .16667],
            75: [0, .68333, .07153, .05556],
            76: [0, .68333, 0, .02778],
            77: [0, .68333, .10903, .08334],
            78: [0, .68333, .10903, .08334],
            79: [0, .68333, .02778, .08334],
            80: [0, .68333, .13889, .08334],
            81: [.19444, .68333, 0, .08334],
            82: [0, .68333, .00773, .08334],
            83: [0, .68333, .05764, .08334],
            84: [0, .68333, .13889, .08334],
            85: [0, .68333, .10903, .02778],
            86: [0, .68333, .22222, 0],
            87: [0, .68333, .13889, 0],
            88: [0, .68333, .07847, .08334],
            89: [0, .68333, .22222, 0],
            90: [0, .68333, .07153, .08334],
            97: [0, .43056, 0, 0],
            98: [0, .69444, 0, 0],
            99: [0, .43056, 0, .05556],
            100: [0, .69444, 0, .16667],
            101: [0, .43056, 0, .05556],
            102: [.19444, .69444, .10764, .16667],
            103: [.19444, .43056, .03588, .02778],
            104: [0, .69444, 0, 0],
            105: [0, .65952, 0, 0],
            106: [.19444, .65952, .05724, 0],
            107: [0, .69444, .03148, 0],
            108: [0, .69444, .01968, .08334],
            109: [0, .43056, 0, 0],
            110: [0, .43056, 0, 0],
            111: [0, .43056, 0, .05556],
            112: [.19444, .43056, 0, .08334],
            113: [.19444, .43056, .03588, .08334],
            114: [0, .43056, .02778, .05556],
            115: [0, .43056, 0, .05556],
            116: [0, .61508, 0, .08334],
            117: [0, .43056, 0, .02778],
            118: [0, .43056, .03588, .02778],
            119: [0, .43056, .02691, .08334],
            120: [0, .43056, 0, .02778],
            121: [.19444, .43056, .03588, .05556],
            122: [0, .43056, .04398, .05556],
            915: [0, .68333, .13889, .08334],
            916: [0, .68333, 0, .16667],
            920: [0, .68333, .02778, .08334],
            923: [0, .68333, 0, .16667],
            926: [0, .68333, .07569, .08334],
            928: [0, .68333, .08125, .05556],
            931: [0, .68333, .05764, .08334],
            933: [0, .68333, .13889, .05556],
            934: [0, .68333, 0, .08334],
            936: [0, .68333, .11, .05556],
            937: [0, .68333, .05017, .08334],
            945: [0, .43056, .0037, .02778],
            946: [.19444, .69444, .05278, .08334],
            947: [.19444, .43056, .05556, 0],
            948: [0, .69444, .03785, .05556],
            949: [0, .43056, 0, .08334],
            950: [.19444, .69444, .07378, .08334],
            951: [.19444, .43056, .03588, .05556],
            952: [0, .69444, .02778, .08334],
            953: [0, .43056, 0, .05556],
            954: [0, .43056, 0, 0],
            955: [0, .69444, 0, 0],
            956: [.19444, .43056, 0, .02778],
            957: [0, .43056, .06366, .02778],
            958: [.19444, .69444, .04601, .11111],
            959: [0, .43056, 0, .05556],
            960: [0, .43056, .03588, 0],
            961: [.19444, .43056, 0, .08334],
            962: [.09722, .43056, .07986, .08334],
            963: [0, .43056, .03588, 0],
            964: [0, .43056, .1132, .02778],
            965: [0, .43056, .03588, .02778],
            966: [.19444, .43056, 0, .08334],
            967: [.19444, .43056, 0, .05556],
            968: [.19444, .69444, .03588, .11111],
            969: [0, .43056, .03588, 0],
            977: [0, .69444, 0, .08334],
            981: [.19444, .69444, 0, .08334],
            982: [0, .43056, .02778, 0],
            1009: [.19444, .43056, 0, .08334],
            1013: [0, .43056, 0, .05556]
        },
        "Math-Regular": {
            65: [0, .68333, 0, .13889],
            66: [0, .68333, .05017, .08334],
            67: [0, .68333, .07153, .08334],
            68: [0, .68333, .02778, .05556],
            69: [0, .68333, .05764, .08334],
            70: [0, .68333, .13889, .08334],
            71: [0, .68333, 0, .08334],
            72: [0, .68333, .08125, .05556],
            73: [0, .68333, .07847, .11111],
            74: [0, .68333, .09618, .16667],
            75: [0, .68333, .07153, .05556],
            76: [0, .68333, 0, .02778],
            77: [0, .68333, .10903, .08334],
            78: [0, .68333, .10903, .08334],
            79: [0, .68333, .02778, .08334],
            80: [0, .68333, .13889, .08334],
            81: [.19444, .68333, 0, .08334],
            82: [0, .68333, .00773, .08334],
            83: [0, .68333, .05764, .08334],
            84: [0, .68333, .13889, .08334],
            85: [0, .68333, .10903, .02778],
            86: [0, .68333, .22222, 0],
            87: [0, .68333, .13889, 0],
            88: [0, .68333, .07847, .08334],
            89: [0, .68333, .22222, 0],
            90: [0, .68333, .07153, .08334],
            97: [0, .43056, 0, 0],
            98: [0, .69444, 0, 0],
            99: [0, .43056, 0, .05556],
            100: [0, .69444, 0, .16667],
            101: [0, .43056, 0, .05556],
            102: [.19444, .69444, .10764, .16667],
            103: [.19444, .43056, .03588, .02778],
            104: [0, .69444, 0, 0],
            105: [0, .65952, 0, 0],
            106: [.19444, .65952, .05724, 0],
            107: [0, .69444, .03148, 0],
            108: [0, .69444, .01968, .08334],
            109: [0, .43056, 0, 0],
            110: [0, .43056, 0, 0],
            111: [0, .43056, 0, .05556],
            112: [.19444, .43056, 0, .08334],
            113: [.19444, .43056, .03588, .08334],
            114: [0, .43056, .02778, .05556],
            115: [0, .43056, 0, .05556],
            116: [0, .61508, 0, .08334],
            117: [0, .43056, 0, .02778],
            118: [0, .43056, .03588, .02778],
            119: [0, .43056, .02691, .08334],
            120: [0, .43056, 0, .02778],
            121: [.19444, .43056, .03588, .05556],
            122: [0, .43056, .04398, .05556],
            915: [0, .68333, .13889, .08334],
            916: [0, .68333, 0, .16667],
            920: [0, .68333, .02778, .08334],
            923: [0, .68333, 0, .16667],
            926: [0, .68333, .07569, .08334],
            928: [0, .68333, .08125, .05556],
            931: [0, .68333, .05764, .08334],
            933: [0, .68333, .13889, .05556],
            934: [0, .68333, 0, .08334],
            936: [0, .68333, .11, .05556],
            937: [0, .68333, .05017, .08334],
            945: [0, .43056, .0037, .02778],
            946: [.19444, .69444, .05278, .08334],
            947: [.19444, .43056, .05556, 0],
            948: [0, .69444, .03785, .05556],
            949: [0, .43056, 0, .08334],
            950: [.19444, .69444, .07378, .08334],
            951: [.19444, .43056, .03588, .05556],
            952: [0, .69444, .02778, .08334],
            953: [0, .43056, 0, .05556],
            954: [0, .43056, 0, 0],
            955: [0, .69444, 0, 0],
            956: [.19444, .43056, 0, .02778],
            957: [0, .43056, .06366, .02778],
            958: [.19444, .69444, .04601, .11111],
            959: [0, .43056, 0, .05556],
            960: [0, .43056, .03588, 0],
            961: [.19444, .43056, 0, .08334],
            962: [.09722, .43056, .07986, .08334],
            963: [0, .43056, .03588, 0],
            964: [0, .43056, .1132, .02778],
            965: [0, .43056, .03588, .02778],
            966: [.19444, .43056, 0, .08334],
            967: [.19444, .43056, 0, .05556],
            968: [.19444, .69444, .03588, .11111],
            969: [0, .43056, .03588, 0],
            977: [0, .69444, 0, .08334],
            981: [.19444, .69444, 0, .08334],
            982: [0, .43056, .02778, 0],
            1009: [.19444, .43056, 0, .08334],
            1013: [0, .43056, 0, .05556]
        },
        "SansSerif-Regular": {
            33: [0, .69444, 0, 0],
            34: [0, .69444, 0, 0],
            35: [.19444, .69444, 0, 0],
            36: [.05556, .75, 0, 0],
            37: [.05556, .75, 0, 0],
            38: [0, .69444, 0, 0],
            39: [0, .69444, 0, 0],
            40: [.25, .75, 0, 0],
            41: [.25, .75, 0, 0],
            42: [0, .75, 0, 0],
            43: [.08333, .58333, 0, 0],
            44: [.125, .08333, 0, 0],
            45: [0, .44444, 0, 0],
            46: [0, .08333, 0, 0],
            47: [.25, .75, 0, 0],
            48: [0, .65556, 0, 0],
            49: [0, .65556, 0, 0],
            50: [0, .65556, 0, 0],
            51: [0, .65556, 0, 0],
            52: [0, .65556, 0, 0],
            53: [0, .65556, 0, 0],
            54: [0, .65556, 0, 0],
            55: [0, .65556, 0, 0],
            56: [0, .65556, 0, 0],
            57: [0, .65556, 0, 0],
            58: [0, .44444, 0, 0],
            59: [.125, .44444, 0, 0],
            61: [-.13, .37, 0, 0],
            63: [0, .69444, 0, 0],
            64: [0, .69444, 0, 0],
            65: [0, .69444, 0, 0],
            66: [0, .69444, 0, 0],
            67: [0, .69444, 0, 0],
            68: [0, .69444, 0, 0],
            69: [0, .69444, 0, 0],
            70: [0, .69444, 0, 0],
            71: [0, .69444, 0, 0],
            72: [0, .69444, 0, 0],
            73: [0, .69444, 0, 0],
            74: [0, .69444, 0, 0],
            75: [0, .69444, 0, 0],
            76: [0, .69444, 0, 0],
            77: [0, .69444, 0, 0],
            78: [0, .69444, 0, 0],
            79: [0, .69444, 0, 0],
            80: [0, .69444, 0, 0],
            81: [.125, .69444, 0, 0],
            82: [0, .69444, 0, 0],
            83: [0, .69444, 0, 0],
            84: [0, .69444, 0, 0],
            85: [0, .69444, 0, 0],
            86: [0, .69444, .01389, 0],
            87: [0, .69444, .01389, 0],
            88: [0, .69444, 0, 0],
            89: [0, .69444, .025, 0],
            90: [0, .69444, 0, 0],
            91: [.25, .75, 0, 0],
            93: [.25, .75, 0, 0],
            94: [0, .69444, 0, 0],
            95: [.35, .09444, .02778, 0],
            97: [0, .44444, 0, 0],
            98: [0, .69444, 0, 0],
            99: [0, .44444, 0, 0],
            100: [0, .69444, 0, 0],
            101: [0, .44444, 0, 0],
            102: [0, .69444, .06944, 0],
            103: [.19444, .44444, .01389, 0],
            104: [0, .69444, 0, 0],
            105: [0, .67937, 0, 0],
            106: [.19444, .67937, 0, 0],
            107: [0, .69444, 0, 0],
            108: [0, .69444, 0, 0],
            109: [0, .44444, 0, 0],
            110: [0, .44444, 0, 0],
            111: [0, .44444, 0, 0],
            112: [.19444, .44444, 0, 0],
            113: [.19444, .44444, 0, 0],
            114: [0, .44444, .01389, 0],
            115: [0, .44444, 0, 0],
            116: [0, .57143, 0, 0],
            117: [0, .44444, 0, 0],
            118: [0, .44444, .01389, 0],
            119: [0, .44444, .01389, 0],
            120: [0, .44444, 0, 0],
            121: [.19444, .44444, .01389, 0],
            122: [0, .44444, 0, 0],
            126: [.35, .32659, 0, 0],
            305: [0, .44444, 0, 0],
            567: [.19444, .44444, 0, 0],
            768: [0, .69444, 0, 0],
            769: [0, .69444, 0, 0],
            770: [0, .69444, 0, 0],
            771: [0, .67659, 0, 0],
            772: [0, .60889, 0, 0],
            774: [0, .69444, 0, 0],
            775: [0, .67937, 0, 0],
            776: [0, .67937, 0, 0],
            778: [0, .69444, 0, 0],
            779: [0, .69444, 0, 0],
            780: [0, .63194, 0, 0],
            915: [0, .69444, 0, 0],
            916: [0, .69444, 0, 0],
            920: [0, .69444, 0, 0],
            923: [0, .69444, 0, 0],
            926: [0, .69444, 0, 0],
            928: [0, .69444, 0, 0],
            931: [0, .69444, 0, 0],
            933: [0, .69444, 0, 0],
            934: [0, .69444, 0, 0],
            936: [0, .69444, 0, 0],
            937: [0, .69444, 0, 0],
            8211: [0, .44444, .02778, 0],
            8212: [0, .44444, .02778, 0],
            8216: [0, .69444, 0, 0],
            8217: [0, .69444, 0, 0],
            8220: [0, .69444, 0, 0],
            8221: [0, .69444, 0, 0]
        },
        "Script-Regular": {
            65: [0, .7, .22925, 0],
            66: [0, .7, .04087, 0],
            67: [0, .7, .1689, 0],
            68: [0, .7, .09371, 0],
            69: [0, .7, .18583, 0],
            70: [0, .7, .13634, 0],
            71: [0, .7, .17322, 0],
            72: [0, .7, .29694, 0],
            73: [0, .7, .19189, 0],
            74: [.27778, .7, .19189, 0],
            75: [0, .7, .31259, 0],
            76: [0, .7, .19189, 0],
            77: [0, .7, .15981, 0],
            78: [0, .7, .3525, 0],
            79: [0, .7, .08078, 0],
            80: [0, .7, .08078, 0],
            81: [0, .7, .03305, 0],
            82: [0, .7, .06259, 0],
            83: [0, .7, .19189, 0],
            84: [0, .7, .29087, 0],
            85: [0, .7, .25815, 0],
            86: [0, .7, .27523, 0],
            87: [0, .7, .27523, 0],
            88: [0, .7, .26006, 0],
            89: [0, .7, .2939, 0],
            90: [0, .7, .24037, 0]
        },
        "Size1-Regular": {
            40: [.35001, .85, 0, 0],
            41: [.35001, .85, 0, 0],
            47: [.35001, .85, 0, 0],
            91: [.35001, .85, 0, 0],
            92: [.35001, .85, 0, 0],
            93: [.35001, .85, 0, 0],
            123: [.35001, .85, 0, 0],
            125: [.35001, .85, 0, 0],
            710: [0, .72222, 0, 0],
            732: [0, .72222, 0, 0],
            770: [0, .72222, 0, 0],
            771: [0, .72222, 0, 0],
            8214: [-99e-5, .601, 0, 0],
            8593: [1e-5, .6, 0, 0],
            8595: [1e-5, .6, 0, 0],
            8657: [1e-5, .6, 0, 0],
            8659: [1e-5, .6, 0, 0],
            8719: [.25001, .75, 0, 0],
            8720: [.25001, .75, 0, 0],
            8721: [.25001, .75, 0, 0],
            8730: [.35001, .85, 0, 0],
            8739: [-.00599, .606, 0, 0],
            8741: [-.00599, .606, 0, 0],
            8747: [.30612, .805, .19445, 0],
            8748: [.306, .805, .19445, 0],
            8749: [.306, .805, .19445, 0],
            8750: [.30612, .805, .19445, 0],
            8896: [.25001, .75, 0, 0],
            8897: [.25001, .75, 0, 0],
            8898: [.25001, .75, 0, 0],
            8899: [.25001, .75, 0, 0],
            8968: [.35001, .85, 0, 0],
            8969: [.35001, .85, 0, 0],
            8970: [.35001, .85, 0, 0],
            8971: [.35001, .85, 0, 0],
            9168: [-99e-5, .601, 0, 0],
            10216: [.35001, .85, 0, 0],
            10217: [.35001, .85, 0, 0],
            10752: [.25001, .75, 0, 0],
            10753: [.25001, .75, 0, 0],
            10754: [.25001, .75, 0, 0],
            10756: [.25001, .75, 0, 0],
            10758: [.25001, .75, 0, 0]
        },
        "Size2-Regular": {
            40: [.65002, 1.15, 0, 0],
            41: [.65002, 1.15, 0, 0],
            47: [.65002, 1.15, 0, 0],
            91: [.65002, 1.15, 0, 0],
            92: [.65002, 1.15, 0, 0],
            93: [.65002, 1.15, 0, 0],
            123: [.65002, 1.15, 0, 0],
            125: [.65002, 1.15, 0, 0],
            710: [0, .75, 0, 0],
            732: [0, .75, 0, 0],
            770: [0, .75, 0, 0],
            771: [0, .75, 0, 0],
            8719: [.55001, 1.05, 0, 0],
            8720: [.55001, 1.05, 0, 0],
            8721: [.55001, 1.05, 0, 0],
            8730: [.65002, 1.15, 0, 0],
            8747: [.86225, 1.36, .44445, 0],
            8748: [.862, 1.36, .44445, 0],
            8749: [.862, 1.36, .44445, 0],
            8750: [.86225, 1.36, .44445, 0],
            8896: [.55001, 1.05, 0, 0],
            8897: [.55001, 1.05, 0, 0],
            8898: [.55001, 1.05, 0, 0],
            8899: [.55001, 1.05, 0, 0],
            8968: [.65002, 1.15, 0, 0],
            8969: [.65002, 1.15, 0, 0],
            8970: [.65002, 1.15, 0, 0],
            8971: [.65002, 1.15, 0, 0],
            10216: [.65002, 1.15, 0, 0],
            10217: [.65002, 1.15, 0, 0],
            10752: [.55001, 1.05, 0, 0],
            10753: [.55001, 1.05, 0, 0],
            10754: [.55001, 1.05, 0, 0],
            10756: [.55001, 1.05, 0, 0],
            10758: [.55001, 1.05, 0, 0]
        },
        "Size3-Regular": {
            40: [.95003, 1.45, 0, 0],
            41: [.95003, 1.45, 0, 0],
            47: [.95003, 1.45, 0, 0],
            91: [.95003, 1.45, 0, 0],
            92: [.95003, 1.45, 0, 0],
            93: [.95003, 1.45, 0, 0],
            123: [.95003, 1.45, 0, 0],
            125: [.95003, 1.45, 0, 0],
            710: [0, .75, 0, 0],
            732: [0, .75, 0, 0],
            770: [0, .75, 0, 0],
            771: [0, .75, 0, 0],
            8730: [.95003, 1.45, 0, 0],
            8968: [.95003, 1.45, 0, 0],
            8969: [.95003, 1.45, 0, 0],
            8970: [.95003, 1.45, 0, 0],
            8971: [.95003, 1.45, 0, 0],
            10216: [.95003, 1.45, 0, 0],
            10217: [.95003, 1.45, 0, 0]
        },
        "Size4-Regular": {
            40: [1.25003, 1.75, 0, 0],
            41: [1.25003, 1.75, 0, 0],
            47: [1.25003, 1.75, 0, 0],
            91: [1.25003, 1.75, 0, 0],
            92: [1.25003, 1.75, 0, 0],
            93: [1.25003, 1.75, 0, 0],
            123: [1.25003, 1.75, 0, 0],
            125: [1.25003, 1.75, 0, 0],
            710: [0, .825, 0, 0],
            732: [0, .825, 0, 0],
            770: [0, .825, 0, 0],
            771: [0, .825, 0, 0],
            8730: [1.25003, 1.75, 0, 0],
            8968: [1.25003, 1.75, 0, 0],
            8969: [1.25003, 1.75, 0, 0],
            8970: [1.25003, 1.75, 0, 0],
            8971: [1.25003, 1.75, 0, 0],
            9115: [.64502, 1.155, 0, 0],
            9116: [1e-5, .6, 0, 0],
            9117: [.64502, 1.155, 0, 0],
            9118: [.64502, 1.155, 0, 0],
            9119: [1e-5, .6, 0, 0],
            9120: [.64502, 1.155, 0, 0],
            9121: [.64502, 1.155, 0, 0],
            9122: [-99e-5, .601, 0, 0],
            9123: [.64502, 1.155, 0, 0],
            9124: [.64502, 1.155, 0, 0],
            9125: [-99e-5, .601, 0, 0],
            9126: [.64502, 1.155, 0, 0],
            9127: [1e-5, .9, 0, 0],
            9128: [.65002, 1.15, 0, 0],
            9129: [.90001, 0, 0, 0],
            9130: [0, .3, 0, 0],
            9131: [1e-5, .9, 0, 0],
            9132: [.65002, 1.15, 0, 0],
            9133: [.90001, 0, 0, 0],
            9143: [.88502, .915, 0, 0],
            10216: [1.25003, 1.75, 0, 0],
            10217: [1.25003, 1.75, 0, 0],
            57344: [-.00499, .605, 0, 0],
            57345: [-.00499, .605, 0, 0],
            57680: [0, .12, 0, 0],
            57681: [0, .12, 0, 0],
            57682: [0, .12, 0, 0],
            57683: [0, .12, 0, 0]
        },
        "Typewriter-Regular": {
            33: [0, .61111, 0, 0],
            34: [0, .61111, 0, 0],
            35: [0, .61111, 0, 0],
            36: [.08333, .69444, 0, 0],
            37: [.08333, .69444, 0, 0],
            38: [0, .61111, 0, 0],
            39: [0, .61111, 0, 0],
            40: [.08333, .69444, 0, 0],
            41: [.08333, .69444, 0, 0],
            42: [0, .52083, 0, 0],
            43: [-.08056, .53055, 0, 0],
            44: [.13889, .125, 0, 0],
            45: [-.08056, .53055, 0, 0],
            46: [0, .125, 0, 0],
            47: [.08333, .69444, 0, 0],
            48: [0, .61111, 0, 0],
            49: [0, .61111, 0, 0],
            50: [0, .61111, 0, 0],
            51: [0, .61111, 0, 0],
            52: [0, .61111, 0, 0],
            53: [0, .61111, 0, 0],
            54: [0, .61111, 0, 0],
            55: [0, .61111, 0, 0],
            56: [0, .61111, 0, 0],
            57: [0, .61111, 0, 0],
            58: [0, .43056, 0, 0],
            59: [.13889, .43056, 0, 0],
            60: [-.05556, .55556, 0, 0],
            61: [-.19549, .41562, 0, 0],
            62: [-.05556, .55556, 0, 0],
            63: [0, .61111, 0, 0],
            64: [0, .61111, 0, 0],
            65: [0, .61111, 0, 0],
            66: [0, .61111, 0, 0],
            67: [0, .61111, 0, 0],
            68: [0, .61111, 0, 0],
            69: [0, .61111, 0, 0],
            70: [0, .61111, 0, 0],
            71: [0, .61111, 0, 0],
            72: [0, .61111, 0, 0],
            73: [0, .61111, 0, 0],
            74: [0, .61111, 0, 0],
            75: [0, .61111, 0, 0],
            76: [0, .61111, 0, 0],
            77: [0, .61111, 0, 0],
            78: [0, .61111, 0, 0],
            79: [0, .61111, 0, 0],
            80: [0, .61111, 0, 0],
            81: [.13889, .61111, 0, 0],
            82: [0, .61111, 0, 0],
            83: [0, .61111, 0, 0],
            84: [0, .61111, 0, 0],
            85: [0, .61111, 0, 0],
            86: [0, .61111, 0, 0],
            87: [0, .61111, 0, 0],
            88: [0, .61111, 0, 0],
            89: [0, .61111, 0, 0],
            90: [0, .61111, 0, 0],
            91: [.08333, .69444, 0, 0],
            92: [.08333, .69444, 0, 0],
            93: [.08333, .69444, 0, 0],
            94: [0, .61111, 0, 0],
            95: [.09514, 0, 0, 0],
            96: [0, .61111, 0, 0],
            97: [0, .43056, 0, 0],
            98: [0, .61111, 0, 0],
            99: [0, .43056, 0, 0],
            100: [0, .61111, 0, 0],
            101: [0, .43056, 0, 0],
            102: [0, .61111, 0, 0],
            103: [.22222, .43056, 0, 0],
            104: [0, .61111, 0, 0],
            105: [0, .61111, 0, 0],
            106: [.22222, .61111, 0, 0],
            107: [0, .61111, 0, 0],
            108: [0, .61111, 0, 0],
            109: [0, .43056, 0, 0],
            110: [0, .43056, 0, 0],
            111: [0, .43056, 0, 0],
            112: [.22222, .43056, 0, 0],
            113: [.22222, .43056, 0, 0],
            114: [0, .43056, 0, 0],
            115: [0, .43056, 0, 0],
            116: [0, .55358, 0, 0],
            117: [0, .43056, 0, 0],
            118: [0, .43056, 0, 0],
            119: [0, .43056, 0, 0],
            120: [0, .43056, 0, 0],
            121: [.22222, .43056, 0, 0],
            122: [0, .43056, 0, 0],
            123: [.08333, .69444, 0, 0],
            124: [.08333, .69444, 0, 0],
            125: [.08333, .69444, 0, 0],
            126: [0, .61111, 0, 0],
            127: [0, .61111, 0, 0],
            305: [0, .43056, 0, 0],
            567: [.22222, .43056, 0, 0],
            768: [0, .61111, 0, 0],
            769: [0, .61111, 0, 0],
            770: [0, .61111, 0, 0],
            771: [0, .61111, 0, 0],
            772: [0, .56555, 0, 0],
            774: [0, .61111, 0, 0],
            776: [0, .61111, 0, 0],
            778: [0, .61111, 0, 0],
            780: [0, .56597, 0, 0],
            915: [0, .61111, 0, 0],
            916: [0, .61111, 0, 0],
            920: [0, .61111, 0, 0],
            923: [0, .61111, 0, 0],
            926: [0, .61111, 0, 0],
            928: [0, .61111, 0, 0],
            931: [0, .61111, 0, 0],
            933: [0, .61111, 0, 0],
            934: [0, .61111, 0, 0],
            936: [0, .61111, 0, 0],
            937: [0, .61111, 0, 0],
            2018: [0, .61111, 0, 0],
            2019: [0, .61111, 0, 0],
            8242: [0, .61111, 0, 0]
        }
    }
}, function (t, e, n) {
    function r(e, n, r) {
        "string" == typeof e && (e = [e]), "number" == typeof n && (n = {numArgs: n});
        for (var i = {
            numArgs: n.numArgs,
            argTypes: n.argTypes,
            greediness: void 0 === n.greediness ? 1 : n.greediness,
            allowedInText: !!n.allowedInText,
            numOptionalArgs: n.numOptionalArgs || 0,
            handler: r
        }, o = 0; o < e.length; ++o) t.exports[e[o]] = i
    }

    var i = n(2), o = n(5);
    r("\\sqrt", {numArgs: 1, numOptionalArgs: 1}, function (t, e) {
        var n = e[0], r = e[1];
        return {type: "sqrt", body: r, index: n}
    }), r("\\text", {numArgs: 1, argTypes: ["text"], greediness: 2}, function (t, e) {
        var n, r = e[0];
        return n = "ordgroup" === r.type ? r.value : [r], {type: "text", body: n}
    }), r("\\color", {numArgs: 2, allowedInText: !0, greediness: 3, argTypes: ["color", "original"]}, function (t, e) {
        var n, r = e[0], i = e[1];
        return n = "ordgroup" === i.type ? i.value : [i], {type: "color", color: r.value, value: n}
    }), r("\\overline", {numArgs: 1}, function (t, e) {
        var n = e[0];
        return {type: "overline", body: n}
    }), r("\\underline", {numArgs: 1}, function (t, e) {
        var n = e[0];
        return {type: "underline", body: n}
    }), r("\\rule", {numArgs: 2, numOptionalArgs: 1, argTypes: ["size", "size", "size"]}, function (t, e) {
        var n = e[0], r = e[1], i = e[2];
        return {type: "rule", shift: n && n.value, width: r.value, height: i.value}
    }), r("\\KaTeX", {numArgs: 0}, function (t) {
        return {type: "katex"}
    }), r("\\phantom", {numArgs: 1}, function (t, e) {
        var n, r = e[0];
        return n = "ordgroup" === r.type ? r.value : [r], {type: "phantom", value: n}
    });
    var s = {
            "\\bigl": {type: "open", size: 1},
            "\\Bigl": {type: "open", size: 2},
            "\\biggl": {type: "open", size: 3},
            "\\Biggl": {type: "open", size: 4},
            "\\bigr": {type: "close", size: 1},
            "\\Bigr": {type: "close", size: 2},
            "\\biggr": {type: "close", size: 3},
            "\\Biggr": {type: "close", size: 4},
            "\\bigm": {type: "rel", size: 1},
            "\\Bigm": {type: "rel", size: 2},
            "\\biggm": {type: "rel", size: 3},
            "\\Biggm": {type: "rel", size: 4},
            "\\big": {type: "textord", size: 1},
            "\\Big": {type: "textord", size: 2},
            "\\bigg": {type: "textord", size: 3},
            "\\Bigg": {type: "textord", size: 4}
        },
        a = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "<", ">", "\\langle", "\\rangle", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."],
        u = {"\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak"};
    r(["\\blue", "\\orange", "\\pink", "\\red", "\\green", "\\gray", "\\purple", "\\blueA", "\\blueB", "\\blueC", "\\blueD", "\\blueE", "\\tealA", "\\tealB", "\\tealC", "\\tealD", "\\tealE", "\\greenA", "\\greenB", "\\greenC", "\\greenD", "\\greenE", "\\goldA", "\\goldB", "\\goldC", "\\goldD", "\\goldE", "\\redA", "\\redB", "\\redC", "\\redD", "\\redE", "\\maroonA", "\\maroonB", "\\maroonC", "\\maroonD", "\\maroonE", "\\purpleA", "\\purpleB", "\\purpleC", "\\purpleD", "\\purpleE", "\\mintA", "\\mintB", "\\mintC", "\\grayA", "\\grayB", "\\grayC", "\\grayD", "\\grayE", "\\grayF", "\\grayG", "\\grayH", "\\grayI", "\\kaBlue", "\\kaGreen"], {
        numArgs: 1,
        allowedInText: !0,
        greediness: 3
    }, function (t, e) {
        var n, r = e[0];
        return n = "ordgroup" === r.type ? r.value : [r], {
            type: "color",
            color: "katex-" + t.funcName.slice(1),
            value: n
        }
    }), r(["\\arcsin", "\\arccos", "\\arctan", "\\arg", "\\cos", "\\cosh", "\\cot", "\\coth", "\\csc", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\tan", "\\tanh"], {numArgs: 0}, function (t) {
        return {type: "op", limits: !1, symbol: !1, body: t.funcName}
    }), r(["\\det", "\\gcd", "\\inf", "\\lim", "\\liminf", "\\limsup", "\\max", "\\min", "\\Pr", "\\sup"], {numArgs: 0}, function (t) {
        return {type: "op", limits: !0, symbol: !1, body: t.funcName}
    }), r(["\\int", "\\iint", "\\iiint", "\\oint"], {numArgs: 0}, function (t) {
        return {type: "op", limits: !1, symbol: !0, body: t.funcName}
    }), r(["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint"], {numArgs: 0}, function (t) {
        return {type: "op", limits: !0, symbol: !0, body: t.funcName}
    }), r(["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom"], {
        numArgs: 2,
        greediness: 2
    }, function (t, e) {
        var n, r = e[0], i = e[1], o = null, s = null, a = "auto";
        switch (t.funcName) {
            case"\\dfrac":
            case"\\frac":
            case"\\tfrac":
                n = !0;
                break;
            case"\\dbinom":
            case"\\binom":
            case"\\tbinom":
                n = !1, o = "(", s = ")";
                break;
            default:
                throw new Error("Unrecognized genfrac command")
        }
        switch (t.funcName) {
            case"\\dfrac":
            case"\\dbinom":
                a = "display";
                break;
            case"\\tfrac":
            case"\\tbinom":
                a = "text"
        }
        return {type: "genfrac", numer: r, denom: i, hasBarLine: n, leftDelim: o, rightDelim: s, size: a}
    }), r(["\\llap", "\\rlap"], {numArgs: 1, allowedInText: !0}, function (t, e) {
        var n = e[0];
        return {type: t.funcName.slice(1), body: n}
    }), r(["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg", "\\left", "\\right"], {numArgs: 1}, function (t, e) {
        var n = e[0];
        if (!i.contains(a, n.value)) throw new o("Invalid delimiter: '" + n.value + "' after '" + t.funcName + "'", t.lexer, t.positions[1]);
        return "\\left" === t.funcName || "\\right" === t.funcName ? {
            type: "leftright",
            value: n.value
        } : {type: "delimsizing", size: s[t.funcName].size, delimType: s[t.funcName].type, value: n.value}
    }), r(["\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], 0, null), r(["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], 0, null), r(["\\mathrm", "\\mathit", "\\mathbf", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], {
        numArgs: 1,
        greediness: 2
    }, function (t, e) {
        var n = e[0], r = t.funcName;
        return r in u && (r = u[r]), {type: "font", font: r.slice(1), body: n}
    }), r(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot"], {numArgs: 1}, function (t, e) {
        var n = e[0];
        return {type: "accent", accent: t.funcName, base: n}
    }), r(["\\over", "\\choose"], {numArgs: 0}, function (t) {
        var e;
        switch (t.funcName) {
            case"\\over":
                e = "\\frac";
                break;
            case"\\choose":
                e = "\\binom";
                break;
            default:
                throw new Error("Unrecognized infix genfrac command")
        }
        return {type: "infix", replaceWith: e}
    }), r(["\\\\", "\\cr"], {numArgs: 0, numOptionalArgs: 1, argTypes: ["size"]}, function (t, e) {
        var n = e[0];
        return {type: "cr", size: n}
    }), r(["\\begin", "\\end"], {numArgs: 1, argTypes: ["text"]}, function (t, e) {
        var n = e[0];
        if ("ordgroup" !== n.type) throw new o("Invalid environment name", t.lexer, t.positions[1]);
        for (var r = "", i = 0; i < n.value.length; ++i) r += n.value[i].value;
        return {type: "environment", name: r, namepos: t.positions[1]}
    })
}, function (t, e, n) {
    function r(t, e) {
        this.type = t, this.attributes = {}, this.children = e || []
    }

    function i(t) {
        this.text = t
    }

    var o = n(2);
    r.prototype.setAttribute = function (t, e) {
        this.attributes[t] = e
    }, r.prototype.toNode = function () {
        var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
        for (var e in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, e) && t.setAttribute(e, this.attributes[e]);
        for (var n = 0; n < this.children.length; n++) t.appendChild(this.children[n].toNode());
        return t
    }, r.prototype.toMarkup = function () {
        var t = "<" + this.type;
        for (var e in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, e) && (t += " " + e + '="', t += o.escape(this.attributes[e]), t += '"');
        t += ">";
        for (var n = 0; n < this.children.length; n++) t += this.children[n].toMarkup();
        return t += "</" + this.type + ">"
    }, i.prototype.toNode = function () {
        return document.createTextNode(this.text)
    }, i.prototype.toMarkup = function () {
        return o.escape(this.text)
    }, t.exports = {MathNode: r, TextNode: i}
}, function (t, e, n) {
    var r = n(117), i = function (t, e) {
        var n = new r(t, e);
        return n.parse()
    };
    t.exports = i
}, function (t, e, n) {
    (function (e) {
        (function () {
            function e(t) {
                this.tokens = [], this.tokens.links = {}, this.options = t || c.defaults, this.rules = h.normal, this.options.gfm && (this.options.tables ? this.rules = h.tables : this.rules = h.gfm)
            }

            function n(t, e) {
                if (this.options = e || c.defaults, this.links = t, this.rules = p.normal, this.renderer = this.options.renderer || new r, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                this.options.gfm ? this.options.breaks ? this.rules = p.breaks : this.rules = p.gfm : this.options.pedantic && (this.rules = p.pedantic)
            }

            function r(t) {
                this.options = t || {}
            }

            function i(t) {
                this.tokens = [], this.token = null, this.options = t || c.defaults, this.options.renderer = this.options.renderer || new r, this.renderer = this.options.renderer, this.renderer.options = this.options
            }

            function o(t, e) {
                return t.replace(e ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            }

            function s(t) {
                return t.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function (t, e) {
                    return e = e.toLowerCase(), "colon" === e ? ":" : "#" === e.charAt(0) ? "x" === e.charAt(1) ? String.fromCharCode(parseInt(e.substring(2), 16)) : String.fromCharCode(+e.substring(1)) : ""
                })
            }

            function a(t, e) {
                return t = t.source, e = e || "", function n(r, i) {
                    return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), t = t.replace(r, i), n) : new RegExp(t, e)
                }
            }

            function u() {
            }

            function l(t) {
                for (var e, n, r = 1; r < arguments.length; r++) {
                    e = arguments[r];
                    for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }
                return t
            }

            function c(t, n, r) {
                if (r || "function" == typeof n) {
                    r || (r = n, n = null), n = l({}, c.defaults, n || {});
                    var s, a, u = n.highlight, h = 0;
                    try {
                        s = e.lex(t, n)
                    } catch (t) {
                        return r(t)
                    }
                    a = s.length;
                    var p = function (t) {
                        if (t) return n.highlight = u, r(t);
                        var e;
                        try {
                            e = i.parse(s, n)
                        } catch (e) {
                            t = e
                        }
                        return n.highlight = u, t ? r(t) : r(null, e)
                    };
                    if (!u || u.length < 3) return p();
                    if (delete n.highlight, !a) return p();
                    for (; h < s.length; h++) !function (t) {
                        return "code" !== t.type ? --a || p() : u(t.text, t.lang, function (e, n) {
                            return e ? p(e) : null == n || n === t.text ? --a || p() : (t.text = n, t.escaped = !0, void (--a || p()))
                        })
                    }(s[h])
                } else try {
                    return n && (n = l({}, c.defaults, n)), i.parse(e.lex(t, n), n)
                } catch (t) {
                    if (t.message += "\nPlease report this to https://github.com/chjj/marked.", (n || c.defaults).silent) return "<p>An error occured:</p><pre>" + o(t.message + "", !0) + "</pre>";
                    throw t
                }
            }

            var h = {
                newline: /^\n+/,
                code: /^( {4}[^\n]+\n*)+/,
                fences: u,
                hr: /^( *[-*_]){3,} *(?:\n+|$)/,
                heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
                nptable: u,
                lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
                list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
                table: u,
                paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
                text: /^[^\n]+/
            };
            h.bullet = /(?:[*+-]|\d+\.)/, h.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, h.item = a(h.item, "gm")(/bull/g, h.bullet)(), h.list = a(h.list)(/bull/g, h.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + h.def.source + ")")(), h.blockquote = a(h.blockquote)("def", h.def)(), h._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", h.html = a(h.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, h._tag)(), h.paragraph = a(h.paragraph)("hr", h.hr)("heading", h.heading)("lheading", h.lheading)("blockquote", h.blockquote)("tag", "<" + h._tag)("def", h.def)(), h.normal = l({}, h), h.gfm = l({}, h.normal, {
                fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
                paragraph: /^/,
                heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
            }), h.gfm.paragraph = a(h.paragraph)("(?!", "(?!" + h.gfm.fences.source.replace("\\1", "\\2") + "|" + h.list.source.replace("\\1", "\\3") + "|")(),
                h.tables = l({}, h.gfm, {
                    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
                    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
                }), e.rules = h, e.lex = function (t, n) {
                var r = new e(n);
                return r.lex(t)
            }, e.prototype.lex = function (t) {
                return t = t.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(t, !0)
            }, e.prototype.token = function (t, e, n) {
                for (var r, i, o, s, a, u, l, c, p, t = t.replace(/^ +$/gm, ""); t;) if ((o = this.rules.newline.exec(t)) && (t = t.substring(o[0].length), o[0].length > 1 && this.tokens.push({type: "space"})), o = this.rules.code.exec(t)) t = t.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({
                    type: "code",
                    text: this.options.pedantic ? o : o.replace(/\n+$/, "")
                }); else if (o = this.rules.fences.exec(t)) t = t.substring(o[0].length), this.tokens.push({
                    type: "code",
                    lang: o[2],
                    text: o[3] || ""
                }); else if (o = this.rules.heading.exec(t)) t = t.substring(o[0].length), this.tokens.push({
                    type: "heading",
                    depth: o[1].length,
                    text: o[2]
                }); else if (e && (o = this.rules.nptable.exec(t))) {
                    for (t = t.substring(o[0].length), u = {
                        type: "table",
                        header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                        align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: o[3].replace(/\n$/, "").split("\n")
                    }, c = 0; c < u.align.length; c++) /^ *-+: *$/.test(u.align[c]) ? u.align[c] = "right" : /^ *:-+: *$/.test(u.align[c]) ? u.align[c] = "center" : /^ *:-+ *$/.test(u.align[c]) ? u.align[c] = "left" : u.align[c] = null;
                    for (c = 0; c < u.cells.length; c++) u.cells[c] = u.cells[c].split(/ *\| */);
                    this.tokens.push(u)
                } else if (o = this.rules.lheading.exec(t)) t = t.substring(o[0].length), this.tokens.push({
                    type: "heading",
                    depth: "=" === o[2] ? 1 : 2,
                    text: o[1]
                }); else if (o = this.rules.hr.exec(t)) t = t.substring(o[0].length), this.tokens.push({type: "hr"}); else if (o = this.rules.blockquote.exec(t)) t = t.substring(o[0].length), this.tokens.push({type: "blockquote_start"}), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, e, !0), this.tokens.push({type: "blockquote_end"}); else if (o = this.rules.list.exec(t)) {
                    for (t = t.substring(o[0].length), s = o[2], this.tokens.push({
                        type: "list_start",
                        ordered: s.length > 1
                    }), o = o[0].match(this.rules.item), r = !1, p = o.length, c = 0; c < p; c++) u = o[c], l = u.length, u = u.replace(/^ *([*+-]|\d+\.) +/, ""), ~u.indexOf("\n ") && (l -= u.length, u = this.options.pedantic ? u.replace(/^ {1,4}/gm, "") : u.replace(new RegExp("^ {1," + l + "}", "gm"), "")), this.options.smartLists && c !== p - 1 && (a = h.bullet.exec(o[c + 1])[0], s === a || s.length > 1 && a.length > 1 || (t = o.slice(c + 1).join("\n") + t, c = p - 1)), i = r || /\n\n(?!\s*$)/.test(u), c !== p - 1 && (r = "\n" === u.charAt(u.length - 1), i || (i = r)), this.tokens.push({type: i ? "loose_item_start" : "list_item_start"}), this.token(u, !1, n), this.tokens.push({type: "list_item_end"});
                    this.tokens.push({type: "list_end"})
                } else if (o = this.rules.html.exec(t)) t = t.substring(o[0].length), this.tokens.push({
                    type: this.options.sanitize ? "paragraph" : "html",
                    pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]),
                    text: o[0]
                }); else if (!n && e && (o = this.rules.def.exec(t))) t = t.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = {
                    href: o[2],
                    title: o[3]
                }; else if (e && (o = this.rules.table.exec(t))) {
                    for (t = t.substring(o[0].length), u = {
                        type: "table",
                        header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                        align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                    }, c = 0; c < u.align.length; c++) /^ *-+: *$/.test(u.align[c]) ? u.align[c] = "right" : /^ *:-+: *$/.test(u.align[c]) ? u.align[c] = "center" : /^ *:-+ *$/.test(u.align[c]) ? u.align[c] = "left" : u.align[c] = null;
                    for (c = 0; c < u.cells.length; c++) u.cells[c] = u.cells[c].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                    this.tokens.push(u)
                } else if (e && (o = this.rules.paragraph.exec(t))) t = t.substring(o[0].length), this.tokens.push({
                    type: "paragraph",
                    text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
                }); else if (o = this.rules.text.exec(t)) t = t.substring(o[0].length), this.tokens.push({
                    type: "text",
                    text: o[0]
                }); else if (t) throw new Error("Infinite loop on byte: " + t.charCodeAt(0));
                return this.tokens
            };
            var p = {
                escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
                autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
                url: u,
                tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
                link: /^!?\[(inside)\]\(href\)/,
                reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
                nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
                strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
                em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
                code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
                br: /^ {2,}\n(?!\s*$)/,
                del: u,
                text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
            };
            p._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, p._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, p.link = a(p.link)("inside", p._inside)("href", p._href)(), p.reflink = a(p.reflink)("inside", p._inside)(), p.normal = l({}, p), p.pedantic = l({}, p.normal, {
                strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
            }), p.gfm = l({}, p.normal, {
                escape: a(p.escape)("])", "~|])")(),
                url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
                del: /^~~(?=\S)([\s\S]*?\S)~~/,
                text: a(p.text)("]|", "~]|")("|", "|https?://|")()
            }), p.breaks = l({}, p.gfm, {
                br: a(p.br)("{2,}", "*")(),
                text: a(p.gfm.text)("{2,}", "*")()
            }), n.rules = p, n.output = function (t, e, r) {
                var i = new n(e, r);
                return i.output(t)
            }, n.prototype.output = function (t) {
                for (var e, n, r, i, s = ""; t;) if (i = this.rules.escape.exec(t)) t = t.substring(i[0].length), s += i[1]; else if (i = this.rules.autolink.exec(t)) t = t.substring(i[0].length), "@" === i[2] ? (n = ":" === i[1].charAt(6) ? this.mangle(i[1].substring(7)) : this.mangle(i[1]), r = this.mangle("mailto:") + n) : (n = o(i[1]), r = n), s += this.renderer.link(r, null, n); else if (this.inLink || !(i = this.rules.url.exec(t))) {
                    if (i = this.rules.tag.exec(t)) !this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1), t = t.substring(i[0].length), s += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : o(i[0]) : i[0]; else if (i = this.rules.link.exec(t)) t = t.substring(i[0].length), this.inLink = !0, s += this.outputLink(i, {
                        href: i[2],
                        title: i[3]
                    }), this.inLink = !1; else if ((i = this.rules.reflink.exec(t)) || (i = this.rules.nolink.exec(t))) {
                        if (t = t.substring(i[0].length), e = (i[2] || i[1]).replace(/\s+/g, " "), e = this.links[e.toLowerCase()], !e || !e.href) {
                            s += i[0].charAt(0), t = i[0].substring(1) + t;
                            continue
                        }
                        this.inLink = !0, s += this.outputLink(i, e), this.inLink = !1
                    } else if (i = this.rules.strong.exec(t)) t = t.substring(i[0].length), s += this.renderer.strong(this.output(i[2] || i[1])); else if (i = this.rules.em.exec(t)) t = t.substring(i[0].length), s += this.renderer.em(this.output(i[2] || i[1])); else if (i = this.rules.code.exec(t)) {
                        t = t.substring(i[0].length);
                        var a = /^\$\$(.+)\$\$$/g, u = null;
                        a.test(i[2]) && (a.lastIndex = 0, u = a.exec(i[2])[1]), s += u ? this.renderer.codespan(i[2], !0) : this.renderer.codespan(o(i[2], !0))
                    } else if (i = this.rules.br.exec(t)) t = t.substring(i[0].length), s += this.renderer.br(); else if (i = this.rules.del.exec(t)) t = t.substring(i[0].length), s += this.renderer.del(this.output(i[1])); else if (i = this.rules.text.exec(t)) t = t.substring(i[0].length), s += this.renderer.text(o(this.smartypants(i[0]))); else if (t) throw new Error("Infinite loop on byte: " + t.charCodeAt(0))
                } else t = t.substring(i[0].length), n = o(i[1]), r = n, s += this.renderer.link(r, null, n);
                return s
            }, n.prototype.outputLink = function (t, e) {
                var n = o(e.href), r = e.title ? o(e.title) : null;
                return "!" !== t[0].charAt(0) ? this.renderer.link(n, r, this.output(t[1])) : this.renderer.image(n, r, o(t[1]))
            }, n.prototype.smartypants = function (t) {
                return this.options.smartypants ? t.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : t
            }, n.prototype.mangle = function (t) {
                if (!this.options.mangle) return t;
                for (var e, n = "", r = t.length, i = 0; i < r; i++) e = t.charCodeAt(i), Math.random() > .5 && (e = "x" + e.toString(16)), n += "&#" + e + ";";
                return n
            }, r.prototype.code = function (t, e, n) {
                if (this.options.highlight) {
                    var r = this.options.highlight(t, e);
                    null != r && r !== t && (n = !0, t = r)
                }
                return e ? '<pre><code class="' + this.options.langPrefix + o(e, !0) + '">' + (n ? t : o(t, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? t : o(t, !0)) + "\n</code></pre>"
            }, r.prototype.blockquote = function (t) {
                return "<blockquote>\n" + t + "</blockquote>\n"
            }, r.prototype.html = function (t) {
                return t
            }, r.prototype.heading = function (t, e, n) {
                return "<h" + e + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + t + "</h" + e + ">\n"
            }, r.prototype.hr = function () {
                return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
            }, r.prototype.list = function (t, e) {
                var n = e ? "ol" : "ul";
                return "<" + n + ">\n" + t + "</" + n + ">\n"
            }, r.prototype.listitem = function (t) {
                return "<li>" + t + "</li>\n"
            }, r.prototype.paragraph = function (t) {
                return "<p>" + t + "</p>\n"
            }, r.prototype.table = function (t, e) {
                return "<table>\n<thead>\n" + t + "</thead>\n<tbody>\n" + e + "</tbody>\n</table>\n"
            }, r.prototype.tablerow = function (t) {
                return "<tr>\n" + t + "</tr>\n"
            }, r.prototype.tablecell = function (t, e) {
                var n = e.header ? "th" : "td",
                    r = e.align ? "<" + n + ' style="text-align:' + e.align + '">' : "<" + n + ">";
                return r + t + "</" + n + ">\n"
            }, r.prototype.strong = function (t) {
                return "<strong>" + t + "</strong>"
            }, r.prototype.em = function (t) {
                return "<em>" + t + "</em>"
            }, r.prototype.codespan = function (t) {
                return "<code>" + t + "</code>"
            }, r.prototype.br = function () {
                return this.options.xhtml ? "<br/>" : "<br>"
            }, r.prototype.del = function (t) {
                return "<del>" + t + "</del>"
            }, r.prototype.link = function (t, e, n) {
                if (this.options.sanitize) {
                    try {
                        var r = decodeURIComponent(s(t)).replace(/[^\w:]/g, "").toLowerCase()
                    } catch (t) {
                        return ""
                    }
                    if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:")) return ""
                }
                var i = '<a href="' + t + '"';
                return e && (i += ' title="' + e + '"'), i += ">" + n + "</a>"
            }, r.prototype.image = function (t, e, n) {
                var r = '<img src="' + t + '" alt="' + n + '"';
                return e && (r += ' title="' + e + '"'), r += this.options.xhtml ? "/>" : ">"
            }, r.prototype.text = function (t) {
                return t
            }, i.parse = function (t, e, n) {
                var r = new i(e, n);
                return r.parse(t)
            }, i.prototype.parse = function (t) {
                this.inline = new n(t.links, this.options, this.renderer), this.tokens = t.reverse();
                for (var e = ""; this.next();) e += this.tok();
                return e
            }, i.prototype.next = function () {
                return this.token = this.tokens.pop()
            }, i.prototype.peek = function () {
                return this.tokens[this.tokens.length - 1] || 0
            }, i.prototype.parseText = function () {
                for (var t = this.token.text; "text" === this.peek().type;) t += "\n" + this.next().text;
                return this.inline.output(t)
            }, i.prototype.tok = function () {
                switch (this.token.type) {
                    case"space":
                        return "";
                    case"hr":
                        return this.renderer.hr();
                    case"heading":
                        return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
                    case"code":
                        return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                    case"table":
                        var t, e, n, r, i, o = "", s = "";
                        for (n = "", t = 0; t < this.token.header.length; t++) r = {
                            header: !0,
                            align: this.token.align[t]
                        }, n += this.renderer.tablecell(this.inline.output(this.token.header[t]), {
                            header: !0,
                            align: this.token.align[t]
                        });
                        for (o += this.renderer.tablerow(n), t = 0; t < this.token.cells.length; t++) {
                            for (e = this.token.cells[t], n = "", i = 0; i < e.length; i++) n += this.renderer.tablecell(this.inline.output(e[i]), {
                                header: !1,
                                align: this.token.align[i]
                            });
                            s += this.renderer.tablerow(n)
                        }
                        return this.renderer.table(o, s);
                    case"blockquote_start":
                        for (var s = ""; "blockquote_end" !== this.next().type;) s += this.tok();
                        return this.renderer.blockquote(s);
                    case"list_start":
                        for (var s = "", a = this.token.ordered; "list_end" !== this.next().type;) s += this.tok();
                        return this.renderer.list(s, a);
                    case"list_item_start":
                        for (var s = ""; "list_item_end" !== this.next().type;) s += "text" === this.token.type ? this.parseText() : this.tok();
                        return this.renderer.listitem(s);
                    case"loose_item_start":
                        for (var s = ""; "list_item_end" !== this.next().type;) s += this.tok();
                        return this.renderer.listitem(s);
                    case"html":
                        var u = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                        return this.renderer.html(u);
                    case"paragraph":
                        return this.renderer.paragraph(this.inline.output(this.token.text));
                    case"text":
                        return this.renderer.paragraph(this.parseText())
                }
            }, u.exec = u, c.options = c.setOptions = function (t) {
                return l(c.defaults, t), c
            }, c.defaults = {
                gfm: !0,
                tables: !0,
                breaks: !1,
                pedantic: !1,
                sanitize: !1,
                sanitizer: null,
                mangle: !0,
                smartLists: !1,
                silent: !1,
                highlight: null,
                langPrefix: "lang-",
                smartypants: !1,
                headerPrefix: "",
                renderer: new r,
                xhtml: !1
            }, c.Parser = i, c.parser = i.parse, c.Renderer = r, c.Lexer = e, c.lexer = e.lex, c.InlineLexer = n, c.inlineLexer = n.output, c.parse = c, t.exports = c
        }).call(function () {
            return this || ("undefined" != typeof window ? window : e)
        }())
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    "use strict";

    function n(t) {
        if (!t.__matchAtRelocatable) {
            var e = t.source + "|()",
                n = "g" + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "");
            t.__matchAtRelocatable = new RegExp(e, n)
        }
        return t.__matchAtRelocatable
    }

    function r(t, e, r) {
        if (t.global || t.sticky) throw new Error("matchAt(...): Only non-global regexes are supported");
        var i = n(t);
        i.lastIndex = r;
        var o = i.exec(e);
        return null == o[o.length - 1] ? (o.length = o.length - 1, o) : null
    }

    t.exports = r
}, function (t, e) {
    function n(t) {
        if (t = String(t), !(t.length > 1e4)) {
            var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
            if (e) {
                var n = parseFloat(e[1]), r = (e[2] || "ms").toLowerCase();
                switch (r) {
                    case"years":
                    case"year":
                    case"yrs":
                    case"yr":
                    case"y":
                        return n * c;
                    case"days":
                    case"day":
                    case"d":
                        return n * l;
                    case"hours":
                    case"hour":
                    case"hrs":
                    case"hr":
                    case"h":
                        return n * u;
                    case"minutes":
                    case"minute":
                    case"mins":
                    case"min":
                    case"m":
                        return n * a;
                    case"seconds":
                    case"second":
                    case"secs":
                    case"sec":
                    case"s":
                        return n * s;
                    case"milliseconds":
                    case"millisecond":
                    case"msecs":
                    case"msec":
                    case"ms":
                        return n;
                    default:
                        return
                }
            }
        }
    }

    function r(t) {
        return t >= l ? Math.round(t / l) + "d" : t >= u ? Math.round(t / u) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
    }

    function i(t) {
        return o(t, l, "day") || o(t, u, "hour") || o(t, a, "minute") || o(t, s, "second") || t + " ms"
    }

    function o(t, e, n) {
        if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
    }

    var s = 1e3, a = 60 * s, u = 60 * a, l = 24 * u, c = 365.25 * l;
    t.exports = function (t, e) {
        e = e || {};
        var o = typeof t;
        if ("string" === o && t.length > 0) return n(t);
        if ("number" === o && isNaN(t) === !1) return e.long ? i(t) : r(t);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
    }
}, function (t, e) {
    (function (e) {
        var n = /^[\],:{}\s]*$/, r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            i = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, o = /(?:^|:|,)(?:\s*\[)+/g,
            s = /^\s+/, a = /\s+$/;
        t.exports = function (t) {
            return "string" == typeof t && t ? (t = t.replace(s, "").replace(a, ""), e.JSON && JSON.parse ? JSON.parse(t) : n.test(t.replace(r, "@").replace(i, "]").replace(o, "")) ? new Function("return " + t)() : void 0) : null
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        var n = [], r = [];
        n.last = function () {
            return this[this.length - 1]
        };
        var i = new o.Parser({
            onprocessinginstruction: function (t, e) {
                "!doctype" === t.toLowerCase() && r.push("<" + e + ">")
            }, oncomment: function (t) {
                var e = "<!--" + t + "-->", i = n.last();
                return i ? (i.content || (i.content = []), void i.content.push(e)) : void r.push(e)
            }, onopentag: function (t, e) {
                var r = {tag: t};
                Object.keys(e).length && (r.attrs = e), n.push(r)
            }, onclosetag: function () {
                var t = n.pop();
                if (!n.length) return void r.push(t);
                var e = n.last();
                Array.isArray(e.content) || (e.content = []), e.content.push(t)
            }, ontext: function (t) {
                var e = n.last();
                return e ? (e.content || (e.content = []), void e.content.push(t)) : void r.push(t)
            }
        }, e || a);
        return i.write(t), i.end(), r
    }

    function i() {
        function t(t) {
            var n = e || a;
            return r(t, n)
        }

        var e;
        return 1 === arguments.length && s(arguments[0]) ? (e = arguments[0], t) : (e = arguments[1], t(arguments[0]))
    }

    var o = n(13), s = n(108), a = {lowerCaseTags: !1};
    t.exports = i, t.exports.defaultOptions = a
}, function (t, e, n) {
    var r;
    (function (i) {
        !function (i) {
            function o(t, e) {
                function n(t) {
                    function e(t) {
                        var e = "";
                        for (var n in t) "boolean" == typeof t[n] && t[n] ? e += " " + n : "string" != typeof t[n] && "number" != typeof t[n] || (e += " " + n + '="' + t[n] + '"');
                        return e
                    }

                    var r = "";
                    return s([].concat(t), function (t) {
                        if (t) {
                            if ("string" == typeof t || "number" == typeof t) return void (r += t);
                            if ("boolean" == typeof t.tag && !t.tag) return "object" != typeof t.content && (r += t.content), t.content;
                            if (Array.isArray(t)) return void (r += n(t));
                            var o = t.tag || "div";
                            if (a[o]) switch (r += "<" + o + e(t.attrs), i) {
                                case"slash":
                                    r += " />";
                                    break;
                                case"tag":
                                    r += "></" + o + ">";
                                    break;
                                default:
                                    r += ">"
                            } else r += "<" + o + (t.attrs ? e(t.attrs) : "") + ">" + (t.content ? n(t.content) : "") + "</" + o + ">"
                        }
                    }), r
                }

                e = e || {};
                for (var r = e.singleTags, i = e.closingSingleTag, o = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"], a = {}, u = 0, l = o.length; u < l; u++) a[o[u]] = 1;
                if (r) for (var c = 0, h = r.length; c < h; c++) a[r[c]] = 1;
                return n(t)
            }

            function s(t, e) {
                if (Array.isArray(t)) for (var n = 0, r = t.length; n < r; n++) s(e(t[n]), e); else "object" == typeof t && t.hasOwnProperty("content") && s(t.content, e);
                return t
            }

            var a = !0;
            "object" == typeof t && "object" == typeof t.exports && (t.exports = o, a = !1), "object" == typeof modules && "function" == typeof modules.define && (modules.define("postHTMLRender", function (t) {
                t(o)
            }), a = !1), r = function (t, e, n) {
                n.exports = o
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r)), a = !1, a && (i.postHTMLRender = o)
        }("undefined" != typeof window ? window : i)
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    "use strict";

    function n(t, e) {
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) t[r] = n(e(t[r]), e); else t && "object" == typeof t && t.hasOwnProperty("content") && n(t.content, e);
        return t
    }

    function r(t, e) {
        if (t instanceof RegExp) {
            if ("object" == typeof e) return !1;
            if ("string" == typeof e) return t.test(e)
        }
        return typeof t == typeof e && ("object" != typeof t || null === t ? t === e : Array.isArray(t) ? t.every(function (t) {
            return [].some.call(e, function (e) {
                return r(t, e)
            })
        }) : Object.keys(t).every(function (n) {
            var i = e[n], o = t[n];
            return "object" == typeof o && null !== o && null !== i ? r(o, i) : "boolean" == typeof o ? o !== (null == i) : i === o
        }))
    }

    t.exports = {
        walk: function (t) {
            return n(this, t)
        }, match: function (t, e) {
            return Array.isArray(t) ? n(this, function (n) {
                for (var i = 0; i < t.length; i++) if (r(t[i], n)) return e(n);
                return n
            }) : n(this, function (n) {
                return r(t, n) ? e(n) : n
            })
        }
    }
}, function (t, e, n) {
    function r(t) {
        this.plugins = t || []
    }

    function i(t) {
        return !!t && "function" == typeof t.then
    }

    function o(t, e) {
        try {
            return t()
        } catch (t) {
            e(t)
        }
    }

    function s(t) {
        t.walk = u.walk, t.match = u.match
    }

    function a(t, e) {
        return {
            get html() {
                return t(e, e.options)
            }, tree: e
        }
    }

    var u = n(133), l = n(131), c = n(132);
    r.parser = l, r.render = c, r.prototype.use = function () {
        return [].push.apply(this.plugins, arguments), this
    }, r.prototype.process = function (t, e) {
        if (e = e || {}, e.parser && (l = e.parser), e.render && (c = e.render), t = e.skipParse ? t : l(t), t.options = e, e.sync === !0) return this.plugins.forEach(function (e) {
            s(t);
            var n;
            if (2 === e.length || i(n = e(t))) throw new Error("Can’t process contents in sync mode because of async plugin: " + e.name);
            t = n || t
        }), a(c, t);
        var n = 0, r = function (t, e) {
            function a(n) {
                return r(n || t, e)
            }

            if (this.plugins.length <= n) return void e(null, t);
            s(t);
            var u = this.plugins[n++];
            if (2 === u.length) return void u(t, function (t, n) {
                return t ? e(t) : void a(n)
            });
            var l = null, c = o(function () {
                return u(t)
            }, function (t) {
                return t
            });
            return l ? void e(l) : i(c) ? void c.then(a).catch(e) : void a(c)
        }.bind(this);
        return new Promise(function (e, n) {
            r(t, function (t, r) {
                t ? n(t) : e(a(c, r))
            })
        })
    }, t.exports = function (t) {
        return new r(t)
    }
}, function (t, e, n) {
    t.exports = n(6)
}, function (t, e, n) {
    "use strict";

    function r() {
        this.head = null, this.tail = null, this.length = 0
    }

    var i = (n(3).Buffer, n(20));
    t.exports = r, r.prototype.push = function (t) {
        var e = {data: t, next: null};
        this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
    }, r.prototype.unshift = function (t) {
        var e = {data: t, next: this.head};
        0 === this.length && (this.tail = e), this.head = e, ++this.length
    }, r.prototype.shift = function () {
        if (0 !== this.length) {
            var t = this.head.data;
            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
        }
    }, r.prototype.clear = function () {
        this.head = this.tail = null, this.length = 0
    }, r.prototype.join = function (t) {
        if (0 === this.length) return "";
        for (var e = this.head, n = "" + e.data; e = e.next;) n += t + e.data;
        return n
    }, r.prototype.concat = function (t) {
        if (0 === this.length) return i.alloc(0);
        if (1 === this.length) return this.head.data;
        for (var e = i.allocUnsafe(t >>> 0), n = this.head, r = 0; n;) n.data.copy(e, r), r += n.data.length, n = n.next;
        return e
    }
}, function (t, e, n) {
    t.exports = n(48)
}, function (t, e, n) {
    (function (r) {
        var i = function () {
            try {
                return n(19)
            } catch (t) {
            }
        }();
        e = t.exports = n(49), e.Stream = i || e, e.Readable = e, e.Writable = n(29), e.Duplex = n(6), e.Transform = n(28), e.PassThrough = n(48), !r.browser && "disable" === r.env.READABLE_STREAM && i && (t.exports = i)
    }).call(e, n(8))
}, function (t, e, n) {
    t.exports = n(28)
}, function (t, e, n) {
    t.exports = n(29)
}, function (t, e) {/*!
	* screenfull
	* v3.0.0 - 2015-11-24
	* (c) Sindre Sorhus; MIT License
	*/
    !function () {
        "use strict";
        var e = "undefined" != typeof t && t.exports,
            n = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element, r = function () {
                for (var t, e, n = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], r = 0, i = n.length, o = {}; r < i; r++) if (t = n[r], t && t[1] in document) {
                    for (r = 0, e = t.length; r < e; r++) o[n[0][r]] = t[r];
                    return o
                }
                return !1
            }(), i = {
                request: function (t) {
                    var e = r.requestFullscreen;
                    t = t || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? t[e]() : t[e](n && Element.ALLOW_KEYBOARD_INPUT)
                }, exit: function () {
                    document[r.exitFullscreen]()
                }, toggle: function (t) {
                    this.isFullscreen ? this.exit() : this.request(t)
                }, raw: r
            };
        return r ? (Object.defineProperties(i, {
            isFullscreen: {
                get: function () {
                    return Boolean(document[r.fullscreenElement])
                }
            }, element: {
                enumerable: !0, get: function () {
                    return document[r.fullscreenElement]
                }
            }, enabled: {
                enumerable: !0, get: function () {
                    return Boolean(document[r.fullscreenEnabled])
                }
            }
        }), void (e ? t.exports = i : window.screenfull = i)) : void (e ? t.exports = !1 : window.screenfull = !1)
    }()
}, function (t, e, n) {
    (function (t, e) {
        !function (t, n) {
            "use strict";

            function r(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                var r = {callback: t, args: e};
                return g[d] = r, f(d), d++
            }

            function i(t) {
                delete g[t]
            }

            function o(t) {
                var e = t.callback, r = t.args;
                switch (r.length) {
                    case 0:
                        e();
                        break;
                    case 1:
                        e(r[0]);
                        break;
                    case 2:
                        e(r[0], r[1]);
                        break;
                    case 3:
                        e(r[0], r[1], r[2]);
                        break;
                    default:
                        e.apply(n, r)
                }
            }

            function s(t) {
                if (m) setTimeout(s, 0, t); else {
                    var e = g[t];
                    if (e) {
                        m = !0;
                        try {
                            o(e)
                        } finally {
                            i(t), m = !1
                        }
                    }
                }
            }

            function a() {
                f = function (t) {
                    e.nextTick(function () {
                        s(t)
                    })
                }
            }

            function u() {
                if (t.postMessage && !t.importScripts) {
                    var e = !0, n = t.onmessage;
                    return t.onmessage = function () {
                        e = !1
                    }, t.postMessage("", "*"), t.onmessage = n, e
                }
            }

            function l() {
                var e = "setImmediate$" + Math.random() + "$", n = function (n) {
                    n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && s(+n.data.slice(e.length))
                };
                t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), f = function (n) {
                    t.postMessage(e + n, "*")
                }
            }

            function c() {
                var t = new MessageChannel;
                t.port1.onmessage = function (t) {
                    var e = t.data;
                    s(e)
                }, f = function (e) {
                    t.port2.postMessage(e)
                }
            }

            function h() {
                var t = y.documentElement;
                f = function (e) {
                    var n = y.createElement("script");
                    n.onreadystatechange = function () {
                        s(e), n.onreadystatechange = null, t.removeChild(n), n = null
                    }, t.appendChild(n)
                }
            }

            function p() {
                f = function (t) {
                    setTimeout(s, 0, t)
                }
            }

            if (!t.setImmediate) {
                var f, d = 1, g = {}, m = !1, y = t.document, v = Object.getPrototypeOf && Object.getPrototypeOf(t);
                v = v && v.setTimeout ? v : t, "[object process]" === {}.toString.call(t.process) ? a() : u() ? l() : t.MessageChannel ? c() : y && "onreadystatechange" in y.createElement("script") ? h() : p(), v.setImmediate = r, v.clearImmediate = i
            }
        }("undefined" == typeof self ? "undefined" == typeof t ? this : t : self)
    }).call(e, function () {
        return this
    }(), n(8))
}, function (t, e, n) {
    function r(t, e) {
        "object" == typeof t && (e = t, t = void 0), e = e || {};
        var n, r = o(t), s = r.source, c = r.id, h = r.path, p = l[c] && h in l[c].nsps,
            f = e.forceNew || e["force new connection"] || !1 === e.multiplex || p;
        return f ? (u("ignoring socket cache for %s", s), n = a(s, e)) : (l[c] || (u("new io instance for %s", s), l[c] = a(s, e)), n = l[c]), r.query && !e.query ? e.query = r.query : e && "object" == typeof e.query && (e.query = i(e.query)), n.socket(r.path, e)
    }

    function i(t) {
        var e = [];
        for (var n in t) t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
        return e.join("&")
    }

    var o = n(144), s = n(30), a = n(50), u = n(4)("socket.io-client");
    t.exports = e = r;
    var l = e.managers = {};
    e.protocol = s.protocol, e.connect = r, e.Manager = n(50), e.Socket = n(52)
}, function (t, e, n) {
    (function (e) {
        function r(t, n) {
            var r = t;
            n = n || e.location, null == t && (t = n.protocol + "//" + n.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t), /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = "undefined" != typeof n ? n.protocol + "//" + t : "https://" + t), o("parse %s", t), r = i(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
            var s = r.host.indexOf(":") !== -1, a = s ? "[" + r.host + "]" : r.host;
            return r.id = r.protocol + "://" + a + ":" + r.port, r.href = r.protocol + "://" + a + (n && n.port === r.port ? "" : ":" + r.port), r
        }

        var i = n(47), o = n(4)("socket.io-client:url");
        t.exports = r
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    (function (t) {
        var r = n(149), i = n(53);
        e.deconstructPacket = function (t) {
            function e(t) {
                if (!t) return t;
                if (i(t)) {
                    var o = {_placeholder: !0, num: n.length};
                    return n.push(t), o
                }
                if (r(t)) {
                    for (var s = new Array(t.length), a = 0; a < t.length; a++) s[a] = e(t[a]);
                    return s
                }
                if ("object" == typeof t && !(t instanceof Date)) {
                    var s = {};
                    for (var u in t) s[u] = e(t[u]);
                    return s
                }
                return t
            }

            var n = [], o = t.data, s = t;
            return s.data = e(o), s.attachments = n.length, {packet: s, buffers: n}
        }, e.reconstructPacket = function (t, e) {
            function n(t) {
                if (t && t._placeholder) {
                    var i = e[t.num];
                    return i
                }
                if (r(t)) {
                    for (var o = 0; o < t.length; o++) t[o] = n(t[o]);
                    return t
                }
                if (t && "object" == typeof t) {
                    for (var s in t) t[s] = n(t[s]);
                    return t
                }
                return t
            }

            return t.data = n(t.data), t.attachments = void 0, t
        }, e.removeBlobs = function (e, n) {
            function o(e, u, l) {
                if (!e) return e;
                if (t.Blob && e instanceof Blob || t.File && e instanceof File) {
                    s++;
                    var c = new FileReader;
                    c.onload = function () {
                        l ? l[u] = this.result : a = this.result, --s || n(a)
                    }, c.readAsArrayBuffer(e)
                } else if (r(e)) for (var h = 0; h < e.length; h++) o(e[h], h, e); else if (e && "object" == typeof e && !i(e)) for (var p in e) o(e[p], p, e)
            }

            var s = 0, a = e;
            o(a), s || n(a)
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    function n(t) {
        if (t) return r(t)
    }

    function r(t) {
        for (var e in n.prototype) t[e] = n.prototype[e];
        return t
    }

    t.exports = n, n.prototype.on = n.prototype.addEventListener = function (t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks[t] = this._callbacks[t] || []).push(e), this
    }, n.prototype.once = function (t, e) {
        function n() {
            r.off(t, n), e.apply(this, arguments)
        }

        var r = this;
        return this._callbacks = this._callbacks || {}, n.fn = e, this.on(t, n), this
    }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n = this._callbacks[t];
        if (!n) return this;
        if (1 == arguments.length) return delete this._callbacks[t], this;
        for (var r, i = 0; i < n.length; i++) if (r = n[i], r === e || r.fn === e) {
            n.splice(i, 1);
            break
        }
        return this
    }, n.prototype.emit = function (t) {
        this._callbacks = this._callbacks || {};
        var e = [].slice.call(arguments, 1), n = this._callbacks[t];
        if (n) {
            n = n.slice(0);
            for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, e)
        }
        return this
    }, n.prototype.listeners = function (t) {
        return this._callbacks = this._callbacks || {}, this._callbacks[t] || []
    }, n.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length
    }
}, function (t, e, n) {
    function r() {
        return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
    }

    function i() {
        var t = arguments, n = this.useColors;
        if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), !n) return t;
        var r = "color: " + this.color;
        t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
        var i = 0, o = 0;
        return t[0].replace(/%[a-z%]/g, function (t) {
            "%%" !== t && (i++, "%c" === t && (o = i))
        }), t.splice(o, 0, r), t
    }

    function o() {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }

    function s(t) {
        try {
            null == t ? e.storage.removeItem("debug") : e.storage.debug = t
        } catch (t) {
        }
    }

    function a() {
        var t;
        try {
            t = e.storage.debug
        } catch (t) {
        }
        return t
    }

    function u() {
        try {
            return window.localStorage
        } catch (t) {
        }
    }

    e = t.exports = n(148), e.log = o, e.formatArgs = i, e.save = s, e.load = a, e.useColors = r, e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function (t) {
        return JSON.stringify(t)
    }, e.enable(a())
}, function (t, e, n) {
    function r() {
        return e.colors[c++ % e.colors.length]
    }

    function i(t) {
        function n() {
        }

        function i() {
            var t = i, n = +new Date, o = n - (l || n);
            t.diff = o, t.prev = l, t.curr = n, l = n, null == t.useColors && (t.useColors = e.useColors()), null == t.color && t.useColors && (t.color = r());
            var s = Array.prototype.slice.call(arguments);
            s[0] = e.coerce(s[0]), "string" != typeof s[0] && (s = ["%o"].concat(s));
            var a = 0;
            s[0] = s[0].replace(/%([a-z%])/g, function (n, r) {
                if ("%%" === n) return n;
                a++;
                var i = e.formatters[r];
                if ("function" == typeof i) {
                    var o = s[a];
                    n = i.call(t, o), s.splice(a, 1), a--
                }
                return n
            }), "function" == typeof e.formatArgs && (s = e.formatArgs.apply(t, s));
            var u = i.log || e.log || console.log.bind(console);
            u.apply(t, s)
        }

        n.enabled = !1, i.enabled = !0;
        var o = e.enabled(t) ? i : n;
        return o.namespace = t, o
    }

    function o(t) {
        e.save(t);
        for (var n = (t || "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && (t = n[i].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
    }

    function s() {
        e.enable("")
    }

    function a(t) {
        var n, r;
        for (n = 0, r = e.skips.length; n < r; n++) if (e.skips[n].test(t)) return !1;
        for (n = 0, r = e.names.length; n < r; n++) if (e.names[n].test(t)) return !0;
        return !1
    }

    function u(t) {
        return t instanceof Error ? t.stack || t.message : t
    }

    e = t.exports = i, e.coerce = u, e.disable = s, e.enable = o, e.enabled = a, e.humanize = n(150), e.names = [], e.skips = [], e.formatters = {};
    var l, c = 0
}, 100, function (t, e) {
    function n(t) {
        if (t = "" + t, !(t.length > 1e4)) {
            var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
            if (e) {
                var n = parseFloat(e[1]), r = (e[2] || "ms").toLowerCase();
                switch (r) {
                    case"years":
                    case"year":
                    case"yrs":
                    case"yr":
                    case"y":
                        return n * c;
                    case"days":
                    case"day":
                    case"d":
                        return n * l;
                    case"hours":
                    case"hour":
                    case"hrs":
                    case"hr":
                    case"h":
                        return n * u;
                    case"minutes":
                    case"minute":
                    case"mins":
                    case"min":
                    case"m":
                        return n * a;
                    case"seconds":
                    case"second":
                    case"secs":
                    case"sec":
                    case"s":
                        return n * s;
                    case"milliseconds":
                    case"millisecond":
                    case"msecs":
                    case"msec":
                    case"ms":
                        return n
                }
            }
        }
    }

    function r(t) {
        return t >= l ? Math.round(t / l) + "d" : t >= u ? Math.round(t / u) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
    }

    function i(t) {
        return o(t, l, "day") || o(t, u, "hour") || o(t, a, "minute") || o(t, s, "second") || t + " ms"
    }

    function o(t, e, n) {
        if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
    }

    var s = 1e3, a = 60 * s, u = 60 * a, l = 24 * u, c = 365.25 * l;
    t.exports = function (t, e) {
        return e = e || {}, "string" == typeof t ? n(t) : e.long ? i(t) : r(t)
    }
}, function (t, e, n) {
    function r(t, e) {
        this._id = t, this._clearFn = e
    }

    var i = Function.prototype.apply;
    e.setTimeout = function () {
        return new r(i.call(setTimeout, window, arguments), clearTimeout)
    }, e.setInterval = function () {
        return new r(i.call(setInterval, window, arguments), clearInterval)
    }, e.clearTimeout = e.clearInterval = function (t) {
        t && t.close()
    }, r.prototype.unref = r.prototype.ref = function () {
    }, r.prototype.close = function () {
        this._clearFn.call(window, this._id)
    }, e.enroll = function (t, e) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = e
    }, e.unenroll = function (t) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
    }, e._unrefActive = e.active = function (t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout(function () {
            t._onTimeout && t._onTimeout()
        }, e))
    }, n(142), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
}, function (t, e) {
    function n(t, e) {
        var n = [];
        e = e || 0;
        for (var r = e || 0; r < t.length; r++) n[r - e] = t[r];
        return n
    }

    t.exports = n
}, function (t, e) {
    (function (e) {
        function n(t, e) {
            function n() {
                if (!i) {
                    if (r("throwDeprecation")) throw new Error(e);
                    r("traceDeprecation") ? console.trace(e) : console.warn(e), i = !0
                }
                return t.apply(this, arguments)
            }

            if (r("noDeprecation")) return t;
            var i = !1;
            return n
        }

        function r(t) {
            try {
                if (!e.localStorage) return !1
            } catch (t) {
                return !1
            }
            var n = e.localStorage[t];
            return null != n && "true" === String(n).toLowerCase()
        }

        t.exports = n
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    (function (e) {
        t.exports = e
    }).call(e, {})
}, function (t, e, n) {
    var r;
    (function (t, i) {
        !function (o) {
            function s(t) {
                for (var e, n, r = [], i = 0, o = t.length; i < o;) e = t.charCodeAt(i++), e >= 55296 && e <= 56319 && i < o ? (n = t.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--)) : r.push(e);
                return r
            }

            function a(t) {
                for (var e, n = t.length, r = -1, i = ""; ++r < n;) e = t[r], e > 65535 && (e -= 65536, i += b(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), i += b(e);
                return i
            }

            function u(t, e) {
                return b(t >> e & 63 | 128)
            }

            function l(t) {
                if (0 == (4294967168 & t)) return b(t);
                var e = "";
                return 0 == (4294965248 & t) ? e = b(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (e = b(t >> 12 & 15 | 224), e += u(t, 6)) : 0 == (4292870144 & t) && (e = b(t >> 18 & 7 | 240), e += u(t, 12), e += u(t, 6)), e += b(63 & t | 128)
            }

            function c(t) {
                for (var e, n = s(t), r = n.length, i = -1, o = ""; ++i < r;) e = n[i], o += l(e);
                return o
            }

            function h() {
                if (v >= y) throw Error("Invalid byte index");
                var t = 255 & m[v];
                if (v++, 128 == (192 & t)) return 63 & t;
                throw Error("Invalid continuation byte")
            }

            function p() {
                var t, e, n, r, i;
                if (v > y) throw Error("Invalid byte index");
                if (v == y) return !1;
                if (t = 255 & m[v], v++, 0 == (128 & t)) return t;
                if (192 == (224 & t)) {
                    var e = h();
                    if (i = (31 & t) << 6 | e, i >= 128) return i;
                    throw Error("Invalid continuation byte")
                }
                if (224 == (240 & t)) {
                    if (e = h(), n = h(), i = (15 & t) << 12 | e << 6 | n, i >= 2048) return i;
                    throw Error("Invalid continuation byte")
                }
                if (240 == (248 & t) && (e = h(), n = h(), r = h(), i = (15 & t) << 18 | e << 12 | n << 6 | r, i >= 65536 && i <= 1114111)) return i;
                throw Error("Invalid WTF-8 detected")
            }

            function f(t) {
                m = s(t), y = m.length, v = 0;
                for (var e, n = []; (e = p()) !== !1;) n.push(e);
                return a(n)
            }

            var d = "object" == typeof e && e,
                g = ("object" == typeof t && t && t.exports == d && t, "object" == typeof i && i);
            g.global !== g && g.window !== g || (o = g);
            var m, y, v, b = String.fromCharCode, w = {version: "1.0.0", encode: c, decode: f};
            r = function () {
                return w
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r))
        }(this)
    }).call(e, n(54)(t), function () {
        return this
    }())
}, function (t, e) {
}, 156, 156]));