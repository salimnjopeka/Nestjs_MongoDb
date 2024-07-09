import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { Product } from 'src/schema/product.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  create(createProductDto: CreateProductDto) {
    const newProduct = new this.productModel(createProductDto)
    return newProduct.save();
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: string) {
    return this.productModel.findById(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto, {new:true});
  }

  remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}
