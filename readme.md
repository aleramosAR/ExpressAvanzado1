# Express Avanzado 1

**Cargar el listado de productos**<br/>
GET http://localhost:8080/api/productos

<br/>

**Seleccionar un determinado producto**<br/>
GET http://localhost:8080/api/productos/0<br/>
GET http://localhost:8080/api/productos/1<br/>
GET http://localhost:8080/api/productos/2  etc....

<br/>

**Agregar un producto**<br/>
POST http://localhost:8080/api/productos

<br/>

**EJEMPLOS de productos para cargar en Postman desde body (JSON)**
```
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
```