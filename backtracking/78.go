// // func subsets(nums []int) [][]int {
// // 	var (
// // 		result [][]int
// // 		curr   []int
// // 	)
// // 	backtracking(&result, 0, curr, nums, len(nums))
// // 	return result
// // }

// // func backtracking(result *[][]int, index int, curr, nums []int, length int) {
// //     fmt.Println(curr, index)
// // 	if length == index {
// // 		temp := make([]int, len(curr))
// // 		copy(temp, curr)
// // 		*result = append(*result, temp)
// // 		return
// // 	}

// // 	backtracking(result, index+1, curr, nums, length)
// // 	curr = append(curr, nums[index])
// // 	backtracking(result, index+1, curr, nums, length)
// // 	curr = curr[:len(curr)-1]
// // }

// func subsets(nums []int) [][]int {
//     var(
//         result [][]int
//         curr []int
//         backtracking func(int)
//     )

//     backtracking= func (index int) {
//         if index == len(nums) {
//             temp:= make([]int, len(curr))
//             copy(temp, curr)
//             result = append(result, temp)
//             return
//         }

//         curr = append(curr, nums[index])
//         backtracking(index + 1)

//         curr = curr[:len(curr)-1]
//         backtracking(index + 1)
//     } 
//     backtracking(0)

//     return result
// }



/// --------
// func subsets(nums []int) [][]int {
// 	var result [][]int
//     recursion(nums, []int{} ,0, &result)
//     return result
// }

// func recursion(arr, curr []int, pos int, result *[][]int) {
// 	if pos == len(arr) -1 {
//         combination := make([]int, len(curr))
//         copy(combination, curr)
       
//         curr = append(curr, arr[pos])

//         combination2 := make([]int, len(curr))
//         copy(combination2, curr)

// 		*result = append(*result, combination, combination2)
//         return
// 	}

// 	recursion(arr, append(curr[:], arr[pos]), pos+1, result)
// 	recursion(arr, curr[:], pos+1, result)
// }
