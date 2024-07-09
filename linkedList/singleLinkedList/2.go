// package main
// /**
//  * Definition for singly-linked list.
//  * type ListNode struct {
//  *     Val int
//  *     Next *ListNode
//  * }
//  */

//  func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
//     sum := 0
//     carry := 0
//     l3 := &ListNode{}
//     head := l3

//     for l1 != nil || l2 != nil {
//         sum = 0

//         if l1 != nil {
//             sum += l1.Val
//             l1 = l1.Next
//         }

//         if l2 != nil {
//             sum += l2.Val
//             l2 = l2.Next
//         }
//         sum += carry
//         carry = sum / 10
//         sum %= 10
//         l3.Next = &ListNode{Val: sum}
//         l3 = l3.Next
//     }

//     if carry != 0 {
//         l3.Next = &ListNode{Val: carry}
//     }

//     return head.Next
// }




//  func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
// 	var (
// 		balance int
// 		result  = l1
// 	)

// 	for l1 != nil && l2 != nil {
// 		temp := l1.Val
// 		l1.Val = ((l1.Val+l2.Val) + balance) %10
// 		// balance = -1
// 		balance = (temp + l2.Val + balance) / 10

// 		// fmt.Println(balance, (temp + l2.Val) , l1.Val)

// 		if l1.Next == nil && l2.Next == nil {
//             if balance >0{
//                 // for balance >0{
//                     l1.Next = &ListNode{Val:balance}
//                     balance = -1
//                 // }
//                 break
//             }
// 			l1 = l1.Next
// 			l2 = l2.Next
// 			continue
// 		} else if l1.Next == nil {
// 			l1.Next = l2.Next
//             // fmt.Println(l1.Next, l2.Next)
// 			l1=l1.Next
//             break
// 		}
// 		l1 = l1.Next
// 		l2 = l2.Next
// 	}

// 	for balance > 0 {
// 		temp := l1.Val
// 		l1.Val = (l1.Val + balance) % 10
// 		balance = (temp + balance) / 10

//         if balance >0 && l1.Next == nil{
//             l1.Next = &ListNode{}
//         }

// 		l1 = l1.Next
// 	}

// 	return result
// }
