export function getPromise(resolveOutput, condition, rejectOutput) {
    return new Promise((resolve, reject) => {
        if (condition) {
            resolve(resolveOutput);
        } else {
            reject(rejectOutput);
        }
    });
}

export function getDeletePromise(messageIndex, array) {
    return new Promise((resolve, reject) => {
        if (messageIndex >= 0) {
            const removedMessage = array.splice(messageIndex, 1);
            resolve(removedMessage);
        } else {
            reject("No Message to be deleted");
        }
    });
}