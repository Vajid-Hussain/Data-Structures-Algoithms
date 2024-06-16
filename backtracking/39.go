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
