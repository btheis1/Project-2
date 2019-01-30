DROP DATABASE IF EXISTS food_db;
-- Creates the "blogger" database --
CREATE DATABASE food_db;
USE food_db;
CREATE TABLE ingredients (
  id Int AUTO_INCREMENT NOT NULL,
  name VARCHAR(250) NOT NULL,
  category VARCHAR(50) NOT NULL,
  PRIMARY KEY ( id ) 
);