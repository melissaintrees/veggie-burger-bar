### Schema

CREATE DATABASE veggieburgers_db;
USE veggieburgers_db;

CREATE TABLE veggieburgers
(
  id int NOT NULL AUTO_INCREMENT,
  veggieburger_name varchar(255) NOT NULL,
  devoured BOOLEAN default false,
  date_consumed TIMESTAMP,
  PRIMARY KEY (id)
);