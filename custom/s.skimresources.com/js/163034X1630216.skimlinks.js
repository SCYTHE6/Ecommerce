/*
 (c) Skimlinks 2009-2020
 Build time: Wed, 01 Jul 2020 10:26:01 GMT
 Version: "14.1.5-stackpath"
*/
(function() {
    function Fb(a) {
        t(Aa, function(b) {
            null !== b.iabVendorId && Gb(b.iabVendorId, a)
        });
        t(y.partner_consents, function(b, c) {
            Hb(c) !== a && Gb(c, a)
        });
        Ba(y, ["skimlinks_consent"], a)
    }

    function Gb(a, b) {
        Ba(y, ["partner_consents", String(a), "consent"], b)
    }

    function Ib(a) {
        var b = Ca(Aa, function(b) {
            return b.active && b.label === a
        });
        return b ? null === b.iabVendorId ? !1 !== ha() : !1 !== Hb(b.iabVendorId) : !1
    }

    function nd() {
        return D(Aa, function(a, b) {
            return a && !Ib(b.label)
        }, !0)
    }

    function Hb(a) {
        var b = ha(),
            c = E(y, ["partner_consents", String(a)]);
        return 46 !== a && c ? c.consent : b
    }

    function ia() {
        return E(y, ["country"], k.country)
    }

    function ha() {
        return E(y, ["skimlinks_consent"], null)
    }

    function od(a) {
        function b(a, b) {
            if (!(!a.parentNode || Da(a, e) || a.meta && a.meta.ReadOnly)) {
                var c = pd(a, b)[0];
                t(c, function(a) {
                    !f[a] && qd(a) && (f[a] = !0, p.domain_data.domains.push(a))
                })
            }
        }
        var c = z.get_as_hash_node_dict(),
            d = Object.keys(c).length;
        if (d) {
            var e = rd(sd.concat(Kb())),
                f = {},
                n = O(function(a) {
                    V(a)
                }),
                h = 0;
            t(c, function(c, e) {
                window.setTimeout(function() {
                    try {
                        b(c, e)
                    } catch (Jb) {
                        n(Jb)
                    } finally {
                        h +=
                            1, h === d && a(Object.keys(f))
                    }
                }, 0)
            })
        } else a([])
    }

    function td(a) {
        var b;
        var c = b = null;
        var d = 5;
        a.Limit && (d = a.Limit);
        var e = function() {
            return a.Priority || 0
        };
        return {
            group_id: function() {
                return b ? b.id() : 0
            },
            dec_limit: function() {
                return d - 1
            },
            limit: function() {
                return d
            },
            action_type: function() {
                return a.ActionType
            },
            text: function() {
                return a.OriginalPhrase
            },
            start_byte: function() {
                return a.StartByte
            },
            url: function() {
                return a.Url
            },
            multi: function() {
                return a.Mt ? !0 : !1
            },
            group_priority: function() {
                return b ? b.group_priority() : e()
            },
            id: function() {
                return c ? c : a.PhraseId
            },
            groups: function() {
                var b;
                return (b = a.Groups) ? b : []
            },
            title: function() {
                return a.Unlinked ? "" : null != a.ActionTitle ? a.ActionTitle : "Shopping link provided by SkimWords"
            },
            set_title: function(b) {
                a.Title = a.Unlinked ? "" : b
            },
            occurrence: function() {
                return a.PhraseOccurrence
            },
            set_group: function(a) {
                return b = a
            },
            set_id: function(a) {
                return c = a
            }
        }
    }

    function ud() {
        var a = u.linksImpressions;
        a = {
            phr: a.skimwords.urls,
            unl: a.unlinked.urls,
            slc: a.skimlinks.count,
            swc: a.skimwords.count,
            ulc: a.unlinked.count,
            jsl: (new Date).getTime() - u.loading_started,
            pref: k.referrer,
            uc: Ea,
            t: 1,
            jsf: "",
            jv: ja
        };
        ka && (a.xrf = 1);
        return Lb(a)
    }

    function Mb(a, b) {
        var c = a.style.cssText;
        "" !== c && (c += " ");
        var d = g("link_background");
        d && (-1 === d.indexOf("#") && (d = "#" + d), c += "background-color: " + d + " !important; ");
        null !== g("link_tooltip", null) && (a.title = g("link_tooltip"));
        b && (Ua && (d = Ua, -1 === d.indexOf("#") && (d = "#" + d), c += "color: " + d + " !important; "), Va && (c += "font-weight: " + Va + " !important; "), la && (c = "double" === la ? c + "border-bottom: 1px double !important; " :
                "dashed" === la ? c + "border-bottom: 1px dashed !important; " : c + ("text-decoration: " + la + " !important; ")), Wa && (c += "font-style: " + Wa + " !important; "), g("skimwords_link_style") && (d = g("skimwords_link_style"), c += d + "; "), g("skimwords_link_class") && (a.className = B(a.className + " " + g("skimwords_link_class"))), Xa && (a.title = Xa), null === a.getAttribute("title") && (a.title = "Shopping link added by SkimWords"), a.getAttribute("data-skim-creative") && (d = parseInt(a.getAttribute("data-skim-creative"), 10) % 10, 1 === d || 2 === d)) &&
            (a.title = "");
        a.style.cssText = c;
        return !0
    }

    function Ya(a, b) {
        b = b || Nb(a);
        if (!b) return !0;
        Ob(b);
        var c = g("skimlinks_keywee_pixel", null);
        var d = q(l.location.href, "utm_campaign=fbkw");
        c && d && Za(c);
        g("vglnk") && W(b, "skimwords-link") && (a && a.stopPropagation ? a.stopPropagation() : (c = l.event, c.cancelBubble = !0));
        return !0
    }

    function Ob(a, b) {
        a && a.nodeName && "A" !== a.nodeName.toUpperCase() && "AREA" !== a.nodeName.toUpperCase() && (a = Pb(a));
        if (a) {
            var c = vd(a);
            var d = p.waypointDomain;
            if (c.length >= d.length && c.substr(0, d.length) === d) return !0;
            if (-1 !== c.indexOf(d)) d = c;
            else {
                d = a;
                var e = W(d, "skimwords-link"),
                    f = F(d, "data-skim-creative"),
                    n = F(d, "data-skimlinks-tracking") || Ea,
                    h = $a ? "&" + $a : "";
                c = v(ab(), {
                    id: Qb,
                    isjs: 1,
                    jv: ja,
                    sref: l.location,
                    url: c,
                    xguid: k.cookie,
                    xs: 1,
                    xtz: Rb(),
                    xuuid: k.uuid
                });
                f && (c.xcreo = f);
                k.isAdblockUser && (c.abp = 1);
                X && (c.site = X);
                n && (c.xcust = n);
                e && (c.xs = 2, c.xword = F(d, "data-skimwords-word") || "");
                e = P(d);
                e.icust && (c.xjsf = e.icust);
                e.sourceApp && (c.xs = e.sourceApp);
                e.clientClickId && (c.cci = e.clientClickId, delete P(d).clientClickId);
                d = p.waypointDomain +
                    "/?" + ma(c) + h
            }
            Sb(a, d, b)
        }
        return !0
    }

    function Pb(a) {
        for (; a.parentNode;) {
            a = a.parentNode;
            var b = a.nodeName.toUpperCase();
            if ("A" === b || "AREA" === b) return a
        }
        return null
    }

    function Tb(a, b, c) {
        a = l.skimlinks_settings && l.skimlinks_settings[a] || l[a];
        return J(a) ? b : r(c) ? c(a, b) : a
    }

    function g(a, b, c) {
        if (Q(a)) {
            a: {
                void 0 === a && (a = []);
                for (var d = 0; d < a.length; d++) {
                    var e = Tb(a[d]);
                    if (!J(e)) {
                        if (r(c)) {
                            b = c(e, b);
                            break a
                        }
                        b = e;
                        break a
                    }
                }
            }
            return b
        }
        return Tb(a, b, c)
    }

    function Ub() {
        return E(Fa(), ["runTimeInfo", "isAdblockUser"])
    }

    function wd(a) {
        var b =
            document.createElement("a"),
            c = {};
        b.href = a;
        if (a = b.search.substring(1))
            for (a = a.replace(/&amp;/g, "&").split("&"), b = 0; b < a.length; b++) {
                var d = a[b].split("=");
                c[d[0]] = d[1] || null
            }
        return c
    }

    function R(a) {
        return a.replace(/^www\./i, "")
    }

    function bb() {
        for (var a = "", b = 0; 8 > b; b++) a += Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        return a
    }

    function r(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    }

    function D(a, b, c) {
        for (var d = 0, e = null === a ? 0 : a.length; d < e;) c = b(c, a[d], d, a), d += 1;
        return c
    }

    function Ga(a) {
        return "console" in window && r(window.console[a]) ? window.console[a] : function() {}
    }

    function Ha(a, b) {
        return D(b, function(b, d) {
            return b && r(a[d])
        }, !0)
    }

    function xd() {
        try {
            var a = JSON.stringify({
                a: 1
            });
            return 1 === JSON.parse(a).a
        } catch (b) {
            return !1
        }
    }

    function C(a, b) {
        var c = Error(b);
        c.name = a;
        Vb(c, "getPrototypeOf" in Object ? Object.getPrototypeOf(this) : this.__proto__);
        Error.captureStackTrace && Error.captureStackTrace(c, C);
        return c
    }

    function Vb(a, b) {
        "setPrototypeOf" in Object ? Object.setPrototypeOf(a, b) : a.__proto__ =
            b
    }

    function J(a) {
        return "undefined" === typeof a || null === a
    }

    function Q(a) {
        return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
    }

    function H(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function t(a, b) {
        if (Q(a))
            for (var c = 0; c < a.length; c++) b(a[c], c, a);
        else
            for (c in a) H(a, c) && b(a[c], c, a)
    }

    function v() {
        var a = arguments[0],
            b = Array.prototype.slice.call(arguments, 1);
        J(a) && (a = {});
        t(b, function(b) {
            J(b) && (b = {});
            t(Object.keys(b), function(c) {
                a[c] = b[c]
            })
        });
        return a
    }

    function na(a,
        b) {
        var c = [];
        t(a, function(d, e) {
            b(d, e, a) && c.push(d)
        });
        return c
    }

    function Wb(a) {
        void 0 === a && (a = []);
        return na(a, function(a) {
            return !!a
        })
    }

    function Y(a, b) {
        if (!a) return [];
        if (!b) return [].concat(a);
        var c = [];
        t(a, function(d, e) {
            c.push(b(d, e, a))
        });
        return c
    }

    function B(a) {
        return J(a) ? "" : a.toString().replace(/^[\s\xA0]+|[\s\xA0]+$/g, "")
    }

    function K(a) {
        return "boolean" === typeof a
    }

    function S(a, b) {
        return "undefined" === typeof a ? b : a
    }

    function cb(a, b, c) {
        a = S(a, "");
        b = S(b, "");
        c = S(c, 0);
        return 0 === a.slice(c).indexOf(b)
    }

    function Ia(a,
        b, c) {
        a = S(a, "");
        b = S(b, "");
        c = S(c, 0);
        c = c < a.length ? c | 0 : a.length;
        return a.substr(c - b.length, b.length) === b
    }

    function db(a) {
        return encodeURIComponent(a).replace(/[!'()*~]/g, function(a) {
            return "%" + a.charCodeAt(0).toString(16).toUpperCase()
        })
    }

    function oa(a, b) {
        void 0 === b && (b = !0);
        var c = document.createElement("a");
        if (b) var d = a;
        else {
            d = void 0;
            void 0 === d && (d = "http");
            var e = "";
            /^https?:\/\//.test(a) || /^\/[^/]+/.test(a) || (e = /^\/\//.test(a) ? d + ":" : d + "://");
            d = "" + e + a
        }
        c.href = d;
        try {
            return R(c.hostname)
        } catch (f) {
            return ""
        }
    }

    function Xb(a) {
        a = a.replace(/^\??/, "").split("&");
        return D(a, function(a, c) {
            if (!c) return a;
            var b = c.split(/=/),
                e = b[0];
            if (1 === b.length) return a[e] = !0, a;
            a[e] = decodeURIComponent(b.splice(1).join(""));
            return a
        }, {})
    }

    function Yb(a) {
        var b = Xb(window.location.search);
        return H(b, a)
    }

    function ma(a, b) {
        var c = [];
        b = b || db;
        t(a, function(a, e) {
            c.push(e + "=" + b(a))
        });
        return c.join("&")
    }

    function eb(a, b, c, d) {
        function e() {
            if (r(d.onError)) {
                var b = 400 <= x.status && 500 > x.status,
                    c = 500 <= x.status && 600 > x.status;
                d.onError(new(0 === x.status ?
                    yd : b ? zd : c ? Ad : Bd)(h + " " + a + " " + x.status))
            }
        }
        b = b || {};
        d = d || {};
        var f = d.data,
            n = d.headers || {},
            h = d.method || "GET",
            x = new XMLHttpRequest;
        d.withCredentials && (x.withCredentials = !0);
        b = ma(b);
        b.length && (a = a + "?" + b);
        x.open(h, a);
        t(n, function(a, b) {
            x.setRequestHeader(b, a)
        });
        x.onload = function() {
            if (r(c))
                if (200 <= x.status && 300 > x.status) {
                    try {
                        var a = JSON.parse(x.responseText)
                    } catch (Jb) {
                        a = x.responseText
                    }
                    c(a)
                } else e()
        };
        x.onerror = e;
        x.send(f);
        return x
    }

    function E(a, b, c) {
        if (!a || !b || !b.length) return c;
        for (var d = b.length, e = 0; e < d; e++) {
            var f =
                b[e];
            if (a && f in a) a = a[f];
            else return c
        }
        return a
    }

    function Fa() {
        return window.__SKIM_JS_GLOBAL__ && r(window.__SKIM_JS_GLOBAL__.getDebugInfo) ? window.__SKIM_JS_GLOBAL__.getDebugInfo() : {}
    }

    function Cd(a) {
        var b = /(?::(\d+))?:(\d+)$/,
            c = /^([^ ]+)\s\((.*)\)$/,
            d = {
                filename: a,
                "function": "?",
                lineno: null,
                colno: null,
                in_app: !0
            };
        c.test(a) && (a = a.match(c).slice(1), c = a[1], d["function"] = a[0], d.filename = c);
        b.test(d.filename) && (c = d.filename.match(b).slice(1), a = c[0], c = c[1], a && c ? (d.lineno = parseInt(a, 10), d.colno = parseInt(c, 10)) :
            !a && c && (d.lineno = parseInt(c, 10)), d.filename = d.filename.replace(b, ""));
        return d
    }

    function Dd(a) {
        a = a.stack.replace(a.toString(), "").replace(/^\s+at\s+/gm, "").split("\n");
        a = Y(a, function(a) {
            return B(a)
        });
        a = Wb(a);
        a.reverse();
        return Y(a, Cd)
    }

    function V(a, b) {
        if (a && Zb) {
            $b.push(a);
            try {
                Ed.sendError(a, b)
            } catch (d) {
                if (d === a) ac.error(a);
                else {
                    var c = new Fd;
                    c.__sentryExtraData__ = {
                        logger_error_message: d.message,
                        logger_error_stack: d.stack,
                        initial_error_message: a.message,
                        intial_error_stack: a.stack
                    };
                    throw c;
                }
            }
        }
    }

    function G(a) {
        return r(a) ?
            function() {
                try {
                    a.apply(this, arguments)
                } catch (b) {
                    V(b)
                }
            } : a
    }

    function O(a) {
        var b = !1,
            c;
        return function() {
            if (b) return c;
            c = a.apply(this, arguments);
            b = !0;
            return c
        }
    }

    function bc(a, b) {
        return Q(a) ? a : b
    }

    function F(a, b, c) {
        3 <= arguments.length && ("undefined" !== typeof a.setAttribute ? a.setAttribute(b, c) : a[b] = c);
        try {
            var d = a[b];
            d || (d = a.getAttribute(b));
            return d
        } catch (e) {
            return null
        }
    }

    function I(a, b) {
        var c = Array.prototype.slice.call(arguments, 2),
            d = G(a);
        return window.setTimeout.apply(window, [d, b].concat(c))
    }

    function Gd(a,
        b) {
        function c() {
            a.href = a.skimlinksOriginalHref;
            delete a.skimlinksOriginalHostname;
            delete a.skimlinksOriginalHref;
            delete a.skimlinksRestoreSwappedLink
        }
        b = b || cc;
        var d = I(c, b);
        a.skimlinksOriginalHostname = a.hostname;
        a.skimlinksOriginalHref = a.href;
        a.skimlinksRestoreSwappedLink = function() {
            clearTimeout(d);
            c()
        }
    }

    function Sb(a, b, c) {
        if (a) {
            "string" === typeof a.skimlinksOriginalHref || Gd(a, c);
            c = null;
            var d = a.childNodes.length && 3 === a.childNodes[0].nodeType;
            "msie" === k.detect.browser && d && (c = a.innerHTML);
            a.href = b;
            c && c !==
                a.innerHTML && (a.innerHTML = c)
        }
    }

    function fb(a, b) {
        var c = b ? b.charAt(0).toUpperCase() + b.slice(1) : "";
        return a["skimlinksOriginal" + c] || a[b]
    }

    function dc(a) {
        var b = a.href;
        b = k.cookie ? b.replace(/([&?])xguid=([a-fA-F0-9]{32})/, "$1xguid=" + k.cookie) : b.replace(/([&?]xguid=[a-fA-F0-9]{32})/, "");
        b !== a.href && Sb(a, b);
        return b
    }

    function ec(a) {
        a = a || document;
        a = a.body || a.getElementsByTagName("body")[0];
        if (!a) throw new fc;
        return a
    }

    function Za(a, b, c) {
        if (!L) {
            L = document.createElement("iframe");
            L.id = "skimlinks-pixels-iframe";
            try {
                ec().appendChild(L)
            } catch (f) {
                f instanceof fc && document.documentElement.appendChild(L)
            }
            var d = L;
            d.width = 0;
            d.height = 0;
            d.style.display = "none"
        }
        var e = L.contentDocument || L.contentWindow.document;
        d = ec(e);
        d || (d = document.createElement("body"), e.appendChild(d));
        e = e.createElement("img");
        e.src = a;
        e.width = 1;
        e.height = 1;
        r(b) && (e.onload = G(b));
        r(c) && (e.onerror = G(c));
        d.appendChild(e)
    }

    function ab() {
        var a = {};
        gb && (a.dnt = gb);
        gc && (a.fdnt = 1);
        return a
    }

    function pa(a, b, c, d) {
        var e = d || {};
        d = e.usePixel || !1;
        var f = e.useSendBeacon ||
            !1;
        e = e.callback || function() {};
        c = v({}, c, ab());
        f ? hc(a, b, c, e) : d ? ic(a, b, c, e) : hb(a, b, c, e)
    }

    function hc(a, b, c, d) {
        b = JSON.stringify(b);
        return navigator.sendBeacon && (a = ib(a, c), navigator.sendBeacon(a, b)) ? (d && d(), !0) : !1
    }

    function ic(a, b, c, d) {
        c = v({}, c);
        c.rnd = Math.random();
        b && (c.data = JSON.stringify(b));
        Za(ib(a, c), d, d)
    }

    function hb(a, b, c, d) {
        b = JSON.stringify(b);
        Ja.post(ib(a, c), {}, d, {
            headers: {
                "Content-type": "text/plain"
            },
            data: b,
            withCredentials: !0
        })
    }

    function ib(a, b) {
        var c = ma(b),
            d = "" + Hd + a;
        return c ? d + "?" + c : d
    }

    function q(a,
        b) {
        return r(a.indexOf) ? -1 < a.indexOf(b) : !1
    }

    function Ka(a) {
        return q(a, jc) || q(a, "go.redirectingat.com") || q(p.waypointDomain, a)
    }

    function Id(a, b) {
        if (!a) throw Error("[matchSelector] First argument needs to be an html element.");
        var c = window.Element.prototype;
        c = c.matches || c.msMatchesSelector || c.mozMatchesSelector || c.webkitMatchesSelector;
        if (r(c)) try {
            return c.call(a, b)
        } catch (e) {
            return !1
        }
        c = (a.document || a.ownerDocument).querySelectorAll(b);
        for (var d = 0; c[d] && c[d] !== a;) d += 1;
        return !!c[d]
    }

    function Da(a, b) {
        var c =
            Jd(a);
        if (!c || !Q(b) || 0 === b.length) return !1;
        var d = b.map(function(a) {
            return a + " *"
        }).concat(b).join(",");
        return Id(c, d)
    }

    function Jd(a) {
        for (; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.parentNode;
        return a
    }

    function Ca(a, b) {
        for (var c = 0; c < a.length; c++)
            if (b(a[c])) return a[c]
    }

    function Z(a, b) {
        if ("function" != typeof a || null != b && "function" != typeof b) throw new TypeError("Expected a function");
        if (!Z.Cache) return a;
        var c = function e() {
            for (var c = arguments.length, n = Array(c), h = 0; h < c; h++) n[h] = arguments[h];
            c = b ? b.apply(this,
                n) : n[0];
            h = e.cache;
            if (h.has(c)) return h.get(c);
            n = a.apply(this, n);
            e.cache = h.set(c, n) || h;
            return n
        };
        c.cache = new Z.Cache;
        return c
    }

    function kc(a, b) {
        return !!Ca(b, function(b) {
            var c = cb("*"),
                e = Ia("*"),
                f = b.replace(/\*/g, "");
            return c && e ? q(a, f) : c ? Ia(a, f) : e ? cb(a, f) : a === b
        })
    }

    function jb(a, b) {
        return a && a.length && b ? "undefined" !== typeof Ca(a, b) : !1
    }

    function Kd(a) {
        return g("_merchantSettings") ? jb(Ld, function(b) {
            return q(a, b)
        }) : !1
    }

    function lc(a) {
        if (!a || !a.href) return !0;
        var b = B(fb(a, "href"));
        (b = !mc(b)) || (b = [].concat(Md(),
            Kb(), nc), b = b.length && Da(a, b) ? !0 : kb.length ? !Da(a, kb) : !1);
        return b
    }

    function mc(a) {
        if (!a || Kd(a)) return !1;
        var b = p.hostname;
        var c = S(void 0, !0);
        c = oa(a, c);
        var d = Ia(c, "." + b) || Ia(b, "." + c);
        if (b = c !== b && !d) a = oa(a), a = La.length ? !kc(a, La) : kc(a, Nd()), b = !a;
        return b
    }

    function Od(a) {
        var b;
        if (b = oc) null === a.offsetParent ? b = !0 : (b = l.getComputedStyle, b = r(b) ? "hidden" === b(a).visibility : !1);
        if (b) return w.IGNORE;
        var c = B(fb(a, "href"));
        b = R(fb(a, "hostname"));
        c = c ? /^https?:\/\//.test(c) || /^\/\//.test(c) : !1;
        if (c && !lc(a)) {
            if (ka) return w.TRACK;
            if (!0 === p.aff_domains[b] || H(lb, b)) return w.AFFILIATE;
            if (Ka(b)) return w.PRE_AFFILIATED;
            if (a = mb) a = !H(p.aff_domains, b) || J(p.aff_domains[b]);
            return a ? w.UNKNOWN : "" === k.cookie && pc ? w.AFFILIATE : w.TRACK
        }
        return w.IGNORE
    }

    function W(a, b) {
        if (!a || !a.className || !b) return !1;
        var c = a && a.className ? B(a.className).split(/\s+/) : [];
        return q(c, b)
    }

    function Ba(a, b, c) {
        if (!a || !b || !b.length) return a;
        for (var d = b.length, e = a, f = null, n = 0; n < d; n++) {
            var h = b[n];
            if (n === d - 1) {
                try {
                    a[h] = c
                } catch (x) {
                    e[f] = {}, e[f][h] = c
                }
                break
            }(e = !(h in a)) || (e =
                a[h], f = typeof e, e = !(null !== e && ("object" === f || "function" === f)));
            e && (a[h] = {});
            e = a;
            f = h;
            a = a[h]
        }
        return a
    }

    function qc(a) {
        if ("string" !== typeof a.skimlinksOriginalHref) return !1;
        var b = P(a);
        b = Pd(a.href, b);
        a.href = b;
        return !0
    }

    function Pd(a, b) {
        var c = wd(a);
        b.icust && b.icust !== c.xjsf && (c.xjsf = db(b.icust));
        b.sourceApp && b.sourceApp !== c.xs && (c.xs = b.sourceApp);
        c = ma(c, function(a) {
            return a
        });
        return p.waypointDomain + "?" + c
    }

    function P(a) {
        if (!a) throw Error("getAnchorMetaData takes an anchor HTML element as an argument");
        var b =
            E(a, [rc]);
        b || (b = {
            icust: null,
            sourceApp: null
        }, Ba(a, [rc], b));
        return b
    }

    function sc(a, b, c) {
        b = v({}, b, {
            domain_id: qa,
            publisher_id: ra,
            page_url: l.location.href,
            impression_id: k.uuid,
            jv: ja
        });
        var d = {};
        navigator.sendBeacon ? d.useSendBeacon = !!c : d.usePixel = !!c;
        pa("/generic_tracking/" + a, b, {}, d)
    }

    function Nb(a) {
        a = a.target || a.srcElement || a.originalTarget;
        if (!a) return null;
        var b = (a.nodeName || "").toLowerCase();
        return q(["a", "area"], b) ? a : Pb(a)
    }

    function Ma(a) {
        try {
            return a()
        } catch (b) {}
    }

    function Qd(a) {
        var b = g("gtag");
        Ma(function() {
            b("event",
                aa, {
                    event_category: "click",
                    event_label: a
                })
        })
    }

    function Rd(a) {
        var b = g("ga");
        Ma(function() {
            b("send", "event", "click", aa, a)
        })
    }

    function Sd(a) {
        var b = g("_gaq");
        Ma(function() {
            b.push(["_trackEvent", "click", aa, a])
        })
    }

    function Td(a) {
        var b = g("pageTracker");
        b._trackPageview && Ma(function() {
            b._trackPageview("/" + aa + "/" + a)
        })
    }

    function Ud(a, b) {
        return D(Object.keys(b), function(c, d) {
            var e = a[d] === b[d];
            return c && e
        }, !0)
    }

    function tc(a) {
        return D(a, function(a, c) {
            return a.concat(c)
        }, [])
    }

    function Na(a) {
        a = a ? "." + a : "";
        return tc(M.querySelectorAll("a[href]" +
            a + ", area[href]" + a))
    }

    function m(a, b, c) {
        b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c;
        return a
    }

    function Vd(a, b) {
        t(a, function(a) {
            var c = q(b, a) && !Ka(a);
            p.aff_domains[a] = c
        })
    }

    function Wd(a, b) {
        return !jb(a, function(a) {
            return !b(a)
        })
    }

    function Xd() {
        for (var a = new ba, b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
        a.waitFor(c);
        return a
    }

    function nb(a) {
        var b = uc[a];
        if (!b) throw Error("Unknown service " + a);
        return b
    }

    function Yd(a) {
        var b = F(a, "rel"),
            c = R(a.hostname);
        !b && c && !0 === p.aff_domains[c] && F(a, "rel", "nofollow")
    }

    function Zd() {
        vc && t(Na(), Yd)
    }

    function $d(a) {
        if (a.affiliationType === w.IGNORE) return !1;
        var b = a.anchor,
            c = a.affiliationType,
            d = a.nativeEvent;
        if (a.type === T.LEFT_CLICK)
            if (b = a.anchor, c = a.affiliationType, c === w.AFFILIATE || c === w.UNKNOWN) {
                b = a.anchor;
                c = a.nativeEvent;
                d = a.clientClickId;
                var e, f, n;
                if (n = g("skimlinks_strip_attribute", !1))
                    for (f in n)
                        if (H(n, f)) {
                            var h = n[f];
                            (e = F(b, f)) && 0 === e.indexOf(h) && (e = e.substr(h.length), F(b, f, e))
                        }
                sa && F(b, "target", sa);
                P(a.anchor);
                P(b).clientClickId = d;
                qc(b);
                aa && (a = b.href, g("gtag") ? Qd(a) : g("ga") ? Rd(a) : g("_gaq") ? Sd(a) : g("pageTracker") && Td(a));
                a = wc ? (a = F(b, "onclick")) && q(a.toString(), "return false") ? !0 : (a = b.onclick) && r(a) && q(a.toString(), ".preventDefault()") ? !0 : !1 : !1;
                a ? (Ya(c, b), (sa ? l.open(b.href, sa) : l.open(b.href, "_blank")).focus()) : Ya(c, b)
            } else c === w.PRE_AFFILIATED ? dc(b) : c === w.TRACK && (a = {
                publisher_id: ra,
                publisher_domain_id: qa,
                referrer: l.location.toString(),
                pref: k.referrer,
                site: "" + X,
                url: b.href,
                custom: F(b, "data-skimlinks-tracking") ||
                    Ea || "",
                xtz: k.timezone,
                uuid: k.uuid,
                product: "1"
            }, ka && (a.xrf = 1), pa("/naclicks", a, null, {
                usePixel: !0
            }));
        else {
            try {
                if (n = P(b), !n.icust || -1 !== n.icust.indexOf("other_click__")) {
                    e = "other_click__" + d.type + " [" + (void 0 != d.button ? d.button : "") + "]";
                    if (32 < String(e).length) throw Error(e + " is not a valid icust value. The value should be less than 33 chars");
                    P(b).icust = e;
                    qc(b)
                }
            } catch (x) {}
            c === w.AFFILIATE || c === w.UNKNOWN ? Ob(b, 200) : c === w.PRE_AFFILIATED && dc(b)
        }
        return !0
    }

    function ae() {
        nb(ca.ANCHOR_CLICK_INTERCEPTOR).registerInterceptor($d,
            ta.SKIMLINKS)
    }

    function be() {
        k.skimlinksEnabled && (A.on("skim_js_start", ae), U.whenBeaconFullyReady(Zd))
    }

    function xc(a) {
        var b;
        return a && -1 !== a.indexOf("class=") && (b = a.match(/([^[]+)\[class=([^\]]+)\]/i)) && 3 === b.length ? b[1] + "." + b[2] : a
    }

    function ce() {
        var a = Na();
        return D(a, function(a, c) {
            var b = R(c.hostname),
                e = b && !lc(c) && !Ka(b),
                f = H(p.aff_domains, b);
            e && !f && (a.push(b), p.aff_domains[b] = null, p.domain_data.domains.push(b));
            return a
        }, [])
    }

    function yc(a) {
        var b = ce();
        return U.sendBeaconRequest(b, a)
    }

    function zc(a, b) {
        t(a,
            function(a) {
                void 0 === p.aff_domains[a] && (p.aff_domains[a] = null)
            });
        U.sendBeaconRequest(a, da.AUX).readyState.whenReady(b)
    }

    function Lb(a) {
        return v({
            pag: l.location.href,
            guid: k.cookie,
            uuid: k.uuid,
            tz: k.timezone,
            publisher_id: ra,
            publisher_domain_id: qa
        }, a)
    }

    function Ac(a) {
        if (0 !== u.awaitedModules.length && (u.awaitedModules = na(u.awaitedModules, function(b) {
                return b !== a
            }), 0 === u.awaitedModules.length)) {
            var b = ud();
            pa("/page", b)
        }
    }

    function de(a) {
        a = a.match.phrase;
        return {
            w: a.text(),
            lp: a.url(),
            t: Oa.creative
        }
    }

    function ob(a) {
        a =
            a || [];
        var b = D(a, function(a, b, e) {
            a[e] = b;
            return a
        }, {});
        u.linksImpressions.unlinked = {
            count: a.length,
            urls: b
        };
        Ac("unlinked")
    }

    function pb(a) {
        return String(a).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function rd(a) {
        return D(a, function(a, c) {
            return q(a, c) ? a : a.concat(c)
        }, [])
    }

    function qb(a, b, c, d) {
        void 0 === d && (d = !1);
        if (a && (a.nodeName || a === l))
            if (M.addEventListener) {
                var e = G(c.bind(a));
                a.addEventListener(b, e, d)
            } else a.attachEvent("on" + b, function() {
                return 7 > k.detect.version &&
                    !l.event ? (I(c.bind(a, l.event), 100), !0) : c.call(a, l.event)
            })
    }

    function Bc(a, b) {
        Ya(a, b)
    }

    function ee() {
        l.__SKIM_JS_GLOBAL__.bundledEntries.unlinked = !0;
        if (k.unlinkedEnabled) {
            if (k.skimwordsEnabled) A.on("instant_api_callback_settings", fe);
            else U.whenPostPageLoadBeaconCallCompleted(Cc);
            A.on("dom_changed", Dc)
        }
    }

    function fe() {
        var a = ua.settings;
        2 === a.nc ? k.unlinkedEnabled && zc(p.domain_data.domains, Ec) : k.unlinkedEnabled && (a.includes ? (N && N.length && (a.excludes = a.excludes.concat(N)), z.traverse(a.includes, a.excludes,
            a.read_onlys)) : N && N.length ? z.traverse(["body"], N, []) : z.traverse(["body"], [], []));
        Cc()
    }

    function Cc() {
        a: {
            var a = M.getElementsByTagName("body");
            if (a.length) {
                a = a[0].textContent || a[0].innerText;
                var b;
                if (b = a) a = /$|\b(?:https?:\/\/)?(?:[-_a-zA-Z]+\.)*(?:[-_a-zA-Z]{2,}\.[-_\w]{2,5}\b)[^[\]\s]*\b|$/gi.exec(a), b = a.length && "" !== a[0] ? !0 : !1;
                if (b) {
                    a = !0;
                    break a
                }
            }
            a = !1
        }
        a ? (k.skimwordsEnabled || z.traverse([], N, []), Dc()) : ob()
    }

    function Dc() {
        od(function(a) {
            a.length ? zc(a, Ec) : ob()
        })
    }

    function Ec() {
        var a = [];
        Object.keys(p.aff_domains).length &&
            (t(Oa.url_spans, function(b) {
                p.aff_domains[b.match.domain] && (ge(b.node, b.match, !0), a.push(de(b)))
            }), I(function() {
                var a;
                var c = Na("skimlinks-unlinked");
                var d = [];
                var e = 0;
                for (a = c.length; e < a; e++) {
                    var f = c[e];
                    d.push(he(f))
                }
                return d
            }, 10));
        ob(a)
    }

    function ea(a) {
        return !!a && q(ie, a.toUpperCase())
    }

    function je(a) {
        var b = Math.random(),
            c = 0;
        return Ca(a, function(a) {
            a = c + a.weight;
            if (b < a) return !0;
            c = a;
            return !1
        })
    }

    function ke(a) {
        a = a.reduce(function(a, c) {
            var b = parseFloat(c.weight);
            (isNaN(b) || 0 > b || 1 < b) && Fc('"weight" field should be a number between (0, 1].');
            return a + b
        }, 0);
        1 !== a && Fc("Sum of all the weights should be equal 1 but got " + a + ".")
    }

    function le(a) {
        return jb(a, function(a) {
            return H(a, "weight")
        })
    }

    function Fc(a) {
        throw Error("Error in variants setup. " + a);
    }

    function rb(a, b, c, d, e) {
        d = ((d || 0) / 1E3).toFixed(2);
        b = {
            consent: a,
            publisher_domain_id: qa,
            publisher_id: ra,
            decision_time: parseFloat(d),
            test_case: Pa.id,
            page_url: b,
            destination_url: c
        };
        Gc.setItem("skimCONSENT", a);
        pa("/consent", b, null, {
            callback: e
        })
    }

    function me(a) {
        var b = {
            nocache: Date.now()
        };
        Ja.get(Hc + "/iab",
            b,
            function(b) {
                y = b;
                r(a) && a(y)
            }, {
                withCredentials: !0
            })
    }

    function sb(a) {
        var b = {};
        if (y) {
            var c = ha();
            K(c) && (b["46"] = c);
            t(y.partner_consents, function(a, c) {
                K(a.consent) && (b[c] = a.consent)
            })
        }
        c = {
            nocache: Date.now()
        };
        Ja.post(Hc + "/iab", c, function(b) {
            y = b;
            r(a) && a(y)
        }, {
            data: JSON.stringify(b),
            withCredentials: !0
        })
    }

    function ne() {
        ea(k.country) ? me(oe) : (Ic.setReady(), A.publish("EVENTS__CONSENT_RESOLVED"))
    }

    function oe() {
        var a = k.consent,
            b = k.pageLocation,
            c = ha();
        K(a) && null === c ? (Fb(a), sb()) : K(c) && c !== a && rb(c, b, "IAB_CONSENT_SYNC",
            0);
        Ic.setReady();
        A.publish("EVENTS__CONSENT_RESOLVED")
    }

    function pe() {
        Jc && (tb.length || Kc.length) && sc("cookie_sync_tracking", {
            guid: k.cookie,
            synced: Y(tb, function(a) {
                return {
                    provider: a.label
                }
            })
        })
    }

    function qe(a) {
        tb.push(a)
    }

    function re(a) {
        Kc.push(a)
    }

    function se(a) {
        var b = {
            SKIM__GDPR_APPLICABLE: ea(ia()) ? 1 : 0,
            SKIM__CONSENT_STRING: E(y, ["consent_string"], null)
        };
        return Y(a, function(a) {
            return v({}, a, {
                url: te(a.url, b)
            })
        })
    }

    function te(a, b) {
        t(b, function(b, d) {
            J(b) && (b = "");
            a = a.replace("${" + d + "}", b)
        });
        return a
    }

    function ue(a,
        b, c) {
        var d = na(Aa, function(d) {
                var e = !d.active;
                var f = "US" === k.country && "CA" === k.countryState ? !0 : !1;
                (f = !f) || (f = d.isCcpaSensitive ? !1 : !0);
                var n = Ib(d.label);
                n = !ea(ia()) || n;
                var g = c ? c.toUpperCase() : "";
                g = d.excludedCountries && d.excludedCountries.length && (q(d.excludedCountries, "EU") && ea(g) || q(d.excludedCountries, g)) ? !1 : d.includedCountries && d.includedCountries.length ? q(d.includedCountries, g) || q(d.includedCountries, "EU") && ea(g) ? !0 : !1 : !0;
                return !e && g && n && f ? (e = a[d.label]) ? (e = e.timestamp, f = d.resyncAfter, d = E(f, [0],
                    2), f = E(f, [1], "days"), e + d * ve[f] <= b) : !0 : !1
            }),
            e = na(d, function(a) {
                return 1 === a.priority
            });
        d = e.length ? e : d;
        var f = [];
        t(d, function(a) {
            var b = Math.max(1, a.priority) - 1;
            f[b] || (f[b] = []);
            f[b].push(a)
        });
        return D(f, function(a, b) {
            if (b && b.length) {
                var c = b.length;
                for (var d, e; c;) e = Math.floor(Math.random() * c), --c, d = b[c], b[c] = b[e], b[e] = d;
                c = b
            } else c = [];
            return a.concat(c)
        }, [])
    }

    function we(a) {
        var b = {};
        if (!a) return b;
        a = Y(a.split("|"), function(a) {
            return a.split(":")
        });
        return D(a, function(a, b) {
            var c = b[0];
            a[c] = {
                label: c,
                timestamp: parseInt(b[1],
                    10)
            };
            return a
        }, {})
    }

    function Lc(a) {
        if (a.length) {
            a = se(a);
            var b = a.shift(),
                c = O(function() {
                    Lc(a)
                }),
                d = function(d) {
                    return function() {
                        d(b);
                        0 === a.length && pe();
                        c()
                    }
                };
            Za(b.url, d(qe), d(re));
            I(c, 500)
        }
    }

    function xe() {
        l.__SKIM_JS_GLOBAL__.bundledEntries.audience = !0;
        if (!(Mc || ea(ia()) && nd())) {
            var a = we(k.cookieSyncString);
            a = ue(a, k.lastBeaconTimestamp, k.country);
            Lc(a)
        }
    }

    function ye(a, b) {
        var c = v({}, ze, b || {}),
            d = document.createElement("script");
        d.src = a;
        d.type = "text/javascript";
        d.async = c.async;
        d.onload = G(c.onLoad);
        d.onerror =
            G(function() {
                V(new Ae(a));
                c.onError()
            });
        document.head.appendChild(d);
        return d
    }

    function Nc() {
        if (window._isCypress) return !1;
        try {
            return window.top.document, !0
        } catch (a) {
            return !1
        }
    }

    function ub(a) {
        return Oc()[a]
    }

    function Be(a, b, c) {
        Pc(a) && Qc[a] === b ? c(ub(a)) : ye(b, {
            onLoad: function() {
                Pc(a) && (Qc[a] = b, c(ub(a)))
            }
        })
    }

    function Pc(a) {
        var b = Oc();
        return H(b, a)
    }

    function Oc() {
        va.__SKIM_JS_GLOBAL__ || (va.__SKIM_JS_GLOBAL__ = {});
        va.__SKIM_JS_GLOBAL__.modules || (va.__SKIM_JS_GLOBAL__.modules = {});
        return va.__SKIM_JS_GLOBAL__.modules
    }

    function Ce(a, b, c) {
        var d = document.createElement(a);
        t(b || {}, function(a, b) {
            var c = b.split(".");
            Ba(d, c, a)
        });
        "STYLE" === d.tagName && (d.type = "text/css");
        "SCRIPT" === d.tagName && (d.type = "text/javascript");
        Rc(d, [].concat(c || []));
        return d
    }

    function Rc(a, b) {
        t(b, function(b) {
            if (Q(b)) Rc(a, b);
            else {
                var c = "string" === typeof b;
                "STYLE" === a.tagName && c && a.styleSheet ? a.styleSheet.cssText += b : (c && (b = document.createTextNode(b)), a.appendChild(b))
            }
        })
    }

    function De(a) {
        var b = B(a.skimlinksOriginalHref || a.href);
        return Ce("a", {
            href: b,
            target: "_blank" === a.target ? "_blank" : "_parent",
            rel: a.rel
        })
    }

    function Sc(a) {
        var b = ub(Pa.moduleName);
        if (b) {
            var c = De(a);
            c.onclick = function(a) {
                nb(ca.ANCHOR_CLICK_INTERCEPTOR).triggerLeftClickFromMouseEvent(a, ta.SKIMLINKS)
            };
            var d = B(a.skimlinksOriginalHref || a.href),
                e = "_blank" === a.target,
                f = k.pageLocation,
                n = Date.now(),
                h = O(function(a) {
                    var b = Date.now() - n;
                    Fb(a);
                    if (e) rb(a, f, d, b), sb(), c.click();
                    else {
                        var h = O(function() {
                                c.click()
                            }),
                            x = 0,
                            g = function() {
                                x += 1;
                                2 === x && h()
                            };
                        rb(a, f, d, b, g);
                        sb(g);
                        I(h, 1E3)
                    }
                });
            new b({
                anchorClone: c,
                publisherDomain: R(p.hostname),
                merchantDomain: oa(d),
                onResolve: function() {
                    return h(!0)
                },
                onReject: function() {
                    return h(!1)
                }
            })
        }
    }

    function Ee() {
        if (Fe()) {
            var a = Pa.moduleName,
                b = Pa.getUrl;
            var c = Yb("skimlinks_locale");
            var d = Xb(window.location.search).skimlinks_locale;
            c = c ? d : (c = ia()) ? Ge[c.toUpperCase()] || "en" : "en";
            c = E(y, ["locale"], c);
            b = b(c);
            Be(a, b, He)
        }
    }

    function He() {
        nb(ca.ANCHOR_CLICK_INTERCEPTOR).registerInterceptor(Ie, ta.CONSENT)
    }

    function Ie(a) {
        if (a.type !== T.LEFT_CLICK) return !1;
        var b = a.anchor,
            c = a.nativeEvent;
        a = a.affiliationType;
        a = a === w.AFFILIATE || a === w.PRE_AFFILIATED;
        if (!a) return !1;
        c.preventDefault();
        Sc(b);
        return !0
    }

    function Je() {
        A.on("skim_js_init", function() {
            l.__SKIM_JS_GLOBAL__.bundledEntries.GDPRConsent = !0;
            l.skimlinksAPI.consent = {
                openConsentModal: Sc
            }
        });
        A.on("EVENTS__CONSENT_RESOLVED", Ee)
    }

    function Ke() {
        return D(Na(), function(a, b) {
            var c = B(b.href),
                d = R(b.hostname),
                e;
            (e = !(!W(b, "skimwords-link") && !W(b, "skimlinks-unlinked")) || !mc(c)) || (e = b && Q(Qa) && 0 !== Qa.length ? Da(b, Qa) : !1);
            if (e) return a;
            (e = a.urls[c]) || (e = {
                count: 0,
                ae: !0 === p.aff_domains[d] || (null === p.aff_domains[d] || void 0 === p.aff_domains[d]) && mb && !Ka(d) ? 1 : 0
            });
            e.count++;
            a: {
                if (-1 !== c.indexOf("#slm-") && (d = c.split("#slm-"), 2 === d.length && !isNaN(d[1]) && 10 * parseInt(d[1], 10) === 10 * d[1])) {
                    d = parseInt(d[1], 10);
                    break a
                }
                d = null
            }
            d && (e.slmcid = d);
            1 === e.ae && a.count++;
            e.slmcid && (d = e.slmcid, q(u.campaign_ids, d) || u.campaign_ids.push(d));
            if (!Tc && 0 === e.ae) return a;
            a.urls[c] = e;
            return a
        }, {
            urls: {},
            count: 0
        })
    }

    function Le() {
        t(Me, function(a) {
            var b = l;
            "skimlinks_context_window" ===
            a && (b = window);
            H(b, a) && (a = {
                page_var: a,
                value: JSON.stringify(b[a])
            }, sc("page_variable_tracking", a))
        })
    }

    function Ne() {
        var a = O(function() {
            u.linksImpressions.skimlinks = Ke();
            Ac("main-tracking");
            if (Object.keys(u.linksImpressions.skimlinks.urls).length) {
                var a = Lb({
                    dl: u.linksImpressions.skimlinks.urls,
                    hae: u.linksImpressions.skimlinks.count ? 1 : 0,
                    typ: "l"
                });
                pa("/link", a)
            }
        });
        U.whenNoRequestsPending(a);
        I(a, 2E3)
    }

    function Oe() {
        u.awaitedModules.push("main-tracking");
        k.skimwordsEnabled && u.awaitedModules.push("skimwords");
        k.unlinkedEnabled && u.awaitedModules.push("unlinked");
        Uc && U.whenPostPageLoadBeaconCallCompleted(Ne);
        if (navigator.sendBeacon && 1 > 1E4 * Math.random()) {
            var a = {
                    domain_id: qa,
                    publisher_id: ra,
                    page_url: l.location.href,
                    impression_id: k.uuid,
                    jv: ja
                },
                b = hc("/generic_tracking/trackingMethodExperiment", v({
                    trackingMethod: "sendBeacon"
                }, a));
            hb("/generic_tracking/trackingMethodExperiment", v({
                trackingMethod: "xhr"
            }, a));
            b || hb("/generic_tracking/trackingMethodExperiment", v({
                trackingMethod: "sendBeaconFailed"
            }, a))
        }
    }

    function Pe() {
        Le()
    }

    function Vc(a, b) {
        fa || 1E3 < b ? r(a) && (fa ? vb ? a(!0) : a(!1) : a(!1)) : I(Vc, b *= 2, a, b)
    }

    function Wc() {
        fa || (wa.complete && xa.complete && (fa = !0), fa && "0" != wa.width && "0" == xa.width && (vb = !0))
    }

    function Qe(a) {
        function b(a) {
            return a.toLowerCase().replace(/^\/\/|^https?:\/\//, "")
        }
        var c = Y(Xc, b);
        return q(c, b(a))
    }

    function Re() {
        return {
            skimOptions: Se,
            runTimeInfo: v({}, {
                aff_domains: p.aff_domains
            }, {
                consentState: y
            }, {
                loggedErrors: $b
            }, k)
        }
    }

    function Te(a, b) {
        var c = !1,
            d;
        return function() {
            if (c) return d;
            I(function() {
                c = !1
            }, b);
            c = !0;
            return d =
                a.apply(this, arguments)
        }
    }

    function Yc(a, b, c, d) {
        void 0 === b && (b = []);
        if (a) {
            var e = Te(c, 200);
            t(b, function(b) {
                try {
                    qb(a, b, e, d)
                } catch (n) {}
            })
        }
    }

    function Ue() {
        var a = new Ve;
        uc[ca.ANCHOR_CLICK_INTERCEPTOR] = a
    }

    function We() {
        l.__SKIM_JS_GLOBAL__ || (l.__SKIM_JS_GLOBAL__ = {});
        if (!l.__SKIM_JS_GLOBAL__.init) {
            l.skimlinksAPI = {};
            l.__SKIM_JS_GLOBAL__.init = !0;
            l.__SKIM_JS_GLOBAL__.getDebugInfo = Re;
            l.__SKIM_JS_GLOBAL__.bundledEntries = Xe;
            if (Qe(p.hostname) || wb && M.querySelector(wb)) k.skimlinksEnabled = !1, k.skimwordsEnabled = !1, k.unlinkedEnabled = !1;
            "msie" === k.detect.browser && 8 >= k.detect.version && (k.skimwordsEnabled = !1);
            try {
                ic("/robots.txt", void 0, {
                    __skimjs_preflight__please_ignore__: !0
                })
            } catch (a) {
                V(new Ye, !0)
            }
            Ze.detect(function(a) {
                k.isAdblockUser = a
            });
            A.publish("skim_js_init");
            q(["interactive", "complete"], M.readyState) ? I(ya, 0) : (yc(da.PRE_PAGE_LOAD), document.addEventListener("DOMContentLoaded", ya), document.addEventListener("load", ya));
            Ue();
            A.publish("skim_js_start")
        }
    }
    var ac = {
            log: Ga("log"),
            info: Ga("info"),
            warn: Ga("warn"),
            error: Ga("error")
        },
        Zb = function() {
            var a = !0;
            try {
                var b = [xd(), !!(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest), Ha(document, ["querySelector", "querySelectorAll"]), Ha(Object, ["keys"]), Ha([], ["indexOf"]), Ha("", ["indexOf"])];
                a = D(b, function(a, b) {
                    return a && b
                }, !0)
            } catch (c) {
                a = !1
            }!1 === a && ac.info("[Skimlinks] Your browser doesn't support the base features necessary to run our javascript.");
            return a
        }();
    C.prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    });
    Vb(C, Error);
    var fc = C.bind(null, "DocumentBodyNotFound"),
        $e = C.bind(null, "PixelDropFailed"),
        Ae = C.bind(null, "ScriptDropFailed"),
        Bd = C.bind(null, "XhrError"),
        zd = C.bind(null, "XhrError4xx"),
        Ad = C.bind(null, "XhrError5xx"),
        yd = C.bind(null, "XhrErrorZero"),
        Fd = C.bind(null, "SentryLoggerError");
    C.bind(null, "SendBeaconFailedError");
    var Ye = C.bind(null, "ResolveSslCertificateError"),
        ja = "14.1.5-stackpath",
        af = "https://s.skimresources.com/js/GDPR",
        bf = "https://r.skimresources.com/api/",
        lb = {
            "t.umblr.com": {
                name: "z"
            }
        },
        Qb = "163034X1630216",
        ra = 163034,
        qa = 1630216,
        Hd = "https://t.skimresources.com/api/v2",
        Hc = "https://api.skimlinks.mgr.consensu.org",
        jc = "go.skimresources.com",
        cf = "https://sl-sentry.skimlinks.com",
        Zc = "f648b8dfc7284fad8af093653eafd6ca",
        df = "production",
        ef = 1 > 1E3 * Math.random(),
        Ed = {
            sendError: function(a, b) {
                if (!Zc) throw a;
                var c = b;
                c = (c = K(c) ? c : !1) || ef ? a instanceof $e && Ub() ? !1 : !0 : !1;
                if (c) {
                    c = cf + "/api/46/store/";
                    var d = {
                        sentry_version: "7",
                        sentry_client: "raven-js/3.26.4",
                        sentry_key: Zc
                    };
                    var e = {
                        country: E(Fa(), ["runTimeInfo", "country"]),
                        beacon_consent: E(Fa(), ["runTimeInfo", "consent"]),
                        iab_consent: E(Fa(), ["runTimeInfo", "consentState", "skimlinks_consent"]),
                        is_adblock_user: Ub(),
                        is_top_frame: window.top === window
                    };
                    e = {
                        event_id: bb(),
                        project: "46",
                        platform: "javascript",
                        logger: "javascript",
                        release: ja,
                        exception: {
                            values: [{
                                type: a.name,
                                value: a.message,
                                stacktrace: {
                                    frames: Dd(a)
                                }
                            }]
                        },
                        request: {
                            headers: {
                                "User-Agent": navigator.userAgent
                            },
                            url: location.href
                        },
                        extra: v({
                            original_stacktrace: a.stack
                        }, a.__sentryExtraData__, e)
                    };
                    eb(c,
                        d, null, {
                            method: "POST",
                            data: JSON.stringify(e)
                        })
                }
            }
        },
        $b = [],
        Rb = O(function() {
            return (new Date).getTimezoneOffset()
        }),
        $c = window.skimlinks_context_window || null,
        l = $c ? window[$c] : window,
        M = l.document,
        Gc = {
            getItem: function(a) {
                try {
                    return JSON.parse(localStorage.getItem(a))
                } catch (b) {
                    return null
                }
            },
            setItem: function(a, b) {
                try {
                    localStorage.setItem(a, JSON.stringify(b))
                } catch (c) {}
            }
        },
        xb = g("noskim", !1),
        ff = g("noskimlinks", !1),
        gf = g("noskimwords", !0),
        hf = g("nounlinked", !1),
        jf = g("skimwords_standard",
            false),
        kf = g("skimwords_lite", false),
        lf = g("skimwords_diy", false),
        mf = g("skimwords_diy_filter", false),
        ad = !xb && !ff,
        bd = !xb && !gf,
        cd = !xb && !hf,
        gb = g("skimlinks_dnt", 0, function(a) {
            return a && "0" !== a && "false" !== a ? 1 : 0
        }),
        gc = g("skimlinks_nocookie", !1),
        yb = g("skimlinks_excluded_classes", []),
        nc = g("custom_excluded_selectors", [],
            bc),
        kb = g("custom_included_selectors", [], bc),
        zb = g("skimlinks_exclude", []),
        La = g("skimlinks_include", []),
        oc = g("skimlinks_ignore_hidden_links", false),
        Qa = g("skimlinks_link_impression_exclude_selector", []),
        vc = g("skimlinks_add_nofollow", false),
        dd = g("skimlinks_before_click_handler",
            false,
            function(a, b) {
                return K(a) ? a : b
            }),
        pc = g("skimlinks_first_party_na", !1),
        Mc = g("skimlinks_cookie_sync_optout", !1),
        Uc = !g("noimpressions", !1),
        Tc = false,
        cc = g("skimlinks_replace_timeout", 300, function(a, b) {
            var c = parseFloat(a);
            return isNaN(c) ? b : c
        }),
        mb = g("skimlinks_affiliate_unknown_links", true),
        sa = g("skimlinks_target", null),
        nf = g("skimlinks_ajax_rerun", false),
        N = [],
        ka = g("skimlinks_revenue_forecast", false),
        ed = g("skimlinks_noright", false),
        fd = g("skimlinks_url_extraction_rules", !1) || false,
        $a = g("skimlinks_extra_redir_params", []).join("&"),
        Ea = g(["affiliate_tracking", "skimlinks_tracking"], !1),
        Ra = g("force_location"),
        X = g(["skimlinks_site", "skimlinks_sitename"], !1),
        Ab = g("skimlinks_domain",
            ""),
        aa = g("skimlinks_google", false, function(a, b) {
            return a ? K(a) ? a ? "skimout" : "" : B(a) : b ? "skimout" : ""
        }),
        Xc = g("noskim_domains", []),
        of = g("skimwords_horizontal_distance", 80),
        pf = g("skimwords_vertical_distance", 80),
        Jc = false,
        Ua = g("skimwords_color", null),
        Va = g("skimwords_weight", null),
        la = g("skimwords_decoration", null),
        Wa = g("skimwords_style", null),
        Xa = g("skimwords_title", null),
        wb = g("no_skim_selector", ""),
        gd = g("skimlinks_force_consent", !1),
        wc = true,
        Se = {
            SW_STANDARD: jf,
            SW_LITE: kf,
            SW_DIY: lf,
            SW_DIY_FILTER: mf,
            HAS_SKIMLINKS: ad,
            HAS_SKIMWORDS: bd,
            HAS_UNLINKED: cd,
            DO_NOT_TRACK: gb,
            NO_COOKIE: gc,
            SL_EXCLUDED_CLASSES: yb,
            CUSTOM_EXCLUDED_SELECTORS: nc,
            CUSTOM_INCLUDED_SELECTORS: kb,
            SL_EXCLUDED_DOMAINS: zb,
            SL_INCLUDED_DOMAINS: La,
            SL_IGNORE_HIDDEN_LINKS: oc,
            SL_IMPRESSION_EXCLUDED_SELECTORS: Qa,
            SL_ADD_NOFOLLOW: vc,
            SL_BEFORE_CLICK_HANDLER: dd,
            SL_FIRST_PARTY_NA: pc,
            SL_COOKIE_SYNC_OPTOUT: Mc,
            SL_TRACK_IMPRESSION: Uc,
            WITH_NA_LINK_IMPRESSIONS: Tc,
            SL_REPLACE_TIMEOUT: cc,
            SL_AFFILIATE_UNKNOWN_LINKS: mb,
            SL_TARGET: sa,
            AJAX_SUPPORT: nf,
            UNLINKED_EXCLUDES: N,
            SL_FORECAST: ka,
            NO_RIGHT_CLICK: ed,
            USE_MERCHANT_URL_EXTRACTION_RULES: fd,
            EXTRA_REDIR_PARAMS: $a,
            CUSTOM_TRACKING_VAR: Ea,
            FORCE_LOCATION: Ra,
            SITE_NAME: X,
            CUSTOM_WAYPOINT_DOMAIN: Ab,
            GOOGLE_TRACKING_ACTION_NAME: aa,
            NO_SKIM_DOMAINS: Xc,
            SW_HORIZONTAL_DISTANCE: of ,
            SW_VERTICAL_DISTANCE: pf,
            SL_PROFILING: !1,
            TRACK_COOKIE_SYNCS: Jc,
            SW_LINK_COLOR: Ua,
            SW_LINK_WEIGHT: Va,
            SW_LINK_DECORATION: la,
            SW_LINK_STYLE: Wa,
            SW_LINK_TITLE: Xa,
            NO_SKIM_SELECTOR: wb,
            SL_CONSENT: "ae",
            FORCE_CONSENT: gd,
            M101_TRACKING_ID: null,
            M101_CUSTOM_DOM_DETECTION: false,
            AE_CLICK_TRACKING: !1,
            INCENTIVE_ENABLED: !1,
            FORCE_PREVENTED_CLICKS_MONETIZATION: wc,
            IS_MINIMALISTIC_JS: !1
        },
        k = function() {
            var a = M.referrer || document.referrer || "",
                b = Ra || l.location.href;
            var c = "aspsession-id aspsessionid cftoken j-sessionid jsessid jsession_id jsessionid phpsessid phpsession-id phpsessionid seskey sessid session-id session-key session_id sessionid sessionkey uniqueid utm_campaign utm_medium utm_source utm_term".split(" ");
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                var f = b.split("?");
                if (2 <= f.length) {
                    b = f.shift();
                    f = f.join("?");
                    e = encodeURIComponent(e) + "=";
                    f = f.split(/[&;]/gi);
                    for (var n = f.length - 1; 0 <= n; n--) cb(f[n], e) && f.splice(n, 1);
                    b = b + "?" + f.join("&")
                }
            }
            "?" === b[b.length - 1] && (b = b.substr(0, b.length - 1));
            c = b;
            d = Gc.getItem("skimCONSENT");
            b = navigator.userAgent.toLowerCase();
            b = /(webkit)[ /]([\w.]+)/.exec(b) || /(opera)(?:.*version)?[ /]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(b) || [];
            b = {
                browser: b[1] || "",
                version: parseFloat(b[2]) || 0
            };
            return {
                cookieSyncString: "",
                lastBeaconTimestamp: null,
                cookie: "",
                country: "",
                locale: "",
                consent: d,
                detect: b,
                isAdblockUser: !1,
                pageLocation: c,
                referrer: a,
                timezone: Rb(),
                uuid: bb(),
                skimwordsEnabled: bd,
                skimlinksEnabled: ad,
                unlinkedEnabled: cd
            }
        }(),
        p = function() {
            var a = document.getElementsByTagName("html") ? document.getElementsByTagName("html")[0] : null,
                b = Ra ? oa(Ra, !1) : l.location.hostname;
            return {
                aff_domains: {},
                beacon: [],
                domain_data: {
                    domains: []
                },
                exclude: zb,
                exclude_lookup: null,
                excluded_classes: ["noskimlinks", "noskim"].concat(yb),
                has_been_called: !1,
                hostname: b,
                html_root: a,
                include: La,
                include_lookup: null,
                links: [],
                links_tracked: !1,
                target: null,
                waypointDomain: Ab ? "http://" + Ab : "https://" + jc
            }
        }();
    var ua = {};
    var Oa = {
        creative: "500005",
        url_spans: []
    };
    var hd = function(a, b, c) {
        if (0 === b) return c;
        try {
            return a()
        } catch (d) {
            return hd(a, b - 1, c)
        }
    };
    get_real_link = function(a) {
        if (null == a) return null;
        for (;
            "A" !== a.nodeName.toUpperCase();)
            if (a = hd(function() {
                    return a.parentNode
                }, 3, null), null == a) return null;
        return a
    };
    var L, Ja = {
        get: function(a, b, c, d) {
            d = v({
                onError: V
            }, d, {
                method: "GET"
            });
            eb(a, b, G(c), d)
        },
        post: function(a, b, c, d) {
            d = v({
                    onError: V
                },
                d, {
                    method: "POST"
                });
            eb(a, b, G(c), d)
        }
    };
    "undefined" !== typeof window.Map && (Z.Cache = Map);
    var qf = ["noskim", "norewrite"],
        rf = ["noskimlinks", "noskim"].concat(["taboola", "advert--taboola", "trc_rbox", "trc_related_container"]),
        sf = "*.criteo.com *.g.doubleclick.net *mjxads.internet.com *overture.com *pgpartner.co.uk *pgpartner.com *pricegrabber.co.uk *pricegrabber.com *youtube.com m.skimresources.com paid.outbrain.com track.celtra.com traffic.outbrain.com trc.taboola.com zergnet.com ad.doubleclick.net".split(" "),
        Ld = ["itunes.apple.com", "itunes.com", "phobos.apple.com"],
        Nd = Z(function() {
            var a = [].concat(zb, sf);
            X && a.push(X);
            return a
        }),
        Kb = Z(function() {
            return rf.concat(yb).map(function(a) {
                return "." + a
            })
        }),
        Md = Z(function() {
            return qf.map(function(a) {
                return "a[rel~='" + a + "']"
            })
        }),
        tf = function() {
            var a = /[-[\]{}()*+?.,\\^$|#]/g,
                b = /\s+/g;
            return function(c) {
                return c.replace(a, "\\$&").replace(b, "\\s+")
            }
        }(),
        w;
    (function(a) {
        a.AFFILIATE = "AFFILIATE";
        a.PRE_AFFILIATED = "PRE_AFFILIATED";
        a.UNKNOWN = "UNKNOWN";
        a.TRACK = "TRACK";
        a.IGNORE = "IGNORE"
    })(w ||
        (w = {}));
    var rc = "__skimlinks__";
    var vd = function(a) {
        var b;
        if (fd) {
            var c = R(a.hostname);
            if (c in lb) return c = "[&?]" + lb[c].name + "=(http[^&]+)", c = new RegExp(c), decodeURIComponent(null != (b = a.href) ? b.match(c).pop() : void 0) || a.href
        }
        return a.href
    };
    var id;
    (function(a) {
        a.STARTING = "STARTING";
        a.CANCELLED = "CANCELLED";
        a.PENDING_API = "PENDING_API";
        a.API_ERROR = "API_ERROR";
        a.NO_OFFERS = "NO_OFFERS";
        a.PENDING_MODULE = "PENDING_MODULE";
        a.READY = "READY"
    })(id || (id = {}));
    var A = {
            topics: {},
            on: function(a, b, c) {
                Q(this.topics[a]) || (this.topics[a] = []);
                var d;
                c && (d = function(a) {
                    Ud(a, c) && b(a)
                });
                this.topics[a].push(d || b)
            },
            publish: function(a, b) {
                t(this.topics[a] || [], function(a) {
                    r(a) && a(b)
                })
            }
        },
        ba = function() {
            function a() {
                var a = this;
                m(this, "ready", void 0);
                m(this, "pendingCallbacks", void 0);
                m(this, "subReadyStateList", void 0);
                m(this, "isReady", function() {
                    return a.dependsOnSubReadyState() ? Wd(a.subReadyStateList, function(a) {
                        return a.isReady()
                    }) : a.ready
                });
                m(this, "setReady", function() {
                    a.dependsOnSubReadyState() || a.ready || (a.ready = !0, a.callPendingCallbacks())
                });
                m(this, "waitFor", function(b) {
                    a.subReadyStateList = a.subReadyStateList.concat(b);
                    a.isReady() ? a.callPendingCallbacks() : b.forEach(function(b) {
                        b.whenReady(a.whenSubReadyStateIsReady)
                    })
                });
                m(this, "whenSubReadyStateIsReady", function() {
                    a.isReady() && a.callPendingCallbacks()
                });
                this.ready = !1;
                this.pendingCallbacks = [];
                this.subReadyStateList = []
            }
            var b = a.prototype;
            b.whenReady = function(a) {
                this.isReady() ? a() : this.pendingCallbacks.push(a)
            };
            b.dependsOnSubReadyState = function() {
                return 0 !== this.subReadyStateList.length
            };
            b.callPendingCallbacks = function() {
                this.pendingCallbacks.forEach(function(a) {
                    setTimeout(a, 0)
                });
                this.pendingCallbacks = []
            };
            return a
        }(),
        da;
    (function(a) {
        a.PRE_PAGE_LOAD = "PRE_PAGE_LOAD";
        a.POST_PAGE_LOAD = "POST_PAGE_LOAD";
        a.AUX = "AUX"
    })(da || (da = {}));
    var U = new(function() {
            function a(a, b) {
                var c = this;
                m(this, "requestBeaconAPI", void 0);
                m(this, "beaconRequestHandler", void 0);
                m(this, "requestsHistory", void 0);
                m(this, "noRequestPendingReadyState", void 0);
                m(this, "beaconApiResponseReadyState", void 0);
                m(this, "postPageLoadCallReadyState",
                    void 0);
                m(this, "beaconFullyReadyState", void 0);
                m(this, "whenNoRequestsPending", function(a) {
                    c.noRequestPendingReadyState.whenReady(a)
                });
                m(this, "whenBeaconApiRequestCompleted", function(a) {
                    c.beaconApiResponseReadyState.whenReady(a)
                });
                m(this, "whenPostPageLoadBeaconCallCompleted", function(a) {
                    c.postPageLoadCallReadyState.whenReady(a)
                });
                m(this, "whenBeaconFullyReady", function(a) {
                    c.beaconFullyReadyState.whenReady(a)
                });
                m(this, "sendBeaconRequest", function(a, b) {
                    var d = 0 === a.length,
                        e = {
                            readyState: new ba,
                            requestedDomains: a,
                            response: null,
                            beaconCallType: b
                        };
                    c.hasFetchedAtLeastOnce() && d ? (c.requestsHistory.push(e), e.readyState.setReady()) : c.requestBeaconAPI(a, b, function(b) {
                        b = v({
                            requestedDomains: a
                        }, b);
                        c.beaconRequestHandler(b);
                        e.response = b;
                        e.readyState.setReady()
                    });
                    c.updateRequestsHistory(e);
                    e.readyState.whenReady(function() {
                        c.resolveReadyStatesOnRequestCompleted(e)
                    });
                    return e
                });
                this.requestBeaconAPI = a;
                this.beaconRequestHandler = b;
                this.requestsHistory = [];
                this.noRequestPendingReadyState = new ba;
                this.noRequestPendingReadyState.setReady();
                this.beaconApiResponseReadyState = new ba;
                this.postPageLoadCallReadyState = new ba;
                this.beaconFullyReadyState = Xd(this.beaconApiResponseReadyState, this.postPageLoadCallReadyState)
            }
            var b = a.prototype;
            b.updateRequestsHistory = function(a) {
                this.requestsHistory.push(a);
                this.noRequestPendingReadyState.waitFor([a.readyState])
            };
            b.resolveReadyStatesOnRequestCompleted = function(a) {
                a.response && !this.beaconApiResponseReadyState.isReady() && this.beaconApiResponseReadyState.setReady();
                a.beaconCallType === da.POST_PAGE_LOAD &&
                    this.postPageLoadCallReadyState.setReady()
            };
            b.hasFetchedAtLeastOnce = function() {
                return 0 !== this.requestsHistory.length
            };
            return a
        }())(function(a, b, c) {
            a = JSON.stringify({
                pubcode: Qb,
                page: l.location.href,
                domains: a
            });
            a = {
                headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                },
                data: ma({
                    data: a
                }),
                withCredentials: !0
            };
            var d = ab();
            "production" !== df && (d._ = b);
            Ja.post("" + bf, d, c, a)
        }, function(a) {
            var b = {};
            a.country && (b.country = a.country.toUpperCase());
            a.country_state && (b.countryState = a.country_state);
            a.guid && "" ===
                k.cookie && (b.cookie = a.guid);
            K(a.consent) && (b.consent = a.consent);
            a.csp && (b.cookieSyncString = a.csp);
            a.ts && (b.lastBeaconTimestamp = a.ts);
            v(k, b);
            Vd(a.requestedDomains, a.merchant_domains)
        }),
        ca;
    (ca || (ca = {})).ANCHOR_CLICK_INTERCEPTOR = "ANCHOR_CLICK_INTERCEPTOR";
    var uc = {},
        T;
    (function(a) {
        a.LEFT_CLICK = "LEFT_CLICK";
        a.MIDDLE_CLICK = "MIDDLE_CLICK";
        a.OTHER_CLICK = "OTHER_CLICK"
    })(T || (T = {}));
    var ta;
    (function(a) {
        a[a.CONSENT = 0] = "CONSENT";
        a[a.INCENTIVE = 1] = "INCENTIVE";
        a[a.SKIMLINKS = 2] = "SKIMLINKS"
    })(ta || (ta = {}));
    var jd = {}.hasOwnProperty;
    var Bb = 0;
    var Cb = null;
    var Db = 0;
    var Sa = !1;
    var Ta = {};
    var uf = function(a) {
        Ta[a] = Ta[a] || 0;
        Ta[a]++;
        return a + "_" + Ta[a]
    };
    var vf = function(a) {
        var b;
        var c = b = null;
        if (-1 !== a.indexOf(".")) {
            a = a.split(".");
            var d = a[0];
            c = a[1]
        } else -1 !== a.indexOf("[class=") ? (a = a.split("[class="), d = a[0], c = a[1].split("]"), c = c[0]) : -1 !== a.indexOf("[class^=") ? (a = a.split("[class^="), d = a[0], c = a[1].split("]"), c = c[0]) : -1 !== a.indexOf("[id*=") ? (a = a.split("[id*="), d = a[0], b = a[1].split("]"), b = b[0]) : d = a;
        return {
            tag: d,
            id: b,
            "class": c
        }
    };
    var za = function(a,
        b) {
        var c;
        var d = b.split(",");
        var e = 0;
        for (c = d.length; e < c; e++) {
            b = d[e];
            b = B(b);
            b = vf(b);
            var f = !0;
            var n = (n = "string" === typeof a.className ? a.className : "") || ("function" === typeof a.getAttribute ? a.getAttribute("class") : void 0) || "";
            var h = ("function" === typeof a.getAttribute ? a.getAttribute("id") : void 0) || "";
            !b.tag || a.nodeName && a.nodeName.toLowerCase() === b.tag || (f = !1);
            b["class"] && (!n || n !== b["class"] && 0 !== n.indexOf(b["class"])) && (f = !1);
            b.id && (!h || h !== b.id && -1 === h.indexOf(b.id)) && (f = !1);
            if (f) return !0
        }
        return !1
    };
    var kd =
        function(a, b) {
            return za(a, b) ? [a] : tc(a.querySelectorAll(b))
        };
    var wf = function(a, b) {
        return 0 < a.querySelectorAll(b).length
    };
    var Eb = function(a, b) {
        return 0 === b.length || za(a, b.join(",")) ? !0 : a.parentNode ? Eb(a.parentNode, b) : !1
    };
    var ld = function d(b, c) {
        return 0 === c.length ? !1 : za(b, c.join(",")) ? !0 : b.parentNode ? d(b.parentNode, c) : !1
    };
    var xf = function(b) {
        var c = b.offsetWidth;
        b = b.offsetHeight;
        return 468 === c && 60 === b || 234 === c && 60 === b || 728 === c && 90 === b || 300 === c && 250 === b || 250 === c && 250 === b || 336 === c && 280 === b || 160 === c && 600 ===
            b || 120 === c && 600 === b ? !0 : !1
    };
    var yf = function() {
        var b = [];
        b.push("div.widget-content");
        b.push("div.googleAdText");
        b.push("div[id=ad]");
        b.push("div[id=banner]");
        b.push("div[id=advertisement]");
        b.push("div[id=adv_container]");
        b.push("div.ad");
        b.push("div.banner");
        b.push("div.advertisement");
        b.push("div.ad_container");
        b.push("span.IL_AD");
        b.push("div[id=fave-ext-container]");
        b.push("span.skimlinks-unlinked"); - 1 !== l.location.href.indexOf(".google.") ? (b.push("td.gac_c"), b.push("table[id=mbEnd]"), b.push("div[id=mbEnd]"),
            b.push("span[id=taw]"), b.push("td.std"), b.push("div.std"), b.push("table.gssb_e"), b.push("div.c"), b.push("div[id=tads]")) : -1 !== l.location.href.indexOf(".yahoo.") ? (b.push("ul.spns,ul.reducepx-spnslist"), b.push("ul[class*=reducepx-spnslist]"), b.push("ul[id=east]")) : -1 !== l.location.href.indexOf(".aol.") ? (b.push("div.sllLink"), b.push("div.n")) : -1 !== l.location.href.indexOf(".bing.") && (b.push("div.sb_adsW"), b.push("div[id=sidebar]"), b.push("div.sb_adsWv2"), b.push("div.sb_adsNv2"), b.push("div[class*=sb_ads]"));
        return b
    };
    var zf = function(b) {
        var c;
        var d = {};
        var e = 0;
        for (c = b.length; e < c; e++) {
            var f = b[e];
            d[f] = !0
        }
        return d
    };
    var Af = function() {
        Bb = 0;
        A.publish("dom_changed")
    };
    var Bf = function(b, c, d, e) {
        var f, n, h;
        if ((f = b.className || ("function" === typeof b.getAttribute ? b.getAttribute("class") : void 0) || "") && ("skimlinks-unlinked" === f || "skimwords-link" === f)) return !1;
        if (0 === d.length && 0 === c.length) return z.traverse_node(b, !1, "", "", e);
        if (0 !== d.length) {
            if (!ld(b, d)) {
                f = z.get_exclude_selector(d);
                d = z.get_exclude_selector([]);
                var g = f.selector;
                var k = f.needed;
                var l = d.selector;
                if (0 === c.length || Eb(b, c)) return z.traverse_node(b, k, l, g, e);
                f = [];
                var p = 0;
                for (h = c.length; p < h; p++) {
                    d = c[p];
                    var m = kd(b, d);
                    m.length ? f.push(function() {
                        var b;
                        var c = [];
                        var d = 0;
                        for (b = m.length; d < b; d++) n = m[d], c.push(z.traverse_node(n, k, l, g, e));
                        return c
                    }()) : f.push(void 0)
                }
                return f
            }
        } else if (0 !== c.length) {
            if (Eb(b, c)) return z.traverse_node(b, !1, "", "", e);
            h = [];
            f = 0;
            for (p = c.length; f < p; f++) d = c[f], m = kd(b, d), m.length ? h.push(function() {
                var b;
                var c = [];
                var d = 0;
                for (b = m.length; d < b; d++) n = m[d],
                    c.push(z.traverse_node(n, !1, "", "", e));
                return c
            }()) : h.push(void 0);
            return h
        }
    };
    G(function(b) {
        b = b.relatedNode || !1;
        if (!b || ua.send_in_progress || g("stop_skimwords_ajax")) return !1;
        Cb && clearTimeout(Cb);
        Bb++;
        1 === Bb && z.reset();
        Bf(b, ua.settings.includes || [], ua.settings.excludes || [], ua.settings.read_onlys || []);
        if (z.get_non_colliding_nodes() && 1 <= Db) return Cb = I(function() {
            Af()
        }, 1E3)
    });
    var z = function() {
        var b = {};
        return {
            traverse: function(c, d, e, f) {
                c = c || [];
                d = d || [];
                e = e || [];
                return b && b.length && !f ? b : this.traverse_dom(c,
                    d, e)
            },
            traverse_dom: function(c, d, e) {
                var f, n;
                if (Sa) return b;
                Sa = !0;
                var h = this.get_exclude_selector(d);
                var g = this.get_exclude_selector([]);
                d = h.selector;
                h = h.needed;
                g = g.selector;
                0 === c.length && c.push("body");
                c = c.concat(e);
                for (var k = 0, l = c.length; k < l; k++) {
                    var m = c[k];
                    m = xc(m);
                    m = document.querySelectorAll(m);
                    var p = f = 0;
                    for (n = m.length; f < n; p = ++f) p = m[p], this.traverse_node(p, h, g, d, e)
                }
                return b
            },
            traverse_node: function(c, d, e, f, n) {
                var h = [];
                var g = 0;
                for (h.push({
                        node: c,
                        tagName: "",
                        readOnly: !1,
                        parent_id: null
                    }); g < h.length;) !(c =
                    h[g].node) || xf(c) || W(c, "noskimwords") || W(c, "noskim") || d && "" !== e && za(c, e) || (h[g].readOnly = !1, c.nodeName && "#text" !== c.nodeName ? (h[g].tagName = c.nodeName, null !== h[g].parent_id && (h[g].readOnly = h[h[g].parent_id].readOnly), h[g].readOnly || (d && za(c, f) ? h[g].readOnly = !0 : q(n, c.nodeName.toLowerCase()) && (h[g].readOnly = !0)), q(n, c.nodeName.toLowerCase()) && (h[g].readOnly = !0)) : null !== h[g].parent_id && (h[g].tagName = h[h[g].parent_id].tagName, h[g].readOnly = h[h[g].parent_id].readOnly), "msie" === k.detect.browser && 9 > k.detect.version &&
                    h[g].readOnly || (c.hasChildNodes() ? h = this.add_child_nodes(h[g], g, h) : this._add(c, !1, h[g].tagName, h[g].readOnly))), g++;
                return b
            },
            is_traversed: function() {
                return Sa
            },
            is_good_tag: function(b) {
                return zf("p body div span ul ol li table tbody td tr th tfoot col colgroup em strong big small blockquote cite b dl dfn dd dt ins form legend noframes pre noscript center font i article section main".split(" "))[b.nodeName.toLowerCase()] ? !0 : !1
            },
            is_html: function(b) {
                return (b = B(b)) && "<" === b[0]
            },
            get_non_colliding_nodes: function() {
                var c;
                var d = b;
                var e = {};
                Db = 0;
                for (c in d) jd.call(d, c) && (e[c] = d[c], Db++);
                return e
            },
            get_as_hash_node_dict: function() {
                var c;
                var d = {};
                for (c in b) {
                    var e = b[c];
                    H(b, c) && (d[c] = e)
                }
                return d
            },
            get_as_pair_array: function() {
                var c;
                var d = [];
                for (c in b) jd.call(b, c) && d.push([c, b[c]]);
                return d
            },
            get_exclude_selector: function(b, d) {
                var c, f, g;
                var h = [];
                if (!d) {
                    d = document.getElementsByTagName("body");
                    if (!d.length) return {
                        needed: !1,
                        selector: ""
                    };
                    d = d[0]
                }
                b = b.concat(yf());
                var k = c = 0;
                for (f = b.length; c < f; k = ++c) b[k] = xc(b[k]);
                c = !1;
                f = "";
                var m =
                    0;
                for (g = b.length; m < g; m++) k = b[m], wf(d, k) && h.push(k);
                h.length && (c = !0, f = h.join(",").replace("class=", "class^="));
                return {
                    needed: c,
                    selector: f
                }
            },
            length: function() {
                return Object.keys(b).length
            },
            reset: function() {
                b = [];
                return Sa = !1
            },
            add_child_nodes: function(b, d, e) {
                var c, g;
                var h = b.node.childNodes;
                var k = 0;
                for (g = h.length; k < g; k++)(c = h[k]) && c.nodeName && !this._add(c, !1, b.tagName, b.readOnly) && this.is_good_tag(c) && e.push({
                    node: c,
                    tagName: b.tagName,
                    readOnly: b.readOnly,
                    parent_id: d
                });
                return e
            },
            add_node: function(b, d) {
                return this._add(b,
                    d)
            },
            _add: function(c, d, e, f) {
                var g = null;
                "#text" === c.nodeName && (g = B(c.nodeValue));
                d = d || !1;
                if ("msie" === k.detect.browser && 9 > k.detect.version && f) return !1;
                if ("msie" !== k.detect.browser || 9 <= k.detect.version) try {
                    c.meta = {
                        ElementTag: e,
                        ReadOnly: f
                    }
                } catch (h) {}
                if (g && !this.is_html(g) && 3 <= g.length) {
                    if (d && "-1" === d) return !1;
                    d = this._skim_id_hash(g, d);
                    if (!d) return !1;
                    b[d] = c
                }
                return g ? !0 : !1
            },
            _skim_id_hash: function(b) {
                if (!b) return "";
                var c = B(b.replace(/\s+/g, " ")).length;
                b = b.replace(/[:\s]*/g, "");
                c = c + ":" + b.substring(0, 20);
                return c = uf(c)
            }
        }
    }();
    var ge = function(b, c, d) {
        if (ka) return !1;
        var e = (b.data ? b.data : b.childNodes[0].data).replace(c.repl_regex, c.replacement);
        var f = document.createElement("span");
        c = document.createDocumentFragment();
        f.innerHTML = e;
        if ("msie" === k.detect.browser && 9 > k.detect.version) {
            e = b.previousSibling;
            var g = /^\s/;
            e && e.nodeValue && e.nodeValue.length && g.test(e.nodeValue[e.nodeValue.length - 1]) && (e.nodeValue += " ");
            (e = b.nextSibling) && e.nodeValue && e.nodeValue.length && g.test(e.nodeValue[0]) && (e.nodeValue = " " + e.nodeValue)
        }
        for (; f.firstChild;) "#text" ===
            f.firstChild.nodeName ? (e = c.appendChild(f.firstChild), z.add_node(e)) : (e = c.appendChild(f.firstChild), null === e || d || Mb(e, !0));
        if (d = b.parentNode) return d.replaceChild(c, b)
    };
    var u = {
            campaign_ids: [],
            loading_started: (new Date).getTime(),
            linksImpressions: {
                skimlinks: {
                    count: 0,
                    urls: {}
                },
                skimwords: {
                    count: 0,
                    urls: {}
                },
                unlinked: {
                    count: 0,
                    urls: {}
                }
            },
            awaitedModules: []
        },
        sd = [".noskim", ".noskimwords", ".noskimw"];
    var he = function(b) {
        qb(b, "click", Bc);
        ed || qb(b, "contextmenu", Bc);
        return Mb(b, !1)
    };
    var Cf = function(b, c, d, e) {
        var f =
            tf(b);
        c = pb(c);
        f = "(?:^|[\\s]+)(?:\\\\;\\.|,\\'\\\"\\(\\)\\/:\\?])?(" + f + ")(?:\\'s)?(?:[\\\\;,\\.\\'\\\"|\\(\\)\\/:\\?])*(?:[\\s]+|$)";
        b = db(pb(b));
        c = '$1$2<a href="' + c + '" class="' + e + '"  data-skimwords-word="' + b + '"  data-skim-creative="' + d + '" title="">$3$4</a>$5$6';
        d = f.replace(/\?:/g, "");
        return {
            search_regex: new RegExp(f, "i"),
            repl_regex: new RegExp(d, "i"),
            repl_text: c
        }
    };
    var pd = function(b, c) {
        var d, e, f;
        if (!b || ld(b, ["span.skimlinks-unlinked"])) return [
            [],
            []
        ];
        var g = b.data;
        var h = [];
        var m = [];
        for (e = /$|\b(?:https?:\/\/)?(?:[-_a-zA-Z]+\.)*(?:[-_a-zA-Z]{2,}\.[-_\w]{2,5}\b)[^[\]\s]*\b|$/gi; d =
            e.exec(g);) {
            var l = d[0];
            if ("link.phrase" !== l) {
                var p = d.index;
                if (0 < B(l).length && -1 === l.indexOf("/.") && -1 === l.indexOf("...")) {
                    var q = l;
                    0 !== l.indexOf("http") && 0 !== l.indexOf("//") && (q = "msie" === k.detect.browser && 6 >= k.detect.version ? "http://" + l : "//" + l);
                    d = oa(q);
                    var t = td({
                        OriginalPhrase: "" + l,
                        Url: q,
                        Title: "",
                        ActionType: 2,
                        GroupId: 0,
                        Unlinked: !0
                    });
                    (f = Cf("" + l, q, Oa.creative, "skimlinks-unlinked")) && m.push({
                        start: p,
                        text: "" + pb(l),
                        domain: d,
                        repl_regex: f.repl_regex,
                        replacement: f.repl_text,
                        regex: f.search_regex,
                        phrase: t,
                        link: q
                    });
                    h.push(d)
                } else break
            }
        }
        if (m.length) {
            var r = c;
            q = "skimlinks-unlinked";
            var w;
            l = document.createDocumentFragment();
            var u = 0;
            d = [];
            p = b.nodeValue;
            e = [];
            g = b.parentNode;
            q || (q = "skimwords-potential");
            r || (r = "-1");
            if (g) {
                t = 0;
                for (w = m.length; t < w; t++) {
                    var v = m[t];
                    var y = document.createElement("span");
                    y.className = q;
                    f = document.createTextNode(p.substring(u, v.start));
                    l.appendChild(f);
                    y.innerHTML = v.text;
                    l.appendChild(y);
                    u = {};
                    u.node = y;
                    u.match = v;
                    F(u, "occurrence", v.target_occurrence);
                    d.push(u);
                    u = v.start + v.text.length;
                    e.push(f);
                    z.add_node(f, r)
                }
                m = document.createTextNode(p.substring(u));
                e.push(m);
                l.appendChild(m);
                z.add_node(m, r);
                g.replaceChild(l, b)
            }
            r = [d, e];
            m = r[0];
            r = r[1];
            l = 0;
            for (e = m.length; l < e; l++) g = m[l], Oa.url_spans.push(g)
        }
        r || (r = []);
        return [h, r]
    };
    var qd = function(b) {
        var c;
        if (p.exclude.length) {
            var d = p.exclude;
            var e = 0;
            for (c = d.length; e < c; e++) {
                var f = d[e];
                if (f === b) return !1
            }
        }
        if (p.include.length) {
            d = p.include;
            e = 0;
            for (c = d.length; e < c; e++)
                if (f = d[e], f === b) return !0;
            return !1
        }
        return !0
    };
    var ie = "AT BE BG CY CZ DE DK EE ES FI FR GB GR HR HU IE IT LT LU LV MT NL PL PT RO SE SI SK".split(" ");
    C.bind(null, "InvalidVariantConfig");
    var Pa = function(b) {
            le(b) ? (ke(b), b = je(b)) : b = b[Math.floor(b.length * Math.random())];
            return b
        }([{
            id: 1,
            moduleName: "ConsentA",
            getUrl: function(b, c) {
                return function(d) {
                    d = q(c, d) ? d : "en";
                    return af + "/Consent_" + b + "_" + d + ".js"
                }
            }("A", ["bg", "de", "el", "en", "es", "fr", "it", "pl", "pt", "sk"])
        }]),
        Ge = {
            AT: "de",
            BE: "fr",
            BG: "bg",
            CY: "el",
            CZ: "cs",
            DE: "de",
            DK: "da",
            EE: "et",
            ES: "es",
            FI: "fi",
            FR: "fr",
            GB: "en",
            GR: "el",
            HR: "hr",
            HU: "hu",
            IE: "en",
            IT: "it",
            LT: "lt",
            LU: "fr",
            LV: "lv",
            MT: "en",
            NL: "en",
            PL: "pl",
            PT: "pt",
            RO: "ro",
            SE: "sv",
            SI: "sl",
            SK: "sk"
        },
        Aa = [{
                label: "lotame",
                url: "https://sync.crwdcntrl.net/map/c=7505/tp=SKIM/?https%3A%2F%2Fx.skimresources.com%2F%3Fprovider%3Dlotame%26skim_mapping%3Dtrue%26provider_id%3D%24%7Bprofile_id%7D",
                resyncAfter: [2, "days"],
                priority: 1,
                iabVendorId: 95,
                active: !0,
                isCcpaSensitive: !0
            }, {
                label: "blue_kai",
                url: "https://stags.bluekai.com/site/27381?redir=https%3A%2F%2Fx.skimresources.com%2F%3Fprovider%3Dblue_kai%26skim_mapping%3Dtrue%26provider_id%3D%24_BK_UUID",
                resyncAfter: [1, "days"],
                priority: 2,
                iabVendorId: null,
                active: !0,
                isCcpaSensitive: !0
            }, {
                label: "dfp",
                url: "https://cm.g.doubleclick.net/pixel?google_nid=skimlinks_ddp&google_cm",
                resyncAfter: [1, "days"],
                priority: 2,
                iabVendorId: null,
                active: !0,
                isCcpaSensitive: !0
            }, {
                label: "mediamath",
                url: "https://pixel.mathtag.com/sync/img?redir=https%3A%2F%2Fx.skimresources.com%2F%3Fprovider%3Dmediamath%26skim_mapping%3Dtrue%26provider_id%3D%5BMM_UUID%5D%26provider_dc%3D%5BMT_DC%5D",
                resyncAfter: [1, "days"],
                priority: 2,
                iabVendorId: 79,
                active: !0,
                isCcpaSensitive: !0
            }, {
                label: "app_nexus",
                url: "https://secure.adnxs.com/getuid?https%3A%2F%2Fx.skimresources.com%2F%3Fprovider_id%3D%24UID%26provider%3Dapp_nexus%26skim_mapping%3Dtrue",
                resyncAfter: [1, "days"],
                priority: 2,
                iabVendorId: 32,
                active: !0,
                isCcpaSensitive: !0
            }, {
                label: "eyeota",
                url: "https://ps.eyeota.net/match?gdpr=${SKIM__GDPR_APPLICABLE}&gdpr_consent=${SKIM__CONSENT_STRING}&bid=dn9h51u&r=https%3A%2F%2Fx.skimresources.com%2F%3Fprovider%3Deyeota%26provider_id%3D%7BUUID_dn9h51u%7D%26skim_mapping%3Dtrue",
                resyncAfter: [1, "days"],
                priority: 2,
                iabVendorId: 120,
                active: !0,
                excludedCountries: "AF BH IR IQ IL JO KW LB OM PK PS QA SA SY AE YE DZ AO BJ BW BF BI CM CV CF TD KM CD CG CI DJ EG GQ ER SZ ET GA GM GH GN GW KE LS LR LY MG MW ML MR MU MA MZ NA NE NG RW SH ST SN SC SL SO ZA SS SD TZ TG TN UG ZM ZW BO CL CO CR CU DO EC SV GF GP GT HT HN MQ NI PA PY PE PR BL MF PM UY VE RU".split(" "),
                isCcpaSensitive: !0
            }, {
                label: "exelate",
                url: "https://x.skimresources.com/?provider=exelate&gdpr=${SKIM__GDPR_APPLICABLE}&gdpr_consent=${SKIM__CONSENT_STRING}",
                resyncAfter: [1, "days"],
                priority: 1,
                iabVendorId: 373,
                active: !0,
                isCcpaSensitive: !0
            }, {
                label: "exelate_dbm",
                url: "https://cm.g.doubleclick.net/pixel?google_nid=exelate&google_cm&google_sc",
                resyncAfter: [2, "days"],
                priority: 2,
                iabVendorId: null,
                active: !0,
                includedCountries: ["GB", "DE", "IT", "FR", "ES"],
                isCcpaSensitive: !0
            }, {
                label: "exelate_tradedesk",
                url: "https://match.adsrvr.org/track/cmf/generic?ttd_pid=exelate&ttd_tpi=1",
                resyncAfter: [2, "days"],
                priority: 2,
                iabVendorId: 21,
                active: !0,
                includedCountries: ["GB", "DE", "IT"],
                isCcpaSensitive: !0
            }, {
                label: "exelate_adform",
                url: "https://dmp.adform.net/serving/cookie/match/?party=1012",
                resyncAfter: [2, "days"],
                priority: 2,
                iabVendorId: 50,
                active: !0,
                includedCountries: ["DE", "ES"],
                isCcpaSensitive: !0
            }, {
                label: "exelate_mediamath",
                url: "https://sync.mathtag.com/sync/img?mt_exid=10008&redir=https%3A%2F%2Floadm.exelator.com%2Fload%2F%3Fp%3D204%26g%3D101%26j%3D0%26buid=[MM_UUID]",
                resyncAfter: [2, "days"],
                priority: 2,
                iabVendorId: 79,
                active: !0,
                includedCountries: ["IT", "ES"],
                isCcpaSensitive: !0
            }, {
                label: "exelate_adobe",
                url: "https://dpm.demdex.net/ibs:dpid=3&&redir=https%3A%2F%2Floadm.exelator.com%2Fload%2F%3Fp%3D204%26g%3D091%26j%3D0%26bi%3D%24%7BDD_UUID%7D",
                resyncAfter: [2, "days"],
                priority: 2,
                iabVendorId: 264,
                active: !0,
                includedCountries: ["FR"],
                isCcpaSensitive: !0
            }, {
                label: "exelate_appnexus",
                url: "https://ib.adnxs.com/getuid?https://loadm.exelator.com/load/?p=204&g=013&bi=$UID&j=0",
                resyncAfter: [2, "days"],
                priority: 2,
                iabVendorId: 32,
                active: !0,
                includedCountries: ["GB", "FR"],
                isCcpaSensitive: !0
            }, {
                label: "exelate_teads",
                url: "https://sync.teads.tv/ex/sync",
                resyncAfter: [2, "days"],
                priority: 2,
                iabVendorId: 132,
                active: !0,
                includedCountries: ["GB", "DE", "IT", "FR", "ES"],
                isCcpaSensitive: !0
            }, {
                label: "avocet",
                url: "https://ads.avocet.io/getuid?url=https%3A%2F%2Fx.skimresources.com%2F%3Fskim_mapping%3Dtrue%26provider%3Davocet%26provider_id%3D%7B%7BUUID%7D%7D",
                resyncAfter: [1, "days"],
                priority: 3,
                iabVendorId: 63,
                active: !0,
                isCcpaSensitive: !0
            }, {
                label: "tapad",
                url: "https://x.skimresources.com/?provider=tapad",
                resyncAfter: [3, "days"],
                priority: 3,
                iabVendorId: 89,
                active: !0,
                isCcpaSensitive: !0
            },
            {
                label: "trade_desk",
                url: "https://match.adsrvr.org/track/cmf/generic?ttd_pid=qakudad&ttd_tpi=1",
                resyncAfter: [3, "days"],
                priority: 3,
                iabVendorId: 21,
                active: !0,
                isCcpaSensitive: !0
            }, {
                label: "zeotap_dbm",
                url: "https://x.skimresources.com/?provider=zeotap_dbm",
                resyncAfter: [5, "days"],
                priority: 2,
                iabVendorId: null,
                active: !0,
                isCcpaSensitive: !0
            }, {
                label: "zeotap_us_latam",
                url: "https://x.skimresources.com/?provider=zeotap_us_latam",
                resyncAfter: [5, "days"],
                priority: 2,
                iabVendorId: null,
                active: !0,
                includedCountries: "US MX BR PE CL AR CO".split(" "),
                isCcpaSensitive: !0
            }
        ],
        Ic = new ba,
        y = {},
        ve = {
            minutes: 60,
            hours: 3600,
            days: 86400
        },
        tb = [],
        Kc = [],
        ze = {
            async: !0,
            onError: function() {},
            onLoad: function() {}
        },
        va = Nc() ? window.top : window,
        Qc = {},
        Df = "AT BE BG CY DE ES FR GB GR IE IT LU MT NL PL PT SK".split(" "),
        Fe = O(function() {
            var b = Nc() ? window.top : window;
            if (r(b.__cmp) || "msie" === k.detect.browser && 8 >= k.detect.version) return !1;
            if (gd || Yb("skimlinks_force_consent")) return !0;
            var c = ha();
            b = ia();
            c = K(c);
            b = !!b && q(Df, b.toUpperCase());
            return !c && b
        }),
        Me = ["skimlinks_included_ids", "skimlinks_byrel",
            "skimlinks_exrel", "skimlinks_included_classes"
        ],
        vb = !1,
        fa = !1,
        wa = null,
        xa = null,
        Ze = {
            detect: function(b) {
                a: {
                    try {
                        var c = navigator.userAgent.toLowerCase();
                        if (-1 === c.indexOf("firefox") && -1 === c.indexOf("chrome")) {
                            fa = !0;
                            vb = !1;
                            break a
                        }
                    } catch (d) {}
                    c = "" + 11 * Math.random();wa = new Image;wa.onload = Wc;wa.src = "//p.skimresources.com/px.gif?ch=*&rn=*".replace(/\*/, "1").replace(/\*/, c);xa = new Image;xa.onload = Wc;xa.src = "//p.skimresources.com/px.gif?ch=*&rn=*".replace(/\*/, "2").replace(/\*/, c)
                }
                Vc(b, 250)
            }
        },
        md = Wb([!!dd && "mouseup",
            "click"
        ]),
        Ef = ["auxclick", "contextmenu", "touchstart"],
        Ff = function() {
            function b(b, c) {
                m(this, "type", void 0);
                m(this, "anchor", void 0);
                m(this, "affiliationType", void 0);
                m(this, "nativeEvent", void 0);
                m(this, "clientClickId", void 0);
                m(this, "targetedInterceptor", void 0);
                var d = Od(b);
                this.type = this.getInternalClickType(c);
                this.anchor = b;
                this.affiliationType = d;
                this.nativeEvent = c;
                this.clientClickId = bb();
                this.targetedInterceptor = null
            }
            var c = b.prototype;
            c.setAnchorClickInterceptorTarget = function(b) {
                this.targetedInterceptor =
                    b
            };
            c.getInternalClickType = function(b) {
                return q(md, b.type) && 0 === b.button ? T.LEFT_CLICK : "auxclick" !== b.type && "click" !== b.type || 1 !== b.button ? T.OTHER_CLICK : T.MIDDLE_CLICK
            };
            return b
        }(),
        Ve = function() {
            function b() {
                var b = this;
                m(this, "interceptors", void 0);
                m(this, "onClick", function(c, d) {
                    var e = Nb(c);
                    e && (e.skimlinksOriginalHref && e.skimlinksRestoreSwappedLink(), e = new Ff(e, c), b.dispatchAnchorClick(e, d))
                });
                m(this, "registerInterceptor", function(c, d) {
                    if (!r(c)) throw Error("InterceptorHandler should be a function");
                    if (J(d)) throw Error("Missing priority for click interceptor");
                    b.interceptors.push({
                        handler: c,
                        priority: d
                    });
                    b.interceptors.sort(function(b, c) {
                        return b.priority - c.priority
                    })
                });
                m(this, "triggerLeftClickFromMouseEvent", function(c, d) {
                    var e = b.findInterceptorsWithPriority(d);
                    if (J(d)) b.onClick(c);
                    else if (e.length) b.onClick(c, e)
                });
                this.interceptors = [];
                this.initGlobalClickHandler()
            }
            var c = b.prototype;
            c.initGlobalClickHandler = function() {
                Yc(M, md, this.onClick, !0);
                Yc(M, Ef, this.onClick, !0)
            };
            c.dispatchAnchorClick = function(b,
                c) {
                var d = this;
                (c || this.interceptors).some(function(c) {
                    var e = c.handler;
                    return d.isTargetedInterceptor(c, b) ? e(b) : !1
                })
            };
            c.findInterceptorsWithPriority = function(b) {
                return na(this.interceptors, function(c) {
                    return c.priority === b
                })
            };
            c.isTargetedInterceptor = function(b, c) {
                var d = c.targetedInterceptor === b.priority;
                return !c.targetedInterceptor || d
            };
            return b
        }(),
        ya = G(function() {
            yc(da.POST_PAGE_LOAD);
            document.removeEventListener("DOMContentLoaded", ya);
            document.removeEventListener("load", ya)
        }),
        Xe = {
            skimlinks: !1,
            skimwords: !1,
            unlinked: !1,
            audience: !1,
            GDPRConsent: !1,
            incentivePopup: !1
        };
    Zb && G(function() {
        A.on("skim_js_init", be);
        A.on("skim_js_init", ee);
        U.whenBeaconApiRequestCompleted(ne);
        A.on("EVENTS__CONSENT_RESOLVED", xe);
        Je();
        A.on("skim_js_init", Oe);
        A.on("skim_js_start", Pe);
        We()
    })()
})();