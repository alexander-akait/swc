//// [classInsideBlock.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
function foo() {
    var C = function C() {
        "use strict";
        _class_call_check(this, C);
    };
}
