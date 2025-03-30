// func combinationSum(candidates []int, target int) [][]int {
//     var(
//         result [][]int
//     )

//     dynamicPograming([]int{}, candidates, &result, 0, target, 0)
//     return result
// }

// func dynamicPograming(curr, candidates []int, result *[][]int, sum, target, index int) {
//     if sum == target {
//         temp:= make([]int, len(curr))
//         copy(temp, curr)
//         // temp= curr[:]
//         // fmt.Println(curr, temp)
//         *result = append(*result, temp)
//         return
//     }else if sum > target{
//         return
//     }

//     for i:= index; i<len(candidates); i++{
//         curr = append(curr, candidates[i])
//         dynamicPograming(curr, candidates, result, sum+candidates[i], target, i)
//         curr = curr[:len(curr)-1]
//     }
//     index++
// }

// var combinationSum = function (candidates, target) {
//     let result = new Array
//     recursion(result, candidates, target, 0, [], 0)
//     return result
// };

// function recursion(result, candidates, target, sum, curr, pos) {
//     // console.log(result, candidates, target, sum, curr, pos)

//     if (sum == target) {
//         result.push([...curr])
//         return
//     }

//     for (let i = pos; i < candidates.length; i++) {
//         let currSum = sum + candidates[i]
//         if (currSum > target) continue

//         curr.push(candidates[i])
//         recursion(result, candidates, target, sum + candidates[i], curr, i)
//         curr.pop()
//     }
// }
