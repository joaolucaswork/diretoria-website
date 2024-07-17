"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/.pnpm/sticksy@0.2.0/node_modules/sticksy/src/sticksy.js
  var require_sticksy = __commonJS({
    "node_modules/.pnpm/sticksy@0.2.0/node_modules/sticksy/src/sticksy.js"() {
      init_live_reload();
      window.Sticksy = function() {
        "use strict";
        var States = {
          STATIC: "static",
          FIXED: "fixed",
          STUCK: "stuck"
        };
        function Sticksy2(target, options) {
          if (!target)
            throw new Error("You have to specify the target element");
          if (typeof target !== "string" && !(target instanceof Element))
            throw new Error(
              "Expected a string or element, but got: " + Object.prototype.toString.call(target)
            );
          var targetEl = Utils.findElement(target);
          if (!targetEl)
            throw new Error("Cannot find target element: " + target);
          var containerEl = targetEl.parentNode;
          if (!containerEl)
            throw new Error("Cannot find container of target element: " + target);
          options = options || {};
          this._props = {
            containerEl,
            targetEl,
            topSpacing: options.topSpacing || 0,
            enabled: options.enabled || true,
            listen: options.listen || false
            // listen for the DOM changes in the container
          };
          this.onStateChanged = null;
          this.nodeRef = targetEl;
          this._initialize();
        }
        Sticksy2.instances = [];
        Sticksy2.enabledInstances = [];
        Sticksy2.prototype._initialize = function() {
          var that = this;
          this.state = States.STATIC;
          this._stickyNodes = [];
          this._dummyNodes = [];
          var sibling = this._props.targetEl;
          while (sibling) {
            var clone = sibling.cloneNode(true);
            clone.style.visibility = "hidden";
            clone.style.pointerEvents = "none";
            clone.className += " sticksy-dummy-node";
            clone.removeAttribute("id");
            this._props.targetEl.parentNode.insertBefore(clone, this._props.targetEl);
            this._stickyNodes.push(sibling);
            this._dummyNodes.push(clone);
            sibling = sibling.nextElementSibling;
          }
          this._stickyNodesHeight = 0;
          this._limits = {
            top: 0,
            bottom: 0
          };
          this._isListening = false;
          this._props.containerEl.style.position = "relative";
          this._shouldCollapseMargins = getComputedStyle(this._props.containerEl).display.indexOf("flex") === -1;
          if (this._props.listen) {
            this._mutationObserver = new MutationObserver(function() {
              that.hardRefresh();
            });
            this._startListen();
          }
          Sticksy2.instances.push(this);
          if (this._props.enabled) {
            Sticksy2.enabledInstances.push(this);
          }
          this.hardRefresh();
        };
        Sticksy2.prototype._startListen = function() {
          if (!this._props.listen || this._isListening)
            return;
          this._mutationObserver.observe(this._props.containerEl, {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true
          });
          this._isListening = true;
        };
        Sticksy2.prototype._stopListen = function() {
          if (!this._props.listen || !this._isListening)
            return;
          this._mutationObserver.disconnect();
          this._isListening = false;
        };
        Sticksy2.prototype._calcState = function(windowOffset) {
          if (windowOffset < this._limits.top) {
            return States.STATIC;
          } else if (windowOffset >= this._limits.bottom) {
            return States.STUCK;
          }
          return States.FIXED;
        };
        Sticksy2.prototype._updateStickyNodesHeight = function() {
          this._stickyNodesHeight = Utils.getComputedBox(this._stickyNodes[this._stickyNodes.length - 1]).bottomWithMargin - Utils.getComputedBox(this._stickyNodes[0]).topWithMargin;
        };
        Sticksy2.prototype._updateLimits = function() {
          var containerEl = this._props.containerEl, stickyNodes = this._stickyNodes;
          var containerBox = Utils.getComputedBox(containerEl), topNodeBox = Utils.getComputedBox(stickyNodes[0]);
          this._limits = {
            top: topNodeBox.topWithMargin - this._props.topSpacing,
            bottom: containerBox.bottom - containerBox.paddingBottom - this._props.topSpacing - this._stickyNodesHeight
          };
        };
        Sticksy2.prototype._applyState = function(state) {
          if (state === States.STATIC) {
            this._resetElements(this._stickyNodes);
            this._disableElements(this._dummyNodes);
          } else {
            this._fixElementsSize(this._stickyNodes);
            if (state === States.FIXED) {
              this._fixElements(this._stickyNodes);
            } else {
              this._stuckElements(this._stickyNodes);
            }
            this._enableElements(this._dummyNodes);
          }
        };
        Sticksy2.prototype.refresh = function() {
          var state = this._calcState(window.pageYOffset, this._limits);
          if (state === this.state)
            return;
          this.state = state;
          this._stopListen();
          this._applyState(state);
          this._startListen();
          if (typeof this.onStateChanged === "function") {
            this.onStateChanged(state);
          }
        };
        Sticksy2.prototype.hardRefresh = function() {
          this._stopListen();
          var oldState = this.state;
          this.state = States.STATIC;
          this._applyState(this.state);
          this._fixElementsSize(this._stickyNodes);
          this._updateStickyNodesHeight();
          this._updateLimits();
          this.state = this._calcState(window.pageYOffset, this._limits);
          this._applyState(this.state);
          this._startListen();
          if (typeof this.onStateChanged === "function" && oldState !== this.state) {
            this.onStateChanged(this.state);
          }
        };
        Sticksy2.prototype.enable = function() {
          this._props.enabled = true;
          Sticksy2.enabledInstances.push(this);
          this.hardRefresh();
        };
        Sticksy2.prototype.disable = function() {
          this._props.enabled = false;
          this.state = States.STATIC;
          this._applyState(this.state);
          Sticksy2.enabledInstances.splice(Sticksy2.enabledInstances.indexOf(this), 1);
        };
        Sticksy2.prototype._fixElements = function(elements) {
          var previousMarginBottom = 0;
          var offset = this._props.topSpacing;
          for (var i3 = 0; i3 < elements.length; i3++) {
            var el = elements[i3];
            var box = Utils.getComputedBox(el);
            var extraMarginTop = this._shouldCollapseMargins ? Math.max(0, previousMarginBottom - box.marginTop) : previousMarginBottom;
            el.style.position = "fixed";
            el.style.top = offset + extraMarginTop + "px";
            el.style.bottom = "";
            offset += box.height + box.marginTop + extraMarginTop;
            previousMarginBottom = box.marginBottom;
          }
        };
        Sticksy2.prototype._stuckElements = function(elements) {
          var previousMarginTop = 0;
          var offset = Utils.getComputedBox(this._props.containerEl).paddingBottom;
          for (var i3 = elements.length - 1; i3 >= 0; i3--) {
            var el = elements[i3];
            var box = Utils.getComputedBox(el);
            var extraMarginBottom = this._shouldCollapseMargins ? Math.max(0, previousMarginTop - box.marginBottom) : previousMarginTop;
            el.style.position = "absolute";
            el.style.top = "auto";
            el.style.bottom = offset + extraMarginBottom + "px";
            offset += box.height + box.marginBottom + extraMarginBottom;
            previousMarginTop = box.marginTop;
          }
        };
        Sticksy2.prototype._resetElements = function(elements) {
          elements.forEach(function(el) {
            el.style.position = "";
            el.style.top = "";
            el.style.bottom = "";
            el.style.height = "";
            el.style.width = "";
          });
        };
        Sticksy2.prototype._disableElements = function(elements) {
          elements.forEach(function(el) {
            el.style.display = "none";
          });
        };
        Sticksy2.prototype._enableElements = function(elements) {
          for (var i3 = 0; i3 < elements.length; i3++) {
            elements[i3].style.display = getComputedStyle(this._stickyNodes[i3]).display;
          }
        };
        Sticksy2.prototype._fixElementsSize = function() {
          for (var i3 = 0; i3 < this._stickyNodes.length; i3++) {
            var stickyNode = this._stickyNodes[i3];
            var style = getComputedStyle(stickyNode);
            stickyNode.style.width = style.width;
            stickyNode.style.height = style.height;
          }
        };
        Sticksy2.refreshAll = function() {
          for (var i3 = 0; i3 < Sticksy2.enabledInstances.length; i3++) {
            Sticksy2.enabledInstances[i3].refresh();
          }
        };
        Sticksy2.hardRefreshAll = function() {
          for (var i3 = 0; i3 < Sticksy2.enabledInstances.length; i3++) {
            Sticksy2.enabledInstances[i3].hardRefresh();
          }
        };
        Sticksy2.enableAll = function() {
          Sticksy2.enabledInstances = Sticksy2.instances.slice();
          this.hardRefreshAll();
        };
        Sticksy2.disableAll = function() {
          var copy = Sticksy2.enabledInstances.slice();
          for (var i3 = 0; i3 < copy.length; i3++) {
            Sticksy2.enabledInstances[i3].disable();
          }
          Sticksy2.enabledInstances = [];
        };
        Sticksy2.initializeAll = function(target, options, ignoreNothingFound) {
          if (typeof target === "undefined")
            throw new Error("'target' parameter is undefined");
          var elements = [];
          if (target instanceof Element) {
            elements = [target];
          } else if (typeof target.length !== "undefined" && target.length > 0 && target[0] instanceof Element) {
            elements = typeof target.get === "function" ? target.get() : target;
          } else if (typeof target === "string") {
            elements = document.querySelectorAll(target) || [];
          }
          var parents = [];
          var stickyElements = [];
          elements.forEach(function(el) {
            if (parents.indexOf(el.parentNode) !== -1)
              return;
            parents.push(el.parentNode);
            stickyElements.push(el);
          });
          if (!ignoreNothingFound && !stickyElements.length)
            throw new Error("There are no elements to initialize");
          return stickyElements.map(function(el) {
            return new Sticksy2(el, options);
          });
        };
        window.addEventListener("scroll", Sticksy2.refreshAll);
        window.addEventListener("resize", Sticksy2.hardRefreshAll);
        var Utils = {
          parseNumber: function(val) {
            return parseFloat(val) || 0;
          },
          findElement: function(el, root) {
            if (!root)
              root = document;
            return "string" === typeof el ? root.querySelector(el) : el instanceof Element ? el : void 0;
          },
          getComputedBox: function(elem) {
            var box = elem.getBoundingClientRect();
            var style = getComputedStyle(elem);
            return {
              height: box.height,
              width: box.width,
              top: window.pageYOffset + box.top,
              bottom: window.pageYOffset + box.bottom,
              marginTop: Utils.parseNumber(style.marginTop),
              marginBottom: Utils.parseNumber(style.marginBottom),
              paddingTop: Utils.parseNumber(style.paddingTop),
              paddingBottom: Utils.parseNumber(style.paddingBottom),
              topWithMargin: window.pageYOffset + box.top - Utils.parseNumber(style.marginTop),
              bottomWithMargin: window.pageYOffset + box.bottom + Utils.parseNumber(style.marginBottom)
            };
          }
        };
        return Sticksy2;
      }();
      var jQueryPlugin = window.$ || window.jQuery || window.Zepto;
      if (jQueryPlugin) {
        jQueryPlugin.fn.sticksy = function sticksyPlugin(opts) {
          return window.Sticksy.initializeAll(this, opts);
        };
      }
    }
  });

  // node_modules/.pnpm/sticksy@0.2.0/node_modules/sticksy/index.js
  var require_sticksy2 = __commonJS({
    "node_modules/.pnpm/sticksy@0.2.0/node_modules/sticksy/index.js"(exports, module) {
      init_live_reload();
      module.exports = require_sticksy();
    }
  });

  // node_modules/.pnpm/plyr@3.7.8/node_modules/plyr/dist/plyr.min.js
  var require_plyr_min = __commonJS({
    "node_modules/.pnpm/plyr@3.7.8/node_modules/plyr/dist/plyr.min.js"(exports, module) {
      init_live_reload();
      "object" == typeof navigator && function(e4, t3) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t3() : "function" == typeof define && define.amd ? define("Plyr", t3) : (e4 = "undefined" != typeof globalThis ? globalThis : e4 || self).Plyr = t3();
      }(exports, function() {
        "use strict";
        function e4(e5, t4, i4) {
          return (t4 = function(e6) {
            var t5 = function(e7, t6) {
              if ("object" != typeof e7 || null === e7)
                return e7;
              var i5 = e7[Symbol.toPrimitive];
              if (void 0 !== i5) {
                var s4 = i5.call(e7, t6 || "default");
                if ("object" != typeof s4)
                  return s4;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t6 ? String : Number)(e7);
            }(e6, "string");
            return "symbol" == typeof t5 ? t5 : String(t5);
          }(t4)) in e5 ? Object.defineProperty(e5, t4, { value: i4, enumerable: true, configurable: true, writable: true }) : e5[t4] = i4, e5;
        }
        function t3(e5, t4) {
          for (var i4 = 0; i4 < t4.length; i4++) {
            var s4 = t4[i4];
            s4.enumerable = s4.enumerable || false, s4.configurable = true, "value" in s4 && (s4.writable = true), Object.defineProperty(e5, s4.key, s4);
          }
        }
        function i3(e5, t4, i4) {
          return t4 in e5 ? Object.defineProperty(e5, t4, { value: i4, enumerable: true, configurable: true, writable: true }) : e5[t4] = i4, e5;
        }
        function s3(e5, t4) {
          var i4 = Object.keys(e5);
          if (Object.getOwnPropertySymbols) {
            var s4 = Object.getOwnPropertySymbols(e5);
            t4 && (s4 = s4.filter(function(t5) {
              return Object.getOwnPropertyDescriptor(e5, t5).enumerable;
            })), i4.push.apply(i4, s4);
          }
          return i4;
        }
        function n3(e5) {
          for (var t4 = 1; t4 < arguments.length; t4++) {
            var n4 = null != arguments[t4] ? arguments[t4] : {};
            t4 % 2 ? s3(Object(n4), true).forEach(function(t5) {
              i3(e5, t5, n4[t5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n4)) : s3(Object(n4)).forEach(function(t5) {
              Object.defineProperty(e5, t5, Object.getOwnPropertyDescriptor(n4, t5));
            });
          }
          return e5;
        }
        var a2 = { addCSS: true, thumbWidth: 15, watch: true };
        var l2 = function(e5) {
          return null != e5 ? e5.constructor : null;
        }, r2 = function(e5, t4) {
          return !!(e5 && t4 && e5 instanceof t4);
        }, o2 = function(e5) {
          return null == e5;
        }, c2 = function(e5) {
          return l2(e5) === Object;
        }, u = function(e5) {
          return l2(e5) === String;
        }, h2 = function(e5) {
          return Array.isArray(e5);
        }, d = function(e5) {
          return r2(e5, NodeList);
        }, m = { nullOrUndefined: o2, object: c2, number: function(e5) {
          return l2(e5) === Number && !Number.isNaN(e5);
        }, string: u, boolean: function(e5) {
          return l2(e5) === Boolean;
        }, function: function(e5) {
          return l2(e5) === Function;
        }, array: h2, nodeList: d, element: function(e5) {
          return r2(e5, Element);
        }, event: function(e5) {
          return r2(e5, Event);
        }, empty: function(e5) {
          return o2(e5) || (u(e5) || h2(e5) || d(e5)) && !e5.length || c2(e5) && !Object.keys(e5).length;
        } };
        function p(e5, t4) {
          if (1 > t4) {
            var i4 = function(e6) {
              var t5 = "".concat(e6).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              return t5 ? Math.max(0, (t5[1] ? t5[1].length : 0) - (t5[2] ? +t5[2] : 0)) : 0;
            }(t4);
            return parseFloat(e5.toFixed(i4));
          }
          return Math.round(e5 / t4) * t4;
        }
        var g = function() {
          function e5(t4, i4) {
            (function(e6, t5) {
              if (!(e6 instanceof t5))
                throw new TypeError("Cannot call a class as a function");
            })(this, e5), m.element(t4) ? this.element = t4 : m.string(t4) && (this.element = document.querySelector(t4)), m.element(this.element) && m.empty(this.element.rangeTouch) && (this.config = n3({}, a2, {}, i4), this.init());
          }
          return function(e6, i4, s4) {
            i4 && t3(e6.prototype, i4), s4 && t3(e6, s4);
          }(e5, [{ key: "init", value: function() {
            e5.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
          } }, { key: "destroy", value: function() {
            e5.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
          } }, { key: "listeners", value: function(e6) {
            var t4 = this, i4 = e6 ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function(e7) {
              t4.element[i4](e7, function(e8) {
                return t4.set(e8);
              }, false);
            });
          } }, { key: "get", value: function(t4) {
            if (!e5.enabled || !m.event(t4))
              return null;
            var i4, s4 = t4.target, n4 = t4.changedTouches[0], a3 = parseFloat(s4.getAttribute("min")) || 0, l3 = parseFloat(s4.getAttribute("max")) || 100, r3 = parseFloat(s4.getAttribute("step")) || 1, o3 = s4.getBoundingClientRect(), c3 = 100 / o3.width * (this.config.thumbWidth / 2) / 100;
            return 0 > (i4 = 100 / o3.width * (n4.clientX - o3.left)) ? i4 = 0 : 100 < i4 && (i4 = 100), 50 > i4 ? i4 -= (100 - 2 * i4) * c3 : 50 < i4 && (i4 += 2 * (i4 - 50) * c3), a3 + p(i4 / 100 * (l3 - a3), r3);
          } }, { key: "set", value: function(t4) {
            e5.enabled && m.event(t4) && !t4.target.disabled && (t4.preventDefault(), t4.target.value = this.get(t4), function(e6, t5) {
              if (e6 && t5) {
                var i4 = new Event(t5, { bubbles: true });
                e6.dispatchEvent(i4);
              }
            }(t4.target, "touchend" === t4.type ? "change" : "input"));
          } }], [{ key: "setup", value: function(t4) {
            var i4 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s4 = null;
            if (m.empty(t4) || m.string(t4) ? s4 = Array.from(document.querySelectorAll(m.string(t4) ? t4 : 'input[type="range"]')) : m.element(t4) ? s4 = [t4] : m.nodeList(t4) ? s4 = Array.from(t4) : m.array(t4) && (s4 = t4.filter(m.element)), m.empty(s4))
              return null;
            var l3 = n3({}, a2, {}, i4);
            if (m.string(t4) && l3.watch) {
              var r3 = new MutationObserver(function(i5) {
                Array.from(i5).forEach(function(i6) {
                  Array.from(i6.addedNodes).forEach(function(i7) {
                    m.element(i7) && function(e6, t5) {
                      return function() {
                        return Array.from(document.querySelectorAll(t5)).includes(this);
                      }.call(e6, t5);
                    }(i7, t4) && new e5(i7, l3);
                  });
                });
              });
              r3.observe(document.body, { childList: true, subtree: true });
            }
            return s4.map(function(t5) {
              return new e5(t5, i4);
            });
          } }, { key: "enabled", get: function() {
            return "ontouchstart" in document.documentElement;
          } }]), e5;
        }();
        const f = (e5) => null != e5 ? e5.constructor : null, y = (e5, t4) => Boolean(e5 && t4 && e5 instanceof t4), b = (e5) => null == e5, v = (e5) => f(e5) === Object, w = (e5) => f(e5) === String, T = (e5) => "function" == typeof e5, k = (e5) => Array.isArray(e5), C = (e5) => y(e5, NodeList), A = (e5) => b(e5) || (w(e5) || k(e5) || C(e5)) && !e5.length || v(e5) && !Object.keys(e5).length;
        var S = { nullOrUndefined: b, object: v, number: (e5) => f(e5) === Number && !Number.isNaN(e5), string: w, boolean: (e5) => f(e5) === Boolean, function: T, array: k, weakMap: (e5) => y(e5, WeakMap), nodeList: C, element: (e5) => null !== e5 && "object" == typeof e5 && 1 === e5.nodeType && "object" == typeof e5.style && "object" == typeof e5.ownerDocument, textNode: (e5) => f(e5) === Text, event: (e5) => y(e5, Event), keyboardEvent: (e5) => y(e5, KeyboardEvent), cue: (e5) => y(e5, window.TextTrackCue) || y(e5, window.VTTCue), track: (e5) => y(e5, TextTrack) || !b(e5) && w(e5.kind), promise: (e5) => y(e5, Promise) && T(e5.then), url: (e5) => {
          if (y(e5, window.URL))
            return true;
          if (!w(e5))
            return false;
          let t4 = e5;
          e5.startsWith("http://") && e5.startsWith("https://") || (t4 = `http://${e5}`);
          try {
            return !A(new URL(t4).hostname);
          } catch (e6) {
            return false;
          }
        }, empty: A };
        const E = (() => {
          const e5 = document.createElement("span"), t4 = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, i4 = Object.keys(t4).find((t5) => void 0 !== e5.style[t5]);
          return !!S.string(i4) && t4[i4];
        })();
        function P(e5, t4) {
          setTimeout(() => {
            try {
              e5.hidden = true, e5.offsetHeight, e5.hidden = false;
            } catch (e6) {
            }
          }, t4);
        }
        var M = { isIE: Boolean(window.document.documentMode), isEdge: /Edge/g.test(navigator.userAgent), isWebKit: "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent), isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1, isIPadOS: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1 };
        function N(e5, t4) {
          return t4.split(".").reduce((e6, t5) => e6 && e6[t5], e5);
        }
        function x(e5 = {}, ...t4) {
          if (!t4.length)
            return e5;
          const i4 = t4.shift();
          return S.object(i4) ? (Object.keys(i4).forEach((t5) => {
            S.object(i4[t5]) ? (Object.keys(e5).includes(t5) || Object.assign(e5, { [t5]: {} }), x(e5[t5], i4[t5])) : Object.assign(e5, { [t5]: i4[t5] });
          }), x(e5, ...t4)) : e5;
        }
        function L(e5, t4) {
          const i4 = e5.length ? e5 : [e5];
          Array.from(i4).reverse().forEach((e6, i5) => {
            const s4 = i5 > 0 ? t4.cloneNode(true) : t4, n4 = e6.parentNode, a3 = e6.nextSibling;
            s4.appendChild(e6), a3 ? n4.insertBefore(s4, a3) : n4.appendChild(s4);
          });
        }
        function I(e5, t4) {
          S.element(e5) && !S.empty(t4) && Object.entries(t4).filter(([, e6]) => !S.nullOrUndefined(e6)).forEach(([t5, i4]) => e5.setAttribute(t5, i4));
        }
        function $2(e5, t4, i4) {
          const s4 = document.createElement(e5);
          return S.object(t4) && I(s4, t4), S.string(i4) && (s4.innerText = i4), s4;
        }
        function _(e5, t4, i4, s4) {
          S.element(t4) && t4.appendChild($2(e5, i4, s4));
        }
        function O(e5) {
          S.nodeList(e5) || S.array(e5) ? Array.from(e5).forEach(O) : S.element(e5) && S.element(e5.parentNode) && e5.parentNode.removeChild(e5);
        }
        function j(e5) {
          if (!S.element(e5))
            return;
          let { length: t4 } = e5.childNodes;
          for (; t4 > 0; )
            e5.removeChild(e5.lastChild), t4 -= 1;
        }
        function q(e5, t4) {
          return S.element(t4) && S.element(t4.parentNode) && S.element(e5) ? (t4.parentNode.replaceChild(e5, t4), e5) : null;
        }
        function D(e5, t4) {
          if (!S.string(e5) || S.empty(e5))
            return {};
          const i4 = {}, s4 = x({}, t4);
          return e5.split(",").forEach((e6) => {
            const t5 = e6.trim(), n4 = t5.replace(".", ""), a3 = t5.replace(/[[\]]/g, "").split("="), [l3] = a3, r3 = a3.length > 1 ? a3[1].replace(/["']/g, "") : "";
            switch (t5.charAt(0)) {
              case ".":
                S.string(s4.class) ? i4.class = `${s4.class} ${n4}` : i4.class = n4;
                break;
              case "#":
                i4.id = t5.replace("#", "");
                break;
              case "[":
                i4[l3] = r3;
            }
          }), x(s4, i4);
        }
        function H(e5, t4) {
          if (!S.element(e5))
            return;
          let i4 = t4;
          S.boolean(i4) || (i4 = !e5.hidden), e5.hidden = i4;
        }
        function R(e5, t4, i4) {
          if (S.nodeList(e5))
            return Array.from(e5).map((e6) => R(e6, t4, i4));
          if (S.element(e5)) {
            let s4 = "toggle";
            return void 0 !== i4 && (s4 = i4 ? "add" : "remove"), e5.classList[s4](t4), e5.classList.contains(t4);
          }
          return false;
        }
        function F(e5, t4) {
          return S.element(e5) && e5.classList.contains(t4);
        }
        function V(e5, t4) {
          const { prototype: i4 } = Element;
          return (i4.matches || i4.webkitMatchesSelector || i4.mozMatchesSelector || i4.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t4)).includes(this);
          }).call(e5, t4);
        }
        function U(e5) {
          return this.elements.container.querySelectorAll(e5);
        }
        function B(e5) {
          return this.elements.container.querySelector(e5);
        }
        function W(e5 = null, t4 = false) {
          S.element(e5) && e5.focus({ preventScroll: true, focusVisible: t4 });
        }
        const z = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" }, K = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check(e5, t4) {
          const i4 = K[e5] || "html5" !== t4;
          return { api: i4, ui: i4 && K.rangeInput };
        }, pip: !(M.isIPhone || !S.function($2("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || $2("video").disablePictureInPicture)), airplay: S.function(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime(e5) {
          if (S.empty(e5))
            return false;
          const [t4] = e5.split("/");
          let i4 = e5;
          if (!this.isHTML5 || t4 !== this.type)
            return false;
          Object.keys(z).includes(i4) && (i4 += `; codecs="${z[e5]}"`);
          try {
            return Boolean(i4 && this.media.canPlayType(i4).replace(/no/, ""));
          } catch (e6) {
            return false;
          }
        }, textTracks: "textTracks" in document.createElement("video"), rangeInput: (() => {
          const e5 = document.createElement("input");
          return e5.type = "range", "range" === e5.type;
        })(), touch: "ontouchstart" in document.documentElement, transitions: false !== E, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches }, Y = (() => {
          let e5 = false;
          try {
            const t4 = Object.defineProperty({}, "passive", { get: () => (e5 = true, null) });
            window.addEventListener("test", null, t4), window.removeEventListener("test", null, t4);
          } catch (e6) {
          }
          return e5;
        })();
        function Q(e5, t4, i4, s4 = false, n4 = true, a3 = false) {
          if (!e5 || !("addEventListener" in e5) || S.empty(t4) || !S.function(i4))
            return;
          const l3 = t4.split(" ");
          let r3 = a3;
          Y && (r3 = { passive: n4, capture: a3 }), l3.forEach((t5) => {
            this && this.eventListeners && s4 && this.eventListeners.push({ element: e5, type: t5, callback: i4, options: r3 }), e5[s4 ? "addEventListener" : "removeEventListener"](t5, i4, r3);
          });
        }
        function X(e5, t4 = "", i4, s4 = true, n4 = false) {
          Q.call(this, e5, t4, i4, true, s4, n4);
        }
        function J(e5, t4 = "", i4, s4 = true, n4 = false) {
          Q.call(this, e5, t4, i4, false, s4, n4);
        }
        function G(e5, t4 = "", i4, s4 = true, n4 = false) {
          const a3 = (...l3) => {
            J(e5, t4, a3, s4, n4), i4.apply(this, l3);
          };
          Q.call(this, e5, t4, a3, true, s4, n4);
        }
        function Z(e5, t4 = "", i4 = false, s4 = {}) {
          if (!S.element(e5) || S.empty(t4))
            return;
          const n4 = new CustomEvent(t4, { bubbles: i4, detail: { ...s4, plyr: this } });
          e5.dispatchEvent(n4);
        }
        function ee() {
          this && this.eventListeners && (this.eventListeners.forEach((e5) => {
            const { element: t4, type: i4, callback: s4, options: n4 } = e5;
            t4.removeEventListener(i4, s4, n4);
          }), this.eventListeners = []);
        }
        function te() {
          return new Promise((e5) => this.ready ? setTimeout(e5, 0) : X.call(this, this.elements.container, "ready", e5)).then(() => {
          });
        }
        function ie(e5) {
          S.promise(e5) && e5.then(null, () => {
          });
        }
        function se(e5) {
          return S.array(e5) ? e5.filter((t4, i4) => e5.indexOf(t4) === i4) : e5;
        }
        function ne(e5, t4) {
          return S.array(e5) && e5.length ? e5.reduce((e6, i4) => Math.abs(i4 - t4) < Math.abs(e6 - t4) ? i4 : e6) : null;
        }
        function ae(e5) {
          return !(!window || !window.CSS) && window.CSS.supports(e5);
        }
        const le = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((e5, [t4, i4]) => ({ ...e5, [t4 / i4]: [t4, i4] }), {});
        function re(e5) {
          if (!(S.array(e5) || S.string(e5) && e5.includes(":")))
            return false;
          return (S.array(e5) ? e5 : e5.split(":")).map(Number).every(S.number);
        }
        function oe(e5) {
          if (!S.array(e5) || !e5.every(S.number))
            return null;
          const [t4, i4] = e5, s4 = (e6, t5) => 0 === t5 ? e6 : s4(t5, e6 % t5), n4 = s4(t4, i4);
          return [t4 / n4, i4 / n4];
        }
        function ce(e5) {
          const t4 = (e6) => re(e6) ? e6.split(":").map(Number) : null;
          let i4 = t4(e5);
          if (null === i4 && (i4 = t4(this.config.ratio)), null === i4 && !S.empty(this.embed) && S.array(this.embed.ratio) && ({ ratio: i4 } = this.embed), null === i4 && this.isHTML5) {
            const { videoWidth: e6, videoHeight: t5 } = this.media;
            i4 = [e6, t5];
          }
          return oe(i4);
        }
        function ue(e5) {
          if (!this.isVideo)
            return {};
          const { wrapper: t4 } = this.elements, i4 = ce.call(this, e5);
          if (!S.array(i4))
            return {};
          const [s4, n4] = oe(i4), a3 = 100 / s4 * n4;
          if (ae(`aspect-ratio: ${s4}/${n4}`) ? t4.style.aspectRatio = `${s4}/${n4}` : t4.style.paddingBottom = `${a3}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            const e6 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), i5 = (e6 - a3) / (e6 / 50);
            this.fullscreen.active ? t4.style.paddingBottom = null : this.media.style.transform = `translateY(-${i5}%)`;
          } else
            this.isHTML5 && t4.classList.add(this.config.classNames.videoFixedRatio);
          return { padding: a3, ratio: i4 };
        }
        function he(e5, t4, i4 = 0.05) {
          const s4 = e5 / t4, n4 = ne(Object.keys(le), s4);
          return Math.abs(n4 - s4) <= i4 ? le[n4] : [e5, t4];
        }
        const de = { getSources() {
          if (!this.isHTML5)
            return [];
          return Array.from(this.media.querySelectorAll("source")).filter((e5) => {
            const t4 = e5.getAttribute("type");
            return !!S.empty(t4) || K.mime.call(this, t4);
          });
        }, getQualityOptions() {
          return this.config.quality.forced ? this.config.quality.options : de.getSources.call(this).map((e5) => Number(e5.getAttribute("size"))).filter(Boolean);
        }, setup() {
          if (!this.isHTML5)
            return;
          const e5 = this;
          e5.options.speed = e5.config.speed.options, S.empty(this.config.ratio) || ue.call(e5), Object.defineProperty(e5.media, "quality", { get() {
            const t4 = de.getSources.call(e5).find((t5) => t5.getAttribute("src") === e5.source);
            return t4 && Number(t4.getAttribute("size"));
          }, set(t4) {
            if (e5.quality !== t4) {
              if (e5.config.quality.forced && S.function(e5.config.quality.onChange))
                e5.config.quality.onChange(t4);
              else {
                const i4 = de.getSources.call(e5).find((e6) => Number(e6.getAttribute("size")) === t4);
                if (!i4)
                  return;
                const { currentTime: s4, paused: n4, preload: a3, readyState: l3, playbackRate: r3 } = e5.media;
                e5.media.src = i4.getAttribute("src"), ("none" !== a3 || l3) && (e5.once("loadedmetadata", () => {
                  e5.speed = r3, e5.currentTime = s4, n4 || ie(e5.play());
                }), e5.media.load());
              }
              Z.call(e5, e5.media, "qualitychange", false, { quality: t4 });
            }
          } });
        }, cancelRequests() {
          this.isHTML5 && (O(de.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
        } };
        function me(e5, ...t4) {
          return S.empty(e5) ? e5 : e5.toString().replace(/{(\d+)}/g, (e6, i4) => t4[i4].toString());
        }
        const pe = (e5 = "", t4 = "", i4 = "") => e5.replace(new RegExp(t4.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i4.toString()), ge = (e5 = "") => e5.toString().replace(/\w\S*/g, (e6) => e6.charAt(0).toUpperCase() + e6.slice(1).toLowerCase());
        function fe(e5 = "") {
          let t4 = e5.toString();
          return t4 = function(e6 = "") {
            let t5 = e6.toString();
            return t5 = pe(t5, "-", " "), t5 = pe(t5, "_", " "), t5 = ge(t5), pe(t5, " ", "");
          }(t4), t4.charAt(0).toLowerCase() + t4.slice(1);
        }
        function ye(e5) {
          const t4 = document.createElement("div");
          return t4.appendChild(e5), t4.innerHTML;
        }
        const be = { pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube" }, ve = { get(e5 = "", t4 = {}) {
          if (S.empty(e5) || S.empty(t4))
            return "";
          let i4 = N(t4.i18n, e5);
          if (S.empty(i4))
            return Object.keys(be).includes(e5) ? be[e5] : "";
          const s4 = { "{seektime}": t4.seekTime, "{title}": t4.title };
          return Object.entries(s4).forEach(([e6, t5]) => {
            i4 = pe(i4, e6, t5);
          }), i4;
        } };
        class we {
          constructor(t4) {
            e4(this, "get", (e5) => {
              if (!we.supported || !this.enabled)
                return null;
              const t5 = window.localStorage.getItem(this.key);
              if (S.empty(t5))
                return null;
              const i4 = JSON.parse(t5);
              return S.string(e5) && e5.length ? i4[e5] : i4;
            }), e4(this, "set", (e5) => {
              if (!we.supported || !this.enabled)
                return;
              if (!S.object(e5))
                return;
              let t5 = this.get();
              S.empty(t5) && (t5 = {}), x(t5, e5);
              try {
                window.localStorage.setItem(this.key, JSON.stringify(t5));
              } catch (e6) {
              }
            }), this.enabled = t4.config.storage.enabled, this.key = t4.config.storage.key;
          }
          static get supported() {
            try {
              if (!("localStorage" in window))
                return false;
              const e5 = "___test";
              return window.localStorage.setItem(e5, e5), window.localStorage.removeItem(e5), true;
            } catch (e5) {
              return false;
            }
          }
        }
        function Te(e5, t4 = "text") {
          return new Promise((i4, s4) => {
            try {
              const s5 = new XMLHttpRequest();
              if (!("withCredentials" in s5))
                return;
              s5.addEventListener("load", () => {
                if ("text" === t4)
                  try {
                    i4(JSON.parse(s5.responseText));
                  } catch (e6) {
                    i4(s5.responseText);
                  }
                else
                  i4(s5.response);
              }), s5.addEventListener("error", () => {
                throw new Error(s5.status);
              }), s5.open("GET", e5, true), s5.responseType = t4, s5.send();
            } catch (e6) {
              s4(e6);
            }
          });
        }
        function ke(e5, t4) {
          if (!S.string(e5))
            return;
          const i4 = "cache", s4 = S.string(t4);
          let n4 = false;
          const a3 = () => null !== document.getElementById(t4), l3 = (e6, t5) => {
            e6.innerHTML = t5, s4 && a3() || document.body.insertAdjacentElement("afterbegin", e6);
          };
          if (!s4 || !a3()) {
            const a4 = we.supported, r3 = document.createElement("div");
            if (r3.setAttribute("hidden", ""), s4 && r3.setAttribute("id", t4), a4) {
              const e6 = window.localStorage.getItem(`${i4}-${t4}`);
              if (n4 = null !== e6, n4) {
                const t5 = JSON.parse(e6);
                l3(r3, t5.content);
              }
            }
            Te(e5).then((e6) => {
              if (!S.empty(e6)) {
                if (a4)
                  try {
                    window.localStorage.setItem(`${i4}-${t4}`, JSON.stringify({ content: e6 }));
                  } catch (e7) {
                  }
                l3(r3, e6);
              }
            }).catch(() => {
            });
          }
        }
        const Ce = (e5) => Math.trunc(e5 / 60 / 60 % 60, 10), Ae = (e5) => Math.trunc(e5 / 60 % 60, 10), Se = (e5) => Math.trunc(e5 % 60, 10);
        function Ee(e5 = 0, t4 = false, i4 = false) {
          if (!S.number(e5))
            return Ee(void 0, t4, i4);
          const s4 = (e6) => `0${e6}`.slice(-2);
          let n4 = Ce(e5);
          const a3 = Ae(e5), l3 = Se(e5);
          return n4 = t4 || n4 > 0 ? `${n4}:` : "", `${i4 && e5 > 0 ? "-" : ""}${n4}${s4(a3)}:${s4(l3)}`;
        }
        const Pe = { getIconUrl() {
          const e5 = new URL(this.config.iconUrl, window.location), t4 = window.location.host ? window.location.host : window.top.location.host, i4 = e5.host !== t4 || M.isIE && !window.svg4everybody;
          return { url: this.config.iconUrl, cors: i4 };
        }, findElements() {
          try {
            return this.elements.controls = B.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: U.call(this, this.config.selectors.buttons.play), pause: B.call(this, this.config.selectors.buttons.pause), restart: B.call(this, this.config.selectors.buttons.restart), rewind: B.call(this, this.config.selectors.buttons.rewind), fastForward: B.call(this, this.config.selectors.buttons.fastForward), mute: B.call(this, this.config.selectors.buttons.mute), pip: B.call(this, this.config.selectors.buttons.pip), airplay: B.call(this, this.config.selectors.buttons.airplay), settings: B.call(this, this.config.selectors.buttons.settings), captions: B.call(this, this.config.selectors.buttons.captions), fullscreen: B.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = B.call(this, this.config.selectors.progress), this.elements.inputs = { seek: B.call(this, this.config.selectors.inputs.seek), volume: B.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: B.call(this, this.config.selectors.display.buffer), currentTime: B.call(this, this.config.selectors.display.currentTime), duration: B.call(this, this.config.selectors.display.duration) }, S.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), true;
          } catch (e5) {
            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e5), this.toggleNativeControls(true), false;
          }
        }, createIcon(e5, t4) {
          const i4 = "http://www.w3.org/2000/svg", s4 = Pe.getIconUrl.call(this), n4 = `${s4.cors ? "" : s4.url}#${this.config.iconPrefix}`, a3 = document.createElementNS(i4, "svg");
          I(a3, x(t4, { "aria-hidden": "true", focusable: "false" }));
          const l3 = document.createElementNS(i4, "use"), r3 = `${n4}-${e5}`;
          return "href" in l3 && l3.setAttributeNS("http://www.w3.org/1999/xlink", "href", r3), l3.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r3), a3.appendChild(l3), a3;
        }, createLabel(e5, t4 = {}) {
          const i4 = ve.get(e5, this.config);
          return $2("span", { ...t4, class: [t4.class, this.config.classNames.hidden].filter(Boolean).join(" ") }, i4);
        }, createBadge(e5) {
          if (S.empty(e5))
            return null;
          const t4 = $2("span", { class: this.config.classNames.menu.value });
          return t4.appendChild($2("span", { class: this.config.classNames.menu.badge }, e5)), t4;
        }, createButton(e5, t4) {
          const i4 = x({}, t4);
          let s4 = fe(e5);
          const n4 = { element: "button", toggle: false, label: null, icon: null, labelPressed: null, iconPressed: null };
          switch (["element", "icon", "label"].forEach((e6) => {
            Object.keys(i4).includes(e6) && (n4[e6] = i4[e6], delete i4[e6]);
          }), "button" !== n4.element || Object.keys(i4).includes("type") || (i4.type = "button"), Object.keys(i4).includes("class") ? i4.class.split(" ").some((e6) => e6 === this.config.classNames.control) || x(i4, { class: `${i4.class} ${this.config.classNames.control}` }) : i4.class = this.config.classNames.control, e5) {
            case "play":
              n4.toggle = true, n4.label = "play", n4.labelPressed = "pause", n4.icon = "play", n4.iconPressed = "pause";
              break;
            case "mute":
              n4.toggle = true, n4.label = "mute", n4.labelPressed = "unmute", n4.icon = "volume", n4.iconPressed = "muted";
              break;
            case "captions":
              n4.toggle = true, n4.label = "enableCaptions", n4.labelPressed = "disableCaptions", n4.icon = "captions-off", n4.iconPressed = "captions-on";
              break;
            case "fullscreen":
              n4.toggle = true, n4.label = "enterFullscreen", n4.labelPressed = "exitFullscreen", n4.icon = "enter-fullscreen", n4.iconPressed = "exit-fullscreen";
              break;
            case "play-large":
              i4.class += ` ${this.config.classNames.control}--overlaid`, s4 = "play", n4.label = "play", n4.icon = "play";
              break;
            default:
              S.empty(n4.label) && (n4.label = s4), S.empty(n4.icon) && (n4.icon = e5);
          }
          const a3 = $2(n4.element);
          return n4.toggle ? (a3.appendChild(Pe.createIcon.call(this, n4.iconPressed, { class: "icon--pressed" })), a3.appendChild(Pe.createIcon.call(this, n4.icon, { class: "icon--not-pressed" })), a3.appendChild(Pe.createLabel.call(this, n4.labelPressed, { class: "label--pressed" })), a3.appendChild(Pe.createLabel.call(this, n4.label, { class: "label--not-pressed" }))) : (a3.appendChild(Pe.createIcon.call(this, n4.icon)), a3.appendChild(Pe.createLabel.call(this, n4.label))), x(i4, D(this.config.selectors.buttons[s4], i4)), I(a3, i4), "play" === s4 ? (S.array(this.elements.buttons[s4]) || (this.elements.buttons[s4] = []), this.elements.buttons[s4].push(a3)) : this.elements.buttons[s4] = a3, a3;
        }, createRange(e5, t4) {
          const i4 = $2("input", x(D(this.config.selectors.inputs[e5]), { type: "range", min: 0, max: 100, step: 0.01, value: 0, autocomplete: "off", role: "slider", "aria-label": ve.get(e5, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t4));
          return this.elements.inputs[e5] = i4, Pe.updateRangeFill.call(this, i4), g.setup(i4), i4;
        }, createProgress(e5, t4) {
          const i4 = $2("progress", x(D(this.config.selectors.display[e5]), { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": true }, t4));
          if ("volume" !== e5) {
            i4.appendChild($2("span", null, "0"));
            const t5 = { played: "played", buffer: "buffered" }[e5], s4 = t5 ? ve.get(t5, this.config) : "";
            i4.innerText = `% ${s4.toLowerCase()}`;
          }
          return this.elements.display[e5] = i4, i4;
        }, createTime(e5, t4) {
          const i4 = D(this.config.selectors.display[e5], t4), s4 = $2("div", x(i4, { class: `${i4.class ? i4.class : ""} ${this.config.classNames.display.time} `.trim(), "aria-label": ve.get(e5, this.config), role: "timer" }), "00:00");
          return this.elements.display[e5] = s4, s4;
        }, bindMenuItemShortcuts(e5, t4) {
          X.call(this, e5, "keydown keyup", (i4) => {
            if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i4.key))
              return;
            if (i4.preventDefault(), i4.stopPropagation(), "keydown" === i4.type)
              return;
            const s4 = V(e5, '[role="menuitemradio"]');
            if (!s4 && [" ", "ArrowRight"].includes(i4.key))
              Pe.showMenuPanel.call(this, t4, true);
            else {
              let t5;
              " " !== i4.key && ("ArrowDown" === i4.key || s4 && "ArrowRight" === i4.key ? (t5 = e5.nextElementSibling, S.element(t5) || (t5 = e5.parentNode.firstElementChild)) : (t5 = e5.previousElementSibling, S.element(t5) || (t5 = e5.parentNode.lastElementChild)), W.call(this, t5, true));
            }
          }, false), X.call(this, e5, "keyup", (e6) => {
            "Return" === e6.key && Pe.focusFirstMenuItem.call(this, null, true);
          });
        }, createMenuItem({ value: e5, list: t4, type: i4, title: s4, badge: n4 = null, checked: a3 = false }) {
          const l3 = D(this.config.selectors.inputs[i4]), r3 = $2("button", x(l3, { type: "button", role: "menuitemradio", class: `${this.config.classNames.control} ${l3.class ? l3.class : ""}`.trim(), "aria-checked": a3, value: e5 })), o3 = $2("span");
          o3.innerHTML = s4, S.element(n4) && o3.appendChild(n4), r3.appendChild(o3), Object.defineProperty(r3, "checked", { enumerable: true, get: () => "true" === r3.getAttribute("aria-checked"), set(e6) {
            e6 && Array.from(r3.parentNode.children).filter((e7) => V(e7, '[role="menuitemradio"]')).forEach((e7) => e7.setAttribute("aria-checked", "false")), r3.setAttribute("aria-checked", e6 ? "true" : "false");
          } }), this.listeners.bind(r3, "click keyup", (t5) => {
            if (!S.keyboardEvent(t5) || " " === t5.key) {
              switch (t5.preventDefault(), t5.stopPropagation(), r3.checked = true, i4) {
                case "language":
                  this.currentTrack = Number(e5);
                  break;
                case "quality":
                  this.quality = e5;
                  break;
                case "speed":
                  this.speed = parseFloat(e5);
              }
              Pe.showMenuPanel.call(this, "home", S.keyboardEvent(t5));
            }
          }, i4, false), Pe.bindMenuItemShortcuts.call(this, r3, i4), t4.appendChild(r3);
        }, formatTime(e5 = 0, t4 = false) {
          if (!S.number(e5))
            return e5;
          return Ee(e5, Ce(this.duration) > 0, t4);
        }, updateTimeDisplay(e5 = null, t4 = 0, i4 = false) {
          S.element(e5) && S.number(t4) && (e5.innerText = Pe.formatTime(t4, i4));
        }, updateVolume() {
          this.supported.ui && (S.element(this.elements.inputs.volume) && Pe.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), S.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
        }, setRange(e5, t4 = 0) {
          S.element(e5) && (e5.value = t4, Pe.updateRangeFill.call(this, e5));
        }, updateProgress(e5) {
          if (!this.supported.ui || !S.event(e5))
            return;
          let t4 = 0;
          const i4 = (e6, t5) => {
            const i5 = S.number(t5) ? t5 : 0, s5 = S.element(e6) ? e6 : this.elements.display.buffer;
            if (S.element(s5)) {
              s5.value = i5;
              const e7 = s5.getElementsByTagName("span")[0];
              S.element(e7) && (e7.childNodes[0].nodeValue = i5);
            }
          };
          if (e5)
            switch (e5.type) {
              case "timeupdate":
              case "seeking":
              case "seeked":
                s4 = this.currentTime, n4 = this.duration, t4 = 0 === s4 || 0 === n4 || Number.isNaN(s4) || Number.isNaN(n4) ? 0 : (s4 / n4 * 100).toFixed(2), "timeupdate" === e5.type && Pe.setRange.call(this, this.elements.inputs.seek, t4);
                break;
              case "playing":
              case "progress":
                i4(this.elements.display.buffer, 100 * this.buffered);
            }
          var s4, n4;
        }, updateRangeFill(e5) {
          const t4 = S.event(e5) ? e5.target : e5;
          if (S.element(t4) && "range" === t4.getAttribute("type")) {
            if (V(t4, this.config.selectors.inputs.seek)) {
              t4.setAttribute("aria-valuenow", this.currentTime);
              const e6 = Pe.formatTime(this.currentTime), i4 = Pe.formatTime(this.duration), s4 = ve.get("seekLabel", this.config);
              t4.setAttribute("aria-valuetext", s4.replace("{currentTime}", e6).replace("{duration}", i4));
            } else if (V(t4, this.config.selectors.inputs.volume)) {
              const e6 = 100 * t4.value;
              t4.setAttribute("aria-valuenow", e6), t4.setAttribute("aria-valuetext", `${e6.toFixed(1)}%`);
            } else
              t4.setAttribute("aria-valuenow", t4.value);
            (M.isWebKit || M.isIPadOS) && t4.style.setProperty("--value", t4.value / t4.max * 100 + "%");
          }
        }, updateSeekTooltip(e5) {
          var t4, i4;
          if (!this.config.tooltips.seek || !S.element(this.elements.inputs.seek) || !S.element(this.elements.display.seekTooltip) || 0 === this.duration)
            return;
          const s4 = this.elements.display.seekTooltip, n4 = `${this.config.classNames.tooltip}--visible`, a3 = (e6) => R(s4, n4, e6);
          if (this.touch)
            return void a3(false);
          let l3 = 0;
          const r3 = this.elements.progress.getBoundingClientRect();
          if (S.event(e5))
            l3 = 100 / r3.width * (e5.pageX - r3.left);
          else {
            if (!F(s4, n4))
              return;
            l3 = parseFloat(s4.style.left, 10);
          }
          l3 < 0 ? l3 = 0 : l3 > 100 && (l3 = 100);
          const o3 = this.duration / 100 * l3;
          s4.innerText = Pe.formatTime(o3);
          const c3 = null === (t4 = this.config.markers) || void 0 === t4 || null === (i4 = t4.points) || void 0 === i4 ? void 0 : i4.find(({ time: e6 }) => e6 === Math.round(o3));
          c3 && s4.insertAdjacentHTML("afterbegin", `${c3.label}<br>`), s4.style.left = `${l3}%`, S.event(e5) && ["mouseenter", "mouseleave"].includes(e5.type) && a3("mouseenter" === e5.type);
        }, timeUpdate(e5) {
          const t4 = !S.element(this.elements.display.duration) && this.config.invertTime;
          Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, t4 ? this.duration - this.currentTime : this.currentTime, t4), e5 && "timeupdate" === e5.type && this.media.seeking || Pe.updateProgress.call(this, e5);
        }, durationUpdate() {
          if (!this.supported.ui || !this.config.invertTime && this.currentTime)
            return;
          if (this.duration >= 2 ** 32)
            return H(this.elements.display.currentTime, true), void H(this.elements.progress, true);
          S.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
          const e5 = S.element(this.elements.display.duration);
          !e5 && this.config.displayDuration && this.paused && Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e5 && Pe.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && Pe.setMarkers.call(this), Pe.updateSeekTooltip.call(this);
        }, toggleMenuButton(e5, t4) {
          H(this.elements.settings.buttons[e5], !t4);
        }, updateSetting(e5, t4, i4) {
          const s4 = this.elements.settings.panels[e5];
          let n4 = null, a3 = t4;
          if ("captions" === e5)
            n4 = this.currentTrack;
          else {
            if (n4 = S.empty(i4) ? this[e5] : i4, S.empty(n4) && (n4 = this.config[e5].default), !S.empty(this.options[e5]) && !this.options[e5].includes(n4))
              return void this.debug.warn(`Unsupported value of '${n4}' for ${e5}`);
            if (!this.config[e5].options.includes(n4))
              return void this.debug.warn(`Disabled value of '${n4}' for ${e5}`);
          }
          if (S.element(a3) || (a3 = s4 && s4.querySelector('[role="menu"]')), !S.element(a3))
            return;
          this.elements.settings.buttons[e5].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = Pe.getLabel.call(this, e5, n4);
          const l3 = a3 && a3.querySelector(`[value="${n4}"]`);
          S.element(l3) && (l3.checked = true);
        }, getLabel(e5, t4) {
          switch (e5) {
            case "speed":
              return 1 === t4 ? ve.get("normal", this.config) : `${t4}&times;`;
            case "quality":
              if (S.number(t4)) {
                const e6 = ve.get(`qualityLabel.${t4}`, this.config);
                return e6.length ? e6 : `${t4}p`;
              }
              return ge(t4);
            case "captions":
              return xe.getLabel.call(this);
            default:
              return null;
          }
        }, setQualityMenu(e5) {
          if (!S.element(this.elements.settings.panels.quality))
            return;
          const t4 = "quality", i4 = this.elements.settings.panels.quality.querySelector('[role="menu"]');
          S.array(e5) && (this.options.quality = se(e5).filter((e6) => this.config.quality.options.includes(e6)));
          const s4 = !S.empty(this.options.quality) && this.options.quality.length > 1;
          if (Pe.toggleMenuButton.call(this, t4, s4), j(i4), Pe.checkMenu.call(this), !s4)
            return;
          const n4 = (e6) => {
            const t5 = ve.get(`qualityBadge.${e6}`, this.config);
            return t5.length ? Pe.createBadge.call(this, t5) : null;
          };
          this.options.quality.sort((e6, t5) => {
            const i5 = this.config.quality.options;
            return i5.indexOf(e6) > i5.indexOf(t5) ? 1 : -1;
          }).forEach((e6) => {
            Pe.createMenuItem.call(this, { value: e6, list: i4, type: t4, title: Pe.getLabel.call(this, "quality", e6), badge: n4(e6) });
          }), Pe.updateSetting.call(this, t4, i4);
        }, setCaptionsMenu() {
          if (!S.element(this.elements.settings.panels.captions))
            return;
          const e5 = "captions", t4 = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i4 = xe.getTracks.call(this), s4 = Boolean(i4.length);
          if (Pe.toggleMenuButton.call(this, e5, s4), j(t4), Pe.checkMenu.call(this), !s4)
            return;
          const n4 = i4.map((e6, i5) => ({ value: i5, checked: this.captions.toggled && this.currentTrack === i5, title: xe.getLabel.call(this, e6), badge: e6.language && Pe.createBadge.call(this, e6.language.toUpperCase()), list: t4, type: "language" }));
          n4.unshift({ value: -1, checked: !this.captions.toggled, title: ve.get("disabled", this.config), list: t4, type: "language" }), n4.forEach(Pe.createMenuItem.bind(this)), Pe.updateSetting.call(this, e5, t4);
        }, setSpeedMenu() {
          if (!S.element(this.elements.settings.panels.speed))
            return;
          const e5 = "speed", t4 = this.elements.settings.panels.speed.querySelector('[role="menu"]');
          this.options.speed = this.options.speed.filter((e6) => e6 >= this.minimumSpeed && e6 <= this.maximumSpeed);
          const i4 = !S.empty(this.options.speed) && this.options.speed.length > 1;
          Pe.toggleMenuButton.call(this, e5, i4), j(t4), Pe.checkMenu.call(this), i4 && (this.options.speed.forEach((i5) => {
            Pe.createMenuItem.call(this, { value: i5, list: t4, type: e5, title: Pe.getLabel.call(this, "speed", i5) });
          }), Pe.updateSetting.call(this, e5, t4));
        }, checkMenu() {
          const { buttons: e5 } = this.elements.settings, t4 = !S.empty(e5) && Object.values(e5).some((e6) => !e6.hidden);
          H(this.elements.settings.menu, !t4);
        }, focusFirstMenuItem(e5, t4 = false) {
          if (this.elements.settings.popup.hidden)
            return;
          let i4 = e5;
          S.element(i4) || (i4 = Object.values(this.elements.settings.panels).find((e6) => !e6.hidden));
          const s4 = i4.querySelector('[role^="menuitem"]');
          W.call(this, s4, t4);
        }, toggleMenu(e5) {
          const { popup: t4 } = this.elements.settings, i4 = this.elements.buttons.settings;
          if (!S.element(t4) || !S.element(i4))
            return;
          const { hidden: s4 } = t4;
          let n4 = s4;
          if (S.boolean(e5))
            n4 = e5;
          else if (S.keyboardEvent(e5) && "Escape" === e5.key)
            n4 = false;
          else if (S.event(e5)) {
            const s5 = S.function(e5.composedPath) ? e5.composedPath()[0] : e5.target, a3 = t4.contains(s5);
            if (a3 || !a3 && e5.target !== i4 && n4)
              return;
          }
          i4.setAttribute("aria-expanded", n4), H(t4, !n4), R(this.elements.container, this.config.classNames.menu.open, n4), n4 && S.keyboardEvent(e5) ? Pe.focusFirstMenuItem.call(this, null, true) : n4 || s4 || W.call(this, i4, S.keyboardEvent(e5));
        }, getMenuSize(e5) {
          const t4 = e5.cloneNode(true);
          t4.style.position = "absolute", t4.style.opacity = 0, t4.removeAttribute("hidden"), e5.parentNode.appendChild(t4);
          const i4 = t4.scrollWidth, s4 = t4.scrollHeight;
          return O(t4), { width: i4, height: s4 };
        }, showMenuPanel(e5 = "", t4 = false) {
          const i4 = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e5}`);
          if (!S.element(i4))
            return;
          const s4 = i4.parentNode, n4 = Array.from(s4.children).find((e6) => !e6.hidden);
          if (K.transitions && !K.reducedMotion) {
            s4.style.width = `${n4.scrollWidth}px`, s4.style.height = `${n4.scrollHeight}px`;
            const e6 = Pe.getMenuSize.call(this, i4), t5 = (e7) => {
              e7.target === s4 && ["width", "height"].includes(e7.propertyName) && (s4.style.width = "", s4.style.height = "", J.call(this, s4, E, t5));
            };
            X.call(this, s4, E, t5), s4.style.width = `${e6.width}px`, s4.style.height = `${e6.height}px`;
          }
          H(n4, true), H(i4, false), Pe.focusFirstMenuItem.call(this, i4, t4);
        }, setDownloadUrl() {
          const e5 = this.elements.buttons.download;
          S.element(e5) && e5.setAttribute("href", this.download);
        }, create(e5) {
          const { bindMenuItemShortcuts: t4, createButton: i4, createProgress: s4, createRange: n4, createTime: a3, setQualityMenu: l3, setSpeedMenu: r3, showMenuPanel: o3 } = Pe;
          this.elements.controls = null, S.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i4.call(this, "play-large"));
          const c3 = $2("div", D(this.config.selectors.controls.wrapper));
          this.elements.controls = c3;
          const u2 = { class: "plyr__controls__item" };
          return se(S.array(this.config.controls) ? this.config.controls : []).forEach((l4) => {
            if ("restart" === l4 && c3.appendChild(i4.call(this, "restart", u2)), "rewind" === l4 && c3.appendChild(i4.call(this, "rewind", u2)), "play" === l4 && c3.appendChild(i4.call(this, "play", u2)), "fast-forward" === l4 && c3.appendChild(i4.call(this, "fast-forward", u2)), "progress" === l4) {
              const t5 = $2("div", { class: `${u2.class} plyr__progress__container` }), i5 = $2("div", D(this.config.selectors.progress));
              if (i5.appendChild(n4.call(this, "seek", { id: `plyr-seek-${e5.id}` })), i5.appendChild(s4.call(this, "buffer")), this.config.tooltips.seek) {
                const e6 = $2("span", { class: this.config.classNames.tooltip }, "00:00");
                i5.appendChild(e6), this.elements.display.seekTooltip = e6;
              }
              this.elements.progress = i5, t5.appendChild(this.elements.progress), c3.appendChild(t5);
            }
            if ("current-time" === l4 && c3.appendChild(a3.call(this, "currentTime", u2)), "duration" === l4 && c3.appendChild(a3.call(this, "duration", u2)), "mute" === l4 || "volume" === l4) {
              let { volume: t5 } = this.elements;
              if (S.element(t5) && c3.contains(t5) || (t5 = $2("div", x({}, u2, { class: `${u2.class} plyr__volume`.trim() })), this.elements.volume = t5, c3.appendChild(t5)), "mute" === l4 && t5.appendChild(i4.call(this, "mute")), "volume" === l4 && !M.isIos && !M.isIPadOS) {
                const i5 = { max: 1, step: 0.05, value: this.config.volume };
                t5.appendChild(n4.call(this, "volume", x(i5, { id: `plyr-volume-${e5.id}` })));
              }
            }
            if ("captions" === l4 && c3.appendChild(i4.call(this, "captions", u2)), "settings" === l4 && !S.empty(this.config.settings)) {
              const s5 = $2("div", x({}, u2, { class: `${u2.class} plyr__menu`.trim(), hidden: "" }));
              s5.appendChild(i4.call(this, "settings", { "aria-haspopup": true, "aria-controls": `plyr-settings-${e5.id}`, "aria-expanded": false }));
              const n5 = $2("div", { class: "plyr__menu__container", id: `plyr-settings-${e5.id}`, hidden: "" }), a4 = $2("div"), l5 = $2("div", { id: `plyr-settings-${e5.id}-home` }), r4 = $2("div", { role: "menu" });
              l5.appendChild(r4), a4.appendChild(l5), this.elements.settings.panels.home = l5, this.config.settings.forEach((i5) => {
                const s6 = $2("button", x(D(this.config.selectors.buttons.settings), { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`, role: "menuitem", "aria-haspopup": true, hidden: "" }));
                t4.call(this, s6, i5), X.call(this, s6, "click", () => {
                  o3.call(this, i5, false);
                });
                const n6 = $2("span", null, ve.get(i5, this.config)), l6 = $2("span", { class: this.config.classNames.menu.value });
                l6.innerHTML = e5[i5], n6.appendChild(l6), s6.appendChild(n6), r4.appendChild(s6);
                const c4 = $2("div", { id: `plyr-settings-${e5.id}-${i5}`, hidden: "" }), u3 = $2("button", { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--back` });
                u3.appendChild($2("span", { "aria-hidden": true }, ve.get(i5, this.config))), u3.appendChild($2("span", { class: this.config.classNames.hidden }, ve.get("menuBack", this.config))), X.call(this, c4, "keydown", (e6) => {
                  "ArrowLeft" === e6.key && (e6.preventDefault(), e6.stopPropagation(), o3.call(this, "home", true));
                }, false), X.call(this, u3, "click", () => {
                  o3.call(this, "home", false);
                }), c4.appendChild(u3), c4.appendChild($2("div", { role: "menu" })), a4.appendChild(c4), this.elements.settings.buttons[i5] = s6, this.elements.settings.panels[i5] = c4;
              }), n5.appendChild(a4), s5.appendChild(n5), c3.appendChild(s5), this.elements.settings.popup = n5, this.elements.settings.menu = s5;
            }
            if ("pip" === l4 && K.pip && c3.appendChild(i4.call(this, "pip", u2)), "airplay" === l4 && K.airplay && c3.appendChild(i4.call(this, "airplay", u2)), "download" === l4) {
              const e6 = x({}, u2, { element: "a", href: this.download, target: "_blank" });
              this.isHTML5 && (e6.download = "");
              const { download: t5 } = this.config.urls;
              !S.url(t5) && this.isEmbed && x(e6, { icon: `logo-${this.provider}`, label: this.provider }), c3.appendChild(i4.call(this, "download", e6));
            }
            "fullscreen" === l4 && c3.appendChild(i4.call(this, "fullscreen", u2));
          }), this.isHTML5 && l3.call(this, de.getQualityOptions.call(this)), r3.call(this), c3;
        }, inject() {
          if (this.config.loadSprite) {
            const e6 = Pe.getIconUrl.call(this);
            e6.cors && ke(e6.url, "sprite-plyr");
          }
          this.id = Math.floor(1e4 * Math.random());
          let e5 = null;
          this.elements.controls = null;
          const t4 = { id: this.id, seektime: this.config.seekTime, title: this.config.title };
          let i4 = true;
          S.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, t4)), this.config.controls || (this.config.controls = []), S.element(this.config.controls) || S.string(this.config.controls) ? e5 = this.config.controls : (e5 = Pe.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: xe.getLabel.call(this) }), i4 = false);
          let s4;
          i4 && S.string(this.config.controls) && (e5 = ((e6) => {
            let i5 = e6;
            return Object.entries(t4).forEach(([e7, t5]) => {
              i5 = pe(i5, `{${e7}}`, t5);
            }), i5;
          })(e5)), S.string(this.config.selectors.controls.container) && (s4 = document.querySelector(this.config.selectors.controls.container)), S.element(s4) || (s4 = this.elements.container);
          if (s4[S.element(e5) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e5), S.element(this.elements.controls) || Pe.findElements.call(this), !S.empty(this.elements.buttons)) {
            const e6 = (e7) => {
              const t5 = this.config.classNames.controlPressed;
              e7.setAttribute("aria-pressed", "false"), Object.defineProperty(e7, "pressed", { configurable: true, enumerable: true, get: () => F(e7, t5), set(i5 = false) {
                R(e7, t5, i5), e7.setAttribute("aria-pressed", i5 ? "true" : "false");
              } });
            };
            Object.values(this.elements.buttons).filter(Boolean).forEach((t5) => {
              S.array(t5) || S.nodeList(t5) ? Array.from(t5).filter(Boolean).forEach(e6) : e6(t5);
            });
          }
          if (M.isEdge && P(s4), this.config.tooltips.controls) {
            const { classNames: e6, selectors: t5 } = this.config, i5 = `${t5.controls.wrapper} ${t5.labels} .${e6.hidden}`, s5 = U.call(this, i5);
            Array.from(s5).forEach((e7) => {
              R(e7, this.config.classNames.hidden, false), R(e7, this.config.classNames.tooltip, true);
            });
          }
        }, setMediaMetadata() {
          try {
            "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({ title: this.config.mediaMetadata.title, artist: this.config.mediaMetadata.artist, album: this.config.mediaMetadata.album, artwork: this.config.mediaMetadata.artwork }));
          } catch (e5) {
          }
        }, setMarkers() {
          var e5, t4;
          if (!this.duration || this.elements.markers)
            return;
          const i4 = null === (e5 = this.config.markers) || void 0 === e5 || null === (t4 = e5.points) || void 0 === t4 ? void 0 : t4.filter(({ time: e6 }) => e6 > 0 && e6 < this.duration);
          if (null == i4 || !i4.length)
            return;
          const s4 = document.createDocumentFragment(), n4 = document.createDocumentFragment();
          let a3 = null;
          const l3 = `${this.config.classNames.tooltip}--visible`, r3 = (e6) => R(a3, l3, e6);
          i4.forEach((e6) => {
            const t5 = $2("span", { class: this.config.classNames.marker }, ""), i5 = e6.time / this.duration * 100 + "%";
            a3 && (t5.addEventListener("mouseenter", () => {
              e6.label || (a3.style.left = i5, a3.innerHTML = e6.label, r3(true));
            }), t5.addEventListener("mouseleave", () => {
              r3(false);
            })), t5.addEventListener("click", () => {
              this.currentTime = e6.time;
            }), t5.style.left = i5, n4.appendChild(t5);
          }), s4.appendChild(n4), this.config.tooltips.seek || (a3 = $2("span", { class: this.config.classNames.tooltip }, ""), s4.appendChild(a3)), this.elements.markers = { points: n4, tip: a3 }, this.elements.progress.appendChild(s4);
        } };
        function Me(e5, t4 = true) {
          let i4 = e5;
          if (t4) {
            const e6 = document.createElement("a");
            e6.href = i4, i4 = e6.href;
          }
          try {
            return new URL(i4);
          } catch (e6) {
            return null;
          }
        }
        function Ne(e5) {
          const t4 = new URLSearchParams();
          return S.object(e5) && Object.entries(e5).forEach(([e6, i4]) => {
            t4.set(e6, i4);
          }), t4;
        }
        const xe = { setup() {
          if (!this.supported.ui)
            return;
          if (!this.isVideo || this.isYouTube || this.isHTML5 && !K.textTracks)
            return void (S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this));
          var e5, t4;
          if (S.element(this.elements.captions) || (this.elements.captions = $2("div", D(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), e5 = this.elements.captions, t4 = this.elements.wrapper, S.element(e5) && S.element(t4) && t4.parentNode.insertBefore(e5, t4.nextSibling)), M.isIE && window.URL) {
            const e6 = this.media.querySelectorAll("track");
            Array.from(e6).forEach((e7) => {
              const t5 = e7.getAttribute("src"), i5 = Me(t5);
              null !== i5 && i5.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i5.protocol) && Te(t5, "blob").then((t6) => {
                e7.setAttribute("src", window.URL.createObjectURL(t6));
              }).catch(() => {
                O(e7);
              });
            });
          }
          const i4 = se((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((e6) => e6.split("-")[0]));
          let s4 = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
          "auto" === s4 && ([s4] = i4);
          let n4 = this.storage.get("captions");
          if (S.boolean(n4) || ({ active: n4 } = this.config.captions), Object.assign(this.captions, { toggled: false, active: n4, language: s4, languages: i4 }), this.isHTML5) {
            const e6 = this.config.captions.update ? "addtrack removetrack" : "removetrack";
            X.call(this, this.media.textTracks, e6, xe.update.bind(this));
          }
          setTimeout(xe.update.bind(this), 0);
        }, update() {
          const e5 = xe.getTracks.call(this, true), { active: t4, language: i4, meta: s4, currentTrackNode: n4 } = this.captions, a3 = Boolean(e5.find((e6) => e6.language === i4));
          this.isHTML5 && this.isVideo && e5.filter((e6) => !s4.get(e6)).forEach((e6) => {
            this.debug.log("Track added", e6), s4.set(e6, { default: "showing" === e6.mode }), "showing" === e6.mode && (e6.mode = "hidden"), X.call(this, e6, "cuechange", () => xe.updateCues.call(this));
          }), (a3 && this.language !== i4 || !e5.includes(n4)) && (xe.setLanguage.call(this, i4), xe.toggle.call(this, t4 && a3)), this.elements && R(this.elements.container, this.config.classNames.captions.enabled, !S.empty(e5)), S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this);
        }, toggle(e5, t4 = true) {
          if (!this.supported.ui)
            return;
          const { toggled: i4 } = this.captions, s4 = this.config.classNames.captions.active, n4 = S.nullOrUndefined(e5) ? !i4 : e5;
          if (n4 !== i4) {
            if (t4 || (this.captions.active = n4, this.storage.set({ captions: n4 })), !this.language && n4 && !t4) {
              const e6 = xe.getTracks.call(this), t5 = xe.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
              return this.captions.language = t5.language, void xe.set.call(this, e6.indexOf(t5));
            }
            this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n4), R(this.elements.container, s4, n4), this.captions.toggled = n4, Pe.updateSetting.call(this, "captions"), Z.call(this, this.media, n4 ? "captionsenabled" : "captionsdisabled");
          }
          setTimeout(() => {
            n4 && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
          });
        }, set(e5, t4 = true) {
          const i4 = xe.getTracks.call(this);
          if (-1 !== e5)
            if (S.number(e5))
              if (e5 in i4) {
                if (this.captions.currentTrack !== e5) {
                  this.captions.currentTrack = e5;
                  const s4 = i4[e5], { language: n4 } = s4 || {};
                  this.captions.currentTrackNode = s4, Pe.updateSetting.call(this, "captions"), t4 || (this.captions.language = n4, this.storage.set({ language: n4 })), this.isVimeo && this.embed.enableTextTrack(n4), Z.call(this, this.media, "languagechange");
                }
                xe.toggle.call(this, true, t4), this.isHTML5 && this.isVideo && xe.updateCues.call(this);
              } else
                this.debug.warn("Track not found", e5);
            else
              this.debug.warn("Invalid caption argument", e5);
          else
            xe.toggle.call(this, false, t4);
        }, setLanguage(e5, t4 = true) {
          if (!S.string(e5))
            return void this.debug.warn("Invalid language argument", e5);
          const i4 = e5.toLowerCase();
          this.captions.language = i4;
          const s4 = xe.getTracks.call(this), n4 = xe.findTrack.call(this, [i4]);
          xe.set.call(this, s4.indexOf(n4), t4);
        }, getTracks(e5 = false) {
          return Array.from((this.media || {}).textTracks || []).filter((t4) => !this.isHTML5 || e5 || this.captions.meta.has(t4)).filter((e6) => ["captions", "subtitles"].includes(e6.kind));
        }, findTrack(e5, t4 = false) {
          const i4 = xe.getTracks.call(this), s4 = (e6) => Number((this.captions.meta.get(e6) || {}).default), n4 = Array.from(i4).sort((e6, t5) => s4(t5) - s4(e6));
          let a3;
          return e5.every((e6) => (a3 = n4.find((t5) => t5.language === e6), !a3)), a3 || (t4 ? n4[0] : void 0);
        }, getCurrentTrack() {
          return xe.getTracks.call(this)[this.currentTrack];
        }, getLabel(e5) {
          let t4 = e5;
          return !S.track(t4) && K.textTracks && this.captions.toggled && (t4 = xe.getCurrentTrack.call(this)), S.track(t4) ? S.empty(t4.label) ? S.empty(t4.language) ? ve.get("enabled", this.config) : e5.language.toUpperCase() : t4.label : ve.get("disabled", this.config);
        }, updateCues(e5) {
          if (!this.supported.ui)
            return;
          if (!S.element(this.elements.captions))
            return void this.debug.warn("No captions element to render to");
          if (!S.nullOrUndefined(e5) && !Array.isArray(e5))
            return void this.debug.warn("updateCues: Invalid input", e5);
          let t4 = e5;
          if (!t4) {
            const e6 = xe.getCurrentTrack.call(this);
            t4 = Array.from((e6 || {}).activeCues || []).map((e7) => e7.getCueAsHTML()).map(ye);
          }
          const i4 = t4.map((e6) => e6.trim()).join("\n");
          if (i4 !== this.elements.captions.innerHTML) {
            j(this.elements.captions);
            const e6 = $2("span", D(this.config.selectors.caption));
            e6.innerHTML = i4, this.elements.captions.appendChild(e6), Z.call(this, this.media, "cuechange");
          }
        } }, Le = { enabled: true, title: "", debug: false, autoplay: false, autopause: true, playsinline: true, seekTime: 10, volume: 1, muted: false, duration: null, displayDuration: true, invertTime: true, toggleInvert: true, ratio: null, clickToPlay: true, hideControls: true, resetOnEnd: false, disableContextMenu: true, loadSprite: true, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240], forced: false, onChange: null }, loop: { active: false }, speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] }, keyboard: { focused: true, global: false }, tooltips: { controls: false, seek: true }, captions: { active: false, language: "auto", update: false }, fullscreen: { enabled: true, fallback: true, iosNative: false }, storage: { enabled: true, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", download: "Download", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", pip: "PIP", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { download: null, vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/oembed.json?url={0}" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, download: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', download: '[data-plyr="download"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption" }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", videoFixedRatio: "plyr__video-wrapper--fixed-ratio", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", marker: "plyr__progress__marker", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, previewThumbnails: { thumbContainer: "plyr__preview-thumb", thumbContainerShown: "plyr__preview-thumb--is-shown", imageContainer: "plyr__preview-thumb__image-container", timeContainer: "plyr__preview-thumb__time-container", scrubbingContainer: "plyr__preview-scrubbing", scrubbingContainerShown: "plyr__preview-scrubbing--is-shown" } }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id", hash: "data-plyr-embed-hash" } }, ads: { enabled: false, publisherId: "", tagUrl: "" }, previewThumbnails: { enabled: false, src: "" }, vimeo: { byline: false, portrait: false, title: false, speed: true, transparent: false, customControls: true, referrerPolicy: null, premium: false }, youtube: { rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, customControls: true, noCookie: false }, mediaMetadata: { title: "", artist: "", album: "", artwork: [] }, markers: { enabled: false, points: [] } }, Ie = "picture-in-picture", $e = "inline", _e = { html5: "html5", youtube: "youtube", vimeo: "vimeo" }, Oe = "audio", je = "video";
        const qe = () => {
        };
        class De {
          constructor(e5 = false) {
            this.enabled = window.console && e5, this.enabled && this.log("Debugging enabled");
          }
          get log() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : qe;
          }
          get warn() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : qe;
          }
          get error() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : qe;
          }
        }
        class He {
          constructor(t4) {
            e4(this, "onChange", () => {
              if (!this.supported)
                return;
              const e5 = this.player.elements.buttons.fullscreen;
              S.element(e5) && (e5.pressed = this.active);
              const t5 = this.target === this.player.media ? this.target : this.player.elements.container;
              Z.call(this.player, t5, this.active ? "enterfullscreen" : "exitfullscreen", true);
            }), e4(this, "toggleFallback", (e5 = false) => {
              if (e5 ? this.scrollPosition = { x: window.scrollX ?? 0, y: window.scrollY ?? 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e5 ? "hidden" : "", R(this.target, this.player.config.classNames.fullscreen.fallback, e5), M.isIos) {
                let t5 = document.head.querySelector('meta[name="viewport"]');
                const i4 = "viewport-fit=cover";
                t5 || (t5 = document.createElement("meta"), t5.setAttribute("name", "viewport"));
                const s4 = S.string(t5.content) && t5.content.includes(i4);
                e5 ? (this.cleanupViewport = !s4, s4 || (t5.content += `,${i4}`)) : this.cleanupViewport && (t5.content = t5.content.split(",").filter((e6) => e6.trim() !== i4).join(","));
              }
              this.onChange();
            }), e4(this, "trapFocus", (e5) => {
              if (M.isIos || M.isIPadOS || !this.active || "Tab" !== e5.key)
                return;
              const t5 = document.activeElement, i4 = U.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s4] = i4, n4 = i4[i4.length - 1];
              t5 !== n4 || e5.shiftKey ? t5 === s4 && e5.shiftKey && (n4.focus(), e5.preventDefault()) : (s4.focus(), e5.preventDefault());
            }), e4(this, "update", () => {
              if (this.supported) {
                let e5;
                e5 = this.forceFallback ? "Fallback (forced)" : He.nativeSupported ? "Native" : "Fallback", this.player.debug.log(`${e5} fullscreen enabled`);
              } else
                this.player.debug.log("Fullscreen not supported and fallback disabled");
              R(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
            }), e4(this, "enter", () => {
              this.supported && (M.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !He.nativeSupported || this.forceFallback ? this.toggleFallback(true) : this.prefix ? S.empty(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({ navigationUI: "hide" }));
            }), e4(this, "exit", () => {
              if (this.supported)
                if (M.isIos && this.player.config.fullscreen.iosNative)
                  this.player.isVimeo ? this.player.embed.exitFullscreen() : this.target.webkitEnterFullscreen(), ie(this.player.play());
                else if (!He.nativeSupported || this.forceFallback)
                  this.toggleFallback(false);
                else if (this.prefix) {
                  if (!S.empty(this.prefix)) {
                    const e5 = "moz" === this.prefix ? "Cancel" : "Exit";
                    document[`${this.prefix}${e5}${this.property}`]();
                  }
                } else
                  (document.cancelFullScreen || document.exitFullscreen).call(document);
            }), e4(this, "toggle", () => {
              this.active ? this.exit() : this.enter();
            }), this.player = t4, this.prefix = He.prefix, this.property = He.property, this.scrollPosition = { x: 0, y: 0 }, this.forceFallback = "force" === t4.config.fullscreen.fallback, this.player.elements.fullscreen = t4.config.fullscreen.container && function(e5, t5) {
              const { prototype: i4 } = Element;
              return (i4.closest || function() {
                let e6 = this;
                do {
                  if (V.matches(e6, t5))
                    return e6;
                  e6 = e6.parentElement || e6.parentNode;
                } while (null !== e6 && 1 === e6.nodeType);
                return null;
              }).call(e5, t5);
            }(this.player.elements.container, t4.config.fullscreen.container), X.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
              this.onChange();
            }), X.call(this.player, this.player.elements.container, "dblclick", (e5) => {
              S.element(this.player.elements.controls) && this.player.elements.controls.contains(e5.target) || this.player.listeners.proxy(e5, this.toggle, "fullscreen");
            }), X.call(this, this.player.elements.container, "keydown", (e5) => this.trapFocus(e5)), this.update();
          }
          static get nativeSupported() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
          }
          get useNative() {
            return He.nativeSupported && !this.forceFallback;
          }
          static get prefix() {
            if (S.function(document.exitFullscreen))
              return "";
            let e5 = "";
            return ["webkit", "moz", "ms"].some((t4) => !(!S.function(document[`${t4}ExitFullscreen`]) && !S.function(document[`${t4}CancelFullScreen`])) && (e5 = t4, true)), e5;
          }
          static get property() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
          }
          get supported() {
            return [this.player.config.fullscreen.enabled, this.player.isVideo, He.nativeSupported || this.player.config.fullscreen.fallback, !this.player.isYouTube || He.nativeSupported || !M.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative].every(Boolean);
          }
          get active() {
            if (!this.supported)
              return false;
            if (!He.nativeSupported || this.forceFallback)
              return F(this.target, this.player.config.classNames.fullscreen.fallback);
            const e5 = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
            return e5 && e5.shadowRoot ? e5 === this.target.getRootNode().host : e5 === this.target;
          }
          get target() {
            return M.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen ?? this.player.elements.container;
          }
        }
        function Re(e5, t4 = 1) {
          return new Promise((i4, s4) => {
            const n4 = new Image(), a3 = () => {
              delete n4.onload, delete n4.onerror, (n4.naturalWidth >= t4 ? i4 : s4)(n4);
            };
            Object.assign(n4, { onload: a3, onerror: a3, src: e5 });
          });
        }
        const Fe = { addStyleHook() {
          R(this.elements.container, this.config.selectors.container.replace(".", ""), true), R(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
        }, toggleNativeControls(e5 = false) {
          e5 && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
        }, build() {
          if (this.listeners.media(), !this.supported.ui)
            return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void Fe.toggleNativeControls.call(this, true);
          S.element(this.elements.controls) || (Pe.inject.call(this), this.listeners.controls()), Fe.toggleNativeControls.call(this), this.isHTML5 && xe.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Pe.updateVolume.call(this), Pe.timeUpdate.call(this), Pe.durationUpdate.call(this), Fe.checkPlaying.call(this), R(this.elements.container, this.config.classNames.pip.supported, K.pip && this.isHTML5 && this.isVideo), R(this.elements.container, this.config.classNames.airplay.supported, K.airplay && this.isHTML5), R(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = true, setTimeout(() => {
            Z.call(this, this.media, "ready");
          }, 0), Fe.setTitle.call(this), this.poster && Fe.setPoster.call(this, this.poster, false).catch(() => {
          }), this.config.duration && Pe.durationUpdate.call(this), this.config.mediaMetadata && Pe.setMediaMetadata.call(this);
        }, setTitle() {
          let e5 = ve.get("play", this.config);
          if (S.string(this.config.title) && !S.empty(this.config.title) && (e5 += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach((t4) => {
            t4.setAttribute("aria-label", e5);
          }), this.isEmbed) {
            const e6 = B.call(this, "iframe");
            if (!S.element(e6))
              return;
            const t4 = S.empty(this.config.title) ? "video" : this.config.title, i4 = ve.get("frameTitle", this.config);
            e6.setAttribute("title", i4.replace("{title}", t4));
          }
        }, togglePoster(e5) {
          R(this.elements.container, this.config.classNames.posterEnabled, e5);
        }, setPoster(e5, t4 = true) {
          return t4 && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e5), this.elements.poster.removeAttribute("hidden"), te.call(this).then(() => Re(e5)).catch((t5) => {
            throw e5 === this.poster && Fe.togglePoster.call(this, false), t5;
          }).then(() => {
            if (e5 !== this.poster)
              throw new Error("setPoster cancelled by later call to setPoster");
          }).then(() => (Object.assign(this.elements.poster.style, { backgroundImage: `url('${e5}')`, backgroundSize: "" }), Fe.togglePoster.call(this, true), e5)));
        }, checkPlaying(e5) {
          R(this.elements.container, this.config.classNames.playing, this.playing), R(this.elements.container, this.config.classNames.paused, this.paused), R(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e6) => {
            Object.assign(e6, { pressed: this.playing }), e6.setAttribute("aria-label", ve.get(this.playing ? "pause" : "play", this.config));
          }), S.event(e5) && "timeupdate" === e5.type || Fe.toggleControls.call(this);
        }, checkLoading(e5) {
          this.loading = ["stalled", "waiting"].includes(e5.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
            R(this.elements.container, this.config.classNames.loading, this.loading), Fe.toggleControls.call(this);
          }, this.loading ? 250 : 0);
        }, toggleControls(e5) {
          const { controls: t4 } = this.elements;
          if (t4 && this.config.hideControls) {
            const i4 = this.touch && this.lastSeekTime + 2e3 > Date.now();
            this.toggleControls(Boolean(e5 || this.loading || this.paused || t4.pressed || t4.hover || i4));
          }
        }, migrateStyles() {
          Object.values({ ...this.media.style }).filter((e5) => !S.empty(e5) && S.string(e5) && e5.startsWith("--plyr")).forEach((e5) => {
            this.elements.container.style.setProperty(e5, this.media.style.getPropertyValue(e5)), this.media.style.removeProperty(e5);
          }), S.empty(this.media.style) && this.media.removeAttribute("style");
        } };
        class Ve {
          constructor(t4) {
            e4(this, "firstTouch", () => {
              const { player: e5 } = this, { elements: t5 } = e5;
              e5.touch = true, R(t5.container, e5.config.classNames.isTouch, true);
            }), e4(this, "global", (e5 = true) => {
              const { player: t5 } = this;
              t5.config.keyboard.global && Q.call(t5, window, "keydown keyup", this.handleKey, e5, false), Q.call(t5, document.body, "click", this.toggleMenu, e5), G.call(t5, document.body, "touchstart", this.firstTouch);
            }), e4(this, "container", () => {
              const { player: e5 } = this, { config: t5, elements: i4, timers: s4 } = e5;
              !t5.keyboard.global && t5.keyboard.focused && X.call(e5, i4.container, "keydown keyup", this.handleKey, false), X.call(e5, i4.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t6) => {
                const { controls: n5 } = i4;
                n5 && "enterfullscreen" === t6.type && (n5.pressed = false, n5.hover = false);
                let a4 = 0;
                ["touchstart", "touchmove", "mousemove"].includes(t6.type) && (Fe.toggleControls.call(e5, true), a4 = e5.touch ? 3e3 : 2e3), clearTimeout(s4.controls), s4.controls = setTimeout(() => Fe.toggleControls.call(e5, false), a4);
              });
              const n4 = () => {
                if (!e5.isVimeo || e5.config.vimeo.premium)
                  return;
                const t6 = i4.wrapper, { active: s5 } = e5.fullscreen, [n5, a4] = ce.call(e5), l3 = ae(`aspect-ratio: ${n5} / ${a4}`);
                if (!s5)
                  return void (l3 ? (t6.style.width = null, t6.style.height = null) : (t6.style.maxWidth = null, t6.style.margin = null));
                const [r3, o3] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)], c3 = r3 / o3 > n5 / a4;
                l3 ? (t6.style.width = c3 ? "auto" : "100%", t6.style.height = c3 ? "100%" : "auto") : (t6.style.maxWidth = c3 ? o3 / a4 * n5 + "px" : null, t6.style.margin = c3 ? "0 auto" : null);
              }, a3 = () => {
                clearTimeout(s4.resized), s4.resized = setTimeout(n4, 50);
              };
              X.call(e5, i4.container, "enterfullscreen exitfullscreen", (t6) => {
                const { target: s5 } = e5.fullscreen;
                if (s5 !== i4.container)
                  return;
                if (!e5.isEmbed && S.empty(e5.config.ratio))
                  return;
                n4();
                ("enterfullscreen" === t6.type ? X : J).call(e5, window, "resize", a3);
              });
            }), e4(this, "media", () => {
              const { player: e5 } = this, { elements: t5 } = e5;
              if (X.call(e5, e5.media, "timeupdate seeking seeked", (t6) => Pe.timeUpdate.call(e5, t6)), X.call(e5, e5.media, "durationchange loadeddata loadedmetadata", (t6) => Pe.durationUpdate.call(e5, t6)), X.call(e5, e5.media, "ended", () => {
                e5.isHTML5 && e5.isVideo && e5.config.resetOnEnd && (e5.restart(), e5.pause());
              }), X.call(e5, e5.media, "progress playing seeking seeked", (t6) => Pe.updateProgress.call(e5, t6)), X.call(e5, e5.media, "volumechange", (t6) => Pe.updateVolume.call(e5, t6)), X.call(e5, e5.media, "playing play pause ended emptied timeupdate", (t6) => Fe.checkPlaying.call(e5, t6)), X.call(e5, e5.media, "waiting canplay seeked playing", (t6) => Fe.checkLoading.call(e5, t6)), e5.supported.ui && e5.config.clickToPlay && !e5.isAudio) {
                const i5 = B.call(e5, `.${e5.config.classNames.video}`);
                if (!S.element(i5))
                  return;
                X.call(e5, t5.container, "click", (s4) => {
                  ([t5.container, i5].includes(s4.target) || i5.contains(s4.target)) && (e5.touch && e5.config.hideControls || (e5.ended ? (this.proxy(s4, e5.restart, "restart"), this.proxy(s4, () => {
                    ie(e5.play());
                  }, "play")) : this.proxy(s4, () => {
                    ie(e5.togglePlay());
                  }, "play")));
                });
              }
              e5.supported.ui && e5.config.disableContextMenu && X.call(e5, t5.wrapper, "contextmenu", (e6) => {
                e6.preventDefault();
              }, false), X.call(e5, e5.media, "volumechange", () => {
                e5.storage.set({ volume: e5.volume, muted: e5.muted });
              }), X.call(e5, e5.media, "ratechange", () => {
                Pe.updateSetting.call(e5, "speed"), e5.storage.set({ speed: e5.speed });
              }), X.call(e5, e5.media, "qualitychange", (t6) => {
                Pe.updateSetting.call(e5, "quality", null, t6.detail.quality);
              }), X.call(e5, e5.media, "ready qualitychange", () => {
                Pe.setDownloadUrl.call(e5);
              });
              const i4 = e5.config.events.concat(["keyup", "keydown"]).join(" ");
              X.call(e5, e5.media, i4, (i5) => {
                let { detail: s4 = {} } = i5;
                "error" === i5.type && (s4 = e5.media.error), Z.call(e5, t5.container, i5.type, true, s4);
              });
            }), e4(this, "proxy", (e5, t5, i4) => {
              const { player: s4 } = this, n4 = s4.config.listeners[i4];
              let a3 = true;
              S.function(n4) && (a3 = n4.call(s4, e5)), false !== a3 && S.function(t5) && t5.call(s4, e5);
            }), e4(this, "bind", (e5, t5, i4, s4, n4 = true) => {
              const { player: a3 } = this, l3 = a3.config.listeners[s4], r3 = S.function(l3);
              X.call(a3, e5, t5, (e6) => this.proxy(e6, i4, s4), n4 && !r3);
            }), e4(this, "controls", () => {
              const { player: e5 } = this, { elements: t5 } = e5, i4 = M.isIE ? "change" : "input";
              if (t5.buttons.play && Array.from(t5.buttons.play).forEach((t6) => {
                this.bind(t6, "click", () => {
                  ie(e5.togglePlay());
                }, "play");
              }), this.bind(t5.buttons.restart, "click", e5.restart, "restart"), this.bind(t5.buttons.rewind, "click", () => {
                e5.lastSeekTime = Date.now(), e5.rewind();
              }, "rewind"), this.bind(t5.buttons.fastForward, "click", () => {
                e5.lastSeekTime = Date.now(), e5.forward();
              }, "fastForward"), this.bind(t5.buttons.mute, "click", () => {
                e5.muted = !e5.muted;
              }, "mute"), this.bind(t5.buttons.captions, "click", () => e5.toggleCaptions()), this.bind(t5.buttons.download, "click", () => {
                Z.call(e5, e5.media, "download");
              }, "download"), this.bind(t5.buttons.fullscreen, "click", () => {
                e5.fullscreen.toggle();
              }, "fullscreen"), this.bind(t5.buttons.pip, "click", () => {
                e5.pip = "toggle";
              }, "pip"), this.bind(t5.buttons.airplay, "click", e5.airplay, "airplay"), this.bind(t5.buttons.settings, "click", (t6) => {
                t6.stopPropagation(), t6.preventDefault(), Pe.toggleMenu.call(e5, t6);
              }, null, false), this.bind(t5.buttons.settings, "keyup", (t6) => {
                [" ", "Enter"].includes(t6.key) && ("Enter" !== t6.key ? (t6.preventDefault(), t6.stopPropagation(), Pe.toggleMenu.call(e5, t6)) : Pe.focusFirstMenuItem.call(e5, null, true));
              }, null, false), this.bind(t5.settings.menu, "keydown", (t6) => {
                "Escape" === t6.key && Pe.toggleMenu.call(e5, t6);
              }), this.bind(t5.inputs.seek, "mousedown mousemove", (e6) => {
                const i5 = t5.progress.getBoundingClientRect(), s4 = 100 / i5.width * (e6.pageX - i5.left);
                e6.currentTarget.setAttribute("seek-value", s4);
              }), this.bind(t5.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t6) => {
                const i5 = t6.currentTarget, s4 = "play-on-seeked";
                if (S.keyboardEvent(t6) && !["ArrowLeft", "ArrowRight"].includes(t6.key))
                  return;
                e5.lastSeekTime = Date.now();
                const n4 = i5.hasAttribute(s4), a3 = ["mouseup", "touchend", "keyup"].includes(t6.type);
                n4 && a3 ? (i5.removeAttribute(s4), ie(e5.play())) : !a3 && e5.playing && (i5.setAttribute(s4, ""), e5.pause());
              }), M.isIos) {
                const t6 = U.call(e5, 'input[type="range"]');
                Array.from(t6).forEach((e6) => this.bind(e6, i4, (e7) => P(e7.target)));
              }
              this.bind(t5.inputs.seek, i4, (t6) => {
                const i5 = t6.currentTarget;
                let s4 = i5.getAttribute("seek-value");
                S.empty(s4) && (s4 = i5.value), i5.removeAttribute("seek-value"), e5.currentTime = s4 / i5.max * e5.duration;
              }, "seek"), this.bind(t5.progress, "mouseenter mouseleave mousemove", (t6) => Pe.updateSeekTooltip.call(e5, t6)), this.bind(t5.progress, "mousemove touchmove", (t6) => {
                const { previewThumbnails: i5 } = e5;
                i5 && i5.loaded && i5.startMove(t6);
              }), this.bind(t5.progress, "mouseleave touchend click", () => {
                const { previewThumbnails: t6 } = e5;
                t6 && t6.loaded && t6.endMove(false, true);
              }), this.bind(t5.progress, "mousedown touchstart", (t6) => {
                const { previewThumbnails: i5 } = e5;
                i5 && i5.loaded && i5.startScrubbing(t6);
              }), this.bind(t5.progress, "mouseup touchend", (t6) => {
                const { previewThumbnails: i5 } = e5;
                i5 && i5.loaded && i5.endScrubbing(t6);
              }), M.isWebKit && Array.from(U.call(e5, 'input[type="range"]')).forEach((t6) => {
                this.bind(t6, "input", (t7) => Pe.updateRangeFill.call(e5, t7.target));
              }), e5.config.toggleInvert && !S.element(t5.display.duration) && this.bind(t5.display.currentTime, "click", () => {
                0 !== e5.currentTime && (e5.config.invertTime = !e5.config.invertTime, Pe.timeUpdate.call(e5));
              }), this.bind(t5.inputs.volume, i4, (t6) => {
                e5.volume = t6.target.value;
              }, "volume"), this.bind(t5.controls, "mouseenter mouseleave", (i5) => {
                t5.controls.hover = !e5.touch && "mouseenter" === i5.type;
              }), t5.fullscreen && Array.from(t5.fullscreen.children).filter((e6) => !e6.contains(t5.container)).forEach((i5) => {
                this.bind(i5, "mouseenter mouseleave", (i6) => {
                  t5.controls && (t5.controls.hover = !e5.touch && "mouseenter" === i6.type);
                });
              }), this.bind(t5.controls, "mousedown mouseup touchstart touchend touchcancel", (e6) => {
                t5.controls.pressed = ["mousedown", "touchstart"].includes(e6.type);
              }), this.bind(t5.controls, "focusin", () => {
                const { config: i5, timers: s4 } = e5;
                R(t5.controls, i5.classNames.noTransition, true), Fe.toggleControls.call(e5, true), setTimeout(() => {
                  R(t5.controls, i5.classNames.noTransition, false);
                }, 0);
                const n4 = this.touch ? 3e3 : 4e3;
                clearTimeout(s4.controls), s4.controls = setTimeout(() => Fe.toggleControls.call(e5, false), n4);
              }), this.bind(t5.inputs.volume, "wheel", (t6) => {
                const i5 = t6.webkitDirectionInvertedFromDevice, [s4, n4] = [t6.deltaX, -t6.deltaY].map((e6) => i5 ? -e6 : e6), a3 = Math.sign(Math.abs(s4) > Math.abs(n4) ? s4 : n4);
                e5.increaseVolume(a3 / 50);
                const { volume: l3 } = e5.media;
                (1 === a3 && l3 < 1 || -1 === a3 && l3 > 0) && t6.preventDefault();
              }, "volume", false);
            }), this.player = t4, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this);
          }
          handleKey(e5) {
            const { player: t4 } = this, { elements: i4 } = t4, { key: s4, type: n4, altKey: a3, ctrlKey: l3, metaKey: r3, shiftKey: o3 } = e5, c3 = "keydown" === n4, u2 = c3 && s4 === this.lastKey;
            if (a3 || l3 || r3 || o3)
              return;
            if (!s4)
              return;
            if (c3) {
              const n5 = document.activeElement;
              if (S.element(n5)) {
                const { editable: s5 } = t4.config.selectors, { seek: a4 } = i4.inputs;
                if (n5 !== a4 && V(n5, s5))
                  return;
                if (" " === e5.key && V(n5, 'button, [role^="menuitem"]'))
                  return;
              }
              switch ([" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(s4) && (e5.preventDefault(), e5.stopPropagation()), s4) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  u2 || (h3 = parseInt(s4, 10), t4.currentTime = t4.duration / 10 * h3);
                  break;
                case " ":
                case "k":
                  u2 || ie(t4.togglePlay());
                  break;
                case "ArrowUp":
                  t4.increaseVolume(0.1);
                  break;
                case "ArrowDown":
                  t4.decreaseVolume(0.1);
                  break;
                case "m":
                  u2 || (t4.muted = !t4.muted);
                  break;
                case "ArrowRight":
                  t4.forward();
                  break;
                case "ArrowLeft":
                  t4.rewind();
                  break;
                case "f":
                  t4.fullscreen.toggle();
                  break;
                case "c":
                  u2 || t4.toggleCaptions();
                  break;
                case "l":
                  t4.loop = !t4.loop;
              }
              "Escape" === s4 && !t4.fullscreen.usingNative && t4.fullscreen.active && t4.fullscreen.toggle(), this.lastKey = s4;
            } else
              this.lastKey = null;
            var h3;
          }
          toggleMenu(e5) {
            Pe.toggleMenu.call(this.player, e5);
          }
        }
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
        var Ue = function(e5, t4) {
          return e5(t4 = { exports: {} }, t4.exports), t4.exports;
        }(function(e5, t4) {
          e5.exports = function() {
            var e6 = function() {
            }, t5 = {}, i4 = {}, s4 = {};
            function n4(e7, t6) {
              e7 = e7.push ? e7 : [e7];
              var n5, a4, l4, r4 = [], o4 = e7.length, c4 = o4;
              for (n5 = function(e8, i5) {
                i5.length && r4.push(e8), --c4 || t6(r4);
              }; o4--; )
                a4 = e7[o4], (l4 = i4[a4]) ? n5(a4, l4) : (s4[a4] = s4[a4] || []).push(n5);
            }
            function a3(e7, t6) {
              if (e7) {
                var n5 = s4[e7];
                if (i4[e7] = t6, n5)
                  for (; n5.length; )
                    n5[0](e7, t6), n5.splice(0, 1);
              }
            }
            function l3(t6, i5) {
              t6.call && (t6 = { success: t6 }), i5.length ? (t6.error || e6)(i5) : (t6.success || e6)(t6);
            }
            function r3(t6, i5, s5, n5) {
              var a4, l4, o4 = document, c4 = s5.async, u2 = (s5.numRetries || 0) + 1, h3 = s5.before || e6, d2 = t6.replace(/[\?|#].*$/, ""), m2 = t6.replace(/^(css|img)!/, "");
              n5 = n5 || 0, /(^css!|\.css$)/.test(d2) ? ((l4 = o4.createElement("link")).rel = "stylesheet", l4.href = m2, (a4 = "hideFocus" in l4) && l4.relList && (a4 = 0, l4.rel = "preload", l4.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d2) ? (l4 = o4.createElement("img")).src = m2 : ((l4 = o4.createElement("script")).src = t6, l4.async = void 0 === c4 || c4), l4.onload = l4.onerror = l4.onbeforeload = function(e7) {
                var o5 = e7.type[0];
                if (a4)
                  try {
                    l4.sheet.cssText.length || (o5 = "e");
                  } catch (e8) {
                    18 != e8.code && (o5 = "e");
                  }
                if ("e" == o5) {
                  if ((n5 += 1) < u2)
                    return r3(t6, i5, s5, n5);
                } else if ("preload" == l4.rel && "style" == l4.as)
                  return l4.rel = "stylesheet";
                i5(t6, o5, e7.defaultPrevented);
              }, false !== h3(t6, l4) && o4.head.appendChild(l4);
            }
            function o3(e7, t6, i5) {
              var s5, n5, a4 = (e7 = e7.push ? e7 : [e7]).length, l4 = a4, o4 = [];
              for (s5 = function(e8, i6, s6) {
                if ("e" == i6 && o4.push(e8), "b" == i6) {
                  if (!s6)
                    return;
                  o4.push(e8);
                }
                --a4 || t6(o4);
              }, n5 = 0; n5 < l4; n5++)
                r3(e7[n5], s5, i5);
            }
            function c3(e7, i5, s5) {
              var n5, r4;
              if (i5 && i5.trim && (n5 = i5), r4 = (n5 ? s5 : i5) || {}, n5) {
                if (n5 in t5)
                  throw "LoadJS";
                t5[n5] = true;
              }
              function c4(t6, i6) {
                o3(e7, function(e8) {
                  l3(r4, e8), t6 && l3({ success: t6, error: i6 }, e8), a3(n5, e8);
                }, r4);
              }
              if (r4.returnPromise)
                return new Promise(c4);
              c4();
            }
            return c3.ready = function(e7, t6) {
              return n4(e7, function(e8) {
                l3(t6, e8);
              }), c3;
            }, c3.done = function(e7) {
              a3(e7, []);
            }, c3.reset = function() {
              t5 = {}, i4 = {}, s4 = {};
            }, c3.isDefined = function(e7) {
              return e7 in t5;
            }, c3;
          }();
        });
        function Be(e5) {
          return new Promise((t4, i4) => {
            Ue(e5, { success: t4, error: i4 });
          });
        }
        function We(e5) {
          e5 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e5 && (this.media.paused = !e5, Z.call(this, this.media, e5 ? "play" : "pause"));
        }
        const ze = { setup() {
          const e5 = this;
          R(e5.elements.wrapper, e5.config.classNames.embed, true), e5.options.speed = e5.config.speed.options, ue.call(e5), S.object(window.Vimeo) ? ze.ready.call(e5) : Be(e5.config.urls.vimeo.sdk).then(() => {
            ze.ready.call(e5);
          }).catch((t4) => {
            e5.debug.warn("Vimeo SDK (player.js) failed to load", t4);
          });
        }, ready() {
          const e5 = this, t4 = e5.config.vimeo, { premium: i4, referrerPolicy: s4, ...n4 } = t4;
          let a3 = e5.media.getAttribute("src"), l3 = "";
          S.empty(a3) ? (a3 = e5.media.getAttribute(e5.config.attributes.embed.id), l3 = e5.media.getAttribute(e5.config.attributes.embed.hash)) : l3 = function(e6) {
            const t5 = e6.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
            return t5 && 5 === t5.length ? t5[4] : null;
          }(a3);
          const r3 = l3 ? { h: l3 } : {};
          i4 && Object.assign(n4, { controls: false, sidedock: false });
          const o3 = Ne({ loop: e5.config.loop.active, autoplay: e5.autoplay, muted: e5.muted, gesture: "media", playsinline: e5.config.playsinline, ...r3, ...n4 }), c3 = (u2 = a3, S.empty(u2) ? null : S.number(Number(u2)) ? u2 : u2.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u2);
          var u2;
          const h3 = $2("iframe"), d2 = me(e5.config.urls.vimeo.iframe, c3, o3);
          if (h3.setAttribute("src", d2), h3.setAttribute("allowfullscreen", ""), h3.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), S.empty(s4) || h3.setAttribute("referrerPolicy", s4), i4 || !t4.customControls)
            h3.setAttribute("data-poster", e5.poster), e5.media = q(h3, e5.media);
          else {
            const t5 = $2("div", { class: e5.config.classNames.embedContainer, "data-poster": e5.poster });
            t5.appendChild(h3), e5.media = q(t5, e5.media);
          }
          t4.customControls || Te(me(e5.config.urls.vimeo.api, d2)).then((t5) => {
            !S.empty(t5) && t5.thumbnail_url && Fe.setPoster.call(e5, t5.thumbnail_url).catch(() => {
            });
          }), e5.embed = new window.Vimeo.Player(h3, { autopause: e5.config.autopause, muted: e5.muted }), e5.media.paused = true, e5.media.currentTime = 0, e5.supported.ui && e5.embed.disableTextTrack(), e5.media.play = () => (We.call(e5, true), e5.embed.play()), e5.media.pause = () => (We.call(e5, false), e5.embed.pause()), e5.media.stop = () => {
            e5.pause(), e5.currentTime = 0;
          };
          let { currentTime: m2 } = e5.media;
          Object.defineProperty(e5.media, "currentTime", { get: () => m2, set(t5) {
            const { embed: i5, media: s5, paused: n5, volume: a4 } = e5, l4 = n5 && !i5.hasPlayed;
            s5.seeking = true, Z.call(e5, s5, "seeking"), Promise.resolve(l4 && i5.setVolume(0)).then(() => i5.setCurrentTime(t5)).then(() => l4 && i5.pause()).then(() => l4 && i5.setVolume(a4)).catch(() => {
            });
          } });
          let p2 = e5.config.speed.selected;
          Object.defineProperty(e5.media, "playbackRate", { get: () => p2, set(t5) {
            e5.embed.setPlaybackRate(t5).then(() => {
              p2 = t5, Z.call(e5, e5.media, "ratechange");
            }).catch(() => {
              e5.options.speed = [1];
            });
          } });
          let { volume: g2 } = e5.config;
          Object.defineProperty(e5.media, "volume", { get: () => g2, set(t5) {
            e5.embed.setVolume(t5).then(() => {
              g2 = t5, Z.call(e5, e5.media, "volumechange");
            });
          } });
          let { muted: f2 } = e5.config;
          Object.defineProperty(e5.media, "muted", { get: () => f2, set(t5) {
            const i5 = !!S.boolean(t5) && t5;
            e5.embed.setMuted(!!i5 || e5.config.muted).then(() => {
              f2 = i5, Z.call(e5, e5.media, "volumechange");
            });
          } });
          let y2, { loop: b2 } = e5.config;
          Object.defineProperty(e5.media, "loop", { get: () => b2, set(t5) {
            const i5 = S.boolean(t5) ? t5 : e5.config.loop.active;
            e5.embed.setLoop(i5).then(() => {
              b2 = i5;
            });
          } }), e5.embed.getVideoUrl().then((t5) => {
            y2 = t5, Pe.setDownloadUrl.call(e5);
          }).catch((e6) => {
            this.debug.warn(e6);
          }), Object.defineProperty(e5.media, "currentSrc", { get: () => y2 }), Object.defineProperty(e5.media, "ended", { get: () => e5.currentTime === e5.duration }), Promise.all([e5.embed.getVideoWidth(), e5.embed.getVideoHeight()]).then((t5) => {
            const [i5, s5] = t5;
            e5.embed.ratio = he(i5, s5), ue.call(this);
          }), e5.embed.setAutopause(e5.config.autopause).then((t5) => {
            e5.config.autopause = t5;
          }), e5.embed.getVideoTitle().then((t5) => {
            e5.config.title = t5, Fe.setTitle.call(this);
          }), e5.embed.getCurrentTime().then((t5) => {
            m2 = t5, Z.call(e5, e5.media, "timeupdate");
          }), e5.embed.getDuration().then((t5) => {
            e5.media.duration = t5, Z.call(e5, e5.media, "durationchange");
          }), e5.embed.getTextTracks().then((t5) => {
            e5.media.textTracks = t5, xe.setup.call(e5);
          }), e5.embed.on("cuechange", ({ cues: t5 = [] }) => {
            const i5 = t5.map((e6) => function(e7) {
              const t6 = document.createDocumentFragment(), i6 = document.createElement("div");
              return t6.appendChild(i6), i6.innerHTML = e7, t6.firstChild.innerText;
            }(e6.text));
            xe.updateCues.call(e5, i5);
          }), e5.embed.on("loaded", () => {
            if (e5.embed.getPaused().then((t5) => {
              We.call(e5, !t5), t5 || Z.call(e5, e5.media, "playing");
            }), S.element(e5.embed.element) && e5.supported.ui) {
              e5.embed.element.setAttribute("tabindex", -1);
            }
          }), e5.embed.on("bufferstart", () => {
            Z.call(e5, e5.media, "waiting");
          }), e5.embed.on("bufferend", () => {
            Z.call(e5, e5.media, "playing");
          }), e5.embed.on("play", () => {
            We.call(e5, true), Z.call(e5, e5.media, "playing");
          }), e5.embed.on("pause", () => {
            We.call(e5, false);
          }), e5.embed.on("timeupdate", (t5) => {
            e5.media.seeking = false, m2 = t5.seconds, Z.call(e5, e5.media, "timeupdate");
          }), e5.embed.on("progress", (t5) => {
            e5.media.buffered = t5.percent, Z.call(e5, e5.media, "progress"), 1 === parseInt(t5.percent, 10) && Z.call(e5, e5.media, "canplaythrough"), e5.embed.getDuration().then((t6) => {
              t6 !== e5.media.duration && (e5.media.duration = t6, Z.call(e5, e5.media, "durationchange"));
            });
          }), e5.embed.on("seeked", () => {
            e5.media.seeking = false, Z.call(e5, e5.media, "seeked");
          }), e5.embed.on("ended", () => {
            e5.media.paused = true, Z.call(e5, e5.media, "ended");
          }), e5.embed.on("error", (t5) => {
            e5.media.error = t5, Z.call(e5, e5.media, "error");
          }), t4.customControls && setTimeout(() => Fe.build.call(e5), 0);
        } };
        function Ke(e5) {
          e5 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e5 && (this.media.paused = !e5, Z.call(this, this.media, e5 ? "play" : "pause"));
        }
        function Ye(e5) {
          return e5.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
        }
        const Qe = { setup() {
          if (R(this.elements.wrapper, this.config.classNames.embed, true), S.object(window.YT) && S.function(window.YT.Player))
            Qe.ready.call(this);
          else {
            const e5 = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
              S.function(e5) && e5(), Qe.ready.call(this);
            }, Be(this.config.urls.youtube.sdk).catch((e6) => {
              this.debug.warn("YouTube API failed to load", e6);
            });
          }
        }, getTitle(e5) {
          Te(me(this.config.urls.youtube.api, e5)).then((e6) => {
            if (S.object(e6)) {
              const { title: t4, height: i4, width: s4 } = e6;
              this.config.title = t4, Fe.setTitle.call(this), this.embed.ratio = he(s4, i4);
            }
            ue.call(this);
          }).catch(() => {
            ue.call(this);
          });
        }, ready() {
          const e5 = this, t4 = e5.config.youtube, i4 = e5.media && e5.media.getAttribute("id");
          if (!S.empty(i4) && i4.startsWith("youtube-"))
            return;
          let s4 = e5.media.getAttribute("src");
          S.empty(s4) && (s4 = e5.media.getAttribute(this.config.attributes.embed.id));
          const n4 = (a3 = s4, S.empty(a3) ? null : a3.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a3);
          var a3;
          const l3 = $2("div", { id: `${e5.provider}-${Math.floor(1e4 * Math.random())}`, "data-poster": t4.customControls ? e5.poster : void 0 });
          if (e5.media = q(l3, e5.media), t4.customControls) {
            const t5 = (e6) => `https://i.ytimg.com/vi/${n4}/${e6}default.jpg`;
            Re(t5("maxres"), 121).catch(() => Re(t5("sd"), 121)).catch(() => Re(t5("hq"))).then((t6) => Fe.setPoster.call(e5, t6.src)).then((t6) => {
              t6.includes("maxres") || (e5.elements.poster.style.backgroundSize = "cover");
            }).catch(() => {
            });
          }
          e5.embed = new window.YT.Player(e5.media, { videoId: n4, host: Ye(t4), playerVars: x({}, { autoplay: e5.config.autoplay ? 1 : 0, hl: e5.config.hl, controls: e5.supported.ui && t4.customControls ? 0 : 1, disablekb: 1, playsinline: e5.config.playsinline && !e5.config.fullscreen.iosNative ? 1 : 0, cc_load_policy: e5.captions.active ? 1 : 0, cc_lang_pref: e5.config.captions.language, widget_referrer: window ? window.location.href : null }, t4), events: { onError(t5) {
            if (!e5.media.error) {
              const i5 = t5.data, s5 = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[i5] || "An unknown error occurred";
              e5.media.error = { code: i5, message: s5 }, Z.call(e5, e5.media, "error");
            }
          }, onPlaybackRateChange(t5) {
            const i5 = t5.target;
            e5.media.playbackRate = i5.getPlaybackRate(), Z.call(e5, e5.media, "ratechange");
          }, onReady(i5) {
            if (S.function(e5.media.play))
              return;
            const s5 = i5.target;
            Qe.getTitle.call(e5, n4), e5.media.play = () => {
              Ke.call(e5, true), s5.playVideo();
            }, e5.media.pause = () => {
              Ke.call(e5, false), s5.pauseVideo();
            }, e5.media.stop = () => {
              s5.stopVideo();
            }, e5.media.duration = s5.getDuration(), e5.media.paused = true, e5.media.currentTime = 0, Object.defineProperty(e5.media, "currentTime", { get: () => Number(s5.getCurrentTime()), set(t5) {
              e5.paused && !e5.embed.hasPlayed && e5.embed.mute(), e5.media.seeking = true, Z.call(e5, e5.media, "seeking"), s5.seekTo(t5);
            } }), Object.defineProperty(e5.media, "playbackRate", { get: () => s5.getPlaybackRate(), set(e6) {
              s5.setPlaybackRate(e6);
            } });
            let { volume: a4 } = e5.config;
            Object.defineProperty(e5.media, "volume", { get: () => a4, set(t5) {
              a4 = t5, s5.setVolume(100 * a4), Z.call(e5, e5.media, "volumechange");
            } });
            let { muted: l4 } = e5.config;
            Object.defineProperty(e5.media, "muted", { get: () => l4, set(t5) {
              const i6 = S.boolean(t5) ? t5 : l4;
              l4 = i6, s5[i6 ? "mute" : "unMute"](), s5.setVolume(100 * a4), Z.call(e5, e5.media, "volumechange");
            } }), Object.defineProperty(e5.media, "currentSrc", { get: () => s5.getVideoUrl() }), Object.defineProperty(e5.media, "ended", { get: () => e5.currentTime === e5.duration });
            const r3 = s5.getAvailablePlaybackRates();
            e5.options.speed = r3.filter((t5) => e5.config.speed.options.includes(t5)), e5.supported.ui && t4.customControls && e5.media.setAttribute("tabindex", -1), Z.call(e5, e5.media, "timeupdate"), Z.call(e5, e5.media, "durationchange"), clearInterval(e5.timers.buffering), e5.timers.buffering = setInterval(() => {
              e5.media.buffered = s5.getVideoLoadedFraction(), (null === e5.media.lastBuffered || e5.media.lastBuffered < e5.media.buffered) && Z.call(e5, e5.media, "progress"), e5.media.lastBuffered = e5.media.buffered, 1 === e5.media.buffered && (clearInterval(e5.timers.buffering), Z.call(e5, e5.media, "canplaythrough"));
            }, 200), t4.customControls && setTimeout(() => Fe.build.call(e5), 50);
          }, onStateChange(i5) {
            const s5 = i5.target;
            clearInterval(e5.timers.playing);
            switch (e5.media.seeking && [1, 2].includes(i5.data) && (e5.media.seeking = false, Z.call(e5, e5.media, "seeked")), i5.data) {
              case -1:
                Z.call(e5, e5.media, "timeupdate"), e5.media.buffered = s5.getVideoLoadedFraction(), Z.call(e5, e5.media, "progress");
                break;
              case 0:
                Ke.call(e5, false), e5.media.loop ? (s5.stopVideo(), s5.playVideo()) : Z.call(e5, e5.media, "ended");
                break;
              case 1:
                t4.customControls && !e5.config.autoplay && e5.media.paused && !e5.embed.hasPlayed ? e5.media.pause() : (Ke.call(e5, true), Z.call(e5, e5.media, "playing"), e5.timers.playing = setInterval(() => {
                  Z.call(e5, e5.media, "timeupdate");
                }, 50), e5.media.duration !== s5.getDuration() && (e5.media.duration = s5.getDuration(), Z.call(e5, e5.media, "durationchange")));
                break;
              case 2:
                e5.muted || e5.embed.unMute(), Ke.call(e5, false);
                break;
              case 3:
                Z.call(e5, e5.media, "waiting");
            }
            Z.call(e5, e5.elements.container, "statechange", false, { code: i5.data });
          } } });
        } }, Xe = { setup() {
          this.media ? (R(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true), R(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true), this.isEmbed && R(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true), this.isVideo && (this.elements.wrapper = $2("div", { class: this.config.classNames.video }), L(this.media, this.elements.wrapper), this.elements.poster = $2("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? de.setup.call(this) : this.isYouTube ? Qe.setup.call(this) : this.isVimeo && ze.setup.call(this)) : this.debug.warn("No media element found!");
        } };
        class Je {
          constructor(t4) {
            e4(this, "load", () => {
              this.enabled && (S.object(window.google) && S.object(window.google.ima) ? this.ready() : Be(this.player.config.urls.googleIMA.sdk).then(() => {
                this.ready();
              }).catch(() => {
                this.trigger("error", new Error("Google IMA SDK failed to load"));
              }));
            }), e4(this, "ready", () => {
              var e5;
              this.enabled || ((e5 = this).manager && e5.manager.destroy(), e5.elements.displayContainer && e5.elements.displayContainer.destroy(), e5.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              }), this.listeners(), this.setupIMA();
            }), e4(this, "setupIMA", () => {
              this.elements.container = $2("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e5) => this.onAdsManagerLoaded(e5), false), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e5) => this.onAdError(e5), false), this.requestAds();
            }), e4(this, "requestAds", () => {
              const { container: e5 } = this.player.elements;
              try {
                const t5 = new google.ima.AdsRequest();
                t5.adTagUrl = this.tagUrl, t5.linearAdSlotWidth = e5.offsetWidth, t5.linearAdSlotHeight = e5.offsetHeight, t5.nonLinearAdSlotWidth = e5.offsetWidth, t5.nonLinearAdSlotHeight = e5.offsetHeight, t5.forceNonLinearFullSlot = false, t5.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t5);
              } catch (e6) {
                this.onAdError(e6);
              }
            }), e4(this, "pollCountdown", (e5 = false) => {
              if (!e5)
                return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
              this.countdownTimer = setInterval(() => {
                const e6 = Ee(Math.max(this.manager.getRemainingTime(), 0)), t5 = `${ve.get("advertisement", this.player.config)} - ${e6}`;
                this.elements.container.setAttribute("data-badge-text", t5);
              }, 100);
            }), e4(this, "onAdsManagerLoaded", (e5) => {
              if (!this.enabled)
                return;
              const t5 = new google.ima.AdsRenderingSettings();
              t5.restoreCustomPlaybackStateOnAdBreakComplete = true, t5.enablePreloading = true, this.manager = e5.getAdsManager(this.player, t5), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e6) => this.onAdError(e6)), Object.keys(google.ima.AdEvent.Type).forEach((e6) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[e6], (e7) => this.onAdEvent(e7));
              }), this.trigger("loaded");
            }), e4(this, "addCuePoints", () => {
              S.empty(this.cuePoints) || this.cuePoints.forEach((e5) => {
                if (0 !== e5 && -1 !== e5 && e5 < this.player.duration) {
                  const t5 = this.player.elements.progress;
                  if (S.element(t5)) {
                    const i4 = 100 / this.player.duration * e5, s4 = $2("span", { class: this.player.config.classNames.cues });
                    s4.style.left = `${i4.toString()}%`, t5.appendChild(s4);
                  }
                }
              });
            }), e4(this, "onAdEvent", (e5) => {
              const { container: t5 } = this.player.elements, i4 = e5.getAd(), s4 = e5.getAdData();
              switch (((e6) => {
                Z.call(this.player, this.player.media, `ads${e6.replace(/_/g, "").toLowerCase()}`);
              })(e5.type), e5.type) {
                case google.ima.AdEvent.Type.LOADED:
                  this.trigger("loaded"), this.pollCountdown(true), i4.isLinear() || (i4.width = t5.offsetWidth, i4.height = t5.offsetHeight);
                  break;
                case google.ima.AdEvent.Type.STARTED:
                  this.manager.setVolume(this.player.volume);
                  break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                  this.player.ended ? this.loadAds() : this.loader.contentComplete();
                  break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                  this.pauseContent();
                  break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                  this.pollCountdown(), this.resumeContent();
                  break;
                case google.ima.AdEvent.Type.LOG:
                  s4.adError && this.player.debug.warn(`Non-fatal ad error: ${s4.adError.getMessage()}`);
              }
            }), e4(this, "onAdError", (e5) => {
              this.cancel(), this.player.debug.warn("Ads error", e5);
            }), e4(this, "listeners", () => {
              const { container: e5 } = this.player.elements;
              let t5;
              this.player.on("canplay", () => {
                this.addCuePoints();
              }), this.player.on("ended", () => {
                this.loader.contentComplete();
              }), this.player.on("timeupdate", () => {
                t5 = this.player.currentTime;
              }), this.player.on("seeked", () => {
                const e6 = this.player.currentTime;
                S.empty(this.cuePoints) || this.cuePoints.forEach((i4, s4) => {
                  t5 < i4 && i4 < e6 && (this.manager.discardAdBreak(), this.cuePoints.splice(s4, 1));
                });
              }), window.addEventListener("resize", () => {
                this.manager && this.manager.resize(e5.offsetWidth, e5.offsetHeight, google.ima.ViewMode.NORMAL);
              });
            }), e4(this, "play", () => {
              const { container: e5 } = this.player.elements;
              this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
                this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                try {
                  this.initialized || (this.manager.init(e5.offsetWidth, e5.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = true;
                } catch (e6) {
                  this.onAdError(e6);
                }
              }).catch(() => {
              });
            }), e4(this, "resumeContent", () => {
              this.elements.container.style.zIndex = "", this.playing = false, ie(this.player.media.play());
            }), e4(this, "pauseContent", () => {
              this.elements.container.style.zIndex = 3, this.playing = true, this.player.media.pause();
            }), e4(this, "cancel", () => {
              this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
            }), e4(this, "loadAds", () => {
              this.managerPromise.then(() => {
                this.manager && this.manager.destroy(), this.managerPromise = new Promise((e5) => {
                  this.on("loaded", e5), this.player.debug.log(this.manager);
                }), this.initialized = false, this.requestAds();
              }).catch(() => {
              });
            }), e4(this, "trigger", (e5, ...t5) => {
              const i4 = this.events[e5];
              S.array(i4) && i4.forEach((e6) => {
                S.function(e6) && e6.apply(this, t5);
              });
            }), e4(this, "on", (e5, t5) => (S.array(this.events[e5]) || (this.events[e5] = []), this.events[e5].push(t5), this)), e4(this, "startSafetyTimer", (e5, t5) => {
              this.player.debug.log(`Safety timer invoked from: ${t5}`), this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
              }, e5);
            }), e4(this, "clearSafetyTimer", (e5) => {
              S.nullOrUndefined(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e5}`), clearTimeout(this.safetyTimer), this.safetyTimer = null);
            }), this.player = t4, this.config = t4.config.ads, this.playing = false, this.initialized = false, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e5, t5) => {
              this.on("loaded", e5), this.on("error", t5);
            }), this.load();
          }
          get enabled() {
            const { config: e5 } = this;
            return this.player.isHTML5 && this.player.isVideo && e5.enabled && (!S.empty(e5.publisherId) || S.url(e5.tagUrl));
          }
          get tagUrl() {
            const { config: e5 } = this;
            if (S.url(e5.tagUrl))
              return e5.tagUrl;
            return `https://go.aniview.com/api/adserver6/vast/?${Ne({ AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: e5.publisherId })}`;
          }
        }
        function Ge(e5 = 0, t4 = 0, i4 = 255) {
          return Math.min(Math.max(e5, t4), i4);
        }
        const Ze = (e5) => {
          const t4 = [];
          return e5.split(/\r\n\r\n|\n\n|\r\r/).forEach((e6) => {
            const i4 = {};
            e6.split(/\r\n|\n|\r/).forEach((e7) => {
              if (S.number(i4.startTime)) {
                if (!S.empty(e7.trim()) && S.empty(i4.text)) {
                  const t5 = e7.trim().split("#xywh=");
                  [i4.text] = t5, t5[1] && ([i4.x, i4.y, i4.w, i4.h] = t5[1].split(","));
                }
              } else {
                const t5 = e7.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                t5 && (i4.startTime = 60 * Number(t5[1] || 0) * 60 + 60 * Number(t5[2]) + Number(t5[3]) + Number(`0.${t5[4]}`), i4.endTime = 60 * Number(t5[6] || 0) * 60 + 60 * Number(t5[7]) + Number(t5[8]) + Number(`0.${t5[9]}`));
              }
            }), i4.text && t4.push(i4);
          }), t4;
        }, et = (e5, t4) => {
          const i4 = {};
          return e5 > t4.width / t4.height ? (i4.width = t4.width, i4.height = 1 / e5 * t4.width) : (i4.height = t4.height, i4.width = e5 * t4.height), i4;
        };
        class tt {
          constructor(t4) {
            e4(this, "load", () => {
              this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
                this.enabled && (this.render(), this.determineContainerAutoSizing(), this.listeners(), this.loaded = true);
              });
            }), e4(this, "getThumbnails", () => new Promise((e5) => {
              const { src: t5 } = this.player.config.previewThumbnails;
              if (S.empty(t5))
                throw new Error("Missing previewThumbnails.src config attribute");
              const i4 = () => {
                this.thumbnails.sort((e6, t6) => e6.height - t6.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e5();
              };
              if (S.function(t5))
                t5((e6) => {
                  this.thumbnails = e6, i4();
                });
              else {
                const e6 = (S.string(t5) ? [t5] : t5).map((e7) => this.getThumbnail(e7));
                Promise.all(e6).then(i4);
              }
            })), e4(this, "getThumbnail", (e5) => new Promise((t5) => {
              Te(e5).then((i4) => {
                const s4 = { frames: Ze(i4), height: null, urlPrefix: "" };
                s4.frames[0].text.startsWith("/") || s4.frames[0].text.startsWith("http://") || s4.frames[0].text.startsWith("https://") || (s4.urlPrefix = e5.substring(0, e5.lastIndexOf("/") + 1));
                const n4 = new Image();
                n4.onload = () => {
                  s4.height = n4.naturalHeight, s4.width = n4.naturalWidth, this.thumbnails.push(s4), t5();
                }, n4.src = s4.urlPrefix + s4.frames[0].text;
              });
            })), e4(this, "startMove", (e5) => {
              if (this.loaded && S.event(e5) && ["touchmove", "mousemove"].includes(e5.type) && this.player.media.duration) {
                if ("touchmove" === e5.type)
                  this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                else {
                  var t5, i4;
                  const s4 = this.player.elements.progress.getBoundingClientRect(), n4 = 100 / s4.width * (e5.pageX - s4.left);
                  this.seekTime = this.player.media.duration * (n4 / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e5.pageX, this.elements.thumb.time.innerText = Ee(this.seekTime);
                  const a3 = null === (t5 = this.player.config.markers) || void 0 === t5 || null === (i4 = t5.points) || void 0 === i4 ? void 0 : i4.find(({ time: e6 }) => e6 === Math.round(this.seekTime));
                  a3 && this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${a3.label}<br>`);
                }
                this.showImageAtCurrentTime();
              }
            }), e4(this, "endMove", () => {
              this.toggleThumbContainer(false, true);
            }), e4(this, "startScrubbing", (e5) => {
              (S.nullOrUndefined(e5.button) || false === e5.button || 0 === e5.button) && (this.mouseDown = true, this.player.media.duration && (this.toggleScrubbingContainer(true), this.toggleThumbContainer(false, true), this.showImageAtCurrentTime()));
            }), e4(this, "endScrubbing", () => {
              this.mouseDown = false, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(false) : G.call(this.player, this.player.media, "timeupdate", () => {
                this.mouseDown || this.toggleScrubbingContainer(false);
              });
            }), e4(this, "listeners", () => {
              this.player.on("play", () => {
                this.toggleThumbContainer(false, true);
              }), this.player.on("seeked", () => {
                this.toggleThumbContainer(false);
              }), this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
            }), e4(this, "render", () => {
              this.elements.thumb.container = $2("div", { class: this.player.config.classNames.previewThumbnails.thumbContainer }), this.elements.thumb.imageContainer = $2("div", { class: this.player.config.classNames.previewThumbnails.imageContainer }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
              const e5 = $2("div", { class: this.player.config.classNames.previewThumbnails.timeContainer });
              this.elements.thumb.time = $2("span", {}, "00:00"), e5.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(e5), S.element(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = $2("div", { class: this.player.config.classNames.previewThumbnails.scrubbingContainer }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
            }), e4(this, "destroy", () => {
              this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
            }), e4(this, "showImageAtCurrentTime", () => {
              this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
              const e5 = this.thumbnails[0].frames.findIndex((e6) => this.seekTime >= e6.startTime && this.seekTime <= e6.endTime), t5 = e5 >= 0;
              let i4 = 0;
              this.mouseDown || this.toggleThumbContainer(t5), t5 && (this.thumbnails.forEach((t6, s4) => {
                this.loadedImages.includes(t6.frames[e5].text) && (i4 = s4);
              }), e5 !== this.showingThumb && (this.showingThumb = e5, this.loadImage(i4)));
            }), e4(this, "loadImage", (e5 = 0) => {
              const t5 = this.showingThumb, i4 = this.thumbnails[e5], { urlPrefix: s4 } = i4, n4 = i4.frames[t5], a3 = i4.frames[t5].text, l3 = s4 + a3;
              if (this.currentImageElement && this.currentImageElement.dataset.filename === a3)
                this.showImage(this.currentImageElement, n4, e5, t5, a3, false), this.currentImageElement.dataset.index = t5, this.removeOldImages(this.currentImageElement);
              else {
                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                const i5 = new Image();
                i5.src = l3, i5.dataset.index = t5, i5.dataset.filename = a3, this.showingThumbFilename = a3, this.player.debug.log(`Loading image: ${l3}`), i5.onload = () => this.showImage(i5, n4, e5, t5, a3, true), this.loadingImage = i5, this.removeOldImages(i5);
              }
            }), e4(this, "showImage", (e5, t5, i4, s4, n4, a3 = true) => {
              this.player.debug.log(`Showing thumb: ${n4}. num: ${s4}. qual: ${i4}. newimg: ${a3}`), this.setImageSizeAndOffset(e5, t5), a3 && (this.currentImageContainer.appendChild(e5), this.currentImageElement = e5, this.loadedImages.includes(n4) || this.loadedImages.push(n4)), this.preloadNearby(s4, true).then(this.preloadNearby(s4, false)).then(this.getHigherQuality(i4, e5, t5, n4));
            }), e4(this, "removeOldImages", (e5) => {
              Array.from(this.currentImageContainer.children).forEach((t5) => {
                if ("img" !== t5.tagName.toLowerCase())
                  return;
                const i4 = this.usingSprites ? 500 : 1e3;
                if (t5.dataset.index !== e5.dataset.index && !t5.dataset.deleting) {
                  t5.dataset.deleting = true;
                  const { currentImageContainer: e6 } = this;
                  setTimeout(() => {
                    e6.removeChild(t5), this.player.debug.log(`Removing thumb: ${t5.dataset.filename}`);
                  }, i4);
                }
              });
            }), e4(this, "preloadNearby", (e5, t5 = true) => new Promise((i4) => {
              setTimeout(() => {
                const s4 = this.thumbnails[0].frames[e5].text;
                if (this.showingThumbFilename === s4) {
                  let n4;
                  n4 = t5 ? this.thumbnails[0].frames.slice(e5) : this.thumbnails[0].frames.slice(0, e5).reverse();
                  let a3 = false;
                  n4.forEach((e6) => {
                    const t6 = e6.text;
                    if (t6 !== s4 && !this.loadedImages.includes(t6)) {
                      a3 = true, this.player.debug.log(`Preloading thumb filename: ${t6}`);
                      const { urlPrefix: e7 } = this.thumbnails[0], s5 = e7 + t6, n5 = new Image();
                      n5.src = s5, n5.onload = () => {
                        this.player.debug.log(`Preloaded thumb filename: ${t6}`), this.loadedImages.includes(t6) || this.loadedImages.push(t6), i4();
                      };
                    }
                  }), a3 || i4();
                }
              }, 300);
            })), e4(this, "getHigherQuality", (e5, t5, i4, s4) => {
              if (e5 < this.thumbnails.length - 1) {
                let n4 = t5.naturalHeight;
                this.usingSprites && (n4 = i4.h), n4 < this.thumbContainerHeight && setTimeout(() => {
                  this.showingThumbFilename === s4 && (this.player.debug.log(`Showing higher quality thumb for: ${s4}`), this.loadImage(e5 + 1));
                }, 300);
              }
            }), e4(this, "toggleThumbContainer", (e5 = false, t5 = false) => {
              const i4 = this.player.config.classNames.previewThumbnails.thumbContainerShown;
              this.elements.thumb.container.classList.toggle(i4, e5), !e5 && t5 && (this.showingThumb = null, this.showingThumbFilename = null);
            }), e4(this, "toggleScrubbingContainer", (e5 = false) => {
              const t5 = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
              this.elements.scrubbing.container.classList.toggle(t5, e5), e5 || (this.showingThumb = null, this.showingThumbFilename = null);
            }), e4(this, "determineContainerAutoSizing", () => {
              (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = true);
            }), e4(this, "setThumbContainerSizeAndPos", () => {
              const { imageContainer: e5 } = this.elements.thumb;
              if (this.sizeSpecifiedInCSS) {
                if (e5.clientHeight > 20 && e5.clientWidth < 20) {
                  const t5 = Math.floor(e5.clientHeight * this.thumbAspectRatio);
                  e5.style.width = `${t5}px`;
                } else if (e5.clientHeight < 20 && e5.clientWidth > 20) {
                  const t5 = Math.floor(e5.clientWidth / this.thumbAspectRatio);
                  e5.style.height = `${t5}px`;
                }
              } else {
                const t5 = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                e5.style.height = `${this.thumbContainerHeight}px`, e5.style.width = `${t5}px`;
              }
              this.setThumbContainerPos();
            }), e4(this, "setThumbContainerPos", () => {
              const e5 = this.player.elements.progress.getBoundingClientRect(), t5 = this.player.elements.container.getBoundingClientRect(), { container: i4 } = this.elements.thumb, s4 = t5.left - e5.left + 10, n4 = t5.right - e5.left - i4.clientWidth - 10, a3 = this.mousePosX - e5.left - i4.clientWidth / 2, l3 = Ge(a3, s4, n4);
              i4.style.left = `${l3}px`, i4.style.setProperty("--preview-arrow-offset", a3 - l3 + "px");
            }), e4(this, "setScrubbingContainerSize", () => {
              const { width: e5, height: t5 } = et(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              this.elements.scrubbing.container.style.width = `${e5}px`, this.elements.scrubbing.container.style.height = `${t5}px`;
            }), e4(this, "setImageSizeAndOffset", (e5, t5) => {
              if (!this.usingSprites)
                return;
              const i4 = this.thumbContainerHeight / t5.h;
              e5.style.height = e5.naturalHeight * i4 + "px", e5.style.width = e5.naturalWidth * i4 + "px", e5.style.left = `-${t5.x * i4}px`, e5.style.top = `-${t5.y * i4}px`;
            }), this.player = t4, this.thumbnails = [], this.loaded = false, this.lastMouseMoveTime = Date.now(), this.mouseDown = false, this.loadedImages = [], this.elements = { thumb: {}, scrubbing: {} }, this.load();
          }
          get enabled() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
          }
          get currentImageContainer() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
          }
          get usingSprites() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w");
          }
          get thumbAspectRatio() {
            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
          }
          get thumbContainerHeight() {
            if (this.mouseDown) {
              const { height: e5 } = et(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              return e5;
            }
            return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
          }
          get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
          }
          set currentImageElement(e5) {
            this.mouseDown ? this.currentScrubbingImageElement = e5 : this.currentThumbnailImageElement = e5;
          }
        }
        const it = { insertElements(e5, t4) {
          S.string(t4) ? _(e5, this.media, { src: t4 }) : S.array(t4) && t4.forEach((t5) => {
            _(e5, this.media, t5);
          });
        }, change(e5) {
          N(e5, "sources.length") ? (de.cancelRequests.call(this), this.destroy.call(this, () => {
            this.options.quality = [], O(this.media), this.media = null, S.element(this.elements.container) && this.elements.container.removeAttribute("class");
            const { sources: t4, type: i4 } = e5, [{ provider: s4 = _e.html5, src: n4 }] = t4, a3 = "html5" === s4 ? i4 : "div", l3 = "html5" === s4 ? {} : { src: n4 };
            Object.assign(this, { provider: s4, type: i4, supported: K.check(i4, s4, this.config.playsinline), media: $2(a3, l3) }), this.elements.container.appendChild(this.media), S.boolean(e5.autoplay) && (this.config.autoplay = e5.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), S.empty(e5.poster) || (this.poster = e5.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), Fe.addStyleHook.call(this), this.isHTML5 && it.insertElements.call(this, "source", t4), this.config.title = e5.title, Xe.setup.call(this), this.isHTML5 && Object.keys(e5).includes("tracks") && it.insertElements.call(this, "track", e5.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.isHTML5 && this.media.load(), S.empty(e5.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e5.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))), this.fullscreen.update();
          }, true)) : this.debug.warn("Invalid source format");
        } };
        class st {
          constructor(t4, i4) {
            if (e4(this, "play", () => S.function(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => ie(this.media.play())), this.media.play()) : null), e4(this, "pause", () => this.playing && S.function(this.media.pause) ? this.media.pause() : null), e4(this, "togglePlay", (e5) => (S.boolean(e5) ? e5 : !this.playing) ? this.play() : this.pause()), e4(this, "stop", () => {
              this.isHTML5 ? (this.pause(), this.restart()) : S.function(this.media.stop) && this.media.stop();
            }), e4(this, "restart", () => {
              this.currentTime = 0;
            }), e4(this, "rewind", (e5) => {
              this.currentTime -= S.number(e5) ? e5 : this.config.seekTime;
            }), e4(this, "forward", (e5) => {
              this.currentTime += S.number(e5) ? e5 : this.config.seekTime;
            }), e4(this, "increaseVolume", (e5) => {
              const t5 = this.media.muted ? 0 : this.volume;
              this.volume = t5 + (S.number(e5) ? e5 : 0);
            }), e4(this, "decreaseVolume", (e5) => {
              this.increaseVolume(-e5);
            }), e4(this, "airplay", () => {
              K.airplay && this.media.webkitShowPlaybackTargetPicker();
            }), e4(this, "toggleControls", (e5) => {
              if (this.supported.ui && !this.isAudio) {
                const t5 = F(this.elements.container, this.config.classNames.hideControls), i5 = void 0 === e5 ? void 0 : !e5, s5 = R(this.elements.container, this.config.classNames.hideControls, i5);
                if (s5 && S.array(this.config.controls) && this.config.controls.includes("settings") && !S.empty(this.config.settings) && Pe.toggleMenu.call(this, false), s5 !== t5) {
                  const e6 = s5 ? "controlshidden" : "controlsshown";
                  Z.call(this, this.media, e6);
                }
                return !s5;
              }
              return false;
            }), e4(this, "on", (e5, t5) => {
              X.call(this, this.elements.container, e5, t5);
            }), e4(this, "once", (e5, t5) => {
              G.call(this, this.elements.container, e5, t5);
            }), e4(this, "off", (e5, t5) => {
              J(this.elements.container, e5, t5);
            }), e4(this, "destroy", (e5, t5 = false) => {
              if (!this.ready)
                return;
              const i5 = () => {
                document.body.style.overflow = "", this.embed = null, t5 ? (Object.keys(this.elements).length && (O(this.elements.buttons.play), O(this.elements.captions), O(this.elements.controls), O(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), S.function(e5) && e5()) : (ee.call(this), de.cancelRequests.call(this), q(this.elements.original, this.elements.container), Z.call(this, this.elements.original, "destroyed", true), S.function(e5) && e5.call(this.elements.original), this.ready = false, setTimeout(() => {
                  this.elements = null, this.media = null;
                }, 200));
              };
              this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (Fe.toggleNativeControls.call(this, true), i5()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && S.function(this.embed.destroy) && this.embed.destroy(), i5()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i5), setTimeout(i5, 200));
            }), e4(this, "supports", (e5) => K.mime.call(this, e5)), this.timers = {}, this.ready = false, this.loading = false, this.failed = false, this.touch = K.touch, this.media = t4, S.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || S.nodeList(this.media) || S.array(this.media)) && (this.media = this.media[0]), this.config = x({}, Le, st.defaults, i4 || {}, (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (e5) {
                return {};
              }
            })()), this.elements = { container: null, fullscreen: null, captions: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { popup: null, menu: null, panels: {}, buttons: {} } }, this.captions = { active: null, currentTrack: -1, meta: /* @__PURE__ */ new WeakMap() }, this.fullscreen = { active: false }, this.options = { speed: [], quality: [] }, this.debug = new De(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", K), S.nullOrUndefined(this.media) || !S.element(this.media))
              return void this.debug.error("Setup failed: no suitable element passed");
            if (this.media.plyr)
              return void this.debug.warn("Target already setup");
            if (!this.config.enabled)
              return void this.debug.error("Setup failed: disabled by config");
            if (!K.check().api)
              return void this.debug.error("Setup failed: no support");
            const s4 = this.media.cloneNode(true);
            s4.autoplay = false, this.elements.original = s4;
            const n4 = this.media.tagName.toLowerCase();
            let a3 = null, l3 = null;
            switch (n4) {
              case "div":
                if (a3 = this.media.querySelector("iframe"), S.element(a3)) {
                  if (l3 = Me(a3.getAttribute("src")), this.provider = function(e5) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e5) ? _e.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e5) ? _e.vimeo : null;
                  }(l3.toString()), this.elements.container = this.media, this.media = a3, this.elements.container.className = "", l3.search.length) {
                    const e5 = ["1", "true"];
                    e5.includes(l3.searchParams.get("autoplay")) && (this.config.autoplay = true), e5.includes(l3.searchParams.get("loop")) && (this.config.loop.active = true), this.isYouTube ? (this.config.playsinline = e5.includes(l3.searchParams.get("playsinline")), this.config.youtube.hl = l3.searchParams.get("hl")) : this.config.playsinline = true;
                  }
                } else
                  this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                if (S.empty(this.provider) || !Object.values(_e).includes(this.provider))
                  return void this.debug.error("Setup failed: Invalid provider");
                this.type = je;
                break;
              case "video":
              case "audio":
                this.type = n4, this.provider = _e.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = true), this.media.hasAttribute("autoplay") && (this.config.autoplay = true), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = true), this.media.hasAttribute("muted") && (this.config.muted = true), this.media.hasAttribute("loop") && (this.config.loop.active = true);
                break;
              default:
                return void this.debug.error("Setup failed: unsupported type");
            }
            this.supported = K.check(this.type, this.provider), this.supported.api ? (this.eventListeners = [], this.listeners = new Ve(this), this.storage = new we(this), this.media.plyr = this, S.element(this.elements.container) || (this.elements.container = $2("div"), L(this.media, this.elements.container)), Fe.migrateStyles.call(this), Fe.addStyleHook.call(this), Xe.setup.call(this), this.config.debug && X.call(this, this.elements.container, this.config.events.join(" "), (e5) => {
              this.debug.log(`event: ${e5.type}`);
            }), this.fullscreen = new He(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Je(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => ie(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))) : this.debug.error("Setup failed: no support");
          }
          get isHTML5() {
            return this.provider === _e.html5;
          }
          get isEmbed() {
            return this.isYouTube || this.isVimeo;
          }
          get isYouTube() {
            return this.provider === _e.youtube;
          }
          get isVimeo() {
            return this.provider === _e.vimeo;
          }
          get isVideo() {
            return this.type === je;
          }
          get isAudio() {
            return this.type === Oe;
          }
          get playing() {
            return Boolean(this.ready && !this.paused && !this.ended);
          }
          get paused() {
            return Boolean(this.media.paused);
          }
          get stopped() {
            return Boolean(this.paused && 0 === this.currentTime);
          }
          get ended() {
            return Boolean(this.media.ended);
          }
          set currentTime(e5) {
            if (!this.duration)
              return;
            const t4 = S.number(e5) && e5 > 0;
            this.media.currentTime = t4 ? Math.min(e5, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`);
          }
          get currentTime() {
            return Number(this.media.currentTime);
          }
          get buffered() {
            const { buffered: e5 } = this.media;
            return S.number(e5) ? e5 : e5 && e5.length && this.duration > 0 ? e5.end(0) / this.duration : 0;
          }
          get seeking() {
            return Boolean(this.media.seeking);
          }
          get duration() {
            const e5 = parseFloat(this.config.duration), t4 = (this.media || {}).duration, i4 = S.number(t4) && t4 !== 1 / 0 ? t4 : 0;
            return e5 || i4;
          }
          set volume(e5) {
            let t4 = e5;
            S.string(t4) && (t4 = Number(t4)), S.number(t4) || (t4 = this.storage.get("volume")), S.number(t4) || ({ volume: t4 } = this.config), t4 > 1 && (t4 = 1), t4 < 0 && (t4 = 0), this.config.volume = t4, this.media.volume = t4, !S.empty(e5) && this.muted && t4 > 0 && (this.muted = false);
          }
          get volume() {
            return Number(this.media.volume);
          }
          set muted(e5) {
            let t4 = e5;
            S.boolean(t4) || (t4 = this.storage.get("muted")), S.boolean(t4) || (t4 = this.config.muted), this.config.muted = t4, this.media.muted = t4;
          }
          get muted() {
            return Boolean(this.media.muted);
          }
          get hasAudio() {
            return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)));
          }
          set speed(e5) {
            let t4 = null;
            S.number(e5) && (t4 = e5), S.number(t4) || (t4 = this.storage.get("speed")), S.number(t4) || (t4 = this.config.speed.selected);
            const { minimumSpeed: i4, maximumSpeed: s4 } = this;
            t4 = Ge(t4, i4, s4), this.config.speed.selected = t4, setTimeout(() => {
              this.media && (this.media.playbackRate = t4);
            }, 0);
          }
          get speed() {
            return Number(this.media.playbackRate);
          }
          get minimumSpeed() {
            return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? 0.5 : 0.0625;
          }
          get maximumSpeed() {
            return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
          }
          set quality(e5) {
            const t4 = this.config.quality, i4 = this.options.quality;
            if (!i4.length)
              return;
            let s4 = [!S.empty(e5) && Number(e5), this.storage.get("quality"), t4.selected, t4.default].find(S.number), n4 = true;
            if (!i4.includes(s4)) {
              const e6 = ne(i4, s4);
              this.debug.warn(`Unsupported quality option: ${s4}, using ${e6} instead`), s4 = e6, n4 = false;
            }
            t4.selected = s4, this.media.quality = s4, n4 && this.storage.set({ quality: s4 });
          }
          get quality() {
            return this.media.quality;
          }
          set loop(e5) {
            const t4 = S.boolean(e5) ? e5 : this.config.loop.active;
            this.config.loop.active = t4, this.media.loop = t4;
          }
          get loop() {
            return Boolean(this.media.loop);
          }
          set source(e5) {
            it.change.call(this, e5);
          }
          get source() {
            return this.media.currentSrc;
          }
          get download() {
            const { download: e5 } = this.config.urls;
            return S.url(e5) ? e5 : this.source;
          }
          set download(e5) {
            S.url(e5) && (this.config.urls.download = e5, Pe.setDownloadUrl.call(this));
          }
          set poster(e5) {
            this.isVideo ? Fe.setPoster.call(this, e5, false).catch(() => {
            }) : this.debug.warn("Poster can only be set for video");
          }
          get poster() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
          }
          get ratio() {
            if (!this.isVideo)
              return null;
            const e5 = oe(ce.call(this));
            return S.array(e5) ? e5.join(":") : e5;
          }
          set ratio(e5) {
            this.isVideo ? S.string(e5) && re(e5) ? (this.config.ratio = oe(e5), ue.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e5})`) : this.debug.warn("Aspect ratio can only be set for video");
          }
          set autoplay(e5) {
            this.config.autoplay = S.boolean(e5) ? e5 : this.config.autoplay;
          }
          get autoplay() {
            return Boolean(this.config.autoplay);
          }
          toggleCaptions(e5) {
            xe.toggle.call(this, e5, false);
          }
          set currentTrack(e5) {
            xe.set.call(this, e5, false), xe.setup.call(this);
          }
          get currentTrack() {
            const { toggled: e5, currentTrack: t4 } = this.captions;
            return e5 ? t4 : -1;
          }
          set language(e5) {
            xe.setLanguage.call(this, e5, false);
          }
          get language() {
            return (xe.getCurrentTrack.call(this) || {}).language;
          }
          set pip(e5) {
            if (!K.pip)
              return;
            const t4 = S.boolean(e5) ? e5 : !this.pip;
            S.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t4 ? Ie : $e), S.function(this.media.requestPictureInPicture) && (!this.pip && t4 ? this.media.requestPictureInPicture() : this.pip && !t4 && document.exitPictureInPicture());
          }
          get pip() {
            return K.pip ? S.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ie : null;
          }
          setPreviewThumbnails(e5) {
            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e5), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this));
          }
          static supported(e5, t4) {
            return K.check(e5, t4);
          }
          static loadSprite(e5, t4) {
            return ke(e5, t4);
          }
          static setup(e5, t4 = {}) {
            let i4 = null;
            return S.string(e5) ? i4 = Array.from(document.querySelectorAll(e5)) : S.nodeList(e5) ? i4 = Array.from(e5) : S.array(e5) && (i4 = e5.filter(S.element)), S.empty(i4) ? null : i4.map((e6) => new st(e6, t4));
          }
        }
        var nt;
        return st.defaults = (nt = Le, JSON.parse(JSON.stringify(nt))), st;
      });
    }
  });

  // src/index.ts
  init_live_reload();

  // node_modules/.pnpm/locomotive-scroll@5.0.0-beta.13/node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs
  init_live_reload();

  // node_modules/.pnpm/lenis@1.0.45/node_modules/lenis/dist/lenis.mjs
  init_live_reload();
  var __assign = function() {
    return __assign = Object.assign || function __assign2(t3) {
      for (var e4, i3 = 1, o2 = arguments.length; i3 < o2; i3++)
        for (var s3 in e4 = arguments[i3])
          Object.prototype.hasOwnProperty.call(e4, s3) && (t3[s3] = e4[s3]);
      return t3;
    }, __assign.apply(this, arguments);
  };
  function clamp(t3, e4, i3) {
    return Math.max(t3, Math.min(e4, i3));
  }
  var Animate = class {
    advance(t3) {
      if (!this.isRunning)
        return;
      let e4 = false;
      if (this.lerp)
        this.value = function damp(t4, e5, i3, o2) {
          return function lerp(t5, e6, i4) {
            return (1 - i4) * t5 + i4 * e6;
          }(t4, e5, 1 - Math.exp(-i3 * o2));
        }(this.value, this.to, 60 * this.lerp, t3), Math.round(this.value) === this.to && (this.value = this.to, e4 = true);
      else {
        this.currentTime += t3;
        const i3 = clamp(0, this.currentTime / this.duration, 1);
        e4 = i3 >= 1;
        const o2 = e4 ? 1 : this.easing(i3);
        this.value = this.from + (this.to - this.from) * o2;
      }
      e4 && this.stop(), this.onUpdate?.(this.value, e4);
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(t3, e4, { lerp: i3 = 0.1, duration: o2 = 1, easing: s3 = (t4) => t4, onStart: n3, onUpdate: r2 }) {
      this.from = this.value = t3, this.to = e4, this.lerp = i3, this.duration = o2, this.easing = s3, this.currentTime = 0, this.isRunning = true, n3?.(), this.onUpdate = r2;
    }
  };
  var Dimensions = class {
    constructor({ wrapper: t3, content: e4, autoResize: i3 = true, debounce: o2 = 250 } = {}) {
      this.wrapper = t3, this.content = e4, i3 && (this.debouncedResize = /* @__PURE__ */ function debounce(t4, e5) {
        let i4;
        return function() {
          let o3 = arguments, s3 = this;
          clearTimeout(i4), i4 = setTimeout(function() {
            t4.apply(s3, o3);
          }, e5);
        };
      }(this.resize, o2), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, false) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
      this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), window.removeEventListener("resize", this.debouncedResize, false);
    }
    resize = () => {
      this.onWrapperResize(), this.onContentResize();
    };
    onWrapperResize = () => {
      this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    };
    onContentResize = () => {
      this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    };
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  };
  var Emitter = class {
    constructor() {
      this.events = {};
    }
    emit(t3, ...e4) {
      let i3 = this.events[t3] || [];
      for (let t4 = 0, o2 = i3.length; t4 < o2; t4++)
        i3[t4](...e4);
    }
    on(t3, e4) {
      return this.events[t3]?.push(e4) || (this.events[t3] = [e4]), () => {
        this.events[t3] = this.events[t3]?.filter((t4) => e4 !== t4);
      };
    }
    off(t3, e4) {
      this.events[t3] = this.events[t3]?.filter((t4) => e4 !== t4);
    }
    destroy() {
      this.events = {};
    }
  };
  var t = 100 / 6;
  var VirtualScroll = class {
    constructor(t3, { wheelMultiplier: e4 = 1, touchMultiplier: i3 = 1 }) {
      this.element = t3, this.wheelMultiplier = e4, this.touchMultiplier = i3, this.touchStart = { x: null, y: null }, this.emitter = new Emitter(), window.addEventListener("resize", this.onWindowResize, false), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, { passive: false }), this.element.addEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.addEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.addEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    on(t3, e4) {
      return this.emitter.on(t3, e4);
    }
    destroy() {
      this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, false), this.element.removeEventListener("wheel", this.onWheel, { passive: false }), this.element.removeEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.removeEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.removeEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    onTouchStart = (t3) => {
      const { clientX: e4, clientY: i3 } = t3.targetTouches ? t3.targetTouches[0] : t3;
      this.touchStart.x = e4, this.touchStart.y = i3, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t3 });
    };
    onTouchMove = (t3) => {
      const { clientX: e4, clientY: i3 } = t3.targetTouches ? t3.targetTouches[0] : t3, o2 = -(e4 - this.touchStart.x) * this.touchMultiplier, s3 = -(i3 - this.touchStart.y) * this.touchMultiplier;
      this.touchStart.x = e4, this.touchStart.y = i3, this.lastDelta = { x: o2, y: s3 }, this.emitter.emit("scroll", { deltaX: o2, deltaY: s3, event: t3 });
    };
    onTouchEnd = (t3) => {
      this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t3 });
    };
    onWheel = (e4) => {
      let { deltaX: i3, deltaY: o2, deltaMode: s3 } = e4;
      i3 *= 1 === s3 ? t : 2 === s3 ? this.windowWidth : 1, o2 *= 1 === s3 ? t : 2 === s3 ? this.windowHeight : 1, i3 *= this.wheelMultiplier, o2 *= this.wheelMultiplier, this.emitter.emit("scroll", { deltaX: i3, deltaY: o2, event: e4 });
    };
    onWindowResize = () => {
      this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
    };
  };
  var e = function() {
    function Lenis(t3) {
      var e4 = void 0 === t3 ? {} : t3, i3 = e4.wrapper, o2 = void 0 === i3 ? window : i3, s3 = e4.content, n3 = void 0 === s3 ? document.documentElement : s3, r2 = e4.wheelEventsTarget, l2 = void 0 === r2 ? o2 : r2, h2 = e4.eventsTarget, a2 = void 0 === h2 ? l2 : h2, c2 = e4.smoothWheel, p = void 0 === c2 || c2, u = e4.syncTouch, d = void 0 !== u && u, m = e4.syncTouchLerp, v = void 0 === m ? 0.075 : m, g = e4.touchInertiaMultiplier, f = void 0 === g ? 35 : g, S = e4.duration, w = e4.easing, y = void 0 === w ? function(t4) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t4));
      } : w, b = e4.lerp, L = void 0 === b ? !S && 0.1 : b, _ = e4.infinite, z = void 0 !== _ && _, E = e4.orientation, T = void 0 === E ? "vertical" : E, M = e4.gestureOrientation, R = void 0 === M ? "vertical" : M, O = e4.touchMultiplier, W = void 0 === O ? 1 : O, x = e4.wheelMultiplier, H = void 0 === x ? 1 : x, N = e4.autoResize, k = void 0 === N || N, C = e4.__experimental__naiveDimensions, j = void 0 !== C && C, P = this;
      this.__isSmooth = false, this.__isScrolling = false, this.__isStopped = false, this.__isLocked = false, this.onVirtualScroll = function(t4) {
        var e5 = t4.deltaX, i4 = t4.deltaY, o3 = t4.event;
        if (!o3.ctrlKey) {
          var s4 = o3.type.includes("touch"), n4 = o3.type.includes("wheel");
          if (P.options.syncTouch && s4 && "touchstart" === o3.type && !P.isStopped && !P.isLocked)
            P.reset();
          else {
            var r3 = 0 === e5 && 0 === i4, l3 = "vertical" === P.options.gestureOrientation && 0 === i4 || "horizontal" === P.options.gestureOrientation && 0 === e5;
            if (!r3 && !l3) {
              var h3 = o3.composedPath();
              if (!(h3 = h3.slice(0, h3.indexOf(P.rootElement))).find(function(t5) {
                var e6, i5, o4, r4, l4;
                return (null === (e6 = t5.hasAttribute) || void 0 === e6 ? void 0 : e6.call(t5, "data-lenis-prevent")) || s4 && (null === (i5 = t5.hasAttribute) || void 0 === i5 ? void 0 : i5.call(t5, "data-lenis-prevent-touch")) || n4 && (null === (o4 = t5.hasAttribute) || void 0 === o4 ? void 0 : o4.call(t5, "data-lenis-prevent-wheel")) || (null === (r4 = t5.classList) || void 0 === r4 ? void 0 : r4.contains("lenis")) && !(null === (l4 = t5.classList) || void 0 === l4 ? void 0 : l4.contains("lenis-stopped"));
              }))
                if (P.isStopped || P.isLocked)
                  o3.preventDefault();
                else {
                  if (P.isSmooth = P.options.syncTouch && s4 || P.options.smoothWheel && n4, !P.isSmooth)
                    return P.isScrolling = false, void P.animate.stop();
                  o3.preventDefault();
                  var a3 = i4;
                  "both" === P.options.gestureOrientation ? a3 = Math.abs(i4) > Math.abs(e5) ? i4 : e5 : "horizontal" === P.options.gestureOrientation && (a3 = e5);
                  var c3 = s4 && P.options.syncTouch, p2 = s4 && "touchend" === o3.type && Math.abs(a3) > 5;
                  p2 && (a3 = P.velocity * P.options.touchInertiaMultiplier), P.scrollTo(P.targetScroll + a3, __assign({ programmatic: false }, c3 ? { lerp: p2 ? P.options.syncTouchLerp : 1 } : { lerp: P.options.lerp, duration: P.options.duration, easing: P.options.easing }));
                }
            }
          }
        }
      }, this.onNativeScroll = function() {
        if (!P.__preventNextScrollEvent && !P.isScrolling) {
          var t4 = P.animatedScroll;
          P.animatedScroll = P.targetScroll = P.actualScroll, P.velocity = 0, P.direction = Math.sign(P.animatedScroll - t4), P.emit();
        }
      }, window.lenisVersion = "1.0.45", o2 !== document.documentElement && o2 !== document.body || (o2 = window), this.options = { wrapper: o2, content: n3, wheelEventsTarget: l2, eventsTarget: a2, smoothWheel: p, syncTouch: d, syncTouchLerp: v, touchInertiaMultiplier: f, duration: S, easing: y, lerp: L, infinite: z, gestureOrientation: R, orientation: T, touchMultiplier: W, wheelMultiplier: H, autoResize: k, __experimental__naiveDimensions: j }, this.animate = new Animate(), this.emitter = new Emitter(), this.dimensions = new Dimensions({ wrapper: o2, content: n3, autoResize: k }), this.toggleClassName("lenis", true), this.velocity = 0, this.isLocked = false, this.isStopped = false, this.isSmooth = d || p, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false), this.virtualScroll = new VirtualScroll(a2, { touchMultiplier: W, wheelMultiplier: H }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    return Lenis.prototype.destroy = function() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", false), this.toggleClassName("lenis-smooth", false), this.toggleClassName("lenis-scrolling", false), this.toggleClassName("lenis-stopped", false), this.toggleClassName("lenis-locked", false);
    }, Lenis.prototype.on = function(t3, e4) {
      return this.emitter.on(t3, e4);
    }, Lenis.prototype.off = function(t3, e4) {
      return this.emitter.off(t3, e4);
    }, Lenis.prototype.setScroll = function(t3) {
      this.isHorizontal ? this.rootElement.scrollLeft = t3 : this.rootElement.scrollTop = t3;
    }, Lenis.prototype.resize = function() {
      this.dimensions.resize();
    }, Lenis.prototype.emit = function() {
      this.emitter.emit("scroll", this);
    }, Lenis.prototype.reset = function() {
      this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop();
    }, Lenis.prototype.start = function() {
      this.isStopped && (this.isStopped = false, this.reset());
    }, Lenis.prototype.stop = function() {
      this.isStopped || (this.isStopped = true, this.animate.stop(), this.reset());
    }, Lenis.prototype.raf = function(t3) {
      var e4 = t3 - (this.time || t3);
      this.time = t3, this.animate.advance(1e-3 * e4);
    }, Lenis.prototype.scrollTo = function(t3, e4) {
      var i3 = this, o2 = void 0 === e4 ? {} : e4, s3 = o2.offset, n3 = void 0 === s3 ? 0 : s3, r2 = o2.immediate, l2 = void 0 !== r2 && r2, h2 = o2.lock, a2 = void 0 !== h2 && h2, c2 = o2.duration, p = void 0 === c2 ? this.options.duration : c2, u = o2.easing, d = void 0 === u ? this.options.easing : u, m = o2.lerp, v = void 0 === m ? !p && this.options.lerp : m, g = o2.onComplete, f = o2.force, S = void 0 !== f && f, w = o2.programmatic, y = void 0 === w || w;
      if (!this.isStopped && !this.isLocked || S) {
        if (["top", "left", "start"].includes(t3))
          t3 = 0;
        else if (["bottom", "right", "end"].includes(t3))
          t3 = this.limit;
        else {
          var b = void 0;
          if ("string" == typeof t3 ? b = document.querySelector(t3) : (null == t3 ? void 0 : t3.nodeType) && (b = t3), b) {
            if (this.options.wrapper !== window) {
              var L = this.options.wrapper.getBoundingClientRect();
              n3 -= this.isHorizontal ? L.left : L.top;
            }
            var _ = b.getBoundingClientRect();
            t3 = (this.isHorizontal ? _.left : _.top) + this.animatedScroll;
          }
        }
        if ("number" == typeof t3) {
          if (t3 += n3, t3 = Math.round(t3), this.options.infinite ? y && (this.targetScroll = this.animatedScroll = this.scroll) : t3 = clamp(0, t3, this.limit), l2)
            return this.animatedScroll = this.targetScroll = t3, this.setScroll(this.scroll), this.reset(), void (null == g || g(this));
          if (!y) {
            if (t3 === this.targetScroll)
              return;
            this.targetScroll = t3;
          }
          this.animate.fromTo(this.animatedScroll, t3, { duration: p, easing: d, lerp: v, onStart: function() {
            a2 && (i3.isLocked = true), i3.isScrolling = true;
          }, onUpdate: function(t4, e5) {
            i3.isScrolling = true, i3.velocity = t4 - i3.animatedScroll, i3.direction = Math.sign(i3.velocity), i3.animatedScroll = t4, i3.setScroll(i3.scroll), y && (i3.targetScroll = t4), e5 || i3.emit(), e5 && (i3.reset(), i3.emit(), null == g || g(i3), i3.__preventNextScrollEvent = true, requestAnimationFrame(function() {
              delete i3.__preventNextScrollEvent;
            }));
          } });
        }
      }
    }, Object.defineProperty(Lenis.prototype, "rootElement", { get: function() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "limit", { get: function() {
      return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isHorizontal", { get: function() {
      return "horizontal" === this.options.orientation;
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "actualScroll", { get: function() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "scroll", { get: function() {
      return this.options.infinite ? function modulo(t3, e4) {
        return (t3 % e4 + e4) % e4;
      }(this.animatedScroll, this.limit) : this.animatedScroll;
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "progress", { get: function() {
      return 0 === this.limit ? 1 : this.scroll / this.limit;
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isSmooth", { get: function() {
      return this.__isSmooth;
    }, set: function(t3) {
      this.__isSmooth !== t3 && (this.__isSmooth = t3, this.toggleClassName("lenis-smooth", t3));
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isScrolling", { get: function() {
      return this.__isScrolling;
    }, set: function(t3) {
      this.__isScrolling !== t3 && (this.__isScrolling = t3, this.toggleClassName("lenis-scrolling", t3));
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isStopped", { get: function() {
      return this.__isStopped;
    }, set: function(t3) {
      this.__isStopped !== t3 && (this.__isStopped = t3, this.toggleClassName("lenis-stopped", t3));
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isLocked", { get: function() {
      return this.__isLocked;
    }, set: function(t3) {
      this.__isLocked !== t3 && (this.__isLocked = t3, this.toggleClassName("lenis-locked", t3));
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "className", { get: function() {
      var t3 = "lenis";
      return this.isStopped && (t3 += " lenis-stopped"), this.isLocked && (t3 += " lenis-locked"), this.isScrolling && (t3 += " lenis-scrolling"), this.isSmooth && (t3 += " lenis-smooth"), t3;
    }, enumerable: false, configurable: true }), Lenis.prototype.toggleClassName = function(t3, e4) {
      this.rootElement.classList.toggle(t3, e4), this.emitter.emit("className change", this);
    }, Lenis;
  }();

  // node_modules/.pnpm/locomotive-scroll@5.0.0-beta.13/node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs
  function s() {
    return s = Object.assign ? Object.assign.bind() : function(t3) {
      for (var s3 = 1; s3 < arguments.length; s3++) {
        var e4 = arguments[s3];
        for (var i3 in e4)
          Object.prototype.hasOwnProperty.call(e4, i3) && (t3[i3] = e4[i3]);
      }
      return t3;
    }, s.apply(this, arguments);
  }
  var e2 = class {
    constructor({ scrollElements: t3, rootMargin: s3 = "-1px -1px -1px -1px", IORaf: e4 }) {
      this.scrollElements = void 0, this.rootMargin = void 0, this.IORaf = void 0, this.observer = void 0, this.scrollElements = t3, this.rootMargin = s3, this.IORaf = e4, this._init();
    }
    _init() {
      this.observer = new IntersectionObserver((t3) => {
        t3.forEach((t4) => {
          const s3 = this.scrollElements.find((s4) => s4.$el === t4.target);
          t4.isIntersecting ? (s3 && (s3.isAlreadyIntersected = true), this._setInview(t4)) : s3 && s3.isAlreadyIntersected && this._setOutOfView(t4);
        });
      }, { rootMargin: this.rootMargin });
      for (const t3 of this.scrollElements)
        this.observe(t3.$el);
    }
    destroy() {
      this.observer.disconnect();
    }
    observe(t3) {
      t3 && this.observer.observe(t3);
    }
    unobserve(t3) {
      t3 && this.observer.unobserve(t3);
    }
    _setInview(t3) {
      const s3 = this.scrollElements.find((s4) => s4.$el === t3.target);
      this.IORaf && (null == s3 || s3.setInteractivityOn()), !this.IORaf && (null == s3 || s3.setInview());
    }
    _setOutOfView(t3) {
      const s3 = this.scrollElements.find((s4) => s4.$el === t3.target);
      this.IORaf && (null == s3 || s3.setInteractivityOff()), !this.IORaf && (null == s3 || s3.setOutOfView()), null != s3 && s3.attributes.scrollRepeat || this.IORaf || this.unobserve(t3.target);
    }
  };
  function i(t3, s3, e4, i3, r2) {
    return e4 + ((r2 - t3) / (s3 - t3) * (i3 - e4) || 0);
  }
  function r(t3, s3) {
    return t3.reduce((t4, e4) => Math.abs(e4 - s3) < Math.abs(t4 - s3) ? e4 : t4);
  }
  var l = class {
    constructor({ $el: t3, id: s3, modularInstance: e4, subscribeElementUpdateFn: i3, unsubscribeElementUpdateFn: r2, needRaf: l2, scrollOrientation: n3 }) {
      var o2, a2, c2, h2, d;
      this.$el = void 0, this.id = void 0, this.needRaf = void 0, this.attributes = void 0, this.scrollOrientation = void 0, this.isAlreadyIntersected = void 0, this.intersection = void 0, this.metrics = void 0, this.currentScroll = void 0, this.translateValue = void 0, this.progress = void 0, this.lastProgress = void 0, this.modularInstance = void 0, this.progressModularModules = void 0, this.isInview = void 0, this.isInteractive = void 0, this.isInFold = void 0, this.isFirstResize = void 0, this.subscribeElementUpdateFn = void 0, this.unsubscribeElementUpdateFn = void 0, this.$el = t3, this.id = s3, this.needRaf = l2, this.scrollOrientation = n3, this.modularInstance = e4, this.subscribeElementUpdateFn = i3, this.unsubscribeElementUpdateFn = r2, this.attributes = { scrollClass: null != (o2 = this.$el.dataset.scrollClass) ? o2 : "is-inview", scrollOffset: null != (a2 = this.$el.dataset.scrollOffset) ? a2 : "0,0", scrollPosition: null != (c2 = this.$el.dataset.scrollPosition) ? c2 : "start,end", scrollModuleProgress: null != this.$el.dataset.scrollModuleProgress, scrollCssProgress: null != this.$el.dataset.scrollCssProgress, scrollEventProgress: null != (h2 = this.$el.dataset.scrollEventProgress) ? h2 : null, scrollSpeed: null != this.$el.dataset.scrollSpeed ? parseFloat(this.$el.dataset.scrollSpeed) : null, scrollRepeat: null != this.$el.dataset.scrollRepeat, scrollCall: null != (d = this.$el.dataset.scrollCall) ? d : null, scrollCallSelf: null != this.$el.dataset.scrollCallSelf, scrollIgnoreFold: null != this.$el.dataset.scrollIgnoreFold, scrollEnableTouchSpeed: null != this.$el.dataset.scrollEnableTouchSpeed }, this.intersection = { start: 0, end: 0 }, this.metrics = { offsetStart: 0, offsetEnd: 0, bcr: {} }, this.currentScroll = "vertical" === this.scrollOrientation ? window.scrollY : window.scrollX, this.translateValue = 0, this.progress = 0, this.lastProgress = null, this.progressModularModules = [], this.isInview = false, this.isInteractive = false, this.isAlreadyIntersected = false, this.isInFold = false, this.isFirstResize = true, this._init();
    }
    _init() {
      this.needRaf && (this.modularInstance && this.attributes.scrollModuleProgress && this._getProgressModularModules(), this._resize());
    }
    onResize({ currentScroll: t3 }) {
      this.currentScroll = t3, this._resize();
    }
    onRender({ currentScroll: t3, smooth: s3 }) {
      const e4 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth;
      if (this.currentScroll = t3, this._computeProgress(), this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed))
        if (this.attributes.scrollEnableTouchSpeed || s3) {
          if (this.isInFold) {
            const t4 = Math.max(0, this.progress);
            this.translateValue = t4 * e4 * this.attributes.scrollSpeed * -1;
          } else {
            const t4 = i(0, 1, -1, 1, this.progress);
            this.translateValue = t4 * e4 * this.attributes.scrollSpeed * -1;
          }
          this.$el.style.transform = "vertical" === this.scrollOrientation ? `translate3d(0, ${this.translateValue}px, 0)` : `translate3d(${this.translateValue}px, 0, 0)`;
        } else
          this.translateValue && (this.$el.style.transform = "translate3d(0, 0, 0)"), this.translateValue = 0;
    }
    setInview() {
      if (this.isInview)
        return;
      this.isInview = true, this.$el.classList.add(this.attributes.scrollClass);
      const t3 = this._getScrollCallFrom();
      this.attributes.scrollCall && this._dispatchCall("enter", t3);
    }
    setOutOfView() {
      if (!this.isInview || !this.attributes.scrollRepeat)
        return;
      this.isInview = false, this.$el.classList.remove(this.attributes.scrollClass);
      const t3 = this._getScrollCallFrom();
      this.attributes.scrollCall && this._dispatchCall("leave", t3);
    }
    setInteractivityOn() {
      this.isInteractive || (this.isInteractive = true, this.subscribeElementUpdateFn(this));
    }
    setInteractivityOff() {
      this.isInteractive && (this.isInteractive = false, this.unsubscribeElementUpdateFn(this), null != this.lastProgress && this._computeProgress(r([0, 1], this.lastProgress)));
    }
    _resize() {
      this.metrics.bcr = this.$el.getBoundingClientRect(), this._computeMetrics(), this._computeIntersection(), this.isFirstResize && (this.isFirstResize = false, this.isInFold && this.setInview());
    }
    _computeMetrics() {
      const { top: t3, left: s3, height: e4, width: i3 } = this.metrics.bcr, r2 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, l2 = "vertical" === this.scrollOrientation ? e4 : i3;
      this.metrics.offsetStart = this.currentScroll + ("vertical" === this.scrollOrientation ? t3 : s3) - this.translateValue, this.metrics.offsetEnd = this.metrics.offsetStart + l2, this.isInFold = this.metrics.offsetStart < r2 && !this.attributes.scrollIgnoreFold;
    }
    _computeIntersection() {
      const t3 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, s3 = "vertical" === this.scrollOrientation ? this.metrics.bcr.height : this.metrics.bcr.width, e4 = this.attributes.scrollOffset.split(","), i3 = null != e4[0] ? e4[0].trim() : "0", r2 = null != e4[1] ? e4[1].trim() : "0", l2 = this.attributes.scrollPosition.split(",");
      let n3 = null != l2[0] ? l2[0].trim() : "start";
      const o2 = null != l2[1] ? l2[1].trim() : "end", a2 = i3.includes("%") ? t3 * parseInt(i3.replace("%", "").trim()) * 0.01 : parseInt(i3), c2 = r2.includes("%") ? t3 * parseInt(r2.replace("%", "").trim()) * 0.01 : parseInt(r2);
      switch (this.isInFold && (n3 = "fold"), n3) {
        case "start":
        default:
          this.intersection.start = this.metrics.offsetStart - t3 + a2;
          break;
        case "middle":
          this.intersection.start = this.metrics.offsetStart - t3 + a2 + 0.5 * s3;
          break;
        case "end":
          this.intersection.start = this.metrics.offsetStart - t3 + a2 + s3;
          break;
        case "fold":
          this.intersection.start = 0;
      }
      switch (o2) {
        case "start":
          this.intersection.end = this.metrics.offsetStart - c2;
          break;
        case "middle":
          this.intersection.end = this.metrics.offsetStart - c2 + 0.5 * s3;
          break;
        default:
          this.intersection.end = this.metrics.offsetStart - c2 + s3;
      }
      if (this.intersection.end <= this.intersection.start)
        switch (o2) {
          case "start":
          default:
            this.intersection.end = this.intersection.start + 1;
            break;
          case "middle":
            this.intersection.end = this.intersection.start + 0.5 * s3;
            break;
          case "end":
            this.intersection.end = this.intersection.start + s3;
        }
    }
    _computeProgress(t3) {
      const s3 = null != t3 ? t3 : (e4 = i(this.intersection.start, this.intersection.end, 0, 1, this.currentScroll)) < 0 ? 0 : e4 > 1 ? 1 : e4;
      var e4;
      if (this.progress = s3, s3 != this.lastProgress) {
        if (this.lastProgress = s3, this.attributes.scrollCssProgress && this._setCssProgress(s3), this.attributes.scrollEventProgress && this._setCustomEventProgress(s3), this.attributes.scrollModuleProgress)
          for (const t4 of this.progressModularModules)
            this.modularInstance && this.modularInstance.call("onScrollProgress", s3, t4.moduleName, t4.moduleId);
        s3 > 0 && s3 < 1 && this.setInview(), 0 === s3 && this.setOutOfView(), 1 === s3 && this.setOutOfView();
      }
    }
    _setCssProgress(t3 = 0) {
      this.$el.style.setProperty("--progress", t3.toString());
    }
    _setCustomEventProgress(t3 = 0) {
      const s3 = this.attributes.scrollEventProgress;
      if (!s3)
        return;
      const e4 = new CustomEvent(s3, { detail: { target: this.$el, progress: t3 } });
      window.dispatchEvent(e4);
    }
    _getProgressModularModules() {
      if (!this.modularInstance)
        return;
      const t3 = Object.keys(this.$el.dataset).filter((t4) => t4.includes("module")), s3 = Object.entries(this.modularInstance.modules);
      if (t3.length)
        for (const e4 of t3) {
          const t4 = this.$el.dataset[e4];
          if (!t4)
            return;
          for (const e5 of s3) {
            const [s4, i3] = e5;
            t4 in i3 && this.progressModularModules.push({ moduleName: s4, moduleId: t4 });
          }
        }
    }
    _getScrollCallFrom() {
      const t3 = r([this.intersection.start, this.intersection.end], this.currentScroll);
      return this.intersection.start === t3 ? "start" : "end";
    }
    _dispatchCall(t3, s3) {
      var e4, i3;
      const r2 = null == (e4 = this.attributes.scrollCall) ? void 0 : e4.split(","), l2 = null == (i3 = this.attributes) ? void 0 : i3.scrollCallSelf;
      if (r2 && r2.length > 1) {
        var n3;
        const [e5, i4, o2] = r2;
        let a2;
        a2 = l2 ? this.$el.dataset[`module${i4.trim()}`] : o2, this.modularInstance && this.modularInstance.call(e5.trim(), { target: this.$el, way: t3, from: s3 }, i4.trim(), null == (n3 = a2) ? void 0 : n3.trim());
      } else if (r2) {
        const [e5] = r2, i4 = new CustomEvent(e5, { detail: { target: this.$el, way: t3, from: s3 } });
        window.dispatchEvent(i4);
      }
    }
  };
  var n = ["scrollOffset", "scrollPosition", "scrollModuleProgress", "scrollCssProgress", "scrollEventProgress", "scrollSpeed"];
  var o = class {
    constructor({ $el: t3, modularInstance: s3, triggerRootMargin: e4, rafRootMargin: i3, scrollOrientation: r2 }) {
      this.$scrollContainer = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.scrollElements = void 0, this.triggeredScrollElements = void 0, this.RAFScrollElements = void 0, this.scrollElementsToUpdate = void 0, this.IOTriggerInstance = void 0, this.IORafInstance = void 0, this.scrollOrientation = void 0, t3 ? (this.$scrollContainer = t3, this.modularInstance = s3, this.scrollOrientation = r2, this.triggerRootMargin = null != e4 ? e4 : "-1px -1px -1px -1px", this.rafRootMargin = null != i3 ? i3 : "100% 100% 100% 100%", this.scrollElements = [], this.triggeredScrollElements = [], this.RAFScrollElements = [], this.scrollElementsToUpdate = [], this._init()) : console.error("Please provide a DOM Element as scrollContainer");
    }
    _init() {
      const t3 = this.$scrollContainer.querySelectorAll("[data-scroll]"), s3 = Array.from(t3);
      this._subscribeScrollElements(s3), this.IOTriggerInstance = new e2({ scrollElements: [...this.triggeredScrollElements], rootMargin: this.triggerRootMargin, IORaf: false }), this.IORafInstance = new e2({ scrollElements: [...this.RAFScrollElements], rootMargin: this.rafRootMargin, IORaf: true });
    }
    destroy() {
      this.IOTriggerInstance.destroy(), this.IORafInstance.destroy(), this._unsubscribeAllScrollElements();
    }
    onResize({ currentScroll: t3 }) {
      for (const s3 of this.RAFScrollElements)
        s3.onResize({ currentScroll: t3 });
    }
    onRender({ currentScroll: t3, smooth: s3 }) {
      for (const e4 of this.scrollElementsToUpdate)
        e4.onRender({ currentScroll: t3, smooth: s3 });
    }
    removeScrollElements(t3) {
      const s3 = t3.querySelectorAll("[data-scroll]");
      if (s3.length) {
        for (let t4 = 0; t4 < this.triggeredScrollElements.length; t4++) {
          const e4 = this.triggeredScrollElements[t4];
          Array.from(s3).indexOf(e4.$el) > -1 && (this.IOTriggerInstance.unobserve(e4.$el), this.triggeredScrollElements.splice(t4, 1));
        }
        for (let t4 = 0; t4 < this.RAFScrollElements.length; t4++) {
          const e4 = this.RAFScrollElements[t4];
          Array.from(s3).indexOf(e4.$el) > -1 && (this.IORafInstance.unobserve(e4.$el), this.RAFScrollElements.splice(t4, 1));
        }
        s3.forEach((t4) => {
          const s4 = this.scrollElementsToUpdate.find((s5) => s5.$el === t4), e4 = this.scrollElements.find((s5) => s5.$el === t4);
          s4 && this._unsubscribeElementUpdate(s4), e4 && (this.scrollElements = this.scrollElements.filter((t5) => t5.id != e4.id));
        });
      }
    }
    addScrollElements(t3) {
      const s3 = t3.querySelectorAll("[data-scroll]"), e4 = [];
      this.scrollElements.forEach((t4) => {
        e4.push(t4.id);
      });
      const i3 = Math.max(...e4) + 1, r2 = Array.from(s3);
      this._subscribeScrollElements(r2, i3, true);
    }
    _subscribeScrollElements(t3, s3 = 0, e4 = false) {
      for (let i3 = 0; i3 < t3.length; i3++) {
        const r2 = t3[i3], n3 = this._checkRafNeeded(r2), o2 = new l({ $el: r2, id: s3 + i3, scrollOrientation: this.scrollOrientation, modularInstance: this.modularInstance, subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this), unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this), needRaf: n3 });
        this.scrollElements.push(o2), n3 ? (this.RAFScrollElements.push(o2), e4 && (this.IORafInstance.scrollElements.push(o2), this.IORafInstance.observe(o2.$el))) : (this.triggeredScrollElements.push(o2), e4 && (this.IOTriggerInstance.scrollElements.push(o2), this.IOTriggerInstance.observe(o2.$el)));
      }
    }
    _unsubscribeAllScrollElements() {
      this.scrollElements = [], this.RAFScrollElements = [], this.triggeredScrollElements = [], this.scrollElementsToUpdate = [];
    }
    _subscribeElementUpdate(t3) {
      this.scrollElementsToUpdate.push(t3);
    }
    _unsubscribeElementUpdate(t3) {
      this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter((s3) => s3.id != t3.id);
    }
    _checkRafNeeded(t3) {
      let s3 = [...n];
      const e4 = (t4) => {
        s3 = s3.filter((s4) => s4 != t4);
      };
      if (t3.dataset.scrollOffset) {
        if ("0,0" != t3.dataset.scrollOffset.split(",").map((t4) => t4.replace("%", "").trim()).join(","))
          return true;
        e4("scrollOffset");
      } else
        e4("scrollOffset");
      if (t3.dataset.scrollPosition) {
        if ("top,bottom" != t3.dataset.scrollPosition.trim())
          return true;
        e4("scrollPosition");
      } else
        e4("scrollPosition");
      if (t3.dataset.scrollSpeed && !isNaN(parseFloat(t3.dataset.scrollSpeed)))
        return true;
      e4("scrollSpeed");
      for (const e5 of s3)
        if (e5 in t3.dataset)
          return true;
      return false;
    }
  };
  var a = class {
    constructor({ resizeElements: t3, resizeCallback: s3 = () => {
    } }) {
      this.$resizeElements = void 0, this.isFirstObserve = void 0, this.observer = void 0, this.resizeCallback = void 0, this.$resizeElements = t3, this.resizeCallback = s3, this.isFirstObserve = true, this._init();
    }
    _init() {
      this.observer = new ResizeObserver((t3) => {
        var s3;
        !this.isFirstObserve && (null == (s3 = this.resizeCallback) || s3.call(this)), this.isFirstObserve = false;
      });
      for (const t3 of this.$resizeElements)
        this.observer.observe(t3);
    }
    destroy() {
      this.observer.disconnect();
    }
  };
  var c = { wrapper: window, content: document.documentElement, wheelEventsTarget: window, eventsTarget: window, smoothWheel: true, syncTouch: false, syncTouchLerp: 0.075, touchInertiaMultiplier: 35, duration: 0.75, easing: (t3) => Math.min(1, 1.001 - Math.pow(2, -10 * t3)), lerp: 0.1, infinite: false, orientation: "vertical", gestureOrientation: "vertical", touchMultiplier: 1, wheelMultiplier: 1, autoResize: true };
  var h = class {
    constructor({ lenisOptions: t3 = {}, modularInstance: e4, triggerRootMargin: i3, rafRootMargin: r2, autoResize: l2 = true, autoStart: n3 = true, scrollCallback: o2 = () => {
    }, initCustomTicker: a2, destroyCustomTicker: h2 } = {}) {
      this.rafPlaying = void 0, this.lenisInstance = void 0, this.coreInstance = void 0, this.lenisOptions = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.rafInstance = void 0, this.autoResize = void 0, this.autoStart = void 0, this.ROInstance = void 0, this.initCustomTicker = void 0, this.destroyCustomTicker = void 0, this._onRenderBind = void 0, this._onResizeBind = void 0, this._onScrollToBind = void 0, this.lenisOptions = s({}, c, t3), Object.assign(this, { lenisOptions: t3, modularInstance: e4, triggerRootMargin: i3, rafRootMargin: r2, autoResize: l2, autoStart: n3, scrollCallback: o2, initCustomTicker: a2, destroyCustomTicker: h2 }), this._onRenderBind = this._onRender.bind(this), this._onScrollToBind = this._onScrollTo.bind(this), this._onResizeBind = this._onResize.bind(this), this.rafPlaying = false, this._init();
    }
    _init() {
      var s3;
      this.lenisInstance = new e({ wrapper: this.lenisOptions.wrapper, content: this.lenisOptions.content, eventsTarget: this.lenisOptions.eventsTarget, lerp: this.lenisOptions.lerp, duration: this.lenisOptions.duration, orientation: this.lenisOptions.orientation, gestureOrientation: this.lenisOptions.gestureOrientation, smoothWheel: this.lenisOptions.smoothWheel, syncTouch: this.lenisOptions.syncTouch, syncTouchLerp: this.lenisOptions.syncTouchLerp, touchInertiaMultiplier: this.lenisOptions.touchInertiaMultiplier, wheelMultiplier: this.lenisOptions.wheelMultiplier, touchMultiplier: this.lenisOptions.touchMultiplier, easing: this.lenisOptions.easing }), null == (s3 = this.lenisInstance) || s3.on("scroll", this.scrollCallback), document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation), requestAnimationFrame(() => {
        this.coreInstance = new o({ $el: this.lenisInstance.rootElement, modularInstance: this.modularInstance, triggerRootMargin: this.triggerRootMargin, rafRootMargin: this.rafRootMargin, scrollOrientation: this.lenisInstance.options.orientation }), this._bindEvents(), this.initCustomTicker && !this.destroyCustomTicker ? console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.") : !this.initCustomTicker && this.destroyCustomTicker && console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."), this.autoStart && this.start();
      });
    }
    destroy() {
      var t3;
      this.stop(), this._unbindEvents(), this.lenisInstance.destroy(), null == (t3 = this.coreInstance) || t3.destroy(), requestAnimationFrame(() => {
        var t4;
        null == (t4 = this.coreInstance) || t4.destroy();
      });
    }
    _bindEvents() {
      this._bindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance = new a({ resizeElements: [document.body], resizeCallback: this._onResizeBind }) : window.addEventListener("resize", this._onResizeBind));
    }
    _unbindEvents() {
      this._unbindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance && this.ROInstance.destroy() : window.removeEventListener("resize", this._onResizeBind));
    }
    _bindScrollToEvents(t3) {
      const s3 = t3 || this.lenisInstance.rootElement, e4 = null == s3 ? void 0 : s3.querySelectorAll("[data-scroll-to]");
      (null == e4 ? void 0 : e4.length) && e4.forEach((t4) => {
        t4.addEventListener("click", this._onScrollToBind, false);
      });
    }
    _unbindScrollToEvents(t3) {
      const s3 = t3 || this.lenisInstance.rootElement, e4 = null == s3 ? void 0 : s3.querySelectorAll("[data-scroll-to]");
      (null == e4 ? void 0 : e4.length) && e4.forEach((t4) => {
        t4.removeEventListener("click", this._onScrollToBind, false);
      });
    }
    _onResize() {
      requestAnimationFrame(() => {
        var t3;
        null == (t3 = this.coreInstance) || t3.onResize({ currentScroll: this.lenisInstance.scroll });
      });
    }
    _onRender() {
      var t3, s3;
      null == (t3 = this.lenisInstance) || t3.raf(Date.now()), null == (s3 = this.coreInstance) || s3.onRender({ currentScroll: this.lenisInstance.scroll, smooth: this.lenisInstance.isSmooth });
    }
    _onScrollTo(t3) {
      var s3;
      t3.preventDefault();
      const e4 = null != (s3 = t3.currentTarget) ? s3 : null;
      if (!e4)
        return;
      const i3 = e4.getAttribute("data-scroll-to-href") || e4.getAttribute("href"), r2 = e4.getAttribute("data-scroll-to-offset") || 0, l2 = e4.getAttribute("data-scroll-to-duration") || this.lenisOptions.duration || c.duration;
      i3 && this.scrollTo(i3, { offset: "string" == typeof r2 ? parseInt(r2) : r2, duration: "string" == typeof l2 ? parseInt(l2) : l2 });
    }
    start() {
      var t3;
      this.rafPlaying || (null == (t3 = this.lenisInstance) || t3.start(), this.rafPlaying = true, this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf());
    }
    stop() {
      var t3;
      this.rafPlaying && (null == (t3 = this.lenisInstance) || t3.stop(), this.rafPlaying = false, this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance));
    }
    removeScrollElements(t3) {
      var s3;
      t3 ? (this._unbindScrollToEvents(t3), null == (s3 = this.coreInstance) || s3.removeScrollElements(t3)) : console.error("Please provide a DOM Element as $oldContainer");
    }
    addScrollElements(t3) {
      var s3;
      t3 ? (null == (s3 = this.coreInstance) || s3.addScrollElements(t3), requestAnimationFrame(() => {
        this._bindScrollToEvents(t3);
      })) : console.error("Please provide a DOM Element as $newContainer");
    }
    resize() {
      this._onResizeBind();
    }
    scrollTo(t3, s3) {
      var e4;
      null == (e4 = this.lenisInstance) || e4.scrollTo(t3, { offset: null == s3 ? void 0 : s3.offset, lerp: null == s3 ? void 0 : s3.lerp, duration: null == s3 ? void 0 : s3.duration, immediate: null == s3 ? void 0 : s3.immediate, lock: null == s3 ? void 0 : s3.lock, force: null == s3 ? void 0 : s3.force, easing: null == s3 ? void 0 : s3.easing, onComplete: null == s3 ? void 0 : s3.onComplete });
    }
    _raf() {
      this._onRenderBind(), this.rafInstance = requestAnimationFrame(() => this._raf());
    }
  };

  // src/utils/curso-modules.ts
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/index.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/gsap-core.js
  init_live_reload();
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i3;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i3 = _harnessPlugins.length;
      while (i3-- && !_harnessPlugins[i3].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i3];
    }
    i3 = targets.length;
    while (i3--) {
      targets[i3] && (targets[i3]._gsap || (targets[i3]._gsap = new GSCache(targets[i3], harnessPlugin))) || targets.splice(i3, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l2 = toFind.length, i3 = 0;
    for (; toSearch.indexOf(toFind[i3]) < 0 && ++i3 < l2; ) {
    }
    return i3 < l2;
  };
  var _lazyRender = function _lazyRender2() {
    var l2 = _lazyTweens.length, a2 = _lazyTweens.slice(0), i3, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i3 = 0; i3 < l2; i3++) {
      tween = a2[i3];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n3 = parseFloat(value);
    return (n3 || n3 === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n3 : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p) {
    return p;
  };
  var _setDefaults = function _setDefaults2(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults2) {
      for (var p in defaults2) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i3 = a1.length, match = i3 === a2.length;
    while (match && i3-- && a1[i3] === a2[i3]) {
    }
    return i3 < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t3;
    if (sortBy) {
      t3 = child[sortBy];
      while (prev && prev[sortBy] > t3) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a2 = animation;
      while (a2) {
        a2._dirty = 1;
        a2 = a2.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t3;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t3 = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t3) - child._tTime > _tinyNum) {
        child.render(t3, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t3 = timeline2;
        while (t3._dp) {
          t3.rawTime() >= 0 && t3.totalTime(t3._tTime);
          t3 = t3._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i3, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i3 = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i3 >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i3 < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i3 < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i3 - 1) + position.substr(i3 + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i3 > 1 ? _parsePosition2(animation, position.substr(0, i3 - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  };
  var clamp2 = function clamp3(min, max, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp(min, max, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a2) {
    return a2.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i3, target, a2) {
      var l2 = (a2 || vars).length, distances = cache[l2], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a2[wrapAt++].getBoundingClientRect().left) && wrapAt < l2) {
          }
          wrapAt < l2 && wrapAt--;
        }
        distances = cache[l2] = [];
        originX = ratios ? Math.min(wrapAt, l2) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l2 * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l2; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l2 = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l2 ? l2 - 1 : !axis ? Math.max(wrapAt, l2 / wrapAt) : axis === "y" ? l2 / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l2 < 0 ? base - l2 : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l2 < 0 ? _invertEase(ease) : ease;
      }
      l2 = (distances[i3] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l2) : l2) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n3 = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n3 - n3 % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i3 = snapTo.length, dx, dy;
      while (i3--) {
        if (is2D) {
          dx = snapTo[i3].x - x;
          dy = snapTo[i3].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i3] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i3;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a2, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a2[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s3 = "", i3, nums, end, isArray;
    while (~(i3 = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i3);
      isArray = value.charAt(i3 + 7) === "[";
      nums = value.substr(i3 + 7, end - i3 - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s3 += value.substr(prev, i3 - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s3 + value.substr(prev, value.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p2) {
      return (1 - p2) * start + p2 * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p, i3, interpolators, l2, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l2 = start.length;
        il = l2 - 2;
        for (i3 = 1; i3 < l2; i3++) {
          interpolators.push(interpolate2(start[i3 - 1], start[i3]));
        }
        l2--;
        func = function func2(p2) {
          p2 *= l2;
          var i4 = Math.min(il, ~~p2);
          return interpolators[i4](p2 - i4);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func2(p2) {
          return _renderPropTweens(p2, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (!config3)
      return;
    config3 = !config3.name && config3["default"] || config3;
    if (_windowExists() || config3.headless) {
      var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin.prop = name] = Plugin;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }
      _addGlobal(name, Plugin);
      config3.register && config3.register(gsap, Plugin, PropTween);
    } else {
      _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h2, m1, m2) {
    h2 += h2 < 0 ? 1 : h2 > 1 ? -1 : 0;
    return (h2 * 6 < 1 ? m1 + (m2 - m1) * h2 * 6 : h2 < 0.5 ? m2 : h2 * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h2) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a2 = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r2, g, b, h2, s3, l2, max, min, d, wasHSL;
    if (!a2) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a2 = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r2 = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r2 + r2 + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a2 = parseInt(v.substr(1, 6), 16);
          return [a2 >> 16, a2 >> 8 & _255, a2 & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a2 = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a2 = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h2 = +a2[0] % 360 / 360;
          s3 = +a2[1] / 100;
          l2 = +a2[2] / 100;
          g = l2 <= 0.5 ? l2 * (s3 + 1) : l2 + s3 - l2 * s3;
          r2 = l2 * 2 - g;
          a2.length > 3 && (a2[3] *= 1);
          a2[0] = _hue(h2 + 1 / 3, r2, g);
          a2[1] = _hue(h2, r2, g);
          a2[2] = _hue(h2 - 1 / 3, r2, g);
        } else if (~v.indexOf("=")) {
          a2 = v.match(_numExp);
          forceAlpha && a2.length < 4 && (a2[3] = 1);
          return a2;
        }
      } else {
        a2 = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a2 = a2.map(Number);
    }
    if (toHSL && !wasHSL) {
      r2 = a2[0] / _255;
      g = a2[1] / _255;
      b = a2[2] / _255;
      max = Math.max(r2, g, b);
      min = Math.min(r2, g, b);
      l2 = (max + min) / 2;
      if (max === min) {
        h2 = s3 = 0;
      } else {
        d = max - min;
        s3 = l2 > 0.5 ? d / (2 - max - min) : d / (max + min);
        h2 = max === r2 ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r2) / d + 2 : (r2 - g) / d + 4;
        h2 *= 60;
      }
      a2[0] = ~~(h2 + 0.5);
      a2[1] = ~~(s3 * 100 + 0.5);
      a2[2] = ~~(l2 * 100 + 0.5);
    }
    forceAlpha && a2.length < 4 && (a2[3] = 1);
    return a2;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c2 = [], i3 = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a2 = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a2);
      c2.push(i3 += a2.length + 1);
    });
    values.c = c2;
    return values;
  };
  var _formatColors = function _formatColors2(s3, toHSL, orderMatchData) {
    var result = "", colors = (s3 + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i3 = 0, c2, shell, d, l2;
    if (!colors) {
      return s3;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s3);
      c2 = orderMatchData.c;
      if (c2.join(result) !== d.c.join(result)) {
        shell = s3.replace(_colorExp, "1").split(_numWithUnitExp);
        l2 = shell.length - 1;
        for (; i3 < l2; i3++) {
          result += shell[i3] + (~c2.indexOf(i3) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s3.split(_colorExp);
      l2 = shell.length - 1;
      for (; i3 < l2; i3++) {
        result += shell[i3] + colors[i3];
      }
    }
    return result + shell[l2];
  };
  var _colorExp = function() {
    var s3 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s3 += "|" + p + "\\b";
    }
    return new RegExp(s3 + ")", "gi");
  }();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a2) {
    var combined = a2.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a2[1] = _formatColors(a2[1], toHSL);
      a2[0] = _formatColors(a2[0], toHSL, _colorOrderData(a2[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = function() {
    var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id2, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
      var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id2 = _req(_tick2));
      if (dispatch) {
        for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
          _listeners3[_i2](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _registerPluginQueue.forEach(_createPlugin);
          }
          _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
          _id2 && _self.sleep();
          _req = _raf || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? cancelAnimationFrame : clearTimeout)(_id2);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function(t3, d, f, v) {
          callback(t3, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners3[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i3) {
        ~(i3 = _listeners3.indexOf(callback)) && _listeners3.splice(i3, 1) && _i2 >= i3 && _i2--;
      },
      _listeners: _listeners3
    };
    return _self;
  }();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i3 = 1, l2 = split.length, index, val, parsedVal;
    for (; i3 < l2; i3++) {
      val = split[i3];
      index = i3 !== l2 - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p) {
      return 1 - ease(1 - p);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child = timeline2._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p) {
      return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i3) {
    var power = i3 < 5 ? i3 + 1 : i3;
    _insertEase(name + ",Power" + (power - 1), i3 ? function(p) {
      return Math.pow(p, power);
    } : function(p) {
      return p;
    }, function(p) {
      return 1 - Math.pow(1 - p, power);
    }, function(p) {
      return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n3, c2) {
    var n1 = 1 / c2, n22 = 2 * n1, n32 = 2.5 * n1, easeOut = function easeOut2(p) {
      return p < n1 ? n3 * p * p : p < n22 ? n3 * Math.pow(p - 1.5 / c2, 2) + 0.75 : p < n32 ? n3 * (p -= 2.25 / c2) * p + 0.9375 : n3 * Math.pow(p - 2.625 / c2, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });
  _insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value, suppressEvents) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (this._initted || this._startAt) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (Math.abs(animation._ts) || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self2 = this;
      return new Promise(function(resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self2.then;
          self2.then = null;
          _isFunction(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
          resolve(f);
          self2.then = _then;
        };
        if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
          _resolve();
        } else {
          self2._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a2 = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a2.push(child);
          } else {
            timelines && a2.push(child);
            nested && a2.push.apply(a2, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a2;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i3 = animations.length;
      while (i3--) {
        if (animations[i3].vars.id === id) {
          return animations[i3];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t3 = Tween.delayedCall(0, callback || _emptyFunc, params);
      t3.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t3, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i3 = tweens.length;
      while (i3--) {
        _overwritingTween !== tweens[i3] && tweens[i3].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a2 = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a2.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a2.push.apply(a2, children);
        }
        child = child._next;
      }
      return a2;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
      }
      if (self2._dirty) {
        parent = self2.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self2._sort && child._ts && !self2._lock) {
            self2._lock = 1;
            _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
              self2._start += start / self2._ts;
              self2._time -= start;
              self2._tTime -= start;
            }
            self2.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
        self2._dirty = 0;
      }
      return self2._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a2;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a2 = [start, end];
      stringFilter(a2, target, prop);
      start = a2[0];
      end = a2[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i3;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i3 = plugin._props.length;
        while (i3--) {
          ptLookup[plugin._props[i3]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i3, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate && function() {
            return _callback(tween, "onUpdate");
          },
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i3 = 0; i3 < targets.length; i3++) {
        target = targets[i3];
        gsData = target._gsap || _harness(targets)[i3]._gsap;
        tween._ptLookup[i3] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i3 : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i3] && tween.kill(target, tween._op[i3]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i3;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i3 = tween._targets.length;
      while (i3--) {
        pt = lookup[i3][property];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return skipRecursion ? _warn(property + " not eligible for reset") : 1;
        }
        ptCache.push(pt);
      }
    }
    i3 = ptCache.length;
    while (i3--) {
      rootPT = ptCache[i3];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i3, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i3 = aliases.length;
        while (i3--) {
          copy[aliases[i3]] = copy[p];
        }
      }
    }
    return copy;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a2;
    if (_isArray(obj)) {
      a2 = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i3) {
        return a2.push({
          t: i3 / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a2 = allProps[p] || (allProps[p] = []);
        p === "ease" || a2.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i3, target, targets) {
    return _isFunction(value) ? value.call(tween, i3, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i3, copy, l2, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults2 || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l2 = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i3 = 0; i3 < l2; i3++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i3];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i3, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i3, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l2 === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i3, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a2, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }
            for (p in copy) {
              a2 = copy[p].sort(function(a3, b) {
                return a3.t - b.t;
              });
              time = 0;
              for (i3 = 0; i3 < a2.length; i3++) {
                kf = a2[i3];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i3 ? a2[i3 - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted && iteration === prevIteration) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
        return this.resetTo(property, value, start, startIsRelative, 1);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i3;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function(name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i3 = parsedTargets.length;
      while (i3--) {
        if (~killingTargets.indexOf(parsedTargets[i3])) {
          curLookup = propTweenLookup[i3];
          if (vars === "all") {
            overwrittenProps[i3] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i3] = overwrittenProps[i3] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s3 = "";
    if (!ratio && data.b) {
      s3 = data.b;
    } else if (ratio === 1 && data.e) {
      s3 = data.e;
    } else {
      while (pt) {
        s3 = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s3;
        pt = pt._next;
      }
      s3 += data.c;
    }
    data.set(data.t, data.p, s3, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
      return f();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c2) {
        var queries = c2.queries, conditions = c2.conditions, match, p, anyMatch, toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c2.revert();
          anyMatch && matches.push(c2);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function(c2) {
        return c2.onMatch(c2, function(func) {
          return c2.add(null, func);
        });
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }
      var self2 = this, f = function f2() {
        var prev = _context, prevSelector = self2.selector, result;
        prev && prev !== self2 && prev.data.push(self2);
        scope && (self2.selector = selector(scope));
        _context = self2;
        result = func.apply(self2, arguments);
        _isFunction(result) && self2._r.push(result);
        _context = prev;
        self2.selector = prevSelector;
        self2.isReverted = false;
        return result;
      };
      self2.last = f;
      return name === _isFunction ? f(self2, function(func2) {
        return self2.add(null, func2);
      }) : name ? self2[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a2 = [];
      this.data.forEach(function(e4) {
        return e4 instanceof Context2 ? a2.push.apply(a2, e4.getTweens()) : e4 instanceof Tween && !(e4.parent && e4.parent.data === "nested") && a2.push(e4);
      });
      return a2;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        (function() {
          var tweens = _this4.getTweens(), i4 = _this4.data.length, t3;
          while (i4--) {
            t3 = _this4.data[i4];
            if (t3.data === "isFlip") {
              t3.revert();
              t3.getChildren(true, true, false).forEach(function(tween) {
                return tweens.splice(tweens.indexOf(tween), 1);
              });
            }
          }
          tweens.map(function(t4) {
            return {
              g: t4._dur || t4._delay || t4._sat && !t4._sat.vars.immediateRender ? t4.globalTime(0) : -Infinity,
              t: t4
            };
          }).sort(function(a2, b) {
            return b.g - a2.g || -Infinity;
          }).forEach(function(o2) {
            return o2.t.revert(revert);
          });
          i4 = _this4.data.length;
          while (i4--) {
            t3 = _this4.data[i4];
            if (t3 instanceof Timeline) {
              if (t3.data !== "nested") {
                t3.scrollTrigger && t3.scrollTrigger.revert();
                t3.kill();
              }
            } else {
              !(t3 instanceof Tween) && t3.revert && t3.revert(revert);
            }
          }
          _this4._r.forEach(function(f) {
            return f(revert, _this4);
          });
          _this4.isReverted = true;
        })();
      } else {
        this.data.forEach(function(e4) {
          return e4.kill && e4.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i3 = _media.length;
        while (i3--) {
          _media[i3].id === this.id && _media.splice(i3, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  }();
  var MatchMedia = /* @__PURE__ */ function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
      _context && _context.data.push(this);
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
      _context && !context3.selector && (context3.selector = _context.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3, function(f) {
        return context3.add(null, f);
      });
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function(c2) {
        return c2.kill(revert, true);
      });
    };
    return MatchMedia2;
  }();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t3) {
          return gsap.quickSetter(t3, property, unit);
        }), l2 = setters.length;
        return function(value) {
          var i3 = l2;
          while (i3--) {
            setters[i3](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p2 = new Plugin();
        _quickTween._pt = 0;
        p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin ? setter : function(value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _merge22;
      var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c2) {
        var cond = c2.conditions, found, p;
        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found = 1;
          }
        }
        found && c2.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a2 = _listeners[type] || (_listeners[type] = []);
      ~a2.indexOf(callback) || a2.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a2 = _listeners[type], i3 = a2 && a2.indexOf(callback);
      i3 >= 0 && a2.splice(i3, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp: clamp2,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p, i3, pt;
    for (p in modifiers) {
      i3 = targets.length;
      while (i3--) {
        pt = tween._ptLookup[i3][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i3], p);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init4(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt, v;
      this.tween = tween;
      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;
        this._props.push(p);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    init: function init2(target, value) {
      var i3 = value.length;
      while (i3--) {
        this.add(target, i3, target[i3] || 0, value[i3], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.12.5";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/CSSPlugin.js
  init_live_reload();
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style, cache = target._gsap;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a2) {
          return _this.tfm[a2] = _get(target, a2);
        }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
        property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p) {
          return _saveStyle2.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (cache.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i3, p;
    for (i3 = 0; i3 < props.length; i3 += 3) {
      props[i3 + 1] ? target[props[i3]] = props[i3 + 2] : props[i3 + 2] ? style[props[i3]] = props[i3 + 2] : style.removeProperty(props[i3].substr(0, 2) === "--" ? props[i3] : props[i3].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i3 = _reverting2();
      if ((!i3 || !i3.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        if (cache.zOrigin && style[_transformOriginProp]) {
          style[_transformOriginProp] += " " + cache.zOrigin + "px";
          cache.zOrigin = 0;
          cache.renderTransform();
        }
        cache.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && properties.split(",").forEach(function(p) {
      return saver.save(p);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e4 = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e4 && e4.style ? e4 : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e4 = element || _tempDiv, s3 = e4.style, i3 = 5;
    if (property in s3 && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i3-- && !(_prefixes[i3] + property in s3)) {
    }
    return i3 < 0 ? null : (i3 === 3 ? "ms" : i3 >= 0 ? _prefixes[i3] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack2;
      } catch (e4) {
      }
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i3 = attributesArray.length;
    while (i3--) {
      if (target.hasAttribute(attributesArray[i3])) {
        return target.getAttribute(attributesArray[i3]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e4) {
    return !!(e4.getCTM && (!e4.parentNode || e4.ownerSVGElement) && _getBBox(e4));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style = target.style, first2Chars;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        first2Chars = property.substr(0, 2);
        if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc2 || !parent.appendChild) {
      parent = _doc2.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      if (toPercent && (property === "height" || property === "width")) {
        var v = target.style[property];
        target.style[property] = amount + unit;
        px = target[measureProperty];
        v ? target.style[property] = v : _removeProperty(target, property);
      } else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
        parent === target && (style.position = "static");
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style.position = "absolute";
      }
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s3 = p && _getComputedProperty(target, p, 1);
      if (s3 && s3 !== start) {
        prop = p;
        start = s3;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a2, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      startValue = target.style[prop];
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a2 = [start, end];
    _colorStringFilter(a2);
    start = a2[0];
    end = a2[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i3;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i3 = props.length;
        while (--i3 > -1) {
          prop = props[i3];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a2 = matrix[0], b = matrix[1], c2 = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a2 * d - b * c2)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c2 / determinant) + (c2 * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a2 / determinant) - (a2 * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a2 + ty * c2) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a2, b, c2, d, a12, a22, t1, t22, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        t22 = target.getBBox();
        origin = cache.xOrigin - t22.x + "px " + (cache.yOrigin - t22.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a2 = matrix[0];
      b = matrix[1];
      c2 = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a2 * a2 + b * b);
        scaleY = Math.sqrt(d * d + c2 * c2);
        rotation = a2 || b ? _atan2(b, a2) * _RAD2DEG : 0;
        skewX = c2 || d ? _atan2(c2, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a2 + yOrigin * c2);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t22 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t22;
          a32 = t3;
        }
        angle = _atan2(-c2, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a2 * cos - a13 * sin;
          t22 = b * cos - a23 * sin;
          t3 = c2 * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a2 = t1;
          b = t22;
          c2 = t3;
        }
        angle = _atan2(b, a2);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a2 * cos + b * sin;
          t22 = a12 * cos + a22 * sin;
          b = b * cos - a2 * sin;
          a22 = a22 * cos - a12 * sin;
          a2 = t1;
          a12 = t22;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a2 * a2 + b * b + c2 * c2));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t3 = "Top", r2 = "Right", b = "Bottom", l2 = "Left", props = (index < 3 ? [t3, r2, b, l2] : [t3 + l2, t3 + r2, b + r2, b + l2]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a2, vars;
      if (arguments.length < 4) {
        a2 = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a2.join(" ");
        return vars.split(a2[0]).length === 5 ? a2[0] : vars;
      }
      a2 = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i3) {
        return vars[prop] = a2[i3] = a2[i3] || a2[(i3 - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style.visibility);
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p);
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data) {
      if (data.tween._time || !_reverting2()) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/CustomEase.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/utils/paths.js
  init_live_reload();
  var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;
  var _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;
  var _DEG2RAD2 = Math.PI / 180;
  var _RAD2DEG2 = 180 / Math.PI;
  var _sin2 = Math.sin;
  var _cos2 = Math.cos;
  var _abs = Math.abs;
  var _sqrt2 = Math.sqrt;
  var _isNumber3 = function _isNumber4(value) {
    return typeof value === "number";
  };
  var _roundingNum = 1e5;
  var _round3 = function _round4(value) {
    return Math.round(value * _roundingNum) / _roundingNum || 0;
  };
  function transformRawPath(rawPath, a2, b, c2, d, tx, ty) {
    var j = rawPath.length, segment, l2, i3, x, y;
    while (--j > -1) {
      segment = rawPath[j];
      l2 = segment.length;
      for (i3 = 0; i3 < l2; i3 += 2) {
        x = segment[i3];
        y = segment[i3 + 1];
        segment[i3] = x * a2 + y * c2 + tx;
        segment[i3 + 1] = x * b + y * d + ty;
      }
    }
    rawPath._dirty = 1;
    return rawPath;
  }
  function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
    if (lastX === x && lastY === y) {
      return;
    }
    rx = _abs(rx);
    ry = _abs(ry);
    var angleRad = angle % 360 * _DEG2RAD2, cosAngle = _cos2(angleRad), sinAngle = _sin2(angleRad), PI = Math.PI, TWOPI = PI * 2, dx2 = (lastX - x) / 2, dy2 = (lastY - y) / 2, x1 = cosAngle * dx2 + sinAngle * dy2, y1 = -sinAngle * dx2 + cosAngle * dy2, x1_sq = x1 * x1, y1_sq = y1 * y1, radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);
    if (radiiCheck > 1) {
      rx = _sqrt2(radiiCheck) * rx;
      ry = _sqrt2(radiiCheck) * ry;
    }
    var rx_sq = rx * rx, ry_sq = ry * ry, sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);
    if (sq < 0) {
      sq = 0;
    }
    var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt2(sq), cx1 = coef * (rx * y1 / ry), cy1 = coef * -(ry * x1 / rx), sx2 = (lastX + x) / 2, sy2 = (lastY + y) / 2, cx = sx2 + (cosAngle * cx1 - sinAngle * cy1), cy = sy2 + (sinAngle * cx1 + cosAngle * cy1), ux = (x1 - cx1) / rx, uy = (y1 - cy1) / ry, vx = (-x1 - cx1) / rx, vy = (-y1 - cy1) / ry, temp = ux * ux + uy * uy, angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt2(temp)), angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt2(temp * (vx * vx + vy * vy)));
    isNaN(angleExtent) && (angleExtent = PI);
    if (!sweepFlag && angleExtent > 0) {
      angleExtent -= TWOPI;
    } else if (sweepFlag && angleExtent < 0) {
      angleExtent += TWOPI;
    }
    angleStart %= TWOPI;
    angleExtent %= TWOPI;
    var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)), rawPath = [], angleIncrement = angleExtent / segments, controlLength = 4 / 3 * _sin2(angleIncrement / 2) / (1 + _cos2(angleIncrement / 2)), ma = cosAngle * rx, mb = sinAngle * rx, mc = sinAngle * -ry, md = cosAngle * ry, i3;
    for (i3 = 0; i3 < segments; i3++) {
      angle = angleStart + i3 * angleIncrement;
      x1 = _cos2(angle);
      y1 = _sin2(angle);
      ux = _cos2(angle += angleIncrement);
      uy = _sin2(angle);
      rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
    }
    for (i3 = 0; i3 < rawPath.length; i3 += 2) {
      x1 = rawPath[i3];
      y1 = rawPath[i3 + 1];
      rawPath[i3] = x1 * ma + y1 * mc + cx;
      rawPath[i3 + 1] = x1 * mb + y1 * md + cy;
    }
    rawPath[i3 - 2] = x;
    rawPath[i3 - 1] = y;
    return rawPath;
  }
  function stringToRawPath(d) {
    var a2 = (d + "").replace(_scientific, function(m) {
      var n3 = +m;
      return n3 < 1e-4 && n3 > -1e-4 ? 0 : n3;
    }).match(_svgPathExp) || [], path = [], relativeX = 0, relativeY = 0, twoThirds = 2 / 3, elements = a2.length, points = 0, errorMessage = "ERROR: malformed path: " + d, i3, j, x, y, command, isRelative, segment, startX, startY, difX, difY, beziers, prevCommand, flag1, flag2, line = function line2(sx, sy, ex, ey) {
      difX = (ex - sx) / 3;
      difY = (ey - sy) / 3;
      segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
    };
    if (!d || !isNaN(a2[0]) || isNaN(a2[1])) {
      console.log(errorMessage);
      return path;
    }
    for (i3 = 0; i3 < elements; i3++) {
      prevCommand = command;
      if (isNaN(a2[i3])) {
        command = a2[i3].toUpperCase();
        isRelative = command !== a2[i3];
      } else {
        i3--;
      }
      x = +a2[i3 + 1];
      y = +a2[i3 + 2];
      if (isRelative) {
        x += relativeX;
        y += relativeY;
      }
      if (!i3) {
        startX = x;
        startY = y;
      }
      if (command === "M") {
        if (segment) {
          if (segment.length < 8) {
            path.length -= 1;
          } else {
            points += segment.length;
          }
        }
        relativeX = startX = x;
        relativeY = startY = y;
        segment = [x, y];
        path.push(segment);
        i3 += 2;
        command = "L";
      } else if (command === "C") {
        if (!segment) {
          segment = [0, 0];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(x, y, relativeX + a2[i3 + 3] * 1, relativeY + a2[i3 + 4] * 1, relativeX += a2[i3 + 5] * 1, relativeY += a2[i3 + 6] * 1);
        i3 += 6;
      } else if (command === "S") {
        difX = relativeX;
        difY = relativeY;
        if (prevCommand === "C" || prevCommand === "S") {
          difX += relativeX - segment[segment.length - 4];
          difY += relativeY - segment[segment.length - 3];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(difX, difY, x, y, relativeX += a2[i3 + 3] * 1, relativeY += a2[i3 + 4] * 1);
        i3 += 4;
      } else if (command === "Q") {
        difX = relativeX + (x - relativeX) * twoThirds;
        difY = relativeY + (y - relativeY) * twoThirds;
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        relativeX += a2[i3 + 3] * 1;
        relativeY += a2[i3 + 4] * 1;
        segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
        i3 += 4;
      } else if (command === "T") {
        difX = relativeX - segment[segment.length - 4];
        difY = relativeY - segment[segment.length - 3];
        segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
        i3 += 2;
      } else if (command === "H") {
        line(relativeX, relativeY, relativeX = x, relativeY);
        i3 += 1;
      } else if (command === "V") {
        line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
        i3 += 1;
      } else if (command === "L" || command === "Z") {
        if (command === "Z") {
          x = startX;
          y = startY;
          segment.closed = true;
        }
        if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
          line(relativeX, relativeY, x, y);
          if (command === "L") {
            i3 += 2;
          }
        }
        relativeX = x;
        relativeY = y;
      } else if (command === "A") {
        flag1 = a2[i3 + 4];
        flag2 = a2[i3 + 5];
        difX = a2[i3 + 6];
        difY = a2[i3 + 7];
        j = 7;
        if (flag1.length > 1) {
          if (flag1.length < 3) {
            difY = difX;
            difX = flag2;
            j--;
          } else {
            difY = flag2;
            difX = flag1.substr(2);
            j -= 2;
          }
          flag2 = flag1.charAt(1);
          flag1 = flag1.charAt(0);
        }
        beziers = arcToSegment(relativeX, relativeY, +a2[i3 + 1], +a2[i3 + 2], +a2[i3 + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
        i3 += j;
        if (beziers) {
          for (j = 0; j < beziers.length; j++) {
            segment.push(beziers[j]);
          }
        }
        relativeX = segment[segment.length - 2];
        relativeY = segment[segment.length - 1];
      } else {
        console.log(errorMessage);
      }
    }
    i3 = segment.length;
    if (i3 < 6) {
      path.pop();
      i3 = 0;
    } else if (segment[0] === segment[i3 - 2] && segment[1] === segment[i3 - 1]) {
      segment.closed = true;
    }
    path.totalPoints = points + i3;
    return path;
  }
  function rawPathToString(rawPath) {
    if (_isNumber3(rawPath[0])) {
      rawPath = [rawPath];
    }
    var result = "", l2 = rawPath.length, sl, s3, i3, segment;
    for (s3 = 0; s3 < l2; s3++) {
      segment = rawPath[s3];
      result += "M" + _round3(segment[0]) + "," + _round3(segment[1]) + " C";
      sl = segment.length;
      for (i3 = 2; i3 < sl; i3++) {
        result += _round3(segment[i3++]) + "," + _round3(segment[i3++]) + " " + _round3(segment[i3++]) + "," + _round3(segment[i3++]) + " " + _round3(segment[i3++]) + "," + _round3(segment[i3]) + " ";
      }
      if (segment.closed) {
        result += "z";
      }
    }
    return result;
  }

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/CustomEase.js
  var gsap2;
  var _coreInitted2;
  var _getGSAP = function _getGSAP2() {
    return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
  };
  var _initCore3 = function _initCore4() {
    gsap2 = _getGSAP();
    if (gsap2) {
      gsap2.registerEase("_CE", CustomEase.create);
      _coreInitted2 = 1;
    } else {
      console.warn("Please gsap.registerPlugin(CustomEase)");
    }
  };
  var _bigNum3 = 1e20;
  var _round5 = function _round6(value) {
    return ~~(value * 1e3 + (value < 0 ? -0.5 : 0.5)) / 1e3;
  };
  var _bonusValidated = 1;
  var _numExp2 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi;
  var _needsParsingExp = /[cLlsSaAhHvVtTqQ]/g;
  var _findMinimum = function _findMinimum2(values) {
    var l2 = values.length, min = _bigNum3, i3;
    for (i3 = 1; i3 < l2; i3 += 6) {
      +values[i3] < min && (min = +values[i3]);
    }
    return min;
  };
  var _normalize = function _normalize2(values, height, originY) {
    if (!originY && originY !== 0) {
      originY = Math.max(+values[values.length - 1], +values[1]);
    }
    var tx = +values[0] * -1, ty = -originY, l2 = values.length, sx = 1 / (+values[l2 - 2] + tx), sy = -height || (Math.abs(+values[l2 - 1] - +values[1]) < 0.01 * (+values[l2 - 2] - +values[0]) ? _findMinimum(values) + ty : +values[l2 - 1] + ty), i3;
    if (sy) {
      sy = 1 / sy;
    } else {
      sy = -sx;
    }
    for (i3 = 0; i3 < l2; i3 += 2) {
      values[i3] = (+values[i3] + tx) * sx;
      values[i3 + 1] = (+values[i3 + 1] + ty) * sy;
    }
  };
  var _bezierToPoints = function _bezierToPoints2(x1, y1, x2, y2, x3, y3, x4, y4, threshold, points, index) {
    var x12 = (x1 + x2) / 2, y12 = (y1 + y2) / 2, x23 = (x2 + x3) / 2, y23 = (y2 + y3) / 2, x34 = (x3 + x4) / 2, y34 = (y3 + y4) / 2, x123 = (x12 + x23) / 2, y123 = (y12 + y23) / 2, x234 = (x23 + x34) / 2, y234 = (y23 + y34) / 2, x1234 = (x123 + x234) / 2, y1234 = (y123 + y234) / 2, dx = x4 - x1, dy = y4 - y1, d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx), d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx), length;
    if (!points) {
      points = [{
        x: x1,
        y: y1
      }, {
        x: x4,
        y: y4
      }];
      index = 1;
    }
    points.splice(index || points.length - 1, 0, {
      x: x1234,
      y: y1234
    });
    if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
      length = points.length;
      _bezierToPoints2(x1, y1, x12, y12, x123, y123, x1234, y1234, threshold, points, index);
      _bezierToPoints2(x1234, y1234, x234, y234, x34, y34, x4, y4, threshold, points, index + 1 + (points.length - length));
    }
    return points;
  };
  var CustomEase = /* @__PURE__ */ function() {
    function CustomEase2(id, data, config3) {
      _coreInitted2 || _initCore3();
      this.id = id;
      _bonusValidated && this.setData(data, config3);
    }
    var _proto = CustomEase2.prototype;
    _proto.setData = function setData(data, config3) {
      config3 = config3 || {};
      data = data || "0,0,1,1";
      var values = data.match(_numExp2), closest = 1, points = [], lookup = [], precision = config3.precision || 1, fast = precision <= 1, l2, a1, a2, i3, inc, j, point, prevPoint, p;
      this.data = data;
      if (_needsParsingExp.test(data) || ~data.indexOf("M") && data.indexOf("C") < 0) {
        values = stringToRawPath(data)[0];
      }
      l2 = values.length;
      if (l2 === 4) {
        values.unshift(0, 0);
        values.push(1, 1);
        l2 = 8;
      } else if ((l2 - 2) % 6) {
        throw "Invalid CustomEase";
      }
      if (+values[0] !== 0 || +values[l2 - 2] !== 1) {
        _normalize(values, config3.height, config3.originY);
      }
      this.segment = values;
      for (i3 = 2; i3 < l2; i3 += 6) {
        a1 = {
          x: +values[i3 - 2],
          y: +values[i3 - 1]
        };
        a2 = {
          x: +values[i3 + 4],
          y: +values[i3 + 5]
        };
        points.push(a1, a2);
        _bezierToPoints(a1.x, a1.y, +values[i3], +values[i3 + 1], +values[i3 + 2], +values[i3 + 3], a2.x, a2.y, 1 / (precision * 2e5), points, points.length - 1);
      }
      l2 = points.length;
      for (i3 = 0; i3 < l2; i3++) {
        point = points[i3];
        prevPoint = points[i3 - 1] || point;
        if ((point.x > prevPoint.x || prevPoint.y !== point.y && prevPoint.x === point.x || point === prevPoint) && point.x <= 1) {
          prevPoint.cx = point.x - prevPoint.x;
          prevPoint.cy = point.y - prevPoint.y;
          prevPoint.n = point;
          prevPoint.nx = point.x;
          if (fast && i3 > 1 && Math.abs(prevPoint.cy / prevPoint.cx - points[i3 - 2].cy / points[i3 - 2].cx) > 2) {
            fast = 0;
          }
          if (prevPoint.cx < closest) {
            if (!prevPoint.cx) {
              prevPoint.cx = 1e-3;
              if (i3 === l2 - 1) {
                prevPoint.x -= 1e-3;
                closest = Math.min(closest, 1e-3);
                fast = 0;
              }
            } else {
              closest = prevPoint.cx;
            }
          }
        } else {
          points.splice(i3--, 1);
          l2--;
        }
      }
      l2 = 1 / closest + 1 | 0;
      inc = 1 / l2;
      j = 0;
      point = points[0];
      if (fast) {
        for (i3 = 0; i3 < l2; i3++) {
          p = i3 * inc;
          if (point.nx < p) {
            point = points[++j];
          }
          a1 = point.y + (p - point.x) / point.cx * point.cy;
          lookup[i3] = {
            x: p,
            cx: inc,
            y: a1,
            cy: 0,
            nx: 9
          };
          if (i3) {
            lookup[i3 - 1].cy = a1 - lookup[i3 - 1].y;
          }
        }
        lookup[l2 - 1].cy = points[points.length - 1].y - a1;
      } else {
        for (i3 = 0; i3 < l2; i3++) {
          if (point.nx < i3 * inc) {
            point = points[++j];
          }
          lookup[i3] = point;
        }
        if (j < points.length - 1) {
          lookup[i3 - 1] = points[points.length - 2];
        }
      }
      this.ease = function(p2) {
        var point2 = lookup[p2 * l2 | 0] || lookup[l2 - 1];
        if (point2.nx < p2) {
          point2 = point2.n;
        }
        return point2.y + (p2 - point2.x) / point2.cx * point2.cy;
      };
      this.ease.custom = this;
      this.id && gsap2 && gsap2.registerEase(this.id, this.ease);
      return this;
    };
    _proto.getSVGData = function getSVGData(config3) {
      return CustomEase2.getSVGData(this, config3);
    };
    CustomEase2.create = function create(id, data, config3) {
      return new CustomEase2(id, data, config3).ease;
    };
    CustomEase2.register = function register(core) {
      gsap2 = core;
      _initCore3();
    };
    CustomEase2.get = function get(id) {
      return gsap2.parseEase(id);
    };
    CustomEase2.getSVGData = function getSVGData(ease, config3) {
      config3 = config3 || {};
      var width = config3.width || 100, height = config3.height || 100, x = config3.x || 0, y = (config3.y || 0) + height, e4 = gsap2.utils.toArray(config3.path)[0], a2, slope, i3, inc, tx, ty, precision, threshold, prevX, prevY;
      if (config3.invert) {
        height = -height;
        y = 0;
      }
      if (typeof ease === "string") {
        ease = gsap2.parseEase(ease);
      }
      if (ease.custom) {
        ease = ease.custom;
      }
      if (ease instanceof CustomEase2) {
        a2 = rawPathToString(transformRawPath([ease.segment], width, 0, 0, -height, x, y));
      } else {
        a2 = [x, y];
        precision = Math.max(5, (config3.precision || 1) * 200);
        inc = 1 / precision;
        precision += 2;
        threshold = 5 / precision;
        prevX = _round5(x + inc * width);
        prevY = _round5(y + ease(inc) * -height);
        slope = (prevY - y) / (prevX - x);
        for (i3 = 2; i3 < precision; i3++) {
          tx = _round5(x + i3 * inc * width);
          ty = _round5(y + ease(i3 * inc) * -height);
          if (Math.abs((ty - prevY) / (tx - prevX) - slope) > threshold || i3 === precision - 1) {
            a2.push(prevX, prevY);
            slope = (ty - prevY) / (tx - prevX);
          }
          prevX = tx;
          prevY = ty;
        }
        a2 = "M" + a2.join(",");
      }
      e4 && e4.setAttribute("d", a2);
      return a2;
    };
    return CustomEase2;
  }();
  _getGSAP() && gsap2.registerPlugin(CustomEase);
  CustomEase.version = "3.12.5";

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/Flip.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/utils/matrix.js
  init_live_reload();
  var _doc3;
  var _win3;
  var _docElement2;
  var _body;
  var _divContainer;
  var _svgContainer;
  var _identityMatrix;
  var _gEl;
  var _transformProp2 = "transform";
  var _transformOriginProp2 = _transformProp2 + "Origin";
  var _hasOffsetBug;
  var _setDoc = function _setDoc2(element) {
    var doc = element.ownerDocument || element;
    if (!(_transformProp2 in element.style) && "msTransform" in element.style) {
      _transformProp2 = "msTransform";
      _transformOriginProp2 = _transformProp2 + "Origin";
    }
    while (doc.parentNode && (doc = doc.parentNode)) {
    }
    _win3 = window;
    _identityMatrix = new Matrix2D();
    if (doc) {
      _doc3 = doc;
      _docElement2 = doc.documentElement;
      _body = doc.body;
      _gEl = _doc3.createElementNS("http://www.w3.org/2000/svg", "g");
      _gEl.style.transform = "none";
      var d1 = doc.createElement("div"), d2 = doc.createElement("div"), root = doc && (doc.body || doc.firstElementChild);
      if (root && root.appendChild) {
        root.appendChild(d1);
        d1.appendChild(d2);
        d1.setAttribute("style", "position:static;transform:translate3d(0,0,1px)");
        _hasOffsetBug = d2.offsetParent !== d1;
        root.removeChild(d1);
      }
    }
    return doc;
  };
  var _forceNonZeroScale = function _forceNonZeroScale2(e4) {
    var a2, cache;
    while (e4 && e4 !== _body) {
      cache = e4._gsap;
      cache && cache.uncache && cache.get(e4, "x");
      if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
        cache.scaleX = cache.scaleY = 1e-4;
        cache.renderTransform(1, cache);
        a2 ? a2.push(cache) : a2 = [cache];
      }
      e4 = e4.parentNode;
    }
    return a2;
  };
  var _svgTemps = [];
  var _divTemps = [];
  var _getDocScrollTop = function _getDocScrollTop2() {
    return _win3.pageYOffset || _doc3.scrollTop || _docElement2.scrollTop || _body.scrollTop || 0;
  };
  var _getDocScrollLeft = function _getDocScrollLeft2() {
    return _win3.pageXOffset || _doc3.scrollLeft || _docElement2.scrollLeft || _body.scrollLeft || 0;
  };
  var _svgOwner = function _svgOwner2(element) {
    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
  };
  var _isFixed = function _isFixed2(element) {
    if (_win3.getComputedStyle(element).position === "fixed") {
      return true;
    }
    element = element.parentNode;
    if (element && element.nodeType === 1) {
      return _isFixed2(element);
    }
  };
  var _createSibling = function _createSibling2(element, i3) {
    if (element.parentNode && (_doc3 || _setDoc(element))) {
      var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i3 ? "rect" : "g" : "div", x = i3 !== 2 ? 0 : 100, y = i3 === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e4 = _doc3.createElementNS ? _doc3.createElementNS(ns.replace(/^https/, "http"), type) : _doc3.createElement(type);
      if (i3) {
        if (!svg) {
          if (!_divContainer) {
            _divContainer = _createSibling2(element);
            _divContainer.style.cssText = css;
          }
          e4.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
          _divContainer.appendChild(e4);
        } else {
          _svgContainer || (_svgContainer = _createSibling2(element));
          e4.setAttribute("width", 0.01);
          e4.setAttribute("height", 0.01);
          e4.setAttribute("transform", "translate(" + x + "," + y + ")");
          _svgContainer.appendChild(e4);
        }
      }
      return e4;
    }
    throw "Need document and parent.";
  };
  var _consolidate = function _consolidate2(m) {
    var c2 = new Matrix2D(), i3 = 0;
    for (; i3 < m.numberOfItems; i3++) {
      c2.multiply(m.getItem(i3).matrix);
    }
    return c2;
  };
  var _getCTM = function _getCTM2(svg) {
    var m = svg.getCTM(), transform;
    if (!m) {
      transform = svg.style[_transformProp2];
      svg.style[_transformProp2] = "none";
      svg.appendChild(_gEl);
      m = _gEl.getCTM();
      svg.removeChild(_gEl);
      transform ? svg.style[_transformProp2] = transform : svg.style.removeProperty(_transformProp2.replace(/([A-Z])/g, "-$1").toLowerCase());
    }
    return m || _identityMatrix.clone();
  };
  var _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
    var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
    if (element === _win3) {
      return element;
    }
    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
    container = svg ? _svgContainer : _divContainer;
    if (svg) {
      if (isRootSVG) {
        b = _getCTM(element);
        x = -b.e / b.a;
        y = -b.f / b.d;
        m = _identityMatrix;
      } else if (element.getBBox) {
        b = element.getBBox();
        m = element.transform ? element.transform.baseVal : {};
        m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
        x = m.a * b.x + m.c * b.y;
        y = m.b * b.x + m.d * b.y;
      } else {
        m = new Matrix2D();
        x = y = 0;
      }
      if (adjustGOffset && element.tagName.toLowerCase() === "g") {
        x = y = 0;
      }
      (isRootSVG ? svg : parent).appendChild(container);
      container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
    } else {
      x = y = 0;
      if (_hasOffsetBug) {
        m = element.offsetParent;
        b = element;
        while (b && (b = b.parentNode) && b !== m && b.parentNode) {
          if ((_win3.getComputedStyle(b)[_transformProp2] + "").length > 4) {
            x = b.offsetLeft;
            y = b.offsetTop;
            b = 0;
          }
        }
      }
      cs = _win3.getComputedStyle(element);
      if (cs.position !== "absolute" && cs.position !== "fixed") {
        m = element.offsetParent;
        while (parent && parent !== m) {
          x += parent.scrollLeft || 0;
          y += parent.scrollTop || 0;
          parent = parent.parentNode;
        }
      }
      b = container.style;
      b.top = element.offsetTop - y + "px";
      b.left = element.offsetLeft - x + "px";
      b[_transformProp2] = cs[_transformProp2];
      b[_transformOriginProp2] = cs[_transformOriginProp2];
      b.position = cs.position === "fixed" ? "fixed" : "absolute";
      element.parentNode.appendChild(container);
    }
    return container;
  };
  var _setMatrix = function _setMatrix2(m, a2, b, c2, d, e4, f) {
    m.a = a2;
    m.b = b;
    m.c = c2;
    m.d = d;
    m.e = e4;
    m.f = f;
    return m;
  };
  var Matrix2D = /* @__PURE__ */ function() {
    function Matrix2D2(a2, b, c2, d, e4, f) {
      if (a2 === void 0) {
        a2 = 1;
      }
      if (b === void 0) {
        b = 0;
      }
      if (c2 === void 0) {
        c2 = 0;
      }
      if (d === void 0) {
        d = 1;
      }
      if (e4 === void 0) {
        e4 = 0;
      }
      if (f === void 0) {
        f = 0;
      }
      _setMatrix(this, a2, b, c2, d, e4, f);
    }
    var _proto = Matrix2D2.prototype;
    _proto.inverse = function inverse() {
      var a2 = this.a, b = this.b, c2 = this.c, d = this.d, e4 = this.e, f = this.f, determinant = a2 * d - b * c2 || 1e-10;
      return _setMatrix(this, d / determinant, -b / determinant, -c2 / determinant, a2 / determinant, (c2 * f - d * e4) / determinant, -(a2 * f - b * e4) / determinant);
    };
    _proto.multiply = function multiply(matrix) {
      var a2 = this.a, b = this.b, c2 = this.c, d = this.d, e4 = this.e, f = this.f, a22 = matrix.a, b2 = matrix.c, c22 = matrix.b, d2 = matrix.d, e22 = matrix.e, f2 = matrix.f;
      return _setMatrix(this, a22 * a2 + c22 * c2, a22 * b + c22 * d, b2 * a2 + d2 * c2, b2 * b + d2 * d, e4 + e22 * a2 + f2 * c2, f + e22 * b + f2 * d);
    };
    _proto.clone = function clone() {
      return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
    };
    _proto.equals = function equals(matrix) {
      var a2 = this.a, b = this.b, c2 = this.c, d = this.d, e4 = this.e, f = this.f;
      return a2 === matrix.a && b === matrix.b && c2 === matrix.c && d === matrix.d && e4 === matrix.e && f === matrix.f;
    };
    _proto.apply = function apply(point, decoratee) {
      if (decoratee === void 0) {
        decoratee = {};
      }
      var x = point.x, y = point.y, a2 = this.a, b = this.b, c2 = this.c, d = this.d, e4 = this.e, f = this.f;
      decoratee.x = x * a2 + y * c2 + e4 || 0;
      decoratee.y = x * b + y * d + f || 0;
      return decoratee;
    };
    return Matrix2D2;
  }();
  function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
    if (!element || !element.parentNode || (_doc3 || _setDoc(element)).documentElement === element) {
      return new Matrix2D();
    }
    var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
    parent.removeChild(container);
    if (zeroScales) {
      b1 = zeroScales.length;
      while (b1--) {
        b2 = zeroScales[b1];
        b2.scaleX = b2.scaleY = 0;
        b2.renderTransform(1, b2);
      }
    }
    return inverse ? m.inverse() : m;
  }

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/Flip.js
  var _id = 1;
  var _toArray;
  var gsap3;
  var _batch;
  var _batchAction;
  var _body2;
  var _closestTenth;
  var _getStyleSaver3;
  var _forEachBatch = function _forEachBatch2(batch, name) {
    return batch.actions.forEach(function(a2) {
      return a2.vars[name] && a2.vars[name](a2);
    });
  };
  var _batchLookup = {};
  var _RAD2DEG3 = 180 / Math.PI;
  var _DEG2RAD3 = Math.PI / 180;
  var _emptyObj = {};
  var _dashedNameLookup = {};
  var _memoizedRemoveProps = {};
  var _listToArray = function _listToArray2(list) {
    return typeof list === "string" ? list.split(" ").join("").split(",") : list;
  };
  var _callbacks = _listToArray("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt");
  var _removeProps = _listToArray("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight");
  var _getEl = function _getEl2(target) {
    return _toArray(target)[0] || console.warn("Element not found:", target);
  };
  var _round7 = function _round8(value) {
    return Math.round(value * 1e4) / 1e4 || 0;
  };
  var _toggleClass = function _toggleClass2(targets, className, action) {
    return targets.forEach(function(el) {
      return el.classList[action](className);
    });
  };
  var _reserved = {
    zIndex: 1,
    kill: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
    prune: 1,
    absoluteOnLeave: 1
  };
  var _fitReserved = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1
  };
  var _camelToDashed = function _camelToDashed2(p) {
    return p.replace(/([A-Z])/g, "-$1").toLowerCase();
  };
  var _copy = function _copy2(obj, exclude) {
    var result = {}, p;
    for (p in obj) {
      exclude[p] || (result[p] = obj[p]);
    }
    return result;
  };
  var _memoizedProps = {};
  var _memoizeProps = function _memoizeProps2(props) {
    var p = _memoizedProps[props] = _listToArray(props);
    _memoizedRemoveProps[props] = p.concat(_removeProps);
    return p;
  };
  var _getInverseGlobalMatrix = function _getInverseGlobalMatrix2(el) {
    var cache = el._gsap || gsap3.core.getCache(el);
    if (cache.gmCache === gsap3.ticker.frame) {
      return cache.gMatrix;
    }
    cache.gmCache = gsap3.ticker.frame;
    return cache.gMatrix = getGlobalMatrix(el, true, false, true);
  };
  var _getDOMDepth = function _getDOMDepth2(el, invert, level) {
    if (level === void 0) {
      level = 0;
    }
    var parent = el.parentNode, inc = 1e3 * Math.pow(10, level) * (invert ? -1 : 1), l2 = invert ? -inc * 900 : 0;
    while (el) {
      l2 += inc;
      el = el.previousSibling;
    }
    return parent ? l2 + _getDOMDepth2(parent, invert, level + 1) : l2;
  };
  var _orderByDOMDepth = function _orderByDOMDepth2(comps, invert, isElStates) {
    comps.forEach(function(comp) {
      return comp.d = _getDOMDepth(isElStates ? comp.element : comp.t, invert);
    });
    comps.sort(function(c1, c2) {
      return c1.d - c2.d;
    });
    return comps;
  };
  var _recordInlineStyles = function _recordInlineStyles2(elState, props) {
    var style = elState.element.style, a2 = elState.css = elState.css || [], i3 = props.length, p, v;
    while (i3--) {
      p = props[i3];
      v = style[p] || style.getPropertyValue(p);
      a2.push(v ? p : _dashedNameLookup[p] || (_dashedNameLookup[p] = _camelToDashed(p)), v);
    }
    return style;
  };
  var _applyInlineStyles = function _applyInlineStyles2(state) {
    var css = state.css, style = state.element.style, i3 = 0;
    state.cache.uncache = 1;
    for (; i3 < css.length; i3 += 2) {
      css[i3 + 1] ? style[css[i3]] = css[i3 + 1] : style.removeProperty(css[i3]);
    }
    if (!css[css.indexOf("transform") + 1] && style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _setFinalStates = function _setFinalStates2(comps, onlyTransforms) {
    comps.forEach(function(c2) {
      return c2.a.cache.uncache = 1;
    });
    onlyTransforms || comps.finalStates.forEach(_applyInlineStyles);
  };
  var _absoluteProps = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(",");
  var _makeAbsolute = function _makeAbsolute2(elState, fallbackNode, ignoreBatch) {
    var element = elState.element, width = elState.width, height = elState.height, uncache = elState.uncache, getProp = elState.getProp, style = element.style, i3 = 4, result, displayIsNone, cs;
    typeof fallbackNode !== "object" && (fallbackNode = elState);
    if (_batch && ignoreBatch !== 1) {
      _batch._abs.push({
        t: element,
        b: elState,
        a: elState,
        sd: 0
      });
      _batch._final.push(function() {
        return (elState.cache.uncache = 1) && _applyInlineStyles(elState);
      });
      return element;
    }
    displayIsNone = getProp("display") === "none";
    if (!elState.isVisible || displayIsNone) {
      displayIsNone && (_recordInlineStyles(elState, ["display"]).display = fallbackNode.display);
      elState.matrix = fallbackNode.matrix;
      elState.width = width = elState.width || fallbackNode.width;
      elState.height = height = elState.height || fallbackNode.height;
    }
    _recordInlineStyles(elState, _absoluteProps);
    cs = window.getComputedStyle(element);
    while (i3--) {
      style[_absoluteProps[i3]] = cs[_absoluteProps[i3]];
    }
    style.gridArea = "1 / 1 / 1 / 1";
    style.transition = "none";
    style.position = "absolute";
    style.width = width + "px";
    style.height = height + "px";
    style.top || (style.top = "0px");
    style.left || (style.left = "0px");
    if (uncache) {
      result = new ElementState(element);
    } else {
      result = _copy(elState, _emptyObj);
      result.position = "absolute";
      if (elState.simple) {
        var bounds = element.getBoundingClientRect();
        result.matrix = new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop());
      } else {
        result.matrix = getGlobalMatrix(element, false, false, true);
      }
    }
    result = _fit(result, elState, true);
    elState.x = _closestTenth(result.x, 0.01);
    elState.y = _closestTenth(result.y, 0.01);
    return element;
  };
  var _filterComps = function _filterComps2(comps, targets) {
    if (targets !== true) {
      targets = _toArray(targets);
      comps = comps.filter(function(c2) {
        if (targets.indexOf((c2.sd < 0 ? c2.b : c2.a).element) !== -1) {
          return true;
        } else {
          c2.t._gsap.renderTransform(1);
          if (c2.b.isVisible) {
            c2.t.style.width = c2.b.width + "px";
            c2.t.style.height = c2.b.height + "px";
          }
        }
      });
    }
    return comps;
  };
  var _makeCompsAbsolute = function _makeCompsAbsolute2(comps) {
    return _orderByDOMDepth(comps, true).forEach(function(c2) {
      return (c2.a.isVisible || c2.b.isVisible) && _makeAbsolute(c2.sd < 0 ? c2.b : c2.a, c2.b, 1);
    });
  };
  var _findElStateInState = function _findElStateInState2(state, other) {
    return other && state.idLookup[_parseElementState(other).id] || state.elementStates[0];
  };
  var _parseElementState = function _parseElementState2(elOrNode, props, simple, other) {
    return elOrNode instanceof ElementState ? elOrNode : elOrNode instanceof FlipState ? _findElStateInState(elOrNode, other) : new ElementState(typeof elOrNode === "string" ? _getEl(elOrNode) || console.warn(elOrNode + " not found") : elOrNode, props, simple);
  };
  var _recordProps = function _recordProps2(elState, props) {
    var getProp = gsap3.getProperty(elState.element, null, "native"), obj = elState.props = {}, i3 = props.length;
    while (i3--) {
      obj[props[i3]] = (getProp(props[i3]) + "").trim();
    }
    obj.zIndex && (obj.zIndex = parseFloat(obj.zIndex) || 0);
    return elState;
  };
  var _applyProps = function _applyProps2(element, props) {
    var style = element.style || element, p;
    for (p in props) {
      style[p] = props[p];
    }
  };
  var _getID = function _getID2(el) {
    var id = el.getAttribute("data-flip-id");
    id || el.setAttribute("data-flip-id", id = "auto-" + _id++);
    return id;
  };
  var _elementsFromElementStates = function _elementsFromElementStates2(elStates) {
    return elStates.map(function(elState) {
      return elState.element;
    });
  };
  var _handleCallback = function _handleCallback2(callback, elStates, tl) {
    return callback && elStates.length && tl.add(callback(_elementsFromElementStates(elStates), tl, new FlipState(elStates, 0, true)), 0);
  };
  var _fit = function _fit2(fromState, toState, scale, applyProps, fitChild, vars) {
    var element = fromState.element, cache = fromState.cache, parent = fromState.parent, x = fromState.x, y = fromState.y, width = toState.width, height = toState.height, scaleX = toState.scaleX, scaleY = toState.scaleY, rotation = toState.rotation, bounds = toState.bounds, styles = vars && _getStyleSaver3 && _getStyleSaver3(element, "transform"), dimensionState = fromState, _toState$matrix = toState.matrix, e4 = _toState$matrix.e, f = _toState$matrix.f, deep = fromState.bounds.width !== bounds.width || fromState.bounds.height !== bounds.height || fromState.scaleX !== scaleX || fromState.scaleY !== scaleY || fromState.rotation !== rotation, simple = !deep && fromState.simple && toState.simple && !fitChild, skewX, fromPoint, toPoint, getProp, parentMatrix, matrix, bbox;
    if (simple || !parent) {
      scaleX = scaleY = 1;
      rotation = skewX = 0;
    } else {
      parentMatrix = _getInverseGlobalMatrix(parent);
      matrix = parentMatrix.clone().multiply(toState.ctm ? toState.matrix.clone().multiply(toState.ctm) : toState.matrix);
      rotation = _round7(Math.atan2(matrix.b, matrix.a) * _RAD2DEG3);
      skewX = _round7(Math.atan2(matrix.c, matrix.d) * _RAD2DEG3 + rotation) % 360;
      scaleX = Math.sqrt(Math.pow(matrix.a, 2) + Math.pow(matrix.b, 2));
      scaleY = Math.sqrt(Math.pow(matrix.c, 2) + Math.pow(matrix.d, 2)) * Math.cos(skewX * _DEG2RAD3);
      if (fitChild) {
        fitChild = _toArray(fitChild)[0];
        getProp = gsap3.getProperty(fitChild);
        bbox = fitChild.getBBox && typeof fitChild.getBBox === "function" && fitChild.getBBox();
        dimensionState = {
          scaleX: getProp("scaleX"),
          scaleY: getProp("scaleY"),
          width: bbox ? bbox.width : Math.ceil(parseFloat(getProp("width", "px"))),
          height: bbox ? bbox.height : parseFloat(getProp("height", "px"))
        };
      }
      cache.rotation = rotation + "deg";
      cache.skewX = skewX + "deg";
    }
    if (scale) {
      scaleX *= width === dimensionState.width || !dimensionState.width ? 1 : width / dimensionState.width;
      scaleY *= height === dimensionState.height || !dimensionState.height ? 1 : height / dimensionState.height;
      cache.scaleX = scaleX;
      cache.scaleY = scaleY;
    } else {
      width = _closestTenth(width * scaleX / dimensionState.scaleX, 0);
      height = _closestTenth(height * scaleY / dimensionState.scaleY, 0);
      element.style.width = width + "px";
      element.style.height = height + "px";
    }
    applyProps && _applyProps(element, toState.props);
    if (simple || !parent) {
      x += e4 - fromState.matrix.e;
      y += f - fromState.matrix.f;
    } else if (deep || parent !== toState.parent) {
      cache.renderTransform(1, cache);
      matrix = getGlobalMatrix(fitChild || element, false, false, true);
      fromPoint = parentMatrix.apply({
        x: matrix.e,
        y: matrix.f
      });
      toPoint = parentMatrix.apply({
        x: e4,
        y: f
      });
      x += toPoint.x - fromPoint.x;
      y += toPoint.y - fromPoint.y;
    } else {
      parentMatrix.e = parentMatrix.f = 0;
      toPoint = parentMatrix.apply({
        x: e4 - fromState.matrix.e,
        y: f - fromState.matrix.f
      });
      x += toPoint.x;
      y += toPoint.y;
    }
    x = _closestTenth(x, 0.02);
    y = _closestTenth(y, 0.02);
    if (vars && !(vars instanceof ElementState)) {
      styles && styles.revert();
    } else {
      cache.x = x + "px";
      cache.y = y + "px";
      cache.renderTransform(1, cache);
    }
    if (vars) {
      vars.x = x;
      vars.y = y;
      vars.rotation = rotation;
      vars.skewX = skewX;
      if (scale) {
        vars.scaleX = scaleX;
        vars.scaleY = scaleY;
      } else {
        vars.width = width;
        vars.height = height;
      }
    }
    return vars || cache;
  };
  var _parseState = function _parseState2(targetsOrState, vars) {
    return targetsOrState instanceof FlipState ? targetsOrState : new FlipState(targetsOrState, vars);
  };
  var _getChangingElState = function _getChangingElState2(toState, fromState, id) {
    var to1 = toState.idLookup[id], to2 = toState.alt[id];
    return to2.isVisible && (!(fromState.getElementState(to2.element) || to2).isVisible || !to1.isVisible) ? to2 : to1;
  };
  var _bodyMetrics = [];
  var _bodyProps = "width,height,overflowX,overflowY".split(",");
  var _bodyLocked;
  var _lockBodyScroll = function _lockBodyScroll2(lock) {
    if (lock !== _bodyLocked) {
      var s3 = _body2.style, w = _body2.clientWidth === window.outerWidth, h2 = _body2.clientHeight === window.outerHeight, i3 = 4;
      if (lock && (w || h2)) {
        while (i3--) {
          _bodyMetrics[i3] = s3[_bodyProps[i3]];
        }
        if (w) {
          s3.width = _body2.clientWidth + "px";
          s3.overflowY = "hidden";
        }
        if (h2) {
          s3.height = _body2.clientHeight + "px";
          s3.overflowX = "hidden";
        }
        _bodyLocked = lock;
      } else if (_bodyLocked) {
        while (i3--) {
          _bodyMetrics[i3] ? s3[_bodyProps[i3]] = _bodyMetrics[i3] : s3.removeProperty(_camelToDashed(_bodyProps[i3]));
        }
        _bodyLocked = lock;
      }
    }
  };
  var _fromTo = function _fromTo2(fromState, toState, vars, relative) {
    fromState instanceof FlipState && toState instanceof FlipState || console.warn("Not a valid state object.");
    vars = vars || {};
    var _vars = vars, clearProps2 = _vars.clearProps, onEnter = _vars.onEnter, onLeave = _vars.onLeave, absolute = _vars.absolute, absoluteOnLeave = _vars.absoluteOnLeave, custom = _vars.custom, delay = _vars.delay, paused = _vars.paused, repeat = _vars.repeat, repeatDelay = _vars.repeatDelay, yoyo = _vars.yoyo, toggleClass = _vars.toggleClass, nested = _vars.nested, _zIndex = _vars.zIndex, scale = _vars.scale, fade = _vars.fade, stagger = _vars.stagger, spin = _vars.spin, prune = _vars.prune, props = ("props" in vars ? vars : fromState).props, tweenVars = _copy(vars, _reserved), animation = gsap3.timeline({
      delay,
      paused,
      repeat,
      repeatDelay,
      yoyo,
      data: "isFlip"
    }), remainingProps = tweenVars, entering = [], leaving = [], comps = [], swapOutTargets = [], spinNum = spin === true ? 1 : spin || 0, spinFunc = typeof spin === "function" ? spin : function() {
      return spinNum;
    }, interrupted = fromState.interrupted || toState.interrupted, addFunc = animation[relative !== 1 ? "to" : "from"], v, p, endTime, i3, el, comp, state, targets, finalStates, fromNode, toNode, run, a2, b;
    for (p in toState.idLookup) {
      toNode = !toState.alt[p] ? toState.idLookup[p] : _getChangingElState(toState, fromState, p);
      el = toNode.element;
      fromNode = fromState.idLookup[p];
      fromState.alt[p] && el === fromNode.element && (fromState.alt[p].isVisible || !toNode.isVisible) && (fromNode = fromState.alt[p]);
      if (fromNode) {
        comp = {
          t: el,
          b: fromNode,
          a: toNode,
          sd: fromNode.element === el ? 0 : toNode.isVisible ? 1 : -1
        };
        comps.push(comp);
        if (comp.sd) {
          if (comp.sd < 0) {
            comp.b = toNode;
            comp.a = fromNode;
          }
          interrupted && _recordInlineStyles(comp.b, props ? _memoizedRemoveProps[props] : _removeProps);
          fade && comps.push(comp.swap = {
            t: fromNode.element,
            b: comp.b,
            a: comp.a,
            sd: -comp.sd,
            swap: comp
          });
        }
        el._flip = fromNode.element._flip = _batch ? _batch.timeline : animation;
      } else if (toNode.isVisible) {
        comps.push({
          t: el,
          b: _copy(toNode, {
            isVisible: 1
          }),
          a: toNode,
          sd: 0,
          entering: 1
        });
        el._flip = _batch ? _batch.timeline : animation;
      }
    }
    props && (_memoizedProps[props] || _memoizeProps(props)).forEach(function(p2) {
      return tweenVars[p2] = function(i4) {
        return comps[i4].a.props[p2];
      };
    });
    comps.finalStates = finalStates = [];
    run = function run2() {
      _orderByDOMDepth(comps);
      _lockBodyScroll(true);
      for (i3 = 0; i3 < comps.length; i3++) {
        comp = comps[i3];
        a2 = comp.a;
        b = comp.b;
        if (prune && !a2.isDifferent(b) && !comp.entering) {
          comps.splice(i3--, 1);
        } else {
          el = comp.t;
          nested && !(comp.sd < 0) && i3 && (a2.matrix = getGlobalMatrix(el, false, false, true));
          if (b.isVisible && a2.isVisible) {
            if (comp.sd < 0) {
              state = new ElementState(el, props, fromState.simple);
              _fit(state, a2, scale, 0, 0, state);
              state.matrix = getGlobalMatrix(el, false, false, true);
              state.css = comp.b.css;
              comp.a = a2 = state;
              fade && (el.style.opacity = interrupted ? b.opacity : a2.opacity);
              stagger && swapOutTargets.push(el);
            } else if (comp.sd > 0 && fade) {
              el.style.opacity = interrupted ? a2.opacity - b.opacity : "0";
            }
            _fit(a2, b, scale, props);
          } else if (b.isVisible !== a2.isVisible) {
            if (!b.isVisible) {
              a2.isVisible && entering.push(a2);
              comps.splice(i3--, 1);
            } else if (!a2.isVisible) {
              b.css = a2.css;
              leaving.push(b);
              comps.splice(i3--, 1);
              absolute && nested && _fit(a2, b, scale, props);
            }
          }
          if (!scale) {
            el.style.maxWidth = Math.max(a2.width, b.width) + "px";
            el.style.maxHeight = Math.max(a2.height, b.height) + "px";
            el.style.minWidth = Math.min(a2.width, b.width) + "px";
            el.style.minHeight = Math.min(a2.height, b.height) + "px";
          }
          nested && toggleClass && el.classList.add(toggleClass);
        }
        finalStates.push(a2);
      }
      var classTargets;
      if (toggleClass) {
        classTargets = finalStates.map(function(s3) {
          return s3.element;
        });
        nested && classTargets.forEach(function(e4) {
          return e4.classList.remove(toggleClass);
        });
      }
      _lockBodyScroll(false);
      if (scale) {
        tweenVars.scaleX = function(i4) {
          return comps[i4].a.scaleX;
        };
        tweenVars.scaleY = function(i4) {
          return comps[i4].a.scaleY;
        };
      } else {
        tweenVars.width = function(i4) {
          return comps[i4].a.width + "px";
        };
        tweenVars.height = function(i4) {
          return comps[i4].a.height + "px";
        };
        tweenVars.autoRound = vars.autoRound || false;
      }
      tweenVars.x = function(i4) {
        return comps[i4].a.x + "px";
      };
      tweenVars.y = function(i4) {
        return comps[i4].a.y + "px";
      };
      tweenVars.rotation = function(i4) {
        return comps[i4].a.rotation + (spin ? spinFunc(i4, targets[i4], targets) * 360 : 0);
      };
      tweenVars.skewX = function(i4) {
        return comps[i4].a.skewX;
      };
      targets = comps.map(function(c2) {
        return c2.t;
      });
      if (_zIndex || _zIndex === 0) {
        tweenVars.modifiers = {
          zIndex: function zIndex() {
            return _zIndex;
          }
        };
        tweenVars.zIndex = _zIndex;
        tweenVars.immediateRender = vars.immediateRender !== false;
      }
      fade && (tweenVars.opacity = function(i4) {
        return comps[i4].sd < 0 ? 0 : comps[i4].sd > 0 ? comps[i4].a.opacity : "+=0";
      });
      if (swapOutTargets.length) {
        stagger = gsap3.utils.distribute(stagger);
        var dummyArray = targets.slice(swapOutTargets.length);
        tweenVars.stagger = function(i4, el2) {
          return stagger(~swapOutTargets.indexOf(el2) ? targets.indexOf(comps[i4].swap.t) : i4, el2, dummyArray);
        };
      }
      _callbacks.forEach(function(name) {
        return vars[name] && animation.eventCallback(name, vars[name], vars[name + "Params"]);
      });
      if (custom && targets.length) {
        remainingProps = _copy(tweenVars, _reserved);
        if ("scale" in custom) {
          custom.scaleX = custom.scaleY = custom.scale;
          delete custom.scale;
        }
        for (p in custom) {
          v = _copy(custom[p], _fitReserved);
          v[p] = tweenVars[p];
          !("duration" in v) && "duration" in tweenVars && (v.duration = tweenVars.duration);
          v.stagger = tweenVars.stagger;
          addFunc.call(animation, targets, v, 0);
          delete remainingProps[p];
        }
      }
      if (targets.length || leaving.length || entering.length) {
        toggleClass && animation.add(function() {
          return _toggleClass(classTargets, toggleClass, animation._zTime < 0 ? "remove" : "add");
        }, 0) && !paused && _toggleClass(classTargets, toggleClass, "add");
        targets.length && addFunc.call(animation, targets, remainingProps, 0);
      }
      _handleCallback(onEnter, entering, animation);
      _handleCallback(onLeave, leaving, animation);
      var batchTl = _batch && _batch.timeline;
      if (batchTl) {
        batchTl.add(animation, 0);
        _batch._final.push(function() {
          return _setFinalStates(comps, !clearProps2);
        });
      }
      endTime = animation.duration();
      animation.call(function() {
        var forward = animation.time() >= endTime;
        forward && !batchTl && _setFinalStates(comps, !clearProps2);
        toggleClass && _toggleClass(classTargets, toggleClass, forward ? "remove" : "add");
      });
    };
    absoluteOnLeave && (absolute = comps.filter(function(comp2) {
      return !comp2.sd && !comp2.a.isVisible && comp2.b.isVisible;
    }).map(function(comp2) {
      return comp2.a.element;
    }));
    if (_batch) {
      var _batch$_abs;
      absolute && (_batch$_abs = _batch._abs).push.apply(_batch$_abs, _filterComps(comps, absolute));
      _batch._run.push(run);
    } else {
      absolute && _makeCompsAbsolute(_filterComps(comps, absolute));
      run();
    }
    var anim = _batch ? _batch.timeline : animation;
    anim.revert = function() {
      return _killFlip(anim, 1, 1);
    };
    return anim;
  };
  var _interrupt3 = function _interrupt4(tl) {
    tl.vars.onInterrupt && tl.vars.onInterrupt.apply(tl, tl.vars.onInterruptParams || []);
    tl.getChildren(true, false, true).forEach(_interrupt4);
  };
  var _killFlip = function _killFlip2(tl, action, force) {
    if (tl && tl.progress() < 1 && (!tl.paused() || force)) {
      if (action) {
        _interrupt3(tl);
        action < 2 && tl.progress(1);
        tl.kill();
      }
      return true;
    }
  };
  var _createLookup = function _createLookup2(state) {
    var lookup = state.idLookup = {}, alt = state.alt = {}, elStates = state.elementStates, i3 = elStates.length, elState;
    while (i3--) {
      elState = elStates[i3];
      lookup[elState.id] ? alt[elState.id] = elState : lookup[elState.id] = elState;
    }
  };
  var FlipState = /* @__PURE__ */ function() {
    function FlipState2(targets, vars, targetsAreElementStates) {
      this.props = vars && vars.props;
      this.simple = !!(vars && vars.simple);
      if (targetsAreElementStates) {
        this.targets = _elementsFromElementStates(targets);
        this.elementStates = targets;
        _createLookup(this);
      } else {
        this.targets = _toArray(targets);
        var soft = vars && (vars.kill === false || vars.batch && !vars.kill);
        _batch && !soft && _batch._kill.push(this);
        this.update(soft || !!_batch);
      }
    }
    var _proto = FlipState2.prototype;
    _proto.update = function update(soft) {
      var _this = this;
      this.elementStates = this.targets.map(function(el) {
        return new ElementState(el, _this.props, _this.simple);
      });
      _createLookup(this);
      this.interrupt(soft);
      this.recordInlineStyles();
      return this;
    };
    _proto.clear = function clear() {
      this.targets.length = this.elementStates.length = 0;
      _createLookup(this);
      return this;
    };
    _proto.fit = function fit(state, scale, nested) {
      var elStatesInOrder = _orderByDOMDepth(this.elementStates.slice(0), false, true), toElStates = (state || this).idLookup, i3 = 0, fromNode, toNode;
      for (; i3 < elStatesInOrder.length; i3++) {
        fromNode = elStatesInOrder[i3];
        nested && (fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true));
        toNode = toElStates[fromNode.id];
        toNode && _fit(fromNode, toNode, scale, true, 0, fromNode);
        fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true);
      }
      return this;
    };
    _proto.getProperty = function getProperty2(element, property) {
      var es = this.getElementState(element) || _emptyObj;
      return (property in es ? es : es.props || _emptyObj)[property];
    };
    _proto.add = function add(state) {
      var i3 = state.targets.length, lookup = this.idLookup, alt = this.alt, index, es, es2;
      while (i3--) {
        es = state.elementStates[i3];
        es2 = lookup[es.id];
        if (es2 && (es.element === es2.element || alt[es.id] && alt[es.id].element === es.element)) {
          index = this.elementStates.indexOf(es.element === es2.element ? es2 : alt[es.id]);
          this.targets.splice(index, 1, state.targets[i3]);
          this.elementStates.splice(index, 1, es);
        } else {
          this.targets.push(state.targets[i3]);
          this.elementStates.push(es);
        }
      }
      state.interrupted && (this.interrupted = true);
      state.simple || (this.simple = false);
      _createLookup(this);
      return this;
    };
    _proto.compare = function compare(state) {
      var l1 = state.idLookup, l2 = this.idLookup, unchanged = [], changed = [], enter = [], leave = [], targets = [], a1 = state.alt, a2 = this.alt, place = function place2(s12, s23, el2) {
        return (s12.isVisible !== s23.isVisible ? s12.isVisible ? enter : leave : s12.isVisible ? changed : unchanged).push(el2) && targets.push(el2);
      }, placeIfDoesNotExist = function placeIfDoesNotExist2(s12, s23, el2) {
        return targets.indexOf(el2) < 0 && place(s12, s23, el2);
      }, s1, s22, p, el, s1Alt, s2Alt, c1, c2;
      for (p in l1) {
        s1Alt = a1[p];
        s2Alt = a2[p];
        s1 = !s1Alt ? l1[p] : _getChangingElState(state, this, p);
        el = s1.element;
        s22 = l2[p];
        if (s2Alt) {
          c2 = s22.isVisible || !s2Alt.isVisible && el === s22.element ? s22 : s2Alt;
          c1 = s1Alt && !s1.isVisible && !s1Alt.isVisible && c2.element === s1Alt.element ? s1Alt : s1;
          if (c1.isVisible && c2.isVisible && c1.element !== c2.element) {
            (c1.isDifferent(c2) ? changed : unchanged).push(c1.element, c2.element);
            targets.push(c1.element, c2.element);
          } else {
            place(c1, c2, c1.element);
          }
          s1Alt && c1.element === s1Alt.element && (s1Alt = l1[p]);
          placeIfDoesNotExist(c1.element !== s22.element && s1Alt ? s1Alt : c1, s22, s22.element);
          placeIfDoesNotExist(s1Alt && s1Alt.element === s2Alt.element ? s1Alt : c1, s2Alt, s2Alt.element);
          s1Alt && placeIfDoesNotExist(s1Alt, s2Alt.element === s1Alt.element ? s2Alt : s22, s1Alt.element);
        } else {
          !s22 ? enter.push(el) : !s22.isDifferent(s1) ? unchanged.push(el) : place(s1, s22, el);
          s1Alt && placeIfDoesNotExist(s1Alt, s22, s1Alt.element);
        }
      }
      for (p in l2) {
        if (!l1[p]) {
          leave.push(l2[p].element);
          a2[p] && leave.push(a2[p].element);
        }
      }
      return {
        changed,
        unchanged,
        enter,
        leave
      };
    };
    _proto.recordInlineStyles = function recordInlineStyles() {
      var props = _memoizedRemoveProps[this.props] || _removeProps, i3 = this.elementStates.length;
      while (i3--) {
        _recordInlineStyles(this.elementStates[i3], props);
      }
    };
    _proto.interrupt = function interrupt(soft) {
      var _this2 = this;
      var timelines = [];
      this.targets.forEach(function(t3) {
        var tl = t3._flip, foundInProgress = _killFlip(tl, soft ? 0 : 1);
        soft && foundInProgress && timelines.indexOf(tl) < 0 && tl.add(function() {
          return _this2.updateVisibility();
        });
        foundInProgress && timelines.push(tl);
      });
      !soft && timelines.length && this.updateVisibility();
      this.interrupted || (this.interrupted = !!timelines.length);
    };
    _proto.updateVisibility = function updateVisibility() {
      this.elementStates.forEach(function(es) {
        var b = es.element.getBoundingClientRect();
        es.isVisible = !!(b.width || b.height || b.top || b.left);
        es.uncache = 1;
      });
    };
    _proto.getElementState = function getElementState(element) {
      return this.elementStates[this.targets.indexOf(_getEl(element))];
    };
    _proto.makeAbsolute = function makeAbsolute() {
      return _orderByDOMDepth(this.elementStates.slice(0), true, true).map(_makeAbsolute);
    };
    return FlipState2;
  }();
  var ElementState = /* @__PURE__ */ function() {
    function ElementState2(element, props, simple) {
      this.element = element;
      this.update(props, simple);
    }
    var _proto2 = ElementState2.prototype;
    _proto2.isDifferent = function isDifferent(state) {
      var b1 = this.bounds, b2 = state.bounds;
      return b1.top !== b2.top || b1.left !== b2.left || b1.width !== b2.width || b1.height !== b2.height || !this.matrix.equals(state.matrix) || this.opacity !== state.opacity || this.props && state.props && JSON.stringify(this.props) !== JSON.stringify(state.props);
    };
    _proto2.update = function update(props, simple) {
      var self2 = this, element = self2.element, getProp = gsap3.getProperty(element), cache = gsap3.core.getCache(element), bounds = element.getBoundingClientRect(), bbox = element.getBBox && typeof element.getBBox === "function" && element.nodeName.toLowerCase() !== "svg" && element.getBBox(), m = simple ? new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop()) : getGlobalMatrix(element, false, false, true);
      self2.getProp = getProp;
      self2.element = element;
      self2.id = _getID(element);
      self2.matrix = m;
      self2.cache = cache;
      self2.bounds = bounds;
      self2.isVisible = !!(bounds.width || bounds.height || bounds.left || bounds.top);
      self2.display = getProp("display");
      self2.position = getProp("position");
      self2.parent = element.parentNode;
      self2.x = getProp("x");
      self2.y = getProp("y");
      self2.scaleX = cache.scaleX;
      self2.scaleY = cache.scaleY;
      self2.rotation = getProp("rotation");
      self2.skewX = getProp("skewX");
      self2.opacity = getProp("opacity");
      self2.width = bbox ? bbox.width : _closestTenth(getProp("width", "px"), 0.04);
      self2.height = bbox ? bbox.height : _closestTenth(getProp("height", "px"), 0.04);
      props && _recordProps(self2, _memoizedProps[props] || _memoizeProps(props));
      self2.ctm = element.getCTM && element.nodeName.toLowerCase() === "svg" && _getCTM(element).inverse();
      self2.simple = simple || _round7(m.a) === 1 && !_round7(m.b) && !_round7(m.c) && _round7(m.d) === 1;
      self2.uncache = 0;
    };
    return ElementState2;
  }();
  var FlipAction = /* @__PURE__ */ function() {
    function FlipAction2(vars, batch) {
      this.vars = vars;
      this.batch = batch;
      this.states = [];
      this.timeline = batch.timeline;
    }
    var _proto3 = FlipAction2.prototype;
    _proto3.getStateById = function getStateById(id) {
      var i3 = this.states.length;
      while (i3--) {
        if (this.states[i3].idLookup[id]) {
          return this.states[i3];
        }
      }
    };
    _proto3.kill = function kill() {
      this.batch.remove(this);
    };
    return FlipAction2;
  }();
  var FlipBatch = /* @__PURE__ */ function() {
    function FlipBatch2(id) {
      this.id = id;
      this.actions = [];
      this._kill = [];
      this._final = [];
      this._abs = [];
      this._run = [];
      this.data = {};
      this.state = new FlipState();
      this.timeline = gsap3.timeline();
    }
    var _proto4 = FlipBatch2.prototype;
    _proto4.add = function add(config3) {
      var result = this.actions.filter(function(action) {
        return action.vars === config3;
      });
      if (result.length) {
        return result[0];
      }
      result = new FlipAction(typeof config3 === "function" ? {
        animate: config3
      } : config3, this);
      this.actions.push(result);
      return result;
    };
    _proto4.remove = function remove(action) {
      var i3 = this.actions.indexOf(action);
      i3 >= 0 && this.actions.splice(i3, 1);
      return this;
    };
    _proto4.getState = function getState(merge) {
      var _this3 = this;
      var prevBatch = _batch, prevAction = _batchAction;
      _batch = this;
      this.state.clear();
      this._kill.length = 0;
      this.actions.forEach(function(action) {
        if (action.vars.getState) {
          action.states.length = 0;
          _batchAction = action;
          action.state = action.vars.getState(action);
        }
        merge && action.states.forEach(function(s3) {
          return _this3.state.add(s3);
        });
      });
      _batchAction = prevAction;
      _batch = prevBatch;
      this.killConflicts();
      return this;
    };
    _proto4.animate = function animate() {
      var _this4 = this;
      var prevBatch = _batch, tl = this.timeline, i3 = this.actions.length, finalStates, endTime;
      _batch = this;
      tl.clear();
      this._abs.length = this._final.length = this._run.length = 0;
      this.actions.forEach(function(a2) {
        a2.vars.animate && a2.vars.animate(a2);
        var onEnter = a2.vars.onEnter, onLeave = a2.vars.onLeave, targets = a2.targets, s3, result;
        if (targets && targets.length && (onEnter || onLeave)) {
          s3 = new FlipState();
          a2.states.forEach(function(state) {
            return s3.add(state);
          });
          result = s3.compare(Flip.getState(targets));
          result.enter.length && onEnter && onEnter(result.enter);
          result.leave.length && onLeave && onLeave(result.leave);
        }
      });
      _makeCompsAbsolute(this._abs);
      this._run.forEach(function(f) {
        return f();
      });
      endTime = tl.duration();
      finalStates = this._final.slice(0);
      tl.add(function() {
        if (endTime <= tl.time()) {
          finalStates.forEach(function(f) {
            return f();
          });
          _forEachBatch(_this4, "onComplete");
        }
      });
      _batch = prevBatch;
      while (i3--) {
        this.actions[i3].vars.once && this.actions[i3].kill();
      }
      _forEachBatch(this, "onStart");
      tl.restart();
      return this;
    };
    _proto4.loadState = function loadState(done) {
      done || (done = function done2() {
        return 0;
      });
      var queue = [];
      this.actions.forEach(function(c2) {
        if (c2.vars.loadState) {
          var i3, f = function f2(targets) {
            targets && (c2.targets = targets);
            i3 = queue.indexOf(f2);
            if (~i3) {
              queue.splice(i3, 1);
              queue.length || done();
            }
          };
          queue.push(f);
          c2.vars.loadState(f);
        }
      });
      queue.length || done();
      return this;
    };
    _proto4.setState = function setState() {
      this.actions.forEach(function(c2) {
        return c2.targets = c2.vars.setState && c2.vars.setState(c2);
      });
      return this;
    };
    _proto4.killConflicts = function killConflicts(soft) {
      this.state.interrupt(soft);
      this._kill.forEach(function(state) {
        return state.interrupt(soft);
      });
      return this;
    };
    _proto4.run = function run(skipGetState, merge) {
      var _this5 = this;
      if (this !== _batch) {
        skipGetState || this.getState(merge);
        this.loadState(function() {
          if (!_this5._killed) {
            _this5.setState();
            _this5.animate();
          }
        });
      }
      return this;
    };
    _proto4.clear = function clear(stateOnly) {
      this.state.clear();
      stateOnly || (this.actions.length = 0);
    };
    _proto4.getStateById = function getStateById(id) {
      var i3 = this.actions.length, s3;
      while (i3--) {
        s3 = this.actions[i3].getStateById(id);
        if (s3) {
          return s3;
        }
      }
      return this.state.idLookup[id] && this.state;
    };
    _proto4.kill = function kill() {
      this._killed = 1;
      this.clear();
      delete _batchLookup[this.id];
    };
    return FlipBatch2;
  }();
  var Flip = /* @__PURE__ */ function() {
    function Flip2() {
    }
    Flip2.getState = function getState(targets, vars) {
      var state = _parseState(targets, vars);
      _batchAction && _batchAction.states.push(state);
      vars && vars.batch && Flip2.batch(vars.batch).state.add(state);
      return state;
    };
    Flip2.from = function from(state, vars) {
      vars = vars || {};
      "clearProps" in vars || (vars.clearProps = true);
      return _fromTo(state, _parseState(vars.targets || state.targets, {
        props: vars.props || state.props,
        simple: vars.simple,
        kill: !!vars.kill
      }), vars, -1);
    };
    Flip2.to = function to(state, vars) {
      return _fromTo(state, _parseState(vars.targets || state.targets, {
        props: vars.props || state.props,
        simple: vars.simple,
        kill: !!vars.kill
      }), vars, 1);
    };
    Flip2.fromTo = function fromTo(fromState, toState, vars) {
      return _fromTo(fromState, toState, vars);
    };
    Flip2.fit = function fit(fromEl, toEl, vars) {
      var v = vars ? _copy(vars, _fitReserved) : {}, _ref = vars || v, absolute = _ref.absolute, scale = _ref.scale, getVars = _ref.getVars, props = _ref.props, runBackwards = _ref.runBackwards, onComplete = _ref.onComplete, simple = _ref.simple, fitChild = vars && vars.fitChild && _getEl(vars.fitChild), before = _parseElementState(toEl, props, simple, fromEl), after = _parseElementState(fromEl, 0, simple, before), inlineProps = props ? _memoizedRemoveProps[props] : _removeProps, ctx = gsap3.context();
      props && _applyProps(v, before.props);
      _recordInlineStyles(after, inlineProps);
      if (runBackwards) {
        "immediateRender" in v || (v.immediateRender = true);
        v.onComplete = function() {
          _applyInlineStyles(after);
          onComplete && onComplete.apply(this, arguments);
        };
      }
      absolute && _makeAbsolute(after, before);
      v = _fit(after, before, scale || fitChild, props, fitChild, v.duration || getVars ? v : 0);
      ctx && !getVars && ctx.add(function() {
        return function() {
          return _applyInlineStyles(after);
        };
      });
      return getVars ? v : v.duration ? gsap3.to(after.element, v) : null;
    };
    Flip2.makeAbsolute = function makeAbsolute(targetsOrStates, vars) {
      return (targetsOrStates instanceof FlipState ? targetsOrStates : new FlipState(targetsOrStates, vars)).makeAbsolute();
    };
    Flip2.batch = function batch(id) {
      id || (id = "default");
      return _batchLookup[id] || (_batchLookup[id] = new FlipBatch(id));
    };
    Flip2.killFlipsOf = function killFlipsOf(targets, complete) {
      (targets instanceof FlipState ? targets.targets : _toArray(targets)).forEach(function(t3) {
        return t3 && _killFlip(t3._flip, complete !== false ? 1 : 2);
      });
    };
    Flip2.isFlipping = function isFlipping(target) {
      var f = Flip2.getByTarget(target);
      return !!f && f.isActive();
    };
    Flip2.getByTarget = function getByTarget(target) {
      return (_getEl(target) || _emptyObj)._flip;
    };
    Flip2.getElementState = function getElementState(target, props) {
      return new ElementState(_getEl(target), props);
    };
    Flip2.convertCoordinates = function convertCoordinates(fromElement, toElement, point) {
      var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
      return point ? m.apply(point) : m;
    };
    Flip2.register = function register(core) {
      _body2 = typeof document !== "undefined" && document.body;
      if (_body2) {
        gsap3 = core;
        _setDoc(_body2);
        _toArray = gsap3.utils.toArray;
        _getStyleSaver3 = gsap3.core.getStyleSaver;
        var snap3 = gsap3.utils.snap(0.1);
        _closestTenth = function _closestTenth2(value, add) {
          return snap3(parseFloat(value) + add);
        };
      }
    };
    return Flip2;
  }();
  Flip.version = "3.12.5";
  typeof window !== "undefined" && window.gsap && window.gsap.registerPlugin(Flip);

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/ScrollTrigger.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/Observer.js
  init_live_reload();
  function _defineProperties(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var gsap4;
  var _coreInitted3;
  var _clamp3;
  var _win4;
  var _doc4;
  var _docEl;
  var _body3;
  var _isTouch;
  var _pointerType;
  var ScrollTrigger;
  var _root;
  var _normalizer;
  var _eventTypes;
  var _context2;
  var _getGSAP3 = function _getGSAP4() {
    return gsap4 || typeof window !== "undefined" && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
  };
  var _startup = 1;
  var _observers = [];
  var _scrollers = [];
  var _proxies = [];
  var _getTime = Date.now;
  var _bridge = function _bridge2(name, value) {
    return value;
  };
  var _integrate = function _integrate2() {
    var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge3(name, value) {
      return data[name](value);
    };
  };
  var _getProxyProp = function _getProxyProp2(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  };
  var _isViewport = function _isViewport2(el) {
    return !!~_root.indexOf(el);
  };
  var _addListener = function _addListener2(element, type, func, passive, capture) {
    return element.addEventListener(type, func, {
      passive: passive !== false,
      capture: !!capture
    });
  };
  var _removeListener = function _removeListener2(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _scrollLeft = "scrollLeft";
  var _scrollTop = "scrollTop";
  var _onScroll = function _onScroll2() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  };
  var _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
    var cachingFunc = function cachingFunc2(value) {
      if (value || value === 0) {
        _startup && (_win4.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f(value);
        cachingFunc2.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value);
      } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
        cachingFunc2.cacheID = _scrollers.cache;
        cachingFunc2.v = f();
      }
      return cachingFunc2.v + cachingFunc2.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
  };
  var _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win4.scrollTo(value, _vertical.sc()) : _win4.pageXOffset || _doc4[_scrollLeft] || _docEl[_scrollLeft] || _body3[_scrollLeft] || 0;
    })
  };
  var _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win4.scrollTo(_horizontal.sc(), value) : _win4.pageYOffset || _doc4[_scrollTop] || _docEl[_scrollTop] || _body3[_scrollTop] || 0;
    })
  };
  var _getTarget = function _getTarget2(t3, self2) {
    return (self2 && self2._ctx && self2._ctx.selector || gsap4.utils.toArray)(t3)[0] || (typeof t3 === "string" && gsap4.config().nullTargetWarn !== false ? console.warn("Element not found:", t3) : null);
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s3 = _ref.s, sc = _ref.sc;
    _isViewport(element) && (element = _doc4.scrollingElement || _docEl);
    var i3 = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i3 && (i3 = _scrollers.push(element) - 1);
    _scrollers[i3 + offset] || _addListener(element, "scroll", _onScroll);
    var prev = _scrollers[i3 + offset], func = prev || (_scrollers[i3 + offset] = _scrollCacheFunc(_getProxyProp(element, s3), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
      return arguments.length ? element[s3] = value : element[s3];
    })));
    func.target = element;
    prev || (func.smooth = gsap4.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  };
  var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime(), t22 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
      var t3 = _getTime();
      if (force || t3 - t1 > min) {
        v2 = v1;
        v1 = value2;
        t22 = t1;
        t1 = t3;
      } else if (useDelta) {
        v1 += value2;
      } else {
        v1 = v2 + (value2 - v2) / (t3 - t22) * (t1 - t22);
      }
    }, reset = function reset2() {
      v2 = v1 = useDelta ? 0 : v1;
      t22 = t1 = 0;
    }, getVelocity = function getVelocity2(latestValue) {
      var tOld = t22, vOld = v2, t3 = _getTime();
      (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
      return t1 === t22 || t3 - t22 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t3 : t1) - tOld) * 1e3;
    };
    return {
      update,
      reset,
      getVelocity
    };
  };
  var _getEvent = function _getEvent2(e4, preventDefault) {
    preventDefault && !e4._gsapAllow && e4.preventDefault();
    return e4.changedTouches ? e4.changedTouches[0] : e4;
  };
  var _getAbsoluteMax = function _getAbsoluteMax2(a2) {
    var max = Math.max.apply(Math, a2), min = Math.min.apply(Math, a2);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  };
  var _setScrollTrigger = function _setScrollTrigger2() {
    ScrollTrigger = gsap4.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  };
  var _initCore5 = function _initCore6(core) {
    gsap4 = core || _getGSAP3();
    if (!_coreInitted3 && gsap4 && typeof document !== "undefined" && document.body) {
      _win4 = window;
      _doc4 = document;
      _docEl = _doc4.documentElement;
      _body3 = _doc4.body;
      _root = [_win4, _doc4, _docEl, _body3];
      _clamp3 = gsap4.utils.clamp;
      _context2 = gsap4.core.context || function() {
      };
      _pointerType = "onpointerenter" in _body3 ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win4.matchMedia && _win4.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win4 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function() {
        return _startup = 0;
      }, 500);
      _setScrollTrigger();
      _coreInitted3 = 1;
    }
    return _coreInitted3;
  };
  _horizontal.op = _vertical;
  _scrollers.cache = 0;
  var Observer = /* @__PURE__ */ function() {
    function Observer2(vars) {
      this.init(vars);
    }
    var _proto = Observer2.prototype;
    _proto.init = function init4(vars) {
      _coreInitted3 || _initCore5(gsap4) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap4.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce = debounce !== false;
      lineHeight || (lineHeight = parseFloat(_win4.getComputedStyle(_body3).lineHeight) || 22);
      var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self2 = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc4, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
        return onClickTime = _getTime();
      }, _ignoreCheck = function _ignoreCheck2(e4, isPointerOrTouch) {
        return (self2.event = e4) && ignore && ~ignore.indexOf(e4.target) || isPointerOrTouch && limitToTouch && e4.pointerType !== "touch" || ignoreCheck && ignoreCheck(e4, isPointerOrTouch);
      }, onStopFunc = function onStopFunc2() {
        self2._vx.reset();
        self2._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self2);
      }, update = function update2() {
        var dx = self2.deltaX = _getAbsoluteMax(deltaX), dy = self2.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
        onChange && (changedX || changedY) && onChange(self2, dx, dy, deltaX, deltaY);
        if (changedX) {
          onRight && self2.deltaX > 0 && onRight(self2);
          onLeft && self2.deltaX < 0 && onLeft(self2);
          onChangeX && onChangeX(self2);
          onToggleX && self2.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self2);
          prevDeltaX = self2.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }
        if (changedY) {
          onDown && self2.deltaY > 0 && onDown(self2);
          onUp && self2.deltaY < 0 && onUp(self2);
          onChangeY && onChangeY(self2);
          onToggleY && self2.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self2);
          prevDeltaY = self2.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }
        if (moved || dragged) {
          onMove && onMove(self2);
          if (dragged) {
            onDrag(self2);
            dragged = false;
          }
          moved = false;
        }
        locked && !(locked = false) && onLockAxis && onLockAxis(self2);
        if (wheeled) {
          onWheel(self2);
          wheeled = false;
        }
        id = 0;
      }, onDelta = function onDelta2(x, y, index) {
        deltaX[index] += x;
        deltaY[index] += y;
        self2._vx.update(x);
        self2._vy.update(y);
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
        if (lockAxis && !axis) {
          self2.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
          locked = true;
        }
        if (axis !== "y") {
          deltaX[2] += x;
          self2._vx.update(x, true);
        }
        if (axis !== "x") {
          deltaY[2] += y;
          self2._vy.update(y, true);
        }
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      }, _onDrag = function _onDrag2(e4) {
        if (_ignoreCheck(e4, 1)) {
          return;
        }
        e4 = _getEvent(e4, preventDefault);
        var x = e4.clientX, y = e4.clientY, dx = x - self2.x, dy = y - self2.y, isDragging = self2.isDragging;
        self2.x = x;
        self2.y = y;
        if (isDragging || Math.abs(self2.startX - x) >= dragMinimum || Math.abs(self2.startY - y) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self2.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self2);
        }
      }, _onPress = self2.onPress = function(e4) {
        if (_ignoreCheck(e4, 1) || e4 && e4.button) {
          return;
        }
        self2.axis = axis = null;
        onStopDelayedCall.pause();
        self2.isPressed = true;
        e4 = _getEvent(e4);
        prevDeltaX = prevDeltaY = 0;
        self2.startX = self2.x = e4.clientX;
        self2.startY = self2.y = e4.clientY;
        self2._vx.reset();
        self2._vy.reset();
        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
        self2.deltaX = self2.deltaY = 0;
        onPress && onPress(self2);
      }, _onRelease = self2.onRelease = function(e4) {
        if (_ignoreCheck(e4, 1)) {
          return;
        }
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self2.y - self2.startY), wasDragging = self2.isDragging, isDragNotClick = wasDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e4);
        if (!isDragNotClick && isTrackingDrag) {
          self2._vx.reset();
          self2._vy.reset();
          if (preventDefault && allowClicks) {
            gsap4.delayedCall(0.08, function() {
              if (_getTime() - onClickTime > 300 && !e4.defaultPrevented) {
                if (e4.target.click) {
                  e4.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win4, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e4.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self2.isDragging = self2.isGesturing = self2.isPressed = false;
        onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self2);
        onRelease && onRelease(self2, isDragNotClick);
      }, _onGestureStart = function _onGestureStart2(e4) {
        return e4.touches && e4.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e4, self2.isDragging);
      }, _onGestureEnd = function _onGestureEnd2() {
        return (self2.isGesturing = false) || onGestureEnd(self2);
      }, onScroll = function onScroll2(e4) {
        if (_ignoreCheck(e4)) {
          return;
        }
        var x = scrollFuncX(), y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      }, _onWheel = function _onWheel2(e4) {
        if (_ignoreCheck(e4)) {
          return;
        }
        e4 = _getEvent(e4, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e4.deltaMode === 1 ? lineHeight : e4.deltaMode === 2 ? _win4.innerHeight : 1) * wheelSpeed;
        onDelta(e4.deltaX * multiplier, e4.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      }, _onMove = function _onMove2(e4) {
        if (_ignoreCheck(e4)) {
          return;
        }
        var x = e4.clientX, y = e4.clientY, dx = x - self2.x, dy = y - self2.y;
        self2.x = x;
        self2.y = y;
        moved = true;
        onStop && onStopDelayedCall.restart(true);
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }, _onHover = function _onHover2(e4) {
        self2.event = e4;
        onHover(self2);
      }, _onHoverEnd = function _onHoverEnd2(e4) {
        self2.event = e4;
        onHoverEnd(self2);
      }, _onClick = function _onClick2(e4) {
        return _ignoreCheck(e4) || _getEvent(e4, preventDefault) && onClick(self2);
      };
      onStopDelayedCall = self2._dc = gsap4.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self2.deltaX = self2.deltaY = 0;
      self2._vx = _getVelocityProp(0, 50, true);
      self2._vy = _getVelocityProp(0, 50, true);
      self2.scrollX = scrollFuncX;
      self2.scrollY = scrollFuncY;
      self2.isDragging = self2.isGesturing = self2.isPressed = false;
      _context2(this);
      self2.enable = function(e4) {
        if (!self2.isEnabled) {
          _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
          type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener(target, _eventTypes[0], _onPress, passive, capture);
            _addListener(ownerDoc, _eventTypes[2], _onRelease);
            _addListener(ownerDoc, _eventTypes[3], _onRelease);
            allowClicks && _addListener(target, "click", clickCapture, true, true);
            onClick && _addListener(target, "click", _onClick);
            onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener(target, _pointerType + "move", _onMove);
          }
          self2.isEnabled = true;
          e4 && e4.type && _onPress(e4);
          onEnable && onEnable(self2);
        }
        return self2;
      };
      self2.disable = function() {
        if (self2.isEnabled) {
          _observers.filter(function(o2) {
            return o2 !== self2 && _isViewport(o2.target);
          }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          if (self2.isPressed) {
            self2._vx.reset();
            self2._vy.reset();
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }
          _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
          _removeListener(target, "wheel", _onWheel, capture);
          _removeListener(target, _eventTypes[0], _onPress, capture);
          _removeListener(ownerDoc, _eventTypes[2], _onRelease);
          _removeListener(ownerDoc, _eventTypes[3], _onRelease);
          _removeListener(target, "click", clickCapture, true);
          _removeListener(target, "click", _onClick);
          _removeListener(ownerDoc, "gesturestart", _onGestureStart);
          _removeListener(ownerDoc, "gestureend", _onGestureEnd);
          _removeListener(target, _pointerType + "enter", _onHover);
          _removeListener(target, _pointerType + "leave", _onHoverEnd);
          _removeListener(target, _pointerType + "move", _onMove);
          self2.isEnabled = self2.isPressed = self2.isDragging = false;
          onDisable && onDisable(self2);
        }
      };
      self2.kill = self2.revert = function() {
        self2.disable();
        var i3 = _observers.indexOf(self2);
        i3 >= 0 && _observers.splice(i3, 1);
        _normalizer === self2 && (_normalizer = 0);
      };
      _observers.push(self2);
      isNormalizer && _isViewport(target) && (_normalizer = self2);
      self2.enable(event);
    };
    _createClass(Observer2, [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]);
    return Observer2;
  }();
  Observer.version = "3.12.5";
  Observer.create = function(vars) {
    return new Observer(vars);
  };
  Observer.register = _initCore5;
  Observer.getAll = function() {
    return _observers.slice();
  };
  Observer.getById = function(id) {
    return _observers.filter(function(o2) {
      return o2.vars.id === id;
    })[0];
  };
  _getGSAP3() && gsap4.registerPlugin(Observer);

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/ScrollTrigger.js
  var gsap5;
  var _coreInitted4;
  var _win5;
  var _doc5;
  var _docEl2;
  var _body4;
  var _root2;
  var _resizeDelay;
  var _toArray2;
  var _clamp4;
  var _time2;
  var _syncInterval;
  var _refreshing;
  var _pointerIsDown;
  var _transformProp3;
  var _i;
  var _prevWidth;
  var _prevHeight;
  var _autoRefresh;
  var _sort;
  var _suppressOverwrites2;
  var _ignoreResize;
  var _normalizer2;
  var _ignoreMobileResize;
  var _baseScreenHeight;
  var _baseScreenWidth;
  var _fixIOSBug;
  var _context3;
  var _scrollRestoration;
  var _div100vh;
  var _100vh;
  var _isReverted;
  var _clampingMax;
  var _limitCallbacks;
  var _startup2 = 1;
  var _getTime2 = Date.now;
  var _time1 = _getTime2();
  var _lastScrollTime = 0;
  var _enabled = 0;
  var _parseClamp = function _parseClamp2(value, type, self2) {
    var clamp4 = _isString3(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self2["_" + type + "Clamp"] = clamp4;
    return clamp4 ? value.substr(6, value.length - 7) : value;
  };
  var _keepClamp = function _keepClamp2(value, clamp4) {
    return clamp4 && (!_isString3(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
  };
  var _rafBugFix = function _rafBugFix2() {
    return _enabled && requestAnimationFrame(_rafBugFix2);
  };
  var _pointerDownHandler = function _pointerDownHandler2() {
    return _pointerIsDown = 1;
  };
  var _pointerUpHandler = function _pointerUpHandler2() {
    return _pointerIsDown = 0;
  };
  var _passThrough3 = function _passThrough4(v) {
    return v;
  };
  var _round9 = function _round10(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _windowExists5 = function _windowExists6() {
    return typeof window !== "undefined";
  };
  var _getGSAP5 = function _getGSAP6() {
    return gsap5 || _windowExists5() && (gsap5 = window.gsap) && gsap5.registerPlugin && gsap5;
  };
  var _isViewport3 = function _isViewport4(e4) {
    return !!~_root2.indexOf(e4);
  };
  var _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win5["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body4["client" + dimensionProperty];
  };
  var _getBoundsFunc = function _getBoundsFunc2(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
      _winOffsets.width = _win5.innerWidth;
      _winOffsets.height = _100vh;
      return _winOffsets;
    } : function() {
      return _getBounds(element);
    });
  };
  var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
    var d = _ref.d, d2 = _ref.d2, a2 = _ref.a;
    return (a2 = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
      return a2()[d];
    } : function() {
      return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
    };
  };
  var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
      return _winOffsets;
    };
  };
  var _maxScroll = function _maxScroll2(element, _ref2) {
    var s3 = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a2 = _ref2.a;
    return Math.max(0, (s3 = "scroll" + d2) && (a2 = _getProxyProp(element, s3)) ? a2() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s3] || _body4[s3]) - _getViewportDimension(d2) : element[s3] - element["offset" + d2]);
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
    for (var i3 = 0; i3 < _autoRefresh.length; i3 += 3) {
      (!events || ~events.indexOf(_autoRefresh[i3 + 1])) && func(_autoRefresh[i3], _autoRefresh[i3 + 1], _autoRefresh[i3 + 2]);
    }
  };
  var _isString3 = function _isString4(value) {
    return typeof value === "string";
  };
  var _isFunction3 = function _isFunction4(value) {
    return typeof value === "function";
  };
  var _isNumber5 = function _isNumber6(value) {
    return typeof value === "number";
  };
  var _isObject3 = function _isObject4(value) {
    return typeof value === "object";
  };
  var _endAnimation = function _endAnimation2(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  };
  var _callback3 = function _callback4(self2, func) {
    if (self2.enabled) {
      var result = self2._ctx ? self2._ctx.add(function() {
        return func(self2);
      }) : func(self2);
      result && result.totalTime && (self2.callbackAnimation = result);
    }
  };
  var _abs2 = Math.abs;
  var _left = "left";
  var _top = "top";
  var _right = "right";
  var _bottom = "bottom";
  var _width = "width";
  var _height = "height";
  var _Right = "Right";
  var _Left = "Left";
  var _Top = "Top";
  var _Bottom = "Bottom";
  var _padding = "padding";
  var _margin = "margin";
  var _Width = "Width";
  var _Height = "Height";
  var _px = "px";
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win5.getComputedStyle(element);
  };
  var _makePositionable = function _makePositionable2(element) {
    var position = _getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  };
  var _setDefaults3 = function _setDefaults4(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _getBounds = function _getBounds2(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp3] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap5.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  };
  var _getSize = function _getSize2(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  };
  var _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
    var a2 = [], labels = timeline2.labels, duration = timeline2.duration(), p;
    for (p in labels) {
      a2.push(labels[p] / duration);
    }
    return a2;
  };
  var _getClosestLabel = function _getClosestLabel2(animation) {
    return function(value) {
      return gsap5.utils.snap(_getLabelRatioArray(animation), value);
    };
  };
  var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
    var snap3 = gsap5.utils.snap(snapIncrementOrArray), a2 = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a3, b) {
      return a3 - b;
    });
    return a2 ? function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var i3;
      if (!direction) {
        return snap3(value);
      }
      if (direction > 0) {
        value -= threshold;
        for (i3 = 0; i3 < a2.length; i3++) {
          if (a2[i3] >= value) {
            return a2[i3];
          }
        }
        return a2[i3 - 1];
      } else {
        i3 = a2.length;
        value += threshold;
        while (i3--) {
          if (a2[i3] <= value) {
            return a2[i3];
          }
        }
      }
      return a2[0];
    } : function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var snapped = snap3(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  };
  var _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
    return function(value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
    };
  };
  var _multiListener = function _multiListener2(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
      return func(element, type, callback);
    });
  };
  var _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener3 = function _removeListener4(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _wheelListener = function _wheelListener2(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
      func(el, "wheel", scrollFunc);
      func(el, "touchmove", scrollFunc);
    }
  };
  var _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  };
  var _defaults2 = {
    toggleActions: "play",
    anticipatePin: 0
  };
  var _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  };
  var _offsetToPx = function _offsetToPx2(value, size) {
    if (_isString3(value)) {
      var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  };
  var _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e4 = _doc5.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body4 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e4._isStart = isStart;
    e4.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e4.style.cssText = css;
    e4.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e4, parent.children[0]) : parent.appendChild(e4);
    e4._offset = e4["offset" + direction.op.d2];
    _positionMarker(e4, 0, direction, isStart);
    return e4;
  };
  var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap5.set(marker, vars);
  };
  var _triggers = [];
  var _ids = {};
  var _rafID;
  var _sync = function _sync2() {
    return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  };
  var _onScroll3 = function _onScroll4() {
    if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body4.clientWidth) {
      _scrollers.cache++;
      if (_normalizer2) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll();
      }
      _lastScrollTime || _dispatch3("scrollStart");
      _lastScrollTime = _getTime2();
    }
  };
  var _setBaseDimensions = function _setBaseDimensions2() {
    _baseScreenWidth = _win5.innerWidth;
    _baseScreenHeight = _win5.innerHeight;
  };
  var _onResize = function _onResize2() {
    _scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc5.fullscreenElement && !_doc5.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win5.innerWidth || Math.abs(_win5.innerHeight - _baseScreenHeight) > _win5.innerHeight * 0.25) && _resizeDelay.restart(true);
  };
  var _listeners2 = {};
  var _emptyArray2 = [];
  var _softRefresh = function _softRefresh2() {
    return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
  };
  var _dispatch3 = function _dispatch4(type) {
    return _listeners2[type] && _listeners2[type].map(function(f) {
      return f();
    }) || _emptyArray2;
  };
  var _savedStyles = [];
  var _revertRecorded = function _revertRecorded2(media) {
    for (var i3 = 0; i3 < _savedStyles.length; i3 += 5) {
      if (!media || _savedStyles[i3 + 4] && _savedStyles[i3 + 4].query === media) {
        _savedStyles[i3].style.cssText = _savedStyles[i3 + 1];
        _savedStyles[i3].getBBox && _savedStyles[i3].setAttribute("transform", _savedStyles[i3 + 2] || "");
        _savedStyles[i3 + 3].uncache = 1;
      }
    }
  };
  var _revertAll = function _revertAll2(kill, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (trigger && (!media || trigger._ctx === media)) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }
    _isReverted = true;
    media && _revertRecorded(media);
    media || _dispatch3("revert");
  };
  var _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
    _scrollers.cache++;
    (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
      return _isFunction3(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString3(scrollRestoration) && (_win5.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  };
  var _refreshingAll;
  var _refreshID = 0;
  var _queueRefreshID;
  var _queueRefreshAll = function _queueRefreshAll2() {
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function() {
        return id === _refreshID && _refreshAll(true);
      });
    }
  };
  var _refresh100vh = function _refresh100vh2() {
    _body4.appendChild(_div100vh);
    _100vh = !_normalizer2 && _div100vh.offsetHeight || _win5.innerHeight;
    _body4.removeChild(_div100vh);
  };
  var _hideAllMarkers = function _hideAllMarkers2(hide) {
    return _toArray2(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
      return el.style.display = hide ? "none" : "block";
    });
  };
  var _refreshAll = function _refreshAll2(force, skipRevert) {
    if (_lastScrollTime && !force && !_isReverted) {
      _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
      return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger2.isRefreshing = true;
    _scrollers.forEach(function(obj) {
      return _isFunction3(obj) && ++obj.cacheID && (obj.rec = obj());
    });
    var refreshInits = _dispatch3("refreshInit");
    _sort && ScrollTrigger2.sort();
    skipRevert || _revertAll();
    _scrollers.forEach(function(obj) {
      if (_isFunction3(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto");
        obj(0);
      }
    });
    _triggers.slice(0).forEach(function(t3) {
      return t3.refresh();
    });
    _isReverted = false;
    _triggers.forEach(function(t3) {
      if (t3._subPinOffset && t3.pin) {
        var prop = t3.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t3.pin[prop];
        t3.revert(true, 1);
        t3.adjustPinSpacing(t3.pin[prop] - original);
        t3.refresh();
      }
    });
    _clampingMax = 1;
    _hideAllMarkers(true);
    _triggers.forEach(function(t3) {
      var max = _maxScroll(t3.scroller, t3._dir), endClamp = t3.vars.end === "max" || t3._endClamp && t3.end > max, startClamp = t3._startClamp && t3.start >= max;
      (endClamp || startClamp) && t3.setPositions(startClamp ? max - 1 : t3.start, endClamp ? Math.max(startClamp ? max : t3.start + 1, max) : t3.end, true);
    });
    _hideAllMarkers(false);
    _clampingMax = 0;
    refreshInits.forEach(function(result) {
      return result && result.render && result.render(-1);
    });
    _scrollers.forEach(function(obj) {
      if (_isFunction3(obj)) {
        obj.smooth && requestAnimationFrame(function() {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function(t3) {
      return _isFunction3(t3.vars.onRefresh) && t3.vars.onRefresh(t3);
    });
    _refreshingAll = ScrollTrigger2.isRefreshing = false;
    _dispatch3("refresh");
  };
  var _lastScroll = 0;
  var _direction = 1;
  var _primary;
  var _updateAll = function _updateAll2(force) {
    if (force === 2 || !_refreshingAll && !_isReverted) {
      ScrollTrigger2.isUpdating = true;
      _primary && _primary.update(0);
      var l2 = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l2 && _triggers[0].scroll();
      _direction = _lastScroll > scroll ? -1 : 1;
      _refreshingAll || (_lastScroll = scroll);
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch3("scrollEnd");
        }
        _time2 = _time1;
        _time1 = time;
      }
      if (_direction < 0) {
        _i = l2;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l2; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      ScrollTrigger2.isUpdating = false;
    }
    _rafID = 0;
  };
  var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
  var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
  var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
    pin._gsap.swappedIn = false;
  };
  var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i3 = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
      while (i3--) {
        p = _propNamesToCopy[i3];
        spacerStyle[p] = cs[p];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }
      pin._gsap.swappedIn = true;
    }
  };
  var _capsExp2 = /([A-Z])/g;
  var _setState = function _setState2(state) {
    if (state) {
      var style = state.t.style, l2 = state.length, i3 = 0, p, value;
      (state.t._gsap || gsap5.core.getCache(state.t)).uncache = 1;
      for (; i3 < l2; i3 += 2) {
        value = state[i3 + 1];
        p = state[i3];
        if (value) {
          style[p] = value;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp2, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l2 = _stateProps.length, style = element.style, state = [], i3 = 0;
    for (; i3 < l2; i3++) {
      state.push(_stateProps[i3], style[_stateProps[i3]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l2 = state.length, i3 = omitOffsets ? 8 : 0, p;
    for (; i3 < l2; i3 += 2) {
      p = state[i3];
      result.push(p, p in override ? override[p] : state[i3 + 1]);
    }
    result.t = state.t;
    return result;
  };
  var _winOffsets = {
    left: 0,
    top: 0
  };
  var _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self2, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction3(value) && (value = value(self2));
    if (_isString3(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value);
    if (!_isNumber5(value)) {
      _isFunction3(trigger) && (trigger = trigger(self2));
      var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
      element = _getTarget(trigger, self2) || _body4;
      bounds = _getBounds(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else {
      containerAnimation && (value = gsap5.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
      markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
      self2[clampZeroProp] = value || -1e-3;
      value < 0 && (value = 0);
    }
    if (marker) {
      var position = value + scrollerSize, isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body4[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  };
  var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
  var _reparent = function _reparent2(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style, p, cs;
      if (parent === _body4) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle(element);
        for (p in cs) {
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
            style[p] = cs[p];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap5.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  };
  var _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value) {
      var current = Math.round(getValueFunc());
      if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
        value = current;
        onInterrupt && onInterrupt();
      }
      last2 = last1;
      last1 = value;
      return value;
    };
  };
  var _shiftMarker = function _shiftMarker2(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap5.set(marker, vars);
  };
  var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
      initialValue = initialValue || getScroll();
      var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
        tween.kill();
        getTween2.tween = 0;
      });
      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      vars[prop] = scrollTo;
      vars.inherit = false;
      vars.modifiers = modifiers;
      modifiers[prop] = function() {
        return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
      };
      vars.onUpdate = function() {
        _scrollers.cache++;
        getTween2.tween && _updateAll();
      };
      vars.onComplete = function() {
        getTween2.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween2.tween = gsap5.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener3(scroller, "wheel", getScroll.wheelHandler);
    ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
  };
  var ScrollTrigger2 = /* @__PURE__ */ function() {
    function ScrollTrigger3(vars, animation) {
      _coreInitted4 || ScrollTrigger3.register(gsap5) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      _context3(this);
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger3.prototype;
    _proto.init = function init4(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough3;
        return;
      }
      vars = _setDefaults3(_isString3(vars) || _isNumber5(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults2);
      var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win5), scrollerCache = gsap5.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self2 = this, onRefreshInit = vars.onRefreshInit && function() {
        return vars.onRefreshInit(self2);
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
      self2._startClamp = self2._endClamp = false;
      self2._dir = direction;
      anticipatePin *= 45;
      self2.scroller = scroller;
      self2.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self2.vars = vars;
      animation = animation || vars.animation;
      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self2);
      }
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      self2.scrubDuration = function(value) {
        scrubSmooth = _isNumber5(value) && value;
        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value) : scrubTween = gsap5.to(animation, {
            ease: "expo",
            totalProgress: "+=0",
            inherit: false,
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self2);
            }
          });
        }
      };
      if (animation) {
        animation.vars.lazy = false;
        animation._initted && !self2.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
        self2.animation = animation.pause();
        animation.scrollTrigger = self2;
        self2.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      if (snap3) {
        if (!_isObject3(snap3) || snap3.push) {
          snap3 = {
            snapTo: snap3
          };
        }
        "scrollBehavior" in _body4.style && gsap5.set(isViewport ? [_body4, _docEl2] : scroller, {
          scrollBehavior: "auto"
        });
        _scrollers.forEach(function(o2) {
          return _isFunction3(o2) && o2.target === (isViewport ? _doc5.scrollingElement || _docEl2 : scroller) && (o2.smooth = false);
        });
        snapFunc = _isFunction3(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
          return _snapDirectional(snap3.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
        } : gsap5.utils.snap(snap3.snapTo);
        snapDurClamp = snap3.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject3(snapDurClamp) ? _clamp4(snapDurClamp.min, snapDurClamp.max) : _clamp4(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap5.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
          var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
          if ((refreshedRecently || Math.abs(self2.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
            var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap5.utils.clamp(-progress, 1 - progress, _abs2(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
            endValue = snapFunc(naturalEnd, self2);
            _isNumber5(endValue) || (endValue = naturalEnd);
            endScroll = Math.round(start + endValue * change);
            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs2(endScroll - scroll)) {
                return;
              }
              if (snap3.inertia === false) {
                change1 = endValue - progress;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs2(Math.max(_abs2(naturalEnd - totalProgress), _abs2(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap3.ease || "power3",
                data: _abs2(endScroll - scroll),
                // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self2);
                },
                onComplete: function onComplete() {
                  self2.update();
                  lastSnap = scrollFunc();
                  if (animation) {
                    scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                  }
                  snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self2.progress;
                  onSnapComplete && onSnapComplete(self2);
                  _onComplete && _onComplete(self2);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self2, tweenTo.tween);
            }
          } else if (self2.isActive && lastSnap !== scroll) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self2);
      trigger = self2.trigger = _getTarget(trigger || pin !== true && pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self2));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString3(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
        self2.pin = pin;
        pinCache = gsap5.core.getCache(pin);
        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }
          pinCache.spacer = spacer = pinSpacer || _doc5.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        vars.force3D !== false && gsap5.set(pin, {
          force3D: true
        });
        self2.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap5.getProperty(pin);
        pinSetter = gsap5.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject3(markers) ? _setDefaults3(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap5.quickSetter([markerStart, markerEnd], direction.a, _px));
        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body4 : scroller);
          gsap5.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap5.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap5.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function() {
          self2.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
        });
      }
      self2.previous = function() {
        return _triggers[_triggers.indexOf(self2) - 1];
      };
      self2.next = function() {
        return _triggers[_triggers.indexOf(self2) + 1];
      };
      self2.revert = function(revert, temp) {
        if (!temp) {
          return self2.kill(true);
        }
        var r2 = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
        if (r2 !== self2.isReverted) {
          if (r2) {
            prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
            prevProgress = self2.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
            return m.style.display = r2 ? "none" : "block";
          });
          if (r2) {
            _refreshing = self2;
            self2.update(r2);
          }
          if (pin && (!pinReparent || !self2.isActive)) {
            if (r2) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
            }
          }
          r2 || self2.update(r2);
          _refreshing = prevRefreshing;
          self2.isReverted = r2;
        }
      };
      self2.refresh = function(soft, force, position, pinOffset) {
        if ((_refreshing || !self2.enabled) && !force) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
          return;
        }
        !_refreshingAll && onRefreshInit && onRefreshInit(self2);
        _refreshing = self2;
        if (tweenTo.tween && !position) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }
        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.revert({
          kill: false
        }).invalidate();
        self2.isReverted || self2.revert(true, true);
        self2._subPinOffset = false;
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject3(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject3(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self2.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self2), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i3 = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
        if (markers && _isObject3(position)) {
          markerStartOffset = gsap5.getProperty(markerStartTrigger, direction.p);
          markerEndOffset = gsap5.getProperty(markerEndTrigger, direction.p);
        }
        while (i3--) {
          curTrigger = _triggers[i3];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self2);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }
          if (curTrigger !== _triggers[i3]) {
            triggerIndex--;
            i3--;
          }
        }
        _isFunction3(parsedStart) && (parsedStart = parsedStart(self2));
        parsedStart = _parseClamp(parsedStart, "start", self2);
        start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
        _isFunction3(parsedEnd) && (parsedEnd = parsedEnd(self2));
        if (_isString3(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString3(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset2 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString3(parsedStart) ? parsedStart : (containerAnimation ? gsap5.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
            parsedEndTrigger = trigger;
          }
        }
        parsedEnd = _parseClamp(parsedEnd, "end", self2);
        end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._endClamp && "_endClamp")) || -1e-3;
        offset2 = 0;
        i3 = triggerIndex;
        while (i3--) {
          curTrigger = _triggers[i3];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
            cs2 = curTrigger.end - (self2._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
              offset2 += cs2 * (1 - curTrigger.progress);
            }
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start += offset2;
        end += offset2;
        self2._startClamp && (self2._startClamp += offset2);
        if (self2._endClamp && !_refreshingAll) {
          self2._endClamp = end || -1e-3;
          end = Math.min(end, _maxScroll(scroller, direction));
        }
        change = end - start || (start -= 0.01) && 1e-3;
        if (isFirstRefresh) {
          prevProgress = gsap5.utils.clamp(0, 1, gsap5.utils.normalize(start, end, prevScroll));
        }
        self2._pinPush = otherPinOffset;
        if (markerStart && offset2) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset2;
          pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
          gsap5.set([markerStart, markerEnd], cs2);
        }
        if (pin && !(_clampingMax && self2.end >= _maxScroll(scroller, direction))) {
          cs2 = _getComputedStyle(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          if (!max && end > 1) {
            forcedOverflow = (isViewport ? _doc5.scrollingElement || _docEl2 : scroller).style;
            forcedOverflow = {
              style: forcedOverflow,
              value: forcedOverflow["overflow" + direction.a.toUpperCase()]
            };
            if (isViewport && _getComputedStyle(_body4)["overflow" + direction.a.toUpperCase()] !== "scroll") {
              forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
            }
          }
          _swapPinIn(pin, spacer, cs2);
          pinState = _getState(pin);
          bounds = _getBounds(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i3 = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            if (i3) {
              spacerState.push(direction.d, i3 + _px);
              spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i3 + _px);
            }
            _setState(spacerState);
            if (pinnedContainer) {
              _triggers.forEach(function(t3) {
                if (t3.pin === pinnedContainer && t3.vars.pinSpacing !== false) {
                  t3._subPinOffset = true;
                }
              });
            }
            useFixedPosition && scrollFunc(prevScroll);
          } else {
            i3 = _getSize(pin, direction);
            i3 && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i3 + _px);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs2[_padding];
            override[_padding + _Top] = cs2[_padding + _Top];
            override[_padding + _Right] = cs2[_padding + _Right];
            override[_padding + _Bottom] = cs2[_padding + _Bottom];
            override[_padding + _Left] = cs2[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
            _refreshingAll && scrollFunc(0);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites2(1);
            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            pinMoves = Math.abs(change - pinChange) > 1;
            useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate(true);
            animation.parent || animation.totalTime(animation.totalTime());
            _suppressOverwrites2(0);
          } else {
            pinChange = change;
          }
          forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body4) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        revertedPins && revertedPins.forEach(function(t3) {
          return t3.revert(false, true);
        });
        self2.start = start;
        self2.end = end;
        scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
        if (!containerAnimation && !_refreshingAll) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self2.scroll.rec = 0;
        }
        self2.revert(false, true);
        lastRefresh = _getTime2();
        if (snapDelayedCall) {
          lastSnap = -1;
          snapDelayedCall.restart(true);
        }
        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
        if (isFirstRefresh || prevProgress !== self2.progress || containerAnimation || invalidateOnRefresh) {
          animation && !isToggle && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap5.utils.normalize(start, end, 0) : prevProgress, true);
          self2.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self2.progress * pinChange));
        scrubTween && scrubTween.invalidate();
        if (!isNaN(markerStartOffset)) {
          markerStartOffset -= gsap5.getProperty(markerStartTrigger, direction.p);
          markerEndOffset -= gsap5.getProperty(markerEndTrigger, direction.p);
          _shiftMarker(markerStartTrigger, direction, markerStartOffset);
          _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
          _shiftMarker(markerEndTrigger, direction, markerEndOffset);
          _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
        }
        isFirstRefresh && !_refreshingAll && self2.update();
        if (onRefresh && !_refreshingAll && !executingOnRefresh) {
          executingOnRefresh = true;
          onRefresh(self2);
          executingOnRefresh = false;
        }
      };
      self2.getVelocity = function() {
        return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
      };
      self2.endAnimation = function() {
        _endAnimation(self2.callbackAnimation);
        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self2.direction < 0, 1);
        }
      };
      self2.labelToScroll = function(label) {
        return animation && animation.labels && (start || self2.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };
      self2.getTrailing = function(name) {
        var i3 = _triggers.indexOf(self2), a2 = self2.direction > 0 ? _triggers.slice(0, i3).reverse() : _triggers.slice(i3 + 1);
        return (_isString3(name) ? a2.filter(function(t3) {
          return t3.vars.preventOverlaps === name;
        }) : a2).filter(function(t3) {
          return self2.direction > 0 ? t3.end <= start : t3.start >= end;
        });
      };
      self2.update = function(reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }
        var scroll = _refreshingAll === true ? prevScroll : self2.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;
          if (snap3) {
            snap22 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
          if (!clipped && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 1e-4;
          } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 0.9999;
          }
        }
        if (clipped !== prevProgress2 && self2.enabled) {
          isActive = self2.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress2 && prevProgress2 < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress2;
          self2.direction = clipped > prevProgress2 ? 1 : -1;
          self2.progress = clipped;
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }
          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction3(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t3) {
            return t3.endAnimation();
          }));
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup2) {
              scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
            }
          }
          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(_round9(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds(pin, true), _offset = scroll - start;
                  _reparent(pin, _body4, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive || isAtMax ? pinActiveState : pinState);
              pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }
          snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray2(toggleClass.targets).forEach(function(el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self2);
          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self2);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback3(self2, onToggle);
              callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
              once && (clipped === 1 ? self2.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
              }
            }
            if (fastScrollEnd && !isActive && Math.abs(self2.getVelocity()) > (_isNumber5(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self2.callbackAnimation);
              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self2);
          }
        }
        if (markerEndSetter) {
          var n3 = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n3 + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n3);
        }
        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };
      self2.enable = function(reset, refresh) {
        if (!self2.enabled) {
          self2.enabled = true;
          _addListener3(scroller, "resize", _onResize);
          isViewport || _addListener3(scroller, "scroll", _onScroll3);
          onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (reset !== false) {
            self2.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }
          refresh !== false && self2.refresh();
        }
      };
      self2.getTween = function(snap4) {
        return snap4 && tweenTo ? tweenTo.tween : scrubTween;
      };
      self2.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
        if (containerAnimation) {
          var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
          newStart = st.start + _change * newStart / duration;
          newEnd = st.start + _change * newEnd / duration;
        }
        self2.refresh(false, false, {
          start: _keepClamp(newStart, keepClamp && !!self2._startClamp),
          end: _keepClamp(newEnd, keepClamp && !!self2._endClamp)
        }, pinOffset);
        self2.update();
      };
      self2.adjustPinSpacing = function(amount) {
        if (spacerState && amount) {
          var i3 = spacerState.indexOf(direction.d) + 1;
          spacerState[i3] = parseFloat(spacerState[i3]) + amount + _px;
          spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
          _setState(spacerState);
        }
      };
      self2.disable = function(reset, allowAnimation) {
        if (self2.enabled) {
          reset !== false && self2.revert(true, true);
          self2.enabled = self2.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i3 = _triggers.length;
            while (i3--) {
              if (_triggers[i3].scroller === scroller && _triggers[i3] !== self2) {
                return;
              }
            }
            _removeListener3(scroller, "resize", _onResize);
            isViewport || _removeListener3(scroller, "scroll", _onScroll3);
          }
        }
      };
      self2.kill = function(revert, allowAnimation) {
        self2.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];
        var i3 = _triggers.indexOf(self2);
        i3 >= 0 && _triggers.splice(i3, 1);
        i3 === _i && _direction > 0 && _i--;
        i3 = 0;
        _triggers.forEach(function(t3) {
          return t3.scroller === self2.scroller && (i3 = 1);
        });
        i3 || _refreshingAll || (self2.scroll.rec = 0);
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.revert({
            kill: false
          });
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.parentNode && m.parentNode.removeChild(m);
        });
        _primary === self2 && (_primary = 0);
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i3 = 0;
          _triggers.forEach(function(t3) {
            return t3.pin === pin && i3++;
          });
          i3 || (pinCache.spacer = 0);
        }
        vars.onKill && vars.onKill(self2);
      };
      _triggers.push(self2);
      self2.enable(false, false);
      customRevertReturn && customRevertReturn(self2);
      if (animation && animation.add && !change) {
        var updateFunc = self2.update;
        self2.update = function() {
          self2.update = updateFunc;
          start || end || self2.refresh();
        };
        gsap5.delayedCall(0.01, self2.update);
        change = 0.01;
        start = end = 0;
      } else {
        self2.refresh();
      }
      pin && _queueRefreshAll();
    };
    ScrollTrigger3.register = function register(core) {
      if (!_coreInitted4) {
        gsap5 = core || _getGSAP5();
        _windowExists5() && window.document && ScrollTrigger3.enable();
        _coreInitted4 = _enabled;
      }
      return _coreInitted4;
    };
    ScrollTrigger3.defaults = function defaults2(config3) {
      if (config3) {
        for (var p in config3) {
          _defaults2[p] = config3[p];
        }
      }
      return _defaults2;
    };
    ScrollTrigger3.disable = function disable(reset, kill) {
      _enabled = 0;
      _triggers.forEach(function(trigger) {
        return trigger[kill ? "kill" : "disable"](reset);
      });
      _removeListener3(_win5, "wheel", _onScroll3);
      _removeListener3(_doc5, "scroll", _onScroll3);
      clearInterval(_syncInterval);
      _removeListener3(_doc5, "touchcancel", _passThrough3);
      _removeListener3(_body4, "touchstart", _passThrough3);
      _multiListener(_removeListener3, _doc5, "pointerdown,touchstart,mousedown", _pointerDownHandler);
      _multiListener(_removeListener3, _doc5, "pointerup,touchend,mouseup", _pointerUpHandler);
      _resizeDelay.kill();
      _iterateAutoRefresh(_removeListener3);
      for (var i3 = 0; i3 < _scrollers.length; i3 += 3) {
        _wheelListener(_removeListener3, _scrollers[i3], _scrollers[i3 + 1]);
        _wheelListener(_removeListener3, _scrollers[i3], _scrollers[i3 + 2]);
      }
    };
    ScrollTrigger3.enable = function enable() {
      _win5 = window;
      _doc5 = document;
      _docEl2 = _doc5.documentElement;
      _body4 = _doc5.body;
      if (gsap5) {
        _toArray2 = gsap5.utils.toArray;
        _clamp4 = gsap5.utils.clamp;
        _context3 = gsap5.core.context || _passThrough3;
        _suppressOverwrites2 = gsap5.core.suppressOverwrites || _passThrough3;
        _scrollRestoration = _win5.history.scrollRestoration || "auto";
        _lastScroll = _win5.pageYOffset;
        gsap5.core.globals("ScrollTrigger", ScrollTrigger3);
        if (_body4) {
          _enabled = 1;
          _div100vh = document.createElement("div");
          _div100vh.style.height = "100vh";
          _div100vh.style.position = "absolute";
          _refresh100vh();
          _rafBugFix();
          Observer.register(gsap5);
          ScrollTrigger3.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
          _ignoreMobileResize = Observer.isTouch === 1;
          _addListener3(_win5, "wheel", _onScroll3);
          _root2 = [_win5, _doc5, _docEl2, _body4];
          if (gsap5.matchMedia) {
            ScrollTrigger3.matchMedia = function(vars) {
              var mm = gsap5.matchMedia(), p;
              for (p in vars) {
                mm.add(p, vars[p]);
              }
              return mm;
            };
            gsap5.addEventListener("matchMediaInit", function() {
              return _revertAll();
            });
            gsap5.addEventListener("matchMediaRevert", function() {
              return _revertRecorded();
            });
            gsap5.addEventListener("matchMedia", function() {
              _refreshAll(0, 1);
              _dispatch3("matchMedia");
            });
            gsap5.matchMedia("(orientation: portrait)", function() {
              _setBaseDimensions();
              return _setBaseDimensions;
            });
          } else {
            console.warn("Requires GSAP 3.11.0 or later");
          }
          _setBaseDimensions();
          _addListener3(_doc5, "scroll", _onScroll3);
          var bodyStyle = _body4.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap5.core.Animation.prototype, bounds, i3;
          AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
            value: function value() {
              return this.time(-0.01, true);
            }
          });
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds(_body4);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          _syncInterval = setInterval(_sync, 250);
          gsap5.delayedCall(0.5, function() {
            return _startup2 = 0;
          });
          _addListener3(_doc5, "touchcancel", _passThrough3);
          _addListener3(_body4, "touchstart", _passThrough3);
          _multiListener(_addListener3, _doc5, "pointerdown,touchstart,mousedown", _pointerDownHandler);
          _multiListener(_addListener3, _doc5, "pointerup,touchend,mouseup", _pointerUpHandler);
          _transformProp3 = gsap5.utils.checkPrefix("transform");
          _stateProps.push(_transformProp3);
          _coreInitted4 = _getTime2();
          _resizeDelay = gsap5.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc5, "visibilitychange", function() {
            var w = _win5.innerWidth, h2 = _win5.innerHeight;
            if (_doc5.hidden) {
              _prevWidth = w;
              _prevHeight = h2;
            } else if (_prevWidth !== w || _prevHeight !== h2) {
              _onResize();
            }
          }, _doc5, "DOMContentLoaded", _refreshAll, _win5, "load", _refreshAll, _win5, "resize", _onResize];
          _iterateAutoRefresh(_addListener3);
          _triggers.forEach(function(trigger) {
            return trigger.enable(0, 1);
          });
          for (i3 = 0; i3 < _scrollers.length; i3 += 3) {
            _wheelListener(_removeListener3, _scrollers[i3], _scrollers[i3 + 1]);
            _wheelListener(_removeListener3, _scrollers[i3], _scrollers[i3 + 2]);
          }
        }
      }
    };
    ScrollTrigger3.config = function config3(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
      var t3 = _getTarget(target), i3 = _scrollers.indexOf(t3), isViewport = _isViewport3(t3);
      if (~i3) {
        _scrollers.splice(i3, isViewport ? 6 : 2);
      }
      if (vars) {
        isViewport ? _proxies.unshift(_win5, vars, _body4, vars, _docEl2, vars) : _proxies.unshift(t3, vars);
      }
    };
    ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function(t3) {
        return t3._ctx && t3._ctx.query === query && t3._ctx.kill(true, true);
      });
    };
    ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString3(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win5.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win5.innerHeight;
    };
    ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString3(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win5.innerWidth : (bounds.top + offset) / _win5.innerHeight;
    };
    ScrollTrigger3.killAll = function killAll(allowListeners) {
      _triggers.slice(0).forEach(function(t3) {
        return t3.vars.id !== "ScrollSmoother" && t3.kill();
      });
      if (allowListeners !== true) {
        var listeners = _listeners2.killAll || [];
        _listeners2 = {};
        listeners.forEach(function(f) {
          return f();
        });
      }
    };
    return ScrollTrigger3;
  }();
  ScrollTrigger2.version = "3.12.5";
  ScrollTrigger2.saveStyles = function(targets) {
    return targets ? _toArray2(targets).forEach(function(target) {
      if (target && target.style) {
        var i3 = _savedStyles.indexOf(target);
        i3 >= 0 && _savedStyles.splice(i3, 5);
        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap5.core.getCache(target), _context3());
      }
    }) : _savedStyles;
  };
  ScrollTrigger2.revert = function(soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger2.create = function(vars, animation) {
    return new ScrollTrigger2(vars, animation);
  };
  ScrollTrigger2.refresh = function(safe) {
    return safe ? _onResize() : (_coreInitted4 || ScrollTrigger2.register()) && _refreshAll(true);
  };
  ScrollTrigger2.update = function(force) {
    return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
  };
  ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
  ScrollTrigger2.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getScrollFunc = function(element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getById = function(id) {
    return _ids[id];
  };
  ScrollTrigger2.getAll = function() {
    return _triggers.filter(function(t3) {
      return t3.vars.id !== "ScrollSmoother";
    });
  };
  ScrollTrigger2.isScrolling = function() {
    return !!_lastScrollTime;
  };
  ScrollTrigger2.snapDirectional = _snapDirectional;
  ScrollTrigger2.addEventListener = function(type, callback) {
    var a2 = _listeners2[type] || (_listeners2[type] = []);
    ~a2.indexOf(callback) || a2.push(callback);
  };
  ScrollTrigger2.removeEventListener = function(type, callback) {
    var a2 = _listeners2[type], i3 = a2 && a2.indexOf(callback);
    i3 >= 0 && a2.splice(i3, 1);
  };
  ScrollTrigger2.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
      var elements = [], triggers = [], delay = gsap5.delayedCall(interval, function() {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function(self2) {
        elements.length || delay.restart(true);
        elements.push(self2.trigger);
        triggers.push(self2);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p;
    for (p in vars) {
      varsCopy[p] = p.substr(0, 2) === "on" && _isFunction3(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }
    if (_isFunction3(batchMax)) {
      batchMax = batchMax();
      _addListener3(ScrollTrigger2, "refresh", function() {
        return batchMax = vars.batchMax();
      });
    }
    _toArray2(targets).forEach(function(target) {
      var config3 = {};
      for (p in varsCopy) {
        config3[p] = varsCopy[p];
      }
      config3.trigger = target;
      result.push(ScrollTrigger2.create(config3));
    });
    return result;
  };
  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  };
  var _allowNativePanning = function _allowNativePanning2(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }
    target === _docEl2 && _allowNativePanning2(_body4, direction);
  };
  var _overflow = {
    auto: 1,
    scroll: 1
  };
  var _nestedScroll = function _nestedScroll2(_ref5) {
    var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap5.core.getCache(node), time = _getTime2(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
      while (node && node !== _body4 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
      event.stopPropagation();
      event._gsapAllow = true;
    }
  };
  var _inputObserver = function _inputObserver2(target, type, inputs, nested) {
    return Observer.create({
      target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener3(_doc5, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener3(_doc5, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  };
  var _inputExp = /(input|label|select|textarea)/i;
  var _inputIsFocused;
  var _captureInputs = function _captureInputs2(e4) {
    var isInput = _inputExp.test(e4.target.tagName);
    if (isInput || _inputIsFocused) {
      e4._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  };
  var _getScrollNormalizer = function _getScrollNormalizer2(vars) {
    _isObject3(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self2, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap5.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win5.visualViewport ? _win5.visualViewport.scale * _win5.visualViewport.width : _win5.outerWidth) / _win5.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction3(momentum) ? function() {
      return momentum(self2);
    } : function() {
      return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
      return skipTouchMove = false;
    }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function updateClamps2() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp4(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp4(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset2() {
      content._gsap.y = _round9(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
      content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag2() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);
        var offset = _round9(self2.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
        if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll - scrollFuncY.v;
          var y = _round9((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
          content._gsap.y = y + "px";
          scrollFuncY.cacheID = _scrollers.cache;
          _updateAll();
        }
        return true;
      }
      scrollFuncY.offset && removeContentOffset();
      skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
      updateClamps();
      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };
    content && gsap5.set(content, {
      y: "+=0"
    });
    vars.ignoreCheck = function(e4) {
      return _fixIOSBug && e4.type === "touchmove" && ignoreDrag(e4) || scale > 1.05 && e4.type !== "touchstart" || self2.isGesturing || e4.touches && e4.touches.length > 1;
    };
    vars.onPress = function() {
      skipTouchMove = false;
      var prevScale = scale;
      scale = _round9((_win5.visualViewport && _win5.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self3, wasDragging) {
      scrollFuncY.offset && removeContentOffset();
      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _scrollers.cache++;
        var dur = resolveMomentumDuration(), currentScroll, endScroll;
        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self3.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }
        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self3.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);
        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap5.to({}, {
            onUpdate: onResize,
            duration: dur
          });
        }
      }
      onRelease && onRelease(self3);
    };
    vars.onWheel = function() {
      tween._ts && tween.pause();
      if (_getTime2() - wheelRefresh > 1e3) {
        lastRefreshID = 0;
        wheelRefresh = _getTime2();
      }
    };
    vars.onChange = function(self3, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self3.startX - self3.x) : scrollFuncX() + dx - xArray[1]));
      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self3.startY - self3.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
        isTouch && y !== yClamped && (startScrollY += yClamped - y);
        scrollFuncY(yClamped);
      }
      (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
      _allowNativePanning(target, normalizeScrollX ? false : "x");
      ScrollTrigger2.addEventListener("refresh", onResize);
      _addListener3(_win5, "resize", onResize);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function() {
      _allowNativePanning(target, true);
      _removeListener3(_win5, "resize", onResize);
      ScrollTrigger2.removeEventListener("refresh", onResize);
      inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self2 = new Observer(vars);
    self2.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    _fixIOSBug && gsap5.ticker.add(_passThrough3);
    onStopDelayedCall = self2._dc;
    tween = gsap5.to(self2, {
      ease: "power4",
      paused: true,
      inherit: false,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
          return tween.pause();
        })
      },
      onUpdate: _updateAll,
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self2;
  };
  ScrollTrigger2.sort = function(func) {
    return _triggers.sort(func || function(a2, b) {
      return (a2.vars.refreshPriority || 0) * -1e6 + a2.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
    });
  };
  ScrollTrigger2.observe = function(vars) {
    return new Observer(vars);
  };
  ScrollTrigger2.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") {
      return _normalizer2;
    }
    if (vars === true && _normalizer2) {
      return _normalizer2.enable();
    }
    if (vars === false) {
      _normalizer2 && _normalizer2.kill();
      _normalizer2 = vars;
      return;
    }
    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
    _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
    return normalizer;
  };
  ScrollTrigger2.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp,
    _inputObserver,
    _scrollers,
    _proxies,
    bridge: {
      // when normalizeScroll sets the scroll position (ss = setScroll)
      ss: function ss() {
        _lastScrollTime || _dispatch3("scrollStart");
        _lastScrollTime = _getTime2();
      },
      // a way to get the _refreshing value in Observer
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP5() && gsap5.registerPlugin(ScrollTrigger2);

  // src/utils/curso-modules.ts
  gsapWithCSS.registerPlugin(Flip, ScrollTrigger2, CustomEase);
  var cursoModules = () => {
    function animateStarColors() {
      const stars = document.querySelectorAll(".star_icon");
      const sectionLearning = document.querySelector(".section_learning");
      if (!sectionLearning || stars.length === 0)
        return;
      gsapWithCSS.set(stars, {
        fill: "currentColor",
        rotation: 0,
        transformOrigin: "center center"
      });
      ScrollTrigger2.create({
        trigger: sectionLearning,
        start: "top 30%",
        onEnter: () => animateStars(),
        onLeaveBack: () => resetStars(),
        markers: true
        // Remova isso em produção
      });
      function animateStars() {
        stars.forEach((star, index) => {
          gsapWithCSS.to(star, {
            fill: "#ffe100",
            rotation: 15,
            duration: 0.3,
            delay: index * 0.2,
            ease: "power1.inOut",
            onComplete: () => {
              gsapWithCSS.to(star, {
                fill: "currentColor",
                rotation: 0,
                duration: 0.6,
                ease: "power1.inOut"
              });
            }
          });
        });
      }
      function resetStars() {
        gsapWithCSS.to(stars, {
          fill: "currentColor",
          rotation: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power1.inOut"
        });
      }
    }
    document.addEventListener("DOMContentLoaded", animateStarColors);
    const playButton = document.querySelector(".play-video.full");
    const circle = playButton.querySelector("circle");
    const triangle = document.getElementById("triangle");
    gsapWithCSS.set(triangle, { scale: 0, opacity: 0, display: "block" });
    const hoverAnimation = gsapWithCSS.timeline({ paused: true }).to(circle, { scale: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" }).to(triangle, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.inOut" }, "-=0.3");
    playButton.addEventListener("mouseenter", () => hoverAnimation.play());
    playButton.addEventListener("mouseleave", () => hoverAnimation.reverse());
    $(document).ready(function() {
      $(".lucas_jpg").hover(
        function() {
          $(".brand_text").addClass("active");
          $(this).addClass("disabled");
          $(".image.is-2").addClass("active");
        },
        function() {
          $(".brand_text").removeClass("active");
          $(this).removeClass("disabled");
          $(".image.is-2").removeClass("active");
        }
      );
    });
  };

  // src/utils/page-effects.ts
  init_live_reload();
  var import_sticksy = __toESM(require_sticksy2(), 1);

  // node_modules/.pnpm/typed.js@2.1.0/node_modules/typed.js/dist/typed.module.js
  init_live_reload();
  function t2() {
    return t2 = Object.assign ? Object.assign.bind() : function(t3) {
      for (var s3 = 1; s3 < arguments.length; s3++) {
        var e4 = arguments[s3];
        for (var n3 in e4)
          Object.prototype.hasOwnProperty.call(e4, n3) && (t3[n3] = e4[n3]);
      }
      return t3;
    }, t2.apply(this, arguments);
  }
  var s2 = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, smartBackspace: true, shuffle: false, backDelay: 700, fadeOut: false, fadeOutClass: "typed-fade-out", fadeOutDelay: 500, loop: false, loopCount: Infinity, showCursor: true, cursorChar: "|", autoInsertCss: true, attr: null, bindInputFocusEvents: false, contentType: "html", onBegin: function(t3) {
  }, onComplete: function(t3) {
  }, preStringTyped: function(t3, s3) {
  }, onStringTyped: function(t3, s3) {
  }, onLastStringBackspaced: function(t3) {
  }, onTypingPaused: function(t3, s3) {
  }, onTypingResumed: function(t3, s3) {
  }, onReset: function(t3) {
  }, onStop: function(t3, s3) {
  }, onStart: function(t3, s3) {
  }, onDestroy: function(t3) {
  } };
  var e3 = new (/* @__PURE__ */ function() {
    function e4() {
    }
    var n3 = e4.prototype;
    return n3.load = function(e5, n4, i3) {
      if (e5.el = "string" == typeof i3 ? document.querySelector(i3) : i3, e5.options = t2({}, s2, n4), e5.isInput = "input" === e5.el.tagName.toLowerCase(), e5.attr = e5.options.attr, e5.bindInputFocusEvents = e5.options.bindInputFocusEvents, e5.showCursor = !e5.isInput && e5.options.showCursor, e5.cursorChar = e5.options.cursorChar, e5.cursorBlinking = true, e5.elContent = e5.attr ? e5.el.getAttribute(e5.attr) : e5.el.textContent, e5.contentType = e5.options.contentType, e5.typeSpeed = e5.options.typeSpeed, e5.startDelay = e5.options.startDelay, e5.backSpeed = e5.options.backSpeed, e5.smartBackspace = e5.options.smartBackspace, e5.backDelay = e5.options.backDelay, e5.fadeOut = e5.options.fadeOut, e5.fadeOutClass = e5.options.fadeOutClass, e5.fadeOutDelay = e5.options.fadeOutDelay, e5.isPaused = false, e5.strings = e5.options.strings.map(function(t3) {
        return t3.trim();
      }), e5.stringsElement = "string" == typeof e5.options.stringsElement ? document.querySelector(e5.options.stringsElement) : e5.options.stringsElement, e5.stringsElement) {
        e5.strings = [], e5.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
        var r2 = Array.prototype.slice.apply(e5.stringsElement.children), o2 = r2.length;
        if (o2)
          for (var a2 = 0; a2 < o2; a2 += 1)
            e5.strings.push(r2[a2].innerHTML.trim());
      }
      for (var u in e5.strPos = 0, e5.currentElContent = this.getCurrentElContent(e5), e5.currentElContent && e5.currentElContent.length > 0 && (e5.strPos = e5.currentElContent.length - 1, e5.strings.unshift(e5.currentElContent)), e5.sequence = [], e5.strings)
        e5.sequence[u] = u;
      e5.arrayPos = 0, e5.stopNum = 0, e5.loop = e5.options.loop, e5.loopCount = e5.options.loopCount, e5.curLoop = 0, e5.shuffle = e5.options.shuffle, e5.pause = { status: false, typewrite: true, curString: "", curStrPos: 0 }, e5.typingComplete = false, e5.autoInsertCss = e5.options.autoInsertCss, e5.autoInsertCss && (this.appendCursorAnimationCss(e5), this.appendFadeOutAnimationCss(e5));
    }, n3.getCurrentElContent = function(t3) {
      return t3.attr ? t3.el.getAttribute(t3.attr) : t3.isInput ? t3.el.value : "html" === t3.contentType ? t3.el.innerHTML : t3.el.textContent;
    }, n3.appendCursorAnimationCss = function(t3) {
      var s3 = "data-typed-js-cursor-css";
      if (t3.showCursor && !document.querySelector("[" + s3 + "]")) {
        var e5 = document.createElement("style");
        e5.setAttribute(s3, "true"), e5.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", document.body.appendChild(e5);
      }
    }, n3.appendFadeOutAnimationCss = function(t3) {
      var s3 = "data-typed-fadeout-js-css";
      if (t3.fadeOut && !document.querySelector("[" + s3 + "]")) {
        var e5 = document.createElement("style");
        e5.setAttribute(s3, "true"), e5.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", document.body.appendChild(e5);
      }
    }, e4;
  }())();
  var n2 = new (/* @__PURE__ */ function() {
    function t3() {
    }
    var s3 = t3.prototype;
    return s3.typeHtmlChars = function(t4, s4, e4) {
      if ("html" !== e4.contentType)
        return s4;
      var n3 = t4.substring(s4).charAt(0);
      if ("<" === n3 || "&" === n3) {
        var i3;
        for (i3 = "<" === n3 ? ">" : ";"; t4.substring(s4 + 1).charAt(0) !== i3 && !(1 + ++s4 > t4.length); )
          ;
        s4++;
      }
      return s4;
    }, s3.backSpaceHtmlChars = function(t4, s4, e4) {
      if ("html" !== e4.contentType)
        return s4;
      var n3 = t4.substring(s4).charAt(0);
      if (">" === n3 || ";" === n3) {
        var i3;
        for (i3 = ">" === n3 ? "<" : "&"; t4.substring(s4 - 1).charAt(0) !== i3 && !(--s4 < 0); )
          ;
        s4--;
      }
      return s4;
    }, t3;
  }())();
  var i2 = /* @__PURE__ */ function() {
    function t3(t4, s4) {
      e3.load(this, s4, t4), this.begin();
    }
    var s3 = t3.prototype;
    return s3.toggle = function() {
      this.pause.status ? this.start() : this.stop();
    }, s3.stop = function() {
      this.typingComplete || this.pause.status || (this.toggleBlinking(true), this.pause.status = true, this.options.onStop(this.arrayPos, this));
    }, s3.start = function() {
      this.typingComplete || this.pause.status && (this.pause.status = false, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
    }, s3.destroy = function() {
      this.reset(false), this.options.onDestroy(this);
    }, s3.reset = function(t4) {
      void 0 === t4 && (t4 = true), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t4 && (this.insertCursor(), this.options.onReset(this), this.begin());
    }, s3.begin = function() {
      var t4 = this;
      this.options.onBegin(this), this.typingComplete = false, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
        0 === t4.strPos ? t4.typewrite(t4.strings[t4.sequence[t4.arrayPos]], t4.strPos) : t4.backspace(t4.strings[t4.sequence[t4.arrayPos]], t4.strPos);
      }, this.startDelay);
    }, s3.typewrite = function(t4, s4) {
      var e4 = this;
      this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
      var i3 = this.humanizer(this.typeSpeed), r2 = 1;
      true !== this.pause.status ? this.timeout = setTimeout(function() {
        s4 = n2.typeHtmlChars(t4, s4, e4);
        var i4 = 0, o2 = t4.substring(s4);
        if ("^" === o2.charAt(0) && /^\^\d+/.test(o2)) {
          var a2 = 1;
          a2 += (o2 = /\d+/.exec(o2)[0]).length, i4 = parseInt(o2), e4.temporaryPause = true, e4.options.onTypingPaused(e4.arrayPos, e4), t4 = t4.substring(0, s4) + t4.substring(s4 + a2), e4.toggleBlinking(true);
        }
        if ("`" === o2.charAt(0)) {
          for (; "`" !== t4.substring(s4 + r2).charAt(0) && (r2++, !(s4 + r2 > t4.length)); )
            ;
          var u = t4.substring(0, s4), p = t4.substring(u.length + 1, s4 + r2), c2 = t4.substring(s4 + r2 + 1);
          t4 = u + p + c2, r2--;
        }
        e4.timeout = setTimeout(function() {
          e4.toggleBlinking(false), s4 >= t4.length ? e4.doneTyping(t4, s4) : e4.keepTyping(t4, s4, r2), e4.temporaryPause && (e4.temporaryPause = false, e4.options.onTypingResumed(e4.arrayPos, e4));
        }, i4);
      }, i3) : this.setPauseStatus(t4, s4, true);
    }, s3.keepTyping = function(t4, s4, e4) {
      0 === s4 && (this.toggleBlinking(false), this.options.preStringTyped(this.arrayPos, this));
      var n3 = t4.substring(0, s4 += e4);
      this.replaceText(n3), this.typewrite(t4, s4);
    }, s3.doneTyping = function(t4, s4) {
      var e4 = this;
      this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(true), this.arrayPos === this.strings.length - 1 && (this.complete(), false === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
        e4.backspace(t4, s4);
      }, this.backDelay));
    }, s3.backspace = function(t4, s4) {
      var e4 = this;
      if (true !== this.pause.status) {
        if (this.fadeOut)
          return this.initFadeOut();
        this.toggleBlinking(false);
        var i3 = this.humanizer(this.backSpeed);
        this.timeout = setTimeout(function() {
          s4 = n2.backSpaceHtmlChars(t4, s4, e4);
          var i4 = t4.substring(0, s4);
          if (e4.replaceText(i4), e4.smartBackspace) {
            var r2 = e4.strings[e4.arrayPos + 1];
            e4.stopNum = r2 && i4 === r2.substring(0, s4) ? s4 : 0;
          }
          s4 > e4.stopNum ? (s4--, e4.backspace(t4, s4)) : s4 <= e4.stopNum && (e4.arrayPos++, e4.arrayPos === e4.strings.length ? (e4.arrayPos = 0, e4.options.onLastStringBackspaced(), e4.shuffleStringsIfNeeded(), e4.begin()) : e4.typewrite(e4.strings[e4.sequence[e4.arrayPos]], s4));
        }, i3);
      } else
        this.setPauseStatus(t4, s4, false);
    }, s3.complete = function() {
      this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = true;
    }, s3.setPauseStatus = function(t4, s4, e4) {
      this.pause.typewrite = e4, this.pause.curString = t4, this.pause.curStrPos = s4;
    }, s3.toggleBlinking = function(t4) {
      this.cursor && (this.pause.status || this.cursorBlinking !== t4 && (this.cursorBlinking = t4, t4 ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
    }, s3.humanizer = function(t4) {
      return Math.round(Math.random() * t4 / 2) + t4;
    }, s3.shuffleStringsIfNeeded = function() {
      this.shuffle && (this.sequence = this.sequence.sort(function() {
        return Math.random() - 0.5;
      }));
    }, s3.initFadeOut = function() {
      var t4 = this;
      return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
        t4.arrayPos++, t4.replaceText(""), t4.strings.length > t4.arrayPos ? t4.typewrite(t4.strings[t4.sequence[t4.arrayPos]], 0) : (t4.typewrite(t4.strings[0], 0), t4.arrayPos = 0);
      }, this.fadeOutDelay);
    }, s3.replaceText = function(t4) {
      this.attr ? this.el.setAttribute(this.attr, t4) : this.isInput ? this.el.value = t4 : "html" === this.contentType ? this.el.innerHTML = t4 : this.el.textContent = t4;
    }, s3.bindFocusEvents = function() {
      var t4 = this;
      this.isInput && (this.el.addEventListener("focus", function(s4) {
        t4.stop();
      }), this.el.addEventListener("blur", function(s4) {
        t4.el.value && 0 !== t4.el.value.length || t4.start();
      }));
    }, s3.insertCursor = function() {
      this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", true), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
    }, t3;
  }();

  // src/utils/page-effects.ts
  var pageEffects = () => {
    const typedConfig = {
      strings: ["Assistir Showreel.", "Entre no ritmo.", "Sinta essa vibe", "Diretoria MH"],
      typeSpeed: 10,
      backSpeed: 20,
      loop: true,
      showCursor: false
    };
    const typed = new i2("#textElement", typedConfig);
    const stickyConfig = { topSpacing: 40 };
    const stickyEl = new Sticksy(".js-sticky-widget", stickyConfig);
    const toggleEffectClass = (add) => {
      const method = add ? "add" : "remove";
      const selectors = [
        ".unit_lens_inner.xsmall",
        ".unit_lens_inner.small",
        ".unit_lens_inner.xmedium",
        ".unit_lens_inner.medium",
        ".lens_center_visual"
      ];
      selectors.forEach((selector3) => {
        document.querySelectorAll(selector3).forEach((element) => {
          element.classList[method](selector3.includes("lens_center_visual") ? "active" : "effect");
        });
      });
    };
    stickyEl.onStateChanged = (state) => {
      toggleEffectClass(state === "fixed");
    };
  };

  // src/utils/video-manager.ts
  init_live_reload();
  var import_plyr = __toESM(require_plyr_min(), 1);
  var videoManager = () => {
    let player = null;
    const initializePlyr = () => {
      player = new import_plyr.default("#player", {
        controls: [],
        loop: { active: true },
        keyboard: { global: true },
        tooltips: { controls: true, seek: true }
      });
      const volumeSlider = document.querySelector(".volume-slider");
      const volumeIcons = document.querySelector(".icon-change");
      const updateVolumeIcons = () => {
        const soundEnable = document.querySelector(".sound_enable");
        const soundMute = document.querySelector(".sound_mute");
        const { volume } = player;
        const isMuted = player.muted;
        if (isMuted || volume === 0) {
          soundEnable.style.display = "none";
          soundMute.style.display = "flex";
          volumeIcons.style.opacity = "0.5";
        } else {
          soundEnable.style.display = "flex";
          soundMute.style.display = "none";
          volumeIcons.style.opacity = "1";
        }
      };
      volumeSlider.addEventListener("input", () => {
        const volume = parseFloat(volumeSlider.value);
        player.volume = volume;
        player.muted = volume === 0;
        updateVolumeIcons();
      });
      player.on("volumechange", () => {
        volumeSlider.value = player.muted ? 0 : player.volume;
        updateVolumeIcons();
      });
      const updateUIOnPlayState = (isPlaying) => {
        const elementsToToggle = [
          [".form_overlay", "hide-overlay"],
          [".background_video_wrapper", "full-opacity"],
          [".lines_visual", "hide_lines"],
          [".player_asset", "hide-text"],
          [".visual_left", "hide-text"],
          [".heading_visual", "hide-video"],
          [".custom-play-min", "hide", !isPlaying],
          [".controls", "playing"]
        ];
        elementsToToggle.forEach(([selector3, className, condition = isPlaying]) => {
          document.querySelectorAll(selector3).forEach((element) => element.classList.toggle(className, condition));
        });
      };
      document.querySelectorAll(".play-video.full").forEach((trigger) => {
        trigger.addEventListener("click", () => {
          player.togglePlay();
          updateUIOnPlayState(player.playing);
          trigger.classList.toggle("hide_video_play", player.playing);
        });
      });
      player.on("play", () => updateUIOnPlayState(true));
      player.on("pause", () => updateUIOnPlayState(false));
      const toggleMute = () => {
        player.muted = !player.muted;
        if (!player.muted && player.volume === 0) {
          player.volume = 0.5;
        }
        updateVolumeIcons();
      };
      volumeIcons.addEventListener("click", toggleMute);
      const updatePlayIcons = () => {
        const playIcon = document.querySelector(".play_min_control");
        const pauseIcon = document.querySelector(".pause_state");
        const minIcon = document.querySelector(".minimizar");
        const maxIcon = document.querySelector(".maximizar");
        const isPlaying = player.playing;
        playIcon.style.display = isPlaying ? "none" : "flex";
        pauseIcon.style.display = isPlaying ? "flex" : "none";
        minIcon.style.display = isPlaying ? "none" : "block";
        maxIcon.style.display = isPlaying ? "block" : "none";
      };
      player.on("play", updatePlayIcons);
      player.on("pause", updatePlayIcons);
      document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".play_min_control").style.display = "none";
        updatePlayIcons();
        updateVolumeIcons();
      });
    };
    document.addEventListener("DOMContentLoaded", initializePlyr);
  };

  // src/index.ts
  var locomotiveScroll = new h({
    lenisOptions: {
      lerp: 0.1,
      duration: 0.7,
      wheelMultiplier: 1.5,
      easing: (t3) => Math.min(1, 1.001 - Math.pow(2, -10 * t3))
      // https://www.desmos.com/calculator/brs54l4xou
    }
  });
  pageEffects();
  videoManager();
  cursoModules();
})();
/*! Bundled license information:

sticksy/src/sticksy.js:
  (**
   * Sticksy.js
   * A library for making cool things like fixed widgets.
   * Dependency-free. ES5 code.
   * -
   * @version 0.2.0
   * @url https://github.com/kovart/sticksy
   * @author Artem Kovalchuk <kovart.dev@gmail.com>
   * @license The MIT License (MIT)
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/paths.js:
  (*!
   * paths 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CustomEase.js:
  (*!
   * CustomEase 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/matrix.js:
  (*!
   * matrix 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Flip.js:
  (*!
   * Flip 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=index.js.map
