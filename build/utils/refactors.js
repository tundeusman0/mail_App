"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPromise;

function getPromise(resolveOutput, condition, rejectOutput) {
  return new Promise(function (resolve, reject) {
    if (condition) {
      resolve(resolveOutput);
    } else {
      reject(rejectOutput);
    }
  });
}