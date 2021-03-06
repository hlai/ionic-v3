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
        define(["require", "exports", "@angular/core", "../../config/config", "../ion"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var config_1 = require("../../config/config");
    var ion_1 = require("../ion");
    /**
      * @name FabButton
      * @module ionic
      *
      * @description
      * FABs (Floating Action Buttons) are standard material design components. They are shaped as a circle that represents a promoted action. When pressed, it may contain more related actions.
      * FABs as its name suggests are floating over the content in a fixed position. This is not achieved exclusively with `<button ion-fab>Button</button>` but it has to be wrapped with the `<ion-fab>` component, like this:
      *
      * ```html
      * <ion-content>
      *  <!-- Real floating action button, fixed. It will not scroll with the content -->
      *  <ion-fab>
      *    <button ion-fab>Button</button>
      *  </ion-fab>
      *
      *  <!-- Button shaped as a circle that just like a normal button scrolls with the content -->
      *  <button ion-fab>Button</button>
      * </ion-content>
      *
      * ```
      *
      * In case the button is not wrapped with `<ion-fab>`, the fab button will behave like a normal button, scrolling with the content.
      *
      * See [ion-fab] to learn more information about how to position the fab button.
      *
      * @property [mini] - Makes a fab button with a reduced size.
      *
      * @usage
      *
      * ```html
      *
      * <!-- Colors -->
      * <ion-fab>
      *   <button ion-fab color="primary">Button</button>
      * </ion-fab>
      *
      * <!-- Mini -->
      * <ion-fab>
      *   <button ion-fab mini>Small</button>
      * </ion-fab>
      * ```
      *
      * @demo /docs/demos/src/fab/
      * @see {@link /docs/components#fabs FAB Component Docs}
     */
    var FabButton = /** @class */ (function (_super) {
        __extends(FabButton, _super);
        function FabButton(config, elementRef, renderer) {
            return _super.call(this, config, elementRef, renderer, 'fab') || this;
        }
        /**
         * @hidden
         */
        FabButton.prototype.setActiveClose = function (closeVisible) {
            this.setElementClass('fab-close-active', closeVisible);
        };
        FabButton.decorators = [
            { type: core_1.Component, args: [{
                        selector: '[ion-fab]',
                        template: '<ion-icon name="close" class="fab-close-icon"></ion-icon>' +
                            '<span class="button-inner">' +
                            '<ng-content></ng-content>' +
                            '</span>' +
                            '<div class="button-effect"></div>',
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        encapsulation: core_1.ViewEncapsulation.None,
                    },] },
        ];
        /** @nocollapse */
        FabButton.ctorParameters = function () { return [
            { type: config_1.Config },
            { type: core_1.ElementRef },
            { type: core_1.Renderer }
        ]; };
        return FabButton;
    }(ion_1.Ion));
    exports.FabButton = FabButton;
});
//# sourceMappingURL=fab.js.map