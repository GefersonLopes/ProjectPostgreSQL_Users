CREATE TABLE categories(
	id BIGSERIAL PRIMARY KEY NOT NULL,
  	name VARCHAR(120) UNIQUE NOT NULL
);

CREATE TABLE products (
	id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  	name VARCHAR(240) NOT NULL,
  	price DECIMAL(10,2) NOT NULL,
  	category_id INTEGER NOT NULL,
  	CONSTRAINT FK_categori_id FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);