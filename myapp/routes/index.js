var express = require('express');
var router = express.Router();
var pizzas = [
  {
      nombre: "pepperoni",
      descripcion: "hecha de pepperoni",
      ingredientes: ["leche","queso", "pepperoni"],
      tipoMasa: "super pizza",
      tamaño: "30 cm",
      porciones: "10",
      extraQueso: "Si"
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mundo' });
});
router.get('/pizzas', function(req, res, next) {
  res.json(pizzas)
});
router.get('/pizzas/:Id',function(req,res)
{
  var carne = req.params.Id;
  var current = pizzas.filter(e=>e.nombre==carne)[0];
  if(current){
    res.json(current);
  }
  else{
    res.sendStatus(404);
  }
});
router.post('/pizzas',function(req,res)
{
  var pizza;
  pizza.nombre = req.body.nombre;
  pizza.descripcion = req.body.descripcion;
  pizza.ingredientes = req.body.ingredientes;
  pizza.tipoMasa = req.body.tipoMasa;
  pizza.tamaño = req.body.tamaño;
  pizza.porciones= req.body.porciones;
  pizza.extraQueso = req.body.extraQueso;

  
});
router.put('/pizzas/:Id',function(req,res)
{
  var nombre = req.params.Id;
  var current = pizzas.filter(e=>e.nombre==nombre)[0];
  var pizza;
  if(current){
    let nueva = req.body;
    current.nombre = nueva.nombre;
    current.descripcion = nueva.descripcion;
    current.ingredientes = nueva.ingredientes;
    current.tipoMasa = nueva.tipoMasa;
    current.tamaño = nueva.tamaño;
    current.porciones = nueva.porciones;
    current.extraQueso = nueva.extraQueso;
  }
  else{
    res.sendStatus(404);
  }
});


router.delete('/pizzas/:Id',function(req,res){
  var nombre = req.params.Id;
  var current = pizzas.filter(e=>e.nombre==nombre)[0];
  if(current){
    pizzas = pizzas.filter(e=>e.nombre!=nombre);
    res.sendStatus(204);
  }
  else{
    res.sendStatus(404);
  }
});
module.exports = router;
