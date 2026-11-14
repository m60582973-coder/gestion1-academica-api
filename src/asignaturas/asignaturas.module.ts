
import { Module } from '@nestjs/common';
import { AsignaturasController } from './asignaturas.controller';
import { AsignaturasService } from './asignaturas.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AsignaturasController],
  providers: [AsignaturasService],
})
export class AsignaturasModule {}
