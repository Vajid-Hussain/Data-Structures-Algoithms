// -- # Write your MySQL query statement below
// -- WITH helper AS (
// --     SELECT customer_id, MIN(order_date) orders, MIN(customer_pref_delivery_date) delivery FROM delivery 
// --     GROUP BY customer_id
// -- )

// -- SELECT ROUND(COUNT(*) / (
// --     SELECT COUNT(DISTINCT(customer_id)) from delivery 
// -- ) ,2)*100 AS immediate_percentage FROM helper
// -- WHERE orders = delivery

// SELECT ROUND( AVG(CASE WHEN d1.order_date = d1.customer_pref_delivery_date THEN 1 ELSE 0 END) * 100,2) AS immediate_percentage
// FROM delivery d1 
// WHERE (d1.customer_id, d1.order_date) IN ( 
//     SELECT d2.customer_id, MIN(d2.order_date) FROM delivery d2
//     GROUP BY d2.customer_id
// )
