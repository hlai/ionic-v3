/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../spinner/spinner.ngfactory";
import * as i2 from "../spinner/spinner";
import * as i3 from "../../config/config";
import * as i4 from "../backdrop/backdrop";
import * as i5 from "@angular/common";
import * as i6 from "./loading-component";
import * as i7 from "../../navigation/view-controller";
import * as i8 from "../../gestures/gesture-controller";
import * as i9 from "../../navigation/nav-params";
var styles_LoadingCmp = [];
var RenderType_LoadingCmp = i0.ɵcrt({ encapsulation: 2, styles: styles_LoadingCmp, data: {} });
export { RenderType_LoadingCmp as RenderType_LoadingCmp };
function View_LoadingCmp_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["class", "loading-spinner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, i1.View_Spinner_0, i1.RenderType_Spinner)), i0.ɵdid(2, 114688, null, 0, i2.Spinner, [i3.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.d.spinner; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2)._paused; _ck(_v, 1, 0, currVal_0); }); }
function View_LoadingCmp_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "loading-content"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.d.content; _ck(_v, 0, 0, currVal_0); }); }
export function View_LoadingCmp_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-backdrop", [["disable-activated", ""], ["role", "presentation"], ["tappable", ""]], [[8, "hidden", 0], [2, "backdrop-no-tappable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.bdClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 16384, null, 0, i4.Backdrop, [i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵeld(2, 0, null, null, 4, "div", [["class", "loading-wrapper"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_LoadingCmp_1)), i0.ɵdid(4, 16384, null, 0, i5.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_LoadingCmp_2)), i0.ɵdid(6, 16384, null, 0, i5.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.showSpinner; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.d.content; _ck(_v, 6, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.d.showBackdrop; var currVal_1 = !_co.d.enableBackdropDismiss; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
export function View_LoadingCmp_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-loading", [["role", "dialog"]], null, [["body", "keyup"]], function (_v, en, $event) { var ad = true; if (("body:keyup" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).keyUp($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_LoadingCmp_0, RenderType_LoadingCmp)), i0.ɵdid(1, 245760, null, 0, i6.LoadingCmp, [i7.ViewController, i3.Config, i0.ElementRef, i8.GestureController, i9.NavParams, i0.Renderer], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoadingCmpNgFactory = i0.ɵccf("ion-loading", i6.LoadingCmp, View_LoadingCmp_Host_0, {}, {}, []);
export { LoadingCmpNgFactory as LoadingCmpNgFactory };
//# sourceMappingURL=loading-component.ngfactory.js.map