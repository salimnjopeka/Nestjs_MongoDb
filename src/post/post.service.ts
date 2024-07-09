import { HttpException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/schema/post.schema';
import { Persons } from 'src/schema/persons.schema';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private postModel: Model<Post>, @InjectModel('Persons') private personModel: Model<Persons>) {}

  async create({personId, ...createPostDto}: CreatePostDto) {
    const findPerson = await this.personModel.findById(personId);
    if(!findPerson) throw new HttpException('Person Not found', 404);
    const newPost = new this.postModel(createPostDto);
    const savedPost = await newPost.save();
    await findPerson.updateOne({
      $push: {
        post: savedPost._id,
      },
    });
    return savedPost;
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
