CREATE DATABASE ivsapi;
CREATE TABLE organizations(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL
);
CREATE TABLE buildings(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    zipcode int NOT NULL,
    organizations_id int NOT NULL,
    FOREIGN KEY (organizations_id) REFERENCES organizations(id)
);
CREATE TABLE rooms(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    attendees int NOT NULL,
    buildings_id int NOT NULL,
    FOREIGN KEY (buildings_id) REFERENCES buildings(id)
);