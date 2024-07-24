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

  // node_modules/.pnpm/dragdealer@0.10.0/node_modules/dragdealer/src/dragdealer.js
  var require_dragdealer = __commonJS({
    "node_modules/.pnpm/dragdealer@0.10.0/node_modules/dragdealer/src/dragdealer.js"(exports, module) {
      init_live_reload();
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define(factory);
        } else if (typeof module === "object" && module.exports) {
          module.exports.Dragdealer = factory();
        } else {
          root.Dragdealer = factory();
        }
      })(exports, function() {
        var Dragdealer2 = function(wrapper, options) {
          this.options = this.applyDefaults(options || {});
          this.bindMethods();
          this.wrapper = this.getWrapperElement(wrapper);
          if (!this.wrapper) {
            return;
          }
          this.handle = this.getHandleElement(this.wrapper, this.options.handleClass);
          if (!this.handle) {
            return;
          }
          this.init();
          this.bindEventListeners();
        };
        Dragdealer2.prototype = {
          defaults: {
            disabled: false,
            horizontal: true,
            vertical: false,
            slide: true,
            steps: 0,
            snap: false,
            loose: false,
            speed: 0.1,
            xPrecision: 0,
            yPrecision: 0,
            handleClass: "handle",
            css3: true,
            activeClass: "active",
            tapping: true
          },
          init: function() {
            if (this.options.css3) {
              triggerWebkitHardwareAcceleration(this.handle);
            }
            this.value = {
              prev: [-1, -1],
              current: [this.options.x || 0, this.options.y || 0],
              target: [this.options.x || 0, this.options.y || 0]
            };
            this.offset = {
              wrapper: [0, 0],
              mouse: [0, 0],
              prev: [-999999, -999999],
              current: [0, 0],
              target: [0, 0]
            };
            this.dragStartPosition = { x: 0, y: 0 };
            this.change = [0, 0];
            this.stepRatios = this.calculateStepRatios();
            this.activity = false;
            this.dragging = false;
            this.tapping = false;
            this.reflow();
            if (this.options.disabled) {
              this.disable();
            }
          },
          applyDefaults: function(options) {
            for (var k in this.defaults) {
              if (!options.hasOwnProperty(k)) {
                options[k] = this.defaults[k];
              }
            }
            return options;
          },
          getWrapperElement: function(wrapper) {
            if (typeof wrapper == "string") {
              return document.getElementById(wrapper);
            } else {
              return wrapper;
            }
          },
          getHandleElement: function(wrapper, handleClass) {
            var childElements, handleClassMatcher, i2;
            if (wrapper.getElementsByClassName) {
              childElements = wrapper.getElementsByClassName(handleClass);
              if (childElements.length > 0) {
                return childElements[0];
              }
            } else {
              handleClassMatcher = new RegExp("(^|\\s)" + handleClass + "(\\s|$)");
              childElements = wrapper.getElementsByTagName("*");
              for (i2 = 0; i2 < childElements.length; i2++) {
                if (handleClassMatcher.test(childElements[i2].className)) {
                  return childElements[i2];
                }
              }
            }
          },
          calculateStepRatios: function() {
            var stepRatios = [];
            if (this.options.steps >= 1) {
              for (var i2 = 0; i2 <= this.options.steps - 1; i2++) {
                if (this.options.steps > 1) {
                  stepRatios[i2] = i2 / (this.options.steps - 1);
                } else {
                  stepRatios[i2] = 0;
                }
              }
            }
            return stepRatios;
          },
          setWrapperOffset: function() {
            this.offset.wrapper = Position.get(this.wrapper);
          },
          calculateBounds: function() {
            var bounds = {
              top: this.options.top || 0,
              bottom: -(this.options.bottom || 0) + this.wrapper.offsetHeight,
              left: this.options.left || 0,
              right: -(this.options.right || 0) + this.wrapper.offsetWidth
            };
            bounds.availWidth = bounds.right - bounds.left - this.handle.offsetWidth;
            bounds.availHeight = bounds.bottom - bounds.top - this.handle.offsetHeight;
            return bounds;
          },
          calculateValuePrecision: function() {
            var xPrecision = this.options.xPrecision || Math.abs(this.bounds.availWidth), yPrecision = this.options.yPrecision || Math.abs(this.bounds.availHeight);
            return [
              xPrecision ? 1 / xPrecision : 0,
              yPrecision ? 1 / yPrecision : 0
            ];
          },
          bindMethods: function() {
            if (typeof this.options.customRequestAnimationFrame === "function") {
              this.requestAnimationFrame = bind(this.options.customRequestAnimationFrame, window);
            } else {
              this.requestAnimationFrame = bind(requestAnimationFrame2, window);
            }
            if (typeof this.options.customCancelAnimationFrame === "function") {
              this.cancelAnimationFrame = bind(this.options.customCancelAnimationFrame, window);
            } else {
              this.cancelAnimationFrame = bind(cancelAnimationFrame2, window);
            }
            this.animateWithRequestAnimationFrame = bind(this.animateWithRequestAnimationFrame, this);
            this.animate = bind(this.animate, this);
            this.onHandleMouseDown = bind(this.onHandleMouseDown, this);
            this.onHandleTouchStart = bind(this.onHandleTouchStart, this);
            this.onDocumentMouseMove = bind(this.onDocumentMouseMove, this);
            this.onWrapperTouchMove = bind(this.onWrapperTouchMove, this);
            this.onWrapperMouseDown = bind(this.onWrapperMouseDown, this);
            this.onWrapperTouchStart = bind(this.onWrapperTouchStart, this);
            this.onDocumentMouseUp = bind(this.onDocumentMouseUp, this);
            this.onDocumentTouchEnd = bind(this.onDocumentTouchEnd, this);
            this.onHandleClick = bind(this.onHandleClick, this);
            this.onWindowResize = bind(this.onWindowResize, this);
          },
          bindEventListeners: function() {
            addEventListener2(this.handle, "mousedown", this.onHandleMouseDown);
            addEventListener2(this.handle, "touchstart", this.onHandleTouchStart);
            addEventListener2(document, "mousemove", this.onDocumentMouseMove);
            addEventListener2(this.wrapper, "touchmove", this.onWrapperTouchMove);
            addEventListener2(this.wrapper, "mousedown", this.onWrapperMouseDown);
            addEventListener2(this.wrapper, "touchstart", this.onWrapperTouchStart);
            addEventListener2(document, "mouseup", this.onDocumentMouseUp);
            addEventListener2(document, "touchend", this.onDocumentTouchEnd);
            addEventListener2(this.handle, "click", this.onHandleClick);
            addEventListener2(window, "resize", this.onWindowResize);
            this.animate(false, true);
            this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame);
          },
          unbindEventListeners: function() {
            removeEventListener2(this.handle, "mousedown", this.onHandleMouseDown);
            removeEventListener2(this.handle, "touchstart", this.onHandleTouchStart);
            removeEventListener2(document, "mousemove", this.onDocumentMouseMove);
            removeEventListener2(this.wrapper, "touchmove", this.onWrapperTouchMove);
            removeEventListener2(this.wrapper, "mousedown", this.onWrapperMouseDown);
            removeEventListener2(this.wrapper, "touchstart", this.onWrapperTouchStart);
            removeEventListener2(document, "mouseup", this.onDocumentMouseUp);
            removeEventListener2(document, "touchend", this.onDocumentTouchEnd);
            removeEventListener2(this.handle, "click", this.onHandleClick);
            removeEventListener2(window, "resize", this.onWindowResize);
            this.cancelAnimationFrame(this.interval);
          },
          onHandleMouseDown: function(e3) {
            Cursor.refresh(e3);
            preventEventDefaults(e3);
            stopEventPropagation(e3);
            this.activity = false;
            this.startDrag();
          },
          onHandleTouchStart: function(e3) {
            Cursor.refresh(e3);
            stopEventPropagation(e3);
            this.activity = false;
            this.startDrag();
          },
          onDocumentMouseMove: function(e3) {
            if (e3.clientX - this.dragStartPosition.x === 0 && e3.clientY - this.dragStartPosition.y === 0) {
              return;
            }
            Cursor.refresh(e3);
            if (this.dragging) {
              this.activity = true;
              preventEventDefaults(e3);
            }
          },
          onWrapperTouchMove: function(e3) {
            Cursor.refresh(e3);
            if (!this.activity && this.draggingOnDisabledAxis()) {
              if (this.dragging) {
                this.stopDrag();
              }
              return;
            }
            preventEventDefaults(e3);
            this.activity = true;
          },
          onWrapperMouseDown: function(e3) {
            Cursor.refresh(e3);
            preventEventDefaults(e3);
            this.startTap();
          },
          onWrapperTouchStart: function(e3) {
            Cursor.refresh(e3);
            preventEventDefaults(e3);
            this.startTap();
          },
          onDocumentMouseUp: function(e3) {
            this.stopDrag();
            this.stopTap();
          },
          onDocumentTouchEnd: function(e3) {
            this.stopDrag();
            this.stopTap();
          },
          onHandleClick: function(e3) {
            if (this.activity) {
              preventEventDefaults(e3);
              stopEventPropagation(e3);
            }
          },
          onWindowResize: function(e3) {
            this.reflow();
          },
          enable: function() {
            this.disabled = false;
            this.handle.className = this.handle.className.replace(/\s?disabled/g, "");
          },
          disable: function() {
            this.disabled = true;
            this.handle.className += " disabled";
          },
          reflow: function() {
            this.setWrapperOffset();
            this.bounds = this.calculateBounds();
            this.valuePrecision = this.calculateValuePrecision();
            this.updateOffsetFromValue();
          },
          getStep: function() {
            return [
              this.getStepNumber(this.value.target[0]),
              this.getStepNumber(this.value.target[1])
            ];
          },
          getStepWidth: function() {
            return Math.abs(this.bounds.availWidth / this.options.steps);
          },
          getValue: function() {
            return this.value.target;
          },
          setStep: function(x2, y, snap3) {
            this.setValue(
              this.options.steps && x2 > 1 ? (x2 - 1) / (this.options.steps - 1) : 0,
              this.options.steps && y > 1 ? (y - 1) / (this.options.steps - 1) : 0,
              snap3
            );
          },
          setValue: function(x2, y, snap3) {
            this.setTargetValue([x2, y || 0]);
            if (snap3) {
              this.groupCopy(this.value.current, this.value.target);
              this.updateOffsetFromValue();
              this.callAnimationCallback();
            }
          },
          startTap: function() {
            if (this.disabled || !this.options.tapping) {
              return;
            }
            this.tapping = true;
            this.setWrapperOffset();
            if (this.options.snap && this.options.steps) {
              var cursorXRatio = (Cursor.x - this.offset.wrapper[0]) / this.bounds.availWidth;
              var cursorYRatio = (Cursor.y - this.offset.wrapper[1]) / this.bounds.availHeight;
              this.setValue(this.getClosestStep(cursorXRatio), this.getClosestStep(cursorYRatio), true);
            } else {
              this.setTargetValueByOffset([
                Cursor.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2,
                Cursor.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2
              ]);
            }
          },
          stopTap: function() {
            if (this.disabled || !this.tapping) {
              return;
            }
            this.tapping = false;
            this.setTargetValue(this.value.current);
          },
          startDrag: function() {
            if (this.disabled) {
              return;
            }
            this.dragging = true;
            this.setWrapperOffset();
            this.dragStartPosition = { x: Cursor.x, y: Cursor.y };
            this.offset.mouse = [
              Cursor.x - Position.get(this.handle)[0],
              Cursor.y - Position.get(this.handle)[1]
            ];
            if (!this.wrapper.className.match(this.options.activeClass)) {
              this.wrapper.className += " " + this.options.activeClass;
            }
            this.callDragStartCallback();
          },
          stopDrag: function() {
            if (this.disabled || !this.dragging) {
              return;
            }
            this.dragging = false;
            var deltaX = this.bounds.availWidth === 0 ? 0 : (Cursor.x - this.dragStartPosition.x) / this.bounds.availWidth, deltaY = this.bounds.availHeight === 0 ? 0 : (Cursor.y - this.dragStartPosition.y) / this.bounds.availHeight, delta = [deltaX, deltaY];
            var target = this.groupClone(this.value.current);
            if (this.options.slide) {
              var ratioChange = this.change;
              target[0] += ratioChange[0] * 4;
              target[1] += ratioChange[1] * 4;
            }
            this.setTargetValue(target);
            this.wrapper.className = this.wrapper.className.replace(" " + this.options.activeClass, "");
            this.callDragStopCallback(delta);
          },
          callAnimationCallback: function() {
            var value = this.value.current;
            if (this.options.snap && this.options.steps > 1) {
              value = this.getClosestSteps(value);
            }
            if (!this.groupCompare(value, this.value.prev)) {
              if (typeof this.options.animationCallback == "function") {
                this.options.animationCallback.call(this, value[0], value[1]);
              }
              this.groupCopy(this.value.prev, value);
            }
          },
          callTargetCallback: function() {
            if (typeof this.options.callback == "function") {
              this.options.callback.call(this, this.value.target[0], this.value.target[1]);
            }
          },
          callDragStartCallback: function() {
            if (typeof this.options.dragStartCallback == "function") {
              this.options.dragStartCallback.call(this, this.value.target[0], this.value.target[1]);
            }
          },
          callDragStopCallback: function(delta) {
            if (typeof this.options.dragStopCallback == "function") {
              this.options.dragStopCallback.call(this, this.value.target[0], this.value.target[1], delta);
            }
          },
          animateWithRequestAnimationFrame: function(time) {
            if (time) {
              this.timeOffset = this.timeStamp ? time - this.timeStamp : 0;
              this.timeStamp = time;
            } else {
              this.timeOffset = 25;
            }
            this.animate();
            this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame);
          },
          animate: function(direct, first) {
            if (direct && !this.dragging) {
              return;
            }
            if (this.dragging) {
              var prevTarget = this.groupClone(this.value.target);
              var offset = [
                Cursor.x - this.offset.wrapper[0] - this.offset.mouse[0],
                Cursor.y - this.offset.wrapper[1] - this.offset.mouse[1]
              ];
              this.setTargetValueByOffset(offset, this.options.loose);
              this.change = [
                this.value.target[0] - prevTarget[0],
                this.value.target[1] - prevTarget[1]
              ];
            }
            if (this.dragging || first) {
              this.groupCopy(this.value.current, this.value.target);
            }
            if (this.dragging || this.glide() || first) {
              this.updateOffsetFromValue();
              this.callAnimationCallback();
            }
          },
          glide: function() {
            var diff = [
              this.value.target[0] - this.value.current[0],
              this.value.target[1] - this.value.current[1]
            ];
            if (!diff[0] && !diff[1]) {
              return false;
            }
            if (Math.abs(diff[0]) > this.valuePrecision[0] || Math.abs(diff[1]) > this.valuePrecision[1]) {
              this.value.current[0] += diff[0] * Math.min(this.options.speed * this.timeOffset / 25, 1);
              this.value.current[1] += diff[1] * Math.min(this.options.speed * this.timeOffset / 25, 1);
            } else {
              this.groupCopy(this.value.current, this.value.target);
            }
            return true;
          },
          updateOffsetFromValue: function() {
            if (!this.options.snap) {
              this.offset.current = this.getOffsetsByRatios(this.value.current);
            } else {
              this.offset.current = this.getOffsetsByRatios(
                this.getClosestSteps(this.value.current)
              );
            }
            if (!this.groupCompare(this.offset.current, this.offset.prev)) {
              this.renderHandlePosition();
              this.groupCopy(this.offset.prev, this.offset.current);
            }
          },
          renderHandlePosition: function() {
            var transform = "";
            if (this.options.css3 && StylePrefix.transform) {
              if (this.options.horizontal) {
                transform += "translateX(" + this.offset.current[0] + "px)";
              }
              if (this.options.vertical) {
                transform += " translateY(" + this.offset.current[1] + "px)";
              }
              this.handle.style[StylePrefix.transform] = transform;
              return;
            }
            if (this.options.horizontal) {
              this.handle.style.left = this.offset.current[0] + "px";
            }
            if (this.options.vertical) {
              this.handle.style.top = this.offset.current[1] + "px";
            }
          },
          setTargetValue: function(value, loose) {
            var target = loose ? this.getLooseValue(value) : this.getProperValue(value);
            this.groupCopy(this.value.target, target);
            this.offset.target = this.getOffsetsByRatios(target);
            this.callTargetCallback();
          },
          setTargetValueByOffset: function(offset, loose) {
            var value = this.getRatiosByOffsets(offset);
            var target = loose ? this.getLooseValue(value) : this.getProperValue(value);
            this.groupCopy(this.value.target, target);
            this.offset.target = this.getOffsetsByRatios(target);
          },
          getLooseValue: function(value) {
            var proper = this.getProperValue(value);
            return [
              proper[0] + (value[0] - proper[0]) / 4,
              proper[1] + (value[1] - proper[1]) / 4
            ];
          },
          getProperValue: function(value) {
            var proper = this.groupClone(value);
            proper[0] = Math.max(proper[0], 0);
            proper[1] = Math.max(proper[1], 0);
            proper[0] = Math.min(proper[0], 1);
            proper[1] = Math.min(proper[1], 1);
            if (!this.dragging && !this.tapping || this.options.snap) {
              if (this.options.steps > 1) {
                proper = this.getClosestSteps(proper);
              }
            }
            return proper;
          },
          getRatiosByOffsets: function(group) {
            return [
              this.getRatioByOffset(group[0], this.bounds.availWidth, this.bounds.left),
              this.getRatioByOffset(group[1], this.bounds.availHeight, this.bounds.top)
            ];
          },
          getRatioByOffset: function(offset, range, padding) {
            return range ? (offset - padding) / range : 0;
          },
          getOffsetsByRatios: function(group) {
            return [
              this.getOffsetByRatio(group[0], this.bounds.availWidth, this.bounds.left),
              this.getOffsetByRatio(group[1], this.bounds.availHeight, this.bounds.top)
            ];
          },
          getOffsetByRatio: function(ratio, range, padding) {
            return Math.round(ratio * range) + padding;
          },
          getStepNumber: function(value) {
            return this.getClosestStep(value) * (this.options.steps - 1) + 1;
          },
          getClosestSteps: function(group) {
            return [
              this.getClosestStep(group[0]),
              this.getClosestStep(group[1])
            ];
          },
          getClosestStep: function(value) {
            var k = 0;
            var min = 1;
            for (var i2 = 0; i2 <= this.options.steps - 1; i2++) {
              if (Math.abs(this.stepRatios[i2] - value) < min) {
                min = Math.abs(this.stepRatios[i2] - value);
                k = i2;
              }
            }
            return this.stepRatios[k];
          },
          groupCompare: function(a2, b) {
            return a2[0] == b[0] && a2[1] == b[1];
          },
          groupCopy: function(a2, b) {
            a2[0] = b[0];
            a2[1] = b[1];
          },
          groupClone: function(a2) {
            return [a2[0], a2[1]];
          },
          draggingOnDisabledAxis: function() {
            return !this.options.horizontal && Cursor.xDiff > Cursor.yDiff || !this.options.vertical && Cursor.yDiff > Cursor.xDiff;
          }
        };
        var bind = function(fn, context3) {
          return function() {
            return fn.apply(context3, arguments);
          };
        };
        var addEventListener2 = function(element, type, callback) {
          if (element.addEventListener) {
            element.addEventListener(type, callback, false);
          } else if (element.attachEvent) {
            element.attachEvent("on" + type, callback);
          }
        };
        var removeEventListener2 = function(element, type, callback) {
          if (element.removeEventListener) {
            element.removeEventListener(type, callback, false);
          } else if (element.detachEvent) {
            element.detachEvent("on" + type, callback);
          }
        };
        var preventEventDefaults = function(e3) {
          if (!e3) {
            e3 = window.event;
          }
          if (e3.preventDefault) {
            e3.preventDefault();
          }
          e3.returnValue = false;
        };
        var stopEventPropagation = function(e3) {
          if (!e3) {
            e3 = window.event;
          }
          if (e3.stopPropagation) {
            e3.stopPropagation();
          }
          e3.cancelBubble = true;
        };
        var Cursor = {
          /**
           * Abstraction for making the combined mouse or touch position available at
           * any time.
           *
           * It picks up the "move" events as an independent component and simply makes
           * the latest x and y mouse/touch position of the user available at any time,
           * which is requested with Cursor.x and Cursor.y respectively.
           *
           * It can receive both mouse and touch events consecutively, extracting the
           * relevant meta data from each type of event.
           *
           * Cursor.refresh(e) is called to update the global x and y values, with a
           * genuine MouseEvent or a TouchEvent from an event listener, e.g.
           * mousedown/up or touchstart/end
           */
          x: 0,
          y: 0,
          xDiff: 0,
          yDiff: 0,
          refresh: function(e3) {
            if (!e3) {
              e3 = window.event;
            }
            if (e3.type == "mousemove") {
              this.set(e3);
            } else if (e3.touches) {
              this.set(e3.touches[0]);
            }
          },
          set: function(e3) {
            var lastX = this.x, lastY = this.y;
            if (e3.clientX || e3.clientY) {
              this.x = e3.clientX;
              this.y = e3.clientY;
            } else if (e3.pageX || e3.pageY) {
              this.x = e3.pageX - document.body.scrollLeft - document.documentElement.scrollLeft;
              this.y = e3.pageY - document.body.scrollTop - document.documentElement.scrollTop;
            }
            this.xDiff = Math.abs(this.x - lastX);
            this.yDiff = Math.abs(this.y - lastY);
          }
        };
        var Position = {
          /**
           * Helper for extracting position of a DOM element, relative to the viewport
           *
           * The get(obj) method accepts a DOM element as the only parameter, and
           * returns the position under a (x, y) tuple, as an array with two elements.
           */
          get: function(obj) {
            var rect = { left: 0, top: 0 };
            if (obj.getBoundingClientRect !== void 0) {
              rect = obj.getBoundingClientRect();
            }
            return [rect.left, rect.top];
          }
        };
        var StylePrefix = {
          transform: getPrefixedStylePropName("transform"),
          perspective: getPrefixedStylePropName("perspective"),
          backfaceVisibility: getPrefixedStylePropName("backfaceVisibility")
        };
        function getPrefixedStylePropName(propName) {
          var domPrefixes = "Webkit Moz ms O".split(" "), elStyle = document.documentElement.style;
          if (elStyle[propName] !== void 0)
            return propName;
          propName = propName.charAt(0).toUpperCase() + propName.substr(1);
          for (var i2 = 0; i2 < domPrefixes.length; i2++) {
            if (elStyle[domPrefixes[i2] + propName] !== void 0) {
              return domPrefixes[i2] + propName;
            }
          }
        }
        ;
        function triggerWebkitHardwareAcceleration(element) {
          if (StylePrefix.backfaceVisibility && StylePrefix.perspective) {
            element.style[StylePrefix.perspective] = "1000px";
            element.style[StylePrefix.backfaceVisibility] = "hidden";
          }
        }
        ;
        var vendors = ["webkit", "moz"];
        var requestAnimationFrame2 = window.requestAnimationFrame;
        var cancelAnimationFrame2 = window.cancelAnimationFrame;
        for (var x = 0; x < vendors.length && !requestAnimationFrame2; ++x) {
          requestAnimationFrame2 = window[vendors[x] + "RequestAnimationFrame"];
          cancelAnimationFrame2 = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
        }
        if (!requestAnimationFrame2) {
          requestAnimationFrame2 = function(callback) {
            return setTimeout(callback, 25);
          };
          cancelAnimationFrame2 = clearTimeout;
        }
        return Dragdealer2;
      });
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
          for (var i2 = 0; i2 < elements.length; i2++) {
            var el = elements[i2];
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
          for (var i2 = elements.length - 1; i2 >= 0; i2--) {
            var el = elements[i2];
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
          for (var i2 = 0; i2 < elements.length; i2++) {
            elements[i2].style.display = getComputedStyle(this._stickyNodes[i2]).display;
          }
        };
        Sticksy2.prototype._fixElementsSize = function() {
          for (var i2 = 0; i2 < this._stickyNodes.length; i2++) {
            var stickyNode = this._stickyNodes[i2];
            var style = getComputedStyle(stickyNode);
            stickyNode.style.width = style.width;
            stickyNode.style.height = style.height;
          }
        };
        Sticksy2.refreshAll = function() {
          for (var i2 = 0; i2 < Sticksy2.enabledInstances.length; i2++) {
            Sticksy2.enabledInstances[i2].refresh();
          }
        };
        Sticksy2.hardRefreshAll = function() {
          for (var i2 = 0; i2 < Sticksy2.enabledInstances.length; i2++) {
            Sticksy2.enabledInstances[i2].hardRefresh();
          }
        };
        Sticksy2.enableAll = function() {
          Sticksy2.enabledInstances = Sticksy2.instances.slice();
          this.hardRefreshAll();
        };
        Sticksy2.disableAll = function() {
          var copy = Sticksy2.enabledInstances.slice();
          for (var i2 = 0; i2 < copy.length; i2++) {
            Sticksy2.enabledInstances[i2].disable();
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
      "object" == typeof navigator && function(e3, t2) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define("Plyr", t2) : (e3 = "undefined" != typeof globalThis ? globalThis : e3 || self).Plyr = t2();
      }(exports, function() {
        "use strict";
        function e3(e4, t3, i3) {
          return (t3 = function(e5) {
            var t4 = function(e6, t5) {
              if ("object" != typeof e6 || null === e6)
                return e6;
              var i4 = e6[Symbol.toPrimitive];
              if (void 0 !== i4) {
                var s3 = i4.call(e6, t5 || "default");
                if ("object" != typeof s3)
                  return s3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t5 ? String : Number)(e6);
            }(e5, "string");
            return "symbol" == typeof t4 ? t4 : String(t4);
          }(t3)) in e4 ? Object.defineProperty(e4, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e4[t3] = i3, e4;
        }
        function t2(e4, t3) {
          for (var i3 = 0; i3 < t3.length; i3++) {
            var s3 = t3[i3];
            s3.enumerable = s3.enumerable || false, s3.configurable = true, "value" in s3 && (s3.writable = true), Object.defineProperty(e4, s3.key, s3);
          }
        }
        function i2(e4, t3, i3) {
          return t3 in e4 ? Object.defineProperty(e4, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e4[t3] = i3, e4;
        }
        function s2(e4, t3) {
          var i3 = Object.keys(e4);
          if (Object.getOwnPropertySymbols) {
            var s3 = Object.getOwnPropertySymbols(e4);
            t3 && (s3 = s3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e4, t4).enumerable;
            })), i3.push.apply(i3, s3);
          }
          return i3;
        }
        function n2(e4) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? s2(Object(n3), true).forEach(function(t4) {
              i2(e4, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(n3)) : s2(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e4, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e4;
        }
        var a2 = { addCSS: true, thumbWidth: 15, watch: true };
        var l2 = function(e4) {
          return null != e4 ? e4.constructor : null;
        }, r2 = function(e4, t3) {
          return !!(e4 && t3 && e4 instanceof t3);
        }, o2 = function(e4) {
          return null == e4;
        }, c2 = function(e4) {
          return l2(e4) === Object;
        }, u = function(e4) {
          return l2(e4) === String;
        }, h2 = function(e4) {
          return Array.isArray(e4);
        }, d = function(e4) {
          return r2(e4, NodeList);
        }, m = { nullOrUndefined: o2, object: c2, number: function(e4) {
          return l2(e4) === Number && !Number.isNaN(e4);
        }, string: u, boolean: function(e4) {
          return l2(e4) === Boolean;
        }, function: function(e4) {
          return l2(e4) === Function;
        }, array: h2, nodeList: d, element: function(e4) {
          return r2(e4, Element);
        }, event: function(e4) {
          return r2(e4, Event);
        }, empty: function(e4) {
          return o2(e4) || (u(e4) || h2(e4) || d(e4)) && !e4.length || c2(e4) && !Object.keys(e4).length;
        } };
        function p(e4, t3) {
          if (1 > t3) {
            var i3 = function(e5) {
              var t4 = "".concat(e5).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              return t4 ? Math.max(0, (t4[1] ? t4[1].length : 0) - (t4[2] ? +t4[2] : 0)) : 0;
            }(t3);
            return parseFloat(e4.toFixed(i3));
          }
          return Math.round(e4 / t3) * t3;
        }
        var g = function() {
          function e4(t3, i3) {
            (function(e5, t4) {
              if (!(e5 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            })(this, e4), m.element(t3) ? this.element = t3 : m.string(t3) && (this.element = document.querySelector(t3)), m.element(this.element) && m.empty(this.element.rangeTouch) && (this.config = n2({}, a2, {}, i3), this.init());
          }
          return function(e5, i3, s3) {
            i3 && t2(e5.prototype, i3), s3 && t2(e5, s3);
          }(e4, [{ key: "init", value: function() {
            e4.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
          } }, { key: "destroy", value: function() {
            e4.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
          } }, { key: "listeners", value: function(e5) {
            var t3 = this, i3 = e5 ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function(e6) {
              t3.element[i3](e6, function(e7) {
                return t3.set(e7);
              }, false);
            });
          } }, { key: "get", value: function(t3) {
            if (!e4.enabled || !m.event(t3))
              return null;
            var i3, s3 = t3.target, n3 = t3.changedTouches[0], a3 = parseFloat(s3.getAttribute("min")) || 0, l3 = parseFloat(s3.getAttribute("max")) || 100, r3 = parseFloat(s3.getAttribute("step")) || 1, o3 = s3.getBoundingClientRect(), c3 = 100 / o3.width * (this.config.thumbWidth / 2) / 100;
            return 0 > (i3 = 100 / o3.width * (n3.clientX - o3.left)) ? i3 = 0 : 100 < i3 && (i3 = 100), 50 > i3 ? i3 -= (100 - 2 * i3) * c3 : 50 < i3 && (i3 += 2 * (i3 - 50) * c3), a3 + p(i3 / 100 * (l3 - a3), r3);
          } }, { key: "set", value: function(t3) {
            e4.enabled && m.event(t3) && !t3.target.disabled && (t3.preventDefault(), t3.target.value = this.get(t3), function(e5, t4) {
              if (e5 && t4) {
                var i3 = new Event(t4, { bubbles: true });
                e5.dispatchEvent(i3);
              }
            }(t3.target, "touchend" === t3.type ? "change" : "input"));
          } }], [{ key: "setup", value: function(t3) {
            var i3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s3 = null;
            if (m.empty(t3) || m.string(t3) ? s3 = Array.from(document.querySelectorAll(m.string(t3) ? t3 : 'input[type="range"]')) : m.element(t3) ? s3 = [t3] : m.nodeList(t3) ? s3 = Array.from(t3) : m.array(t3) && (s3 = t3.filter(m.element)), m.empty(s3))
              return null;
            var l3 = n2({}, a2, {}, i3);
            if (m.string(t3) && l3.watch) {
              var r3 = new MutationObserver(function(i4) {
                Array.from(i4).forEach(function(i5) {
                  Array.from(i5.addedNodes).forEach(function(i6) {
                    m.element(i6) && function(e5, t4) {
                      return function() {
                        return Array.from(document.querySelectorAll(t4)).includes(this);
                      }.call(e5, t4);
                    }(i6, t3) && new e4(i6, l3);
                  });
                });
              });
              r3.observe(document.body, { childList: true, subtree: true });
            }
            return s3.map(function(t4) {
              return new e4(t4, i3);
            });
          } }, { key: "enabled", get: function() {
            return "ontouchstart" in document.documentElement;
          } }]), e4;
        }();
        const f = (e4) => null != e4 ? e4.constructor : null, y = (e4, t3) => Boolean(e4 && t3 && e4 instanceof t3), b = (e4) => null == e4, v = (e4) => f(e4) === Object, w = (e4) => f(e4) === String, T = (e4) => "function" == typeof e4, k = (e4) => Array.isArray(e4), C = (e4) => y(e4, NodeList), A = (e4) => b(e4) || (w(e4) || k(e4) || C(e4)) && !e4.length || v(e4) && !Object.keys(e4).length;
        var S = { nullOrUndefined: b, object: v, number: (e4) => f(e4) === Number && !Number.isNaN(e4), string: w, boolean: (e4) => f(e4) === Boolean, function: T, array: k, weakMap: (e4) => y(e4, WeakMap), nodeList: C, element: (e4) => null !== e4 && "object" == typeof e4 && 1 === e4.nodeType && "object" == typeof e4.style && "object" == typeof e4.ownerDocument, textNode: (e4) => f(e4) === Text, event: (e4) => y(e4, Event), keyboardEvent: (e4) => y(e4, KeyboardEvent), cue: (e4) => y(e4, window.TextTrackCue) || y(e4, window.VTTCue), track: (e4) => y(e4, TextTrack) || !b(e4) && w(e4.kind), promise: (e4) => y(e4, Promise) && T(e4.then), url: (e4) => {
          if (y(e4, window.URL))
            return true;
          if (!w(e4))
            return false;
          let t3 = e4;
          e4.startsWith("http://") && e4.startsWith("https://") || (t3 = `http://${e4}`);
          try {
            return !A(new URL(t3).hostname);
          } catch (e5) {
            return false;
          }
        }, empty: A };
        const E = (() => {
          const e4 = document.createElement("span"), t3 = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, i3 = Object.keys(t3).find((t4) => void 0 !== e4.style[t4]);
          return !!S.string(i3) && t3[i3];
        })();
        function P(e4, t3) {
          setTimeout(() => {
            try {
              e4.hidden = true, e4.offsetHeight, e4.hidden = false;
            } catch (e5) {
            }
          }, t3);
        }
        var M = { isIE: Boolean(window.document.documentMode), isEdge: /Edge/g.test(navigator.userAgent), isWebKit: "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent), isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1, isIPadOS: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1 };
        function N(e4, t3) {
          return t3.split(".").reduce((e5, t4) => e5 && e5[t4], e4);
        }
        function x(e4 = {}, ...t3) {
          if (!t3.length)
            return e4;
          const i3 = t3.shift();
          return S.object(i3) ? (Object.keys(i3).forEach((t4) => {
            S.object(i3[t4]) ? (Object.keys(e4).includes(t4) || Object.assign(e4, { [t4]: {} }), x(e4[t4], i3[t4])) : Object.assign(e4, { [t4]: i3[t4] });
          }), x(e4, ...t3)) : e4;
        }
        function L(e4, t3) {
          const i3 = e4.length ? e4 : [e4];
          Array.from(i3).reverse().forEach((e5, i4) => {
            const s3 = i4 > 0 ? t3.cloneNode(true) : t3, n3 = e5.parentNode, a3 = e5.nextSibling;
            s3.appendChild(e5), a3 ? n3.insertBefore(s3, a3) : n3.appendChild(s3);
          });
        }
        function I(e4, t3) {
          S.element(e4) && !S.empty(t3) && Object.entries(t3).filter(([, e5]) => !S.nullOrUndefined(e5)).forEach(([t4, i3]) => e4.setAttribute(t4, i3));
        }
        function $2(e4, t3, i3) {
          const s3 = document.createElement(e4);
          return S.object(t3) && I(s3, t3), S.string(i3) && (s3.innerText = i3), s3;
        }
        function _(e4, t3, i3, s3) {
          S.element(t3) && t3.appendChild($2(e4, i3, s3));
        }
        function O(e4) {
          S.nodeList(e4) || S.array(e4) ? Array.from(e4).forEach(O) : S.element(e4) && S.element(e4.parentNode) && e4.parentNode.removeChild(e4);
        }
        function j(e4) {
          if (!S.element(e4))
            return;
          let { length: t3 } = e4.childNodes;
          for (; t3 > 0; )
            e4.removeChild(e4.lastChild), t3 -= 1;
        }
        function q(e4, t3) {
          return S.element(t3) && S.element(t3.parentNode) && S.element(e4) ? (t3.parentNode.replaceChild(e4, t3), e4) : null;
        }
        function D(e4, t3) {
          if (!S.string(e4) || S.empty(e4))
            return {};
          const i3 = {}, s3 = x({}, t3);
          return e4.split(",").forEach((e5) => {
            const t4 = e5.trim(), n3 = t4.replace(".", ""), a3 = t4.replace(/[[\]]/g, "").split("="), [l3] = a3, r3 = a3.length > 1 ? a3[1].replace(/["']/g, "") : "";
            switch (t4.charAt(0)) {
              case ".":
                S.string(s3.class) ? i3.class = `${s3.class} ${n3}` : i3.class = n3;
                break;
              case "#":
                i3.id = t4.replace("#", "");
                break;
              case "[":
                i3[l3] = r3;
            }
          }), x(s3, i3);
        }
        function H(e4, t3) {
          if (!S.element(e4))
            return;
          let i3 = t3;
          S.boolean(i3) || (i3 = !e4.hidden), e4.hidden = i3;
        }
        function R(e4, t3, i3) {
          if (S.nodeList(e4))
            return Array.from(e4).map((e5) => R(e5, t3, i3));
          if (S.element(e4)) {
            let s3 = "toggle";
            return void 0 !== i3 && (s3 = i3 ? "add" : "remove"), e4.classList[s3](t3), e4.classList.contains(t3);
          }
          return false;
        }
        function F(e4, t3) {
          return S.element(e4) && e4.classList.contains(t3);
        }
        function V(e4, t3) {
          const { prototype: i3 } = Element;
          return (i3.matches || i3.webkitMatchesSelector || i3.mozMatchesSelector || i3.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t3)).includes(this);
          }).call(e4, t3);
        }
        function U(e4) {
          return this.elements.container.querySelectorAll(e4);
        }
        function B(e4) {
          return this.elements.container.querySelector(e4);
        }
        function W(e4 = null, t3 = false) {
          S.element(e4) && e4.focus({ preventScroll: true, focusVisible: t3 });
        }
        const z = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" }, K = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check(e4, t3) {
          const i3 = K[e4] || "html5" !== t3;
          return { api: i3, ui: i3 && K.rangeInput };
        }, pip: !(M.isIPhone || !S.function($2("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || $2("video").disablePictureInPicture)), airplay: S.function(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime(e4) {
          if (S.empty(e4))
            return false;
          const [t3] = e4.split("/");
          let i3 = e4;
          if (!this.isHTML5 || t3 !== this.type)
            return false;
          Object.keys(z).includes(i3) && (i3 += `; codecs="${z[e4]}"`);
          try {
            return Boolean(i3 && this.media.canPlayType(i3).replace(/no/, ""));
          } catch (e5) {
            return false;
          }
        }, textTracks: "textTracks" in document.createElement("video"), rangeInput: (() => {
          const e4 = document.createElement("input");
          return e4.type = "range", "range" === e4.type;
        })(), touch: "ontouchstart" in document.documentElement, transitions: false !== E, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches }, Y = (() => {
          let e4 = false;
          try {
            const t3 = Object.defineProperty({}, "passive", { get: () => (e4 = true, null) });
            window.addEventListener("test", null, t3), window.removeEventListener("test", null, t3);
          } catch (e5) {
          }
          return e4;
        })();
        function Q(e4, t3, i3, s3 = false, n3 = true, a3 = false) {
          if (!e4 || !("addEventListener" in e4) || S.empty(t3) || !S.function(i3))
            return;
          const l3 = t3.split(" ");
          let r3 = a3;
          Y && (r3 = { passive: n3, capture: a3 }), l3.forEach((t4) => {
            this && this.eventListeners && s3 && this.eventListeners.push({ element: e4, type: t4, callback: i3, options: r3 }), e4[s3 ? "addEventListener" : "removeEventListener"](t4, i3, r3);
          });
        }
        function X(e4, t3 = "", i3, s3 = true, n3 = false) {
          Q.call(this, e4, t3, i3, true, s3, n3);
        }
        function J(e4, t3 = "", i3, s3 = true, n3 = false) {
          Q.call(this, e4, t3, i3, false, s3, n3);
        }
        function G(e4, t3 = "", i3, s3 = true, n3 = false) {
          const a3 = (...l3) => {
            J(e4, t3, a3, s3, n3), i3.apply(this, l3);
          };
          Q.call(this, e4, t3, a3, true, s3, n3);
        }
        function Z(e4, t3 = "", i3 = false, s3 = {}) {
          if (!S.element(e4) || S.empty(t3))
            return;
          const n3 = new CustomEvent(t3, { bubbles: i3, detail: { ...s3, plyr: this } });
          e4.dispatchEvent(n3);
        }
        function ee() {
          this && this.eventListeners && (this.eventListeners.forEach((e4) => {
            const { element: t3, type: i3, callback: s3, options: n3 } = e4;
            t3.removeEventListener(i3, s3, n3);
          }), this.eventListeners = []);
        }
        function te() {
          return new Promise((e4) => this.ready ? setTimeout(e4, 0) : X.call(this, this.elements.container, "ready", e4)).then(() => {
          });
        }
        function ie(e4) {
          S.promise(e4) && e4.then(null, () => {
          });
        }
        function se(e4) {
          return S.array(e4) ? e4.filter((t3, i3) => e4.indexOf(t3) === i3) : e4;
        }
        function ne(e4, t3) {
          return S.array(e4) && e4.length ? e4.reduce((e5, i3) => Math.abs(i3 - t3) < Math.abs(e5 - t3) ? i3 : e5) : null;
        }
        function ae(e4) {
          return !(!window || !window.CSS) && window.CSS.supports(e4);
        }
        const le = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((e4, [t3, i3]) => ({ ...e4, [t3 / i3]: [t3, i3] }), {});
        function re(e4) {
          if (!(S.array(e4) || S.string(e4) && e4.includes(":")))
            return false;
          return (S.array(e4) ? e4 : e4.split(":")).map(Number).every(S.number);
        }
        function oe(e4) {
          if (!S.array(e4) || !e4.every(S.number))
            return null;
          const [t3, i3] = e4, s3 = (e5, t4) => 0 === t4 ? e5 : s3(t4, e5 % t4), n3 = s3(t3, i3);
          return [t3 / n3, i3 / n3];
        }
        function ce(e4) {
          const t3 = (e5) => re(e5) ? e5.split(":").map(Number) : null;
          let i3 = t3(e4);
          if (null === i3 && (i3 = t3(this.config.ratio)), null === i3 && !S.empty(this.embed) && S.array(this.embed.ratio) && ({ ratio: i3 } = this.embed), null === i3 && this.isHTML5) {
            const { videoWidth: e5, videoHeight: t4 } = this.media;
            i3 = [e5, t4];
          }
          return oe(i3);
        }
        function ue(e4) {
          if (!this.isVideo)
            return {};
          const { wrapper: t3 } = this.elements, i3 = ce.call(this, e4);
          if (!S.array(i3))
            return {};
          const [s3, n3] = oe(i3), a3 = 100 / s3 * n3;
          if (ae(`aspect-ratio: ${s3}/${n3}`) ? t3.style.aspectRatio = `${s3}/${n3}` : t3.style.paddingBottom = `${a3}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            const e5 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), i4 = (e5 - a3) / (e5 / 50);
            this.fullscreen.active ? t3.style.paddingBottom = null : this.media.style.transform = `translateY(-${i4}%)`;
          } else
            this.isHTML5 && t3.classList.add(this.config.classNames.videoFixedRatio);
          return { padding: a3, ratio: i3 };
        }
        function he(e4, t3, i3 = 0.05) {
          const s3 = e4 / t3, n3 = ne(Object.keys(le), s3);
          return Math.abs(n3 - s3) <= i3 ? le[n3] : [e4, t3];
        }
        const de = { getSources() {
          if (!this.isHTML5)
            return [];
          return Array.from(this.media.querySelectorAll("source")).filter((e4) => {
            const t3 = e4.getAttribute("type");
            return !!S.empty(t3) || K.mime.call(this, t3);
          });
        }, getQualityOptions() {
          return this.config.quality.forced ? this.config.quality.options : de.getSources.call(this).map((e4) => Number(e4.getAttribute("size"))).filter(Boolean);
        }, setup() {
          if (!this.isHTML5)
            return;
          const e4 = this;
          e4.options.speed = e4.config.speed.options, S.empty(this.config.ratio) || ue.call(e4), Object.defineProperty(e4.media, "quality", { get() {
            const t3 = de.getSources.call(e4).find((t4) => t4.getAttribute("src") === e4.source);
            return t3 && Number(t3.getAttribute("size"));
          }, set(t3) {
            if (e4.quality !== t3) {
              if (e4.config.quality.forced && S.function(e4.config.quality.onChange))
                e4.config.quality.onChange(t3);
              else {
                const i3 = de.getSources.call(e4).find((e5) => Number(e5.getAttribute("size")) === t3);
                if (!i3)
                  return;
                const { currentTime: s3, paused: n3, preload: a3, readyState: l3, playbackRate: r3 } = e4.media;
                e4.media.src = i3.getAttribute("src"), ("none" !== a3 || l3) && (e4.once("loadedmetadata", () => {
                  e4.speed = r3, e4.currentTime = s3, n3 || ie(e4.play());
                }), e4.media.load());
              }
              Z.call(e4, e4.media, "qualitychange", false, { quality: t3 });
            }
          } });
        }, cancelRequests() {
          this.isHTML5 && (O(de.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
        } };
        function me(e4, ...t3) {
          return S.empty(e4) ? e4 : e4.toString().replace(/{(\d+)}/g, (e5, i3) => t3[i3].toString());
        }
        const pe = (e4 = "", t3 = "", i3 = "") => e4.replace(new RegExp(t3.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i3.toString()), ge = (e4 = "") => e4.toString().replace(/\w\S*/g, (e5) => e5.charAt(0).toUpperCase() + e5.slice(1).toLowerCase());
        function fe(e4 = "") {
          let t3 = e4.toString();
          return t3 = function(e5 = "") {
            let t4 = e5.toString();
            return t4 = pe(t4, "-", " "), t4 = pe(t4, "_", " "), t4 = ge(t4), pe(t4, " ", "");
          }(t3), t3.charAt(0).toLowerCase() + t3.slice(1);
        }
        function ye(e4) {
          const t3 = document.createElement("div");
          return t3.appendChild(e4), t3.innerHTML;
        }
        const be = { pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube" }, ve = { get(e4 = "", t3 = {}) {
          if (S.empty(e4) || S.empty(t3))
            return "";
          let i3 = N(t3.i18n, e4);
          if (S.empty(i3))
            return Object.keys(be).includes(e4) ? be[e4] : "";
          const s3 = { "{seektime}": t3.seekTime, "{title}": t3.title };
          return Object.entries(s3).forEach(([e5, t4]) => {
            i3 = pe(i3, e5, t4);
          }), i3;
        } };
        class we {
          constructor(t3) {
            e3(this, "get", (e4) => {
              if (!we.supported || !this.enabled)
                return null;
              const t4 = window.localStorage.getItem(this.key);
              if (S.empty(t4))
                return null;
              const i3 = JSON.parse(t4);
              return S.string(e4) && e4.length ? i3[e4] : i3;
            }), e3(this, "set", (e4) => {
              if (!we.supported || !this.enabled)
                return;
              if (!S.object(e4))
                return;
              let t4 = this.get();
              S.empty(t4) && (t4 = {}), x(t4, e4);
              try {
                window.localStorage.setItem(this.key, JSON.stringify(t4));
              } catch (e5) {
              }
            }), this.enabled = t3.config.storage.enabled, this.key = t3.config.storage.key;
          }
          static get supported() {
            try {
              if (!("localStorage" in window))
                return false;
              const e4 = "___test";
              return window.localStorage.setItem(e4, e4), window.localStorage.removeItem(e4), true;
            } catch (e4) {
              return false;
            }
          }
        }
        function Te(e4, t3 = "text") {
          return new Promise((i3, s3) => {
            try {
              const s4 = new XMLHttpRequest();
              if (!("withCredentials" in s4))
                return;
              s4.addEventListener("load", () => {
                if ("text" === t3)
                  try {
                    i3(JSON.parse(s4.responseText));
                  } catch (e5) {
                    i3(s4.responseText);
                  }
                else
                  i3(s4.response);
              }), s4.addEventListener("error", () => {
                throw new Error(s4.status);
              }), s4.open("GET", e4, true), s4.responseType = t3, s4.send();
            } catch (e5) {
              s3(e5);
            }
          });
        }
        function ke(e4, t3) {
          if (!S.string(e4))
            return;
          const i3 = "cache", s3 = S.string(t3);
          let n3 = false;
          const a3 = () => null !== document.getElementById(t3), l3 = (e5, t4) => {
            e5.innerHTML = t4, s3 && a3() || document.body.insertAdjacentElement("afterbegin", e5);
          };
          if (!s3 || !a3()) {
            const a4 = we.supported, r3 = document.createElement("div");
            if (r3.setAttribute("hidden", ""), s3 && r3.setAttribute("id", t3), a4) {
              const e5 = window.localStorage.getItem(`${i3}-${t3}`);
              if (n3 = null !== e5, n3) {
                const t4 = JSON.parse(e5);
                l3(r3, t4.content);
              }
            }
            Te(e4).then((e5) => {
              if (!S.empty(e5)) {
                if (a4)
                  try {
                    window.localStorage.setItem(`${i3}-${t3}`, JSON.stringify({ content: e5 }));
                  } catch (e6) {
                  }
                l3(r3, e5);
              }
            }).catch(() => {
            });
          }
        }
        const Ce = (e4) => Math.trunc(e4 / 60 / 60 % 60, 10), Ae = (e4) => Math.trunc(e4 / 60 % 60, 10), Se = (e4) => Math.trunc(e4 % 60, 10);
        function Ee(e4 = 0, t3 = false, i3 = false) {
          if (!S.number(e4))
            return Ee(void 0, t3, i3);
          const s3 = (e5) => `0${e5}`.slice(-2);
          let n3 = Ce(e4);
          const a3 = Ae(e4), l3 = Se(e4);
          return n3 = t3 || n3 > 0 ? `${n3}:` : "", `${i3 && e4 > 0 ? "-" : ""}${n3}${s3(a3)}:${s3(l3)}`;
        }
        const Pe = { getIconUrl() {
          const e4 = new URL(this.config.iconUrl, window.location), t3 = window.location.host ? window.location.host : window.top.location.host, i3 = e4.host !== t3 || M.isIE && !window.svg4everybody;
          return { url: this.config.iconUrl, cors: i3 };
        }, findElements() {
          try {
            return this.elements.controls = B.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: U.call(this, this.config.selectors.buttons.play), pause: B.call(this, this.config.selectors.buttons.pause), restart: B.call(this, this.config.selectors.buttons.restart), rewind: B.call(this, this.config.selectors.buttons.rewind), fastForward: B.call(this, this.config.selectors.buttons.fastForward), mute: B.call(this, this.config.selectors.buttons.mute), pip: B.call(this, this.config.selectors.buttons.pip), airplay: B.call(this, this.config.selectors.buttons.airplay), settings: B.call(this, this.config.selectors.buttons.settings), captions: B.call(this, this.config.selectors.buttons.captions), fullscreen: B.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = B.call(this, this.config.selectors.progress), this.elements.inputs = { seek: B.call(this, this.config.selectors.inputs.seek), volume: B.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: B.call(this, this.config.selectors.display.buffer), currentTime: B.call(this, this.config.selectors.display.currentTime), duration: B.call(this, this.config.selectors.display.duration) }, S.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), true;
          } catch (e4) {
            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e4), this.toggleNativeControls(true), false;
          }
        }, createIcon(e4, t3) {
          const i3 = "http://www.w3.org/2000/svg", s3 = Pe.getIconUrl.call(this), n3 = `${s3.cors ? "" : s3.url}#${this.config.iconPrefix}`, a3 = document.createElementNS(i3, "svg");
          I(a3, x(t3, { "aria-hidden": "true", focusable: "false" }));
          const l3 = document.createElementNS(i3, "use"), r3 = `${n3}-${e4}`;
          return "href" in l3 && l3.setAttributeNS("http://www.w3.org/1999/xlink", "href", r3), l3.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r3), a3.appendChild(l3), a3;
        }, createLabel(e4, t3 = {}) {
          const i3 = ve.get(e4, this.config);
          return $2("span", { ...t3, class: [t3.class, this.config.classNames.hidden].filter(Boolean).join(" ") }, i3);
        }, createBadge(e4) {
          if (S.empty(e4))
            return null;
          const t3 = $2("span", { class: this.config.classNames.menu.value });
          return t3.appendChild($2("span", { class: this.config.classNames.menu.badge }, e4)), t3;
        }, createButton(e4, t3) {
          const i3 = x({}, t3);
          let s3 = fe(e4);
          const n3 = { element: "button", toggle: false, label: null, icon: null, labelPressed: null, iconPressed: null };
          switch (["element", "icon", "label"].forEach((e5) => {
            Object.keys(i3).includes(e5) && (n3[e5] = i3[e5], delete i3[e5]);
          }), "button" !== n3.element || Object.keys(i3).includes("type") || (i3.type = "button"), Object.keys(i3).includes("class") ? i3.class.split(" ").some((e5) => e5 === this.config.classNames.control) || x(i3, { class: `${i3.class} ${this.config.classNames.control}` }) : i3.class = this.config.classNames.control, e4) {
            case "play":
              n3.toggle = true, n3.label = "play", n3.labelPressed = "pause", n3.icon = "play", n3.iconPressed = "pause";
              break;
            case "mute":
              n3.toggle = true, n3.label = "mute", n3.labelPressed = "unmute", n3.icon = "volume", n3.iconPressed = "muted";
              break;
            case "captions":
              n3.toggle = true, n3.label = "enableCaptions", n3.labelPressed = "disableCaptions", n3.icon = "captions-off", n3.iconPressed = "captions-on";
              break;
            case "fullscreen":
              n3.toggle = true, n3.label = "enterFullscreen", n3.labelPressed = "exitFullscreen", n3.icon = "enter-fullscreen", n3.iconPressed = "exit-fullscreen";
              break;
            case "play-large":
              i3.class += ` ${this.config.classNames.control}--overlaid`, s3 = "play", n3.label = "play", n3.icon = "play";
              break;
            default:
              S.empty(n3.label) && (n3.label = s3), S.empty(n3.icon) && (n3.icon = e4);
          }
          const a3 = $2(n3.element);
          return n3.toggle ? (a3.appendChild(Pe.createIcon.call(this, n3.iconPressed, { class: "icon--pressed" })), a3.appendChild(Pe.createIcon.call(this, n3.icon, { class: "icon--not-pressed" })), a3.appendChild(Pe.createLabel.call(this, n3.labelPressed, { class: "label--pressed" })), a3.appendChild(Pe.createLabel.call(this, n3.label, { class: "label--not-pressed" }))) : (a3.appendChild(Pe.createIcon.call(this, n3.icon)), a3.appendChild(Pe.createLabel.call(this, n3.label))), x(i3, D(this.config.selectors.buttons[s3], i3)), I(a3, i3), "play" === s3 ? (S.array(this.elements.buttons[s3]) || (this.elements.buttons[s3] = []), this.elements.buttons[s3].push(a3)) : this.elements.buttons[s3] = a3, a3;
        }, createRange(e4, t3) {
          const i3 = $2("input", x(D(this.config.selectors.inputs[e4]), { type: "range", min: 0, max: 100, step: 0.01, value: 0, autocomplete: "off", role: "slider", "aria-label": ve.get(e4, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t3));
          return this.elements.inputs[e4] = i3, Pe.updateRangeFill.call(this, i3), g.setup(i3), i3;
        }, createProgress(e4, t3) {
          const i3 = $2("progress", x(D(this.config.selectors.display[e4]), { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": true }, t3));
          if ("volume" !== e4) {
            i3.appendChild($2("span", null, "0"));
            const t4 = { played: "played", buffer: "buffered" }[e4], s3 = t4 ? ve.get(t4, this.config) : "";
            i3.innerText = `% ${s3.toLowerCase()}`;
          }
          return this.elements.display[e4] = i3, i3;
        }, createTime(e4, t3) {
          const i3 = D(this.config.selectors.display[e4], t3), s3 = $2("div", x(i3, { class: `${i3.class ? i3.class : ""} ${this.config.classNames.display.time} `.trim(), "aria-label": ve.get(e4, this.config), role: "timer" }), "00:00");
          return this.elements.display[e4] = s3, s3;
        }, bindMenuItemShortcuts(e4, t3) {
          X.call(this, e4, "keydown keyup", (i3) => {
            if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i3.key))
              return;
            if (i3.preventDefault(), i3.stopPropagation(), "keydown" === i3.type)
              return;
            const s3 = V(e4, '[role="menuitemradio"]');
            if (!s3 && [" ", "ArrowRight"].includes(i3.key))
              Pe.showMenuPanel.call(this, t3, true);
            else {
              let t4;
              " " !== i3.key && ("ArrowDown" === i3.key || s3 && "ArrowRight" === i3.key ? (t4 = e4.nextElementSibling, S.element(t4) || (t4 = e4.parentNode.firstElementChild)) : (t4 = e4.previousElementSibling, S.element(t4) || (t4 = e4.parentNode.lastElementChild)), W.call(this, t4, true));
            }
          }, false), X.call(this, e4, "keyup", (e5) => {
            "Return" === e5.key && Pe.focusFirstMenuItem.call(this, null, true);
          });
        }, createMenuItem({ value: e4, list: t3, type: i3, title: s3, badge: n3 = null, checked: a3 = false }) {
          const l3 = D(this.config.selectors.inputs[i3]), r3 = $2("button", x(l3, { type: "button", role: "menuitemradio", class: `${this.config.classNames.control} ${l3.class ? l3.class : ""}`.trim(), "aria-checked": a3, value: e4 })), o3 = $2("span");
          o3.innerHTML = s3, S.element(n3) && o3.appendChild(n3), r3.appendChild(o3), Object.defineProperty(r3, "checked", { enumerable: true, get: () => "true" === r3.getAttribute("aria-checked"), set(e5) {
            e5 && Array.from(r3.parentNode.children).filter((e6) => V(e6, '[role="menuitemradio"]')).forEach((e6) => e6.setAttribute("aria-checked", "false")), r3.setAttribute("aria-checked", e5 ? "true" : "false");
          } }), this.listeners.bind(r3, "click keyup", (t4) => {
            if (!S.keyboardEvent(t4) || " " === t4.key) {
              switch (t4.preventDefault(), t4.stopPropagation(), r3.checked = true, i3) {
                case "language":
                  this.currentTrack = Number(e4);
                  break;
                case "quality":
                  this.quality = e4;
                  break;
                case "speed":
                  this.speed = parseFloat(e4);
              }
              Pe.showMenuPanel.call(this, "home", S.keyboardEvent(t4));
            }
          }, i3, false), Pe.bindMenuItemShortcuts.call(this, r3, i3), t3.appendChild(r3);
        }, formatTime(e4 = 0, t3 = false) {
          if (!S.number(e4))
            return e4;
          return Ee(e4, Ce(this.duration) > 0, t3);
        }, updateTimeDisplay(e4 = null, t3 = 0, i3 = false) {
          S.element(e4) && S.number(t3) && (e4.innerText = Pe.formatTime(t3, i3));
        }, updateVolume() {
          this.supported.ui && (S.element(this.elements.inputs.volume) && Pe.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), S.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
        }, setRange(e4, t3 = 0) {
          S.element(e4) && (e4.value = t3, Pe.updateRangeFill.call(this, e4));
        }, updateProgress(e4) {
          if (!this.supported.ui || !S.event(e4))
            return;
          let t3 = 0;
          const i3 = (e5, t4) => {
            const i4 = S.number(t4) ? t4 : 0, s4 = S.element(e5) ? e5 : this.elements.display.buffer;
            if (S.element(s4)) {
              s4.value = i4;
              const e6 = s4.getElementsByTagName("span")[0];
              S.element(e6) && (e6.childNodes[0].nodeValue = i4);
            }
          };
          if (e4)
            switch (e4.type) {
              case "timeupdate":
              case "seeking":
              case "seeked":
                s3 = this.currentTime, n3 = this.duration, t3 = 0 === s3 || 0 === n3 || Number.isNaN(s3) || Number.isNaN(n3) ? 0 : (s3 / n3 * 100).toFixed(2), "timeupdate" === e4.type && Pe.setRange.call(this, this.elements.inputs.seek, t3);
                break;
              case "playing":
              case "progress":
                i3(this.elements.display.buffer, 100 * this.buffered);
            }
          var s3, n3;
        }, updateRangeFill(e4) {
          const t3 = S.event(e4) ? e4.target : e4;
          if (S.element(t3) && "range" === t3.getAttribute("type")) {
            if (V(t3, this.config.selectors.inputs.seek)) {
              t3.setAttribute("aria-valuenow", this.currentTime);
              const e5 = Pe.formatTime(this.currentTime), i3 = Pe.formatTime(this.duration), s3 = ve.get("seekLabel", this.config);
              t3.setAttribute("aria-valuetext", s3.replace("{currentTime}", e5).replace("{duration}", i3));
            } else if (V(t3, this.config.selectors.inputs.volume)) {
              const e5 = 100 * t3.value;
              t3.setAttribute("aria-valuenow", e5), t3.setAttribute("aria-valuetext", `${e5.toFixed(1)}%`);
            } else
              t3.setAttribute("aria-valuenow", t3.value);
            (M.isWebKit || M.isIPadOS) && t3.style.setProperty("--value", t3.value / t3.max * 100 + "%");
          }
        }, updateSeekTooltip(e4) {
          var t3, i3;
          if (!this.config.tooltips.seek || !S.element(this.elements.inputs.seek) || !S.element(this.elements.display.seekTooltip) || 0 === this.duration)
            return;
          const s3 = this.elements.display.seekTooltip, n3 = `${this.config.classNames.tooltip}--visible`, a3 = (e5) => R(s3, n3, e5);
          if (this.touch)
            return void a3(false);
          let l3 = 0;
          const r3 = this.elements.progress.getBoundingClientRect();
          if (S.event(e4))
            l3 = 100 / r3.width * (e4.pageX - r3.left);
          else {
            if (!F(s3, n3))
              return;
            l3 = parseFloat(s3.style.left, 10);
          }
          l3 < 0 ? l3 = 0 : l3 > 100 && (l3 = 100);
          const o3 = this.duration / 100 * l3;
          s3.innerText = Pe.formatTime(o3);
          const c3 = null === (t3 = this.config.markers) || void 0 === t3 || null === (i3 = t3.points) || void 0 === i3 ? void 0 : i3.find(({ time: e5 }) => e5 === Math.round(o3));
          c3 && s3.insertAdjacentHTML("afterbegin", `${c3.label}<br>`), s3.style.left = `${l3}%`, S.event(e4) && ["mouseenter", "mouseleave"].includes(e4.type) && a3("mouseenter" === e4.type);
        }, timeUpdate(e4) {
          const t3 = !S.element(this.elements.display.duration) && this.config.invertTime;
          Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, t3 ? this.duration - this.currentTime : this.currentTime, t3), e4 && "timeupdate" === e4.type && this.media.seeking || Pe.updateProgress.call(this, e4);
        }, durationUpdate() {
          if (!this.supported.ui || !this.config.invertTime && this.currentTime)
            return;
          if (this.duration >= 2 ** 32)
            return H(this.elements.display.currentTime, true), void H(this.elements.progress, true);
          S.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
          const e4 = S.element(this.elements.display.duration);
          !e4 && this.config.displayDuration && this.paused && Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e4 && Pe.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && Pe.setMarkers.call(this), Pe.updateSeekTooltip.call(this);
        }, toggleMenuButton(e4, t3) {
          H(this.elements.settings.buttons[e4], !t3);
        }, updateSetting(e4, t3, i3) {
          const s3 = this.elements.settings.panels[e4];
          let n3 = null, a3 = t3;
          if ("captions" === e4)
            n3 = this.currentTrack;
          else {
            if (n3 = S.empty(i3) ? this[e4] : i3, S.empty(n3) && (n3 = this.config[e4].default), !S.empty(this.options[e4]) && !this.options[e4].includes(n3))
              return void this.debug.warn(`Unsupported value of '${n3}' for ${e4}`);
            if (!this.config[e4].options.includes(n3))
              return void this.debug.warn(`Disabled value of '${n3}' for ${e4}`);
          }
          if (S.element(a3) || (a3 = s3 && s3.querySelector('[role="menu"]')), !S.element(a3))
            return;
          this.elements.settings.buttons[e4].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = Pe.getLabel.call(this, e4, n3);
          const l3 = a3 && a3.querySelector(`[value="${n3}"]`);
          S.element(l3) && (l3.checked = true);
        }, getLabel(e4, t3) {
          switch (e4) {
            case "speed":
              return 1 === t3 ? ve.get("normal", this.config) : `${t3}&times;`;
            case "quality":
              if (S.number(t3)) {
                const e5 = ve.get(`qualityLabel.${t3}`, this.config);
                return e5.length ? e5 : `${t3}p`;
              }
              return ge(t3);
            case "captions":
              return xe.getLabel.call(this);
            default:
              return null;
          }
        }, setQualityMenu(e4) {
          if (!S.element(this.elements.settings.panels.quality))
            return;
          const t3 = "quality", i3 = this.elements.settings.panels.quality.querySelector('[role="menu"]');
          S.array(e4) && (this.options.quality = se(e4).filter((e5) => this.config.quality.options.includes(e5)));
          const s3 = !S.empty(this.options.quality) && this.options.quality.length > 1;
          if (Pe.toggleMenuButton.call(this, t3, s3), j(i3), Pe.checkMenu.call(this), !s3)
            return;
          const n3 = (e5) => {
            const t4 = ve.get(`qualityBadge.${e5}`, this.config);
            return t4.length ? Pe.createBadge.call(this, t4) : null;
          };
          this.options.quality.sort((e5, t4) => {
            const i4 = this.config.quality.options;
            return i4.indexOf(e5) > i4.indexOf(t4) ? 1 : -1;
          }).forEach((e5) => {
            Pe.createMenuItem.call(this, { value: e5, list: i3, type: t3, title: Pe.getLabel.call(this, "quality", e5), badge: n3(e5) });
          }), Pe.updateSetting.call(this, t3, i3);
        }, setCaptionsMenu() {
          if (!S.element(this.elements.settings.panels.captions))
            return;
          const e4 = "captions", t3 = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i3 = xe.getTracks.call(this), s3 = Boolean(i3.length);
          if (Pe.toggleMenuButton.call(this, e4, s3), j(t3), Pe.checkMenu.call(this), !s3)
            return;
          const n3 = i3.map((e5, i4) => ({ value: i4, checked: this.captions.toggled && this.currentTrack === i4, title: xe.getLabel.call(this, e5), badge: e5.language && Pe.createBadge.call(this, e5.language.toUpperCase()), list: t3, type: "language" }));
          n3.unshift({ value: -1, checked: !this.captions.toggled, title: ve.get("disabled", this.config), list: t3, type: "language" }), n3.forEach(Pe.createMenuItem.bind(this)), Pe.updateSetting.call(this, e4, t3);
        }, setSpeedMenu() {
          if (!S.element(this.elements.settings.panels.speed))
            return;
          const e4 = "speed", t3 = this.elements.settings.panels.speed.querySelector('[role="menu"]');
          this.options.speed = this.options.speed.filter((e5) => e5 >= this.minimumSpeed && e5 <= this.maximumSpeed);
          const i3 = !S.empty(this.options.speed) && this.options.speed.length > 1;
          Pe.toggleMenuButton.call(this, e4, i3), j(t3), Pe.checkMenu.call(this), i3 && (this.options.speed.forEach((i4) => {
            Pe.createMenuItem.call(this, { value: i4, list: t3, type: e4, title: Pe.getLabel.call(this, "speed", i4) });
          }), Pe.updateSetting.call(this, e4, t3));
        }, checkMenu() {
          const { buttons: e4 } = this.elements.settings, t3 = !S.empty(e4) && Object.values(e4).some((e5) => !e5.hidden);
          H(this.elements.settings.menu, !t3);
        }, focusFirstMenuItem(e4, t3 = false) {
          if (this.elements.settings.popup.hidden)
            return;
          let i3 = e4;
          S.element(i3) || (i3 = Object.values(this.elements.settings.panels).find((e5) => !e5.hidden));
          const s3 = i3.querySelector('[role^="menuitem"]');
          W.call(this, s3, t3);
        }, toggleMenu(e4) {
          const { popup: t3 } = this.elements.settings, i3 = this.elements.buttons.settings;
          if (!S.element(t3) || !S.element(i3))
            return;
          const { hidden: s3 } = t3;
          let n3 = s3;
          if (S.boolean(e4))
            n3 = e4;
          else if (S.keyboardEvent(e4) && "Escape" === e4.key)
            n3 = false;
          else if (S.event(e4)) {
            const s4 = S.function(e4.composedPath) ? e4.composedPath()[0] : e4.target, a3 = t3.contains(s4);
            if (a3 || !a3 && e4.target !== i3 && n3)
              return;
          }
          i3.setAttribute("aria-expanded", n3), H(t3, !n3), R(this.elements.container, this.config.classNames.menu.open, n3), n3 && S.keyboardEvent(e4) ? Pe.focusFirstMenuItem.call(this, null, true) : n3 || s3 || W.call(this, i3, S.keyboardEvent(e4));
        }, getMenuSize(e4) {
          const t3 = e4.cloneNode(true);
          t3.style.position = "absolute", t3.style.opacity = 0, t3.removeAttribute("hidden"), e4.parentNode.appendChild(t3);
          const i3 = t3.scrollWidth, s3 = t3.scrollHeight;
          return O(t3), { width: i3, height: s3 };
        }, showMenuPanel(e4 = "", t3 = false) {
          const i3 = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e4}`);
          if (!S.element(i3))
            return;
          const s3 = i3.parentNode, n3 = Array.from(s3.children).find((e5) => !e5.hidden);
          if (K.transitions && !K.reducedMotion) {
            s3.style.width = `${n3.scrollWidth}px`, s3.style.height = `${n3.scrollHeight}px`;
            const e5 = Pe.getMenuSize.call(this, i3), t4 = (e6) => {
              e6.target === s3 && ["width", "height"].includes(e6.propertyName) && (s3.style.width = "", s3.style.height = "", J.call(this, s3, E, t4));
            };
            X.call(this, s3, E, t4), s3.style.width = `${e5.width}px`, s3.style.height = `${e5.height}px`;
          }
          H(n3, true), H(i3, false), Pe.focusFirstMenuItem.call(this, i3, t3);
        }, setDownloadUrl() {
          const e4 = this.elements.buttons.download;
          S.element(e4) && e4.setAttribute("href", this.download);
        }, create(e4) {
          const { bindMenuItemShortcuts: t3, createButton: i3, createProgress: s3, createRange: n3, createTime: a3, setQualityMenu: l3, setSpeedMenu: r3, showMenuPanel: o3 } = Pe;
          this.elements.controls = null, S.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i3.call(this, "play-large"));
          const c3 = $2("div", D(this.config.selectors.controls.wrapper));
          this.elements.controls = c3;
          const u2 = { class: "plyr__controls__item" };
          return se(S.array(this.config.controls) ? this.config.controls : []).forEach((l4) => {
            if ("restart" === l4 && c3.appendChild(i3.call(this, "restart", u2)), "rewind" === l4 && c3.appendChild(i3.call(this, "rewind", u2)), "play" === l4 && c3.appendChild(i3.call(this, "play", u2)), "fast-forward" === l4 && c3.appendChild(i3.call(this, "fast-forward", u2)), "progress" === l4) {
              const t4 = $2("div", { class: `${u2.class} plyr__progress__container` }), i4 = $2("div", D(this.config.selectors.progress));
              if (i4.appendChild(n3.call(this, "seek", { id: `plyr-seek-${e4.id}` })), i4.appendChild(s3.call(this, "buffer")), this.config.tooltips.seek) {
                const e5 = $2("span", { class: this.config.classNames.tooltip }, "00:00");
                i4.appendChild(e5), this.elements.display.seekTooltip = e5;
              }
              this.elements.progress = i4, t4.appendChild(this.elements.progress), c3.appendChild(t4);
            }
            if ("current-time" === l4 && c3.appendChild(a3.call(this, "currentTime", u2)), "duration" === l4 && c3.appendChild(a3.call(this, "duration", u2)), "mute" === l4 || "volume" === l4) {
              let { volume: t4 } = this.elements;
              if (S.element(t4) && c3.contains(t4) || (t4 = $2("div", x({}, u2, { class: `${u2.class} plyr__volume`.trim() })), this.elements.volume = t4, c3.appendChild(t4)), "mute" === l4 && t4.appendChild(i3.call(this, "mute")), "volume" === l4 && !M.isIos && !M.isIPadOS) {
                const i4 = { max: 1, step: 0.05, value: this.config.volume };
                t4.appendChild(n3.call(this, "volume", x(i4, { id: `plyr-volume-${e4.id}` })));
              }
            }
            if ("captions" === l4 && c3.appendChild(i3.call(this, "captions", u2)), "settings" === l4 && !S.empty(this.config.settings)) {
              const s4 = $2("div", x({}, u2, { class: `${u2.class} plyr__menu`.trim(), hidden: "" }));
              s4.appendChild(i3.call(this, "settings", { "aria-haspopup": true, "aria-controls": `plyr-settings-${e4.id}`, "aria-expanded": false }));
              const n4 = $2("div", { class: "plyr__menu__container", id: `plyr-settings-${e4.id}`, hidden: "" }), a4 = $2("div"), l5 = $2("div", { id: `plyr-settings-${e4.id}-home` }), r4 = $2("div", { role: "menu" });
              l5.appendChild(r4), a4.appendChild(l5), this.elements.settings.panels.home = l5, this.config.settings.forEach((i4) => {
                const s5 = $2("button", x(D(this.config.selectors.buttons.settings), { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`, role: "menuitem", "aria-haspopup": true, hidden: "" }));
                t3.call(this, s5, i4), X.call(this, s5, "click", () => {
                  o3.call(this, i4, false);
                });
                const n5 = $2("span", null, ve.get(i4, this.config)), l6 = $2("span", { class: this.config.classNames.menu.value });
                l6.innerHTML = e4[i4], n5.appendChild(l6), s5.appendChild(n5), r4.appendChild(s5);
                const c4 = $2("div", { id: `plyr-settings-${e4.id}-${i4}`, hidden: "" }), u3 = $2("button", { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--back` });
                u3.appendChild($2("span", { "aria-hidden": true }, ve.get(i4, this.config))), u3.appendChild($2("span", { class: this.config.classNames.hidden }, ve.get("menuBack", this.config))), X.call(this, c4, "keydown", (e5) => {
                  "ArrowLeft" === e5.key && (e5.preventDefault(), e5.stopPropagation(), o3.call(this, "home", true));
                }, false), X.call(this, u3, "click", () => {
                  o3.call(this, "home", false);
                }), c4.appendChild(u3), c4.appendChild($2("div", { role: "menu" })), a4.appendChild(c4), this.elements.settings.buttons[i4] = s5, this.elements.settings.panels[i4] = c4;
              }), n4.appendChild(a4), s4.appendChild(n4), c3.appendChild(s4), this.elements.settings.popup = n4, this.elements.settings.menu = s4;
            }
            if ("pip" === l4 && K.pip && c3.appendChild(i3.call(this, "pip", u2)), "airplay" === l4 && K.airplay && c3.appendChild(i3.call(this, "airplay", u2)), "download" === l4) {
              const e5 = x({}, u2, { element: "a", href: this.download, target: "_blank" });
              this.isHTML5 && (e5.download = "");
              const { download: t4 } = this.config.urls;
              !S.url(t4) && this.isEmbed && x(e5, { icon: `logo-${this.provider}`, label: this.provider }), c3.appendChild(i3.call(this, "download", e5));
            }
            "fullscreen" === l4 && c3.appendChild(i3.call(this, "fullscreen", u2));
          }), this.isHTML5 && l3.call(this, de.getQualityOptions.call(this)), r3.call(this), c3;
        }, inject() {
          if (this.config.loadSprite) {
            const e5 = Pe.getIconUrl.call(this);
            e5.cors && ke(e5.url, "sprite-plyr");
          }
          this.id = Math.floor(1e4 * Math.random());
          let e4 = null;
          this.elements.controls = null;
          const t3 = { id: this.id, seektime: this.config.seekTime, title: this.config.title };
          let i3 = true;
          S.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, t3)), this.config.controls || (this.config.controls = []), S.element(this.config.controls) || S.string(this.config.controls) ? e4 = this.config.controls : (e4 = Pe.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: xe.getLabel.call(this) }), i3 = false);
          let s3;
          i3 && S.string(this.config.controls) && (e4 = ((e5) => {
            let i4 = e5;
            return Object.entries(t3).forEach(([e6, t4]) => {
              i4 = pe(i4, `{${e6}}`, t4);
            }), i4;
          })(e4)), S.string(this.config.selectors.controls.container) && (s3 = document.querySelector(this.config.selectors.controls.container)), S.element(s3) || (s3 = this.elements.container);
          if (s3[S.element(e4) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e4), S.element(this.elements.controls) || Pe.findElements.call(this), !S.empty(this.elements.buttons)) {
            const e5 = (e6) => {
              const t4 = this.config.classNames.controlPressed;
              e6.setAttribute("aria-pressed", "false"), Object.defineProperty(e6, "pressed", { configurable: true, enumerable: true, get: () => F(e6, t4), set(i4 = false) {
                R(e6, t4, i4), e6.setAttribute("aria-pressed", i4 ? "true" : "false");
              } });
            };
            Object.values(this.elements.buttons).filter(Boolean).forEach((t4) => {
              S.array(t4) || S.nodeList(t4) ? Array.from(t4).filter(Boolean).forEach(e5) : e5(t4);
            });
          }
          if (M.isEdge && P(s3), this.config.tooltips.controls) {
            const { classNames: e5, selectors: t4 } = this.config, i4 = `${t4.controls.wrapper} ${t4.labels} .${e5.hidden}`, s4 = U.call(this, i4);
            Array.from(s4).forEach((e6) => {
              R(e6, this.config.classNames.hidden, false), R(e6, this.config.classNames.tooltip, true);
            });
          }
        }, setMediaMetadata() {
          try {
            "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({ title: this.config.mediaMetadata.title, artist: this.config.mediaMetadata.artist, album: this.config.mediaMetadata.album, artwork: this.config.mediaMetadata.artwork }));
          } catch (e4) {
          }
        }, setMarkers() {
          var e4, t3;
          if (!this.duration || this.elements.markers)
            return;
          const i3 = null === (e4 = this.config.markers) || void 0 === e4 || null === (t3 = e4.points) || void 0 === t3 ? void 0 : t3.filter(({ time: e5 }) => e5 > 0 && e5 < this.duration);
          if (null == i3 || !i3.length)
            return;
          const s3 = document.createDocumentFragment(), n3 = document.createDocumentFragment();
          let a3 = null;
          const l3 = `${this.config.classNames.tooltip}--visible`, r3 = (e5) => R(a3, l3, e5);
          i3.forEach((e5) => {
            const t4 = $2("span", { class: this.config.classNames.marker }, ""), i4 = e5.time / this.duration * 100 + "%";
            a3 && (t4.addEventListener("mouseenter", () => {
              e5.label || (a3.style.left = i4, a3.innerHTML = e5.label, r3(true));
            }), t4.addEventListener("mouseleave", () => {
              r3(false);
            })), t4.addEventListener("click", () => {
              this.currentTime = e5.time;
            }), t4.style.left = i4, n3.appendChild(t4);
          }), s3.appendChild(n3), this.config.tooltips.seek || (a3 = $2("span", { class: this.config.classNames.tooltip }, ""), s3.appendChild(a3)), this.elements.markers = { points: n3, tip: a3 }, this.elements.progress.appendChild(s3);
        } };
        function Me(e4, t3 = true) {
          let i3 = e4;
          if (t3) {
            const e5 = document.createElement("a");
            e5.href = i3, i3 = e5.href;
          }
          try {
            return new URL(i3);
          } catch (e5) {
            return null;
          }
        }
        function Ne(e4) {
          const t3 = new URLSearchParams();
          return S.object(e4) && Object.entries(e4).forEach(([e5, i3]) => {
            t3.set(e5, i3);
          }), t3;
        }
        const xe = { setup() {
          if (!this.supported.ui)
            return;
          if (!this.isVideo || this.isYouTube || this.isHTML5 && !K.textTracks)
            return void (S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this));
          var e4, t3;
          if (S.element(this.elements.captions) || (this.elements.captions = $2("div", D(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), e4 = this.elements.captions, t3 = this.elements.wrapper, S.element(e4) && S.element(t3) && t3.parentNode.insertBefore(e4, t3.nextSibling)), M.isIE && window.URL) {
            const e5 = this.media.querySelectorAll("track");
            Array.from(e5).forEach((e6) => {
              const t4 = e6.getAttribute("src"), i4 = Me(t4);
              null !== i4 && i4.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i4.protocol) && Te(t4, "blob").then((t5) => {
                e6.setAttribute("src", window.URL.createObjectURL(t5));
              }).catch(() => {
                O(e6);
              });
            });
          }
          const i3 = se((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((e5) => e5.split("-")[0]));
          let s3 = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
          "auto" === s3 && ([s3] = i3);
          let n3 = this.storage.get("captions");
          if (S.boolean(n3) || ({ active: n3 } = this.config.captions), Object.assign(this.captions, { toggled: false, active: n3, language: s3, languages: i3 }), this.isHTML5) {
            const e5 = this.config.captions.update ? "addtrack removetrack" : "removetrack";
            X.call(this, this.media.textTracks, e5, xe.update.bind(this));
          }
          setTimeout(xe.update.bind(this), 0);
        }, update() {
          const e4 = xe.getTracks.call(this, true), { active: t3, language: i3, meta: s3, currentTrackNode: n3 } = this.captions, a3 = Boolean(e4.find((e5) => e5.language === i3));
          this.isHTML5 && this.isVideo && e4.filter((e5) => !s3.get(e5)).forEach((e5) => {
            this.debug.log("Track added", e5), s3.set(e5, { default: "showing" === e5.mode }), "showing" === e5.mode && (e5.mode = "hidden"), X.call(this, e5, "cuechange", () => xe.updateCues.call(this));
          }), (a3 && this.language !== i3 || !e4.includes(n3)) && (xe.setLanguage.call(this, i3), xe.toggle.call(this, t3 && a3)), this.elements && R(this.elements.container, this.config.classNames.captions.enabled, !S.empty(e4)), S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this);
        }, toggle(e4, t3 = true) {
          if (!this.supported.ui)
            return;
          const { toggled: i3 } = this.captions, s3 = this.config.classNames.captions.active, n3 = S.nullOrUndefined(e4) ? !i3 : e4;
          if (n3 !== i3) {
            if (t3 || (this.captions.active = n3, this.storage.set({ captions: n3 })), !this.language && n3 && !t3) {
              const e5 = xe.getTracks.call(this), t4 = xe.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
              return this.captions.language = t4.language, void xe.set.call(this, e5.indexOf(t4));
            }
            this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n3), R(this.elements.container, s3, n3), this.captions.toggled = n3, Pe.updateSetting.call(this, "captions"), Z.call(this, this.media, n3 ? "captionsenabled" : "captionsdisabled");
          }
          setTimeout(() => {
            n3 && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
          });
        }, set(e4, t3 = true) {
          const i3 = xe.getTracks.call(this);
          if (-1 !== e4)
            if (S.number(e4))
              if (e4 in i3) {
                if (this.captions.currentTrack !== e4) {
                  this.captions.currentTrack = e4;
                  const s3 = i3[e4], { language: n3 } = s3 || {};
                  this.captions.currentTrackNode = s3, Pe.updateSetting.call(this, "captions"), t3 || (this.captions.language = n3, this.storage.set({ language: n3 })), this.isVimeo && this.embed.enableTextTrack(n3), Z.call(this, this.media, "languagechange");
                }
                xe.toggle.call(this, true, t3), this.isHTML5 && this.isVideo && xe.updateCues.call(this);
              } else
                this.debug.warn("Track not found", e4);
            else
              this.debug.warn("Invalid caption argument", e4);
          else
            xe.toggle.call(this, false, t3);
        }, setLanguage(e4, t3 = true) {
          if (!S.string(e4))
            return void this.debug.warn("Invalid language argument", e4);
          const i3 = e4.toLowerCase();
          this.captions.language = i3;
          const s3 = xe.getTracks.call(this), n3 = xe.findTrack.call(this, [i3]);
          xe.set.call(this, s3.indexOf(n3), t3);
        }, getTracks(e4 = false) {
          return Array.from((this.media || {}).textTracks || []).filter((t3) => !this.isHTML5 || e4 || this.captions.meta.has(t3)).filter((e5) => ["captions", "subtitles"].includes(e5.kind));
        }, findTrack(e4, t3 = false) {
          const i3 = xe.getTracks.call(this), s3 = (e5) => Number((this.captions.meta.get(e5) || {}).default), n3 = Array.from(i3).sort((e5, t4) => s3(t4) - s3(e5));
          let a3;
          return e4.every((e5) => (a3 = n3.find((t4) => t4.language === e5), !a3)), a3 || (t3 ? n3[0] : void 0);
        }, getCurrentTrack() {
          return xe.getTracks.call(this)[this.currentTrack];
        }, getLabel(e4) {
          let t3 = e4;
          return !S.track(t3) && K.textTracks && this.captions.toggled && (t3 = xe.getCurrentTrack.call(this)), S.track(t3) ? S.empty(t3.label) ? S.empty(t3.language) ? ve.get("enabled", this.config) : e4.language.toUpperCase() : t3.label : ve.get("disabled", this.config);
        }, updateCues(e4) {
          if (!this.supported.ui)
            return;
          if (!S.element(this.elements.captions))
            return void this.debug.warn("No captions element to render to");
          if (!S.nullOrUndefined(e4) && !Array.isArray(e4))
            return void this.debug.warn("updateCues: Invalid input", e4);
          let t3 = e4;
          if (!t3) {
            const e5 = xe.getCurrentTrack.call(this);
            t3 = Array.from((e5 || {}).activeCues || []).map((e6) => e6.getCueAsHTML()).map(ye);
          }
          const i3 = t3.map((e5) => e5.trim()).join("\n");
          if (i3 !== this.elements.captions.innerHTML) {
            j(this.elements.captions);
            const e5 = $2("span", D(this.config.selectors.caption));
            e5.innerHTML = i3, this.elements.captions.appendChild(e5), Z.call(this, this.media, "cuechange");
          }
        } }, Le = { enabled: true, title: "", debug: false, autoplay: false, autopause: true, playsinline: true, seekTime: 10, volume: 1, muted: false, duration: null, displayDuration: true, invertTime: true, toggleInvert: true, ratio: null, clickToPlay: true, hideControls: true, resetOnEnd: false, disableContextMenu: true, loadSprite: true, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240], forced: false, onChange: null }, loop: { active: false }, speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] }, keyboard: { focused: true, global: false }, tooltips: { controls: false, seek: true }, captions: { active: false, language: "auto", update: false }, fullscreen: { enabled: true, fallback: true, iosNative: false }, storage: { enabled: true, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", download: "Download", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", pip: "PIP", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { download: null, vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/oembed.json?url={0}" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, download: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', download: '[data-plyr="download"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption" }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", videoFixedRatio: "plyr__video-wrapper--fixed-ratio", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", marker: "plyr__progress__marker", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, previewThumbnails: { thumbContainer: "plyr__preview-thumb", thumbContainerShown: "plyr__preview-thumb--is-shown", imageContainer: "plyr__preview-thumb__image-container", timeContainer: "plyr__preview-thumb__time-container", scrubbingContainer: "plyr__preview-scrubbing", scrubbingContainerShown: "plyr__preview-scrubbing--is-shown" } }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id", hash: "data-plyr-embed-hash" } }, ads: { enabled: false, publisherId: "", tagUrl: "" }, previewThumbnails: { enabled: false, src: "" }, vimeo: { byline: false, portrait: false, title: false, speed: true, transparent: false, customControls: true, referrerPolicy: null, premium: false }, youtube: { rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, customControls: true, noCookie: false }, mediaMetadata: { title: "", artist: "", album: "", artwork: [] }, markers: { enabled: false, points: [] } }, Ie = "picture-in-picture", $e = "inline", _e = { html5: "html5", youtube: "youtube", vimeo: "vimeo" }, Oe = "audio", je = "video";
        const qe = () => {
        };
        class De {
          constructor(e4 = false) {
            this.enabled = window.console && e4, this.enabled && this.log("Debugging enabled");
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
          constructor(t3) {
            e3(this, "onChange", () => {
              if (!this.supported)
                return;
              const e4 = this.player.elements.buttons.fullscreen;
              S.element(e4) && (e4.pressed = this.active);
              const t4 = this.target === this.player.media ? this.target : this.player.elements.container;
              Z.call(this.player, t4, this.active ? "enterfullscreen" : "exitfullscreen", true);
            }), e3(this, "toggleFallback", (e4 = false) => {
              if (e4 ? this.scrollPosition = { x: window.scrollX ?? 0, y: window.scrollY ?? 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e4 ? "hidden" : "", R(this.target, this.player.config.classNames.fullscreen.fallback, e4), M.isIos) {
                let t4 = document.head.querySelector('meta[name="viewport"]');
                const i3 = "viewport-fit=cover";
                t4 || (t4 = document.createElement("meta"), t4.setAttribute("name", "viewport"));
                const s3 = S.string(t4.content) && t4.content.includes(i3);
                e4 ? (this.cleanupViewport = !s3, s3 || (t4.content += `,${i3}`)) : this.cleanupViewport && (t4.content = t4.content.split(",").filter((e5) => e5.trim() !== i3).join(","));
              }
              this.onChange();
            }), e3(this, "trapFocus", (e4) => {
              if (M.isIos || M.isIPadOS || !this.active || "Tab" !== e4.key)
                return;
              const t4 = document.activeElement, i3 = U.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s3] = i3, n3 = i3[i3.length - 1];
              t4 !== n3 || e4.shiftKey ? t4 === s3 && e4.shiftKey && (n3.focus(), e4.preventDefault()) : (s3.focus(), e4.preventDefault());
            }), e3(this, "update", () => {
              if (this.supported) {
                let e4;
                e4 = this.forceFallback ? "Fallback (forced)" : He.nativeSupported ? "Native" : "Fallback", this.player.debug.log(`${e4} fullscreen enabled`);
              } else
                this.player.debug.log("Fullscreen not supported and fallback disabled");
              R(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
            }), e3(this, "enter", () => {
              this.supported && (M.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !He.nativeSupported || this.forceFallback ? this.toggleFallback(true) : this.prefix ? S.empty(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({ navigationUI: "hide" }));
            }), e3(this, "exit", () => {
              if (this.supported)
                if (M.isIos && this.player.config.fullscreen.iosNative)
                  this.player.isVimeo ? this.player.embed.exitFullscreen() : this.target.webkitEnterFullscreen(), ie(this.player.play());
                else if (!He.nativeSupported || this.forceFallback)
                  this.toggleFallback(false);
                else if (this.prefix) {
                  if (!S.empty(this.prefix)) {
                    const e4 = "moz" === this.prefix ? "Cancel" : "Exit";
                    document[`${this.prefix}${e4}${this.property}`]();
                  }
                } else
                  (document.cancelFullScreen || document.exitFullscreen).call(document);
            }), e3(this, "toggle", () => {
              this.active ? this.exit() : this.enter();
            }), this.player = t3, this.prefix = He.prefix, this.property = He.property, this.scrollPosition = { x: 0, y: 0 }, this.forceFallback = "force" === t3.config.fullscreen.fallback, this.player.elements.fullscreen = t3.config.fullscreen.container && function(e4, t4) {
              const { prototype: i3 } = Element;
              return (i3.closest || function() {
                let e5 = this;
                do {
                  if (V.matches(e5, t4))
                    return e5;
                  e5 = e5.parentElement || e5.parentNode;
                } while (null !== e5 && 1 === e5.nodeType);
                return null;
              }).call(e4, t4);
            }(this.player.elements.container, t3.config.fullscreen.container), X.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
              this.onChange();
            }), X.call(this.player, this.player.elements.container, "dblclick", (e4) => {
              S.element(this.player.elements.controls) && this.player.elements.controls.contains(e4.target) || this.player.listeners.proxy(e4, this.toggle, "fullscreen");
            }), X.call(this, this.player.elements.container, "keydown", (e4) => this.trapFocus(e4)), this.update();
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
            let e4 = "";
            return ["webkit", "moz", "ms"].some((t3) => !(!S.function(document[`${t3}ExitFullscreen`]) && !S.function(document[`${t3}CancelFullScreen`])) && (e4 = t3, true)), e4;
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
            const e4 = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
            return e4 && e4.shadowRoot ? e4 === this.target.getRootNode().host : e4 === this.target;
          }
          get target() {
            return M.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen ?? this.player.elements.container;
          }
        }
        function Re(e4, t3 = 1) {
          return new Promise((i3, s3) => {
            const n3 = new Image(), a3 = () => {
              delete n3.onload, delete n3.onerror, (n3.naturalWidth >= t3 ? i3 : s3)(n3);
            };
            Object.assign(n3, { onload: a3, onerror: a3, src: e4 });
          });
        }
        const Fe = { addStyleHook() {
          R(this.elements.container, this.config.selectors.container.replace(".", ""), true), R(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
        }, toggleNativeControls(e4 = false) {
          e4 && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
        }, build() {
          if (this.listeners.media(), !this.supported.ui)
            return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void Fe.toggleNativeControls.call(this, true);
          S.element(this.elements.controls) || (Pe.inject.call(this), this.listeners.controls()), Fe.toggleNativeControls.call(this), this.isHTML5 && xe.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Pe.updateVolume.call(this), Pe.timeUpdate.call(this), Pe.durationUpdate.call(this), Fe.checkPlaying.call(this), R(this.elements.container, this.config.classNames.pip.supported, K.pip && this.isHTML5 && this.isVideo), R(this.elements.container, this.config.classNames.airplay.supported, K.airplay && this.isHTML5), R(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = true, setTimeout(() => {
            Z.call(this, this.media, "ready");
          }, 0), Fe.setTitle.call(this), this.poster && Fe.setPoster.call(this, this.poster, false).catch(() => {
          }), this.config.duration && Pe.durationUpdate.call(this), this.config.mediaMetadata && Pe.setMediaMetadata.call(this);
        }, setTitle() {
          let e4 = ve.get("play", this.config);
          if (S.string(this.config.title) && !S.empty(this.config.title) && (e4 += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach((t3) => {
            t3.setAttribute("aria-label", e4);
          }), this.isEmbed) {
            const e5 = B.call(this, "iframe");
            if (!S.element(e5))
              return;
            const t3 = S.empty(this.config.title) ? "video" : this.config.title, i3 = ve.get("frameTitle", this.config);
            e5.setAttribute("title", i3.replace("{title}", t3));
          }
        }, togglePoster(e4) {
          R(this.elements.container, this.config.classNames.posterEnabled, e4);
        }, setPoster(e4, t3 = true) {
          return t3 && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e4), this.elements.poster.removeAttribute("hidden"), te.call(this).then(() => Re(e4)).catch((t4) => {
            throw e4 === this.poster && Fe.togglePoster.call(this, false), t4;
          }).then(() => {
            if (e4 !== this.poster)
              throw new Error("setPoster cancelled by later call to setPoster");
          }).then(() => (Object.assign(this.elements.poster.style, { backgroundImage: `url('${e4}')`, backgroundSize: "" }), Fe.togglePoster.call(this, true), e4)));
        }, checkPlaying(e4) {
          R(this.elements.container, this.config.classNames.playing, this.playing), R(this.elements.container, this.config.classNames.paused, this.paused), R(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e5) => {
            Object.assign(e5, { pressed: this.playing }), e5.setAttribute("aria-label", ve.get(this.playing ? "pause" : "play", this.config));
          }), S.event(e4) && "timeupdate" === e4.type || Fe.toggleControls.call(this);
        }, checkLoading(e4) {
          this.loading = ["stalled", "waiting"].includes(e4.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
            R(this.elements.container, this.config.classNames.loading, this.loading), Fe.toggleControls.call(this);
          }, this.loading ? 250 : 0);
        }, toggleControls(e4) {
          const { controls: t3 } = this.elements;
          if (t3 && this.config.hideControls) {
            const i3 = this.touch && this.lastSeekTime + 2e3 > Date.now();
            this.toggleControls(Boolean(e4 || this.loading || this.paused || t3.pressed || t3.hover || i3));
          }
        }, migrateStyles() {
          Object.values({ ...this.media.style }).filter((e4) => !S.empty(e4) && S.string(e4) && e4.startsWith("--plyr")).forEach((e4) => {
            this.elements.container.style.setProperty(e4, this.media.style.getPropertyValue(e4)), this.media.style.removeProperty(e4);
          }), S.empty(this.media.style) && this.media.removeAttribute("style");
        } };
        class Ve {
          constructor(t3) {
            e3(this, "firstTouch", () => {
              const { player: e4 } = this, { elements: t4 } = e4;
              e4.touch = true, R(t4.container, e4.config.classNames.isTouch, true);
            }), e3(this, "global", (e4 = true) => {
              const { player: t4 } = this;
              t4.config.keyboard.global && Q.call(t4, window, "keydown keyup", this.handleKey, e4, false), Q.call(t4, document.body, "click", this.toggleMenu, e4), G.call(t4, document.body, "touchstart", this.firstTouch);
            }), e3(this, "container", () => {
              const { player: e4 } = this, { config: t4, elements: i3, timers: s3 } = e4;
              !t4.keyboard.global && t4.keyboard.focused && X.call(e4, i3.container, "keydown keyup", this.handleKey, false), X.call(e4, i3.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t5) => {
                const { controls: n4 } = i3;
                n4 && "enterfullscreen" === t5.type && (n4.pressed = false, n4.hover = false);
                let a4 = 0;
                ["touchstart", "touchmove", "mousemove"].includes(t5.type) && (Fe.toggleControls.call(e4, true), a4 = e4.touch ? 3e3 : 2e3), clearTimeout(s3.controls), s3.controls = setTimeout(() => Fe.toggleControls.call(e4, false), a4);
              });
              const n3 = () => {
                if (!e4.isVimeo || e4.config.vimeo.premium)
                  return;
                const t5 = i3.wrapper, { active: s4 } = e4.fullscreen, [n4, a4] = ce.call(e4), l3 = ae(`aspect-ratio: ${n4} / ${a4}`);
                if (!s4)
                  return void (l3 ? (t5.style.width = null, t5.style.height = null) : (t5.style.maxWidth = null, t5.style.margin = null));
                const [r3, o3] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)], c3 = r3 / o3 > n4 / a4;
                l3 ? (t5.style.width = c3 ? "auto" : "100%", t5.style.height = c3 ? "100%" : "auto") : (t5.style.maxWidth = c3 ? o3 / a4 * n4 + "px" : null, t5.style.margin = c3 ? "0 auto" : null);
              }, a3 = () => {
                clearTimeout(s3.resized), s3.resized = setTimeout(n3, 50);
              };
              X.call(e4, i3.container, "enterfullscreen exitfullscreen", (t5) => {
                const { target: s4 } = e4.fullscreen;
                if (s4 !== i3.container)
                  return;
                if (!e4.isEmbed && S.empty(e4.config.ratio))
                  return;
                n3();
                ("enterfullscreen" === t5.type ? X : J).call(e4, window, "resize", a3);
              });
            }), e3(this, "media", () => {
              const { player: e4 } = this, { elements: t4 } = e4;
              if (X.call(e4, e4.media, "timeupdate seeking seeked", (t5) => Pe.timeUpdate.call(e4, t5)), X.call(e4, e4.media, "durationchange loadeddata loadedmetadata", (t5) => Pe.durationUpdate.call(e4, t5)), X.call(e4, e4.media, "ended", () => {
                e4.isHTML5 && e4.isVideo && e4.config.resetOnEnd && (e4.restart(), e4.pause());
              }), X.call(e4, e4.media, "progress playing seeking seeked", (t5) => Pe.updateProgress.call(e4, t5)), X.call(e4, e4.media, "volumechange", (t5) => Pe.updateVolume.call(e4, t5)), X.call(e4, e4.media, "playing play pause ended emptied timeupdate", (t5) => Fe.checkPlaying.call(e4, t5)), X.call(e4, e4.media, "waiting canplay seeked playing", (t5) => Fe.checkLoading.call(e4, t5)), e4.supported.ui && e4.config.clickToPlay && !e4.isAudio) {
                const i4 = B.call(e4, `.${e4.config.classNames.video}`);
                if (!S.element(i4))
                  return;
                X.call(e4, t4.container, "click", (s3) => {
                  ([t4.container, i4].includes(s3.target) || i4.contains(s3.target)) && (e4.touch && e4.config.hideControls || (e4.ended ? (this.proxy(s3, e4.restart, "restart"), this.proxy(s3, () => {
                    ie(e4.play());
                  }, "play")) : this.proxy(s3, () => {
                    ie(e4.togglePlay());
                  }, "play")));
                });
              }
              e4.supported.ui && e4.config.disableContextMenu && X.call(e4, t4.wrapper, "contextmenu", (e5) => {
                e5.preventDefault();
              }, false), X.call(e4, e4.media, "volumechange", () => {
                e4.storage.set({ volume: e4.volume, muted: e4.muted });
              }), X.call(e4, e4.media, "ratechange", () => {
                Pe.updateSetting.call(e4, "speed"), e4.storage.set({ speed: e4.speed });
              }), X.call(e4, e4.media, "qualitychange", (t5) => {
                Pe.updateSetting.call(e4, "quality", null, t5.detail.quality);
              }), X.call(e4, e4.media, "ready qualitychange", () => {
                Pe.setDownloadUrl.call(e4);
              });
              const i3 = e4.config.events.concat(["keyup", "keydown"]).join(" ");
              X.call(e4, e4.media, i3, (i4) => {
                let { detail: s3 = {} } = i4;
                "error" === i4.type && (s3 = e4.media.error), Z.call(e4, t4.container, i4.type, true, s3);
              });
            }), e3(this, "proxy", (e4, t4, i3) => {
              const { player: s3 } = this, n3 = s3.config.listeners[i3];
              let a3 = true;
              S.function(n3) && (a3 = n3.call(s3, e4)), false !== a3 && S.function(t4) && t4.call(s3, e4);
            }), e3(this, "bind", (e4, t4, i3, s3, n3 = true) => {
              const { player: a3 } = this, l3 = a3.config.listeners[s3], r3 = S.function(l3);
              X.call(a3, e4, t4, (e5) => this.proxy(e5, i3, s3), n3 && !r3);
            }), e3(this, "controls", () => {
              const { player: e4 } = this, { elements: t4 } = e4, i3 = M.isIE ? "change" : "input";
              if (t4.buttons.play && Array.from(t4.buttons.play).forEach((t5) => {
                this.bind(t5, "click", () => {
                  ie(e4.togglePlay());
                }, "play");
              }), this.bind(t4.buttons.restart, "click", e4.restart, "restart"), this.bind(t4.buttons.rewind, "click", () => {
                e4.lastSeekTime = Date.now(), e4.rewind();
              }, "rewind"), this.bind(t4.buttons.fastForward, "click", () => {
                e4.lastSeekTime = Date.now(), e4.forward();
              }, "fastForward"), this.bind(t4.buttons.mute, "click", () => {
                e4.muted = !e4.muted;
              }, "mute"), this.bind(t4.buttons.captions, "click", () => e4.toggleCaptions()), this.bind(t4.buttons.download, "click", () => {
                Z.call(e4, e4.media, "download");
              }, "download"), this.bind(t4.buttons.fullscreen, "click", () => {
                e4.fullscreen.toggle();
              }, "fullscreen"), this.bind(t4.buttons.pip, "click", () => {
                e4.pip = "toggle";
              }, "pip"), this.bind(t4.buttons.airplay, "click", e4.airplay, "airplay"), this.bind(t4.buttons.settings, "click", (t5) => {
                t5.stopPropagation(), t5.preventDefault(), Pe.toggleMenu.call(e4, t5);
              }, null, false), this.bind(t4.buttons.settings, "keyup", (t5) => {
                [" ", "Enter"].includes(t5.key) && ("Enter" !== t5.key ? (t5.preventDefault(), t5.stopPropagation(), Pe.toggleMenu.call(e4, t5)) : Pe.focusFirstMenuItem.call(e4, null, true));
              }, null, false), this.bind(t4.settings.menu, "keydown", (t5) => {
                "Escape" === t5.key && Pe.toggleMenu.call(e4, t5);
              }), this.bind(t4.inputs.seek, "mousedown mousemove", (e5) => {
                const i4 = t4.progress.getBoundingClientRect(), s3 = 100 / i4.width * (e5.pageX - i4.left);
                e5.currentTarget.setAttribute("seek-value", s3);
              }), this.bind(t4.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t5) => {
                const i4 = t5.currentTarget, s3 = "play-on-seeked";
                if (S.keyboardEvent(t5) && !["ArrowLeft", "ArrowRight"].includes(t5.key))
                  return;
                e4.lastSeekTime = Date.now();
                const n3 = i4.hasAttribute(s3), a3 = ["mouseup", "touchend", "keyup"].includes(t5.type);
                n3 && a3 ? (i4.removeAttribute(s3), ie(e4.play())) : !a3 && e4.playing && (i4.setAttribute(s3, ""), e4.pause());
              }), M.isIos) {
                const t5 = U.call(e4, 'input[type="range"]');
                Array.from(t5).forEach((e5) => this.bind(e5, i3, (e6) => P(e6.target)));
              }
              this.bind(t4.inputs.seek, i3, (t5) => {
                const i4 = t5.currentTarget;
                let s3 = i4.getAttribute("seek-value");
                S.empty(s3) && (s3 = i4.value), i4.removeAttribute("seek-value"), e4.currentTime = s3 / i4.max * e4.duration;
              }, "seek"), this.bind(t4.progress, "mouseenter mouseleave mousemove", (t5) => Pe.updateSeekTooltip.call(e4, t5)), this.bind(t4.progress, "mousemove touchmove", (t5) => {
                const { previewThumbnails: i4 } = e4;
                i4 && i4.loaded && i4.startMove(t5);
              }), this.bind(t4.progress, "mouseleave touchend click", () => {
                const { previewThumbnails: t5 } = e4;
                t5 && t5.loaded && t5.endMove(false, true);
              }), this.bind(t4.progress, "mousedown touchstart", (t5) => {
                const { previewThumbnails: i4 } = e4;
                i4 && i4.loaded && i4.startScrubbing(t5);
              }), this.bind(t4.progress, "mouseup touchend", (t5) => {
                const { previewThumbnails: i4 } = e4;
                i4 && i4.loaded && i4.endScrubbing(t5);
              }), M.isWebKit && Array.from(U.call(e4, 'input[type="range"]')).forEach((t5) => {
                this.bind(t5, "input", (t6) => Pe.updateRangeFill.call(e4, t6.target));
              }), e4.config.toggleInvert && !S.element(t4.display.duration) && this.bind(t4.display.currentTime, "click", () => {
                0 !== e4.currentTime && (e4.config.invertTime = !e4.config.invertTime, Pe.timeUpdate.call(e4));
              }), this.bind(t4.inputs.volume, i3, (t5) => {
                e4.volume = t5.target.value;
              }, "volume"), this.bind(t4.controls, "mouseenter mouseleave", (i4) => {
                t4.controls.hover = !e4.touch && "mouseenter" === i4.type;
              }), t4.fullscreen && Array.from(t4.fullscreen.children).filter((e5) => !e5.contains(t4.container)).forEach((i4) => {
                this.bind(i4, "mouseenter mouseleave", (i5) => {
                  t4.controls && (t4.controls.hover = !e4.touch && "mouseenter" === i5.type);
                });
              }), this.bind(t4.controls, "mousedown mouseup touchstart touchend touchcancel", (e5) => {
                t4.controls.pressed = ["mousedown", "touchstart"].includes(e5.type);
              }), this.bind(t4.controls, "focusin", () => {
                const { config: i4, timers: s3 } = e4;
                R(t4.controls, i4.classNames.noTransition, true), Fe.toggleControls.call(e4, true), setTimeout(() => {
                  R(t4.controls, i4.classNames.noTransition, false);
                }, 0);
                const n3 = this.touch ? 3e3 : 4e3;
                clearTimeout(s3.controls), s3.controls = setTimeout(() => Fe.toggleControls.call(e4, false), n3);
              }), this.bind(t4.inputs.volume, "wheel", (t5) => {
                const i4 = t5.webkitDirectionInvertedFromDevice, [s3, n3] = [t5.deltaX, -t5.deltaY].map((e5) => i4 ? -e5 : e5), a3 = Math.sign(Math.abs(s3) > Math.abs(n3) ? s3 : n3);
                e4.increaseVolume(a3 / 50);
                const { volume: l3 } = e4.media;
                (1 === a3 && l3 < 1 || -1 === a3 && l3 > 0) && t5.preventDefault();
              }, "volume", false);
            }), this.player = t3, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this);
          }
          handleKey(e4) {
            const { player: t3 } = this, { elements: i3 } = t3, { key: s3, type: n3, altKey: a3, ctrlKey: l3, metaKey: r3, shiftKey: o3 } = e4, c3 = "keydown" === n3, u2 = c3 && s3 === this.lastKey;
            if (a3 || l3 || r3 || o3)
              return;
            if (!s3)
              return;
            if (c3) {
              const n4 = document.activeElement;
              if (S.element(n4)) {
                const { editable: s4 } = t3.config.selectors, { seek: a4 } = i3.inputs;
                if (n4 !== a4 && V(n4, s4))
                  return;
                if (" " === e4.key && V(n4, 'button, [role^="menuitem"]'))
                  return;
              }
              switch ([" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(s3) && (e4.preventDefault(), e4.stopPropagation()), s3) {
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
                  u2 || (h3 = parseInt(s3, 10), t3.currentTime = t3.duration / 10 * h3);
                  break;
                case " ":
                case "k":
                  u2 || ie(t3.togglePlay());
                  break;
                case "ArrowUp":
                  t3.increaseVolume(0.1);
                  break;
                case "ArrowDown":
                  t3.decreaseVolume(0.1);
                  break;
                case "m":
                  u2 || (t3.muted = !t3.muted);
                  break;
                case "ArrowRight":
                  t3.forward();
                  break;
                case "ArrowLeft":
                  t3.rewind();
                  break;
                case "f":
                  t3.fullscreen.toggle();
                  break;
                case "c":
                  u2 || t3.toggleCaptions();
                  break;
                case "l":
                  t3.loop = !t3.loop;
              }
              "Escape" === s3 && !t3.fullscreen.usingNative && t3.fullscreen.active && t3.fullscreen.toggle(), this.lastKey = s3;
            } else
              this.lastKey = null;
            var h3;
          }
          toggleMenu(e4) {
            Pe.toggleMenu.call(this.player, e4);
          }
        }
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
        var Ue = function(e4, t3) {
          return e4(t3 = { exports: {} }, t3.exports), t3.exports;
        }(function(e4, t3) {
          e4.exports = function() {
            var e5 = function() {
            }, t4 = {}, i3 = {}, s3 = {};
            function n3(e6, t5) {
              e6 = e6.push ? e6 : [e6];
              var n4, a4, l4, r4 = [], o4 = e6.length, c4 = o4;
              for (n4 = function(e7, i4) {
                i4.length && r4.push(e7), --c4 || t5(r4);
              }; o4--; )
                a4 = e6[o4], (l4 = i3[a4]) ? n4(a4, l4) : (s3[a4] = s3[a4] || []).push(n4);
            }
            function a3(e6, t5) {
              if (e6) {
                var n4 = s3[e6];
                if (i3[e6] = t5, n4)
                  for (; n4.length; )
                    n4[0](e6, t5), n4.splice(0, 1);
              }
            }
            function l3(t5, i4) {
              t5.call && (t5 = { success: t5 }), i4.length ? (t5.error || e5)(i4) : (t5.success || e5)(t5);
            }
            function r3(t5, i4, s4, n4) {
              var a4, l4, o4 = document, c4 = s4.async, u2 = (s4.numRetries || 0) + 1, h3 = s4.before || e5, d2 = t5.replace(/[\?|#].*$/, ""), m2 = t5.replace(/^(css|img)!/, "");
              n4 = n4 || 0, /(^css!|\.css$)/.test(d2) ? ((l4 = o4.createElement("link")).rel = "stylesheet", l4.href = m2, (a4 = "hideFocus" in l4) && l4.relList && (a4 = 0, l4.rel = "preload", l4.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d2) ? (l4 = o4.createElement("img")).src = m2 : ((l4 = o4.createElement("script")).src = t5, l4.async = void 0 === c4 || c4), l4.onload = l4.onerror = l4.onbeforeload = function(e6) {
                var o5 = e6.type[0];
                if (a4)
                  try {
                    l4.sheet.cssText.length || (o5 = "e");
                  } catch (e7) {
                    18 != e7.code && (o5 = "e");
                  }
                if ("e" == o5) {
                  if ((n4 += 1) < u2)
                    return r3(t5, i4, s4, n4);
                } else if ("preload" == l4.rel && "style" == l4.as)
                  return l4.rel = "stylesheet";
                i4(t5, o5, e6.defaultPrevented);
              }, false !== h3(t5, l4) && o4.head.appendChild(l4);
            }
            function o3(e6, t5, i4) {
              var s4, n4, a4 = (e6 = e6.push ? e6 : [e6]).length, l4 = a4, o4 = [];
              for (s4 = function(e7, i5, s5) {
                if ("e" == i5 && o4.push(e7), "b" == i5) {
                  if (!s5)
                    return;
                  o4.push(e7);
                }
                --a4 || t5(o4);
              }, n4 = 0; n4 < l4; n4++)
                r3(e6[n4], s4, i4);
            }
            function c3(e6, i4, s4) {
              var n4, r4;
              if (i4 && i4.trim && (n4 = i4), r4 = (n4 ? s4 : i4) || {}, n4) {
                if (n4 in t4)
                  throw "LoadJS";
                t4[n4] = true;
              }
              function c4(t5, i5) {
                o3(e6, function(e7) {
                  l3(r4, e7), t5 && l3({ success: t5, error: i5 }, e7), a3(n4, e7);
                }, r4);
              }
              if (r4.returnPromise)
                return new Promise(c4);
              c4();
            }
            return c3.ready = function(e6, t5) {
              return n3(e6, function(e7) {
                l3(t5, e7);
              }), c3;
            }, c3.done = function(e6) {
              a3(e6, []);
            }, c3.reset = function() {
              t4 = {}, i3 = {}, s3 = {};
            }, c3.isDefined = function(e6) {
              return e6 in t4;
            }, c3;
          }();
        });
        function Be(e4) {
          return new Promise((t3, i3) => {
            Ue(e4, { success: t3, error: i3 });
          });
        }
        function We(e4) {
          e4 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e4 && (this.media.paused = !e4, Z.call(this, this.media, e4 ? "play" : "pause"));
        }
        const ze = { setup() {
          const e4 = this;
          R(e4.elements.wrapper, e4.config.classNames.embed, true), e4.options.speed = e4.config.speed.options, ue.call(e4), S.object(window.Vimeo) ? ze.ready.call(e4) : Be(e4.config.urls.vimeo.sdk).then(() => {
            ze.ready.call(e4);
          }).catch((t3) => {
            e4.debug.warn("Vimeo SDK (player.js) failed to load", t3);
          });
        }, ready() {
          const e4 = this, t3 = e4.config.vimeo, { premium: i3, referrerPolicy: s3, ...n3 } = t3;
          let a3 = e4.media.getAttribute("src"), l3 = "";
          S.empty(a3) ? (a3 = e4.media.getAttribute(e4.config.attributes.embed.id), l3 = e4.media.getAttribute(e4.config.attributes.embed.hash)) : l3 = function(e5) {
            const t4 = e5.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
            return t4 && 5 === t4.length ? t4[4] : null;
          }(a3);
          const r3 = l3 ? { h: l3 } : {};
          i3 && Object.assign(n3, { controls: false, sidedock: false });
          const o3 = Ne({ loop: e4.config.loop.active, autoplay: e4.autoplay, muted: e4.muted, gesture: "media", playsinline: e4.config.playsinline, ...r3, ...n3 }), c3 = (u2 = a3, S.empty(u2) ? null : S.number(Number(u2)) ? u2 : u2.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u2);
          var u2;
          const h3 = $2("iframe"), d2 = me(e4.config.urls.vimeo.iframe, c3, o3);
          if (h3.setAttribute("src", d2), h3.setAttribute("allowfullscreen", ""), h3.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), S.empty(s3) || h3.setAttribute("referrerPolicy", s3), i3 || !t3.customControls)
            h3.setAttribute("data-poster", e4.poster), e4.media = q(h3, e4.media);
          else {
            const t4 = $2("div", { class: e4.config.classNames.embedContainer, "data-poster": e4.poster });
            t4.appendChild(h3), e4.media = q(t4, e4.media);
          }
          t3.customControls || Te(me(e4.config.urls.vimeo.api, d2)).then((t4) => {
            !S.empty(t4) && t4.thumbnail_url && Fe.setPoster.call(e4, t4.thumbnail_url).catch(() => {
            });
          }), e4.embed = new window.Vimeo.Player(h3, { autopause: e4.config.autopause, muted: e4.muted }), e4.media.paused = true, e4.media.currentTime = 0, e4.supported.ui && e4.embed.disableTextTrack(), e4.media.play = () => (We.call(e4, true), e4.embed.play()), e4.media.pause = () => (We.call(e4, false), e4.embed.pause()), e4.media.stop = () => {
            e4.pause(), e4.currentTime = 0;
          };
          let { currentTime: m2 } = e4.media;
          Object.defineProperty(e4.media, "currentTime", { get: () => m2, set(t4) {
            const { embed: i4, media: s4, paused: n4, volume: a4 } = e4, l4 = n4 && !i4.hasPlayed;
            s4.seeking = true, Z.call(e4, s4, "seeking"), Promise.resolve(l4 && i4.setVolume(0)).then(() => i4.setCurrentTime(t4)).then(() => l4 && i4.pause()).then(() => l4 && i4.setVolume(a4)).catch(() => {
            });
          } });
          let p2 = e4.config.speed.selected;
          Object.defineProperty(e4.media, "playbackRate", { get: () => p2, set(t4) {
            e4.embed.setPlaybackRate(t4).then(() => {
              p2 = t4, Z.call(e4, e4.media, "ratechange");
            }).catch(() => {
              e4.options.speed = [1];
            });
          } });
          let { volume: g2 } = e4.config;
          Object.defineProperty(e4.media, "volume", { get: () => g2, set(t4) {
            e4.embed.setVolume(t4).then(() => {
              g2 = t4, Z.call(e4, e4.media, "volumechange");
            });
          } });
          let { muted: f2 } = e4.config;
          Object.defineProperty(e4.media, "muted", { get: () => f2, set(t4) {
            const i4 = !!S.boolean(t4) && t4;
            e4.embed.setMuted(!!i4 || e4.config.muted).then(() => {
              f2 = i4, Z.call(e4, e4.media, "volumechange");
            });
          } });
          let y2, { loop: b2 } = e4.config;
          Object.defineProperty(e4.media, "loop", { get: () => b2, set(t4) {
            const i4 = S.boolean(t4) ? t4 : e4.config.loop.active;
            e4.embed.setLoop(i4).then(() => {
              b2 = i4;
            });
          } }), e4.embed.getVideoUrl().then((t4) => {
            y2 = t4, Pe.setDownloadUrl.call(e4);
          }).catch((e5) => {
            this.debug.warn(e5);
          }), Object.defineProperty(e4.media, "currentSrc", { get: () => y2 }), Object.defineProperty(e4.media, "ended", { get: () => e4.currentTime === e4.duration }), Promise.all([e4.embed.getVideoWidth(), e4.embed.getVideoHeight()]).then((t4) => {
            const [i4, s4] = t4;
            e4.embed.ratio = he(i4, s4), ue.call(this);
          }), e4.embed.setAutopause(e4.config.autopause).then((t4) => {
            e4.config.autopause = t4;
          }), e4.embed.getVideoTitle().then((t4) => {
            e4.config.title = t4, Fe.setTitle.call(this);
          }), e4.embed.getCurrentTime().then((t4) => {
            m2 = t4, Z.call(e4, e4.media, "timeupdate");
          }), e4.embed.getDuration().then((t4) => {
            e4.media.duration = t4, Z.call(e4, e4.media, "durationchange");
          }), e4.embed.getTextTracks().then((t4) => {
            e4.media.textTracks = t4, xe.setup.call(e4);
          }), e4.embed.on("cuechange", ({ cues: t4 = [] }) => {
            const i4 = t4.map((e5) => function(e6) {
              const t5 = document.createDocumentFragment(), i5 = document.createElement("div");
              return t5.appendChild(i5), i5.innerHTML = e6, t5.firstChild.innerText;
            }(e5.text));
            xe.updateCues.call(e4, i4);
          }), e4.embed.on("loaded", () => {
            if (e4.embed.getPaused().then((t4) => {
              We.call(e4, !t4), t4 || Z.call(e4, e4.media, "playing");
            }), S.element(e4.embed.element) && e4.supported.ui) {
              e4.embed.element.setAttribute("tabindex", -1);
            }
          }), e4.embed.on("bufferstart", () => {
            Z.call(e4, e4.media, "waiting");
          }), e4.embed.on("bufferend", () => {
            Z.call(e4, e4.media, "playing");
          }), e4.embed.on("play", () => {
            We.call(e4, true), Z.call(e4, e4.media, "playing");
          }), e4.embed.on("pause", () => {
            We.call(e4, false);
          }), e4.embed.on("timeupdate", (t4) => {
            e4.media.seeking = false, m2 = t4.seconds, Z.call(e4, e4.media, "timeupdate");
          }), e4.embed.on("progress", (t4) => {
            e4.media.buffered = t4.percent, Z.call(e4, e4.media, "progress"), 1 === parseInt(t4.percent, 10) && Z.call(e4, e4.media, "canplaythrough"), e4.embed.getDuration().then((t5) => {
              t5 !== e4.media.duration && (e4.media.duration = t5, Z.call(e4, e4.media, "durationchange"));
            });
          }), e4.embed.on("seeked", () => {
            e4.media.seeking = false, Z.call(e4, e4.media, "seeked");
          }), e4.embed.on("ended", () => {
            e4.media.paused = true, Z.call(e4, e4.media, "ended");
          }), e4.embed.on("error", (t4) => {
            e4.media.error = t4, Z.call(e4, e4.media, "error");
          }), t3.customControls && setTimeout(() => Fe.build.call(e4), 0);
        } };
        function Ke(e4) {
          e4 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e4 && (this.media.paused = !e4, Z.call(this, this.media, e4 ? "play" : "pause"));
        }
        function Ye(e4) {
          return e4.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
        }
        const Qe = { setup() {
          if (R(this.elements.wrapper, this.config.classNames.embed, true), S.object(window.YT) && S.function(window.YT.Player))
            Qe.ready.call(this);
          else {
            const e4 = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
              S.function(e4) && e4(), Qe.ready.call(this);
            }, Be(this.config.urls.youtube.sdk).catch((e5) => {
              this.debug.warn("YouTube API failed to load", e5);
            });
          }
        }, getTitle(e4) {
          Te(me(this.config.urls.youtube.api, e4)).then((e5) => {
            if (S.object(e5)) {
              const { title: t3, height: i3, width: s3 } = e5;
              this.config.title = t3, Fe.setTitle.call(this), this.embed.ratio = he(s3, i3);
            }
            ue.call(this);
          }).catch(() => {
            ue.call(this);
          });
        }, ready() {
          const e4 = this, t3 = e4.config.youtube, i3 = e4.media && e4.media.getAttribute("id");
          if (!S.empty(i3) && i3.startsWith("youtube-"))
            return;
          let s3 = e4.media.getAttribute("src");
          S.empty(s3) && (s3 = e4.media.getAttribute(this.config.attributes.embed.id));
          const n3 = (a3 = s3, S.empty(a3) ? null : a3.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a3);
          var a3;
          const l3 = $2("div", { id: `${e4.provider}-${Math.floor(1e4 * Math.random())}`, "data-poster": t3.customControls ? e4.poster : void 0 });
          if (e4.media = q(l3, e4.media), t3.customControls) {
            const t4 = (e5) => `https://i.ytimg.com/vi/${n3}/${e5}default.jpg`;
            Re(t4("maxres"), 121).catch(() => Re(t4("sd"), 121)).catch(() => Re(t4("hq"))).then((t5) => Fe.setPoster.call(e4, t5.src)).then((t5) => {
              t5.includes("maxres") || (e4.elements.poster.style.backgroundSize = "cover");
            }).catch(() => {
            });
          }
          e4.embed = new window.YT.Player(e4.media, { videoId: n3, host: Ye(t3), playerVars: x({}, { autoplay: e4.config.autoplay ? 1 : 0, hl: e4.config.hl, controls: e4.supported.ui && t3.customControls ? 0 : 1, disablekb: 1, playsinline: e4.config.playsinline && !e4.config.fullscreen.iosNative ? 1 : 0, cc_load_policy: e4.captions.active ? 1 : 0, cc_lang_pref: e4.config.captions.language, widget_referrer: window ? window.location.href : null }, t3), events: { onError(t4) {
            if (!e4.media.error) {
              const i4 = t4.data, s4 = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[i4] || "An unknown error occurred";
              e4.media.error = { code: i4, message: s4 }, Z.call(e4, e4.media, "error");
            }
          }, onPlaybackRateChange(t4) {
            const i4 = t4.target;
            e4.media.playbackRate = i4.getPlaybackRate(), Z.call(e4, e4.media, "ratechange");
          }, onReady(i4) {
            if (S.function(e4.media.play))
              return;
            const s4 = i4.target;
            Qe.getTitle.call(e4, n3), e4.media.play = () => {
              Ke.call(e4, true), s4.playVideo();
            }, e4.media.pause = () => {
              Ke.call(e4, false), s4.pauseVideo();
            }, e4.media.stop = () => {
              s4.stopVideo();
            }, e4.media.duration = s4.getDuration(), e4.media.paused = true, e4.media.currentTime = 0, Object.defineProperty(e4.media, "currentTime", { get: () => Number(s4.getCurrentTime()), set(t4) {
              e4.paused && !e4.embed.hasPlayed && e4.embed.mute(), e4.media.seeking = true, Z.call(e4, e4.media, "seeking"), s4.seekTo(t4);
            } }), Object.defineProperty(e4.media, "playbackRate", { get: () => s4.getPlaybackRate(), set(e5) {
              s4.setPlaybackRate(e5);
            } });
            let { volume: a4 } = e4.config;
            Object.defineProperty(e4.media, "volume", { get: () => a4, set(t4) {
              a4 = t4, s4.setVolume(100 * a4), Z.call(e4, e4.media, "volumechange");
            } });
            let { muted: l4 } = e4.config;
            Object.defineProperty(e4.media, "muted", { get: () => l4, set(t4) {
              const i5 = S.boolean(t4) ? t4 : l4;
              l4 = i5, s4[i5 ? "mute" : "unMute"](), s4.setVolume(100 * a4), Z.call(e4, e4.media, "volumechange");
            } }), Object.defineProperty(e4.media, "currentSrc", { get: () => s4.getVideoUrl() }), Object.defineProperty(e4.media, "ended", { get: () => e4.currentTime === e4.duration });
            const r3 = s4.getAvailablePlaybackRates();
            e4.options.speed = r3.filter((t4) => e4.config.speed.options.includes(t4)), e4.supported.ui && t3.customControls && e4.media.setAttribute("tabindex", -1), Z.call(e4, e4.media, "timeupdate"), Z.call(e4, e4.media, "durationchange"), clearInterval(e4.timers.buffering), e4.timers.buffering = setInterval(() => {
              e4.media.buffered = s4.getVideoLoadedFraction(), (null === e4.media.lastBuffered || e4.media.lastBuffered < e4.media.buffered) && Z.call(e4, e4.media, "progress"), e4.media.lastBuffered = e4.media.buffered, 1 === e4.media.buffered && (clearInterval(e4.timers.buffering), Z.call(e4, e4.media, "canplaythrough"));
            }, 200), t3.customControls && setTimeout(() => Fe.build.call(e4), 50);
          }, onStateChange(i4) {
            const s4 = i4.target;
            clearInterval(e4.timers.playing);
            switch (e4.media.seeking && [1, 2].includes(i4.data) && (e4.media.seeking = false, Z.call(e4, e4.media, "seeked")), i4.data) {
              case -1:
                Z.call(e4, e4.media, "timeupdate"), e4.media.buffered = s4.getVideoLoadedFraction(), Z.call(e4, e4.media, "progress");
                break;
              case 0:
                Ke.call(e4, false), e4.media.loop ? (s4.stopVideo(), s4.playVideo()) : Z.call(e4, e4.media, "ended");
                break;
              case 1:
                t3.customControls && !e4.config.autoplay && e4.media.paused && !e4.embed.hasPlayed ? e4.media.pause() : (Ke.call(e4, true), Z.call(e4, e4.media, "playing"), e4.timers.playing = setInterval(() => {
                  Z.call(e4, e4.media, "timeupdate");
                }, 50), e4.media.duration !== s4.getDuration() && (e4.media.duration = s4.getDuration(), Z.call(e4, e4.media, "durationchange")));
                break;
              case 2:
                e4.muted || e4.embed.unMute(), Ke.call(e4, false);
                break;
              case 3:
                Z.call(e4, e4.media, "waiting");
            }
            Z.call(e4, e4.elements.container, "statechange", false, { code: i4.data });
          } } });
        } }, Xe = { setup() {
          this.media ? (R(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true), R(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true), this.isEmbed && R(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true), this.isVideo && (this.elements.wrapper = $2("div", { class: this.config.classNames.video }), L(this.media, this.elements.wrapper), this.elements.poster = $2("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? de.setup.call(this) : this.isYouTube ? Qe.setup.call(this) : this.isVimeo && ze.setup.call(this)) : this.debug.warn("No media element found!");
        } };
        class Je {
          constructor(t3) {
            e3(this, "load", () => {
              this.enabled && (S.object(window.google) && S.object(window.google.ima) ? this.ready() : Be(this.player.config.urls.googleIMA.sdk).then(() => {
                this.ready();
              }).catch(() => {
                this.trigger("error", new Error("Google IMA SDK failed to load"));
              }));
            }), e3(this, "ready", () => {
              var e4;
              this.enabled || ((e4 = this).manager && e4.manager.destroy(), e4.elements.displayContainer && e4.elements.displayContainer.destroy(), e4.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              }), this.listeners(), this.setupIMA();
            }), e3(this, "setupIMA", () => {
              this.elements.container = $2("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e4) => this.onAdsManagerLoaded(e4), false), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e4) => this.onAdError(e4), false), this.requestAds();
            }), e3(this, "requestAds", () => {
              const { container: e4 } = this.player.elements;
              try {
                const t4 = new google.ima.AdsRequest();
                t4.adTagUrl = this.tagUrl, t4.linearAdSlotWidth = e4.offsetWidth, t4.linearAdSlotHeight = e4.offsetHeight, t4.nonLinearAdSlotWidth = e4.offsetWidth, t4.nonLinearAdSlotHeight = e4.offsetHeight, t4.forceNonLinearFullSlot = false, t4.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t4);
              } catch (e5) {
                this.onAdError(e5);
              }
            }), e3(this, "pollCountdown", (e4 = false) => {
              if (!e4)
                return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
              this.countdownTimer = setInterval(() => {
                const e5 = Ee(Math.max(this.manager.getRemainingTime(), 0)), t4 = `${ve.get("advertisement", this.player.config)} - ${e5}`;
                this.elements.container.setAttribute("data-badge-text", t4);
              }, 100);
            }), e3(this, "onAdsManagerLoaded", (e4) => {
              if (!this.enabled)
                return;
              const t4 = new google.ima.AdsRenderingSettings();
              t4.restoreCustomPlaybackStateOnAdBreakComplete = true, t4.enablePreloading = true, this.manager = e4.getAdsManager(this.player, t4), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e5) => this.onAdError(e5)), Object.keys(google.ima.AdEvent.Type).forEach((e5) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[e5], (e6) => this.onAdEvent(e6));
              }), this.trigger("loaded");
            }), e3(this, "addCuePoints", () => {
              S.empty(this.cuePoints) || this.cuePoints.forEach((e4) => {
                if (0 !== e4 && -1 !== e4 && e4 < this.player.duration) {
                  const t4 = this.player.elements.progress;
                  if (S.element(t4)) {
                    const i3 = 100 / this.player.duration * e4, s3 = $2("span", { class: this.player.config.classNames.cues });
                    s3.style.left = `${i3.toString()}%`, t4.appendChild(s3);
                  }
                }
              });
            }), e3(this, "onAdEvent", (e4) => {
              const { container: t4 } = this.player.elements, i3 = e4.getAd(), s3 = e4.getAdData();
              switch (((e5) => {
                Z.call(this.player, this.player.media, `ads${e5.replace(/_/g, "").toLowerCase()}`);
              })(e4.type), e4.type) {
                case google.ima.AdEvent.Type.LOADED:
                  this.trigger("loaded"), this.pollCountdown(true), i3.isLinear() || (i3.width = t4.offsetWidth, i3.height = t4.offsetHeight);
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
                  s3.adError && this.player.debug.warn(`Non-fatal ad error: ${s3.adError.getMessage()}`);
              }
            }), e3(this, "onAdError", (e4) => {
              this.cancel(), this.player.debug.warn("Ads error", e4);
            }), e3(this, "listeners", () => {
              const { container: e4 } = this.player.elements;
              let t4;
              this.player.on("canplay", () => {
                this.addCuePoints();
              }), this.player.on("ended", () => {
                this.loader.contentComplete();
              }), this.player.on("timeupdate", () => {
                t4 = this.player.currentTime;
              }), this.player.on("seeked", () => {
                const e5 = this.player.currentTime;
                S.empty(this.cuePoints) || this.cuePoints.forEach((i3, s3) => {
                  t4 < i3 && i3 < e5 && (this.manager.discardAdBreak(), this.cuePoints.splice(s3, 1));
                });
              }), window.addEventListener("resize", () => {
                this.manager && this.manager.resize(e4.offsetWidth, e4.offsetHeight, google.ima.ViewMode.NORMAL);
              });
            }), e3(this, "play", () => {
              const { container: e4 } = this.player.elements;
              this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
                this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                try {
                  this.initialized || (this.manager.init(e4.offsetWidth, e4.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = true;
                } catch (e5) {
                  this.onAdError(e5);
                }
              }).catch(() => {
              });
            }), e3(this, "resumeContent", () => {
              this.elements.container.style.zIndex = "", this.playing = false, ie(this.player.media.play());
            }), e3(this, "pauseContent", () => {
              this.elements.container.style.zIndex = 3, this.playing = true, this.player.media.pause();
            }), e3(this, "cancel", () => {
              this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
            }), e3(this, "loadAds", () => {
              this.managerPromise.then(() => {
                this.manager && this.manager.destroy(), this.managerPromise = new Promise((e4) => {
                  this.on("loaded", e4), this.player.debug.log(this.manager);
                }), this.initialized = false, this.requestAds();
              }).catch(() => {
              });
            }), e3(this, "trigger", (e4, ...t4) => {
              const i3 = this.events[e4];
              S.array(i3) && i3.forEach((e5) => {
                S.function(e5) && e5.apply(this, t4);
              });
            }), e3(this, "on", (e4, t4) => (S.array(this.events[e4]) || (this.events[e4] = []), this.events[e4].push(t4), this)), e3(this, "startSafetyTimer", (e4, t4) => {
              this.player.debug.log(`Safety timer invoked from: ${t4}`), this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
              }, e4);
            }), e3(this, "clearSafetyTimer", (e4) => {
              S.nullOrUndefined(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e4}`), clearTimeout(this.safetyTimer), this.safetyTimer = null);
            }), this.player = t3, this.config = t3.config.ads, this.playing = false, this.initialized = false, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e4, t4) => {
              this.on("loaded", e4), this.on("error", t4);
            }), this.load();
          }
          get enabled() {
            const { config: e4 } = this;
            return this.player.isHTML5 && this.player.isVideo && e4.enabled && (!S.empty(e4.publisherId) || S.url(e4.tagUrl));
          }
          get tagUrl() {
            const { config: e4 } = this;
            if (S.url(e4.tagUrl))
              return e4.tagUrl;
            return `https://go.aniview.com/api/adserver6/vast/?${Ne({ AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: e4.publisherId })}`;
          }
        }
        function Ge(e4 = 0, t3 = 0, i3 = 255) {
          return Math.min(Math.max(e4, t3), i3);
        }
        const Ze = (e4) => {
          const t3 = [];
          return e4.split(/\r\n\r\n|\n\n|\r\r/).forEach((e5) => {
            const i3 = {};
            e5.split(/\r\n|\n|\r/).forEach((e6) => {
              if (S.number(i3.startTime)) {
                if (!S.empty(e6.trim()) && S.empty(i3.text)) {
                  const t4 = e6.trim().split("#xywh=");
                  [i3.text] = t4, t4[1] && ([i3.x, i3.y, i3.w, i3.h] = t4[1].split(","));
                }
              } else {
                const t4 = e6.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                t4 && (i3.startTime = 60 * Number(t4[1] || 0) * 60 + 60 * Number(t4[2]) + Number(t4[3]) + Number(`0.${t4[4]}`), i3.endTime = 60 * Number(t4[6] || 0) * 60 + 60 * Number(t4[7]) + Number(t4[8]) + Number(`0.${t4[9]}`));
              }
            }), i3.text && t3.push(i3);
          }), t3;
        }, et = (e4, t3) => {
          const i3 = {};
          return e4 > t3.width / t3.height ? (i3.width = t3.width, i3.height = 1 / e4 * t3.width) : (i3.height = t3.height, i3.width = e4 * t3.height), i3;
        };
        class tt {
          constructor(t3) {
            e3(this, "load", () => {
              this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
                this.enabled && (this.render(), this.determineContainerAutoSizing(), this.listeners(), this.loaded = true);
              });
            }), e3(this, "getThumbnails", () => new Promise((e4) => {
              const { src: t4 } = this.player.config.previewThumbnails;
              if (S.empty(t4))
                throw new Error("Missing previewThumbnails.src config attribute");
              const i3 = () => {
                this.thumbnails.sort((e5, t5) => e5.height - t5.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e4();
              };
              if (S.function(t4))
                t4((e5) => {
                  this.thumbnails = e5, i3();
                });
              else {
                const e5 = (S.string(t4) ? [t4] : t4).map((e6) => this.getThumbnail(e6));
                Promise.all(e5).then(i3);
              }
            })), e3(this, "getThumbnail", (e4) => new Promise((t4) => {
              Te(e4).then((i3) => {
                const s3 = { frames: Ze(i3), height: null, urlPrefix: "" };
                s3.frames[0].text.startsWith("/") || s3.frames[0].text.startsWith("http://") || s3.frames[0].text.startsWith("https://") || (s3.urlPrefix = e4.substring(0, e4.lastIndexOf("/") + 1));
                const n3 = new Image();
                n3.onload = () => {
                  s3.height = n3.naturalHeight, s3.width = n3.naturalWidth, this.thumbnails.push(s3), t4();
                }, n3.src = s3.urlPrefix + s3.frames[0].text;
              });
            })), e3(this, "startMove", (e4) => {
              if (this.loaded && S.event(e4) && ["touchmove", "mousemove"].includes(e4.type) && this.player.media.duration) {
                if ("touchmove" === e4.type)
                  this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                else {
                  var t4, i3;
                  const s3 = this.player.elements.progress.getBoundingClientRect(), n3 = 100 / s3.width * (e4.pageX - s3.left);
                  this.seekTime = this.player.media.duration * (n3 / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e4.pageX, this.elements.thumb.time.innerText = Ee(this.seekTime);
                  const a3 = null === (t4 = this.player.config.markers) || void 0 === t4 || null === (i3 = t4.points) || void 0 === i3 ? void 0 : i3.find(({ time: e5 }) => e5 === Math.round(this.seekTime));
                  a3 && this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${a3.label}<br>`);
                }
                this.showImageAtCurrentTime();
              }
            }), e3(this, "endMove", () => {
              this.toggleThumbContainer(false, true);
            }), e3(this, "startScrubbing", (e4) => {
              (S.nullOrUndefined(e4.button) || false === e4.button || 0 === e4.button) && (this.mouseDown = true, this.player.media.duration && (this.toggleScrubbingContainer(true), this.toggleThumbContainer(false, true), this.showImageAtCurrentTime()));
            }), e3(this, "endScrubbing", () => {
              this.mouseDown = false, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(false) : G.call(this.player, this.player.media, "timeupdate", () => {
                this.mouseDown || this.toggleScrubbingContainer(false);
              });
            }), e3(this, "listeners", () => {
              this.player.on("play", () => {
                this.toggleThumbContainer(false, true);
              }), this.player.on("seeked", () => {
                this.toggleThumbContainer(false);
              }), this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
            }), e3(this, "render", () => {
              this.elements.thumb.container = $2("div", { class: this.player.config.classNames.previewThumbnails.thumbContainer }), this.elements.thumb.imageContainer = $2("div", { class: this.player.config.classNames.previewThumbnails.imageContainer }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
              const e4 = $2("div", { class: this.player.config.classNames.previewThumbnails.timeContainer });
              this.elements.thumb.time = $2("span", {}, "00:00"), e4.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(e4), S.element(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = $2("div", { class: this.player.config.classNames.previewThumbnails.scrubbingContainer }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
            }), e3(this, "destroy", () => {
              this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
            }), e3(this, "showImageAtCurrentTime", () => {
              this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
              const e4 = this.thumbnails[0].frames.findIndex((e5) => this.seekTime >= e5.startTime && this.seekTime <= e5.endTime), t4 = e4 >= 0;
              let i3 = 0;
              this.mouseDown || this.toggleThumbContainer(t4), t4 && (this.thumbnails.forEach((t5, s3) => {
                this.loadedImages.includes(t5.frames[e4].text) && (i3 = s3);
              }), e4 !== this.showingThumb && (this.showingThumb = e4, this.loadImage(i3)));
            }), e3(this, "loadImage", (e4 = 0) => {
              const t4 = this.showingThumb, i3 = this.thumbnails[e4], { urlPrefix: s3 } = i3, n3 = i3.frames[t4], a3 = i3.frames[t4].text, l3 = s3 + a3;
              if (this.currentImageElement && this.currentImageElement.dataset.filename === a3)
                this.showImage(this.currentImageElement, n3, e4, t4, a3, false), this.currentImageElement.dataset.index = t4, this.removeOldImages(this.currentImageElement);
              else {
                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                const i4 = new Image();
                i4.src = l3, i4.dataset.index = t4, i4.dataset.filename = a3, this.showingThumbFilename = a3, this.player.debug.log(`Loading image: ${l3}`), i4.onload = () => this.showImage(i4, n3, e4, t4, a3, true), this.loadingImage = i4, this.removeOldImages(i4);
              }
            }), e3(this, "showImage", (e4, t4, i3, s3, n3, a3 = true) => {
              this.player.debug.log(`Showing thumb: ${n3}. num: ${s3}. qual: ${i3}. newimg: ${a3}`), this.setImageSizeAndOffset(e4, t4), a3 && (this.currentImageContainer.appendChild(e4), this.currentImageElement = e4, this.loadedImages.includes(n3) || this.loadedImages.push(n3)), this.preloadNearby(s3, true).then(this.preloadNearby(s3, false)).then(this.getHigherQuality(i3, e4, t4, n3));
            }), e3(this, "removeOldImages", (e4) => {
              Array.from(this.currentImageContainer.children).forEach((t4) => {
                if ("img" !== t4.tagName.toLowerCase())
                  return;
                const i3 = this.usingSprites ? 500 : 1e3;
                if (t4.dataset.index !== e4.dataset.index && !t4.dataset.deleting) {
                  t4.dataset.deleting = true;
                  const { currentImageContainer: e5 } = this;
                  setTimeout(() => {
                    e5.removeChild(t4), this.player.debug.log(`Removing thumb: ${t4.dataset.filename}`);
                  }, i3);
                }
              });
            }), e3(this, "preloadNearby", (e4, t4 = true) => new Promise((i3) => {
              setTimeout(() => {
                const s3 = this.thumbnails[0].frames[e4].text;
                if (this.showingThumbFilename === s3) {
                  let n3;
                  n3 = t4 ? this.thumbnails[0].frames.slice(e4) : this.thumbnails[0].frames.slice(0, e4).reverse();
                  let a3 = false;
                  n3.forEach((e5) => {
                    const t5 = e5.text;
                    if (t5 !== s3 && !this.loadedImages.includes(t5)) {
                      a3 = true, this.player.debug.log(`Preloading thumb filename: ${t5}`);
                      const { urlPrefix: e6 } = this.thumbnails[0], s4 = e6 + t5, n4 = new Image();
                      n4.src = s4, n4.onload = () => {
                        this.player.debug.log(`Preloaded thumb filename: ${t5}`), this.loadedImages.includes(t5) || this.loadedImages.push(t5), i3();
                      };
                    }
                  }), a3 || i3();
                }
              }, 300);
            })), e3(this, "getHigherQuality", (e4, t4, i3, s3) => {
              if (e4 < this.thumbnails.length - 1) {
                let n3 = t4.naturalHeight;
                this.usingSprites && (n3 = i3.h), n3 < this.thumbContainerHeight && setTimeout(() => {
                  this.showingThumbFilename === s3 && (this.player.debug.log(`Showing higher quality thumb for: ${s3}`), this.loadImage(e4 + 1));
                }, 300);
              }
            }), e3(this, "toggleThumbContainer", (e4 = false, t4 = false) => {
              const i3 = this.player.config.classNames.previewThumbnails.thumbContainerShown;
              this.elements.thumb.container.classList.toggle(i3, e4), !e4 && t4 && (this.showingThumb = null, this.showingThumbFilename = null);
            }), e3(this, "toggleScrubbingContainer", (e4 = false) => {
              const t4 = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
              this.elements.scrubbing.container.classList.toggle(t4, e4), e4 || (this.showingThumb = null, this.showingThumbFilename = null);
            }), e3(this, "determineContainerAutoSizing", () => {
              (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = true);
            }), e3(this, "setThumbContainerSizeAndPos", () => {
              const { imageContainer: e4 } = this.elements.thumb;
              if (this.sizeSpecifiedInCSS) {
                if (e4.clientHeight > 20 && e4.clientWidth < 20) {
                  const t4 = Math.floor(e4.clientHeight * this.thumbAspectRatio);
                  e4.style.width = `${t4}px`;
                } else if (e4.clientHeight < 20 && e4.clientWidth > 20) {
                  const t4 = Math.floor(e4.clientWidth / this.thumbAspectRatio);
                  e4.style.height = `${t4}px`;
                }
              } else {
                const t4 = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                e4.style.height = `${this.thumbContainerHeight}px`, e4.style.width = `${t4}px`;
              }
              this.setThumbContainerPos();
            }), e3(this, "setThumbContainerPos", () => {
              const e4 = this.player.elements.progress.getBoundingClientRect(), t4 = this.player.elements.container.getBoundingClientRect(), { container: i3 } = this.elements.thumb, s3 = t4.left - e4.left + 10, n3 = t4.right - e4.left - i3.clientWidth - 10, a3 = this.mousePosX - e4.left - i3.clientWidth / 2, l3 = Ge(a3, s3, n3);
              i3.style.left = `${l3}px`, i3.style.setProperty("--preview-arrow-offset", a3 - l3 + "px");
            }), e3(this, "setScrubbingContainerSize", () => {
              const { width: e4, height: t4 } = et(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              this.elements.scrubbing.container.style.width = `${e4}px`, this.elements.scrubbing.container.style.height = `${t4}px`;
            }), e3(this, "setImageSizeAndOffset", (e4, t4) => {
              if (!this.usingSprites)
                return;
              const i3 = this.thumbContainerHeight / t4.h;
              e4.style.height = e4.naturalHeight * i3 + "px", e4.style.width = e4.naturalWidth * i3 + "px", e4.style.left = `-${t4.x * i3}px`, e4.style.top = `-${t4.y * i3}px`;
            }), this.player = t3, this.thumbnails = [], this.loaded = false, this.lastMouseMoveTime = Date.now(), this.mouseDown = false, this.loadedImages = [], this.elements = { thumb: {}, scrubbing: {} }, this.load();
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
              const { height: e4 } = et(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              return e4;
            }
            return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
          }
          get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
          }
          set currentImageElement(e4) {
            this.mouseDown ? this.currentScrubbingImageElement = e4 : this.currentThumbnailImageElement = e4;
          }
        }
        const it = { insertElements(e4, t3) {
          S.string(t3) ? _(e4, this.media, { src: t3 }) : S.array(t3) && t3.forEach((t4) => {
            _(e4, this.media, t4);
          });
        }, change(e4) {
          N(e4, "sources.length") ? (de.cancelRequests.call(this), this.destroy.call(this, () => {
            this.options.quality = [], O(this.media), this.media = null, S.element(this.elements.container) && this.elements.container.removeAttribute("class");
            const { sources: t3, type: i3 } = e4, [{ provider: s3 = _e.html5, src: n3 }] = t3, a3 = "html5" === s3 ? i3 : "div", l3 = "html5" === s3 ? {} : { src: n3 };
            Object.assign(this, { provider: s3, type: i3, supported: K.check(i3, s3, this.config.playsinline), media: $2(a3, l3) }), this.elements.container.appendChild(this.media), S.boolean(e4.autoplay) && (this.config.autoplay = e4.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), S.empty(e4.poster) || (this.poster = e4.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), Fe.addStyleHook.call(this), this.isHTML5 && it.insertElements.call(this, "source", t3), this.config.title = e4.title, Xe.setup.call(this), this.isHTML5 && Object.keys(e4).includes("tracks") && it.insertElements.call(this, "track", e4.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.isHTML5 && this.media.load(), S.empty(e4.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e4.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))), this.fullscreen.update();
          }, true)) : this.debug.warn("Invalid source format");
        } };
        class st {
          constructor(t3, i3) {
            if (e3(this, "play", () => S.function(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => ie(this.media.play())), this.media.play()) : null), e3(this, "pause", () => this.playing && S.function(this.media.pause) ? this.media.pause() : null), e3(this, "togglePlay", (e4) => (S.boolean(e4) ? e4 : !this.playing) ? this.play() : this.pause()), e3(this, "stop", () => {
              this.isHTML5 ? (this.pause(), this.restart()) : S.function(this.media.stop) && this.media.stop();
            }), e3(this, "restart", () => {
              this.currentTime = 0;
            }), e3(this, "rewind", (e4) => {
              this.currentTime -= S.number(e4) ? e4 : this.config.seekTime;
            }), e3(this, "forward", (e4) => {
              this.currentTime += S.number(e4) ? e4 : this.config.seekTime;
            }), e3(this, "increaseVolume", (e4) => {
              const t4 = this.media.muted ? 0 : this.volume;
              this.volume = t4 + (S.number(e4) ? e4 : 0);
            }), e3(this, "decreaseVolume", (e4) => {
              this.increaseVolume(-e4);
            }), e3(this, "airplay", () => {
              K.airplay && this.media.webkitShowPlaybackTargetPicker();
            }), e3(this, "toggleControls", (e4) => {
              if (this.supported.ui && !this.isAudio) {
                const t4 = F(this.elements.container, this.config.classNames.hideControls), i4 = void 0 === e4 ? void 0 : !e4, s4 = R(this.elements.container, this.config.classNames.hideControls, i4);
                if (s4 && S.array(this.config.controls) && this.config.controls.includes("settings") && !S.empty(this.config.settings) && Pe.toggleMenu.call(this, false), s4 !== t4) {
                  const e5 = s4 ? "controlshidden" : "controlsshown";
                  Z.call(this, this.media, e5);
                }
                return !s4;
              }
              return false;
            }), e3(this, "on", (e4, t4) => {
              X.call(this, this.elements.container, e4, t4);
            }), e3(this, "once", (e4, t4) => {
              G.call(this, this.elements.container, e4, t4);
            }), e3(this, "off", (e4, t4) => {
              J(this.elements.container, e4, t4);
            }), e3(this, "destroy", (e4, t4 = false) => {
              if (!this.ready)
                return;
              const i4 = () => {
                document.body.style.overflow = "", this.embed = null, t4 ? (Object.keys(this.elements).length && (O(this.elements.buttons.play), O(this.elements.captions), O(this.elements.controls), O(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), S.function(e4) && e4()) : (ee.call(this), de.cancelRequests.call(this), q(this.elements.original, this.elements.container), Z.call(this, this.elements.original, "destroyed", true), S.function(e4) && e4.call(this.elements.original), this.ready = false, setTimeout(() => {
                  this.elements = null, this.media = null;
                }, 200));
              };
              this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (Fe.toggleNativeControls.call(this, true), i4()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && S.function(this.embed.destroy) && this.embed.destroy(), i4()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i4), setTimeout(i4, 200));
            }), e3(this, "supports", (e4) => K.mime.call(this, e4)), this.timers = {}, this.ready = false, this.loading = false, this.failed = false, this.touch = K.touch, this.media = t3, S.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || S.nodeList(this.media) || S.array(this.media)) && (this.media = this.media[0]), this.config = x({}, Le, st.defaults, i3 || {}, (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (e4) {
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
            const s3 = this.media.cloneNode(true);
            s3.autoplay = false, this.elements.original = s3;
            const n3 = this.media.tagName.toLowerCase();
            let a3 = null, l3 = null;
            switch (n3) {
              case "div":
                if (a3 = this.media.querySelector("iframe"), S.element(a3)) {
                  if (l3 = Me(a3.getAttribute("src")), this.provider = function(e4) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e4) ? _e.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e4) ? _e.vimeo : null;
                  }(l3.toString()), this.elements.container = this.media, this.media = a3, this.elements.container.className = "", l3.search.length) {
                    const e4 = ["1", "true"];
                    e4.includes(l3.searchParams.get("autoplay")) && (this.config.autoplay = true), e4.includes(l3.searchParams.get("loop")) && (this.config.loop.active = true), this.isYouTube ? (this.config.playsinline = e4.includes(l3.searchParams.get("playsinline")), this.config.youtube.hl = l3.searchParams.get("hl")) : this.config.playsinline = true;
                  }
                } else
                  this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                if (S.empty(this.provider) || !Object.values(_e).includes(this.provider))
                  return void this.debug.error("Setup failed: Invalid provider");
                this.type = je;
                break;
              case "video":
              case "audio":
                this.type = n3, this.provider = _e.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = true), this.media.hasAttribute("autoplay") && (this.config.autoplay = true), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = true), this.media.hasAttribute("muted") && (this.config.muted = true), this.media.hasAttribute("loop") && (this.config.loop.active = true);
                break;
              default:
                return void this.debug.error("Setup failed: unsupported type");
            }
            this.supported = K.check(this.type, this.provider), this.supported.api ? (this.eventListeners = [], this.listeners = new Ve(this), this.storage = new we(this), this.media.plyr = this, S.element(this.elements.container) || (this.elements.container = $2("div"), L(this.media, this.elements.container)), Fe.migrateStyles.call(this), Fe.addStyleHook.call(this), Xe.setup.call(this), this.config.debug && X.call(this, this.elements.container, this.config.events.join(" "), (e4) => {
              this.debug.log(`event: ${e4.type}`);
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
          set currentTime(e4) {
            if (!this.duration)
              return;
            const t3 = S.number(e4) && e4 > 0;
            this.media.currentTime = t3 ? Math.min(e4, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`);
          }
          get currentTime() {
            return Number(this.media.currentTime);
          }
          get buffered() {
            const { buffered: e4 } = this.media;
            return S.number(e4) ? e4 : e4 && e4.length && this.duration > 0 ? e4.end(0) / this.duration : 0;
          }
          get seeking() {
            return Boolean(this.media.seeking);
          }
          get duration() {
            const e4 = parseFloat(this.config.duration), t3 = (this.media || {}).duration, i3 = S.number(t3) && t3 !== 1 / 0 ? t3 : 0;
            return e4 || i3;
          }
          set volume(e4) {
            let t3 = e4;
            S.string(t3) && (t3 = Number(t3)), S.number(t3) || (t3 = this.storage.get("volume")), S.number(t3) || ({ volume: t3 } = this.config), t3 > 1 && (t3 = 1), t3 < 0 && (t3 = 0), this.config.volume = t3, this.media.volume = t3, !S.empty(e4) && this.muted && t3 > 0 && (this.muted = false);
          }
          get volume() {
            return Number(this.media.volume);
          }
          set muted(e4) {
            let t3 = e4;
            S.boolean(t3) || (t3 = this.storage.get("muted")), S.boolean(t3) || (t3 = this.config.muted), this.config.muted = t3, this.media.muted = t3;
          }
          get muted() {
            return Boolean(this.media.muted);
          }
          get hasAudio() {
            return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)));
          }
          set speed(e4) {
            let t3 = null;
            S.number(e4) && (t3 = e4), S.number(t3) || (t3 = this.storage.get("speed")), S.number(t3) || (t3 = this.config.speed.selected);
            const { minimumSpeed: i3, maximumSpeed: s3 } = this;
            t3 = Ge(t3, i3, s3), this.config.speed.selected = t3, setTimeout(() => {
              this.media && (this.media.playbackRate = t3);
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
          set quality(e4) {
            const t3 = this.config.quality, i3 = this.options.quality;
            if (!i3.length)
              return;
            let s3 = [!S.empty(e4) && Number(e4), this.storage.get("quality"), t3.selected, t3.default].find(S.number), n3 = true;
            if (!i3.includes(s3)) {
              const e5 = ne(i3, s3);
              this.debug.warn(`Unsupported quality option: ${s3}, using ${e5} instead`), s3 = e5, n3 = false;
            }
            t3.selected = s3, this.media.quality = s3, n3 && this.storage.set({ quality: s3 });
          }
          get quality() {
            return this.media.quality;
          }
          set loop(e4) {
            const t3 = S.boolean(e4) ? e4 : this.config.loop.active;
            this.config.loop.active = t3, this.media.loop = t3;
          }
          get loop() {
            return Boolean(this.media.loop);
          }
          set source(e4) {
            it.change.call(this, e4);
          }
          get source() {
            return this.media.currentSrc;
          }
          get download() {
            const { download: e4 } = this.config.urls;
            return S.url(e4) ? e4 : this.source;
          }
          set download(e4) {
            S.url(e4) && (this.config.urls.download = e4, Pe.setDownloadUrl.call(this));
          }
          set poster(e4) {
            this.isVideo ? Fe.setPoster.call(this, e4, false).catch(() => {
            }) : this.debug.warn("Poster can only be set for video");
          }
          get poster() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
          }
          get ratio() {
            if (!this.isVideo)
              return null;
            const e4 = oe(ce.call(this));
            return S.array(e4) ? e4.join(":") : e4;
          }
          set ratio(e4) {
            this.isVideo ? S.string(e4) && re(e4) ? (this.config.ratio = oe(e4), ue.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e4})`) : this.debug.warn("Aspect ratio can only be set for video");
          }
          set autoplay(e4) {
            this.config.autoplay = S.boolean(e4) ? e4 : this.config.autoplay;
          }
          get autoplay() {
            return Boolean(this.config.autoplay);
          }
          toggleCaptions(e4) {
            xe.toggle.call(this, e4, false);
          }
          set currentTrack(e4) {
            xe.set.call(this, e4, false), xe.setup.call(this);
          }
          get currentTrack() {
            const { toggled: e4, currentTrack: t3 } = this.captions;
            return e4 ? t3 : -1;
          }
          set language(e4) {
            xe.setLanguage.call(this, e4, false);
          }
          get language() {
            return (xe.getCurrentTrack.call(this) || {}).language;
          }
          set pip(e4) {
            if (!K.pip)
              return;
            const t3 = S.boolean(e4) ? e4 : !this.pip;
            S.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t3 ? Ie : $e), S.function(this.media.requestPictureInPicture) && (!this.pip && t3 ? this.media.requestPictureInPicture() : this.pip && !t3 && document.exitPictureInPicture());
          }
          get pip() {
            return K.pip ? S.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ie : null;
          }
          setPreviewThumbnails(e4) {
            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e4), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this));
          }
          static supported(e4, t3) {
            return K.check(e4, t3);
          }
          static loadSprite(e4, t3) {
            return ke(e4, t3);
          }
          static setup(e4, t3 = {}) {
            let i3 = null;
            return S.string(e4) ? i3 = Array.from(document.querySelectorAll(e4)) : S.nodeList(e4) ? i3 = Array.from(e4) : S.array(e4) && (i3 = e4.filter(S.element)), S.empty(i3) ? null : i3.map((e5) => new st(e5, t3));
          }
        }
        var nt;
        return st.defaults = (nt = Le, JSON.parse(JSON.stringify(nt))), st;
      });
    }
  });

  // src/home-page/index.ts
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
    var target = targets[0], harnessPlugin, i2;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i2 = _harnessPlugins.length;
      while (i2-- && !_harnessPlugins[i2].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i2];
    }
    i2 = targets.length;
    while (i2--) {
      targets[i2] && (targets[i2]._gsap || (targets[i2]._gsap = new GSCache(targets[i2], harnessPlugin))) || targets.splice(i2, 1);
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
    var l2 = toFind.length, i2 = 0;
    for (; toSearch.indexOf(toFind[i2]) < 0 && ++i2 < l2; ) {
    }
    return i2 < l2;
  };
  var _lazyRender = function _lazyRender2() {
    var l2 = _lazyTweens.length, a2 = _lazyTweens.slice(0), i2, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i2 = 0; i2 < l2; i2++) {
      tween = a2[i2];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n2 = parseFloat(value);
    return (n2 || n2 === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n2 : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p) {
    return p;
  };
  var _setDefaults = function _setDefaults2(obj, defaults3) {
    for (var p in defaults3) {
      p in obj || (obj[p] = defaults3[p]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults3) {
      for (var p in defaults3) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults3[p]);
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
    var i2 = a1.length, match = i2 === a2.length;
    while (match && i2-- && a1[i2] === a2[i2]) {
    }
    return i2 < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t2;
    if (sortBy) {
      t2 = child[sortBy];
      while (prev && prev[sortBy] > t2) {
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
    var t2;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t2 = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t2) - child._tTime > _tinyNum) {
        child.render(t2, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t2 = timeline2;
        while (t2._dp) {
          t2.rawTime() >= 0 && t2.totalTime(t2._tTime);
          t2 = t2._dp;
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
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i2, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i2 = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i2 >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i2 < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i2 < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i2 - 1) + position.substr(i2 + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i2 > 1 ? _parsePosition2(animation, position.substr(0, i2 - 1), percentAnimation) + offset : clippedDuration + offset;
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
  var clamp = function clamp2(min, max, value) {
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
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache2 = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
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
    return function(i2, target, a2) {
      var l2 = (a2 || vars).length, distances = cache2[l2], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a2[wrapAt++].getBoundingClientRect().left) && wrapAt < l2) {
          }
          wrapAt < l2 && wrapAt--;
        }
        distances = cache2[l2] = [];
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
      l2 = (distances[i2] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l2) : l2) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n2 = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n2 - n2 % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray2 = _isArray(snapTo), radius, is2D;
    if (!isArray2 && _isObject(snapTo)) {
      radius = isArray2 = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray2 ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i2 = snapTo.length, dx, dy;
      while (i2--) {
        if (is2D) {
          dx = snapTo[i2].x - x;
          dy = snapTo[i2].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i2] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i2;
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
    var prev = 0, s2 = "", i2, nums, end, isArray2;
    while (~(i2 = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i2);
      isArray2 = value.charAt(i2 + 7) === "[";
      nums = value.substr(i2 + 7, end - i2 - 7).match(isArray2 ? _delimitedValueExp : _strictNumExp);
      s2 += value.substr(prev, i2 - prev) + random(isArray2 ? nums : +nums[0], isArray2 ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s2 + value.substr(prev, value.length - prev);
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
      var isString2 = _isString(start), master = {}, p, i2, interpolators, l2, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString2) {
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
        for (i2 = 1; i2 < l2; i2++) {
          interpolators.push(interpolate2(start[i2 - 1], start[i2]));
        }
        l2--;
        func = function func2(p2) {
          p2 *= l2;
          var i3 = Math.min(il, ~~p2);
          return interpolators[i3](p2 - i3);
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
          return _renderPropTweens(p2, master) || (isString2 ? start.p : start);
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
    var a2 = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r2, g, b, h2, s2, l2, max, min, d, wasHSL;
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
          s2 = +a2[1] / 100;
          l2 = +a2[2] / 100;
          g = l2 <= 0.5 ? l2 * (s2 + 1) : l2 + s2 - l2 * s2;
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
        h2 = s2 = 0;
      } else {
        d = max - min;
        s2 = l2 > 0.5 ? d / (2 - max - min) : d / (max + min);
        h2 = max === r2 ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r2) / d + 2 : (r2 - g) / d + 4;
        h2 *= 60;
      }
      a2[0] = ~~(h2 + 0.5);
      a2[1] = ~~(s2 * 100 + 0.5);
      a2[2] = ~~(l2 * 100 + 0.5);
    }
    forceAlpha && a2.length < 4 && (a2[3] = 1);
    return a2;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c2 = [], i2 = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a2 = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a2);
      c2.push(i2 += a2.length + 1);
    });
    values.c = c2;
    return values;
  };
  var _formatColors = function _formatColors2(s2, toHSL, orderMatchData) {
    var result = "", colors = (s2 + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i2 = 0, c2, shell, d, l2;
    if (!colors) {
      return s2;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s2);
      c2 = orderMatchData.c;
      if (c2.join(result) !== d.c.join(result)) {
        shell = s2.replace(_colorExp, "1").split(_numWithUnitExp);
        l2 = shell.length - 1;
        for (; i2 < l2; i2++) {
          result += shell[i2] + (~c2.indexOf(i2) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s2.split(_colorExp);
      l2 = shell.length - 1;
      for (; i2 < l2; i2++) {
        result += shell[i2] + colors[i2];
      }
    }
    return result + shell[l2];
  };
  var _colorExp = function() {
    var s2 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s2 += "|" + p + "\\b";
    }
    return new RegExp(s2 + ")", "gi");
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
        var func = once ? function(t2, d, f, v) {
          callback(t2, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners3[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove2(callback, i2) {
        ~(i2 = _listeners3.indexOf(callback)) && _listeners3.splice(i2, 1) && _i2 >= i2 && _i2--;
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
    var obj = {}, split2 = value.substr(1, value.length - 3).split(":"), key = split2[0], i2 = 1, l2 = split2.length, index, val, parsedVal;
    for (; i2 < l2; i2++) {
      val = split2[i2];
      index = i2 !== l2 - 1 ? val.lastIndexOf(",") : val.length;
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
    var split2 = (name + "").split("("), ease = _easeMap[split2[0]];
    return ease && split2.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split2[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
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
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i2) {
    var power = i2 < 5 ? i2 + 1 : i2;
    _insertEase(name + ",Power" + (power - 1), i2 ? function(p) {
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
  (function(n2, c2) {
    var n1 = 1 / c2, n22 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
      return p < n1 ? n2 * p * p : p < n22 ? n2 * Math.pow(p - 1.5 / c2, 2) + 0.75 : p < n3 ? n2 * (p -= 2.25 / c2) * p + 0.9375 : n2 * Math.pow(p - 2.625 / c2, 2) + 0.984375;
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
    _proto2.set = function set2(targets, vars, position) {
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
      var animations = this.getChildren(1, 1, 1), i2 = animations.length;
      while (i2--) {
        if (animations[i2].vars.id === id) {
          return animations[i2];
        }
      }
    };
    _proto2.remove = function remove2(child) {
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
      var t2 = Tween.delayedCall(0, callback || _emptyFunc, params);
      t2.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t2, _parsePosition(this, position));
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
      var tweens = this.getTweensOf(targets, onlyActive), i2 = tweens.length;
      while (i2--) {
        _overwritingTween !== tweens[i2] && tweens[i2].kill(targets, props);
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
    _proto2.clear = function clear2(includeLabels) {
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
    var plugin, pt, ptLookup, i2;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i2 = plugin._props.length;
        while (i2--) {
          ptLookup[plugin._props[i2]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i2, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
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
      for (i2 = 0; i2 < targets.length; i2++) {
        target = targets[i2];
        gsData = target._gsap || _harness(targets)[i2]._gsap;
        tween._ptLookup[i2] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i2 : fullTargets.indexOf(target);
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
        tween._op && tween._op[i2] && tween.kill(target, tween._op[i2]);
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
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i2;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i2 = tween._targets.length;
      while (i2--) {
        pt = lookup[i2][property];
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
    i2 = ptCache.length;
    while (i2--) {
      rootPT = ptCache[i2];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i2, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i2 = aliases.length;
        while (i2--) {
          copy[aliases[i2]] = copy[p];
        }
      }
    }
    return copy;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a2;
    if (_isArray(obj)) {
      a2 = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i2) {
        return a2.push({
          t: i2 / (obj.length - 1) * 100,
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
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i2, target, targets) {
    return _isFunction(value) ? value.call(tween, i2, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
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
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults3 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i2, copy, l2, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults3 || {},
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
          for (i2 = 0; i2 < l2; i2++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i2];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i2, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i2, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l2 === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i2, curTarget, parsedTargets) : 0);
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
              for (i2 = 0; i2 < a2.length; i2++) {
                kf = a2[i2];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i2 ? a2[i2 - 1].t : 0)) / 100 * duration
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
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i2;
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
      i2 = parsedTargets.length;
      while (i2--) {
        if (~killingTargets.indexOf(parsedTargets[i2])) {
          curLookup = propTweenLookup[i2];
          if (vars === "all") {
            overwrittenProps[i2] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i2] = overwrittenProps[i2] || {};
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
    Tween2.set = function set2(targets, vars) {
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
    var pt = data._pt, s2 = "";
    if (!ratio && data.b) {
      s2 = data.b;
    } else if (ratio === 1 && data.e) {
      s2 = data.e;
    } else {
      while (pt) {
        s2 = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s2;
        pt = pt._next;
      }
      s2 += data.c;
    }
    data.set(data.t, data.p, s2, data);
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
      this.data.forEach(function(e3) {
        return e3 instanceof Context2 ? a2.push.apply(a2, e3.getTweens()) : e3 instanceof Tween && !(e3.parent && e3.parent.data === "nested") && a2.push(e3);
      });
      return a2;
    };
    _proto5.clear = function clear2() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        (function() {
          var tweens = _this4.getTweens(), i3 = _this4.data.length, t2;
          while (i3--) {
            t2 = _this4.data[i3];
            if (t2.data === "isFlip") {
              t2.revert();
              t2.getChildren(true, true, false).forEach(function(tween) {
                return tweens.splice(tweens.indexOf(tween), 1);
              });
            }
          }
          tweens.map(function(t3) {
            return {
              g: t3._dur || t3._delay || t3._sat && !t3._sat.vars.immediateRender ? t3.globalTime(0) : -Infinity,
              t: t3
            };
          }).sort(function(a2, b) {
            return b.g - a2.g || -Infinity;
          }).forEach(function(o2) {
            return o2.t.revert(revert);
          });
          i3 = _this4.data.length;
          while (i3--) {
            t2 = _this4.data[i3];
            if (t2 instanceof Timeline) {
              if (t2.data !== "nested") {
                t2.scrollTrigger && t2.scrollTrigger.revert();
                t2.kill();
              }
            } else {
              !(t2 instanceof Tween) && t2.revert && t2.revert(revert);
            }
          }
          _this4._r.forEach(function(f) {
            return f(revert, _this4);
          });
          _this4.isReverted = true;
        })();
      } else {
        this.data.forEach(function(e3) {
          return e3.kill && e3.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i2 = _media.length;
        while (i2--) {
          _media[i2].id === this.id && _media.splice(i2, 1);
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
        var setters = target.map(function(t2) {
          return gsap.quickSetter(t2, property, unit);
        }), l2 = setters.length;
        return function(value) {
          var i2 = l2;
          while (i2--) {
            setters[i2](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache2 = _getCache(target), p = cache2.harness && (cache2.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p2 = new Plugin();
        _quickTween._pt = 0;
        p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache2.set(target, p);
      return Plugin ? setter : function(value) {
        return setter(target, p, unit ? value + unit : value, cache2, 1);
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
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults3 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults3), tl);
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
      var a2 = _listeners[type], i2 = a2 && a2.indexOf(callback);
      i2 >= 0 && a2.splice(i2, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
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
    var targets = tween._targets, p, i2, pt;
    for (p in modifiers) {
      i2 = targets.length;
      while (i2--) {
        pt = tween._ptLookup[i2][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i2], p);
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
      var i2 = value.length;
      while (i2--) {
        this.add(target, i2, target[i2] || 0, value[i2], 0, 0, 0, 0, 0, 1);
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
    var cache2 = target._gsap;
    cache2.scaleX = cache2.scaleY = value;
    cache2.renderTransform(ratio, cache2);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache2 = target._gsap;
    cache2[property] = value;
    cache2.renderTransform(ratio, cache2);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style, cache2 = target._gsap;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a2) {
          return _this.tfm[a2] = _get(target, a2);
        }) : this.tfm[property] = cache2.x ? cache2[property] : _get(target, property);
        property === _transformOriginProp && (this.tfm.zOrigin = cache2.zOrigin);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p) {
          return _saveStyle2.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (cache2.svg) {
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
    var props = this.props, target = this.target, style = target.style, cache2 = target._gsap, i2, p;
    for (i2 = 0; i2 < props.length; i2 += 3) {
      props[i2 + 1] ? target[props[i2]] = props[i2 + 2] : props[i2 + 2] ? style[props[i2]] = props[i2 + 2] : style.removeProperty(props[i2].substr(0, 2) === "--" ? props[i2] : props[i2].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache2[p] = this.tfm[p];
      }
      if (cache2.svg) {
        cache2.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i2 = _reverting2();
      if ((!i2 || !i2.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        if (cache2.zOrigin && style[_transformOriginProp]) {
          style[_transformOriginProp] += " " + cache2.zOrigin + "px";
          cache2.zOrigin = 0;
          cache2.renderTransform();
        }
        cache2.uncache = 1;
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
    var e3 = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e3 && e3.style ? e3 : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e3 = element || _tempDiv, s2 = e3.style, i2 = 5;
    if (property in s2 && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i2-- && !(_prefixes[i2] + property in s2)) {
    }
    return i2 < 0 ? null : (i2 === 3 ? "ms" : i2 >= 0 ? _prefixes[i2] : "") + property;
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
      } catch (e3) {
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
    var i2 = attributesArray.length;
    while (i2--) {
      if (target.hasAttribute(attributesArray[i2])) {
        return target.getAttribute(attributesArray[i2]);
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
  var _isSVG = function _isSVG2(e3) {
    return !!(e3.getCTM && (!e3.parentNode || e3.ownerSVGElement) && _getBBox(e3));
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
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache2, isSVG;
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
    cache2 = parent._gsap;
    if (cache2 && toPercent && cache2.width && horizontal && cache2.time === _ticker.time && !cache2.uncache) {
      return _round(curValue / cache2.width * amount);
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
        cache2 = _getCache(parent);
        cache2.time = _ticker.time;
        cache2.width = parent[measureProperty];
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
      var p = _checkPropPrefix(prop, target, 1), s2 = p && _getComputedProperty(target, p, 1);
      if (s2 && s2 !== start) {
        prop = p;
        start = s2;
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
    var split2 = value.split(" "), x = split2[0], y = split2[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split2[0] = _keywordToPercent[x] || x;
    split2[1] = _keywordToPercent[y] || y;
    return split2.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache2 = target._gsap, prop, clearTransforms, i2;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i2 = props.length;
        while (--i2 > -1) {
          prop = props[i2];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache2) {
          cache2.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache2.uncache = 1;
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
    var cache2 = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache2.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache2.svg) {
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
    var cache2 = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache2.xOrigin || 0, yOriginOld = cache2.yOrigin || 0, xOffsetOld = cache2.xOffset || 0, yOffsetOld = cache2.yOffset || 0, a2 = matrix[0], b = matrix[1], c2 = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
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
    if (smooth || smooth !== false && cache2.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache2.xOffset = xOffsetOld + (tx * a2 + ty * c2) - tx;
      cache2.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache2.xOffset = cache2.yOffset = 0;
    }
    cache2.xOrigin = xOrigin;
    cache2.yOrigin = yOrigin;
    cache2.smooth = !!smooth;
    cache2.origin = origin;
    cache2.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache2, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache2, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache2, "xOffset", xOffsetOld, cache2.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache2, "yOffset", yOffsetOld, cache2.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache2 = target._gsap || new GSCache(target);
    if ("x" in cache2 && !uncache && !cache2.uncache) {
      return cache2;
    }
    var style = target.style, invertedScaleX = cache2.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a2, b, c2, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache2.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache2.svg);
    if (cache2.svg) {
      if (cache2.uncache) {
        t2 = target.getBBox();
        origin = cache2.xOrigin - t2.x + "px " + (cache2.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache2.originIsAbsolute, cache2.smooth !== false, matrix);
    }
    xOrigin = cache2.xOrigin || 0;
    yOrigin = cache2.yOrigin || 0;
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
        if (cache2.svg) {
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
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c2, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a2 * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c2 * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a2 = t1;
          b = t2;
          c2 = t3;
        }
        angle = _atan2(b, a2);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a2 * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a2 * sin;
          a22 = a22 * cos - a12 * sin;
          a2 = t1;
          a12 = t2;
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
      if (cache2.svg) {
        t1 = target.getAttribute("transform");
        cache2.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
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
    uncache = uncache || cache2.uncache;
    cache2.x = x - ((cache2.xPercent = x && (!uncache && cache2.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache2.xPercent / 100 : 0) + px;
    cache2.y = y - ((cache2.yPercent = y && (!uncache && cache2.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache2.yPercent / 100 : 0) + px;
    cache2.z = z + px;
    cache2.scaleX = _round(scaleX);
    cache2.scaleY = _round(scaleY);
    cache2.rotation = _round(rotation) + deg;
    cache2.rotationX = _round(rotationX) + deg;
    cache2.rotationY = _round(rotationY) + deg;
    cache2.skewX = skewX + deg;
    cache2.skewY = skewY + deg;
    cache2.transformPerspective = perspective + px;
    if (cache2.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache2.zOrigin || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache2.xOffset = cache2.yOffset = 0;
    cache2.force3D = _config.force3D;
    cache2.renderTransform = cache2.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache2.uncache = 0;
    return cache2;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache2) {
    cache2.z = "0px";
    cache2.rotationY = cache2.rotationX = "0deg";
    cache2.force3D = 0;
    _renderCSSTransforms(ratio, cache2);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache2) {
    var _ref = cache2 || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
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
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache2) {
    var _ref2 = cache2 || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
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
    var cap = 360, isString2 = _isString(endValue), endNum = parseFloat(endValue) * (isString2 && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString2) {
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
    var t2 = "Top", r2 = "Right", b = "Bottom", l2 = "Left", props = (index < 3 ? [t2, r2, b, l2] : [t2 + l2, t2 + r2, b + r2, b + l2]).map(function(side) {
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
      props.forEach(function(prop, i2) {
        return vars[prop] = a2[i2] = a2[i2] || a2[(i2 - 1) / 2 | 0];
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
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache2, smooth, hasPriority, inlineProps;
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
              cache2 = target._gsap;
              cache2.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache2.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache2.renderTransform, cache2, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache2, "scaleY", cache2.scaleY, (relative ? _parseRelative(cache2.scaleY, relative + endNum) : endNum) - cache2.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache2.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache2.zOrigin && _addNonTweeningPT(this, cache2, "zOrigin", cache2.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache2, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache2, "smooth", cache2.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache2[p] = endValue;
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
            this._pt = new PropTween(this._pt, isTransformRelated ? cache2 : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
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
      var split2 = name.split(":");
      _propertyAliases[split2[1]] = all[split2[0]];
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
    var j = rawPath.length, segment, l2, i2, x, y;
    while (--j > -1) {
      segment = rawPath[j];
      l2 = segment.length;
      for (i2 = 0; i2 < l2; i2 += 2) {
        x = segment[i2];
        y = segment[i2 + 1];
        segment[i2] = x * a2 + y * c2 + tx;
        segment[i2 + 1] = x * b + y * d + ty;
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
    var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)), rawPath = [], angleIncrement = angleExtent / segments, controlLength = 4 / 3 * _sin2(angleIncrement / 2) / (1 + _cos2(angleIncrement / 2)), ma = cosAngle * rx, mb = sinAngle * rx, mc = sinAngle * -ry, md = cosAngle * ry, i2;
    for (i2 = 0; i2 < segments; i2++) {
      angle = angleStart + i2 * angleIncrement;
      x1 = _cos2(angle);
      y1 = _sin2(angle);
      ux = _cos2(angle += angleIncrement);
      uy = _sin2(angle);
      rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
    }
    for (i2 = 0; i2 < rawPath.length; i2 += 2) {
      x1 = rawPath[i2];
      y1 = rawPath[i2 + 1];
      rawPath[i2] = x1 * ma + y1 * mc + cx;
      rawPath[i2 + 1] = x1 * mb + y1 * md + cy;
    }
    rawPath[i2 - 2] = x;
    rawPath[i2 - 1] = y;
    return rawPath;
  }
  function stringToRawPath(d) {
    var a2 = (d + "").replace(_scientific, function(m) {
      var n2 = +m;
      return n2 < 1e-4 && n2 > -1e-4 ? 0 : n2;
    }).match(_svgPathExp) || [], path = [], relativeX = 0, relativeY = 0, twoThirds = 2 / 3, elements = a2.length, points = 0, errorMessage = "ERROR: malformed path: " + d, i2, j, x, y, command, isRelative, segment, startX, startY, difX, difY, beziers, prevCommand, flag1, flag2, line = function line2(sx, sy, ex, ey) {
      difX = (ex - sx) / 3;
      difY = (ey - sy) / 3;
      segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
    };
    if (!d || !isNaN(a2[0]) || isNaN(a2[1])) {
      console.log(errorMessage);
      return path;
    }
    for (i2 = 0; i2 < elements; i2++) {
      prevCommand = command;
      if (isNaN(a2[i2])) {
        command = a2[i2].toUpperCase();
        isRelative = command !== a2[i2];
      } else {
        i2--;
      }
      x = +a2[i2 + 1];
      y = +a2[i2 + 2];
      if (isRelative) {
        x += relativeX;
        y += relativeY;
      }
      if (!i2) {
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
        i2 += 2;
        command = "L";
      } else if (command === "C") {
        if (!segment) {
          segment = [0, 0];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(x, y, relativeX + a2[i2 + 3] * 1, relativeY + a2[i2 + 4] * 1, relativeX += a2[i2 + 5] * 1, relativeY += a2[i2 + 6] * 1);
        i2 += 6;
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
        segment.push(difX, difY, x, y, relativeX += a2[i2 + 3] * 1, relativeY += a2[i2 + 4] * 1);
        i2 += 4;
      } else if (command === "Q") {
        difX = relativeX + (x - relativeX) * twoThirds;
        difY = relativeY + (y - relativeY) * twoThirds;
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        relativeX += a2[i2 + 3] * 1;
        relativeY += a2[i2 + 4] * 1;
        segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
        i2 += 4;
      } else if (command === "T") {
        difX = relativeX - segment[segment.length - 4];
        difY = relativeY - segment[segment.length - 3];
        segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
        i2 += 2;
      } else if (command === "H") {
        line(relativeX, relativeY, relativeX = x, relativeY);
        i2 += 1;
      } else if (command === "V") {
        line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
        i2 += 1;
      } else if (command === "L" || command === "Z") {
        if (command === "Z") {
          x = startX;
          y = startY;
          segment.closed = true;
        }
        if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
          line(relativeX, relativeY, x, y);
          if (command === "L") {
            i2 += 2;
          }
        }
        relativeX = x;
        relativeY = y;
      } else if (command === "A") {
        flag1 = a2[i2 + 4];
        flag2 = a2[i2 + 5];
        difX = a2[i2 + 6];
        difY = a2[i2 + 7];
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
        beziers = arcToSegment(relativeX, relativeY, +a2[i2 + 1], +a2[i2 + 2], +a2[i2 + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
        i2 += j;
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
    i2 = segment.length;
    if (i2 < 6) {
      path.pop();
      i2 = 0;
    } else if (segment[0] === segment[i2 - 2] && segment[1] === segment[i2 - 1]) {
      segment.closed = true;
    }
    path.totalPoints = points + i2;
    return path;
  }
  function rawPathToString(rawPath) {
    if (_isNumber3(rawPath[0])) {
      rawPath = [rawPath];
    }
    var result = "", l2 = rawPath.length, sl, s2, i2, segment;
    for (s2 = 0; s2 < l2; s2++) {
      segment = rawPath[s2];
      result += "M" + _round3(segment[0]) + "," + _round3(segment[1]) + " C";
      sl = segment.length;
      for (i2 = 2; i2 < sl; i2++) {
        result += _round3(segment[i2++]) + "," + _round3(segment[i2++]) + " " + _round3(segment[i2++]) + "," + _round3(segment[i2++]) + " " + _round3(segment[i2++]) + "," + _round3(segment[i2]) + " ";
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
    var l2 = values.length, min = _bigNum3, i2;
    for (i2 = 1; i2 < l2; i2 += 6) {
      +values[i2] < min && (min = +values[i2]);
    }
    return min;
  };
  var _normalize = function _normalize2(values, height, originY) {
    if (!originY && originY !== 0) {
      originY = Math.max(+values[values.length - 1], +values[1]);
    }
    var tx = +values[0] * -1, ty = -originY, l2 = values.length, sx = 1 / (+values[l2 - 2] + tx), sy = -height || (Math.abs(+values[l2 - 1] - +values[1]) < 0.01 * (+values[l2 - 2] - +values[0]) ? _findMinimum(values) + ty : +values[l2 - 1] + ty), i2;
    if (sy) {
      sy = 1 / sy;
    } else {
      sy = -sx;
    }
    for (i2 = 0; i2 < l2; i2 += 2) {
      values[i2] = (+values[i2] + tx) * sx;
      values[i2 + 1] = (+values[i2 + 1] + ty) * sy;
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
      var values = data.match(_numExp2), closest = 1, points = [], lookup = [], precision = config3.precision || 1, fast = precision <= 1, l2, a1, a2, i2, inc, j, point, prevPoint, p;
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
      for (i2 = 2; i2 < l2; i2 += 6) {
        a1 = {
          x: +values[i2 - 2],
          y: +values[i2 - 1]
        };
        a2 = {
          x: +values[i2 + 4],
          y: +values[i2 + 5]
        };
        points.push(a1, a2);
        _bezierToPoints(a1.x, a1.y, +values[i2], +values[i2 + 1], +values[i2 + 2], +values[i2 + 3], a2.x, a2.y, 1 / (precision * 2e5), points, points.length - 1);
      }
      l2 = points.length;
      for (i2 = 0; i2 < l2; i2++) {
        point = points[i2];
        prevPoint = points[i2 - 1] || point;
        if ((point.x > prevPoint.x || prevPoint.y !== point.y && prevPoint.x === point.x || point === prevPoint) && point.x <= 1) {
          prevPoint.cx = point.x - prevPoint.x;
          prevPoint.cy = point.y - prevPoint.y;
          prevPoint.n = point;
          prevPoint.nx = point.x;
          if (fast && i2 > 1 && Math.abs(prevPoint.cy / prevPoint.cx - points[i2 - 2].cy / points[i2 - 2].cx) > 2) {
            fast = 0;
          }
          if (prevPoint.cx < closest) {
            if (!prevPoint.cx) {
              prevPoint.cx = 1e-3;
              if (i2 === l2 - 1) {
                prevPoint.x -= 1e-3;
                closest = Math.min(closest, 1e-3);
                fast = 0;
              }
            } else {
              closest = prevPoint.cx;
            }
          }
        } else {
          points.splice(i2--, 1);
          l2--;
        }
      }
      l2 = 1 / closest + 1 | 0;
      inc = 1 / l2;
      j = 0;
      point = points[0];
      if (fast) {
        for (i2 = 0; i2 < l2; i2++) {
          p = i2 * inc;
          if (point.nx < p) {
            point = points[++j];
          }
          a1 = point.y + (p - point.x) / point.cx * point.cy;
          lookup[i2] = {
            x: p,
            cx: inc,
            y: a1,
            cy: 0,
            nx: 9
          };
          if (i2) {
            lookup[i2 - 1].cy = a1 - lookup[i2 - 1].y;
          }
        }
        lookup[l2 - 1].cy = points[points.length - 1].y - a1;
      } else {
        for (i2 = 0; i2 < l2; i2++) {
          if (point.nx < i2 * inc) {
            point = points[++j];
          }
          lookup[i2] = point;
        }
        if (j < points.length - 1) {
          lookup[i2 - 1] = points[points.length - 2];
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
    CustomEase2.get = function get2(id) {
      return gsap2.parseEase(id);
    };
    CustomEase2.getSVGData = function getSVGData(ease, config3) {
      config3 = config3 || {};
      var width = config3.width || 100, height = config3.height || 100, x = config3.x || 0, y = (config3.y || 0) + height, e3 = gsap2.utils.toArray(config3.path)[0], a2, slope, i2, inc, tx, ty, precision, threshold, prevX, prevY;
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
        for (i2 = 2; i2 < precision; i2++) {
          tx = _round5(x + i2 * inc * width);
          ty = _round5(y + ease(i2 * inc) * -height);
          if (Math.abs((ty - prevY) / (tx - prevX) - slope) > threshold || i2 === precision - 1) {
            a2.push(prevX, prevY);
            slope = (ty - prevY) / (tx - prevX);
          }
          prevX = tx;
          prevY = ty;
        }
        a2 = "M" + a2.join(",");
      }
      e3 && e3.setAttribute("d", a2);
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
  var _forceNonZeroScale = function _forceNonZeroScale2(e3) {
    var a2, cache2;
    while (e3 && e3 !== _body) {
      cache2 = e3._gsap;
      cache2 && cache2.uncache && cache2.get(e3, "x");
      if (cache2 && !cache2.scaleX && !cache2.scaleY && cache2.renderTransform) {
        cache2.scaleX = cache2.scaleY = 1e-4;
        cache2.renderTransform(1, cache2);
        a2 ? a2.push(cache2) : a2 = [cache2];
      }
      e3 = e3.parentNode;
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
  var _createSibling = function _createSibling2(element, i2) {
    if (element.parentNode && (_doc3 || _setDoc(element))) {
      var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i2 ? "rect" : "g" : "div", x = i2 !== 2 ? 0 : 100, y = i2 === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e3 = _doc3.createElementNS ? _doc3.createElementNS(ns.replace(/^https/, "http"), type) : _doc3.createElement(type);
      if (i2) {
        if (!svg) {
          if (!_divContainer) {
            _divContainer = _createSibling2(element);
            _divContainer.style.cssText = css;
          }
          e3.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
          _divContainer.appendChild(e3);
        } else {
          _svgContainer || (_svgContainer = _createSibling2(element));
          e3.setAttribute("width", 0.01);
          e3.setAttribute("height", 0.01);
          e3.setAttribute("transform", "translate(" + x + "," + y + ")");
          _svgContainer.appendChild(e3);
        }
      }
      return e3;
    }
    throw "Need document and parent.";
  };
  var _consolidate = function _consolidate2(m) {
    var c2 = new Matrix2D(), i2 = 0;
    for (; i2 < m.numberOfItems; i2++) {
      c2.multiply(m.getItem(i2).matrix);
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
  var _setMatrix = function _setMatrix2(m, a2, b, c2, d, e3, f) {
    m.a = a2;
    m.b = b;
    m.c = c2;
    m.d = d;
    m.e = e3;
    m.f = f;
    return m;
  };
  var Matrix2D = /* @__PURE__ */ function() {
    function Matrix2D2(a2, b, c2, d, e3, f) {
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
      if (e3 === void 0) {
        e3 = 0;
      }
      if (f === void 0) {
        f = 0;
      }
      _setMatrix(this, a2, b, c2, d, e3, f);
    }
    var _proto = Matrix2D2.prototype;
    _proto.inverse = function inverse() {
      var a2 = this.a, b = this.b, c2 = this.c, d = this.d, e3 = this.e, f = this.f, determinant = a2 * d - b * c2 || 1e-10;
      return _setMatrix(this, d / determinant, -b / determinant, -c2 / determinant, a2 / determinant, (c2 * f - d * e3) / determinant, -(a2 * f - b * e3) / determinant);
    };
    _proto.multiply = function multiply(matrix) {
      var a2 = this.a, b = this.b, c2 = this.c, d = this.d, e3 = this.e, f = this.f, a22 = matrix.a, b2 = matrix.c, c22 = matrix.b, d2 = matrix.d, e22 = matrix.e, f2 = matrix.f;
      return _setMatrix(this, a22 * a2 + c22 * c2, a22 * b + c22 * d, b2 * a2 + d2 * c2, b2 * b + d2 * d, e3 + e22 * a2 + f2 * c2, f + e22 * b + f2 * d);
    };
    _proto.clone = function clone() {
      return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
    };
    _proto.equals = function equals(matrix) {
      var a2 = this.a, b = this.b, c2 = this.c, d = this.d, e3 = this.e, f = this.f;
      return a2 === matrix.a && b === matrix.b && c2 === matrix.c && d === matrix.d && e3 === matrix.e && f === matrix.f;
    };
    _proto.apply = function apply(point, decoratee) {
      if (decoratee === void 0) {
        decoratee = {};
      }
      var x = point.x, y = point.y, a2 = this.a, b = this.b, c2 = this.c, d = this.d, e3 = this.e, f = this.f;
      decoratee.x = x * a2 + y * c2 + e3 || 0;
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
    var cache2 = el._gsap || gsap3.core.getCache(el);
    if (cache2.gmCache === gsap3.ticker.frame) {
      return cache2.gMatrix;
    }
    cache2.gmCache = gsap3.ticker.frame;
    return cache2.gMatrix = getGlobalMatrix(el, true, false, true);
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
    var style = elState.element.style, a2 = elState.css = elState.css || [], i2 = props.length, p, v;
    while (i2--) {
      p = props[i2];
      v = style[p] || style.getPropertyValue(p);
      a2.push(v ? p : _dashedNameLookup[p] || (_dashedNameLookup[p] = _camelToDashed(p)), v);
    }
    return style;
  };
  var _applyInlineStyles = function _applyInlineStyles2(state) {
    var css = state.css, style = state.element.style, i2 = 0;
    state.cache.uncache = 1;
    for (; i2 < css.length; i2 += 2) {
      css[i2 + 1] ? style[css[i2]] = css[i2 + 1] : style.removeProperty(css[i2]);
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
    var element = elState.element, width = elState.width, height = elState.height, uncache = elState.uncache, getProp = elState.getProp, style = element.style, i2 = 4, result, displayIsNone, cs;
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
    while (i2--) {
      style[_absoluteProps[i2]] = cs[_absoluteProps[i2]];
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
    var getProp = gsap3.getProperty(elState.element, null, "native"), obj = elState.props = {}, i2 = props.length;
    while (i2--) {
      obj[props[i2]] = (getProp(props[i2]) + "").trim();
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
    var element = fromState.element, cache2 = fromState.cache, parent = fromState.parent, x = fromState.x, y = fromState.y, width = toState.width, height = toState.height, scaleX = toState.scaleX, scaleY = toState.scaleY, rotation = toState.rotation, bounds = toState.bounds, styles = vars && _getStyleSaver3 && _getStyleSaver3(element, "transform"), dimensionState = fromState, _toState$matrix = toState.matrix, e3 = _toState$matrix.e, f = _toState$matrix.f, deep = fromState.bounds.width !== bounds.width || fromState.bounds.height !== bounds.height || fromState.scaleX !== scaleX || fromState.scaleY !== scaleY || fromState.rotation !== rotation, simple = !deep && fromState.simple && toState.simple && !fitChild, skewX, fromPoint, toPoint, getProp, parentMatrix, matrix, bbox;
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
      cache2.rotation = rotation + "deg";
      cache2.skewX = skewX + "deg";
    }
    if (scale) {
      scaleX *= width === dimensionState.width || !dimensionState.width ? 1 : width / dimensionState.width;
      scaleY *= height === dimensionState.height || !dimensionState.height ? 1 : height / dimensionState.height;
      cache2.scaleX = scaleX;
      cache2.scaleY = scaleY;
    } else {
      width = _closestTenth(width * scaleX / dimensionState.scaleX, 0);
      height = _closestTenth(height * scaleY / dimensionState.scaleY, 0);
      element.style.width = width + "px";
      element.style.height = height + "px";
    }
    applyProps && _applyProps(element, toState.props);
    if (simple || !parent) {
      x += e3 - fromState.matrix.e;
      y += f - fromState.matrix.f;
    } else if (deep || parent !== toState.parent) {
      cache2.renderTransform(1, cache2);
      matrix = getGlobalMatrix(fitChild || element, false, false, true);
      fromPoint = parentMatrix.apply({
        x: matrix.e,
        y: matrix.f
      });
      toPoint = parentMatrix.apply({
        x: e3,
        y: f
      });
      x += toPoint.x - fromPoint.x;
      y += toPoint.y - fromPoint.y;
    } else {
      parentMatrix.e = parentMatrix.f = 0;
      toPoint = parentMatrix.apply({
        x: e3 - fromState.matrix.e,
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
      cache2.x = x + "px";
      cache2.y = y + "px";
      cache2.renderTransform(1, cache2);
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
    return vars || cache2;
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
      var s2 = _body2.style, w = _body2.clientWidth === window.outerWidth, h2 = _body2.clientHeight === window.outerHeight, i2 = 4;
      if (lock && (w || h2)) {
        while (i2--) {
          _bodyMetrics[i2] = s2[_bodyProps[i2]];
        }
        if (w) {
          s2.width = _body2.clientWidth + "px";
          s2.overflowY = "hidden";
        }
        if (h2) {
          s2.height = _body2.clientHeight + "px";
          s2.overflowX = "hidden";
        }
        _bodyLocked = lock;
      } else if (_bodyLocked) {
        while (i2--) {
          _bodyMetrics[i2] ? s2[_bodyProps[i2]] = _bodyMetrics[i2] : s2.removeProperty(_camelToDashed(_bodyProps[i2]));
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
    }, interrupted = fromState.interrupted || toState.interrupted, addFunc = animation[relative !== 1 ? "to" : "from"], v, p, endTime, i2, el, comp, state, targets, finalStates, fromNode, toNode, run, a2, b;
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
      return tweenVars[p2] = function(i3) {
        return comps[i3].a.props[p2];
      };
    });
    comps.finalStates = finalStates = [];
    run = function run2() {
      _orderByDOMDepth(comps);
      _lockBodyScroll(true);
      for (i2 = 0; i2 < comps.length; i2++) {
        comp = comps[i2];
        a2 = comp.a;
        b = comp.b;
        if (prune && !a2.isDifferent(b) && !comp.entering) {
          comps.splice(i2--, 1);
        } else {
          el = comp.t;
          nested && !(comp.sd < 0) && i2 && (a2.matrix = getGlobalMatrix(el, false, false, true));
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
              comps.splice(i2--, 1);
            } else if (!a2.isVisible) {
              b.css = a2.css;
              leaving.push(b);
              comps.splice(i2--, 1);
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
        classTargets = finalStates.map(function(s2) {
          return s2.element;
        });
        nested && classTargets.forEach(function(e3) {
          return e3.classList.remove(toggleClass);
        });
      }
      _lockBodyScroll(false);
      if (scale) {
        tweenVars.scaleX = function(i3) {
          return comps[i3].a.scaleX;
        };
        tweenVars.scaleY = function(i3) {
          return comps[i3].a.scaleY;
        };
      } else {
        tweenVars.width = function(i3) {
          return comps[i3].a.width + "px";
        };
        tweenVars.height = function(i3) {
          return comps[i3].a.height + "px";
        };
        tweenVars.autoRound = vars.autoRound || false;
      }
      tweenVars.x = function(i3) {
        return comps[i3].a.x + "px";
      };
      tweenVars.y = function(i3) {
        return comps[i3].a.y + "px";
      };
      tweenVars.rotation = function(i3) {
        return comps[i3].a.rotation + (spin ? spinFunc(i3, targets[i3], targets) * 360 : 0);
      };
      tweenVars.skewX = function(i3) {
        return comps[i3].a.skewX;
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
      fade && (tweenVars.opacity = function(i3) {
        return comps[i3].sd < 0 ? 0 : comps[i3].sd > 0 ? comps[i3].a.opacity : "+=0";
      });
      if (swapOutTargets.length) {
        stagger = gsap3.utils.distribute(stagger);
        var dummyArray = targets.slice(swapOutTargets.length);
        tweenVars.stagger = function(i3, el2) {
          return stagger(~swapOutTargets.indexOf(el2) ? targets.indexOf(comps[i3].swap.t) : i3, el2, dummyArray);
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
    var lookup = state.idLookup = {}, alt = state.alt = {}, elStates = state.elementStates, i2 = elStates.length, elState;
    while (i2--) {
      elState = elStates[i2];
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
    _proto.clear = function clear2() {
      this.targets.length = this.elementStates.length = 0;
      _createLookup(this);
      return this;
    };
    _proto.fit = function fit(state, scale, nested) {
      var elStatesInOrder = _orderByDOMDepth(this.elementStates.slice(0), false, true), toElStates = (state || this).idLookup, i2 = 0, fromNode, toNode;
      for (; i2 < elStatesInOrder.length; i2++) {
        fromNode = elStatesInOrder[i2];
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
      var i2 = state.targets.length, lookup = this.idLookup, alt = this.alt, index, es, es2;
      while (i2--) {
        es = state.elementStates[i2];
        es2 = lookup[es.id];
        if (es2 && (es.element === es2.element || alt[es.id] && alt[es.id].element === es.element)) {
          index = this.elementStates.indexOf(es.element === es2.element ? es2 : alt[es.id]);
          this.targets.splice(index, 1, state.targets[i2]);
          this.elementStates.splice(index, 1, es);
        } else {
          this.targets.push(state.targets[i2]);
          this.elementStates.push(es);
        }
      }
      state.interrupted && (this.interrupted = true);
      state.simple || (this.simple = false);
      _createLookup(this);
      return this;
    };
    _proto.compare = function compare(state) {
      var l1 = state.idLookup, l2 = this.idLookup, unchanged = [], changed = [], enter = [], leave = [], targets = [], a1 = state.alt, a2 = this.alt, place = function place2(s12, s22, el2) {
        return (s12.isVisible !== s22.isVisible ? s12.isVisible ? enter : leave : s12.isVisible ? changed : unchanged).push(el2) && targets.push(el2);
      }, placeIfDoesNotExist = function placeIfDoesNotExist2(s12, s22, el2) {
        return targets.indexOf(el2) < 0 && place(s12, s22, el2);
      }, s1, s2, p, el, s1Alt, s2Alt, c1, c2;
      for (p in l1) {
        s1Alt = a1[p];
        s2Alt = a2[p];
        s1 = !s1Alt ? l1[p] : _getChangingElState(state, this, p);
        el = s1.element;
        s2 = l2[p];
        if (s2Alt) {
          c2 = s2.isVisible || !s2Alt.isVisible && el === s2.element ? s2 : s2Alt;
          c1 = s1Alt && !s1.isVisible && !s1Alt.isVisible && c2.element === s1Alt.element ? s1Alt : s1;
          if (c1.isVisible && c2.isVisible && c1.element !== c2.element) {
            (c1.isDifferent(c2) ? changed : unchanged).push(c1.element, c2.element);
            targets.push(c1.element, c2.element);
          } else {
            place(c1, c2, c1.element);
          }
          s1Alt && c1.element === s1Alt.element && (s1Alt = l1[p]);
          placeIfDoesNotExist(c1.element !== s2.element && s1Alt ? s1Alt : c1, s2, s2.element);
          placeIfDoesNotExist(s1Alt && s1Alt.element === s2Alt.element ? s1Alt : c1, s2Alt, s2Alt.element);
          s1Alt && placeIfDoesNotExist(s1Alt, s2Alt.element === s1Alt.element ? s2Alt : s2, s1Alt.element);
        } else {
          !s2 ? enter.push(el) : !s2.isDifferent(s1) ? unchanged.push(el) : place(s1, s2, el);
          s1Alt && placeIfDoesNotExist(s1Alt, s2, s1Alt.element);
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
      var props = _memoizedRemoveProps[this.props] || _removeProps, i2 = this.elementStates.length;
      while (i2--) {
        _recordInlineStyles(this.elementStates[i2], props);
      }
    };
    _proto.interrupt = function interrupt(soft) {
      var _this2 = this;
      var timelines = [];
      this.targets.forEach(function(t2) {
        var tl = t2._flip, foundInProgress = _killFlip(tl, soft ? 0 : 1);
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
      var self2 = this, element = self2.element, getProp = gsap3.getProperty(element), cache2 = gsap3.core.getCache(element), bounds = element.getBoundingClientRect(), bbox = element.getBBox && typeof element.getBBox === "function" && element.nodeName.toLowerCase() !== "svg" && element.getBBox(), m = simple ? new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop()) : getGlobalMatrix(element, false, false, true);
      self2.getProp = getProp;
      self2.element = element;
      self2.id = _getID(element);
      self2.matrix = m;
      self2.cache = cache2;
      self2.bounds = bounds;
      self2.isVisible = !!(bounds.width || bounds.height || bounds.left || bounds.top);
      self2.display = getProp("display");
      self2.position = getProp("position");
      self2.parent = element.parentNode;
      self2.x = getProp("x");
      self2.y = getProp("y");
      self2.scaleX = cache2.scaleX;
      self2.scaleY = cache2.scaleY;
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
      var i2 = this.states.length;
      while (i2--) {
        if (this.states[i2].idLookup[id]) {
          return this.states[i2];
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
    _proto4.remove = function remove2(action) {
      var i2 = this.actions.indexOf(action);
      i2 >= 0 && this.actions.splice(i2, 1);
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
        merge && action.states.forEach(function(s2) {
          return _this3.state.add(s2);
        });
      });
      _batchAction = prevAction;
      _batch = prevBatch;
      this.killConflicts();
      return this;
    };
    _proto4.animate = function animate() {
      var _this4 = this;
      var prevBatch = _batch, tl = this.timeline, i2 = this.actions.length, finalStates, endTime;
      _batch = this;
      tl.clear();
      this._abs.length = this._final.length = this._run.length = 0;
      this.actions.forEach(function(a2) {
        a2.vars.animate && a2.vars.animate(a2);
        var onEnter = a2.vars.onEnter, onLeave = a2.vars.onLeave, targets = a2.targets, s2, result;
        if (targets && targets.length && (onEnter || onLeave)) {
          s2 = new FlipState();
          a2.states.forEach(function(state) {
            return s2.add(state);
          });
          result = s2.compare(Flip.getState(targets));
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
      while (i2--) {
        this.actions[i2].vars.once && this.actions[i2].kill();
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
          var i2, f = function f2(targets) {
            targets && (c2.targets = targets);
            i2 = queue.indexOf(f2);
            if (~i2) {
              queue.splice(i2, 1);
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
    _proto4.clear = function clear2(stateOnly) {
      this.state.clear();
      stateOnly || (this.actions.length = 0);
    };
    _proto4.getStateById = function getStateById(id) {
      var i2 = this.actions.length, s2;
      while (i2--) {
        s2 = this.actions[i2].getStateById(id);
        if (s2) {
          return s2;
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
      (targets instanceof FlipState ? targets.targets : _toArray(targets)).forEach(function(t2) {
        return t2 && _killFlip(t2._flip, complete !== false ? 1 : 2);
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
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
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
  var _getTarget = function _getTarget2(t2, self2) {
    return (self2 && self2._ctx && self2._ctx.selector || gsap4.utils.toArray)(t2)[0] || (typeof t2 === "string" && gsap4.config().nullTargetWarn !== false ? console.warn("Element not found:", t2) : null);
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s2 = _ref.s, sc = _ref.sc;
    _isViewport(element) && (element = _doc4.scrollingElement || _docEl);
    var i2 = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i2 && (i2 = _scrollers.push(element) - 1);
    _scrollers[i2 + offset] || _addListener(element, "scroll", _onScroll);
    var prev = _scrollers[i2 + offset], func = prev || (_scrollers[i2 + offset] = _scrollCacheFunc(_getProxyProp(element, s2), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
      return arguments.length ? element[s2] = value : element[s2];
    })));
    func.target = element;
    prev || (func.smooth = gsap4.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  };
  var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
      var t3 = _getTime();
      if (force || t3 - t1 > min) {
        v2 = v1;
        v1 = value2;
        t2 = t1;
        t1 = t3;
      } else if (useDelta) {
        v1 += value2;
      } else {
        v1 = v2 + (value2 - v2) / (t3 - t2) * (t1 - t2);
      }
    }, reset = function reset2() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    }, getVelocity = function getVelocity2(latestValue) {
      var tOld = t2, vOld = v2, t3 = _getTime();
      (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
      return t1 === t2 || t3 - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t3 : t1) - tOld) * 1e3;
    };
    return {
      update,
      reset,
      getVelocity
    };
  };
  var _getEvent = function _getEvent2(e3, preventDefault) {
    preventDefault && !e3._gsapAllow && e3.preventDefault();
    return e3.changedTouches ? e3.changedTouches[0] : e3;
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
      }, _ignoreCheck = function _ignoreCheck2(e3, isPointerOrTouch) {
        return (self2.event = e3) && ignore && ~ignore.indexOf(e3.target) || isPointerOrTouch && limitToTouch && e3.pointerType !== "touch" || ignoreCheck && ignoreCheck(e3, isPointerOrTouch);
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
      }, _onDrag = function _onDrag2(e3) {
        if (_ignoreCheck(e3, 1)) {
          return;
        }
        e3 = _getEvent(e3, preventDefault);
        var x = e3.clientX, y = e3.clientY, dx = x - self2.x, dy = y - self2.y, isDragging = self2.isDragging;
        self2.x = x;
        self2.y = y;
        if (isDragging || Math.abs(self2.startX - x) >= dragMinimum || Math.abs(self2.startY - y) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self2.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self2);
        }
      }, _onPress = self2.onPress = function(e3) {
        if (_ignoreCheck(e3, 1) || e3 && e3.button) {
          return;
        }
        self2.axis = axis = null;
        onStopDelayedCall.pause();
        self2.isPressed = true;
        e3 = _getEvent(e3);
        prevDeltaX = prevDeltaY = 0;
        self2.startX = self2.x = e3.clientX;
        self2.startY = self2.y = e3.clientY;
        self2._vx.reset();
        self2._vy.reset();
        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
        self2.deltaX = self2.deltaY = 0;
        onPress && onPress(self2);
      }, _onRelease = self2.onRelease = function(e3) {
        if (_ignoreCheck(e3, 1)) {
          return;
        }
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self2.y - self2.startY), wasDragging = self2.isDragging, isDragNotClick = wasDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e3);
        if (!isDragNotClick && isTrackingDrag) {
          self2._vx.reset();
          self2._vy.reset();
          if (preventDefault && allowClicks) {
            gsap4.delayedCall(0.08, function() {
              if (_getTime() - onClickTime > 300 && !e3.defaultPrevented) {
                if (e3.target.click) {
                  e3.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win4, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e3.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self2.isDragging = self2.isGesturing = self2.isPressed = false;
        onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self2);
        onRelease && onRelease(self2, isDragNotClick);
      }, _onGestureStart = function _onGestureStart2(e3) {
        return e3.touches && e3.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e3, self2.isDragging);
      }, _onGestureEnd = function _onGestureEnd2() {
        return (self2.isGesturing = false) || onGestureEnd(self2);
      }, onScroll = function onScroll2(e3) {
        if (_ignoreCheck(e3)) {
          return;
        }
        var x = scrollFuncX(), y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      }, _onWheel = function _onWheel2(e3) {
        if (_ignoreCheck(e3)) {
          return;
        }
        e3 = _getEvent(e3, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e3.deltaMode === 1 ? lineHeight : e3.deltaMode === 2 ? _win4.innerHeight : 1) * wheelSpeed;
        onDelta(e3.deltaX * multiplier, e3.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      }, _onMove = function _onMove2(e3) {
        if (_ignoreCheck(e3)) {
          return;
        }
        var x = e3.clientX, y = e3.clientY, dx = x - self2.x, dy = y - self2.y;
        self2.x = x;
        self2.y = y;
        moved = true;
        onStop && onStopDelayedCall.restart(true);
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }, _onHover = function _onHover2(e3) {
        self2.event = e3;
        onHover(self2);
      }, _onHoverEnd = function _onHoverEnd2(e3) {
        self2.event = e3;
        onHoverEnd(self2);
      }, _onClick = function _onClick2(e3) {
        return _ignoreCheck(e3) || _getEvent(e3, preventDefault) && onClick(self2);
      };
      onStopDelayedCall = self2._dc = gsap4.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self2.deltaX = self2.deltaY = 0;
      self2._vx = _getVelocityProp(0, 50, true);
      self2._vy = _getVelocityProp(0, 50, true);
      self2.scrollX = scrollFuncX;
      self2.scrollY = scrollFuncY;
      self2.isDragging = self2.isGesturing = self2.isPressed = false;
      _context2(this);
      self2.enable = function(e3) {
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
          e3 && e3.type && _onPress(e3);
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
        var i2 = _observers.indexOf(self2);
        i2 >= 0 && _observers.splice(i2, 1);
        _normalizer === self2 && (_normalizer = 0);
      };
      _observers.push(self2);
      isNormalizer && _isViewport(target) && (_normalizer = self2);
      self2.enable(event);
    };
    _createClass(Observer2, [{
      key: "velocityX",
      get: function get2() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get2() {
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
  var _isViewport3 = function _isViewport4(e3) {
    return !!~_root2.indexOf(e3);
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
    var s2 = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a2 = _ref2.a;
    return Math.max(0, (s2 = "scroll" + d2) && (a2 = _getProxyProp(element, s2)) ? a2() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s2] || _body4[s2]) - _getViewportDimension(d2) : element[s2] - element["offset" + d2]);
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
    for (var i2 = 0; i2 < _autoRefresh.length; i2 += 3) {
      (!events || ~events.indexOf(_autoRefresh[i2 + 1])) && func(_autoRefresh[i2], _autoRefresh[i2 + 1], _autoRefresh[i2 + 2]);
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
  var _setDefaults3 = function _setDefaults4(obj, defaults3) {
    for (var p in defaults3) {
      p in obj || (obj[p] = defaults3[p]);
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
      var i2;
      if (!direction) {
        return snap3(value);
      }
      if (direction > 0) {
        value -= threshold;
        for (i2 = 0; i2 < a2.length; i2++) {
          if (a2[i2] >= value) {
            return a2[i2];
          }
        }
        return a2[i2 - 1];
      } else {
        i2 = a2.length;
        value += threshold;
        while (i2--) {
          if (a2[i2] <= value) {
            return a2[i2];
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
    var e3 = _doc5.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body4 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e3._isStart = isStart;
    e3.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e3.style.cssText = css;
    e3.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e3, parent.children[0]) : parent.appendChild(e3);
    e3._offset = e3["offset" + direction.op.d2];
    _positionMarker(e3, 0, direction, isStart);
    return e3;
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
    for (var i2 = 0; i2 < _savedStyles.length; i2 += 5) {
      if (!media || _savedStyles[i2 + 4] && _savedStyles[i2 + 4].query === media) {
        _savedStyles[i2].style.cssText = _savedStyles[i2 + 1];
        _savedStyles[i2].getBBox && _savedStyles[i2].setAttribute("transform", _savedStyles[i2 + 2] || "");
        _savedStyles[i2 + 3].uncache = 1;
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
    _triggers.slice(0).forEach(function(t2) {
      return t2.refresh();
    });
    _isReverted = false;
    _triggers.forEach(function(t2) {
      if (t2._subPinOffset && t2.pin) {
        var prop = t2.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t2.pin[prop];
        t2.revert(true, 1);
        t2.adjustPinSpacing(t2.pin[prop] - original);
        t2.refresh();
      }
    });
    _clampingMax = 1;
    _hideAllMarkers(true);
    _triggers.forEach(function(t2) {
      var max = _maxScroll(t2.scroller, t2._dir), endClamp = t2.vars.end === "max" || t2._endClamp && t2.end > max, startClamp = t2._startClamp && t2.start >= max;
      (endClamp || startClamp) && t2.setPositions(startClamp ? max - 1 : t2.start, endClamp ? Math.max(startClamp ? max : t2.start + 1, max) : t2.end, true);
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
    _triggers.forEach(function(t2) {
      return _isFunction3(t2.vars.onRefresh) && t2.vars.onRefresh(t2);
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
    var cache2 = pin._gsap;
    if (cache2.spacerIsNative) {
      _setState(cache2.spacerState);
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
      var i2 = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
      while (i2--) {
        p = _propNamesToCopy[i2];
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
      var style = state.t.style, l2 = state.length, i2 = 0, p, value;
      (state.t._gsap || gsap5.core.getCache(state.t)).uncache = 1;
      for (; i2 < l2; i2 += 2) {
        value = state[i2 + 1];
        p = state[i2];
        if (value) {
          style[p] = value;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp2, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l2 = _stateProps.length, style = element.style, state = [], i2 = 0;
    for (; i2 < l2; i2++) {
      state.push(_stateProps[i2], style[_stateProps[i2]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l2 = state.length, i2 = omitOffsets ? 8 : 0, p;
    for (; i2 < l2; i2 += 2) {
      p = state[i2];
      result.push(p, p in override ? override[p] : state[i2 + 1]);
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
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject3(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject3(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self2.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self2), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i2 = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
        if (markers && _isObject3(position)) {
          markerStartOffset = gsap5.getProperty(markerStartTrigger, direction.p);
          markerEndOffset = gsap5.getProperty(markerEndTrigger, direction.p);
        }
        while (i2--) {
          curTrigger = _triggers[i2];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self2);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }
          if (curTrigger !== _triggers[i2]) {
            triggerIndex--;
            i2--;
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
        i2 = triggerIndex;
        while (i2--) {
          curTrigger = _triggers[i2];
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
            i2 = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            if (i2) {
              spacerState.push(direction.d, i2 + _px);
              spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i2 + _px);
            }
            _setState(spacerState);
            if (pinnedContainer) {
              _triggers.forEach(function(t2) {
                if (t2.pin === pinnedContainer && t2.vars.pinSpacing !== false) {
                  t2._subPinOffset = true;
                }
              });
            }
            useFixedPosition && scrollFunc(prevScroll);
          } else {
            i2 = _getSize(pin, direction);
            i2 && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i2 + _px);
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
        revertedPins && revertedPins.forEach(function(t2) {
          return t2.revert(false, true);
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
        var i2 = _triggers.indexOf(self2), a2 = self2.direction > 0 ? _triggers.slice(0, i2).reverse() : _triggers.slice(i2 + 1);
        return (_isString3(name) ? a2.filter(function(t2) {
          return t2.vars.preventOverlaps === name;
        }) : a2).filter(function(t2) {
          return self2.direction > 0 ? t2.end <= start : t2.start >= end;
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
          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction3(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t2) {
            return t2.endAnimation();
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
          var n2 = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n2 + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n2);
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
          var i2 = spacerState.indexOf(direction.d) + 1;
          spacerState[i2] = parseFloat(spacerState[i2]) + amount + _px;
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
            var i2 = _triggers.length;
            while (i2--) {
              if (_triggers[i2].scroller === scroller && _triggers[i2] !== self2) {
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
        var i2 = _triggers.indexOf(self2);
        i2 >= 0 && _triggers.splice(i2, 1);
        i2 === _i && _direction > 0 && _i--;
        i2 = 0;
        _triggers.forEach(function(t2) {
          return t2.scroller === self2.scroller && (i2 = 1);
        });
        i2 || _refreshingAll || (self2.scroll.rec = 0);
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
          i2 = 0;
          _triggers.forEach(function(t2) {
            return t2.pin === pin && i2++;
          });
          i2 || (pinCache.spacer = 0);
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
    ScrollTrigger3.defaults = function defaults3(config3) {
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
      for (var i2 = 0; i2 < _scrollers.length; i2 += 3) {
        _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 1]);
        _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 2]);
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
          var bodyStyle = _body4.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap5.core.Animation.prototype, bounds, i2;
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
          for (i2 = 0; i2 < _scrollers.length; i2 += 3) {
            _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 1]);
            _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 2]);
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
      var t2 = _getTarget(target), i2 = _scrollers.indexOf(t2), isViewport = _isViewport3(t2);
      if (~i2) {
        _scrollers.splice(i2, isViewport ? 6 : 2);
      }
      if (vars) {
        isViewport ? _proxies.unshift(_win5, vars, _body4, vars, _docEl2, vars) : _proxies.unshift(t2, vars);
      }
    };
    ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function(t2) {
        return t2._ctx && t2._ctx.query === query && t2._ctx.kill(true, true);
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
      _triggers.slice(0).forEach(function(t2) {
        return t2.vars.id !== "ScrollSmoother" && t2.kill();
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
        var i2 = _savedStyles.indexOf(target);
        i2 >= 0 && _savedStyles.splice(i2, 5);
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
    return _triggers.filter(function(t2) {
      return t2.vars.id !== "ScrollSmoother";
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
    var a2 = _listeners2[type], i2 = a2 && a2.indexOf(callback);
    i2 >= 0 && a2.splice(i2, 1);
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
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache2 = node._gsap || gsap5.core.getCache(node), time = _getTime2(), cs;
    if (!cache2._isScrollT || time - cache2._isScrollT > 2e3) {
      while (node && node !== _body4 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache2._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache2._isScrollT = time;
    }
    if (cache2._isScroll || axis === "x") {
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
  var _captureInputs = function _captureInputs2(e3) {
    var isInput = _inputExp.test(e3.target.tagName);
    if (isInput || _inputIsFocused) {
      e3._gsapAllow = true;
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
    vars.ignoreCheck = function(e3) {
      return _fixIOSBug && e3.type === "touchmove" && ignoreDrag(e3) || scale > 1.05 && e3.type !== "touchstart" || self2.isGesturing || e3.touches && e3.touches.length > 1;
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

  // src/home-page/dragCode.ts
  init_live_reload();
  var import_dragdealer = __toESM(require_dragdealer(), 1);
  function initializedragEffect() {
    const cmsItem = $(".position_item");
    const cmsItemLength = cmsItem.length;
    function changeColor(item) {
      const myColor = item.find(".color").css("background-color");
      $(".handle_fill").css("border-color", myColor);
      $(".handle_back").css("background-color", myColor);
    }
    changeColor(cmsItem.eq(0));
    cmsItem.eq(0).addClass("active");
    let lastValue = parseFloat(cmsItem.eq(0).find(".position_salary").text());
    let targetValue = lastValue;
    let animationFrameId = null;
    function smoothInterpolation(target, current, factor = 0.1) {
      return current + (target - current) * factor;
    }
    function animate() {
      lastValue = smoothInterpolation(targetValue, lastValue);
      $(".handle_count").text(lastValue.toFixed(1));
      if (Math.abs(targetValue - lastValue) > 0.1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        lastValue = targetValue;
        $(".handle_count").text(targetValue.toFixed(1));
        animationFrameId = null;
      }
    }
    new Dragdealer("drag-steps", {
      steps: cmsItemLength,
      speed: 0.2,
      loose: false,
      slide: true,
      animationCallback: function(x, y) {
        const exactIndex = x * (cmsItemLength - 1);
        const lowerIndex = Math.floor(exactIndex);
        const upperIndex = Math.ceil(exactIndex);
        if (lowerIndex === upperIndex) {
          targetValue = parseFloat(cmsItem.eq(lowerIndex).find(".position_salary").text());
        } else {
          const lowerValue = parseFloat(cmsItem.eq(lowerIndex).find(".position_salary").text());
          const upperValue = parseFloat(cmsItem.eq(upperIndex).find(".position_salary").text());
          const progress = exactIndex - lowerIndex;
          targetValue = lowerValue + (upperValue - lowerValue) * progress;
        }
        if (!animationFrameId) {
          animate();
        }
        cmsItem.removeClass("active");
        const activeItemIndex = Math.round(exactIndex);
        const activeItem = cmsItem.eq(activeItemIndex);
        activeItem.addClass("active");
        changeColor(activeItem);
      },
      callback: function(x, y) {
        cmsItem.each(function(index) {
          const currentDecimal = $(this).index() / (cmsItemLength - 1);
          if (x == currentDecimal) {
            cmsItem.removeClass("active");
            $(this).addClass("active");
            changeColor($(this));
            const fixedValue = parseFloat($(this).find(".position_salary").text());
            targetValue = fixedValue;
            lastValue = fixedValue;
            $(".handle_count").text(fixedValue.toFixed(1));
          }
        });
      },
      dragStopCallback(x, y) {
        $(".handle_fill").addClass("release");
      }
    });
    $(".handle").on("mousedown touchstart", function() {
      $(".handle_fill").removeClass("release");
    });
    $(".handle").on("mouseup touchend", function() {
      $(".handle_fill").addClass("release");
    });
  }

  // src/home-page/globalCode.ts
  init_live_reload();

  // node_modules/.pnpm/locomotive-scroll@5.0.0-beta.13_react@18.3.1/node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs
  init_live_reload();

  // node_modules/.pnpm/lenis@1.0.45_react@18.3.1/node_modules/lenis/dist/lenis.mjs
  init_live_reload();
  var __assign = function() {
    return __assign = Object.assign || function __assign2(t2) {
      for (var e3, i2 = 1, o2 = arguments.length; i2 < o2; i2++)
        for (var s2 in e3 = arguments[i2])
          Object.prototype.hasOwnProperty.call(e3, s2) && (t2[s2] = e3[s2]);
      return t2;
    }, __assign.apply(this, arguments);
  };
  function clamp3(t2, e3, i2) {
    return Math.max(t2, Math.min(e3, i2));
  }
  var Animate = class {
    advance(t2) {
      if (!this.isRunning)
        return;
      let e3 = false;
      if (this.lerp)
        this.value = function damp(t3, e4, i2, o2) {
          return function lerp(t4, e5, i3) {
            return (1 - i3) * t4 + i3 * e5;
          }(t3, e4, 1 - Math.exp(-i2 * o2));
        }(this.value, this.to, 60 * this.lerp, t2), Math.round(this.value) === this.to && (this.value = this.to, e3 = true);
      else {
        this.currentTime += t2;
        const i2 = clamp3(0, this.currentTime / this.duration, 1);
        e3 = i2 >= 1;
        const o2 = e3 ? 1 : this.easing(i2);
        this.value = this.from + (this.to - this.from) * o2;
      }
      e3 && this.stop(), this.onUpdate?.(this.value, e3);
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(t2, e3, { lerp: i2 = 0.1, duration: o2 = 1, easing: s2 = (t3) => t3, onStart: n2, onUpdate: r2 }) {
      this.from = this.value = t2, this.to = e3, this.lerp = i2, this.duration = o2, this.easing = s2, this.currentTime = 0, this.isRunning = true, n2?.(), this.onUpdate = r2;
    }
  };
  var Dimensions = class {
    constructor({ wrapper: t2, content: e3, autoResize: i2 = true, debounce: o2 = 250 } = {}) {
      this.wrapper = t2, this.content = e3, i2 && (this.debouncedResize = /* @__PURE__ */ function debounce(t3, e4) {
        let i3;
        return function() {
          let o3 = arguments, s2 = this;
          clearTimeout(i3), i3 = setTimeout(function() {
            t3.apply(s2, o3);
          }, e4);
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
    emit(t2, ...e3) {
      let i2 = this.events[t2] || [];
      for (let t3 = 0, o2 = i2.length; t3 < o2; t3++)
        i2[t3](...e3);
    }
    on(t2, e3) {
      return this.events[t2]?.push(e3) || (this.events[t2] = [e3]), () => {
        this.events[t2] = this.events[t2]?.filter((t3) => e3 !== t3);
      };
    }
    off(t2, e3) {
      this.events[t2] = this.events[t2]?.filter((t3) => e3 !== t3);
    }
    destroy() {
      this.events = {};
    }
  };
  var t = 100 / 6;
  var VirtualScroll = class {
    constructor(t2, { wheelMultiplier: e3 = 1, touchMultiplier: i2 = 1 }) {
      this.element = t2, this.wheelMultiplier = e3, this.touchMultiplier = i2, this.touchStart = { x: null, y: null }, this.emitter = new Emitter(), window.addEventListener("resize", this.onWindowResize, false), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, { passive: false }), this.element.addEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.addEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.addEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    on(t2, e3) {
      return this.emitter.on(t2, e3);
    }
    destroy() {
      this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, false), this.element.removeEventListener("wheel", this.onWheel, { passive: false }), this.element.removeEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.removeEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.removeEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    onTouchStart = (t2) => {
      const { clientX: e3, clientY: i2 } = t2.targetTouches ? t2.targetTouches[0] : t2;
      this.touchStart.x = e3, this.touchStart.y = i2, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t2 });
    };
    onTouchMove = (t2) => {
      const { clientX: e3, clientY: i2 } = t2.targetTouches ? t2.targetTouches[0] : t2, o2 = -(e3 - this.touchStart.x) * this.touchMultiplier, s2 = -(i2 - this.touchStart.y) * this.touchMultiplier;
      this.touchStart.x = e3, this.touchStart.y = i2, this.lastDelta = { x: o2, y: s2 }, this.emitter.emit("scroll", { deltaX: o2, deltaY: s2, event: t2 });
    };
    onTouchEnd = (t2) => {
      this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t2 });
    };
    onWheel = (e3) => {
      let { deltaX: i2, deltaY: o2, deltaMode: s2 } = e3;
      i2 *= 1 === s2 ? t : 2 === s2 ? this.windowWidth : 1, o2 *= 1 === s2 ? t : 2 === s2 ? this.windowHeight : 1, i2 *= this.wheelMultiplier, o2 *= this.wheelMultiplier, this.emitter.emit("scroll", { deltaX: i2, deltaY: o2, event: e3 });
    };
    onWindowResize = () => {
      this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
    };
  };
  var e = function() {
    function Lenis(t2) {
      var e3 = void 0 === t2 ? {} : t2, i2 = e3.wrapper, o2 = void 0 === i2 ? window : i2, s2 = e3.content, n2 = void 0 === s2 ? document.documentElement : s2, r2 = e3.wheelEventsTarget, l2 = void 0 === r2 ? o2 : r2, h2 = e3.eventsTarget, a2 = void 0 === h2 ? l2 : h2, c2 = e3.smoothWheel, p = void 0 === c2 || c2, u = e3.syncTouch, d = void 0 !== u && u, m = e3.syncTouchLerp, v = void 0 === m ? 0.075 : m, g = e3.touchInertiaMultiplier, f = void 0 === g ? 35 : g, S = e3.duration, w = e3.easing, y = void 0 === w ? function(t3) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t3));
      } : w, b = e3.lerp, L = void 0 === b ? !S && 0.1 : b, _ = e3.infinite, z = void 0 !== _ && _, E = e3.orientation, T = void 0 === E ? "vertical" : E, M = e3.gestureOrientation, R = void 0 === M ? "vertical" : M, O = e3.touchMultiplier, W = void 0 === O ? 1 : O, x = e3.wheelMultiplier, H = void 0 === x ? 1 : x, N = e3.autoResize, k = void 0 === N || N, C = e3.__experimental__naiveDimensions, j = void 0 !== C && C, P = this;
      this.__isSmooth = false, this.__isScrolling = false, this.__isStopped = false, this.__isLocked = false, this.onVirtualScroll = function(t3) {
        var e4 = t3.deltaX, i3 = t3.deltaY, o3 = t3.event;
        if (!o3.ctrlKey) {
          var s3 = o3.type.includes("touch"), n3 = o3.type.includes("wheel");
          if (P.options.syncTouch && s3 && "touchstart" === o3.type && !P.isStopped && !P.isLocked)
            P.reset();
          else {
            var r3 = 0 === e4 && 0 === i3, l3 = "vertical" === P.options.gestureOrientation && 0 === i3 || "horizontal" === P.options.gestureOrientation && 0 === e4;
            if (!r3 && !l3) {
              var h3 = o3.composedPath();
              if (!(h3 = h3.slice(0, h3.indexOf(P.rootElement))).find(function(t4) {
                var e5, i4, o4, r4, l4;
                return (null === (e5 = t4.hasAttribute) || void 0 === e5 ? void 0 : e5.call(t4, "data-lenis-prevent")) || s3 && (null === (i4 = t4.hasAttribute) || void 0 === i4 ? void 0 : i4.call(t4, "data-lenis-prevent-touch")) || n3 && (null === (o4 = t4.hasAttribute) || void 0 === o4 ? void 0 : o4.call(t4, "data-lenis-prevent-wheel")) || (null === (r4 = t4.classList) || void 0 === r4 ? void 0 : r4.contains("lenis")) && !(null === (l4 = t4.classList) || void 0 === l4 ? void 0 : l4.contains("lenis-stopped"));
              }))
                if (P.isStopped || P.isLocked)
                  o3.preventDefault();
                else {
                  if (P.isSmooth = P.options.syncTouch && s3 || P.options.smoothWheel && n3, !P.isSmooth)
                    return P.isScrolling = false, void P.animate.stop();
                  o3.preventDefault();
                  var a3 = i3;
                  "both" === P.options.gestureOrientation ? a3 = Math.abs(i3) > Math.abs(e4) ? i3 : e4 : "horizontal" === P.options.gestureOrientation && (a3 = e4);
                  var c3 = s3 && P.options.syncTouch, p2 = s3 && "touchend" === o3.type && Math.abs(a3) > 5;
                  p2 && (a3 = P.velocity * P.options.touchInertiaMultiplier), P.scrollTo(P.targetScroll + a3, __assign({ programmatic: false }, c3 ? { lerp: p2 ? P.options.syncTouchLerp : 1 } : { lerp: P.options.lerp, duration: P.options.duration, easing: P.options.easing }));
                }
            }
          }
        }
      }, this.onNativeScroll = function() {
        if (!P.__preventNextScrollEvent && !P.isScrolling) {
          var t3 = P.animatedScroll;
          P.animatedScroll = P.targetScroll = P.actualScroll, P.velocity = 0, P.direction = Math.sign(P.animatedScroll - t3), P.emit();
        }
      }, window.lenisVersion = "1.0.45", o2 !== document.documentElement && o2 !== document.body || (o2 = window), this.options = { wrapper: o2, content: n2, wheelEventsTarget: l2, eventsTarget: a2, smoothWheel: p, syncTouch: d, syncTouchLerp: v, touchInertiaMultiplier: f, duration: S, easing: y, lerp: L, infinite: z, gestureOrientation: R, orientation: T, touchMultiplier: W, wheelMultiplier: H, autoResize: k, __experimental__naiveDimensions: j }, this.animate = new Animate(), this.emitter = new Emitter(), this.dimensions = new Dimensions({ wrapper: o2, content: n2, autoResize: k }), this.toggleClassName("lenis", true), this.velocity = 0, this.isLocked = false, this.isStopped = false, this.isSmooth = d || p, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false), this.virtualScroll = new VirtualScroll(a2, { touchMultiplier: W, wheelMultiplier: H }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    return Lenis.prototype.destroy = function() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", false), this.toggleClassName("lenis-smooth", false), this.toggleClassName("lenis-scrolling", false), this.toggleClassName("lenis-stopped", false), this.toggleClassName("lenis-locked", false);
    }, Lenis.prototype.on = function(t2, e3) {
      return this.emitter.on(t2, e3);
    }, Lenis.prototype.off = function(t2, e3) {
      return this.emitter.off(t2, e3);
    }, Lenis.prototype.setScroll = function(t2) {
      this.isHorizontal ? this.rootElement.scrollLeft = t2 : this.rootElement.scrollTop = t2;
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
    }, Lenis.prototype.raf = function(t2) {
      var e3 = t2 - (this.time || t2);
      this.time = t2, this.animate.advance(1e-3 * e3);
    }, Lenis.prototype.scrollTo = function(t2, e3) {
      var i2 = this, o2 = void 0 === e3 ? {} : e3, s2 = o2.offset, n2 = void 0 === s2 ? 0 : s2, r2 = o2.immediate, l2 = void 0 !== r2 && r2, h2 = o2.lock, a2 = void 0 !== h2 && h2, c2 = o2.duration, p = void 0 === c2 ? this.options.duration : c2, u = o2.easing, d = void 0 === u ? this.options.easing : u, m = o2.lerp, v = void 0 === m ? !p && this.options.lerp : m, g = o2.onComplete, f = o2.force, S = void 0 !== f && f, w = o2.programmatic, y = void 0 === w || w;
      if (!this.isStopped && !this.isLocked || S) {
        if (["top", "left", "start"].includes(t2))
          t2 = 0;
        else if (["bottom", "right", "end"].includes(t2))
          t2 = this.limit;
        else {
          var b = void 0;
          if ("string" == typeof t2 ? b = document.querySelector(t2) : (null == t2 ? void 0 : t2.nodeType) && (b = t2), b) {
            if (this.options.wrapper !== window) {
              var L = this.options.wrapper.getBoundingClientRect();
              n2 -= this.isHorizontal ? L.left : L.top;
            }
            var _ = b.getBoundingClientRect();
            t2 = (this.isHorizontal ? _.left : _.top) + this.animatedScroll;
          }
        }
        if ("number" == typeof t2) {
          if (t2 += n2, t2 = Math.round(t2), this.options.infinite ? y && (this.targetScroll = this.animatedScroll = this.scroll) : t2 = clamp3(0, t2, this.limit), l2)
            return this.animatedScroll = this.targetScroll = t2, this.setScroll(this.scroll), this.reset(), void (null == g || g(this));
          if (!y) {
            if (t2 === this.targetScroll)
              return;
            this.targetScroll = t2;
          }
          this.animate.fromTo(this.animatedScroll, t2, { duration: p, easing: d, lerp: v, onStart: function() {
            a2 && (i2.isLocked = true), i2.isScrolling = true;
          }, onUpdate: function(t3, e4) {
            i2.isScrolling = true, i2.velocity = t3 - i2.animatedScroll, i2.direction = Math.sign(i2.velocity), i2.animatedScroll = t3, i2.setScroll(i2.scroll), y && (i2.targetScroll = t3), e4 || i2.emit(), e4 && (i2.reset(), i2.emit(), null == g || g(i2), i2.__preventNextScrollEvent = true, requestAnimationFrame(function() {
              delete i2.__preventNextScrollEvent;
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
      return this.options.infinite ? function modulo(t2, e3) {
        return (t2 % e3 + e3) % e3;
      }(this.animatedScroll, this.limit) : this.animatedScroll;
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "progress", { get: function() {
      return 0 === this.limit ? 1 : this.scroll / this.limit;
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isSmooth", { get: function() {
      return this.__isSmooth;
    }, set: function(t2) {
      this.__isSmooth !== t2 && (this.__isSmooth = t2, this.toggleClassName("lenis-smooth", t2));
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isScrolling", { get: function() {
      return this.__isScrolling;
    }, set: function(t2) {
      this.__isScrolling !== t2 && (this.__isScrolling = t2, this.toggleClassName("lenis-scrolling", t2));
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isStopped", { get: function() {
      return this.__isStopped;
    }, set: function(t2) {
      this.__isStopped !== t2 && (this.__isStopped = t2, this.toggleClassName("lenis-stopped", t2));
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "isLocked", { get: function() {
      return this.__isLocked;
    }, set: function(t2) {
      this.__isLocked !== t2 && (this.__isLocked = t2, this.toggleClassName("lenis-locked", t2));
    }, enumerable: false, configurable: true }), Object.defineProperty(Lenis.prototype, "className", { get: function() {
      var t2 = "lenis";
      return this.isStopped && (t2 += " lenis-stopped"), this.isLocked && (t2 += " lenis-locked"), this.isScrolling && (t2 += " lenis-scrolling"), this.isSmooth && (t2 += " lenis-smooth"), t2;
    }, enumerable: false, configurable: true }), Lenis.prototype.toggleClassName = function(t2, e3) {
      this.rootElement.classList.toggle(t2, e3), this.emitter.emit("className change", this);
    }, Lenis;
  }();

  // node_modules/.pnpm/locomotive-scroll@5.0.0-beta.13_react@18.3.1/node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs
  function s() {
    return s = Object.assign ? Object.assign.bind() : function(t2) {
      for (var s2 = 1; s2 < arguments.length; s2++) {
        var e3 = arguments[s2];
        for (var i2 in e3)
          Object.prototype.hasOwnProperty.call(e3, i2) && (t2[i2] = e3[i2]);
      }
      return t2;
    }, s.apply(this, arguments);
  }
  var e2 = class {
    constructor({ scrollElements: t2, rootMargin: s2 = "-1px -1px -1px -1px", IORaf: e3 }) {
      this.scrollElements = void 0, this.rootMargin = void 0, this.IORaf = void 0, this.observer = void 0, this.scrollElements = t2, this.rootMargin = s2, this.IORaf = e3, this._init();
    }
    _init() {
      this.observer = new IntersectionObserver((t2) => {
        t2.forEach((t3) => {
          const s2 = this.scrollElements.find((s3) => s3.$el === t3.target);
          t3.isIntersecting ? (s2 && (s2.isAlreadyIntersected = true), this._setInview(t3)) : s2 && s2.isAlreadyIntersected && this._setOutOfView(t3);
        });
      }, { rootMargin: this.rootMargin });
      for (const t2 of this.scrollElements)
        this.observe(t2.$el);
    }
    destroy() {
      this.observer.disconnect();
    }
    observe(t2) {
      t2 && this.observer.observe(t2);
    }
    unobserve(t2) {
      t2 && this.observer.unobserve(t2);
    }
    _setInview(t2) {
      const s2 = this.scrollElements.find((s3) => s3.$el === t2.target);
      this.IORaf && (null == s2 || s2.setInteractivityOn()), !this.IORaf && (null == s2 || s2.setInview());
    }
    _setOutOfView(t2) {
      const s2 = this.scrollElements.find((s3) => s3.$el === t2.target);
      this.IORaf && (null == s2 || s2.setInteractivityOff()), !this.IORaf && (null == s2 || s2.setOutOfView()), null != s2 && s2.attributes.scrollRepeat || this.IORaf || this.unobserve(t2.target);
    }
  };
  function i(t2, s2, e3, i2, r2) {
    return e3 + ((r2 - t2) / (s2 - t2) * (i2 - e3) || 0);
  }
  function r(t2, s2) {
    return t2.reduce((t3, e3) => Math.abs(e3 - s2) < Math.abs(t3 - s2) ? e3 : t3);
  }
  var l = class {
    constructor({ $el: t2, id: s2, modularInstance: e3, subscribeElementUpdateFn: i2, unsubscribeElementUpdateFn: r2, needRaf: l2, scrollOrientation: n2 }) {
      var o2, a2, c2, h2, d;
      this.$el = void 0, this.id = void 0, this.needRaf = void 0, this.attributes = void 0, this.scrollOrientation = void 0, this.isAlreadyIntersected = void 0, this.intersection = void 0, this.metrics = void 0, this.currentScroll = void 0, this.translateValue = void 0, this.progress = void 0, this.lastProgress = void 0, this.modularInstance = void 0, this.progressModularModules = void 0, this.isInview = void 0, this.isInteractive = void 0, this.isInFold = void 0, this.isFirstResize = void 0, this.subscribeElementUpdateFn = void 0, this.unsubscribeElementUpdateFn = void 0, this.$el = t2, this.id = s2, this.needRaf = l2, this.scrollOrientation = n2, this.modularInstance = e3, this.subscribeElementUpdateFn = i2, this.unsubscribeElementUpdateFn = r2, this.attributes = { scrollClass: null != (o2 = this.$el.dataset.scrollClass) ? o2 : "is-inview", scrollOffset: null != (a2 = this.$el.dataset.scrollOffset) ? a2 : "0,0", scrollPosition: null != (c2 = this.$el.dataset.scrollPosition) ? c2 : "start,end", scrollModuleProgress: null != this.$el.dataset.scrollModuleProgress, scrollCssProgress: null != this.$el.dataset.scrollCssProgress, scrollEventProgress: null != (h2 = this.$el.dataset.scrollEventProgress) ? h2 : null, scrollSpeed: null != this.$el.dataset.scrollSpeed ? parseFloat(this.$el.dataset.scrollSpeed) : null, scrollRepeat: null != this.$el.dataset.scrollRepeat, scrollCall: null != (d = this.$el.dataset.scrollCall) ? d : null, scrollCallSelf: null != this.$el.dataset.scrollCallSelf, scrollIgnoreFold: null != this.$el.dataset.scrollIgnoreFold, scrollEnableTouchSpeed: null != this.$el.dataset.scrollEnableTouchSpeed }, this.intersection = { start: 0, end: 0 }, this.metrics = { offsetStart: 0, offsetEnd: 0, bcr: {} }, this.currentScroll = "vertical" === this.scrollOrientation ? window.scrollY : window.scrollX, this.translateValue = 0, this.progress = 0, this.lastProgress = null, this.progressModularModules = [], this.isInview = false, this.isInteractive = false, this.isAlreadyIntersected = false, this.isInFold = false, this.isFirstResize = true, this._init();
    }
    _init() {
      this.needRaf && (this.modularInstance && this.attributes.scrollModuleProgress && this._getProgressModularModules(), this._resize());
    }
    onResize({ currentScroll: t2 }) {
      this.currentScroll = t2, this._resize();
    }
    onRender({ currentScroll: t2, smooth: s2 }) {
      const e3 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth;
      if (this.currentScroll = t2, this._computeProgress(), this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed))
        if (this.attributes.scrollEnableTouchSpeed || s2) {
          if (this.isInFold) {
            const t3 = Math.max(0, this.progress);
            this.translateValue = t3 * e3 * this.attributes.scrollSpeed * -1;
          } else {
            const t3 = i(0, 1, -1, 1, this.progress);
            this.translateValue = t3 * e3 * this.attributes.scrollSpeed * -1;
          }
          this.$el.style.transform = "vertical" === this.scrollOrientation ? `translate3d(0, ${this.translateValue}px, 0)` : `translate3d(${this.translateValue}px, 0, 0)`;
        } else
          this.translateValue && (this.$el.style.transform = "translate3d(0, 0, 0)"), this.translateValue = 0;
    }
    setInview() {
      if (this.isInview)
        return;
      this.isInview = true, this.$el.classList.add(this.attributes.scrollClass);
      const t2 = this._getScrollCallFrom();
      this.attributes.scrollCall && this._dispatchCall("enter", t2);
    }
    setOutOfView() {
      if (!this.isInview || !this.attributes.scrollRepeat)
        return;
      this.isInview = false, this.$el.classList.remove(this.attributes.scrollClass);
      const t2 = this._getScrollCallFrom();
      this.attributes.scrollCall && this._dispatchCall("leave", t2);
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
      const { top: t2, left: s2, height: e3, width: i2 } = this.metrics.bcr, r2 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, l2 = "vertical" === this.scrollOrientation ? e3 : i2;
      this.metrics.offsetStart = this.currentScroll + ("vertical" === this.scrollOrientation ? t2 : s2) - this.translateValue, this.metrics.offsetEnd = this.metrics.offsetStart + l2, this.isInFold = this.metrics.offsetStart < r2 && !this.attributes.scrollIgnoreFold;
    }
    _computeIntersection() {
      const t2 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, s2 = "vertical" === this.scrollOrientation ? this.metrics.bcr.height : this.metrics.bcr.width, e3 = this.attributes.scrollOffset.split(","), i2 = null != e3[0] ? e3[0].trim() : "0", r2 = null != e3[1] ? e3[1].trim() : "0", l2 = this.attributes.scrollPosition.split(",");
      let n2 = null != l2[0] ? l2[0].trim() : "start";
      const o2 = null != l2[1] ? l2[1].trim() : "end", a2 = i2.includes("%") ? t2 * parseInt(i2.replace("%", "").trim()) * 0.01 : parseInt(i2), c2 = r2.includes("%") ? t2 * parseInt(r2.replace("%", "").trim()) * 0.01 : parseInt(r2);
      switch (this.isInFold && (n2 = "fold"), n2) {
        case "start":
        default:
          this.intersection.start = this.metrics.offsetStart - t2 + a2;
          break;
        case "middle":
          this.intersection.start = this.metrics.offsetStart - t2 + a2 + 0.5 * s2;
          break;
        case "end":
          this.intersection.start = this.metrics.offsetStart - t2 + a2 + s2;
          break;
        case "fold":
          this.intersection.start = 0;
      }
      switch (o2) {
        case "start":
          this.intersection.end = this.metrics.offsetStart - c2;
          break;
        case "middle":
          this.intersection.end = this.metrics.offsetStart - c2 + 0.5 * s2;
          break;
        default:
          this.intersection.end = this.metrics.offsetStart - c2 + s2;
      }
      if (this.intersection.end <= this.intersection.start)
        switch (o2) {
          case "start":
          default:
            this.intersection.end = this.intersection.start + 1;
            break;
          case "middle":
            this.intersection.end = this.intersection.start + 0.5 * s2;
            break;
          case "end":
            this.intersection.end = this.intersection.start + s2;
        }
    }
    _computeProgress(t2) {
      const s2 = null != t2 ? t2 : (e3 = i(this.intersection.start, this.intersection.end, 0, 1, this.currentScroll)) < 0 ? 0 : e3 > 1 ? 1 : e3;
      var e3;
      if (this.progress = s2, s2 != this.lastProgress) {
        if (this.lastProgress = s2, this.attributes.scrollCssProgress && this._setCssProgress(s2), this.attributes.scrollEventProgress && this._setCustomEventProgress(s2), this.attributes.scrollModuleProgress)
          for (const t3 of this.progressModularModules)
            this.modularInstance && this.modularInstance.call("onScrollProgress", s2, t3.moduleName, t3.moduleId);
        s2 > 0 && s2 < 1 && this.setInview(), 0 === s2 && this.setOutOfView(), 1 === s2 && this.setOutOfView();
      }
    }
    _setCssProgress(t2 = 0) {
      this.$el.style.setProperty("--progress", t2.toString());
    }
    _setCustomEventProgress(t2 = 0) {
      const s2 = this.attributes.scrollEventProgress;
      if (!s2)
        return;
      const e3 = new CustomEvent(s2, { detail: { target: this.$el, progress: t2 } });
      window.dispatchEvent(e3);
    }
    _getProgressModularModules() {
      if (!this.modularInstance)
        return;
      const t2 = Object.keys(this.$el.dataset).filter((t3) => t3.includes("module")), s2 = Object.entries(this.modularInstance.modules);
      if (t2.length)
        for (const e3 of t2) {
          const t3 = this.$el.dataset[e3];
          if (!t3)
            return;
          for (const e4 of s2) {
            const [s3, i2] = e4;
            t3 in i2 && this.progressModularModules.push({ moduleName: s3, moduleId: t3 });
          }
        }
    }
    _getScrollCallFrom() {
      const t2 = r([this.intersection.start, this.intersection.end], this.currentScroll);
      return this.intersection.start === t2 ? "start" : "end";
    }
    _dispatchCall(t2, s2) {
      var e3, i2;
      const r2 = null == (e3 = this.attributes.scrollCall) ? void 0 : e3.split(","), l2 = null == (i2 = this.attributes) ? void 0 : i2.scrollCallSelf;
      if (r2 && r2.length > 1) {
        var n2;
        const [e4, i3, o2] = r2;
        let a2;
        a2 = l2 ? this.$el.dataset[`module${i3.trim()}`] : o2, this.modularInstance && this.modularInstance.call(e4.trim(), { target: this.$el, way: t2, from: s2 }, i3.trim(), null == (n2 = a2) ? void 0 : n2.trim());
      } else if (r2) {
        const [e4] = r2, i3 = new CustomEvent(e4, { detail: { target: this.$el, way: t2, from: s2 } });
        window.dispatchEvent(i3);
      }
    }
  };
  var n = ["scrollOffset", "scrollPosition", "scrollModuleProgress", "scrollCssProgress", "scrollEventProgress", "scrollSpeed"];
  var o = class {
    constructor({ $el: t2, modularInstance: s2, triggerRootMargin: e3, rafRootMargin: i2, scrollOrientation: r2 }) {
      this.$scrollContainer = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.scrollElements = void 0, this.triggeredScrollElements = void 0, this.RAFScrollElements = void 0, this.scrollElementsToUpdate = void 0, this.IOTriggerInstance = void 0, this.IORafInstance = void 0, this.scrollOrientation = void 0, t2 ? (this.$scrollContainer = t2, this.modularInstance = s2, this.scrollOrientation = r2, this.triggerRootMargin = null != e3 ? e3 : "-1px -1px -1px -1px", this.rafRootMargin = null != i2 ? i2 : "100% 100% 100% 100%", this.scrollElements = [], this.triggeredScrollElements = [], this.RAFScrollElements = [], this.scrollElementsToUpdate = [], this._init()) : console.error("Please provide a DOM Element as scrollContainer");
    }
    _init() {
      const t2 = this.$scrollContainer.querySelectorAll("[data-scroll]"), s2 = Array.from(t2);
      this._subscribeScrollElements(s2), this.IOTriggerInstance = new e2({ scrollElements: [...this.triggeredScrollElements], rootMargin: this.triggerRootMargin, IORaf: false }), this.IORafInstance = new e2({ scrollElements: [...this.RAFScrollElements], rootMargin: this.rafRootMargin, IORaf: true });
    }
    destroy() {
      this.IOTriggerInstance.destroy(), this.IORafInstance.destroy(), this._unsubscribeAllScrollElements();
    }
    onResize({ currentScroll: t2 }) {
      for (const s2 of this.RAFScrollElements)
        s2.onResize({ currentScroll: t2 });
    }
    onRender({ currentScroll: t2, smooth: s2 }) {
      for (const e3 of this.scrollElementsToUpdate)
        e3.onRender({ currentScroll: t2, smooth: s2 });
    }
    removeScrollElements(t2) {
      const s2 = t2.querySelectorAll("[data-scroll]");
      if (s2.length) {
        for (let t3 = 0; t3 < this.triggeredScrollElements.length; t3++) {
          const e3 = this.triggeredScrollElements[t3];
          Array.from(s2).indexOf(e3.$el) > -1 && (this.IOTriggerInstance.unobserve(e3.$el), this.triggeredScrollElements.splice(t3, 1));
        }
        for (let t3 = 0; t3 < this.RAFScrollElements.length; t3++) {
          const e3 = this.RAFScrollElements[t3];
          Array.from(s2).indexOf(e3.$el) > -1 && (this.IORafInstance.unobserve(e3.$el), this.RAFScrollElements.splice(t3, 1));
        }
        s2.forEach((t3) => {
          const s3 = this.scrollElementsToUpdate.find((s4) => s4.$el === t3), e3 = this.scrollElements.find((s4) => s4.$el === t3);
          s3 && this._unsubscribeElementUpdate(s3), e3 && (this.scrollElements = this.scrollElements.filter((t4) => t4.id != e3.id));
        });
      }
    }
    addScrollElements(t2) {
      const s2 = t2.querySelectorAll("[data-scroll]"), e3 = [];
      this.scrollElements.forEach((t3) => {
        e3.push(t3.id);
      });
      const i2 = Math.max(...e3) + 1, r2 = Array.from(s2);
      this._subscribeScrollElements(r2, i2, true);
    }
    _subscribeScrollElements(t2, s2 = 0, e3 = false) {
      for (let i2 = 0; i2 < t2.length; i2++) {
        const r2 = t2[i2], n2 = this._checkRafNeeded(r2), o2 = new l({ $el: r2, id: s2 + i2, scrollOrientation: this.scrollOrientation, modularInstance: this.modularInstance, subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this), unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this), needRaf: n2 });
        this.scrollElements.push(o2), n2 ? (this.RAFScrollElements.push(o2), e3 && (this.IORafInstance.scrollElements.push(o2), this.IORafInstance.observe(o2.$el))) : (this.triggeredScrollElements.push(o2), e3 && (this.IOTriggerInstance.scrollElements.push(o2), this.IOTriggerInstance.observe(o2.$el)));
      }
    }
    _unsubscribeAllScrollElements() {
      this.scrollElements = [], this.RAFScrollElements = [], this.triggeredScrollElements = [], this.scrollElementsToUpdate = [];
    }
    _subscribeElementUpdate(t2) {
      this.scrollElementsToUpdate.push(t2);
    }
    _unsubscribeElementUpdate(t2) {
      this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter((s2) => s2.id != t2.id);
    }
    _checkRafNeeded(t2) {
      let s2 = [...n];
      const e3 = (t3) => {
        s2 = s2.filter((s3) => s3 != t3);
      };
      if (t2.dataset.scrollOffset) {
        if ("0,0" != t2.dataset.scrollOffset.split(",").map((t3) => t3.replace("%", "").trim()).join(","))
          return true;
        e3("scrollOffset");
      } else
        e3("scrollOffset");
      if (t2.dataset.scrollPosition) {
        if ("top,bottom" != t2.dataset.scrollPosition.trim())
          return true;
        e3("scrollPosition");
      } else
        e3("scrollPosition");
      if (t2.dataset.scrollSpeed && !isNaN(parseFloat(t2.dataset.scrollSpeed)))
        return true;
      e3("scrollSpeed");
      for (const e4 of s2)
        if (e4 in t2.dataset)
          return true;
      return false;
    }
  };
  var a = class {
    constructor({ resizeElements: t2, resizeCallback: s2 = () => {
    } }) {
      this.$resizeElements = void 0, this.isFirstObserve = void 0, this.observer = void 0, this.resizeCallback = void 0, this.$resizeElements = t2, this.resizeCallback = s2, this.isFirstObserve = true, this._init();
    }
    _init() {
      this.observer = new ResizeObserver((t2) => {
        var s2;
        !this.isFirstObserve && (null == (s2 = this.resizeCallback) || s2.call(this)), this.isFirstObserve = false;
      });
      for (const t2 of this.$resizeElements)
        this.observer.observe(t2);
    }
    destroy() {
      this.observer.disconnect();
    }
  };
  var c = { wrapper: window, content: document.documentElement, wheelEventsTarget: window, eventsTarget: window, smoothWheel: true, syncTouch: false, syncTouchLerp: 0.075, touchInertiaMultiplier: 35, duration: 0.75, easing: (t2) => Math.min(1, 1.001 - Math.pow(2, -10 * t2)), lerp: 0.1, infinite: false, orientation: "vertical", gestureOrientation: "vertical", touchMultiplier: 1, wheelMultiplier: 1, autoResize: true };
  var h = class {
    constructor({ lenisOptions: t2 = {}, modularInstance: e3, triggerRootMargin: i2, rafRootMargin: r2, autoResize: l2 = true, autoStart: n2 = true, scrollCallback: o2 = () => {
    }, initCustomTicker: a2, destroyCustomTicker: h2 } = {}) {
      this.rafPlaying = void 0, this.lenisInstance = void 0, this.coreInstance = void 0, this.lenisOptions = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.rafInstance = void 0, this.autoResize = void 0, this.autoStart = void 0, this.ROInstance = void 0, this.initCustomTicker = void 0, this.destroyCustomTicker = void 0, this._onRenderBind = void 0, this._onResizeBind = void 0, this._onScrollToBind = void 0, this.lenisOptions = s({}, c, t2), Object.assign(this, { lenisOptions: t2, modularInstance: e3, triggerRootMargin: i2, rafRootMargin: r2, autoResize: l2, autoStart: n2, scrollCallback: o2, initCustomTicker: a2, destroyCustomTicker: h2 }), this._onRenderBind = this._onRender.bind(this), this._onScrollToBind = this._onScrollTo.bind(this), this._onResizeBind = this._onResize.bind(this), this.rafPlaying = false, this._init();
    }
    _init() {
      var s2;
      this.lenisInstance = new e({ wrapper: this.lenisOptions.wrapper, content: this.lenisOptions.content, eventsTarget: this.lenisOptions.eventsTarget, lerp: this.lenisOptions.lerp, duration: this.lenisOptions.duration, orientation: this.lenisOptions.orientation, gestureOrientation: this.lenisOptions.gestureOrientation, smoothWheel: this.lenisOptions.smoothWheel, syncTouch: this.lenisOptions.syncTouch, syncTouchLerp: this.lenisOptions.syncTouchLerp, touchInertiaMultiplier: this.lenisOptions.touchInertiaMultiplier, wheelMultiplier: this.lenisOptions.wheelMultiplier, touchMultiplier: this.lenisOptions.touchMultiplier, easing: this.lenisOptions.easing }), null == (s2 = this.lenisInstance) || s2.on("scroll", this.scrollCallback), document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation), requestAnimationFrame(() => {
        this.coreInstance = new o({ $el: this.lenisInstance.rootElement, modularInstance: this.modularInstance, triggerRootMargin: this.triggerRootMargin, rafRootMargin: this.rafRootMargin, scrollOrientation: this.lenisInstance.options.orientation }), this._bindEvents(), this.initCustomTicker && !this.destroyCustomTicker ? console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.") : !this.initCustomTicker && this.destroyCustomTicker && console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."), this.autoStart && this.start();
      });
    }
    destroy() {
      var t2;
      this.stop(), this._unbindEvents(), this.lenisInstance.destroy(), null == (t2 = this.coreInstance) || t2.destroy(), requestAnimationFrame(() => {
        var t3;
        null == (t3 = this.coreInstance) || t3.destroy();
      });
    }
    _bindEvents() {
      this._bindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance = new a({ resizeElements: [document.body], resizeCallback: this._onResizeBind }) : window.addEventListener("resize", this._onResizeBind));
    }
    _unbindEvents() {
      this._unbindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance && this.ROInstance.destroy() : window.removeEventListener("resize", this._onResizeBind));
    }
    _bindScrollToEvents(t2) {
      const s2 = t2 || this.lenisInstance.rootElement, e3 = null == s2 ? void 0 : s2.querySelectorAll("[data-scroll-to]");
      (null == e3 ? void 0 : e3.length) && e3.forEach((t3) => {
        t3.addEventListener("click", this._onScrollToBind, false);
      });
    }
    _unbindScrollToEvents(t2) {
      const s2 = t2 || this.lenisInstance.rootElement, e3 = null == s2 ? void 0 : s2.querySelectorAll("[data-scroll-to]");
      (null == e3 ? void 0 : e3.length) && e3.forEach((t3) => {
        t3.removeEventListener("click", this._onScrollToBind, false);
      });
    }
    _onResize() {
      requestAnimationFrame(() => {
        var t2;
        null == (t2 = this.coreInstance) || t2.onResize({ currentScroll: this.lenisInstance.scroll });
      });
    }
    _onRender() {
      var t2, s2;
      null == (t2 = this.lenisInstance) || t2.raf(Date.now()), null == (s2 = this.coreInstance) || s2.onRender({ currentScroll: this.lenisInstance.scroll, smooth: this.lenisInstance.isSmooth });
    }
    _onScrollTo(t2) {
      var s2;
      t2.preventDefault();
      const e3 = null != (s2 = t2.currentTarget) ? s2 : null;
      if (!e3)
        return;
      const i2 = e3.getAttribute("data-scroll-to-href") || e3.getAttribute("href"), r2 = e3.getAttribute("data-scroll-to-offset") || 0, l2 = e3.getAttribute("data-scroll-to-duration") || this.lenisOptions.duration || c.duration;
      i2 && this.scrollTo(i2, { offset: "string" == typeof r2 ? parseInt(r2) : r2, duration: "string" == typeof l2 ? parseInt(l2) : l2 });
    }
    start() {
      var t2;
      this.rafPlaying || (null == (t2 = this.lenisInstance) || t2.start(), this.rafPlaying = true, this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf());
    }
    stop() {
      var t2;
      this.rafPlaying && (null == (t2 = this.lenisInstance) || t2.stop(), this.rafPlaying = false, this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance));
    }
    removeScrollElements(t2) {
      var s2;
      t2 ? (this._unbindScrollToEvents(t2), null == (s2 = this.coreInstance) || s2.removeScrollElements(t2)) : console.error("Please provide a DOM Element as $oldContainer");
    }
    addScrollElements(t2) {
      var s2;
      t2 ? (null == (s2 = this.coreInstance) || s2.addScrollElements(t2), requestAnimationFrame(() => {
        this._bindScrollToEvents(t2);
      })) : console.error("Please provide a DOM Element as $newContainer");
    }
    resize() {
      this._onResizeBind();
    }
    scrollTo(t2, s2) {
      var e3;
      null == (e3 = this.lenisInstance) || e3.scrollTo(t2, { offset: null == s2 ? void 0 : s2.offset, lerp: null == s2 ? void 0 : s2.lerp, duration: null == s2 ? void 0 : s2.duration, immediate: null == s2 ? void 0 : s2.immediate, lock: null == s2 ? void 0 : s2.lock, force: null == s2 ? void 0 : s2.force, easing: null == s2 ? void 0 : s2.easing, onComplete: null == s2 ? void 0 : s2.onComplete });
    }
    _raf() {
      this._onRenderBind(), this.rafInstance = requestAnimationFrame(() => this._raf());
    }
  };

  // node_modules/.pnpm/mouse-follower@1.1.2/node_modules/mouse-follower/dist/index.module.js
  init_live_reload();
  var MouseFollower = /* @__PURE__ */ function() {
    MouseFollower2.registerGSAP = function registerGSAP(gsap6) {
      MouseFollower2.gsap = gsap6;
    };
    function MouseFollower2(options) {
      if (options === void 0) {
        options = {};
      }
      this.options = Object.assign({}, {
        el: null,
        container: document.body,
        className: "mf-cursor",
        innerClassName: "mf-cursor-inner",
        textClassName: "mf-cursor-text",
        mediaClassName: "mf-cursor-media",
        mediaBoxClassName: "mf-cursor-media-box",
        iconSvgClassName: "mf-svgsprite",
        iconSvgNamePrefix: "-",
        iconSvgSrc: "",
        dataAttr: "cursor",
        hiddenState: "-hidden",
        textState: "-text",
        iconState: "-icon",
        activeState: "-active",
        mediaState: "-media",
        stateDetection: {
          "-pointer": "a,button"
        },
        visible: true,
        visibleOnState: false,
        speed: 0.55,
        ease: "expo.out",
        overwrite: true,
        skewing: 0,
        skewingText: 2,
        skewingIcon: 2,
        skewingMedia: 2,
        skewingDelta: 1e-3,
        skewingDeltaMax: 0.15,
        stickDelta: 0.15,
        showTimeout: 0,
        hideOnLeave: true,
        hideTimeout: 300,
        hideMediaTimeout: 300,
        initialPos: [-window.innerWidth, -window.innerHeight]
      }, options);
      if (this.options.visible && options.stateDetection == null)
        this.options.stateDetection["-hidden"] = "iframe";
      this.gsap = MouseFollower2.gsap || window.gsap;
      this.el = typeof this.options.el === "string" ? document.querySelector(this.options.el) : this.options.el;
      this.container = typeof this.options.container === "string" ? document.querySelector(this.options.container) : this.options.container;
      this.skewing = this.options.skewing;
      this.pos = {
        x: this.options.initialPos[0],
        y: this.options.initialPos[1]
      };
      this.vel = {
        x: 0,
        y: 0
      };
      this.event = {};
      this.events = [];
      this.init();
    }
    var _proto = MouseFollower2.prototype;
    _proto.init = function init4() {
      if (!this.el)
        this.create();
      this.createSetter();
      this.bind();
      this.render(true);
      this.ticker = this.render.bind(this, false);
      this.gsap.ticker.add(this.ticker);
    };
    _proto.create = function create() {
      this.el = document.createElement("div");
      this.el.className = this.options.className;
      this.el.classList.add(this.options.hiddenState);
      this.inner = document.createElement("div");
      this.inner.className = this.options.innerClassName;
      this.text = document.createElement("div");
      this.text.className = this.options.textClassName;
      this.media = document.createElement("div");
      this.media.className = this.options.mediaClassName;
      this.mediaBox = document.createElement("div");
      this.mediaBox.className = this.options.mediaBoxClassName;
      this.media.appendChild(this.mediaBox);
      this.inner.appendChild(this.media);
      this.inner.appendChild(this.text);
      this.el.appendChild(this.inner);
      this.container.appendChild(this.el);
    };
    _proto.createSetter = function createSetter() {
      this.setter = {
        x: this.gsap.quickSetter(this.el, "x", "px"),
        y: this.gsap.quickSetter(this.el, "y", "px"),
        rotation: this.gsap.quickSetter(this.el, "rotation", "deg"),
        scaleX: this.gsap.quickSetter(this.el, "scaleX"),
        scaleY: this.gsap.quickSetter(this.el, "scaleY"),
        wc: this.gsap.quickSetter(this.el, "willChange"),
        inner: {
          rotation: this.gsap.quickSetter(this.inner, "rotation", "deg")
        }
      };
    };
    _proto.bind = function bind() {
      var _this = this;
      this.event.mouseleave = function() {
        return _this.hide();
      };
      this.event.mouseenter = function() {
        return _this.show();
      };
      this.event.mousedown = function() {
        return _this.addState(_this.options.activeState);
      };
      this.event.mouseup = function() {
        return _this.removeState(_this.options.activeState);
      };
      this.event.mousemoveOnce = function() {
        return _this.show();
      };
      this.event.mousemove = function(e3) {
        _this.gsap.to(_this.pos, {
          x: _this.stick ? _this.stick.x - (_this.stick.x - e3.clientX) * _this.options.stickDelta : e3.clientX,
          y: _this.stick ? _this.stick.y - (_this.stick.y - e3.clientY) * _this.options.stickDelta : e3.clientY,
          overwrite: _this.options.overwrite,
          ease: _this.options.ease,
          duration: _this.visible ? _this.options.speed : 0,
          onUpdate: function onUpdate() {
            return _this.vel = {
              x: e3.clientX - _this.pos.x,
              y: e3.clientY - _this.pos.y
            };
          }
        });
      };
      this.event.mouseover = function(e3) {
        for (var target = e3.target; target && target !== _this.container; target = target.parentNode) {
          if (e3.relatedTarget && target.contains(e3.relatedTarget))
            break;
          for (var state in _this.options.stateDetection) {
            if (target.matches(_this.options.stateDetection[state]))
              _this.addState(state);
          }
          if (_this.options.dataAttr) {
            var params = _this.getFromDataset(target);
            if (params.state)
              _this.addState(params.state);
            if (params.text)
              _this.setText(params.text);
            if (params.icon)
              _this.setIcon(params.icon);
            if (params.img)
              _this.setImg(params.img);
            if (params.video)
              _this.setVideo(params.video);
            if (typeof params.show !== "undefined")
              _this.show();
            if (typeof params.stick !== "undefined")
              _this.setStick(params.stick || target);
          }
        }
      };
      this.event.mouseout = function(e3) {
        for (var target = e3.target; target && target !== _this.container; target = target.parentNode) {
          if (e3.relatedTarget && target.contains(e3.relatedTarget))
            break;
          for (var state in _this.options.stateDetection) {
            if (target.matches(_this.options.stateDetection[state]))
              _this.removeState(state);
          }
          if (_this.options.dataAttr) {
            var params = _this.getFromDataset(target);
            if (params.state)
              _this.removeState(params.state);
            if (params.text)
              _this.removeText();
            if (params.icon)
              _this.removeIcon();
            if (params.img)
              _this.removeImg();
            if (params.video)
              _this.removeVideo();
            if (typeof params.show !== "undefined")
              _this.hide();
            if (typeof params.stick !== "undefined")
              _this.removeStick();
          }
        }
      };
      if (this.options.hideOnLeave) {
        this.container.addEventListener("mouseleave", this.event.mouseleave, {
          passive: true
        });
      }
      if (this.options.visible) {
        this.container.addEventListener("mouseenter", this.event.mouseenter, {
          passive: true
        });
      }
      if (this.options.activeState) {
        this.container.addEventListener("mousedown", this.event.mousedown, {
          passive: true
        });
        this.container.addEventListener("mouseup", this.event.mouseup, {
          passive: true
        });
      }
      this.container.addEventListener("mousemove", this.event.mousemove, {
        passive: true
      });
      if (this.options.visible) {
        this.container.addEventListener("mousemove", this.event.mousemoveOnce, {
          passive: true,
          once: true
        });
      }
      if (this.options.stateDetection || this.options.dataAttr) {
        this.container.addEventListener("mouseover", this.event.mouseover, {
          passive: true
        });
        this.container.addEventListener("mouseout", this.event.mouseout, {
          passive: true
        });
      }
    };
    _proto.render = function render3(force) {
      if (force !== true && (this.vel.y === 0 || this.vel.x === 0)) {
        this.setter.wc("auto");
        return;
      }
      this.trigger("render");
      this.setter.wc("transform");
      this.setter.x(this.pos.x);
      this.setter.y(this.pos.y);
      if (this.skewing) {
        var distance = Math.sqrt(Math.pow(this.vel.x, 2) + Math.pow(this.vel.y, 2));
        var scale = Math.min(distance * this.options.skewingDelta, this.options.skewingDeltaMax) * this.skewing;
        var angle = Math.atan2(this.vel.y, this.vel.x) * 180 / Math.PI;
        this.setter.rotation(angle);
        this.setter.scaleX(1 + scale);
        this.setter.scaleY(1 - scale);
        this.setter.inner.rotation(-angle);
      }
    };
    _proto.show = function show() {
      var _this2 = this;
      this.trigger("show");
      clearInterval(this.visibleInt);
      this.visibleInt = setTimeout(function() {
        _this2.el.classList.remove(_this2.options.hiddenState);
        _this2.visible = true;
        _this2.render(true);
      }, this.options.showTimeout);
    };
    _proto.hide = function hide() {
      var _this3 = this;
      this.trigger("hide");
      clearInterval(this.visibleInt);
      this.el.classList.add(this.options.hiddenState);
      this.visibleInt = setTimeout(function() {
        return _this3.visible = false;
      }, this.options.hideTimeout);
    };
    _proto.toggle = function toggle(force) {
      if (force === true || force !== false && !this.visible) {
        this.show();
      } else {
        this.hide();
      }
    };
    _proto.addState = function addState(state) {
      var _this$el$classList;
      this.trigger("addState", state);
      if (state === this.options.hiddenState)
        return this.hide();
      (_this$el$classList = this.el.classList).add.apply(_this$el$classList, state.split(" "));
      if (this.options.visibleOnState)
        this.show();
    };
    _proto.removeState = function removeState(state) {
      var _this$el$classList2;
      this.trigger("removeState", state);
      if (state === this.options.hiddenState)
        return this.show();
      (_this$el$classList2 = this.el.classList).remove.apply(_this$el$classList2, state.split(" "));
      if (this.options.visibleOnState && this.el.className === this.options.className)
        this.hide();
    };
    _proto.toggleState = function toggleState(state, force) {
      if (force === true || force !== false && !this.el.classList.contains(state)) {
        this.addState(state);
      } else {
        this.removeState(state);
      }
    };
    _proto.setSkewing = function setSkewing(value) {
      this.gsap.to(this, {
        skewing: value
      });
    };
    _proto.removeSkewing = function removeSkewing() {
      this.gsap.to(this, {
        skewing: this.options.skewing
      });
    };
    _proto.setStick = function setStick(element) {
      var el = typeof element === "string" ? document.querySelector(element) : element;
      var rect = el.getBoundingClientRect();
      this.stick = {
        y: rect.top + rect.height / 2,
        x: rect.left + rect.width / 2
      };
    };
    _proto.removeStick = function removeStick() {
      this.stick = false;
    };
    _proto.setText = function setText(text) {
      this.text.innerHTML = text;
      this.addState(this.options.textState);
      this.setSkewing(this.options.skewingText);
    };
    _proto.removeText = function removeText() {
      this.removeState(this.options.textState);
      this.removeSkewing();
    };
    _proto.setIcon = function setIcon(name, style) {
      if (style === void 0) {
        style = "";
      }
      this.text.innerHTML = "<svg class='" + this.options.iconSvgClassName + " " + this.options.iconSvgNamePrefix + name + "'" + (" style='" + style + "'><use xlink:href='" + this.options.iconSvgSrc + "#" + name + "'></use></svg>");
      this.addState(this.options.iconState);
      this.setSkewing(this.options.skewingIcon);
    };
    _proto.removeIcon = function removeIcon() {
      this.removeState(this.options.iconState);
      this.removeSkewing();
    };
    _proto.setMedia = function setMedia(element) {
      var _this4 = this;
      clearTimeout(this.mediaInt);
      if (element) {
        this.mediaBox.innerHTML = "";
        this.mediaBox.appendChild(element);
      }
      this.mediaInt = setTimeout(function() {
        return _this4.addState(_this4.options.mediaState);
      }, 20);
      this.setSkewing(this.options.skewingMedia);
    };
    _proto.removeMedia = function removeMedia() {
      var _this5 = this;
      clearTimeout(this.mediaInt);
      this.removeState(this.options.mediaState);
      this.mediaInt = setTimeout(function() {
        return _this5.mediaBox.innerHTML = "";
      }, this.options.hideMediaTimeout);
      this.removeSkewing();
    };
    _proto.setImg = function setImg(url) {
      if (!this.mediaImg)
        this.mediaImg = new Image();
      if (this.mediaImg.src !== url)
        this.mediaImg.src = url;
      this.setMedia(this.mediaImg);
    };
    _proto.removeImg = function removeImg() {
      this.removeMedia();
    };
    _proto.setVideo = function setVideo(url) {
      if (!this.mediaVideo) {
        this.mediaVideo = document.createElement("video");
        this.mediaVideo.muted = true;
        this.mediaVideo.loop = true;
        this.mediaVideo.autoplay = true;
      }
      if (this.mediaVideo.src !== url) {
        this.mediaVideo.src = url;
        this.mediaVideo.load();
      }
      this.mediaVideo.play();
      this.setMedia(this.mediaVideo);
    };
    _proto.removeVideo = function removeVideo() {
      if (this.mediaVideo && this.mediaVideo.readyState > 2)
        this.mediaVideo.pause();
      this.removeMedia();
    };
    _proto.on = function on(event, callback) {
      if (!(this.events[event] instanceof Array))
        this.off(event);
      this.events[event].push(callback);
    };
    _proto.off = function off(event, callback) {
      if (callback) {
        this.events[event] = this.events[event].filter(function(f) {
          return f !== callback;
        });
      } else {
        this.events[event] = [];
      }
    };
    _proto.trigger = function trigger(event) {
      var _arguments = arguments, _this6 = this;
      if (!this.events[event])
        return;
      this.events[event].forEach(function(f) {
        return f.call.apply(f, [_this6, _this6].concat([].slice.call(_arguments, 1)));
      });
    };
    _proto.getFromDataset = function getFromDataset(element) {
      var dataset = element.dataset;
      return {
        state: dataset[this.options.dataAttr],
        show: dataset[this.options.dataAttr + "Show"],
        text: dataset[this.options.dataAttr + "Text"],
        icon: dataset[this.options.dataAttr + "Icon"],
        img: dataset[this.options.dataAttr + "Img"],
        video: dataset[this.options.dataAttr + "Video"],
        stick: dataset[this.options.dataAttr + "Stick"]
      };
    };
    _proto.destroy = function destroy() {
      this.trigger("destroy");
      this.gsap.ticker.remove(this.ticker);
      this.container.removeEventListener("mouseleave", this.event.mouseleave);
      this.container.removeEventListener("mouseenter", this.event.mouseenter);
      this.container.removeEventListener("mousedown", this.event.mousedown);
      this.container.removeEventListener("mouseup", this.event.mouseup);
      this.container.removeEventListener("mousemove", this.event.mousemove);
      this.container.removeEventListener("mousemove", this.event.mousemoveOnce);
      this.container.removeEventListener("mouseover", this.event.mouseover);
      this.container.removeEventListener("mouseout", this.event.mouseout);
      if (this.el) {
        this.container.removeChild(this.el);
        this.el = null;
        this.mediaImg = null;
        this.mediaVideo = null;
      }
    };
    return MouseFollower2;
  }();

  // src/home-page/globalCode.ts
  function initializeGlobal() {
    const locomotiveScroll = new h({
      lenisOptions: {
        lerp: 0.1,
        duration: 0.7,
        wheelMultiplier: 1,
        easing: (t2) => Math.min(1, 1.001 - Math.pow(2, -10 * t2))
        // https://www.desmos.com/calculator/brs54l4xou
      }
    });
    MouseFollower.registerGSAP(gsapWithCSS);
    const cursor = new MouseFollower({});
    const el = document.querySelectorAll(".h1-main-home");
    el.forEach(function(element) {
      element.addEventListener("mouseenter", () => {
        cursor.setImg;
      });
      element.addEventListener("mouseleave", () => {
        cursor.removeImg();
      });
    });
    new WordPlay({
      className: "h1-main-home",
      mode: "letter",
      offset: 100,
      speed: 0.7,
      delay: 0.025
    });
  }

  // src/home-page/hoverStaggerEffect.ts
  init_live_reload();

  // src/home-page/utils.ts
  init_live_reload();
  function attr(defaultVal, attrVal) {
    if (typeof attrVal !== "string" || attrVal.trim() === "")
      return defaultVal;
    if (attrVal === "true" && typeof defaultVal === "boolean")
      return true;
    if (attrVal === "false" && typeof defaultVal === "boolean")
      return false;
    if (isNaN(attrVal) && typeof defaultVal === "string")
      return attrVal;
    if (!isNaN(attrVal) && typeof defaultVal === "number")
      return +attrVal;
    return defaultVal;
  }

  // src/home-page/hoverStaggerEffect.ts
  function initializeHoverStaggerEffect() {
    $("[hoverstagger='link']").each(function() {
      const text1 = $(this).find("[hoverstagger='text']").eq(0);
      const text2 = $(this).find("[hoverstagger='text']").eq(1);
      const duration = attr(0.3, $(this).attr("hoverstagger-duration"));
      const staggerDuration = duration * 0.6666666667;
      const tl = gsapWithCSS.timeline({ paused: true });
      tl.to(text1.find(".char"), {
        yPercent: -100,
        duration,
        stagger: { amount: staggerDuration }
      });
      tl.from(
        text2.find(".char"),
        {
          yPercent: 100,
          duration,
          stagger: { amount: staggerDuration }
        },
        0
      );
      $(this).on("mouseenter", () => tl.restart());
    });
  }

  // src/home-page/intersectionObservers.ts
  init_live_reload();
  function initializeIntersectionObservers() {
    const observerOptions = { threshold: 0 };
    const contactObserver = new IntersectionObserver((entries2) => {
      entries2.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".button_main").forEach((btn) => btn.classList.add("scroll"));
          document.querySelectorAll(".section_main_hero").forEach((section) => section.classList.remove("scroll"));
        }
      });
    }, observerOptions);
    const heroObserver = new IntersectionObserver((entries2) => {
      entries2.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".button_main").forEach((btn) => btn.classList.remove("scroll"));
        }
      });
    }, observerOptions);
    document.querySelectorAll(".section_contato").forEach((el) => contactObserver.observe(el));
    document.querySelectorAll(".section_main_hero").forEach((el) => heroObserver.observe(el));
  }

  // src/home-page/marqueeAnimation.ts
  init_live_reload();
  function initializeMarqueeAnimation() {
    $(".marquee").each(function() {
      const track = $(this).find(".marquee_track");
      const items = $(this).find(".marquee_item");
      const tl = gsapWithCSS.timeline({
        repeat: -1,
        defaults: { ease: "expo.inOut", duration: 1, delay: 1 }
      });
      items.each((index, item) => {
        tl.to(track, { yPercent: (index + 1) * -100 });
      });
      items.first().clone().appendTo(track);
    });
  }

  // src/home-page/scrollEffect.ts
  init_live_reload();
  var import_sticksy = __toESM(require_sticksy2(), 1);
  function initializeScrollEffect() {
    const stickyConfig = {
      topSpacing: 90,
      listen: true
    };
    const stickyEl = new Sticksy(".visual_text_left_elements", stickyConfig);
    stickyEl.onStateChanged = function(state) {
      if (state === "fixed") {
        stickyEl.nodeRef.classList.add("widget--sticky");
      } else {
        stickyEl.nodeRef.classList.remove("widget--sticky");
      }
    };
    gsapWithCSS.registerPlugin(ScrollTrigger2);
    const textItems = document.querySelectorAll(".text_item");
    textItems.forEach((textItem, index) => {
      const linkItem = document.querySelector(`.link_ref_item[href="#${textItem.id}"]`);
      ScrollTrigger2.create({
        trigger: textItem,
        start: "top center",
        end: "bottom center",
        onEnter: () => updateState(textItem, linkItem, true),
        onEnterBack: () => updateState(textItem, linkItem, true),
        onLeave: () => updateState(textItem, linkItem, false),
        onLeaveBack: () => updateState(textItem, linkItem, false)
      });
    });
    function updateState(textItem, linkItem, isActive) {
      if (isActive) {
        textItem.classList.add("active");
        linkItem.classList.add("current");
      } else {
        textItem.classList.remove("active");
        linkItem.classList.remove("current");
      }
    }
    document.querySelectorAll(".link_ref_item").forEach((link) => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          gsapWithCSS.to(window, { duration: 1, scrollTo: targetElement, ease: "power2.inOut" });
        }
      });
    });
  }

  // src/home-page/scrollFlipAnimation.ts
  init_live_reload();
  function initializeScrollFlipAnimation() {
    gsapWithCSS.registerPlugin(ScrollTrigger2, Flip);
    ScrollTrigger2.normalizeScroll(true);
    $("[tr-scrollflip-element='component']").each(function(index) {
      const componentEl = $(this);
      const originEl = componentEl.find("[tr-scrollflip-element='origin']");
      const targetEl = componentEl.find("[tr-scrollflip-element='target']");
      const scrubStartEl = componentEl.find("[tr-scrollflip-scrubstart]");
      const scrubEndEl = componentEl.find("[tr-scrollflip-scrubend]");
      const settings = {
        start: attr("top top", scrubStartEl.attr("tr-scrollflip-scrubstart")),
        end: attr("bottom bottom", scrubEndEl.attr("tr-scrollflip-scrubend")),
        staggerSpeed: attr(0, componentEl.attr("tr-scrollflip-staggerspeed")),
        staggerDirection: attr("start", componentEl.attr("tr-scrollflip-staggerdirection")),
        scale: attr(false, componentEl.attr("tr-scrollflip-scale")),
        breakpoint: attr(0, componentEl.attr("tr-scrollflip-breakpoint"))
      };
      originEl.each((i2, el) => {
        const flipId = `${index}-${i2}`;
        $(el).attr("data-flip-id", flipId);
        targetEl.eq(i2).attr("data-flip-id", flipId);
      });
      function createTimeline() {
        $("body").addClass("scrollflip-relative");
        gsapWithCSS.matchMedia().add(`(min-width: ${settings.breakpoint}px)`, () => {
          const state = Flip.getState(originEl);
          const timeline2 = gsapWithCSS.timeline({
            scrollTrigger: {
              trigger: scrubStartEl,
              endTrigger: scrubEndEl,
              start: settings.start,
              end: settings.end,
              scrub: true
            }
          });
          timeline2.add(
            Flip.from(state, {
              targets: targetEl,
              scale: settings.scale,
              stagger: { amount: settings.staggerSpeed, from: settings.staggerDirection }
            })
          );
        });
        $("body").removeClass("scrollflip-relative");
      }
      createTimeline();
      window.addEventListener("resize", gsapWithCSS.debounce(createTimeline, 250));
    });
  }

  // src/home-page/textSplitting.ts
  init_live_reload();

  // node_modules/.pnpm/split-type@0.3.4/node_modules/split-type/dist/index.js
  init_live_reload();
  (function() {
    function append() {
      var length = arguments.length;
      for (var i2 = 0; i2 < length; i2++) {
        var node = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
        if (node.nodeType === 1 || node.nodeType === 11)
          this.appendChild(node);
        else
          this.appendChild(document.createTextNode(String(node)));
      }
    }
    function replaceChildren() {
      while (this.lastChild) {
        this.removeChild(this.lastChild);
      }
      if (arguments.length)
        this.append.apply(this, arguments);
    }
    function replaceWith() {
      var parent = this.parentNode;
      for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }
      var i2 = nodes.length;
      if (!parent)
        return;
      if (!i2)
        parent.removeChild(this);
      while (i2--) {
        var node = nodes[i2];
        if (typeof node !== "object") {
          node = this.ownerDocument.createTextNode(node);
        } else if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
        if (!i2) {
          parent.replaceChild(node, this);
        } else {
          parent.insertBefore(this.previousSibling, node);
        }
      }
    }
    if (typeof Element !== "undefined") {
      if (!Element.prototype.append) {
        Element.prototype.append = append;
        DocumentFragment.prototype.append = append;
      }
      if (!Element.prototype.replaceChildren) {
        Element.prototype.replaceChildren = replaceChildren;
        DocumentFragment.prototype.replaceChildren = replaceChildren;
      }
      if (!Element.prototype.replaceWith) {
        Element.prototype.replaceWith = replaceWith;
        DocumentFragment.prototype.replaceWith = replaceWith;
      }
    }
  })();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i2) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i2 = arr[Symbol.iterator](), _s; !(_n = (_s = _i2.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i2["return"] != null)
          _i2["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o2, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function extend(target, object) {
    return Object.getOwnPropertyNames(Object(target)).reduce(function(extended, key) {
      var currentValue = Object.getOwnPropertyDescriptor(Object(target), key);
      var newValue = Object.getOwnPropertyDescriptor(Object(object), key);
      return Object.defineProperty(extended, key, newValue || currentValue);
    }, {});
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isArray(value) {
    return Array.isArray(value);
  }
  function parseSettings() {
    var settings = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var object = extend(settings);
    var types;
    if (object.types !== void 0) {
      types = object.types;
    } else if (object.split !== void 0) {
      types = object.split;
    }
    if (types !== void 0) {
      object.types = (isString(types) || isArray(types) ? String(types) : "").split(",").map(function(type) {
        return String(type).trim();
      }).filter(function(type) {
        return /((line)|(word)|(char))/i.test(type);
      });
    }
    if (object.absolute || object.position) {
      object.absolute = object.absolute || /absolute/.test(settings.position);
    }
    return object;
  }
  function parseTypes(value) {
    var types = isString(value) || isArray(value) ? String(value) : "";
    return {
      none: !types,
      lines: /line/i.test(types),
      words: /word/i.test(types),
      chars: /char/i.test(types)
    };
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isNode(input) {
    return isObject(input) && /^(1|3|11)$/.test(input.nodeType);
  }
  function isLength(value) {
    return typeof value === "number" && value > -1 && value % 1 === 0;
  }
  function isArrayLike(value) {
    return isObject(value) && isLength(value.length);
  }
  function toArray3(value) {
    if (isArray(value))
      return value;
    if (value == null)
      return [];
    return isArrayLike(value) ? Array.prototype.slice.call(value) : [value];
  }
  function getTargetElements(target) {
    var elements = target;
    if (isString(target)) {
      if (/^(#[a-z]\w+)$/.test(target.trim())) {
        elements = document.getElementById(target.trim().slice(1));
      } else {
        elements = document.querySelectorAll(target);
      }
    }
    return toArray3(elements).reduce(function(result, element) {
      return [].concat(_toConsumableArray(result), _toConsumableArray(toArray3(element).filter(isNode)));
    }, []);
  }
  var entries = Object.entries;
  var expando = "_splittype";
  var cache = {};
  var uid = 0;
  function set(owner, key, value) {
    if (!isObject(owner)) {
      console.warn("[data.set] owner is not an object");
      return null;
    }
    var id = owner[expando] || (owner[expando] = ++uid);
    var data = cache[id] || (cache[id] = {});
    if (value === void 0) {
      if (!!key && Object.getPrototypeOf(key) === Object.prototype) {
        cache[id] = _objectSpread2(_objectSpread2({}, data), key);
      }
    } else if (key !== void 0) {
      data[key] = value;
    }
    return value;
  }
  function get(owner, key) {
    var id = isObject(owner) ? owner[expando] : null;
    var data = id && cache[id] || {};
    if (key === void 0) {
      return data;
    }
    return data[key];
  }
  function remove(element) {
    var id = element && element[expando];
    if (id) {
      delete element[id];
      delete cache[id];
    }
  }
  function clear() {
    Object.keys(cache).forEach(function(key) {
      delete cache[key];
    });
  }
  function cleanup() {
    entries(cache).forEach(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], _ref2$ = _ref2[1], isRoot = _ref2$.isRoot, isSplit = _ref2$.isSplit;
      if (!isRoot || !isSplit) {
        cache[id] = null;
        delete cache[id];
      }
    });
  }
  function toWords(value) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ";
    var string = value ? String(value) : "";
    return string.trim().replace(/\s+/g, " ").split(separator);
  }
  var rsAstralRange = "\\ud800-\\udfff";
  var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
  var rsComboSymbolsRange = "\\u20d0-\\u20f0";
  var rsVarRange = "\\ufe0e\\ufe0f";
  var rsAstral = "[".concat(rsAstralRange, "]");
  var rsCombo = "[".concat(rsComboMarksRange).concat(rsComboSymbolsRange, "]");
  var rsFitz = "\\ud83c[\\udffb-\\udfff]";
  var rsModifier = "(?:".concat(rsCombo, "|").concat(rsFitz, ")");
  var rsNonAstral = "[^".concat(rsAstralRange, "]");
  var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  var rsZWJ = "\\u200d";
  var reOptMod = "".concat(rsModifier, "?");
  var rsOptVar = "[".concat(rsVarRange, "]?");
  var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
  var rsSeq = rsOptVar + reOptMod + rsOptJoin;
  var rsSymbol = "(?:".concat(["".concat(rsNonAstral).concat(rsCombo, "?"), rsCombo, rsRegional, rsSurrPair, rsAstral].join("|"), "\n)");
  var reUnicode = RegExp("".concat(rsFitz, "(?=").concat(rsFitz, ")|").concat(rsSymbol).concat(rsSeq), "g");
  var unicodeRange = [rsZWJ, rsAstralRange, rsComboMarksRange, rsComboSymbolsRange, rsVarRange];
  var reHasUnicode = RegExp("[".concat(unicodeRange.join(""), "]"));
  function asciiToArray(string) {
    return string.split("");
  }
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  function toString(value) {
    return value == null ? "" : String(value);
  }
  function toChars(string) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    string = toString(string);
    if (string && isString(string)) {
      if (!separator && hasUnicode(string)) {
        return stringToArray(string);
      }
    }
    return string.split(separator);
  }
  function createElement(name, attributes) {
    var element = document.createElement(name);
    if (!attributes) {
      return element;
    }
    Object.keys(attributes).forEach(function(attribute) {
      var rawValue = attributes[attribute];
      var value = isString(rawValue) ? rawValue.trim() : rawValue;
      if (value === null || value === "")
        return;
      if (attribute === "children") {
        element.append.apply(element, _toConsumableArray(toArray3(value)));
      } else {
        element.setAttribute(attribute, value);
      }
    });
    return element;
  }
  var defaults2 = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: false,
    tagName: "div"
  };
  function splitWordsAndChars(textNode, settings) {
    settings = extend(defaults2, settings);
    var types = parseTypes(settings.types);
    var TAG_NAME = settings.tagName;
    var VALUE = textNode.nodeValue;
    var splitText = document.createDocumentFragment();
    var words = [];
    var chars = [];
    if (/^\s/.test(VALUE)) {
      splitText.append(" ");
    }
    words = toWords(VALUE).reduce(function(result, WORD, idx, arr) {
      var wordElement;
      var characterElementsForCurrentWord;
      if (types.chars) {
        characterElementsForCurrentWord = toChars(WORD).map(function(CHAR) {
          var characterElement = createElement(TAG_NAME, {
            "class": "".concat(settings.splitClass, " ").concat(settings.charClass),
            style: "display: inline-block;",
            children: CHAR
          });
          set(characterElement, "isChar", true);
          chars = [].concat(_toConsumableArray(chars), [characterElement]);
          return characterElement;
        });
      }
      if (types.words || types.lines) {
        wordElement = createElement(TAG_NAME, {
          "class": "".concat(settings.wordClass, " ").concat(settings.splitClass),
          style: "display: inline-block; ".concat(types.words && settings.absolute ? "position: relative;" : ""),
          children: types.chars ? characterElementsForCurrentWord : WORD
        });
        set(wordElement, {
          isWord: true,
          isWordStart: true,
          isWordEnd: true
        });
        splitText.appendChild(wordElement);
      } else {
        characterElementsForCurrentWord.forEach(function(characterElement) {
          splitText.appendChild(characterElement);
        });
      }
      if (idx < arr.length - 1) {
        splitText.append(" ");
      }
      return types.words ? result.concat(wordElement) : result;
    }, []);
    if (/\s$/.test(VALUE)) {
      splitText.append(" ");
    }
    textNode.replaceWith(splitText);
    return {
      words,
      chars
    };
  }
  function split(node, settings) {
    var type = node.nodeType;
    var wordsAndChars = {
      words: [],
      chars: []
    };
    if (!/(1|3|11)/.test(type)) {
      return wordsAndChars;
    }
    if (type === 3 && /\S/.test(node.nodeValue)) {
      return splitWordsAndChars(node, settings);
    }
    var childNodes = toArray3(node.childNodes);
    if (childNodes.length) {
      set(node, "isSplit", true);
      if (!get(node).isRoot) {
        node.style.display = "inline-block";
        node.style.position = "relative";
        var nextSibling = node.nextSibling;
        var prevSibling = node.previousSibling;
        var text = node.textContent || "";
        var textAfter = nextSibling ? nextSibling.textContent : " ";
        var textBefore = prevSibling ? prevSibling.textContent : " ";
        set(node, {
          isWordEnd: /\s$/.test(text) || /^\s/.test(textAfter),
          isWordStart: /^\s/.test(text) || /\s$/.test(textBefore)
        });
      }
    }
    return childNodes.reduce(function(result, child) {
      var _split = split(child, settings), words = _split.words, chars = _split.chars;
      return {
        words: [].concat(_toConsumableArray(result.words), _toConsumableArray(words)),
        chars: [].concat(_toConsumableArray(result.chars), _toConsumableArray(chars))
      };
    }, wordsAndChars);
  }
  function getPosition(node, isWord, settings, scrollPos) {
    if (!settings.absolute) {
      return {
        top: isWord ? node.offsetTop : null
      };
    }
    var parent = node.offsetParent;
    var _scrollPos = _slicedToArray(scrollPos, 2), scrollX = _scrollPos[0], scrollY = _scrollPos[1];
    var parentX = 0;
    var parentY = 0;
    if (parent && parent !== document.body) {
      var parentRect = parent.getBoundingClientRect();
      parentX = parentRect.x + scrollX;
      parentY = parentRect.y + scrollY;
    }
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height, x = _node$getBoundingClie.x, y = _node$getBoundingClie.y;
    var top = y + scrollY - parentY;
    var left = x + scrollX - parentX;
    return {
      width,
      height,
      top,
      left
    };
  }
  function unSplitWords(element) {
    if (!get(element).isWord) {
      toArray3(element.children).forEach(function(child) {
        return unSplitWords(child);
      });
    } else {
      remove(element);
      element.replaceWith.apply(element, _toConsumableArray(element.childNodes));
    }
  }
  var createFragment = function createFragment2() {
    return document.createDocumentFragment();
  };
  function repositionAfterSplit(element, settings, scrollPos) {
    var types = parseTypes(settings.types);
    var TAG_NAME = settings.tagName;
    var nodes = element.getElementsByTagName("*");
    var wordsInEachLine = [];
    var wordsInCurrentLine = [];
    var lineOffsetY = null;
    var elementHeight;
    var elementWidth;
    var contentBox;
    var lines = [];
    var parent = element.parentElement;
    var nextSibling = element.nextElementSibling;
    var splitText = createFragment();
    var cs = window.getComputedStyle(element);
    var align = cs.textAlign;
    var fontSize = parseFloat(cs.fontSize);
    var lineThreshold = fontSize * 0.2;
    if (settings.absolute) {
      contentBox = {
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth
      };
      elementWidth = element.offsetWidth;
      elementHeight = element.offsetHeight;
      set(element, {
        cssWidth: element.style.width,
        cssHeight: element.style.height
      });
    }
    toArray3(nodes).forEach(function(node) {
      var isWordLike = node.parentElement === element;
      var _getPosition = getPosition(node, isWordLike, settings, scrollPos), width = _getPosition.width, height = _getPosition.height, top = _getPosition.top, left = _getPosition.left;
      if (/^br$/i.test(node.nodeName))
        return;
      if (types.lines && isWordLike) {
        if (lineOffsetY === null || top - lineOffsetY >= lineThreshold) {
          lineOffsetY = top;
          wordsInEachLine.push(wordsInCurrentLine = []);
        }
        wordsInCurrentLine.push(node);
      }
      if (settings.absolute) {
        set(node, {
          top,
          left,
          width,
          height
        });
      }
    });
    if (parent) {
      parent.removeChild(element);
    }
    if (types.lines) {
      lines = wordsInEachLine.map(function(wordsInThisLine) {
        var lineElement = createElement(TAG_NAME, {
          "class": "".concat(settings.splitClass, " ").concat(settings.lineClass),
          style: "display: block; text-align: ".concat(align, "; width: 100%;")
        });
        set(lineElement, "isLine", true);
        var lineDimensions = {
          height: 0,
          top: 1e4
        };
        splitText.appendChild(lineElement);
        wordsInThisLine.forEach(function(wordOrElement, idx, arr) {
          var _data$get = get(wordOrElement), isWordEnd = _data$get.isWordEnd, top = _data$get.top, height = _data$get.height;
          var next = arr[idx + 1];
          lineDimensions.height = Math.max(lineDimensions.height, height);
          lineDimensions.top = Math.min(lineDimensions.top, top);
          lineElement.appendChild(wordOrElement);
          if (isWordEnd && get(next).isWordStart) {
            lineElement.append(" ");
          }
        });
        if (settings.absolute) {
          set(lineElement, {
            height: lineDimensions.height,
            top: lineDimensions.top
          });
        }
        return lineElement;
      });
      if (!types.words) {
        unSplitWords(splitText);
      }
      element.replaceChildren(splitText);
    }
    if (settings.absolute) {
      element.style.width = "".concat(element.style.width || elementWidth, "px");
      element.style.height = "".concat(elementHeight, "px");
      toArray3(nodes).forEach(function(node) {
        var _data$get2 = get(node), isLine = _data$get2.isLine, top = _data$get2.top, left = _data$get2.left, width = _data$get2.width, height = _data$get2.height;
        var parentData = get(node.parentElement);
        var isChildOfLineNode = !isLine && parentData.isLine;
        node.style.top = "".concat(isChildOfLineNode ? top - parentData.top : top, "px");
        node.style.left = isLine ? "".concat(contentBox.left, "px") : "".concat(left - (isChildOfLineNode ? contentBox.left : 0), "px");
        node.style.height = "".concat(height, "px");
        node.style.width = isLine ? "".concat(contentBox.width, "px") : "".concat(width, "px");
        node.style.position = "absolute";
      });
    }
    if (parent) {
      if (nextSibling)
        parent.insertBefore(element, nextSibling);
      else
        parent.appendChild(element);
    }
    return lines;
  }
  var _defaults3 = extend(defaults2, {});
  var SplitType = /* @__PURE__ */ function() {
    _createClass2(SplitType2, null, [{
      key: "clearData",
      /**
       * CLears all data
       */
      value: function clearData() {
        clear();
      }
      /**
       * The default settings for all splitType instances
       * @static
       */
    }, {
      key: "setDefaults",
      /**
       * Sets the default settings for all SplitType instances.
       * The provided object will be merged with the existing defaults objects.
       *
       * @param {Object} settings an object containing the settings to override
       * @returns {Object} the new default settings
       * @public
       * @static
       * @example
       * SplitType.setDefaults({ "position": "absolute" })
       */
      value: function setDefaults(options) {
        _defaults3 = extend(_defaults3, parseSettings(options));
        return defaults2;
      }
      /**
       * Revert target elements to their original html content
       * Has no effect on that
       *
       * @param {any} elements The target elements to revert. One of:
       *  - {string} A css selector
       *  - {HTMLElement} A single element
       * -  {NodeList} A NodeList or collection
       *  - {HTMLElement[]} An array of Elements
       * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
       * @static
       */
    }, {
      key: "revert",
      value: function revert(elements) {
        getTargetElements(elements).forEach(function(element) {
          var _data$get = get(element), isSplit = _data$get.isSplit, html = _data$get.html, cssWidth = _data$get.cssWidth, cssHeight = _data$get.cssHeight;
          if (isSplit) {
            element.innerHTML = html;
            element.style.width = cssWidth || "";
            element.style.height = cssHeight || "";
            remove(element);
          }
        });
      }
      /**
       * Creates a new SplitType instance
       * This static method provides a way to create a `SplitType` instance without
       * using the `new` keyword.
       *
       * @param {any} target The target elements to split. One of:
       *  - {string} A css selector
       *  - {HTMLElement} A single element
       * -  {NodeList} A NodeList or collection
       *  - {HTMLElement[]} An array of Elements
       * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
       * @param {Object} [options] Settings for the SplitType instance
       * @return {SplitType} the SplitType instance
       * @static
       */
    }, {
      key: "create",
      value: function create(target, options) {
        return new SplitType2(target, options);
      }
      /**
       * Creates a new `SplitType` instance
       *
       * @param {any} elements The target elements to split. One of:
       *  - {string} A css selector
       *  - {HTMLElement} A single element
       * -  {NodeList} A NodeList or collection
       *  - {HTMLElement[]} An array of Elements
       * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
       * @param {Object} [options] Settings for the SplitType instance
       */
    }, {
      key: "data",
      /**
       * The internal data store
       */
      get: function get2() {
        return cache;
      }
    }, {
      key: "defaults",
      get: function get2() {
        return _defaults3;
      },
      set: function set2(options) {
        _defaults3 = extend(_defaults3, parseSettings(options));
      }
    }]);
    function SplitType2(elements, options) {
      _classCallCheck(this, SplitType2);
      this.isSplit = false;
      this.settings = extend(_defaults3, parseSettings(options));
      this.elements = getTargetElements(elements);
      this.split();
    }
    _createClass2(SplitType2, [{
      key: "split",
      value: function split$1(options) {
        var _this = this;
        this.revert();
        this.elements.forEach(function(element) {
          set(element, "html", element.innerHTML);
        });
        this.lines = [];
        this.words = [];
        this.chars = [];
        var scrollPos = [window.pageXOffset, window.pageYOffset];
        if (options !== void 0) {
          this.settings = extend(this.settings, parseSettings(options));
        }
        var types = parseTypes(this.settings.types);
        if (types.none) {
          return;
        }
        this.elements.forEach(function(element) {
          set(element, "isRoot", true);
          var _split2 = split(element, _this.settings), words = _split2.words, chars = _split2.chars;
          _this.words = [].concat(_toConsumableArray(_this.words), _toConsumableArray(words));
          _this.chars = [].concat(_toConsumableArray(_this.chars), _toConsumableArray(chars));
        });
        this.elements.forEach(function(element) {
          if (types.lines || _this.settings.absolute) {
            var lines = repositionAfterSplit(element, _this.settings, scrollPos);
            _this.lines = [].concat(_toConsumableArray(_this.lines), _toConsumableArray(lines));
          }
        });
        this.isSplit = true;
        window.scrollTo(scrollPos[0], scrollPos[1]);
        cleanup();
      }
      /**
       * Reverts target element(s) back to their original html content
       * Deletes all stored data associated with the target elements
       * Resets the properties on the splitType instance
       *
       * @public
       */
    }, {
      key: "revert",
      value: function revert() {
        if (this.isSplit) {
          this.lines = null;
          this.words = null;
          this.chars = null;
          this.isSplit = false;
        }
        SplitType2.revert(this.elements);
      }
    }]);
    return SplitType2;
  }();

  // src/home-page/textSplitting.ts
  function initializeTextSplitting() {
    new SplitType("[text-split]", { types: "words,chars", tagName: "span" });
  }

  // src/home-page/videoPlayer.ts
  init_live_reload();
  var import_plyr = __toESM(require_plyr_min(), 1);
  var player;
  function initializeVideoPlayer() {
    player = new import_plyr.default("#player", {
      clickToPlay: false,
      controls: [],
      loop: { active: true }
    });
    return player;
  }
  function getPlayer() {
    return player;
  }

  // src/home-page/videoTransitionAnimation.ts
  init_live_reload();
  function initializeVideoTransitionAnimation() {
    const tl = gsapWithCSS.timeline({
      paused: true,
      defaults: { ease: "power1.inOut", duration: 1.8 },
      onComplete: () => {
        gsapWithCSS.set(".your-button", { opacity: 0, visibility: "hidden" });
        const player3 = getPlayer();
        if (player3 && typeof player3.play === "function") {
          player3.play();
          $(".nav_logo").addClass("hide");
          $(".close-icon").addClass("playing");
        } else {
          console.warn("Player de v\xEDdeo n\xE3o est\xE1 pronto ou n\xE3o tem m\xE9todo play");
        }
      }
    });
    tl.fromTo(".your-div", { height: "25%" }, { height: "100%" });
    tl.fromTo(".your-image", { scale: 1.8 }, { scale: 1 }, "<");
    $(".your-button").on("mousedown touchstart", () => tl.timeScale(1).play());
    $(".your-button").on("mouseup touchend", () => {
      if (tl.progress() < 1) {
        reverseAnimation();
      }
    });
    function reverseAnimation() {
      tl.timeScale(2).reverse();
      const player3 = getPlayer();
      if (player3 && typeof player3.pause === "function") {
        player3.pause();
      }
      $(".nav_logo").removeClass("hide");
      $(".close-icon").removeClass("playing");
      gsapWithCSS.set(".your-button", { opacity: 1, visibility: "visible" });
    }
    $(".close-icon").on("click", () => {
      if (tl.progress() === 1) {
        reverseAnimation();
      }
    });
    const player2 = getPlayer();
    player2.on("pause ended", () => {
      $(".nav_logo").removeClass("hide");
      $(".close-icon").removeClass("playing");
      gsapWithCSS.set(".your-button", { opacity: 1, visibility: "visible" });
    });
  }

  // src/home-page/index.ts
  gsapWithCSS.registerPlugin(Flip, ScrollTrigger2, CustomEase);
  initializeVideoPlayer();
  initializeMarqueeAnimation();
  initializeTextSplitting();
  initializeHoverStaggerEffect();
  initializeIntersectionObservers();
  initializeScrollFlipAnimation();
  initializeVideoTransitionAnimation();
  initializeGlobal();
  initializeScrollEffect();
  initializedragEffect();
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

mouse-follower/dist/index.module.js:
  (*!
   * Cuberto Mouse Follower
   * https://cuberto.com/
   *
   * @version 1.1.2
   * @author Cuberto, Artem Dordzhiev (Draft)
   *)
*/
//# sourceMappingURL=index.js.map
