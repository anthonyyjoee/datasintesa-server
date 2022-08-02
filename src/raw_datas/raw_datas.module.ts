import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RawDataSchema, RawDataEntity} from './raw_data.entity';
import { RawDatasController } from './raw_datas.controller';
import { RawDatasService } from './raw_datas.service'

@Module({
  imports: [
    MongooseModule.forFeature([{name: RawDataEntity.name, schema: RawDataSchema}])
  ],
  controllers: [RawDatasController],
  providers: [RawDatasService]
})

export class RawDatasModule {}


