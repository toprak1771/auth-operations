import * as mongoose from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config();

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<mongoose.Connection> => {
      const connection = await mongoose.connect('mongodb://localhost/nest');
      return connection.connection;
    }
      
  },
]