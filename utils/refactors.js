function getPromise(resolveOutput, condition, rejectOutput) {
    return new Promise((resolve, reject) => {
        if (condition) {
            resolve(resolveOutput);
        } else {
            reject(rejectOutput);
        }
    });
}

module.exports = {
    getPromise,
};
