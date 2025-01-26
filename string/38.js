/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function (n) {

    if (n == 1) {
        return "1"
    }

    let generator = (short) => {

        let count = 1, results = ""
        for (var i = 0; i < short.length - 1; i++) {
            if (short[i] == short[i + 1]) {
                count++
                continue
            }

            results += count
            results += short[i]
            count = 1
        }

        results += count
        results += short[i]

        return results
    }

    let result = "1"
    for (let j = 1; j < n; j++) {
        result = generator(result)
    }

    return result
};

