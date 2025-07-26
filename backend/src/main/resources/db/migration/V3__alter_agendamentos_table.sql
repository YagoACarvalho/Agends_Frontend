ALTER TABLE agendamentos ADD COLUMN procedimento_id BIGINT NOT NULL;
ALTER TABLE agendamentos
ADD CONSTRAINT fk_procedimento
FOREIGN KEY (procedimento_id) REFERENCES procedimentos(id);
