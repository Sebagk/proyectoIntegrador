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
    ],
    productos: [
        {
            id: 1,
            nombre: 'GRAPHIC SET IN NECK WHITE', 
            descripcion:'Remera blanca de cuello redono',
            imagen: 'https://levisarg.vtexassets.com/arquivos/ids/873638/2249135640_1.jpg?v=638484538310170000',
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
            id: 2,
            nombre: 'LEVIS HM POLO SNORKEL',
            descripcion: 'Polo blanca con diseño',
            imagen: 'https://levisarg.vtexassets.com/arquivos/ids/818830-500-auto?v=638314348913700000&width=500&height=auto&aspect=true',
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
            id: 3,
            nombre: 'VINTAGE FIT TEE OVERDYE VARSITY',
            descripcion: 'Remera vintage de color azul',
            imagen: 'https://levisarg.vtexassets.com/arquivos/ids/872692-500-auto?v=638442218279070000&width=500&height=auto&aspect=true',
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
            id: 4,
            nombre: 'GRAPHIC SET IN NECK TEE 501',
            descripcion: 'Remera negra con diseño',
            imagen: 'https://levisarg.vtexassets.com/arquivos/ids/823110-800-auto?v=638320364535600000&width=800&height=auto&aspect=true',
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
            id: 5,
            nombre: 'SS RELAXED FIT TEE "ALL OVER POSTER"',
            descripcion: 'Remera negra con logo de Levis',
            imagen: 'https://levisarg.vtexassets.com/arquivos/ids/659973-500-auto?v=638041464988200000&width=500&height=auto&aspect=true',
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
            id: 6,
            nombre: 'ARGENTINA LEVIS EXCLUSIVE',
            descripcion: 'Remera Levis ARGENTINA',
            imagen: 'https://levisarg.vtexassets.com/arquivos/ids/873528-1200-auto?v=638481849287400000&width=1200&height=auto&aspect=true',
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
            id: 7,
            nombre: 'GRAPHIC SET IN NECK LEVIS VARSITY',
            descripcion: 'Remera negra con Levis en el pecho',
            imagen: 'https://levisarg.vtexassets.com/arquivos/ids/782226-500-auto?v=638285203434330000&width=500&height=auto&aspect=true',
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
            id: 8,
            nombre: 'SS RELAEXD FIT TEE "BATIK"',
            descripcion: 'Remera color Caviar Batik',
            imagen: 'https://levisarg.vtexassets.com/arquivos/ids/872732-800-auto?v=638443029972170000&width=800&height=auto&aspect=true',
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
            id: 9,
            nombre: 'GRAPHIC SET IN NECK',
            descripcion: 'Remera color Forged Iron',
            imagen: 'https://levisarg.vtexassets.com/arquivos/ids/698247-500-auto?v=638163044333000000&width=500&height=auto&aspect=true',
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
            id: 10,
            nombre: 'SS RELAXED FIT GREEN',
            descripcion: 'Remera color verde',
            imagen: 'https://levisarg.vtexassets.com/arquivos/ids/745278-800-auto?v=638240002715800000&width=800&height=auto&aspect=true',
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