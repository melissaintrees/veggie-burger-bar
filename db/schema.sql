DROP DATABASE IF EXISTS ijrbt61g1zevcgx3;

CREATE DATABASE ijrbt61g1zevcgx3;

USE  ijrbt61g1zevcgx3;

CREATE TABLE veggieburgers_db
(
  id int NOT NULL AUTO_INCREMENT,
  veggieburger_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date_consumed TIMESTAMP,
  PRIMARY KEY (id)
);