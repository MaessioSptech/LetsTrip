create database letstrip;
use letstrip;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE favoritos(
	id INT PRIMARY KEY AUTO_INCREMENT,
	viagem_favorita VARCHAR(100),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from usuario;
select * from favoritos;

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
                
select fk_usuario from favoritos;

update favoritos set viagem_favorita = 'extrema' where fk_usuario = 2;
