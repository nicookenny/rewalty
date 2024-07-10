CREATE TABLE business_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_id UUID NOT NULL,
    role_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (business_id) REFERENCES Business(id),
    UNIQUE (business_id, role_name)
);

CREATE TABLE business (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    logo VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    identifier VARCHAR(255) NOT NULL, -- CUIT
    address VARCHAR(255) NOT NULL
)
