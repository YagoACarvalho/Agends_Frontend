ALTER TABLE usuarios
ADD COLUMN configuracao_id BIGINT;

ALTER TABLE usuarios
ADD CONSTRAINT fk_usuario_configuracao
FOREIGN KEY (configuracao_id) REFERENCES configuracoes(id);
