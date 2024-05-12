import * as mongoose from 'mongoose';

export const httpRequestSchema = new mongoose.Schema({
  route: String,
  min_role: String,
  http_method:String,
  pool_name:String
});