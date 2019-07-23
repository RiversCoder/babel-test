"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var p = function p() {
  return new _promise["default"](function () {});
};

var apps = [1, 123, 21321, 412321, 3213412, 123];
var newApps = apps.map(function (v) {
  return v * 2;
});
console.log(newApps);