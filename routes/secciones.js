const express = require('express');
const router = express.Router();
const seccionesController = require('../controllers/secciones.c');

// Rutas CRUD para secciones

// Mostrar todos los secciones
router.get('/', (req, res) => {
  seccionesController.Mostrar()
    .then(resp => {
      res.render('secciones', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Buscar un evento por ID
router.get('/:id', (req, res) => {
  const idEvento = req.params.id;
  seccionesController.Buscar(idEvento)
    .then(resp => {
      res.render('secciones', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Ingresar un nuevo evento
router.post('/', (req, res) => {
  const nuevoEvento = req.body;
  seccionesController.Ingresar(nuevoEvento)
    .then(resp => {
      res.render('secciones', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Modificar un evento
router.put('/:id', (req, res) => {
  const idEvento = req.params.id;
  const nuevaInfoEvento = req.body;
  seccionesController.Modificar(idEvento, nuevaInfoEvento)
    .then(resp => {
      res.render('secciones', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Eliminar un evento
router.delete('/:id', (req, res) => {
  const idEvento = req.params.id;
  seccionesController.Eliminar(idEvento)
    .then(resp => {
      res.render('secciones', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;