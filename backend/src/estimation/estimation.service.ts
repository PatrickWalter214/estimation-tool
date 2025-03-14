import { Injectable } from '@nestjs/common';
import { CreateEstimationDto } from './dto/create-estimation.dto';
import { Repository } from 'typeorm';
import { EstimationEntity } from './entities/estimation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EstimationDto } from './dto/estimation.dto';

@Injectable()
export class EstimationService {
  constructor(
    @InjectRepository(EstimationEntity)
    private readonly estimationRepository: Repository<EstimationEntity>,
  ) {}

  async create(
    createEstimationDto: CreateEstimationDto,
  ): Promise<EstimationDto> {
    const createEstimationEntity: EstimationEntity = { ...createEstimationDto };
    const result: Promise<EstimationEntity> = this.estimationRepository.save(
      createEstimationEntity,
    );
    const resultEstimationDto: EstimationDto = { ...(await result) };
    return resultEstimationDto;
  }

  async findAll(): Promise<EstimationDto[]> {
    const result: Promise<EstimationEntity[]> =
      this.estimationRepository.find();
    const resultEstimationDto: EstimationDto[] = (await result).map(
      (estimationEntity: EstimationEntity) => ({ ...estimationEntity }),
    );
    return resultEstimationDto;
  }
}
