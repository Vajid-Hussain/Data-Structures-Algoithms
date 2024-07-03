// SELECT 
// DISTINCT(t1.id), 
// CASE WHEN t1.p_id IS null THEN 'Root' ELSE 
//     CASE WHEN t2.p_id IS NULL THEN 'Leaf' ELSE 'Inner' END
// END  AS type
// FROM tree t1
// LEFT JOIN tree t2 ON t1.id = t2.p_id