var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/platform-browser"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var platform_browser_1 = require("@angular/platform-browser");
    /**
     * @hidden
     * This class overrides the default Angular gesture config.
     */
    var IonicGestureConfig = /** @class */ (function (_super) {
        __extends(IonicGestureConfig, _super);
        function IonicGestureConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IonicGestureConfig.prototype.buildHammer = function (element) {
            var mc = new window.Hammer(element);
            for (var eventName in this.overrides) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
            return mc;
        };
        IonicGestureConfig.decorators = [
            { type: core_1.Injectable },
        ];
        return IonicGestureConfig;
    }(platform_browser_1.HammerGestureConfig));
    exports.IonicGestureConfig = IonicGestureConfig;
});
//# sourceMappingURL=gesture-config.js.map