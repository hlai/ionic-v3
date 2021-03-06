(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./overlay-portal", "./app", "../../config/config", "../../platform/platform", "../../gestures/gesture-controller", "../../transitions/transition-controller", "../../navigation/deep-linker", "../../platform/dom-controller", "./click-block", "./app-root"], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */ 
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./overlay-portal");
    var i2 = require("./app");
    var i3 = require("../../config/config");
    var i4 = require("../../platform/platform");
    var i5 = require("../../gestures/gesture-controller");
    var i6 = require("../../transitions/transition-controller");
    var i7 = require("../../navigation/deep-linker");
    var i8 = require("../../platform/dom-controller");
    var i9 = require("./click-block");
    var i10 = require("./app-root");
    var styles_IonicApp = [];
    var RenderType_IonicApp = i0.ɵcrt({ encapsulation: 2, styles: styles_IonicApp, data: {} });
    exports.RenderType_IonicApp = RenderType_IonicApp;
    function View_IonicApp_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { _viewport: 0 }), i0.ɵqud(402653184, 2, { _modalPortal: 0 }), i0.ɵqud(402653184, 3, { _overlayPortal: 0 }), i0.ɵqud(402653184, 4, { _loadingPortal: 0 }), i0.ɵqud(402653184, 5, { _toastPortal: 0 }), (_l()(), i0.ɵeld(5, 16777216, [[1, 3], ["viewport", 1]], null, 0, "div", [["app-viewport", ""]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 16777216, [["modalPortal", 1]], null, 1, "div", [["overlay-portal", ""]], null, null, null, null, null)), i0.ɵdid(7, 147456, [[2, 4]], 0, i1.OverlayPortal, [i2.App, i3.Config, i4.Platform, i0.ElementRef, i0.NgZone, i0.Renderer, i0.ComponentFactoryResolver, i5.GestureController, i6.TransitionController, [2, i7.DeepLinker], i0.ViewContainerRef, i8.DomController, i0.ErrorHandler], { _overlayPortal: [0, "_overlayPortal"] }, null), (_l()(), i0.ɵeld(8, 16777216, [["overlayPortal", 1]], null, 1, "div", [["overlay-portal", ""]], null, null, null, null, null)), i0.ɵdid(9, 147456, [[3, 4]], 0, i1.OverlayPortal, [i2.App, i3.Config, i4.Platform, i0.ElementRef, i0.NgZone, i0.Renderer, i0.ComponentFactoryResolver, i5.GestureController, i6.TransitionController, [2, i7.DeepLinker], i0.ViewContainerRef, i8.DomController, i0.ErrorHandler], { _overlayPortal: [0, "_overlayPortal"] }, null), (_l()(), i0.ɵeld(10, 16777216, [["loadingPortal", 1]], null, 1, "div", [["class", "loading-portal"], ["overlay-portal", ""]], null, null, null, null, null)), i0.ɵdid(11, 147456, [[4, 4]], 0, i1.OverlayPortal, [i2.App, i3.Config, i4.Platform, i0.ElementRef, i0.NgZone, i0.Renderer, i0.ComponentFactoryResolver, i5.GestureController, i6.TransitionController, [2, i7.DeepLinker], i0.ViewContainerRef, i8.DomController, i0.ErrorHandler], { _overlayPortal: [0, "_overlayPortal"] }, null), (_l()(), i0.ɵeld(12, 16777216, [["toastPortal", 1]], null, 1, "div", [["class", "toast-portal"]], null, null, null, null, null)), i0.ɵdid(13, 147456, [[5, 4]], 0, i1.OverlayPortal, [i2.App, i3.Config, i4.Platform, i0.ElementRef, i0.NgZone, i0.Renderer, i0.ComponentFactoryResolver, i5.GestureController, i6.TransitionController, [2, i7.DeepLinker], i0.ViewContainerRef, i8.DomController, i0.ErrorHandler], { _overlayPortal: [0, "_overlayPortal"] }, null), (_l()(), i0.ɵeld(14, 0, null, null, 1, "div", [["class", "click-block"]], null, null, null, null, null)), i0.ɵdid(15, 16384, null, 0, i9.ClickBlock, [i2.App, i3.Config, i4.Platform, i0.ElementRef, i0.Renderer], null, null)], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 7, 0, currVal_0); var currVal_1 = ""; _ck(_v, 9, 0, currVal_1); var currVal_2 = ""; _ck(_v, 11, 0, currVal_2); var currVal_3 = 10000; _ck(_v, 13, 0, currVal_3); }, null); }
    exports.View_IonicApp_0 = View_IonicApp_0;
    function View_IonicApp_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-app", [], null, null, null, View_IonicApp_0, RenderType_IonicApp)), i0.ɵdid(1, 114688, null, 0, i10.IonicApp, [i10.AppRootToken, i0.ComponentFactoryResolver, i0.ElementRef, i0.Renderer, i3.Config, i4.Platform, i2.App], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
    exports.View_IonicApp_Host_0 = View_IonicApp_Host_0;
    var IonicAppNgFactory = i0.ɵccf("ion-app", i10.IonicApp, View_IonicApp_Host_0, { color: "color", mode: "mode" }, {}, []);
    exports.IonicAppNgFactory = IonicAppNgFactory;
});
//# sourceMappingURL=app-root.ngfactory.js.map