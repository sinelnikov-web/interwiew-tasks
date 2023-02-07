type ConfigType = {
    retry: number;
    delay: (retryNumber: number) => number;
}

function retry(cb: () => Promise<unknown>, config: ConfigType): Promise<unknown> {
    let tries = 0;
    return new Promise((resolve, reject) => {
        function tryCallback() {
            setTimeout(() => {
                cb()
                    .then(resolve)
                    .catch((err) => {
                        if (tries === config.retry) {
                            reject(err);
                        } else {
                            tryCallback();
                        }
                    })
            }, config.delay(tries));
            tries++;
        }
        tryCallback();
    })
}

retry(
    () => fetch('//some-data'),
    {retry: 3, delay: (n) => n * 1000}
).then(console.log, console.error);


retry(
    () => Promise.resolve(5),
    {retry: 3, delay: (n) => n * 1000}
).then(console.log, console.error);
