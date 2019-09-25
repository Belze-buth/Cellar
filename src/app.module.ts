import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CellarController } from './cellar/cellar.controller';
import { CellarService } from './cellar/cellar.service';

@Module({
  imports: [],
  controllers: [AppController, CellarController],
  providers: [AppService, CellarService],
})
export class AppModule {}
