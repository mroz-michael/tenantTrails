USE tenantTrails;

SELECT * FROM apartments;

SELECT * FROM reviews WHERE rating > 4;

SELECT name from users WHERE name like "Michael%";

SELECT reviews.id as 'review id', apartments.name as 'apartment name', users.name as 'author', reviews.rating, reviews.body
    FROM reviews 
    JOIN apartments ON reviews.apt_id = apartments.id
    JOIN users ON reviews.user_id = users.id;

SELECT AVG(rating) as 'Average Rating', apartments.name as "Apartment Name"
    FROM reviews
    JOIN apartments ON reviews.apt_id = apartments.id
    GROUP BY reviews.apt_id;