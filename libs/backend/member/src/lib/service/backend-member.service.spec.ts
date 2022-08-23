import { Test } from '@nestjs/testing'
import { BackendMemberService } from './backend-member.service'

describe('BackendMemberService', () => {
  let service: BackendMemberService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendMemberService],
    }).compile()

    service = module.get(BackendMemberService)
  })

  it('should be defined', () => {
    expect(service).toBeTruthy()
  })
})
