const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/eventos.c');

// Rutas CRUD para eventos

// Mostrar todas los eventos
router.get('/', (req, res) => {
  eventosController.Mostrar()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Buscar un evento por ID
router.get('/:id', (req, res) => {
  const idEvento = req.params.id;
  eventosController.Buscar(idEvento)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Ingresar un nuevo evento
router.post('/', (req, res) => {
  const nuevoEvento = req.body; // Supongamos que los datos están en el cuerpo de la solicitud
  eventosController.Ingresar(nuevoEvento)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Modificar un evento
router.put('/:id', (req, res) => {
  const idEvento = req.params.id;
  const nuevaInfoEvento = req.body;
  eventosController.Modificar(idEvento, nuevaInfoEvento)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Eliminar un evento
router.delete('/:id', (req, res) => {
  const idEvento = req.params.id;
  eventosController.Eliminar(idEvento)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;