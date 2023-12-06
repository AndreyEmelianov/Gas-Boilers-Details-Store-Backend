import { ForbiddenException, Injectable } from '@nestjs/common';
import { MakePaymentDto } from './dto/make-payment.dto';
import { CheckPaymentDto } from './dto/check-payment.dto';
import axios from 'axios';

@Injectable()
export class PaymentService {
  async makePayment(dto: MakePaymentDto) {
    try {
      const { data } = await axios({
        method: 'POST',
        url: 'https://api.yookassa.ru/v3/payments',
        headers: {
          'Content-Type': 'application/json',
          'Idempotence-Key': Date.now(),
        },
        auth: {
          username: '278408',
          password: process.env.UKASSA_KEY,
        },
        data: {
          amount: {
            value: dto.amount,
            currency: 'RUB',
          },
          capture: true,
          confirmation: {
            type: 'redirect',
            return_url: 'http://localhost:3001/order',
          },
          description: dto.description,
        },
      });

      return data;
    } catch (err) {
      throw new ForbiddenException(err);
    }
  }

  async checkPayment(dto: CheckPaymentDto) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://api.yookassa.ru/v3/payments/${dto.paymentId}`,
        auth: {
          username: '278408',
          password: process.env.UKASSA_KEY,
        },
      });

      return data;
    } catch (err) {
      throw new ForbiddenException(err);
    }
  }
}
