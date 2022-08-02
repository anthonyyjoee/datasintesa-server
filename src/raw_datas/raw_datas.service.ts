import { Model } from 'mongoose'; 
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RawDataEntity, RawDataDocument } from './raw_data.entity';

@Injectable()
export class RawDatasService {
  constructor(@InjectModel(RawDataEntity.name) private readonly rawDataModel: Model<RawDataDocument>) {}

  async create(data) {
    data.forEach(el => new this.rawDataModel(el).save())

    return "add success"
  }

  async find(option) {
    return await this.rawDataModel.find({
      enodebId: option.enodebId,
      cellId: option.cellId
    }).exec()
  }
}
