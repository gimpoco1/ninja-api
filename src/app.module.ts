import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {ItemsModule} from './items/items.module'; 
import { ApiService } from './api/api.service';
import { ApiController } from './api/api.controller';
import config from './config/keys';

@Module({
  imports: [ ItemsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, ApiController],
  providers: [AppService, ApiService],
})
export class AppModule {}
