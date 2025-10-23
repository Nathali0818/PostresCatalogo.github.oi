const productos = [
    {
        nombre: "Tiramisú",
        descripcion: 'Un postre italiano clásico hecho con capas de bizcochos empapados en café y licor, cubiertos con una mezcla cremosa de mascarpone, huevo y cacao en polvo.',
        precio: 99.99,
        Imagen: 'img1.jpeg'
    },
    {
        nombre: "Churros",
        descripcion: 'Masa frita en forma de bastones, espolvoreados con azúcar y canela. Se sirven típicamente con chocolate caliente para mojar.',
        precio: 80.99,
        Imagen: 'img2.jpeg'
    },
    {
        nombre: 'Flan de vainilla',
        descripcion: 'Un suave y cremoso flan preparado con leche, azúcar, huevos y esencia de vainilla, cubierto con caramelo líquido.',
        precio: 120.00,
        Imagen: 'img3.jpeg'
    },
    {
        nombre: 'Cheesecake',
        descripcion: 'Pastel cremoso hecho con queso crema, galletas trituradas y mantequilla en la base. Se puede decorar con frutas frescas o mermeladas.',
        precio: 90.00,
        Imagen: 'img4.jpeg'
    },
];

const catalogo = document.getElementById('catalogo'); 

function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    const imagen = document.createElement('img');
    imagen.src = producto.Imagen;
    imagen.alt = producto.nombre;

    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;

    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar';

    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);

    return card;
}

function renderizarCatalogo() {
    productos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        catalogo.appendChild(tarjeta);
    });
}

window.onload = renderizarCatalogo;