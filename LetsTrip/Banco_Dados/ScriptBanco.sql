CREATE DATABASE letstrip;
USE letstrip;

CREATE TABLE viagem(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome_viagem VARCHAR(20)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fkViagem INT,
	FOREIGN key (fkViagem) REFERENCES viagem(id)
);

CREATE TABLE comentarioSite (
   id INT,
   voto INT,
   comentario VARCHAR(150),
   fkUsuario INT,
   FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
   PRIMARY KEY (id, fkUsuario),
   CONSTRAINT chkVoto CHECK (voto = 0 OR voto = 1 OR voto = 2 OR voto = 3 OR voto = 4 OR voto = 5)
);

INSERT INTO viagem (nome_viagem) VALUES
	('Holambra'),
    ('São Roque'),
    ('Ilha bela'),
    ('Joanópolis'),
    ('Campos do Jordão'),
    ('Águas de São Pedro'),
    ('Parati'),
    ('Extrema'),
    ('Águas de Lindóia'),
    ('Serra Negra');
    

INSERT INTO usuario (nome, email, senha) VALUES
	('Maessio Sousa', 'maessiosousa@sptech.com', '12345678'),
    ('Bada', 'bada@sptech.com', '12345678'),
    ('Oseln', 'oseln@sptech.com', '12345678'),
    ('Romul', 'romul@sptech.com', '12345678'),
    ('Zekiwu', 'zekiwu@sptech.com', '12345678'),
    ('Podil', 'podil@sptech.com', '12345678'),
    ('Siorifu', 'siorifu@sptech.com', '12345678'),
    ('Picyoce', 'picyoce@sptech.com', '12345678'),
    ('Cere', 'cere@sptech.com', '12345678'),
    ('Pasul', 'pasul@sptech.com', '12345678'),
	('Arcoa', 'arcoa@sptech.com', '12345678'),
    ('Zuywe', 'zuywe@sptech.com', '12345678'),
    ('Fauno', 'fauno@sptech.com', '12345678'),
    ('Vabro', 'vabro@sptech.com', '12345678'),
    ('Bedoy', 'bedoy@sptech.com', '12345678'),
    ('Suysi', 'suysi@sptech.com', '12345678'),
    ('Wuoga', 'wuoga@sptech.com', '12345678'),
    ('Cyeme', 'Cyeme@sptech.com', '12345678'),
	('Arcoa', 'Arcoa@sptech.com', '12345678'),
    ('Ciako', 'Ciako@sptech.com', '12345678'),
    ('Xiucu', 'Xiucu@sptech.com', '12345678'),
    ('Gahoil', 'Gahoil@sptech.com', '12345678'),
    ('Sawoba', 'Sawoba@sptech.com', '12345678'),
    ('Hemoy', 'Hemoy@sptech.com', '12345678'),
    ('Keohu', 'Keohu@sptech.com', '12345678'),
    ('Fuvyo', 'fuvyo@sptech.com', '12345678');
    


INSERT INTO comentarioSite VALUES 
	  (1 , 5, 'Site incrível', 1),
      (2 , 4, 'n voluptate velit esse cillum ', 2),
      (3 , 3, 'at nulla pariat', 3),
      (4 , 2, 'Excepteur sint occaec', 4),
      (5 , 1, 'dolor sit amet, ', 5),
      (6 , 5, ' do eiusmod tempor incidid', 6),
      (7 , 4, 'lore magna aliqua. Ut e', 7),
      (8 , 3, 'sed do eiusmod tempor i', 8),
      (9 , 2, 'magni dolores eos qui r', 9),
      (10 , 1, 'trum exercitatione', 10),
      (11 , 5, 'nisi ut aliquid ex ea commodi conseq', 11),
      (12 , 4, 'iure reprehenderit qui in ', 12),
      (13 , 3, 'inventore veritatis et qu', 13),
      (14 , 2, 'sed quia consequuntur m', 14),
      (15 , 1, 'laboriosam, nisi ut a', 15);

update usuario set fkViagem=5 where id=1;

SELECT * FROM usuario;
SELECT * FROM comentarioSite;
SELECT * FROM viagem;

SELECT v.nome_viagem, count(u.fkViagem) AS qtd_viagem
                FROM usuario u JOIN viagem v ON u.fkViagem = v.id 
                    WHERE u.fkViagem IS NOT NULL 
                        GROUP BY u.fkViagem order by v.nome_viagem;