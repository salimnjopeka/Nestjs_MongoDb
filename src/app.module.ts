import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonsModule } from './persons/persons.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MongoDB_URL'),
      }),
      inject: [ConfigService],
    }),
     PersonsModule,
     ProductModule,
     CategoryModule,
    ],
})
export class AppModule {}
