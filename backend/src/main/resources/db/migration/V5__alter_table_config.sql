ALTER TABLE configuracoes
    ADD COLUMN dia_semana VARCHAR(20) NOT NULL AFTER id,
    ADD COLUMN ativo BOOLEAN NOT NULL DEFAULT TRUE AFTER horario_fechamento;
