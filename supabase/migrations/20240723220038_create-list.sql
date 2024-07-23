CREATE TABLE lists (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), 
    title text NOT NULL,
    description text
);

CREATE TABLE list_itens (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), 
    title text NOT NULL,
    is_done boolean DEFAULT FALSE, 
    list_id uuid NOT NULL REFERENCES lists(id)
);