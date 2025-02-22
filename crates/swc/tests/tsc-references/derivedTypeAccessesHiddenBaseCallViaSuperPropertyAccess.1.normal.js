//// [derivedTypeAccessesHiddenBaseCallViaSuperPropertyAccess.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _get from "@swc/helpers/src/_get.mjs";
import _get_prototype_of from "@swc/helpers/src/_get_prototype_of.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var Base = /*#__PURE__*/ function() {
    "use strict";
    function Base() {
        _class_call_check(this, Base);
    }
    var _proto = Base.prototype;
    _proto.foo = function foo(x) {
        return null;
    };
    return Base;
}();
var Derived = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(Derived, Base);
    var _super = _create_super(Derived);
    function Derived() {
        _class_call_check(this, Derived);
        return _super.apply(this, arguments);
    }
    var _proto = Derived.prototype;
    _proto.foo = function foo(x) {
        return null;
    };
    _proto.bar = function bar() {
        var r = _get(_get_prototype_of(Derived.prototype), "foo", this).call(this, {
            a: 1
        }); // { a: number }
        var r2 = _get(_get_prototype_of(Derived.prototype), "foo", this).call(this, {
            a: 1,
            b: 2
        }); // { a: number }
        var r3 = this.foo({
            a: 1,
            b: 2
        }); // { a: number; b: number; }
    };
    return Derived;
}(Base);
