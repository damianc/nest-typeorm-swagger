import { ApiProperty, PickType } from '@nestjs/swagger';

export class LinkDTO {

  @ApiProperty({ required: false })
  id?: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ example: 'https://site.com', description: 'Include protocol in this field!' })
  url: string;

  @ApiProperty()
  category: string;

}

export class AlterLinkDTO extends PickType(LinkDTO, ['title', 'url', 'category'] as const) {}