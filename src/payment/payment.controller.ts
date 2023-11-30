import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { MakePaymentDto } from './dto/make-payment.dto';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { ApiOkResponse } from '@nestjs/swagger';
import { MakePaymentResponse } from './types';
import { CheckPaymentDto } from './dto/check-payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @ApiOkResponse({ type: MakePaymentResponse })
  @UseGuards(AuthenticatedGuard)
  @Post()
  makePayment(@Body() dto: MakePaymentDto) {
    return this.paymentService.makePayment(dto);
  }

  @UseGuards(AuthenticatedGuard)
  @Post('/info')
  checkPayment(@Body() dto: CheckPaymentDto) {
    return this.paymentService.checkPayment(dto);
  }
}
