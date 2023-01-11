const renderProductos = () => {
    const productos = cargarProductosLS();
    let salida = "";

    for (let producto of productos) {
        salida += `<div class = "col-md-4 mb-4">
        <a href="#" onClick="verProducto(${producto.id});" class="text-decoration-none text-dark" title="Ver ${producto.nombre}" >
        <div class="card text-center border border-0">
                    <img src="imagenes/${producto.imagen}" class="card-img-top"  style="height:270px; width:355px"  alt="${producto.nombre}">
                    <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text" style="display:none;">$${producto.precio}</p>
                    </div>
        </div>
        </a>
                </div>`
    }

    document.getElementById("productos").innerHTML = salida;
}

renderProductos();
renderBotonCarrito();
