CREATE TABLE users (
    id uuid not null references auth.users on delete cascade,
    email text,
    
    primary key (id)
);
