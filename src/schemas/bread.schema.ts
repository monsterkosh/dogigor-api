import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DogDocument = Breed & Document;

@Schema()
export class Breed {
  @Prop()
  name: string;

  @Prop()
  furType: string;
}

export const BreedSchema = SchemaFactory.createForClass(Breed);
