-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	quantity DECIMAL(size, 10) NOT NULL,
    unit VARCHAR(20),
    purchased BOOLEAN DEFAULT false
);

INSERT INTO items (name, quantity, unit, purchased)
VALUES ('Bananas', 400, 'lbs');

SELECT * FROM items;