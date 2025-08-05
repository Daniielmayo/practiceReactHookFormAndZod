import mongoose, { Document, Schema } from 'mongoose';

interface IHotel extends Document {
    name: string;
    location: string;
    rating: number;
    hasWifi: boolean;
    amenities: string[];
    description: string;
    pricePerNight: number;
}

const HotelSchema: Schema = new Schema({
    name: { type: String, required: true, minlength: 3 },
    location: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    hasWifi: { type: Boolean, default: false },
    amenities: { type: [String], required: true },
    description: { type: String, required: true, minlength: 10 },
    pricePerNight: { type: Number, required: true, min: 0 }
});

export default mongoose.model<IHotel>('Hotel', HotelSchema);
