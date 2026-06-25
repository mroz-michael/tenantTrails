CREATE database if not exists tenantTrails;
USE tenantTrails;

CREATE USER 'mmroz'
    IDENTIFIED WITH mysql_native_password BY 'pw1234';
GRANT ALL PRIVILEGES ON tenantTrails.* TO 'mmroz';
FLUSH PRIVILEGES;


CREATE TABLE IF NOT EXISTS 
    apartments (
        id INT PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        address VARCHAR(200) NOT NULL,
        neighbourhood VARCHAR(80) NOT NULL,
        landlord VARCHAR(120),
        units INT,
        built INT
);

CREATE TABLE IF NOT EXISTS
    users (
        id INT PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(120) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        initials VARCHAR(5)
);

CREATE TABLE IF NOT EXISTS 
    reviews (
        id INT PRIMARY KEY,
        apt_id INT NOT NULL,
        user_id INT NOT NULL,
        rating TINYINT NOT NULL,
        body TEXT NOT NULL,
        created DATE NOT NULL,
        FOREIGN KEY (apt_id) REFERENCES apartments(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS
    comments (
        id INT PRIMARY KEY,
        content VARCHAR(255) NOT NULL,
        r_id INT NOT NULL,
        user_id INT NOT NULL,
        created DATE NOT NULL,
        FOREIGN KEY (r_id) REFERENCES reviews(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Starter Data:

INSERT INTO apartments (id, name, address, neighbourhood, landlord, units, built) VALUES
    (2, 'Le Marchant Towers', '1585 Le Marchant St', 'West End', 'Killam Properties', 88, 1975),
    (3, 'Fenwick Tower', '5599 Fenwick St', 'Downtown', 'Templeton Properties', 314, 1971),
    (4, 'Park Victoria', '1496 Carlton St', 'South End', 'Southwest Properties', 60, 2015);

INSERT INTO users (id, name, email, password, initials) VALUES
    (1, 'Alex Mitchell', 'alex@dal.ca', 'password123', 'AM'),
    (2, 'James Chen', 'james@example.com', 'pass', 'JC'),
    (3, 'Michael Mroz', 'mmroz@example.com', 'pw1234', 'MM');

INSERT INTO reviews (id, apt_id, user_id, rating, body, created) VALUES
    (5, 2, 2, 4, 'Responsive management, though parking is a five-month wait.', '2026-04-02'),
    (8, 3, 1, 4, 'Incredible 28th-floor view; elevators break down often.', '2026-04-12'),
    (11, 4, 2, 5, 'Best rental experience in Halifax. Maintenance is fast.', '2026-04-22');

INSERT INTO comments (id, content, r_id, user_id, created) VALUES
    (1, "Nice Review Mate!", 11, 1, "2026-06-10"),
    (2, "I agree!", 5, 1, "2026-06-11");
