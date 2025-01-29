
// function minimumAddedInteger(nums1, nums2) {
//     var mp = new Map

//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             var diff = nums1[i] - nums2[j]
//             if (!mp.has(diff)) {
//                 mp.set(diff, 1)
//             }else{
//                 mp.set(diff, mp.get(diff) + 1)
//             }
//         }
//     }

//     var resultValue = 0
//     var resultKey = 10000
//     for (let [key, value] of mp){
//         if ( resultValue < value ) {
//             console.log("==")
//             if (resultKey == 10000){
//                 resultKey = key 
//                 break
//             }

//             if ()
//         }
//     }

//     console.log(mp)
//     console.log(resultKey, resultValue)
// }


// minimumAddedInteger([4,20,16,12,8], [14,18,10])
