!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("tui-image-editor")) : "function" == typeof define && define.amd ? define(["tui-image-editor"], e) : "object" == typeof exports ? exports.toastui = e(require("tui-image-editor")) : t.toastui = e(t.tui && t.tui.ImageEditor)
}(window, function (t) {
    return function (t) {
        var e = {};

        function n(o) {
            if (e[o]) return e[o].exports;
            var r = e[o] = {i: o, l: !1, exports: {}};
            return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }

        return n.m = t, n.c = e, n.d = function (t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: o})
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var r in t) n.d(o, r, function (e) {
                return t[e]
            }.bind(null, r));
            return o
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 1)
    }([function (e, n) {
        e.exports = t
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var o = function () {
            var t = this.$createElement;
            return (this._self._c || t)("div", {ref: "tuiImageEditor", staticStyle: {width: "100%", height: "100%"}})
        };
        o._withStripped = !0;
        var r = n(0), i = n.n(r);

        function u(t) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        var s = ["addText", "mousedown", "objectActivated", "objectMoved", "objectScaled", "redoStackChanged", "textEditing", "undoStackChanged"],
            a = {includeUI: {initMenu: "filter"}}, c = {cssMaxWidth: 700, cssMaxHeight: 500};
        var d = function (t, e, n, o, r, i, u, s) {
            var a, c = "function" == typeof t ? t.options : t;
            if (e && (c.render = e, c.staticRenderFns = n, c._compiled = !0), o && (c.functional = !0), i && (c._scopeId = "data-v-" + i), u ? (a = function (t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(u)
            }, c._ssrRegister = a) : r && (a = s ? function () {
                r.call(this, this.$root.$options.shadowRoot)
            } : r), a) if (c.functional) {
                c._injectStyles = a;
                var d = c.render;
                c.render = function (t, e) {
                    return a.call(e), d(t, e)
                }
            } else {
                var f = c.beforeCreate;
                c.beforeCreate = f ? [].concat(f, a) : [a]
            }
            return {exports: t, options: c}
        }({
            name: "TuiImageEditor",
            props: {
                includeUi: {type: Boolean, default: !0}, options: {
                    type: Object, default: function () {
                        return c
                    }
                }
            },
            data: function () {
                return {editorInstance: null}
            },
            mounted: function () {
                var t = c;
                this.includeUi && (t = Object.assign(a, this.options)), this.editorInstance = new i.a(this.$refs.tuiImageEditor, t), this.addEventListener()
            },
            destroyed: function () {
                var t = this;
                s.forEach(function (e) {
                    return t.editorInstance.off(e)
                }), this.editorInstance.destroy()
            },
            methods: {
                addEventListener: function () {
                    var t = this;
                    s.forEach(function (e) {
                        t.editorInstance.on(e, function () {
                            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                            return t.$emit.apply(t, [e].concat(o))
                        })
                    })
                }, getRootElement: function () {
                    return this.$refs.tuiImageEditor
                }, invoke: function (t) {
                    for (var e, n = null, o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) r[i - 1] = arguments[i];
                    if (this.editorInstance[t]) n = (e = this.editorInstance)[t].apply(e, r); else if (t.indexOf(".") > -1) {
                        var u = this.getMethod(this.editorInstance, t);
                        "function" == typeof u && (n = u.apply(void 0, r))
                    }
                    return n
                }, getMethod: function (t, e) {
                    var n, o = this.parseDotMethodName(e), r = o.first, i = o.rest, s = "Object" !== t.constructor.name,
                        a = u(t[r]);
                    return n = s && "function" === a ? t[r].bind(t) : t[r], i.length > 0 ? this.getMethod(n, i) : n
                }, parseDotMethodName: function (t) {
                    var e = t.indexOf("."), n = t, o = "";
                    return e > -1 && (n = t.substring(0, e), o = t.substring(e + 1, t.length)), {first: n, rest: o}
                }
            }
        }, o, [], !1, null, null, null);
        d.options.__file = "src/ImageEditor.vue";
        var f = d.exports;
        n.d(e, "ImageEditor", function () {
            return f
        })
    }])
});
//# sourceMappingURL=toastui-vue-image-editor.js.map