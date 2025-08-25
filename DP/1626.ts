// function bestTeamScore(scores: number[], ages: number[]): number {
//     let result: number = 0

//     for (let i = 1; i < ages.length; i++) {
//         for (let j = 0; j < ages.length - i; j++) {
//             if (ages[j] > ages[j + 1]) {

//                 ages[j] += ages[j + 1]
//                 ages[j + 1] = ages[j] - ages[j + 1]
//                 ages[j] = ages[j] - ages[j + 1]

//                 scores[j] += scores[j + 1]
//                 scores[j + 1] = scores[j] - scores[j + 1]
//                 scores[j] -= scores[j + 1]
//             }
//         }
//     }

//     for (let i = 1; i < ages.length; i++) {
//         // if (i > 3) continue
//         // console.log(ages[i], ages[i+1])

//         for (let j = 0; j < ages.length - i; j++) {
//             if (scores[j] > scores[j + 1] && ages[j] == ages[j + 1]) {

//                 // console.log(scores[j], scores[j+1])

//                 scores[j] += scores[j + 1]
//                 scores[j + 1] = scores[j] - scores[j + 1]
//                 scores[j] = scores[j] - scores[j + 1]

//                 ages[j] += ages[j + 1]
//                 ages[j + 1] = ages[j] - ages[j + 1]
//                 ages[j] -= ages[j + 1]
//             }
//         }
//     }

//     // console.log(scores, ages)

//     var arr = new Array(scores.length).fill(0)
//     arr[0] = scores[0]

//     for (let i = 1; i < scores.length; i++) {
//         arr[i]= scores[i]

//         for (let j = i- 1; j >= 0; j--) {
//             if (ages[i] == ages[j] || scores[i] >= scores[j]) arr[i] = Math.max(arr[i] , arr[j] + scores[i])
//         }
//     }

//     return Math.max(...arr)
// };

function bestTeamScore(scores: number[], ages: number[]): number {
   
    let arr = Array()

    for (let i =0; i < ages.length; i++){
        arr.push([ages[i], scores[i]])
    }
    
    arr.sort((a, b) => a[0] == b[0]? a[1] - b[1] : a[0] - b[0])

    let res = new Array(scores.length).fill(0)
    res[0] = arr[0][1];
    
    // console.log(arr)
    for ( let i =0; i < ages.length; i++){
        res[i] = arr[i][1]

        for ( let j = i-1; j >=0; j--){
            if (arr[i][0] == arr[j][0] || arr[i][1] >= arr[j][1]) res[i] = Math.max(res[i], res[j] + arr[i][1])
        }
    }

    return Math.max(...res)
};
