//// [objectRestAssignment.ts]
let ka, other, complex, overEmit;
import _extends from "@swc/helpers/src/_extends.mjs";
import _object_destructuring_empty from "@swc/helpers/src/_object_destructuring_empty.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
_object_without_properties(complex.x, [
    "ka"
]), _object_without_properties(complex, [
    "x",
    "y"
]), { x: { ka  } , y: other  } = complex;
var { a: [{}, ...y] , b: { z  }  } = overEmit;
_extends({}, _object_destructuring_empty(overEmit.a[0])), _object_without_properties(overEmit.b, [
    "z"
]), _object_without_properties(overEmit, [
    "a",
    "b"
]), _extends({}, _object_destructuring_empty(overEmit.a[0])), _object_without_properties(overEmit.b, [
    "z"
]), _object_without_properties(overEmit, [
    "a",
    "b"
]), { a: [{}, ...y] , b: { z  }  } = overEmit;
