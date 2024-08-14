const excursiones = [
    {
        nombre: 'Excursión al Glaciar Martial',
        descripcion: 'Una caminata impresionante hacia el Glaciar Martial, con vistas espectaculares.',
        imagen: 'images/glaciar-martial.jpg',
        precio: 4000
    },
    {
        nombre: 'Tour por el Parque Nacional',
        descripcion: 'Explora la flora y fauna única del Parque Nacional Tierra del Fuego.',
        imagen: 'images/parque-nacional.jpg',
        precio: 5000
    },
    {
        nombre: 'Visita al Lago Escondido',
        descripcion: 'Un recorrido escénico al hermoso Lago Escondido.',
        imagen: 'images/lago-escondido.jpg',
        precio: 6000
    },
    {
        nombre: 'Excursión al Ojo del Albino',
        descripcion: 'Descubre la increíble Bahía Lapataia, el final de la Ruta Nacional 3.',
        imagen: 'images/ojo-del-albino.jpg',
        precio: 7000
    }
];

const caminatas = [
    {
        nombre: 'Caminata a la Laguna Turquesa',
        descripcion: 'Un desafiante pero rapido ascenso a la Laguna Turquesa. Difucultad Baja.',
        imagen: 'images/laguna-turquesa.jpg',
        precio: 3000
    },
    {
        nombre: 'Trekking a la Laguna Esmeralda',
        descripcion: 'Una caminata hacia la hermosa Laguna Esmeralda. Dificultad Baja.',
        imagen: 'images/laguna-esmeralda.jpg',
        precio: 4000
    },
    {
        nombre: 'Caminata a los 5 hermanos',
        descripcion: 'Un hermoso paseo entre las montañas fueguinas. Dificultad Media.',
        imagen: 'images/5-hermanos.jpg',
        precio: 4500
    },
    {
        nombre: 'Trekking a la Laguna del Domo Blanco',
        descripcion: 'Desafiante trekking por el glaciar hacia el incleíble Domo Blanco. Dificultad Alta.',
        imagen: 'images/domo-blanco.jpg',
        precio: 5000
    }
];

let carrito = [];

function actualizarCarrito() {
    const carritoList = document.getElementById('carrito-list');
    carritoList.innerHTML = '';
    let total = 0;
    carrito.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.nombre} - $${item.precio}`;
        carritoList.appendChild(listItem);
        total += item.precio;
    });
    document.getElementById('carrito-contador').textContent = `Carrito: ${carrito.length} items`;
    document.getElementById('carrito-total').textContent = `Total: $${total}`;
}

function agregarAlCarrito(item) {
    carrito.push(item);
    actualizarCarrito();
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = item.imagen;
    img.alt = item.nombre;

    if (item.nombre === 'Tour por el Parque Nacional') {
        img.classList.add('parque-nacional-img');
    }

    const content = document.createElement('div');
    content.className = 'card-content';

    const title = document.createElement('h3');
    title.textContent = item.nombre;

    const description = document.createElement('p');
    description.textContent = item.descripcion;

    const price = document.createElement('p');
    price.textContent = `$${item.precio}`;

    const button = document.createElement('button');
    button.textContent = 'Añadir al carrito';
    button.onclick = () => agregarAlCarrito(item);

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(price);
    content.appendChild(button);
    card.appendChild(img);
    card.appendChild(content);

    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const excursionList = document.getElementById('excursion-list');
    excursiones.forEach(excursion => {
        const card = createCard(excursion);
        excursionList.appendChild(card);
    });

    const caminataList = document.getElementById('caminata-list');
    caminatas.forEach(caminata => {
        const card = createCard(caminata);
        caminataList.appendChild(card);
    });

    document.getElementById('vaciar-carrito').onclick = function() {
        if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
            carrito = [];
            actualizarCarrito();
        }
    };

    document.getElementById('contratar').onclick = function() {
        alert('¡Gracias por contratar nuestros servicios!');
        carrito = []; 
        actualizarCarrito(); 
    };
});
