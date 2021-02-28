import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult, InsertResult } from 'typeorm';
import { LinkEntity } from './link.entity';
import { ILink } from './link.interface';

@Injectable()
export class LinkService {

  constructor(
    @InjectRepository(LinkEntity)
    private readonly linkRepository: Repository<LinkEntity>
  ) {}

  async findAll(): Promise<LinkEntity[]> {
    return await this.linkRepository.find();
  }

  async findOne(id: number): Promise<LinkEntity> {
    return await this.linkRepository.findOne({ id });
  }

  async create(payload: ILink): Promise<InsertResult> {
    const newLink = new LinkEntity(payload);

    return await this.linkRepository.insert(newLink);
  }

  async update(id: number, payload: ILink): Promise<UpdateResult> {
    const toUpdate = this.linkRepository.findOne({ id });
    const updated = { ...toUpdate, ...payload, id };

    return await this.linkRepository.update(id, updated);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.linkRepository.delete({ id });
  }

}