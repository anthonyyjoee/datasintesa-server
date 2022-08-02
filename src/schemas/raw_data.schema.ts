import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class RawData extends Document {
  @Prop({ unique: true })
  uniqueId: string

  @Prop()
  resultTime: Date;

  @Prop()
  enodebId: string;

  @Prop()
  cellId: string;
  
  @Prop()
  availDur: number;
}

export const RawDataSchema = SchemaFactory.createForClass(RawData);