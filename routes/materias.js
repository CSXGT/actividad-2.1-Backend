const express = require('express');
const router = express.Router();
const materiasController = require('../controllers/materias.c');

// Rutas CRUD para materias

// Mostrar todas las materias
router.get('/', (req, res) => {
  materiasController.Mostrar()
    .then(resp => {
      res.render('materias', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Buscar un evento por ID
router.get('/:id', (req, res) => {
  const idEvento = req.params.id;
  materiasController.Buscar(idEvento)
    .then(resp => {
      res.render('materias', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Ingresar un nuevo evento
router.post('/', (req, res) => {
  const nuevoEvento = req.body;
  materiasController.Ingresar(nuevoEvento)
    .then(resp => {
      res.render('materias', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Modificar un evento
router.put('/:id', (req, res) => {
  const idEvento = req.params.id;
  const nuevaInfoEvento = req.body;
  materiasController.Modificar(idEvento, nuevaInfoEvento)
    .then(resp => {
      res.render('materias', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Eliminar un evento
router.delete('/:id', (req, res) => {
  const idEvento = req.params.id;
  materiasController.Eliminar(idEvento)
    .then(resp => {
      res.render('materias', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;
