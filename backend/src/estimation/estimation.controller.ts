import { Controller, Get, Post, Body } from '@nestjs/common';
import { EstimationService } from './estimation.service';
import { CreateEstimationDto } from './dto/create-estimation.dto';
import { EstimationDto } from './dto/estimation.dto';

@Controller('estimations')
export class EstimationController {
  constructor(private readonly estimationService: EstimationService) {}

  @Post()
  create(
    @Body() createEstimationDto: CreateEstimationDto,
  ): Promise<EstimationDto> {
    return this.estimationService.create(createEstimationDto);
  }

  @Get()
  findAll(): Promise<EstimationDto[]> {
    return this.estimationService.findAll();
  }
}
