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
   id INT auto_increment,
   comentario VARCHAR(150),
   fkUsuario INT,
   FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
   PRIMARY KEY (id, fkUsuario)
);

INSERT INTO viagem (nome_viagem) VALUES
	('Holambra'),
    ('São Roque'),
    ('Ilha bela'),
    ('Joanópolis'),
    ('Campos do Jordão'),
    ('Águas de São Pedro'),
    ('Paraty'),
    ('Extrema'),
    ('Águas de Lindóia'),
    ('Serra Negra');
    

INSERT INTO usuario (nome, email, senha, fkViagem) VALUES
	('Maessio Sousa', 'maessiosousa@sptech.com', '12345678', 5),
    ('Bada', 'bada@sptech.com', '12345678', 5),
    ('Oseln', 'oseln@sptech.com', '12345678', 5),
    ('Romul', 'romul@sptech.com', '12345678', 5),
    ('Zekiwu', 'zekiwu@sptech.com', '12345678', 5),
    ('Podil', 'podil@sptech.com', '12345678', 5),
    ('Siorifu', 'siorifu@sptech.com', '12345678', 5),
    ('Picyoce', 'picyoce@sptech.com', '12345678', 5),
    ('Cere', 'cere@sptech.com', '12345678', 4),
    ('Pasul', 'pasul@sptech.com', '12345678', 4),
	('Arcoa', 'arcoa@sptech.com', '12345678', 4),
    ('Zuywe', 'zuywe@sptech.com', '12345678', 4),
    ('Fauno', 'fauno@sptech.com', '12345678', 3),
    ('Vabro', 'vabro@sptech.com', '12345678', 3),
    ('Bedoy', 'bedoy@sptech.com', '12345678', 3),
    ('Suysi', 'suysi@sptech.com', '12345678', 3),
    ('Wuoga', 'wuoga@sptech.com', '12345678', 1),
    ('Cyeme', 'Cyeme@sptech.com', '12345678', 9),
	('Arcoa', 'Arcoa@sptech.com', '12345678', 7),
    ('Ciako', 'Ciako@sptech.com', '12345678', 2),
    ('Xiucu', 'Xiucu@sptech.com', '12345678', 2),
    ('Gahoil', 'Gahoil@sptech.com', '12345678', 6),
    ('Sawoba', 'Sawoba@sptech.com', '12345678', 6),
    ('Hemoy', 'Hemoy@sptech.com', '12345678', 6),
    ('Keohu', 'Keohu@sptech.com', '12345678', 6),
    ('Fuvyo', 'fuvyo@sptech.com', '12345678', 2);
    
    


INSERT INTO comentarioSite VALUES 
	   (1 , 'Site incrível', 1),
      (2 , 'n voluptate velit esse cillum ', 2),
      (3 , 'at nulla pariat', 3),
      (4 , 'Excepteur sint occaec', 4),
      (5 , 'dolor sit amet, ', 5),
      (6 , ' do eiusmod tempor incidid', 6),
      (7 , 'lore magna aliqua. Ut e', 7),
      (8 , 'sed do eiusmod tempor i', 8),
      (9 , 'magni dolores eos qui r', 9),
      (10, 'trum exercitatione', 10),
      (11, 'nisi ut aliquid ex ea commodi conseq', 11),
      (12, 'iure reprehenderit qui in ', 12),
      (13, 'inventore veritatis et qu', 13),
      (14, 'sed quia consequuntur m', 14),
      (15, 'laboriosam, nisi ut a', 15);

SELECT * FROM usuario;
SELECT * FROM comentarioSite;
SELECT * FROM viagem;

SELECT v.nome_viagem, count(u.fkViagem) AS qtd_viagem
                FROM usuario u JOIN viagem v ON u.fkViagem = v.id 
                    WHERE u.fkViagem IS NOT NULL 
                        GROUP BY u.fkViagem ORDER BY v.nome_viagem;