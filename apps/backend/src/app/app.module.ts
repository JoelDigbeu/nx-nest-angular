import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BackendGroupModule } from '@nx-fullstack/backend/group'
import { BackendMemberModule } from '@nx-fullstack/backend/member'

@Module({
  imports: [BackendGroupModule, BackendMemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
