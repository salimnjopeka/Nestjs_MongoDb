import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/schema/product.schema';
import { PersonsService } from 'src/persons/persons.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
