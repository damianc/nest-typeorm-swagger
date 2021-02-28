import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LinkController } from './link.controller';
import { LinkEntity } from './link.entity';
import { LinkService } from './link.service';

@Module({
  imports: [TypeOrmModule.forFeature([LinkEntity])],
  controllers: [LinkController],
  providers: [LinkService]
})
export class LinkModule {}
