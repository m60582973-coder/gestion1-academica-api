
import {
  Injectable,
  BadRequestException
} from '@nestjs/common';

import { DatabaseService } from '../database/database.service';

@Injectable()
export class AsignaturasService {

  constructor(private databaseService: DatabaseService) {}

  // Consultar todas las asignaturas
  async obtenerTodas() {
    return await this.databaseService.query(
      'SELECT * FROM asignaturas'
    );
  }

  // Registrar una nueva asignatura
  async crear(asignatura: any) {

    const {
      codigo,
      nombre,
      descripcion,
      creditos,
      id_docente
    } = asignatura;

    // Validar los campos obligatorios
    const camposFaltantes = [];

    if (!codigo) camposFaltantes.push('codigo');
    if (!nombre) camposFaltantes.push('nombre');
    if (creditos === undefined || creditos === null) {
      camposFaltantes.push('creditos');
    }
    if (id_docente === undefined || id_docente === null) {
      camposFaltantes.push('id_docente');
    }

    if (camposFaltantes.length > 0) {
      throw new BadRequestException({
        mensaje: 'Faltan campos obligatorios',
        campos: camposFaltantes
      });
    }

    // Comprobar que el docente exista
    const docentes = await this.databaseService.query(
      'SELECT id_docente FROM docentes WHERE id_docente = ?',
      [id_docente]
    );

    if (docentes.length === 0) {
      throw new BadRequestException(
        'El docente indicado no existe en la base de datos'
      );
    }

    try {

      // Registrar la asignatura en MySQL
      const resultado = await this.databaseService.query(
        `INSERT INTO asignaturas
        (codigo, nombre, descripcion, creditos, id_docente)
        VALUES (?, ?, ?, ?, ?)`,
        [codigo, nombre, descripcion ?? null, creditos, id_docente]
      );

      return {
        mensaje: 'Asignatura registrada correctamente',
        id_asignatura: resultado.insertId
      };

    } catch (error) {

      const mysqlError = error as { code?: string };

      if (mysqlError.code === 'ER_NO_REFERENCED_ROW_2') {
        throw new BadRequestException(
          'No se puede registrar la asignatura porque el docente no existe'
        );
      }

      throw error;
    }
  }
}
