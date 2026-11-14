import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException
} from '@nestjs/common';

import { DocentesService } from './docentes.service';

@Controller('docentes')
export class DocentesController {

  constructor(private docentesService: DocentesService) {}

  // Consultar todos los docentes
  @Get()
  obtenerTodos() {
    return this.docentesService.obtenerTodos();
  }

  // Registrar un nuevo docente
  @Post()
  crear(@Body() docente: any) {

    const camposObligatorios = [
      'nombres',
      'apellidos',
      'correo',
      'telefono',
      'especialidad'
    ];

    const camposFaltantes = camposObligatorios.filter(
      campo =>
        typeof docente?.[campo] !== 'string' ||
        docente[campo].trim() === ''
    );

    if (camposFaltantes.length > 0) {
      throw new BadRequestException({
        mensaje: 'Faltan campos obligatorios',
        campos: camposFaltantes
      });
    }

    return this.docentesService.crear(docente);
  }
}
