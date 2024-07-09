import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import mongoose from 'mongoose';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/createCat')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get('/readCat')
  findAll() {
    return this.categoryService.findAll();
  }

  @Get('/readSingleCat/:id')
  findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new HttpException('Invalid ID', 400);
    const findCategory = this.categoryService.findOne(id);
    if(!findCategory) throw new HttpException('Category not found', 404);
    return findCategory;
  }

  @Patch('/updateCat/:id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new HttpException('Invalid ID', 400);
    const updatedCat = this.categoryService.update(id, updateCategoryDto);
    if(!updatedCat) throw new HttpException('Category not found', 404);
    return updatedCat;
  }

  @Delete('/deleteCat/:id')
  remove(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new HttpException('Invalid ID', 400);
    const deletedCat = this.categoryService.remove(id);
    if(!deletedCat) throw new HttpException('Category not found', 404);
    return deletedCat;
  }
}
