const express = require('express');
const router = express.Router();
const seccionesController = require('../controllers/secciones.c');

// Rutas CRUD para secciones

// Mostrar todas las secciones
router.get('/', (req, res) => {
  seccionesController.Mostrar()
    .then(resp => {
      res.render('secciones', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Buscar una seccion por ID
router.get('/:id', (req, res) => {
  const idSecciones = req.params.id;
  seccionesController.Buscar(idSecciones)
    .then(resp => {
      res.render('secciones', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Ingresar una nueva seccion
router.post('/', (req, res) => {
  const nuevaSecciones = req.body;
  seccionesController.Ingresar(nuevaSecciones)
    .then(resp => {
      res.render('secciones', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Modificar una seccion
router.put('/:id', (req, res) => {
  const idSecciones = req.params.id;
  const nuevaInfoSecciones = req.body;
  seccionesController.Modificar(idSecciones, nuevaInfoSecciones)
    .then(resp => {
      res.render('secciones', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Eliminar una seccion
router.delete('/:id', (req, res) => {
  const idSecciones = req.params.id;
  seccionesController.Eliminar(idSecciones)
    .then(resp => {
      res.render('secciones', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;