import { Body, Controller, Get, Injectable, Post, Param } from '@nestjs/common';
import { AppService } from '../app.service';
import { CellarService } from './cellar.service';
import { Cellar, Bottle } from './Cellar';

@Controller('/cellars')
export class CellarController {
  constructor(private readonly  cellarService: CellarService) {}
  @Get()
  getAllCellars(): Cellar[] {
    return this.cellarService.getAllCellars();
  }
  @Post()
  createCellar(@Body() cellarDto: CellarDTO) {
    return this.cellarService.createCellar(cellarDto);
  }

  @Get (':id')
  findById(@Param('id') id): Cellar{
    return this.cellarService .findById(id);
  }

  @Get (':id/bottles')
    getAllBottles(@Param('id') id): Bottle[]{
      return this.cellarService .findById(id).getAllBottle();
  }

  @Post (':id/bottles')
  addBottle(@Param('id') id,@Body() bottleDto: BottleDTO ) {
    return this.cellarService.addBottle(bottleDto, this.cellarService .findById(id));
  }
}



export interface CellarDTO {
  name: string;
}

export interface BottleDTO {
  name: string;
  price: number;
}

