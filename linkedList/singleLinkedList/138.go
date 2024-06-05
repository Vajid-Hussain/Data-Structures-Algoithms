// /**
//  * Definition for a Node.
//  * type Node struct {
//  *     Val int
//  *     Next *Node
//  *     Random *Node
//  * }
//  */

//  func copyRandomList(head *Node) *Node {
//     var copy = make(map[*Node]*Node)

//     for curr:= head; curr!=nil; curr= curr.Next{
//         // tmp := Node{Val:curr.Val}
//         copy[curr] = &Node{Val:curr.Val}
//     }

//     for curr := head; curr!=nil; curr = curr.Next{
//         copy[curr].Next = copy[curr.Next]
//         copy[curr].Random = copy[curr.Random]
//     }

//     return copy[head]
// }
