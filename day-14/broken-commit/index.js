function findFirstBadCommit(commits, comparator) {
    let left = 0,
        right = commits.length - 1,
        mid = Math.floor(commits.length / 2);

    while (left < right) {
        if (comparator(commits[mid])) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor(left + (right - left) / 2);
        console.log(mid, Math.floor((left + right) / 2));
    }

    return mid;
}

const commits = ['good', 'good', 'bad', 'bad', 'bad', 'bad', 'bad', 'bad', 'bad'];

const test = (commit) => commit === 'good';

console.log(findFirstBadCommit(commits, test)); // 3
