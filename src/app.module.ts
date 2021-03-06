import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModules } from './products/products.module';

@Module({
  imports: [ProductsModules, MongooseModule.forRoot('mongodb://127.0.0.1:27017/trynest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
