import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import mongoose from 'mongoose';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/createProd')
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get('/readProd')
  findAll() {
    return this.productService.findAll();
  }

  @Get('/readSingleProd/:id')
  findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new HttpException('Invalid ID', 400);
    const findProduct = this.productService.findOne(id);
    if(!findProduct) throw new HttpException('Product not found', 404);
    return findProduct;
  }

  @Patch('/updateProd/:id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new HttpException('Invalid ID', 400);
    const updatedProduct = this.productService.update(id, updateProductDto);
    if(!updatedProduct) throw new HttpException('Product not found', 404);
    return updatedProduct;
  }

  @Delete('deleteProd/:id')
  remove(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new HttpException('Invalid ID', 400);
    const deletedProduct = this.productService.remove(id);
    if(deletedProduct) throw new HttpException('Product not found', 404);
    return deletedProduct;
  }
}
