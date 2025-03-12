import { Module } from '@nestjs/common';
import { EstimationService } from './estimation.service';
import { EstimationController } from './estimation.controller';
import { EstimationEntity } from './entities/estimation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EstimationEntity])],
  controllers: [EstimationController],
  providers: [EstimationService],
})
export class EstimationModule {}
