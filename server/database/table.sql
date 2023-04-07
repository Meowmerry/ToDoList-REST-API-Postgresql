create table users
(
        id  bigserial,
        username varchar not null,
        email varchar not null,
        password varchar not null,
        password_updated_at timestamptz,
        first_name varchar not null default '',
        last_name varchar not null default ''
);

create table listTodo (
    id bigserial
    items varchar not null,
    isDone  boolean null,
    minutes INTEGER null
);