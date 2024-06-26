CREATE TABLE customers (
    id VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    create_dt timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE (email)
);

CREATE TABLE products(
    id VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE orders(
    id VARCHAR(255) NOT NULL,
    order_date timestamp(0)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
    prod_Id VARCHAR(255),
    cust_Id VARCHAR(255),
    PRIMARY KEY (id)
    CONSTRAINT fk_product
      FOREIGN KEY(prod_Id) 
        REFERENCES products(id)
    CONSTRAINT fk_customer
      FOREIGN KEY(cust_id) 
        REFERENCES customers(id)
)

