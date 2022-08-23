import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BackendGroupModule } from '@nx-fullstack/backend/group'
import { BackendMemberModule } from '@nx-fullstack/backend/member'
import { BackendCoreModule } from '@nx-fullstack/backend/core'

@Module({
  imports: [BackendGroupModule, BackendMemberModule, BackendCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
