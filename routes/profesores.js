const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesores.c');

// Rutas CRUD para profesores

// Mostrar todas los profesores
router.get('/', (req, res) => {
  profesoresController.Mostrar()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Buscar un profesor por ID
router.get('/:id', (req, res) => {
  const idProfesor = req.params.id;
  profesoresController.Buscar(idProfesor)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Ingresar un nuevo profesor
router.post('/', (req, res) => {
  const nuevoProfesor = req.body; // Supongamos que los datos están en el cuerpo de la solicitud
  profesoresController.Ingresar(nuevoProfesor)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Modificar un profesor
router.put('/:id', (req, res) => {
  const idProfesor = req.params.id;
  const nuevaInfoProfesor = req.body;
  profesoresController.Modificar(idProfesor, nuevaInfoProfesor)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Eliminar un profesor
router.delete('/:id', (req, res) => {
  const idProfesor = req.params.id;
  profesoresController.Eliminar(idProfesor)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;
