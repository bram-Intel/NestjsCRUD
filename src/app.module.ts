import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule} from './apartment/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(
    'mongodb+srv://bram:KSf1q7WRriepXHrE@cluster0.9rkv7rh.mongodb.net/bram?retryWrites=true&w=majority',
  ),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
