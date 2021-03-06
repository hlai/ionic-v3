import { isArray, isPresent } from '../util/util';
import { ViewController, isViewController } from './view-controller';
export function getComponent(linker, nameOrPageOrView, params) {
    if (typeof nameOrPageOrView === 'function') {
        return Promise.resolve(new ViewController(nameOrPageOrView, params));
    }
    if (typeof nameOrPageOrView === 'string') {
        return linker.getComponentFromName(nameOrPageOrView).then(function (component) {
            var vc = new ViewController(component, params);
            vc.id = nameOrPageOrView;
            return vc;
        });
    }
    return Promise.resolve(null);
}
export function convertToView(linker, nameOrPageOrView, params) {
    if (nameOrPageOrView) {
        if (isViewController(nameOrPageOrView)) {
            // is already a ViewController
            return Promise.resolve(nameOrPageOrView);
        }
        return getComponent(linker, nameOrPageOrView, params);
    }
    return Promise.resolve(null);
}
export function convertToViews(linker, pages) {
    var views = [];
    if (isArray(pages)) {
        for (var i = 0; i < pages.length; i++) {
            var page = pages[i];
            if (page) {
                if (isViewController(page)) {
                    views.push(page);
                }
                else if (page.page) {
                    views.push(convertToView(linker, page.page, page.params));
                }
                else {
                    views.push(convertToView(linker, page, null));
                }
            }
        }
    }
    return Promise.all(views);
}
var portalZindex = 9999;
export function setZIndex(nav, enteringView, leavingView, direction, renderer) {
    if (enteringView) {
        if (nav._isPortal) {
            if (direction === DIRECTION_FORWARD) {
                enteringView._setZIndex(nav._zIndexOffset + portalZindex, renderer);
            }
            portalZindex++;
            return;
        }
        leavingView = leavingView || nav.getPrevious(enteringView);
        if (leavingView && isPresent(leavingView._zIndex)) {
            if (direction === DIRECTION_BACK) {
                enteringView._setZIndex(leavingView._zIndex - 1, renderer);
            }
            else {
                enteringView._setZIndex(leavingView._zIndex + 1, renderer);
            }
        }
        else {
            enteringView._setZIndex(INIT_ZINDEX + nav._zIndexOffset, renderer);
        }
    }
}
export function isTabs(nav) {
    // Tabs (ion-tabs)
    return !!nav && !!nav.getSelected;
}
export function isTab(nav) {
    // Tab (ion-tab)
    return !!nav && isPresent(nav._tabId);
}
export function isNav(nav) {
    // Nav (ion-nav), Tab (ion-tab), Portal (ion-portal)
    return !!nav && !!nav.push && nav.getType() === 'nav';
}
export function linkToSegment(navId, type, secondaryId, link) {
    var segment = Object.assign({}, link);
    segment.navId = navId;
    segment.type = type;
    segment.secondaryId = secondaryId;
    return segment;
}
/**
 * @hidden
 */
var DeepLinkMetadata = /** @class */ (function () {
    function DeepLinkMetadata() {
    }
    return DeepLinkMetadata;
}());
export { DeepLinkMetadata };
/**
 * @hidden
 */
export var DeepLinkMetadataFactory;
export var STATE_NEW = 1;
export var STATE_INITIALIZED = 2;
export var STATE_ATTACHED = 3;
export var STATE_DESTROYED = 4;
export var INIT_ZINDEX = 100;
export var DIRECTION_BACK = 'back';
export var DIRECTION_FORWARD = 'forward';
export var DIRECTION_SWITCH = 'switch';
export var NAV = 'nav';
export var TABS = 'tabs';
//# sourceMappingURL=nav-util.js.map