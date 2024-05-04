import * as mongoose from 'mongoose';

export const roleSchema = new mongoose.Schema({
  name: String,
  value: Number,
});