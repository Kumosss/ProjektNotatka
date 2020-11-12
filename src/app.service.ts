import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  getHello(req: Request): { message: string; headers: any } {
    return {
      message: 'Hello World!!',
      headers: req.headers
    };
  }
}
