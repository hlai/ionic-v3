(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/common", "../button/button.ngfactory", "../button/button", "../../config/config", "@angular/forms", "./datetime", "../../util/form", "../item/item", "../picker/picker-controller"], factory);
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
    var i1 = require("@angular/common");
    var i2 = require("../button/button.ngfactory");
    var i3 = require("../button/button");
    var i4 = require("../../config/config");
    var i5 = require("@angular/forms");
    var i6 = require("./datetime");
    var i7 = require("../../util/form");
    var i8 = require("../item/item");
    var i9 = require("../picker/picker-controller");
    var styles_DateTime = [];
    var RenderType_DateTime = i0.ɵcrt({ encapsulation: 2, styles: styles_DateTime, data: {} });
    exports.RenderType_DateTime = RenderType_DateTime;
    function View_DateTime_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "datetime-text datetime-placeholder"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.placeholder; _ck(_v, 1, 0, currVal_0); }); }
    function View_DateTime_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "datetime-text"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._text; _ck(_v, 1, 0, currVal_0); }); }
    function View_DateTime_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_DateTime_1)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DateTime_2)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(4, 0, null, null, 1, "button", [["aria-haspopup", "true"], ["class", "item-cover"], ["ion-button", "item-cover"], ["type", "button"]], [[8, "id", 0], [1, "aria-labelledby", 0], [1, "aria-disabled", 0]], null, null, i2.View_Button_0, i2.RenderType_Button)), i0.ɵdid(5, 1097728, null, 0, i3.Button, [[8, "item-cover"], i4.Config, i0.ElementRef, i0.Renderer], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co._text; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co._text; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.id; var currVal_3 = _co._labelId; var currVal_4 = _co._disabled; _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }); }
    exports.View_DateTime_0 = View_DateTime_0;
    function View_DateTime_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ion-datetime", [], [[2, "datetime-disabled", null]], [[null, "click"], [null, "keyup.space"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
            var pd_0 = (i0.ɵnov(_v, 2)._click($event) !== false);
            ad = (pd_0 && ad);
        } if (("keyup.space" === en)) {
            var pd_1 = (i0.ɵnov(_v, 2)._keyup() !== false);
            ad = (pd_1 && ad);
        } return ad; }, View_DateTime_0, RenderType_DateTime)), i0.ɵprd(5120, null, i5.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i6.DateTime]), i0.ɵdid(2, 1228800, null, 0, i6.DateTime, [i7.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i8.Item], [2, i9.PickerController]], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2)._disabled; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_DateTime_Host_0 = View_DateTime_Host_0;
    var DateTimeNgFactory = i0.ɵccf("ion-datetime", i6.DateTime, View_DateTime_Host_0, { color: "color", mode: "mode", disabled: "disabled", min: "min", max: "max", displayFormat: "displayFormat", initialValue: "initialValue", pickerFormat: "pickerFormat", cancelText: "cancelText", doneText: "doneText", yearValues: "yearValues", monthValues: "monthValues", dayValues: "dayValues", hourValues: "hourValues", minuteValues: "minuteValues", monthNames: "monthNames", monthShortNames: "monthShortNames", dayNames: "dayNames", dayShortNames: "dayShortNames", pickerOptions: "pickerOptions", placeholder: "placeholder" }, { ionFocus: "ionFocus", ionChange: "ionChange", ionBlur: "ionBlur", ionCancel: "ionCancel" }, []);
    exports.DateTimeNgFactory = DateTimeNgFactory;
});
//# sourceMappingURL=datetime.ngfactory.js.map