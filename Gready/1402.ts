// function maxSatisfaction(satisfaction: number[]): number {
// var arr = new Array<number>(satisfaction.length).fill(0)
//     var largest: number = 0

//     satisfaction.sort((a, b) => a - b)

//     for (let i = satisfaction.length - 1; i >= 0; i--) {
//         let pos: number = 1

//         for (let j = i; j < satisfaction.length; j++) {
//             arr[j] = satisfaction[j] * pos

//             if (j > 0) arr[j] += arr[j - 1]
//             pos++
//         }

//         // console.log(arr, largest)

//         if (largest > arr[arr.length - 1]) return largest
//         largest = arr[arr.length - 1]
//     }

//     return arr[arr.length - 1]
// }

function maxSatisfaction(satisfaction: number[]): number {
    satisfaction.sort((a, b) => a - b)

    let sum = 0
    var result: number = 0
    let best: number = 0

    for (let i = satisfaction.length - 1; i >= 0; i--) {
        result += (satisfaction[i] + sum)
        sum += satisfaction[i]

        if (best > result) return best
        best = result
    }

    return best
}
