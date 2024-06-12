CREATE DATABASE proyecto_integrador_final_definitivo;

USE proyecto_integrador_final_definitivo;

CREATE TABLE usuario(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(150) NOT NULL,
email VARCHAR(150) NOT NULL,
contraseña VARCHAR(150) NOT NULL,
fecha_nacimiento DATE NOT NULL,
dni INT UNIQUE NOT NULL,
imagen_de_perfil VARCHAR(850) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
imagen VARCHAR(850) NOT NULL,
nombre VARCHAR(50) NOT NULL,
descripcion VARCHAR(250) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
id_usuario INT UNSIGNED,
FOREIGN KEY(id_usuario) REFERENCES usuario(id)
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
comentario VARCHAR(850) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
id_usuario INT UNSIGNED,
id_productos INT UNSIGNED,
FOREIGN KEY(id_usuario) REFERENCES usuario(id),
FOREIGN KEY(id_productos) REFERENCES productos(id)
);


SELECT * FROM usuario;
INSERT INTO usuario
VALUE(DEFAULT, 'Roque', 'roqueperez@gmail.com', 'contraseña', '1955-06-09', 132202, 'https://conteudo.imguol.com.br/c/esporte/c5/2023/02/23/lenda-do-independiente-ricardo-enrique-bochini-posta-com-a-copa-intercontinental-1677151188011_v2_900x506.jpg', NULL, NULL, NULL);

INSERT INTO usuario
VALUE(DEFAULT, 'JuanFer', 'juanfernandez@gmail.com', 'aguero29', '2004-06-19', 489299, 'https://www.elgrafico.com.ar/media/cache/pub_news_details_large/media/i/33/4c/334c4b51b76989eaf4901a445164564c0972c972.jpg', NULL, NULL, NULL);

