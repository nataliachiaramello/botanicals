const renderProducto = () => {
    const producto = cargarProducto();
    let salida = `<div class="col-md-6 text-center">
            <img src="imagenes/${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
            </div>
            <div class="col-md-6">
            <h1>${producto.nombre}</h1>
            <h3>${producto.presentacion}</h3>
            <p>${producto.descripcion}</p>
            <h5><b>$${producto.precio}</b></h5>
            <p><a href="#" class="btn btn-secondary" onClick="agregarAlCarrito(${producto.id})">Agregar al Carrito</a></p>
            </div>`;

    document.getElementById("producto").innerHTML = salida;
}

renderProducto();
renderBotonCarrito();