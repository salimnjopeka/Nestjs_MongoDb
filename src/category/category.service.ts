import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/schema/category.schema';

@Injectable()
export class CategoryService {
  constructor(@InjectModel('Category') private categoryModel: Model<Category>){}

  create(createCategoryDto: CreateCategoryDto) {
    const newCat = new this.categoryModel(createCategoryDto);
    return newCat.save();
  }

  findAll() {
    return this.categoryModel.find();
  }

  findOne(id: string) {
    return this.categoryModel.findById(id);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto);
  }

  remove(id: string) {
    return this.categoryModel.findByIdAndDelete(id);
  }
}
