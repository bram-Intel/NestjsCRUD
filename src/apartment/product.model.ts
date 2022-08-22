import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  apartment: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export interface Product extends mongoose.Document {
  id: string;
  apartment: string;
  description: string;
  price: number;
}