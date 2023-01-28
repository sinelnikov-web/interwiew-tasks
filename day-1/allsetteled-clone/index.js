
function allSettled(arr) {
    return Promise.all(arr.map(async (promise) => {
        try {
            return {
                status: 'fulfilled',
                value: await promise
            }
        } catch (err) {
            return {
                status: 'rejected',
                reason: err
            }
        }
    }));
}


console.log(allSettled([1, Promise.resolve(2), Promise.reject(3)]).then(([v1, v2, v3]) => {
    console.log(v1); // {status: 'fulfilled', value: 1}
    console.log(v2); // {status: 'fulfilled', value: 2}
    console.log(v3); // {status: 'rejected', reason: 3}
}))