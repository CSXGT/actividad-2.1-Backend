const db = require('../models/conexion');

class SeccionesController {
  // Mostrar secciones
  Mostrar() {
    const sql = 'SELECT * FROM secciones';

    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          console.log('Error al obtener secciones:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  // Buscar una sección según id
  Buscar(seccion) {
    const id = +seccion;
    const sql = 'SELECT * FROM secciones WHERE ID = ?';

    return new Promise((resolve, reject) => {
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al buscar sección por ID:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  // Ingresar una sección
  Ingresar(seccion) {
    const sql = 'INSERT INTO secciones SET ?';

    return new Promise((resolve, reject) => {
      db.query(sql, seccion, (err, result) => {
        if (err) {
          console.log('Error al ingresar sección:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  // Modificar una sección
  Modificar(seccion, newSeccion) {
    const id = +seccion;
    const sql = 'UPDATE secciones SET ? WHERE ID = ?';

    return new Promise((resolve, reject) => {
      db.query(sql, [newSeccion, id], (err, result) => {
        if (err) {
          console.log('Error al modificar sección:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        } 
      });
    });
  }

  // Eliminar una sección
  Eliminar(seccion) {
    const id = +seccion;
    const sql = 'DELETE FROM secciones WHERE ID = ?';

    return new Promise((resolve, reject) => {
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al eliminar sección:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }
}

const controller = new SeccionesController();
module.exports = controller;
