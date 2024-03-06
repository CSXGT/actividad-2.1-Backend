const express = require('express');
const router = express.Router();
const materiasController = require('../controllers/materias.c');

// Rutas CRUD para materias

// Mostrar todas las materias
router.get('/', (req, res) => {
  materiasController.Mostrar()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Buscar una materia por ID
router.get('/:id', (req, res) => {
  const idMateria = req.params.id;
  materiasController.Buscar(idMateria)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Ingresar una nueva materia
router.post('/', (req, res) => {
  const nuevaMateria = req.body; // Supongamos que los datos están en el cuerpo de la solicitud
  materiasController.Ingresar(nuevaMateria)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Modificar una materia
router.put('/:id', (req, res) => {
  const idMateria = req.params.id;
  const nuevaInfoMateria = req.body;
  materiasController.Modificar(idMateria, nuevaInfoMateria)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Eliminar una materia
router.delete('/:id', (req, res) => {
  const idMateria = req.params.id;
  materiasController.Eliminar(idMateria)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;