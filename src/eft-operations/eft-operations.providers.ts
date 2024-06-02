import { Mongoose } from 'mongoose';
import { eftSchema } from './schemas/eft-operations.schema';

export const eftProviders = [
    {
        provide:'EFT_MODEL',
        useFactory:(mongoose:Mongoose) => mongoose.model('EFT',eftSchema),
        inject:['DATABASE_CONNECTION']
    }
]