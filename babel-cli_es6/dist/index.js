"use strict";

var apps = [1, 123, 21321, 412321, 3213412, 123];
var newApps = apps.filter(function (v) {
  return v > 200;
});
console.log(newApps);