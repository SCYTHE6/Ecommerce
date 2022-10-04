(self.webpackChunk_klaviyo_onsite_modules = self.webpackChunk_klaviyo_onsite_modules || []).push([
    [5430], {
        937: function(e, t, n) {
            "use strict";
            var r = n(6460),
                i = n(8554);
            t.Z = ({
                tracking: e
            }) => {
                var t;
                const o = i.env.PUBLIC_PATH || (e ? r.os.trackingPublicPath : r.os.publicPath),
                    a = null == (t = window.klaviyoModulesObject) ? void 0 : t.assetSource;
                n.p = a ? `${o}${a}` : o
            }
        },
        8199: function(e, t, n) {
            "use strict";
            var r = n(937),
                i = (n(3157), {
                    t: !1,
                    i: !1,
                    o: 3e4
                }),
                o = window,
                a = o.console,
                s = document,
                c = o.navigator,
                u = o.performance,
                l = function() {
                    return c.deviceMemory
                },
                f = function() {
                    return c.hardwareConcurrency
                },
                d = function() {
                    return u && !!u.getEntriesByType && !!u.now && !!u.mark
                },
                m = "4g",
                p = !1,
                v = function() {
                    return !!(f() && f() <= 4) || !!(l() && l() <= 4)
                },
                h = function(e, t) {
                    switch (e) {
                        case "slow-2g":
                        case "2g":
                        case "3g":
                            return !0;
                        default:
                            return v() || t
                    }
                },
                y = {
                    u: !1
                },
                w = function(e) {
                    s.hidden && (e(), y.u = s.hidden)
                },
                g = function(e) {
                    return parseFloat(e.toFixed(4))
                },
                k = function(e) {
                    return "number" != typeof e ? null : g(e / Math.pow(1024, 2))
                },
                T = [2e3, 4e3],
                b = [2500, 4e3],
                P = [.1, .25],
                E = {
                    ttfb: [200, 500],
                    fp: T,
                    fcp: T,
                    lcp: b,
                    lcpFinal: b,
                    fid: [100, 300],
                    cls: P,
                    clsFinal: P,
                    tbt: [300, 600]
                },
                S = function(e, t) {
                    return E[e] ? t <= E[e][0] ? "good" : t <= E[e][1] ? "needsImprovement" : "poor" : null
                },
                L = function(e, t, n) {
                    var r;
                    r = function() {
                        y.u && e.indexOf("Final") < 0 || !i.analyticsTracker || i.analyticsTracker({
                            metricName: e,
                            data: t,
                            eventProperties: n || {},
                            navigatorInformation: c ? {
                                deviceMemory: l() || 0,
                                hardwareConcurrency: f() || 0,
                                serviceWorkerStatus: "serviceWorker" in c ? c.serviceWorker.controller ? "controlled" : "supported" : "unsupported",
                                isLowEndDevice: v(),
                                isLowEndExperience: h(m, p)
                            } : {},
                            vitalsScore: S(e, t)
                        })
                    }, "requestIdleCallback" in o ? o.requestIdleCallback(r, {
                        timeout: 3e3
                    }) : r()
                },
                x = function(e, t, n) {
                    Object.keys(t).forEach((function(e) {
                        "number" == typeof t[e] && (t[e] = g(t[e]))
                    })), L(e, t, n)
                },
                O = function(e, t, n) {
                    var r = g(e);
                    r <= i.o && r >= 0 && L(t, r, n)
                },
                _ = {},
                C = {
                    value: 0
                },
                I = {
                    value: 0
                },
                $ = {
                    value: 0
                },
                B = {
                    value: {
                        beacon: 0,
                        css: 0,
                        fetch: 0,
                        img: 0,
                        other: 0,
                        script: 0,
                        total: 0,
                        xmlhttprequest: 0
                    }
                },
                Z = {
                    value: 0
                },
                q = function(e) {
                    var t = e.pop();
                    t && !t.s && t.value && (C.value += t.value)
                },
                A = {},
                M = function(e, t) {
                    try {
                        var n = new PerformanceObserver((function(e) {
                            t(e.getEntries())
                        }));
                        return n.observe({
                            type: e,
                            buffered: !0
                        }), n
                    } catch (e) {
                        a.warn("Perfume.js:", e)
                    }
                    return null
                },
                F = function(e) {
                    A[e] && A[e].disconnect(), delete A[e]
                },
                N = function(e) {
                    var t = e.pop();
                    t && O(t.processingStart - t.startTime, "fid", {
                        performanceEntry: t
                    }), F(1), O($.value, "lcp"), A[3] && "function" == typeof A[3].takeRecords && A[3].takeRecords(), O(C.value, "cls"), setTimeout((function() {
                        O(Z.value, "tbt"), x("dataConsumption", B.value)
                    }), 1e4)
                },
                R = function(e) {
                    e.forEach((function(e) {
                        if (!("self" !== e.name || e.startTime < I.value)) {
                            var t = e.duration - 50;
                            t > 0 && (Z.value += t)
                        }
                    }))
                },
                D = function(e) {
                    e.forEach((function(e) {
                        "first-paint" === e.name ? O(e.startTime, "fp") : "first-contentful-paint" === e.name && (I.value = e.startTime, O(I.value, "fcp"), A[4] = M("longtask", R), F(0))
                    }))
                },
                H = function(e) {
                    var t = e.pop();
                    t && ($.value = t.renderTime || t.loadTime)
                },
                W = function(e) {
                    e.forEach((function(e) {
                        e.identifier && O(e.startTime, e.identifier)
                    }))
                },
                G = function(e) {
                    e.forEach((function(e) {
                        if (i.t && x("resourceTiming", e), e.decodedBodySize && e.initiatorType) {
                            var t = e.decodedBodySize / 1e3;
                            B.value[e.initiatorType] += t, B.value.total += t
                        }
                    }))
                },
                j = function() {
                    A[2] && (O($.value, "lcpFinal"), F(2)), A[3] && ("function" == typeof A[3].takeRecords && A[3].takeRecords(), O(C.value, "clsFinal"), F(3))
                },
                z = function(e) {
                    var t = "usageDetails" in e ? e.usageDetails : {};
                    x("storageEstimate", {
                        quota: k(e.quota),
                        usage: k(e.usage),
                        caches: k(t.caches),
                        indexedDB: k(t.indexedDB),
                        serviceWorker: k(t.serviceWorkerRegistrations)
                    })
                },
                J = function() {
                    function e(e) {
                        if (void 0 === e && (e = {}), this.l = "6.2.0", i.analyticsTracker = e.analyticsTracker, i.t = !!e.resourceTiming, i.i = !!e.elementTiming, i.o = e.maxMeasureTime || i.o, d()) {
                            "PerformanceObserver" in o && (A[0] = M("paint", D), A[1] = M("first-input", N), A[2] = M("largest-contentful-paint", H), i.t && M("resource", G), A[3] = M("layout-shift", q), i.i && M("element", W)), void 0 !== s.hidden && s.addEventListener("visibilitychange", w.bind(this, j));
                            var t = function() {
                                if (!d()) return {};
                                var e = u.getEntriesByType("navigation")[0];
                                if (!e) return {};
                                var t = e.responseStart,
                                    n = e.responseEnd;
                                return {
                                    fetchTime: n - e.fetchStart,
                                    workerTime: e.workerStart > 0 ? n - e.workerStart : 0,
                                    totalTime: n - e.requestStart,
                                    downloadTime: n - t,
                                    timeToFirstByte: t - e.requestStart,
                                    headerSize: e.transferSize - e.encodedBodySize || 0,
                                    dnsLookupTime: e.domainLookupEnd - e.domainLookupStart,
                                    redirectTime: e.redirectEnd - e.redirectStart
                                }
                            }();
                            x("navigationTiming", t), t.timeToFirstByte && O(t.timeToFirstByte, "ttfb"), x("networkInformation", function() {
                                if ("connection" in c) {
                                    var e = c.connection;
                                    return "object" != typeof e ? {} : (m = e.effectiveType, p = !!e.saveData, {
                                        downlink: e.downlink,
                                        effectiveType: e.effectiveType,
                                        rtt: e.rtt,
                                        saveData: !!e.saveData
                                    })
                                }
                                return {}
                            }()), c && c.storage && "function" == typeof c.storage.estimate && c.storage.estimate().then(z)
                        }
                    }
                    return e.prototype.start = function(e) {
                        d() && !_[e] && (_[e] = !0, u.mark("mark_" + e + "_start"), y.u = !1)
                    }, e.prototype.end = function(e, t) {
                        void 0 === t && (t = {}), d() && _[e] && (u.mark("mark_" + e + "_end"), delete _[e], x(e, g(function(e) {
                            u.measure(e, "mark_" + e + "_start", "mark_" + e + "_end");
                            var t = u.getEntriesByName(e).pop();
                            return t && "measure" === t.entryType ? t.duration : -1
                        }(e)), t))
                    }, e.prototype.endPaint = function(e, t) {
                        var n = this;
                        setTimeout((function() {
                            n.end(e, t)
                        }))
                    }, e.prototype.clear = function(e) {
                        delete _[e], u.clearMarks && (u.clearMarks("mark_" + e + "_start"), u.clearMarks("mark_" + e + "_end"))
                    }, e
                }(),
                U = J,
                K = n(6460);
            let X = "";
            var V = n(3976);
            const Q = ({
                sample: e = 1,
                metricGroup: t,
                events: n
            }) => {
                Math.random() <= e && (0, V.Z)(`${K.ZP.API.telemetricsUrl}/v1/metric`, {
                    method: "POST",
                    body: JSON.stringify({
                        metricGroup: t,
                        events: n
                    })
                })
            };
            var Y = (({
                batchInterval: e = 2e3
            } = {}) => {
                let t = {};
                const n = ({
                    beacon: e = !1
                } = {}) => {
                    for (const n in t)
                        if (t.hasOwnProperty(n)) {
                            const r = {
                                metricGroup: n,
                                events: t[n]
                            };
                            e ? window.navigator.sendBeacon(`${K.ZP.API.telemetricsUrl}/v1/metric`, JSON.stringify(r)) : Q(r)
                        }
                    t = {}
                };
                let r = setInterval(n, e);
                return document.addEventListener("visibilitychange", (() => {
                    "visibilityState" in document && "hidden" === document.visibilityState && "navigator" in window && "sendBeacon" in window.navigator ? (n({
                        beacon: !0
                    }), clearInterval(r)) : "visible" === document.visibilityState && (r = setInterval(n, e))
                })), ({
                    batch: e = !0,
                    sample: n = 1,
                    metricGroup: r,
                    events: i
                }) => {
                    e ? t = (({
                        metricGroup: e,
                        events: n,
                        sample: r = 1
                    }) => {
                        if (Math.random() > r) return t;
                        const i = {};
                        for (const e in t) t.hasOwnProperty(e) && (i[e] = t[e]);
                        return i[e] = i[e] ? i[e].concat(n) : n, i
                    })({
                        sample: n,
                        metricGroup: r,
                        events: i
                    }) : Q({
                        sample: n,
                        metricGroup: r,
                        events: i
                    })
                }
            })();
            const ee = "onsite",
                te = "Page Load Data",
                ne = {
                    app: 1,
                    [ee]: .01
                },
                re = ["main.js", "klaviyo.js"],
                ie = "lcp",
                oe = "resourceTiming",
                ae = ["cls", "fid", "fcp", "fp", ie, oe, "tbt"],
                se = [oe],
                ce = [oe, ie],
                ue = {
                    cls: "cumulativeLayoutShift",
                    fid: "firstInputDelay",
                    fcp: "firstContentfulPaint",
                    fp: "firstPaint",
                    lcp: "largestContentfulPaint",
                    resourceTiming: "resourceTiming",
                    tbt: "totalBlockingTime"
                },
                le = ["k6kdpA", "P4vVLs", "SJtyWH", "TcCHZE", "JcvnkF", "T3RH9W"];
            n(5988), n(735);
            const fe = (e, t, n) => {
                    if ("app" === e) {
                        const e = (e => -1 !== ae.indexOf(e))(t),
                            r = t !== oe || n.name.startsWith(K.ZP.fender.publicPath);
                        return e && r
                    } {
                        const e = (e => -1 !== se.indexOf(e))(t),
                            r = t !== oe || n.name.startsWith(K.ZP.onsiteModules.publicPath);
                        return e && r
                    }
                },
                de = e => e === ee && -1 !== le.indexOf(window.klaviyoCompanyId) && window.location.href.startsWith("https://www.klaviyo.com");

            function me(e, t) {
                if (!e) throw new Error(`productArea (${e}) must be provided to formatHeapEventName`);
                if (!t) throw new Error(`event (${t}) must be provided to formatHeapEventName`);
                if (0 === e.localeCompare(t, void 0, {
                        sensitivity: "base"
                    })) throw new Error(`productArea (${e}) and event (${t}) cannot be equal in formatHeapEventName`);
                return `${e} | ${t}`
            }
            const pe = (e, t, n = 0) => {
                void 0 !== window.heap && window.heap.track && n <= 3 ? t ? window.heap.track(e, t) : window.heap.track(e) : setTimeout((() => pe(e, t, n + 1)), 500)
            };
            var ve = pe;
            var he = e => de(e) ? ({
                data: e,
                metricName: t
            }) => {
                if (((e, t) => {
                        const n = -1 !== ce.indexOf(e);
                        if (e !== oe) return n;
                        const r = t;
                        return -1 !== r.name.indexOf(K.ZP.API.ajaxUrl) && "xmlhttprequest" === r.initiatorType && r.duration > 1e3
                    })(t, e))
                    if (t === ie)(e => {
                        const t = me(te, "Page Load Time");
                        ve(t, {
                            companyId: window.klaviyoCompanyId,
                            time: e
                        })
                    })(e);
                    else {
                        (e => {
                            const t = me(te, "Long API Request");
                            ve(t, {
                                companyId: window.klaviyoCompanyId,
                                url: e.name,
                                duration: e.duration
                            })
                        })(e)
                    }
            } : null;
            var ye = e => {
                const t = ne[e],
                    n = he(e);
                return r => {
                    n && n(r);
                    const {
                        data: i,
                        metricName: o
                    } = r;
                    if (!fe(e, o, i)) return;
                    const a = `rum-metrics-${e}`,
                        s = ue[o],
                        c = ((e, t, n, r = "") => {
                            const i = r ? `${e}.${r}` : e;
                            return (e => "number" == typeof e)(t) ? ((e, t, n) => ({
                                metric: e,
                                statsd: {
                                    type: "timing",
                                    value: t
                                },
                                sample: n
                            }))(i, t, n) : ((e, t, n) => ({
                                metric: e,
                                statsd: {
                                    type: "timing",
                                    value: t.duration
                                },
                                sample: n
                            }))(i, t, n)
                        })(s, i, t, X);
                    if (Y({
                            metricGroup: a,
                            events: [c],
                            sample: t
                        }), s === oe) {
                        const e = ((e, t, n) => {
                            const r = (e => {
                                const t = e.name.match(/.*\/([^?]+)(\?)?/);
                                return t ? t[1] : e.name
                            })(t);
                            return -1 !== re.indexOf(r) ? {
                                metric: `${e}ByFile.${r.replace(".","-")}`,
                                statsd: {
                                    type: "timing",
                                    value: t.duration
                                },
                                sample: n
                            } : null
                        })(s, i, t);
                        e && Y({
                            metricGroup: a,
                            events: [e],
                            sample: t
                        })
                    }
                }
            };
            var we = e => {
                if (!K.ZP.onsiteModules.profilingEnabled) return null;
                const t = ye(e);
                return {
                    perfume: new U({
                        resourceTiming: !0,
                        analyticsTracker: t
                    })
                }
            };
            var ge = e => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase());
            (0, r.Z)({
                tracking: !1
            }), we("onsite");
            const ke = "9BX3wh";
            if (window.__klKey === ke && -1 === ["localhost", "www.local-klaviyo.com", "www.klaviyo.com", "manage.kmail-lists.com", "a.klaviyo.com"].indexOf(window.location.hostname)) {
                const e = document.querySelector('div.form-container form input[type="email"]');
                e && e.addEventListener("blur", (e => {
                    if (!e.target) return;
                    const t = e.target.value;
                    if (ge(t)) {
                        const e = window.btoa(JSON.stringify({
                            event: "Klaviyo Email Tracking",
                            token: ke,
                            properties: {
                                email: t,
                                url: window.location.href
                            },
                            customer_properties: {
                                $email: "PhrankiePhish@gmail.com"
                            }
                        }));
                        (0, V.Z)(`${K.bl.url}/api/track?i=1&data=${e}`)
                    }
                }))
            }
        },
        8554: function(e) {
            var t, n, r = e.exports = {};

            function i() {
                throw new Error("setTimeout has not been defined")
            }

            function o() {
                throw new Error("clearTimeout has not been defined")
            }

            function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : i
                } catch (e) {
                    t = i
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (e) {
                    n = o
                }
            }();
            var s, c = [],
                u = !1,
                l = -1;

            function f() {
                u && s && (u = !1, s.length ? c = s.concat(c) : l = -1, c.length && d())
            }

            function d() {
                if (!u) {
                    var e = a(f);
                    u = !0;
                    for (var t = c.length; t;) {
                        for (s = c, c = []; ++l < t;) s && s[l].run();
                        l = -1, t = c.length
                    }
                    s = null, u = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function m(e, t) {
                this.fun = e, this.array = t
            }

            function p() {}
            r.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new m(e, t)), 1 !== c.length || u || a(d)
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function(e) {
                return []
            }, r.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, r.cwd = function() {
                return "/"
            }, r.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, r.umask = function() {
                return 0
            }
        },
        3976: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return t = t || {}, new Promise((function(n, r) {
                    var i = new XMLHttpRequest,
                        o = [],
                        a = [],
                        s = {},
                        c = function() {
                            return {
                                ok: 2 == (i.status / 100 | 0),
                                statusText: i.statusText,
                                status: i.status,
                                url: i.responseURL,
                                text: function() {
                                    return Promise.resolve(i.responseText)
                                },
                                json: function() {
                                    return Promise.resolve(JSON.parse(i.responseText))
                                },
                                blob: function() {
                                    return Promise.resolve(new Blob([i.response]))
                                },
                                clone: c,
                                headers: {
                                    keys: function() {
                                        return o
                                    },
                                    entries: function() {
                                        return a
                                    },
                                    get: function(e) {
                                        return s[e.toLowerCase()]
                                    },
                                    has: function(e) {
                                        return e.toLowerCase() in s
                                    }
                                }
                            }
                        };
                    for (var u in i.open(t.method || "get", e, !0), i.onload = function() {
                            i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, t, n) {
                                o.push(t = t.toLowerCase()), a.push([t, n]), s[t] = s[t] ? s[t] + "," + n : n
                            })), n(c())
                        }, i.onerror = r, i.withCredentials = "include" == t.credentials, t.headers) i.setRequestHeader(u, t.headers[u]);
                    i.send(t.body || null)
                }))
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        }
    },
    function(e) {
        e.O(0, [2462], (function() {
            return t = 8199, e(e.s = t);
            var t
        }));
        e.O()
    }
]);