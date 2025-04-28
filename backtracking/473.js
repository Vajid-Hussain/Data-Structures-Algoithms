// function makesquare(matchsticks: number[]): boolean {
//     let sum: number = 0, eachside = 0
//     let used: boolean[] = new Array(matchsticks.length).fill(false)

//     matchsticks.sort((a, b) => b - a)

//     for (const value of matchsticks) {
//         sum += value
//     }
//     eachside = sum / 4

//     if (sum % 4 != 0) {
//         return false
//     }

//     var sides: number[] = new Array(4).fill(0)

//     // console.log(sum, eachside, matchsticks)

//     return backTracking(0, eachside, matchsticks, sides)
// };

// function backTracking(index: number, target: number, matchSticks: number[], sides: number[]):boolean{
//     if (index == matchSticks.length) {
//         return sides.every((s) => s == target)
//     }

//     for (let i:number = 0; i < 4; i++){
//         if (sides[i] + matchSticks[index] > target) continue

//         sides[i] += matchSticks[index]

//         if (backTracking(index+1, target, matchSticks, sides)) return true

//         sides[i] -= matchSticks[index]

//         if (sides[i] == 0) break
//     }

//     return false
// }