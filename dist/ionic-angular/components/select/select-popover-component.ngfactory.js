/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../item/item.ngfactory";
import * as i2 from "../item/item";
import * as i3 from "../../util/form";
import * as i4 from "../../config/config";
import * as i5 from "../item/item-reorder";
import * as i6 from "../item/item-content";
import * as i7 from "../label/label";
import * as i8 from "../radio/radio-button.ngfactory";
import * as i9 from "../radio/radio-button";
import * as i10 from "../radio/radio-group";
import * as i11 from "@angular/forms";
import * as i12 from "../list/list";
import * as i13 from "../../platform/platform";
import * as i14 from "../../gestures/gesture-controller";
import * as i15 from "../../platform/dom-controller";
import * as i16 from "@angular/common";
import * as i17 from "./select-popover-component";
import * as i18 from "../../navigation/nav-params";
import * as i19 from "../../navigation/view-controller";
var styles_SelectPopover = [];
var RenderType_SelectPopover = i0.ɵcrt({ encapsulation: 2, styles: styles_SelectPopover, data: {} });
export { RenderType_SelectPopover as RenderType_SelectPopover };
function View_SelectPopover_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 10, "ion-item", [["class", "item item-block"]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(1, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 2, { contentLabel: 0 }), i0.ɵqud(603979776, 3, { _buttons: 1 }), i0.ɵqud(603979776, 4, { _icons: 1 }), i0.ɵdid(5, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵeld(6, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), i0.ɵdid(7, 16384, [[2, 4]], 0, i7.Label, [i4.Config, i0.ElementRef, i0.Renderer, [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), i0.ɵted(8, null, ["", ""])), (_l()(), i0.ɵeld(9, 0, null, 4, 1, "ion-radio", [], [[2, "radio-disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 10)._click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_RadioButton_0, i8.RenderType_RadioButton)), i0.ɵdid(10, 245760, null, 0, i9.RadioButton, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i2.Item], [2, i10.RadioGroup]], { value: [0, "value"], checked: [1, "checked"], disabled: [2, "disabled"] }, null)], function (_ck, _v) { var currVal_2 = _v.context.$implicit.value; var currVal_3 = _v.context.$implicit.checked; var currVal_4 = _v.context.$implicit.disabled; _ck(_v, 10, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.text; _ck(_v, 8, 0, currVal_0); var currVal_1 = i0.ɵnov(_v, 10)._disabled; _ck(_v, 9, 0, currVal_1); }); }
export function View_SelectPopover_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 9, "ion-list", [["radio-group", ""], ["role", "radiogroup"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.value = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 1064960, null, 1, i10.RadioGroup, [i0.Renderer, i0.ElementRef, i0.ChangeDetectorRef], null, null), i0.ɵqud(335544320, 1, { _header: 0 }), i0.ɵprd(1024, null, i11.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i10.RadioGroup]), i0.ɵdid(4, 671744, null, 0, i11.NgModel, [[8, null], [8, null], [8, null], [6, i11.NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i11.NgControl, null, [i11.NgModel]), i0.ɵdid(6, 16384, null, 0, i11.NgControlStatus, [[4, i11.NgControl]], null, null), i0.ɵdid(7, 16384, null, 0, i12.List, [i4.Config, i0.ElementRef, i0.Renderer, i13.Platform, i14.GestureController, i15.DomController], null, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SelectPopover_1)), i0.ɵdid(9, 278528, null, 0, i16.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.value; _ck(_v, 4, 0, currVal_7); var currVal_8 = _co.options; _ck(_v, 9, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 6).ngClassUntouched; var currVal_1 = i0.ɵnov(_v, 6).ngClassTouched; var currVal_2 = i0.ɵnov(_v, 6).ngClassPristine; var currVal_3 = i0.ɵnov(_v, 6).ngClassDirty; var currVal_4 = i0.ɵnov(_v, 6).ngClassValid; var currVal_5 = i0.ɵnov(_v, 6).ngClassInvalid; var currVal_6 = i0.ɵnov(_v, 6).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
export function View_SelectPopover_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_SelectPopover_0, RenderType_SelectPopover)), i0.ɵdid(1, 114688, null, 0, i17.SelectPopover, [i18.NavParams, i19.ViewController], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SelectPopoverNgFactory = i0.ɵccf("ng-component", i17.SelectPopover, View_SelectPopover_Host_0, {}, {}, []);
export { SelectPopoverNgFactory as SelectPopoverNgFactory };
//# sourceMappingURL=select-popover-component.ngfactory.js.map