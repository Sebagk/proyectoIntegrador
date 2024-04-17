const data = {
    usuarios: [
        {
            nombre: 'Roque Perez',
            email: 'roqueperez@gmail.com',
            contraseña: 'contraseña',
            fecha_nacimiento: '1955-06-09',
            dni: 132202,
            imagen: "'https://conteudo.imguol.com.br/c/esporte/c5/2023/02/23/lenda-do-independiente-ricardo-enrique-bochini-posta-com-a-copa-intercontinental-1677151188011_v2_900x506.jpg"

        },
        {
            nombre: 'Juan Fernandez',
            email: 'juanfernandez@gmail.com',
            contraseña: 'aguero29',
            fecha_nacimiento: '2004-06-19',
            dni: 489299,
            imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elgrafico.com.ar%2Farticulo%2Fprimera-division%2F40266%2Fproblemas-en-independiente-se-desgarro-saltita-gonzalez&psig=AOvVaw1Z3AIxHr6FfKaGjb51s2XR&ust=1712695603214000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNC7hMS-s4UDFQAAAAAdAAAAABAE'
        },
        {
            nombre: 'Lio Messi',
            email: 'messilio@gmail.com',
            contraseña: 'antonella2121',
            fecha_nacimiento: '1987-07-24',
            dni: 553209,
            imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg'
        },
        {
            nombre: 'Lisandro Zabala',
            email: 'lisandr0lazaba@gmail.com',
            contraseña: 'lachsipaesuna',
            fecha_nacimiento: '2005-06-30',
            dni: 453909,
            imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/20150331_2026_AUT_BIH_2177_Edin_D%C5%BEeko_%28cropped%29.jpg/375px-20150331_2026_AUT_BIH_2177_Edin_D%C5%BEeko_%28cropped%29.jpg'
        },
        {
            nombre: 'Andres Fernandez',
            email: 'andufer@gmail.com',
            contraseña: 'racingpasion',
            fecha_nacimiento: '2013-06-15',
            dni: 454681,
            imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lautaro_Mart%C3%ADnez_%28cropped%29.jpg/330px-Lautaro_Mart%C3%ADnez_%28cropped%29.jpg'
        }
    ],
    productos: [
        {
            nombre: 'Camiseta tigre', 
            descripcion:'Camiseta XL version jugador material pesado y frio',
            imagen: 'https://kappaarg.vtexassets.com/arquivos/ids/230771/Imagen-1.jpg?v=638261923614600000',
            comentarios: [
                {
                    nombre: 'Roque Perez',
                    comentario: 'Los envios son gratis? muchas gracias',
                    imagen_de_perfil: 'Roque-Perez.jpg'

                },
                {
                    nombre: 'Lio Messi',
                    comentario: 'me compraria 100!',
                    imagen_de_perfil: 'Lio-Messi.jpg'
                },
                {
                    nombre: 'Andres Fernandez',
                    comentario: 'no me gusto',
                    imagen_de_perfil: 'Andres-Fernandez.jpg'
                }
            ]
        },
        {
            nombre: 'Termo Stanley',
            descripcion: 'Termo Stanley material metal color blanco',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_671397-MLU69775205422_062023-O.webp',
            comentarios: [
                {
                    nombre: 'Roque Perez',
                    comentario: 'Lindo producto! genial',
                    imagen_de_perfil: 'Roque-Perez.jpg'

                },
                {
                    nombre: 'Lio Messi',
                    comentario: 'no me gusta mucho sinceramente',
                    imagen_de_perfil: 'Lio-Messi.jpg'
                },
                {
                    nombre: 'Andres Fernandez',
                    comentario: 'lo tenes de otro color?',
                    imagen_de_perfil: 'Andres-Fernandez.jpg'
                }
            ]
        },
        {
            nombre: 'Peluche baby dragon',
            descripcion: 'Baby dragon peluche muy tierno',
            imagen: 'https://static.wixstatic.com/media/b7689f_bd4c9a7ae2df4550be5498266a905211~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
            comentarios: [
                {
                    nombre: 'Roque Perez',
                    comentario: 'Muy bonito',
                    imagen_de_perfil: 'Roque-Perez.jpg'

                },
                {
                    nombre: 'Lio Messi',
                    comentario: 'me compro uno y le doy otro a mi hermano',
                    imagen_de_perfil: 'Lio-Messi.jpg'
                },
                {
                    nombre: 'Andres Fernandez',
                    comentario: 'hay de otros tamaños?',
                    imagen_de_perfil: 'Andres-Fernandez.jpg'
                }
            ]
        },
        {
            nombre: 'Auriculares Razer kraken green',
            descripcion: 'Auriculares acolchados con microfono incluido',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrx_0O1swHn5AW8FtbvYxf5HNhg_h30_Vn24-yx-pVOA&s',
            comentarios: [
                {
                    nombre: 'Roque Perez',
                    comentario: 'Muy bueno, la mejor que vi',
                    imagen_de_perfil: 'Roque-Perez.jpg'

                },
                {
                    nombre: 'Lio Messi',
                    comentario: 'mi tio quiere uno',
                    imagen_de_perfil: 'Lio-Messi.jpg'
                },
                {
                    nombre: 'Andres Fernandez',
                    comentario: 'la mejor compra de la semana',
                    imagen_de_perfil: 'Andres-Fernandez.jpg'
                }
            ]
        },
        {
            nombre: 'Mesa ratona',
            descripcion: 'Mesa ratona elevable multifuncion de 80x46cm',
            imagen: 'https://ciudad-muebles.com.ar/wp-content/uploads/2023/02/400-70.jpg',
            comentarios: [
                {
                    nombre: 'Roque Perez',
                    comentario: 'buenisimooooo',
                    imagen_de_perfil: 'Roque-Perez.jpg'

                },
                {
                    nombre: 'Lio Messi',
                    comentario: 'es genial',
                    imagen_de_perfil: 'Lio-Messi.jpg'
                },
                {
                    nombre: 'Andres Fernandez',
                    comentario: 'quiero comprar!',
                    imagen_de_perfil: 'Andres-Fernandez.jpg'
                }
            ]
        },
        {
            nombre: 'Computadora de escritorio',
            descripcion: 'porcesador intel i7 de novena generación',
            imagen: 'https://www.tecnologia-informatica.com/wp-content/uploads/2018/08/caracteristicas-de-las-computadoras-1.jpeg',
            comentarios: [
                {
                    nombre: 'Juan Fernandez',
                    comentario: 'Muy bueno, la mejor que vi',
                    imagen_de_perfil: 'Juan-Fernandez.jpg'

                },
                {
                    nombre: 'Lisandro Zabala',
                    comentario: 'lo mejor que hay en la pagina',
                    imagen_de_perfil: 'Lisandro-Zabala.jpg'
                },
                {
                    nombre: 'Roque Perez',
                    comentario: 'es genial',
                    imagen_de_perfil: 'Roque-Perez.jpg'
                }
            ]
        },
        {
            nombre: 'Iphone 14',
            descripcion: 'Color negro y con 256 gb de espacio',
            imagen: 'https://tienda.personal.com.ar/images/720/webp/i_Phone_14_Pro_Deep_Purple_303ce73cf6.png',
            comentarios: [
                {
                    nombre: 'Juan Fernandez',
                    comentario: 'lo mejor precio-calidad',
                    imagen_de_perfil: 'Juan-Fernandez.jpg'

                },
                {
                    nombre: 'Lisandro Zabala',
                    comentario: 'quiero 20! jaja!',
                    imagen_de_perfil: 'Lisandro-Zabala.jpg'
                },
                {
                    nombre: 'Juan Fernandez',
                    comentario: 'muy bueno quierooo',
                    imagen_de_perfil: 'Juan-Fernandez.jpg'
                }
            ]
        },
        {
            nombre: 'Reloj Garimng Forerunner',
            descripcion: 'Color negro y azul, con conexión bluetooth',
            imagen: 'https://images.fravega.com/f1000/2296f5cb8cfdc57969146a67e50edb5d.jpg',
            comentarios: [
                {
                    nombre: 'Juan Fernandez',
                    comentario: 'me encantaria comprarlo',
                    imagen_de_perfil: 'Juan-Fernandez.jpg'

                },
                {
                    nombre: 'Lisandro Zabala',
                    comentario: 'me encantooo',
                    imagen_de_perfil: 'Lisandro-Zabala.jpg'
                },
                {
                    nombre: 'Lio Messi',
                    comentario: 'envio como es?',
                    imagen_de_perfil: 'Lio-Messi.jpg'
                }
            ]
        },
        {
            nombre: 'Mancuerna de 10kg',
            descripcion: 'Mancuernas de 10kg ideal para entrenar en tu casa',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChG6c_8vN8ucRg174y_3T7YNqV8nNH8uIbwWFCWNleg&s',
            comentarios: [
                {
                    nombre: 'Juan Fernandez',
                    comentario: 'Muy fachero',
                    imagen_de_perfil: 'Juan-Fernandez.jpg'

                },
                {
                    nombre: 'Lisandro Zabala',
                    comentario: 'quiero todos los que tenes',
                    imagen_de_perfil: 'Lisandro-Zabala.jpg'
                },
                {
                    nombre: 'Lisandro Zabala',
                    comentario: 'la verdad que esta masomenos',
                    imagen_de_perfil: 'Lisandro-Zabala.jpg'
                }
            ]
        },
        {
            nombre: 'Mate argentino',
            descripcion: 'Mate Camionero De Vidrio Cuero Vacuno Virola De Aluminio',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_844329-MLA54129890218_032023-O.webp',
            comentarios: [
                {
                    nombre: 'Juan Fernandez',
                    comentario: 'me encantan tus productos',
                    imagen_de_perfil: 'Juan-Fernandez.jpg'

                },
                {
                    nombre: 'Lisandro Zabala',
                    comentario: 'en cuanto llegaria?',
                    imagen_de_perfil: 'Lisandro-Zabala.jpg'
                },
                {
                    nombre: 'Andres Fernandez',
                    comentario: 'top el producto',
                    imagen_de_perfil: 'Andres-Fernandez.jpg'
                }
            ]
        }
    ]
}

module.exports = data