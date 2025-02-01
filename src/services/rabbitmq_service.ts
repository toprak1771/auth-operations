import { Injectable,OnModuleInit } from "@nestjs/common";
import amqplib from "amqplib";

@Injectable()
export class RabbitMQService {
  constructor() {}

  async createConnection() {
    try {
      const connectionString: string = "amqp://guest:guest@localhost:5672/";
      const connection = await amqplib.connect(connectionString);
      const channel = await connection.createChannel();
      //await channel.prefetch(10);
      return { connection, channel };
    } catch (error) {
      console.log("error:", error);
      return { connection: null, channel: null };
    }
  }

  async sendMessage(queueName: string, message: any): Promise<boolean> {
    const { connection, channel } = await this.createConnection();
    if (!connection || !channel) {
      await this.createConnection();
    }

    await channel.assertQueue(queueName,{durable:true});

    try {
      channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), {
        persistent: true,
      });
    } catch (error) {
      console.log("Mesaj gönderilirken hata çıktı ", error);
      throw error;
    }

    return true;
  }

  async consumer(queueName:string):Promise<object> {
    const { connection, channel } = await this.createConnection();
    if (!connection || !channel) {
      await this.createConnection();
    }

    let data:object = {};

    await channel.assertQueue(queueName,{durable:true});
    await channel.consume(queueName,async(msg) => {
        data= JSON.parse(msg.content.toString())
        console.log("data:",data);
        //channel.ack(msg);
    })
    
    return data
  }

//   async getAllMessages(queueName: string): Promise<any[]> {
//     const { connection, channel } = await this.createConnection();
//     if (channel) {
//       await this.createConnection();
//     }
  
//     await channel.assertQueue(queueName, { durable: true });
  
//     const messages: any[] = [];
  
//     let msg;
//     do {
//       msg = await channel.get(queueName, { noAck: false });
//       if (msg) {
//         const data = JSON.parse(msg.content.toString());
//         messages.push(data);
//         channel.ack(msg); // Mesaj işlendi olarak işaretle
//       }
//     } while (msg);
  
//     console.log("📥 Kuyruktaki tüm mesajlar alındı:", messages);
//     return messages
//   }
  
  async onModuleInit(){
    await this.createConnection();
    this.consumer('create-user');
  }
}


