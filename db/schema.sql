USE  c7nvz2ld5h6nv2a4;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  veggieburger_name varchar(300) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  date_consumed TIMESTAMP,
  PRIMARY KEY(id)
);