INSERT INTO usuario
VALUE(DEFAULT, 'Rodriga12', 'rodrigogala@gmail.com', 'galati19', '1985-03-29', 213299, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/330px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg', NULL, NULL, NULL);

INSERT INTO usuario
VALUE(DEFAULT, 'LioM', 'messilio@gmail.com', 'antonella2121', '1987-07-24', 553209, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg', NULL, NULL, NULL);

INSERT INTO usuario
VALUE(DEFAULT, 'Licha', 'lisandr0lazaba@gmail.com', 'lachsipaesuna', '2005-06-30', 453909, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/20150331_2026_AUT_BIH_2177_Edin_D%C5%BEeko_%28cropped%29.jpg/375px-20150331_2026_AUT_BIH_2177_Edin_D%C5%BEeko_%28cropped%29.jpg', NULL, NULL, NULL);

INSERT INTO usuario
VALUE(DEFAULT, 'Andres', 'andufer@gmail.com', 'racingpasion', '2013-06-15', 454681, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lautaro_Mart%C3%ADnez_%28cropped%29.jpg/330px-Lautaro_Mart%C3%ADnez_%28cropped%29.jpg', NULL, NULL, NULL);

SELECT * FROM productos;
INSERT INTO productos
VALUE(DEFAULT, "https://levisarg.vtexassets.com/arquivos/ids/818830-500-auto?v=638314348913700000&width=500&height=auto&aspect=true", "LEVIS HM POLO SNORKEL", "Polo blanca con diseño", DEFAULT, DEFAULT, DEFAULT, 1);

INSERT INTO productos
VALUE(DEFAULT, "https://levisarg.vtexassets.com/arquivos/ids/872692-500-auto?v=638442218279070000&width=500&height=auto&aspect=true", "VINTAGE FIT TEE OVERDYE VARSITY", "Remera vintage de color azul", DEFAULT, DEFAULT, DEFAULT, 2);

INSERT INTO productos
VALUE(DEFAULT, "https://levisarg.vtexassets.com/arquivos/ids/823110-800-auto?v=638320364535600000&width=800&height=auto&aspect=true", "GRAPHIC SET IN NECK TEE 501", "Remera negra con diseño", DEFAULT, DEFAULT, DEFAULT, 3);

INSERT INTO productos
VALUE(DEFAULT, "https://levisarg.vtexassets.com/arquivos/ids/659973-500-auto?v=638041464988200000&width=500&height=auto&aspect=true", "SS RELAXED FIT TEE 'ALL OVER POSTER'", "Remera negra con logo de Levis", DEFAULT, DEFAULT, DEFAULT, 4);

INSERT INTO productos
VALUE(DEFAULT, "https://levisarg.vtexassets.com/arquivos/ids/873528-1200-auto?v=638481849287400000&width=1200&height=auto&aspect=true", "ARGENTINA LEVIS EXCLUSIVE", "Remera Levis ARGENTINA", DEFAULT, DEFAULT, DEFAULT, 5);

INSERT INTO productos
VALUE(DEFAULT, 'https://levisarg.vtexassets.com/arquivos/ids/782226-500-auto?v=638285203434330000&width=500&height=auto&aspect=true', 'GRAPHIC SET IN NECK LEVIS VARSITY', 'Remera negra con Levis en el pecho', DEFAULT, DEFAULT, DEFAULT, 1);

INSERT INTO productos
VALUE(DEFAULT, 'https://levisarg.vtexassets.com/arquivos/ids/872732-800-auto?v=638443029972170000&width=800&height=auto&aspect=true', "SS RELAEXD FIT TEE 'BATIK'", 'Remera color Caviar Batik', DEFAULT, DEFAULT, DEFAULT, 2);

INSERT INTO productos
VALUE(DEFAULT, 'https://levisarg.vtexassets.com/arquivos/ids/698247-500-auto?v=638163044333000000&width=500&height=auto&aspect=true', 'GRAPHIC SET IN NECK', 'Remera color Forged Iron', DEFAULT, DEFAULT, DEFAULT, 3);

INSERT INTO productos
VALUE(DEFAULT, 'https://levisarg.vtexassets.com/arquivos/ids/745278-800-auto?v=638240002715800000&width=800&height=auto&aspect=true', 'SS RELAXED FIT GREEN', 'Remera color verde', DEFAULT, DEFAULT, DEFAULT, 4);

INSERT INTO productos
VALUE(DEFAULT, 'https://levisarg.vtexassets.com/arquivos/ids/873638/2249135640_1.jpg?v=638484538310170000', 'GRAPHIC SET IN NECK WHITE', 'Remera blanca de cuello redondo', DEFAULT, DEFAULT, DEFAULT, 5); 

SELECT * FROM comentarios;
INSERT INTO comentarios
VALUE(DEFAULT, "Los envios son gratis? muchas gracias",NULL,NULL,NULL,1,1);

INSERT INTO comentarios
VALUE(DEFAULT, "Lindo producto! genial",NULL,NULL,NULL,1,2);

INSERT INTO comentarios
VALUE(DEFAULT, "Muy bonito",NULL,NULL,NULL,1,3);

INSERT INTO comentarios
VALUE(DEFAULT, "Muy bueno, la mejor que vi",NULL,NULL,NULL,1,4);

INSERT INTO comentarios
VALUE(DEFAULT, "buenisimooooo",NULL,NULL,NULL,1,5);

INSERT INTO comentarios
VALUE(DEFAULT, "Muy bueno, la mejor que vi",NULL,NULL,NULL,2,6);

INSERT INTO comentarios
VALUE(DEFAULT, "lo mejor precio-calidad",NULL,NULL,NULL,2,7);

INSERT INTO comentarios
VALUE(DEFAULT, "me encantaria comprarlo",NULL,NULL,NULL,2,8);

INSERT INTO comentarios
VALUE(DEFAULT, "Muy fachero",NULL,NULL,NULL,2,9);

INSERT INTO comentarios
VALUE(DEFAULT, "me encantan tus productos",NULL,NULL,NULL,2,10);

INSERT INTO comentarios
VALUE(DEFAULT, "me compraria 100!",NULL,NULL,NULL,3,1);

INSERT INTO comentarios
VALUE(DEFAULT, "no me gusta mucho sinceramente",NULL,NULL,NULL,3,2);

INSERT INTO comentarios
VALUE(DEFAULT, "me compro uno yo y le doy otro a mi hermano",NULL,NULL,NULL,3,3);

INSERT INTO comentarios
VALUE(DEFAULT, "mi tio quiere uno",NULL,NULL,NULL,3,4);

INSERT INTO comentarios
VALUE(DEFAULT, "es genial",NULL,NULL,NULL,3,5);

INSERT INTO comentarios
VALUE(DEFAULT, "lo mejor que hay en la pagina",NULL,NULL,NULL,4,6);

INSERT INTO comentarios
VALUE(DEFAULT, "quiero 20! jaja!",NULL,NULL,NULL,4,7);

INSERT INTO comentarios
VALUE(DEFAULT, "me encantooo",NULL,NULL,NULL,4,8);

INSERT INTO comentarios
VALUE(DEFAULT, "quiero todos los que tenes",NULL,NULL,NULL,4,9);

INSERT INTO comentarios
VALUE(DEFAULT, "en cuanto llegaria?",NULL,NULL,NULL,4,10);

INSERT INTO comentarios
VALUE(DEFAULT, "no me gusto",NULL,NULL,NULL,5,1);

INSERT INTO comentarios
VALUE(DEFAULT, "lo tenes de otro color?",NULL,NULL,NULL,5,2);

INSERT INTO comentarios
VALUE(DEFAULT, "hay de otros tamaños?",NULL,NULL,NULL,5,3);

INSERT INTO comentarios
VALUE(DEFAULT, "la mejor compra de la semana",NULL,NULL,NULL,5,4);

INSERT INTO comentarios
VALUE(DEFAULT, "quiero comprar!",NULL,NULL,NULL,5,5);

INSERT INTO comentarios
VALUE(DEFAULT, "es genial",NULL,NULL,NULL,1,1);

INSERT INTO comentarios
VALUE(DEFAULT, "muy bueno quierooo",NULL,NULL,NULL,2,2);

INSERT INTO comentarios
VALUE(DEFAULT, "envio como es?",NULL,NULL,NULL,3,3);

INSERT INTO comentarios
VALUE(DEFAULT, "la verdad que esta masomenos",NULL,NULL,NULL,4,4);

INSERT INTO comentarios
VALUE(DEFAULT, "top el producto",NULL,NULL,NULL,5,5);

