DROP DATABASE IF EXISTS veggieburgers_db;

CREATE DATABASE veggieburgers_db;

USE veggieburgers_db;

CREATE TABLE veggieburgers_db.burgers
(
  id int NOT NULL AUTO_INCREMENT,
  veggieburger_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date_consumed TIMESTAMP,
  PRIMARY KEY (id)
);