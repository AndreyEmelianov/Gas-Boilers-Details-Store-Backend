import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { MakePaymentDto } from './dto/make-payment.dto';
import { AuthenticatedGuard } from '../auth/authenticated.guard';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @UseGuards(AuthenticatedGuard)
  @Post()
  makePayment(@Body() dto: MakePaymentDto) {
    return this.paymentService.makePayment(dto);
  }
}
