CREATE TABLE tb_expanse (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    amount DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL,
    user_id BIGINT,
    category VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES tb_user(id)
);
