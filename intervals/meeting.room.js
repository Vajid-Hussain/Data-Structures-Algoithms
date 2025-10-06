/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        var result = true

        intervals.sort((a, b) => {
            // console.log(a.end , b.end)
            return a.end - b.end
        })

        // console.log(intervals)

        for (let i = 1; i < intervals.length; i++){
            if (intervals[i-1].end > intervals[i].start){
                return false
            }
        }

        return result
    }
}
