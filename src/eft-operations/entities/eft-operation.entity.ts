import { Document } from "mongoose";

export interface EftOperation extends Document {
 readonly sender:string;
 readonly receiver:string;
 readonly create_date:Date;
 readonly amount:number;
}
