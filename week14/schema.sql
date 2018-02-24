CREATE DATABASE burgers_db
USE burgers_db

CREATE TABLE burgers (
id int primary key auto_increment,
burger varchar(50) not null,
eaten boolean
);