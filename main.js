document.addEventListener('DOMContentLoaded', () => {
    const excursiones = [
        {
            nombre: 'Excursión al Glaciar Martial',
            descripcion: 'Una caminata impresionante hacia el Glaciar Martial, con vistas espectaculares.',
            imagen: 'images/glaciar-martial.jpg',
            precio: 50
        },
        {
            nombre: 'Tour por el Parque Nacional',
            descripcion: 'Explora la flora y fauna única del Parque Nacional Tierra del Fuego.',
            imagen: 'images/parque-nacional.jpg',
            precio: 75
        },
        {
            nombre: 'Visita al Lago Escondido',
            descripcion: 'Un recorrido escénico al hermoso Lago Escondido.',
            imagen: 'images/lago-escondido.jpg',
            precio: 40
        },
        {
            nombre: 'Excursión a Bahía Lapataia',
            descripcion: 'Descubre la increíble Bahía Lapataia, el final de la Ruta Nacional 3.',
            imagen: 'images/bahia-lapataia.jpg',
            precio: 60
        }
    ];

    const caminatas = [
        {
            nombre: 'Caminata al Cerro Guanaco',
            descripcion: 'Un desafiante ascenso al Cerro Guanaco con vistas panorámicas de Ushuaia.',
            imagen: 'images/cerro-guanaco.jpg',
            precio: 45
        },
        {
            nombre: 'Sendero Costero',
            descripcion: 'Un relajante paseo a lo largo de la costa del canal Beagle.',
            imagen: 'images/sendero-costero.jpg',
            precio: 30
        },
        {
            nombre: 'Trekking a la Laguna Esmeralda',
            descripcion: 'Una caminata espectacular hacia la hermosa Laguna Esmeralda.',
            imagen: 'images/laguna-esmeralda.jpg',
            precio: 55
        },
        {
            nombre: 'Caminata en el Valle de los Lobos',
            descripcion: 'Explora el Valle de los Lobos, conocido por su belleza natural y vida silvestre.',
            imagen: 'images/valle-de-los-lobos.jpg',
            precio: 35
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

    document.getElementById('vaciar-carrito').onclick = function() {
        if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
            carrito = [];
        actualizarCarrito();}
    };

    document.getElementById('contratar').onclick = function() {
        alert('¡Gracias por contratar nuestros servicios!');
        carrito = []; 
        actualizarCarrito(); 
    };

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

    function createCard(item) {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = item.imagen;
        img.alt = item.nombre;

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
});
