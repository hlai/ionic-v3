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
import { Directive, ElementRef, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
/**
  * @hidden
  */
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card(config, elementRef, renderer) {
        return _super.call(this, config, elementRef, renderer, 'card') || this;
    }
    Card.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-card'
                },] },
    ];
    /** @nocollapse */
    Card.ctorParameters = function () { return [
        { type: Config },
        { type: ElementRef },
        { type: Renderer }
    ]; };
    return Card;
}(Ion));
export { Card };
//# sourceMappingURL=card.js.map