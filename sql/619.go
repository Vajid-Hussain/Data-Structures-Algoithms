// # Write your MySQL query statement below
// WITH helper AS (
//     SELECT num FROM mynumbers
//     GROUP BY num
//     HAVING COUNT(*) = 1
// )

// SELECT MAX(num) AS num FROM helper
