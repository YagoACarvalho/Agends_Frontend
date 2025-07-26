-- V1__create_tables_salao.sql

CREATE TABLE procedimentos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    servico VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);

CREATE TABLE usuarios (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE agendamentos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    numero_telefone VARCHAR(20) NOT NULL,
    procedimento_id BIGINT NOT NULL,
    horario DATETIME NOT NULL,
    CONSTRAINT fk_procedimento FOREIGN KEY (procedimento_id) REFERENCES procedimentos(id)
);
