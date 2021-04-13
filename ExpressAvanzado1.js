import express from 'express';

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexion a server con callback avisando de conexion exitosa
const server = app.listen(PORT, () => {
  console.log(`Ya me conecte al puerto ${PORT}.`);
})
server.on('error', (error) => console.log('Hubo un error inicializando el servidor.'));


// CLASE - Genero la clase "Products" para administrar el listado de productos y su logica
class Products {
  constructor() {
    this.PRODUCTS = [];
    this.prodID = 0;
  }

  // Devuevo el listado completo, si el listado esta vacio devuelvo false para hacer el chequeo
  getProds() {
    if (this.PRODUCTS.length == 0) {
      return false;
    }
    return this.PRODUCTS;
  }

  // Devuelvo un producto seleccionado del listado
  selectProd(id) {
    return this.PRODUCTS.filter(prod => prod.id === parseInt(id))[0];
  }

  // Agrego un producto al listado
  addProd(product) {
    product.id = this.prodID++;
    this.PRODUCTS.push(product);
  }
}

// Inicializo la variable stock que es una instancia de Products
const stock = new Products();

// Cargo el listado de productos, devuelvo un mensajes si el listado esta vacio (devuelve false)
app.get("/api/productos", (req, res) => {
  if (!stock.getProds()) {
    return res.status(404).json({
      error: "No hay productos cargados.",
    });
  }
  res.json(stock.getProds());
});

// Devuelvo un determinado producto
app.get("/api/productos/:id", (req, res) => {
  const { id } = req.params;
  const prod = stock.selectProd(id);
  if (prod) {
    return res.json(prod);
  }
  res.status(404).json({
    error: "Producto no encontrado.",
  });
});

// Agrego un producto
app.post("/api/productos", (req, res) => {
  const product = req.body;
  stock.addProd(product);
  res.status(201).json(product);
});


// EJEMPLOS de Productos para cargar en Postman
/*
{
  "title": "Zapatillas para Dama",
  "price": 8900,
  "thumbnail": "zapatillas-dama"
}

{
  "title": "Paletas de Ping Pong",
  "price": 2500,
  "thumbnail": "paletas"
}

{
  "title": "Pelota de Futbol",
  "price": 12500,
  "thumbnail": "pelota"
}

{
  "title": "Par de medias",
  "price": 1400,
  "thumbnail": "medias"
}
*/