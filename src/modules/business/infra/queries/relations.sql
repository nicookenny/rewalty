CREATE TABLE business_staff (
    business_id UUID NOT NULL,
    user_id UUID NOT NULL,

    role_id UUID NOT NULL,

    PRIMARY KEY (business_id, user_id),
    FOREIGN KEY (business_id) REFERENCES business(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (role_id) REFERENCES business_roles(id)
);

CREATE TABLE business_clients (
    business_id UUID NOT NULL,
    user_id UUID NOT NULL,

    balance NUMERIC NOT NULL DEFAULT 0,
    points NUMERIC NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (business_id) REFERENCES business(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE (business_id, user_id)
);