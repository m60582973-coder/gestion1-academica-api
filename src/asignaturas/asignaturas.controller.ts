
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AsignaturasService } from './asignaturas.service';

@Controller('asignaturas')
export class AsignaturasController {
  constructor(private asignaturasService: AsignaturasService) {}

  @Get()
  obtenerTodas() {
    return this.asignaturasService.obtenerTodas();
  }

  @Post()
  crear(@Body() asignatura: any) {
    return this.asignaturasService.crear(asignatura);
  }
}
