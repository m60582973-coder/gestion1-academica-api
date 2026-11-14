
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class DocentesService {
  constructor(private databaseService: DatabaseService) {}

  async obtenerTodos() {
    return await this.databaseService.query(
      'SELECT * FROM docentes'
    );
  }

  async crear(docente: any) {
    const { nombres, apellidos, correo, telefono, especialidad } = docente;

    const resultado = await this.databaseService.query(
      `INSERT INTO docentes
      (nombres, apellidos, correo, telefono, especialidad)
      VALUES (?, ?, ?, ?, ?)`,
      [nombres, apellidos, correo, telefono, especialidad]
    );

    return {
      mensaje: 'Docente registrado correctamente',
      id_docente: resultado.insertId,
    };
  }
}
