import { Controller, Get, Post, Body } from '@nestjs/common';
import { EstimationService } from './estimation.service';
import { CreateEstimationDto } from './dto/create-estimation.dto';

@Controller('estimations')
export class EstimationController {
  constructor(private readonly estimationService: EstimationService) {}

  @Post()
  create(@Body() createEstimationDto: CreateEstimationDto) {
    return this.estimationService.create(createEstimationDto);
  }

  @Get()
  findAll() {
    return this.estimationService.findAll();
  }
}
