import mongoose, { Schema, Document } from 'mongoose';

export interface ICity extends Document {
  id: number;
  name: string;
}

const CitySchema = new Schema<ICity>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
});

export default mongoose.model<ICity>('City', CitySchema);
