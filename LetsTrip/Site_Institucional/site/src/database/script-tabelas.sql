CREATE DATABASE letstrip;
USE letstrip;


CREATE TABLE viagem(
	idViagem INT PRIMARY KEY AUTO_INCREMENT,
	nome_viagem VARCHAR(20)
);

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fkViagem INT,
	FOREIGN key (fkViagem) REFERENCES viagem(idViagem)
);

CREATE TABLE comentarioSite (
   idComentario INT,
   voto INT,
   comentario VARCHAR(150),
   fkUsuario INT,
   FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
   PRIMARY KEY (idComentario, fkUsuario),
   CONSTRAINT chkVoto CHECK (voto = 0 OR voto = 1 OR voto = 2 OR voto = 3 OR voto = 4 OR voto = 5)
);

SELECT * FROM usuario;
SELECT * FROM favoritos;
SELECT * FROM comentarioSite;

INSERT INTO viagem (nome_viagem) VALUES
	(''),
    (''),
    (''),
    (''),
    (''),
    (''),
    (''),
    (''),
    (''),
    ('');

INSERT INTO usuario (nome, email, senha) VALUES
	('Maessio Sousa', 'maessiosousa@sptech.com', '12345678'),
    ('Maessio Sousa', 'maessiosousa@sptech.com', '12345678'),
    ('Maessio Sousa', 'maessiosousa@sptech.com', '12345678'),
    ('Maessio Sousa', 'maessiosousa@sptech.com', '12345678'),
    ('Maessio Sousa', 'maessiosousa@sptech.com', '12345678'),
    ('Maessio Sousa', 'maessiosousa@sptech.com', '12345678'),
    ('Maessio Sousa', 'maessiosousa@sptech.com', '12345678'),
    ('Maessio Sousa', 'maessiosousa@sptech.com', '12345678'),
    ('Maessio Sousa', 'maessiosousa@sptech.com', '12345678'),
    ('Maessio Sousa', 'maessiosousa@sptech.com', '12345678');


INSERT INTO comentarioSite VALUES 
		( , , '', ),
      ( , , '', ),
      ( , , '', ),
      ( , , '', ),
      ( , , '', ),
      ( , , '', ),
      ( , , '', );

SELECT f.id AS idFavoritos,
            f.viagem_favorita,
            f.fk_usuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM favoritos f
             JOIN usuario u
                ON f.fk_usuario = u.id;
                
SELECT count(f.viagem_favorita) as qtd, f.viagem_favorita FROM favoritos f
             JOIN usuario u
                ON f.fk_usuario = u.id group by f.viagem_favorita;