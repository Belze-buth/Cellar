import { Injectable } from '@nestjs/common';
import { Bottle, Cellar } from './Cellar';
import { BottleDTO, CellarDTO } from './cellar.controller';

@Injectable()
export class CellarService {
  storage: Cellar[] = [];
  getAllCellars(): Cellar[] {
    return this.storage;
  }

  createCellar(cellarDto: CellarDTO): void {
    this.storage.push(new Cellar(cellarDto.name));
  }

  addBottle(bottleDto: BottleDTO,ce:Cellar): void {
    ce.addBottle(bottleDto.name,bottleDto.price);
  }

  findById(id: number): Cellar {
    let i:number;
    for ( i=0 ; i<this.storage.length ; i++) {
      if (this.storage[i].id == id) {
        return this.storage[i];
      }
    }
    let vide = new Cellar('Inexistant déso');
    return vide;

  }
}