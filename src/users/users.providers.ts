import { Mongoose } from 'mongoose';
import { userSchema } from './schemas/users.schema';


export const usersProviders = [
    {
        provide:'USER_MODEL',
        useFactory:(mongoose:Mongoose) => mongoose.model('User',userSchema),
        inject:['DATABASE_CONNECTION']
    }
] 
