CREATE DATABASE proyecto_integrador_final_definitivo;

USE proyecto_integrador_final_definitivo;

CREATE TABLE usuario(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(150) NOT NULL,
contraseña VARCHAR(150) NOT NULL,
fecha_nacimiento DATE NOT NULL,
dni INT UNIQUE NOT NULL,
texto VARCHAR(850) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
texto_imagen VARCHAR(850) NOT NULL,
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
texto_comentario VARCHAR(850) NOT NULL,
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
VALUE(DEFAULT, 'roqueperez@gmail.com', 'contraseña', '1955-06-09', 132202, 'https://conteudo.imguol.com.br/c/esporte/c5/2023/02/23/lenda-do-independiente-ricardo-enrique-bochini-posta-com-a-copa-intercontinental-1677151188011_v2_900x506.jpg', NULL, NULL, NULL);

INSERT INTO usuario
VALUE(DEFAULT, 'juanfernandez@gmail.com', 'aguero29', '2004-06-19', 489299, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elgrafico.com.ar%2Farticulo%2Fprimera-division%2F40266%2Fproblemas-en-independiente-se-desgarro-saltita-gonzalez&psig=AOvVaw1Z3AIxHr6FfKaGjb51s2XR&ust=1712695603214000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNC7hMS-s4UDFQAAAAAdAAAAABAE', NULL, NULL, NULL);

INSERT INTO usuario
VALUE(DEFAULT, 'rodrigogala@gmail.com', 'galati19', '1985-03-29', 213299, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/330px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg', NULL, NULL, NULL);

INSERT INTO usuario
VALUE(DEFAULT, 'messilio@gmail.com', 'antonella2121', '1987-07-24', 553209, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg', NULL, NULL, NULL);

INSERT INTO usuario
VALUE(DEFAULT, 'lisandr0lazaba@gmail.com', 'lachsipaesuna', '2005-06-30', 453909, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/20150331_2026_AUT_BIH_2177_Edin_D%C5%BEeko_%28cropped%29.jpg/375px-20150331_2026_AUT_BIH_2177_Edin_D%C5%BEeko_%28cropped%29.jpg', NULL, NULL, NULL);

INSERT INTO usuario
VALUE(DEFAULT, 'andufer@gmail.com', 'racingpasion', '2013-06-15', 454681, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lautaro_Mart%C3%ADnez_%28cropped%29.jpg/330px-Lautaro_Mart%C3%ADnez_%28cropped%29.jpg', NULL, NULL, NULL);

SELECT * FROM productos;
INSERT INTO productos
VALUE(DEFAULT, "https://kappaarg.vtexassets.com/arquivos/ids/230771/Imagen-1.jpg?v=638261923614600000", "camiseta tigre", "Camiseta XL version jugador material pesado y frio", DEFAULT, DEFAULT, DEFAULT, 1);

INSERT INTO productos
VALUE(DEFAULT, "https://http2.mlstatic.com/D_NQ_NP_671397-MLU69775205422_062023-O.webp", "termo stanley", "termo stanley material metal color blanco", DEFAULT, DEFAULT, DEFAULT, 2);

INSERT INTO productos
VALUE(DEFAULT, "https://static.wixstatic.com/media/b7689f_bd4c9a7ae2df4550be5498266a905211~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg", "peluche baby dragon", "baby dragon peluche muy tierno", DEFAULT, DEFAULT, DEFAULT, 3);

INSERT INTO productos
VALUE(DEFAULT, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrx_0O1swHn5AW8FtbvYxf5HNhg_h30_Vn24-yx-pVOA&s", "auriculares razer kraken green", "Auriculares alcochados con microfono incluido", DEFAULT, DEFAULT, DEFAULT, 4);

INSERT INTO productos
VALUE(DEFAULT, "https://ciudad-muebles.com.ar/wp-content/uploads/2023/02/400-70.jpg", "mesa ratona", "mesa ratona elevable multifuncion de 80x46cm", DEFAULT, DEFAULT, DEFAULT, 5);

INSERT INTO productos
VALUE(DEFAULT, 'https://www.tecnologia-informatica.com/wp-content/uploads/2018/08/caracteristicas-de-las-computadoras-1.jpeg', 'computadora de escritorio', 'porcesador intel i7 de novena generación', DEFAULT, DEFAULT, DEFAULT, 1);

INSERT INTO productos
VALUE(DEFAULT, 'https://tienda.personal.com.ar/images/720/webp/i_Phone_14_Pro_Deep_Purple_303ce73cf6.png', 'iphone 14', 'color negro y con 256 gb de espacio', DEFAULT, DEFAULT, DEFAULT, 2);

INSERT INTO productos
VALUE(DEFAULT, 'https://images.fravega.com/f1000/2296f5cb8cfdc57969146a67e50edb5d.jpg', 'reloj garimng forerunner', 'color negro y azul, con conexión bluetooth', DEFAULT, DEFAULT, DEFAULT, 3);

INSERT INTO productos
VALUE(DEFAULT, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChG6c_8vN8ucRg174y_3T7YNqV8nNH8uIbwWFCWNleg&s', 'mancuerna de 10kg', 'mancuernas de 10kg ideal para entrenar en tu casa', DEFAULT, DEFAULT, DEFAULT, 4);

INSERT INTO productos
VALUE(DEFAULT, 'https://http2.mlstatic.com/D_NQ_NP_844329-MLA54129890218_032023-O.webp', 'mate argentino', 'Mate Camionero De Vidrio Cuero Vacuno Virola De Aluminio', DEFAULT, DEFAULT, DEFAULT, 5); 

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

