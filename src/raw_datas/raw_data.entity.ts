import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RawDataDocument = RawDataEntity & Document

@Schema()
export class RawDataEntity extends Document {
  @Prop({
    required: true,
    unique: true,
    type: String,
  })
  uniqueId: string;

  @Prop()
  resultTime: Date;

  @Prop()
  enodebId: string;

  @Prop()
  cellId: string;

  @Prop()
  availDur: number;
}

export const RawDataSchema = SchemaFactory.createForClass(RawDataEntity);
