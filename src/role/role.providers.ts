import { Mongoose } from 'mongoose';
import { roleSchema } from './schemas/role.schema'; 

export const roleProviders = [
    {
        provide:'ROLE_MODEL',
        useFactory:(mongoose:Mongoose) => mongoose.model('Role',roleSchema),
        inject:['DATABASE_CONNECTION']
    }
] 
