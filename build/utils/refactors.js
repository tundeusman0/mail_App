"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPromise = getPromise;
exports.getDeletePromise = getDeletePromise;

function getPromise(resolveOutput, condition, rejectOutput) {
  return new Promise(function (resolve, reject) {
    if (condition) {
      resolve(resolveOutput);
    } else {
      reject(rejectOutput);
    }
  });
}

function getDeletePromise(messageIndex, array) {
  return new Promise(function (resolve, reject) {
    if (messageIndex >= 0) {
      var removedMessage = array.splice(messageIndex, 1);
      resolve(removedMessage);
    } else {
      reject("No Message to be deleted");
    }
  });
}