import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AppService {
  getHello(res: Response): { message: string; status: string } {
    return {
      message: 'Hello World!!',
      status: res.status.toLocaleString(),
    };
  }
}
