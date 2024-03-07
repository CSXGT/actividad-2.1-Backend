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

// Buscar un profesor por ID
router.get('/:id', (req, res) => {
  const idProfesores = req.params.id;
  profesoresController.Buscar(idProfesores)
    .then(resp => {
      res.render('profesores', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Ingresar un nuevo profesor
router.post('/', (req, res) => {
  const nuevoProfesor = req.body;
  profesoresController.Ingresar(nuevoProfesor)
    .then(resp => {
      res.render('profesores', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Modificar un profesor
router.put('/:id', (req, res) => {
  const idProfesores = req.params.id;
  const nuevaInfoProfesor = req.body;
  profesoresController.Modificar(idProfesores, nuevaInfoProfesor)
    .then(resp => {
      res.render('profesores', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Eliminar un profesor
router.delete('/:id', (req, res) => {
  const idProfesores = req.params.id;
  profesoresController.Eliminar(idProfesores)
    .then(resp => {
      res.render('profesores', { resp: resp });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;
