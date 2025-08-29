// function findMaxForm(strs: string[], m: number, n: number): number {
//     let mp = new Map < string, number>

//         function dfs(currM: number, currN: number, length: number, pos: number): number {
//             if (currM == m && currN == n) return length
//             if (currM > m || currN > n) return 0
//             if (strs.length <= pos) return length

//             let key = `${currM},${currN},${pos},${length}`
//             if (mp.has(key)) return mp.get(key)

//             let [countM, countN] = MandN(strs[pos])

//             let result1 = dfs(currM + countM, currN + countN, length + 1, pos + 1)
//             let result2 = dfs(currM, currN, length, pos + 1)

//             const best = Math.max(result1, result2)
//             mp.set(key, best)
//             return best
//         }

//     function MandN(binary: string): number[] {
//         let m: number = 0
//         let n: number = 0

//         for (let value of binary) {
//             if (value == '0') m++
//             if (value == '1') n++
//         }

//         return [m, n]
//     }

//     return dfs(0, 0, 0, 0)
// };

function findMaxForm(strs: string[], m: number, n: number): number {
    let arr = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    // console.log(arr)

    for (let string of strs) {
        let zero = 0, ones = 0

        for (let ch of string) {
            if (ch == '0') zero++
            else ones++
        }

        for (let i = m; i >= zero; i--) {
            for (let j = n; j >= ones; j--) {
                arr[i][j] = Math.max(arr[i][j], arr[i - zero][j - ones] + 1)
            }
        }
    }

    // console.log(arr)
    return arr[m][n]
}
