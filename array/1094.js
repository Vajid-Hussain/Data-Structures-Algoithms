// /**
//  * @param {number[][]} trips
//  * @param {number} capacity
//  * @return {boolean}
//  */
//  var carPooling = function(trips, capacity) {
//     let currCapacity = capacity, mp = new Map()
//     let prevFrom = 0

//     trips.sort((a,b)=>{
//         if (a[1]!= b[1]){
//             return a[1] - b[1]
//         }else{
//             return a[2] - b[2]
//         }
//     })

//     // console.log(trips)

//     for ( const [passanger, from, to] of trips ){
//         for ( let i = prevFrom; i <= from ; i++){
//             if (mp.has(i)) {
//                 currCapacity+= mp.get(i)
//                 mp.delete(i)
//             }
//         }

//         if ( currCapacity >= passanger ){
//             currCapacity -= passanger
//         }else{
//             return false
//         }

//         if ( mp.has(to) ){
//             mp.set(to, mp.get(to) + passanger)
//         }else{
//             mp.set(to, passanger)
//         }

//         prevFrom = from
//     }

//     return true
// }; 
