const productos = [
    {id:1, nombre:"Sérum de Manzanilla", presentacion:"100 miliitros", descripcion:"Posee propiedades antiinflamatorias, lo que ayuda a aliviar las irritaciones en la piel causadas por cremas o productos tópicos. Sirve como ligero analgésico, el cual ayuda a refrescar la zona y prevenir infecciones en el área afectada. Disminuye la apariencia de venitas rojas en el área de los ojos.", precio:2000, imagen:"serum-manzanilla.jpg" , categoria:"sérums"},
    {id:2, nombre:"Jabón de Almendras", presentacion:"100 gramos", descripcion:"Con el poder de las almendras,es un hidratante por excelencia, ideal para todo tipo de piel, en especial las pieles secas, por ser rica en antioxidantes, vitamina E y nutrientes esenciales que mantienen su humedad e hidratan la piel.", precio:700, imagen:"jabon-almendras.jpg" , categoria:"jabones"},
    {id:3, nombre:"Jabón de Lavanda", presentacion:"100 gramos", descripcion:"La lavanda actúa como revitalizador de la piel, ayuda a regenerar las células y mantiene el tejido firme. Ayuda a sanar heridas y quemaduras leves.", precio:700, imagen:"jabon-lavanda.jpg" , categoria:"jabones"},
    {id:4, nombre:"Arcillas Naturales", presentacion:"150 gramos", descripcion:"La arcilla es una aliada de la belleza gracias a sus propiedades calmantes, desintoxicantes, antiinflamatorias y depurativas. En mascarillas faciales y envolturas corporales la arcilla actúa como un exfoliante natural que limpia, purificar y regenera la piel.", precio:900, imagen:"arcillas.jpg" , categoria:"arcillas"},
    {id:5, nombre:"Sales de Epsom", presentacion:"200 gramos", descripcion:"La sal de Epsom contiene sulfatos que facilitan la eliminación de toxinas y metales pesados ​​del cuerpo. Utilizadas para aliviar la tensión muscular. Los baños con sales de Epsom pueden ayudar a aliviar el dolor de las articulaciones.", precio:1200, imagen:"sales.jpg" , categoria:"sales"},
    {id:6, nombre:"Shampoo Sólido", presentacion:"80 gramos", descripcion:"Reduce la huella de carbono, es vegano, dura muchísimo y puedes llevarlo hasta en el avión. Económico, duradero, fácil de llevar a cualquier parte y repleto de ingredientes naturales y aceites vegetales ideales para tu pelo y hasta para tu piel.", precio:800, imagen:"shampoo.jpg" , categoria:"shampoo"},
    {id:7, nombre:"Crema Facial", presentacion:"100 gramos", descripcion:"Al poseer sólo insumos naturales evita alergias y reacciones cutáneas. Tiene mayor concentración de principios activos. La cosmética natural es apta para todo tipo de pieles, especialmente indicada para las pieles sensibles presentando mejor absorción y oxigenación.", precio:2500, imagen:"crema.jpg" , categoria:"cremas"},
    {id:8, nombre:"Crema Corporal", presentacion:"200 gramos", descripcion:"Con el maravilloso aporte del aceite de coco, rico en nutrientes y ácido láurico, brindándole gran hidratación a la piel. Especial para pieles secas, es antibacteriano y antiinflamatorio.", precio:2200, imagen:"crema-corporal.jpg" , categoria:"cremas"},
    {id:9, nombre:"Aceite de Almendras", presentacion:"250 mililitros", descripcion:"Presenta múltiples propiedades naturales, que aportan hidratación y otros beneficios para la piel e incluso para el cabello. Contiene vitaminas A, B y E, así como proteínas, sales minerales y ácidos grasos que le otorgan un efecto regenerador e hidratante.Además, su suavidad e hidratación la hacen perfecta para todo tipo de pieles, incluso las más sensibles y las de los bebés.", precio:3000, imagen:"aceite-almendra.jpg" , categoria:"aceites"},
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);