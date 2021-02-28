import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiQuery, ApiOperation, ApiParam, OmitType } from '@nestjs/swagger';
import { LinkService } from './link.service';
import { ILink } from './link.interface';
import { LinkDTO, AlterLinkDTO } from './link.model';

@ApiTags('Link')
@Controller('links')
export class LinkController {

  constructor(
    private readonly linkService: LinkService
  ) {}

  @ApiOperation({ summary: 'Get all links' })
  @Get()
  async list() {
    return await this.linkService.findAll();
  }

  @ApiOperation({ summary: 'Get the particular link' })
  @Get(':id')
  async get(@Param('id') id: number) {
    return await this.linkService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a new link' })
  @Post()
  async create(@Body() payload: AlterLinkDTO) {
    return await this.linkService.create(payload);
  }

  @ApiOperation({ summary: 'Update an existing link' })
  @Put(':id')
  async update(@Param('id') id: number, @Body() payload: AlterLinkDTO) {
    return await this.linkService.update(id, payload);
  }

  @ApiOperation({ summary: 'Delete the particular link' })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.linkService.delete(id);
  }

}