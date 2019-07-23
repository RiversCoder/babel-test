"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regeneratorRuntime2 = require("@babel/runtime-corejs3/regenerator");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/get"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _context;

var _marked =
/*#__PURE__*/
_regeneratorRuntime2.mark(helloWorldGenerator);

var a1 = [1, 2, 3];
var b1 = [2, 3, 4]; // 并集

var s1 = (0, _from.default)(new _set.default((0, _concat.default)(_context = []).call(_context, a1, b1))); // [ 1, 2, 3, 4 ]

var _ref = [1, 2, 3],
    a = _ref[0],
    b = _ref[2];
var people = {
  name: 'lux',
  getName: function getName() {
    // 省略冒号(:) 和function关键字
    console.log(this.name);
  }
};
var s = new _set.default(['A', 'B', 'C']);
console.log(s); // Set { 'A', 'B', 'C' }

var SkinnedMesh =
/*#__PURE__*/
function () {
  function SkinnedMesh(geometry, materials) {
    (0, _classCallCheck2.default)(this, SkinnedMesh);
    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = []; //...
  }

  (0, _createClass2.default)(SkinnedMesh, [{
    key: "update",
    value: function update(camera) {
      //...
      (0, _get2.default)((0, _getPrototypeOf2.default)(SkinnedMesh.prototype), "update", this).call(this);
    }
  }], [{
    key: "defaultMatrix",
    value: function defaultMatrix() {
      return new THREE.Matrix4();
    }
  }]);
  return SkinnedMesh;
}();

function helloWorldGenerator() {
  return _regenerator.default.wrap(function helloWorldGenerator$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return 'hello';

        case 2:
          _context2.next = 4;
          return 'world';

        case 4:
          return _context2.abrupt("return", 'ending');

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked);
}

var hw = helloWorldGenerator();
var promise = new _promise.default(function (resolve, reject) {
  // ... some code
  if (true) {
    resolve(value);
  } else {
    reject(error);
  }
});
promise.then(function (res) {
  console.log(promise);
});