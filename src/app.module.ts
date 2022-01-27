import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [BreedsModule, MongooseModule.forRoot('mongodb://localhost/dogs')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
