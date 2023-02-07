function zipStr(str: string): string {
    let res = str;

    while (true) {
        let zippedStr = res.replace(/(.+)\1+/g, '$1');
        if (zippedStr === res) {
            return zippedStr;
        }
        res = zippedStr;
    }
}

console.log(zipStr('abbaabbafffbezza')); // abafbeza
