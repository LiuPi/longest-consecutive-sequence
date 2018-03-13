module.exports = function longestConsecutiveLength(array) {
    let c;
    var set = new Set();
    for (var i = 0; i < array.length; i++) {
        if (!set.has(array[i])) {
            set.add(array[i]);
        }
    }
    var max = 0;
    var count = 0;
    for (i in array) {
        c = array[i];
        if (set.has(array[i])) {
            count = 1;
            set.delete(array[i]);
        }
        while (set.has(c - 1)) {
            if (set.has(c - 1)) {
                count++;
                set.delete(c - 1);
                c -= 1;
            }
        }
        c = array[i];
        while (set.has(c + 1)) {
            if (set.has(c + 1)) {
                count++;
                set.delete(c + 1);
                c += 1;
            }
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
};
