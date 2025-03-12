import { Injectable } from '@nestjs/common';
import { CreateEstimationDto } from './dto/create-estimation.dto';
import { Repository } from 'typeorm';
import { EstimationEntity } from './entities/estimation.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstimationService {
  constructor(
    @InjectRepository(EstimationEntity)
    private readonly estimationRepository: Repository<EstimationEntity>,
  ) {}

  create(createEstimationDto: CreateEstimationDto) {
    const estimationEntity: EstimationEntity = { ...createEstimationDto };
    return this.estimationRepository.insert(estimationEntity);
  }

  findAll() {
    return this.estimationRepository.find();
  }
}
