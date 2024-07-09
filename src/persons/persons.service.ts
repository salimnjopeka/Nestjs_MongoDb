import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Persons } from 'src/schema/persons.schema';
import { PersonSetting } from 'src/schema/personSetting.schema';

@Injectable()
export class PersonsService {
  constructor(@InjectModel('Persons') private personModel: Model<Persons>, @InjectModel('PersonSetting') private personSettingModel: Model<PersonSetting>) {}
  
  async create({settings, ...createPersonDto}: CreatePersonDto){
    if (settings) {
      const newPersonSetting = new this.personSettingModel(settings);
      const savedPersonSetting = await newPersonSetting.save();
      const newPerson = new this.personModel({...createPersonDto, settings: savedPersonSetting._id});
      return newPerson.save();
    }
    const newPerson = new this.personModel(createPersonDto);
    return newPerson.save();
  }

  findAll() {
    return this.personModel.find().populate(['settings', 'post']);
  }

  findOne(id: string) {
    return this.personModel.findById(id).populate(['settings', 'post']);
  }

  update(id: string, updatePersonDto: UpdatePersonDto) {
    return this.personModel.findByIdAndUpdate(id, updatePersonDto, {new:true});
  }

  remove(id: string) {
    return this.personModel.findByIdAndDelete(id);
  }
}
