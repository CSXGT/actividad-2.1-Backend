const db = require('../models/conexion');

class MateriasController {
  // Mostrar materias
  Mostrar() {
    const sql = 'SELECT * FROM materias';

    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          console.log('Error al obtener materias:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  // Buscar una materia según id
  Buscar(materia) {
    const id = +materia;
    const sql = 'SELECT * FROM materias WHERE ID = ?';

    return new Promise((resolve, reject) => {
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al buscar materia por ID:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  // Ingresar una materia
  Ingresar(materia) {
    const sql = 'INSERT INTO materias SET ?';

    return new Promise((resolve, reject) => {
      db.query(sql, materia, (err, result) => {
        if (err) {
          console.log('Error al ingresar materia:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  // Modificar una materia
  Modificar(materia, newMateria) {
    const id = +materia;
    const sql = 'UPDATE materias SET ? WHERE ID = ?';

    return new Promise((resolve, reject) => {
      db.query(sql, [newMateria, id], (err, result) => {
        if (err) {
          console.log('Error al modificar materia:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        } 
      });
    });
  }

  // Eliminar una materia
  Eliminar(materia) {
    const id = +materia;
    const sql = 'DELETE FROM materias WHERE ID = ?';

    return new Promise((resolve, reject) => {
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al eliminar materia:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

    // Obtener eventos de una materia para una fecha y la semana siguiente
    ObtenerEventos(idMateria, fecha) {
      const sql = `
        SELECT *
        FROM eventos
        WHERE materia_id = ? AND (
          fecha = ? OR (
            fecha > ? AND fecha <= DATE_ADD(?, INTERVAL 7 DAY)
          )
        )
      `;
  
    return new Promise((resolve, reject) => {
      db.query(sql, [idMateria, fecha, fecha, fecha], (err, result) => {
        if (err) {
          console.log('Error al obtener eventos:', err);
          reject('Error interno del servidor');
         } else {
           resolve(result);
         }
       });
     });
   }
 }
  
const controller = new MateriasController();
module.exports = controller;
