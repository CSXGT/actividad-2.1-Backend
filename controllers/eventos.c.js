const db = require('../models/conexion');

class EventosController {
  // Mostrar eventos
  Mostrar() {
    const sql = 'SELECT * FROM eventos';

    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          console.log('Error al obtener eventos:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  // Buscar un evento según id
  Buscar(evento) {
    const id = + evento;
    const sql = 'SELECT * FROM eventos WHERE ID = ?';

    return new Promise((resolve, reject) => {
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al buscar evento por ID:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  // Ingresar un evento
  Ingresar(evento) {
    const sql = 'INSERT INTO eventos SET ?';

    return new Promise((resolve, reject) => {
      db.query(sql, evento, (err, result) => {
        if (err) {
          console.log('Error al ingresar evento:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  // Modificar un evento
  Modificar(evento, newEvento) {
    const id = +evento;
    const sql = 'UPDATE eventos SET ? WHERE ID = ?';

    return new Promise((resolve, reject) => {
      db.query(sql, [newEvento, id], (err, result) => {
        if (err) {
          console.log('Error al modificar evento:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        } 
      });
    });
  }

  // Eliminar un evento
  Eliminar(evento) {
    const id = +evento;
    const sql = 'DELETE FROM eventos WHERE ID = ?';

    return new Promise((resolve, reject) => {
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al eliminar evento:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }
}

const controller = new EventosController();
module.exports = controller;
