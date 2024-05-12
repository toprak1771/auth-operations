import { Document } from "mongoose";


export interface httpRequest extends Document {
  readonly route: string;
  readonly min_role: string;
  readonly http_method: string;
  readonly pool_name: string;
}