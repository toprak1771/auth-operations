import { Mongoose } from 'mongoose';
import { httpRequestSchema } from './schemas/http-request.schema'; 

export const httpRequestProviders = [
    {
        provide:'HTTPREQUEST_MODEL',
        useFactory:(mongoose:Mongoose) => mongoose.model('HttpRequest',httpRequestSchema),
        inject:['DATABASE_CONNECTION']
    }
] 
