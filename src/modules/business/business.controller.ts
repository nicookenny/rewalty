import { Body, Controller, Post } from '@nestjs/common';
import { RegisterBusinessController } from './infra/controllers/register-business.controller';

@Controller('business')
export class BusinessController {
  constructor(
    private readonly registerBusinessController: RegisterBusinessController,
  ) {}

  @Post('/')
  async registerBusiness(@Body() body: any) {
    return this.registerBusinessController.execute(body);
  }
}
