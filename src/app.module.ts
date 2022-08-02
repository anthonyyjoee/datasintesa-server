import { Module } from '@nestjs/common';
import { RawDatasModule } from './raw_datas/raw_datas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/test', {
    autoCreate: true
  }), RawDatasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
