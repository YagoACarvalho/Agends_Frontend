ALTER TABLE usuarios
ADD CONSTRAINT fk_configuracao
FOREIGN KEY (configuracao_id) REFERENCES configuracoes(id);
