-- Active: 1700346242733@@dpg-clcjb8eg1b2c73evkotg-a.oregon-postgres.render.com@5432@sem6db23secure

create table
    tbl_role (
        id SERIAL PRIMARY key,
        name_role varchar(100),
        is_active BOOLEAN DEFAULT true,
        created_date TIMESTAMP DEFAULT current_timestamp,
        deleted_date TIMESTAMP,
        update_date TIMESTAMP
    );

insert into tbl_role (name_role) values ('Admin'), ('Client');

create table
    tbl_users (
        user_name varchar(30) PRIMARY key,
        email VARCHAR(70) UNIQUE,
        pass VARCHAR(30),
        profile_picture bytea,
        id_role int REFERENCES tbl_role(id),
        is_active BOOLEAN DEFAULT true,
        created_date TIMESTAMP DEFAULT current_timestamp,
        deleted_date TIMESTAMP,
        update_date TIMESTAMP
    );

INSERT INTO
    tbl_users (user_name, email, pass, id_role)
values (
        'murillo23',
        'murillo@unitec.edu',
        'mjmz23$',
        1
    ), (
        'alumno01',
        'alumno@unitec.edu',
        'mjmz24$',
        2
    );

select *
from tbl_users
where
    user_name = 'murillo23'
    and pass = 'mjmz23$'
    and is_active = true;

drop table tbl_example;

create table
    tbl_example (
        id serial primary key,
        data_example varchar(200),
        user_name varchar(500)
    )