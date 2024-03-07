const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesores.c');

// Rutas CRUD para profesores

// Mostrar todos los profesores
router.get('/', (req, res) => {
  profesoresController.Mostrar()
    .then(resp => {
      res.render('profesores', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Buscar un evento por ID
router.get('/:id', (req, res) => {
  const idEvento = req.params.id;
  profesoresController.Buscar(idEvento)
    .then(resp => {
      res.render('profesores', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Ingresar un nuevo evento
router.post('/', (req, res) => {
  const nuevoEvento = req.body;
  profesoresController.Ingresar(nuevoEvento)
    .then(resp => {
      res.render('profesores', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Modificar un evento
router.put('/:id', (req, res) => {
  const idEvento = req.params.id;
  const nuevaInfoEvento = req.body;
  profesoresController.Modificar(idEvento, nuevaInfoEvento)
    .then(resp => {
      res.render('profesores', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Eliminar un evento
router.delete('/:id', (req, res) => {
  const idEvento = req.params.id;
  profesoresController.Eliminar(idEvento)
    .then(resp => {
      res.render('profesores', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;
