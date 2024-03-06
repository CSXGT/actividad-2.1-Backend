const db = require('../models/conexion');

class ProfesoresController {
  // Mostrar profesores
  Mostrar() {
    const sql = 'SELECT * FROM profesores';

    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          console.log('Error al obtener profesores:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  // Buscar un profesor según id
  Buscar(profesor) {
    const id = + profesor;
    const sql = 'SELECT * FROM profesores WHERE ID = ?';

    return new Promise((resolve, reject) => {
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al buscar profesor por ID:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  // Ingresar un profesor
  Ingresar(profesor) {
    const sql = 'INSERT INTO profesores SET ?';

    return new Promise((resolve, reject) => {
      db.query(sql, profesor, (err, result) => {
        if (err) {
          console.log('Error al ingresar profesor:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  // Modificar un profesor
  Modificar(profesor, newProfesor) {
    const id = +profesor;
    const sql = 'UPDATE profesores SET ? WHERE ID = ?';

    return new Promise((resolve, reject) => {
      db.query(sql, [newProfesor, id], (err, result) => {
        if (err) {
          console.log('Error al modificar profesor:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        } 
      });
    });
  }

  // Eliminar un profesor
  Eliminar(profesor) {
    const id = +profesor;
    const sql = 'DELETE FROM profesores WHERE ID = ?';

    return new Promise((resolve, reject) => {
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al eliminar profesor:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }
}

const controller = new ProfesoresController();
module.exports = controller;
