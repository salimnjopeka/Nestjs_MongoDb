import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Persons } from 'src/schema/persons.schema';

@Injectable()
export class PersonsService {
  constructor(@InjectModel('Persons') private personModel: Model<Persons>) {}
  
  async create(createPersonDto: CreatePersonDto){
    const newPerson = await new this.personModel(createPersonDto);
    return newPerson.save();
  }

  findAll() {
    return this.personModel.find();
  }

  findOne(id: string) {
    return this.personModel.findById(id);
  }

  update(id: string, updatePersonDto: UpdatePersonDto) {
    return this.personModel.findByIdAndUpdate(id, updatePersonDto, {new:true});
  }

  remove(id: string) {
    return this.personModel.findByIdAndDelete(id);
  }
}
