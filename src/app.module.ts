import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

// import { AppController } from './app.controller';
import { LinkModule } from './link/link.module';

@Module({
  imports: [TypeOrmModule.forRoot(), LinkModule],
  // controllers: [AppController],
  providers: []
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
