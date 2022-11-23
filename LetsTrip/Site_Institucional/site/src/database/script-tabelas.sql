create database letstrip;
use letstrip;


CREATE TABLE viagem(
	idViagem INT PRIMARY KEY AUTO_INCREMENT,
	nome_viagem VARCHAR(20)
);

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fkViagem int,
	FOREIGN key (fkViagem) REFERENCES favoritos(idFavoritos)
);

CREATE TABLE comentarioSite (
   idComentario INT PRIMARY key AUTO_INCREMENT,
   voto int,
   comentario VARCHAR(150),
   CONSTRAINT chkVoto CHECK (voto = 0 OR voto = 1 OR voto = 2 OR voto = 3 OR voto = 4 OR voto = 5)
);

select * from usuario;
select * from favoritos;
select * from comentarioSite;

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