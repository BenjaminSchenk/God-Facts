DROP TABLE IF EXISTS pantheon;

CREATE TABLE pantheon (
    name varchar(50) PRIMARY KEY,
    description text
);

DROP TABLE IF EXISTS gods;

CREATE TABLE gods (
    name varchar(20) PRIMARY KEY,
    god_goddess_of text,
    info text,
    fun_facts text,
    pantheon_name varchar(20)
);