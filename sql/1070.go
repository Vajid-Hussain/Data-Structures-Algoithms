// # Write your MySQL query statement below
// SELECT product_id, year AS first_year, quantity, price FROM sales
// WHERE (product_id, year) IN (
//     SELECT product_id, MIN(year) FROM sales s2
//     GROUP BY s2.product_id
// )
