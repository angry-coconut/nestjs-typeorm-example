import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
