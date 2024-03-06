const express = require('express');
const router = express.Router();
const seccionesController = require('../controllers/secciones.c');

// Rutas CRUD para secciones

// Mostrar todas las secciones
router.get('/', (req, res) => {
  seccionesController.Mostrar()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Buscar una sección por ID
router.get('/:id', (req, res) => {
  const idSeccion = req.params.id;
  seccionesController.Buscar(idSeccion)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Ingresar una nueva sección
router.post('/', (req, res) => {
  const nuevaSeccion = req.body; // Supongamos que los datos están en el cuerpo de la solicitud
  seccionesController.Ingresar(nuevaSeccion)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Modificar una sección
router.put('/:id', (req, res) => {
  const idSeccion = req.params.id;
  const nuevaInfoSeccion = req.body;
  seccionesController.Modificar(idSeccion, nuevaInfoSeccion)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Eliminar una sección
router.delete('/:id', (req, res) => {
  const idSeccion = req.params.id;
  seccionesController.Eliminar(idSeccion)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;
